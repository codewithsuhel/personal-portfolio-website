// window.onscroll = () => {

//     let header = document.querySelector(header);

//     header.classList.toggle('sticky', window.scrollY > 100);
// }

/* Swiper Js */

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    //  ScrollReveal JS

    ScrollReveal({
       reset: true,
       distance:'80px',
       duration:2000,
       delay:200
    });

    ScrollReveal().reveal('.home-content, .heading, .portfolio-box-2', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .about-content, .service-content, .portfolio-item, .testimonial-wrapper, .contactForm, .portfolio-box-5', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h2, .heading, .about-img, .contactForm h2, .service-content h2, .service-1, .service-heading-3, .portfolio-box-1, .portfolio-box-4', { origin: 'left' });
    ScrollReveal().reveal('.about-info, .service-3, .service-heading-1, .portfolio-box-3, .portfolio-box-6', { origin: 'right' });
  