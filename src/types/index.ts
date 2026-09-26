export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  badge?: string;
  features?: string[];
  technologies?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  client?: string;
  year?: string;
  link?: string;
  highlights?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
  iconName: string;
}
