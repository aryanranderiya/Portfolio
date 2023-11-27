document.addEventListener("DOMContentLoaded", function () {
  //! Add the navigation bar

  const navbarContainer = document.getElementById("navbarContainer");
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      navbarContainer.innerHTML = data;

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

      // ! Menu Hover Effect
      const menu_items = document.querySelector(".menu_items");
      menu_items.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(10)";
        cursor.style.mixBlendMode = "difference";
        cursor.style.boxShadow = "none";
      });

      menu_items.addEventListener("mouseout", () => {
        cursor.style.transform = "none";
        cursor.style.mixBlendMode = "normal";
        cursor.style.boxShadow = "0px 0px 30px white";
      });
    });
});

console.log("Navigation bar Script loaded");
