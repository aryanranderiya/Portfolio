function scrollToContent() {
  const contentElement = document.querySelector(".content");

  contentElement.scrollIntoView({
    top: contentElement.offsetTop,
    behavior: "smooth",
  });
}
