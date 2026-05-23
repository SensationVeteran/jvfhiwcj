import type { NavLink, Feature, FooterSection, SiteConfig } from "@/types";
import { ROUTES } from "./routes";

export const SITE_CONFIG: SiteConfig = {
  name: "Linear",
  tagline: "Build products at the speed of thought",
  description:
    "Streamline your workflow with a tool designed for modern teams. Fast, intuitive, and beautifully crafted for the way you work.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: ROUTES.FEATURES },
  { label: "Pricing", href: ROUTES.PRICING },
  { label: "Docs", href: ROUTES.DOCS },
  { label: "Blog", href: ROUTES.BLOG },
];

export const FEATURES: Feature[] = [
  {
    icon: "\u26A1",
    title: "Lightning Fast",
    description:
      "Built for speed with optimized performance at every layer. No waiting, no lag, just instant results.",
  },
  {
    icon: "\u2728",
    title: "Beautiful Design",
    description:
      "Pixel-perfect interfaces crafted with care. Every detail is considered to deliver a premium experience.",
  },
  {
    icon: "\uD83D\uDD17",
    title: "Seamless Integration",
    description:
      "Connect with the tools you already use. Works with your existing workflow out of the box.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Smart Analytics",
    description:
      "Real-time insights into your team's performance. Make data-driven decisions with confidence.",
  },
  {
    icon: "\uD83D\uDC65",
    title: "Team Collaboration",
    description:
      "Built for teams of any size. Real-time updates and shared workspaces keep everyone aligned.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "Enterprise Security",
    description:
      "Bank-grade security with SOC 2 compliance. Your data is encrypted and protected at all times.",
  },
];

export const FOOTER_LINKS: FooterSection[] = [
  {
    category: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  },
  {
    category: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    category: "Resources",
    links: ["Documentation", "API Reference", "Community", "Support", "Status"],
  },
];
