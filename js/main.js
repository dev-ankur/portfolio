$(document).ready(function(){
/*
	var anim = "#particles-js .pro-title";
	var events = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
	$(anim).one(events, function(){
		$(anim).removeClass("animated zoomIn");
		$(anim).addClass("animated bounceIn");
	})
*/

	//var anim = "#particles-js .pro-title";
	var events = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	$("#page_loader").delay(2000).fadeOut(1000, function(){
		$("#particles-js .pro-title").css('visibility', 'visible').addClass("animated flipInX").one(events, function(){

			$("#particles-js .pro-desc").css('visibility', 'visible').addClass("animated zoomIn");
		});
	});
	
	$('body').scrollspy({selector:'.scrollclass',offset:50});

	$('.scrollclass').click(function(){$('body').scrollTo($(this).data('target'),{duration:500,offset:-50});});
/*
	$(".owl-carousel").owlCarousel({
		items:1,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
	});*/

});