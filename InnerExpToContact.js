//ON CLICK
$("#contact").on("click", function (e) {
  e.preventDefault();
  nextPageLink = $(this).attr("href");
  //AJAX
  $.ajax({
    url: nextPageLink,
    complete: function () {
      pageTransitionExpToContact();
    }
  });
});

function pageTransitionExpToContact() {
  $("html").addClass("animating");

  let tl = gsap.timeline({
    onComplete: updatePage
  });

  tl.fromTo(
    ".circle-bl.js.first",
    {
      clipPath:
        "polygon(50% 70%, 35% 100%, 0% 100%, 0 80%, 30% 80%, 30% 9%, 0 9%, 0% 0%, 35% 0, 50% 30%, 65% 0, 100% 0%, 100% 9%, 72% 9%, 72% 80%, 100% 80%, 100% 100%, 65% 100%)"
    },
    {
      clipPath:
        "polygon(50% 70%, 35% 100%, 0% 100%, 0 50%, 30% 50%, 30% 50%, 0 50%, 0% 0%, 35% 0, 50% 30%, 65% 0, 100% 0%, 100% 50%, 72% 50%, 72% 50%, 100% 50%, 100% 100%, 65% 100%)",
      duration: 2,
      ease: "sine.out"
    }
  );
}
