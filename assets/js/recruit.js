$('.recruit_interview_info_button').on('click', function() {
     var interviewId = this.getAttribute('data-interview');
  $('.recruit_interview_model[data-interview="' + interviewId + '"]').addClass('active');
});

$('.recruit_interview_model_button').on('click', function() {
  $('.recruit_interview_model').removeClass('active');
});
$('.recruit_interview_model_overlay').on('click', function() {
  $('.recruit_interview_model').removeClass('active');
});
$('.recruit_jobdes_item_icon ').on('click', function() {
    var jobId = this.getAttribute('data-job');
  $('.recruit_interview_model[data-job="' + jobId + '"]').addClass('active');
});