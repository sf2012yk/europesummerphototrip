document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".Visit_wrapper").forEach(wrapper => {

    const container = wrapper.querySelector(".Visit_item_info");
    const cards     = wrapper.querySelectorAll(".flex_images_Visit");
    const prevBtn   = wrapper.querySelector(".Visit_prev");
    const nextBtn   = wrapper.querySelector(".Visit_next");

    if (!container || cards.length === 0) return;

    /*----------------------------------
      見える枚数（あなたのロジックをそのまま使用）
    ----------------------------------*/
    function getPageSize() {
      const w = window.innerWidth;
      if (w <= 541)  return 1;
      if (w <= 1100) return 2;
      return 3;
    }

    /*----------------------------------
      ★ 1カードの実幅を取得（ズレゼロの要）
    ----------------------------------*/
    function getCardStep() {
      const card = cards[0];
      const style = window.getComputedStyle(card);
      const marginRight = parseFloat(style.marginRight);
      return card.getBoundingClientRect().width + marginRight;
    }

    /*----------------------------------
      ★ 本当のページ幅
         container ではなく
         「カード幅×ページ枚数」
    ----------------------------------*/
    function getPageWidth() {
      return getCardStep() * getPageSize();
    }

    function getTotalPages() {
      return Math.ceil(cards.length / getPageSize());
    }

    let currentPage = 0;

    function goTo(page) {
      const total = getTotalPages();
      currentPage = Math.max(0, Math.min(page, total - 1));

      const target = getPageWidth() * currentPage;

      container.scrollTo({
        left: target,
        behavior: "smooth"
      });

      updateArrows();
    }

    function updateArrows() {
      const total = getTotalPages();
      prevBtn.classList.toggle("disabled", currentPage <= 0);
      nextBtn.classList.toggle("disabled", currentPage >= total - 1);
    }

    prevBtn.addEventListener("click", () => goTo(currentPage - 1));
    nextBtn.addEventListener("click", () => goTo(currentPage + 1));

    /*----------------------------------
      スワイプ操作（そのまま）
    ----------------------------------*/
    let isDown = false;
    let startX = 0;
    const threshold = 50;

    function startDrag(x) {
      isDown = true;
      startX = x;
    }
    function moveDrag(x) {
      if (!isDown) return;
      const diff = x - startX;
      if (Math.abs(diff) > threshold) {
        if (diff < 0) goTo(currentPage + 1);
        else          goTo(currentPage - 1);
        isDown = false;
      }
    }
    function endDrag() {
      isDown = false;
    }

    container.addEventListener("mousedown", e => startDrag(e.clientX));
    container.addEventListener("mousemove", e => moveDrag(e.clientX));
    container.addEventListener("mouseup", endDrag);
    container.addEventListener("mouseleave", endDrag);

    container.addEventListener("touchstart", e => startDrag(e.touches[0].clientX), { passive: true });
    container.addEventListener("touchmove",  e => moveDrag(e.touches[0].clientX), { passive: true });
    container.addEventListener("touchend", endDrag);

    window.addEventListener("resize", () => {
      currentPage = Math.min(currentPage, getTotalPages() - 1);
      goTo(currentPage);
    });

    updateArrows();
    goTo(0);

  });
});