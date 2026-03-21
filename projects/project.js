// project.js - Shared Interactive Logic for Project Pages

document.addEventListener("DOMContentLoaded", () => {
  // 1. Scroll Fade-Up Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
  });

  // 2. Dynamic Nav Bar Background Blur on Scroll
  const nav = document.querySelector('.project-nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'var(--glass-bg)';
      nav.style.backdropFilter = 'blur(12px)';
      nav.style.borderBottom = '1px solid var(--glass-border)';
    } else {
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.borderBottom = '1px solid transparent';
    }

    // Hide nav on scroll down, show on scroll up
    if (window.scrollY > lastScrollY && window.scrollY > 150) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
  });
});
