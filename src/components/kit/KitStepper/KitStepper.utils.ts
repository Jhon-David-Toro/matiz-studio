import type { StepState } from "./KitStepper.types";

/**
 * State of a step compared with the current one.
 *
 * @param index Index of the step.
 * @param current Index of the current step.
 * @returns Whether the step is done, current or still to do.
 */
export function stepState(index: number, current: number): StepState {
  if (index < current) return "done";
  return index === current ? "current" : "todo";
}
