import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("shows its text", () => {
    render(<Badge tone="success">AA</Badge>);
    expect(screen.getByText("AA")).toBeInTheDocument();
  });
});
