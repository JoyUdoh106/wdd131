document.addEventListener('DOMContentLoaded', function() {

    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');

    if (navToggleBtn && mobileNavMenu) {
        navToggleBtn.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('open');
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

    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');
    const allLinks = [...navLinks, ...bottomNavLinks];

    allLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(element => { revealObserver.observe(element); });

    const contactForm = document.querySelector('#contact-form');
    const welcomeMessage = document.querySelector('#welcome-message');

    const userProfile = {
        name: '',
        email: ''
    };
    
    function handleUserInteraction() {
        const storedName = localStorage.getItem('biztrackUserName');
        
        if (storedName) {
            userProfile.name = storedName;
            welcomeMessage.textContent = `Welcome back, ${userProfile.name}!`;
        }

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            // CRITERION 10: Selecting an element
            const nameInput = document.querySelector('#name-input');
            userProfile.name = nameInput.value;

            // CRITERION 15: JavaScript localStorage (Setting item)
            localStorage.setItem('biztrackUserName', userProfile.name);
            
            // CRITERION 10: Modifying an element & CRITERION 14: Template Literals
            welcomeMessage.textContent = `Thanks for subscribing, ${userProfile.name}!`;
            
            contactForm.reset();
        });
    }
    
    // CRITERION 9: Calling a second working function
    if (contactForm) {
        handleUserInteraction();
    }
});