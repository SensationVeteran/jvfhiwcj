import { cn } from "@/lib/cn";

/** Props for the GlowOrb decorative component. */
interface GlowOrbProps {
  /** Additional CSS classes for positioning and visibility. */
  className?: string;
  /** Tailwind gradient classes (e.g., "from-purple-600/20 to-indigo-600/10"). */
  gradient?: string;
  /** Tailwind size classes (e.g., "w-[600px] h-[600px]"). */
  size?: string;
}

/**
 * A decorative animated gradient orb used as a background visual element.
 * Renders as an absolutely-positioned, blurred circle with a pulsing glow animation.
 */
export default function GlowOrb({
  className,
  gradient = "from-purple-600/20 to-indigo-600/10",
  size = "w-[600px] h-[600px]",
}: GlowOrbProps): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute bg-gradient-to-br rounded-full blur-3xl animate-pulse-glow pointer-events-none",
        gradient,
        size,
        className
      )}
    />
  );
}
