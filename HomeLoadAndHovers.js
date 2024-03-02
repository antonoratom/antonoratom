$(document).ready(function () {
  console.log("second code");
  // Get the position of .clip-trig element
  var clipPositionTR = $(".nav-trig.t-r").offset();
  var clipPositionBR = $(".nav-trig.b-r").offset();
  var clipPositionTL = $(".nav-trig.t-l").offset();
  var clipPositionBL = $(".nav-trig.b-l").offset();

  // Calculate the top and left values relative to the window
  var clipTopTR = clipPositionTR.top - $(window).scrollTop();
  var clipLeftTR = clipPositionTR.left - $(window).scrollLeft();

  var clipTopBR = clipPositionBR.top - $(window).scrollTop();
  var clipLeftBR = clipPositionBR.left - $(window).scrollLeft();

  var clipTopTL = clipPositionTL.top - $(window).scrollTop();
  var clipLeftTL = clipPositionTL.left - $(window).scrollLeft();

  var clipTopBL = clipPositionBL.top - $(window).scrollTop();
  var clipLeftBL = clipPositionBL.left - $(window).scrollLeft();

  // Calculate percentages
  var percentTopTR = (clipTopTR / $(window).height()) * 100;
  var percentLeftTR = (clipLeftTR / $(window).width()) * 100;

  var percentTopBR = (clipTopBR / $(window).height()) * 100;
  var percentLeftBR = (clipLeftBR / $(window).width()) * 100;

  var percentTopTL = (clipTopTL / $(window).height()) * 100;
  var percentLeftTL = (clipLeftTL / $(window).width()) * 100;

  var percentTopBL = (clipTopBL / $(window).height()) * 100;
  var percentLeftBL = (clipLeftBL / $(window).width()) * 100;

  // Log the percent values in the console
  // console.log("percentTopTR:", percentTopTR);
  // console.log("percentLeftTR:", percentLeftTR);
  // console.log("percentTopBR:", percentTopBR);
  // console.log("percentLeftBR:", percentLeftBR);
  // console.log("percentTopTL:", percentTopTL);
  // console.log("percentLeftTL:", percentLeftTL);
  // console.log("percentTopBL:", percentTopBL);
  // console.log("percentLeftBL:", percentLeftBL);

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
    "clip-path": `polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)`
  });
  $(".circle-bl.border-dark.css").css({
    opacity: "0"
  });

  $(".nav").click(function () {
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
      "clip-path": `polygon(0 ${percentTopTL}%, ${percentLeftTL}% ${percentTopTL}%, ${percentLeftTL}% 0, ${percentLeftTR}% 0, ${percentLeftTR}% ${percentTopTR}%, 100% ${percentTopTR}%, 100% ${percentTopBR}%, ${percentLeftBR}% ${percentTopBR}%, ${percentLeftBR}% 100%, ${percentLeftBL}% 100%, ${percentLeftBL}% ${percentTopBL}%, 0 ${percentTopBL}%)`,
      opacity: "1" // Set opacity to 20%
    });
    $(".circle-l-wrap").css({
      "clip-path": `polygon(0 0%, 0% 0%, 0% 0, 100% 0, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0 100%)`,
      opacity: "1"
    });
    $(".circle-s-wrap").css({
      "clip-path": `polygon(0 0%, 0% 0%, 0% 0, 100% 0, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0 100%)`
    });
    $(".circle-bl.border-dark.css").css({
      opacity: "1"
    });
    // Add transitions after setting the dynamic clip path and opacity
    $(".circle-m-wrap").css({
      transition: "clip-path 2s ease-out, opacity 1s ease"
    });
    $(".circle-l-wrap").css({
      transition: "clip-path 2s ease-out, opacity 1s ease"
    });
    $(".circle-s-wrap").css({
      transition: "clip-path 9s ease-out"
    });
    $(".circle-bl.border-dark.css").css({
      transition: "opacity 1s ease"
    });
  }, 10); // Apply the changes after 1 second
  // Add a click event listener to the .nav element

  //clip-path: polygon(0 28%(left of top-left), 8% 28%(top-left), 8% 0(top of top-left), 92% 0(top of the top-right), 92% 28%(top-right), 100% 28% (right of the top-right), 100% 72%(right of the bottom-right), 92% 72%(bottom-right), 92% 100%(bottom of the bottom-right), 8% 100%(bottom of the bottom-left), 8% 72%(bottom-left), 0 72%(left of the bottom-left));
  //first number — left, second number — top
  //ANIMATION OF THE CIRCLE
  // Get the element with the class .hover-bg
  const navElements = document.querySelectorAll(".nav");
  const hoverBgElement = document.querySelector(".hover-bg");

  //NEW CODE TO MOVE HOVER-BG
  let isHovered = false; // Variable to track whether .nav is hovered

  // Function to enable or disable animation based on hover state
  function toggleAnimation(enableAnimation) {
    if (enableAnimation) {
      document.body.addEventListener("mousemove", onMouseMove);
    } else {
      hoverBgElement.style.transform = ""; // Reset the transform
      document.body.removeEventListener("mousemove", onMouseMove);
    }
  }

  // Function to handle mousemove event
  function onMouseMove(e) {
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    const translateX = (mouseX - 50) * 0.2;
    const translateY = (mouseY - 50) * 0.2;

    hoverBgElement.style.transform = `translate(${translateX}%, ${translateY}%)`;
  }

  // Add event listeners to toggle animation on .nav hover
  navElements.forEach((navElement) => {
    navElement.addEventListener("mouseenter", () => {
      isHovered = true;
      toggleAnimation(false); // Disable animation on hover-in
    });

    navElement.addEventListener("mouseleave", () => {
      isHovered = false;
      toggleAnimation(true); // Enable animation on hover-out
    });
  });

  // Initialize animation
  toggleAnimation(true);

  // Calculate and store the initial position and size of hoverBgElement
  const initialPosition = hoverBgElement.getBoundingClientRect();
  const initialWidth = hoverBgElement.offsetWidth;
  const initialHeight = hoverBgElement.offsetHeight;

  // Add the initial position and size as inline styles to the HTML element
  hoverBgElement.style.left = `${initialPosition.left}px`;
  hoverBgElement.style.top = `${initialPosition.top}px`;
  hoverBgElement.style.width = `${initialWidth}px`;
  hoverBgElement.style.height = `${initialHeight}px`;

  // Add initial transition property to hoverBgElement
  hoverBgElement.style.transitionProperty = "left, top, width, height";

  // Add event listeners to each navElement
  navElements.forEach((navElement) => {
    navElement.addEventListener("mouseover", () => {
      // Get the updated position, width, and height of the navElement
      const newPosition = navElement.getBoundingClientRect();
      const newWidth = navElement.offsetWidth;
      const newHeight = navElement.offsetHeight;

      // Calculate and apply the position changes to hoverBgElement
      const leftOffset = newPosition.left - initialPosition.left;
      const topOffset = newPosition.top - initialPosition.top;

      // Set different transition timings for left and top
      hoverBgElement.style.transitionProperty = "left, top, width, height";
      hoverBgElement.style.transitionDuration = ".8s, 1s, 1s, 1s"; // Change the timings as needed
      hoverBgElement.style.transitionTimingFunction = "ease";

      hoverBgElement.style.left = `${initialPosition.left + leftOffset}px`;
      hoverBgElement.style.top = `${initialPosition.top + topOffset}px`;

      // Update the width and height of hoverBgElement
      hoverBgElement.style.width = `${newWidth}px`;
      hoverBgElement.style.height = `${newHeight}px`;
      navElement.style.transitionDelay = "0.5s";
      navElement.style.transitionDuration = "0.2s";
      navElement.style.color = "#edf2f2";
    });

    navElement.addEventListener("mouseout", () => {
      // Reset the position, width, and height of hoverBgElement to the initial values
      hoverBgElement.style.left = `${initialPosition.left}px`;
      hoverBgElement.style.top = `${initialPosition.top}px`;
      hoverBgElement.style.width = `${initialWidth}px`;
      hoverBgElement.style.height = `${initialHeight}px`;
      hoverBgElement.style.transitionDuration = "1.3s";
      hoverBgElement.style.transitionTimingFunction = "ease-out";

      navElement.style.transitionDelay = "0s";
      navElement.style.transitionDuration = "0.2s";
      navElement.style.color = "#2f2f2f";
    });
  });
});
