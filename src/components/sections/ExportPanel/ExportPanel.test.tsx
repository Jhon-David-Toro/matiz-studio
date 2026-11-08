import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import * as browser from "@/lib/shared/browser";
import { DEFAULT_CONFIG } from "@/lib/system/system.constants";
import { generateSystem } from "@/lib/system/system.utils";

import { ExportPanel } from "./ExportPanel";
import { COPIED_MESSAGE, COPY_FAILED_MESSAGE, DOWNLOADED_MESSAGE } from "./ExportPanel.constants";

const SYSTEM = generateSystem(DEFAULT_CONFIG);

describe("ExportPanel", () => {
  afterEach(() => vi.restoreAllMocks());

  it("shows CSS first and switches formats", async () => {
    render(<ExportPanel system={SYSTEM} onNotice={vi.fn()} />);
    expect(screen.getByLabelText("tokens.css")).toHaveTextContent("--color-primary-500");
    await userEvent.click(screen.getByRole("radio", { name: "JSON (W3C)" }));
    expect(screen.getByLabelText("tokens.json")).toHaveTextContent('"$type": "color"');
  });

  it("copies and downloads the code", async () => {
    const onNotice = vi.fn();
    vi.spyOn(browser, "copyText").mockResolvedValueOnce(true).mockResolvedValueOnce(false);
    const download = vi.spyOn(browser, "downloadText").mockImplementation(() => undefined);
    render(<ExportPanel system={SYSTEM} onNotice={onNotice} />);
    await userEvent.click(screen.getByRole("button", { name: "Copiar" }));
    await userEvent.click(screen.getByRole("button", { name: "Copiar" }));
    await userEvent.click(screen.getByRole("button", { name: "Descargar" }));
    expect(download).toHaveBeenCalledWith("tokens.css", expect.stringContaining(":root"), "text/css");
    expect(onNotice.mock.calls).toEqual([[COPIED_MESSAGE], [COPY_FAILED_MESSAGE], [DOWNLOADED_MESSAGE]]);
  });
});
