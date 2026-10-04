# Roteiro: do arco ao plano de slides

O plano é um JSON em `runs/<data>-<slug>/plano.json`. Você escreve conteúdo e escolhe arquétipos; o motor decide posição, tamanho e cor.

## Estrutura do plano

```json
{
  "formato": "carrossel-4x5",
  "post": { "titulo": "nome interno", "serie": "news", "topico": "OpenAI", "modo": "navy" },
  "pauta": { "...": "ver pauta.md" },
  "fontes": [{ "id": "f1", "titulo": "...", "url": "...", "data": "2026-10-03" }],
  "slides": [{ "t": "capa", "papel": "hook", "alt": "...", "src": ["f1"], "...": "campos do arquétipo" }],
  "legenda": { "texto": "...", "hashtags": ["#..."] }
}
```

- `formato`: `carrossel-4x5` ou `stories-9x16`. Abra só o FORMAT.md dele.
- `post.serie`: `news` (com `topico` opcional) ou `liga`. `post.modo`: `navy` ou `claro`.
- `pauta`, `fontes`, `legenda`, `alt`, `papel` e `src` ficam no arquivo: o `chamada.py` não manda nada disso ao Figma.
- Para remontar, adicione `post.substituir` com o `wrapper` anterior.

## Como montar a sequência

1. Escreva a sequência de **papéis** do arco escolhido ([narrativa.md](narrativa.md)), ajustada ao conteúdo real. Se falta prova, troque o papel ou volte à pesquisa; não invente.
2. Para cada papel, escolha o **arquétipo** que melhor mostra aquele conteúdo (tabela de papéis em narrativa.md). Pergunte-se: isso é uma lista? um número? uma comparação? uma cena no tempo? uma frase só? O formato do conteúdo decide o arquétipo, não o hábito.
3. Aplique as regras de ritmo abaixo e varie.
4. Escreva o texto respeitando os limites do FORMAT.md. **Uma ideia por slide**, com um título que afirma algo.
5. Cada slide termina deixando a pergunta que o próximo responde. Leia em voz alta a sequência de títulos: ela precisa contar a história sozinha.

## Ritmo e variedade (o que torna a estrutura não fixa)

Constante: grade, escala tipográfica, cores, marca, rodapé, capa e fechamento. Variável: arquétipo de miolo, densidade, tipo de elemento visual.

| Regra | Valor |
|---|---|
| Mesmo arquétipo seguido | no máximo 2; três só em A4, A7 e A12, onde repetir é o ritmo |
| Arquétipos de foco (`statement`, `respiro`, `numero`, `citacao`, `pergunta`) | nunca dois seguidos |
| Variedade | 8 slides ou mais: pelo menos 4 arquétipos diferentes no miolo |
| Densidade | no máximo 2 slides densos (mais de 35 palavras) seguidos; um slide leve a cada 4 |
| Elemento não textual | pelo menos 1 a cada 2 slides (ícone, número, imagem, gráfico, linha do tempo) |
| Respiro | 0 em posts de até 6 slides; 1 em 7 a 10; nunca no slide 2, no penúltimo nem no último (usa o fundo oposto ao do post) |
| Slide 2 | segunda capa: autônomo, com a promessa ou o dado mais forte |
| Penúltimo | `resumo` ou `statement` com a síntese, quando o arco pedir |
| Último | `fechamento`, o único com CTA |

## Fundos, formas e aspas

O fundo azul-escuro é a base da série News, mas **não é o único**. Use os fundos e as formas como ferramenta de ritmo ([FORMAT.md](../carrossel-4x5/FORMAT.md#fundos-formas-e-aspas)).

| Regra | Valor |
|---|---|
| Fundo de base | Pelo tipo de post: notícia `azul800`; tutorial, guia e glossário `azul100`; institucional e processo seletivo `powder`; dado e tom sério `azul900` |
| Variar o fundo | Em 7 slides ou mais, use pelo menos 2 fundos e no máximo 4, **só da paleta** (azul 100 a 900 e Powder). O validador avisa nos dois casos e bloqueia qualquer outro |
| Onde trocar | Nos slides de foco: citação, número, pergunta, respiro e fechamento. Slides densos (cards, passos, tabelas) ficam no fundo de base, para a leitura não oscilar |
| Contraste entre vizinhos | Alterne claro e escuro de vez em quando: um slide `azul600` ou `powder` entre dois `azul100` ou `azul800` funciona como virada |
| Formas | No máximo uma por slide; não repita a mesma forma em slides seguidos. Os slides de foco já ganham uma automática |
| Aspas grandes | Sempre que alguém fala (pessoa, empresa, estudante), use `citacao`: `aspas` para frase curta e forte, `cartao` para fala média e `balao` para depoimento informal. Fala longa: corte com reticências entre colchetes |
| Fonte da fala | Fala real tem fonte (`src` ou `fonte`). Inventada só como "exemplo ilustrativo". O validador bloqueia citação sem fonte |

## Texto

- Marcação: `**forte**` sobe um peso; `==acento==` pinta com o acento (use em 1 a 2 palavras por título, nunca no corpo inteiro); `\n` força quebra (use no hook e em frases de destaque, quando a quebra natural ficar ruim).
- Jargão: no máximo 1 termo novo por slide, definido no primeiro uso.
- Números: com unidade, fonte e data. Arredonde para no máximo 3 algarismos significativos.
- Exemplo inventado: nota "Exemplo ilustrativo, …" no próprio slide.
- Sem "LIA". Sem superlativos. Sem promessa que o post não cumpre.

## QA e correção

1. `python scripts/validar_plano.py <plano>`: corrija todo ERRO. AVISO: corrija ou justifique no mapa.
2. Monte. Os códigos de QA do motor:

| Código | Significa | Como corrigir no plano |
|---|---|---|
| G1 fora da área segura | texto fora das margens | encurte ou troque de arquétipo |
| G2 conteúdo passa do limite / encosta na nota | o slide transbordou | corte texto, reduza itens ou divida em dois slides |
| G3 invade o slot do sticker | texto em cima da área do sticker | encurte o título do cartão |
| T2 fonte pequena | algo abaixo do mínimo | não force tamanhos; reescreva |
| T3 título ou hook com linhas demais | título com mais de 2 linhas (feed) | reescreva mais curto |
| T4 palavra maior que a linha | palavra quebrou no meio | troque a palavra ou o arquétipo |
| D1 palavras | acima do alvo ou do teto | corte; mova detalhe para a legenda |
| D2 slide vazio embaixo | pouco conteúdo para o arquétipo | use um arquétipo de foco, junte com o slide vizinho ou acrescente um item real |
| V1, V2 | repetição ou pouca variedade | troque o arquétipo de um dos slides |
| REVIEW imagem pendente | falta enviar a imagem | envie ou troque por um nó existente |

3. Screenshot de cada slide e o checklist abaixo.

## Checklist

Pontue de 0 a 2. Publique com 20 ou mais de 24 e nenhum item com * em 0.

| # | Item | 2 pontos quando |
|---|---|---|
| 1* | Hook | Até 12 palavras, substantivo concreto, tipo H1–H13, sem superlativo |
| 2* | Slide 2 autônomo | Entende-se sem o slide 1 e traz promessa ou dado forte |
| 3* | Promessa cumprida | Todo nome e número do hook reaparece explicado |
| 4 | Uma ideia por slide | Cada slide tem um título que afirma algo e um papel |
| 5* | Prova e fonte | Fatos com fonte e data; pelo menos 1 slide de prova |
| 6 | Exemplo concreto | Cena, número ou nome; fictício rotulado |
| 7 | Transição | Cada slide abre a pergunta que o próximo responde |
| 8 | Densidade | Mediana até 35 palavras, máximo 60, sem slide vazio |
| 9 | Variedade e identidade | 4+ arquétipos no miolo, 2 a 4 fundos, ritmo denso/leve, série correta |
| 10* | CTA único | Um CTA, no último slide e igual ao da legenda |
| 11 | Tom | Acessível, sem medo nem exagero, "Liga" e nunca "LIA" |
| 12 | Legenda | Primeira linha com palavra-chave, 30–80 palavras, 3–5 hashtags, alt em todos os slides |
