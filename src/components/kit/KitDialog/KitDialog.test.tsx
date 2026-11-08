import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitDialog } from "./KitDialog";

describe("KitDialog", () => {
  it("is a named dialog with both actions", () => {
    render(<KitDialog title="¿Eliminar proyecto?" description="No se puede deshacer." confirm="Eliminar" cancel="Cancelar" danger />);
    expect(screen.getByRole("dialog", { name: "¿Eliminar proyecto?" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Eliminar" })).toBeInTheDocument();
  });
});
