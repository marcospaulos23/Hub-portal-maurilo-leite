# Changelog

## 19/11/2026 — 23:16
- **Menu lateral mobile (`src/components/MenuDrawer.tsx`):** adicionada a logo no topo (`BrandMark`), cards coloridos com ícones para **Imóveis** (`#E5B96F`) e **Energia Solar** (`#2ED18A`), botão de WhatsApp vibrante com contraste escuro e blocos estilizados para e-mail, localização e redes sociais.

## 19/11/2026 — 23:05
- **Animação nas rotas do menu (`src/App.tsx`):** removido o fundo em caixa ao passar o cursor sobre `Imóveis`, `Energia Solar` e `Atendimento`, aplicando animação suave de elevação, destaque de cor e linha inferior expansível.

## 19/11/2026 — 22:37
- **Selo do Hero (`src/App.tsx`):** removida a bolinha verde da frase `ITAJAÍ E REGIÃO · SANTA CATARINA`.

## 19/11/2026 — 22:33
- **Badges do rodapé (`src/App.tsx`):** restaurado o estilo neutro escuro sem cor nos selos `CRECI SC 74831F`, `Cazza Solar · Representante Autorizado` e nos botões do Instagram.

## 19/11/2026 — 22:27
- **Cores mais vivas (`tailwind.config.js`, `src/index.css`, `src/App.tsx`, `SegmentCard.tsx`, `BrandMark.tsx`, `MenuDrawer.tsx`, `UnconfiguredUrlModal.tsx`):** aumentada a saturação e o contraste da paleta com **Dourado/Areia vivo** (`#E5B96F`), **Verde vivo** (`#2ED18A`) e fundo **Grafite profundo** (`#0D1014`).

## 19/11/2026 — 22:22
- **Correção das cores da paleta e ícones (`src/App.tsx`, `SegmentCard.tsx`, `BrandMark.tsx`, `MenuDrawer.tsx`, `UnconfiguredUrlModal.tsx`):** aplicados os valores hexadecimais diretos (`#171A1D`, `#F5F4F0`, `#A5B5A1`, `#B8A58A`) nas classes do Tailwind para carregar imediatamente no Vite dev server sem perder a cor dos ícones, botões e bordas sutis.

## 19/11/2026 — 22:16
- **Nova paleta de cores e tipografia (`index.html`, `tailwind.config.js`, `src/index.css`, `src/App.tsx`, `SegmentCard.tsx`, `BrandMark.tsx`, `MenuDrawer.tsx`, `UnconfiguredUrlModal.tsx`):**
  - Aplicada a paleta **Grafite** (`#171A1D`), **Off-white** (`#F5F4F0`), **Verde sage** (`#A5B5A1`) e **Areia** (`#B8A58A`).
  - Atualizada a tipografia para **Manrope** nos títulos e **Inter** nos textos.

## 19/11/2026 — 22:12
- **Cabeçalho (`src/App.tsx`):** removido o botão `WhatsApp` do topo ao lado do menu de navegação.

## 19/11/2026 — 21:48
- **URLs padrão da Vercel (`src/config/hub.ts`, `.env`, `.env.example`):** configurados os links `https://site-corretor-maurilo-1-5.vercel.app/` (Imóveis) e `https://cazzasolaritajaii.vercel.app/` (Energia Solar) como URLs padrão e variáveis de ambiente.

## 19/11/2026 — 21:44
- **Botões do card de atendimento (`src/App.tsx`):** removido o subcard escuro interno (`bg-black/35`), deixando os botões **Conversar no WhatsApp** e **Enviar e-mail** aplicados diretamente sobre o card principal.

## 19/11/2026 — 21:38
- **Ícone oficial e botão flutuante do WhatsApp (`WhatsAppIcon.tsx`, `FloatingWhatsApp.tsx`, `src/App.tsx`, `MenuDrawer.tsx`, `UnconfiguredUrlModal.tsx`, `src/index.css`):**
  - Criado `WhatsAppIcon` com o ícone oficial do WhatsApp e aplicado nos botões de WhatsApp do topo, card de atendimento, menu, modal e rodapé.
  - Adicionado o botão flutuante `FloatingWhatsApp` no canto inferior direito com ondas animadas.

## 19/11/2026 — 20:17
- **Card final e rodapé (`src/App.tsx`, `src/components/BrandMark.tsx`, `src/config/hub.ts`):**
  - Reformulado o card **Atendimento personalizado** em 2 colunas com destaque serifado, dados de contato (WhatsApp, e-mail e região) e painel de ação sem quebra de linha nos botões.
  - Criado o componente `BrandMark` para reutilizar a logo e o nome `MAURILO LEITE` no cabeçalho e no novo rodapé estruturado com rotas, contatos, redes sociais e botão *Voltar ao topo*.

## 19/11/2026 — 20:10
- **Correção de hover nas imagens (`src/components/SegmentCard.tsx`):** isolada a camada GPU do recorte da imagem (`[transform:translateZ(0)]`), movida a elevação do hover para o wrapper externo e estendida a fusão do gradiente para eliminar a linha/borda subpixel ao passar o cursor.

## 19/11/2026 — 00:53
- **Documentação:** criado o `changelog.md` com o histórico resumido das alterações.

## 19/11/2026 — 00:22
- **Cabeçalho fixo removido (`src/App.tsx`):** retirada a barra superior que acompanhava o scroll, mantendo a logo, o nome `MAURILO LEITE`, os links e o botão de WhatsApp parados no topo da seção inicial.

## 19/11/2026 — 00:18
- **Logo no cabeçalho (`src/App.tsx`):** substituído o monograma `ML` pela logo circular de `public/favicon.png`.

## 19/11/2026 — 00:04
- **Novo layout escuro editorial:**
  - Adicionada a fonte `Cormorant Garamond` junto com `Plus Jakarta Sans` / `Inter` e refinado o fundo com grade sutil (`.editorial-canvas`).
  - Reestruturado o Hero com o bloco **Atuação Integrada** ao lado e aprimorados os cards de **Imóveis** e **Energia Solar** com badge flutuante, destaques e CTA.
  - Extraídos `SegmentLink.tsx` e `useOverlayBehavior.ts` para reutilizar links e fechar menu/modal com `Escape`.
  - Validado com `npm run build` e `scan_projeto.py ./src` (0 problemas).

## 18/11/2026 — 23:55
- **Segurança:** instalado o **Security Guardian Kit** (`.agent/` e `.agents/`) no projeto e executado `scan_projeto.py ./src` sem falhas.

## 18/11/2026 — 23:06
- **GitHub e Vercel:** inicializado o Git na branch `main` (`0f0ad28`), ajustado o `.gitignore` e publicado o repositório `Hub-portal-maurilo-leite` na Vercel com `VITE_IMOVEIS_URL` e `VITE_SOLAR_URL`.

## 18/11/2026 — 21:20–21:51
- **Criação inicial:** estruturado o projeto **PORTAL-HUB-Maurilo-Leite** em React, TypeScript, Tailwind CSS e Vite com os 2 cards de segmento, menu lateral, modal de aviso e suporte opcional ao GA4.
