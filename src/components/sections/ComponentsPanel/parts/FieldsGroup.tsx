import { KitField } from "@/components/kit/KitField";
import { Search } from "@/components/ui/Icon";

import { FIELDS, GROUPS } from "../ComponentsPanel.constants";
import styles from "../ComponentsPanel.module.scss";
import { GallerySection } from "./GallerySection";

/**
 * Text fields in every state, a select and a textarea.
 *
 * @returns The rendered element.
 */
export function FieldsGroup() {
  return (
    <GallerySection {...GROUPS.fields}>
      <div className={styles.fieldGrid}>
        <KitField label={FIELDS.text.label} placeholder={FIELDS.text.placeholder} />
        <KitField label={FIELDS.icon.label} icon={Search} placeholder={FIELDS.icon.placeholder} hint={FIELDS.icon.hint} />
        <KitField label={FIELDS.error.label} type="email" defaultValue={FIELDS.error.value} error={FIELDS.error.error} />
        <KitField label={FIELDS.disabled.label} defaultValue={FIELDS.disabled.value} disabled />
        <KitField label={FIELDS.select.label} kind="select" options={FIELDS.select.options} />
        <KitField label={FIELDS.textarea.label} kind="textarea" rows={3} placeholder={FIELDS.textarea.placeholder} />
      </div>
    </GallerySection>
  );
}
