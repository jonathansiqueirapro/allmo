# Status do Projeto — Allmo

**Última análise:** 23 Abr 2026

## Completo

### Site institucional React (homepage)
- [x] 11 componentes implementados correspondendo às 11 seções do `allmo_context.md`
- [x] CSS global completo (947 linhas) com responsivo (breakpoints: 1020px, 768px, 440px)
- [x] Fontes Filson Pro configuradas via @font-face (5 pesos: 300, 400, 500, 700, 800)
- [x] Animações de scroll com `useReveal` hook (IntersectionObserver)
- [x] Acessibilidade básica: skip-link, aria-labels, prefers-reduced-motion
- [x] SEO: meta tags, Open Graph, Twitter Card, JSON-LD no `index.html`
- [x] Favicon SVG configurado
- [x] Build production funcional (`npm run build` → `dist/`)

### Assets de marca
- [x] Filson Pro family completa (18 arquivos .otf)
- [x] Logo RGB (`allmo-rgb.png`)
- [x] 4 imagens PNG (hero, lgpd, ia-privacidade, governanca)

## Em progresso / Incompleto

### Divergências entre `allmo_context.md` e implementação
- [ ] **Hero copy diferente**: O contexto especifica `"Privacidade estruturada para fortalecer o seu negócio."` mas o HTML standalone usa `"Privacidade que opera. Não só que existe."` — [VERIFICAR] qual é o copy correto
- [ ] **Seção Tensão**: Contexto pede layout 2-colunas com headline + 3 cards de dados. Implementação React segue o spec, mas HTML standalone usa copy diferente
- [ ] **Seção Metodologia**: Contexto pede 5 colunas em grid. Implementação usa layout 2-colunas (texto + lista vertical)
- [ ] **Seção Solutions**: Contexto pede 4 cards + AllAudit full-width. Implementação React usa grid 3-colunas com DPO como serviço agrupado
- [ ] **Seção DPS**: Presente no React mas ausente no HTML standalone
- [ ] **Seção Conteúdo**: Presente no React com scroll horizontal + arrow buttons, mas ausente no HTML standalone

### Arquivos sem uso
- [ ] `src/App.css` — CSS leftover do scaffold Vite, não importado
- [ ] `src/index.css` — CSS leftover do scaffold Vite, não importado
- [ ] `src/assets/react.svg` — Não usado
- [ ] `src/assets/vite.svg` — Não usado
- [ ] `public/icons.svg` — Sprite SVG com 6 ícones, nenhum componente referencia
- [ ] `src/types/` — Diretório vazio

### Duplicação de assets
- [ ] Fonts em `assets/fonts/` (18 .otf) E `public/assets/fonts/` (16 .otf) — contagem diferente
- [ ] Imagens em `assets/imagens/` (4 PNGs) E `public/assets/imagens/` (4 PNGs)
- [ ] Logo em `assets/logos/` (allmo-rgb.png + .gitkeep) E `public/assets/logos/` (allmo-rgb.png)

### Problemas de texto
- [ ] **Acentos omitidos**: Todos os textos nos componentes React estão sem acentuação (`"navegacao"`, `"solucoes"`, `"diagnostico"`, `"privacidade"` → `"privacidade"` está correto mas `"Comissao"` deveria ser `"Comissão"`). Isso é sistemático em TODOS os 11 componentes.
- [ ] HTML standalone usa acentos corretamente — inconsistência entre as duas versões

### Funcionalidades ausentes (mencionadas no contexto)
- [ ] **Diagnóstico DPS interativo**: O contexto menciona "Iniciar Diagnóstico" como CTA mas não há formulário ou fluxo de diagnóstico implementado — apenas links para `#sessao`
- [ ] **Página de blog/conteúdo**: Cards de conteúdo são placeholders sem links funcionais
- [ ] **Central do Titular**: Link no footer aponta para `#top` (placeholder)
- [ ] **Política de Privacidade**: Link no footer aponta para `#top` (placeholder)

## Dívidas técnicas visíveis

### Alta prioridade
1. **Dual source of truth**: `index.html` tem ~1200 linhas de HTML+CSS standalone + React SPA. Duas versões do mesmo site mantidas manualmente. Risco alto de divergência (já ocorreu com copy e seções)
2. **Fontes .otf em production**: 18 arquivos .otf de Filson Pro servidos diretamente. Tamanho total estimado >2MB. Deveriam ser convertidos para .woff2 e subsetados
3. **Sem testes**: Zero cobertura. Site institucional sem testes de regressão visual ou unitários
4. **Sem CI/CD**: Sem GitHub Actions, sem deploy automatizado

### Média prioridade
5. **CSS monolítico**: 947 linhas em um único arquivo. Dificulta manutenção e code splitting
6. **Sem TypeScript types**: Nenhum tipo definido para dados dos componentes (proofCards, solutions, pillars, etc.)
7. **Assets duplicados**: Manter `assets/` e `public/assets/` sincronizados manualmente é error-prone
8. **`index.html` com CSS inline**: 916 linhas de CSS no `<style>` do HTML — deveria ser extraído

### Baixa prioridade
9. **`icons.svg` não usado**: 6 ícones sprite sem referência no código
10. **Sem Prettier/formatter**: Sem padronização automática de código
11. **`src/assets/hero.png` vs `public/assets/imagens/hero.png`**: Duas cópias da mesma imagem
12. **Sem sitemap.xml ou robots.txt**: Apenas robots via meta tag
