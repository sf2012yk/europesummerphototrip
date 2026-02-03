document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".Visit_item_info");
  const prevBtn = document.querySelector(".Visit_prev");
  const nextBtn = document.querySelector(".Visit_next");

  /* -----------------------------
     ① 画面幅に応じて perPage を決定
  ----------------------------- */
  function getPerPage() {
    const w = window.innerWidth;

    if (w <= 540) return 1;          // スマホ
    if (w <= 1100) return 2;         // タブレット
    return 3;                        // PC
  }

  let perPage = getPerPage();

  /* -----------------------------
     ② 1ページ分の移動量を計算
  ----------------------------- */
  function getStep() {
    const item = container.querySelector(".flex_images_Visit");
    if (!item) return 260 * perPage;

    const itemWidth = item.getBoundingClientRect().width;
    const gap = 12; // CSS の gap と合わせる
    return (itemWidth + gap) * perPage;
  }

  /* -----------------------------
     ③ 矢印の有効/無効を更新
  ----------------------------- */
  function updateArrows() {
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft <= 0) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    if (container.scrollLeft >= maxScroll - 2) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  /* -----------------------------
     ④ 左右ボタン
  ----------------------------- */
  prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -getStep(), behavior: "smooth" });
    setTimeout(updateArrows, 350);
  });

  nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: getStep(), behavior: "smooth" });
    setTimeout(updateArrows, 350);
  });

  /* -----------------------------
     ⑤ ドラッグ / スワイプ
  ----------------------------- */
  let isDown = false;
  let startX;
  let scrollLeft;
  let moved = false;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    moved = false;
    container.classList.add("dragging");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("dragging");
    snapToPage();
    setTimeout(updateArrows, 350);
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.2;
    if (Math.abs(walk) > 5) moved = true;
    container.scrollLeft = scrollLeft - walk;
  });

  /* -----------------------------
     ⑥ クリックキャンセル
  ----------------------------- */
  container.addEventListener("click", function(e) {
    if (moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  /* -----------------------------
     ⑦ タッチ（スマホ）
  ----------------------------- */
  container.addEventListener("touchstart", (e) => {
    isDown = true;
    moved = false;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  }, { passive: true });

  container.addEventListener("touchend", () => {
    isDown = false;
    snapToPage();
    setTimeout(updateArrows, 350);
  });

  container.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.2;
    if (Math.abs(walk) > 5) moved = true;
    container.scrollLeft = scrollLeft - walk;
  }, { passive: true });

  /* -----------------------------
     ⑧ 3 / 2 / 1 枚単位でスナップ
  ----------------------------- */
  function snapToPage() {
    const item = container.querySelector(".flex_images_Visit");
    if (!item) return;

    const itemWidth = item.getBoundingClientRect().width + 12; // gap込み
    const current = container.scrollLeft;

    // 何枚目に近いか
    const index = Math.round(current / itemWidth);

    // perPage に応じたページ番号
    const page = Math.floor(index / perPage);

    const target = page * itemWidth * perPage;

    container.scrollTo({
      left: target,
      behavior: "smooth"
    });
  }

  /* -----------------------------
     ⑨ 画面サイズ変更時の再計算
  ----------------------------- */
  window.addEventListener("resize", () => {
    perPage = getPerPage();
    snapToPage();
    updateArrows();
  });

  /* 初期状態の矢印更新 */
  updateArrows();
});