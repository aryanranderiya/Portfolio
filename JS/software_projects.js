const blackCover = document.querySelector(".black_cover");
const terminal_bling = document.querySelector(".terminal_bling");
var cards = document.querySelector(".cards");

//! Scroll to the top on reload
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

// ! FIREBASE INIT --------------------------------------------------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUfVSJ3BpDrlV7-6Ou9DWE3KX1jHHFGEY",
  authDomain: "aryanranderiya-portfolio.firebaseapp.com",
  projectId: "aryanranderiya-portfolio",
  storageBucket: "aryanranderiya-portfolio.appspot.com",
  messagingSenderId: "540599201791",
  appId: "1:540599201791:web:757239eec07a33dc9ec1ca",
  measurementId: "G-S3XP36W3P9",
};

initializeApp(firebaseConfig);
const database = getDatabase();
const projectsRef = ref(database, "Projects/");

// ! FIREBASE INIT --------------------------------------------------------------------------------------

function processDataAndHidePreloader(snapshot) {
  snapshot.forEach((childSnapshot) => {
    const projectDetails = childSnapshot.val();
    console.log("Project ID: ", childSnapshot.key);

    var projectTitle = projectDetails.project_title;
    var projectDesc = projectDetails.project_description;
    var projectType = projectDetails.project_type;
    var githubLink = projectDetails.github_link;

    var projectType_icon;
    if (projectType.toLowerCase() == "web") {
      projectType_icon = "fa-brands fa-html5";
    } else if (projectType.toLowerCase() == "python") {
      projectType_icon = "fa-brands fa-python";
    } else if (projectType.toLowerCase() == "android") {
      projectType_icon = "fa-brands fa-android";
    }

    console.log("type:" + projectType);
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card">
        <div class="card-content">
            <div class="card-image"> </div>
            <div class="card-info-wrapper">
                <div class="card-info">
                    <div class="card-info-title">
                        <h3 class="card-title">${projectTitle}</h3>
                        <div class="card-type">
                            <div class="subtype ${projectType.toLowerCase()}">
                                <i id="type-logo" class="${projectType_icon}"></i>
                                <text>${projectType}</text>
                            </div>
                        </div>

                    </div>
                    <h4 class="card-desc">${projectDesc}<h4>
                </div>

            </div>
            <div class="btns">
                <a class="action secondary" target="_blank" href="${githubLink}">Github Repo<span
                        aria-hidden="true" class="icon_btn">
                        <i class="fa-brands fa-github fa-2x"></i> </span></a>

                <a class="action primary" target="_blank" href="https://github.com/aryanranderiya">View
                    Project<span aria-hidden="true" class="icon_btn">
                        <span class="material-symbols-outlined fa-1.5x">open_in_new</span></a>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".cards").appendChild(card);
  });

  // ! Remove the preloader and black card
  setTimeout(function () {
    blackCover.classList.remove("visible");
    document.body.style.overflow = "auto";

    terminal_bling.classList.add("animation_paragraph");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  onValue(projectsRef, processDataAndHidePreloader, { onlyOnce: true });
});

// ! Display on the scroll
// window.addEventListener("scroll", function () {
//   if (window.scrollY == 0) {
//     cards.classList.add("cardhidden");
//     cards.classList.remove("cardhicardvisibledden");
//   } else {
//     cards.classList.remove("cardhidden");
//     cards.classList.add("cardvisible");
//   }
// });

//! Software Projects Title

software_projects_title.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(10)";
  cursor.style.mixBlendMode = "difference";
  cursor.style.boxShadow = "none";
});

software_projects_title.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
  cursor.style.boxShadow = "0px 0px 50px white";
});

//! Cards Cursor Title

document.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("card")) {
    cursor.style.transform = "scale(1)";
    cursor.style.boxShadow =
      "0px 0px 20px white, 0px 0px 35px white, 0px 0px 50px white, 0px 0px 60px white,  0px 0px 70px white,0px 0px 80px white,0px 0px 95px white, 0px 0px 110px white";
  }
});

document.addEventListener("mouseout", function (event) {
  if (event.target.classList.contains("card")) {
    cursor.style.transform = "none";
    cursor.style.boxShadow = "0px 0px 30px white";
  }
});

//! First Intersection Observer
function handleIntersection1(entries, observer) {
  //! Fade in the content box
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cards.style.opacity = "1";
    } else {
      cards.style.opacity = "0";
    }
  });
}
const observer1 = new IntersectionObserver(handleIntersection1, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
});
observer1.observe(cards);
