import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import './owl.carousel.min.js';

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})