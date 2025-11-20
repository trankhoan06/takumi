$('.service_result_item_btn').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).find('.result_arrow').toggleClass("active")
  $(this).closest('.service_result_item').find('.service_result_item_content_wrap').slideToggle();
});