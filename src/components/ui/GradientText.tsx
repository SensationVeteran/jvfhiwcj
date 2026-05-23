import { cn } from "@/lib/cn";

/** Props for the GradientText component. */
interface GradientTextProps {
  /** Text content to render with the gradient effect. */
  children: React.ReactNode;
  /** Additional CSS classes for customization. */
  className?: string;
}

/**
 * A span that applies a gradient text effect (white to purple to violet).
 * Uses background-clip to render gradient colors on text content.
 */
export default function GradientText({ children, className }: GradientTextProps): React.ReactElement {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-white via-purple-200 to-violet-400 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
