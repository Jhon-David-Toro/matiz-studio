import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitCard } from "./KitCard";

describe("KitCard", () => {
  it("shows its header, body and footer", () => {
    render(
      <KitCard title="Plan Pro" description="Para equipos" footer={<button type="button">Elegir</button>}>
        Cuerpo
      </KitCard>,
    );
    expect(screen.getByRole("heading", { name: "Plan Pro" })).toBeInTheDocument();
    expect(screen.getByText("Cuerpo")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Elegir" })).toBeInTheDocument();
  });
});
