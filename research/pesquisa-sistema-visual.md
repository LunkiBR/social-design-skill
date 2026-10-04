# Pesquisa: sistema visual para posts da Liga de IA da UFSCar (carrossel 4:5, stories 9:16, post único, capa de reels)

Data: 2026-10-04. Estende `pesquisa-carrossel.md` (não repete: margens 96, grade 6x128/24, escala 8/16/24/32/48/64/96, tipografia 88/40/32/28, raios 32 e pill, paleta navy/branco/#eaeffc/Powder/muted, ícone 48 em círculo 96, 3 níveis, rodapé "NN / TT", CTA único). Tudo em px no canvas indicado. Nome da organização nos textos de exemplo: "Liga de IA da UFSCar" (nunca "LIA").

Legenda: **[F]** = número ou regra vinda de fonte consultada (URLs no fim). **[H]** = heurística minha, derivada de [F] e de cálculo sobre o canvas. **[C]** = cálculo reproduzível (contraste WCAG, escala do celular), feito nesta sessão.

## 0. Limites desta pesquisa (leia antes de implementar)

1. **O Instagram/Meta não publica safe zone de Stories orgânicos.** A página oficial da Meta ("Sobre sobreposições de texto e zona de segurança para anúncios no Stories e no Reels", `facebook.com/business/help/980593475366490`) existe e o título foi confirmado, mas o corpo não foi extraído pela ferramenta; os percentuais 14% / 35% / 6% vêm de guias que a citam (adsuploader, houseofmarketers, 1clickreport). A página oficial do sticker de link (`facebook.com/help/instagram/192168966243613`) foi lida: diz "deixe cerca de 14% do topo e 20% da base livres de texto, logos ou elementos importantes" para anúncios em Stories [F]. Os números 250/340 px circulam como padrão de mercado, também sem fonte primária. Trate os valores como conservadores e valide visualmente no próprio perfil.
2. **Análise de marcas (Morning Brew, The Rundown AI, Superhuman, Visual Capitalist, Nexo, Economist, Ben's Bites): não encontrei fonte pública verificável sobre os sistemas visuais deles em carrossel.** As buscas devolveram guias genéricos. Do Economist há duas fontes úteis (Stories com dados e princípios de gráfico). O restante desta pesquisa usa essas fontes mais guias de carrossel e **não atribui nenhuma regra a essas marcas**. Para benchmark visual, recomendo o responsável abrir os perfis e conferir as regras abaixo contra 10 posts de cada.
3. Resultados de blogs de ferramentas (PostNitro, Krumzi etc.) são fontes fracas; usei só onde concordam entre si.

---

## 1. Stories 1080x1920

### 1.1 Safe zones

| Item | Valor | Tipo | Fonte / cálculo |
|---|---|---|---|
| Canvas | 1080 x 1920 (9:16); mínimo aceito 720 x 1280 | F | adaptlypost |
| Topo coberto pela UI (avatar, nome, barra de progresso) | 14% = **270 px** (guias de mercado: 250; Reels: 210) | F | Meta via guias; 14% x 1920 = 268,8 |
| Base coberta (campo "Enviar mensagem", sticker de link/CTA) | **20% = 384 px** para Stories (Meta, sticker de link); 35% = 672 px para Reels; mercado: 250 a 340 | F | Meta Help (link sticker), 1clickreport |
| Laterais | 6% = 65 px (Meta); 50 a 90 px (mercado) | F | Meta via guias |
| Área central Stories | ~1010 x 1280 (Meta) ou 1080 x 1330 a 1420 (mercado) | F | houseofmarketers; growthscribe |
| Duração padrão de story imagem | 5 s; vídeo até 60 s por cartão | F | adaptlypost, growthscribe |
| Anúncio com texto > 20% da área pode perder entrega | só anúncios | F | growthscribe |
| **Decisão para o motor: zona segura de conteúdo** | **x 96 a 984, y 270 a 1540** (888 x 1270) | H | usa o 14% de cima, o 20% de baixo e a margem 96 da marca (maior que os 65 da Meta) |
| **Zona crítica (CTA, enquete, texto que não pode perder)** | **y 366 a 1440** | H | folga de 96 sobre a zona segura |
| Se o mesmo criativo vai virar Reels ou anúncio | base sobe para **y <= 1248** (35%) | F/H | Meta: Reels 35% |
| Zona proibida | y 0 a 270 e y 1540 a 1920: só fundo/gradiente/sangria | H | |

Recorte de um slide de feed dentro do story [C]: um slide 1080x1350 colocado com topo em y = 270 ocupa y 270 a 1620; o conteúdo (96 a 1254) cai em y 366 a 1524, **dentro** da zona segura, e o rodapé (baseline 1254+270 = 1524) também. Serve para "compartilhar no story" sem refazer layout (texto fica menor que no layout nativo; só para reaproveitamento).

### 1.2 Escala tipográfica para leitura em 5 a 7 s

Base de leitura: adulto lê ~238 palavras/min em não ficção (meta-análise Brysbaert, 2019, 190 estudos) [F] = 4 palavras/s. Em 5 s dão ~20 palavras lidas de forma exclusiva; como o olho também processa imagem e hierarquia, o teto prático é menor [H]. Guias de story pedem 1 a 2 frases curtas, 10 a 15 palavras [F, adaptlypost], blocos de texto <= 10 palavras e fonte >= 45 px em 1080p [F, trymypost, fonte secundária].

Escala do celular [C]: um iPhone 15 tem 393 pt de largura lógica; 1080 px viram 393 pt, fator **0,364 pt/px** (1 pt = 2,75 px). Apple pede texto >= 11 pt (11 pt = **30,2 px**) e corpo preferido de 17 pt (= **46,7 px**) [F, HIG]. Consequência: o 28 px do eyebrow/rodapé do feed equivale a 10,2 pt, abaixo do mínimo Apple; é tolerável só em caixa-alta com tracking +6% e nunca em texto corrido. Em story, **nada abaixo de 32 px (11,6 pt)**.

| Papel (9:16) | Tamanho/linha (px) | Tracking | Peso | Máx. linhas | Limite de texto | Tipo |
|---|---|---|---|---|---|---|
| Display (capa/hook) | 128 / 132 | -3% | Bold | 4 | <= 8 palavras, <= 44 caracteres | H |
| Título | 104 / 112 | -2% | Bold | 4 | <= 9 palavras, <= 50 caracteres | H |
| Subtítulo/lead | 56 / 68 | -1% | Medium | 3 | <= 14 palavras | H |
| Corpo | 48 / 64 | 0 | Regular | 4 | <= 20 palavras, ~37 caracteres/linha | H (>= 46,7 px por HIG [F]) |
| Card: título / descrição | 48 Medium / 40 Regular (linha 60 / 52) | 0 | | 2 / 2 | <= 28 / <= 60 caracteres | H |
| Legenda/rótulo | 36 / 48 | 0 | Regular/Medium | 2 | | H |
| Eyebrow | 32 / 40 | +6% caixa-alta | Medium | 1 | <= 28 caracteres | H |

Proporção: story = feed x ~1,2 em cada papel (88 -> 104; 40 -> 48; 28 -> 32) [H], porque o story é consumido em 5 a 7 s, em movimento, sem zoom.

**Quantidade de texto por cartão de story:** alvo **<= 15 palavras** somando tudo (eyebrow, título, corpo, rótulos), teto duro **25** (~6 s a 238 wpm) [H a partir de F]. Cartão do tipo "pergunta de enquete": <= 12 palavras. Cadeia de cartões: 3 a 6 por sequência; retenção cai após 5 a 7 cartões [F, adaptlypost].

### 1.3 Stickers interativos (enquete, quiz, slider, caixa de pergunta, link)

Os stickers são nativos e colocados no app; o design deve apenas **reservar espaço** e **funcionar sem o sticker** (a pergunta legível sem interação) [F, adaptlypost e postsyncer: "desenhe o fundo estático, deixe vãos, adicione os stickers nativos por último"; "não lote a faixa inferior"]. Posição e tamanhos abaixo são [H]:

| Sticker | Slot reservado (x, y, w, h) | Regra |
|---|---|---|
| Enquete (2 opções) | 144, 1000, 792, 336 | centro-baixo; pergunta no cartão acima, 3 linhas no máximo |
| Quiz (até 4 opções) | 144, 880, 792, 520 | pergunta <= 3 linhas (y 366 a 702) |
| Slider emoji | 144, 1040, 792, 200 | |
| Caixa de pergunta | 144, 1000, 792, 360 | |
| Contagem regressiva | 144, 1040, 792, 240 | |
| Link | 240, 1336, 600, 120 (termina em y 1456, acima dos 1540) | seta de apoio de 64 px em x 508, y 1248; rótulo 32 px |

Regras: slot é **keep-out** (nenhum texto ou elemento gráfico do design entra, só o fundo); distância mínima de 48 px entre texto e slot; um sticker interativo por cartão; o título do cartão nunca fica abaixo de y 1000 quando há slot.

### 1.4 Contraste e identidade

- Contraste: mesmas regras do feed (texto >= 4,5:1, título >= 7:1 [H]); sobre foto, usar o scrim da seção 4.3. Evitar fundos chapados "preguiçosos" em stories interativos: usar o gradiente navy [F-fraco, adaptlypost].
- **Manter a identidade em 9:16:** mesmo gradiente (#0c1854 no topo a #1e2f8a na base), Clash Display, Powder como único acento, raios 32 e pill, margem lateral 96, ícone 48 em círculo 96, escala x1,2. Troca: rodapé "NN / TT" e dica de arraste saem (o story tem barra de progresso nativa e navega por toque); entram **lockup/eyebrow em y 286** (logo da Liga ou série, 32 px) e, opcionalmente, contador "NN / TT" em y 1492 a 1540 (32 px) se a sequência tiver >= 3 cartões [H].
- Quando o story é continuação do carrossel: repetir o mesmo título da capa do feed no cartão 1 (reconhecimento) [H].

### 1.5 Capa de reels e post único

- **Capa de reels 1080x1920:** o perfil recorta a capa em 3:4 (1080x1440), tirando **240 px de cima e 240 de baixo**; o feed exibe reels em 4:5 (1080x1350), tirando 285 px de cada lado vertical [F, hopperhq, oktopost, growthscribe; cálculo 285 = (1920-1350)/2]. **Zona de conteúdo da capa: x 96 a 984, y 300 a 1620** (interseção 3:4 e 4:5 com 15 px de folga) [H/C]. Legibilidade na grade: a miniatura mede ~131 pt (393/3), fator 0,121 pt/px [C]; para 11 pt na miniatura, o texto precisa de ~91 px. Então **título >= 120 px (ideal 128), nada de texto abaixo de 96 px**, <= 4 linhas, <= 8 palavras [H/C]. "Se não legível do tamanho de um selo postal, não é legível" [F, hopperhq].
- **Post único 1080x1350:** o mesmo canvas do carrossel, sem contador nem dica de arraste, com lockup no rodapé (y 1190 a 1254) no lugar. Arquétipos: A01, A02, A03, A04, A05, A12 (o CTA pode aparecer inline, 1 só, pois o post é capa e fechamento) [H]. A grade do perfil recorta 34 px de cada lado (1012x1350 central) [F]; a margem de 96 já protege.

---

## 2. Biblioteca de arquétipos (17) para o feed 1080x1350

Convenções (valem para todos): **eyebrow** [96,96,888,32]; **corpo** y 176 a 1158 (982 de altura); **rodapé** [96,1190,888,64] (contador à esquerda, dica de arraste à direita, 28/40 Medium, baseline 1254; o "corpo" termina 32 px acima do rodapé); texto em x 96 a 984. Classe de densidade: **L** (<= 15 palavras no total, 1 foco), **M** (16 a 30), **D** (31 a 40). Coordenadas completas na seção "Especificação para o motor". Contagem de palavras exclui rodapé.

| ID | Arquétipo | Propósito | Estrutura (zonas-chave) | Limites de texto | Variante 9:16 | Classe |
|---|---|---|---|---|---|---|
| A01 | **Capa com imagem** | Parar o scroll com promessa + imagem | imagem em sangria 0 a 1350; scrim navy (ver 4.3); título Display 120/128 ancorado embaixo (caixa y 558 a 1070); 1 linha de apoio 40/56 em y 1102 a 1158; eyebrow no topo | título <= 10 palavras, <= 48 caracteres, <= 4 linhas; apoio <= 44 caracteres | S01: Display 128/132, caixa y 756 a 1284, apoio 48/64 em y 1316 | L |
| A02 | **Capa tipográfica** | Capa sem imagem, tese forte | gradiente navy; título Display 136/144 (escada 136/120/104) topo em y 224, <= 4 linhas; motivo gráfico sangrando à direita (x 640 a 1080, y 880 a 1350, fora das margens de texto); apoio 40/56 em y 1046 a 1158 (<= 2 linhas) | título <= 10 palavras, <= 44 caracteres; 1 a 2 palavras em Powder | S01 sem imagem, título centrado verticalmente em y 905 | L |
| A03 | **Enunciado (statement)** | Uma frase tese por slide | texto 112/120 Bold, centrado verticalmente na zona de corpo, <= 5 linhas; fonte opcional 28 caps embaixo (y 1118 a 1158) | <= 12 palavras, <= 70 caracteres; <= 2 palavras em acento | S02: 120/128, <= 6 linhas, centro y 905 | L |
| A04 | **Número/estatística gigante** | Um dado como foco | número 280/280 Bold -4% Powder em [96,272,888,280]; unidade/qualificador 64/72 em y 568; descrição 40/56 <= 3 linhas em y 704; fonte 28/40 em y 1118 | número <= 5 glifos (senão escada 280/240/200); unidade <= 28 caracteres; descrição <= 25 palavras; fonte <= 70 caracteres obrigatória se o dado é externo | S03: número 320 (<= 4 glifos), unidade 64/80, descrição 48/64 | L (D se a descrição estiver no limite) |
| A05 | **Citação** | Voz de pessoa ou fonte | aspas 160 px Powder em y 176; texto 64/80 Medium <= 7 linhas em y 352; atribuição: avatar pill 96 + nome 40 Medium + cargo 32 em y 1022 a 1118 | citação <= 30 palavras, <= 180 caracteres; nome <= 28; cargo <= 40 | S09: texto 72/88, <= 7 linhas | M |
| A06 | **Lista com ícones (2 a 4 cards)** | Pontos paralelos curtos | título H2 64/72 <= 2 linhas (y 176 a 320); cards r32 empilhados a partir de y 368; cada card: círculo 96 com glifo 48 à esquerda, título 40 Medium, descrição 32/44 | n=2: card 376 de altura, padding 40; n=3: 248, padding 32; n=4: 184, padding 32; título <= 33 caracteres/linha; descrição <= 43 caracteres/linha; ver fórmula em 7 | S05: n <= 3, cards 280 | D |
| A07 | **Passo a passo numerado** | Sequência de ações | título H2 (y 176 a 320); passos a partir de y 368: círculo pill 96 com número 48 Bold, linha conectora 4 px, título 40 Medium, descrição 32 | 3 a 5 passos; título <= 36 caracteres (1 linha); descrição <= 2 linhas (3 se n=3), <= 86 caracteres | S06: n <= 4 | D |
| A08 | **Comparação / antes e depois** | Dois lados paralelos | título H2; 2 painéis r32 de 432 x 776 lado a lado (gutter 24) a partir de y 368; chip pill 56 ("ANTES"/"DEPOIS") + 3 a 4 itens 36/48; painel de destaque = 4 px Powder (nunca preenchimento) | itens <= 4 por painel; cada item <= 36 caracteres, <= 2 linhas; total <= 40 palavras | S07: painéis empilhados 888 x 512 | M/D |
| A09 | **Mito vs. fato** | Corrigir ideia errada | painel MITO [96,224,888,384] (texto 56/68 em muted, ícone x 48); painel FATO [96,656,888,502] (4 px Powder, texto 56/68 + apoio 32/44) | mito <= 14 palavras/80 caracteres (3 linhas); fato <= 16 palavras/90 caracteres + apoio <= 120 caracteres | S08: MITO 448 de altura, FATO 576 | M |
| A10 | **Linha do tempo vertical** | Evolução em ordem | título H2; trilho 4 px em x = 112; marcador pill 32; textos em x 176 (808 de largura); data 32 Medium Powder + título 40 + descrição 32 (opcional) | 3 a 5 marcos; título <= 38 caracteres/linha (2 linhas se n <= 4, 1 linha se n = 5); descrição <= 1 linha, só se n <= 3 | S06 adaptado, n <= 4 | D |
| A11 | **Gráfico de barras** | Um dado comparativo | título-conclusão H2 <= 2 linhas; gráfico em [96,368,888,702]; fonte 28/40 em y 1118 | **<= 5 barras** (ver 5); título <= 12 palavras; rótulos <= 22 caracteres | S12: <= 6 barras, bloco em y 574 | M |
| A12 | **Imagem + legenda (print/screenshot)** | Prova visual, produto, interface | moldura r32 [96,176,888,704] com padding 16 e print interno r16 (856 x 672); legenda: título 48/56 (y 928) + descrição 32/44 (y 1056) | título <= 56 caracteres (2 linhas); descrição <= 90 caracteres; até 3 marcadores numerados (círculo 48) | S10: imagem 888 x 912 | M |
| A13 | **Pergunta ao leitor (retórica)** | Reorientar a atenção no meio do carrossel | pergunta 104/112 Bold <= 5 linhas, topo y 224; "?" 480 px Powder 100% sangrando à direita (único elemento cruzando a borda); sem CTA | <= 14 palavras, <= 80 caracteres | S13: 120/128, <= 6 linhas | L |
| A14 | **Glossário / definição** | Explicar um termo | chip eyebrow "DEFINIÇÃO"; termo 88/96 Bold (<= 18 caracteres/linha, <= 2 linhas) em y 224; definição 48/64 <= 4 linhas em y 368; card "EXEMPLO" r32 padding 40 em y 704 | termo <= 24 caracteres; definição <= 24 palavras/140 caracteres; exemplo <= 100 caracteres | S14: termo 104/112, definição 56/72 | M |
| A15 | **Resumo / TL;DR** | Fechar o conteúdo em bullets | título H2 "Resumo" (1 linha); 3 a 5 bullets, marcador pill 64 (glifo 32 check) + texto 40 Medium, a partir de y 320 | <= 5 bullets, <= 80 caracteres, <= 2 linhas cada; total <= 45 palavras | S06 (n <= 4) | D |
| A16 | **Fechamento + CTA** | Repetir a tese e pedir **uma** ação | tese 88/96 <= 3 linhas (y 224); apoio 40/56 <= 2 linhas (y 560); botão pill 112 de altura em y 960 a 1072 (40 Bold navy sobre Powder); lockup 48 em y 1110 a 1158 | tese <= 50 caracteres; apoio <= 90 caracteres; botão <= 28 caracteres, 1 verbo; total <= 25 palavras | S11: link sticker slot [240,1336,600,120] | L/M |
| A17 | **Respiro** | Pausa visual no meio do carrossel | frase curta 112/120, centrada; fundo em modo alternativo (Powder, ou imagem de cena em sangria) | <= 6 palavras, <= 36 caracteres, <= 3 linhas | S02 | L |

Notas de design:
- Famílias: **Foco** (A03, A04, A05, A13, A17), **Lista** (A06, A07, A10, A15), **Contraste** (A08, A09), **Visual** (A11, A12), **Apoio** (A14), **Bookends** (A01/A02 e A16). Usadas na seção 3.
- Todo slide de miolo tem **um ponto focal** e **<= 3 níveis** (título, corpo, apoio) [H, herdado].
- Diretriz de gestão de conteúdo [F]: um slide, uma mensagem; "7 pontos = 7 slides" (krumzi).

---

## 3. Ritmo e variedade

Fontes: alternar slides de texto com slides visuais (gráfico, screenshot, exemplo) e evitar monotonia [F, socialk.it, krumzi]; limitar a 4 a 5 tipos de slide por carrossel para manter coerência [F-fraco, guia PostNitro]; capa precisa ser "interrupção de padrão" (cor forte, tipografia gigante, layout inesperado) [F, krumzi]; 1 elemento cruzando a borda e número/arraste no rodapé [F, pesquisa anterior]. Os números abaixo são [H].

### 3.1 Regras de sequência (verificáveis no plano, antes de montar)

| # | Regra | Valor |
|---|---|---|
| R1 | Mesmo arquétipo consecutivo | <= 2; os da família Foco (A03, A04, A05, A13, A17): **nunca consecutivos** |
| R2 | Mesma família consecutiva | <= 2 |
| R3 | Arquétipos distintos no carrossel | mínimo 4 (N >= 7), máximo 6 (N <= 9) |
| R4 | Densidade | nunca 3 slides seguidos M/D; nunca 2 D seguidos; ao menos 1 slide L em qualquer janela de 3 do miolo; L = 30 a 60% do miolo |
| R5 | Visuais (A01 com imagem, A04, A11, A12, mascote/imagem de cena) | >= 30% dos slides; nunca > 2 slides seguidos só de texto |
| R6 | Slide 2 | A03, A04, A13 ou A14 (promessa/contexto) |
| R7 | Slide N-1 | A15 ou A03; slide N = A16 (único com CTA) |
| R8 | A01/A02 só no slide 1; A16 só no último; A15 no máximo 1 |
| R9 | Respiro (A17) | 0 se N <= 6; 1 se 7 <= N <= 10 (2 se N >= 11); posição = round(0,6 x N) +- 1, **depois de >= 2 slides M/D**; nunca no 2, N-1 ou N |
| R10 | Slides em modo alternativo de cor (ver 6) | <= 3 por carrossel (capa, respiro, CTA) |

Exemplo, N = 8: 1 A01 (L) / 2 A03 (L) / 3 A06 (D) / 4 A04 (L) / 5 A07 (D) / 6 A17 (L) / 7 A15 (D) / 8 A16 (L). Exemplo notícia N = 7: A02, A04, A12, A09, A17, A11, A16.

### 3.2 Continuidade entre slides

| Elemento | Especificação | Tipo |
|---|---|---|
| Contador | "NN / TT" 28/40 Medium, x 96, baseline 1254, em todos | F (conceito) / H (posição) |
| Dica de arraste | círculo de 64 em x 920 a 984, y 1190 a 1254, glifo de seta 32 (traço 4); em A01/A02: círculo preenchido Powder (ênfase); slides 2 a N-1: contorno 2 px muted; **sem dica no slide N** | F/H |
| Fio de progresso (opcional) | trilho 4 px em y = 1174, x 96 a 984, muted 32% alfa; preenchimento Powder de largura 888 x NN/TT | H |
| Elemento que atravessa a borda | **1 por carrossel**, só nas faixas de margem (x 984 a 1080 no slide k e x 0 a 96 no slide k+1), mesma altura y e espessura; nunca texto, rosto ou logo na emenda | F (efeito) / H (números) |
| Mesma grade, paleta, família, raios | validados no QA do plano e do slide | F |

### 3.3 Como a capa difere dos demais

| Atributo | Capa (A01/A02) | Miolo | CTA (A16) |
|---|---|---|---|
| Tipografia | Display 120 a 136 | H1 88 / H2 64 | 88 |
| Âncora | embaixo (A01) ou topo-grande (A02) | topo | topo + botão embaixo |
| Palavras | <= 10 | <= 40 (alvo 32) | <= 25 |
| Cor | sempre navy gradiente (assinatura do feed) | modo da série | navy |
| Imagem/motivo | obrigatório (imagem ou motivo gráfico sangrando) | opcional | lockup |
| Dica de arraste | preenchida Powder | contorno | ausente |
| Acento | 1 a 2 palavras + dica | 1 a 2 palavras | botão |

---

## 4. Imagens

### 4.1 Tratamento dentro do sistema [H, salvo indicação]

| Tipo | Moldura | Raio | Overlay | Recorte |
|---|---|---|---|---|
| Foto/cena de capa | sangria total do canvas | 0 | scrim navy (4.3) | foco em y 100 a 700, fora da caixa do título |
| Imagem em card/slide interno | dentro da margem 96 | **32** | scrim só se houver texto sobreposto | 888 x h variável |
| Print/screenshot | moldura r32 + padding 16 + print r16 (concentricidade: raio interno = externo - padding [F, pesquisa anterior]); contorno 2 px branco 16% em print escuro sobre navy | 32/16 | nenhum | recortar a parte relevante, nunca o print inteiro de tela; dados pessoais borrados |
| Avatar | círculo pill | pill | nenhum | rosto centrado, 96 px |
| Mascote/ilustração | sem moldura, recortado com fundo transparente | n/a | nenhum | altura <= 40% do canvas (540 px); âncora na margem inferior ou direita; cabeça e olhos dentro da zona segura; não cobre título; 1 por slide |
| Ícone | círculo 96, glifo 48 | pill | | herdado |

Tratamento unificador: foto dessaturada 15 a 25% + multiplicação navy leve, para fotos de origens diferentes parecerem de uma mesma série [H].

### 4.2 Proporção imagem x texto

| Arquétipo | Área mínima de imagem visível (sem scrim denso) |
|---|---|
| A01 capa | >= 50% da área (y 0 a ~700 limpo) |
| A12 | >= 44% (888 x 704); variante "imagem grande" 888 x 840 = 51% |
| Slides de texto | 0% (ícones e mascote não contam) |
| Carrossel inteiro | >= 30% dos slides têm figura (imagem, gráfico, print, mascote) [R5] |

### 4.3 Scrim (gradiente de legibilidade) com número [C]

Pior caso: foto branca (L = 1). Cor navy #0c1854 sobre branco com alfa a:

| alfa | cor resultante | branco sobre ela | Powder sobre ela | muted #8b9fe8 |
|---|---|---|---|---|
| 0,60 | #6d7498 | 4,56 | 3,50 | 1,79 |
| 0,70 | #555d87 | 6,36 | 4,88 | 2,49 |
| 0,75 | #49527f | 7,51 | 5,76 | 2,94 |
| 0,80 | #3d4676 | 8,99 | 6,90 | 3,52 |
| 0,90 | #242f65 | 12,58 | 9,65 | 4,92 |

Regra: **alfa >= 0,75 sobre todo bbox de título (>= 7:1 no pior caso)**, >= 0,70 sobre corpo; muted não pode ficar sobre foto. Rampa para a capa: alfa 0 em (topo da caixa de título - 320), 0,78 no topo da caixa, 0,92 na base do canvas. Alternativa: medir a luminância real da foto sob o bbox e aceitar alfa menor se o contraste medido >= 7.

### 4.4 Imagem gerada por IA vs. print real

- **Imagem gerada:** cenas, metáforas, capas, fundos, mascote [H; coerente com a regra do repositório: priorizar imagens geradas para cenas e metáforas]. Nunca para provar algo (resultado, benchmark, interface, rosto de pessoa real).
- **Print real:** qualquer afirmação sobre produto, ferramenta, interface, gráfico de terceiros, tela de resultado. Resolução de origem >= 1,5x a área exibida (>= 1332 px de largura para 888) [H]; citar a fonte.
- **Rotulagem da Meta:** o Instagram aplica "AI info" a imagens com metadados de geradores (C2PA/IPTC) e exige divulgação em vídeo/áudio fotorrealista [F, notícias sobre a política da Meta]. Imagem gerada em estilo ilustrado não gera problema de enganação; fotorrealismo de pessoas, sim: evitar. Preservar a regra do repositório de não inferir fatos de marca.

---

## 5. Dados visuais

Fontes: Economist, cores neutras e uma cor forte só nos pontos críticos, anotações e títulos como manchete, "mostrar o dado diretamente, reduzir ruído" [F, thedataschool; journalism.co.uk]; para social, reduzir o gráfico ao mínimo para ser entendido rápido [F, dataschool/Tableau via busca]; barras: linha de base em zero, rótulos horizontais, ordenar, cor com propósito (destaque) [F, Maersk Design System]; Datawrapper: destaque de barra deixa o restante esmaecido [F]. Valores numéricos abaixo são [H].

| Regra | Feed 4:5 | Stories 9:16 |
|---|---|---|
| Barras horizontais, máximo | **5** (6 seria 744 px > zona de 702) | **6** |
| Séries por gráfico | 1 (2 só com legenda direta; evitar) | 1 |
| Título | manchete com a conclusão, <= 12 palavras, H2 64/72 | 64/72 |
| Rótulo da categoria | 32/40 Medium, **acima** da barra, alinhado a x 96 (não vertical, não em legenda separada) | 36/48 |
| Valor | 40/48 Bold, 16 px à direita da ponta da barra; comprimento máximo da barra = 888 - 16 - 112 = **760** | idem |
| Barra | altura 56, pill (raio total), mínimo de 56 de comprimento (valores pequenos) | altura 56 |
| Pitch | rótulo 40 + 8 + barra 56 = 104, espaço 24 | 104 / 24 |
| Linha de base | zero em x = 96; sem eixo, sem linhas de grade, sem ticks | idem |
| Ordem | decrescente (ou cronológica se for tempo) | idem |
| **Destaque** | **1 barra** em Powder #c4e8ed; as demais #8b9fe8 (Powder vs. muted: 1,96:1 entre si; ambos >= 6:1 contra o navy [C]); valor da barra em destaque em branco Bold, demais em #eaeffc Regular | idem |
| Casas decimais | <= 3 algarismos significativos; mesma unidade em todos os rótulos | idem |
| Fonte do dado | linha 28/40 muted em y 1118 (obrigatória; <= 70 caracteres) | y 1448 |
| Colunas (série temporal) | <= 5 colunas de 128, vão = (888 - 5 x 128)/4 = 62 (permitido como exceção do gráfico) | <= 6 |
| Linha (série) | 1 linha, traço 6, <= 8 pontos, rótulos só no primeiro, no último e no destacado (círculo 24 Powder) | idem |
| Pizza/rosca | **proibido**; para "x de y" usar A04 | |
| Anotação | 1 seta/callout 32 px no máximo, dentro da zona do gráfico | |

Variante modo claro (fundo #eaeffc): destaque = navy #0c1854, demais = #6b7fd0 (3,28:1 sobre #eaeffc [C], passa 1.4.11), texto navy.

---

## 6. Variações de cor por série/pilar

**Número de variações: 3 modos** derivados da paleta atual, sem cor nova de marca. Fundo e texto trocam; o acento (Powder) e a tipografia ficam. Todos os contrastes foram calculados [C].

| Modo | Fundo | Texto primário | Texto secundário | Superfície (card) | Acento | Uso sugerido |
|---|---|---|---|---|---|---|
| **N: Navy** (padrão) | gradiente #0c1854 a #1e2f8a | #ffffff (16,48 a 11,48) | #eaeffc (14,32 a 9,98) | branco 8% sobre o fundo | Powder #c4e8ed (12,64 a 8,81) como texto/ícone | Notícia, capas de todas as séries, CTA |
| **L: Claro** | #eaeffc (cards #ffffff) | #0c1854 (14,32 sobre #eaeffc; 16,48 sobre branco) | #3d4f9f (6,48 sobre #eaeffc; 7,45 sobre branco) | #ffffff + contorno 2 px #c8d2f3 | **Powder só como preenchimento** (marca-texto atrás de palavra, chip) com texto navy (12,64); texto/ícone de ênfase em navy | Tutorial, passo a passo, glossário (conteúdo para salvar e reler) |
| **P: Powder** | #c4e8ed | #0c1854 (12,64) | #34479e (6,34) | #ffffff 60% | navy #0c1854 e #1e2f8a (8,81) | Institucional, processo seletivo, avisos, respiro |

Regras de contraste [F: WCAG 1.4.3 e 1.4.11; números C]:
- Texto grande = >= 24 px regular ou >= 18,66 px bold: 3:1; texto normal: 4,5:1 [F]. **Política do motor: todo texto >= 4,5:1; títulos >= 7:1** [H].
- **Armadilhas encontradas nos tokens atuais [C]:**
  - **#8b9fe8 (muted) sobre #1e2f8a = 4,496:1, reprova o 4,5:1.** Sobre o gradiente em t = 0,75 dá 4,98. Sobre card (branco 8% sobre #1e2f8a, #304093) cai para **3,61:1**. Regra: muted como texto só em fundo com luminância <= gradiente t <= 0,75 (y <= 75% da altura) e nunca sobre card; sobre card ou no fim do gradiente usar **#a9b8f0** (4,74 sobre card no fim do gradiente; 5,91 sobre #1e2f8a; 8,48 sobre #0c1854) ou #eaeffc.
  - muted sobre #eaeffc = 2,22 e sobre branco = 2,55: **nunca** em modo claro.
  - Powder sobre branco = 1,30 e sobre #eaeffc = 1,13: Powder não é texto em fundo claro.
- Em cada carrossel, **um modo para o miolo**; capa e CTA sempre N. A série é identificada por: modo + texto do eyebrow + chip (pill 48 com nome da série) no topo direito (x 744 a 984, y 96) [H]. Ver R10: no máximo 3 slides em modo diferente do miolo.
- Não introduzir um quarto modo ou cores de pilar novas; se for preciso diferenciar mais, variar o chip de série (texto), não o fundo. [H]

---

## 7. QA numérico automatizável

Severidade: **E** = erro (bloqueia), **A** = aviso. Tolerância geométrica: 1 px. Coordenadas na sua escala (feed 1080x1350; story 1080x1920).

### 7.1 Geometria e texto

| # | Checagem | Fórmula/limiar | Sev. |
|---|---|---|---|
| Q1 | Texto fora da zona segura | bbox de todo nó de texto, ícone e botão **dentro** de: feed [96,96,984,1254]; story [96,270,984,1540]; capa de reels [96,300,984,1620]. Exceção: imagens/motivos marcados `bleed` | E |
| Q2 | Faixa de emenda | nenhum texto, rosto ou logo em x < 96 ou x > 984; elemento atravessador só nessas faixas, <= 1 por slide | E |
| Q3 | Overflow | altura renderizada do texto <= altura da zona; nenhuma linha truncada; `textAutoResize` = HEIGHT e bbox final dentro do pai | E |
| Q4 | Palavra mais longa cabe na linha | largura medida da maior palavra <= largura da caixa (sem hifenização); se não, descer a escada de fonte (display 136/120/104/88; H1 88/80/72/64) | E |
| Q5 | Tamanho mínimo de fonte | feed: corpo/cards >= 32; rótulos caixa-alta/rodapé >= 28 (exceção documentada, 10,2 pt); título miolo >= 64; display >= 112. Story: tudo >= 32; corpo >= 48 (46,7 px = 17 pt). Capa de reels: título >= 120, nada < 96 | E |
| Q6 | Teste de escala do celular | tamanho x 0,364 >= 11 pt (>= 30,2 px) para texto corrido; na miniatura da grade (x 0,121): título da capa >= 14 pt (>= 120 px) | E/A |
| Q7 | Linhas do título | H1 <= 3; display <= 4 (story 4); A03 <= 5 (story 6); A13 <= 5; H2 <= 2; >= 1 | E |
| Q8 | Órfãs e viúvas | última linha de qualquer parágrafo: >= 2 palavras **e** largura >= 25% da caixa; em títulos de >= 3 linhas, razão linha mais curta / mais longa >= 0,4. Correção: NBSP entre as 2 últimas palavras, ou reescrever | A (E em título) |
| Q9 | Comprimento de linha | corpo 28 a 44 caracteres/linha (coluna <= 720 px); cards 33/43 | A |
| Q10 | Tracking e entrelinha | display -3%, H1 -2%, número -4%, corpo 0, eyebrow +6%; line-height conforme tabela de estilos (+-2 px) | A |
| Q11 | Famílias e pesos | família única Clash Display; pesos em {400, 500, 700}; estilos distintos (tamanho x peso) por slide <= 5 | E |
| Q12 | Níveis de hierarquia | tamanhos distintos fora eyebrow e rodapé <= 3; razão título/corpo >= 2 (H2: >= 1,6) | A |

### 7.2 Cor e imagem

| # | Checagem | Limiar | Sev. |
|---|---|---|---|
| Q13 | Contraste de texto | achatar o fundo (gradiente amostrado em 9 pontos do bbox; card; imagem + scrim no pior caso L = 1): texto >= 4,5:1 (E); título >= 7:1 (A); ícone, borda funcional e barra >= 3:1 (E) | E/A |
| Q14 | Muted proibido nos casos da seção 6 | muted #8b9fe8 em: card, y > 75% do gradiente, foto, modo claro | E |
| Q15 | Acento | área preenchida em Powder <= 10% do canvas; palavras em acento por título <= 2; botão CTA conta como acento; cores distintas por slide <= 7 | A |
| Q16 | Scrim | alfa efetivo sob bbox de título >= 0,75 (ou contraste medido >= 7) | E |
| Q17 | Resolução de imagem | pixels de origem >= pixels exibidos (>= 1,5x em prints) | A |
| Q18 | Tratamento de cor da série | fundo do slide ∈ {N, L, P} do plano; capa e CTA em N | E |

### 7.3 Densidade, forma e rodapé

| # | Checagem | Limiar | Sev. |
|---|---|---|---|
| Q19 | Palavras por slide | capa <= 10 (E > 12); miolo alvo <= 32, teto 40 (E); CTA <= 25; respiro <= 6; story alvo <= 15, teto 25 (E) | E/A |
| Q20 | Cobertura de texto | união dos bbox de texto / canvas: miolo <= 45%; capa <= 35%; story <= 40% | A |
| Q21 | Ponto focal | exatamente 1 elemento com maior peso visual (maior fonte ou imagem >= 40% da área); 2º lugar <= 60% do 1º | A |
| Q22 | Raios | todos em {0 (sangria), 16 (aninhado), 32, pill = altura/2}; raios distintos por slide <= 3; aninhado: raio interno = externo - padding (+-2) | E |
| Q23 | Espaçamentos | gaps e paddings em {8, 16, 24, 32, 48, 64, 96, 128}; título->corpo = 24; bloco->bloco >= 2x gap interno | A |
| Q24 | Margens e grade | x e largura de tudo, exceto sangria, em [96, 984]; colunas de 128 + gutter 24; baseline em múltiplos de 8 | E |
| Q25 | Padding de card | igual nos 4 lados; 32 (cards pequenos) ou 40 (n=2, painéis); conteúdo cabe em altura do card - 2 x padding: 52 x linhas_título + 16 + 44 x linhas_descrição <= altura - 2 x padding | E |
| Q26 | Rodapé | contador "NN / TT" com NN = índice real e TT = total; mesma posição em todos; dica de arraste em 1 a N-1 e ausente em N | E |
| Q27 | CTA | exatamente 1 em todo o carrossel, no slide N; 0 nos demais | E |
| Q28 | Texto alternativo | cada slide tem `alt` (>= 40 caracteres) no plano | A |

### 7.4 Gráficos, stories e plano

| # | Checagem | Limiar | Sev. |
|---|---|---|---|
| Q29 | Gráfico | barras <= 5 (feed) / 6 (story); linha de base em x = 96; todo valor rotulado; destaque <= 1 barra; ordenado; fonte presente | E |
| Q30 | Slot de sticker | keep-out: nenhum nó (exceto fundo) intersecta o slot; slot dentro da zona segura; espaço >= 48 entre texto e slot | E |
| Q31 | Ritmo do plano | R1 a R10 da seção 3 (repetição, densidade, respiro, visuais, slide 2, slide N-1) | E/A |
| Q32 | Imagem de IA | proibida em arquétipos de prova (A11, A12) | E |

---

## 8. Estilos tipográficos de referência (feed)

| Estilo | Tamanho/linha | Tracking | Peso |
|---|---|---|---|
| display-cover | 120/128 (A01); 136/144 (A02); escada 136, 120, 104 | -3% | Bold |
| number | 280/280 (escada 240, 200) | -4% | Bold |
| statement | 112/120 | -3% | Bold |
| h1 | 88/96 | -2% | Bold |
| h2 | 64/72 | -1,5% | Bold |
| quote | 64/80 | -1% | Medium |
| lead | 48/56 | -1% | Medium |
| body | 40/56 | 0 | Regular |
| card-title | 40/52 | 0 | Medium |
| card-desc | 32/44 | 0 | Regular |
| chip/label | 32/40 | 0 | Medium |
| chart-value | 40/48 | 0 | Bold |
| eyebrow/footer | 28/40 (eyebrow 28/32) | +6% caixa-alta | Medium |

---

## Especificação para o motor

Formato: `[x, y, w, h]` em px. Zonas de texto são caixas máximas; o texto ancora no topo, salvo `anchor`. Fundo de cada slide vem do modo (N, L ou P). `story` = 1080x1920. Estilos referenciam a seção 8 (feed) e a tabela de 1.2 (story).

### Constantes

```yaml
feed:
  canvas: [1080, 1350]
  safe: [96, 96, 888, 1158]          # x 96..984, y 96..1254
  eyebrow: [96, 96, 888, 32]
  body: [96, 176, 888, 982]          # y 176..1158
  h1_zone: [96, 176, 888, 288]       # 3 x 96
  h2_zone: [96, 176, 888, 144]       # 2 x 72
  list_zone: [96, 368, 888, 790]     # y 368..1158 (apos h2 + 48)
  series_chip: [744, 96, 240, 48]
  footer: [96, 1190, 888, 64]
  counter: [96, 1214, 300, 40]       # baseline 1254
  swipe_hint: [920, 1190, 64, 64]    # ausente no ultimo
  progress_thread: [96, 1174, 888, 4]   # opcional
  grid: {cols: 6, col_w: 128, gutter: 24, col_x: [96, 248, 400, 552, 704, 856]}
  bleed_bands: [[0, 0, 96, 1350], [984, 0, 96, 1350]]
story:
  canvas: [1080, 1920]
  safe: [96, 270, 888, 1270]         # y 270..1540
  critical: [96, 366, 888, 1074]     # y 366..1440
  eyebrow: [96, 286, 888, 40]
  body: [96, 366, 888, 1174]
  counter_opt: [96, 1492, 888, 48]
  forbidden_y: [[0, 270], [1540, 1920]]
  sticker_slots:
    poll:      [144, 1000, 792, 336]
    quiz:      [144, 880, 792, 520]
    slider:    [144, 1040, 792, 200]
    question:  [144, 1000, 792, 360]
    countdown: [144, 1040, 792, 240]
    link:      [240, 1336, 600, 120]
reels_cover:
  canvas: [1080, 1920]
  safe: [96, 300, 888, 1320]         # y 300..1620 (3:4 e 4:5)
  title: {size: 128, line: 132, max_lines: 4, box: [96, 600, 888, 720], anchor: center}
  min_font: 96
tokens:
  radius: {card: 32, nested: 16, pill: "h/2", bleed: 0}
  spacing: [8, 16, 24, 32, 48, 64, 96, 128]
  icon: {circle: 96, glyph: 48, stroke: 4}
```

### Arquétipos (feed e story)

```yaml
A01_capa_imagem:
  class: L
  feed:
    image: [0, 0, 1080, 1350, bleed]
    scrim: {color: "#0c1854", start_y: "title_top-320", a_at_title_top: 0.78, a_bottom: 0.92}
    eyebrow: [96, 96, 888, 32]
    title: {box: [96, 558, 888, 512], style: display-cover(120/128), anchor: bottom, max_lines: 4, max_words: 10, max_chars: 48}
    subtitle: {box: [96, 1102, 888, 56], style: body(40/56), max_lines: 1, max_chars: 44}
    swipe_hint: filled Powder
  story:  # S01
    image: [0, 0, 1080, 1920, bleed]
    eyebrow: [96, 286, 888, 40]
    title: {box: [96, 756, 888, 528], style: 128/132, anchor: bottom, max_lines: 4, max_words: 8, max_chars: 44}
    subtitle: {box: [96, 1316, 888, 64], style: 48/64, max_lines: 1}

A02_capa_tipografica:
  class: L
  feed:
    motif: [640, 880, 440, 470, bleed]       # pode cruzar x 984..1080
    title: {box: [96, 224, 888, 576], style: 136/144, max_lines: 4, max_words: 10, max_chars: 44}
    subtitle: {box: [96, 1046, 888, 112], style: body(40/56), max_lines: 2, anchor: bottom}
  story: {title: {box: [96, 521, 888, 768], style: 128/132, anchor: center, center_y: 905}}

A03_enunciado:
  class: L
  feed:
    text: {box: [96, 176, 888, 982], style: statement(112/120), anchor: center, max_lines: 5, max_words: 12, max_chars: 70}
    source: {box: [96, 1118, 888, 40], style: eyebrow(28/40), optional}
  story: {text: {box: [96, 521, 888, 768], style: 120/128, anchor: center, max_lines: 6}}

A04_numero:
  class: L
  feed:
    number: {box: [96, 272, 888, 280], style: number(280/280), color: Powder, max_glyphs: 5}
    unit:   {box: [96, 568, 888, 72], style: h2(64/72), max_chars: 28}
    desc:   {box: [96, 704, 888, 168], style: body(40/56), max_lines: 3, max_words: 25}
    source: {box: [96, 1118, 888, 40], style: eyebrow(28/40), max_chars: 70}
  story:
    number: {box: [96, 420, 888, 320], style: 320/320, max_glyphs: 4}
    unit: {box: [96, 772, 888, 80], style: 64/80}
    desc: {box: [96, 900, 888, 256], style: 48/64, max_lines: 4}
    source: {box: [96, 1456, 888, 40], style: 32/40}

A05_citacao:
  class: M
  feed:
    mark: [96, 176, 160, 160]               # aspas 160 px Powder
    text: {box: [96, 352, 888, 560], style: quote(64/80), max_lines: 7, max_words: 30, max_chars: 180}
    avatar: [96, 1022, 96, 96]              # pill
    name: {box: [224, 1030, 760, 52], style: card-title(40/52), max_chars: 28}
    role: {box: [224, 1086, 760, 44], style: card-desc(32/44), max_chars: 40}
  story: {mark: [96, 366, 160, 160], text: {box: [96, 566, 888, 616], style: 72/88, max_lines: 7}, attribution: [96, 1262, 888, 96]}

A06_lista_icones:
  class: D
  feed:
    title: {box: [96, 176, 888, 144], style: h2(64/72), max_lines: 2}
    cards:   # y inicial 368, raio 32
      n2: {h: 376, gap: 24, padding: 40}
      n3: {h: 248, gap: 16, padding: 32}
      n4: {h: 184, gap: 16, padding: 32}
    card_inner: {icon: [x+padding, y+padding, 96, 96], text_x: 256, text_w: 688}
    limits: {title_chars_per_line: 33, desc_chars_per_line: 43, rule: "52*Lt + 16 + 44*Ld <= h - 2*padding"}
  story: {title: {box: [96, 366, 888, 192], style: 88/96}, cards: {y: 606, n_max: 3, h: 280, gap: 24, padding: 40}}

A07_passos:
  class: D
  feed:
    title: {box: [96, 176, 888, 144], style: h2(64/72)}
    steps:   # a partir de y 368; circulo pill 96 em x 96; texto em x 224, w 760
      n3: {block_h: 216, gap: 48, desc_lines: 3}
      n4: {block_h: 160, gap: 48, desc_lines: 2}
      n5: {block_h: 112, gap: 48, desc_lines: 1}
    connector: {x: 142, w: 4, color: Powder@40%}
    limits: {title_chars: 36, desc_chars: 86}
  story: {title: [96, 366, 888, 192], steps: {y: 606, n_max: 4, block_h: 176, gap: 48}}

A08_comparacao:
  class: M
  feed:
    title: {box: [96, 176, 888, 144], style: h2(64/72)}
    panel_left:  [96, 368, 432, 776]
    panel_right: [552, 368, 432, 776]      # destaque = stroke 4 Powder (nao preencher)
    chip: {h: 56, pill, offset: [32, 32]}
    items: {style: 36/48, max_items: 4, max_lines_each: 2, max_chars_each: 36, start_dy: 120, gap: 24}
  story:
    panel_a: [96, 366, 888, 512]
    panel_b: [96, 926, 888, 512]

A09_mito_fato:
  class: M
  feed:
    myth: {panel: [96, 224, 888, 384], text: {style: 56/68, color: muted(a9b8f0 se card), max_lines: 3, max_chars: 80}}
    fact: {panel: [96, 656, 888, 502], stroke: {w: 4, color: Powder}, text: {style: 56/68, max_lines: 3, max_chars: 90}, support: {style: card-desc(32/44), max_lines: 2, max_chars: 120}}
    chip: {h: 56, pill, offset: [40, 40]}
  story: {myth: [96, 366, 888, 448], fact: [96, 862, 888, 576]}

A10_timeline:
  class: D
  feed:
    title: {box: [96, 176, 888, 144], style: h2(64/72)}
    rail: {x: 112, w: 4, y0: 368, y1: 1158}
    marker: {d: 32, x: 96}
    text_x: 176
    text_w: 808
    items:
      n3: {block_h: 208, gap: 48, title_lines: 2, desc_lines: 1}
      n4: {block_h: 152, gap: 48, title_lines: 2, desc_lines: 0}
      n5: {block_h: 100, gap: 48, title_lines: 1, desc_lines: 0}
    date: {style: chip/label(32/40), color: Powder}
  story: {steps style, n_max: 4}

A11_grafico_barras:
  class: M
  feed:
    title: {box: [96, 176, 888, 144], style: h2(64/72), max_words: 12}
    chart: [96, 368, 888, 702]
    row: {label_h: 40, gap_label_bar: 8, bar_h: 56, pitch_gap: 24, max_rows: 5, bar_max_w: 760, value_style: chart-value(40/48)}
    highlight: {max: 1, color: Powder, others: "#8b9fe8"}
    source: {box: [96, 1118, 888, 40], style: eyebrow(28/40), required: true}
  story: {title: [96, 366, 888, 144], chart: [96, 574, 888, 880], max_rows: 6, row_h: 100, gap: 24, source: [96, 1448, 888, 40]}

A12_imagem_legenda:
  class: M
  feed:
    frame: [96, 176, 888, 704]       # r32
    image: [112, 192, 856, 672]      # r16, padding 16
    caption_title: {box: [96, 928, 888, 112], style: 48/56, max_lines: 2, max_chars: 56}
    caption: {box: [96, 1056, 888, 88], style: card-desc(32/44), max_lines: 2, max_chars: 90}
    markers: {max: 3, d: 48}
  story: {frame: [96, 366, 888, 912], title: [96, 1318, 888, 56], caption: [96, 1390, 888, 96]}

A13_pergunta:
  class: L
  feed:
    text: {box: [96, 224, 888, 560], style: 104/112, max_lines: 5, max_words: 14, max_chars: 80}
    glyph: {char: "?", size: 480, color: Powder, box: [600, 700, 480, 560], bleed_right: true}
    cta: forbidden
  story: {text: {box: [96, 440, 888, 768], style: 120/128, max_lines: 6}}

A14_glossario:
  class: M
  feed:
    chip: eyebrow "DEFINICAO" no slot [96, 96, 888, 32]
    term: {box: [96, 224, 888, 192], style: h1(88/96), max_lines: 2, max_chars: 24}
    definition: {box: [96, "368 + (term_lines-1)*96", 888, 256], style: "48/64 Regular", max_lines: 4, max_words: 24, max_chars: 140}
    example: {card: [96, 704, 888, 296], padding: 40, radius: 32, label: eyebrow, text: 36/52, max_lines: 3, max_chars: 100}
  story: {term: 104/112, definition: 56/72, example: card}

A15_resumo:
  class: D
  feed:
    title: {box: [96, 176, 888, 72], style: h2(64/72), max_lines: 1}
    bullets: {y: 320, max: 5, block_h: 104, gap: 32, marker: pill 64, text_x: 192, text_w: 792, style: body-medium(40/52), max_lines: 2, max_chars: 80}
  story: {n_max: 4}

A16_cta:
  class: L
  feed:
    thesis: {box: [96, 224, 888, 288], style: h1(88/96), max_lines: 3, max_chars: 50}
    support: {box: [96, 560, 888, 112], style: body(40/56), max_lines: 2, max_chars: 90}
    button: {box: [96, 960, 888 (auto, min 480), 112], pill, fill: Powder, text: 40 Bold navy, max_chars: 28, count: 1}
    lockup: [96, 1110, 480, 48]
    swipe_hint: absent
  story: {thesis: [96, 366, 888, 336], support: [96, 742, 888, 128], link_slot: [240, 1336, 600, 120], arrow: [508, 1248, 64, 64], lockup: [96, 1462, 480, 48]}

A17_respiro:
  class: L
  feed:
    text: {box: [96, 176, 888, 982], style: statement(112/120), anchor: center, max_lines: 3, max_words: 6, max_chars: 36}
    mode: alternativo (P) ou imagem de cena em sangria
  story: {text: [96, 521, 888, 768]}
```

Obs. para o engenheiro: em A14 o campo `chip` é o próprio eyebrow; a definição desce 96 px se o termo ocupar 2 linhas. As caixas de texto acima são máximas; se o texto render menos linhas, ancorar conforme `anchor` e manter o espaçamento da escala. O plano deve declarar `archetype`, `mode`, `n` (itens), textos e `alt`; o validador aplica Q1 a Q32 e R1 a R10 antes da montagem.

---

## Fontes consultadas (URLs)

Safe zones, Stories, Reels, grade:
- https://www.facebook.com/business/help/980593475366490 (Meta Business Help, texto sobreposto e zona de segurança em Stories e Reels; corpo não extraído)
- https://www.facebook.com/help/instagram/192168966243613 (Meta, sticker de link: 14% topo e 20% base)
- https://adsuploader.com/blog/meta-ads-safe-zones
- https://www.1clickreport.com/blog/meta-ads-creative-safe-zones-2026-guide
- https://adnova.ai/blogs/meta-ad-safe-zones-guide
- https://www.houseofmarketers.com/guide-to-safe-zones-tiktok-facebook-instagram-stories
- https://growthscribe.com/instagram-story-size/
- https://adaptlypost.com/blog/instagram-story-guidelines
- https://postsyncer.com/tips/instagram-stories-dimensions-and-safe-zones
- https://www.trymypost.com/blog/instagram-reels-safe-zones-text-placement-2026
- https://postplanify.com/blog/social-media-safe-zones-2026-complete-guide
- https://www.hopperhq.com/blog/instagram-reel-size/
- https://www.oktopost.com/blog/instagram-grid-size-guide/
- https://argil.ai/blog/instagram-story-dimensions

Leitura, tipografia, escala do celular:
- https://www.gwern.net/doc/psychology/linguistics/2019-brysbaert.pdf (Brysbaert, 2019, velocidade de leitura)
- https://developer-mdn.apple.com/design/human-interface-guidelines/foundations/typography (Apple HIG, 11 pt mínimo, 17 pt corpo)
- https://useyourloaf.com/blog/iphone-15-screen-sizes/ (393 x 852 pt, 3x)
- https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast-contrast.html e https://w3c.github.io/wcag/understanding/contrast-minimum (WCAG 1.4.3)

Carrosséis, ritmo, estrutura:
- https://www.krumzi.com/blog/how-to-create-carousel-post
- https://socialk.it/en/blog/instagram-carousel-strategy
- https://postnitro.ai/blog/post/instagram-carousel-design
- https://skedsocial.com/blog/creative-ways-to-use-instagram-carousels-in-2025
- https://metricool.com/instagram-carousels/
- https://www.truefuturemedia.com/articles/instagram-carousel-strategy-2026
- https://www.socialchamp.com/blog/carousel-slides

Dados e gráficos:
- https://www.thedataschool.co.uk/johann-shin/visual-storytelling-done-right-5-lessons-from-the-economist
- https://www.journalism.co.uk/interactive-data-driven-stories-are-building-community-engagement-at-the-economist/
- https://charman-anderson.com/2019/06/12/how-the-economist-is-using-data-driven-interactive-stories-to-grow-its-instagram-following/
- https://designsystem.maersk.com/guidelines/data-visualisation/chart-types/bar-chart/index.html
- https://www.datawrapper.de/academy/customizing-your-bar-chart
- https://www.datawrapper.de/blog/fonts-for-data-visualization

Imagens e IA:
- https://aibusiness.com/responsible-ai/meta-to-label-ai-generated-content-across-facebook-instagram
- https://aphnetworks.com/index.php/news/28906-instagrams-made-ai-label-swapped-out-ai-info-after-photographers-complaints

Consultadas sem resultado útil: Morning Brew, The Rundown AI, Superhuman AI, Visual Capitalist, Nexo Jornal, Ben's Bites (nenhum guia público de sistema visual encontrado); tableau.com e truelogic.com retornaram 403; mergeimages.net retornou 403.
