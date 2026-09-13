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

export interface Badge {
  label: string;
  color: string;
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
  gradient: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export type CardVariant = "big" | "wide" | "small";

export interface Accent {
  key: string;
  emoji: string;
  text: string;
  hoverText: string;
  border: string;
  tint: string;
  ring: string;
  glow: string;
  gradient: string;
  softGradient: string;
  dot: string;
}
