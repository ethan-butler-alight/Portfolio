// Declare variables
var hamburgerButton, contactButtton, navlinks;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize variables
  hamburgerButton = document.getElementById("hamburger-button");
  contactButton = document.getElementById("mobile-contact-button");
  navlinks = document.getElementsByClassName("nav-links")[0];

  // Get current styles
  console.log(getComputedStyle(navlinks));

  // Add an event listener to check when the window is resized
  window.addEventListener("resize", (event) => {
    // If the screen size is large
    if (window.innerWidth >= "1008") {
    }
    // If the screen size is medium
    else if (window.innerWidth >= "641") {
    }
    // If the screen size is small
    else {
    }
  });
});

function hamburgerMenu(event) {
  // If the nav is not open
  console.log("Display" + navlinks.style.display);
  if (navlinks.style.display != "flex") {
    // Open the nav and set it's properties

    navlinks.style.display = "flex";
    navlinks.style.flexDirection = "column";
    navlinks.style.position = "absolute";
    navlinks.style.top = "6vh";
    navlinks.style.backgroundColor = "#2B2942";
    navlinks.style.width = "284px";
    navlinks.style.height = "94vh";
    navlinks.style.zIndex = "1";
    navlinks.style.justifyContent = "start";
    navlinks.style.rowGap = "24px";
    navlinks.style.padding = "31px 0 0 31px";
  }

  // If the nav is open
  else {
    navlinks.style.display = null;
    navlinks.style.flexDirection = null;
    navlinks.style.position = null;
    navlinks.style.top = null;
    navlinks.style.backgroundColor = null;
    navlinks.style.width = null;
    navlinks.style.height = null;
    navlinks.style.zIndex = null;
    navlinks.style.justifyContent = null;
    navlinks.style.rowGap = null;
    navlinks.style.padding = null;
    // Close the nav
    // If the screen size is large
    if (window.innerWidth >= "1008") {
    }
    // If the screen size is medium
    else if (window.innerWidth >= "641") {
    }
    // If the screen size is small
    else {
    }
  }
}
