export {};

const root = document.querySelector<HTMLElement>("[data-sv-player]");
const audio = root?.querySelector<HTMLAudioElement>("[data-audio]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionForced =
  import.meta.env.DEV &&
  new URLSearchParams(location.search).get("motion") === "force";

const updateMotion = () => {
  if (!root) return;

  const reduced = reducedMotion.matches && !motionForced;
  root.dataset.motionMode = reduced ? "reduced" : "full";
  root.dataset.ambientPaused = document.hidden || reduced ? "true" : "false";
};

if (root) {
  document.addEventListener("visibilitychange", updateMotion);
  reducedMotion.addEventListener("change", updateMotion);
  updateMotion();
}

if (root && audio) {
  const playButton = root.querySelector<HTMLButtonElement>("[data-play]");
  const progress = root.querySelector<HTMLInputElement>("[data-progress]");
  const volume = root.querySelector<HTMLInputElement>("[data-volume]");
  const muteButton = root.querySelector<HTMLButtonElement>("[data-mute]");
  const currentOutput = root.querySelector<HTMLOutputElement>("[data-current-time]");
  const durationOutput = root.querySelector<HTMLOutputElement>("[data-duration]");
  const status = root.querySelector<HTMLElement>("[data-player-status]");
  const lyricStage = root.querySelector<HTMLElement>("[data-lyric-stage]");
  const lyricOutput = root.querySelector<HTMLElement>("[data-current-lyric]");
  const cueSource = root.querySelector<HTMLScriptElement>("[data-lyric-cues]");
  let previousVolume = Number(volume?.value ?? 0.82);

  type Cue = { text: string; startTime: number | null; endTime: number | null };
  const cues: Cue[] = cueSource?.textContent ? JSON.parse(cueSource.textContent) : [];
  const synchronizedCues = cues.filter((cue): cue is Cue & { startTime: number; endTime: number } =>
    typeof cue.startTime === "number" && typeof cue.endTime === "number",
  );

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
  };

  const setStatus = (message = "") => {
    if (status) status.textContent = message;
  };

  const updateTimeline = () => {
    if (progress) {
      progress.max = String(Number.isFinite(audio.duration) ? audio.duration : 242.424);
      progress.value = String(audio.currentTime);
    }
    if (currentOutput) currentOutput.value = formatTime(audio.currentTime);
    if (durationOutput) durationOutput.value = formatTime(audio.duration || 242.424);

    const cue = synchronizedCues.find(({ startTime, endTime }) =>
      audio.currentTime >= startTime && audio.currentTime < endTime,
    );

    if (lyricStage && lyricOutput) {
      lyricStage.hidden = !cue;
      lyricOutput.textContent = cue?.text ?? "";
    }
  };

  playButton?.addEventListener("click", async () => {
    setStatus();
    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setStatus("No fue posible iniciar el audio. Inténtalo de nuevo.");
    }
  });

  root.querySelector("[data-seek-back]")?.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
    updateTimeline();
  });

  root.querySelector("[data-seek-forward]")?.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration || 242.424, audio.currentTime + 10);
    updateTimeline();
  });

  progress?.addEventListener("input", () => {
    audio.currentTime = Number(progress.value);
    updateTimeline();
  });

  volume?.addEventListener("input", () => {
    audio.volume = Number(volume.value);
    audio.muted = audio.volume === 0;
    if (audio.volume > 0) previousVolume = audio.volume;
    muteButton?.setAttribute("aria-label", audio.muted ? "Activar sonido" : "Silenciar");
  });

  muteButton?.addEventListener("click", () => {
    if (audio.muted || audio.volume === 0) {
      audio.muted = false;
      audio.volume = previousVolume || 0.82;
    } else {
      previousVolume = audio.volume;
      audio.muted = true;
    }
    if (volume) volume.value = String(audio.muted ? 0 : audio.volume);
    muteButton.setAttribute("aria-label", audio.muted ? "Activar sonido" : "Silenciar");
  });

  audio.addEventListener("loadedmetadata", updateTimeline);
  audio.addEventListener("timeupdate", updateTimeline);
  audio.addEventListener("play", () => {
    root.dataset.engaged = "true";
    root.dataset.audioState = "playing";
    playButton?.setAttribute("aria-label", "Pausar Siempre vuelves");
  });
  audio.addEventListener("pause", () => {
    if (!audio.ended) root.dataset.audioState = "paused";
    playButton?.setAttribute("aria-label", "Reproducir Siempre vuelves");
  });
  audio.addEventListener("ended", () => {
    root.dataset.audioState = "ended";
    root.dataset.engaged = "false";
    playButton?.setAttribute("aria-label", "Volver a reproducir Siempre vuelves");
    updateTimeline();
  });
  audio.addEventListener("error", () => setStatus("El archivo de audio local no pudo cargarse."));

  audio.volume = Number(volume?.value ?? 0.82);
  updateTimeline();
}
