$( document ).ready(function() {
    preloader();//Fade preloader when page loaded
    $('.carousel').carousel({
        interval: 2000,
        touch: true
    })

    //clickButtonMenu();
    lazyScrollFade($('.btn-up-1'),500);
    lazyScroll($('.award-link'), 500);
    mmenuToggle($('#mobile-menu'), $('#humburger'));

});












// functions -------------------------------------------

function mmenuToggle(menu, icon){
    var $menu = menu.mmenu({
        "extensions": [
            "position-left",
            "theme-white",
        ]
    });
    var $icon = icon;
    var api = $menu.data( "mmenu" );
    $icon.on( "click", function() {
        api.open();
    });
    api.bind( "open:start", function() {
        $('body').addClass('menu-open');
    });
    api.bind( "open:finish", function() {
        setTimeout(function() {
            $icon.addClass( "is-active" );
        }, 100);
        $icon.on( "click", function() {
            api.close();
        });
    });
    api.bind( "close:finish", function() {
        $('body').removeClass('menu-open');
        setTimeout(function() {
            $icon.removeClass( "is-active" );
        }, 100);
        $icon.on( "click", function() {
            api.open();
        });
    });
}

function preloader () {
    $(window).on('load', function () {
        $('.loader-outer').fadeOut();
    });
}

function lazyScrollFade(anchor, speed) {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 350) {
            anchor.fadeIn();
        }else{
            anchor.fadeOut();
        }
    });
    anchor.on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({scrollTop:$(href).offset().top}, speed);
    });
}
function lazyScroll(anchor, speed) {
    anchor.on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({scrollTop:$(href).offset().top}, speed);
    });
}

$(".gallary-ps").jqPhotoSwipe({});
$(".pedigree-link").jqPhotoSwipe({
    forceSingleGallery: true
});


$('.slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    mobileFirst: true
});
$('.slick-slider-with-arrows').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: 'i.fas.fa-chevron-left',
    nextArrow: 'i.fas.fa-chevron-right',
    pauseOnFocus: false,
    pauseOnHover: false
});

