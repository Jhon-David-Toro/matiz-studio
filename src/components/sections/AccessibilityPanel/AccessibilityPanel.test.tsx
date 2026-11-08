import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { AccessibilityPanel } from "./AccessibilityPanel";

describe("AccessibilityPanel", () => {
  it("reports both themes with every pair passing", () => {
    render(<AccessibilityPanel system={generateSystem(DEFAULT_CONFIG)} />);
    for (const name of ["Tema claro", "Tema oscuro"]) {
      const report = screen.getByRole("region", { name });
      expect(within(report).getByText("12 de 12 pares pasan")).toBeInTheDocument();
      expect(within(report).getAllByRole("listitem")).toHaveLength(12);
    }
  });
});
