/* The following jQuery is to make the header (the one we want to pop out) sticky when the user scrolls down the main header. To make this happen, when the if condition is met, we going to add the class="show-fixed" to the header-2 element, so that the header-2 can stay fixed when you scroll down or up below the main header. When you scroll all the way up to the main header, the sticky should disappeared. */






$(window).scroll(function() {
		var header = $(document).scrollTop(); /*calculate the height from beginning of page to where ever you stop scrolling */

		var headerHeight = $(".header").outerHeight(); /*calculate main header height */

/* If scrolling of page is greater than height of main header, then sticky nav will pop up*/
		if(header > headerHeight) {
			$(".header-2").addClass("show-fixed");
			} else {
			$(".header-2").removeClass("show-fixed");
			}

});





/* This is to keep the sticky nav to appear when page is refreshed. Each time the window is loaded, this function will allow jQuery to be executed, even when used reloads the page multiple times. */

$(window).on("load", function() {
    $(window).scroll(sticky_nav_scroll());
    sticky_nav_scroll(); // Force the first call on refresh
});



function sticky_nav_scroll() {
		var header = $(document).scrollTop();

		var headerHeight = $(".header").outerHeight();

		if(header > headerHeight) {
			$(".header-2").addClass("show-fixed");
			} else {
			$(".header-2").removeClass("show-fixed");
			}
};


/* The following JS code is to make the carousel or slide mechanism */


var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
	clearTimeout(timer);
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	clearTimeout(timer);
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var circles = document.getElementsByClassName("circle");

	if (n == undefined) {
		n = ++slideIndex
	}

	if (n > slides.length) {
		slideIndex = 1
	}

	if (n < 1){
		slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < slides.length; i++){
		circles[i].className = circles[i].className.replace(" active", "")
	}

	slides[slideIndex-1].style.display = "block";

	circles[slideIndex-1].className += " active";

	timer = setTimeout(showSlides, 16000);
}


/* Show and hide div elements based on dropdown selection in jQuery */



$(document).ready(function(){
	$("select").change(function(){
		$(this).find("option:selected").each(function(){
			var optionValue = $(this).attr("value");
			if(optionValue){
				$(".box").not("." + optionValue).hide();
				$("." + optionValue).show();
			} else {
				$(".box").hide();
			  }
		});
	}).change();
});
