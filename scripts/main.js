// Declare variables
var hamburgerButton, contactButtton, navlinks;
var isNavClosed = true;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize variables
  hamburgerButton = document.getElementById("hamburger-button");
  contactButton = document.getElementById("mobile-contact-button");
  navlinks = document.getElementsByClassName("nav-links")[0];
});

// Add an event listener to check when the window is resized
window.addEventListener("resize", (event) => {
  windowSizeChange();
});

function openNav() {
  // Open the nav by setting its properties
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

  // Update flag
  isNavClosed = false;
}

function closeNav() {
  // Close the nav by resetting its properties
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

  // Update flag
  isNavClosed = true;
}

function hamburgerClick() {
  // If the nav is closed open it
  if (isNavClosed == true) {
    openNav();
  }
  // If the nav is open close it
  else {
    closeNav();
  }
}

function windowSizeChange() {
  // If the nav is open close it
  if (isNavClosed == false) {
    closeNav();
  }
}
