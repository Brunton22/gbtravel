$(document).ready(function() {

	"use strict";

	var image_no = '1';
	var hash_on ='0';

	if (window.location.hash == '') {
		window.location.hash = '#main';
	}

	//create buttons

	$.ajax({
		type: "POST",
		url: "a/php/main.php?action=get_country_buttons",
		success: function(data){

			$('.country_buttons_group').html(data);
		 }
	});

	$.ajax({
		type: "POST",
		url: "a/php/main.php?action=get_state_buttons",
		success: function(data){

			$('.state_buttons_group').html(data);
		 }
	});

	//main_page_buttons

	$('.picture_button').on("touchstart click", function(e) {
		e.preventDefault();
		hash_on = '1';
		window.location.hash = '#images';
		show_country_buttons();
	})

	$('.map_button').on("touchstart click", function(e) {
		e.preventDefault();
		hash_on = '1';
		window.location.hash = '#map';
		show_map_section();
	})

	$('.about_button').on("touchstart click", function(e) {
		e.preventDefault();
		hash_on = '1';
		window.location.hash = '#about';
		show_about_section();
	})

	//country buttons

	$('.country_buttons_group').on("touchstart click", ".country_buttons", function(e){
		e.preventDefault();
		window.get_country_images_ajax = function(country) {
			$.ajax ({
				type: "POST",
				url: "a/php/images.php?action=get_country_images",
				data: {country_id: country},
				success: function(data){
					$('.img_container').html(data);
					image_loader();
				}
			})
			show_image()
		}

		var country = ( $(this).attr('id') );
		$('.country_buttons_group').addClass('hide');
		hash_on = '1';

		if ( country == '2'){
			window.location.hash = '#fiji';
			get_country_images_ajax(country);
		}
		else if ( country == '3' ){
			window.location.hash = '#newzealand';
			get_country_images_ajax(country);
		}
		else if ( country == '1' ) {
			window.location.hash = '#usa';
			show_state_buttons();
		}
	})

	//state buttons

	$('.all_button').on("touchstart click", function(e){
		e.preventDefault();
		$('.country_buttons_group').addClass('hide');
	})

	$('.state_buttons_group').on('touchstart click', '.state_buttons', function(e){
		e.preventDefault();
		window.get_state_images_ajax = function(state) {
			$.ajax ({
				type: "POST",
				url: "a/php/images.php?action=get_state_id",
				data: {state_name: state},
				success: function(data){
					//$('.image_container').html(data);
					$('.img_container').html(data);
					image_loader();
				}
			})
			show_image();
		}	

		hash_on = '1';
		$('.comment_toggle_down').removeClass('hide');
		var state = $(this).attr('id');
		window.location.hash = '#'+state;
		get_state_images_ajax(state); 
	})

	//back button
	$('.back_buttons').on("touchstart click", ".back_1", function(e){
		e.preventDefault();
		hash_on = '1';
		window.location.hash = '#main';
		show_main_buttons();
	})

	$('.back_buttons').on("touchstart click", ".back_2", function(e){
		e.preventDefault();
		hash_on = '1';
		window.location.hash = '#images'
		$('.state_buttons_group').addClass('hide');
		$('.country_buttons_group').removeClass('hide');
		$('.back_button').removeClass('back_2').addClass('back_1');
	})

	$('.back_buttons').on("touchstart click", ".image_back_button", function(e){
		e.preventDefault();
		hash_on = '1';
		if (window.location.hash == '#fiji') {
			$('.back_button').removeClass('back_3').addClass('back_1');
			image_back();
			$('.state_buttons_group').addClass('hide');
			window.location.hash = '#images';
		}
		else if (window.location.hash == '#newzealand') {
			$('.back_button').removeClass('back_3').addClass('back_1');
			image_back();
			$('.state_buttons_group').addClass('hide');
			window.location.hash = '#images';
		}
		else {
			$('.back_button').removeClass('back_3').addClass('back_2');	
			image_back();
			$('.country_buttons_group').addClass('hide');
  			window.location.hash = '#usa';
  		}
	})

	$('.landscape_back_button').on('touchstart click', function(e){
		e.preventDefault();
		function landscape_back(){
			$('.all_button_groups').removeClass('hide');
			$('.back_button').removeClass('back_3').addClass('back_2');
			$('.back_button').removeClass('image_back_button');
			$('.image_page').addClass('hide');
			$('.nav_arrows').addClass('hide');
			$('.landscape_back_button').addClass('hide');
			$('.comment_toggle_up').addClass('hide');
			$('.comment_toggle_down').addClass('hide');
			$('.image_comment').hide();
		}
		hash_on = '1';

		if (window.location.hash == '#fiji') {
			landscape_back();
			$('.state_buttons_group').addClass('hide');
			window.location.hash = '#images';
		}
		else if (window.location.hash == '#newzealand') {
			landscape_back();
			$('.state_buttons_group').addClass('hide');
			window.location.hash = '#images';
		}
		else {
			landscape_back();
			$('.country_buttons_group').addClass('hide');
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

	$('.map_arrows').on('touchstart click', function(e){
		e.preventDefault();
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
		if ( hash_on == '0' ) {
			hash_change();
		}
		else {
			hash_on = '0';
		}
	});
});