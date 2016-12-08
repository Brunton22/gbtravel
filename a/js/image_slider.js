$(document).ready(function(){

	window.image_loop_up = function(val) {

		image_no = val;
	}

	window.image_loop_up_click = function() {

		do {

			image_no++;
		}

		while (($('#'+image_no).length) == 0);
	}
	
	function image_right() {

		var last = parseInt( $('.image').last().attr('id') );
		var first = parseInt( $('.image').first().attr('id') );

			$('.image_'+image_no).hide('slide', {direction: 'left'} );
			$('.polaroid').hide('slide', {direction:'left'} );
			$('.image_comment_'+image_no).hide('slide', {direction: 'left'} );


		if (image_no < last) {

			image_loop_up_click();
		}

		else {

			image_no = first;
		}

		$('.image_'+image_no).delay(400).show('slide', {direction: 'right'} );
		$('.polaroid').delay(400).show('slide', {direction: 'right'} );

		if ($('.comment_toggle_up').css('display') == 'none'){

			$('.image_comment_'+image_no).delay(400).show('slide', {direction: 'right'} );
		}
	}

	function image_left() {

		var last = parseInt( $('.image').last().attr('id') );
		var first = parseInt( $('.image').first().attr('id') );

		$('.image_'+image_no).hide('slide', {direction: 'right'} );
		$('.polaroid').hide('slide', {direction: 'right'} );
		$('.image_comment_'+image_no).hide('slide', {direction: 'right'} );

		if (image_no == first){

			image_no = last;

		}

		else do {

			image_no--;
		}

		while (($('#'+image_no).length) == 0);

		$('.image_'+image_no).delay(400).show('slide', {direction: 'left'} );
		$('.polaroid').delay(400).show('slide', {direction: 'left'} );
	
		if ($('.comment_toggle_up').css('display') == 'none'){		

			$('.image_comment_'+image_no).delay(400).show('slide', {direction: 'left'} );
		}
	}

	//image_slide

	$('.image_container').on('swiperight', function() {

		image_left();
		
	})

	$('.image_nav_right').off('click').on('click', function() {

		image_right();

	})

	$(document).keydown(function (e) {

		if (e.keyCode == 39) {

			image_right();
		}
	});

	$('.image_container').on('swipeleft', function() {

			image_right();
	})

	$('.image_nav_left').off('click').on('click', function(){

		image_left();
	})

	$(document).keydown(function (e) {

		if (e.keyCode == 37) {

			image_left();
		}
	})

	//comment toggle

	$('.comment_toggle_up').on('click', function(){

		$('.comment_toggle_up').addClass('hide');
		$('.comment_toggle_down').removeClass('hide');
		$('.image_comment_'+image_no).toggle();
	})

	$('.comment_toggle_down').on('click', function(){

		$('.comment_toggle_up').removeClass('hide');
		$('.comment_toggle_down').addClass('hide');
		$('.image_comment_'+image_no).toggle();
	})

})