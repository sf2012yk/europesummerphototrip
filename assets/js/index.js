// Jクエリで戻りボタンをクリックしたときの動きを・・・（back_top)
$(function () {
  $("#back_top").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
        $("#back_top").fadeIn(1000);
      } else {
        $("#back_top").fadeOut();
      }
    });
    $("#back_top").click(function() {
        $("body,html").animate({scrollTop: 0}, 500);
        return false;

    });

  });

//Jクエリで、スクロールしたら文字が次々表示（scroll）
$(function (){
 $(window).scroll(function() {
  const wHeight = $(window).height();
  const scrollPosition = $(window).scrollTop();
 $('.scroll').each(function(){
  const targetPosition = $(this).offset().top;
  if(scrollPosition > targetPosition -wHeight +60) {
    $(this).addClass("fadeInDown");
  }

});

});

});

//Jクエリでスマホメニューの開閉を操作する
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        } 
      
    });
});

//メニュー内を閉じておく
$(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
       $('.hamburger').removeClass('active');

    });
  });

//ポップアップ表示のJクエリ（全て共通）
$(function() {
$('.js-open-button').on('click',function(e){
e.preventDefault();
var target =$(this).data('target');
$(target).fadeIn();
});
$('.js-close-button').on('click',function(e){
e.preventDefault();
var target =$(this).data('target');
$(target).fadeOut();
});
});
