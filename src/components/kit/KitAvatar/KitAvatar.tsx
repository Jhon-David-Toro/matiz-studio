import { cx } from "@/lib/shared/cx";

import type { KitAvatarGroupProps, KitAvatarProps } from "./KitAvatar.types";
import { avatarTint, initials } from "./KitAvatar.utils";
import styles from "./KitAvatar.module.scss";

/**
 * Sample avatar with the initials of a person and an optional status dot.
 *
 * @param props Props of the component, see {@link KitAvatarProps}.
 * @param props.name Full name; also the accessible name.
 * @param props.size Size of the avatar.
 * @param props.status Presence dot.
 * @returns The rendered element.
 */
export function KitAvatar({ name, size = "md", status }: KitAvatarProps) {
  return (
    <span role="img" aria-label={name} className={cx(styles.avatar, styles[size], styles[avatarTint(name)])}>
      <span aria-hidden="true">{initials(name)}</span>
      {status && <span className={cx(styles.status, styles[status])} />}
    </span>
  );
}

/**
 * Overlapping avatars with a "+N" counter for the rest.
 *
 * @param props Props of the component, see {@link KitAvatarGroupProps}.
 * @param props.names Names of the people.
 * @param props.max How many avatars to draw before the counter.
 * @returns The rendered element.
 */
export function KitAvatarGroup({ names, max = 4 }: KitAvatarGroupProps) {
  const rest = names.length - max;

  return (
    <span className={styles.group}>
      {names.slice(0, max).map((name) => (
        <KitAvatar key={name} name={name} size="sm" />
      ))}
      {rest > 0 && <span className={cx(styles.avatar, styles.sm, styles.more)}>+{rest}</span>}
    </span>
  );
}
