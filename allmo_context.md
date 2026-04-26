# Prompt — Site Final Allmo (HTML/CSS Single-File)

---

## Papel

Você é um design engineer sênior especializado em sites institucionais de alto padrão. Sua missão é construir o HTML/CSS final da homepage da Allmo — uma consultoria de Privacy Ops e governança de dados do Brasil — em um único arquivo `.html` autocontido, production-ready, com estética premium/boutique.

---

## Sobre a Allmo

**Tagline:** Governança além da Lei  
**Posicionamento:** Consultoria boutique de Privacy Ops — não entrega documentos, estrutura operações de privacidade que se sustentam e evoluem.  
**Público:** Comitês de compra B2B de alta complexidade (Diretores de TI, PMOs, DPOs internos, CEOs) em Conselhos Regionais, Institutos de Previdência e Startups de IA.  
**Tom:** Preciso, executivo, sem jargão genérico. Autoridade sem arrogância.

---

## Identidade Visual

### Cores
```
--color-teal:      #1cbab2   /* primária, CTA, destaques */
--color-teal-dark: #18524e   /* fundo escuro, seções de contraste */
--color-ink:       #1a1a1a   /* textos principais */
--color-muted:     #777777   /* textos secundários */
--color-border:    #e8e8e8   /* bordas e divisores */
--color-bg:        #ffffff   /* fundo padrão */
--color-bg-soft:   #f5f5f5   /* fundo alternado */
```

### Tipografia
A fonte oficial da marca é **Filson** (família paga, não disponível em CDN público). Use como substituta **Plus Jakarta Sans** do Google Fonts — é a mais próxima em espírito: geométrica, moderna, com personalidade.

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

**Escala tipográfica:**
- Display: 64px / weight 800 / line-height 1.04
- H2: 42px / weight 700 / line-height 1.1
- H3: 18px / weight 700 / line-height 1.3
- Body: 16px / weight 400 / line-height 1.8
- Eyebrow: 10px / weight 600 / letter-spacing 0.22em / uppercase / color: #bbb

### Estética
- Luxury/refined — muito white space, tipografia dominante
- Bordas finas (1px), sem sombras pesadas, sem gradientes genéricos
- Botões pill (border-radius: 99px)
- Animações sutis: fade-in + translateY(20px) no scroll com Intersection Observer
- Sem ícones, sem emojis, sem ilustrações 3D genéricas

---

## Estrutura da Homepage

### 1. NAV (sticky)
- Logo: texto "allmo" em `font-weight: 800`, cor `#1cbab2` + "governança além da lei" em `font-size: 10px; color: #aaa` abaixo
- Links: Metodologia · Soluções · Diagnóstico · Conteúdo
- CTA: botão pill sólido "Iniciar Diagnóstico"

---

### 2. HERO
**Layout:** 2 colunas — esquerda texto, direita placeholder de imagem (div estilizado com fundo `#e8e8e8` e X em SVG)

**Copy:**
```
[eyebrow] Consultoria de Privacy Ops

[h1] Privacidade estruturada para
     fortalecer o seu negócio.

[body] Transformamos a LGPD em um ativo para as empresas.
       Integramos compliance contínuo, alinhamos autoridade
       técnica e levamos rigor à operação.

[CTA primário]  Iniciar Diagnóstico (DPS)    ← btn-solid teal
[CTA secundário] Sessão Estratégica →         ← btn-outline
```

---

### 3. TENSÃO — Dados de mercado
**Layout:** 2 colunas — esquerda headline grande, direita body + 3 cards de dados

**Copy headline:**
```
Conformidade que sustenta a auditoria existe.
A que evolui com o seu negócio,
essa a maioria não tem.
```

**3 cards de dados:**
```
84%       dos ataques cibernéticos na América Latina têm o Brasil como alvo
R$7,19mi  custo médio por incidente de dados no Brasil (IBM)
72h       prazo legal para comunicar incidente à ANPD
```

---

### 4. DIFERENCIAL — Tabela comparativa
**Layout:** centralizado, tabela full-width

**Copy heading:**
```
[eyebrow] O que nos diferencia

[h2] A conformidade no papel existe.
     A operação, não.
```

**Tabela (5 linhas):**
```
Critério               | Compliance Tradicional                         | Privacy Ops Allmo
Entrega                | Documentos e relatórios                        | Operação estruturada e contínua
Responsável            | DPO isolado apagando incêndios                 | Comissão de Privacidade com consenso executivo
Integração             | Jurídico desconectado do negócio               | Rigor jurídico + agilidade de tecnologia
Resultado              | Conformidade de gaveta                         | Privacidade como ativo estratégico
Medição                | Subjetiva ou ausente                           | Data Protection Score (DPS) — maturidade mensurável
```
Header "Privacy Ops Allmo" recebe destaque com `color: #1cbab2`.

---

### 5. PROVA SOCIAL — Por nicho
**Layout:** 3 cards em grid

**Copy intro (2 colunas):**
```
[h2] Especialistas em Governança de Dados.

[body] A Allmo atua em ambientes onde a complexidade
       regulatória e política exige mais do que documentos.
       Atuamos com sigilo absoluto — a confiança dos nossos
       clientes é inegociável.
```

**3 cards:**
```
[nicho] Institutos de Previdência
Gestão de dados de beneficiários em ambientes com obrigações
públicas, controle externo e auditoria permanente.
Operações com alto volume de dados sensíveis, múltiplos entes
reguladores e exigência de rastreabilidade total.
[badge] Sigilo preservado

[nicho] Conselhos Regionais
Governança de dados de profissionais registrados em autarquias
federais com escopo nacional e pressão regulatória constante.
Ambientes com milhares de titulares ativos e estrutura de
decisão distribuída.
[badge] Sigilo preservado

[nicho] Startups de Inteligência Artificial
Privacidade integrada ao ciclo de desenvolvimento de produtos
que processam dados sensíveis em escala.
Times de inovação que precisam avançar rápido sem comprometer
conformidade regulatória ou a confiança dos usuários.
[badge] Sigilo preservado
```
Badge: pill com borda, `font-size: 9px`, texto em maiúsculas, cor `#bbb`.

---

### 6. SOLUÇÕES — Ambientes de Operação
**Background:** `#f5f5f5`  
**Layout:** heading 2-col, depois 4 cards em grid + 1 card full-width (AllAudit)

**Copy heading:**
```
[eyebrow] Soluções

[h2] Ambientes de Operação.

[body] Cada ambiente foi desenhado para um momento específico
       da jornada de maturidade em privacidade.
```

**4 cards:**
```
Programa de Privacidade
Para organizações que precisam construir a estrutura de governança desde o início.
Estruturamos sua operação de privacidade do zero: mapeamento, processos,
treinamentos e comissão ativa.
→ Conhecer solução

DPO Core
Terceirização da operação diária com suporte direto à Comissão de Privacidade.
Seu DPO operando com presença real. Decisões, consensos e execução integrada.
→ Conhecer solução

DPO for AI Builders
Para times de inovação que lidam com IA e dados sensíveis.
Privacidade by design integrada ao ciclo de produto.
→ Conhecer solução

DPO Consultivo
Retaguarda técnica para PMOs e DPOs internos.
Suporte especializado para quem já tem estrutura mas precisa de profundidade
técnica em decisões críticas.
→ Conhecer solução
```

**Card AllAudit (full-width, destaque):**
```
AllAudit — Para quem precisa provar, não apenas afirmar.
Auditoria integrada de privacidade e cibersegurança para operações que tratam
dados pessoais. Framework proprietário, especialistas integrados, resultado certificado.
→ Conhecer solução
```
Card AllAudit recebe borda esquerda de 3px `#1cbab2` como destaque visual.

---

### 7. METODOLOGIA — Framework de Governança Allmo
**Background:** `#18524e` (teal escuro)  
**Texto:** branco e tons claros

**Copy:**
```
[eyebrow, cor: rgba(255,255,255,.3)] Metodologia

[h2, cor: #fff] Framework de Governança Allmo.
                Cinco pilares. Uma operação que
                mede sua própria evolução.

[body, cor: rgba(255,255,255,.5)]
Nossa metodologia não depende de pessoas específicas —
depende de estrutura. Cada pilar alimenta o próximo,
criando um ciclo de maturidade contínua e mensurável.
```

**5 pilares (grid de 5 colunas):**
```
01 · Diagnóstico      Mapeamento de maturidade, gaps e riscos operacionais.
02 · Estruturação     Políticas, processos e comissão de privacidade ativada.
03 · Integração       Alinhamento jurídico, técnico e executivo em uma operação.
04 · Mensuração       Data Protection Score (DPS) como métrica de evolução contínua.
05 · Evolução         Ciclo contínuo de revisão, adaptação e crescimento de maturidade.
```
Número do pilar: `font-size: 32px; font-weight: 800; color: rgba(255,255,255,.12)`.

---

### 8. DPS — Data Protection Score
**Layout:** centralizado, max-width 680px + steps em linha + CTA

**Copy:**
```
[eyebrow] Diagnóstico executivo

[h2] Data Protection Score (DPS).

[body] O rigor de uma auditoria, condensado em inteligência
       de dados. O DPS entrega um diagnóstico executivo de
       maturidade com clareza para decisão e rota de evolução
       para sua operação.
```

**5 steps em linha (flex, divididos por borda):**
```
01 · Resposta    02 · Análise    03 · Score    04 · Recomendação    05 · Sessão
```

**CTA:** `Iniciar meu Diagnóstico` — botão pill teal grande, centralizado.

---

### 9. CONTEÚDO — Hub de conhecimento
**Background:** `#f5f5f5`  
**Layout:** header com link "Ver todos →" alinhado à direita + 3 cards

**Copy heading:**
```
[eyebrow] Conteúdo

[h2] Pensamento aplicado
     em privacidade e governança.
```

**3 cards (imagem placeholder + tag + título + tempo de leitura):**
```
[tag] LGPD Operacional
O que diferencia uma operação de privacidade de um documento de compliance
Leitura: 5 min

[tag] IA & Privacidade
Privacy by Design para times de inteligência artificial: guia executivo
Leitura: 7 min

[tag] Governança
Como estruturar uma Comissão de Privacidade que gera consenso executivo
Leitura: 6 min
```

---

### 10. CTA FINAL
**Background:** `#1a1a1a` (preto)  
**Layout:** centralizado, max-width 640px

**Copy:**
```
[eyebrow, cor: #555] Sessão estratégica

[h2, cor: #fff] Eleve o padrão da sua governança.

[body, cor: #777]
Uma sessão de 45 minutos com especialistas da Allmo para
mapear o estado real da sua operação de privacidade e
identificar o próximo passo de evolução.

[CTA primário]   Agendar Sessão Estratégica    ← btn branco
[CTA secundário] Iniciar Diagnóstico (DPS)     ← btn outline branco
```

---

### 11. FOOTER
**4 colunas:**
```
Col 1 (2fr): Logo + "Governança além da Lei. Consultoria de Privacy Ops."
             + contato@allmo.co + Campo Grande / MS

Col 2: Soluções
       Programa de Privacidade · DPO Core · DPO for AI Builders
       DPO Consultivo · AllAudit

Col 3: Empresa
       Metodologia · Conteúdo · Sobre · Iniciar Diagnóstico

Col 4: Utilidade pública
       Central do Titular
```
**Bottom bar:** `2026 Allmo — Governança além da Lei` | `Política de Privacidade · Central do Titular`

---

## Requisitos Técnicos

1. **Single file** — tudo em um único `.html` (CSS no `<style>`, JS no `<script>`)
2. **Sem frameworks externos** — apenas Google Fonts CDN e CSS/JS vanilla
3. **Responsivo** — breakpoint em 768px com layout de 1 coluna em mobile
4. **Scroll animations** — Intersection Observer com `opacity: 0 → 1` e `translateY(24px → 0)`, transition `0.6s ease`
5. **Imagens** — todos os placeholders de imagem são `<div>` com `background: #e8e8e8` e X em SVG inline; sem `<img>` com src externo
6. **Acessibilidade** — HTML semântico (`<nav>`, `<main>`, `<section>`, `<footer>`), alt text nos SVGs decorativos como `aria-hidden="true"`
7. **Performance** — sem JavaScript pesado; apenas o Intersection Observer para animações
8. **Fontes** — Plus Jakarta Sans via Google Fonts com `display=swap`

---

## O que NÃO fazer

- Não usar gradientes genéricos (purple→blue etc.)
- Não usar Inter, Roboto ou fontes do sistema
- Não usar ícones de bibliotecas externas (Font Awesome etc.)
- Não usar sombras `box-shadow` pesadas — se usar, máximo `0 2px 12px rgba(0,0,0,.06)`
- Não usar `border-radius` arredondado em cards — cards são retangulares; apenas botões são pill
- Não adicionar seções que não estão no escopo acima
- Não inventar copy — use exatamente o texto especificado

---

## Entregável

Um único arquivo `allmo_homepage.html` completo, funcional e production-ready, fiel às especificações acima.
