document.addEventListener("DOMContentLoaded", () => {
  // Initialize variables
  const hamburgerButton = document.getElementById("hamburger-button");
  const contactButton = document.getElementById("mobile-contact-button");
  const navlinks = document.getElementsByClassName("nav-links")[0];

  // Add an event listener to check when the hamburger button is clicked
  hamburgerButton.addEventListener("click", hamburgerMenu);

  // Get current styles
  console.log(getComputedStyle(navlinks));

  function hamburgerMenu() {
    // If the nav is not open
    console.log("Display" + navlinks.style.display);
    if (navlinks.style.display != "flex") {
      // Open the nav and set it's properties
    }

    // If the nav is open
    else {
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
