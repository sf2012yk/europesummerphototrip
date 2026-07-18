document.querySelectorAll('.time-btn').forEach(btn => {
  btn.addEventListener('click', () => {

    // ボタン切り替え
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // ギャラリー切り替え
    const target = btn.dataset.target;
    document.querySelectorAll('.gallery-block').forEach(block => {
      block.style.display = (block.id === target) ? 'block' : 'none';
    });

    // ★ フェードを再発火させる処理
    const activeBlock = document.getElementById(target);
    const imgs = activeBlock.querySelectorAll('img');

    // ① loaded を外す
    imgs.forEach(img => img.classList.remove('loaded'));

    // ② 少し遅らせて loaded を付ける（描画後に発火させるため）
    setTimeout(() => {
      imgs.forEach(img => img.classList.add('loaded'));
    }, 50);

    // ページネーション（必要なら）
    currentPage = 1;
    createPages();
    update();
  });
});

