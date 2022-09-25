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
      // Close the nav

      // If the screen size is large
      if (window.innerWidth >= "1008") {
        navlinks.style.width = "60vw";
        navlinks.style.display = "flex";
        navlinks.style.flexDirection = "row";
        navlinks.style.position = "static";
        navlinks.style.top = "auto";
        navlinks.style.backgroundColor = "rgba(0, 0, 0, 0)";
        navlinks.style.height = "75px";
        navlinks.style.zIndex = "auto";
        navlinks.style.justifyContent = "space-around";
        navlinks.style.rowGap = "normal";
        navlinks.style.padding = "0px";
      }
      // If the screen size is medium
      else if (window.innerWidth >= "641") {
        navlinks.style.width = "-webkit-fill-available";
        navlinks.style.width = "-moz-available";
        navlinks.style.width = "stretch";
        navlinks.style.display = "flex";
        navlinks.style.flexDirection = "row";
        navlinks.style.position = "static";
        navlinks.style.top = "auto";
        navlinks.style.backgroundColor = "rgba(0, 0, 0, 0)";
        navlinks.style.height = "75px";
        navlinks.style.zIndex = "auto";
        navlinks.style.justifyContent = "space-around";
        navlinks.style.rowGap = "normal";
        navlinks.style.padding = "0px";
      }
      // If the screen size is small
      else {
        navlinks.style.display = "none";
        navlinks.style.flexDirection = "row";
        navlinks.style.position = "static";
        navlinks.style.top = "auto";
        navlinks.style.backgroundColor = "rgba(0, 0, 0, 0)";
        navlinks.style.height = "75px";
        navlinks.style.zIndex = "auto";
        navlinks.style.justifyContent = "space-around";
        navlinks.style.rowGap = "normal";
        navlinks.style.padding = "0px";
      }
    }
  }

  // Add an event listener to check when the window is resized
  window.addEventListener("resize", (event) => {
    // If the screen size is large
    if (window.innerWidth >= "1008") {
      navlinks.style.width = "60vw";
      navlinks.style.display = "flex";
      navlinks.style.justifyContent = "space-between";
    }
    // If the screen size is medium
    else if (window.innerWidth >= "641") {
      navlinks.style.width = "-webkit-fill-available";
      navlinks.style.width = "-moz-available";
      navlinks.style.width = "stretch";
      navlinks.style.display = "flex";
      navlinks.style.justifyContent = "space-around";
    }
    // If the screen size is small
    else {
    }
  });
});
