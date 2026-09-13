import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  skills: string[];
  github?: string;
  live?: string;
}

export interface TimelineItemData {
  title: string;
  period?: string;
  issuer?: string;
  date?: string;
  description: string;
  details?: string[];
  credentialId?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
}

export interface SkillItem {
  name: string;
  icon: IconType;
  /** Set on skills being actively picked up, so the UI can say so honestly. */
  learning?: boolean;
}

export interface FocusArea {
  name: string;
  status: "Learning" | "Refreshing";
  detail: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export type CardVariant = "big" | "wide" | "small";

export interface Accent {
  key: string;
  /** The exact stack this colour stands for, e.g. "Next.js" — shown on cards. */
  label: string;
  text: string;
  hoverText: string;
  border: string;
  tint: string;
  gradient: string;
  dot: string;
}
