"use client";

import { useEffect } from "react";

/**
 * A reusable hook that locks body scroll when the provided condition is true.
 * Useful for preventing background scrolling when modals or mobile menus are open.
 *
 * @param locked - Whether scroll should be locked.
 *
 * @example
 * ```tsx
 * const [menuOpen, setMenuOpen] = useState(false);
 * useScrollLock(menuOpen);
 * ```
 */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}
