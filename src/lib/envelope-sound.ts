/** Soft paper rustle — synthesized, no audio file needed */
export function playEnvelopeOpenSound() {
  if (typeof window === "undefined") return;

  const AudioCtx = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return;

  const ctx = new AudioCtx();

  const playNoise = (startOffset: number, duration: number, volume: number, frequency: number) => {
    const sampleCount = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate);
    const samples = buffer.getChannelData(0);

    for (let i = 0; i < sampleCount; i++) {
      const fade = 1 - i / sampleCount;
      samples[i] = (Math.random() * 2 - 1) * fade * fade;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = frequency;
    filter.Q.value = 0.85;

    const gain = ctx.createGain();
    const start = ctx.currentTime + startOffset;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(start);
    source.stop(start + duration + 0.05);
  };

  void ctx.resume().then(() => {
    playNoise(0, 0.28, 0.07, 720);
    playNoise(0.06, 0.22, 0.045, 1100);
    playNoise(0.14, 0.18, 0.025, 480);

    window.setTimeout(() => {
      void ctx.close();
    }, 700);
  });
}
