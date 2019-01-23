$( document ).ready(function() {
    preloader();//Fade preloader when page loaded
    $('.carousel').carousel({
        interval: 2000,
        touch: true
    })

    clickButtonMenu();
    lazyScroll($('.btn-up-1'),500);

    //initPhotoSwape();


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

function lazyScroll(anchor, speed) {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 450) {
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


// function initPhotoSwape() {
//     $('.cats-images-item, .img-item').on('click', function(){
//         var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
//         gallery.init();
//     });
// }
//
//
// var pswpElement = document.querySelectorAll('.pswp')[0];
//
// // build items array
// var items = [
//     {
//         src: 'img/card-cats/cats.jpg',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'img/card-cats/cats_m.jpg',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'img/card-cats/litl.jpg',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'img/card-cats/litl2.jpg',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'img/card-cats/vipusk.jpg',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'img/card-cats/cats.jpg',
//         w: 600,
//         h: 400
//     }
//
//
//
//
// ];
//
// // define options (if needed)
// var options = {
//     // optionName: 'option value'
//     // for example:
//     index: 0 // start at first slide
// };
