// components.js - Dynamic Header & Footer Loader

async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;

        // Dispatch event for other scripts to know components are loaded
        document.dispatchEvent(new CustomEvent('componentLoaded', { detail: { id } }));

        // If loading header, initialize Mega Menu logic if needed
        if (id === 'header-placeholder') {
            initializeNavigation();
        }
    } catch (error) {
        console.error(error);
    }
}

function initializeNavigation() {
    const mobileToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.textContent = navLinks.classList.contains('active') ? 'close' : 'menu';
            }
        });
    }

    // Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});
