import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
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

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submit-project-form")
    .addEventListener("submit", function (e) {
      console.log("DOMContentLoaded Event listener called");

      e.preventDefault();

      const title = document.getElementById("project_title").value;
      const type = document.getElementById("project_type").value;
      const description = document.getElementById("project_description").value;
      const githubLink = document.getElementById("githubLink").value;

      const project_id = "project_" + title + "_" + Date.now();
      var projectsRef = ref(database, "Projects/" + project_id);

      set(projectsRef, {
        project_title: title,
        project_type: type,
        project_description: description,
        github_link: githubLink,
      })
        .then(() => {
          console.log("Successfully inserted!");
        })
        .catch((error) => {
          console.error(error);
        });

      document.getElementById("submit-project-form").reset();
    });
});
