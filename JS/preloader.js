document.addEventListener("DOMContentLoaded", function () {
  const blackCover = document.querySelector(".black_cover");

  setTimeout(function () {
    blackCover.classList.remove("visible");
    document.body.style.overflow = "auto";
  }, 1000);
});
