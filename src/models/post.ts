export type Post = {
  title: string;
  slug: string;
  creationDate: string;
  category: 'Programming' | 'Lifestyle';
  excerpt: string;
  tags: string[];
  html: string;
  hasAffiliateLink: boolean;
  cover: string;
  readingTime: string;
};
