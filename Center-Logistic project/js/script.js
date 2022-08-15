const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".menu__item-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}))


$(function(){
    $('.clients__review').slick(
        {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,    
        dots:true,
        autoplay: true,
    })
})


$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    $("body").removeClass('show-nav');
    navbarToggle.removeClass('link__active');
    navbar.removeClass('show');

    $("html, body").animate({
        scrollTop: scrollElPos - headerH
    }, 500)
});
 

