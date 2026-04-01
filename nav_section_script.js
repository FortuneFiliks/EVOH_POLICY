$(document).ready(function(){
	$(window).scroll(function(){
	    if($(document).scrollTop() > 500){
		     $(".nav_section").css({"transform":"translateY(0)"});
		     // $(".nav_section").css({"animation":"none"});
		}
		else{
		     $(".nav_section").css({"transform":"translateY(-80px)"});
		     // $(".nav_section").css({"animation":"nav_section_animation 2s linear forwards"});
			 
			
		}
		
	});
});


let get_Menu = document.querySelector(".mobile_menu_section");

$("#menu_bars").toggle(view_Menu, hide_Menu);
function view_Menu(){
	$(":root").css({"overflow-y":"hidden"});
	$(".mobile_menu_section").css({"transform" : "translateY(0%)"});
	// $(".mobile_menu_section").css({"display" : "block"});
	
}

function hide_Menu(){
	$(":root").css({"overflow-y":"visible"});
	$(".mobile_menu_section").css({"transform" : "translateY(-120%)"});
	// $(".mobile_menu_section").css({"display" : "none"});
	
	
}