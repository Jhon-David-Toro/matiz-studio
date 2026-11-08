import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { PreviewPanel } from "./PreviewPanel";

const SYSTEM = generateSystem(DEFAULT_CONFIG);

describe("PreviewPanel", () => {
  it("draws the chosen scene with the tokens", () => {
    const { rerender } = render(<PreviewPanel system={SYSTEM} mode="light" vision="normal" scene="landing" />);
    expect(screen.getByRole("region", { name: "Vista previa del sistema" }).style.getPropertyValue("--color-primary")).toBe(SYSTEM.themes.light.primary.hex);
    expect(screen.getByRole("heading", { name: /Lanza tu próxima idea/ })).toBeInTheDocument();
    rerender(<PreviewPanel system={SYSTEM} mode="dark" vision="normal" scene="dashboard" />);
    expect(screen.getByRole("heading", { name: "Buenos días, Ana" })).toBeInTheDocument();
    rerender(<PreviewPanel system={SYSTEM} mode="dark" vision="normal" scene="mobile" />);
    expect(screen.getByRole("figure", { name: "Pantalla de ajustes" })).toBeInTheDocument();
  });
});
