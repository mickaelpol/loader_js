

$(window ).on("load", function() {

	$('#loading').hide();
	$("#exampleModal").fadeIn();
	$("#exampleModal").fadeIn("slow");
	$("#exampleModal").fadeIn(3000);

	$('#sc').click(function(){


	}),
	$('#bouton').click(function(){
		$('#exampleModal').hide(2000);

	}),
	$('#sc').click(function(){

		$('#loading').fadeIn().delay(3000).fadeOut();

		$(function(){
			setTimeout(function(){ 
				$('#exampleModal').fadeOut(1000, function(){
					window.location.href = "test.html"
				})
			}, 4000);

		})
	
	});


	

});



