$(document).ready(function(){
  $('.menu__icon').click(function(){
    $('.topmenu').slideToggle();
  });
  $('.submenu__link-first').click(function(){
    $('.menu__second').slideToggle();
  });
  $('.submenu__link-second').click(function(){
    $('.menu__third').slideToggle();
  });
  
  $('.main__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});