import type { ComponentPropsWithRef } from "react";

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectFieldProps = Omit<ComponentPropsWithRef<"select">, "id" | "children"> & {
  label: string;
  options: SelectOption[];
  error?: string;
};
