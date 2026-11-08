import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitToast } from "./KitToast";

describe("KitToast", () => {
  it("shows the message, the action and the close button", () => {
    render(<KitToast message="Archivado" action="Deshacer" />);
    expect(screen.getByText("Archivado")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Deshacer" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cerrar aviso" })).toBeInTheDocument();
  });
});
