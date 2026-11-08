import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MobileScene } from "./MobileScene";

describe("MobileScene", () => {
  it("draws the three screens of the app", () => {
    render(<MobileScene />);
    const login = screen.getByRole("figure", { name: "Pantalla de inicio de sesión" });
    expect(within(login).getByRole("button", { name: "Entrar" })).toBeInTheDocument();
    const list = screen.getByRole("figure", { name: "Pantalla de proyectos" });
    expect(within(list).getAllByRole("progressbar")).toHaveLength(3);
    expect(within(list).getByRole("link", { name: "Proyectos" })).toHaveAttribute("aria-current", "page");
    const settings = screen.getByRole("figure", { name: "Pantalla de ajustes" });
    expect(within(settings).getAllByRole("switch")).toHaveLength(3);
  });
});
