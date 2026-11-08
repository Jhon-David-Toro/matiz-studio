import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { KitTabs } from "./KitTabs";

describe("KitTabs", () => {
  it("selects the pressed tab", async () => {
    render(<KitTabs label="Vistas" tabs={["Resumen", "Actividad"]} variant="pill" />);
    await userEvent.click(screen.getByRole("tab", { name: "Actividad" }));
    expect(screen.getByRole("tab", { name: "Actividad" })).toHaveAttribute("aria-selected", "true");
  });
});
