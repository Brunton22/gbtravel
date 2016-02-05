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
	
	function image_right(button_click) {

		var last = parseInt( $('.image').last().attr('id') );
		var first = parseInt( $('.image').first().attr('id') );

		if (button_click == '1'){

			$('.image_'+image_no).hide('slide', {direction: 'left'} );
			$('.image_comment_'+image_no).hide('slide', {direction: 'left'} );

		}

		else {

			$('.image_'+image_no).hide('slide', {direction: 'right'} );
			$('.image_comment_'+image_no).hide('slide', {direction: 'right'} );

		}	

		if (image_no < last) {

			image_loop_up_click();
		}

		else {

			image_no = first;

		}

		if (button_click == '1') {

			$('.image_'+image_no).delay(400).show('slide', {direction: 'right'} );

			if ($('.comment_toggle_up').css('display') == 'none'){

				$('.image_comment_'+image_no).delay(400).show('slide', {direction: 'right'} );
			}
		}

		else {

			$('.image_'+image_no).delay(400).show('slide', {direction: 'left'} );

			if ($('.comment_toggle_up').css('display') == 'none'){

				$('.image_comment_'+image_no).delay(400).show('slide', {direction: 'left'} );
			}
		}

		var button_click = '0';

	}

	function image_left(button_click) {

		var last = parseInt( $('.image').last().attr('id') );
		var first = parseInt( $('.image').first().attr('id') );

		if (button_click == '1'){

			$('.image_'+image_no).hide('slide', {direction: 'right'} );
			$('.image_comment_'+image_no).hide('slide', {direction: 'right'} );

		}


		$('.image_'+image_no).hide('slide', {direction: 'left'} );
		$('.image_comment_'+image_no).hide('slide', {direction: 'left'} );

		if (image_no == first){

			image_no = last;

		}

		else do {

			image_no--;
		}

		while (($('#'+image_no).length) == 0);

		if (button_click == '1') {

			$('.image_'+image_no).delay(400).show('slide', {direction: 'left'} );

			if ($('.comment_toggle_up').css('display') == 'none'){

				$('.image_comment_'+image_no).delay(400).show('slide', {direction: 'left'} );
			}
		}

		$('.image_'+image_no).delay(400).show('slide', {direction: 'right'} );

	
		if ($('.comment_toggle_up').css('display') == 'none'){		

			$('.image_comment_'+image_no).delay(400).show('slide', {direction: 'right'} );
		}

	}

	//image_slide

	$('.image_container').off('swiperight').on('swiperight', function() {

		image_right();
		
	})

	$('.image_nav_right').off('click').on('click', function() {

		var button_click = '1';
		image_right(button_click);

	})

	$(document).off('keydown').keydown(function (e) {

		var button_click = '1';

		if (e.keyCode == 39) {

			image_right(button_click);
		}
	});

	$('.image_container').off('swipeleft').on('swipeleft', function() {

			image_left();
	})

	$('.image_nav_left').off('click').on('click', function(){

		var button_click = '1';

		image_left(button_click);
	})

	$(document).keydown(function (e) {

		var button_click = '1';

		if (e.keyCode == 37) {

			image_left(button_click);
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