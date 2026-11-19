import { useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { HUB_CONFIG, type SegmentItem } from "./config/hub";
import { SegmentCard } from "./components/SegmentCard";
import { MenuDrawer } from "./components/MenuDrawer";
import { UnconfiguredUrlModal } from "./components/UnconfiguredUrlModal";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [unconfiguredSegment, setUnconfiguredSegment] =
    useState<SegmentItem | null>(null);

  return (
    <div className="min-h-screen bg-obsidian text-zinc-100">
      {/* Top Hero Card Container — matching dark editorial reference */}
      <header className="border-b border-white/[0.08] bg-charcoal">
        <div className="mx-auto max-w-5xl px-5 pb-12 pt-5 sm:px-8 sm:pb-16 sm:pt-7">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="inline-flex min-h-[44px] items-center text-sm font-bold tracking-[0.14em] text-white uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:text-base"
            >
              {HUB_CONFIG.brandName}
            </a>

            <div className="flex items-center gap-2 sm:gap-5">
              <nav
                aria-label="Navegação rápida"
                className="hidden items-center gap-5 md:flex"
              >
                {HUB_CONFIG.segments.map((segment) =>
                  segment.url ? (
                    <a
                      key={segment.id}
                      href={segment.url}
                      className="inline-flex min-h-[44px] items-center px-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      {segment.title}
                    </a>
                  ) : (
                    <button
                      key={segment.id}
                      type="button"
                      onClick={() => setUnconfiguredSegment(segment)}
                      className="inline-flex min-h-[44px] items-center px-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      {segment.title}
                    </button>
                  )
                )}
                <a
                  href="#atendimento"
                  className="inline-flex min-h-[44px] items-center px-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Atendimento
                </a>
              </nav>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-xl text-zinc-200 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                  <span className="h-[1.5px] w-full rounded-full bg-current" />
                  <span className="h-[1.5px] w-3.5 rounded-full bg-current" />
                </span>
              </button>
            </div>
          </div>

          {/* Editorial Hero Copy */}
          <div className="mt-10 max-w-2xl sm:mt-14">
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-400 uppercase">
              {HUB_CONFIG.brandTagline}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
              {HUB_CONFIG.heroTitle}
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-400 sm:text-lg">
              {HUB_CONFIG.heroSubtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="top" className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <section aria-labelledby="segmentos-heading">
          <h2
            id="segmentos-heading"
            className="text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            {HUB_CONFIG.sectionTitle}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {HUB_CONFIG.segments.map((segment) => (
              <SegmentCard
                key={segment.id}
                segment={segment}
                onUnconfiguredClick={setUnconfiguredSegment}
              />
            ))}
          </div>
        </section>

        {/* Bottom Consultation Banner — matching Image 3 */}
        <section
          id="atendimento"
          aria-labelledby="atendimento-heading"
          className="mt-8 sm:mt-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-consult px-6 py-7 text-center sm:px-8 md:flex-row md:text-left">
            <div>
              <h2
                id="atendimento-heading"
                className="text-lg font-bold text-white sm:text-xl"
              >
                {HUB_CONFIG.consultation.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                {HUB_CONFIG.consultation.subtitle}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={HUB_CONFIG.consultation.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>{HUB_CONFIG.consultation.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${HUB_CONFIG.consultation.email}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <Mail className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                <span>E-mail</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 text-center text-xs text-zinc-500 sm:flex-row sm:px-8 sm:text-left">
          <p>
            © {new Date().getFullYear()} {HUB_CONFIG.brandName} · CRECI SC
            74831F · {HUB_CONFIG.consultation.location}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {HUB_CONFIG.socials.map((social) => (
              <a
                key={social.handle}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {social.handle}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <MenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onUnconfiguredClick={setUnconfiguredSegment}
      />

      <UnconfiguredUrlModal
        segment={unconfiguredSegment}
        onClose={() => setUnconfiguredSegment(null)}
      />
    </div>
  );
}

export default App;
