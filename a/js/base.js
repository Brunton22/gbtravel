$(document).ready(function() {

	draw_map1();
	draw_map2();

})



$(window).ready(function() {
	//selector cache

	var $picture_button = $('.picture_button'),
	$map_button = $('.map_button'),
	$about_button = $('.about_button'),
	$country_buttons_group = $('.country_buttons_group'),
	$all_buttons = $('.all_buttons'),
	$state_buttons_group = $('.state_buttons_group'),
	$comment_toggle_up = $('.comment_toggle_up'),
	$comment_toggle_down = $('.comment_toggle_down'),
	$image_container = $('.image_container'),
	$back_buttons = $('.back_buttons'),
	$back_button = $('.back_button'),
	$all_button_groups = $('.all_button_groups'),
	$nav_arrows = $('.nav_arrows'),
	$landscape_back_button = $('.landscape_back_button');


	image_slider_loaded = '0';
	image_no = '1';

	if (window.location.hash == '') {

		window.location.hash = '#main';
	}

	//create buttons

		$.ajax({
			type: "POST",
			url: "a/php/main.php?action=get_country_buttons",
			success: function(data){

				$country_buttons_group.html(data);
			 }
		});


		$.ajax({
			type: "POST",
			url: "a/php/main.php?action=get_state_buttons",
			success: function(data){

				$state_buttons_group.html(data);
			 }
		});

	//main_page_buttons

		$picture_button.on("click", function() {

			$all_buttons.data('clicked', false);
			$(this).data('clicked', true);

			window.location.hash = '#images';
			show_country_buttons();

			//web_nav();
		})

		$map_button.on("touchstart click", function() {

			window.location.hash = '#map';
			show_map_section();
		})

		$about_button.on("touchstart click", function() {

			window.location.hash = '#about';
			show_about_section();
		})

	//country buttons

		$country_buttons_group.on("click", ".USA_button", function(){

			$all_buttons.data('clicked', false);
			$(this).data('clicked', true);

			window.location.hash = '#usa';
			show_state_buttons();

		})

		$country_buttons_group.on("click", ".Fiji_button", function(){

			if (image_slider_loaded == '0') {

				$.getScript('a/js/image_slider.js');

				image_slider_loaded = '1';

			}

			else {

			};


			country = ( $(this).attr('id') );

			$country_buttons_group.addClass('hide');

			window.location.hash = '#fiji';

			if ($comment_toggle_up.css('display') == 'block') {

				$comment_toggle_up.removeClass('hide');

			}

			$.ajax ({
				type: "POST",
				url: "a/php/images.php?action=get_country_images",
				data: {country_id: country},
				success: function(data){

					$image_container.html(data);
					$('.image').first().removeClass('o_image');
					$('.image_comment').first().removeClass('o_comment');

					var first_image = $('.image').first().attr('id');

					setTimeout(image_loop_up(first_image), 2000);

				}
			})

			show_image()

		})

		$country_buttons_group.on("click", ".NewZealand_button", function(){

			if (image_slider_loaded == '0') {

				$.getScript('a/js/image_slider.js');

				image_slider_loaded = '1';

			}

			else {

			};


			country = ( $(this).attr('id') );

			$country_buttons_group.addClass('hide');

			window.location.hash = '#newzealand';

			$comment_toggle_up.removeClass('hide');

			$.ajax ({
				type: "POST",
				url: "a/php/images.php?action=get_country_images",
				data: {country_id: country},
				success: function(data){

					$image_container.html(data);
					$('.image').first().removeClass('o_image');
					$('.image_comment').first().removeClass('o_comment');

					var first_image = $('.image').first().attr('id');

					setTimeout(image_loop_up(first_image), 2000);

				}
			})

			show_image()

		})

	//state buttons

		$('.all_button').on("click", function(){

			$country_buttons_group.addClass('hide');

		})

		$state_buttons_group.on('click', '.state_buttons', function(){

			if (image_slider_loaded == '0') {

				$.getScript('a/js/image_slider.js');

				image_slider_loaded = '1';

			}

			$comment_toggle_up.removeClass('hide');


			state = $(this).attr('id');

			window.location.hash = '#'+state;

			$.ajax ({
				type: "POST",
				url: "a/php/images.php?action=get_state_id",
				data: {state_name: state},
				success: function(data){

					$image_container.html(data);
					$('.image').first().removeClass('o_image');
					$('.image_comment').first().removeClass('o_comment');

					var first_image = $('.image').first().attr('id');

					setTimeout(image_loop_up(first_image), 1000);
				}
			})
			
			show_image();
	 
		})

	//back button

		$back_buttons.on("click", ".back_1", function(){

			window.location.hash = '#main';
			show_main_buttons();
		})

		$back_buttons.on("click", ".back_2", function(){

			window.location.hash = '#images'

			$state_buttons_group.addClass('hide');
			$country_buttons_group.removeClass('hide');
			$back_button.removeClass('back_2').addClass('back_1');
		})

		$back_buttons.on("click", ".image_back_button", function(){

			if (window.location.hash == '#fiji') {

				$all_button_groups.removeClass('hide');
				$country_buttons_group.removeClass('hide');
				$back_button.removeClass('back_3').addClass('back_2');
				$back_button.removeClass('image_back_button');
				$image_container.addClass('hide');
				$nav_arrows.addClass('hide');

				window.location.hash = '#images'

			}

			else if (window.location.hash == '#newzealand') {

				$all_button_groups.removeClass('hide');
				$country_buttons_group.removeClass('hide');
				$back_button.removeClass('back_3').addClass('back_2');
				$back_button.removeClass('image_back_button');
				$image_container.addClass('hide');
				$nav_arrows.addClass('hide');

				window.location.hash = '#images'
			}

			else {

				$all_button_groups.removeClass('hide');
				$state_buttons_group.removeClass('hide');
				$back_button.removeClass('back_3').addClass('back_2');
				$back_button.removeClass('image_back_button');
				$image_container.addClass('hide');
				$nav_arrows.addClass('hide');

      		window.location.hash = '#usa';

      		}
		})

		$landscape_back_button.on('click', function(){

			function landscape_back(){

				$all_button_groups.removeClass('hide');
				$state_buttons_group.removeClass('hide');
				$back_button.removeClass('back_3').addClass('back_2');
				$back_button.removeClass('image_back_button');
				$image_container.addClass('hide');
				$nav_arrows.addClass('hide');
				$landscape_back_button.addClass('hide');
				$comment_toggle_up.show().addClass('hide');
				$comment_toggle_down.hide();
				$('image_comment').hide();
			}

			if (window.location.hash == '#fiji') {

				landscape_back();

				window.location.hash = '#images';
			}

			if (window.location.hash == '#newzealand') {

				landscape_back();

				window.location.hash = '#images';
			}

			else {

				landscape_back();

				window.location.hash = '#usa';;
			}
		})

		//map arrows

		function map_slide(){

			if ($('#title_1').hasClass('hide') ) {

				$('#title_1').removeClass('hide');
				$('#title_2').addClass('hide');
				$('#map1').css('z-index', 1);
				$('#map2').css('z-index', -1);
			}

			else {

				$('#title_2').removeClass('hide');
				$('#title_1').addClass('hide');
				$('#map2').css('z-index', 1);
				$('#map1').css('z-index', -1);

			}
		}

		$('.map_arrows').on('click', function(){

			map_slide();

		})

		$(document).keydown(function (e) {

			if ( window.location.hash == '#map' ) {

				if ( (e.keyCode == 39) || (e.keyCode == 37) ){

				map_slide();

				}
			}
		})

	//browser_back

		$(window).on('hashchange', function() {

			hash_change();

		});

});