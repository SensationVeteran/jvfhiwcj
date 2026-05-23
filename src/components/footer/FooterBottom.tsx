import { SITE_CONFIG } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";

interface FooterBottomProps {
  className?: string;
}

export default function FooterBottom({ className = "" }: FooterBottomProps) {
  return (
    <div className={`mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`.trim()}>
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
