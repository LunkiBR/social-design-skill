# Stories 9:16 (1080 × 1920)

Formato do plano: `"formato": "stories-9x16"`. Exemplo: [exemplo-plano.json](exemplo-plano.json) (arco S7, divulgação do carrossel dos Dots com enquete e link).

Os stories usam os mesmos arquétipos do carrossel ([carrossel-4x5/FORMAT.md](../carrossel-4x5/FORMAT.md)), em escala de leitura de 5 a 7 segundos, e mais dois exclusivos: `interacao` e `post`.

## O que muda em relação ao feed

| Item | Stories |
|---|---|
| Zona segura | x 96–984, y 270–1540. Acima e abaixo disso, a interface do Instagram cobre o conteúdo |
| Cabeçalho | Marca em y = 286, 30% maior |
| Conteúdo | y 384 a 1444 |
| Rodapé | Não há contador nem pista de arraste: a barra de progresso é nativa |
| Escala | ~1,2× o feed: hook 128, título 104 (88 compacto), corpo 48/64, card 48 + 40, mínimo 32 |
| Palavras por cartão | capa até 12 (teto 16); miolo até 18 (teto 25); foco até 12; fechamento até 18 |
| Hook | Até 8 palavras e 44 caracteres |
| Cartões | 3 a 7 por sequência |
| Cartões de texto e fechamento | Centralizados na vertical |
| Comparação | Painéis empilhados |

## Stickers

O motor **reserva o espaço** do sticker nativo; ele é adicionado no app na hora de publicar. Use `sticker` em qualquer cartão, um por cartão.

| `sticker` | Área reservada (x, y, l, a) | Cuidado |
|---|---|---|
| `enquete` | 144, 1000, 792, 336 | Duas opções reais; nada de "tanto faz" |
| `quiz` | 144, 880, 792, 520 | Uma resposta correta; pergunta em até 3 linhas |
| `slider` | 144, 1040, 792, 200 | |
| `caixa` | 144, 1000, 792, 360 | Responda em até 24 h; alimenta o arco A10 do feed |
| `contagem` | 144, 1040, 792, 240 | Só com data real (`data` obrigatório) |
| `link` | 240, 1336, 600, 120 | Só no último ou penúltimo cartão; a informação essencial fica no cartão |

A área fica numa camada invisível `slot/<tipo>`; o texto do cartão termina 48 px acima dela. O QA acusa `G3` se algum texto invadir.

## Arquétipos exclusivos

### `interacao`: cartão com sticker
`sticker` (obrigatório), `titulo` (a pergunta da enquete ou do quiz; até 12 palavras), `corpo`, `eyebrow`, `instrucao` (linha pequena abaixo do sticker, ex.: "Vote na enquete acima").

### `post`: divulgação de um post do feed
`titulo`, `eyebrow` (padrão "Post novo"), `origem` (id do slide do feed para a miniatura; use o slide 2 ou 3, não a capa, quando o story vem depois do post). A miniatura é uma cópia viva do slide.

### `fechamento` com link
`titulo`, `sticker: "link"`, `cta` (texto acima da seta que aponta para o sticker). Sem link, `cta` vira o botão pill.

## Arquétipos do feed que funcionam bem em stories

`capa` (todas as variantes), `texto`, `statement`, `numero`, `citacao`, `cards` (até 3), `passos` (até 4), `mito-fato`, `pergunta` (com ou sem sticker), `definicao`, `imagem`. Evite `timeline` com mais de 3 marcos, `grafico` com mais de 4 barras e `resumo` com mais de 3 itens: passam do limite de leitura.
