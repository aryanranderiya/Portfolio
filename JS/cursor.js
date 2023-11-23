document.addEventListener("mousedown", function () {
  document.body.style.cursor =
    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" stroke="%23ffffff" fill="%23ffffff" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>\') 10 10, auto';
});

document.addEventListener("mouseup", function () {
  document.body.style.cursor =
    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="%23ffffff" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>\') 10 10, auto';
});
