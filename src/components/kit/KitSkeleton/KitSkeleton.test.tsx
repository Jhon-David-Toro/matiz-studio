import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitSkeleton } from "./KitSkeleton";

describe("KitSkeleton", () => {
  it("is hidden and draws its lines", () => {
    const { container } = render(<KitSkeleton lines={4} />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelectorAll("span span")).toHaveLength(4);
  });
});
