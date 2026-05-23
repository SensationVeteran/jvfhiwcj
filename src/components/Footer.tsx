import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";
import Container from "@/components/layout/Container";
import Logo from "@/components/navbar/Logo";
import FooterLinkColumn from "@/components/footer/FooterLinkColumn";
import FooterBottom from "@/components/footer/FooterBottom";

/**
 * Site footer with categorized link columns and legal information.
 * Renders a brand logo, tagline, grouped navigation links, and copyright notice.
 */
export default function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((section) => (
            <FooterLinkColumn
              key={section.category}
              title={section.category}
              links={section.links}
            />
          ))}
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}
