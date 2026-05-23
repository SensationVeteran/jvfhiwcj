import { cn } from "@/lib/cn";
import { ROUTES } from "@/lib/routes";
import { SITE_CONFIG } from "@/lib/constants";

/** Props for the FooterBottom component. */
interface FooterBottomProps {
  /** Additional CSS classes for the wrapper element. */
  className?: string;
}

/**
 * The bottom section of the footer with copyright notice and legal links.
 * Renders a responsive row with the copyright year and privacy/terms links.
 */
export default function FooterBottom({ className }: FooterBottomProps): React.ReactElement {
  return (
    <div className={cn("mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4", className)}>
      <p className="text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a href={ROUTES.PRIVACY} className="text-gray-500 hover:text-white transition-colors duration-300 text-xs">
          Privacy Policy
        </a>
        <a href={ROUTES.TERMS} className="text-gray-500 hover:text-white transition-colors duration-300 text-xs">
          Terms of Service
        </a>
      </div>
    </div>
  );
}
