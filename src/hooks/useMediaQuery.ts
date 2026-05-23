"use client";

import { useState, useEffect } from "react";

/**
 * A reusable hook for responsive logic that listens to a CSS media query
 * and returns whether it currently matches.
 *
 * @param query - A valid CSS media query string (e.g., "(min-width: 768px)").
 * @returns `true` if the media query matches, `false` otherwise.
 *
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery("(min-width: 768px)");
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handler = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handler);
    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}
