export type ColorFieldProps = {
  label: string;
  value: string;
  onChange: (hex: string) => void;
  hint?: string;
};

export type HexDraft = {
  source: string;
  text: string;
};
