import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import * as browser from "@/lib/shared/browser";

import { Editor } from "./Editor";
import { LINK_COPIED } from "./Editor.constants";
import { copyMessage } from "./Editor.utils";

const navigation = vi.hoisted(() => ({ params: new URLSearchParams() }));

vi.mock("next/navigation", () => ({ useSearchParams: () => navigation.params }));

describe("Editor", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    navigation.params = new URLSearchParams();
  });

  it("opens the system of a shared link and keeps the address in sync", () => {
    navigation.params = new URLSearchParams("c=ff5c39&f=friendly");
    const replace = vi.spyOn(window.history, "replaceState");
    render(<Editor />);
    expect(screen.getByLabelText("Color de marca")).toHaveValue("#ff5c39");
    fireEvent.change(screen.getByRole("slider", { name: "Redondez" }), { target: { value: "90" } });
    expect(replace).toHaveBeenLastCalledWith(null, "", expect.stringContaining("p=90-"));
  });

  it("remixes into a new system", async () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    render(<Editor />);
    await userEvent.click(screen.getByRole("button", { name: "Remix" }));
    expect(screen.getByLabelText("Color de marca")).not.toHaveValue("#5b3cff");
  });

  it("copies a share link and tells the user", async () => {
    vi.spyOn(browser, "copyText").mockResolvedValue(true);
    render(<Editor />);
    await userEvent.click(screen.getByRole("button", { name: "Copiar enlace" }));
    expect(within(screen.getByRole("status")).getByText(LINK_COPIED)).toBeInTheDocument();
  });

  it("copies a swatch from the tokens view", async () => {
    const copy = vi.spyOn(browser, "copyText").mockResolvedValue(true);
    render(<Editor />);
    await userEvent.click(screen.getByRole("tab", { name: "Tokens" }));
    await userEvent.click(screen.getByRole("button", { name: /tu color/ }));
    expect(copy).toHaveBeenCalledWith("#5b3cff");
    expect(screen.getByRole("status")).toHaveTextContent("Copiado #5b3cff");
  });

  it("explains a failed copy", () => {
    expect(copyMessage(false, "#fff", { success: "ok", failure: "no" })).toBe("no");
  });
});
