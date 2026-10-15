export {};

const root = document.querySelector<HTMLElement>("[data-lunar-prototype]");

if (root) {
  const moon = root.querySelector<HTMLElement>(".moon");
  const target = root.querySelector<HTMLElement>(".logo-lockup__moon-target");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const forceMotion =
    ["localhost", "127.0.0.1"].includes(window.location.hostname) &&
    new URLSearchParams(window.location.search).get("motion") === "force";
  let frame = 0;

  const clamp = (value: number) => Math.min(1, Math.max(0, value));
  const smoothstep = (start: number, end: number, value: number) => {
    const position = clamp((value - start) / (end - start));
    return position * position * (3 - 2 * position);
  };
  const mix = (from: number, to: number, amount: number) => from + (to - from) * amount;

  const applyProgress = (progress: number) => {
    if (!moon || !target) return;

    const targetRect = target.getBoundingClientRect();
    const move = smoothstep(0.06, 0.74, progress);
    const phase = smoothstep(0.1, 0.72, progress);
    const logo = smoothstep(0.5, 0.82, progress);
    const referenceReveal = smoothstep(0.88, 1, progress);
    const startSize = Math.min(window.innerWidth * (window.innerWidth < 640 ? 0.76 : 0.48), window.innerHeight * 0.68, 640);
    const targetSize = targetRect.width;
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    root.style.setProperty("--lunar-progress", progress.toFixed(4));
    root.style.setProperty("--moon-x", `${mix(window.innerWidth / 2, targetX, move).toFixed(2)}px`);
    root.style.setProperty("--moon-y", `${mix(window.innerHeight / 2, targetY, move).toFixed(2)}px`);
    root.style.setProperty("--moon-size", `${mix(startSize, targetSize, move).toFixed(2)}px`);
    root.style.setProperty("--moon-shadow-x", `${mix(-110, -18, phase).toFixed(2)}%`);
    root.style.setProperty("--logo-opacity", logo.toFixed(4));
    root.style.setProperty("--cover-opacity", (logo * (1 - referenceReveal)).toFixed(4));
    root.style.setProperty("--moon-opacity", (1 - referenceReveal).toFixed(4));
    root.style.setProperty("--atmosphere-opacity", mix(0.28, 0.08, progress).toFixed(4));
  };

  const updateProgress = () => {
    frame = 0;
    const shouldReduce = reducedMotion.matches && !forceMotion;
    root.dataset.motionMode = shouldReduce ? "reduced" : "full";

    if (shouldReduce) {
      applyProgress(1);
      return;
    }

    const bounds = root.getBoundingClientRect();
    const travel = Math.max(1, bounds.height - window.innerHeight);
    applyProgress(clamp(-bounds.top / travel));
  };

  const requestUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(updateProgress);
  };

  updateProgress();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  reducedMotion.addEventListener("change", requestUpdate);
}
