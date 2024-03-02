//ON CLICK
$("#contact:not(.w--current)").on("click", function (e) {
  e.preventDefault();
  nextPageLink = $(this).attr("href");
  //AJAX
  $.ajax({
    url: nextPageLink,
    complete: function () {
      pageTransitionAboutToContact();
    },
  });
});

function pageTransitionAboutToContact() {
  $("html").addClass("animating");

  let tl = gsap.timeline({
    onComplete: updatePage,
  });

  tl.fromTo(
    ".circle-bl.js.first",
    {
      clipPath:
        "polygon(50% 70%, 35% 100%, 0% 100%, 0 50%, 30% 50%, 30% 50%, 0 50%, 0% 0%, 35% 0, 50% 30%, 65% 0, 100% 0%, 100% 50%, 72% 50%, 72% 50%, 100% 50%, 100% 100%, 65% 100%)",
    },
    {
      clipPath:
        "polygon(50% 70%, 35% 100%, 0% 100%, 0 50%, 30% 50%, 30% 50%, 0 50%, 0% 0%, 35% 0, 50% 30%, 65% 0, 100% 0%, 100% 50%, 72% 50%, 72% 50%, 100% 50%, 100% 100%, 65% 100%)",
      duration: 2,
      ease: "sine.out",
    }
  );
}
