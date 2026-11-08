import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitStepper } from "./KitStepper";

describe("KitStepper", () => {
  it("marks done, current and pending steps", () => {
    render(<KitStepper steps={["Cuenta", "Equipo", "Pago"]} current={1} />);
    const [first, second, third] = screen.getAllByRole("listitem");
    expect(first).toHaveTextContent("completado");
    expect(second).toHaveAttribute("aria-current", "step");
    expect(third).toHaveTextContent("pendiente");
  });
});
