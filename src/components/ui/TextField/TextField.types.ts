import type { ComponentPropsWithRef } from "react";

export type TextFieldProps = Omit<ComponentPropsWithRef<"input">, "id"> & {
  label: string;
  hint?: string;
  error?: string;
};

export type FieldMessageProps = {
  id: string;
  hint?: string;
  error?: string;
};
