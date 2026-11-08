import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Plus } from "@/components/ui/Icon";

import { KitButton } from "./KitButton";

describe("KitButton", () => {
  it("renders a non-submitting button with its label", () => {
    render(<KitButton variant="secondary" size="lg">Guardar</KitButton>);
    expect(screen.getByRole("button", { name: "Guardar" })).toHaveAttribute("type", "button");
  });

  it("names icon-only buttons and marks loading ones as busy", () => {
    render(
      <>
        <KitButton icon={Plus} iconOnly size="sm">Agregar</KitButton>
        <KitButton loading fullWidth>Enviando</KitButton>
      </>,
    );
    expect(screen.getByRole("button", { name: "Agregar" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enviando" })).toHaveAttribute("aria-busy", "true");
  });
});
