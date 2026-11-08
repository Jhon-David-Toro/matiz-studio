export type BadgeTone = "neutral" | "success" | "danger" | "brand";

export type BadgeProps = {
  tone?: BadgeTone;
  children: React.ReactNode;
  className?: string;
};
