import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { PreviewPanel } from "./PreviewPanel";

const SYSTEM = generateSystem(DEFAULT_CONFIG);

describe("PreviewPanel", () => {
  it("draws the sample with the tokens of the light theme", () => {
    render(<PreviewPanel system={SYSTEM} />);
    const canvas = screen.getByRole("region", { name: "Vista previa del sistema" });
    expect(canvas).toHaveAttribute("data-theme", "light");
    expect(canvas.style.getPropertyValue("--color-primary")).toBe(SYSTEM.themes.light.primary.hex);
    expect(screen.getByRole("button", { name: "Crear proyecto" })).toBeInTheDocument();
  });

  it("switches to dark and simulates color vision", async () => {
    render(<PreviewPanel system={SYSTEM} />);
    await userEvent.click(screen.getByRole("radio", { name: "Oscuro" }));
    await userEvent.selectOptions(screen.getByLabelText("Simular visión"), "deuteranopia");
    const canvas = screen.getByRole("region", { name: "Vista previa del sistema" });
    expect(canvas.style.getPropertyValue("--color-background")).toBe(SYSTEM.themes.dark.background.hex);
    expect(canvas.style.filter).toContain("matiz-vision-deuteranopia");
  });

  it("keeps the sample form from submitting", async () => {
    render(<PreviewPanel system={SYSTEM} />);
    await userEvent.click(screen.getByRole("button", { name: "Registrarme" }));
    expect(screen.getByRole("button", { name: "Registrarme" })).toBeInTheDocument();
  });
});
