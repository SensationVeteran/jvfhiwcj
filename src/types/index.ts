export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FooterSection {
  category: string;
  links: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
}
