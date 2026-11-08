import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Search } from "@/components/ui/Icon";

import { KitField } from "./KitField";

describe("KitField", () => {
  it("draws an input with an icon and a hint", () => {
    render(<KitField label="Buscar" icon={Search} hint="Nombre o correo" />);
    expect(screen.getByLabelText("Buscar")).toHaveAccessibleDescription("Nombre o correo");
  });

  it("draws a textarea and a select", () => {
    render(
      <>
        <KitField label="Mensaje" kind="textarea" rows={3} />
        <KitField label="Plan" kind="select" options={["Gratis", "Pro"]} />
      </>,
    );
    expect(screen.getByLabelText("Mensaje").tagName).toBe("TEXTAREA");
    expect(screen.getByRole("option", { name: "Pro" })).toBeInTheDocument();
  });

  it("marks errors", () => {
    render(<KitField label="Correo" error="Correo no válido" />);
    expect(screen.getByLabelText("Correo")).toHaveAttribute("aria-invalid", "true");
  });
});
