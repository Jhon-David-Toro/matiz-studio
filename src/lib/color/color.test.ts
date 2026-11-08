import { describe, expect, it } from "vitest";

import { contrastRatio, readableOn, wcagLevel } from "./contrast.utils";
import { clampToGamut, formatOklch, hexToOklch, isInGamut, normalizeHex, oklchToHex, oklchToRgb, rgbToHex } from "./color.utils";

describe("hex", () => {
  it("normalizes short, long and unprefixed colors", () => {
    expect(normalizeHex("#ABC")).toBe("#aabbcc");
    expect(normalizeHex("5b3cff")).toBe("#5b3cff");
    expect(normalizeHex("blue")).toBeUndefined();
  });

  it("clamps channels when writing hex", () => {
    expect(rgbToHex([1.2, -0.1, 0.5])).toBe("#ff0080");
  });
});

describe("oklch", () => {
  it("round-trips colors through OKLCH", () => {
    for (const hex of ["#5b3cff", "#18794e", "#ffffff", "#000000", "#c4320a"]) {
      expect(oklchToHex(hexToOklch(hex))).toBe(hex);
    }
  });

  it("knows the lightness of white and black", () => {
    expect(hexToOklch("#ffffff").l).toBeCloseTo(1, 3);
    expect(hexToOklch("#000000").l).toBeCloseTo(0, 3);
  });

  it("fits colors out of gamut by lowering only the chroma", () => {
    const wild = { l: 0.7, c: 0.4, h: 150 };
    expect(isInGamut(oklchToRgb(wild))).toBe(false);
    const fitted = clampToGamut(wild);
    expect(isInGamut(oklchToRgb(fitted))).toBe(true);
    expect(fitted).toMatchObject({ l: 0.7, h: 150 });
    expect(fitted.c).toBeLessThan(0.4);
  });

  it("writes the CSS notation", () => {
    expect(formatOklch({ l: 0.624, c: 0.1834, h: 264.2 })).toBe("oklch(62.4% 0.183 264)");
  });
});

describe("contrast", () => {
  it("matches the WCAG reference values", () => {
    expect(contrastRatio("#ffffff", "#000000")).toBeCloseTo(21, 5);
    expect(contrastRatio("#777777", "#ffffff")).toBeCloseTo(4.48, 2);
  });

  it("rates ratios by WCAG level", () => {
    expect([8, 5, 3.5, 2].map(wcagLevel)).toEqual(["AAA", "AA", "AA18", "fail"]);
  });

  it("picks the readable text color", () => {
    expect(readableOn("#17161c")).toBe("#ffffff");
    expect(readableOn("#fde6dd")).toBe("#000000");
  });
});
