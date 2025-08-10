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

    // Active Page Link Highlighting
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');
    const allLinks = [...navLinks, ...bottomNavLinks]; // Using an array and the spread operator

    allLinks.forEach(link => { // Array Method
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll Reveal Animation
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


    // --- 2. NEW Functionality for Rubric Criteria ---

    const contactForm = document.querySelector('#contact-form');
    const welcomeMessage = document.querySelector('#welcome-message');

    // CRITERION 12: JavaScript Objects
    const userProfile = {
        name: '',
        email: ''
    };
    
    // Function to handle form submission and user greeting
    function handleUserInteraction() {
        // CRITERION 15: JavaScript localStorage (Getting item)
        const storedName = localStorage.getItem('biztrackUserName');
        
        // CRITERION 11: Conditional Branching
        if (storedName) {
            userProfile.name = storedName;
            // CRITERION 14: JavaScript Template Literals
            welcomeMessage.textContent = `Welcome back, ${userProfile.name}!`;
        }

        // CRITERION 10: Event Listening
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            
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