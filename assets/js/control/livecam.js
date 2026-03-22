const links = document.querySelectorAll('.photo_container .item a');

const lightbox = document.getElementById('livecam_box');
const lightboxImg = document.querySelector('.livecam_box_img');
const caption = document.querySelector('.livecam_caption');
const closeBtn = document.querySelector('.livecam_box_close');

const LiveprevBtn = document.querySelector('.livecam_prev');
const LivenextBtn = document.querySelector('.livecam_next');

let currentIndex = 0;

// 画像を開く
links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
    lightbox.classList.add('open');
  });
});


function showImage() {
  const link = links[currentIndex];
  const newSrc = link.getAttribute('href');

  // いったん透明に
  lightboxImg.classList.remove('show');

  // 画像切り替え
  lightboxImg.src = newSrc;
  caption.innerHTML = link.dataset.caption || "";

  // ★ ここが最重要：次のフレームで show を付ける
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      lightboxImg.classList.add('show');
    });
  });
}


// 前へ
LiveprevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + links.length) % links.length;
  showImage();
});

// 次へ
LivenextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % links.length;
  showImage();
});

// 閉じる
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// 背景クリックで閉じる
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// 閉じる（スムーズなフェードアウト）
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.classList.add('close');

  // アニメーション終了後に display:none
  setTimeout(() => {
    lightbox.style.display = 'none';
    lightbox.classList.remove('close');
  }, 250); // ← fadeOut と同じ時間
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});