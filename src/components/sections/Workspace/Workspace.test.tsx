import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { Workspace } from "./Workspace";

describe("Workspace", () => {
  it("switches scenes and keeps the theme between the preview and the gallery", async () => {
    render(<Workspace system={generateSystem(DEFAULT_CONFIG)} onNotice={vi.fn()} onCopy={vi.fn()} />);
    await userEvent.click(screen.getByRole("radio", { name: "Dashboard" }));
    expect(screen.getByRole("heading", { name: "Buenos días, Ana" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("radio", { name: "Oscuro" }));
    await userEvent.click(screen.getByRole("tab", { name: "Componentes" }));
    expect(screen.queryByRole("radiogroup", { name: "Escena" })).not.toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Galería de componentes" })).toHaveAttribute("data-theme", "dark");
  });

  it("opens the tokens, accessibility and export views without the canvas toolbar", async () => {
    render(<Workspace system={generateSystem(DEFAULT_CONFIG)} onNotice={vi.fn()} onCopy={vi.fn()} />);
    await userEvent.click(screen.getByRole("tab", { name: "Tokens" }));
    expect(screen.getByRole("region", { name: "Paletas" })).toBeInTheDocument();
    expect(screen.queryByLabelText("Simular visión")).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("tab", { name: "Accesibilidad" }));
    expect(screen.getByRole("region", { name: "Tema claro" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("tab", { name: "Exportar" }));
    expect(screen.getByLabelText("tokens.css")).toBeInTheDocument();
  });
});
