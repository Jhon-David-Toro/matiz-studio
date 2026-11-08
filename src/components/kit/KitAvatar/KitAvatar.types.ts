export type KitAvatarSize = "sm" | "md" | "lg";

export type KitAvatarProps = {
  name: string;
  size?: KitAvatarSize;
  status?: "online" | "away";
};

export type KitAvatarGroupProps = {
  names: string[];
  max?: number;
};
