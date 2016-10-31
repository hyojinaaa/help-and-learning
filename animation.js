$(document).ready(function(){

	$(window).scroll(function(){

		var scrollPosition = $(window).scrollTop();
		var help1one = $('#help1-1');
		var help1two = $('#help1-2');
		var help1three = $('#help1-3');
		var help1four = $('#help1-4');

		if( scrollPosition > 100 ) {
			help1one.slideDown();
		} else {
			help1one.hide();
		}

		if( scrollPosition > 110 ) {
			help1two.slideDown();
		} else {
			help1two.hide();
		}

		if( scrollPosition > 120 ) {
			help1three.slideDown();
		} else {
			help1three.hide();
		}

		if( scrollPosition > 130 ) {
			help1four.slideDown();
		} else {
			help1four.hide();
		}

	});

});