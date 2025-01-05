// Get references to the elements
const cardWraps = document.querySelectorAll(".prtfl-card-wrap");
const contentBlock = document.querySelector(".content");
const closeCasesWrap = document.querySelector(".close-wrap");

// Add click event listeners to each .prtfl-card-wrap
cardWraps.forEach((cardWrap) => {
  cardWrap.addEventListener("click", () => {
    contentBlock.style.zIndex = "5";
  });
});

// Add click event listener to .close-cases-wrap
closeCasesWrap.addEventListener("click", () => {
  contentBlock.style.zIndex = "auto";
});

const commonSwiperSettings = {
  freeMode: true,
  mousewheel: {
    enabled: true,
    sensitivity: 1.4,
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  keyboard: true,
};

//youhue
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-youhue", {
    ...commonSwiperSettings,
  });
}

//signal 26
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-signal-26", {
    ...commonSwiperSettings,
  });
}

//metrum
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-metrum", {
    ...commonSwiperSettings,
  });
}

//design calendar
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-design-calendar", {
    ...commonSwiperSettings,
  });
}

//EIG crustag swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-eig-crustag", {
    ...commonSwiperSettings,
  });
}

//Sirocco swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-sirocco", {
    ...commonSwiperSettings,
  });
}

//and action swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-and-action", {
    ...commonSwiperSettings,
  });
}

//Rebbix swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-rebbix", {
    ...commonSwiperSettings,
  });
}

//Hometainment swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-hometainment", {
    ...commonSwiperSettings,
  });
}

//WEBSITE PREVIEW
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-web-wrap", {
    freeMode: true,
    mousewheel: {
      enabled: true,
      sensitivity: 1.4,
    },
    slidesPerView: 2.5,
    spaceBetween: 30,
    centeredSlides: false,
  });
}
