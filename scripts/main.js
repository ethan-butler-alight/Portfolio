document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const contactButton = document.getElementById("mobile-contact-button");

  hamburgerButton.addEventListener("click", hamburgerMenu);

  function hamburgerMenu() {
    const navlinks = document.getElementsByClassName("nav-links")[0];

    // If the nav is not open
    if (navlinks.style.display != "flex") {
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
      navlinks.style.display = "none";
    }
  }
});
