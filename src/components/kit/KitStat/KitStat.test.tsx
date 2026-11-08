import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitStat } from "./KitStat";

describe("KitStat", () => {
  it("shows the label, the value and the change", () => {
    render(<KitStat label="Ingresos" value="$48k" delta="+12 %" trend="up" />);
    expect(screen.getByText("$48k")).toBeInTheDocument();
    expect(screen.getByText("+12 %")).toBeInTheDocument();
  });
});
