import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Pencil, Trash } from "@/components/ui/Icon";

import { KitMenu } from "./KitMenu";

describe("KitMenu", () => {
  it("lists its items with shortcuts", () => {
    render(<KitMenu label="Acciones" items={[{ label: "Editar", icon: Pencil, shortcut: "E" }, { label: "Eliminar", icon: Trash, danger: true }]} />);
    expect(screen.getByRole("menu", { name: "Acciones" })).toBeInTheDocument();
    expect(screen.getAllByRole("menuitem")).toHaveLength(2);
    expect(screen.getByText("E")).toBeInTheDocument();
  });
});
