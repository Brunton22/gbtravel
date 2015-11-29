$( document ).ready(function() {

  window.hash_change = function() {

    //if element hasn't been clicked


    if ( (window.location.hash == '#pictures') && ($('.picture_button').data('clicked') == false) ) {

      show_country_buttons();	
      $('.back_button').removeClass('back_2').removeClass('back_3').addClass('back_1');

    }

    else if (window.location.hash == '#usa') {

      show_state_buttons();
      $('.back_button').removeClass('back_3').removeClass('back_1').addClass('back_2');

    }

    else if (window.location.hash == '#map') {

      show_map_section();
      $('.back_button').removeClass('back_2').removeClass('back_3').addClass('back_1');

    }

    else if (window.location.hash == '#about') {

      show_about_section();

    }

    else if (window.location.hash == '#main') {

      show_main_buttons();
      $('.back_button').removeClass('back_2').removeClass('back_3').addClass('back_1');
    }

    else if (window.location.hash == '#Florida') {

      show_image();
      $('.back_button').removeClass('back_2').removeClass('back_1').addClass('back_3');

    }

    else {

    }
  }

});