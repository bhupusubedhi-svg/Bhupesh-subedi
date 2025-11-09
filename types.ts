
import { ReactElement } from 'react';

export type Page = 'home' | 'about' | 'services' | 'resources' | 'contact';

export interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  details: {
    summary: string;
    benefits: string[];
    pricing: string;
  };
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  readTime: number;
  category: string;
}
