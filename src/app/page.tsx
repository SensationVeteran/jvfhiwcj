import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GlowOrb from "@/components/ui/GlowOrb";

/**
 * Home page assembling all landing page sections.
 * Includes animated background gradient orbs for visual depth.
 */
export default function Home(): React.ReactElement {
  return (
    <div className="min-h-screen text-white relative">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <GlowOrb
          className="top-[-20%] right-[-10%]"
          gradient="from-purple-600/20 to-indigo-600/10"
          size="w-[600px] h-[600px]"
        />
        <GlowOrb
          className="bottom-[-10%] left-[-10%]"
          gradient="from-violet-600/10 to-blue-600/10"
          size="w-[400px] h-[400px]"
        />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
