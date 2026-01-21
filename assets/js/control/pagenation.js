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
  return window.innerWidth <= 1100 ? 6 : 6;
}

// -----------------------------
// ページ生成
// -----------------------------
function createPages() {
  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);

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

//PCのタッチイベント
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
      // 右にスワイプ → 次へ
      const perPage = getItemsPerPage();
      const totalPages = Math.ceil(items.length / perPage);

      if (currentPage < totalPages) {
        currentPage++;
      } else {
        currentPage = 1; // ← 最後なら1に戻す
      }
      update();
    } else if (diffX > 0) {
      // 左にスワイプ → 前へ
      if (currentPage > 1) {
        currentPage--;
      } else {
        currentPage = totalPages; // ← 最初なら最後へ飛ばす（循環）
      }
      update();
    }
    isDragging = false;
}

});

container.addEventListener("mouseup", () => {
  isDragging = false;
});

container.addEventListener("mouseleave", () => {
  isDragging = false;
});

//スマホのタッチイベント
let startX = 0;
let isSwiping = false;

container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

container.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;
  const currentX = e.touches[0].clientX;
  const diffX = currentX - startX;

  const perPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / perPage);

  if (Math.abs(diffX) > 50) {
    if (diffX < 0) {
      // 右にスワイプ → 次へ
      const perPage = getItemsPerPage();
      const totalPages = Math.ceil(items.length / perPage);

      if (currentPage < totalPages) {
        currentPage++;
      } else {
        currentPage = 1; // ← 最後なら1に戻す
      }
      update();
    } else if (diffX > 0) {
      // 左にスワイプ → 前へ
      if (currentPage > 1) {
        currentPage--;
      } else {
        currentPage = totalPages; // ← 最初なら最後へ飛ばす（循環）
      }
      update();
    }
    isSwiping = false;
}
});

container.addEventListener("touchend", () => {
  isSwiping = false;
});

window.addEventListener("resize", () => {
  // ページを作り直す
  track.innerHTML = "";
  currentPage = 1;
  createPages();
  update();
});


// -----------------------------
// 自動スクロール（3秒ごと）
// -----------------------------
let autoScroll = setInterval(() => {
  const perPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / perPage);

  if (currentPage < totalPages) {
    currentPage++;
  } else {
    currentPage = 1; // 最後まで行ったら先頭に戻る
  }

  update();
}, 3000); // 3秒

//手動操作したとき、スクロールを止める
function stopAutoScroll() {
  clearInterval(autoScroll);
}

function startAutoScroll() {
  autoScroll = setInterval(() => {
    const perPage = getItemsPerPage();
    const totalPages = Math.ceil(items.length / perPage);

    if (currentPage < totalPages) {
      currentPage++;
    } else {
      currentPage = 1;
    }
    update();
  }, 3000);
}

// マウス・タッチ操作を検知して停止
container.addEventListener("mousedown", stopAutoScroll);
container.addEventListener("mouseup", startAutoScroll);
container.addEventListener("touchstart", stopAutoScroll);
container.addEventListener("touchend", startAutoScroll);
