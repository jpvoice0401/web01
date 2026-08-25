/**
 * ==============================================================================
 * 🎐 Jihyun Park Portfolio — Crystal Chime & Water Ping Sound Engine v2
 * Dual-Mode Web Audio Synthesizer (Zero Latency, Pure Procedural Acoustics)
 * 1. Wind Chime & Kalimba (Pentatonic Series: C5 ~ G6)
 * 2. Soft Water Drop & Ambient Ping (Resonant Liquid Pitch-Bend)
 * ==============================================================================
 */

(function () {
    "use strict";

    let audioCtx = null;
    let masterGain = null;
    let isMuted = false;
    let lastPlayTime = 0;
    let noteIndex = 0;
    let isWaterNext = false;

    // 🎵 Pentatonic Scale Array (Hz: C5, D5, E5, G5, A5, C6, D6, E6, G6, A6)
    const PENTATONIC_SCALE = [
        523.25, // C5
        587.33, // D5
        659.25, // E5
        783.99, // G5
        880.00, // A5
        1046.50,// C6
        1174.66,// D6
        1318.51,// E6
        1567.98,// G6
        1760.00 // A6
    ];

    function initAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                audioCtx = new AudioContextClass();
                masterGain = audioCtx.createGain();
                masterGain.gain.setValueAtTime(0.22, audioCtx.currentTime); // Crystal clear & comfortable volume
                masterGain.connect(audioCtx.destination);
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    /**
     * 🎐 1. Play Wind Chime & Kalimba Sound
     */
    function playWindChime(freq, now) {
        if (!audioCtx || !masterGain || isMuted) return;

        // Primary Pure Tone
        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.003, now + 0.38);

        // Envelope: Fast acoustic attack, lingering crystal decay
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.85, now + 0.003);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

        // Secondary Glass Harmonics
        const harmonicOsc = audioCtx.createOscillator();
        const harmonicGain = audioCtx.createGain();
        harmonicOsc.type = "triangle";
        harmonicOsc.frequency.setValueAtTime(freq * 2.756, now);
        harmonicGain.gain.setValueAtTime(0, now);
        harmonicGain.gain.linearRampToValueAtTime(0.28, now + 0.002);
        harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

        osc.connect(noteGain);
        noteGain.connect(masterGain);
        harmonicOsc.connect(harmonicGain);
        harmonicGain.connect(masterGain);

        osc.start(now);
        harmonicOsc.start(now);
        osc.stop(now + 0.48);
        harmonicOsc.stop(now + 0.25);
    }

    /**
     * 💧 2. Play Soft Water Drop & Ambient Ping
     */
    function playWaterPing(baseFreq, now) {
        if (!audioCtx || !masterGain || isMuted) return;

        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        osc.type = "sine";

        // Characteristic water drop upward frequency sweep
        const startFreq = baseFreq * 0.72;
        const peakFreq = baseFreq * 1.55;
        const settleFreq = baseFreq * 1.18;

        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.exponentialRampToValueAtTime(peakFreq, now + 0.042);
        osc.frequency.exponentialRampToValueAtTime(settleFreq, now + 0.35);

        // Liquid Envelope
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.95, now + 0.008);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.45);
    }

    /**
     * ⚡ Public Sound Trigger (Alternating Wind Chime & Water Ping)
     */
    window.playInteractiveParticleSound = function () {
        if (isMuted) return;

        const ctx = initAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const perfNow = performance.now();

        // 18ms intelligent cooldown for smooth arpeggios
        if (perfNow - lastPlayTime < 18) return;
        lastPlayTime = perfNow;

        const freq = PENTATONIC_SCALE[noteIndex % PENTATONIC_SCALE.length];
        noteIndex = (noteIndex + 1) % PENTATONIC_SCALE.length;

        if (isWaterNext) {
            playWaterPing(freq * 1.05, now);
        } else {
            playWindChime(freq, now);
        }

        isWaterNext = !isWaterNext;
    };

    // Public toggle function
    window.togglePortfolioSound = function () {
        initAudioContext();
        isMuted = !isMuted;
        updateSoundUI();
        if (!isMuted) {
            window.playInteractiveParticleSound();
        }
    };

    // Floating Sound Toggle UI
    function createSoundToggleUI() {
        if (document.getElementById("soundToggleBtn")) return;

        const btn = document.createElement("button");
        btn.id = "soundToggleBtn";
        btn.className = "portfolio-sound-toggle-btn";
        btn.setAttribute("aria-label", "Toggle Sound");
        btn.innerHTML = `<span class="sound-icon">🎐</span><span class="sound-label">SOUND ON</span>`;
        btn.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            background: #121212;
            color: #E5FF00;
            border: 1px solid rgba(229, 255, 0, 0.4);
            border-radius: 20px;
            padding: 8px 16px;
            font-family: 'JetBrains Mono', monospace, sans-serif;
            font-size: 0.76rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
            transition: all 0.2s ease;
            user-select: none;
        `;

        btn.addEventListener("mouseenter", () => {
            btn.style.background = "#E5FF00";
            btn.style.color = "#000000";
            btn.style.borderColor = "#E5FF00";
        });

        btn.addEventListener("mouseleave", () => {
            if (!isMuted) {
                btn.style.background = "#121212";
                btn.style.color = "#E5FF00";
                btn.style.borderColor = "rgba(229, 255, 0, 0.4)";
            } else {
                btn.style.background = "#121212";
                btn.style.color = "#777777";
                btn.style.borderColor = "#333333";
            }
        });

        btn.addEventListener("click", () => {
            window.togglePortfolioSound();
        });

        document.body.appendChild(btn);
    }

    function updateSoundUI() {
        const btn = document.getElementById("soundToggleBtn");
        if (!btn) return;
        if (isMuted) {
            btn.innerHTML = `<span class="sound-icon">🔇</span><span class="sound-label">MUTE</span>`;
            btn.style.color = "#777777";
            btn.style.borderColor = "#333333";
        } else {
            btn.innerHTML = `<span class="sound-icon">🎐</span><span class="sound-label">SOUND ON</span>`;
            btn.style.color = "#E5FF00";
            btn.style.borderColor = "rgba(229, 255, 0, 0.4)";
        }
    }

    // Auto-unlock AudioContext on any user action
    const unlockAudio = () => {
        initAudioContext();
    };

    window.addEventListener("click", unlockAudio, { passive: true });
    window.addEventListener("touchstart", unlockAudio, { passive: true });
    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });
    window.addEventListener("scroll", unlockAudio, { passive: true, once: true });

    document.addEventListener("DOMContentLoaded", () => {
        createSoundToggleUI();
    });

    if (document.readyState === "complete" || document.readyState === "interactive") {
        createSoundToggleUI();
    }

})();

