window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})

$('#button_main').click(function() {
    window.location.href = '#contacts';
    return false;
});

$('#button_game_what').click(function() {
    window.location.href = '#contacts';
    return false;
});


$('.nav-menu__list-item').click(function () {
    var location = window.location.href;
    var cur_url = location.split('/').pop();
 
    $('.nav-menu__list-item').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).addClass('nav-menu__list-item_active');
        }
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        autoplay:false,
        autoplayHoverPause:true,
        responsiveClass:true,
        dotsEach:true,
        navText:[
            '<img src="icons/icon_arrows_left.svg" alt="icon_arrows_left">',
            '<img src="icons/icon_arrows_right.svg" alt="icon_arrows_right">'
        ],
        responsive:{
            0:{
                items:1,
                loop:true
            },
            1250:{
                items:3,
                loop:true,
                center:true,
                nav:true
            }
        }
    });
  });