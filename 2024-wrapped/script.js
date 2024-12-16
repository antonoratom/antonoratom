if (window.innerWidth > 991) {
  const heroDuration = 4;
  const textBlurDuration = 2;

  setTimeout(function () {
    $("html, body").scrollTop(0);
  }, 200); // 200 milliseconds delay

  $("[hero-section-trigger]").each(function () {
    let pageLoad = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => disableScroll(),
        //   onLeaveBack: () => enableScroll(),
        // markers: true,
      },
      onComplete: () => {
        enableScroll();
        runOtherAnimations();
      },
    });

    pageLoad.from(".for-2024_imgs-wrap", {
      scale: 0.1,
      rotation: -45,
      duration: heroDuration,
      delay: 0.5,
    });

    pageLoad.from(
      ".for-2024_case-img",
      {
        width: "0rem",
        opacity: 0,
        stagger: { amount: heroDuration / 2 },
        duration: heroDuration / 2,
        delay: 0.5,
      },
      0
    );

    pageLoad.from("[hero-scroll-down]", {
      filter: "blur(10px)",
      opacity: 0,
      duration: textBlurDuration / 2,
      delay: 1,
    });

    pageLoad.from(
      "[first-blur-text-target]",
      {
        filter: "blur(10px)",
        opacity: 0,
        duration: heroDuration / 2,
        delay: 0.5,
      },
      heroDuration / 2
    );
    // pageLoad.from(
    //   "._2024-wrapped-scrollbar_wrap",
    //   {
    //     x: "10px",
    //     opacity: 0,
    //     duration: heroDuration / 2,
    //   },
    //   heroDuration
    // );
  });

  // Function to disable scrolling
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  // Function to enable scrolling
  function enableScroll() {
    document.body.style.overflow = "";
  }

  // ---------IMAGES SCRUB--------- //

  let heroScrub = gsap.timeline({
    scrollTrigger: {
      trigger: ".triggers_first",
      start: "top top",
      end: "bottom top",
      // markers: true,
      scrub: true,
    },
  });

  heroScrub.from(".for-2024_imgs-bl", {
    rotation: -45,
  });

  // ---------END OF LOADING ANIMATION--------- //
  // ---------END OF LOADING ANIMATION--------- //
  // ---------END OF LOADING ANIMATION--------- //

  function runOtherAnimations() {
    // ---------FIRST SCROLL TRIGGER--------- //
    let firstScrollBar = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_first",
        start: "top top",
        end: "bottom 50%",
        // markers: true,
        scrub: true,
        toggleActions: "play none none none",
      },
    });
    firstScrollBar.to("[scrollbar-item='first']", {
      height: "100%",
      ease: "linear",
    });

    let firstScrollBarSize = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_first",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
    });

    firstScrollBarSize.to("[scrollbar-wrap='first']", {
      height: "20vh",
      ease: "linear",
      width: "0.4rem",
      duration: 0.6,
    });

    const customScrollbar = document.getElementById("global-scroll-bar");

    // Set a delay of 600 milliseconds (0.6 seconds)
    setTimeout(() => {
      customScrollbar.style.opacity = 1;
      customScrollbar.style.transform = "translateX(0px)";
    }, 1000);

    let firstScrollDownCTA = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_first",
        start: "bottom 50%",
        end: "bottom 50%",
        toggleActions: "play none none none",
      },
    });
    firstScrollDownCTA.to(
      "[hero-scroll-down]",
      {
        opacity: 0,
        duration: 0.6,
      },
      0
    );

    let firstScroll = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_first",
        start: "bottom 50%",
        end: "bottom 50%",
        // toggleActions: "play none reverse none",
        // markers: true,
        onLeave: () => {
          // Play the animation when entering
          firstScroll.play();
        },
        onEnterBack: () => {
          // Play the animation in reverse at 2x speed
          firstScroll.timeScale(2).reverse();
        },
      },
    });

    firstScroll.to(
      "[image-to-kill='kill']",
      {
        width: "0rem",
        opacity: 0,
        stagger: { amount: 0.8 },
        duration: 1,
      },
      0
    );

    firstScroll.to(
      "[first-blur-text-target]",
      {
        filter: "blur(10px)",
        opacity: 0,
        duration: textBlurDuration,
      },
      0
    );
  }

  function myFunction() {
    document.querySelector("._2024-wrapped_second-scroll").style.display =
      "flex";
    document.querySelector("._2024-wrapped_third-scroll").style.display =
      "flex";
    document.querySelector("._2024-wrapped_fourth-scroll").style.display =
      "flex";
    document.querySelector("._2024-wrapped_fifth-scroll").style.display =
      "flex";
    document.querySelector("._2024-decorations_wrap").style.display = "flex";

    //---------LENIS SCROLL---------//
    let lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.4,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    $("[data-lenis-start]").on("click", function () {
      lenis.start();
    });
    $("[data-lenis-stop]").on("click", function () {
      lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function () {
      $(this).toggleClass("stop-scroll");
      if ($(this).hasClass("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });
    //---------LENIS SCROLL END---------//

    // ---------SECOND SCROLL TELEPORTATION TRIGGER--------- //

    // Function to handle teleportation for each trigger-target pair
    const setupTeleportation = (triggerAttr, targetAttr) => {
      const teleportItem = document.querySelector(
        `[teleport-item-trigger="${triggerAttr}"]`
      );
      const targetPosition = document.querySelector(
        `[teleport-item-target="${targetAttr}"]`
      );

      // Check if both the trigger and target exist
      if (!teleportItem || !targetPosition) return;

      const originalContainer = teleportItem.parentElement;

      const teleportElement = () => {
        const state = Flip.getState(teleportItem);
        targetPosition.appendChild(teleportItem);
        Flip.from(state, { duration: 1, ease: "power1.inOut" });
      };

      const teleportBack = () => {
        const state = Flip.getState(teleportItem);
        originalContainer.appendChild(teleportItem);
        Flip.from(state, { duration: 1, ease: "power1.inOut" });
      };

      // GSAP timeline with ScrollTrigger for each trigger-target pair
      gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: `.triggers_second`, // Ensure correct trigger
          start: "top 50%",
          end: "bottom 50%",
          // markers: true,
          onEnter: teleportElement,
          onLeaveBack: teleportBack,
        },
      });
    };

    // Setup teleportation for each pair
    const triggerTargetPairs = ["first", "second", "third"];
    triggerTargetPairs.forEach((pair) => {
      setupTeleportation(pair, pair);
    });

    // ---------SECOND SCROLL TRIGGER--------- //
    let secondScrollBar = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_second",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        scrub: true,
        toggleActions: "play none none none",
      },
    });
    secondScrollBar.to("[scrollbar-item='second']", {
      height: "100%",
      ease: "linear",
    });

    let secondScrollBarSize = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_second",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
    });

    secondScrollBarSize.to("[scrollbar-wrap='second']", {
      height: "20vh",
      ease: "linear",
      width: "0.4rem",
      duration: 0.6,
    });
    let secondScroll = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_second",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          secondScroll.play();
        },
        onLeave: () => {
          secondScroll.timeScale(2).reverse();
        },
        onEnterBack: () => {
          secondScroll.play();
        },
        onLeaveBack: () => {
          secondScroll.timeScale(2).reverse();
        },
        // markers: true,
      },
    });

    secondScroll.from(
      "[second-blur-text-target]",
      {
        filter: "blur(10px)",
        opacity: 0,
        duration: textBlurDuration,
      },
      0
    );

    let secondScrollImg = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_second",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "none play reverse reset",
        // markers: true,
      },
    });
    secondScrollImg.to(
      "[second-images-target]",
      {
        opacity: 0,
        duration: 0.8,
      },
      0
    );

    // ---------THIRD SCROLL TRIGGER--------- //
    let thirdScrollBar = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_third",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        scrub: true,
        toggleActions: "play none none none",
      },
    });
    thirdScrollBar.to("[scrollbar-item='third']", {
      height: "100%",
      ease: "linear",
    });

    let thirdScrollBarSize = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_third",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
    });

    thirdScrollBarSize.to("[scrollbar-wrap='third']", {
      height: "20vh",
      ease: "linear",
      width: "0.4rem",
      duration: 0.6,
    });

    let thirdScroll = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_third",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          thirdScroll.play();
        },
        onLeave: () => {
          thirdScroll.timeScale(2).reverse();
        },
        onEnterBack: () => {
          thirdScroll.play();
        },
        onLeaveBack: () => {
          thirdScroll.timeScale(2).reverse();
        },
        // markers: true,
      },
    });

    thirdScroll.from(
      "[third-blur-text-target]",
      {
        filter: "blur(10px)",
        opacity: 0,
        duration: textBlurDuration,
      },
      0
    );

    let thirdScrollStar = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_third",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          thirdScrollStar.play();
        },
        onLeave: () => {
          thirdScrollStar.timeScale(8).reverse();
        },
        onEnterBack: () => {
          thirdScrollStar.play();
        },
        onLeaveBack: () => {
          thirdScrollStar.timeScale(8).reverse();
        },
        // markers: true,
      },
    });

    thirdScrollStar.from("[third-star]", {
      filter: "blur(2px)",
      opacity: 0,
      duration: 10,
    });

    // ---------FOURTH SCROLL TRIGGER--------- //

    let fourthScrollBar = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_fourth",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        scrub: true,
        toggleActions: "play none none none",
      },
    });
    fourthScrollBar.to("[scrollbar-item='fourth']", {
      height: "100%",
      ease: "linear",
    });

    let fourthScrollBarSize = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_fourth",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
    });

    fourthScrollBarSize.to("[scrollbar-wrap='fourth']", {
      height: "20vh",
      ease: "linear",
      width: "0.4rem",
      duration: 0.6,
    });

    let fourthScroll = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_fourth",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          fourthScroll.play();
        },
        onLeave: () => {
          fourthScroll.timeScale(2).reverse();
        },
        onEnterBack: () => {
          fourthScroll.play();
        },
        onLeaveBack: () => {
          fourthScroll.timeScale(2).reverse();
        },
        // markers: true,
      },
    });

    fourthScroll.from(
      "[fourth-blur-text-target]",
      {
        filter: "blur(10px)",
        opacity: 0,
        duration: textBlurDuration,
      },
      0
    );
    fourthScroll.from(
      "[fours-feedbacks-target='first']",
      {
        top: "32",
        left: "32",
        opacity: 0,
        rotation: 3,
        duration: 1.2,
      },
      0
    );

    fourthScroll.from(
      "[fours-feedbacks-target='second']",
      {
        top: "32",
        right: "32",
        opacity: 0,
        rotation: -3,
        duration: 1.2,
      },
      "<0.4"
    );
    fourthScroll.from(
      "[fours-feedbacks-target='third']",
      {
        bottom: "32",
        // right: "32",
        opacity: 0,
        rotation: -4,
        duration: 1.2,
      },
      "<0.4"
    );

    // ---------FIFTH+SIXTH SCROLL TRIGGER--------- //

    let fifthScrollBar = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_fifth",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        scrub: true,
        toggleActions: "play none none none",
      },
    });
    fifthScrollBar.to("[scrollbar-item='fifth']", {
      height: "100%",
      ease: "linear",
    });

    let fifthScrollBarSize = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_fifth",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
    });

    fifthScrollBarSize.to("[scrollbar-wrap='fifth']", {
      height: "20vh",
      width: "0.4rem",
      ease: "linear",
      duration: 0.6,
    });

    let fifthSixthScroll = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".fifth-sixth-trigger",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          fifthSixthScroll.play();
        },
        onLeave: () => {
          fifthSixthScroll.timeScale(2).reverse();
        },
        onEnterBack: () => {
          fifthSixthScroll.play();
        },
        onLeaveBack: () => {
          fifthSixthScroll.timeScale(2).reverse();
        },
        // markers: true,
      },
    });

    fifthSixthScroll.from(
      "[fifth-blur-text-target]",
      {
        filter: "blur(10px)",
        opacity: 0,
        duration: textBlurDuration,
      },
      0
    );

    let fifthsixthScrollHeart = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".fifth-sixth-trigger",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          fifthsixthScrollHeart.play();
        },
        onLeave: () => {
          fifthsixthScrollHeart.timeScale(8).reverse();
        },
        onEnterBack: () => {
          fifthsixthScrollHeart.play();
        },
        onLeaveBack: () => {
          fifthsixthScrollHeart.timeScale(8).reverse();
        },
        // markers: true,
      },
    });

    fifthsixthScrollHeart.from(
      "[sixth-heart]",
      {
        filter: "blur(0px)",
        opacity: 0,
        duration: 10,
      },
      0
    );

    // ---------SIXTH SCROLL TRIGGER--------- //

    let sixthScrollBar = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_sixth",
        start: "top 50%",
        end: "bottom bottom",
        // markers: true,
        scrub: true,
        toggleActions: "play none none none",
      },
    });
    sixthScrollBar.to("[scrollbar-item='sixth']", {
      height: "100%",
      ease: "linear",
    });

    let sixthScrollBarSize = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_sixth",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
    });

    sixthScrollBarSize.to("[scrollbar-wrap='sixth']", {
      height: "20vh",
      width: "0.4rem",
      ease: "linear",
      duration: 0.6,
    });

    let sixthScroll = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".triggers_sixth",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          sixthScroll.play();
        },
        onLeave: () => {
          sixthScroll.timeScale(2).reverse();
        },
        onEnterBack: () => {
          sixthScroll.play();
        },
        onLeaveBack: () => {
          sixthScroll.timeScale(2).reverse();
        },
        // markers: true,
      },
    });

    sixthScroll.to(
      "._2024-thank-you_wrap",
      {
        scale: 0.6,
        top: "23%",
        opacity: 0.5,
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    // Select the path
    const path = document.querySelector("[landscape-path]");

    // Get the total length of the path
    const pathLength = path.getTotalLength();

    // Set up initial styles for the path
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Add the animation to the timeline
    sixthScroll.to(path, { strokeDashoffset: 0, duration: 2 }, 0);

    sixthScroll.from(
      document.querySelectorAll("._2024-christmass-toys_wrap [christmas-toys]"),
      {
        y: -50, // Start position (adjust as needed)
        opacity: 0,
        stagger: {
          amount: 1, // Delay between each animation
          from: "random", // Random order
        },
        ease: "bounce.out", // Bounce effect
        duration: 1.6, // Duration of each animation
      },
      0
    );
    sixthScroll.from(
      "[sixth-blur-text-target]",
      {
        filter: "blur(10px)",
        opacity: 0,
        duration: textBlurDuration,
      },
      0.75
    );
    sixthScroll.from(
      ".my-site-2024",
      {
        filter: "blur(10px)",
        opacity: 0,
        duration: textBlurDuration,
      },
      1
    );

    sixthScroll.from(
      document.querySelectorAll(
        "._2024-christmass-landscape_trees-wrap ._2024-christmass-landscape_tree"
      ),
      {
        scale: 0,
        stagger: {
          amount: 0.6,
          from: "random", // Random order
        },
        ease: "power1.in", // Bounce effect
        duration: 1, // Duration of each animation
      },
      0.5
    );
  }
  setTimeout(myFunction, 3000);
} else {
  // // Select the path
  // const path = document.querySelector("[landscape-path]");
  // // Get the total length of the path
  // const pathLength = path.getTotalLength();
  // // Set up initial styles for the path
  // path.style.strokeDasharray = pathLength;
  // path.style.strokeDashoffset = pathLength;
  // // Add the animation to the timeline
  // gsap.to(path, { strokeDashoffset: 0, duration: 2 }, 0);
  // gasp.from(
  //   document.querySelectorAll("._2024-christmass-toys_wrap [christmas-toys]"),
  //   {
  //     y: -50, // Start position (adjust as needed)
  //     opacity: 0,
  //     stagger: {
  //       amount: 1, // Delay between each animation
  //       from: "random", // Random order
  //     },
  //     ease: "bounce.out", // Bounce effect
  //     duration: 1.6, // Duration of each animation
  //   },
  //   0
  // );
  // gsap.from(
  //   "[sixth-blur-text-target]",
  //   {
  //     filter: "blur(10px)",
  //     opacity: 0,
  //     duration: textBlurDuration,
  //   },
  //   0.75
  // );
  // gsap.from(
  //   ".my-site-2024",
  //   {
  //     filter: "blur(10px)",
  //     opacity: 0,
  //     duration: textBlurDuration,
  //   },
  //   1
  // );
  // gsap.from(
  //   document.querySelectorAll(
  //     "._2024-christmass-landscape_trees-wrap ._2024-christmass-landscape_tree"
  //   ),
  //   {
  //     scale: 0,
  //     stagger: {
  //       amount: 0.6,
  //       from: "random", // Random order
  //     },
  //     ease: "power1.in", // Bounce effect
  //     duration: 1, // Duration of each animation
  //   },
  //   0.5
  // );
}
