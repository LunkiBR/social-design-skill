# Pesquisa: estrutura e hierarquia de carrosséis (1080x1350 e 1080x1080) para a Liga IA UFSCar

Data: 2026-10-03. Escopo: regras concretas e numéricas para refazer o post no Figma.

Legenda de confiança: **[F]** = número vindo de fonte citada (seção Fontes). **[H]** = heurística derivada por mim a partir das fontes e das proporções do canvas; é uma recomendação de partida, não um padrão da plataforma. Onde só encontrei blogs de ferramentas (não guias de plataforma), marquei como tal.

Nota: nenhuma fonte primária do Instagram foi encontrada para as zonas seguras; os números de recorte vêm de guias de terceiros que concordam entre si. Valide visualmente no próprio perfil antes de publicar.

---

## 1. Estrutura narrativa

- **Total de slides:** 8 a 10 é o ponto ideal; 6 a 10 é a faixa aceitável (PostNitro, guias de carrossel); LinkedIn: 5 a 15 slides tem melhor engajamento (Postiz/TryMyPost). Instagram permite até 20. [F] Para a Liga: **7 a 9 slides**. [H]
- **Slide 1 (capa/hook):** uma função só, parar o scroll. Máximo **10 palavras** (ideal 6 a 8). Faça uma promessa, uma afirmação ousada ou uma lacuna de curiosidade; use um número quando houver. [F] Ponto focal único: o título. Sem parágrafo de apoio; no máximo 1 linha de subtítulo de até 12 palavras. [H]
- **Slides 2 a N-1 (desenvolvimento):** "um slide, uma mensagem". Máximo **40 palavras por slide**; título de 4 a 7 palavras + corpo de 2 a 3 frases curtas. [F] Meta prática: título ≤ 7 palavras, corpo ≤ 25 palavras, para sobrar respiro. [H]
- **Slide final (CTA):** um único pedido ligado ao valor entregue (salvar, compartilhar, comentar uma palavra, seguir). Nunca dois CTAs. [F] Repetir o título-tese da capa em forma de fechamento aumenta a coerência. [H]
- **Cada slide deve funcionar sozinho** como screenshot (título + 1 ideia). [F]
- **Continuidade visual entre slides:**
  - Mesma grade, mesma paleta, mesma família tipográfica, mesmos raios em todos os slides; mudanças bruscas de cor desorientam. [F]
  - Elementos que cruzam a borda direita do slide (linha, forma, texto cortado) incentivam o arraste. [F] Usar **no máximo 1 elemento** cruzando, sempre fora das margens de texto. [H]
  - Nunca colocar rosto, logo ou palavra importante na emenda entre slides. [F]
  - Numeração "02/08" no rodapé de todos os slides + seta de arraste nos slides 1 a N-1 (some no último). [F] para o conceito; posição e tamanho [H].
  - Se usar canvas contínuo ("seamless"): largura do mestre = 1080 x N, altura 1350. [F]

## 2. Grid e margens (canvas 1080x1350)

- **Recorte da grade do perfil:** desde jan/2025 a grade do perfil recorta miniaturas em 3:4. Um post 4:5 perde uma faixa fina em cada lado, ficando com área central de ~**1012 x 1350 px** (ou seja, ~34 px cortados de cada lado). O corte vem dos lados. [F]
- **Recomendação das fontes:** projetar em 4:5 e manter o conteúdo importante dentro da zona 3:4 central; evitar elementos críticos nos ~10% superior e inferior (~135 px). [F]
- **LinkedIn:** manter o essencial no centro ~880 x 880 com ~80 px de respiro em todos os lados. [F]
- **Margens recomendadas:** lateral **96 px**; topo **96 px**; base **96 px** (inclui o rodapé de numeração). Tudo múltiplo de 8 e fora da faixa de 34 px cortada. [H]
- **Área de conteúdo:** 1080 - 2x96 = **888 px** de largura; altura 1350 - 2x96 = 1158 px.
- **Colunas:** 6 colunas de **128 px** com **gutter 24 px** (6x128 + 5x24 = 888). [H] Títulos ocupam 6 colunas (ou 5, para respirar); corpo ocupa 4 a 5 colunas (~**720 px** de largura máxima) para limitar o comprimento de linha.
- **Baseline grid de 8 px** (alturas de linha em múltiplos de 4 ou 8). Material trabalha com grade de baseline de 4dp e line-height divisível por 4. [F]
- **Âncoras verticais:** cabeçalho/eyebrow no topo (y = 96); título ancorado no topo da zona de conteúdo OU no terço inferior (escolher um e manter em todos os slides de miolo); corpo logo abaixo do título; rodapé (numeração + seta) com baseline em y = 1350 - 96 = 1254. [H]
- **Alinhamento:** esquerdo, rasgado à direita. Centralizar só a capa e o CTA, se o conceito pedir. [H]
- **Para 1080x1080:** mesmas margens laterais de 96 px; topo/base 80 px; escala tipográfica reduzida uma etapa nos títulos de corpo; o recorte 3:4 não se aplica, mas a margem lateral permanece. [H]

## 3. Tipografia

Ratio recomendado: **1.333 (quarta perfeita)** a partir de base 36 px, ajustado para múltiplos de 4. Ratios clássicos: 1.25 (terça maior, mais versátil), 1.333 (quarta perfeita, mais presença em títulos), 1.5 (quinta perfeita, drástico). [F] Para conteúdo curto de feed, a diferença grande entre níveis é desejada.

**Tamanhos mínimos (guias de carrossel):** corpo ≥ 24pt, títulos 36 a 48pt, e 28pt como mínimo seguro em mobile. [F] Em 1080 px de largura, o celular reduz o slide a ~1/3 do tamanho, então os mínimos abaixo são **conservadores**: [H]

| Papel | Tamanho (px) | Line-height (px / razão) | Letter-spacing | Peso | Máx. linhas / chars por linha |
|---|---|---|---|---|---|
| Display (capa) | 120 a 136 | 128 a 144 / 1.05 | -3% | Bold/Extra-bold | 4 / 10 a 16 |
| H1 (título de slide) | 88 | 96 / 1.09 | -2% | Bold | 3 / 14 a 20 |
| H2 | 64 | 72 / 1.12 | -1,5% | Semibold/Bold | 3 / 18 a 24 |
| Subtítulo / lead | 48 | 56 / 1.17 | -1% | Medium | 3 / 24 a 30 |
| Corpo | 36 a 40 | 52 / 1.4 (36) ou 56 / 1.4 (40) | 0 | Regular | 5 / 28 a 40 |
| Legenda / rodapé | 28 | 40 / 1.43 | 0 | Regular/Medium | 2 |
| Eyebrow / rótulo caixa-alta | 28 | 32 / 1.15 | +6% (caixa-alta) | Semibold | 1 |

- **Line-height:** títulos grandes 1.0 a 1.15; corpo 1.4 a 1.5 (piso 1.5 para blocos longos em web; em post curto, 1.4 basta). [F] para a lógica (Refactoring UI), faixas em px [H].
- **Letter-spacing:** negativo em títulos grandes (-1% a -3%), zero no corpo, positivo (+4% a +8%) em texto pequeno em caixa-alta. [H] (prática padrão de display; a busca não retornou fonte dedicada).
- **Comprimento de linha:** corpo 40 a 60 caracteres (Material); em carrossel curto, **28 a 40 caracteres** por linha, porque a leitura é em tela pequena. [F]/[H]
- **Razão entre níveis:** título ≥ 2x o corpo (88/36 = 2.44; 64/36 = 1.78 serve apenas como H2). [H]
- **Famílias e pesos:** máximo **1 família** (ou 2: uma display + uma de texto) e **3 pesos** no post inteiro (ex.: Regular 400, Semibold 600, Bold 700). [H]
- **Alinhar o baseline** de textos em colunas vizinhas na mesma linha da grade de 8 px. [F]
- **Hifenização/viúvas:** sem hífen; sem palavra órfã sozinha na última linha (reescrever ou usar quebra manual). [H]

## 4. Espaçamento e ritmo

**Escala de espaçamento (px):** 8, 16, 24, 32, 48, 64, 96, 128. Todo valor fora da escala exige justificativa; valores arbitrários quebram o ritmo e parecem desleixo. [F] (Refactoring UI sugere base 4 px: 4, 8, 12, 16, 24, 32, 48, 64; aqui escalado para 1080 px.)

| Uso | Valor |
|---|---|
| Eyebrow → título | 16 |
| Título → corpo | 24 |
| Parágrafo → parágrafo | 24 |
| Item de lista → item | 32 |
| Bloco → bloco (grupos distintos) | 64 |
| Ícone → rótulo | 16 a 24 |
| Padding interno de card pequeno | 32 |
| Padding interno de card grande | 40 a 48 |
| Margem do slide | 96 |
| Seção topo → conteúdo principal | 96 a 128 |

- **Proximidade:** o espaço dentro de um grupo é sempre **menor** que o espaço entre grupos (24 vs 64: razão ≥ 2). Um título fica mais perto do conteúdo que ele introduz do que do que vem antes. [F]
- **Escala de raios:** **8 / 16 / 24 / 32 / 48 + pill (50%)**. Material 3 usa 4/8/12/16/28 + full; Material define cards em 12dp médio. [F] A escala acima é a mesma lógica escalada para 1080 px. [H]
- **Raio aninhado (concentricidade):** raio interno = raio externo − padding. Ex.: card r=32, padding 24 → elemento interno r=8; card r=48, padding 32 → interno r=16. Exceção: se o padding > ~24 px (em UI de 1x), trate o filho como superfície separada com raio próprio da escala. [F] Apple HIG/WWDC25 formaliza três tipos: formas fixas, cápsulas (raio = metade da altura) e formas concêntricas (raio = pai − padding). [F]
- **Quando usar cada raio:** 8 a 16 em chips, tags, botões e imagens pequenas; 24 a 32 em cards padrão; 48 em painéis grandes/contêineres de página; pill para tags, indicadores de progresso e botão CTA. [H]
- **Regra de consistência:** no post inteiro, usar **no máximo 3 raios** da escala (ex.: 16, 32, pill). Nunca raios aleatórios (20, 28, 36). [H]
- **Margens iguais:** as quatro margens do cartão/contêiner de página iguais (96); nada colado a menos de 96 do borda exceto sangrias intencionais.
- **Alinhamento óptico:** texto dentro de card com padding igual nos 4 lados; se o título tem caps grandes, compensar ~4 px de topo para equilibrar. [H]

## 5. Cor

- **60-30-10:** 60% cor dominante (fundo), 30% secundária (superfícies/cards/texto), 10% acento (ênfase). A proporção permanece mesmo em modo escuro. [F]
- **Acento só para ênfase:** 1 cor de acento, usada em 1 a 2 palavras do título, 1 ícone-chave, o botão/etiqueta CTA e o número do slide. Nunca como fundo de bloco grande. [H]
- **Contraste (WCAG 2.x AA):** texto normal ≥ **4.5:1**; texto grande (≥ 18pt/24px regular ou 14pt/18.66px negrito) ≥ **3:1**; elementos gráficos e ícones ≥ **3:1** (1.4.11). [F] Para posts, mirar **≥ 4.5:1 em todo texto**, inclusive o secundário (tom cinza) e a legenda; **≥ 7:1 em títulos** quando possível. [H]
- **Fundo escuro:** não usar preto puro; usar cinza muito escuro com leve matiz da marca (faixa #121212 a #1E1E1E como referência do Material). [F] O texto principal em branco-quebrado (~92 a 95% de brilho), não #FFF puro. [H]
- **Elevação por luminosidade (dark):** superfícies mais altas ficam **mais claras**, em degraus de ~4 a 6 pontos de luminosidade (L*) sobre o fundo: fundo → superfície 1 (cards) → superfície 2 (chips/ícones). Material usa sobreposição branca semi-transparente crescente conforme a elevação, e o M3 usa tom de superfície tingido pela cor primária. [F] Sem sombras pesadas; usar 1 borda de 2 px a 8 a 12% de branco quando necessário. [H]
- **Saturação:** cores primárias dessaturadas passam o AA em todas as elevações; cores muito saturadas sobre escuro "vibram" e cansam a vista. [F] Limitar a paleta a: 1 fundo, 2 superfícies, 1 texto primário, 1 texto secundário, 1 acento (+ 1 acento de apoio opcional). Total ≤ 6 a 7 cores no post. [H]
- **Claro vs escuro:** escolher UM modo para o carrossel inteiro; alternar claro/escuro só em slides de destaque (capa e CTA), no máximo 2 slides, com o mesmo acento. [H]

## 6. Ícones

- **Um único estilo:** todos stroke (contorno) OU todos fill; nunca misturar. A espessura de traço é o sinal de consistência mais visível de uma família. [F]
- **Traço proporcional:** em grade de 24 px, 2 px é o padrão (1.5 leve, 2.5 médio, 3 pesado). [F] Proporção ≈ 1/12 do tamanho: ícone de 48 px → traço 4 px; 64 px → ~5 a 6 px; usar o **mesmo traço absoluto** em todos os ícones do post. [H]
- **Tamanho óptico:** ícones pequenos precisam de traço relativamente mais grosso e menos detalhe; não é escala linear (SF Symbols tem 3 escalas ópticas; Polaris usa contêiner 20 com safe space 16). [F] Num post 1080: **glifo 48 px** em contêiner **96 px** (glifo = 50% do contêiner); versão pequena 32 px em contêiner 64. [H]
- **Contêiner:** quadrado com raio da escala (96 px → r=24 ou 32, proporção 25 a 33%) ou círculo/pill; padding interno ≈ 24 px; fundo = superfície 2; ícone na cor de acento OU texto primário. [H]
- **Alinhamento com o texto:** centro do ícone alinhado ao centro da primeira linha do texto (ou da altura de x do título); espaço ícone→texto 16 a 24 px. [H]
- **Quando NÃO usar ícone:** quando só decora (não adiciona significado), quando o texto já diz tudo, quando teria de ser um clip-art genérico (lâmpada, foguete), ou quando há mais de 1 por slide sem papel de lista. Preferir número grande, tipografia ou um diagrama simples. [H] Para IA/ML, preferir diagramas reais (nós, fluxo de dados, matriz) a ícones genéricos de "cérebro/robô".
- **Cor:** ícones herdam a cor do texto ou do acento; nunca multicoloridos. [H]

## 7. Hierarquia

- **Máximo 3 níveis por slide:** (1) título, (2) corpo, (3) apoio (rótulo, número, rodapé). [H]
- **Contraste de tamanho:** nível 1 ≥ 2x o nível 2; nível 3 pode ser menor que o corpo, mas nunca < 28 px. [H]
- **Ferramentas de diferenciação, uma por vez:** tamanho > peso > cor > posição. Se o título já é maior, não adicionar também acento + negrito + sublinhado. [H]
- **Ponto focal único** por slide: o olhar deve ter um primeiro destino óbvio (o título, ou um número gigante, ou uma ilustração) e depois seguir a leitura. [H]
- **Padrões de leitura:** capas e slides com poucos elementos seguem Z (topo-esquerda → topo-direita → diagonal → base-direita: logo/título, seta, CTA); slides de lista seguem F (alinhamento esquerdo e títulos curtos na vertical). [H]
- **Peso visual:** o elemento mais pesado (maior, mais contrastante) fica no topo/esquerda da leitura; o menos pesado (rodapé) ancora a base. [H]

## 8. Erros comuns que fazem um carrossel parecer amador (checável)

1. Parede de texto: > 40 palavras por slide. [F]
2. Capa fraca: > 10 palavras ou sem promessa clara. [F]
3. Mais de uma ideia por slide. [F]
4. Fonte < 28 px em mobile / corpo abaixo de 24pt. [F]
5. Texto encostado nas bordas ou nos 34 px cortados pela grade 3:4. [F]
6. Contraste < 4.5:1, principalmente cinza sobre cinza. [F]
7. Raios aleatórios ou raio interno = raio externo com padding (cantos "grossos"). [F]
8. Espaçamento fora da escala; título tão longe do corpo quanto de outros blocos. [F]
9. Mais de 2 famílias ou > 3 pesos; letter-spacing 0 em títulos grandes. [H]
10. Ícones de estilos mistos, traços diferentes, ou ícone decorativo sem significado. [F]/[H]
11. Cores demais; acento usado em tudo (perde o papel de ênfase). [F]
12. Preto puro #000 com branco puro #FFF e superfícies sem gradação de elevação. [F]
13. Sem numeração/progresso, sem pista de arraste, ou sem CTA no final; dois CTAs. [F]
14. Elemento ou palavra importante sobre a emenda de slides. [F]
15. Slides inconsistentes entre si (grade, margens, alinhamento mudando). [F]
16. Viúvas/órfãs e quebras de linha desiguais. [H]

## 9. Checklist final de QA (aplicar slide a slide)

Para cada slide do canvas 1080x1350:

- [ ] Conteúdo importante dentro de x = 96 a 984 e y = 96 a 1254; nada crítico nos 34 px laterais.
- [ ] Palavras: capa ≤ 10; miolo ≤ 40 (alvo ≤ 32); CTA ≤ 25.
- [ ] 1 ideia / 1 ponto focal; no máximo 3 níveis de hierarquia.
- [ ] Título ≥ 64 px (miolo) ou ≥ 120 px (capa); corpo 36 a 40 px; nada < 28 px.
- [ ] Título ≥ 2x corpo (ou ≥ 1.78x se H2); line-height título 1.05 a 1.15; corpo 1.4 a 1.5.
- [ ] Letter-spacing: ≤ -2% em ≥ 88 px; 0 no corpo.
- [ ] Linhas do corpo com 28 a 40 caracteres; sem viúvas; sem hifenização.
- [ ] Máx. 1 família e 3 pesos em todo o post.
- [ ] Todo espaçamento ∈ {8, 16, 24, 32, 48, 64, 96, 128}; título→corpo = 24; bloco→bloco ≥ 2x o espaço interno.
- [ ] Raios ∈ {8, 16, 24, 32, 48, pill}; no máximo 3 raios distintos no post; aninhados: raio interno = externo − padding.
- [ ] Padding de card igual nos 4 lados (32 a 48 px).
- [ ] Cores: ≤ 7 no total; acento ≤ 10% da área; contraste texto ≥ 4.5:1, ícones/bordas funcionais ≥ 3:1.
- [ ] Fundo não é #000; superfícies mais altas são mais claras (degraus visíveis de 4 a 6 L*).
- [ ] Ícones: um estilo, traço único (ex.: 4 px em 48 px), glifo = 50% do contêiner, centralizado com o texto, só quando adicionam significado.
- [ ] Rodapé: numeração "NN/TT" e seta de arraste (exceto último); mesma posição em todos os slides (baseline y = 1254).
- [ ] Continuidade: mesma grade, margens, paleta, raios; no máximo 1 elemento cruzando a emenda, fora das margens de texto.
- [ ] Último slide: 1 CTA único ligado ao conteúdo (salvar/compartilhar/seguir).
- [ ] Testar a 1/3 de escala (≈ 360 px de largura): título legível, corpo legível, ponto focal claro em 2 segundos.
- [ ] Testar o recorte 3:4 (1012 px centrais): nenhum texto cortado.

Para 1080x1080: mesmas regras com margem lateral 96, vertical 80; reduzir a escala de títulos uma etapa se o texto exceder 3 linhas.

---

## Fontes

- Zonas seguras, 4:5 e recorte 3:4 do perfil (jan/2025): https://www.inro.social/blog/instagram-post-size ; https://socialbu.com/blog/instagram-post-aspect-ratio ; https://growthscribe.com/instagram-vertical-dimensions/ ; https://postsyncer.com/tips/instagram-image-sizes-complete-guide
- Estrutura/hook/CTA/nº de slides/palavras: https://postnitro.ai/blog/post/carousel-design-mistakes ; https://postnitro.ai/blog/post/carousel-copywriting-framework ; https://learnsocialmedia.substack.com/p/carousel-strategy-101-what-works ; https://hristobutchvarov.substack.com/p/carousel-design-that-converts-what ; https://instantdm.com/blog/steal-this-carousel-system-6-rules-for-2m-views
- LinkedIn (1080x1350, tamanhos mínimos, 5 a 15 slides, margem ~80 px): https://postnitro.ai/blog/post/linkedin-carousel-size ; https://www.decktopus.com/blog/linkedin-carousel-size-dimensions ; https://www.trymypost.com/blog/linkedin-document-posts-vs-carousels-strategy-2026
- Carrossel contínuo / pistas de arraste: https://www.blendnow.com/blog/hwo-to-create-seamless-instagram-carousel ; https://www.krumzi.com/blog/seamless-instagram-carousel
- Raio aninhado: https://uxplanet.org/corner-radius-of-nested-elements-in-ui-design-4c27bb24a854 ; https://css-tricks.com/?p=15151 ; https://dev.to/sgbp/the-concentric-border-radius-rule-why-nested-rounded-corners-look-slightly-wrong-3hog ; https://30secondsofcode.org/css/s/nested-border-radius
- Apple, concentricidade (WWDC25 "Get to know the new design system"): https://developer.apple.com/videos/play/wwdc2025/356/ ; https://www.createwithswift.com/exploring-concentricity-in-swiftui/
- Material 3, escala de raios (0/4/8/12/16/28/full): https://github.com/material-components/material-components-android/blob/master/docs/theming/Shape.md ; https://composables.com/jetpack-compose/androidx.compose.material3/material3/classes/Shapes.md
- Material, dark theme (#121212, AA 4.5:1, elevação): https://m2.material.io/design/color/dark-theme
- Material, tipografia (grade de baseline 4dp, 40 a 60 caracteres por linha): https://material.io/design/typography/understanding-typography.html ; https://m2.material.io/develop/web/docs/typography
- Escalas tipográficas (1.25 / 1.333 / 1.5): https://cieden.com/book/sub-atomic/typography/different-type-scale-types ; https://blakecrosley.com/en/blog/typography-systems
- Espaçamento, proximidade, line-height (Refactoring UI e derivados): https://blakecrosley.com/fr/blog/five-spacing-decisions
- WCAG 2.x contraste (1.4.3 e 1.4.11): https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast-contrast.html ; https://ictbaseline.access-board.gov/web-baselines/08Contrast/
- 60-30-10: https://www.freecodecamp.org/news/the-60-30-10-rule-in-design/ ; https://visionaustralia.org/business-consulting/digital-access/Creating-accessible-digital-colour-palettes-60-30-10-design-rule
- Ícones (keylines, traço, tamanho óptico): https://polaris.shopify.com/design/icons/creating-icons ; https://cieden.com/book/sub-atomic/iconography/icon-grids-and-keylines ; https://uxplanet.org/practical-guide-to-icon-design-794baf5624c8
