import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ScaleList } from "./ScaleList";
import { dimensionItems, shadowItems } from "./ScaleList.utils";

describe("ScaleList", () => {
  it("lists the tokens with their values", () => {
    render(<ScaleList kind="space" items={dimensionItems([{ name: "4", value: 16 }])} />);
    expect(screen.getByText("16px")).toBeInTheDocument();
  });

  it("turns shadows into items", () => {
    expect(shadowItems([{ name: "sm", value: "none", y: 1, blur: 3, color: "#00000000" }])).toEqual([{ name: "sm", value: "none" }]);
  });
});
