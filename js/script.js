$(document).ready(function () {
	$(".slider").slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: false,
		speed: 2000,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 766,
				settings: {
					arrows: false,
					slidesToShow: 2,
					centerMode: true,
				},
			},
			{
				breakpoint: 320,
				settings: {
					arrows: false,
					slidesToShow: 1,
					centerMode: true,
				},
			},
		],
	});
});

