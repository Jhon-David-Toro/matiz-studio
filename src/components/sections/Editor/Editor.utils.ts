import { replaceQuery } from "@/lib/shared/browser";
import type { PersonalityKey, SystemConfig } from "@/lib/system/system.types";
import { encodeConfig } from "@/lib/system/url.utils";

/**
 * Applies a partial change to the configuration.
 *
 * @param config Current configuration.
 * @param patch Parts to replace.
 * @returns The new configuration.
 */
export function patchConfig(config: SystemConfig, patch: Partial<SystemConfig>): SystemConfig {
  return { ...config, ...patch };
}

/**
 * Changes one trait of the personality.
 *
 * @param config Current configuration.
 * @param key Trait to change.
 * @param value New value, from 0 to 100.
 * @returns The new configuration.
 */
export function withTrait(config: SystemConfig, key: PersonalityKey, value: number): SystemConfig {
  return { ...config, personality: { ...config.personality, [key]: value } };
}

/**
 * Writes the configuration in the address, so reloading or sharing keeps the system.
 *
 * @param config Configuration to save.
 */
export function syncAddress(config: SystemConfig): void {
  replaceQuery(encodeConfig(config));
}

/**
 * Message after trying to copy a color.
 *
 * @param copied Whether the browser copied it.
 * @param value What was copied.
 * @param messages Texts for success and failure.
 * @param messages.success Prefix shown when it worked.
 * @param messages.failure Text shown when it failed.
 * @returns The message for the snackbar.
 */
export function copyMessage(copied: boolean, value: string, messages: { success: string; failure: string }): string {
  return copied ? `${messages.success} ${value}` : messages.failure;
}
