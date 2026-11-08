import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { TokensPanel } from "./TokensPanel";

const SYSTEM = generateSystem(DEFAULT_CONFIG);

describe("TokensPanel", () => {
  it("shows every palette and copies a swatch", async () => {
    const onCopy = vi.fn();
    render(<TokensPanel system={SYSTEM} onCopy={onCopy} />);
    const palettes = screen.getByRole("region", { name: "Paletas" });
    expect(within(palettes).getAllByRole("heading", { level: 3 })).toHaveLength(7);
    await userEvent.click(within(palettes).getByRole("button", { name: /tu color/ }));
    expect(onCopy).toHaveBeenCalledWith(DEFAULT_CONFIG.brand);
  });

  it("lists the semantic tokens of both themes", () => {
    render(<TokensPanel system={SYSTEM} onCopy={vi.fn()} />);
    const row = screen.getByRole("rowheader", { name: "background" }).closest("tr") as HTMLElement;
    expect(within(row).getByText("neutral-50")).toBeInTheDocument();
    expect(within(row).getByText("neutral-950")).toBeInTheDocument();
  });

  it("shows the fonts, type, spacing, radii and shadows", () => {
    render(<TokensPanel system={SYSTEM} onCopy={vi.fn()} />);
    expect(screen.getByText("Space Grotesk")).toBeInTheDocument();
    for (const name of ["Tipografía", "Espaciado", "Radios", "Sombras"]) expect(screen.getByRole("region", { name })).toBeInTheDocument();
  });
});
