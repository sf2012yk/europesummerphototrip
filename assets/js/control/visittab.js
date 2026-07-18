document.addEventListener('DOMContentLoaded', () => {

  // ★ 初期タブ（active）のブロックに loaded を付ける
  const firstBtn = document.querySelector('.time-btn_visit.active');
  if (firstBtn) {
    const target = firstBtn.dataset.target;
    const activeBlock = document.getElementById(target);

    activeBlock.classList.add('active'); // ← 初期表示

    const items = activeBlock.querySelectorAll('.flex_images_Visit');
    setTimeout(() => {
      items.forEach(item => item.classList.add('loaded'));
    }, 50);

    window._lastCategoryBlock = firstBtn.closest('.mb_2em');
  }

  // タブ切り替え処理
  document.querySelectorAll('.time-btn_visit').forEach(btn => {
    btn.addEventListener('click', () => {

      const currentCategoryBlock = btn.closest('.mb_2em');
      const previousCategoryBlock = window._lastCategoryBlock || null;

      // ボタン切り替え
      document.querySelectorAll('.time-btn_visit').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // ギャラリー切り替え（display:none → active クラス）
      const target = btn.dataset.target;
      document.querySelectorAll('.gallery-block_visit').forEach(block => {
        if (block.id === target) {
          block.classList.add('active');
        } else {
          block.classList.remove('active');
        }
      });

      // フェード再発火
      const activeBlock = document.getElementById(target);
      const items = activeBlock.querySelectorAll('.flex_images_Visit');

      items.forEach(item => item.classList.remove('loaded'));
      setTimeout(() => {
        items.forEach(item => item.classList.add('loaded'));
      }, 50);

      // ★ カテゴリが変わったときだけスクロール位置を調整
      if (previousCategoryBlock && previousCategoryBlock !== currentCategoryBlock) {
        const blockTop = currentCategoryBlock.offsetTop;
        window.scrollTo({
          top: blockTop - 10,
          behavior: 'smooth'
        });
      }

      window._lastCategoryBlock = currentCategoryBlock;

    });
  });

});
