import { useEffect } from "react";
import { MessageCircle, Settings2, X } from "lucide-react";
import { HUB_CONFIG, type SegmentItem } from "../config/hub";

interface UnconfiguredUrlModalProps {
  segment: SegmentItem | null;
  onClose: () => void;
}

export function UnconfiguredUrlModal({
  segment,
  onClose,
}: UnconfiguredUrlModalProps) {
  useEffect(() => {
    if (!segment) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [segment, onClose]);

  if (!segment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-config-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-charcoal p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200">
              <Settings2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                {segment.badge}
              </p>
              <h3
                id="modal-config-title"
                className="text-lg font-bold text-white"
              >
                {segment.title} — Subdomínio pendente
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar aviso"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          O endereço deste card ainda não foi preenchido. Para ativar o
          redirecionamento automático para o subdomínio na Vercel ou no arquivo{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-zinc-100">
            .env
          </code>
          , configure a variável:
        </p>

        <div className="mt-3 rounded-xl border border-white/10 bg-obsidian p-3 text-xs text-zinc-300">
          <code>
            {segment.envVarName}={segment.suggestedSubdomain}
          </code>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={HUB_CONFIG.consultation.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-obsidian transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar no WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
