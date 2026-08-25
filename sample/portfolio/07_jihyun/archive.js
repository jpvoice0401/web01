/**
 * ==============================================================================
 * 📁 ARCHIVE PAGE ENGINE (archive.js) — Clean Swiss Matrix (No Particles)
 * ==============================================================================
 */

(function () {
    "use strict";

    // Global theme state
    const state = {
        accentColor: "#CEFF00",
        currentFilter: "all"
    };

    // ==============================================================================
    // 🔘 1. INVERTED FEMININE FLUORESCENT NEON LENS CURSOR
    // ==============================================================================
    function initLensCursor() {
        const lensEl = document.getElementById("lensCursor");
        if (!lensEl) return;

        const lensState = {
            x: -1000,
            y: -1000,
            targetX: -1000,
            targetY: -1000
        };

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

        // Stable clean cursor size (No magnifier expansion anywhere)

        function renderLensLoop() {
            if (lensState.targetX > -500) {
                if (lensState.x < -500) {
                    lensState.x = lensState.targetX;
                    lensState.y = lensState.targetY;
                } else {
                    lensState.x += (lensState.targetX - lensState.x) * 0.38;
                    lensState.y += (lensState.targetY - lensState.y) * 0.38;
                }
                lensEl.style.left = `${lensState.x}px`;
                lensEl.style.top = `${lensState.y}px`;
            }
            requestAnimationFrame(renderLensLoop);
        }
        requestAnimationFrame(renderLensLoop);
    }

    // ==============================================================================
    // 🎨 2. THEME COLOR PALETTE SYNC
    // ==============================================================================
    function setupThemePalette() {
        const paletteDots = document.querySelectorAll(".nav-palette-dot, .palette-dot, .color-dot");
        paletteDots.forEach(dot => {
            dot.addEventListener("click", () => {
                const color = dot.getAttribute("data-color");
                if (color) {
                    paletteDots.forEach(d => d.classList.remove("active"));
                    document.querySelectorAll(`[data-color="${color}"]`).forEach(d => d.classList.add("active"));
                    state.accentColor = color;
                    document.documentElement.style.setProperty("--acid-yellow", color);
                }
            });
        });
    }

    // ==============================================================================
    // 💼 3. PROJECT GRID RENDERING & FILTERING (CHRONOLOGICAL DESCENDING SORT)
    // ==============================================================================
    function getProjectSortKey(project) {
        if (!project || !project.year) return 0;
        const yearStr = String(project.year);
        const matches = yearStr.match(/\b(19\d\d|20\d\d)\b/g);
        if (!matches || matches.length === 0) return 0;
        const numYears = matches.map(Number);
        const maxYear = Math.max(...numYears);
        const minYear = Math.min(...numYears);
        return maxYear * 10000 + minYear;
    }

    function renderProjects(filter = "all") {
        const container = document.getElementById("projectsContainer");
        if (!container) return;

        // Respect curated sequence defined in projects_data.js
        const projects = (window.PORTFOLIO_PROJECTS || []).slice();

        const filtered = filter === "all"
            ? projects
            : projects.filter(p => p.category === filter);

        container.innerHTML = "";

        if (filtered.length === 0) {
            container.innerHTML = `<div class="no-projects-msg" style="padding:3rem; text-align:center; color:var(--gray-mid); font-family:var(--font-mono);">해당 카테고리의 프로젝트가 준비 중입니다.</div>`;
            return;
        }

        filtered.forEach(project => {
            const card = document.createElement("article");
            card.className = "project-card image-first-card";
            card.setAttribute("data-category", project.category);
            card.setAttribute("data-id", project.id);

            const videoBadgeHtml = project.youtube
                ? `<span class="overlay-cat-badge video-badge" style="background:#FF0000; color:#fff; margin-left:6px; font-weight:800;">▶ YOUTUBE SHORTS</span>`
                : (project.video
                    ? `<span class="overlay-cat-badge video-badge" style="background:var(--accent-pink, #FF2E93); color:#fff; margin-left:6px;">🎬 MOVIE</span>`
                    : "");

            const ctaText = project.youtube ? "WATCH SHORTS ↗" : (project.video ? "WATCH FILM" : "VIEW PROJECT");

            card.innerHTML = `
                <div class="project-thumb-box">
                    <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" onerror="this.src='../../img/img_001.jpg'">
                    <div class="project-card-overlay">
                        <div class="overlay-top-tags">
                            <span class="overlay-cat-badge">${project.categoryName || project.category.toUpperCase()}</span>
                            ${videoBadgeHtml}
                        </div>
                        <div class="overlay-content">
                            <div class="overlay-client">${project.client}</div>
                            <h3 class="overlay-title">${project.title}</h3>
                            <p class="overlay-subtitle">${project.subtitle}</p>
                            <div class="overlay-cta">
                                <span>${ctaText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Modal Trigger on click
            card.addEventListener("click", () => openProjectModal(project));

            container.appendChild(card);
        });
    }

    function setupFilterTabs() {
        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const category = btn.getAttribute("data-filter");
                applyFilter(category);
            });
        });
    }

    function applyFilter(category) {
        state.currentFilter = category;
        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach(b => {
            if (b.getAttribute("data-filter") === category) {
                b.classList.add("active");
                b.setAttribute("aria-selected", "true");
            } else {
                b.classList.remove("active");
                b.setAttribute("aria-selected", "false");
            }
        });
        renderProjects(category);
    }

    function initFilterFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get("filter") || urlParams.get("category");
        if (filterParam) {
            applyFilter(filterParam);
        } else {
            renderProjects("all");
        }
    }

    // ==============================================================================
    // 🔍 4. PROJECT MODAL (LIGHTBOX) & MULTI-VIEW GALLERY
    // ==============================================================================
    function openProjectModal(project) {
        const modal = document.getElementById("projectModal");
        const modalCard = modal?.querySelector(".modal-card");
        if (!modal || !modalCard) return;

        const modalImg = document.getElementById("modalImg");
        const modalVideo = document.getElementById("modalVideo");
        const modalYoutube = document.getElementById("modalYoutube");

        // 📐 5-Tier Adaptive Ratio Detection System (Including Ultra-Portrait Full Scroll)
        const adjustModalRatio = (imgEl) => {
            if (imgEl.naturalWidth && imgEl.naturalHeight) {
                const ratio = imgEl.naturalWidth / imgEl.naturalHeight;
                modalCard.classList.remove("is-ultrawide", "is-landscape", "is-square", "is-portrait", "is-ultra-portrait");

                if (ratio >= 1.55) {
                    modalCard.classList.add("is-ultrawide");
                } else if (ratio > 1.15) {
                    modalCard.classList.add("is-landscape");
                } else if (ratio >= 0.85) {
                    modalCard.classList.add("is-square");
                } else if (ratio < 0.45) {
                    // 📜 Ultra-Portrait Full-page Web Capture (e.g. 1899x7800)
                    modalCard.classList.add("is-portrait", "is-ultra-portrait");
                } else {
                    modalCard.classList.add("is-portrait");
                }
            }
        };

        if (project.youtube) {
            if (modalYoutube) {
                modalImg.style.display = "none";
                if (modalVideo) { modalVideo.pause(); modalVideo.src = ""; modalVideo.style.display = "none"; }
                modalYoutube.style.display = "block";
                modalYoutube.src = `https://www.youtube.com/embed/${project.youtube}?autoplay=1&loop=1&playlist=${project.youtube}&rel=0&modestbranding=1&enablejsapi=1`;
                modalCard.classList.remove("is-ultrawide", "is-landscape", "is-square");
                modalCard.classList.add("is-portrait");
            }
        } else if (project.video) {
            if (modalYoutube) { modalYoutube.src = ""; modalYoutube.style.display = "none"; }
            if (modalVideo) {
                modalImg.style.display = "none";
                modalVideo.style.display = "block";
                modalVideo.src = project.video;
                modalVideo.onloadedmetadata = () => {
                    if (modalVideo.videoWidth && modalVideo.videoHeight) {
                        const ratio = modalVideo.videoWidth / modalVideo.videoHeight;
                        modalCard.classList.remove("is-ultrawide", "is-landscape", "is-square", "is-portrait", "is-ultra-portrait");
                        if (ratio >= 1.3) {
                            modalCard.classList.add("is-landscape");
                        } else if (ratio >= 0.85) {
                            modalCard.classList.add("is-square");
                        } else {
                            modalCard.classList.add("is-portrait");
                        }
                    }
                };
                modalVideo.play().catch(e => console.log("Video autoplay caught:", e));
            }
        } else {
            if (modalYoutube) { modalYoutube.src = ""; modalYoutube.style.display = "none"; }
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.src = "";
                modalVideo.style.display = "none";
            }
            modalImg.style.display = "block";
            modalImg.onload = () => adjustModalRatio(modalImg);
            modalImg.src = project.image;
            modalImg.alt = project.title;
        }

        document.getElementById("modalCatBadge").textContent = project.categoryName || project.category.toUpperCase();
        const modalYearEl = document.getElementById("modalYearBadge");
        if (modalYearEl) modalYearEl.style.display = "none";
        document.getElementById("modalClient").textContent = project.client;
        document.getElementById("modalTitle").textContent = project.title;
        document.getElementById("modalSubtitle").textContent = project.subtitle;
        document.getElementById("modalDescription").textContent = project.description;

        // 🌐 Interactive Live Website Link (e.g. Hansei University Official Site)
        const linkContainer = document.getElementById("modalLinkWrap");
        if (linkContainer) {
            if (project.link) {
                linkContainer.style.display = "block";
                linkContainer.innerHTML = `
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="modal-live-link-btn" id="modalLiveLinkBtn">
                        <div class="modal-link-text-group">
                            <span class="link-title-en">VISIT OFFICIAL WEBSITE</span>
                            <span class="link-title-ko">공식 대표홈페이지 바로가기</span>
                        </div>
                        <span class="live-link-arrow">↗</span>
                    </a>
                `;
            } else {
                linkContainer.style.display = "none";
                linkContainer.innerHTML = "";
            }
        }

        const tagsContainer = document.getElementById("modalTags");
        const cleanTags = (project.tags || []).filter(t => !/^\d{4}(\s*-\s*\d{4})?(\s*\(ing\))?$/.test(String(t).trim()));
        tagsContainer.innerHTML = cleanTags.map(t => `<span>${t}</span>`).join("");

        // 🔊 Audio Track Autoplay (e.g. OATH Sound Art)
        const audioPlayerContainer = document.getElementById("modalAudioPlayer");
        if (currentModalAudio) {
            currentModalAudio.pause();
            currentModalAudio = null;
        }

        if (project.audio) {
            if (audioPlayerContainer) {
                audioPlayerContainer.style.display = "flex";
                audioPlayerContainer.innerHTML = `
                    <div class="audio-control-wrap">
                        <button class="audio-toggle-btn" id="audioToggleBtn" aria-label="Toggle Sound">
                            <span class="audio-icon">🔊</span>
                            <span class="audio-status-text">SOUND ART PLAYING</span>
                        </button>
                        <div class="audio-waves">
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                `;

                currentModalAudio = new Audio(project.audio);
                currentModalAudio.loop = true;
                currentModalAudio.play().catch(e => console.log("Audio autoplay prevented by browser policy:", e));

                const toggleBtn = document.getElementById("audioToggleBtn");
                if (toggleBtn) {
                    toggleBtn.addEventListener("click", () => {
                        if (currentModalAudio.paused) {
                            currentModalAudio.play();
                            toggleBtn.querySelector(".audio-icon").textContent = "🔊";
                            toggleBtn.querySelector(".audio-status-text").textContent = "SOUND ART PLAYING";
                            audioPlayerContainer.classList.remove("paused");
                        } else {
                            currentModalAudio.pause();
                            toggleBtn.querySelector(".audio-icon").textContent = "🔇";
                            toggleBtn.querySelector(".audio-status-text").textContent = "SOUND PAUSED";
                            audioPlayerContainer.classList.add("paused");
                        }
                    });
                }
            }
        } else {
            if (audioPlayerContainer) {
                audioPlayerContainer.style.display = "none";
                audioPlayerContainer.innerHTML = "";
            }
        }

        // ◀️ ▶️ Multi-image Gallery Navigation Setup (Images only)
        const galleryStrip = document.getElementById("modalGalleryStrip");
        const navPrevBtn = document.getElementById("modalNavPrev");
        const navNextBtn = document.getElementById("modalNavNext");

        const galleryList = (project.gallery && project.gallery.length > 0)
            ? project.gallery
            : [project.image];

        let currentIdx = 0;

        const updateGalleryView = (idx, shouldScroll = false) => {
            if (project.video || project.youtube) return; // Dedicated video/youtube mode
            currentIdx = (idx + galleryList.length) % galleryList.length;
            const newUrl = galleryList[currentIdx];
            modalImg.src = newUrl;

            // Sync Thumbnails without jitter
            if (galleryStrip) {
                const thumbs = galleryStrip.querySelectorAll(".modal-thumb");
                thumbs.forEach((t, i) => {
                    if (i === currentIdx) {
                        t.classList.add("active");
                        if (shouldScroll) {
                            t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                        }
                    } else {
                        t.classList.remove("active");
                    }
                });
            }
        };

        // Prev / Next Button Visibility
        if (!project.video && !project.youtube && galleryList.length > 1) {
            if (navPrevBtn) navPrevBtn.style.display = "flex";
            if (navNextBtn) navNextBtn.style.display = "flex";
        } else {
            if (navPrevBtn) navPrevBtn.style.display = "none";
            if (navNextBtn) navNextBtn.style.display = "none";
        }

        // ⏱️ 4-Second Intelligent Auto-Slideshow (Pause on Hover)
        let autoSlideTimer = null;
        const startAutoSlide = () => {
            if (project.video || project.youtube || galleryList.length <= 1) return;
            stopAutoSlide();
            autoSlideTimer = setInterval(() => {
                updateGalleryView(currentIdx + 1, true);
            }, 4000);
        };

        const stopAutoSlide = () => {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
                autoSlideTimer = null;
            }
        };

        // Attach auto-slide controller to modal instance
        modal._stopAutoSlide = stopAutoSlide;
        modal._startAutoSlide = startAutoSlide;

        const imgWrap = document.querySelector(".modal-img-wrap");
        if (imgWrap) {
            imgWrap.onmouseenter = () => stopAutoSlide();
            imgWrap.onmouseleave = () => startAutoSlide();
        }

        if (navPrevBtn) {
            navPrevBtn.onclick = (e) => {
                e.stopPropagation();
                updateGalleryView(currentIdx - 1, true);
                startAutoSlide(); // Reset 4s timer
            };
        }

        if (navNextBtn) {
            navNextBtn.onclick = (e) => {
                e.stopPropagation();
                updateGalleryView(currentIdx + 1, true);
                startAutoSlide(); // Reset 4s timer
            };
        }

        // Render Thumbnails Strip (Click-Only stable switching)
        if (galleryStrip) {
            galleryStrip.innerHTML = "";
            if (galleryList.length > 1) {
                galleryStrip.style.display = "flex";
                galleryList.forEach((imgUrl, idx) => {
                    const thumb = document.createElement("img");
                    thumb.src = imgUrl;
                    thumb.alt = `${project.title} - View ${idx + 1}`;
                    thumb.className = `modal-thumb ${idx === 0 ? "active" : ""}`;

                    thumb.addEventListener("click", (e) => {
                        e.stopPropagation();
                        updateGalleryView(idx, false);
                        startAutoSlide(); // Reset 4s timer
                    });
                    galleryStrip.appendChild(thumb);
                });
            } else {
                galleryStrip.style.display = "none";
            }
        }

        modal.classList.add("active");
        document.body.classList.add("modal-open");
        document.body.style.overflow = "hidden";

        // Start auto slideshow
        startAutoSlide();

        // Store active handler for keyboard arrows
        modal._navHandler = (e) => {
            if (!modal.classList.contains("active")) return;
            if (e.key === "ArrowLeft") {
                updateGalleryView(currentIdx - 1);
                startAutoSlide();
            } else if (e.key === "ArrowRight") {
                updateGalleryView(currentIdx + 1);
                startAutoSlide();
            }
        };
        window.addEventListener("keydown", modal._navHandler);
    }

    let currentModalAudio = null;

    function setupModalListeners() {
        const modal = document.getElementById("projectModal");
        const closeBtn = document.getElementById("modalCloseBtn");
        const backdrop = document.querySelector(".modal-backdrop");
        const imgWrap = document.querySelector(".modal-img-wrap");
        const modalImg = document.getElementById("modalImg");

        // 🔍 Interactive Close-up Zoom: Dynamic Transform Origin (Silky Smooth with rAF)
        if (imgWrap && modalImg) {
            let rafId = null;
            imgWrap.addEventListener("mousemove", (e) => {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    const rect = imgWrap.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                        const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
                        const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
                        modalImg.style.transformOrigin = `${x.toFixed(1)}% ${y.toFixed(1)}%`;
                    }
                });
            });

            imgWrap.addEventListener("mouseleave", () => {
                if (rafId) cancelAnimationFrame(rafId);
                modalImg.style.transformOrigin = "center center";
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener("click", closeModal);
        }
        if (backdrop) {
            backdrop.addEventListener("click", closeModal);
        }

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal && modal.classList.contains("active")) {
                closeModal();
            }
        });

        function closeModal() {
            const modal = document.getElementById("projectModal");
            if (!modal) return;

            if (modal._stopAutoSlide) {
                modal._stopAutoSlide();
            }

            modal.classList.remove("active");
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "";
            if (modal._navHandler) {
                window.removeEventListener("keydown", modal._navHandler);
            }
            if (modalImg) {
                modalImg.style.transformOrigin = "center center";
            }
            if (currentModalAudio) {
                currentModalAudio.pause();
                currentModalAudio.currentTime = 0;
                currentModalAudio = null;
            }
            const modalVideo = document.getElementById("modalVideo");
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.currentTime = 0;
                modalVideo.src = "";
            }
            const modalYoutube = document.getElementById("modalYoutube");
            if (modalYoutube) {
                modalYoutube.src = "";
                modalYoutube.style.display = "none";
            }
        }
    }

    // ==============================================================================
    // 📋 5. COPY EMAIL & TOP BUTTON
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

    function setupPdfPrint() {
        const printBtn = document.getElementById("printCvPdfBtn");
        if (printBtn) {
            printBtn.addEventListener("click", (e) => {
                e.preventDefault();
                window.print();
            });
        }
    }

    // ==============================================================================
    // 🎯 8. ACCURATE HASH NAVIGATION & SMOOTH SCROLL (From index.html to #work)
    // ==============================================================================
    function initHashScroll() {
        function scrollToHash() {
            const hash = window.location.hash;
            if (hash) {
                const target = document.querySelector(hash);
                if (target) {
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 120);
                }
            }
        }

        // Run on load and on hashchange
        scrollToHash();
        window.addEventListener("hashchange", scrollToHash);
    }

    // ==============================================================================
    // ⚡ 9. MANIFESTO PHYSICS TYPOGRAPHY ENGINE (ABOUT BIO INTERACTION)
    // ==============================================================================
    function initManifestoPhysicsTypography() {
        const container = document.getElementById("manifestoPhysicsContainer");
        const canvas = document.getElementById("manifestoPhysicsCanvas");
        if (!container || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Exact 10-Line Editorial Narrative Structure
        const MANIFESTO_LINES = [
            [
                { text: "박지현은 예술과 디자인, 기술이 교차하는 자리에서 작업하는 아티스트이자 크리에이티브 디렉터, 그리고 교육자", isStrong: true, color: "#FFFFFF" },
                { text: "입니다.", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "생성형 AI가 창작의 조건 자체를 바꾸어 놓은 지금, 기술을 새로운 도구로 받아들이는 데 그치지 않고", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "그 기술이 만들어 낼 미학과 태도를 함께 묻고 새로운 미학적 가능성을 탐구합니다.", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "예술의 질문과 디자인의 실행, 기술의 가능성은 그의 작업 안에서 분리되지 않으며", isStrong: true, color: "#FFFFFF" },
                { text: ", 전통 회화의 물성에 대한 탐구에서 출발하여", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "개념 미술(Conceptual Art)과 오브제", isStrong: true, color: "#FFFFFF" },
                { text: ", 인터랙티브 미디어아트, ", isStrong: false, color: "rgba(225, 225, 225, 0.88)" },
                { text: "생성형 AI와 바이브 코딩(Vibe Coding)", isStrong: true, color: "#FFFFFF" },
                { text: "에 이르기까지 매체의 경계 없이 작업 세계를 확장해왔습니다.", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "“매체가 아니라 관점”", isStrong: true, color: "#FFFFFF" },
                { text: "을 중심에 두고, 크리에이티브 디렉터로서 ", isStrong: false, color: "rgba(225, 225, 225, 0.88)" },
                { text: "“개념을 구조로, 구조를 경험으로”", isStrong: true, color: "#E5FF00" },
                { text: " 전환하며", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "브랜드의 고유한 철학과 서사를 관통하는 비주얼 아이덴티티부터 감각적인 팝업 공간 연출,", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "출판 에디토리얼, 디지털 미디어 콘텐츠에 이르기까지 전 영역을 유기적인 시각 언어로 통합하여 총괄합니다.", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "예술적 통찰이 시장의 언어로 정확히 번역될 때 브랜드는 소비되는 이미지가 아니라 고유한 관점을 갖게 되며,", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ],
            [
                { text: "기업 및 지자체와 연계한 산학 프로젝트와 실무 융합 교육", isStrong: true, color: "#FFFFFF" },
                { text: "을 통해 예술과 디자인, 교육이 융합되는 지속 가능한 가치를 창출합니다.", isStrong: false, color: "rgba(225, 225, 225, 0.88)" }
            ]
        ];

        let particles = [];
        let width = 0;
        let height = 0;
        let dpr = window.devicePixelRatio || 1;
        let mouse = { x: -9999, y: -9999, active: false };

        // Particle Class
        class GlyphParticle {
            constructor(char, x, y, isStrong, baseColor, groupId) {
                this.char = char;
                this.homeX = x;
                this.homeY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
                this.rot = 0;
                this.vRot = 0;
                this.isStrong = isStrong;
                this.baseColor = baseColor;
                this.groupId = groupId;
                this.isBroken = false;
                this.brokenTime = 0;
            }

            update(now, mouseX, mouseY, mouseActive) {
                const repelRadius = 92;
                const breakRadius = 48;
                const repelPower = 12.5;

                if (mouseActive) {
                    const dx = this.x - mouseX;
                    const dy = this.y - mouseY;
                    const dist = Math.hypot(dx, dy);

                    if (dist < repelRadius && dist > 0.1) {
                        const force = Math.pow((repelRadius - dist) / repelRadius, 1.35) * repelPower;
                        const angle = Math.atan2(dy, dx);
                        this.vx += Math.cos(angle) * force;
                        this.vy += Math.sin(angle) * force;
                        this.vRot += (Math.random() - 0.5) * 0.18;

                        if (dist < breakRadius) {
                            this.isBroken = true;
                            this.brokenTime = now;
                        }

                        if (window.playInteractiveParticleSound) {
                            window.playInteractiveParticleSound();
                        }
                    }
                }

                // 4.5s auto-recovery for broken character groups
                if (this.isBroken && now - this.brokenTime > 4500) {
                    this.isBroken = false;
                }

                // Smooth damped spring back to home position
                const spring = this.isBroken ? 0.038 : 0.082;
                const friction = this.isBroken ? 0.88 : 0.82;

                const ax = (this.homeX - this.x) * spring;
                const ay = (this.homeY - this.y) * spring;

                this.vx = (this.vx + ax) * friction;
                this.vy = (this.vy + ay) * friction;
                this.x += this.vx;
                this.y += this.vy;

                // Rotation damping
                this.vRot *= 0.85;
                this.rot += this.vRot;
                this.rot *= 0.92;
            }

            draw(ctx, fontSize) {
                ctx.save();
                ctx.translate(this.x, this.y);
                if (Math.abs(this.rot) > 0.005) {
                    ctx.rotate(this.rot);
                }

                ctx.font = this.isStrong ? `700 ${fontSize}px 'Noto Sans KR', 'Inter', sans-serif` : `400 ${fontSize}px 'Noto Sans KR', 'Inter', sans-serif`;
                ctx.fillStyle = this.isBroken ? "#E5FF00" : this.baseColor;
                ctx.fillText(this.char, 0, 0);
                ctx.restore();
            }
        }

        // Layout Calculator (Strictly preserving 10-line editorial rhythm with spacious metrics)
        function buildLayout() {
            width = container.clientWidth;
            if (width <= 0) width = 900;

            const isMobile = width < 768;
            const fontSize = isMobile ? 13.8 : 16.0;
            const lineHeight = isMobile ? 27.5 : 33.5;
            const letterSpacing = isMobile ? 0.2 : 0.45;

            ctx.font = `400 ${fontSize}px 'Noto Sans KR', 'Inter', sans-serif`;

            particles = [];
            let currentY = fontSize + 8;
            let groupCounter = 0;

            MANIFESTO_LINES.forEach((lineSegments) => {
                let currentX = 0;
                const maxX = width - 10;

                lineSegments.forEach((segment) => {
                    const text = segment.text;
                    const isStrong = segment.isStrong;
                    const baseColor = segment.color;
                    const words = text.split(" ");

                    words.forEach((word, wIdx) => {
                        groupCounter++;
                        const wordGroupId = groupCounter;
                        const wordWithSpace = (wIdx < words.length - 1 || text.endsWith(" ")) ? word + " " : word;

                        ctx.font = isStrong ? `700 ${fontSize}px 'Noto Sans KR', 'Inter', sans-serif` : `400 ${fontSize}px 'Noto Sans KR', 'Inter', sans-serif`;
                        const wordWidth = ctx.measureText(wordWithSpace).width + (wordWithSpace.length * letterSpacing);

                        // If screen is too narrow (mobile wrap)
                        if (currentX + wordWidth > maxX && currentX > 0) {
                            currentX = 0;
                            currentY += lineHeight;
                        }

                        // Create glyph particle for each character
                        for (let i = 0; i < wordWithSpace.length; i++) {
                            const char = wordWithSpace[i];
                            const charWidth = ctx.measureText(char).width + letterSpacing;
                            const p = new GlyphParticle(char, currentX, currentY, isStrong, baseColor, wordGroupId);
                            particles.push(p);
                            currentX += charWidth;
                        }
                    });
                });

                // Next line in 10-line layout
                currentX = 0;
                currentY += lineHeight;
            });

            height = Math.ceil(currentY + 12);
            canvas.style.height = `${height}px`;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.scale(dpr, dpr);
        }

        // Animation Loop
        function animate() {
            const now = performance.now();
            ctx.clearRect(0, 0, width, height);

            const isMobile = width < 768;
            const fontSize = isMobile ? 13.8 : 16.0;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update(now, mouse.x, mouse.y, mouse.active);
                p.draw(ctx, fontSize);
            }

            requestAnimationFrame(animate);
        }

        // Mouse & Touch Tracking
        function updateMousePos(clientX, clientY) {
            const rect = canvas.getBoundingClientRect();
            mouse.x = clientX - rect.left;
            mouse.y = clientY - rect.top;
            mouse.active = true;
        }

        canvas.addEventListener("mousemove", (e) => {
            updateMousePos(e.clientX, e.clientY);
        });

        canvas.addEventListener("mouseleave", () => {
            mouse.active = false;
            mouse.x = -9999;
            mouse.y = -9999;
        });

        canvas.addEventListener("touchstart", (e) => {
            if (e.touches.length > 0) {
                updateMousePos(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        canvas.addEventListener("touchmove", (e) => {
            if (e.touches.length > 0) {
                updateMousePos(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        canvas.addEventListener("touchend", () => {
            mouse.active = false;
        });

        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                buildLayout();
            }, 150);
        });

        // Initialize Layout and Start Animation
        buildLayout();
        animate();
    }

    // ==============================================================================
    // 🚀 INITIALIZATION
    // ==============================================================================
    document.addEventListener("DOMContentLoaded", () => {
        initLensCursor();
        setupThemePalette();
        initFilterFromUrl();
        setupFilterTabs();
        setupModalListeners();
        setupCopyEmail();
        setupBackToTop();
        setupPdfPrint();
        initHashScroll();
        initManifestoPhysicsTypography();
    });

})();
