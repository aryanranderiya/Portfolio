document.addEventListener("DOMContentLoaded", function () {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-icon a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === activePage) {
      link.parentElement.classList.add("active");
    }
  });
});
