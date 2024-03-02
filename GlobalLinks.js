// ON PAGE LOAD
$(".main-container").addClass("first");
$(".inner-pages").addClass("first");

let nextPageLink;

// ON CLICK
$(".nav-home:not(.w--current)").on("click", function (e) {
  e.preventDefault();
  nextPageLink = $(this).attr("href");
  // AJAX
  $.ajax({
    url: nextPageLink,
    success: function (response) {
      let element = $(response).find(".main-container").addClass("second");
      $(".global-wrapper").append(element);
      pageTransition(e); // Call pageTransition with the event
    },
  });
});

$(document).on("click", function (e) {
  // Handle click event
});

function pageTransition(e) {
  $("html").addClass("animating");

  // Calculate dynamic values inside pageTransition
  let mousePageTop = e.pageY - $(window).scrollTop();
  let mousePageLeft = e.pageX;
  let percentPageTop = (mousePageTop / $(window).height()) * 100;
  let percentPageLeft = (mousePageLeft / $(window).width()) * 100;

  // GSAP
  let tl = gsap.timeline({
    onComplete: updatePage,
  });

  if ($(window).width() > 991) {
    tl.fromTo(
      ".main-container.second ",
      { clipPath: `circle(15% at ${percentPageLeft}% ${percentPageTop}%)` },
      {
        clipPath: `circle(140% at ${percentPageLeft}% ${percentPageTop}%)`,
        duration: 2,
        ease: "sine.out",
      }
    );
  } else {
    tl.fromTo(
      ".main-container.second ",
      {
        clipPath: `circle(0% at ${percentPageLeft}% ${percentPageTop}%)`,
        opacity: 0,
      },
      {
        clipPath: `circle(0% at ${percentPageLeft}% ${percentPageTop}%)`,
        opacity: 1,
        duration: 0.1,
        ease: "sine.out",
      }
    );
  }
}

function updatePage() {
  // Update the page as needed after the animation completes
}

//INNER PAGES BLUR CONTENT
//ON CLICK
$(".nav-inner:not(.w--current)").on("click", function (e) {
  e.preventDefault();
  nextPageLink = $(this).attr("href");
  //AJAX
  $.ajax({
    url: nextPageLink,
    success: function (response) {
      let element = $(response).find(".inner-pages").addClass("second");
      $(".main-container").append(element);
    },
    complete: function () {
      pageTransitionInner();
    },
  });
});

function pageTransitionInner() {
  $("html").addClass("animating");
  //GSAP
  let tl = gsap.timeline({
    onComplete: updatePage,
  });
  tl.fromTo(
    ".inner-pages.first",
    {
      filter: "blur(0px)", // Initial blur amount
      opacity: "100%",
    },
    {
      filter: "blur(50px)", // Final blur amount
      opacity: "0%",
      duration: 2,
      ease: "sine.out",
    }
  );
  tl.fromTo(
    ".inner-pages.second",
    {
      filter: "blur(50px)", // Initial blur amount
      opacity: "0%",
    },
    {
      filter: "blur(0px)", // Final blur amount
      opacity: "100%",
      duration: 2,
      ease: "sine.out",
    },
    0
  );
}

//OLD PART
function updatePage() {
  window.location = nextPageLink;
}
