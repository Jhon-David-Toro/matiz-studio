import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SelectField } from "./SelectField";

const OPTIONS = [
  { value: "food", label: "Comida" },
  { value: "home", label: "Hogar" },
];

describe("SelectField", () => {
  it("lists the options and reports the choice", async () => {
    const onChange = vi.fn();
    render(<SelectField label="Categoría" options={OPTIONS} defaultValue="food" onChange={onChange} />);
    await userEvent.selectOptions(screen.getByLabelText("Categoría"), "home");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("option", { name: "Hogar" })).toHaveProperty("selected", true);
  });

  it("shows its error", () => {
    render(<SelectField label="Categoría" options={OPTIONS} error="Elige una" />);
    expect(screen.getByLabelText("Categoría")).toHaveAccessibleDescription("Elige una");
  });
});
