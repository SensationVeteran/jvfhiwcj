export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-600/30 to-indigo-600/30 rounded-full blur-3xl opacity-30 animate-pulse-glow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-purple-200 to-violet-400 bg-clip-text text-transparent">
          Build products at the speed of thought
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Streamline your workflow with a tool designed for modern teams.
          Fast, intuitive, and beautifully crafted for the way you work.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-300 text-sm"
          >
            Start Building
          </a>
          <a
            href="#features"
            className="border border-white/20 text-white font-medium px-8 py-3 rounded-full hover:bg-white/5 transition-all duration-300 text-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
