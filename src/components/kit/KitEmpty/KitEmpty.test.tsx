import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitEmpty } from "./KitEmpty";

describe("KitEmpty", () => {
  it("shows the title and the message", () => {
    render(<KitEmpty title="Sin proyectos" message="Crea el primero." />);
    expect(screen.getByRole("heading", { name: "Sin proyectos" })).toBeInTheDocument();
  });
});
