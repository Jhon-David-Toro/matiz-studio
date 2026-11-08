import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FONT_PAIRINGS } from "@/lib/system/system.constants";
import { typeScale } from "@/lib/system/typography.utils";

import { TypeSpecimen } from "./TypeSpecimen";

describe("TypeSpecimen", () => {
  it("lists every style, largest first, with its metrics", () => {
    render(<TypeSpecimen styles={typeScale(1.25)} fonts={FONT_PAIRINGS[0]} />);
    const rows = screen.getAllByRole("listitem");
    expect(rows).toHaveLength(8);
    expect(rows[0]).toHaveTextContent("4xl");
    expect(screen.getByText("16 / 24")).toBeInTheDocument();
  });
});
