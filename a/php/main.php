<?php

	$action = $_GET['action'];

   	switch($action) {

      case "get_country_buttons":
         country_buttons();
         break;

      case "get_state_buttons":
      		state_buttons();
      		break;
    }

  function country_buttons(){

		include ('connect_db.php');

		$sql = "SELECT * FROM countries";
	 	$result = mysqli_query($conn, $sql);

	 	if ($result = mysqli_query($conn, $sql)) {
	    // output data of each row
	    	while ($row = mysqli_fetch_row($result)) {
	    		$row[1] = str_replace(' ', '', $row[1]);
	        	echo "<button class='all_buttons picture_buttons country_buttons $row[1]_button'>";
	        	$row[1] = str_replace('NewZealand', 'New Zealand', $row[1]);
	        	echo "$row[1]</button>";
	    }
	  }

	};

	function state_buttons(){

		include ('connect_db.php');

		$sql = "SELECT * FROM states";
	  	$result = mysqli_query($conn, $sql);

	  	if ($result = mysqli_query($conn, $sql)) {
	    // output data of each row
	    	while ($row = mysqli_fetch_row($result)) {
	        	echo "<button class='all_buttons picture_buttons state_buttons $row[1]_button' id='$row[1]'>$row[1]</button>";
	    }
	  }

	};

?>