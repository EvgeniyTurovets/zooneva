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
 		slidesToShow: 4,
 		responsive: [
 		{
	      breakpoint: 1024,
	      settings: {
	       variableWidth: false,
	       slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	       variableWidth: false,
	       slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 424,
	      settings: {
	       variableWidth: false,
	       slidesToShow: 1,
	      }
	    },
	    ]
	})

	$('.tovar__slider-g').slick({
		fade: true,
		arrows: false,
		responsive: [
	    {
	      breakpoint: 560,
	      settings: {
	      	dots: true,
	      	fade: false,
	      }
	    },
	    ]
	})

	$('.slider-v').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 5,
    	slidesToScroll: 1,
    	asNavFor: '.tovar__slider-g',
    	focusOnSelect: true
	})

	$('.tab-1__slider__wrap').slick({
		slidesToShow: 4,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	      	slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 1025,
	      settings: {
	      	slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
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

	//лайк на товаре
	$('.like').click(function(){
		$(this).toggleClass('wish_added')
	})

	//сайдбар на фомильном
	$('.sidebar1 .title').click(function(){
		$(this).next('.sidebarnav').slideToggle()
	})
	$('.sidebar2 .title').click(function(){
		$(this).next('.sidebarnav').slideToggle()
	})

	$('input[type="tel"]').mask("+7 999 999 9999"); 


	//футер акордеон
	$('.footer-block h3').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active')
		}
		else{
			$('.footer-block h3').removeClass('active')
			$(this).addClass('active')
		}
	})

	//модалка
	$('.modal-btn').click(function(){
		let dataModal = $(this).attr('data-modal')
		$('#'+ dataModal +'').fadeIn()
	})

	$('.close-btn').click(function(){
		event.preventDefault()
		$('.modal').fadeOut()
	})
	$('.politica-btn').click(function(){
		$('.politica').fadeIn()
		return false;
	})
	$('.politica .modal-close').click(function(){
		$('.politica').fadeOut()
	})
	$('.modal__wrap__back').submit(function(){
		event.preventDefault();
		$('.modal-submite').fadeIn()
	})

	$('.modal').mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal-body"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.modal').fadeOut()
		}
	});


	//фиксированое меню при скроле
	let navigationWidth = $('.navigation').width();
	
	yes = $(".slider").offset().top + 18;
	$(document).scroll(function () {
		if($(window).width() > 1025){
			s_top = $(window).scrollTop();
		    if(s_top > yes){
		        $('.navigation').addClass('fix-menu')
		        $('.header__right').addClass('fix-menu')
		    }
		    else{
		    	$('.navigation').removeClass('fix-menu')
		    	$('.header__right').removeClass('fix-menu')
		    }
		}
	    
	});


	$('.buytovar-btn').click(function(){
		if($(this).hasClass('addtocart') == 0){
			event.preventDefault()
			$(this).addClass('addtocart')
			$(this).text('В корзине')
			$('#buytovar').fadeIn()
		}
		
	})

	$('select').selectric()

	$('.pokvse').click(function(){
		$('.pokvse').hide()
		$('.svernut').show()
		$(this).parent().find('.tovar-sidebar__wrap').addClass('active')
	})

	$('.svernut').click(function(){
		$('.svernut').hide()
		$('.pokvse').show()
		$(this).parent().find('.tovar-sidebar__wrap').removeClass('active')
	})

	$("#pricerange").ionRangeSlider({
		type: "double",
	})
	
	$('.mob-filter').click(function(){
		$('.catalog-sidebar').toggleClass('active')
	})
	if($(window).width() < 1025){
		$('.catalog-sidebar').mouseup(function (e){ // событие клика по веб-документу
			var div = $(".sidebarnav"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.catalog-sidebar').removeClass('active'); // скрываем его
			}
		});
	}

	$('.tovar-sidebar__title').click(function(){
		$(this).parent('.tovar-sidebar').toggleClass('active')
	})
	

	$('[data-fancybox="gallery"]').fancybox({
		buttons: [
		    "zoom",
		    //"share",
		    // "slideShow",
		    //"fullScreen",
		    //"download",
		    "thumbs",
		    "close"
		  ],
	});

	$('.tovar__addwich').click(function(){
		if($(this).hasClass('noadd')){
			event.preventDefault()
			$(this).removeClass('noadd')
		}
		
	})

	// Табы.
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
	

	$('.tabs-form .select').selectric({
		onChange: function() {
			$('.tabs-form__rate label').eq($('.tabs-form .selectric span').text() - 1).click()
		    // alert($('.tabs-form .selectric span').text())
		  },
	})	

	$('.tabs-form__rate label').click(function(){
		let labelIndex = $(this).attr('for')
		let selectIndex = $('#'+labelIndex+'').index() / 2 - 1
		$('.tabs-form .select').prop('selectedIndex', selectIndex).selectric('refresh');
	})
	 
	
	$('.otziv-btn').click(function(){
		$('html, body').animate({
		    scrollTop: $('.tabs-form').offset().top - 100
		}, 500, 'linear');
	})
	
	$('.enciclope__mob-btn').click(function(){
		$('.enciclope-filter form').slideToggle(200)
	})
})