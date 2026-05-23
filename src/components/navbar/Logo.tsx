interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <a
      href="#"
      aria-label="Linear home"
      className={`text-xl font-bold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded ${className}`.trim()}
    >
      Linear<span className="text-purple-400">.</span>
    </a>
  );
}
