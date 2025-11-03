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


//ハンバーガーメニュースマホ版
$(document).ready(function() {
 if (window.matchMedia('(max-width: 1100px)').matches) {
 $('.megaMenu_item > a').on('click', function(e) { 
  var $parent = $(this).parent();
  var $submenu = $parent.find('.megaMenu');

  if ($submenu.length) {
    e.preventDefault(); // リンクの遷移を防ぐ
    $parent.toggleClass('open');
    $submenu.slideToggle(300); // アニメーション付きで開閉
  }
  });
  }
});

//ハンバーガーサブメニューが縦に展開されるようにする（スマホ版）
$(document).ready(function() {
  $('.megaMenu_item > a').on('click', function(e) {
    e.preventDefault();

    const $item = $(this).parent();

    // 他のメニューを閉じる
    $('.megaMenu_item').not($item).removeClass('open');

    // クリックしたメニューを開閉
    $item.toggleClass('open');
  });
});
