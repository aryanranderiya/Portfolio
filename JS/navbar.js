document.addEventListener("DOMContentLoaded", function () {
  const currentPageURL = window.location.pathname;

  // Get all the navigation links
  const navLinks = document.querySelectorAll(".nav-icon a");

  // Iterate through the links and check if their href matches the current page's URL
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPageURL) {
      // If there's a match, add the "active" class to the corresponding list item
      link.parentElement.classList.add("active");
    }
  });
});
