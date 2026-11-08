import Link from "next/link";

import { Icon } from "@/components/ui/Icon";

import type { ButtonAsButtonProps, ButtonAsLinkProps, ButtonContentProps, ButtonProps } from "./Button.types";
import { buttonClassName } from "./Button.utils";
import styles from "./Button.module.scss";

/**
 * Inner content of a button: optional leading icon and the label.
 *
 * @param props Props of the component, see {@link ButtonContentProps}.
 * @param props.size Size of the button; small buttons use small icons.
 * @param props.leadingIcon Icon before the label.
 * @param props.children Label of the button.
 * @returns The rendered element.
 */
function ButtonContent({ size, leadingIcon, children }: ButtonContentProps) {
  return (
    <>
      {leadingIcon && <Icon icon={leadingIcon} size={size === "small" ? "small" : "medium"} />}
      <span className={styles.label}>{children}</span>
    </>
  );
}

/**
 * The button as a native `<button>` that does not submit unless told to.
 *
 * @param props Props of the component, see {@link ButtonAsButtonProps}.
 * @param props.variant Visual variant.
 * @param props.size Size of the button.
 * @param props.leadingIcon Icon before the label.
 * @param props.type Native button type.
 * @param props.className Extra class name for the root element.
 * @param props.children Label of the button.
 * @param props.rest Remaining properties, forwarded to the `<button>`.
 * @returns The rendered element.
 */
function ButtonElement({ variant = "primary", size = "medium", leadingIcon, type = "button", className, children, ...rest }: ButtonAsButtonProps) {
  return (
    <button {...rest} type={type} className={buttonClassName(variant, size, className)}>
      <ButtonContent size={size} leadingIcon={leadingIcon}>
        {children}
      </ButtonContent>
    </button>
  );
}

/**
 * The button as a Next.js `<Link>`.
 *
 * @param props Props of the component, see {@link ButtonAsLinkProps}.
 * @param props.variant Visual variant.
 * @param props.size Size of the button.
 * @param props.leadingIcon Icon before the label.
 * @param props.className Extra class name for the root element.
 * @param props.children Label of the button.
 * @param props.rest Remaining properties, forwarded to the `<Link>`.
 * @returns The rendered element.
 */
function LinkElement({ variant = "primary", size = "medium", leadingIcon, className, children, ...rest }: ButtonAsLinkProps) {
  return (
    <Link {...rest} className={buttonClassName(variant, size, className)}>
      <ButtonContent size={size} leadingIcon={leadingIcon}>
        {children}
      </ButtonContent>
    </Link>
  );
}

/**
 * Button, or link styled as a button when it has an `href`. Four variants and two sizes.
 *
 * @param props Props of the component, see {@link ButtonProps}.
 * @returns The rendered element.
 */
export function Button(props: ButtonProps) {
  return props.href === undefined ? <ButtonElement {...props} /> : <LinkElement {...props} />;
}
