document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');

    hamburgerButton.addEventListener('click', hamburgerMenu);
    
    function hamburgerMenu() {
        const navlinks = document.getElementsByClassName('nav-links')[0];

        // If the nav is not open
        if (navlinks.style.display != 'flex' ) {
            navlinks.style.display = 'flex';
            navlinks.style.flexDirection = 'column';
        }
        // If the nav is open
        else {
            navlinks.style.display = 'none';
        }
    }

});

