//ハンバーガーメニューPC版

$(document).ready(function () {
 if (window.matchMedia('(min-width: 1101px)').matches) {
 $('.header_item > a').on('click', function (e) {
 e.preventDefault(); // リンクの遷移を防ぐ

   const $menu = $(this).siblings('.megaMenu');

   // 他のメニューを閉じる
   $('.megaMenu').not($menu).slideUp();

   // 現在のメニューをトグル
   $menu.stop(true, true).slideToggle(500);
 });

 // メニュー外をクリックしたら閉じる
 $(document).on('click', function (e) {
   if (!$(e.target).closest('.header_item').length) {
    $('.megaMenu').slideUp();
    }
 });
 }
});


//ハンバーガーメニュー　スマホ版

$(document).ready(function() {
  if (window.matchMedia('(max-width: 1100px)').matches) {
    $('.megaMenu_item > a').on('click', function(e) {
      e.preventDefault();

      const $item = $(this).parent();
      const $submenu = $item.find('.megaMenu');

      if ($submenu.length) {
        // 他のメニューを閉じる
        $('.megaMenu_item').not($item).removeClass('open').find('.megaMenu').slideUp(300);

        // このメニューを開閉
        $item.toggleClass('open');
        $submenu.stop().slideToggle(300);
      }
    });
  }
});


