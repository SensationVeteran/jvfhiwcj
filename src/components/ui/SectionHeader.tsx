import { cn } from "@/lib/cn";

/** Props for the SectionHeader component. */
interface SectionHeaderProps {
  /** The section title displayed as a heading. */
  title: string;
  /** Optional subtitle text rendered below the title. */
  subtitle?: string;
  /** Additional CSS classes for the wrapper element. */
  className?: string;
}

/**
 * A reusable section header with a centered title and optional subtitle.
 * Used to introduce major content sections on the page.
 */
export default function SectionHeader({ title, subtitle, className }: SectionHeaderProps): React.ReactElement {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">{subtitle}</p>
      )}
    </div>
  );
}
