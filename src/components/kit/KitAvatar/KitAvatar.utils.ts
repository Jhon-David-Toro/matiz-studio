/**
 * Initials of a name.
 *
 * @param name Full name.
 * @returns Up to two capital letters, e.g. "AM" for "Ana Martínez".
 */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

/**
 * Which of two tints a name gets, so a group of avatars alternates colors deterministically.
 *
 * @param name Full name.
 * @returns `primary` or `accent`.
 */
export function avatarTint(name: string): "primary" | "accent" {
  return [...name].reduce((sum, letter) => sum + letter.charCodeAt(0), 0) % 2 === 0 ? "primary" : "accent";
}
