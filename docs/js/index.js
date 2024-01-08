document.addEventListener("DOMContentLoaded", function () {
  // ! Scroll on button click

  document.querySelector(".scroll_btn").addEventListener("click", function (e) {
    console.log("Scroll Button Clicked");
    cursoricon2.classList.remove("active");
    cursor.style.transform = "none";
    cursor.style.boxShadow = "0px 0px 30px white";

    const contentElement = document.querySelector(".content1");

    contentElement.scrollIntoView({
      top: contentElement.offsetTop,
      behavior: "smooth",
    });
  });

  const subContent = document.querySelector(".subcontent3");
  const content2 = document.querySelector(".content2");

  const navbar = document.querySelector(".navbar");

  //! First Intersection Observer
  function handleIntersection1(entries, observer) {
    //! Fade in the content box
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        entry.target.classList.add("zoom-out");
        // document.querySelector(".navbar").style.opacity = "1";
      } else {
        entry.target.classList.remove("fade-in");
        entry.target.classList.remove("zoom-out");
        // document.querySelector(".navbar").style.opacity = "0";
      }
    });
  }
  const observer1 = new IntersectionObserver(handleIntersection1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  observer1.observe(subContent);

  cursor.style.visibility = "hidden";

  // ! Scroll after animation finishes:
  function removeHelloWorldCover() {
    setTimeout(function () {
      // !!coverElement.scrollIntoView({ behavior: "smooth" });
      document.body.style.overflow = "auto";
      const welcoming = document.querySelector(".welcoming");
      welcoming.style.opacity = "0";
      // document.querySelector(".sect_welcoming").style.visibility = "hidden";
      cursor.style.mixBlendMode = "normal";
      cursor.style.transform = "none";
      cursor.style.boxShadow = "0px 0px 30px white";
      document.querySelector(".scroll_btn").style.opacity = "1";
      cursor.style.visibility = "visible";
    }, 800);

    setTimeout(function () {
      document.querySelector(".welcoming").remove();
      // document.querySelector(".sect_welcoming").remove();
    }, 1600);
  }

  const wrapperElement = document.querySelector(".words_rotating_span");
  wrapperElement.addEventListener("animationend", removeHelloWorldCover);

  const cover = document.querySelector(".titles");
  const titles = document.querySelector(".title_heading_1");
  const scroll_btn = document.querySelector(".scroll_btn");
  const main_text = document.querySelector(".typing_animation");
  const marquee = document.querySelector(".marquee");
  const hello_world = document.querySelector(".words");
  const cursoricon2 = document.getElementById("cursoricon2");
  const cursoricon3 = document.getElementById("cursoricon3");

  // ! Titles & Cover
  cover.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(8)";
    cursor.style.boxShadow = "none";
    cursor.classList.add("blur");
    cursoricon2.classList.add("active");
  });

  cover.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.boxShadow = "0px 0px 30px white";
    cursor.classList.remove("blur");

    cursoricon2.classList.remove("active");
  });

  //! Scroll Button

  scroll_btn.addEventListener("mouseover", (event) => {
    event.stopPropagation();
    cursor.style.transform = "none";
    cursor.style.boxShadow = "0px 0px 30px white";
    cursor.style.mixBlendMode = "normal";
    cursoricon2.classList.remove("active");
  });

  scroll_btn.addEventListener("mouseout", (event) => {
    event.stopPropagation();
    cursor.style.transform = "scale(8)";
    cursor.style.boxShadow = "none";
    cursor.style.mixBlendMode = "normal";
    cursoricon2.classList.add("active");
  });

  //! Project Buttons

  btn1.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(2)";
    cursor.style.mixBlendMode = "difference";
    cursor.style.boxShadow = "none";
    cursoricon2.classList.remove("active");
    cursoricon3.classList.add("active");
  });

  btn1.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.mixBlendMode = "normal";
    cursor.style.boxShadow = "0px 0px 30px white";
    cursoricon3.classList.remove("active");
  });

  btn2.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(2)";
    cursor.style.mixBlendMode = "difference";
    cursor.style.boxShadow = "none";
    cursoricon2.classList.remove("active");
    cursoricon3.classList.add("active");
  });

  btn2.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.mixBlendMode = "normal";
    cursor.style.boxShadow = "0px 0px 30px white";
    cursoricon3.classList.remove("active");
  });

  //! Homepage Text

  // main_text.addEventListener("mouseover", () => {
  //   cursoricon2.style.opacity = "0";
  //   cursor.style.transform = "scale(8)";
  //   cursor.style.mixBlendMode = "difference";
  //   cursor.style.boxShadow = "none";
  // });

  // main_text.addEventListener("mouseout", () => {
  //   cursor.style.transform = "none";
  //   cursor.style.mixBlendMode = "normal";
  //   cursor.style.boxShadow = "0px 0px 30px white";
  // });

  //  ! Marquee

  marquee.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(6)";
    cursor.style.mixBlendMode = "difference";
    cursor.style.boxShadow = "0px 0px 30px white";
  });

  marquee.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.mixBlendMode = "normal";
    cursor.style.boxShadow = "0px 0px 30px white";
  });

  //! Hello World Text

  hello_world.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(15)";
    cursor.style.mixBlendMode = "difference";
    cursor.style.boxShadow = "none";
  });

  hello_world.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.mixBlendMode = "normal";
    cursor.style.boxShadow = "0px 0px 30px white";
  });

  // ! Pallette, Laptop & Idea Cursor

  const span_designer = document.getElementById("span_designer");

  span_designer.addEventListener("mouseover", () => {
    cursor.style.transform = "none";
    cursor.style.boxShadow = "none";
    cursor.classList.add("transparent");
    cursoriconwave.classList.remove("active");
    cursoriconwave.classList.add("invisible");
    cursoriconpallette.classList.add("active");
  });

  span_designer.addEventListener("mouseout", () => {
    cursor.classList.remove("transparent");
    cursor.style.boxShadow = "0px 0px 30px white";
    cursoriconwave.classList.add("active");
    cursoriconwave.classList.remove("invisible");
    cursoriconpallette.classList.remove("active");
  });

  const span_dev = document.getElementById("span_dev");

  span_dev.addEventListener("mouseover", () => {
    cursor.style.transform = "none";
    cursor.style.boxShadow = "none";
    cursor.classList.add("transparent");
    cursoriconwave.classList.remove("active");
    cursoriconwave.classList.add("invisible");
    cursoriconlaptop.classList.add("active");
  });

  span_dev.addEventListener("mouseout", () => {
    cursor.classList.remove("transparent");
    cursor.style.boxShadow = "0px 0px 30px white";
    cursoriconwave.classList.add("active");
    cursoriconwave.classList.remove("invisible");

    cursoriconlaptop.classList.remove("active");
  });

  const span_entre = document.getElementById("span_entre");

  span_entre.addEventListener("mouseover", () => {
    cursor.style.transform = "none";
    cursor.style.boxShadow = "none";
    cursor.classList.add("transparent");
    cursoriconwave.classList.remove("active");
    cursoriconwave.classList.add("invisible");
    cursoriconidea.classList.add("active");
  });

  span_entre.addEventListener("mouseout", () => {
    cursor.classList.remove("transparent");
    cursor.style.boxShadow = "0px 0px 30px white";
    cursoriconwave.classList.add("active");
    cursoriconwave.classList.remove("invisible");
    cursoriconidea.classList.remove("active");
  });

  // ! Wave icon cursor

  const content1 = document.querySelector(".content1");
  const cursoriconwave = document.getElementById("cursoriconwave");

  content1.addEventListener("mouseover", () => {
    cursor.style.transform = "none";
    cursor.style.boxShadow = "none";
    cursor.classList.add("transparent");
    cursoriconwave.classList.add("active");
    cursoricon2.classList.remove("active");
  });

  content1.addEventListener("mouseout", () => {
    cursor.classList.remove("transparent");
    cursor.style.boxShadow = "0px 0px 30px white";
    cursoriconwave.classList.remove("active");
  });

  //! Animate "Hey, I'm Aryan description text in Content 1 Section"
  const subcontent1 = document.querySelector(".subcontent1");
  const content1Titles = document.querySelectorAll(".content1_title");

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.getElementById("navbarContainer").style.opacity = "1";

        // document.querySelector(".navbar").style.opacity = "1";

        content1Titles.forEach((title, index) => {
          gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power1.out",
            stagger: 0.1 * index,
          });
        });
      } else {
        // document.querySelector(".navbar").style.opacity = "0";

        content1Titles.forEach((title) => {
          gsap.to(title, {
            opacity: 0,
            y: 100,
            duration: 0.2,
            ease: "power1.out",
            stagger: 0.1,
          });
        });
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  observer.observe(subcontent1);

  // ! Fade out navbar if title cover is in view
  const coverElement = document.querySelector(".cover");

  function handleIntersectionCover(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.getElementById("navbarContainer").style.opacity = "0";
      } else {
        document.getElementById("navbarContainer").style.opacity = "1";
      }
    });
  }

  const observercoverElement = new IntersectionObserver(
    handleIntersectionCover,
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }
  );

  observercoverElement.observe(coverElement);
  // ! END
});

// ! change marquee direction on scroll

let currentScroll = window.pageYOffset;
let isScrollingDown = true;

// Create a GSAP timeline without initial progress
let tween = gsap.to(".marquee__part", {
  xPercent: -100,
  repeat: -1,
  duration: 3,
  ease: "linear",
});

gsap.set(".marquee__inner", { xPercent: -50 });

window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = window.pageYOffset;
});
