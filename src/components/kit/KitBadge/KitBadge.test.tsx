import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitBadge } from "./KitBadge";

describe("KitBadge", () => {
  it("shows its text", () => {
    render(
      <KitBadge tone="success" solid dot>
        Activo
      </KitBadge>,
    );
    expect(screen.getByText("Activo")).toBeInTheDocument();
  });
});
