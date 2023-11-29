const menu_items = document.querySelector(".navbar_menu");

//! Add Navigation bar

const navbarContainer = document.getElementById("navbarContainer");
fetch("navbar.html") //! Fetch navbar html into the element navbar
  .then((response) => response.text())
  .then((data) => {
    navbarContainer.innerHTML = data;
    navbarContainer.style.cssText = "";
    setActiveLink();
  });

document.addEventListener("DOMContentLoaded", function () {
  const navbar_menu = document.querySelector(".navbar_menu");
  const checkbox = document.getElementById("hamburgerCheckbox");
  const body = document.querySelector("body");

  checkbox.addEventListener("click", function () {
    //! Show the Menu when checked
    if (this.checked) {
      navbar_menu.classList.add("show");
      body.style.overflow = "hidden";
      console.log("Menu Btn Checked");
    } else {
      navbar_menu.classList.remove("show");
      body.style.overflow = "auto";
      console.log("Menu Btn Unchecked");
    }
  });

  // ! Cursor Menu Hover Effect
  navbar_menu.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(8)";
    cursor.style.mixBlendMode = "difference";
    cursor.style.boxShadow = "none";
  });

  navbar_menu.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.mixBlendMode = "normal";
    cursor.style.boxShadow = "0px 0px 30px white";
  });
});

// ! highlight current active page
function setActiveLink() {
  const pathName = window.location.pathname;
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const href = item.querySelector("a").getAttribute("href");
    const menu_item = item.querySelector(".menu_item");
    console.log("pathName:", pathName);
    console.log("href:", href);
    if (pathName === href) {
      item.classList.add("active");
      console.log("Active class added in menu");
    } else {
      item.classList.remove("active");
    }
  });
}
