import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { KitAvatar, KitAvatarGroup } from "./KitAvatar";
import { initials } from "./KitAvatar.utils";

describe("KitAvatar", () => {
  it("shows the initials and is named by the person", () => {
    render(<KitAvatar name="Ana Martínez" status="online" size="lg" />);
    expect(screen.getByRole("img", { name: "Ana Martínez" })).toHaveTextContent("AM");
  });

  it("groups avatars and counts the rest", () => {
    render(<KitAvatarGroup names={["Ana", "Luis", "Sara", "Juan", "Eva"]} max={3} />);
    expect(screen.getAllByRole("img")).toHaveLength(3);
    expect(screen.getByText("+2")).toBeInTheDocument();
    expect(initials("  maría  josé  gómez ")).toBe("MJ");
  });
});
