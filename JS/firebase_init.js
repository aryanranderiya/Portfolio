// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUfVSJ3BpDrlV7-6Ou9DWE3KX1jHHFGEY",
  authDomain: "aryanranderiya-portfolio.firebaseapp.com",
  projectId: "aryanranderiya-portfolio",
  storageBucket: "aryanranderiya-portfolio.appspot.com",
  messagingSenderId: "540599201791",
  appId: "1:540599201791:web:757239eec07a33dc9ec1ca",
  measurementId: "G-S3XP36W3P9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
