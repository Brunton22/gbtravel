<!DOCtype HTML>

<html>

<head>
	<script src="a/js/jquery-1.10.2.js"></script>
	<script src="a/js/base.js"></script>

	<link rel="stylesheet" type="text/css" href="a/css/main.css">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>

	<div class="login_register">
		<form class="login">
			<input id="login_uname" type="text">
			<input id="login_pass" type="text">
			<input id="login_button" type="submit">
		</form>
		<div class="register normal_register"><a href="#">Not registered? Click here to sign up</a></div>
	</div>

	<button class="login_register_phone">Login/Register</button>

	<div class="login_register pop_up_box pop_up_login_register centered">
		<form class="login">
			<input id="login_uname" type="text"><br>
			<input id="login_pass" type="text"><br>
			<input id="login_button" type="submit"><br>
		</form>
		<div class="register pop_up_register"><a href="#">Not registered?<br>Click here to sign up</a></div>
	</div>

	<div class="pop_up_box_normal pop_up_box centered">
		<div class="sign_up_form_exit" style="float:right, color:white">x</div>
		<form class="sign_up_form">
			<input type="text" class="uname_signup" placeholder="Enter A Username"><br>
			<input type="text" class="pass_signup" placeholder="Enter A Password"><br>
			<input type="submit" text="Register">
		</form>
	</div>

</body>


</html>