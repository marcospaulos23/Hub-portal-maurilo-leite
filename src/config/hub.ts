export interface SegmentItem {
  id: "imoveis" | "solar";
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  meta: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  accent: "blue" | "emerald";
  url: string;
  envVarName: string;
  suggestedSubdomain: string;
}

const cleanUrl = (value?: string, fallback = ""): string => {
  const trimmed = value ? value.trim() : "";
  return trimmed || fallback;
};

export const HUB_CONFIG = {
  brandName: "MAURILO LEITE",
  brandTagline: "Itajaí e Região · Santa Catarina",
  heroTitleStart: "Boas oportunidades começam com",
  heroTitleAccent: "boas escolhas.",
  heroSubtitle:
    "Conectando você às melhores oportunidades imobiliárias e soluções em energia solar.",
  sectionTitle: "Como posso ajudar você?",
  sectionSubtitle: "Escolha uma das áreas abaixo para acessar o portal completo.",
  consultation: {
    badge: "Atendimento direto",
    titleStart: "Atendimento",
    titleAccent: "personalizado.",
    title: "Atendimento personalizado",
    subtitle:
      "Fale diretamente com o seu consultor para tirar dúvidas sobre imóveis ou solicitar um estudo de energia solar.",
    channelLabel: "Canal preferencial",
    channelHint: "Resposta rápida em horário comercial",
    ctaLabel: "Conversar no WhatsApp",
    whatsappNumberDisplay: "(47) 99124-3968",
    whatsappUrl:
      "https://wa.me/5547991243968?text=Ol%C3%A1%20Maurilo!%20Vim%20pelo%20seu%20portal%20e%20gostaria%20de%20atendimento.",
    email: "mauriloleite33@gmail.com",
    location: "Itajaí/SC",
  },
  footerDescription:
    "Portal oficial reunindo consultoria imobiliária e soluções em energia solar para você decidir com segurança.",
  socials: [
    {
      label: "Instagram Imóveis",
      handle: "@mauriloleite.corretor",
      url: "https://www.instagram.com/mauriloleite.corretor",
    },
    {
      label: "Instagram Cazza Solar",
      handle: "@cazzasolaritajai",
      url: "https://www.instagram.com/cazzasolaritajai",
    },
  ],
  segments: [
    {
      id: "imoveis",
      badge: "SEGMENTO 01",
      title: "Imóveis",
      description: "Encontre casas, apartamentos e terrenos disponíveis.",
      highlights: ["Catálogo selecionado", "Consultoria direta"],
      meta: "Maurilo Leite Corretor · CRECI SC 74831F",
      ctaLabel: "Ver oportunidades",
      imageSrc: "/images/segmento-imoveis.jpg",
      imageAlt: "Apartamento de alto padrão com vista panorâmica da cidade",
      accent: "blue",
      url: cleanUrl(
        import.meta.env.VITE_IMOVEIS_URL,
        "https://site-corretor-maurilo-1-5.vercel.app/"
      ),
      envVarName: "VITE_IMOVEIS_URL",
      suggestedSubdomain: "https://imoveis.seudominio.com.br",
    },
    {
      id: "solar",
      badge: "SEGMENTO 02",
      title: "Energia Solar",
      description:
        "Conheça soluções para reduzir seus gastos com energia elétrica.",
      highlights: ["Projetos sob medida", "Economia na fatura"],
      meta: "Cazza Solar · Representante Autorizado",
      ctaLabel: "Solicitar orçamento",
      imageSrc: "/images/segmento-solar.png",
      imageAlt: "Residência moderna equipada com painéis de energia solar",
      accent: "emerald",
      url: cleanUrl(
        import.meta.env.VITE_SOLAR_URL,
        "https://cazzasolaritajaii.vercel.app/"
      ),
      envVarName: "VITE_SOLAR_URL",
      suggestedSubdomain: "https://solar.seudominio.com.br",
    },
  ] satisfies SegmentItem[],
};
