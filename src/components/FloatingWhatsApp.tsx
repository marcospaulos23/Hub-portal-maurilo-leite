import { HUB_CONFIG } from "../config/hub";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Floating WhatsApp action button anchored at the bottom-right corner.
 */
export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center justify-center sm:bottom-7 sm:right-7">
      <span aria-hidden="true" className="whatsapp-wave motion-reduce:hidden" />
      <span
        aria-hidden="true"
        className="whatsapp-wave whatsapp-wave-2 motion-reduce:hidden"
      />

      <a
        href={HUB_CONFIG.consultation.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian motion-reduce:transition-none sm:h-16 sm:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}
