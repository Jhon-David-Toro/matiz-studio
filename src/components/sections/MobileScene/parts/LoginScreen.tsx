import { KitButton } from "@/components/kit/KitButton";
import { KitField } from "@/components/kit/KitField";
import { Lock, Mail } from "@/components/ui/Icon";

import { LOGIN, PHONES } from "../MobileScene.constants";
import { Phone } from "./Phone";
import styles from "../MobileScene.module.scss";

/**
 * Sign-in screen of the sample app.
 *
 * @returns The rendered element.
 */
export function LoginScreen() {
  return (
    <Phone label={PHONES.login}>
      <div className={styles.login}>
        <span className={styles.appMark} aria-hidden="true" />
        <div>
          <h4 className={styles.screenTitle}>{LOGIN.title}</h4>
          <p className={styles.muted}>{LOGIN.lead}</p>
        </div>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <KitField label={LOGIN.email} icon={Mail} type="email" defaultValue={LOGIN.emailValue} />
          <KitField label={LOGIN.password} icon={Lock} type="password" defaultValue="contraseña" />
          <a href="#mobile" className={styles.link}>
            {LOGIN.forgot}
          </a>
          <KitButton type="submit" size="lg" fullWidth>
            {LOGIN.submit}
          </KitButton>
        </form>
        <span className={styles.divider}>{LOGIN.or}</span>
        <KitButton variant="secondary" size="lg" fullWidth>
          {LOGIN.google}
        </KitButton>
        <a href="#mobile" className={styles.signUp}>
          {LOGIN.signUp}
        </a>
      </div>
    </Phone>
  );
}
