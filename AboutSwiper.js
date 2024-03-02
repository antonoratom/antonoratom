//About me imgs Swiper
var swiper = new Swiper(".swiper-about", {
  freeMode: true,
  mousewheel: {
    enabled: true,
    sensitivity: 0.2
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  }
});
