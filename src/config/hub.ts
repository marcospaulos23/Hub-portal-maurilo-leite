export interface SegmentItem {
  id: "imoveis" | "solar";
  badge: string;
  title: string;
  description: string;
  meta: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  accent: "blue" | "emerald";
  url: string;
  envVarName: string;
  suggestedSubdomain: string;
}

const cleanUrl = (value?: string): string => (value ? value.trim() : "");

export const HUB_CONFIG = {
  brandName: "MAURILO LEITE",
  brandTagline: "Itajaí e Região · Santa Catarina",
  heroTitle: "Boas oportunidades começam com boas escolhas.",
  heroSubtitle:
    "Conectando você às melhores oportunidades imobiliárias e soluções em energia solar.",
  sectionTitle: "Como posso ajudar você?",
  consultation: {
    title: "Atendimento personalizado",
    subtitle: "Fale diretamente com o seu consultor.",
    ctaLabel: "Conversar no WhatsApp",
    whatsappNumberDisplay: "(47) 99124-3968",
    whatsappUrl:
      "https://wa.me/5547991243968?text=Ol%C3%A1%20Maurilo!%20Vim%20pelo%20seu%20portal%20e%20gostaria%20de%20atendimento.",
    email: "mauriloleite33@gmail.com",
    location: "Itajaí/SC",
  },
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
      meta: "Maurilo Leite Corretor · CRECI SC 74831F",
      ctaLabel: "Ver oportunidades",
      imageSrc: "/images/segmento-imoveis.jpg",
      imageAlt: "Apartamento de alto padrão com vista panorâmica da cidade",
      accent: "blue",
      url: cleanUrl(import.meta.env.VITE_IMOVEIS_URL),
      envVarName: "VITE_IMOVEIS_URL",
      suggestedSubdomain: "https://imoveis.seudominio.com.br",
    },
    {
      id: "solar",
      badge: "SEGMENTO 02",
      title: "Energia Solar",
      description:
        "Conheça soluções para reduzir seus gastos com energia elétrica.",
      meta: "Cazza Solar · Representante Autorizado",
      ctaLabel: "Solicitar orçamento",
      imageSrc: "/images/segmento-solar.png",
      imageAlt: "Residência moderna equipada com painéis de energia solar",
      accent: "emerald",
      url: cleanUrl(import.meta.env.VITE_SOLAR_URL),
      envVarName: "VITE_SOLAR_URL",
      suggestedSubdomain: "https://solar.seudominio.com.br",
    },
  ] satisfies SegmentItem[],
};
