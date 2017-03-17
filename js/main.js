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

	var sceneController = new ScrollMagic.Controller();

	var cssSelects = '.content h2, .content h4, .content h6, .content p, .about-detail div p, .about-detail .skills > div, #portfolio .img-responsive, #contact .row > div';

	$(cssSelects).addClass('animated');

	$(cssSelects).each(function(){

		/*var setMultipleClasses = TweenMax.set(this, {
		    className: "animated fadeInUp fade-in"
		});*/
		// console.log(this);
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.7,
			reverse: false
		})
		/*.setTween(setMultipleClasses)*/
		.setClassToggle(this, 'fadeInUp')
		/*.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: 'lightgreen'
		})*/
		.addTo(sceneController);

	});


	// Separate animation for '.thanks' div
	
	var scene = new ScrollMagic.Scene({
		triggerElement: '.thanks',
		triggerHook: 0.9,
		reverse: false
	})
	/*.setTween(setMultipleClasses)*/
	.setClassToggle('.thanks', 'zoom-in')
	/*.addIndicators({
		name: 'thanks fade scene',
		colorTrigger: 'black',
		colorStart: 'red'
	})*/
	.addTo(sceneController);
	

});