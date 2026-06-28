document.querySelectorAll('.time-btn_visit').forEach(btn => {
  btn.addEventListener('click', () => {

    // ボタン切り替え
    document.querySelectorAll('.time-btn_visit').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // ギャラリー切り替え
    const target = btn.dataset.target;
    document.querySelectorAll('.gallery-block').forEach(block => {
      block.style.display = (block.id === target) ? 'block' : 'none';
    });

    // ページネーションをリセット
    currentPage = 1;
    createPages();
    update();
  });
});
