// Medico M3 script.js

// 1. Setup Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Run once
        }
    });
}, observerOptions);

// Observe Elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.hero-content, .section-title, .products-grid, .about-grid, .contact-container');
    revealElements.forEach(el => observer.observe(el));
});

// 2. Ripple Effect for Buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.querySelector(".ripple");

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
const linkBtns = document.querySelectorAll(".btn");

[...buttons, ...linkBtns].forEach(btn => {
    btn.addEventListener("click", createRipple);
});

// 3. Product Inquiry Logic
function inquireProduct(productName) {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });

    const textArea = document.getElementById('messageBox');
    if (textArea) {
        textArea.value = `I'm interested in the ${productName}. Please share the best price and warranty details.`;
        setTimeout(() => textArea.focus(), 800);
    }
}

// 4. Sticky Header Logic
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// 5. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const isFlex = navLinks.style.display === "flex";

        if (isFlex) {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "70px";
            navLinks.style.left = "5%";
            navLinks.style.width = "90%";
            navLinks.style.background = "var(--md-sys-color-surface-container-high)";
            navLinks.style.padding = "20px";
            navLinks.style.borderRadius = "16px";
            navLinks.style.boxShadow = "var(--md-sys-elevation-2)";
            navLinks.style.zIndex = "1001";
        }
    });
}