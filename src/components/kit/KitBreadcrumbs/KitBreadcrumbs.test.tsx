import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitBreadcrumbs } from "./KitBreadcrumbs";

describe("KitBreadcrumbs", () => {
  it("links the parents and marks the current page", () => {
    render(<KitBreadcrumbs items={["Inicio", "Proyectos", "Órbita"]} />);
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getByText("Órbita")).toHaveAttribute("aria-current", "page");
  });
});
