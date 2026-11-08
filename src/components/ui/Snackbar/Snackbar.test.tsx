import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Snackbar } from "./Snackbar";

describe("Snackbar", () => {
  afterEach(() => vi.useRealTimers());

  it("is an empty live region without a message", () => {
    render(<Snackbar onDismiss={vi.fn()} />);
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  it("runs the action and closes", async () => {
    const onAction = vi.fn();
    const onDismiss = vi.fn();
    render(<Snackbar message="Eliminado" actionLabel="Deshacer" onAction={onAction} onDismiss={onDismiss} />);
    await userEvent.click(screen.getByRole("button", { name: "Deshacer" }));
    expect(onAction).toHaveBeenCalledTimes(1);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("closes on its own after the duration", () => {
    vi.useFakeTimers();
    const onDismiss = vi.fn();
    render(<Snackbar message="Guardado" duration={1000} onDismiss={onDismiss} />);
    act(() => vi.advanceTimersByTime(999));
    expect(onDismiss).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
