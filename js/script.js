(function($) {
    "use strict"; 


/*-- 
    Menu Toggle
-----------------------------------*/
var castomToggler = $('.Castom-toggler');
var togglerBar= $('.toggler-bar');
togglerBar.on('click', function(){
    if( castomToggler.hasClass('open') ) {
        castomToggler.removeClass('open');
        $(this).html('<i class="fas fa-bars"></i>');
    }else{
        castomToggler.addClass('open');
        $(this).html('<i class="fas fa-times"></i>');
    }
});

/*-- 
    Search Toggle
-----------------------------------*/
var headerSearch = $('.header-search');
var searchToggle = $('.search-toggle');
searchToggle.on('click', function(){
    if( headerSearch.hasClass('open') ) {
        headerSearch.removeClass('open');
        $(this).html('<i class="fas fa-search"></i>');
    }else{
        headerSearch.addClass('open');
        $(this).html('<i class="fas fa-times"></i>');
    }
});






})(jQuery);