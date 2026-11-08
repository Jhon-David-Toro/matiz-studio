import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { PRESETS } from "@/lib/system/presets.constants";
import { DEFAULT_CONFIG } from "@/lib/system/system.constants";

import { ControlsPanel } from "./ControlsPanel";

/**
 * Renders the panel with spies.
 *
 * @param config Configuration to show.
 * @returns The spies.
 */
function renderPanel(config = DEFAULT_CONFIG) {
  const onUpdate = vi.fn();
  const onTrait = vi.fn();
  render(<ControlsPanel config={config} onUpdate={onUpdate} onTrait={onTrait} />);
  return { onUpdate, onTrait };
}

describe("ControlsPanel", () => {
  it("applies a preset and marks the one in use", async () => {
    const { onUpdate } = renderPanel(PRESETS[1].config);
    expect(screen.getByRole("button", { name: /Editorial/ })).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(screen.getByRole("button", { name: /Fintech/ }));
    expect(onUpdate).toHaveBeenCalledWith(PRESETS[0].config);
  });

  it("sends the brand, harmony, fonts and ratio", async () => {
    const { onUpdate } = renderPanel();
    fireEvent.input(screen.getByLabelText("Elegir con el selector"), { target: { value: "#112233" } });
    await userEvent.selectOptions(screen.getByLabelText("Armonía del acento"), "triadic");
    await userEvent.selectOptions(screen.getByLabelText("Pareja de fuentes"), "editorial");
    await userEvent.selectOptions(screen.getByLabelText("Escala tipográfica"), "1.5");
    expect(onUpdate.mock.calls).toEqual([[{ brand: "#112233" }], [{ harmony: "triadic" }], [{ pairing: "editorial" }], [{ ratio: 1.5 }]]);
  });

  it("sends personality traits", () => {
    const { onTrait } = renderPanel();
    fireEvent.change(screen.getByRole("slider", { name: "Profundidad" }), { target: { value: "80" } });
    expect(onTrait).toHaveBeenCalledWith("depth", 80);
  });
});
