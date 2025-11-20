$('#check').on('change', function() {
    if ($(this).is(':checked')) {
        $('.contact_form_submit').addClass('active');
    } else {
        $('.contact_form_submit').removeClass('active');
    }
});

$('.contact_model_button').on('click', function() {
  $('.contact_model').removeClass('active');
});
$('.contact_model_overlay').on('click', function() {
  $('.contact_model').removeClass('active');
});
$('.contact_form_policy strong').on('click', function() {
  $('.contact_model').addClass('active');
});