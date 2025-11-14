const parseRem = (input) => {
  return (input / 10) * parseFloat(getComputedStyle(document.querySelector('html')).fontSize)
}
  const viewport = {
        w: window.innerWidth,
        h: window.innerHeight,
    };

    $('.header_menu_mb').on('click', function() {
  $('.header_menu').addClass('active');
});

$('.header_menu_icon').on('click', function() {
  $('.header_menu').removeClass('active');
});