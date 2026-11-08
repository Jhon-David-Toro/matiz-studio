import { oklchToHex } from "@/lib/color/color.utils";

import { FONT_PAIRINGS, HARMONY_OPTIONS, PERSONALITY_CONTROLS, TYPE_RATIOS } from "./system.constants";
import type { Personality, SystemConfig } from "./system.types";

/**
 * Random item of a list.
 *
 * @param items List to pick from.
 * @param random Source of random numbers from 0 to 1.
 * @returns One of the items.
 */
export function pick<T>(items: T[], random: () => number): T {
  return items[Math.floor(random() * items.length)];
}

/**
 * Random number in a range.
 *
 * @param min Lowest value.
 * @param max Highest value.
 * @param random Source of random numbers from 0 to 1.
 * @returns A number between `min` and `max`.
 */
function between(min: number, max: number, random: () => number): number {
  return min + (max - min) * random();
}

/**
 * Random brand color that always works as a brand: mid lightness and clear chroma, any hue.
 *
 * @param random Source of random numbers from 0 to 1.
 * @returns The color as `#rrggbb`.
 */
export function randomBrand(random: () => number): string {
  return oklchToHex({ l: between(0.5, 0.68, random), c: between(0.12, 0.22, random), h: between(0, 360, random) });
}

/**
 * Random configuration for the Remix button.
 *
 * @param random Source of random numbers from 0 to 1; `Math.random` by default.
 * @returns A configuration with every part picked at random.
 */
export function randomConfig(random: () => number = Math.random): SystemConfig {
  const personality = Object.fromEntries(PERSONALITY_CONTROLS.map(({ key }) => [key, Math.round(random() * 100)])) as Personality;
  return {
    brand: randomBrand(random),
    harmony: pick(HARMONY_OPTIONS, random).value,
    pairing: pick(FONT_PAIRINGS, random).id,
    ratio: pick(TYPE_RATIOS, random).value,
    personality,
  };
}
