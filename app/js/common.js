$( document ).ready(function() {
    preloader();//Fade preloader when page loaded
    $('.carousel').carousel({
        interval: 2000,
        touch: true
    })

    clickButtonMenu();

});








// functions -------------------------------------------

function preloader () {
    $(window).on('load', function () {
        $('.loader-outer').fadeOut();
    });
}

function clickButtonMenu() {
    $('.navbar-toggler').on('click', function () {
       $(this).parent().toggleClass('active');
    });
}