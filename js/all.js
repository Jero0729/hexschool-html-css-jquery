$(document).ready(function () {    
//下拉選單
$(".list>li>a").click(function (event) {
  event.preventDefault();
      $(this).parent().find('.listopen').slideToggle();
      $(this).parent().siblings().find('.listopen').slideUp();
});

//backtotop效果
$(".backtotop").click(function (event) {
  event.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

//swiper
const swiper = new Swiper('.swiper-container', {
  //基本設定
    loop: true,
    effect : 'cube',
    speed: 400, 
  //自動  
    autoplay: {
    delay: 3000,
    disableOnInteraction:false,
    },
  //箭頭
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },    
  //小點提示  
    pagination: {
    el: ".swiper-pagination"
    }           
});

//lightbox
lightbox.option({
  resizeDuration: 600,
  wrapAround: true,
  positionFromTop: 250,        
});

});