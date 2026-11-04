interface CallSignProps {
  className?: string;
}

const CallSign: React.FC<CallSignProps> = ({ className = "" }) => (
  <span className={`font-display font-semibold tracking-[0.015em] text-accent ${className}`}>
    DarkWizãrd
  </span>
);

export default CallSign;
