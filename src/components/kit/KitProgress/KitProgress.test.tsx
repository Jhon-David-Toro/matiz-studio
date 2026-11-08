import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitProgress } from "./KitProgress";

describe("KitProgress", () => {
  it("draws a bar with its value or a spinner", () => {
    render(
      <>
        <KitProgress label="Subiendo" value={64} />
        <KitProgress label="Cargando" />
      </>,
    );
    expect(screen.getByRole("progressbar", { name: "Subiendo" })).toHaveAttribute("aria-valuenow", "64");
    expect(screen.getByRole("status")).toHaveTextContent("Cargando");
  });
});
