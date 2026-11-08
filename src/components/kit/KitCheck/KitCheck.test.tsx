import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { KitCheck } from "./KitCheck";

describe("KitCheck", () => {
  it("draws checkboxes, radios and switches that toggle", async () => {
    render(
      <>
        <KitCheck label="Recordarme" description="En este equipo" />
        <KitCheck kind="radio" name="plan" label="Mensual" />
        <KitCheck kind="switch" label="Notificaciones" />
      </>,
    );
    await userEvent.click(screen.getByRole("checkbox", { name: /Recordarme/ }));
    await userEvent.click(screen.getByRole("switch", { name: "Notificaciones" }));
    expect(screen.getByRole("checkbox", { name: /Recordarme/ })).toBeChecked();
    expect(screen.getByRole("switch", { name: "Notificaciones" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Mensual" })).not.toBeChecked();
  });
});
