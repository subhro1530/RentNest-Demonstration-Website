document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const reviewBlocks = document.querySelectorAll(".review-block");
  const prevButton = document.getElementById("prev-review");
  const nextButton = document.getElementById("next-review");

  let activeReview = 0;

  // Toggle the visibility of nav links on menu icon click
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Close the nav links when a link is clicked
  navLinks.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });

  // Display initial review
  reviewBlocks[activeReview].classList.add("active");

  prevButton.addEventListener("click", () => switchReview(-1));
  nextButton.addEventListener("click", () => switchReview(1));

  function switchReview(direction) {
    reviewBlocks[activeReview].classList.remove("active");
    activeReview += direction;

    if (activeReview < 0) {
      activeReview = reviewBlocks.length - 1;
    } else if (activeReview >= reviewBlocks.length) {
      activeReview = 0;
    }

    reviewBlocks[activeReview].classList.add("active");
  }
});
