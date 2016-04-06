$( window ).ready(function() {

	window.show_image = function(){

		$('.all_button_groups').addClass('hide');
		$('.nav_arrows').removeClass('hide');
		$('.back_button').removeClass('back_1').removeClass('back_2');
		$('.back_button').addClass('image_back_button');
		$('.landscape_back_button').removeClass('hide');
		$('.dload_image_link').removeClass('hide');
	}

	window.hide_image = function(){

		$('.images').addClass('hide');
		$('.image_container').addClass('hide');
		$('.nav_arrows').addClass('hide');
		$('.back_button').removeClass('image_back_button');
		$('.all_button_groups').removeClass('hide');
		$('.landscape_back_button').addClass('hide');
		$('.dload_image_link').addClass('hide');
	}

	window.hide_map = function() {
		$('#map1').css('z-index', -1);
		$('#map2').css('z-index', -2);
		$('.map_arrows').addClass('hide');
		$('#title_1').addClass('hide');
		$('#title_2').addClass('hide');
	}

	window.show_main_buttons = function() {

		hide_image();
		hide_map();

		$('.secondary_buttons').addClass('hide');
		$('.back_buttons').addClass('hide');
		$('.mp_buttons').removeClass('hide', 1000);
		$('.section_big').removeClass('section_big', 1000);
		$('.section_gone').removeClass('section_gone', 1000);
		$('.about_info').addClass('hide');
	}

	window.show_country_buttons = function() {

		hide_image();

		$('.all_buttons').removeClass('hide');
		$('.mp_buttons').addClass('hide');
		$('.state_buttons_group').addClass('hide');
		$('.map_section').addClass('section_gone', 1000);
		$('.about_section').addClass('section_gone', 1000);
		$('.back_buttons').removeClass('hide', 1000);
		$('.about_info').addClass('hide');

		if ( !$('.picture_section').hasClass('section_big') ) {

			$('.picture_section').removeClass('section_gone').addClass('section_big', 1000)
		}
	}

	window.show_state_buttons = function() {

		hide_image();

		$('.all_buttons').removeClass('hide');
		$('.country_buttons_group').addClass('hide');
		$('.mp_buttons').addClass('hide');
		$('.state_buttons_group').removeClass('hide');
		$('.picture_section').removeClass('section_gone').addClass('section_big', 1000);
		$('.map_section').addClass('section_gone', 1000);
		$('.about_section').addClass('section_gone', 1000);
		$('.back_button').removeClass('back_1').addClass('back_2');
		$('.about_info').addClass('hide');

	}

	window.show_map_section = function() {

		$('.map_section').removeClass('section_gone').addClass('section_big', 1000);
		$('.picture_section').addClass('section_gone', 1000);
		$('.about_section').addClass('section_gone', 1000);
		$('.back_buttons').removeClass('hide', 1000);
		$('.all_buttons').addClass('hide');
		$('#map1').delay(600).queue(function(next){
			$(this).css('z-index', 1);
			next();
		})
		$('.map_arrows').removeClass('hide', 700);
		$('#title_1').removeClass('hide', 700);
		$('.about_info').addClass('hide');
	}

	window.show_about_section = function() {
		
		$('.about_section').removeClass('section_gone');
		$('.all_buttons').addClass('hide');
		$('.about_section').addClass('section_big', 1000);
		$('.map_section').addClass('section_gone', 1000);
		$('.picture_section').addClass('section_gone', 1000);
		$('.back_buttons').removeClass('hide', 1000);
		$('.about_info').removeClass('hide', 1000);
	}

	window.image_loader = function() { 

		$('.image_loader').removeClass('hide');

		$('.image').first().removeClass('o_image');
		$('.image_comment').first().removeClass('o_comment');

		var first_image = $('.image').first().attr('id');

		setTimeout(image_loop_up(first_image), 2000);

		$('.image_'+image_no).load(function(){

			$('.image_loader').addClass('hide');
			$('.image_container').removeClass('hide');
			$('.comment_toggle_down').removeClass('hide');

			//$('.dload_image_link').attr("href", "a/imgs/largeimages/" + img_dload + ".jpg").attr("download", "");

		})
	}

	window.image_back = function() {

		$('.all_button_groups').removeClass('hide');
		$('.back_button').removeClass('image_back_button');
		$('.image_container').addClass('hide');
		$('.nav_arrows').addClass('hide');
		$('.image_loader').addClass('hide');
		$('.comment_toggle_down').addClass('hide');
		$('.comment_toggle_up').addClass('hide');
		$('.dload_image_link').addClass('hide');
	}
})