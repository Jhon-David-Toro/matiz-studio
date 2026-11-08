import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { Workspace } from "./Workspace";

describe("Workspace", () => {
  it("starts on the preview and opens every other view", async () => {
    render(<Workspace system={generateSystem(DEFAULT_CONFIG)} onNotice={vi.fn()} onCopy={vi.fn()} />);
    expect(screen.getByRole("tabpanel", { name: "Vista previa" })).toContainElement(screen.getByRole("region", { name: "Vista previa del sistema" }));
    await userEvent.click(screen.getByRole("tab", { name: "Tokens" }));
    expect(screen.getByRole("region", { name: "Paletas" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("tab", { name: "Accesibilidad" }));
    expect(screen.getByRole("region", { name: "Tema claro" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("tab", { name: "Exportar" }));
    expect(screen.getByLabelText("tokens.css")).toBeInTheDocument();
  });
});
