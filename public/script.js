// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Toggle the visibility of nav links on menu icon click
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Close the nav links when a link is clicked
  navLinks.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});
