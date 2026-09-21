export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  repoUrl?: string;
  kind?: 'website' | 'arza-mart';
  technologies: string[];
  challenge: string;
  solution: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  years: number;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  url: string;
}

export type ThemeMode = 'light' | 'dark';
