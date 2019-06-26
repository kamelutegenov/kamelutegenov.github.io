$(document).ready(function(){
	$('.slider').slick();

	$('.wrapper').click(function(){
		$('.burger').toggleClass("db");
	})

	$(".icon_btn").click(function(){
		$('#exampleModal').arcticmodal({
			overlay: {
		        css: {
		            backgroundColor: '#004365',
		            opacity: .7
		        }
		    }
		});
	});
	
});