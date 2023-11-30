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
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
