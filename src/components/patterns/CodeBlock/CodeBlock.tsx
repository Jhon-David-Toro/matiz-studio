import type { CodeBlockProps } from "./CodeBlock.types";
import styles from "./CodeBlock.module.scss";

/**
 * Scrollable block of code that keyboard users can focus to scroll.
 *
 * @param props Props of the component, see {@link CodeBlockProps}.
 * @param props.label Accessible name of the block.
 * @param props.code Code to show.
 * @returns The rendered element.
 */
export function CodeBlock({ label, code }: CodeBlockProps) {
  return (
    <pre className={styles.block} tabIndex={0} aria-label={label}>
      <code>{code}</code>
    </pre>
  );
}
