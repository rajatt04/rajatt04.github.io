// Project Data - Placeholders as per plan
const projects = [
    {
        title: "StudyMate",
        desc: "A comprehensive management tool for students and faculty featuring CRUD operations for assignments and notices.",
        tags: ["Kotlin", "Management", "CRUD"],
        link: "https://github.com/rajatt04/StudyMateAlpha",
        emoji: "📚"
    },
    {
        title: "Dopamine",
        desc: "Experience YouTube without interruptions. Ad-free, background playback, and premium features.",
        tags: ["Kotlin", "Media", "Open Source"],
        link: "https://github.com/rajatt04/Dopamine",
        emoji: "🎧"
    },
    {
        title: "FitByKit",
        desc: "Health companion app with step counter, workout videos, and meal planning features.",
        tags: ["Kotlin", "Health", "Google Fit"],
        link: "https://github.com/rajatt04/FitByKit",
        emoji: "💪"
    },
    {
        title: "Creamie",
        desc: "Modern wallpaper application built with Jetpack Compose showcasing Material 3 design.",
        tags: ["Kotlin", "Jetpack Compose", "UI/UX"],
        link: "https://github.com/rajatt04/Creamie",
        emoji: "🎨"
    }
];

// Populate Projects
const projectsGrid = document.getElementById('projectsGrid');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card'; // New class for ultimate styling

    // Create Tag Chips
    const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

    card.innerHTML = `
        <div class="project-visual">
            <div class="project-glow"></div>
            <span class="project-emoji">${project.emoji}</span>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.desc}</p>
            <div class="project-tags-container">
                ${tagsHtml}
            </div>
            <a href="${project.link}" target="_blank" class="m3-btn m3-btn-tonal full-width project-btn">
                View Code <span class="material-symbols-rounded">arrow_outward</span>
            </a>
        </div>
    `;
    projectsGrid.appendChild(card);
});

// Navigation Logic
const drawer = document.getElementById('navDrawer');
const scrim = document.getElementById('scrim');
const openDrawerBtn = document.getElementById('openDrawer');
const closeDrawerBtn = document.getElementById('closeDrawer');
const navLinks = document.querySelectorAll('.drawer-item');

function toggleDrawer(isOpen) {
    if (isOpen) {
        drawer.classList.add('open');
        scrim.classList.add('open');
    } else {
        drawer.classList.remove('open');
        scrim.classList.remove('open');
    }
}

openDrawerBtn.addEventListener('click', () => toggleDrawer(true));
closeDrawerBtn.addEventListener('click', () => toggleDrawer(false));
scrim.addEventListener('click', () => toggleDrawer(false));

// Close drawer when link clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
});

// Contact Form Simulation
// Old Contact Form Listener Removed - Replaced by Enhanced Version below


// Scroll Spy for Navigation Rail
const sections = document.querySelectorAll('section, #contact');
const railItems = document.querySelectorAll('.rail-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    const allNavItems = [...railItems, ...document.querySelectorAll('.drawer-item')];

    allNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// Billing Toggle Logic
const billingToggle = document.getElementById('billingToggle');
const priceVals = document.querySelectorAll('.price-val');
const pricePeriods = document.querySelectorAll('.period');

const prices = {
    monthly: [50, 250, 500],
    yearly: [500, 2500, 5000]
};

if (billingToggle) {
    billingToggle.addEventListener('change', () => {
        const isYearly = billingToggle.checked;
        const currentPrices = isYearly ? prices.yearly : prices.monthly;
        const periodText = isYearly ? '/yr' : '/mo';

        priceVals.forEach((price, index) => {
            // Animate number change
            animateValue(price, parseInt(price.textContent), currentPrices[index], 500);
        });

        pricePeriods.forEach(period => {
            period.textContent = periodText;
        });
    });
}

// Helper: Animate Value
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 3D Tilt Effect for Connect Hub
const connectCards = document.querySelectorAll('.connect-card-wrapper');

connectCards.forEach(cardWrapper => {
    const card = cardWrapper.querySelector('.connect-card');

    cardWrapper.addEventListener('mousemove', (e) => {
        const rect = cardWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation degrees (max 10deg)
        const xPercent = x / rect.width;
        const yPercent = y / rect.height;

        const xRotation = (yPercent - 0.5) * 8; // Positive y -> Negative rotateX (tilt back)
        const yRotation = (xPercent - 0.5) * -8; // Positive x -> Positive rotateY

        card.style.transform = `rotateX(${-xRotation}deg) rotateY(${-yRotation}deg)`;
    });

    cardWrapper.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
});

// Enhanced Contact Form Submission
const contactForm = document.getElementById('contactForm');
const snackbar = document.getElementById('snackbar');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('.btn-send');
        const icon = btn.querySelector('.material-symbols-rounded');
        const originalContent = btn.innerHTML;

        // Loading state
        btn.disabled = true;
        btn.innerHTML = `<span class="material-symbols-rounded" style="animation: spin 1s linear infinite">sync</span> Sending...`;

        setTimeout(() => {
            // Success state
            btn.innerHTML = `<span class="material-symbols-rounded">check</span> Sent!`;
            btn.style.backgroundColor = 'var(--android-green)';
            btn.style.color = '#000';

            // Show Snackbar
            if (snackbar) {
                snackbar.className = 'm3-snackbar show';
                setTimeout(() => { snackbar.className = snackbar.className.replace('show', ''); }, 3000);
            }

            // Reset form and button
            setTimeout(() => {
                contactForm.reset();
                btn.disabled = false;
                btn.innerHTML = originalContent;
                btn.style.backgroundColor = ''; // Revert to default
                btn.style.color = '';
            }, 2000);
        }, 1500);
    });
}

