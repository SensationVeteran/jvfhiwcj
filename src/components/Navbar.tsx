"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/navbar/Logo";
import DesktopNav from "@/components/navbar/DesktopNav";
import MobileNav from "@/components/navbar/MobileNav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
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
