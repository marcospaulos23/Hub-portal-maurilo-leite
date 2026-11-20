import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { SegmentItem } from "../config/hub";
import { SegmentLink } from "./SegmentLink";

interface SegmentCardProps {
  segment: SegmentItem;
  onUnconfiguredClick: (segment: SegmentItem) => void;
}

const ACCENT_STYLES: Record<
  SegmentItem["accent"],
  {
    dot: string;
    badgeBorder: string;
    hoverBorder: string;
    hoverShadow: string;
    chipStyle: string;
    ctaBox: string;
    ctaText: string;
    cornerIcon: string;
  }
> = {
  blue: {
    dot: "bg-[#E5B96F] shadow-[0_0_8px_rgba(229,185,111,0.8)]",
    badgeBorder: "border-[#E5B96F]/45 bg-[#0D1014]/80 text-[#F7F6F2]",
    hoverBorder: "hover:border-[#E5B96F]/70",
    hoverShadow: "hover:shadow-[0_24px_60px_-18px_rgba(229,185,111,0.28)]",
    chipStyle: "border-[#E5B96F]/35 bg-[#E5B96F]/15 text-[#F5D79E]",
    ctaBox:
      "border-[#E5B96F]/40 bg-[#E5B96F]/15 text-[#F7F6F2] group-hover:border-[#E5B96F] group-hover:bg-[#E5B96F] group-hover:text-[#0D1014]",
    ctaText: "group-hover:text-[#0D1014]",
    cornerIcon:
      "border-[#E5B96F]/45 text-[#F5D79E] group-hover:border-[#E5B96F] group-hover:bg-[#E5B96F] group-hover:text-[#0D1014]",
  },
  emerald: {
    dot: "bg-[#2ED18A] shadow-[0_0_8px_rgba(46,209,138,0.8)]",
    badgeBorder: "border-[#2ED18A]/45 bg-[#0D1014]/80 text-[#F7F6F2]",
    hoverBorder: "hover:border-[#2ED18A]/70",
    hoverShadow: "hover:shadow-[0_24px_60px_-18px_rgba(46,209,138,0.28)]",
    chipStyle: "border-[#2ED18A]/35 bg-[#2ED18A]/15 text-[#7BF1BA]",
    ctaBox:
      "border-[#2ED18A]/40 bg-[#2ED18A]/15 text-[#F7F6F2] group-hover:border-[#2ED18A] group-hover:bg-[#2ED18A] group-hover:text-[#0D1014]",
    ctaText: "group-hover:text-[#0D1014]",
    cornerIcon:
      "border-[#2ED18A]/45 text-[#7BF1BA] group-hover:border-[#2ED18A] group-hover:bg-[#2ED18A] group-hover:text-[#0D1014]",
  },
};

export function SegmentCard({
  segment,
  onUnconfiguredClick,
}: SegmentCardProps) {
  const styles = ACCENT_STYLES[segment.accent];

  return (
    <SegmentLink
      segment={segment}
      onUnconfiguredClick={onUnconfiguredClick}
      className="group block w-full rounded-[20px] text-left transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1014]"
    >
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/[0.1] bg-[#14181F] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.07)] transition-[border-color,box-shadow] duration-300 motion-reduce:transition-none ${styles.hoverBorder} ${styles.hoverShadow}`}
      >
        <div className="relative isolate aspect-[16/10] w-full overflow-hidden rounded-t-[19px] bg-[#14181F] [transform:translateZ(0)]">
          <img
            src={segment.imageSrc}
            alt={segment.imageAlt}
            loading="eager"
            className="block h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform [backface-visibility:hidden] group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-px -bottom-px top-0 bg-gradient-to-t from-[#14181F] from-5% via-[#14181F]/30 via-35% to-black/25"
          />

          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase backdrop-blur-md ${styles.badgeBorder}`}
            >
              <span
                className={`h-2 w-2 rounded-full ${styles.dot}`}
                aria-hidden="true"
              />
              {segment.badge}
            </span>

            <span
              aria-hidden="true"
              className={`flex h-9 w-9 items-center justify-center rounded-full border bg-[#0D1014]/75 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0 ${styles.cornerIcon}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="relative z-10 -mt-px flex flex-1 flex-col justify-between bg-[#14181F] p-6 sm:p-7">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#F7F6F2] sm:text-[28px]">
              {segment.title}
            </h3>

            <p className="mt-2.5 text-[15px] leading-relaxed text-[#F7F6F2]/75">
              {segment.description}
            </p>

            <ul
              aria-label={`Destaques de ${segment.title}`}
              className="mt-4 flex flex-wrap gap-2"
            >
              {segment.highlights.map((item) => (
                <li
                  key={item}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${styles.chipStyle}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-white/[0.08] pt-5">
            <p className="mb-3.5 text-xs font-medium tracking-wide text-[#F7F6F2]/60">
              {segment.meta}
            </p>

            <div
              className={`flex min-h-[46px] items-center justify-between rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${styles.ctaBox}`}
            >
              <span className={`transition-colors ${styles.ctaText}`}>
                {segment.ctaLabel}
              </span>
              <ArrowRight
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 ${styles.ctaText}`}
              />
            </div>
          </div>
        </div>
      </article>
    </SegmentLink>
  );
}
