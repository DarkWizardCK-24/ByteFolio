interface CallSignProps {
  className?: string;
}

/**
 * The development call sign. It is a name, not decoration, so it gets one fixed
 * treatment — display face, accent colour, slight tracking — and appears in the
 * three places a brand belongs: the masthead, the hero, and the footer. Keeping
 * it in one component is what stops those three drifting apart.
 */
const CallSign: React.FC<CallSignProps> = ({ className = "" }) => (
  <span className={`font-display font-semibold tracking-[0.015em] text-accent ${className}`}>
    DarkWizãrd
  </span>
);

export default CallSign;
