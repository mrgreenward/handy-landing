import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import 'owl.carousel';

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

