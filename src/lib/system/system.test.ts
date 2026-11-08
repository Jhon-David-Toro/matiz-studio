import { describe, expect, it } from "vitest";

import { contrastRatio } from "@/lib/color/contrast.utils";

import { checkContrast, contrastScore } from "./accessibility.utils";
import { exportSystem } from "./export.utils";
import { mix, radiusScale, shadowScale, spacingScale } from "./personality.utils";
import { PRESETS } from "./presets.constants";
import { randomConfig } from "./random.utils";
import { anchorBrand, buildPalettes, buildScale } from "./scale.utils";
import { DEFAULT_CONFIG } from "./system.constants";
import { generateSystem } from "./system.utils";
import { themeStyle } from "./tokens.utils";
import { lineHeightFor, typeScale } from "./typography.utils";
import { decodeConfig, encodeConfig } from "./url.utils";

/**
 * Seeded random numbers, so tests are repeatable.
 *
 * @param seed Starting value.
 * @returns A function that returns numbers from 0 to 1.
 */
function seeded(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return state / 2147483647;
  };
}

describe("scales", () => {
  it("goes from light to dark in eleven steps", () => {
    const scale = buildScale(264, 0.2);
    expect(scale).toHaveLength(11);
    const lightness = scale.map((swatch) => swatch.oklch.l);
    expect([...lightness].sort((a, b) => b - a)).toEqual(lightness);
  });

  it("keeps the exact brand color in the primary scale", () => {
    const anchored = anchorBrand(buildScale(264, 0.2), "#5b3cff");
    expect(anchored.filter((swatch) => swatch.anchor)).toEqual([expect.objectContaining({ hex: "#5b3cff" })]);
  });

  it("builds the seven palettes", () => {
    expect(buildPalettes(DEFAULT_CONFIG).map((palette) => palette.name)).toEqual(["primary", "accent", "neutral", "success", "warning", "danger", "info"]);
  });
});

describe("personality", () => {
  it("maps sliders to radii, spacing and shadows", () => {
    expect(mix([0, 10], 50)).toBe(5);
    expect(radiusScale(0).map((radius) => radius.value)).toEqual([0, 0, 0, 0, 9999]);
    expect(spacingScale(100)[0]).toEqual({ name: "1", value: 5 });
    expect(shadowScale(0, "#000000")[0].value).toBe("none");
    expect(shadowScale(100, "#000000")[1].value).toBe("0 4px 12px rgb(0 0 0 / 0.20)");
  });

  it("builds a modular type scale on a 4px grid", () => {
    const scale = typeScale(1.25);
    expect(scale.find((style) => style.name === "base")).toMatchObject({ size: 16, lineHeight: 24, role: "body" });
    expect(scale.find((style) => style.name === "xl")).toMatchObject({ size: 25, role: "heading" });
    expect(lineHeightFor(40)).toBe(48);
  });
});

describe("accessibility by construction", () => {
  const configs = [DEFAULT_CONFIG, ...PRESETS.map((preset) => preset.config), ...Array.from({ length: 30 }, (_, index) => randomConfig(seeded(index + 1)))];

  it.each(configs.map((config) => [config.brand, config] as const))("passes every text pair in both themes for %s", (_, config) => {
    const system = generateSystem(config);
    for (const mode of ["light", "dark"] as const) {
      const score = contrastScore(checkContrast(system.themes[mode]));
      expect(score.passed).toBe(score.total);
    }
  });

  it("uses the exact brand color as primary when it is accessible", () => {
    expect(generateSystem(DEFAULT_CONFIG).themes.light.primary).toMatchObject({ hex: "#5b3cff", ref: expect.stringMatching(/^primary-/) });
    expect(generateSystem(DEFAULT_CONFIG).themes.light["on-primary"].hex).toBe("#ffffff");
  });

  it("puts readable text on the primary button", () => {
    const { light } = generateSystem({ ...DEFAULT_CONFIG, brand: "#ffd400" }).themes;
    expect(contrastRatio(light["on-primary"].hex, light.primary.hex)).toBeGreaterThanOrEqual(4.5);
  });
});

describe("exports", () => {
  const system = generateSystem(DEFAULT_CONFIG);

  it("writes CSS with a dark theme that points at the palette", () => {
    const css = exportSystem(system, "css");
    expect(css).toContain("--color-primary-500:");
    expect(css).toContain('[data-theme="dark"]');
    expect(css).toMatch(/--color-primary: var\(--color-primary-\d+\);/);
  });

  it("writes SCSS variables", () => {
    expect(exportSystem(system, "scss")).toMatch(/\$light-primary: \$color-primary-\d+;/);
  });

  it("writes W3C design tokens with aliases", () => {
    const json = JSON.parse(exportSystem(system, "json"));
    expect(json.color.primary["500"]).toEqual({ $type: "color", $value: expect.stringMatching(/^#/) });
    expect(json.theme.light.primary.$value).toMatch(/^\{color\.primary\.\d+\}$/);
    expect(json.shadow.md.$type).toBe("shadow");
  });

  it("writes a typed TypeScript object", () => {
    const ts = exportSystem(system, "ts");
    expect(ts).toContain("export const tokens = {");
    expect(ts).toContain("as const;");
    expect(ts).toContain(`"primary": "${system.themes.light.primary.hex}"`);
  });

  it("gives the preview every token as a custom property", () => {
    expect(themeStyle(system, "dark")["--color-background"]).toBe(system.themes.dark.background.hex);
  });
});

describe("share links", () => {
  it("round-trips a configuration", () => {
    const config = PRESETS[2].config;
    expect(decodeConfig(new URLSearchParams(encodeConfig(config)), DEFAULT_CONFIG)).toEqual(config);
  });

  it("keeps the defaults for missing or broken values", () => {
    const params = new URLSearchParams("c=zzz&h=nope&f=tech&r=7&p=1-2-3");
    expect(decodeConfig(params, DEFAULT_CONFIG)).toEqual(DEFAULT_CONFIG);
  });
});
