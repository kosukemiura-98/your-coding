const mySwiper1 = new Swiper('.swiper1', {
  loop: true,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
})
const mySwiper2 = new Swiper('.swiper2', {
  loop: true,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
})
const mySwiper3 = new Swiper('.swiper3', {
  loop: true,
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
})

$('.feature__header').click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass('is-open');
  if ($(this).hasClass("is-open")) {
    $(this).text("詳細を閉じる");
  } else {
    $(this).text("詳細を開く");
  }
});

var trigger = $('.modal__trigger'),
  wrapper = $('.modal__wrapper'),
  layer = $('.modal__layer'),
  container = $('.modal__container'),
  close = $('.modal__close'),
  content = $('.modal__content');

$(trigger).click(function () {
  $(wrapper).fadeIn(400);
  $(content).html($(this).prop('outerHTML'));
  $(container).scrollTop(0);
  $('html, body').css('overflow', 'hidden');
});

$(layer).add(close).click(function () {
  $(wrapper).fadeOut(400);
  $('html, body').removeAttr('style');
});

$('.qa__header').click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass('is-open');
});