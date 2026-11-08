export type Vector3 = [number, number, number];

export type Matrix3 = [Vector3, Vector3, Vector3];

export type Oklch = {
  l: number;
  c: number;
  h: number;
};

export type WcagLevel = "AAA" | "AA" | "AA18" | "fail";

export type VisionMode = "normal" | "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia";
