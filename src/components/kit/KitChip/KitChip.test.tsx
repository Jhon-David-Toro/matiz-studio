import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { KitChip } from "./KitChip";

describe("KitChip", () => {
  it("toggles when pressed", async () => {
    render(<KitChip label="Diseño" />);
    await userEvent.click(screen.getByRole("button", { name: "Diseño" }));
    expect(screen.getByRole("button", { name: "Diseño" })).toHaveAttribute("aria-pressed", "true");
  });
});
