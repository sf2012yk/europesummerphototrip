const swiper = new Swiper(".swiper", {
// 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1, //コンテナ内に表示するスライド数
  loop: true, //繰り返しをする
  loopAdditionalSlides: 1, //無限ループで複製するスライド数
  centeredSlides: true, //アクティブなスライドを中央に表示
  spaceBetween: 16, //スライド間の距離を16pxに
  speed: 600, //スライドの推移時間を600msに

  autoplay: {
    delay: 4000, //次スライドに切り替える時間
    disableOnInteraction: false, // ユーザーが操作しても自動再生する。
    type: "bullets" //デフォルト
  },

  pagination: {
    el: ".swiper-pagination", //必須
    //使いたいパラメータを追加する
    clickable: true, //クリックによるスライド切り替え有効
    type: "bullets" //デフォルト
  },
});