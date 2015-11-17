$('form').submit(function(){
	var landmarkID =localStorage.username;
	var postData = $(this).serialize();
	
	$.ajax({
		type: 'POST',
		data: postData+'&amp;user_id='+landmarkID,
		url: 'http://simplehours.no/app_inc/save.php',
		success: function(data){
			console.log(data);
			alert('Your comment was successfully added');
		},
		error: function(){
			console.log(data);
			alert('There was an error adding your comment');
		}
	});
	
	return false;
});
