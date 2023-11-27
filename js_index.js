function scrollToContent() {
  const contentElement = document.querySelector(".content");

  contentElement.scrollIntoView({
    top: contentElement.offsetTop,
    behavior: "smooth",
  });
}

const titles = document.querySelector(".title_heading_1");
const scroll_btn = document.querySelector(".scroll_btn");
const main_text = document.querySelector(".typing_animation");
const marquee = document.querySelector(".marquee");

// ! Titles

titles.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(8)";
  cursor.style.mixBlendMode = "difference";
  cursor.style.boxShadow = "none";
});

titles.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
  cursor.style.boxShadow = "0px 0px 30px white";
});

//! Project Buttons

btn1.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2)";
  cursor.style.mixBlendMode = "difference";
  cursor.style.boxShadow = "none";
});

btn1.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
  cursor.style.boxShadow = "0px 0px 30px white";
});

btn2.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2)";
  cursor.style.mixBlendMode = "difference";
  cursor.style.boxShadow = "none";
});

btn2.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
  cursor.style.boxShadow = "0px 0px 30px white";
});

//! Homepage Text

main_text.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(10)";
  cursor.style.mixBlendMode = "difference";
  cursor.style.boxShadow = "none";
});

main_text.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
  cursor.style.boxShadow = "0px 0px 30px white";
});

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
