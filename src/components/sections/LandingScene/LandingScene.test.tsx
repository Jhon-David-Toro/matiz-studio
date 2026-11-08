import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { LandingScene } from "./LandingScene";

describe("LandingScene", () => {
  it("draws the hero, the features, the offer and the questions", async () => {
    render(<LandingScene />);
    expect(screen.getByRole("heading", { name: /Lanza tu próxima idea/ })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(3);
    expect(screen.getByLabelText("Correo de trabajo")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Elegir Equipo" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Crear cuenta" }));
    expect(screen.getByText("¿Puedo cancelar cuando quiera?")).toBeInTheDocument();
  });
});
