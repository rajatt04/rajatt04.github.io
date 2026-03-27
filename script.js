const projects = [
    {
        id: "1",
        name: "StudyMate",
        tagline: "EdTech platform for streamlined campus management.",
        overview: "A comprehensive digital solution designed to digitize classroom communications. StudyMate bridges the gap between faculty and students, centralizing records, seamless assignment delivery, and instant critical notice broadcasting.",
        keyFeatures: ["Real-time Dashboard", "Secure File Management", "Role-based Portals", "Student Progress Analytics", "Automated Workflows"],
        techStack: ["Native Android", "Cloud Database", "Secure Auth", "Real-time Sync"],
        architecture: "Scalable Cloud Architecture",
        challengesSolved: [
            { title: "Zero Latency Updates", solution: "Implemented robust real-time cloud listeners to ensure thousands of students receive critical updates instantly across all devices." },
            { title: "Enterprise Grade Security", solution: "Engineered secure role-based portals to guarantee that sensitive academic data remains strictly siloed and protected." }
        ],
        status: { label: "Deployed", color: "#1E8E3E" },
        images: [
            "images/StudyMate/Screenshot_20260318_093102.jpg",
            "images/StudyMate/Screenshot_20260318_093105.jpg",
            "images/StudyMate/Screenshot_20260318_093107.jpg",
            "images/StudyMate/Screenshot_20260318_093117.jpg",
            "images/StudyMate/Screenshot_20260318_093259.jpg",
            "images/StudyMate/Screenshot_20260318_093305.jpg",
            "images/StudyMate/Screenshot_20260318_095200.jpg",
            "images/StudyMate/Screenshot_20260318_095242.jpg",
            "images/StudyMate/Screenshot_20260318_095245.jpg",
            "images/StudyMate/Screenshot_20260318_095344.jpg",
            "images/StudyMate/Screenshot_20260318_095409.jpg",
            "images/StudyMate/Screenshot_20260318_095447.jpg",
            "images/StudyMate/Screenshot_20260318_095523.jpg",
            "images/StudyMate/Screenshot_20260318_095603.jpg",
            "images/StudyMate/Screenshot_20260318_095611.jpg",
            "images/StudyMate/Screenshot_2026_0318_093254.jpg",
            "images/StudyMate/Screenshot_2026_0318_093315.jpg"
        ],
        sourceCodeUrl: "https://github.com/rajatt04/StudyMate",
        downloadUrl: "https://github.com/rajatt04/StudyMate/releases/download/2.0/app-release.apk"
    },
    {
        id: "2",
        name: "Dopamine",
        tagline: "Premium media streaming and background playback service.",
        overview: "A lightweight, heavily optimized multimedia client designed for uninterrupted content consumption. Dopamine strips away UI clutter to focus entirely on user retention, background playback capabilities, and premium media delivery.",
        keyFeatures: ["Uninterrupted Playback", "Picture-in-Picture Support", "Offline Media Delivery", "Custom User Playlists", "High-Fidelity Audio"],
        techStack: ["Video Streaming", "Media Session API", "Background Sync", "Offline Storage"],
        architecture: "Optimized Media Delivery",
        challengesSolved: [
            { title: "Deep Doze Isolation", solution: "Engineered resilient background services to maintain audio streams even when the host operating system attempts aggressive battery optimizations." },
            { title: "Data Cost Reduction", solution: "Designed intelligent local caching systems to drastically minimize redundant cloud requests, saving bandwidth costs and improving speed." }
        ],
        status: { label: "Featured", color: "#1A73E8" },
        images: [
            "images/Dopamine/Screenshot_20260318_095738.jpg",
            "images/Dopamine/Screenshot_20260318_095741.jpg",
            "images/Dopamine/Screenshot_20260318_095745.jpg",
            "images/Dopamine/Screenshot_20260318_095901.jpg",
            "images/Dopamine/Screenshot_20260318_095930.jpg",
            "images/Dopamine/Screenshot_20260318_095945.jpg",
            "images/Dopamine/Screenshot_20260318_100000.jpg",
            "images/Dopamine/Screenshot_20260318_100004.jpg",
            "images/Dopamine/Screenshot_20260318_100014.jpg",
            "images/Dopamine/Screenshot_20260318_100025.jpg",
            "images/Dopamine/Screenshot_20260318_100029.jpg",
            "images/Dopamine/Screenshot_20260318_100058.jpg",
            "images/Dopamine/Screenshot_20260318_100117.jpg"
        ],
        sourceCodeUrl: "https://github.com/rajatt04/Dopamine",
        downloadUrl: "https://github.com/rajatt04/Dopamine/releases/download/1.0/app-universal-release.apk"
    },
    {
        id: "3",
        name: "FitByKit",
        tagline: "Health and wellness platform with real-time tracking.",
        overview: "A comprehensive digital health companion that interfaces directly with physical biosensors. From high-definition workout libraries to automated meal planning, FitByKit provides users with a cohesive ecosystem to reach their wellness goals.",
        keyFeatures: ["Hardware Sensor Integration", "HD Video Streaming", "Nutrition Management", "Progress Visualization", "Automated Planning"],
        techStack: ["Health APIs", "IoT Sensors", "Video CDN", "Local Database"],
        architecture: "Sensor-Driven Architecture",
        challengesSolved: [
            { title: "Battery Efficiency", solution: "Offloaded continuous sensor tracking logic to efficient cron jobs, extending user device battery life without sacrificing data accuracy." },
            { title: "Seamless Video Scrubbing", solution: "Integrated custom streaming cache proxies to allow lag-free seeking through high-definition fitness content." }
        ],
        status: { label: "Client Success", color: "#1E8E3E" },
        images: [
            "images/FitByKit/Screenshot_20260318_100219.jpg",
            "images/FitByKit/Screenshot_20260318_100222.jpg",
            "images/FitByKit/Screenshot_20260318_100248.jpg",
            "images/FitByKit/Screenshot_20260318_100258.jpg",
            "images/FitByKit/Screenshot_20260318_100440.jpg",
            "images/FitByKit/Screenshot_20260318_100513.jpg",
            "images/FitByKit/Screenshot_20260318_100518.jpg",
            "images/FitByKit/Screenshot_20260318_100525.jpg",
            "images/FitByKit/Screenshot_20260318_100530.jpg",
            "images/FitByKit/Screenshot_20260318_100559.jpg",
            "images/FitByKit/Screenshot_20260318_100651.jpg",
            "images/FitByKit/Screenshot_20260318_100719.jpg",
            "images/FitByKit/Screenshot_2026_0318_100452.jpg",
            "images/FitByKit/Screenshot_2026_0318_100500.jpg",
            "images/FitByKit/Screenshot_2026_0318_100623.jpg",
            "images/FitByKit/Screenshot_2026_0318_100728.jpg"
        ],
        sourceCodeUrl: "https://github.com/rajatt04/FitByKit",
        downloadUrl: "https://github.com/rajatt04/FitByKit/releases/download/ver1.4/app-release.apk"
    },
    {
        id: "4",
        name: "Creamie",
        tagline: "High-performance visual personalization engine.",
        overview: "An aesthetic application framework that sets a new bar for digital product design. Creamie intelligently processes 4K visual assets and dynamically adapts the entire application interface to match user-selected elements.",
        keyFeatures: ["Dynamic Color Theming", "4K Asset Delivery", "Algorithmic Filtering", "Curated Collections", "One-Tap Processing"],
        techStack: ["Modern UI Toolkit", "Image Processing", "Dynamic Theming", "Memory Caching"],
        architecture: "Dynamic UI Architecture",
        challengesSolved: [
            { title: "On-the-fly Palette Extraction", solution: "Crafted algorithms to instantly extract dominant colors from dense images, seamlessly applying them to the UI layer at runtime." },
            { title: "Lag-Free Asset Rendering", solution: "Developed aggressive memory caching strategies to continuously render massive grids of high-resolution imagery without dropping frames." }
        ],
        status: { label: "In Development", color: "#F29900" },
        images: [
            "images/Creamie/Screenshot_20260318_100914.jpg",
            "images/Creamie/Screenshot_20260318_100916.jpg",
            "images/Creamie/Screenshot_20260318_100919.jpg",
            "images/Creamie/Screenshot_20260318_100936.jpg",
            "images/Creamie/Screenshot_20260318_100950.jpg",
            "images/Creamie/Screenshot_20260318_101023.jpg",
            "images/Creamie/Screenshot_20260318_101027.jpg",
            "images/Creamie/Screenshot_20260318_101105.jpg",
            "images/Creamie/Screenshot_20260318_101108.jpg",
            "images/Creamie/Screenshot_20260318_101121.jpg",
            "images/Creamie/Screenshot_2026_0318_101134.jpg"
        ],
        sourceCodeUrl: "https://github.com/rajatt04/Creamie",
        downloadUrl: "https://github.com/rajatt04/Creamie/releases/download/1.0.0/app-release.apk"
    },
    {
        id: "5",
        name: "ReTailX",
        tagline: "Enterprise Point of Sale & Inventory Management.",
        overview: "A powerhouse enterprise tool designed to streamline real-world retail operations. ReTailX replaces traditional clunky POS registers with a modern mobile solution, driving down hardware costs and speeding up checkout times.",
        keyFeatures: ["Inventory Governance", "Cloud Synchronization", "Machine Vision Scanning", "Resilient Offline Mode", "Automated Billing"],
        techStack: ["Enterprise Database", "Machine Learning", "Offline-First", "Business Logic"],
        architecture: "Distributed Enterprise System",
        challengesSolved: [
            { title: "Uninterrupted Business Continuity", solution: "Architected an offline-first infrastructure. All transactions queue locally and transparently sync upon network restoration." },
            { title: "Rapid Product Acquisition", solution: "Integrated cutting-edge machine vision models directly into the camera feed for instantaneous and accurate barcode parsing." }
        ],
        status: { label: "Deployed", color: "#1E8E3E" },
        images: [
            "images/RetailX/Screenshot_20260318_101236.jpg",
            "images/RetailX/Screenshot_20260318_101239.jpg",
            "images/RetailX/Screenshot_20260318_101241.jpg",
            "images/RetailX/Screenshot_20260318_101244.jpg",
            "images/RetailX/Screenshot_20260318_101258.jpg",
            "images/RetailX/Screenshot_20260318_101302.jpg",
            "images/RetailX/Screenshot_20260318_101306.jpg",
            "images/RetailX/Screenshot_20260318_101359.jpg",
            "images/RetailX/Screenshot_20260318_101419.jpg",
            "images/RetailX/Screenshot_20260318_101424.jpg",
            "images/RetailX/Screenshot_20260318_101502.jpg",
            "images/RetailX/Screenshot_20260318_101505.jpg",
            "images/RetailX/Screenshot_20260318_101509.jpg",
            "images/RetailX/Screenshot_20260318_101514.jpg",
            "images/RetailX/Screenshot_20260318_101531.jpg",
            "images/RetailX/Screenshot_20260318_101545.jpg",
            "images/RetailX/Screenshot_20260318_101552.jpg",
            "images/RetailX/Screenshot_20260318_101557.jpg",
            "images/RetailX/Screenshot_20260318_101602.jpg",
            "images/RetailX/Screenshot_20260318_101648.jpg",
            "images/RetailX/Screenshot_20260318_101653.jpg",
            "images/RetailX/Screenshot_20260318_101732.jpg",
            "images/RetailX/Screenshot_20260318_101813.jpg",
            "images/RetailX/Screenshot_20260318_101820.jpg",
            "images/RetailX/Screenshot_2026_0318_101333.jpg",
            "images/RetailX/Screenshot_2026_0318_101344.jpg",
            "images/RetailX/Screenshot_2026_0318_101413.jpg",
            "images/RetailX/Screenshot_2026_0318_101439.jpg",
            "images/RetailX/Screenshot_2026_0318_101451.jpg",
            "images/RetailX/Screenshot_2026_0318_101526.jpg",
            "images/RetailX/Screenshot_2026_0318_101644.jpg",
            "images/RetailX/Screenshot_2026_0318_101706.jpg"
        ],
        sourceCodeUrl: "https://github.com/rajatt04/RetailX",
        downloadUrl: "https://github.com/rajatt04/ReTailX/releases/download/1.0/app-release.apk"
    }
];

// Populate Projects
const projectsGrid = document.getElementById('projectsGrid');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'm3-project-card';
    
    // Tech Stack
    const techStackHtml = project.techStack.map(tech => `<span class="m3-tech-chip">${tech}</span>`).join('');
    
    // Key Features
    const featuresHtml = project.keyFeatures.map(feature => `
        <div class="m3-feature-item">
            <span class="material-symbols-rounded m3-feature-icon">check_circle</span>
            <span class="m3-feature-text">${feature}</span>
        </div>
    `).join('');
    
    // Challenges
    const challengesHtml = project.challengesSolved.map(challenge => `
        <div class="m3-challenge-item">
            <div class="m3-challenge-title">⚡ ${challenge.title}</div>
            <div class="m3-challenge-solution">${challenge.solution}</div>
        </div>
    `).join('');

    // Carousel Items
    const carouselItemsHtml = project.images.map(img => `
        <div class="m3-carousel-item">
            <img src="${img}" alt="Screenshot of ${project.name}" loading="lazy">
        </div>
    `).join('');

    // Carousel Dots
    const carouselDotsHtml = project.images.map((_, idx) => `
        <div class="m3-carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
    `).join('');

    card.innerHTML = `
        <!-- Carousel Hero -->
        <div class="m3-carousel-container" id="carousel-${project.id}">
            <div class="m3-carousel-track">
                ${carouselItemsHtml}
            </div>
            <div class="m3-carousel-indicators">
                ${carouselDotsHtml}
            </div>
        </div>

        <!-- Card Body -->
        <div class="m3-card-body">
            <div class="m3-card-header">
                <h3 class="m3-project-name">${project.name}</h3>
                <span class="m3-status-badge" style="color: ${project.status.color}; background-color: ${project.status.color}25;">
                    ${project.status.label.toUpperCase()}
                </span>
            </div>
            
            <p class="m3-project-tagline">${project.tagline}</p>
            <p class="m3-project-overview">${project.overview}</p>
            
            <div class="m3-architecture">
                <span class="material-symbols-rounded">account_tree</span>
                <span>${project.architecture}</span>
            </div>
            
            <hr class="m3-divider">
            
            <h4 class="m3-section-title">Key Features</h4>
            <div class="m3-features-list">
                ${featuresHtml}
            </div>
            
            <h4 class="m3-section-title">Challenges Solved</h4>
            <div class="m3-challenges-list">
                ${challengesHtml}
            </div>
            
            <div class="m3-tech-stack">
                ${techStackHtml}
            </div>
            
            <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
                <a href="projects/${project.name === 'ReTailX' ? 'RetailX' : project.name}/index.html" class="m3-btn m3-btn-filled m3-view-code-btn" style="flex: 1; justify-content: center; text-decoration: none; min-width: 90px;">
                    <span>More</span>
                    <span class="material-symbols-rounded">arrow_forward</span>
                </a>
                ${project.sourceCodeUrl ? `
                <a href="${project.sourceCodeUrl}" target="_blank" class="m3-btn m3-btn-tonal m3-view-code-btn" style="flex: 1; justify-content: center; text-decoration: none; min-width: 90px;">
                    <span>Code</span>
                    <span class="material-symbols-rounded">code</span>
                </a>` : `
                <button disabled class="m3-btn m3-btn-tonal m3-view-code-btn disabled" style="flex: 1; justify-content: center; min-width: 90px;">
                    <span>Private</span>
                    <span class="material-symbols-rounded">lock</span>
                </button>`}
                ${project.downloadUrl ? `
                <a href="${project.downloadUrl}" target="_blank" class="m3-btn m3-btn-download-glow" style="flex: 1; justify-content: center; text-decoration: none; min-width: 90px;">
                    <span>APK</span>
                    <span class="material-symbols-rounded">download</span>
                </a>` : ''}
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(card);
});

// Carousel Logic
document.querySelectorAll('.m3-carousel-container').forEach(container => {
    const track = container.querySelector('.m3-carousel-track');
    const dots = container.querySelectorAll('.m3-carousel-dot');
    const items = track.querySelectorAll('.m3-carousel-item');
    
    // Intersection Observer for active item
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = parseInt(entry.target.getAttribute('data-index'));
                
                // Update dots
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === idx);
                });

                // Set styles for active item
                entry.target.style.transform = 'scale(1)';
                entry.target.style.opacity = '1';

                // Set styles for siblings
                items.forEach((item, i) => {
                    if (i !== idx) {
                        item.style.transform = 'scale(0.85)';
                        item.style.opacity = '0.6';
                    }
                });
            }
        });
    }, {
        root: track,
        threshold: 0.6 // Trigger when 60% of item is visible
    });

    items.forEach((item, idx) => {
        item.setAttribute('data-index', idx);
        observer.observe(item);
    });

    // Handle dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
    });
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
    monthly: [5, 25, 50],
    yearly: [50, 250, 500]
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


// Anime Cat Eye Tracking Logic
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    document.querySelectorAll('.cat-eye').forEach(eye => {
        const rect = eye.getBoundingClientRect();
        
        // Center of the eye
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // Angle and Distance between center of eye and mouse
        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
        const dist = Math.hypot(mouseX - eyeX, mouseY - eyeY);
        
        // Map distance to a small radius (max distance pupil can move)
        const maxRadius = 12; // 12px max movement from center
        const radius = Math.min(maxRadius, dist * 0.05); 

        const pupilX = Math.cos(angle) * radius;
        const pupilY = Math.sin(angle) * radius;

        const pupil = eye.querySelector('.cat-pupil');
        if (pupil) {
            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
    });
});

// Shimmer Overlay Logic
window.addEventListener('load', () => {
    const shimmerOverlay = document.getElementById('shimmerOverlay');
    if (shimmerOverlay) {
        // Minimum display time to prevent flickering on fast connections
        setTimeout(() => {
            shimmerOverlay.classList.add('fade-out');

            // Remove from DOM after transition
            setTimeout(() => {
                shimmerOverlay.style.display = 'none';
            }, 500); // Match CSS transition duration
        }, 500); // Minimum 500ms display
    }
});
