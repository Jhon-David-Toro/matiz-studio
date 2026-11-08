import type { ComponentPropsWithoutRef } from "react";

import type { FieldControlProps } from "../KitField.types";
import { controlProps } from "../KitField.utils";

/**
 * Native `<select>` with the options of the field.
 *
 * @param props Props of the component, see {@link FieldControlProps}.
 * @param props.options Options to list.
 * @param props.rest Remaining properties of the control.
 * @returns The rendered element.
 */
function SelectControl({ options = [], ...rest }: FieldControlProps) {
  return (
    <select {...(controlProps(rest) as ComponentPropsWithoutRef<"select">)}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

/**
 * Native `<textarea>`.
 *
 * @param props Props of the component, see {@link FieldControlProps}.
 * @param props.options Ignored: only selects have options.
 * @param props.rest Remaining properties of the control.
 * @returns The rendered element.
 */
function TextareaControl({ options: _options, ...rest }: FieldControlProps) {
  return <textarea {...(controlProps(rest) as ComponentPropsWithoutRef<"textarea">)} />;
}

/**
 * Native `<input>`.
 *
 * @param props Props of the component, see {@link FieldControlProps}.
 * @param props.options Ignored: only selects have options.
 * @param props.rest Remaining properties of the control.
 * @returns The rendered element.
 */
function InputControl({ options: _options, ...rest }: FieldControlProps) {
  return <input {...controlProps(rest)} />;
}

/**
 * The control of a sample field: an input, a textarea or a select.
 *
 * @param props Props of the component, see {@link FieldControlProps}.
 * @param props.kind Which native control to draw.
 * @param props.rest Remaining properties of the control.
 * @returns The rendered element.
 */
export function FieldControl({ kind = "input", ...rest }: FieldControlProps) {
  const Control = { input: InputControl, textarea: TextareaControl, select: SelectControl }[kind];
  return <Control {...rest} />;
}
