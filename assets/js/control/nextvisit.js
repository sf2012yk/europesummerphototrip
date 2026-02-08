document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".Visit_wrapper").forEach((wrapper) => {

    const container = wrapper.querySelector(".Visit_item_info");
    const prevBtn = wrapper.querySelector(".Visit_prev");
    const nextBtn = wrapper.querySelector(".Visit_next");

    if (!container || !prevBtn || !nextBtn) return;

    /* -----------------------------
       ① perPage（表示枚数）
    ----------------------------- */
    function getPerPage() {
      const w = window.innerWidth;
      return 1;
    }

    let perPage = getPerPage();

    /* -----------------------------
       ② gap を CSS から取得
    ----------------------------- */
    function getGap() {
      const style = window.getComputedStyle(container);
      return parseInt(style.columnGap || style.gap || 12);
    }

    /* -----------------------------
       ③ 1ステップの移動量
    ----------------------------- */
    function getStep() {
      const item = container.querySelector(".flex_images_Visit");
      if (!item) return 260 * perPage;

      const itemWidth = item.getBoundingClientRect().width;
      return (itemWidth + getGap()) * perPage;
    }

    /* -----------------------------
       ④ 矢印の有効/無効
    ----------------------------- */
    function updateArrows() {
      const maxScroll = container.scrollWidth - container.clientWidth;

      prevBtn.classList.toggle("disabled", container.scrollLeft <= 0);
      nextBtn.classList.toggle("disabled", container.scrollLeft >= maxScroll - 2);
    }

    /* -----------------------------
       ⑤ ボタン操作（スナップなし）
    ----------------------------- */
    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -getStep(), behavior: "smooth" });
      setTimeout(updateArrows, 300);
    });

    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: getStep(), behavior: "smooth" });
      setTimeout(updateArrows, 300);
    });

    /* -----------------------------
       ⑥ ドラッグ / スワイプ
    ----------------------------- */
    let isDown = false;
    let startX;
    let scrollLeft;
    let moved = false;

    function startDrag(pageX) {
      isDown = true;
      moved = false;
      container.classList.add("dragging");
      startX = pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    }

    function moveDrag(pageX) {
      if (!isDown) return;
      const x = pageX - container.offsetLeft;
      const walk = (x - startX) * 1.2;
      if (Math.abs(walk) > 5) moved = true;
      container.scrollLeft = scrollLeft - walk;
    }

    function endDrag() {
      isDown = false;
      container.classList.remove("dragging");
      snapToPage();
      setTimeout(updateArrows, 300);
    }

    // マウス
    container.addEventListener("mousedown", (e) => {
      startDrag(e.pageX);
      e.preventDefault();
    });

    container.addEventListener("mousemove", (e) => moveDrag(e.pageX));
    container.addEventListener("mouseup", endDrag);
    container.addEventListener("mouseleave", () => { isDown = false; });

    // タッチ
    container.addEventListener("touchstart", (e) => {
      startDrag(e.touches[0].pageX);
    }, { passive: true });

    container.addEventListener("touchmove", (e) => {
      moveDrag(e.touches[0].pageX);
    }, { passive: true });

    container.addEventListener("touchend", endDrag);

    /* -----------------------------
       ⑦ スナップ処理（ドラッグ時のみ）
    ----------------------------- */
    function snapToPage() {
      const item = container.querySelector(".flex_images_Visit");
      if (!item) return;

      const itemWidth = item.getBoundingClientRect().width + getGap();
      const current = container.scrollLeft;

      const index = Math.round(current / itemWidth);
      const page = Math.floor(index / perPage);

      const target = page * itemWidth * perPage;

      container.scrollTo({
        left: target,
        behavior: "smooth"
      });
    }

    /* -----------------------------
       ⑧ リサイズ対応
    ----------------------------- */
    window.addEventListener("resize", () => {
      perPage = getPerPage();
      snapToPage();
      updateArrows();
    });

    updateArrows();
  });

});