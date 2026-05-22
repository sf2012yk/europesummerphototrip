const items = Array.from(document.querySelectorAll(".photo_wrap .item"));
const container = document.querySelector(".photo_container");

// 元の photo_wrap を削除
document.querySelector(".photo_wrap").remove();

// スライダー用の track を作成
const track = document.createElement("div");
track.className = "slider-track";
container.appendChild(track);

let currentPage = 1;

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageStrip = document.getElementById("page-strip");

// PC・スマホともに6枚
function getItemsPerPage() {
  return 6;
}

// -----------------------------
// ページ生成
// -----------------------------
function createPages() {
  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);

  track.innerHTML = "";

  for (let i = 0; i < totalPages; i++) {
    const page = document.createElement("div");
    page.className = "photo_wrap";

    const slice = items.slice(i * itemsPerPage, (i + 1) * itemsPerPage);
    slice.forEach(item => page.appendChild(item));

    track.appendChild(page);
  }
}

// -----------------------------
// スライド移動
// -----------------------------
function slideTo(page) {
  const width = container.clientWidth;
  track.style.transform = `translateX(-${(page - 1) * width}px)`;
}

// -----------------------------
// ページ番号ボタン生成
// -----------------------------
function renderPagination() {
  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);
  pageStrip.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn";
    btn.textContent = i;

    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentPage = i;
      update();
    });

    pageStrip.appendChild(btn);
  }
}

// -----------------------------
// 前へ / 次へ ボタン制御
// -----------------------------
function updateArrows() {
  const perPage = getItemsPerPage();
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(items.length / perPage);
}

// -----------------------------
// 全体更新
// -----------------------------
function update() {
  slideTo(currentPage);
  renderPagination();
  updateArrows();
}

// -----------------------------
// ボタンイベント
// -----------------------------
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    update();
  }
});

nextBtn.addEventListener("click", () => {
  const perPage = getItemsPerPage();
  if (currentPage < Math.ceil(items.length / perPage)) {
    currentPage++;
    update();
  }
});

// 初期化
createPages();
update();

// =============================
// PCのドラッグ（そのまま）
// =============================
let isDragging = false;
let startX_pc = 0;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX_pc = e.clientX;
});

container.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const diffX = e.clientX - startX_pc;
  const perPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / perPage);

  if (Math.abs(diffX) > 50) {
    if (diffX < 0) {
      if (currentPage < totalPages) {
        currentPage++;
      } else {
        currentPage = 1;
      }
    } else {
      if (currentPage > 1) {
        currentPage--;
      } else {
        currentPage = totalPages;
      }
    }
    update();
    isDragging = false;
  }
});

container.addEventListener("mouseup", () => {
  isDragging = false;
});

container.addEventListener("mouseleave", () => {
  isDragging = false;
});

// =============================
// スマホのスワイプ
// =============================
let startX = 0;
let startY = 0;
let isScrolling; // true:縦スクロール / false:横スワイプ

container.addEventListener("touchstart", (e) => {
  const t = e.touches[0];
  startX = t.clientX;
  startY = t.clientY;
  isScrolling = undefined;
}, { passive: true });

container.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  const dx = t.clientX - startX;
  const dy = t.clientY - startY;

  // まだ方向が決まっていないときだけ判定
  if (isScrolling === undefined) {
    isScrolling = Math.abs(dy) > Math.abs(dx);
  }

  // 横方向の動きが優勢なときだけ、ブラウザのスクロールを止める
  if (isScrolling === false) {
    e.preventDefault();
  }
}, { passive: false });

container.addEventListener("touchend", (e) => {
  if (isScrolling) {
    // 縦スクロールだった場合は何もしない
    return;
  }

  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  if (Math.abs(diffX) < 50) return; // スワイプ閾値

  const perPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / perPage);

  if (diffX < 0) {
    // 右スワイプ → 次へ
    currentPage = currentPage < totalPages ? currentPage + 1 : 1;
  } else {
    // 左スワイプ → 前へ
    currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
  }

  update();
});

// リサイズ時
window.addEventListener("resize", () => {
  createPages();
  // 今のページ番号は維持したまま位置だけ再計算
  update();
});
