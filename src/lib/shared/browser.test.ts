import { afterEach, describe, expect, it, vi } from "vitest";

import { copyText, downloadText, replaceQuery, shareUrl } from "./browser";
import { cx } from "./cx";

describe("browser helpers", () => {
  afterEach(() => vi.restoreAllMocks());

  it("copies text and reports failures", async () => {
    const writeText = vi.fn().mockResolvedValueOnce(undefined).mockRejectedValueOnce(new Error("denied"));
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
    expect(await copyText("a")).toBe(true);
    expect(await copyText("b")).toBe(false);
  });

  it("downloads text through a temporary link", () => {
    const click = vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => undefined);
    URL.createObjectURL = vi.fn(() => "blob:x");
    URL.revokeObjectURL = vi.fn();
    downloadText("tokens.css", ":root{}", "text/css");
    expect(click).toHaveBeenCalledTimes(1);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:x");
  });

  it("replaces the query only when it changes and builds share links", () => {
    const spy = vi.spyOn(window.history, "replaceState");
    replaceQuery("c=1");
    replaceQuery("c=1");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(shareUrl("c=1")).toBe("http://localhost:3000/?c=1");
  });

  it("joins class names", () => {
    expect(cx("a", false, "b")).toBe("a b");
  });
});
