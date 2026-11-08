import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitTooltip } from "./KitTooltip";

describe("KitTooltip", () => {
  it("renders the tip as a tooltip", () => {
    render(
      <KitTooltip tip="Copiar enlace">
        <button type="button">Compartir</button>
      </KitTooltip>,
    );
    expect(screen.getByRole("tooltip")).toHaveTextContent("Copiar enlace");
  });
});
