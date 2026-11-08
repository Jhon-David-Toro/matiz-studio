import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { PaletteStrip } from "./PaletteStrip";

describe("PaletteStrip", () => {
  it("shows eleven swatches, marks the brand and copies on press", async () => {
    const onCopy = vi.fn();
    render(<PaletteStrip palette={generateSystem(DEFAULT_CONFIG).palettes[0]} onCopy={onCopy} />);
    expect(screen.getAllByRole("button")).toHaveLength(11);
    await userEvent.click(screen.getByRole("button", { name: /#5b3cff, tu color/ }));
    expect(onCopy).toHaveBeenCalledWith("#5b3cff");
  });
});
