document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footerContainer");

  if (footerContainer) {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        footerContainer.innerHTML = data;
        footerContainer.style.cssText = "";
        setActiveLink();

        const footer1 = document.querySelector(".footer1");
        const footer2 = document.querySelector(".footer2");

        const cursoricon4 = document.getElementById("cursoricon4");
        const cursoricon5 = document.getElementById("cursoricon5");

        const footer_bottom_name = document.querySelector(
          ".footer_bottom_name"
        );

        footer1.addEventListener("mouseover", () => {
          cursor.style.transform = "scale(7)";
          cursor.style.boxShadow = "none";
          cursor.style.outlineWidth = "0.1px";
          cursor.classList.add("partially_transparent");
          cursoricon4.classList.add("active");
        });

        footer1.addEventListener("mouseout", () => {
          cursor.style.transform = "none";
          cursor.style.mixBlendMode = "normal";
          cursor.style.boxShadow = "0px 0px 30px white";
          cursor.classList.remove("partially_transparent");
          cursoricon4.classList.remove("active");
        });

        footer2.addEventListener("mouseover", () => {
          cursor.style.boxShadow = "none";
          cursor.classList.add("transparent");
          cursoricon5.classList.add("active");
        });

        footer2.addEventListener("mouseout", () => {
          cursor.classList.remove("transparent");
          cursor.style.boxShadow = "0px 0px 30px white";
          cursoricon5.classList.remove("active");
        });

        footer_bottom_name.addEventListener("mouseover", () => {
          cursor.style.transform = "scale(10)";
          cursor.style.boxShadow = "none";
          cursor.style.mixBlendMode = "difference";
          cursoricon4.classList.add("active");
        });

        footer_bottom_name.addEventListener("mouseout", () => {
          cursor.style.transform = "none";
          cursor.style.mixBlendMode = "normal";
          cursor.style.boxShadow = "0px 0px 30px white";
          cursoricon4.classList.remove("active");
        });
      });

    //! Fade out navbar when footer is visible

    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById("navbarContainer").style.opacity = "0";
        } else {
          document.getElementById("navbarContainer").style.opacity = "1";
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    observer.observe(footerContainer);
    
    // ! END

  } else {
    console.error("Element with ID 'footerContainer' not found.");
  }
});
