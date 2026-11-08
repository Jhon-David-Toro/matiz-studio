import { KitAvatar } from "@/components/kit/KitAvatar";
import { KitButton } from "@/components/kit/KitButton";
import { KitCheck } from "@/components/kit/KitCheck";
import { KitRange } from "@/components/kit/KitRange";
import { KitToast } from "@/components/kit/KitToast";
import { LogOut } from "@/components/ui/Icon";

import { PHONES, SETTINGS } from "../MobileScene.constants";
import { Phone } from "./Phone";
import styles from "../MobileScene.module.scss";

/**
 * Settings screen of the sample app: profile, notification switches, a slider and a toast.
 *
 * @returns The rendered element.
 */
export function SettingsScreen() {
  return (
    <Phone label={PHONES.settings}>
      <div className={styles.settings}>
        <h4 className={styles.screenTitle}>{SETTINGS.title}</h4>
        <div className={styles.profile}>
          <KitAvatar name={SETTINGS.name} size="lg" />
          <span>
            <strong>{SETTINGS.name}</strong>
            <span className={styles.muted}>{SETTINGS.email}</span>
          </span>
        </div>
        <fieldset className={styles.group}>
          <legend className={styles.legend}>{SETTINGS.section}</legend>
          {SETTINGS.toggles.map((toggle) => (
            <KitCheck key={toggle.label} kind="switch" label={toggle.label} description={toggle.description} defaultChecked={toggle.checked} />
          ))}
        </fieldset>
        <KitRange label={SETTINGS.volume} defaultValue={65} />
        <KitButton variant="ghost" icon={LogOut}>
          {SETTINGS.logout}
        </KitButton>
        <div className={styles.toastSlot}>
          <KitToast message={SETTINGS.toast} action={SETTINGS.undo} />
        </div>
      </div>
    </Phone>
  );
}
