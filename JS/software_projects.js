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

function processDataAndHidePreloader(snapshot) {
  snapshot.forEach((childSnapshot) => {
    const projectDetails = childSnapshot.val();
    console.log("Project ID: ", childSnapshot.key);

    var projectTitle = projectDetails.project_title;
    var projectDesc = projectDetails.project_description;
    var projectType = projectDetails.project_type;
    var githubLink = projectDetails.github_link;

    console.log("Project Desc:", projectDesc);
    console.log("Project Title:", projectTitle);
    console.log("Project Type:", projectType);
    console.log("Github Link:", githubLink);

    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card" id="card">
        <div class="image"></div>
          <div class="content">
              <a href="#"> <span class="card_title">${projectTitle}</span></a>
              <p class="card_desc">${projectDesc} </p>

              <div class="btns">
                  <a class="action secondary" href="${githubLink}" target="_blank">Github Repo<span aria-hidden="true" class="icon_btn"> <i
                              class="fa-brands fa-github fa-2x"></i> </span></a>

                  <a class="action primary" href="#">View Project<span aria-hidden="true" class="icon_btn">
                          <span class="material-symbols-outlined fa-1x">open_in_new</span></a>
              </div>
          </div>
      </div>
    `;

    document.getElementById("cards").appendChild(card);
  });

  // const preloader = document.querySelector(".preloader");
  // const content = document.getElementById("content");

  // preloader.style.display = "none";
  // content.style.display = "block";

  const blackCover = document.querySelector(".black_cover");

  setTimeout(function () {
    blackCover.classList.remove("visible");
    document.body.style.overflow = "auto";

    const navbarContainer = document.getElementById("navbarContainer");
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarContainer.innerHTML = data;
      });
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  onValue(projectsRef, processDataAndHidePreloader, { onlyOnce: true });
});

var cards = document.querySelector(".cards");

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    cards.classList.remove("visible");
  } else {
    cards.classList.add("visible");
  }
});

//! Software Projects Title

software_projects_title.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(8)";
  cursor.style.mixBlendMode = "difference";
  cursor.style.boxShadow = "none";
});

software_projects_title.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
  cursor.style.boxShadow = "0px 0px 50px white";
});
