import { cn } from "@/lib/cn";

/** Props for the Card component. */
interface CardProps {
  /** Content to render inside the card. */
  children: React.ReactNode;
  /** Additional CSS classes for customization. */
  className?: string;
}

/**
 * A glassmorphism-styled card with a subtle border and hover glow effect.
 * Used as a container for feature items and other content blocks.
 */
export default function Card({ children, className }: CardProps): React.ReactElement {
  return (
    <div
      className={cn(
        "bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group",
        className
      )}
    >
      {children}
    </div>
  );
}
