$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.png" alt="Барбершоп">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});


	$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
	});


	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselServices()
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});


	function carouselServices() {
		$('.carousel-services-item').each(function() {
			var ths = $(this);
				 thsh = ths.find('.carousel-services-content').outerHeight();
				 ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselServices();


	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});


	//Resize window
	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onResize = function() {
		onResize()
	};


	$('select').selectize();


	$('.carousel-reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	});


	$('.carousel-partners').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});


	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}
		else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


	// $("form.callback").submit(function() {
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
	// 		setTimeout(function() {
	// 			$(th).find('.success').removeClass('active').fadeOut();
	// 			th.trigger("reset");
	// 		}, 3000);
	// 	});
	// 	return false;
	// });


	$(document).ready(function() {
		$('.preloader').fadeOut('slow');
	});


});
