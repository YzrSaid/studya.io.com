// Select the navbar
const navbar = document.getElementById("navbar");

// Function to toggle navbar background based on scroll
function handleNavbarBackground() {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-white"); // Add the white background as soon as you scroll past the top
  } else {
    navbar.classList.remove("navbar-white"); // Remove the white background when at the very top
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleNavbarBackground);

// This is for navbar links

// Get the navbar links
const navbarLinks = document.querySelectorAll(".main-navbar a");

// Get the navbar height
const navbarHeight = document.getElementById("navbar").offsetHeight;

// Scroll to the section with the offset when a link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default anchor click behavior

    // Get the target section
    const targetId = this.getAttribute("href").substring(1); // Remove '#' from href
    const targetElement = document.getElementById(targetId);

    // Scroll to the target section with an offset for the navbar height
    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight,
      behavior: "smooth", // Smooth scroll
    });
  });
});

// Function to remove 'active' class from all navbar links
function removeActiveClass() {
  navbarLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

// Function to add 'active' class to clicked navbar link
function addActiveClass(link) {
  link.classList.add("active");
}

// Function to scroll smoothly to the section
function scrollToSection(link) {
  const targetId = link.getAttribute("href").substring(1); // Get section id
  const targetElement = document.getElementById(targetId);

  window.scrollTo({
    top: targetElement.offsetTop - navbarHeight,
    behavior: "smooth",
  });
}

// Intersection Observer to add active class when sections come into view
const options = {
  rootMargin: "0px",
  threshold: 0.5, // Trigger when 50% of the section is in view
};

// Callback function to handle active class on scroll
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    const link = document.querySelector(`.main-navbar a[href="#${sectionId}"]`);

    if (entry.isIntersecting) {
      // Remove active class from all links
      removeActiveClass();
      // Add active class to the corresponding link
      addActiveClass(link);
    }
  });
};

// Create an intersection observer instance
const observer = new IntersectionObserver(callback, options);

// Observe the sections
document
  .querySelectorAll("#first-div, #second-div, #third-div")
  .forEach((section) => {
    observer.observe(section);
  });

// Scroll to section when navbar link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Remove active class from all links
    removeActiveClass();

    // Add active class to the clicked link
    addActiveClass(this);

    // Scroll to the target section
    scrollToSection(this);
  });
});

// this is for the scrolltotop btn
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
}

function toggleNavbar() {
  const navbar = document.querySelector(".main-navbar");
  navbar.classList.toggle("active");
}
