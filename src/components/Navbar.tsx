"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollLock } from "@/hooks/useScrollLock";
import Logo from "@/components/navbar/Logo";
import DesktopNav from "@/components/navbar/DesktopNav";
import MobileNav from "@/components/navbar/MobileNav";

/**
 * Fixed-position navigation bar with glassmorphism styling.
 * Includes desktop inline links and a responsive mobile menu with scroll lock.
 */
export default function Navbar(): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false);

  useScrollLock(mobileOpen);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <DesktopNav links={NAV_LINKS} />
        <MobileNav
          links={NAV_LINKS}
          open={mobileOpen}
          onToggle={() => setMobileOpen(!mobileOpen)}
          onClose={() => setMobileOpen(false)}
        />
      </div>
    </nav>
  );
}
