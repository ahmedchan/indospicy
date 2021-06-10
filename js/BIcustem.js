$(document).ready(function() {
 
  $('.owl-carousel').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='icon-left-open'></i>", "<i class='icon-right-open'></i>"]  
    
});
                   $(".owl-carousel2").owlCarousel({
                    items: 4,
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    
                }); 
    
    
    new WOW().init();

});