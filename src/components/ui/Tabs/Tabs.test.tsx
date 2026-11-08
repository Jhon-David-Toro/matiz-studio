import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";

import { Tabs } from "./Tabs";
import { nextTabIndex } from "./Tabs.utils";

const TABS = [
  { value: "a", label: "Uno" },
  { value: "b", label: "Dos" },
  { value: "c", label: "Tres" },
];

/**
 * Tabs with their own state, as a consumer would use them.
 *
 * @returns The rendered element.
 */
function Harness() {
  const [value, setValue] = useState("a");
  return <Tabs label="Secciones" idPrefix="t" tabs={TABS} value={value} onChange={setValue} />;
}

describe("Tabs", () => {
  it("selects with a click and moves with the arrow keys", async () => {
    render(<Harness />);
    await userEvent.click(screen.getByRole("tab", { name: "Dos" }));
    expect(screen.getByRole("tab", { name: "Dos" })).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Tres" })).toHaveFocus();
    await userEvent.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: "Uno" })).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("a");
    expect(screen.getByRole("tab", { name: "Uno" })).toHaveAttribute("tabindex", "0");
  });

  it("wraps around the ends", () => {
    expect(nextTabIndex("ArrowLeft", 0, 3)).toBe(2);
    expect(nextTabIndex("End", 0, 3)).toBe(2);
    expect(nextTabIndex("x", 0, 3)).toBeUndefined();
  });
});
