import {
  ArrowUpRight,
  Building2,
  Instagram,
  Mail,
  MapPin,
  Sun,
  X,
} from "lucide-react";
import { HUB_CONFIG, type SegmentItem } from "../config/hub";
import { useOverlayBehavior } from "../lib/useOverlayBehavior";
import { BrandMark } from "./BrandMark";
import { SegmentLink } from "./SegmentLink";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  onUnconfiguredClick: (segment: SegmentItem) => void;
}

const DRAWER_ACCENTS: Record<
  SegmentItem["accent"],
  {
    cardBorder: string;
    iconBox: string;
    metaText: string;
    arrowBox: string;
  }
> = {
  blue: {
    cardBorder:
      "border-[#E5B96F]/25 bg-gradient-to-r from-[#E5B96F]/[0.1] via-[#151921] to-[#14181F] hover:border-[#E5B96F]/55",
    iconBox: "border-[#E5B96F]/45 bg-[#E5B96F]/20 text-[#E5B96F]",
    metaText: "text-[#E5B96F]",
    arrowBox:
      "border-[#E5B96F]/35 bg-[#E5B96F]/15 text-[#F5D79E] group-hover:bg-[#E5B96F] group-hover:text-[#0D1014]",
  },
  emerald: {
    cardBorder:
      "border-[#2ED18A]/25 bg-gradient-to-r from-[#2ED18A]/[0.1] via-[#151921] to-[#14181F] hover:border-[#2ED18A]/55",
    iconBox: "border-[#2ED18A]/45 bg-[#2ED18A]/20 text-[#2ED18A]",
    metaText: "text-[#2ED18A]",
    arrowBox:
      "border-[#2ED18A]/35 bg-[#2ED18A]/15 text-[#7BF1BA] group-hover:bg-[#2ED18A] group-hover:text-[#0D1014]",
  },
};

export function MenuDrawer({
  open,
  onClose,
  onUnconfiguredClick,
}: MenuDrawerProps) {
  useOverlayBehavior(open, onClose);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full max-w-sm flex-col justify-between overflow-y-auto border-l border-white/10 bg-gradient-to-b from-[#151A22] via-[#10141A] to-[#0B0E12] p-6 text-[#F7F6F2] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#E5B96F]/12 blur-3xl"
        />

        <div className="relative">
          {/* Header with Logo + Name */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div onClick={onClose}>
              <BrandMark subtitle={HUB_CONFIG.brandTagline} />
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-[#F7F6F2]/80 transition-colors hover:border-[#E5B96F]/45 hover:bg-white/[0.08] hover:text-[#F7F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Platforms */}
          <nav aria-label="Segmentos" className="mt-6 space-y-3">
            <p className="px-1 text-[11px] font-semibold tracking-[0.16em] text-[#E5B96F] uppercase">
              Acessar plataformas
            </p>
            {HUB_CONFIG.segments.map((segment) => {
              const accent = DRAWER_ACCENTS[segment.accent];
              const Icon = segment.id === "imoveis" ? Building2 : Sun;

              return (
                <SegmentLink
                  key={segment.id}
                  segment={segment}
                  onNavigate={onClose}
                  onUnconfiguredClick={onUnconfiguredClick}
                  className={`group flex min-h-[64px] w-full items-center justify-between gap-3 rounded-2xl border p-3.5 text-left shadow-[0_12px_30px_-16px_rgba(0,0,0,0.7)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ${accent.cardBorder}`}
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.iconBox}`}
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="block font-display text-base font-bold text-[#F7F6F2]">
                        {segment.title}
                      </span>
                      <span
                        className={`mt-0.5 block truncate text-xs font-medium ${accent.metaText}`}
                      >
                        {segment.meta}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${accent.arrowBox}`}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </SegmentLink>
              );
            })}
          </nav>

          {/* Direct Contact */}
          <div className="mt-7 space-y-2.5">
            <p className="px-1 text-[11px] font-semibold tracking-[0.16em] text-[#E5B96F] uppercase">
              Contato direto
            </p>

            <a
              href={HUB_CONFIG.consultation.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-between gap-3 rounded-xl bg-[#2ED18A] px-4 py-3 text-sm font-bold text-[#0D1014] shadow-[0_10px_25px_-6px_rgba(46,209,138,0.4)] transition-all hover:bg-[#42df9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ED18A]"
            >
              <span className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#0D1014]" />
                <span>
                  WhatsApp: {HUB_CONFIG.consultation.whatsappNumberDisplay}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[#0D1014]"
                aria-hidden="true"
              />
            </a>

            <a
              href={`mailto:${HUB_CONFIG.consultation.email}`}
              className="flex min-h-[44px] items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5 text-sm text-[#F7F6F2]/85 transition-colors hover:border-[#E5B96F]/40 hover:bg-white/[0.06] hover:text-[#F7F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              <Mail
                className="h-4 w-4 shrink-0 text-[#E5B96F]"
                aria-hidden="true"
              />
              <span className="truncate">{HUB_CONFIG.consultation.email}</span>
            </a>

            <div className="flex min-h-[44px] items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 text-sm text-[#F7F6F2]/75">
              <MapPin
                className="h-4 w-4 shrink-0 text-[#E5B96F]"
                aria-hidden="true"
              />
              <span>{HUB_CONFIG.brandTagline}</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="relative mt-6 border-t border-white/[0.08] pt-5">
          <p className="mb-3 px-1 text-[11px] font-semibold tracking-[0.16em] text-[#E5B96F] uppercase">
            Redes sociais
          </p>
          <div className="flex flex-col gap-2">
            {HUB_CONFIG.socials.map((social) => (
              <a
                key={social.handle}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-sm text-[#F7F6F2]/85 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                <span className="flex items-center gap-2 font-medium">
                  <Instagram
                    className="h-3.5 w-3.5 shrink-0 text-zinc-400"
                    aria-hidden="true"
                  />
                  <span>{social.label}</span>
                </span>
                <span className="text-xs text-zinc-400">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
