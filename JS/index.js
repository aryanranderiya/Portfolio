function scrollToContent() {
  const contentElement = document.querySelector(".content");

  contentElement.scrollIntoView({
    top: contentElement.offsetTop,
    behavior: "smooth",
  });
}

const titles = document.querySelector(".title_heading_1");
const scroll_btn = document.querySelector(".scroll_btn");
const main_text = document.querySelector(".main_text");

// ! Titles

titles.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(6)";
  cursor.style.mixBlendMode = "difference";
});

titles.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
});

//! Project Buttons

btn1.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2)";
  cursor.style.mixBlendMode = "difference";
});

btn1.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
});

btn2.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2)";
  cursor.style.mixBlendMode = "difference";
});

btn2.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
});

//! Homepage Text

main_text.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(4)";
  cursor.style.mixBlendMode = "difference";
});

main_text.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
});
