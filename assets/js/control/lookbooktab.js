document.addEventListener('DOMContentLoaded', () => {
  const firstBtn = document.querySelector('.time-btn.active') 
                || document.querySelector('.time-btn');

  if (firstBtn) {
    firstBtn.click();

    const target = firstBtn.dataset.target;
    const activeBlock = document.getElementById(target);
    const imgs = activeBlock.querySelectorAll('img');

    activeBlock.offsetHeight;

    setTimeout(() => {
      imgs.forEach(img => img.classList.add('loaded'));
    }, 50);
  }
});



  // ここから下は今のクリック用の処理（そのままでOK）
  document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', () => {

      document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.target;
      // ギャラリー切り替え
      document.querySelectorAll('.gallery-block').forEach(block => {
        if (block.id === target) {
          block.classList.add('active');
        } else {
          block.classList.remove('active');
        }
      });

      const activeBlock = document.getElementById(target);

      // ★ grid のレイアウトを確定させる（最重要）
      activeBlock.offsetHeight; // ← 強制リフロー

      // ★ フェード再発火（item-img ではなく item に付けると滑らか）
      const items = activeBlock.querySelectorAll('.item-img');

      // ① loaded を外す
      items.forEach(item => item.classList.remove('loaded'));

      // ② レイアウト確定後に loaded を付ける
      setTimeout(() => {
        items.forEach(item => item.classList.add('loaded'));
      }, 50); // ← ここが London_Area の最適値

    });
  });
