
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import 'owl.carousel';


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:32,
    nav:false,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
    }
})