import type { PersonalityKey, Preset, SystemConfig } from "@/lib/system/system.types";

export type ConfigUpdate = (patch: Partial<SystemConfig>) => void;

export type TraitUpdate = (key: PersonalityKey, value: number) => void;

export type ControlsPanelProps = {
  config: SystemConfig;
  onUpdate: ConfigUpdate;
  onTrait: TraitUpdate;
};

export type ControlGroupProps = Pick<ControlsPanelProps, "config" | "onUpdate">;

export type PersonalityControlsProps = Pick<ControlsPanelProps, "config" | "onTrait">;

export type PresetButtonProps = {
  preset: Preset;
  active: boolean;
  onApply: ConfigUpdate;
};
