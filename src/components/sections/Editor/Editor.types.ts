import type { PersonalityKey, SystemConfig } from "@/lib/system/system.types";

export type SystemConfigState = {
  config: SystemConfig;
  update: (patch: Partial<SystemConfig>) => void;
  setTrait: (key: PersonalityKey, value: number) => void;
  remix: () => void;
};

export type NoticeState = {
  message?: string;
  notify: (message: string) => void;
  dismiss: () => void;
};
