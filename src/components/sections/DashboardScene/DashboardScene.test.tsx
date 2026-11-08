import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { DashboardScene } from "./DashboardScene";

describe("DashboardScene", () => {
  it("draws the sidebar, the metrics, the chart, the activity and the team", async () => {
    render(<DashboardScene />);
    expect(screen.getByRole("navigation", { name: "Secciones" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("$48.2k")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Entregas por mes/ })).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "Personas del equipo" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("tab", { name: "Este mes" }));
    expect(screen.getByRole("tab", { name: "Este mes" })).toHaveAttribute("aria-selected", "true");
  });
});
