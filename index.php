<!DOCtype HTML>

<html>

<head>

	<script src="a/js/jquery-1.10.2.js"></script>
	<script src="a/js/jquery.mobile-1.4.5.min.js"></script>
	<script src="a/js/jquery-ui.min.js"></script>
	<script src="a/js/functions.js"></script>
	<!--<script src="a/js/image_slider.js"></script>-->
	<script src="a/js/web_nav.js"></script>
	<script src="a/js/hash_change.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js"></script>
	<script src="a/js/map.js"></script>
	<script src="a/js/base.js"></script>

	<link rel="stylesheet" href="a/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="a/css/jquery.mobile-1.4.5.min.css">
	<link rel="stylesheet" type="text/css" href="a/css/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="a/css/main.css">

	<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body data-role='none'>
	<div class="body_container" data-role='none'>
		<div class="back_buttons hide">
			<!--<button class="back_button back_1" data-role='none'>Back</button>--><i class="back_button back_1 fa fa-times"></i><br>
		</div>

		<div class="button_group all_button_groups">
			<div class="picture_section main_sections">
				<button class="all_buttons mp_buttons picture_button picture_buttons centered" data-role='none'>Pictures</button>

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

		<div class="usa_routes">
			<div class="routes_title">
				<div class="hide" id="title_1">Route 1</div>
				<div class="hide" id="title_2">Route 2</div>
			</div>
			<div class="maps" id="map1"></div>
			<div class="maps" id="map2"></div>
			<div class="map_arrows hide">
				<div class="map_nav_left left_arrow nav_arrows_button"></div>
				<div class="map_nav_right right_arrow nav_arrows_button"></div>
			</div>
		</div>

		<div class="about_info hide">
			In September 2015 my partner, Emily and I (Graeme) left our jobs and our homes to travel.</br>
			Our first stop was the United States where we went on a 3 month road trip in an RV. We drove - and camped - through
			the southern states for 6 weeks and then went to the west coast to do the same for another 6 weeks.</br>
			We travelled to many beautiful places and I created this site in order to show the photos we've taken along the way.</br></br>

			You can find the photos in the 'Photo' section of this site. The site also has a 'USA Route' section where you can view both
			routes we travelled in the USA (from A to Z).</br></br>

			Emily has also been writing a blog that you can view at<a href="https://homebirdflies.wordpress.com/" target="_blank"> homebirdflies.wordpress.com</a>. For a taster of 
			the blog you can view her latest post by clicking <a href="">here</a>.

		</div>

		<div class="nav_arrows image_nav_left left_arrow nav_arrows_button hide"></div>
		<div class="nav_arrows image_nav_right right_arrow nav_arrows_button hide"></div>

	</div>
</body>

</html>