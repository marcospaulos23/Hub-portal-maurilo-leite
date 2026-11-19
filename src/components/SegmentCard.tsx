import { ArrowRight } from "lucide-react";
import type { SegmentItem } from "../config/hub";

interface SegmentCardProps {
  segment: SegmentItem;
  onUnconfiguredClick: (segment: SegmentItem) => void;
}

const ACCENT_STYLES: Record<
  SegmentItem["accent"],
  { badge: string; hoverBorder: string; ctaText: string }
> = {
  blue: {
    badge: "bg-sky-500/15 text-sky-300 border-sky-400/25",
    hoverBorder: "hover:border-sky-400/35",
    ctaText: "group-hover:text-sky-300",
  },
  emerald: {
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-400/25",
    hoverBorder: "hover:border-emerald-400/35",
    ctaText: "group-hover:text-emerald-300",
  },
};

export function SegmentCard({
  segment,
  onUnconfiguredClick,
}: SegmentCardProps) {
  const styles = ACCENT_STYLES[segment.accent];

  const cardInner = (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 motion-reduce:transition-none ${styles.hoverBorder} hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/60 motion-reduce:hover:translate-y-0`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <img
          src={segment.imageSrc}
          alt={segment.imageAlt}
          loading="eager"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card via-card/40 to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider uppercase ${styles.badge}`}
          >
            {segment.badge}
          </span>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-[26px]">
            {segment.title}
          </h3>

          <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-400">
            {segment.description}
          </p>
        </div>

        <div className="mt-6 border-t border-white/[0.07] pt-5">
          <p className="mb-3 text-xs font-medium tracking-wide text-zinc-500">
            {segment.meta}
          </p>

          <div className="flex items-center justify-between text-base font-semibold text-white">
            <span className={`transition-colors ${styles.ctaText}`}>
              {segment.ctaLabel}
            </span>
            <ArrowRight
              aria-hidden="true"
              className={`h-5 w-5 text-zinc-300 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 ${styles.ctaText}`}
            />
          </div>
        </div>
      </div>
    </article>
  );

  const sharedClasses =
    "block w-full text-left rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian";

  if (segment.url) {
    return (
      <a href={segment.url} className={sharedClasses}>
        {cardInner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onUnconfiguredClick(segment)}
      className={sharedClasses}
    >
      {cardInner}
    </button>
  );
}
