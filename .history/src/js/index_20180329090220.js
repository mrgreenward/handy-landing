
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import 'owl.carousel';

$('.b-price').on('click', function(){
    $('.b-price').removeClass('b-rice--hovered');
    $(this).addClass('b-rice--hovered');
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