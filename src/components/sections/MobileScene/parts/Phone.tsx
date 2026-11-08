import { STATUS_BAR } from "../MobileScene.constants";
import type { PhoneProps } from "../MobileScene.types";
import styles from "../MobileScene.module.scss";

/**
 * Phone frame with a status bar, holding one screen of the sample app.
 *
 * @param props Props of the component, see {@link PhoneProps}.
 * @param props.label Accessible name of the screen.
 * @param props.children Screen content.
 * @returns The rendered element.
 */
export function Phone({ label, children }: PhoneProps) {
  return (
    <figure aria-label={label} className={styles.phone}>
      <div className={styles.screen}>
        <div className={styles.statusBar} aria-hidden="true">
          <span>{STATUS_BAR.time}</span>
          <span className={styles.island} />
          <span className={styles.battery} />
        </div>
        {children}
      </div>
    </figure>
  );
}
