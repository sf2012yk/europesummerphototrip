document.addEventListener('DOMContentLoaded', () => {

  // ★ 初期タブ（active）のブロックに loaded を付ける
  const firstBtn = document.querySelector('.time-btn_visit.active');
  if (firstBtn) {
    const target = firstBtn.dataset.target;
    const activeBlock = document.getElementById(target);
    const items = activeBlock.querySelectorAll('.flex_images_Visit');

    setTimeout(() => {
      items.forEach(item => item.classList.add('loaded'));
    }, 50);

    // 初期カテゴリブロックを記録
    window._lastCategoryBlock = firstBtn.closest('.mb_2em');
  }

  // タブ切り替え処理
  document.querySelectorAll('.time-btn_visit').forEach(btn => {
    btn.addEventListener('click', () => {

      // 今押したカテゴリブロック（UK or EU）
      const currentCategoryBlock = btn.closest('.mb_2em');
      const previousCategoryBlock = window._lastCategoryBlock || null;

      // ボタン切り替え
      document.querySelectorAll('.time-btn_visit').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // ギャラリー切り替え
      const target = btn.dataset.target;
      document.querySelectorAll('.gallery-block_visit').forEach(block => {
        block.style.display = (block.id === target) ? 'block' : 'none';
      });

      // ★ フェード再発火
      const activeBlock = document.getElementById(target);
      const items = activeBlock.querySelectorAll('.flex_images_Visit');

      items.forEach(item => item.classList.remove('loaded'));
      setTimeout(() => {
        items.forEach(item => item.classList.add('loaded'));
      }, 50);

      // ★ カテゴリが変わったときだけスクロール位置を調整
      if (previousCategoryBlock && previousCategoryBlock !== currentCategoryBlock) {

        // 押したタブの親ブロックの位置へ戻す
        const blockTop = currentCategoryBlock.offsetTop;

        window.scrollTo({
          top: blockTop - 10,
          behavior: 'smooth'
        });
      }

      // 今回のカテゴリブロックを記録
      window._lastCategoryBlock = currentCategoryBlock;

    });
  });

});
