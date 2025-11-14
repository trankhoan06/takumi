$('#check').on('change', function() {
    if ($(this).is(':checked')) {
        $('.contact_form_submit').addClass('active');
    } else {
        $('.contact_form_submit').removeClass('active');
    }
});