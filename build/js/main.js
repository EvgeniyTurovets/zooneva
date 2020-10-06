$(function(){

	//слайдер на главной
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

	$('.slider_priyt').slick({
 		slidesToScroll: 1,
 		variableWidth: true,
 		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	       variableWidth: false,
	       slidesToShow: 1,
	      }
	    },
	    ]
	})

	//поиск на мобильном
	$('.search_mob').click(function(){
		event.preventDefault();
		$('.search_mob .sear').fadeToggle()
		return false;
	})

	//Бургер меню
	$('a[href="#menu"]').click(function(){
		event.preventDefault();
		$(this).toggleClass('active')
		$('#menu').toggleClass('active')
	})

	//смега фасовки
	$('.fasovka__item').click(function(){
		$(this).parent().find('.fasovka__item').removeClass('active')
		$(this).addClass('active')
	})

	//
	$('.like').click(function(){
		$(this).toggleClass('wish_added')
	})


	$('.sidebar1 .title').click(function(){
		$(this).next('.sidebarnav').slideToggle()
	})
	$('.sidebar2 .title').click(function(){
		$(this).next('.sidebarnav').slideToggle()
	})

	$('.footer-block h3').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active')
		}
		else{
			$('.footer-block h3').removeClass('active')
			$(this).addClass('active')
		}
	})

})