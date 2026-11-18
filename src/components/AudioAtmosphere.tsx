import { useEffect, useRef } from 'react';

interface AudioAtmosphereProps {
  active: boolean;
}

export const AudioAtmosphere: React.FC<AudioAtmosphereProps> = ({ active }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;

    if (active) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Master gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2.5); // Soft, non-intrusive ambient bed
        gainNodeRef.current = masterGain;

        // Lowpass filter for warm cinematic analog tone
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(420, ctx.currentTime);
        filter.Q.setValueAtTime(1.5, ctx.currentTime);

        masterGain.connect(filter);
        filter.connect(ctx.destination);

        // Lush synth pad chords: D minor / F / A / C (atmospheric twilight)
        const frequencies = [73.42, 110.00, 146.83, 220.00, 261.63]; // D2, A2, D3, A3, C4
        const oscs: OscillatorNode[] = [];

        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle detune for analog warmth
          osc.detune.setValueAtTime((idx - 2) * 5, ctx.currentTime);

          const oscGain = ctx.createGain();
          oscGain.gain.setValueAtTime(0.25 / frequencies.length, ctx.currentTime);

          osc.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start();
          oscs.push(osc);
        });

        oscNodesRef.current = oscs;
      } catch (e) {
        console.warn('Web Audio initialized passively:', e);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        const currentOscs = [...oscNodesRef.current];
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.0);
        
        fadeTimeout = setTimeout(() => {
          currentOscs.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // ignore
            }
          });
        }, 1100);
        oscNodesRef.current = [];
      }
    }

    return () => {
      if (fadeTimeout) clearTimeout(fadeTimeout);
      oscNodesRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      oscNodesRef.current = [];
    };
  }, [active]);

  return null;
};
