/**
 * ==============================================================================
 * 🎐 Jihyun Park Portfolio — Crystal Chime & Water Ping Sound Engine
 * Dual-Mode Web Audio Synthesizer (Zero Latency, Pure Procedural Acoustics)
 * 1. Wind Chime & Kalimba (Pentatonic Series: C5 ~ G6)
 * 2. Soft Water Drop & Ambient Ping (Resonant Pitch-Bend & Reverb)
 * ==============================================================================
 */

(function () {
    "use strict";

    let audioCtx = null;
    let masterGain = null;
    let soundToggle = true; // Enabled by default
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

    function getAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                audioCtx = new AudioContextClass();
                masterGain = audioCtx.createGain();
                masterGain.gain.setValueAtTime(0.065, audioCtx.currentTime); // Soft, elegant, non-intrusive volume
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
        if (!audioCtx || !masterGain) return;

        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();

        // Sine wave with soft harmonic shimmer
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        // Subtle bell-like detune glide
        osc.frequency.exponentialRampToValueAtTime(freq * 1.002, now + 0.35);

        // Envelope: Fast attack, crystal decay
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.7, now + 0.004); // Crisp attack
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42); // Resonant chime tail

        // Secondary Overtone (Chime harmonic)
        const harmonicOsc = audioCtx.createOscillator();
        const harmonicGain = audioCtx.createGain();
        harmonicOsc.type = "sine";
        harmonicOsc.frequency.setValueAtTime(freq * 2.76, now); // Metallic glass ratio
        harmonicGain.gain.setValueAtTime(0, now);
        harmonicGain.gain.linearRampToValueAtTime(0.18, now + 0.003);
        harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

        osc.connect(noteGain);
        noteGain.connect(masterGain);
        harmonicOsc.connect(harmonicGain);
        harmonicGain.connect(masterGain);

        osc.start(now);
        harmonicOsc.start(now);
        osc.stop(now + 0.45);
        harmonicOsc.stop(now + 0.20);
    }

    /**
     * 💧 2. Play Soft Water Drop & Ambient Ping
     */
    function playWaterPing(baseFreq, now) {
        if (!audioCtx || !masterGain) return;

        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();

        osc.type = "sine";
        // Characteristic water drop upward frequency sweep
        const startFreq = baseFreq * 0.75;
        const peakFreq = baseFreq * 1.45;
        const settleFreq = baseFreq * 1.15;

        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.exponentialRampToValueAtTime(peakFreq, now + 0.045);
        osc.frequency.exponentialRampToValueAtTime(settleFreq, now + 0.32);

        // Water envelope: soft pop & liquid reverberation
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.85, now + 0.012);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.40);
    }

    /**
     * ⚡ Public Sound Trigger (Alternating Wind Chime & Water Ping)
     */
    window.playInteractiveParticleSound = function (speedFactor = 1.0) {
        if (!soundToggle) return;

        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        // Minimum cooldown between notes to prevent audio stutter (28ms)
        if (performance.now() - lastPlayTime < 28) return;
        lastPlayTime = performance.now();

        // Select scale note
        const freq = PENTATONIC_SCALE[noteIndex % PENTATONIC_SCALE.length];
        noteIndex = (noteIndex + 1) % PENTATONIC_SCALE.length;

        // Alternate between Wind Chime & Water Ping
        if (isWaterNext) {
            playWaterPing(freq * 1.1, now);
        } else {
            playWindChime(freq, now);
        }

        isWaterNext = !isWaterNext;
    };

    // Auto-unlock AudioContext on first user interaction
    const unlockAudio = () => {
        getAudioContext();
        window.removeEventListener("pointerdown", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
        window.removeEventListener("mousemove", unlockAudio);
    };

    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });
    window.addEventListener("mousemove", unlockAudio, { passive: true, once: true });

})();
