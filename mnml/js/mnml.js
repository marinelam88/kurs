$(document).ready(function(){
	$(".menu").on("click", function(){
		$(".mobile-menu").toggle("slow");
	})


	$(".gallery > div").css({"background-size":"100%"})
	$(".gallery > div").on("mouseenter", function(){
		$(this).animate({'backgroundSize': "130%"}, 500);
		$(this).find(".upper-text").fadeOut(500);

	});

	$(".gallery > div").on("mouseleave", function(){
		$(this).animate({'backgroundSize': "100%"}, 500);
		$(this).find(".upper-text").fadeIn(500);

	});

	$(".team-member > div").on("mouseenter", function(){
		$(this).find(".overlay").slideDown(500);
	})

	$(".team-member > div").on("mouseleave", function(){
		$(this).find(".overlay").slideUp(500);
	})
})