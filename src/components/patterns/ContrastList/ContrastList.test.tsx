import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContrastList } from "./ContrastList";

const CHECK = {
  id: "text",
  label: "Texto sobre fondo",
  foreground: "text" as const,
  background: "background" as const,
  min: 4.5,
  foregroundHex: "#000000",
  backgroundHex: "#ffffff",
  ratio: 21,
  level: "AAA" as const,
  passes: true,
};

describe("ContrastList", () => {
  it("shows the ratio and the level of every pair", () => {
    render(<ContrastList checks={[CHECK, { ...CHECK, id: "b", label: "Borde", ratio: 2.1, level: "fail", passes: false }]} />);
    const [first, second] = screen.getAllByRole("listitem");
    expect(within(first).getByText("21.00:1")).toBeInTheDocument();
    expect(within(first).getByText("AAA")).toBeInTheDocument();
    expect(within(second).getByText("No pasa")).toBeInTheDocument();
  });
});
