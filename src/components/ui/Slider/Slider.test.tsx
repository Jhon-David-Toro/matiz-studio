import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Slider } from "./Slider";

describe("Slider", () => {
  it("is a labelled range that reports numbers", () => {
    const onChange = vi.fn();
    render(<Slider label="Redondez" value={40} onChange={onChange} lowLabel="Recto" highLabel="Redondo" />);
    const slider = screen.getByRole("slider", { name: "Redondez" });
    expect(slider).toHaveAttribute("aria-valuetext", "40 · Recto a Redondo");
    fireEvent.change(slider, { target: { value: "75" } });
    expect(onChange).toHaveBeenCalledWith(75);
  });
});
