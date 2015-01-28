$(document).ready(function() {


$("form").on("submit", function(e) {

	$("body").append("<ul>" + $("input[type=text]").val() + "</ul>");


	
	

  });

$("button").on("click", function() {
	$("body").append("<button>X</button>");
	$("body").append("<button>O</button>");
});

// $(this).on("click", function() {
// 	$(this).addClass(".completed");
// 	$(this).css("line-though");
// });

// button for 
// text-decoration line-though;


});