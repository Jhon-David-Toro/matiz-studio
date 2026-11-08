import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { randomConfig } from "@/lib/system/random.utils";
import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { decodeConfig } from "@/lib/system/url.utils";

import type { SystemConfigState } from "../Editor.types";
import { patchConfig, syncAddress, withTrait } from "../Editor.utils";

/**
 * Configuration of the generator. It starts from the address (a shared link opens the same system) and is written
 * back to it on every change.
 *
 * @returns The configuration and the functions that change it.
 */
export function useSystemConfig(): SystemConfigState {
  const params = useSearchParams();
  const [config, setConfig] = useState(() => decodeConfig(new URLSearchParams(params.toString()), DEFAULT_CONFIG));

  useEffect(() => syncAddress(config), [config]);

  return {
    config,
    update: (patch) => setConfig((current) => patchConfig(current, patch)),
    setTrait: (key, value) => setConfig((current) => withTrait(current, key, value)),
    remix: () => setConfig(randomConfig()),
  };
}
