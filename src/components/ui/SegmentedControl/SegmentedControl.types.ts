export type SegmentedOption<T extends string> = {
  value: T;
  label: string;
};

export type SegmentedControlProps<T extends string> = {
  label: string;
  name: string;
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};
