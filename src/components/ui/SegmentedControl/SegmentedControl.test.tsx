import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SegmentedControl } from "./SegmentedControl";

const OPTIONS = [
  { value: "all", label: "Todos" },
  { value: "income", label: "Ingresos" },
];

describe("SegmentedControl", () => {
  it("checks the current option and reports a new one", async () => {
    const onChange = vi.fn();
    render(<SegmentedControl label="Tipo" name="kind" options={OPTIONS} value="all" onChange={onChange} />);
    expect(screen.getByRole("radiogroup", { name: "Tipo" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Todos" })).toBeChecked();
    await userEvent.click(screen.getByRole("radio", { name: "Ingresos" }));
    expect(onChange).toHaveBeenCalledWith("income");
  });
});
