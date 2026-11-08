import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TextField } from "./TextField";

describe("TextField", () => {
  it("links the label and the hint", () => {
    render(<TextField label="Monto" hint="En pesos" />);
    expect(screen.getByLabelText("Monto")).toHaveAccessibleDescription("En pesos");
  });

  it("marks the field invalid and announces the error", () => {
    render(<TextField label="Monto" hint="En pesos" error="Escribe un monto" />);
    expect(screen.getByLabelText("Monto")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent("Escribe un monto");
  });

  it("has no description without a message", () => {
    render(<TextField label="Monto" />);
    expect(screen.getByLabelText("Monto")).not.toHaveAttribute("aria-describedby");
  });
});
