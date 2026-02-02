import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

// Configuration
const CONFIG = {
    speed: 0.5,
    speedIncrement: 0.0001,
    laneWidth: 3,
    colors: {
        fog: 0x050505,
        grid: 0x2a2a2a,
        player: 0x3DDC84, // Android Green
        obstacle: 0xFF3D00, // Deep Orange
        floor: 0x0a0a0a
    }
};

// State
let scene, camera, renderer;
let player, obstacles = [];
let animationId;
let score = 0;
let isPlaying = false;
let speed = CONFIG.speed;
let lastTime = 0;

// cached DOM elements
const container = document.getElementById('gameContainer');
const startScreen = document.getElementById('startScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const scoreHud = document.getElementById('scoreHud');
const finalScoreEl = document.getElementById('finalScore');
const scoreValueEl = document.getElementById('scoreValue');

function init() {
    // 1. Scene Setup
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(CONFIG.colors.fog, 0.07);
    scene.background = new THREE.Color(CONFIG.colors.fog);

    // 2. Camera
    camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 0, -5);

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('gameCanvas').appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7.5);
    scene.add(dirLight);

    // 5. Environment
    createEnvironment();

    // 6. Player
    createPlayer();

    // 7. Events
    window.addEventListener('resize', onWindowResize);
    // Mouse movement for player control
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchmove', onTouchMove, { passive: false });

    // Render initial frame
    renderer.render(scene, camera);
}

function createEnvironment() {
    // Floor Grid
    const gridHelper = new THREE.GridHelper(200, 100, CONFIG.colors.player, CONFIG.colors.grid);
    gridHelper.position.y = -0.5;
    gridHelper.position.z = -50;
    // Animate grid sensation by moving it or creating multiple
    scene.add(gridHelper);

    // Moving Grid Logic is simulated by moving obstacles/player relative
    // Actually, let's make an infinite floor that moves with UVs or just a big plane
    const planeGeo = new THREE.PlaneGeometry(200, 200, 20, 20);
    const planeMat = new THREE.MeshBasicMaterial({
        color: CONFIG.colors.floor,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.5;
    plane.position.z = -50;
    scene.add(plane);
}

function createPlayer() {
    const geometry = new THREE.ConeGeometry(0.5, 1.5, 4);
    const material = new THREE.MeshPhongMaterial({
        color: CONFIG.colors.player,
        emissive: 0x004400,
        flatShading: true
    });
    player = new THREE.Mesh(geometry, material);
    player.rotation.x = -Math.PI / 2; // Point forward
    player.position.y = 0;
    scene.add(player);

    // Engine Glow
    const glowGeo = new THREE.SphereGeometry(0.3);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.y = -0.8;
    glow.scale.set(1, 0.2, 1);
    player.add(glow);
}

function startGame() {
    if (isPlaying) return;

    // Reset state
    resetGame();
    isPlaying = true;

    // UI Updates
    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    scoreHud.style.display = 'block';

    lastTime = performance.now();
    animate();
}

function resetGame() {
    score = 0;
    speed = CONFIG.speed;
    updateScore(0);

    // Clear obstacles
    obstacles.forEach(obs => scene.remove(obs));
    obstacles = [];

    player.position.set(0, 0, 0);
}

function stopGame() {
    isPlaying = false;
    cancelAnimationFrame(animationId);

    // Show Game Over
    finalScoreEl.textContent = Math.floor(score);
    startScreen.classList.add('hidden');
    scoreHud.style.display = 'none';
    gameOverScreen.classList.remove('hidden');
}

function spawnObstacle() {
    // Determine lane (-1, 0, 1) roughly
    // We'll use random X within range
    const xPos = (Math.random() - 0.5) * CONFIG.laneWidth * 3;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
        color: CONFIG.colors.obstacle,
        emissive: 0x440000
    });
    const obstacle = new THREE.Mesh(geometry, material);

    obstacle.position.set(xPos, 0, -60); // Spawn far away

    // Random spin
    obstacle.userData = {
        rotSpeed: {
            x: Math.random() * 0.05,
            y: Math.random() * 0.05
        }
    };

    scene.add(obstacle);
    obstacles.push(obstacle);
}

function update(time) {
    if (!isPlaying) return;

    const delta = (time - lastTime) / 16.67; // Normalize to ~60fps
    lastTime = time;

    // 1. Move Obstacles
    speed += CONFIG.speedIncrement * delta;

    // Spawn logic: approximate distance or time
    if (Math.random() < 0.03 * delta) {
        spawnObstacle();
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.position.z += speed * delta;

        // Rotation
        obs.rotation.x += obs.userData.rotSpeed.x * delta;
        obs.rotation.y += obs.userData.rotSpeed.y * delta;

        // Collision detection
        // Simple AABB box check
        const playerBox = new THREE.Box3().setFromObject(player);
        const obsBox = new THREE.Box3().setFromObject(obs);

        // Shrink player box slightly for forgiveness
        playerBox.expandByScalar(-0.1);

        if (playerBox.intersectsBox(obsBox)) {
            stopGame();
            return;
        }

        // Remove if behind camera
        if (obs.position.z > 5) {
            scene.remove(obs);
            obstacles.splice(i, 1);
            score += 10;
            updateScore(score);
        }
    }

    // 2. Camera sway (optional)
    camera.position.x += (player.position.x / 4 - camera.position.x) * 0.05;
}

function updateScore(val) {
    scoreValueEl.textContent = Math.floor(val);
}

function animate(time) {
    if (!isPlaying) return;

    requestAnimationFrame(animate);
    update(time);
    renderer.render(scene, camera);
}

// Input Handlers
function onMouseMove(event) {
    if (!isPlaying) return;

    // Normalize bounds
    const rect = container.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 2 - 1; // -1 to 1

    // Map to lane width
    const targetX = x * CONFIG.laneWidth * 1.5;

    // Smooth Lerp
    player.position.x += (targetX - player.position.x) * 0.2;
    // Bank effect
    player.rotation.z = -x * 0.5;
}

function onTouchMove(event) {
    event.preventDefault(); // Prevent scrolling
    // Similar logic for touch
    const rect = container.getBoundingClientRect();
    const touch = event.touches[0];
    const x = (touch.clientX - rect.left) / rect.width * 2 - 1;

    const targetX = x * CONFIG.laneWidth * 1.5;
    player.position.x += (targetX - player.position.x) * 0.2;
    player.rotation.z = -x * 0.5;
}

function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// Expose Start function globally for buttons
window.gameStart = startGame;
window.gameRestart = startGame;

// Initialize on load
init();
