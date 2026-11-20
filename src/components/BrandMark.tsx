import { HUB_CONFIG } from "../config/hub";

interface BrandMarkProps {
  href?: string;
  subtitle?: string;
}

/**
 * Displays the official circular favicon crest alongside the Maurilo Leite wordmark.
 */
export function BrandMark({
  href = "#top",
  subtitle = `${HUB_CONFIG.consultation.location} · Portal Oficial`,
}: BrandMarkProps) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-[44px] items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E5B96F]/45 bg-[#0b1320] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-colors group-hover:border-[#E5B96F]"
      >
        <img
          src="/favicon.png"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
      </span>
      <span className="flex flex-col">
        <span className="font-display text-sm font-bold tracking-[0.14em] text-[#F7F6F2] uppercase">
          {HUB_CONFIG.brandName}
        </span>
        <span className="text-[11px] font-medium tracking-wide text-[#E5B96F]">
          {subtitle}
        </span>
      </span>
    </a>
  );
}
