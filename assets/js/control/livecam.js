const links = document.querySelectorAll('.item a');
const lightbox = document.getElementById('livecam_box');
const lightboxImg = document.querySelector('.livecam_box_img');
const caption = document.querySelector('.livecam_caption');
const closeBtn = document.querySelector('.livecam_box_close');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // ← ページ遷移を止める
    lightbox.style.display = 'flex';

    lightboxImg.src = link.getAttribute('href');
    caption.innerHTML = link.dataset.caption || "";
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});