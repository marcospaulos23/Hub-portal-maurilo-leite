import { useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Building2,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sun,
} from "lucide-react";
import { HUB_CONFIG, type SegmentItem } from "./config/hub";
import { BrandMark } from "./components/BrandMark";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { SegmentCard } from "./components/SegmentCard";
import { SegmentLink } from "./components/SegmentLink";
import { MenuDrawer } from "./components/MenuDrawer";
import { UnconfiguredUrlModal } from "./components/UnconfiguredUrlModal";
import { WhatsAppIcon } from "./components/WhatsAppIcon";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [unconfiguredSegment, setUnconfiguredSegment] =
    useState<SegmentItem | null>(null);

  return (
    <div
      id="top"
      className="editorial-canvas min-h-screen bg-[#0D1014] text-[#F7F6F2]"
    >
      {/* Stationary Top Header integrated into Hero Canvas */}
      <header>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 pb-2 pt-5 sm:px-8 sm:pt-7">
          <BrandMark />

          <div className="flex items-center gap-2 sm:gap-4">
            <nav
              aria-label="Navegação rápida"
              className="hidden items-center gap-6 md:flex"
            >
              {HUB_CONFIG.segments.map((segment) => (
                <SegmentLink
                  key={segment.id}
                  segment={segment}
                  onUnconfiguredClick={setUnconfiguredSegment}
                  className="relative inline-flex min-h-[44px] items-center py-2 text-sm font-medium text-[#F7F6F2]/75 transition-all duration-300 after:absolute after:inset-x-0 after:bottom-2 after:h-[1.5px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#E5B96F] after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:text-[#E5B96F] hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75 motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:hover:translate-y-0"
                >
                  {segment.title}
                </SegmentLink>
              ))}
              <a
                href="#atendimento"
                className="relative inline-flex min-h-[44px] items-center py-2 text-sm font-medium text-[#F7F6F2]/75 transition-all duration-300 after:absolute after:inset-x-0 after:bottom-2 after:h-[1.5px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#E5B96F] after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:text-[#E5B96F] hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75 motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:hover:translate-y-0"
              >
                Atendimento
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#F7F6F2] transition-colors hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75 md:hidden"
            >
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span className="h-[1.5px] w-full rounded-full bg-current" />
                <span className="h-[1.5px] w-3.5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Editorial Hero */}
        <section
          aria-labelledby="hero-heading"
          className="mx-auto max-w-6xl px-5 pb-8 pt-7 sm:px-8 sm:pb-10 sm:pt-10"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center rounded-full border border-[#E5B96F]/45 bg-[#E5B96F]/15 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#F5D79E] uppercase">
                <span>{HUB_CONFIG.brandTagline}</span>
              </div>

              <h1
                id="hero-heading"
                className="mt-5 font-display text-[34px] font-bold leading-[1.1] tracking-[-0.025em] text-[#F7F6F2] sm:text-5xl lg:text-[52px]"
              >
                {HUB_CONFIG.heroTitleStart}{" "}
                <span className="text-[#E5B96F]">
                  {HUB_CONFIG.heroTitleAccent}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#F7F6F2]/75 sm:text-lg">
                {HUB_CONFIG.heroSubtitle}
              </p>
            </div>

            {/* Authority / Portal Summary Card */}
            <aside aria-label="Áreas de atuação" className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-[#151920]/95 p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.75),inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[#E5B96F] uppercase">
                    Atuação Integrada
                  </span>
                  <span className="text-xs font-medium text-[#F7F6F2]/60">
                    {HUB_CONFIG.consultation.location}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E5B96F]/45 bg-[#E5B96F]/20 text-[#E5B96F]">
                      <Building2 className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#F7F6F2]">
                        Consultoria Imobiliária
                      </p>
                      <p className="truncate text-xs font-medium text-[#E5B96F]">
                        CRECI SC 74831F
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#2ED18A]/45 bg-[#2ED18A]/20 text-[#2ED18A]">
                      <Sun className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#F7F6F2]">
                        Energia Solar
                      </p>
                      <p className="truncate text-xs font-medium text-[#2ED18A]">
                        Cazza Solar · Representante Autorizado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Segment Cards */}
        <section
          aria-labelledby="segmentos-heading"
          className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 sm:pb-16"
        >
          <div className="border-t border-white/[0.08] pt-8 sm:pt-10">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="segmentos-heading"
                className="font-display text-xl font-bold tracking-tight text-[#F7F6F2] sm:text-2xl"
              >
                {HUB_CONFIG.sectionTitle}
              </h2>
              <p className="text-sm font-medium text-[#E5B96F]">
                {HUB_CONFIG.sectionSubtitle}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {HUB_CONFIG.segments.map((segment) => (
                <SegmentCard
                  key={segment.id}
                  segment={segment}
                  onUnconfiguredClick={setUnconfiguredSegment}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Direct Consultation Card */}
        <section
          id="atendimento"
          aria-labelledby="atendimento-heading"
          className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20"
        >
          <div className="relative overflow-hidden rounded-[22px] border border-[#E5B96F]/30 bg-gradient-to-br from-[#191F28] via-[#14181F] to-[#0E1116] p-6 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2ED18A]/18 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#E5B96F]/15 blur-3xl"
            />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2ED18A]/45 bg-[#2ED18A]/15 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#7BF1BA] uppercase">
                  <span
                    className="h-2 w-2 rounded-full bg-[#2ED18A] shadow-[0_0_8px_rgba(46,209,138,0.85)]"
                    aria-hidden="true"
                  />
                  <span>{HUB_CONFIG.consultation.badge}</span>
                </div>

                <h2
                  id="atendimento-heading"
                  className="mt-4 font-display text-2xl font-bold tracking-tight text-[#F7F6F2] sm:text-3xl"
                >
                  {HUB_CONFIG.consultation.titleStart}{" "}
                  <span className="text-[#E5B96F]">
                    {HUB_CONFIG.consultation.titleAccent}
                  </span>
                </h2>

                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#F7F6F2]/75 sm:text-[15px]">
                  {HUB_CONFIG.consultation.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-white/[0.08] pt-5 text-xs text-[#F7F6F2]/90 sm:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <Phone
                      className="h-4 w-4 shrink-0 text-[#2ED18A]"
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap">
                      {HUB_CONFIG.consultation.whatsappNumberDisplay}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Mail
                      className="h-4 w-4 shrink-0 text-[#E5B96F]"
                      aria-hidden="true"
                    />
                    <span>{HUB_CONFIG.consultation.email}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-[#F7F6F2]/80">
                    <MapPin
                      className="h-4 w-4 shrink-0 text-[#E5B96F]"
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap">
                      {HUB_CONFIG.brandTagline}
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-5">
                <a
                  href={HUB_CONFIG.consultation.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-[#2ED18A] px-5 py-3 text-sm font-bold text-[#0D1014] shadow-[0_12px_30px_-8px_rgba(46,209,138,0.45)] transition-all hover:bg-[#42df9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ED18A]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#0D1014]" />
                  <span>{HUB_CONFIG.consultation.ctaLabel}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-[#0D1014]"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={`mailto:${HUB_CONFIG.consultation.email}`}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#E5B96F]/45 bg-[#E5B96F]/15 px-5 py-2.5 text-sm font-semibold text-[#F7F6F2] transition-colors hover:border-[#E5B96F] hover:bg-[#E5B96F]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B96F]"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-[#E5B96F]"
                    aria-hidden="true"
                  />
                  <span>Enviar e-mail</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Structured Editorial Footer */}
      <footer className="border-t border-white/[0.08] bg-[#0A0C0F]">
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-10 md:grid-cols-12">
            {/* Brand & Credentials */}
            <div className="md:col-span-5">
              <BrandMark />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F7F6F2]/70">
                {HUB_CONFIG.footerDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300">
                  CRECI SC 74831F
                </span>
                <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300">
                  Cazza Solar · Representante Autorizado
                </span>
              </div>
            </div>

            {/* Routes */}
            <nav aria-label="Rotas do portal" className="md:col-span-3">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#E5B96F] uppercase">
                Navegação
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <a
                    href="#top"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm text-[#F7F6F2]/80 transition-colors hover:text-[#F7F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    <span>Início</span>
                  </a>
                </li>
                {HUB_CONFIG.segments.map((segment) => (
                  <li key={segment.id}>
                    <SegmentLink
                      segment={segment}
                      onUnconfiguredClick={setUnconfiguredSegment}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm text-[#F7F6F2]/80 transition-colors hover:text-[#F7F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    >
                      <span>{segment.title}</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-[#E5B96F]"
                        aria-hidden="true"
                      />
                    </SegmentLink>
                  </li>
                ))}
                <li>
                  <a
                    href="#atendimento"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm text-[#F7F6F2]/80 transition-colors hover:text-[#F7F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    <span>Atendimento</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact & Social */}
            <div className="md:col-span-4">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#E5B96F] uppercase">
                Contato e Redes
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <a
                    href={HUB_CONFIG.consultation.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2.5 text-sm text-[#F7F6F2]/85 transition-colors hover:text-[#2ED18A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ED18A]"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#2ED18A]" />
                    <span>
                      WhatsApp: {HUB_CONFIG.consultation.whatsappNumberDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${HUB_CONFIG.consultation.email}`}
                    className="inline-flex min-h-[44px] items-center gap-2.5 text-sm text-[#F7F6F2]/85 transition-colors hover:text-[#E5B96F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    <Mail
                      className="h-4 w-4 shrink-0 text-[#E5B96F]"
                      aria-hidden="true"
                    />
                    <span>{HUB_CONFIG.consultation.email}</span>
                  </a>
                </li>
                <li className="inline-flex min-h-[44px] items-center gap-2.5 text-sm text-[#F7F6F2]/75">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-[#E5B96F]"
                    aria-hidden="true"
                  />
                  <span>{HUB_CONFIG.brandTagline}</span>
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {HUB_CONFIG.socials.map((social) => (
                  <a
                    key={social.handle}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 text-xs font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    <Instagram
                      className="h-3.5 w-3.5 text-zinc-400"
                      aria-hidden="true"
                    />
                    <span>{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-[#F7F6F2]/55 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} {HUB_CONFIG.brandName}. Todos os
              direitos reservados.
            </p>
            <a
              href="#top"
              className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-[#E5B96F] transition-colors hover:text-[#F7F6F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
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

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
