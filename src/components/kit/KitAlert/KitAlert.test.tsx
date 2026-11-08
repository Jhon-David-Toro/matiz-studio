import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitAlert } from "./KitAlert";

describe("KitAlert", () => {
  it("announces danger at once and the rest politely", () => {
    render(
      <>
        <KitAlert tone="danger" title="Error">
          Falló
        </KitAlert>
        <KitAlert tone="info" title="Nota" action="Ver más">
          Detalle
        </KitAlert>
      </>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Error");
    expect(screen.getByRole("status")).toHaveTextContent("Nota");
    expect(screen.getByRole("button", { name: "Ver más" })).toBeInTheDocument();
  });
});
