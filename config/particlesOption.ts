import type { ISourceOptions } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },

  particles: {
    number: {
      value: 120,
      density: { enable: true },
    },

    color: {
      value: "#ffffff",
    },

    shape: {
      type: "circle", // cleaner than "star" for modern UI
    },

    opacity: {
      value: { min: 0.3, max: 0.8 },
      animation: {
        enable: true,
        speed: 0.3,
      },
    },

    size: {
      value: { min: 1, max: 2 },
    },

    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      outModes: { default: "out" },
    },
  },

  detectRetina: true,
};
