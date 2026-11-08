import { Check, Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import { STEP_STATES } from "./KitStepper.constants";
import type { KitStepperProps } from "./KitStepper.types";
import { stepState } from "./KitStepper.utils";
import styles from "./KitStepper.module.scss";

/**
 * Sample stepper of a multi-step flow: done steps show a check, the current one is highlighted.
 *
 * @param props Props of the component, see {@link KitStepperProps}.
 * @param props.steps Labels of the steps.
 * @param props.current Index of the current step.
 * @returns The rendered element.
 */
export function KitStepper({ steps, current }: KitStepperProps) {
  return (
    <ol className={styles.stepper}>
      {steps.map((step, index) => {
        const state = stepState(index, current);
        return (
          <li key={step} className={cx(styles.step, styles[state])} aria-current={state === "current" ? "step" : undefined}>
            <span className={styles.marker} aria-hidden="true">
              {state === "done" ? <Icon icon={Check} size="small" /> : index + 1}
            </span>
            <span className={styles.label}>
              {step}
              <span className={styles.hidden}> ({STEP_STATES[state]})</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
