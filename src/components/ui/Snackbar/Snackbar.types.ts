export type SnackbarProps = {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss: () => void;
  duration?: number;
};

export type UseAutoDismissParams = Pick<SnackbarProps, "message" | "onDismiss"> & {
  duration: number;
};
