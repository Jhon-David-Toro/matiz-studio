import { normalizeHex } from "@/lib/color/color.utils";

import { FONT_PAIRINGS, HARMONY_OPTIONS, PERSONALITY_CONTROLS, TYPE_RATIOS } from "./system.constants";
import type { FontPairingId, Harmony, Personality, SystemConfig } from "./system.types";
import { PERSONALITY_SEPARATOR, URL_KEYS } from "./url.constants";

/**
 * Configuration as a short query string, so a whole system fits in a link.
 *
 * @param config Configuration to share.
 * @returns The query string without `?`, e.g. `c=5b3cff&h=complementary&f=tech&r=1.25&p=45-50-35-60`.
 */
export function encodeConfig(config: SystemConfig): string {
  const personality = PERSONALITY_CONTROLS.map(({ key }) => config.personality[key]).join(PERSONALITY_SEPARATOR);
  return new URLSearchParams({
    [URL_KEYS.brand]: config.brand.slice(1),
    [URL_KEYS.harmony]: config.harmony,
    [URL_KEYS.pairing]: config.pairing,
    [URL_KEYS.ratio]: String(config.ratio),
    [URL_KEYS.personality]: personality,
  }).toString();
}

/**
 * Value of a query parameter when it is one of the allowed options.
 *
 * @param value Value read from the address.
 * @param allowed Allowed values.
 * @param fallback Value to use otherwise.
 * @returns The value or the fallback.
 */
function oneOf<T>(value: T | null, allowed: T[], fallback: T): T {
  return value !== null && allowed.includes(value) ? value : fallback;
}

/**
 * Personality read from the address: four numbers from 0 to 100.
 *
 * @param value Value read from the address, e.g. `45-50-35-60`.
 * @param fallback Personality to use when the value is not valid.
 * @returns The personality.
 */
function parsePersonality(value: string | null, fallback: Personality): Personality {
  const numbers = (value ?? "").split(PERSONALITY_SEPARATOR).map(Number);
  const valid = numbers.length === PERSONALITY_CONTROLS.length && numbers.every((number) => Number.isInteger(number) && number >= 0 && number <= 100);
  if (!valid) return fallback;
  return Object.fromEntries(PERSONALITY_CONTROLS.map(({ key }, index) => [key, numbers[index]])) as Personality;
}

/**
 * Configuration read from a query string; every missing or invalid part keeps its default.
 *
 * @param params Query parameters of the address.
 * @param fallback Configuration to complete it with.
 * @returns The configuration.
 */
export function decodeConfig(params: URLSearchParams, fallback: SystemConfig): SystemConfig {
  return {
    brand: normalizeHex(params.get(URL_KEYS.brand) ?? "") ?? fallback.brand,
    harmony: oneOf(params.get(URL_KEYS.harmony) as Harmony | null, HARMONY_OPTIONS.map((option) => option.value), fallback.harmony),
    pairing: oneOf(params.get(URL_KEYS.pairing) as FontPairingId | null, FONT_PAIRINGS.map((pairing) => pairing.id), fallback.pairing),
    ratio: oneOf(Number(params.get(URL_KEYS.ratio)), TYPE_RATIOS.map((ratio) => ratio.value), fallback.ratio),
    personality: parsePersonality(params.get(URL_KEYS.personality), fallback.personality),
  };
}
