import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Icon } from "./Icon";
import { Check as Plus } from "./icons";

describe("Icon", () => {
  it("is decorative without a label", () => {
    const { container } = render(<Icon icon={Plus} />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("is an image with a label", () => {
    render(<Icon icon={Plus} label="Agregar" size="large" />);
    expect(screen.getByRole("img", { name: "Agregar" })).toHaveAttribute("width", "24");
  });
});
