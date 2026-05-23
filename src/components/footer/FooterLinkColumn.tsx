import { ROUTES } from "@/lib/routes";

/** Props for the FooterLinkColumn component. */
interface FooterLinkColumnProps {
  /** Category heading displayed above the links. */
  title: string;
  /** Array of link labels rendered as a list. */
  links: string[];
}

/**
 * A single footer link column with a category title and list of links.
 * Used to organize footer navigation into logical groups.
 */
export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps): React.ReactElement {
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
