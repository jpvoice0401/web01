/**
 * ==============================================================================
 * 🚀 Jihyun Park Portfolio — Main Interaction Engine (main.js)
 * Generative Particle Physics + Interactive Lab Controls + Dynamic Filter
 * ==============================================================================
 */

(function () {
    "use strict";

    // --- State Management ---
    const state = {
        particleCount: 85,
        speed: 1.0,
        accentColor: "#CEFF00",
        currentFilter: "all",
        isLabMode: false,
        mouse: {
            x: -1000,
            y: -1000,
            radius: 180,
            isDown: false
        }
    };

    // ==============================================================================
    // 🌌 1. 0G ZERO-GRAVITY 137 HYBRID (BAR & CIRCLE) PARTICLE SYSTEM
    // ==============================================================================
    let canvas = null;
    let ctx = null;
    let particles = [];
    let animationFrameId = null;
    let lastFpsUpdate = Date.now();
    let frameCount = 0;

    // 10 Distinct Stages of Neon Opacity & Size (존재감 있는 볼드 그래픽 스케일)
    const PARTICLE_TIERS = [
        { tier: 1,  radius: 1.8, alpha: 0.14, speed: 0.12 }, // 1단계
        { tier: 2,  radius: 2.6, alpha: 0.22, speed: 0.18 }, // 2단계
        { tier: 3,  radius: 3.6, alpha: 0.32, speed: 0.24 }, // 3단계
        { tier: 4,  radius: 4.8, alpha: 0.44, speed: 0.30 }, // 4단계
        { tier: 5,  radius: 6.0, alpha: 0.56, speed: 0.36 }, // 5단계
        { tier: 6,  radius: 7.5, alpha: 0.68, speed: 0.42 }, // 6단계
        { tier: 7,  radius: 9.0, alpha: 0.78, speed: 0.48 }, // 7단계
        { tier: 8,  radius: 10.6, alpha: 0.86, speed: 0.54 }, // 8단계
        { tier: 9,  radius: 12.2, alpha: 0.94, speed: 0.60 }, // 9단계
        { tier: 10, radius: 14.2, alpha: 0.98, speed: 0.68 }  // 10단계: 14.2px의 묵직한 랜드마크 파티클
    ];

    // 🎨 Dynamic Vibrant Neon Palette for 0g Particles
    const PARTICLE_NEON_PALETTE = [
        "#e5ff00", // Acid Neon Yellow
        "#00f0ff", // Electric Cyan
        "#ff0055", // Neon Magenta / Pink
        "#00ff66", // Vivid Emerald Green
        "#ff9900", // Solar Orange
        "#9d4edd", // Cyber Violet
        "#ffffff"  // Crisp Pure White
    ];

    class ZeroGravityParticle {
        constructor(w, h, index) {
            this.w = w;
            this.h = h;
            this.index = index;

            // 37개는 포스터 위로 선명하게 돌아다니는 포어그라운드 레이어
            this.isForeground = (index < 37);

            // 미니멀 화이트 & 모노톤 배정 (기본 파티클 컬러는 차분한 화이트/오프화이트)
            this.colorType = 'white';
            const whiteShades = ['#FFFFFF', '#F0F0F5', '#E2E2EA', '#D5D5DF'];
            this.customColor = whiteShades[index % whiteShades.length];

            // 막대(Bar)와 동그라미(Circle)가 자연스럽게 섞임 (~50% 비율)
            this.shape = (index % 2 === 0) ? 'bar' : 'circle';

            this.tierIndex = Math.floor(Math.random() * 10);
            this.tier = PARTICLE_TIERS[this.tierIndex];

            // 막대 파티클 규격
            const tierScale = (this.tierIndex === 9) ? 1.35 : (this.tierIndex >= 7 ? 1.20 : 1.0);
            this.barLength = (Math.random() * 24 + 20) * tierScale;
            this.barThickness = (Math.random() * 3.5 + 4.5) * tierScale;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.012;

            this.reset();
        }

        reset() {
            this.x = Math.random() * this.w;
            this.y = Math.random() * this.h;
            
            this.angle = Math.random() * Math.PI * 2;
            this.speed = (Math.random() * 0.22 + 0.12) * this.tier.speed * state.speed;
            this.vx = Math.cos(this.angle) * this.speed;
            this.vy = Math.sin(this.angle) * this.speed;

            this.baseRadius = this.tier.radius;
            this.radius = this.baseRadius;

            // 컬러가 선명하게 보이도록 기본 알파값 상향 (0.35 ~ 0.95)
            this.baseAlpha = this.isForeground ? 0.95 : Math.max(0.35, this.tier.alpha);
            this.alpha = this.baseAlpha;
            
            this.time = Math.random() * 1000;
            this.turnSpeed = (Math.random() - 0.5) * 0.007;
            this.wobbleFreq = Math.random() * 0.015 + 0.005;
            this.wobbleAmp = Math.random() * 0.35 + 0.15;

            this.touchEnergy = 0;
        }

        update(w, h, obstacleRects) {
            this.time += 1;
            this.rotation += this.rotSpeed * (1 + this.touchEnergy * 1.5);

            // Slowly wander independently in 0g
            this.angle += this.turnSpeed;
            const baseVx = Math.cos(this.angle) * this.speed;
            const baseVy = Math.sin(this.angle) * this.speed;

            this.vx = (this.vx || baseVx) * 0.94 + baseVx * 0.06;
            this.vy = (this.vy || baseVy) * 0.94 + baseVy * 0.06;

            this.x += this.vx + Math.sin(this.time * this.wobbleFreq) * this.wobbleAmp;
            this.y += this.vy + Math.cos(this.time * this.wobbleFreq * 0.8) * this.wobbleAmp;

            // Canvas Edge Wrap with margin
            const pad = 60;
            if (this.x < -pad) this.x = w + pad;
            if (this.x > w + pad) this.x = -pad;
            if (this.y < -pad) this.y = h + pad;
            if (this.y > h + pad) this.y = -pad;

            // 🧲 Mouse Repulsion / Deflection Physics
            if (state.mouse && state.mouse.x > -500 && state.mouse.y > -500) {
                const dx = this.x - state.mouse.x;
                const dy = this.y - state.mouse.y;
                const dist = Math.hypot(dx, dy);
                const repelRadius = state.mouse.radius || 150;

                if (dist < repelRadius && dist > 0.1) {
                    const force = Math.pow((repelRadius - dist) / repelRadius, 1.8);
                    const pushX = (dx / dist) * force * 4.2;
                    const pushY = (dy / dist) * force * 4.2;

                    this.vx += pushX;
                    this.vy += pushY;
                    this.touchEnergy = Math.min(1.0, this.touchEnergy + force * 0.4);
                    this.rotSpeed += (Math.random() - 0.5) * 0.04 * force;
                }
            }

            // Obstacle Bouncing
            if (obstacleRects && obstacleRects.length > 0) {
                for (let r of obstacleRects) {
                    if (this.x >= r.left - 10 && this.x <= r.right + 10 &&
                        this.y >= r.top - 10 && this.y <= r.bottom + 10) {
                        
                        const toLeft = Math.abs(this.x - r.left);
                        const toRight = Math.abs(this.x - r.right);
                        const toTop = Math.abs(this.y - r.top);
                        const toBottom = Math.abs(this.y - r.bottom);
                        const minD = Math.min(toLeft, toRight, toTop, toBottom);

                        let pushAngle = 0;
                        const bounceForce = 0.65;

                        if (minD === toLeft) {
                            this.vx = -Math.abs(this.vx) * 0.85;
                            pushAngle = Math.PI;
                        } else if (minD === toRight) {
                            this.vx = Math.abs(this.vx) * 0.85;
                            pushAngle = 0;
                        } else if (minD === toTop) {
                            this.vy = -Math.abs(this.vy) * 0.85;
                            pushAngle = -Math.PI / 2;
                        } else {
                            this.vy = Math.abs(this.vy) * 0.85;
                            pushAngle = Math.PI / 2;
                        }

                        this.vx += Math.cos(pushAngle) * bounceForce * 0.35;
                        this.vy += Math.sin(pushAngle) * bounceForce * 0.35;
                        this.x += Math.cos(pushAngle) * bounceForce * 0.75;
                        this.y += Math.sin(pushAngle) * bounceForce * 0.75;
                        this.rotSpeed += (Math.random() - 0.5) * 0.008;
                    }
                }
            }

            // Smooth decay of touch energy
            if (this.touchEnergy > 0.01) {
                this.touchEnergy *= 0.95;
                this.alpha = Math.min(1.0, this.baseAlpha + this.touchEnergy * 0.3);
            } else {
                this.touchEnergy = 0;
                this.alpha = this.baseAlpha;
            }
        }

        draw(ctx, textRects) {
            // 🛡️ 텍스트가 존재하는 모든 영역에서는 파티클을 100% 완전히 제외
            if (textRects && textRects.length > 0) {
                for (let r of textRects) {
                    if (this.x >= r.left - 12 && this.x <= r.right + 12 &&
                        this.y >= r.top - 8 && this.y <= r.bottom + 8) {
                        return; // 글자 및 텍스트 영역에서는 파티클 렌더링을 완전히 생략
                    }
                }
            }

            // 컬러 결정: 기본은 세련된 화이트/오프화이트, 마우스 반응 시 반짝이는 오렌지-핑크
            let renderColor = this.customColor || "#FFFFFF";
            if (this.touchEnergy > 0.1) {
                renderColor = (this.index % 2 === 0) ? "#FF5E36" : "#FF2A85";
            }

            const drawAlpha = this.alpha;

            ctx.save();
            ctx.globalAlpha = drawAlpha;

            // 마우스 접근 시 생동감 넘치는 네온 글로우 발광
            if (this.touchEnergy > 0.15) {
                ctx.shadowColor = renderColor;
                ctx.shadowBlur = 8;
            } else {
                ctx.shadowBlur = 0;
                ctx.shadowColor = "transparent";
            }

            if (this.shape === 'bar') {
                // 🥢 막대(Bar) 파티클 렌더링
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);

                ctx.fillStyle = renderColor;

                const halfW = this.barLength / 2;
                const halfH = this.barThickness / 2;
                const radius = Math.min(halfH, 3.5);

                ctx.beginPath();
                ctx.roundRect(-halfW, -halfH, this.barLength, this.barThickness, radius);
                ctx.fill();
            } else {
                // 🟢 원형(Circle) 파티클 렌더링
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = renderColor;
                ctx.fill();
            }

            ctx.restore();
        }
    }

    function initCanvas() {
        canvas = document.getElementById("generativeCanvas");
        if (!canvas) return;
        ctx = canvas.getContext("2d");
        if (!ctx) return;
        resizeCanvas();
        createParticles();
        animateCanvas();
    }

    function resizeCanvas() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles.forEach(p => {
            p.w = canvas.width;
            p.h = canvas.height;
        });
    }

    function createParticles() {
        if (!canvas) return;
        particles = [];
        for (let i = 0; i < state.particleCount; i++) {
            particles.push(new ZeroGravityParticle(canvas.width, canvas.height, i));
        }
    }

    function animateCanvas() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 🛡️ 화면에 존재하는 모든 텍스트 영역을 정밀하게 수집 (글자 침범 완전 배제)
        const textElements = [
            ...document.querySelectorAll("p"),
            ...document.querySelectorAll("h1, h2, h3, h4, h5, h6"),
            ...document.querySelectorAll(".cv-award-row"),
            ...document.querySelectorAll(".cv-exhibit-row"),
            ...document.querySelectorAll(".cv-time-node"),
            ...document.querySelectorAll(".cv-press-item"),
            ...document.querySelectorAll(".cv-profile-header"),
            ...document.querySelectorAll(".statement-col"),
            ...document.querySelectorAll(".cv-card-title-bar"),
            ...document.querySelectorAll(".cv-meta-sub"),
            ...document.querySelectorAll(".nav-container"),
            ...document.querySelectorAll(".lab-top-meta-bar"),
            ...document.querySelectorAll(".footer-email-block"),
            ...document.querySelectorAll(".footer-tagline"),
            ...document.querySelectorAll(".poster-top-meta"),
            ...document.querySelectorAll(".poster-title-row"),
            ...document.querySelectorAll(".poster-sub-row"),
            ...document.querySelectorAll(".poster-mid-row")
        ];

        const textRects = textElements
            .filter(el => el !== null && el.offsetWidth > 0 && el.offsetHeight > 0)
            .map(el => el.getBoundingClientRect());

        // Update and draw 0g floating particles (Bounce away from text & strictly draw in empty spaces)
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(canvas.width, canvas.height, textRects);
            particles[i].draw(ctx, textRects);
        }

        // Calculate and update Lab FPS display
        frameCount++;
        const now = Date.now();
        if (now - lastFpsUpdate >= 1000) {
            const fpsEl = document.getElementById("labFpsVal");
            if (fpsEl) {
                const fps = ((frameCount * 1000) / (now - lastFpsUpdate)).toFixed(1);
                fpsEl.textContent = fps;
            }
            frameCount = 0;
            lastFpsUpdate = now;
        }

        animationFrameId = requestAnimationFrame(animateCanvas);
    }

    // ==============================================================================
    // 🖱️ 2. MOUSE & TOUCH EVENT LISTENERS
    // ==============================================================================
    window.addEventListener("resize", resizeCanvas);

    window.addEventListener("mousemove", (e) => {
        state.mouse.x = e.clientX;
        state.mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        state.mouse.x = -1000;
        state.mouse.y = -1000;
    });

    // Passive touch events for iOS & Mobile compliance
    window.addEventListener("touchstart", (e) => {
        if (e.touches && e.touches.length > 0) {
            state.mouse.x = e.touches[0].clientX;
            state.mouse.y = e.touches[0].clientY;
        }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
        if (e.touches && e.touches.length > 0) {
            state.mouse.x = e.touches[0].clientX;
            state.mouse.y = e.touches[0].clientY;
        }
    }, { passive: true });

    window.addEventListener("touchend", () => {
        state.mouse.x = -1000;
        state.mouse.y = -1000;
    });

    // ==============================================================================
    // 🔘 2.1 OPTION 3: INVERTED NEGATIVE-SPACE LENS CURSOR ENGINE
    // ==============================================================================
    const lensState = {
        x: -1000,
        y: -1000,
        targetX: -1000,
        targetY: -1000
    };

    function initLensCursor() {
        const lensEl = document.getElementById("lensCursor");
        if (!lensEl) return;

        window.addEventListener("mousemove", (e) => {
            lensState.targetX = e.clientX;
            lensState.targetY = e.clientY;
            lensEl.classList.add("visible");
        });

        window.addEventListener("mouseleave", () => {
            lensEl.classList.remove("visible");
        });

        window.addEventListener("mousedown", () => {
            lensEl.classList.add("active");
        });

        window.addEventListener("mouseup", () => {
            lensEl.classList.remove("active");
        });

        // 60fps RAF ultra-responsive smooth spring tracking (0.72 speed)
        function renderLensLoop() {
            if (lensState.targetX > -500) {
                if (lensState.x < -500) {
                    lensState.x = lensState.targetX;
                    lensState.y = lensState.targetY;
                } else {
                    lensState.x += (lensState.targetX - lensState.x) * 0.72;
                    lensState.y += (lensState.targetY - lensState.y) * 0.72;
                }
                lensEl.style.left = `${lensState.x}px`;
                lensEl.style.top = `${lensState.y}px`;
            }
            requestAnimationFrame(renderLensLoop);
        }
        requestAnimationFrame(renderLensLoop);
    }

    // Header scroll background effect
    const siteHeader = document.getElementById("siteHeader");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            siteHeader?.classList.add("scrolled");
        } else {
            siteHeader?.classList.remove("scrolled");
        }
    });

    // ==============================================================================
    // 💼 3. DYNAMIC PROJECT SHOWCASE RENDERING
    // ==============================================================================
    function renderProjects(filter = "all") {
        const container = document.getElementById("projectsContainer");
        if (!container) return;

        const projects = window.PORTFOLIO_PROJECTS || [];
        const filtered = filter === "all"
            ? projects
            : projects.filter(p => p.category === filter);

        container.innerHTML = "";

        if (filtered.length === 0) {
            container.innerHTML = `<div class="no-projects-msg">해당 카테고리의 프로젝트가 준비 중입니다.</div>`;
            return;
        }

        filtered.forEach(project => {
            const card = document.createElement("article");
            card.className = "project-card";
            card.setAttribute("data-category", project.category);

            const tagsHtml = project.tags.map(t => `<span>${t}</span>`).join("");

            card.innerHTML = `
                <div class="project-thumb-box">
                    <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" onerror="this.src='../../img/img_001.jpg'">
                    <span class="project-cat-badge">${project.categoryName || project.category.toUpperCase()}</span>
                    <span class="project-year-badge">${project.year}</span>
                </div>
                <div class="project-info">
                    <div class="project-client">${project.client}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-subtitle">${project.subtitle}</p>
                    <p class="project-desc-text" style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6; margin-bottom:1rem;">
                        ${project.description}
                    </p>
                    <div class="project-tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Filter Buttons logic
    function setupFilterTabs() {
        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => {
                    b.classList.remove("active");
                    b.setAttribute("aria-selected", "false");
                });
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");

                const category = btn.getAttribute("data-filter");
                state.currentFilter = category;
                renderProjects(category);
            });
        });
    }

    // ==============================================================================
    // 🧪 4. INTERACTIVE LAB CONTROLS
    // ==============================================================================
    function setupLabControls() {
        const sliderCount = document.getElementById("sliderParticleCount");
        const sliderCountText = document.getElementById("sliderParticleCountText");
        const sliderSpeed = document.getElementById("sliderSpeed");
        const sliderSpeedText = document.getElementById("sliderSpeedText");
        const sliderDist = document.getElementById("sliderConnectDist");
        const sliderDistText = document.getElementById("sliderConnectDistText");
        const labParticlesVal = document.getElementById("labParticleCountVal");
        const labSpeedVal = document.getElementById("labSpeedVal");

        if (sliderCount) {
            sliderCount.addEventListener("input", (e) => {
                state.particleCount = parseInt(e.target.value, 10);
                if (sliderCountText) sliderCountText.textContent = state.particleCount;
                if (labParticlesVal) labParticlesVal.textContent = state.particleCount;
                createParticles();
            });
        }

        if (sliderSpeed) {
            sliderSpeed.addEventListener("input", (e) => {
                state.speed = parseFloat(e.target.value);
                if (sliderSpeedText) sliderSpeedText.textContent = state.speed.toFixed(1);
                if (labSpeedVal) labSpeedVal.textContent = state.speed.toFixed(1) + "x";
            });
        }

        if (sliderDist) {
            sliderDist.addEventListener("input", (e) => {
                state.connectDistance = parseInt(e.target.value, 10);
                if (sliderDistText) sliderDistText.textContent = state.connectDistance + "px";
            });
        }

        // Color Palette Dots (Sync top nav and Lab box dots)
        const allPaletteDots = document.querySelectorAll(".palette-dot, .color-dot, .color-dot-btn, .nav-palette-dot");
        allPaletteDots.forEach(dot => {
            dot.addEventListener("click", () => {
                const color = dot.getAttribute("data-color");
                if (color) {
                    allPaletteDots.forEach(d => d.classList.remove("active"));
                    document.querySelectorAll(`[data-color="${color}"]`).forEach(d => d.classList.add("active"));
                    state.accentColor = color;
                    document.documentElement.style.setProperty("--acid-yellow", color);
                }
            });
        });
    }

    // ==============================================================================
    // 🔀 5. MODE SWITCHER: CURATOR MODE ⟷ LAB MODE
    // ==============================================================================
    function setupModeToggle() {
        const modeBtn = document.getElementById("modeToggleBtn");
        const modeText = document.getElementById("modeLabelText");

        if (modeBtn) {
            modeBtn.addEventListener("click", () => {
                state.isLabMode = !state.isLabMode;
                if (state.isLabMode) {
                    document.body.classList.remove("mode-curator");
                    document.body.classList.add("mode-lab");
                    if (modeText) modeText.textContent = "LAB & CODE MODE";
                    state.particleCount = 200;
                    state.speed = 2.5;
                    state.connectDistance = 180;
                } else {
                    document.body.classList.remove("mode-lab");
                    document.body.classList.add("mode-curator");
                    if (modeText) modeText.textContent = "CURATOR MODE";
                    state.particleCount = 120;
                    state.speed = 1.5;
                    state.connectDistance = 140;
                }
                createParticles();
            });
        }
    }

    // ==============================================================================
    // 📋 6. EMAIL COPY BUTTON WITH FEEDBACK
    // ==============================================================================
    window.copyEmailAddress = function(btnElement) {
        const email = document.getElementById("emailAddressText")?.textContent?.trim() || "jpvoice@naver.com";
        const btn = btnElement || document.getElementById("copyEmailBtn");

        function showSuccess() {
            if (btn) {
                const origText = btn.textContent;
                btn.textContent = "COPIED!";
                btn.style.background = "#00FFA3";
                btn.style.color = "#000";
                setTimeout(() => {
                    btn.textContent = origText || "COPY EMAIL";
                    btn.style.background = "";
                    btn.style.color = "";
                }, 2000);
            }
        }

        function fallbackCopy() {
            try {
                const textArea = document.createElement("textarea");
                textArea.value = email;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                textArea.setAttribute("readonly", "");
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                if (successful) {
                    showSuccess();
                } else {
                    prompt("이메일 주소를 복사하세요 (Ctrl+C):", email);
                }
            } catch (err) {
                prompt("이메일 주소를 복사하세요 (Ctrl+C):", email);
            }
        }

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(email).then(showSuccess).catch(fallbackCopy);
        } else {
            fallbackCopy();
        }
    };

    function setupCopyEmail() {
        const copyBtn = document.getElementById("copyEmailBtn");
        if (copyBtn) {
            copyBtn.addEventListener("click", () => window.copyEmailAddress(copyBtn));
        }
    }

    // ==============================================================================
    // ⬆️ 7. BACK TO TOP BUTTON
    // ==============================================================================
    function setupBackToTop() {
        const topBtn = document.getElementById("backToTopBtn");
        if (topBtn) {
            topBtn.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    }

    // ==============================================================================
    // 🔠 8. KINETIC PHYSICS TYPOGRAPHY ENGINE (ARTIST JIHYUN / PROF.PARK / ART DIRECTOR)
    // ==============================================================================
    function initKineticPhysicsTypography() {
        const container = document.getElementById("physicsPosterBlock");
        const canvas = document.getElementById("kineticWordCanvas");
        if (!container || !canvas) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        const WORDS = ["ARTIST JIHYUN", "PROF.PARK", "ART DIRECTOR"];
        let currentWordIndex = 0;
        let particles = [];
        let groups = {}; // groupId -> { isBroken, brokenUntil, count }
        let width = 0;
        let height = 0;
        let dpr = 1;
        let mouseX = -9999;
        let mouseY = -9999;
        let isHovered = false;
        let lastWordSwitch = performance.now();
        const WORD_DURATION = 5000; // 5초마다 순환

        // 🎨 5. 캔버스 비트맵 캐싱 (Pre-rendered Bitmap Sprite Cache)
        const dotCanvas = document.createElement("canvas");
        const dotCtx = dotCanvas.getContext("2d");
        const SPRITE_SIZE = 32;
        dotCanvas.width = SPRITE_SIZE;
        dotCanvas.height = SPRITE_SIZE;
        
        dotCtx.clearRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
        const grad = dotCtx.createRadialGradient(
            SPRITE_SIZE / 2, SPRITE_SIZE / 2, 0,
            SPRITE_SIZE / 2, SPRITE_SIZE / 2, SPRITE_SIZE / 2
        );
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.7, "rgba(255, 255, 255, 0.95)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        dotCtx.fillStyle = grad;
        dotCtx.beginPath();
        dotCtx.arc(SPRITE_SIZE / 2, SPRITE_SIZE / 2, SPRITE_SIZE / 2, 0, Math.PI * 2);
        dotCtx.fill();

        function resize() {
            const rect = container.getBoundingClientRect();
            if (rect.width <= 0 || rect.height <= 0) return;
            width = Math.floor(rect.width);
            height = Math.floor(rect.height);
            dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            buildWordParticles(WORDS[currentWordIndex], true);
        }

        // 1. 텍스트를 물리 오브젝트로 변환
        function buildWordParticles(word, instant = false) {
            if (width <= 0 || height <= 0) return;
            const offCanvas = document.createElement("canvas");
            const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
            offCanvas.width = width;
            offCanvas.height = height;

            // 꽉 차게 비율 계산 (너비의 95% 맞춤)
            let fontSize = Math.floor(height * 1.15);
            const fontFamily = "'Archivo Black', 'Inter', -apple-system, sans-serif";
            offCtx.font = `900 ${fontSize}px ${fontFamily}`;
            let textWidth = offCtx.measureText(word).width;

            if (textWidth > 0) {
                const targetWidth = width * 0.95;
                fontSize = Math.floor(fontSize * (targetWidth / textWidth));
                fontSize = Math.min(fontSize, height * 1.25);
            }
            offCtx.font = `900 ${fontSize}px ${fontFamily}`;
            textWidth = offCtx.measureText(word).width;

            const textX = Math.max(8, (width - textWidth) / 2);
            const textY = height / 2 + fontSize * 0.35; // 수직 정중앙

            offCtx.fillStyle = "#FFFFFF";
            offCtx.fillText(word, textX, textY);

            const imgData = offCtx.getImageData(0, 0, width, height).data;
            const step = Math.max(4, Math.floor(width / 240)); // 고해상도 샘플링
            const newTargets = [];
            groups = {};

            // 3. 문자 그룹 시스템 (각 글자별 바운딩 박스)
            const charPositions = [];
            let currX = textX;
            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                const w = offCtx.measureText(char).width;
                charPositions.push({ char, startX: currX - step, endX: currX + w + step, id: i });
                groups[i] = { isBroken: false, brokenUntil: 0, count: 0 };
                currX += w;
            }

            for (let y = 0; y < height; y += step) {
                for (let x = 0; x < width; x += step) {
                    const idx = (y * width + x) * 4;
                    const alpha = imgData[idx + 3];
                    if (alpha > 128) {
                        let groupId = 0;
                        for (const cp of charPositions) {
                            if (x >= cp.startX && x <= cp.endX) {
                                groupId = cp.id;
                                break;
                            }
                        }
                        groups[groupId].count = (groups[groupId].count || 0) + 1;

                        newTargets.push({
                            x: x + (Math.random() - 0.5) * 0.5,
                            y: y + (Math.random() - 0.5) * 0.5,
                            groupId: groupId,
                            radius: (step * 0.46)
                        });
                    }
                }
            }

            // 기존 입자를 새로운 타깃 위치로 유기적 모핑
            const count = newTargets.length;
            const updatedParticles = [];

            for (let i = 0; i < count; i++) {
                const target = newTargets[i];
                if (i < particles.length && !instant) {
                    const p = particles[i];
                    p.homeX = target.x;
                    p.homeY = target.y;
                    p.groupId = target.groupId;
                    p.radius = target.radius;
                    updatedParticles.push(p);
                } else {
                    const spawnX = instant ? target.x : (target.x + (Math.random() - 0.5) * 80);
                    const spawnY = instant ? target.y : (target.y + (Math.random() - 0.5) * 50);
                    updatedParticles.push({
                        x: spawnX,
                        y: spawnY,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        homeX: target.x,
                        homeY: target.y,
                        groupId: target.groupId,
                        radius: target.radius
                    });
                }
            }

            particles = updatedParticles;
        }

        // 마우스 & 터치 이벤트 연결
        container.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            isHovered = true;
        });

        container.addEventListener("mouseleave", () => {
            mouseX = -9999;
            mouseY = -9999;
            isHovered = false;
        });

        container.addEventListener("touchmove", (e) => {
            if (e.touches.length > 0) {
                const rect = canvas.getBoundingClientRect();
                mouseX = e.touches[0].clientX - rect.left;
                mouseY = e.touches[0].clientY - rect.top;
                isHovered = true;
            }
        }, { passive: true });

        container.addEventListener("touchend", () => {
            mouseX = -9999;
            mouseY = -9999;
            isHovered = false;
        });

        function animate(now) {
            requestAnimationFrame(animate);

            // 텍스트 자동 순환 (안정 상태에서 5초마다 다음 텍스트로 전환)
            const isAnyBroken = Object.values(groups).some(g => g.isBroken);
            if (!isAnyBroken && !isHovered && (now - lastWordSwitch > WORD_DURATION)) {
                lastWordSwitch = now;
                currentWordIndex = (currentWordIndex + 1) % WORDS.length;
                buildWordParticles(WORDS[currentWordIndex], false);
            }

            ctx.clearRect(0, 0, width, height);

            const repelRadius = Math.max(130, height * 0.85);
            const breakRadius = Math.max(65, height * 0.42);

            // 3. 문자 그룹 복구 타이머 체크 (4.5초 뒤 복구)
            for (const gid in groups) {
                const g = groups[gid];
                if (g.isBroken && now >= g.brokenUntil) {
                    g.isBroken = false;
                }
            }

            // 입자 물리 시뮬레이션 및 렌더링
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const g = groups[p.groupId] || { isBroken: false };

                // 2. 마우스 반발력 (Repulsion)
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < repelRadius && dist > 0.001) {
                    if (dist < breakRadius && !g.isBroken) {
                        g.isBroken = true;
                        g.brokenUntil = now + 4500; // 깨진 후 4.5초 뒤 복구
                    }

                    const force = (repelRadius - dist) / repelRadius;
                    const angle = Math.atan2(dy, dx);
                    const multiplier = g.isBroken ? 22.0 : 8.5; // 폭발하듯 밀려남
                    p.vx += Math.cos(angle) * force * multiplier;
                    p.vy += Math.sin(angle) * force * multiplier;
                }

                // 4. 귀환 시스템 (Homing)
                const hdx = p.homeX - p.x;
                const hdy = p.homeY - p.y;
                const returnStrength = g.isBroken ? 0.016 : 0.088;

                p.vx += hdx * returnStrength;
                p.vy += hdy * returnStrength;

                // 물리 감쇠 (Friction)
                p.vx *= 0.86;
                p.vy *= 0.86;

                p.x += p.vx;
                p.y += p.vy;

                // 5. 캔버스 비트맵 캐싱 스프라이트 렌더링
                const size = p.radius * 2.2;
                ctx.drawImage(dotCanvas, p.x - size / 2, p.y - size / 2, size, size);
            }
        }

        window.addEventListener("resize", resize);
        setTimeout(resize, 100);
        requestAnimationFrame(animate);
    }

    // ==============================================================================
    // 🚀 INITIALIZATION
    // ==============================================================================
    function init() {
        initCanvas();
        renderProjects("all");
        setupLabControls();
        setupModeToggle();
        setupCopyEmail();
        setupBackToTop();
        initLensCursor();
        initKineticPhysicsTypography();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
