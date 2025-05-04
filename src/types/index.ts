export interface Project {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  thumbnail: string;
  fullMedia?: string;
  staticImage: string;
  mediaType: 'image' | 'video' | 'gif';
  category: string;
  tags: string[];
  tagsAr: string[];
  technologies?: string[];
  technologiesAr?: string[];
  externalLink?: string;
  aspectRatio?: string;
}