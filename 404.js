$(document).ready(function () {
  console.log("second code");
  // Set the initial clip path and opacity using inline styles
  $(".circle-m-wrap").css({
    "clip-path": `polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)`,
    opacity: "0"
  });
  $(".circle-l-wrap").css({
    "clip-path": `polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)`,
    opacity: "0"
  });
  $(".circle-s-wrap").css({
    "clip-path": `polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)`,
    opacity: "0"
  });

  $(".btn").click(function () {
    // Reset the clip-path and opacity values to their initial values
    $(".circle-m-wrap").css({
      "clip-path": `polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)`,
      opacity: "0",
      transition: "clip-path 1.5s ease-out, opacity 2s ease-out"
    });
    $(".circle-l-wrap").css({
      "clip-path": `polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)`,
      opacity: "0",
      transition: "clip-path 1.5s ease-out, opacity 2s ease-out"
    });
  });
  // Delay applying the dynamic clip path and opacity to trigger the transitions
  setTimeout(function () {
    $(".circle-m-wrap").css({
      "clip-path": `polygon(0 0%, 0% 0%, 0% 0, 100% 0, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0 100%)`,
      opacity: "1" // Set opacity to 20%
    });
    $(".circle-l-wrap").css({
      "clip-path": `polygon(0 0%, 0% 0%, 0% 0, 100% 0, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0 100%)`,
      opacity: "1"
    });
    $(".circle-s-wrap").css({
      "clip-path": `polygon(0 0%, 0% 0%, 0% 0, 100% 0, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0 100%)`,
      opacity: "1"
    });
    // Add transitions after setting the dynamic clip path and opacity
    $(".circle-m-wrap").css({
      transition: "clip-path 7s ease-out, opacity 1s ease"
    });
    $(".circle-l-wrap").css({
      transition: "clip-path 4s ease-out, opacity 1s ease"
    });
    $(".circle-s-wrap").css({
      transition: "clip-path 14s ease-out, opacity 1s ease"
    });
  }, 10); // Apply the changes after 1 second
});
