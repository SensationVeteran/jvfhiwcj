import Button from "@/components/ui/Button";
import type { NavLink } from "@/types";

/** Props for the DesktopNav component. */
interface DesktopNavProps {
  /** Array of navigation links to display. */
  links: NavLink[];
}

/**
 * Desktop navigation bar section with inline links and a CTA button.
 * Hidden on mobile viewports via responsive classes.
 */
export default function DesktopNav({ links }: DesktopNavProps): React.ReactElement {
  return (
    <>
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </div>
    </>
  );
}
