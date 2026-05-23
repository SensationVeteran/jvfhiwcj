import { cn } from "@/lib/cn";

/** Props for the Button component. */
interface ButtonProps {
  /** Button content (text or elements). */
  children: React.ReactNode;
  /** If provided, renders as an anchor link instead of a button. */
  href?: string;
  /** Additional CSS classes for customization. */
  className?: string;
  /** Click handler for button variant. */
  onClick?: () => void;
  /** Visual style variant. */
  variant?: "primary" | "secondary";
  /** Size preset controlling padding and font size. */
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 transition-opacity duration-300",
  secondary:
    "border border-white/20 text-white hover:bg-white/5 transition-all duration-300",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-5 py-2 text-sm",
  lg: "px-8 py-3 text-sm",
};

/**
 * A versatile button component supporting primary/secondary variants and multiple sizes.
 * Renders as an anchor element when `href` is provided, otherwise as a button element.
 */
export default function Button({
  children,
  href,
  className,
  onClick,
  variant = "primary",
  size = "md",
}: ButtonProps): React.ReactElement {
  const baseStyles = "font-medium rounded-full inline-block text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]";
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
