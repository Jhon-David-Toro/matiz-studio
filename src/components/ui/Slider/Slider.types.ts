export type SliderProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  lowLabel: string;
  highLabel: string;
  min?: number;
  max?: number;
};
