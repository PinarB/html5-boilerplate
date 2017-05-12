console.log('Hello world!');

$(document).ready(function() {
	console.log('ready');
});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	console.log('scroll');
});


$( ".homeButton" ).click(function() {
  $('.pagecontent div').hide();
  $('.pagecontent .home').show();
});

$( ".timelineButton" ).click(function() {
  $('.pagecontent div').hide();
  $('.pagecontent .timeline').show();
  $('.pagecontent .timeline .words').show();
  $('.pagecontent .timeline .words .hsstuff').show();
  $('.pagecontent .timeline .words .clarkstuff').show();
});

$( ".skillsButton" ).click(function() {
  $('.pagecontent div').hide();
  $('.pagecontent .skills').show();
});

$( ".infoButton" ).click(function() {
  $('.pagecontent div').hide();
  $('.pagecontent .moreinfo').show();
});

