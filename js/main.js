$(document).ready(function(){
/*
	var anim = "#particles-js .pro-title";
	var events = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
	$(anim).one(events, function(){
		$(anim).removeClass("animated zoomIn");
		$(anim).addClass("animated bounceIn");
	})
*/

	$("#particles-js .pro-title").css('visibility', 'visible').addClass("animated flipInX");

	//var anim = "#particles-js .pro-title";
	var events = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	$("#particles-js .pro-title").one(events, function(){

		$("#particles-js .pro-desc").css('visibility', 'visible').addClass("animated zoomIn");
	});

});