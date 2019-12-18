$(document).ready(function(){

		// show/hide sidebar nav
		$("#Right-Slider,#continue-shopping").click(function(){
			$(".content").toggleClass("content-expand");
			$(".right-sidebar").toggleClass("right-sidebar-collpase");
			$("body").toggleClass("disable-scroll");
		});	

		// decrease quantity in input[number]
		$(".minus").click(function(){
			var $minus = $(this).next();
			var val = $minus.val();
			val--;

			$minus.val(val);
		});	

		// increase quantity in input[number]
		$(".add").click(function(){
			var $add = $(this).prev();
			var val = $add.val();
			val++;

			$add.val(val);
		});	
});