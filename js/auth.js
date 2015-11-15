$(document).ready(function(){
	var url="https://simplehours.no/app_inc/auth.php?callback=?";
    
    //Login Function
    $("#login").click(function(){
    	
    	var username=$("#username").val();
    	var password=$("#password").val();
    	var dataString="username="+username+"&password="+password+"&login=";
    	if($.trim(username).length>0 & $.trim(password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#login").html('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						localStorage.login="true";
						localStorage.username=username;
						window.location.href = "index.html";
					}
					else if(data="failed")
					{
						alert("Login error");
						$("#login").html('Login');
					}
				}
			});
		}return false;

    });

    

    //Change Password
    $("#change_password").click(function(){
    	var email=localStorage.email;
    	var old_password=$("#old_password").val();
    	var new_password=$("#new_password").val();
    	var dataString="old_password="+old_password+"&new_password="+new_password+"&email="+email+"&change_password=";
    	if($.trim(old_password).length>0 & $.trim(old_password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#change_password").val('Connecting...');},
				success: function(data){
					if(data=="incorrect")
					{
						alert("Your old password is incorrect");
					}
					else if(data="success")
					{
						alert("Password Changed successfully");
					}
					else if(data="failed")
					{
						alert("Something Went wrong");
					}
				}
			});
		}return false;

    });

    //Forget Password
    $("#forget_password").click(function(){
    	var email=$("#email").val();
    	var dataString="email="+email+"&forget_password=";
    	if($.trim(email).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#forget_password").val('Connecting...');},
				success: function(data){
					if(data=="invalid")
					{
						alert("Your have not registered with us");
					}
					else if(data="success")
					{
						alert("we have sent password to your email address, please check");
					}
				}
			});
		}return false;

    });


    //logout function
    $("#logout").click(function(){
    	localStorage.login="false";
    	window.location.href = "login.html";
    });

    //Displaying user email on home page
    $("#username1").html(localStorage.username);
    var imageHash="http://www.gravatar.com/avatar/"+md5(localStorage.username);
    $("#profilepic").attr('src',imageHash);
});
