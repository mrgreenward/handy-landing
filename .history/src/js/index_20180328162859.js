
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import 'owl.carousel';


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:32,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1200:{
            items:3
        },
    }
})