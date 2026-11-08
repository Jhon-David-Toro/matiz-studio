import { Button } from "@/components/ui/Button";
import { Link, Shuffle } from "@/components/ui/Icon";

import { APP_NAME, REMIX_LABEL, SHARE_LABEL, TAGLINE } from "./AppHeader.constants";
import type { AppHeaderProps } from "./AppHeader.types";
import styles from "./AppHeader.module.scss";

/**
 * Top bar: name of the app, its promise, and the Remix and share actions.
 *
 * @param props Props of the component, see {@link AppHeaderProps}.
 * @param props.onRemix Generates a random system.
 * @param props.onShare Copies a link to the current system.
 * @returns The rendered element.
 */
export function AppHeader({ onRemix, onShare }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.mark} aria-hidden="true" />
        <span className={styles.name}>{APP_NAME}</span>
        <span className={styles.tagline}>{TAGLINE}</span>
      </div>
      <div className={styles.actions}>
        <Button variant="secondary" size="small" leadingIcon={Shuffle} onClick={onRemix}>
          {REMIX_LABEL}
        </Button>
        <Button size="small" leadingIcon={Link} onClick={onShare}>
          {SHARE_LABEL}
        </Button>
      </div>
    </header>
  );
}
