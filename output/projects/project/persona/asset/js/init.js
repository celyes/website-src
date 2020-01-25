jQuery(document).ready(function($){
	$(window).scroll(function() {
		if ($(document).scrollTop() > 100){
			$(".nav-wrapper").addClass("persona-theme-2");
			}
		else {
			$(".nav-wrapper").removeClass("persona-theme-2");
			}
      });
	$(".button-collapse").sideNav();
	$(".card").addClass("z-depth-1");
	$(".card-content").addClass("white");
	$(".card .fa-facebook").addClass("indigo-text");
	$(".card .fa-twitter").addClass("blue-text");
	$(".card .fa-google-plus").addClass("red-text");
	$(".carousel.carousel-slider").carousel({full_width:true});
	$(".carousel").carousel();
	$(".parallax").parallax();
	new WOW().init();
});

