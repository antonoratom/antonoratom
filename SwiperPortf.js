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

//EIG crustag swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-eig-crustag", {
    freeMode: true,
    mousewheel: {
      enabled: true,
      sensitivity: 0.35
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    keyboard: true
  });
}

//Sirocco swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-sirocco", {
    freeMode: true,
    mousewheel: {
      enabled: true,
      sensitivity: 0.35
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    keyboard: true
  });
}

//and action swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-and-action", {
    freeMode: true,
    mousewheel: {
      enabled: true,
      sensitivity: 0.35
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    keyboard: true
  });
}

//Rebbix swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-rebbix", {
    freeMode: true,
    mousewheel: {
      enabled: true,
      sensitivity: 0.35
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    keyboard: true
  });
}

//Hometainment swiper
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-hometainment", {
    freeMode: true,
    mousewheel: {
      enabled: true,
      sensitivity: 0.35
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    keyboard: true
  });
}

//WEBSITE PREVIEW
if (window.innerWidth > 991) {
  var swiper = new Swiper(".swiper-web-wrap", {
    freeMode: true,
    mousewheel: {
      enabled: true,
      sensitivity: 0.35
    },
    slidesPerView: 2.5,
    spaceBetween: 30,
    centeredSlides: false
  });
}
