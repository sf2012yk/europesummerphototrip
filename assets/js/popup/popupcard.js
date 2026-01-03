document.querySelectorAll('.item-img').forEach(img => {
  const popup = img.parentElement.querySelector('.popup-card');
  let pressTimer;

  // PCホバーはCSSで対応済み

  // スマホ長押し
  img.addEventListener('touchstart', () => {
    pressTimer = setTimeout(() => {
      popup.style.display = 'block';
    }, 600); // 600msで長押し判定
  });

  img.addEventListener('touchend', () => {
    clearTimeout(pressTimer);
  });

  // タップで閉じる（任意）
  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});