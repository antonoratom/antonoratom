$(document).ready(function () {
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

    // Add transitions after setting the dynamic clip path and opacity
    $(".circle-m-wrap").css({
      transition: "clip-path 2s ease-out, opacity 1s ease"
    });
    $(".circle-l-wrap").css({
      transition: "clip-path 2s ease-out, opacity 1s ease"
    });
  }, 10); // Apply the changes after 1 second
  // Add a click event listener to the .nav element
});

//ANIMATION OF THE CIRCLE
const hoverBgElement = document.querySelector(".hover-bg");
const navElements = document.querySelectorAll(".nav");
const navInner = document.querySelectorAll(".nav-inner");
const currentNavElement = document.querySelector(".nav.w--current");
const initialPosition = currentNavElement.getBoundingClientRect();
const initialWidth = currentNavElement.offsetWidth;
const initialHeight = currentNavElement.offsetHeight;

hoverBgElement.style.left = `${initialPosition.left}px`;
hoverBgElement.style.top = `${initialPosition.top}px`;
hoverBgElement.style.width = `${initialWidth}px`;
hoverBgElement.style.height = `${initialHeight}px`;

window.addEventListener("load", () => {
  // Loop through each navElement
  navElements.forEach((navElement) => {
    // Set pointer-events to "none"
    navElement.style.pointerEvents = "none";
  });

  // After 1 second, reset pointer-events to "auto"
  setTimeout(() => {
    navElements.forEach((navElement) => {
      navElement.style.pointerEvents = "auto";
    });
  }, 1000); // 1000ms = 1s delay
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Add initial transition property to hoverBgElement
    hoverBgElement.style.transitionProperty = "left, top, width, height";
    hoverBgElement.style.opacity = "0";

    let isClicked = false; // Variable to track if navElement was clicked

    navElements.forEach((navElement) => {
      navElement.addEventListener("mouseover", () => {
        if (!isClicked) {
          const newPosition = navElement.getBoundingClientRect();
          const newWidth = navElement.offsetWidth;
          const newHeight = navElement.offsetHeight;

          const leftOffset = newPosition.left - initialPosition.left;
          const topOffset = newPosition.top - initialPosition.top;
          hoverBgElement.style.left = `${initialPosition.left + leftOffset}px`;
          hoverBgElement.style.top = `${initialPosition.top + topOffset}px`;

          hoverBgElement.style.width = `${newWidth}px`;
          hoverBgElement.style.height = `${newHeight}px`;
          currentNavElement.style.backgroundColor = "rgba(237, 242, 242, 0)";
          currentNavElement.style.transition = "background-color 0s";
          hoverBgElement.style.opacity = "1";
          hoverBgElement.style.transitionDuration = ".8s";
          currentNavElement.style.transition = "opacity 0s";
        }
      });

      navElement.addEventListener("click", () => {
        isClicked = true;
        // Additional code you want to run when navElement is clicked
        const newPosition = navElement.getBoundingClientRect();
        const leftOffset = newPosition.left - initialPosition.left;
        const topOffset = newPosition.top - initialPosition.top;
        hoverBgElement.style.left = `${initialPosition.left + leftOffset}px`;
        hoverBgElement.style.top = `${initialPosition.top + topOffset}px`;
      });

      navElement.addEventListener("mouseout", () => {
        if (!isClicked) {
          hoverBgElement.style.left = `${initialPosition.left}px`;
          hoverBgElement.style.top = `${initialPosition.top}px`;
          hoverBgElement.style.width = `${initialWidth}px`;
          hoverBgElement.style.height = `${initialHeight}px`;
        }
      });
    });

    currentNavElement.style.color = "#2f2f2f";
    currentNavElement.style.backgroundColor = "rgba(237, 242, 242, 1)";

    let isClickedLink = false; // Variable to track if navElement was clicked

    navElements.forEach((navElement) => {
      navElement.addEventListener("mouseenter", () => {
        if (!navElement.classList.contains("w--current")) {
          if (!isClickedLink) {
            currentNavElement.style.transitionDelay = "0s";
            currentNavElement.style.transitionDuration = "0.2s";
            currentNavElement.style.color = "#edf2f2";
            currentNavElement.style.backgroundColor = "rgba(237, 242, 242, 0)";
            currentNavElement.style.transition = "background-color 0s";
            hoverBgElement.style.opacity = "1";
            currentNavElement.style.transition = "opacity 0s";
            navElement.style.transitionDelay = "0.65s";
            navElement.style.transitionDuration = "0.2s";
            navElement.style.color = "#2f2f2f";
          }
        }
      });

      navElement.addEventListener("click", () => {
        isClickedLink = true;
        // Additional code you want to run when navElement is clicked
        // Stop transitions for color changes
        currentNavElement.style.transition = "none";
        navElement.style.transition = "none";
      });

      navElement.addEventListener("mouseleave", () => {
        if (!navElement.classList.contains("w--current")) {
          if (!isClickedLink) {
            currentNavElement.style.backgroundColor = "rgba(237, 242, 242, 0)";
            currentNavElement.style.transition = "background-color 0s 1s";
            currentNavElement.style.color = "#2f2f2f";
            currentNavElement.style.transition += ", color .2s .9s";
            navElement.style.transitionDelay = "0s";
            navElement.style.transitionDuration = "0.2s";
            navElement.style.color = "#edf2f2";
            hoverBgElement.style.transitionDuration = "1.3s";
          }
        }
      });
    });
  }, 1000); // Delay of 1 second (1000 milliseconds)
});
