import { ArrowUpRight, Mail, MapPin, X } from "lucide-react";
import { HUB_CONFIG, type SegmentItem } from "../config/hub";
import { useOverlayBehavior } from "../lib/useOverlayBehavior";
import { SegmentLink } from "./SegmentLink";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  onUnconfiguredClick: (segment: SegmentItem) => void;
}

export function MenuDrawer({
  open,
  onClose,
  onUnconfiguredClick,
}: MenuDrawerProps) {
  useOverlayBehavior(open, onClose);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-sm flex-col justify-between overflow-y-auto border-l border-white/10 bg-charcoal p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-white uppercase">
                {HUB_CONFIG.brandName}
              </p>
              <p className="mt-0.5 text-xs text-zinc-400">
                {HUB_CONFIG.brandTagline}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Segmentos" className="mt-6 space-y-3">
            <p className="px-1 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              Acessar plataformas
            </p>
            {HUB_CONFIG.segments.map((segment) => (
              <SegmentLink
                key={segment.id}
                segment={segment}
                onNavigate={onClose}
                onUnconfiguredClick={onUnconfiguredClick}
                className="flex min-h-[52px] w-full items-center justify-between rounded-xl border border-white/10 bg-card px-4 py-3 text-left transition-colors hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <div>
                  <span className="block text-sm font-semibold text-white">
                    {segment.title}
                  </span>
                  <span className="block text-xs text-zinc-400">
                    {segment.meta}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400" />
              </SegmentLink>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <p className="px-1 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              Contato direto
            </p>
            <a
              href={HUB_CONFIG.consultation.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center gap-3 rounded-xl border border-[#2ED18A]/45 bg-[#2ED18A]/15 px-4 py-3 text-sm font-semibold text-[#7BF1BA] transition-colors hover:bg-[#2ED18A]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ED18A]"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>
                WhatsApp: {HUB_CONFIG.consultation.whatsappNumberDisplay}
              </span>
            </a>
            <a
              href={`mailto:${HUB_CONFIG.consultation.email}`}
              className="flex min-h-[44px] items-center gap-3 rounded-xl px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <Mail className="h-4 w-4 shrink-0 text-zinc-400" />
              <span>{HUB_CONFIG.consultation.email}</span>
            </a>
            <div className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400">
              <MapPin className="h-4 w-4 shrink-0 text-zinc-500" />
              <span>{HUB_CONFIG.consultation.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="mb-2.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Redes sociais
          </p>
          <div className="flex flex-col gap-2">
            {HUB_CONFIG.socials.map((social) => (
              <a
                key={social.handle}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-between rounded-lg px-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <span>{social.label}</span>
                <span className="text-xs text-zinc-400">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
