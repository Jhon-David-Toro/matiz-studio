import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { X as Trash } from "@/components/ui/Icon";

import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("is named by its label and calls onClick", async () => {
    const onClick = vi.fn();
    render(<IconButton icon={Trash} label="Eliminar" tone="danger" onClick={onClick} />);
    await userEvent.click(screen.getByRole("button", { name: "Eliminar" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
