/**
 * ==============================================================================
 * 🌿 Jihyun Park Portfolio — Multi-Acoustic Ambient Sound Studio
 * 4 High-End Gentle Procedural Soundscapes (Switchable via Floating Button)
 * 1. 🪵 MARIMBA : Warm Wooden Marimba & Felt Mallet Tap
 * 2. 💧 WATER   : Soft Deep Water Drop & Spring Dew
 * 3. 🎹 PIANO   : Lo-Fi Felt Piano Gentle Tone
 * 4. 🌬️ BREEZE  : Airy Ambient Wind & Ethereal Pad
 * 5. 🔇 MUTE    : Muted (Quiet Mode)
 * ==============================================================================
 */

(function () {
    "use strict";

    let audioCtx = null;
    let masterGain = null;
    let lastPlayTime = 0;
    let noteIndex = 0;

    const SOUND_MODES = [
        { id: "marimba", icon: "🪵", name: "MARIMBA", label: "🪵 MARIMBA" },
        { id: "water", icon: "💧", name: "WATER DROP", label: "💧 WATER DROP" },
        { id: "piano", icon: "🎹", name: "FELT PIANO", label: "🎹 FELT PIANO" },
        { id: "breeze", icon: "🌬️", name: "AIRY BREEZE", label: "🌬️ AIRY BREEZE" },
        { id: "mute", icon: "🔇", name: "MUTE", label: "🔇 MUTE" }
    ];

    let currentModeIndex = 0; // Starts with Warm Marimba

    // 🎵 Warm Pentatonic Scale (Mid-Low Frequency: C4 ~ A5, 261Hz ~ 880Hz)
    const WARM_SCALE = [
        261.63, // C4 (Middle C)
        293.66, // D4
        329.63, // E4
        392.00, // G4
        440.00, // A4
        523.25, // C5
        587.33, // D5
        659.25, // E5
        783.99  // G5
    ];

    function initAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                audioCtx = new AudioContextClass();
                masterGain = audioCtx.createGain();
                masterGain.gain.setValueAtTime(0.18, audioCtx.currentTime); // Gentle and soothing volume
                masterGain.connect(audioCtx.destination);
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    /**
     * 🪵 1. Warm Ambient Marimba & Felt Tap
     */
    function playMarimbaSound(freq, now) {
        if (!audioCtx || !masterGain) return;

        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        // Warm Lowpass filter to eliminate harshness
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(850, now);
        filter.Q.setValueAtTime(1.2, now);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        // Soft wooden mallet envelope
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.75, now + 0.004);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

        // Overtone for rich wood resonance
        const harmonicOsc = audioCtx.createOscillator();
        const harmonicGain = audioCtx.createGain();
        harmonicOsc.type = "sine";
        harmonicOsc.frequency.setValueAtTime(freq * 3.0, now);
        harmonicGain.gain.setValueAtTime(0, now);
        harmonicGain.gain.linearRampToValueAtTime(0.12, now + 0.002);
        harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

        osc.connect(filter);
        harmonicOsc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now);
        harmonicOsc.start(now);
        osc.stop(now + 0.32);
        harmonicOsc.stop(now + 0.10);
    }

    /**
     * 💧 2. Soft Deep Water Drop
     */
    function playWaterDropSound(baseFreq, now) {
        if (!audioCtx || !masterGain) return;

        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(750, now);

        osc.type = "sine";

        // Gentle liquid pitch bend
        const startFreq = baseFreq * 0.70;
        const peakFreq = baseFreq * 1.30;
        const endFreq = baseFreq * 0.95;

        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.exponentialRampToValueAtTime(peakFreq, now + 0.05);
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.32);

        // Soft drop envelope
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.85, now + 0.015);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.36);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.40);
    }

    /**
     * 🎹 3. Lo-Fi Felt Piano Note
     */
    function playFeltPianoSound(freq, now) {
        if (!audioCtx || !masterGain) return;

        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        // Felt dampening filter
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(620, now);
        filter.frequency.exponentialRampToValueAtTime(320, now + 0.5);

        osc1.type = "triangle";
        osc1.frequency.setValueAtTime(freq, now);

        osc2.type = "sine";
        osc2.frequency.setValueAtTime(freq * 0.5, now); // Sub-bass body

        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.65, now + 0.012);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.70);
        osc2.stop(now + 0.70);
    }

    /**
     * 🌬️ 4. Airy Ambient Breeze
     */
    function playAiryBreezeSound(freq, now) {
        if (!audioCtx || !masterGain) return;

        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        filter.type = "bandpass";
        filter.frequency.setValueAtTime(freq * 0.85, now);
        filter.Q.setValueAtTime(2.5, now);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq * 0.8, now);
        osc.frequency.linearRampToValueAtTime(freq * 1.05, now + 0.45);

        // Slow ethereal swell (No hard attack)
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.55, now + 0.08);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.60);
    }

    /**
     * ⚡ Public Sound Trigger
     */
    window.playInteractiveParticleSound = function () {
        const mode = SOUND_MODES[currentModeIndex];
        if (mode.id === "mute") return;

        const ctx = initAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const perfNow = performance.now();

        // 60ms calm cooldown to prevent clutter
        if (perfNow - lastPlayTime < 60) return;
        lastPlayTime = perfNow;

        const freq = WARM_SCALE[noteIndex % WARM_SCALE.length];
        noteIndex = (noteIndex + 1) % WARM_SCALE.length;

        switch (mode.id) {
            case "marimba":
                playMarimbaSound(freq, now);
                break;
            case "water":
                playWaterDropSound(freq, now);
                break;
            case "piano":
                playFeltPianoSound(freq, now);
                break;
            case "breeze":
                playAiryBreezeSound(freq, now);
                break;
        }
    };

    /**
     * 🔄 Cycle to Next Sound Mode on Button Click
     */
    window.cycleSoundMode = function () {
        initAudioContext();
        currentModeIndex = (currentModeIndex + 1) % SOUND_MODES.length;
        updateSoundUI();

        // Play instant preview note of the newly selected mode
        const mode = SOUND_MODES[currentModeIndex];
        if (mode.id !== "mute") {
            const ctx = initAudioContext();
            if (ctx) {
                const now = ctx.currentTime;
                const previewFreq = 440.0; // A4 warm preview
                if (mode.id === "marimba") playMarimbaSound(previewFreq, now);
                else if (mode.id === "water") playWaterDropSound(previewFreq, now);
                else if (mode.id === "piano") playFeltPianoSound(previewFreq, now);
                else if (mode.id === "breeze") playAiryBreezeSound(previewFreq, now);
            }
        }
    };

    // Floating Sound Toggle UI
    function createSoundToggleUI() {
        if (document.getElementById("soundToggleBtn")) return;

        const btn = document.createElement("button");
        btn.id = "soundToggleBtn";
        btn.className = "portfolio-sound-toggle-btn";
        btn.setAttribute("aria-label", "Change Sound Mode");
        btn.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            background: #111111;
            color: #CEFF00;
            border: 1px solid rgba(206, 255, 0, 0.45);
            border-radius: 24px;
            padding: 8px 18px;
            font-family: 'JetBrains Mono', monospace, sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.65);
            transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
            user-select: none;
            backdrop-filter: blur(10px);
        `;

        btn.addEventListener("mouseenter", () => {
            const mode = SOUND_MODES[currentModeIndex];
            if (mode.id !== "mute") {
                btn.style.background = "#CEFF00";
                btn.style.color = "#000000";
                btn.style.borderColor = "#CEFF00";
                btn.style.transform = "translateY(-2px) scale(1.03)";
            }
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "none";
            updateSoundUI();
        });

        btn.addEventListener("click", () => {
            window.cycleSoundMode();
        });

        document.body.appendChild(btn);
        updateSoundUI();
    }

    function updateSoundUI() {
        const btn = document.getElementById("soundToggleBtn");
        if (!btn) return;
        const mode = SOUND_MODES[currentModeIndex];

        if (mode.id === "mute") {
            btn.innerHTML = `<span class="sound-icon">🔇</span><span class="sound-label">SOUND OFF (MUTE)</span>`;
            btn.style.background = "#111111";
            btn.style.color = "#666666";
            btn.style.borderColor = "#282828";
        } else {
            btn.innerHTML = `<span class="sound-icon">${mode.icon}</span><span class="sound-label">${mode.label}</span>`;
            btn.style.background = "#111111";
            btn.style.color = "#CEFF00";
            btn.style.borderColor = "rgba(206, 255, 0, 0.45)";
        }
    }

    // Auto-unlock AudioContext on user gestures
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
