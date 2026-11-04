// Sits at -z-10, so the hero section must keep `isolate` or this paints behind its background.
const AnimatedBackground: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
    <div className="animate-drift absolute -top-56 left-1/2 h-[48rem] w-[68rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]" />
    <div className="animate-drift absolute -left-40 top-40 h-[34rem] w-[34rem] rounded-full bg-iris/[0.18] blur-[120px] [animation-delay:-6s]" />
    <div className="animate-drift absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.12] blur-[120px] [animation-delay:-12s]" />

    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(152,166,190,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(152,166,190,0.075) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 70% 65% at 50% 38%, #000 5%, transparent 72%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 50% 38%, #000 5%, transparent 72%)",
      }}
    />

    {/* Light beam */}
    <div
      className="absolute inset-x-0 top-0 h-[42rem] opacity-60"
      style={{
        background:
          "linear-gradient(105deg, transparent 38%, rgba(143,192,255,0.07) 50%, transparent 62%)",
      }}
    />

    {/* Fade into the page */}
    <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-primary to-transparent" />
  </div>
);

export default AnimatedBackground;
