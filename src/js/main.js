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

$('.contactButton').click(function() {
	window.location.href='mailto:pin.barlas@gmail.com'
});


$( ".homeButton" ).click(function() {
  $('.pagecontent div').hide();
  $('h1').removeClass('scrolled');
  $('.pagecontent .home').show();
});

$( ".infoButton" ).click(function() {
  $('.pagecontent div').hide();
  $('h1').removeClass('scrolled');
  $('.pagecontent .moreinfo').show();
});

$( ".timelineButton" ).click(function() {
  $('.pagecontent div').hide();
  $('.pagecontent .timeline').show();
  $('.pagecontent .timeline .words').show();
  $('.pagecontent .timeline .words .hsstuff').show();
  $('.pagecontent .timeline .words .clarkstuff').show();
  $('h1').addClass('scrolled');
});

$( ".skillsButton" ).click(function() {
  $('.pagecontent div').hide();
  $('h1').removeClass('scrolled');
  $('.pagecontent .skills').show();
});

