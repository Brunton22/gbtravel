<!DOCtype HTML>

<html>

<head>

	<script src="a/js/jquery-1.10.2.js"></script>
	<script src="a/js/jquery-ui.min.js"></script>
	<script src="a/js/functions.js"></script>
	<script src="a/js/image_slider.js"></script>
	<script src="a/js/web_nav.js"></script>
	<script src="a/js/hash_change.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js"></script>
	<script src="a/js/map.js"></script>
	<script src="a/js/base.js"></script>

	<link rel="stylesheet" type="text/css" href="a/css/main.css">
	<link rel="stylesheet" type="text/css" href="a/css/example.css">
	<link rel="stylesheet" type="text/css" href="a/css/jquery-ui.min.css">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>
	<div class="body_container">
		<div class="back_buttons hide">
			<button class="back_button back_1">Back</button><br>
		</div>

		<div class="button_group all_button_groups">
			<div class="picture_section main_sections">
				<button class="all_buttons mp_buttons picture_button picture_buttons centered">Pictures</button>

				<div class="button_group all_button_groups secondary_buttons country_buttons_group hide">
				</div>

				<div class="button_group all_button_groups secondary_buttons state_buttons_group hide">
				</div>
			</div>

			<div class="map_section main_sections">
				<button class="all_buttons mp_buttons map_button centered">USA Route</button>
			</div>
			<div class="about_section main_sections">
				<button class="all_buttons mp_buttons about_button centered">About</button>
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

		<div class="nav_arrows hide">
			<div class="image_nav_left left_arrow nav_arrows_button"></div>
			<div class="image_nav_right right_arrow nav_arrows_button"></div>
		</div>

	</div>
</body>

</html>