$(function(){
	$('.slides').slick({
		arrows: true,
		fade: true,
		dots: true,
		responsive: [
	    {
	      breakpoint: 559,
	      settings: {
	       fade: false,
	      }
	    },
	    ]
	})


	$('.search_mob').click(function(){
		event.preventDefault();
		$('.search_mob .sear').fadeToggle()
		return false;
	})

	$('a[href="#menu"]').click(function(){
		event.preventDefault();
		$(this).toggleClass('active')
		$('#menu').toggleClass('active')
	})
})