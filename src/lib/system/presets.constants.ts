import type { Preset } from "./system.types";

export const PRESETS: Preset[] = [
  {
    id: "fintech",
    label: "Fintech",
    description: "Confiable y preciso",
    config: { brand: "#0b6bcb", harmony: "analogous", pairing: "modern", ratio: 1.2, personality: { roundness: 35, density: 30, depth: 25, vibrancy: 45 } },
  },
  {
    id: "editorial",
    label: "Editorial",
    description: "Pausado y elegante",
    config: { brand: "#8a2b2b", harmony: "split", pairing: "editorial", ratio: 1.333, personality: { roundness: 10, density: 75, depth: 5, vibrancy: 35 } },
  },
  {
    id: "playful",
    label: "Juguetón",
    description: "Cercano y con energía",
    config: { brand: "#ff5c39", harmony: "triadic", pairing: "friendly", ratio: 1.25, personality: { roundness: 95, density: 60, depth: 55, vibrancy: 95 } },
  },
  {
    id: "brutalist",
    label: "Brutalista",
    description: "Directo y sin adornos",
    config: { brand: "#1f1f1f", harmony: "complementary", pairing: "tech", ratio: 1.5, personality: { roundness: 0, density: 40, depth: 0, vibrancy: 100 } },
  },
  {
    id: "wellness",
    label: "Bienestar",
    description: "Suave y tranquilo",
    config: { brand: "#3f8f6b", harmony: "analogous", pairing: "friendly", ratio: 1.2, personality: { roundness: 70, density: 85, depth: 30, vibrancy: 40 } },
  },
];
