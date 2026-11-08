import { act, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { ThemeCanvas } from "./ThemeCanvas";
import { useCanvasOptions } from "./hooks/useCanvasOptions";
import { CanvasToolbar } from "./parts/CanvasToolbar";

const SYSTEM = generateSystem(DEFAULT_CONFIG);

describe("ThemeCanvas", () => {
  it("applies the tokens of the theme and the vision filter", () => {
    render(
      <ThemeCanvas system={SYSTEM} mode="dark" vision="tritanopia" label="Lienzo">
        <p>Hola</p>
      </ThemeCanvas>,
    );
    const canvas = screen.getByRole("region", { name: "Lienzo" });
    expect(canvas.style.getPropertyValue("--color-background")).toBe(SYSTEM.themes.dark.background.hex);
    expect(canvas.style.filter).toContain("matiz-vision-tritanopia");
  });

  it("changes the theme and the vision from the toolbar", async () => {
    const setMode = vi.fn();
    const setVision = vi.fn();
    render(<CanvasToolbar mode="light" vision="normal" setMode={setMode} setVision={setVision} />);
    await userEvent.click(screen.getByRole("radio", { name: "Oscuro" }));
    await userEvent.selectOptions(screen.getByLabelText("Simular visión"), "achromatopsia");
    expect(setMode).toHaveBeenCalledWith("dark");
    expect(setVision).toHaveBeenCalledWith("achromatopsia");
  });

  it("keeps the options in a hook", () => {
    const { result } = renderHook(() => useCanvasOptions());
    act(() => result.current.setMode("dark"));
    expect(result.current.mode).toBe("dark");
  });
});
