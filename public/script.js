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

document.addEventListener("DOMContentLoaded", async function () {
  const mapElement = document.getElementById("map");

  const placeName = "Bengaluru"; // Change this to your desired location

  // Fetch location data from Nominatim API
  const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${placeName}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (data.length > 0) {
    const location = data[0];
    const latitude = parseFloat(location.lat);
    const longitude = parseFloat(location.lon);

    // Initialize Leaflet map
    const map = L.map(mapElement).setView([latitude, longitude], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);
  } else {
    mapElement.textContent = "Location not found.";
  }
});


// JavaScript for smooth scrolling and carousel navigation
document.addEventListener("DOMContentLoaded", function () {
  const teamCarousel = document.querySelector(".team-carousel");
  const prevArrow = document.querySelector(".carousel-arrow.prev");
  const nextArrow = document.querySelector(".carousel-arrow.next");

  prevArrow.addEventListener("click", () => {
    teamCarousel.scrollLeft -= teamCarousel.offsetWidth;
  });

  nextArrow.addEventListener("click", () => {
    teamCarousel.scrollLeft += teamCarousel.offsetWidth;
  });
});


