document.addEventListener('DOMContentLoaded', function() {

    // 1. Mobile Menu Toggle
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');

    if (navToggleBtn && mobileNavMenu) {
        navToggleBtn.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('open');
            // Change icon to 'x' when menu is open
            const icon = navToggleBtn.querySelector('i');
            if (mobileNavMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Active Page Link Highlighting
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-link');
    const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');

    // Handle case for root path (index.html)
    const targetFile = currentPath === '' ? 'index.html' : currentPath;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === targetFile) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    bottomNavLinks.forEach(link => {
        if (link.getAttribute('href') === targetFile) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});