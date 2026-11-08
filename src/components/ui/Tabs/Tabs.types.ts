export type TabOption<T extends string> = {
  value: T;
  label: string;
};

export type TabsProps<T extends string> = {
  label: string;
  idPrefix: string;
  tabs: TabOption<T>[];
  value: T;
  onChange: (value: T) => void;
};
