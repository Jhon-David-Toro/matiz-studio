import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CodeBlock } from "./CodeBlock";

describe("CodeBlock", () => {
  it("shows the code in a focusable region", () => {
    render(<CodeBlock label="tokens.css" code=":root {}" />);
    expect(screen.getByLabelText("tokens.css")).toHaveAttribute("tabindex", "0");
    expect(screen.getByText(":root {}")).toBeInTheDocument();
  });
});
