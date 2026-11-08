import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitAccordion } from "./KitAccordion";

describe("KitAccordion", () => {
  it("opens the first answer", () => {
    render(<KitAccordion items={[{ question: "¿Hay plan gratis?", answer: "Sí." }, { question: "¿Puedo cancelar?", answer: "Cuando quieras." }]} />);
    expect(screen.getByText("¿Hay plan gratis?").closest("details")).toHaveAttribute("open");
    expect(screen.getByText("¿Puedo cancelar?").closest("details")).not.toHaveAttribute("open");
  });
});
