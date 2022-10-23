// $(document).ready(function() {
//     $(window).scroll(function() {
//         if (this.scrollY > -1) {
//             $('.navbar').addClass('sticky');
//         } else {
//             $('.navbar').removeClass('sticky');
//         }
//     });

// toggle menu/navbar script
$('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn ul').toggleClass("active");
});
$('.menu li a').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn ul').toggleClass("active");
});

// Typing Animation Script
var typed = new Typed(".typingdate", {
    strings: ["5th July,2022"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    // autoplay: true,
    autoplayTimeOut: 90,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        }
    }
});
$('.fac').owlCarousel({
    margin: 20,
    loop: true,
    // autoplay: true,
    autoplayTimeOut: 90,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});
$('.arghya').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 90,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        }
    }
});
$('.serv-content').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 90,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});
$('.depanjan').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 90,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        }
    }
});
// })

let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minutesItem = document.querySelector("#minutes");
let secondsItem = document.querySelector("#seconds");
let countDown = () => {
    let futureDate = new Date("1 June 2022");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(myDate / 1000 / 60) % 60;
    let seconds = Math.floor(myDate / 1000) % 60;
    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minutesItem.innerHTML = minutes;
    secondsItem.innerHTML = seconds;
};
countDown();
setInterval(countDown, 1000);
