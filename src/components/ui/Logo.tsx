// Twin-J mark: first J follows the text color, second J uses the accent blue.
export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M46 18V68Q46 94 22 94" stroke="currentColor" strokeWidth={13} />
      <path d="M74 102V52Q74 26 98 26" stroke="var(--accent)" strokeWidth={13} />
    </svg>
  );
}

export function Logo({
  size = 28,
  showName = true,
  className = "",
}: {
  size?: number;
  showName?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark size={size} />
      {showName && <span className="font-bold tracking-tight">Jubayer Juhan</span>}
    </span>
  );
}
