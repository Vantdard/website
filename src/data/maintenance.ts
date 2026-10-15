export const maintenance = {
  enabled: import.meta.env.PUBLIC_MAINTENANCE !== "false",
  title: "Algo está tomando forma.",
  message:
    "NODAM está construyendo un nuevo espacio para su música y sus universos visuales. Volveremos pronto.",
} as const;
