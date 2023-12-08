const subContent = document.querySelector(".subcontent");
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

//! Second Intersection Observer
function handleIntersection2(entries, observer) {
  //! Fade in the navbar
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.getElementById("navbarContainer").style.visibility = "visible";
      document.querySelector(".navbar").style.opacity = "1";
      document.querySelector(".navbar").style.transform = "scale(1)";
    } else {
      document.querySelector(".navbar").style.opacity = "0";
      document.querySelector(".navbar").style.transform = "scale(1.3)";
    }
  });
}
const observer2 = new IntersectionObserver(handleIntersection2, {
  root: null,
  rootMargin: "0px",
  threshold: 1,
});
observer2.observe(subContent);

// ! Scroll after animation finishes:
function scrollToCoverWithDelay() {
  setTimeout(function () {
    const coverElement = document.querySelector(".cover");
    coverElement.scrollIntoView({ behavior: "smooth" });
    document.body.style.overflow = "auto";
    document.getElementById("navbarContainer").style.opacity = "1";
  }, 800);

  setTimeout(function () {
    document.querySelector(".welcoming").remove();
  }, 1500);
}

const wrapperElement = document.querySelector(".words_rotating_span");
wrapperElement.addEventListener("animationend", scrollToCoverWithDelay);

const cover = document.querySelector(".titles");
const titles = document.querySelector(".title_heading_1");
const scroll_btn = document.querySelector(".scroll_btn");
const main_text = document.querySelector(".typing_animation");
const marquee = document.querySelector(".marquee");
const hello_world = document.querySelector(".words");
const cursoricon2 = document.getElementById("cursoricon2");
const cursoricon3 = document.getElementById("cursoricon3");

// ! Scroll on button click
function scrollToContent() {
  console.log("Scroll Button Clicked");
  cursoricon2.classList.remove("active");
  cursor.style.transform = "none";
  cursor.style.boxShadow = "0px 0px 30px white";

  const contentElement = document.querySelector(".content1");

  contentElement.scrollIntoView({
    top: contentElement.offsetTop,
    behavior: "smooth",
  });
}

// ! Titles & Cover
cover.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(8)";
  cursor.style.boxShadow = "none";
  cursoricon2.classList.add("active");
});

cover.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.boxShadow = "0px 0px 30px white";
  cursoricon2.classList.remove("active");
});

titles.addEventListener("mouseover", () => {
  cursor.style.mixBlendMode = "difference";
});

titles.addEventListener("mouseout", () => {
  cursor.style.mixBlendMode = "normal";
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
