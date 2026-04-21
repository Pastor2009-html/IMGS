// Primary School Website JavaScript

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Form validation for contact form
    const contactForm = document.querySelector('.contact-section form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add validation logic here
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message!');
                // In real app, send to server
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Login form
    const loginForm = document.querySelector('.login-form');
    if (loginForm && loginForm.querySelector('h2').textContent.includes('Login')) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add login logic here
            alert('Login functionality to be implemented.');
        });
    }

    // Signup form
    if (loginForm && loginForm.querySelector('h2').textContent.includes('Create')) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add signup logic here
            alert('Signup functionality to be implemented.');
        });
    }

    // Gallery hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.querySelector('.gallery-item-bg').style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseout', function() {
            this.querySelector('.gallery-item-bg').style.transform = 'scale(1)';
        });
    });

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // Close mobile menu after click
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});