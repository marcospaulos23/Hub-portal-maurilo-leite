# PORTAL HUB — Maurilo Leite (Imóveis & Energia Solar)

Site principal do domínio (ex.: `mauriloleite.com.br`) com apresentação e os **2 cards** direcionando para os subdomínios oficiais:

- **Segmento 01 — Imóveis:** redireciona para `VITE_IMOVEIS_URL` (ex.: `https://imoveis.mauriloleite.com.br`)
- **Segmento 02 — Energia Solar:** redireciona para `VITE_SOLAR_URL` (ex.: `https://solar.mauriloleite.com.br`)

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar no GitHub e na Vercel

1. Suba **somente esta pasta** (`PORTAL-HUB-Maurilo-Leite`) para um repositório novo no GitHub.
2. Importe o repositório na Vercel (framework **Vite**).
3. Em **Settings → Environment Variables** na Vercel, cadastre:
   - `VITE_IMOVEIS_URL` = URL do site de imóveis (ex.: `https://imoveis.mauriloleite.com.br`)
   - `VITE_SOLAR_URL` = URL do site da Cazza Solar (ex.: `https://solar.mauriloleite.com.br`)
   - `VITE_GA_MEASUREMENT_ID` = *(opcional)* ID do Google Analytics 4 (`G-XXXXXXXXXX`)
4. Em **Settings → Domains**, conecte o domínio principal (`mauriloleite.com.br`).
5. Nos outros 2 projetos que **já existem na Vercel** (`Site-corretor-Maurilo-1.5` e `cazzasolaritajaii`), basta adicionar os respectivos subdomínios em **Settings → Domains**.
