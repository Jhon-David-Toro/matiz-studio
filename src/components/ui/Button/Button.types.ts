import type { LucideIcon } from "lucide-react";
import type Link from "next/link";
import type { ComponentProps, ComponentPropsWithRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export type ButtonSize = "medium" | "small";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: LucideIcon;
};

export type ButtonAsButtonProps = ButtonBaseProps &
  ComponentPropsWithRef<"button"> & {
    href?: undefined;
  };

export type ButtonAsLinkProps = ButtonBaseProps &
  ComponentProps<typeof Link> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export type ButtonContentProps = Pick<ButtonBaseProps, "leadingIcon"> & {
  size: ButtonSize;
  children: React.ReactNode;
};
