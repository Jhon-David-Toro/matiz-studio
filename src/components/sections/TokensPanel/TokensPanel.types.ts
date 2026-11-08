import type { DesignSystem, SemanticToken } from "@/lib/system/system.types";

export type TokensPanelProps = {
  system: DesignSystem;
  onCopy: (value: string) => void;
};

export type SemanticTableProps = Pick<TokensPanelProps, "system">;

export type TokenSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export type TokenCellProps = {
  token: SemanticToken;
};
