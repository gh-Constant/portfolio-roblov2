export interface Media {
  type: 'video' | 'image';
  url?: string;
  thumbnail?: string;
}

export interface Project {
  title: string;
  description: string;
  media: Media;
  tags: string[];
  link: string;
  creator: string;
  projectDate: string;
}

export interface System {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface ContentData {
  projects: Project[];
  systems: System[];
} 