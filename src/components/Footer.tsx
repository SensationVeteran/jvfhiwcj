import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold text-white tracking-tight mb-4">
              {SITE_CONFIG.name}<span className="text-purple-400">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.category}>
              <h4 className="text-white font-medium text-sm mb-4">{section.category}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={ROUTES.HOME}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
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
      </div>
    </footer>
  );
}
