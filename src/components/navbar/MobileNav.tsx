import type { NavLink } from "@/types";
import Button from "@/components/ui/Button";

interface MobileNavProps {
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function MobileNav({ links, open, onToggle, onClose }: MobileNavProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
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
