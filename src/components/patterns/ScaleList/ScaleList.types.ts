export type ScaleKind = "space" | "radius" | "shadow";

export type ScaleItem = {
  name: string;
  value: string;
};

export type ScaleListProps = {
  kind: ScaleKind;
  items: ScaleItem[];
};
