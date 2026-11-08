import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ColorField } from "./ColorField";
import { syncDraft } from "./ColorField.utils";

describe("ColorField", () => {
  it("sends only valid colors while typing", async () => {
    const onChange = vi.fn();
    render(<ColorField label="Color de marca" value="#5b3cff" onChange={onChange} />);
    const field = screen.getByLabelText("Color de marca");
    await userEvent.clear(field);
    await userEvent.type(field, "f0");
    expect(field).toHaveAttribute("aria-invalid", "true");
    expect(onChange).not.toHaveBeenCalled();
    await userEvent.type(field, "a");
    expect(onChange).toHaveBeenLastCalledWith("#ff00aa");
  });

  it("sends the color of the picker and follows outside changes", () => {
    const onChange = vi.fn();
    const { rerender } = render(<ColorField label="Color de marca" value="#5b3cff" onChange={onChange} />);
    fireEvent.input(screen.getByLabelText("Elegir con el selector"), { target: { value: "#112233" } });
    expect(onChange).toHaveBeenCalledWith("#112233");
    rerender(<ColorField label="Color de marca" value="#112233" onChange={onChange} />);
    expect(screen.getByLabelText("Color de marca")).toHaveValue("#112233");
  });

  it("keeps the typed text when it produced the color", () => {
    const draft = { source: "#5b3cff", text: "abc" };
    expect(syncDraft(draft, "#aabbcc")).toEqual({ source: "#aabbcc", text: "abc" });
    expect(syncDraft(draft, "#5b3cff")).toBe(draft);
  });
});
