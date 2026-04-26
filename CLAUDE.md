# CLAUDE.md — Allmo

## Stack tecnológico

| Camada | Tecnologia | Versão |
|---|---|---|
| Runtime | Node.js (ESM) | — |
| Framework | React | 19.2 |
| Build | Vite | 8.0 |
| Linguagem | TypeScript | 6.0 |
| Lint | ESLint 9 (flat config) + typescript-eslint | — |
| Fontes | Filson Pro (local, .otf) | — |

**Sem** router, **sem** state manager, **sem** testing framework configurado, **sem** CI/CD.

## Estrutura de pastas

```
allmo/
├── index.html              # Dual-purpose: serve como SPA shell (React) E como fallback HTML standalone
├── src/
│   ├── main.tsx            # Entry point React — renderiza App em StrictMode
│   ├── App.tsx             # Composição linear das 11 seções da homepage
│   ├── App.css             # [INFERIDO] CSS leftover do scaffold Vite — NÃO importado pelo App
│   ├── index.css           # [INFERIDO] CSS leftover do scaffold Vite — NÃO importado pelo App
│   ├── components/         # 11 componentes, um por seção da página
│   │   ├── Nav.tsx         # Sticky nav com logo PNG + links + CTA
│   │   ├── Hero.tsx        # Hero 2-colunas com imagem e CTAs
│   │   ├── Tension.tsx     # Seção de dados de mercado (3 cards)
│   │   ├── Comparison.tsx  # Tabela comparativa Compliance vs Privacy Ops
│   │   ├── Proof.tsx       # 3 cards de nichos (prova social)
│   │   ├── Solutions.tsx   # 4 soluções + AllAudit em grid
│   │   ├── Methodology.tsx # 5 pilares em layout 2-colunas
│   │   ├── DPS.tsx         # Data Protection Score — steps + CTA
│   │   ├── Content.tsx     # Hub de conteúdo com scroll horizontal
│   │   ├── FinalCTA.tsx    # CTA final (sessão estratégica)
│   │   └── Footer.tsx      # Footer 4 colunas
│   ├── hooks/
│   │   └── useReveal.ts    # Custom hook — IntersectionObserver para fade-in no scroll
│   ├── styles/
│   │   └── global.css      # 947 linhas — TODO o CSS do site (fontes, layout, responsivo)
│   └── assets/             # SVGs placeholder do Vite + hero.png
├── public/
│   ├── favicon.svg         # Favicon teal com "a"
│   ├── icons.svg           # Sprite SVG (6 ícones — NÃO usados no código atual)
│   └── assets/             # Cópias de fonts, imagens e logos para build
├── assets/                 # Fonte original (.otf) — referência de marca
│   ├── fonts/              # Filson Pro family completa (9 pesos × 2 = 18 arquivos .otf)
│   ├── imagens/            # 4 PNGs: hero, lgpd, ia-privacidade, governanca
│   └── logos/              # allmo-rgb.png
├── allmo_context.md        # Prompt original com especificação completa do site
├── vite.config.ts          # Config mínima — apenas plugin react
├── tsconfig.json           # Project references (app + node)
├── tsconfig.app.json       # TSX config — noUnusedLocals, verbatimModuleSyntax, bundler mode
├── tsconfig.node.json      # Config para vite.config.ts
└── eslint.config.js        # Flat config — js + tseslint + react-hooks + react-refresh
```

## Padrões de código observados

- **Componentes sem estado**: Todos os 11 componentes são funções puras, sem useState/useEffect (exceto `Content.tsx` que usa useState para scroll buttons e `useReveal` nos demais)
- **Dados inline**: Todo o copy está hard-coded como arrays/objetos dentro dos componentes — sem CMS, sem i18n
- **CSS global monolítico**: `global.css` contém TODOS os estilos (947 linhas), incluindo @font-face, variáveis, layout, responsivo
- **Sem CSS Modules ou CSS-in-JS**: Classes CSS globais nomeadas com BEM-like naming (`.hero-copy`, `.data-card`, `.pillar-item`)
- **Sem TypeScript types**: Nenhum arquivo `.d.ts` ou interface definida — TS usado apenas para type-checking implícito
- **Acentos omitidos no copy**: Textos em português sem acentos nos componentes React (`"navegacao"`, `"solucoes"`, `"diagnostico"`) — [VERIFICAR] se intencional ou bug
- **Dual HTML**: `index.html` contém ~1200 linhas de CSS inline + HTML completo (site standalone funcionando sem React) — [INFERIDO] usado como fallback ou versão alternativa
- **Assets duplicados**: Mesmos arquivos em `assets/` E `public/assets/` — [INFERIDO] `assets/` é fonte, `public/assets/` é cópia para build

## Comandos importantes

```bash
npm run dev       # Vite dev server (localhost:5173)
npm run build     # tsc -b && vite build → output em dist/
npm run lint      # ESLint flat config
npm run preview   # Preview do build production
```

**Sem** script de test, **sem** script de format (Prettier), **sem** script de typecheck isolado (`tsc --noEmit`).

## O que não fazer / Armadilhas

1. **Não editar `index.html` esperando mudar o site React** — O HTML inline é independente do React. Alterar CSS no `<style>` do `index.html` só afeta a versão standalone, não a versão React (que usa `src/styles/global.css`)
2. **Não usar `App.css` ou `index.css`** — São leftovers do scaffold Vite, não importados pelo App
3. **Não adicionar router** — O site é single-page com anchor links (`#solucoes`, `#metodologia`). Adicionar react-router quebraria o scroll behavior
4. **Fontes .otf não são otimizadas para web** — Filson Pro está em `.otf` (18 arquivos). Para production, converter para `.woff2` reduziria ~40% do peso
5. **Assets duplicados** — Modificar imagem em `assets/imagens/` não atualiza `public/assets/imagens/`. Manter sincronizado manualmente ou criar script de sync
6. **Sem testes** — Nenhum framework de teste configurado. Adicionar testes requer decisão de stack (Vitest + RTL recomendado dado Vite)
7. **`icons.svg` não é usado** — Sprite com 6 ícones existe em `public/` mas nenhum componente importa
8. **`types/` directory referenciada mas vazia** — Existe no `src/` mas sem arquivos
