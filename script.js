document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
        });
    }

    // Smooth scrolling for anchor links (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is part of the main navigation
            // And if the mobile menu is open, close it
            if (mainNav.classList.contains('nav-open') && this.closest('.main-nav')) {
                 mainNav.classList.remove('nav-open');
            }

            // Only prevent default if it's a true anchor link for scrolling
            const targetId = this.getAttribute('href');
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Simple "active" class for nav links based on scroll (very basic example)
    // For robust highlighting, consider Intersection Observer API
    const sections = document.querySelectorAll('main section[id]');
    const navLi = document.querySelectorAll('.main-nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset if you have a sticky header
            if (pageYOffset >= (sectionTop - sectionHeight / 3 - 80)) { // 80 for header height
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
        // Ensure "Home" is active when at the very top
        if (window.pageYOffset < 200 && !current) {
             navLi.forEach(a => a.classList.remove('active'));
             const homeLink = document.querySelector('.main-nav ul li a[href="index.html"]');
             if (homeLink) homeLink.classList.add('active');
        }
    });


    // Placeholder for future JS:
    // - Portfolio item click (e.g., open a lightbox/modal)
    // - Form validation and submission for the contact section
    // - More advanced animations or interactions

    console.log("Website scripts loaded.");
});