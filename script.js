// Project Data for Portfolio
const projects = [
    {
        id: "1",
        name: "StudyMate",
        tagline: "Student & faculty management tool.",
        overview: "A streamlined platform to manage classroom communications seamlessly. StudyMate handles student records, faculty announcements, and acts as a central hub for all assignment CRUD operations and critical notices.",
        keyFeatures: ["Real-time Notices Panel", "Assignments CRUD APIs", "Faculty Dashboard", "Student Progress Tracking", "File Attachments"],
        techStack: ["Kotlin", "Firebase", "XML", "MVVM"],
        architecture: "MVVM + Repository + Clean Architecture",
        challengesSolved: [
            { title: "Real-time Synchronization", solution: "Implemented Firebase Realtime DB listeners to ensure notices arrive to students instantly without refreshing." },
            { title: "Role-based Security", solution: "Leveraged Firebase Custom Claims to securely route users to either the Faculty Dashboard or Student Hub upon login." }
        ],
        status: { label: "Completed", color: "#4CAF50" },
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
        sourceCodeUrl: "https://github.com/rajatt04/StudyMate"
    },
    {
        id: "2",
        name: "Dopamine",
        tagline: "Ad-free YouTube experience with background playback.",
        overview: "Dopamine focuses on delivering uninterrupted multimedia consumption. Designed strictly for power users needing a lightweight media client, it strips out extraneous UI, prioritizing speed and smooth background audio capability.",
        keyFeatures: ["Background Audio Playback", "No Display Ads", "Picture-in-Picture Mode", "Video Downloading", "Custom Playlists"],
        techStack: ["Kotlin", "YouTube API", "XML", "Coroutines"],
        architecture: "MVI + Coroutine Flows",
        challengesSolved: [
            { title: "Background Payout Isolation", solution: "Utilized Android Foreground Services and the MediaSession framework to prevent system-kill during deep doze." },
            { title: "API Rate Limiting", solution: "Implemented intelligent local caching using Room DB to drastically reduce redundant YouTube API data calls." }
        ],
        status: { label: "Open Source", color: "#2196F3" },
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
        sourceCodeUrl: "https://github.com/rajatt04/Dopamine"
    },
    {
        id: "3",
        name: "FitByKit",
        tagline: "Health app with step counter & meal planning.",
        overview: "FitByKit is a personal fitness companion offering everything from built-in workout videos to diet planning. Utilizing native device sensors, it provides highly accurate pedometer metrics integrated closely with user fitness goals.",
        keyFeatures: ["Sensor-based Pedometer", "HD Workout Video Library", "Calorie Intake Tracker", "Automated Meal Planning", "Weekly Progress Charts"],
        techStack: ["Kotlin", "Health APIs", "XML", "RoomDB"],
        architecture: "MVVM + WorkManager Architecture",
        challengesSolved: [
            { title: "Battery Drain on Step Count", solution: "Offloaded continuous sensor tracking logic over to efficient WorkManager cron jobs combined with Hardware Step Counter." },
            { title: "Streaming Video Caching", solution: "Integrated Google ExoPlayer with custom cache proxies to allow lag-free scrubing of fitness videos." }
        ],
        status: { label: "Completed", color: "#4CAF50" },
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
        sourceCodeUrl: "https://github.com/rajatt04/FitByKit"
    },
    {
        id: "4",
        name: "Creamie",
        tagline: "Modern Jetpack Compose wallpaper engine.",
        overview: "Creamie sets a new standard for aesthetic application design by heavily relying on Jetpack Compose and Material 3 principles. It provides stunning smart-filtered wallpapers that adapt the entire app's DOM theming upon selection.",
        keyFeatures: ["One-Tap Apply Logic", "Smart Color Filters", "M3 Dynamic Theming", "Favorites Collection", "High-Resolution Tiling"],
        techStack: ["Kotlin", "Jetpack Compose", "UI/UX", "Coil"],
        architecture: "MVVM + State Hoisting",
        challengesSolved: [
            { title: "Dynamic Theme Extraction", solution: "Extracted pixel color palettes via custom algorithms to dynamically tint Compose MaterialTheme on the fly." },
            { title: "Jank-free List Scrolling", solution: "Optimized Coil memory caching policies to handle massive grids of 4K imagery without dropping UI frames." }
        ],
        status: { label: "In Progress", color: "#FF9800" },
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
        sourceCodeUrl: "https://github.com/rajatt04/Creamie"
    },
    {
        id: "5",
        name: "ReTailX",
        tagline: "Production-grade retail management system.",
        overview: "A powerhouse Android enterprise tool for POS (Point of Sale) operation. ReTailX handles complex inventory databases on location while transparently syncing data safely to a remote cloud ledger. Built for modern retail environments.",
        keyFeatures: ["Inventory Control", "Cloud Database Sync", "Hardware Barcode Scanning", "Offline-First Support", "Sales Receipt Generation"],
        techStack: ["Kotlin", "XML", "Store Management", "Retrofit"],
        architecture: "Repository + SyncAdapters + MVVM",
        challengesSolved: [
            { title: "Offline Resiliency", solution: "Created a robust Room DB schema handling local UUID generation and queued all missing syncs until network restoration." },
            { title: "Rapid Barcode Parsing", solution: "Integrated Google ML Kit Vision APIs directly into CameraX for instantaneous barcode bounding-box acquisition." }
        ],
        status: { label: "Completed", color: "#4CAF50" },
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
        sourceCodeUrl: null
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
            
            ${project.sourceCodeUrl ? `
            <a href="${project.sourceCodeUrl}" target="_blank" class="m3-btn m3-btn-tonal m3-view-code-btn">
                <span>View Code</span>
                <span class="material-symbols-rounded">arrow_forward</span>
            </a>` : `
            <button disabled class="m3-btn m3-btn-tonal m3-view-code-btn disabled">
                <span>Private Repository</span>
                <span class="material-symbols-rounded">lock</span>
            </button>`}
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
