import type { StepState } from "./KitStepper.types";

export const STEP_STATES: Record<StepState, string> = {
  done: "completado",
  current: "actual",
  todo: "pendiente",
};
