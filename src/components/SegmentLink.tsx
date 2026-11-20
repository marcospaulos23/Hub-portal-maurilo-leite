import type { ReactNode } from "react";
import type { SegmentItem } from "../config/hub";

interface SegmentLinkProps {
  segment: SegmentItem;
  onUnconfiguredClick: (segment: SegmentItem) => void;
  onNavigate?: () => void;
  className?: string;
  children: ReactNode;
}

/**
 * Renders an anchor when the segment URL is configured, or a button
 * triggering the pending-subdomain dialog when unconfigured.
 */
export function SegmentLink({
  segment,
  onUnconfiguredClick,
  onNavigate,
  className,
  children,
}: SegmentLinkProps) {
  if (segment.url) {
    return (
      <a href={segment.url} onClick={onNavigate} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        onNavigate?.();
        onUnconfiguredClick(segment);
      }}
      className={className}
    >
      {children}
    </button>
  );
}
