import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Copy as Plus } from "@/components/ui/Icon";

import { Button } from "./Button";

describe("Button", () => {
  it("renders a button that does not submit by default", () => {
    render(<Button>Guardar</Button>);
    expect(screen.getByRole("button", { name: "Guardar" })).toHaveAttribute("type", "button");
  });

  it("renders a link when it has an href", () => {
    render(<Button href="/transactions">Ver todos</Button>);
    expect(screen.getByRole("link", { name: "Ver todos" })).toHaveAttribute("href", "/transactions");
  });

  it("hides its icon from assistive tech", () => {
    const { container } = render(<Button leadingIcon={Plus} size="small">Nuevo</Button>);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("calls onClick unless disabled", async () => {
    const onClick = vi.fn();
    const { rerender } = render(<Button onClick={onClick}>Guardar</Button>);
    await userEvent.click(screen.getByRole("button"));
    rerender(<Button onClick={onClick} disabled>Guardar</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
