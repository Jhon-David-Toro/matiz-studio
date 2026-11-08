import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitTable } from "./KitTable";

describe("KitTable", () => {
  it("lists people with their role, status and menu", () => {
    render(<KitTable caption="Equipo" rows={[{ id: "1", name: "Ana Ruiz", email: "ana@x.co", role: "Diseño", status: { label: "Activa", tone: "success" } }]} />);
    expect(screen.getByRole("table", { name: "Equipo" })).toBeInTheDocument();
    expect(screen.getByRole("rowheader", { name: /Ana Ruiz/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Opciones de Ana Ruiz" })).toBeInTheDocument();
  });
});
