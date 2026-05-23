import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";
import type { NavLink } from "@/types";

/** Props for the MobileNav component. */
interface MobileNavProps {
  /** Array of navigation links to display in the mobile menu. */
  links: NavLink[];
  /** Whether the mobile menu is currently open. */
  open: boolean;
  /** Callback to toggle the menu open/closed. */
  onToggle: () => void;
  /** Callback to close the menu (e.g., after link click). */
  onClose: () => void;
}

/**
 * Mobile navigation menu with a hamburger toggle button and expandable link panel.
 * Hidden on desktop viewports. Supports keyboard dismiss via parent Escape handler.
 */
export default function MobileNav({ links, open, onToggle, onClose }: MobileNavProps): React.ReactElement {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={cn(
          "md:hidden transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded",
          open ? "text-white" : "text-gray-400 hover:text-white"
        )}
        onClick={onToggle}
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Panel */}
      {open && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl absolute top-full left-0 right-0"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="md" className="w-fit">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
