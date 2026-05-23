import { cn } from "@/lib/cn";

/** Props for the Logo component. */
interface LogoProps {
  /** Additional CSS classes for customization. */
  className?: string;
}

/**
 * The site brand logo rendered as a clickable link.
 * Displays the brand name with a colored accent dot.
 */
export default function Logo({ className }: LogoProps): React.ReactElement {
  return (
    <a
      href="#"
      aria-label="Linear home"
      className={cn(
        "text-xl font-bold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded",
        className
      )}
    >
      Linear<span className="text-purple-400">.</span>
    </a>
  );
}
