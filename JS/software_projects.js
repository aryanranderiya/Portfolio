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

onValue(
  projectsRef,
  (snapshot) => {
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
                                class="fa-brands fa-github fa-2x" style="color: #999999;"></i> </span></a>

                    <a class="action primary" href="#">View Project<span aria-hidden="true" class="icon_btn">
                            <span class="material-symbols-outlined fa-1x">open_in_new</span></a>
                </div>
            </div>
        </div>
        
        `;

      document.getElementById("cards").appendChild(card);
    });
  },
  { onlyOnce: true }
);
