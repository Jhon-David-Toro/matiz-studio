import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitRange } from "./KitRange";

describe("KitRange", () => {
  it("shows the value as it moves", () => {
    render(<KitRange label="Volumen" defaultValue={20} />);
    fireEvent.change(screen.getByRole("slider", { name: "Volumen" }), { target: { value: "70" } });
    expect(screen.getByText("70%")).toBeInTheDocument();
  });
});
