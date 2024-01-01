//! Add Navigation bar

const navbarContainer = document.getElementById("navbarContainer");
fetch("navbar.html") //! Fetch navbar html into the element navbar
  .then((response) => response.text())
  .then((data) => {
    navbarContainer.innerHTML = data;
    navbarContainer.style.cssText = "";
    setActiveLink();
    loadEverything();
  });

function loadEverything() {
  const cursoricon1 = document.getElementById("cursoricon1");
  const navbar_menu = document.querySelector(".navbar_menu");
  const checkbox = document.getElementById("hamburgerCheckbox");
  const body = document.querySelector("body");
  const menu_items = document.querySelector(".navbar_menu");

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      navbar_menu.classList.remove("show");
      body.style.overflow = "auto";
      console.log("Escape Key Pressed: Menu Hidden.");
      checkbox.checked = false;
    }
  });

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
    cursoricon1.classList.add("active");
    cursoricon2.classList.remove("active");
  });

  navbar_menu.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.mixBlendMode = "normal";
    cursor.style.boxShadow = "0px 0px 30px white";
    cursoricon1.classList.remove("active");
  });
}

// ! highlight current active page
function setActiveLink() {
  const pathName = window.location.pathname;
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const href = item.querySelector("a").getAttribute("href");

    // console.log("Href", href);
    // console.log("pathName", pathName);

    if (pathName === href) {
      item.classList.add("active");
      console.log("Active class added in menu");
    } else {
      item.classList.remove("active");
    }
  });
}
