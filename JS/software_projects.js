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
    });
  },
  { onlyOnce: true }
);
