$(window).load(function() {

	window.draw_map1 = function() {

		var locations = [
			['North Beach, Miami', 25.860876, -80.121024, 'A'],
			['Bahia Honda State Park', 24.660234, -81.273604, 'B'],
			['Key West', 24.555091, -81.779404, 'C'],
			['Key Largo', 25.086124, -80.444826, 'D'],
			['West Palm Beach', 26.715922, -80.057227, 'E'],
			['Cape Canaveral', 28.392609, -80.607526, 'F'],
			['Orlando', 28.539625, -81.383866, 'G'],
			['Little Talbot Island State Park', 30.466393, -81.415879, 'H'],
			['Savannah', 32.085267, -81.106905, 'I'],
			['Magnolia Springs State Park', 32.880691, -81.956163, 'J'],
			['Mistletoe State Park', 33.645994, -82.379830, 'K'],
			['Tugaloo State Park', 34.494151, -83.063690, 'L'],
			['Moccasin Creek State Park', 34.844807, -83.587082, 'M'],
			['Smokemont Campground, Great Smoky Mountains National Park', 35.557837, -83.310791, 'N'],
			['Cades Cove Campground, Great Smoky Mountains National Park', 35.602213, -83.777036, 'O'],
			['Fall Creek Falls State Park', 35.679090, -85.339959, 'P'],
			['Nashville', 36.164143, -86.790776, 'Q'],
			['Tishomingo State Park', 34.602912, -88.175491, 'R'],
			['Pelahatchie', 32.313138, -89.799374, 'S'],
			['New Orleans', 29.951103, -90.067534, 'T'],
			['Pensacola', 30.419720, -87.221707, 'U'],
			['St Andrews State Park', 30.132356, -85.740372, 'V'],
			['Rainbow Springs State Park', 29.103059, -82.438032, 'W'],
			['Turtle Beach', 27.218655, -82.517343, 'X'],
			['Sanibel Island', 26.448506, -82.024717, 'Y'],
			['Midway Campground, Big Cypress National Park', 25.850939, -80.989450, 'Z'],
		];

		var mapCanvas = document.getElementById('map1');
		var mapOptions = {

			center: new google.maps.LatLng(33.080630, -84.793253),
			zoom: 5,
			mapTypeId: google.maps.MapTypeId.ROADMAP

		}

		var map = new google.maps.Map(mapCanvas, mapOptions);

		var infowindow = new google.maps.InfoWindow();

		var marker, i;

		for (i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				label: locations[i][3],
				map: map
			});

			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					infowindow.setContent(locations[i][0]);
					infowindow.open(map, marker);
				}
			})(marker, i));
		}
	}

	window.draw_map2 = function () {

		var locations2 = [
			['Malibu', 34.026837, -118.783056, 'A'],
			['Carpinteria State Beach', 34.392716, -119.521277, 'B'],
			['Pismo Beach', 35.143194, -120.641984, 'C'],
			['Pfeiffer Big Sur State Park', 36.237399, -121.767715, 'D'],
			['Santa Cruz', 36.974904, -122.028828, 'E'],
			['San Francisco', 37.774235, -122.414600, 'F'],
			['Stockton', 37.958657, -121.292953, 'G'],
			['Los Banos', 37.058845, -120.851380, 'H'],
			['Pinnacles Campground, Pinnacles National Park', 36.492431, -121.146938, 'I'],
			['Santa Margarita', 35.389888, -120.610198, 'J'],
			['Ventura', 34.274277, -119.231740, 'K'],
			['Anaheim', 33.834582, -117.917520, 'L'],
			['Crystal Cove State Park', 33.583132, -117.856667, 'M'],
			['Salton Sea State Recreation Area', 33.508803, -115.918212, 'N'],
			['Black Rock Campground, Joshua Tree National Park', 34.072689, -116.389957, 'O'],
			['Barstow', 34.895804, -117.015937, 'P'],
			['Hole In The Wall Campground, Mojave National Preserve', 35.040546, -115.341940, 'Q'],
			['Lake Havasu State Park', 34.404506, -114.246001, 'R'],
			['Lake Mead', 36.034873, -114.798089, 'S'],
			['Seligman', 35.325791, -112.877976, 'T'],
			['Holbrook', 34.902834, -110.157774, 'U'],
			['Williams', 35.249499, -112.193355, 'V'],
			['Grand Canyon National Park', 36.106957, -112.113115, 'W'],
			['Las Vegas', 36.170385, -115.144110, 'X'],
			['Furnace Creek Campground, Death Valley National Park', 36.462995, -116.868170, 'Y'],
			['West Hollywood', 34.090215, -118.362660, 'Z']
		]

		var mapCanvas = document.getElementById('map2');
		var mapOptions = {

			center: new google.maps.LatLng(36.714365, -116.143085),
			zoom: 5,
			mapTypeId: google.maps.MapTypeId.ROADMAP

		}

		var map = new google.maps.Map(mapCanvas, mapOptions);

		var infowindow = new google.maps.InfoWindow();

		var marker, i;

		for (i = 0; i < locations2.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations2[i][1], locations2[i][2]),
				label: locations2[i][3],
				map: map
			});

			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					infowindow.setContent(locations2[i][0]);
					infowindow.open(map, marker);
				}
			})(marker, i));
		}
	}

	draw_map1();
	draw_map2();
	
})