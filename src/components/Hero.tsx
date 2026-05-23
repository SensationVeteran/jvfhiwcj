import GradientText from "@/components/ui/GradientText";
import GlowOrb from "@/components/ui/GlowOrb";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
      {/* Background glow orb */}
      <GlowOrb
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
        gradient="from-violet-600/30 to-indigo-600/30"
        size="w-[600px] h-[600px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          <GradientText>Build products at the speed of thought</GradientText>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Streamline your workflow with a tool designed for modern teams.
          Fast, intuitive, and beautifully crafted for the way you work.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#" variant="primary" size="lg">
            Start Building
          </Button>
          <Button href="#features" variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
