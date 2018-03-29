
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import 'owl.carousel';

$('.b-price').on('hover', function(){
    console.log('123213')
    $('.b-price').removeClass('b-price--hovered');
    $(this).addClass('b-price--hovered');
})

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:32,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        },
    }
})