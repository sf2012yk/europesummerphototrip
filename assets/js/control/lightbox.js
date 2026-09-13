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
    
    // 開くときは先にコンテナを表示させてから画像をセットする
    lightbox.style.display = 'flex';
    lightbox.classList.add('open');
    showImage();
  });
});

// ★ ここを大幅に修正しました
function showImage() {
  const link = links[currentIndex];
  const newSrc = link.getAttribute('href');

  // 1. すでに画像が表示されている場合（矢印クリック時など）は、まずフェードアウト
  if (lightboxImg.classList.contains('show')) {
    lightboxImg.classList.remove('show');
    
    // CSSの transition (.25s) が終わるのを待ってから中身を切り替える
    setTimeout(() => {
      updateLightboxContent(newSrc, link.dataset.caption);
    }, 250); 
  } else {
    // 初めてライトボックスを開くときは待たずに即時セット
    updateLightboxContent(newSrc, link.dataset.caption);
  }
}

// 画像とキャプションの中身を書き換えてフェードインさせる共通関数
function updateLightboxContent(src, captionText) {
  lightboxImg.src = src;
  caption.innerHTML = captionText || "";

  // 画像の読み込み完了を待ってから、確実に次のフレームでshowを付与
  lightboxImg.onload = () => {
    requestAnimationFrame(() => {
      lightboxImg.classList.add('show');
    });
  };

  // キャッシュ対策：すでに読み込み完了している場合は手動でshowを付ける
  if (lightboxImg.complete) {
    requestAnimationFrame(() => {
      lightboxImg.classList.add('show');
    });
  }
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

// 閉じる（スムーズなフェードアウト）
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.classList.add('close');
  lightboxImg.classList.remove('show'); // 閉じるときに画像も一緒にフェードアウトさせる

  setTimeout(() => {
    lightbox.style.display = 'none';
    lightbox.classList.remove('close');
  }, 250);
}

// ※重複していた closeBtn.addEventListener('click', closeLightbox); は1つにまとめました
closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});