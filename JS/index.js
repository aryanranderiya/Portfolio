function scrollToContent() {
  const contentElement = document.querySelector(".content");

  contentElement.scrollIntoView({
    top: contentElement.offsetTop,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const blackCover = document.querySelector(".black_cover");

  setTimeout(function () {
    blackCover.classList.remove("visible"); // Corrected from "hidden" to "visible"
  }, 1000);
});
