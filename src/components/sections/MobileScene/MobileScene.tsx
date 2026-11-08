import { ListScreen } from "./parts/ListScreen";
import { LoginScreen } from "./parts/LoginScreen";
import { SettingsScreen } from "./parts/SettingsScreen";
import styles from "./MobileScene.module.scss";

/**
 * Three screens of a sample mobile app built from the kit: sign in, project list and settings.
 *
 * @returns The rendered element.
 */
export function MobileScene() {
  return (
    <div id="mobile" className={styles.scene}>
      <LoginScreen />
      <ListScreen />
      <SettingsScreen />
    </div>
  );
}
