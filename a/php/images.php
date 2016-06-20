<?php

// AND image_ID='1'"

	$action = $_GET['action'];

	switch($action) {

        case "get_state_id":
            state_id();
            break;

        case "get_country_images";
            country_images();
            break;
    }

    function get_image($state_no){

    	include 'connect_db.php';

    	$sql="SELECT * FROM images WHERE state_ID=$state_no";
    	$result=mysqli_query($conn, $sql);

    	if ($result=mysqli_query($conn, $sql)) { 

    		while ($row=mysqli_fetch_row($result)) {

    		echo /*"<img class='image_$row[0] o_image image' id='$row[0]' alt='$row[3]' src='a/imgs/site_images/$row[0].jpg'>
						<div class='image_comment_$row[0] image_comment o_comment'>$row[3]</div>";*/
                        "<img class='image_$row[0] o_image image pol_image' id='$row[0]' src='a/imgs/site_images/$row[0].jpg'>
                            <div class='image_comment_$row[0] image_comment o_comment polaroid_text'>
                                $row[3]
                            </div>";

			}
		}

    };

    function state_id() {

        include 'connect_db.php';

        $state_name = $_POST['state_name'];

        $sql="SELECT state_ID FROM states WHERE state_name ='$state_name'";
        $result=mysqli_query($conn, $sql);

        if ($result=mysqli_query($conn, $sql)) {

            while ($row=mysqli_fetch_row($result)) {

                $state_no = $row[0];

                get_image($state_no);
            }
        };
    };

    function country_images(){

        include 'connect_db.php';

        $country_id = $_POST['country_id'];

        $sql="SELECT*FROM images WHERE country_ID='$country_id'";
        $result=mysqli_query($conn, $sql);

        if ($result=mysqli_query($conn, $sql)) {

            while ($row=mysqli_fetch_row($result)) {

                //echo "<img class='image_$row[0] o_image image' id='$row[0]' src='a/imgs/site_images/$row[0].jpg'>
                            //<div class='image_comment_$row[0] image_comment o_comment'>$row[3]</div>";

                echo    /*"<div class='polaroid'>
                            <div class='polaroid-img'>
                                <div class='gloss'></div>*/
                            "<img class='image_$row[0] o_image image pol_image' id='$row[0]' src='a/imgs/site_images/$row[0].jpg'>
                            <div class='image_comment_$row[0] image_comment o_comment polaroid_text'>
                                $row[3]
                            </div>";
                        /*</div>";*/
            }
        }
    }

?>