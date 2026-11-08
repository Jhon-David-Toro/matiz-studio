import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { AppHeader } from "./AppHeader";

describe("AppHeader", () => {
  it("runs Remix and share", async () => {
    const onRemix = vi.fn();
    const onShare = vi.fn();
    render(<AppHeader onRemix={onRemix} onShare={onShare} />);
    await userEvent.click(screen.getByRole("button", { name: "Remix" }));
    await userEvent.click(screen.getByRole("button", { name: "Copiar enlace" }));
    expect(onRemix).toHaveBeenCalledTimes(1);
    expect(onShare).toHaveBeenCalledTimes(1);
  });
});
