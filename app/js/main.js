$(function(){

    $('.about-slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
    });
    $('.slick-dots li:nth-child(1) button').text('情報'); 
    $('.slick-dots li:nth-child(2) button').text('相手'); 
    $('.slick-dots li:nth-child(3) button').text('保証'); 
    $('.slick-dots li:nth-child(4) button').text('革新');

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $(".menu a").on('click', function (e) {

		e.preventDefault();


		var id  = $(this).attr('href'),

		
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 300);
	});
});