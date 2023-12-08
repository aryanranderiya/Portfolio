document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title-heading");
  const heading_title = document.querySelector(".heading_title");

  // ! Titles

  title.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(12)";
    cursor.style.mixBlendMode = "difference";
    cursor.style.boxShadow = "none";
  });

  title.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.mixBlendMode = "normal";
    cursor.style.boxShadow = "0px 0px 30px white";
  });

  //! GSAP Plugin to scroll Headers
  gsap.registerPlugin(ScrollTrigger);

  let cont = document.querySelector(".img-carousel");

  gsap.to("img", {
    ease: "none",
    x: () => -(cont.scrollWidth - window.innerWidth),
    scrollTrigger: {
      trigger: cont,
      pin: cont,
      start: "center center",
      end: () => "+=" + (cont.scrollWidth - window.innerWidth),
      scrub: true,
      invalidateOnRefresh: true,
      markers: false,
    },
  });

  //! First Intersection Observer for the headers text
  function handleIntersection(entries, observer) {
    //! Fade in the content box
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("test1");
        heading_title.style.opacity = "1";
      } else {
        heading_title.style.opacity = "0";
        console.log("test2");
      }
    });
  }
  const observer1 = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  observer1.observe(heading_title);
});
