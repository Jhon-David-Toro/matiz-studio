export type KitStepperProps = {
  steps: string[];
  current: number;
};

export type StepState = "done" | "current" | "todo";
