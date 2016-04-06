<!DOCtype HTML>

<html>

<head>

	<title>A Journey In Images</title>

	<meta charset="UTF-8">

	<script src="a/js/jquery-1.12.0.min.js"></script>
	<script async src="a/js/jquery-ui.min.js"></script>
	<script async src="a/js/functions.js"></script>
	<script async src="a/js/hash_change.js"></script>
	<script src="a/js/image_slider.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js"></script>
	<script async src="a/js/map.js"></script>
	<script async src="a/js/base.js"></script>
	<script src="a/js/jquery.mobile-1.4.5.min.js"></script>

	<link rel="stylesheet" href="a/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="a/css/jquery.mobile-1.4.5.min.css">
	<link rel="stylesheet" type="text/css" href="a/css/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="a/css/main.css">
	<link rel="stylesheet" type="text/css" media="screen and (min-width: 320px) and (max-width: 370px)" href="a/css/smaller_phones.css">
	<link rel="stylesheet" type="text/css" media="screen and (min-width : 980px)" href="a/css/pc_laptop.css">
	<link rel="stylesheet" type="text/css" media="screen and (max-width : 750px) and (orientation: landscape)" href="a/css/phone_landscape.css">
	<link rel="stylesheet" type="text/css" media="screen and (min-width: 768px) and (max-width: 1280px) and (orientation : portrait)" href="a/css/ipad.css">
	<link rel="stylesheet" type="text/css" media="screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)" href="a/css/ipad_landscape.css">

	<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
	<link id="favicon" rel="shortcut icon" href="a/imgs/logo.ico"/>


	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Follow my journey around the world through the images I've seen">
	<meta name="keywords" content="ajourneyinimages,journeyinimages,journey,images,graeme,brunton,graemebrunton,travel,usa,fiji,newzealand,new,zealand,emily,hall,emilyhall,homebirdflies">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

</head>

<body data-role='none'>
	<div class="body_container" data-role='none'>
		<div class="back_buttons hide">
			<i class="back_button back_1 fa fa-2x fa-arrow-circle-left"></i>
			<i class="landscape_back_button fa fa-2x fa-times hide"></i>
		</div>

		<div class="button_group all_button_groups">
			<div class="picture_section main_sections">
				<button class="all_buttons mp_buttons picture_button picture_buttons centered" data-role='none'>Images</button>

				<div class="button_group all_button_groups secondary_buttons country_buttons_group hide">
				</div>

				<div class="button_group all_button_groups secondary_buttons state_buttons_group hide">
				</div>
			</div>

			<div class="map_section main_sections">
				<button class="all_buttons mp_buttons map_button centered" data-role='none'>USA Route</button>
			</div>
			<div class="about_section main_sections">
				<button class="all_buttons mp_buttons about_button centered" data-role='none'>About</button>
			</div>	
		</div>

		<div class="image_container hide">
		</div>
		<i class="fa fa-spinner fa-pulse image_loader hide"></i>

		<div class="usa_routes">
			<div class="routes_title">
				<div class="hide map_title" id="title_1">Route 1</div>
				<div class="hide map_title" id="title_2">Route 2</div>
			</div>
			<div class="maps" id="map1"></div>
			<div class="maps" id="map2"></div>
			<div class="map_arrows hide">
				<div class="map_nav_left fa fa-chevron-circle-left fa-2x left_arrow nav_arrows_button"></div>
				<div class="map_nav_right fa fa-chevron-circle-right fa-2x right_arrow nav_arrows_button"></div>
			</div>
		</div>

		<div class="about_info hide">
			In September 2015, my partner Emily and I left our jobs and our homes to travel.<br>
			Our first stop was the United States where we went on a 3 month road trip in an RV. We drove - and camped - through
			the southern states for 6 weeks and then went to the west coast to do the same for another 6 weeks.<br>
			We travelled to many beautiful places and I created this site in order to show the photos we've taken along the way.<br><br>

			You can find the photos in the 'Photo' section of this site. The site also has a 'USA Route' section where you can view both
			routes we travelled in the USA (from A to Z).<br><br>

			Emily has also been writing a blog that you can view at <a href="https://homebirdflies.wordpress.com/">homebirdflies.wordpress.com</a>.

		</div>

		<div class="nav_arrows image_nav_left fa fa-chevron-circle-left fa-2x left_arrow nav_arrows_button hide"></div>
		<div class="nav_arrows image_nav_right fa fa-chevron-circle-right fa-2x right_arrow nav_arrows_button hide"></div>
		<i class="fa fa-caret-square-o-up comment_toggle_up comment_toggle hide"></i>
		<i class="fa fa-caret-square-o-down comment_toggle_down comment_toggle hide"></i>

	</div>
</body>

</html>