//THIS JAVASCRIPT FILE IS FOR THE GALLERY

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 3,
    grabCursor: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 200,
      modifier:1,
      slideShadows: true,
    },
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
        delay: 3000,
      },
      320: {
        slidesPerView: 1,
        autoplay: false,
      },
    },
  });
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");