// document.addEventListener("DOMContentLoaded", function () {
//   const textElement1 = document.querySelector(".aryan_randeriya");

//   textElement1.addEventListener("mouseover", () => {
//     // document.body.style.cursor =
//     //   'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" stroke="%23ffffff" width="70px" height="70px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>\') 10 10, auto';

//     document.body.style.cursor =
//       'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="rgba(255, 255, 255, 1)" width="70px" height="70px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>\') 10 10, auto';
//   });

//   textElement1.addEventListener("mouseout", () => {
//     document.body.style.cursor =
//       'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" stroke="%23ffffff" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>\')10 10,auto';
//   });

//   const textElement2 = document.querySelector(".my_portfolio");

//   textElement2.addEventListener("mouseover", () => {
//     document.body.style.cursor =
//       'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="rgba(255, 255, 255, 1)" width="70px" height="70px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>\') 10 10, auto';
//   });

//   textElement2.addEventListener("mouseout", () => {
//     document.body.style.cursor =
//       'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" stroke="%23ffffff" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>\')10 10,auto';
//   });
// });

// ! New Cursor

const cursor = document.querySelector(".cursor");
const titles = document.querySelector(".title_heading_1");
const scroll_btn = document.querySelector(".scroll_btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const main_text = document.querySelector(".main_text");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ! Titles

titles.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(6)";
  cursor.style.mixBlendMode = "difference";
});

titles.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
});

//! Project Buttons

btn1.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2)";
  cursor.style.mixBlendMode = "difference";
});

btn1.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
});

btn2.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2)";
  cursor.style.mixBlendMode = "difference";
});

btn2.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
});

//! Homepage Text

main_text.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(4)";
  cursor.style.mixBlendMode = "difference";
});

main_text.addEventListener("mouseout", () => {
  cursor.style.transform = "none";
  cursor.style.mixBlendMode = "normal";
});
