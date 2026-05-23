const features = [
  {
    icon: "\u26A1",
    title: "Lightning Fast",
    description: "Built for speed with optimized performance at every layer. No waiting, no lag, just instant results.",
  },
  {
    icon: "\u2728",
    title: "Beautiful Design",
    description: "Pixel-perfect interfaces crafted with care. Every detail is considered to deliver a premium experience.",
  },
  {
    icon: "\uD83D\uDD17",
    title: "Seamless Integration",
    description: "Connect with the tools you already use. Works with your existing workflow out of the box.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Smart Analytics",
    description: "Real-time insights into your team's performance. Make data-driven decisions with confidence.",
  },
  {
    icon: "\uD83D\uDC65",
    title: "Team Collaboration",
    description: "Built for teams of any size. Real-time updates and shared workspaces keep everyone aligned.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance. Your data is encrypted and protected at all times.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Everything you need
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
          Powerful features designed to help your team move faster and build better products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
