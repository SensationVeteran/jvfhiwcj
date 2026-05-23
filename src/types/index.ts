/** A navigation link with display label and target URL. */
export interface NavLink {
  /** Display text for the navigation link. */
  label: string;
  /** URL or anchor the link points to. */
  href: string;
}

/** A product feature with an icon, title, and description. */
export interface Feature {
  /** Emoji icon representing the feature. */
  icon: string;
  /** Short title for the feature. */
  title: string;
  /** Longer description of the feature's value. */
  description: string;
}

/** A group of footer links organized under a category heading. */
export interface FooterSection {
  /** Category heading for the link group. */
  category: string;
  /** List of link labels within this category. */
  links: string[];
}

/** Global site configuration values. */
export interface SiteConfig {
  /** The site/brand name. */
  name: string;
  /** Short tagline used in hero and footer. */
  tagline: string;
  /** Longer description used for metadata. */
  description: string;
}
