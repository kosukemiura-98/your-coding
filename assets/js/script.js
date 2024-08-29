$(function () {
  var thumbSwiper = new Swiper('.thumb-slider', {
    spaceBetween: 5,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 10,
      }
    }
  });

  var mainSwiper = new Swiper('.main-slider', {
    spaceBetween: 5,
    slidesPerView: 1.1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 3,
    autoplay: {
      delay: 3000
    },
    speed: 1500,
    thumbs: {
      swiper: thumbSwiper
    },
    breakpoints: {
      768: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      }
    }
  });

});