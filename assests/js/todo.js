$("ul").on("click","li",function(){
	$(this).toggleClass("completed");});

$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
        $(this).remove();
	});
	
});
    $(".fa-edit").click(function(){
    	$("input").fadeToggle(290);
    });

 $("input").keypress(function(event){
 	var text=$(this).val();

 	if(event.which=="13"){
 		$(this).val("");   
 	    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " +text+"</li")
 	}

 });