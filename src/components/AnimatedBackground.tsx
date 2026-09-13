/**
 * A single soft field of colour behind the hero, drifting slowly. The page used
 * to run three looping blobs; one is enough to give the section depth, and
 * anything more competes with the content for attention.
 */
const AnimatedBackground: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
    <div className="absolute -top-40 left-1/2 h-[46rem] w-[62rem] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[140px] animate-drift" />
    <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-iris/[0.09] blur-[130px]" />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(147,161,184,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(147,161,184,0.045) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 65% 60% at 50% 40%, #000 10%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 65% 60% at 50% 40%, #000 10%, transparent 70%)",
      }}
    />
  </div>
);

export default AnimatedBackground;
