import { COPY } from "../PreviewPanel.constants";
import styles from "../PreviewPanel.module.scss";

/**
 * Sign-up card of the sample product: input, select, checkbox and a full-width button. Submitting does nothing.
 *
 * @returns The rendered element.
 */
export function PreviewForm() {
  return (
    <form className={styles.card} onSubmit={(event) => event.preventDefault()}>
      <h4 className={styles.cardTitle}>{COPY.formTitle}</h4>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>{COPY.email}</span>
        <input type="email" className={styles.input} placeholder={COPY.emailPlaceholder} />
      </label>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>{COPY.plan}</span>
        <select className={styles.input}>
          {COPY.plans.map((plan) => (
            <option key={plan}>{plan}</option>
          ))}
        </select>
      </label>
      <label className={styles.check}>
        <input type="checkbox" defaultChecked className={styles.checkbox} />
        {COPY.terms}
      </label>
      <button type="submit" className={styles.buttonPrimary}>
        {COPY.submit}
      </button>
    </form>
  );
}
