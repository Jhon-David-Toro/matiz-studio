import type { Matrix3, VisionMode, WcagLevel } from "./color.types";

/* OKLab matrices by Björn Ottosson (https://bottosson.github.io/posts/oklab/) */

export const LINEAR_RGB_TO_LMS: Matrix3 = [
  [0.4122214708, 0.5363325363, 0.0514459929],
  [0.2119034982, 0.6806995451, 0.1073969566],
  [0.0883024619, 0.2817188376, 0.6299787005],
];

export const LMS_TO_OKLAB: Matrix3 = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766],
];

export const OKLAB_TO_LMS: Matrix3 = [
  [1, 0.3963377774, 0.2158037573],
  [1, -0.1055613458, -0.0638541728],
  [1, -0.0894841775, -1.291485548],
];

export const LMS_TO_LINEAR_RGB: Matrix3 = [
  [4.0767416621, -3.3077115913, 0.2309699292],
  [-1.2684380046, 2.6097574011, -0.3413193965],
  [-0.0041960863, -0.7034186147, 1.707614701],
];

export const HEX_PATTERN = /^#?([\da-f]{3}|[\da-f]{6})$/i;

export const GAMUT_EPSILON = 0.0005;

export const CHROMA_SEARCH_STEPS = 14;

export const WHITE = "#ffffff";

export const BLACK = "#000000";

export const WCAG_THRESHOLDS: { level: WcagLevel; min: number }[] = [
  { level: "AAA", min: 7 },
  { level: "AA", min: 4.5 },
  { level: "AA18", min: 3 },
];

export const WCAG_LABELS: Record<WcagLevel, string> = {
  AAA: "AAA",
  AA: "AA",
  AA18: "AA grande",
  fail: "No pasa",
};

/* Color-vision simulation matrices (Machado et al. 2009, severity 1.0), as SVG feColorMatrix values */
export const VISION_MATRICES: Record<Exclude<VisionMode, "normal">, string> = {
  protanopia: "0.152 1.053 -0.205 0 0  0.115 0.786 0.099 0 0  -0.004 -0.048 1.052 0 0  0 0 0 1 0",
  deuteranopia: "0.367 0.861 -0.228 0 0  0.280 0.673 0.047 0 0  -0.012 0.043 0.969 0 0  0 0 0 1 0",
  tritanopia: "1.256 -0.077 -0.179 0 0  -0.078 0.931 0.148 0 0  0.005 0.691 0.304 0 0  0 0 0 1 0",
  achromatopsia: "0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0 0 0 1 0",
};
