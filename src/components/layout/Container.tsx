import { cn } from "@/lib/cn";

/** Props for the Container layout component. */
interface ContainerProps {
  /** Content to render within the constrained width. */
  children: React.ReactNode;
  /** Additional CSS classes for customization. */
  className?: string;
}

/**
 * A max-width container wrapper that centers content with horizontal padding.
 * Provides consistent horizontal spacing across sections.
 */
export default function Container({ children, className }: ContainerProps): React.ReactElement {
  return (
    <div className={cn("max-w-6xl mx-auto px-6", className)}>
      {children}
    </div>
  );
}
