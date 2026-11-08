import { useId } from "react";

import { KitButton } from "@/components/kit/KitButton";
import { Icon, TriangleAlert } from "@/components/ui/Icon";

import type { KitDialogProps } from "./KitDialog.types";
import styles from "./KitDialog.module.scss";

/**
 * Sample confirmation dialog drawn inline (not modal) so it can sit in the gallery: icon, title, text and actions.
 *
 * @param props Props of the component, see {@link KitDialogProps}.
 * @param props.title Title of the dialog.
 * @param props.description What will happen.
 * @param props.confirm Label of the confirm button.
 * @param props.cancel Label of the cancel button.
 * @param props.danger Whether confirming destroys something.
 * @returns The rendered element.
 */
export function KitDialog({ title, description, confirm, cancel, danger }: KitDialogProps) {
  const titleId = useId();

  return (
    <div role="dialog" aria-labelledby={titleId} className={styles.dialog}>
      <span className={styles.icon}>
        <Icon icon={TriangleAlert} />
      </span>
      <h4 id={titleId} className={styles.title}>
        {title}
      </h4>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        <KitButton variant="secondary">{cancel}</KitButton>
        <KitButton variant={danger ? "danger" : "primary"}>{confirm}</KitButton>
      </div>
    </div>
  );
}
