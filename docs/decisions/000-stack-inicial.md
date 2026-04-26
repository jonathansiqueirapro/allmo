# ADR 000 — Stack Inicial

**Data:** [INFERIDO] 2025-2026
**Status:** Implementado
**Contexto:** Site institucional da Allmo — consultoria boutique de Privacy Ops

## Decisão

Construir o site como uma **Single Page Application React + Vite** com CSS global vanilla, ao invés de:
- Single-file HTML puro (como especificado no `allmo_context.md`)
- Static Site Generator (Astro, Next.js SSG)
- Framework com CSS-in-JS

## Racional inferido

### Por que React + Vite

1. **Componentização**: 11 seções da homepage mapeadas para 11 componentes React — facilita manutenção de copy e layout por seção
2. **Vite como padrão de mercado**: Setup via `create-vite` (evidência: `App.css` e `index.css` com estilos default do template, `react.svg` e `vite.svg` em `src/assets/`)
3. **TypeScript sem overhead**: TS configurado com `noEmit: true` + `verbatimModuleSyntax` — type-checking sem transpilação adicional
4. **Sem router necessário**: Site de página única com anchor links — React puro é suficiente

### Por que CSS global ao invés de CSS Modules/CSS-in-JS

1. **Performance**: CSS global é um único arquivo cacheável — ideal para site institucional sem páginas dinâmicas
2. **Simplicidade**: 947 linhas em `global.css` vs overhead de configuração de CSS Modules ou styled-components
3. **Fontes locais**: Filson Pro é paga e não está em CDN — @font-face com arquivos locais é a única opção viável

### Por que dual HTML (standalone + React)

[INFERIDO] O `index.html` com ~1200 linhas de HTML+CSS inline parece ser:
- **Opção A**: Versão anterior do site (HTML puro) mantida como fallback
- **Opção B**: Versão para deploy simplificado (sem build step) em ambientes com limitações
- **Opção C**: Protótipo que evoluiu para React mas não foi limpo

A existência de `allmo_context.md` (que especifica "single file .html") sugere que o projeto começou como HTML puro e migrou para React posteriormente.

## Estrutura de dados principal

### Dados estáticos inline

Todo o conteúdo do site está hard-coded como constantes dentro dos componentes:

```
Nav.tsx        → links de navegação (hard-coded)
Hero.tsx       → copy do hero (hard-coded)
Tension.tsx    → dataCards[] (3 items)
Comparison.tsx → comparisonData[] (5 rows)
Proof.tsx      → proofCards[] (3 nichos)
Solutions.tsx  → solutions[] (4 soluções) + AllAudit inline
Methodology.tsx→ pillars[] (5 pilares)
DPS.tsx        → steps[] (5 etapas)
Content.tsx    → contentCards[] (3 artigos)
FinalCTA.tsx   → copy + links (hard-coded)
Footer.tsx     → links e informações (hard-coded)
```

**Implicação**: Qualquer alteração de copy requer deploy de código. Não há CMS, nem arquivo de configuração de conteúdo separado.

### Hook de animação

`useReveal.ts` — único hook customizado:
- Usa `IntersectionObserver` com threshold 0.12 e rootMargin `-40px`
- Retorna `ref` + `isVisible` boolean
- Graceful degradation: se browser não suporta IO, define `isVisible = true` imediatamente

## Integrações externas

### Ativas
- **Google Fonts**: [INFERIDO] Não configurado. Filson Pro é servida localmente via @font-face com arquivos .otf em `/assets/fonts/`
- **Email**: `mailto:contato@allmo.co` no CTA final (link direto, sem serviço de formulário)

### Não implementadas (mas referenciadas)
- **Diagnóstico DPS**: CTAs "Iniciar Diagnóstico" apontam para `#sessao` ou `#diagnostico` — não há formulário ou integração com backend
- **Analytics**: Nenhum script de analytics (GA, Plausible, etc.) detectado
- **Formulário de contato**: Não há formulário — apenas link `mailto:`

## Riscos arquiteturais

1. **Escala de conteúdo**: Se o site crescer para múltiplas páginas (blog, páginas de solução individuais), a arquitetura SPA sem router será insuficiente
2. **Manutenção de dual HTML**: Manter `index.html` standalone e React App sincronizados é insustentável a longo prazo
3. **Performance de fontes**: 18 arquivos .otf de Filson Pro sem subseting ou woff2 conversion impactam LCP
4. **Sem i18n**: Todo copy em português hard-coded — internacionalização futura exigiria refatoração significativa
