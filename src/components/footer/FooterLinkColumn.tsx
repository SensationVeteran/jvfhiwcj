import { ROUTES } from "@/lib/routes";

interface FooterLinkColumnProps {
  title: string;
  links: string[];
}

export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h4 className="text-white font-medium text-sm mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
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
  );
}
