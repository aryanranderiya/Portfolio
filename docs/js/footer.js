//! Add Navigation bar

const footerContainer = document.getElementById("footerContainer");
fetch("footer.html") //! Fetch navbar html into the element navbar
  .then((response) => response.text())
  .then((data) => {
    footerContainer.innerHTML = data;
    footerContainer.style.cssText = "";
    setActiveLink();
  });
