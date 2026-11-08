import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { ComponentsPanel } from "./ComponentsPanel";

describe("ComponentsPanel", () => {
  it("shows every group of components inside the themed canvas", () => {
    render(<ComponentsPanel system={generateSystem(DEFAULT_CONFIG)} mode="light" vision="normal" />);
    const canvas = screen.getByRole("region", { name: "Galería de componentes" });
    for (const name of ["Botones", "Campos", "Selección", "Navegación", "Estados y avisos", "Datos", "Capas y contenido"]) {
      expect(within(canvas).getByRole("region", { name })).toBeInTheDocument();
    }
    expect(screen.getByRole("button", { name: "Peligro" })).toBeInTheDocument();
    expect(screen.getByLabelText("Correo")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getAllByRole("switch")).toHaveLength(2);
    expect(screen.getByRole("dialog", { name: "¿Eliminar proyecto?" })).toBeInTheDocument();
    expect(screen.getByRole("menu", { name: "Acciones del proyecto" })).toBeInTheDocument();
  });
});
