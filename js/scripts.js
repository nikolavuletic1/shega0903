
// function sendEmail() {
//   Email.send({
//     Host : "smtp.google.com",
//     Username : "momobend@gmail.com",
//     Password : "momo1234567",
//     To : "nikola.vuletic82@gmail.com",
//     From : document.getElementById("email").value,
//     Subject : "This is the subject new new",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
//
// });



var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  // autoplay: true,
  // slidesPerView: 3,
  // spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    // 970: {
    //   thumbs: {
    //     swiper: null,
    //
    // },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});


  var swiper = new Swiper(".mySwiper2", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });







$(document).ready(function() {
  $('.menu-toggle').on('click', function() {
    $('.nav').toggleClass('showing');

  });
  $('.menu-toggle').on('click', function() {
    $('.post-slider').toggleClass('post-slider-down');
});
});
