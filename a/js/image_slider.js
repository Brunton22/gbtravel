$(document).ready(function(){

	var image_no = '1';

	window.image_loop_up = function() {

		while (($('#'+image_no).length) == 0) {

			image_no++;
		}
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

		$('#'+image_no).hide('slide', {direction: 'right'} );
		$('.image_comment_'+image_no).hide('slide', {direction: 'right'} );

		if (image_no < last) {

			image_loop_up_click();
		}

		else { 

			image_no = first;

		}

		$('#'+image_no).delay(400).show('slide');
		$('.image_comment_'+image_no).delay(400).show('slide');
	}

	function image_left() {

		var last = parseInt( $('.image').last().attr('id') );
		var first = parseInt( $('.image').first().attr('id') );

		$('#'+image_no).hide('slide', {direction: 'left'} );
		$('.image_comment_'+image_no).hide('slide', {direction: 'left'} );

		if (image_no == first){

			image_no = last;

		}

		else do {

			image_no--;
		}

		while (($('#'+image_no).length) == 0);

		$('.image_'+image_no).delay(400).show('slide', {direction: 'right'} );
		$('.image_comment_'+image_no).delay(400).show('slide', {direction: 'right'} );

	}

	$('.nav_arrows').on('click', '.image_nav_right', function() {

		image_right();

	})

	$(document).keydown(function (e) {

		if (e.keyCode == 39) {

			image_right();
		}
	});

	$('.nav_arrows').on('click', '.image_nav_left', function(){

		image_left();

	})

	$(document).keydown(function (e) {

		if (e.keyCode == 37) {

			image_left();
		}
	})

})