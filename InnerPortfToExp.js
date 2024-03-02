//ON CLICK
$("#expertise").on("click", function (e) {
  e.preventDefault();
  nextPageLink = $(this).attr("href");
  //AJAX
  $.ajax({
    url: nextPageLink,
    complete: function () {
      pageTransitionPortfToExp();
    },
  });
});

function pageTransitionPortfToExp() {
  $("html").addClass("animating");

  let tl = gsap.timeline({
    onComplete: updatePage,
  });

  tl.fromTo(
    ".circle-bl.js.first",
    {
      clipPath:
        "polygon(50% 70%, 35% 100%, 0% 100%, 0 88%, 30% 88%, 30% 20%, 0 20%, 0% 0%, 35% 0, 50% 30%, 65% 0, 100% 0%, 100% 18%, 72% 18%, 72% 85%, 100% 85%, 100% 100%, 65% 100%)",
    },
    {
      clipPath:
        "polygon(50% 70%, 35% 100%, 0% 100%, 0 80%, 30% 80%, 30% 9%, 0 9%, 0% 0%, 35% 0, 50% 30%, 65% 0, 100% 0%, 100% 9%, 72% 9%, 72% 80%, 100% 80%, 100% 100%, 65% 100%)",
      duration: 2,
      ease: "sine.out",
    }
  );
}
