// Check off specific todos by clicking
// The second argument 'li' states that when an li is clicked inside a ul, run this code
// We're only listening to li's clicked inside this ul
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete today
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Event listener for text input for keypress
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// Grabbing new todo text from input
		var todoText = $(this).val();
		// To clear the input after pressing the enter key
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});