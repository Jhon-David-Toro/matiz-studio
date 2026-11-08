import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { KitPagination } from "./KitPagination";

describe("KitPagination", () => {
  it("moves between pages and stops at the ends", async () => {
    render(<KitPagination pages={3} />);
    expect(screen.getByRole("button", { name: "Página anterior" })).toBeDisabled();
    await userEvent.click(screen.getByRole("button", { name: "Página siguiente" }));
    expect(screen.getByRole("button", { name: "Página 2" })).toHaveAttribute("aria-current", "page");
    await userEvent.click(screen.getByRole("button", { name: "Página 3" }));
    expect(screen.getByRole("button", { name: "Página siguiente" })).toBeDisabled();
    await userEvent.click(screen.getByRole("button", { name: "Página anterior" }));
    expect(screen.getByRole("button", { name: "Página 2" })).toHaveAttribute("aria-current", "page");
  });
});
