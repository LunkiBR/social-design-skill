# Carrossel de feed 4:5 (1080 × 1350)

Formato do plano: `"formato": "carrossel-4x5"`. Exemplo completo e aprovado: [exemplo-plano.json](exemplo-plano.json) (o post dos OpenAI Dots reescrito como plano).

## O que o motor faz sozinho

- Grade: margens de 96 px, coluna de 888 px. Cabeçalho com a marca em y = 96. Conteúdo de y = 200 a 1142. Rodapé em y = 1206.
- Rodapé: contador `NN / TT` à esquerda e pista "Arraste →" à direita em todos os slides, menos o último. Na capa, a pista pode ser uma pergunta (`pista`).
- Cores pelo modo do post. Capa e fechamento sempre navy. `respiro` usa o modo oposto.
- Tipografia: Clash Display. Título 88/96, corpo 40/56, card 40 + 32, eyebrow 28 em caixa-alta, hook 160 (até 5 palavras) ou 112 (6 a 12).
- Raios 32 e pill. Ícones de traço com 48 px, em círculo de 96 px.
- Espaço inseparável contra palavra órfã no fim das linhas.

## Limites de palavras por slide

Contados sem rodapé, notas e fontes. O validador e o motor usam os mesmos números.

| Classe | Alvo | Teto |
|---|---|---|
| capa (hook + apoio) | 18 | 24 |
| miolo | 45 | 60 |
| foco (`statement`, `respiro`, `numero`, `citacao`, `pergunta`) | 15 | 20 |
| fechamento | 40 | 50 |

Título de slide: até 2 linhas, o que dá umas 10 palavras. Hook: até 12 palavras e 70 caracteres.

## Arquétipos

Campos comuns a todos: `t` (arquétipo), `papel`, `alt` (texto alternativo, 40+ caracteres), `src` (ids de `fontes`), `modo` (opcional, sobrescreve o do post).

### `capa`: slide 1, sempre
| Campo | Uso |
|---|---|
| `hook` | Obrigatório. `\n` para quebrar; `==palavra==` em acento |
| `apoio` | Uma frase de apoio, até ~12 palavras |
| `eyebrow` | Rótulo curto acima do hook (ex.: "Guia rápido") |
| `pista` | Texto do rodapé no lugar de "Arraste" (ex.: "Como isso muda o seu dia?") |
| `variante` | `arte` (imagem recortada acima do hook, padrão quando há `imagem`), `tipografica` (padrão sem imagem, com a marca grande ao fundo), `imagem` (foto em sangria total com degradê de legibilidade), `numero` (número gigante + hook; campo `numero`) |
| `imagem` | `{ "node": "id" }`, `{ "hash": "..." }` ou `{ "key": "nome", "ratio": 1.5 }`; `ajuste`: `fit` ou `fill` |
| `data` | Data pequena no cabeçalho, alinhada à direita |

### `texto`: título + corpo
`titulo`, `corpo`, `eyebrow`, `destaque` (`{ eyebrow, texto }`, card destacado), `imagem` (abaixo do texto, ocupa o espaço que sobra; informe `ratio`), `nota` (rodapé do slide, ex.: ressalva).

### `statement`: uma frase grande (foco)
`texto` (até 12 palavras, 1 a 2 palavras em `==acento==`), `apoio`, `eyebrow`, `nota`. Centralizado na vertical.

### `respiro`: pausa visual (foco)
`texto` (até 6 palavras). Mesmo layout do statement, em modo oposto. Entre o slide 3 e o antepenúltimo.

### `numero`: dado gigante (foco)
`valor` (até 5 caracteres: "73%", "4×", "R$ 2"), `rotulo` (o que o número mede), `texto` (contexto, até 25 palavras), `fonte` (obrigatória, ou `"proprio": true` se o dado é da Liga), `eyebrow`.

### `citacao` (foco)
`texto` (até 30 palavras), `autor`, `cargo`, `foto` (imagem, vira avatar redondo).

### `cards`: 2 a 4 itens paralelos
`titulo`, `corpo`, `itens: [{ icone, titulo, texto }]` (ou `numero` no lugar de `icone`), `variante`: `lista` (padrão, até 3 cards empilhados, como no post dos Dots) ou `grade` (2 × 2, para 4 itens curtos; título compacto). `compacto: true` usa título de 64. Título do card: até ~30 caracteres; texto: até ~14 palavras. `nota` opcional.

### `passos`: sequência numerada
`titulo`, `itens: [{ titulo, texto }]` (3 a 5), `atual` (índice destacado, opcional). Círculos numerados ligados por trilho. Com 4 ou mais passos, o título fica compacto.

### `timeline`: tempo ou etapas
`titulo`, `itens: [{ marca, titulo, texto }]` (3 a 5; `marca` = "09h", "2023", "Dia 1"), `nota` (use para "Exemplo ilustrativo…").

### `comparacao`: A vs B
`titulo`, `a` e `b`: `{ rotulo, texto }` ou `{ rotulo, itens: [...] }`, `icone` opcional; `destaque`: `a` ou `b` (padrão `b`, com ✓; o outro lado ganha ✕); `veredito` (frase abaixo); `variante: "empilhada"` para textos longos; `compacto`.

### `mito-fato`
`mito`, `fato`, `explicacao`, `fonte`, `titulo` (opcional; sem título, o bloco fica centralizado).

### `imagem`: print, foto ou vídeo como prova
`titulo`, `imagem` (com `ratio`), `legenda` (frase de leitura, 48 px), `texto` (detalhe), `fonte`. Use print real para qualquer afirmação sobre produto; imagem gerada só para cena ou metáfora.

### `grafico`: barras horizontais
`titulo` (a conclusão, não o tema), `barras: [{ rotulo, valor, texto }]` (até 5, em ordem decrescente), `destaque` (índice da barra em acento; padrão 0), `unidade`, `fonte` (obrigatória). Sem pizza.

### `pergunta` (foco)
`pergunta` (até 14 palavras), `apoio`, `eyebrow`. Interrogação gigante ao fundo. Sem CTA: serve para reorientar a atenção no meio do carrossel.

### `definicao`: glossário
`termo`, `definicao` (até 24 palavras), `exemplo` (card), `exemploRotulo`, `eyebrow` (padrão "Definição").

### `resumo`: TL;DR
`titulo` (padrão "Resumo"), `itens` (3 a 5 frases curtas), `icone` (padrão `check`).

### `fechamento`: último slide, sempre
`titulo`, `corpo`, `destaque` (`{ eyebrow, texto }`, o card com a tese da série), `cta` (texto do botão; um verbo; até ~28 caracteres). Sempre navy.

## Ícones disponíveis

`arrow-down`, `arrow-right`, `book-open`, `bookmark`, `bot`, `brain`, `briefcase`, `building-2`, `calculator`, `calendar`, `chart-column`, `check`, `circle-check`, `circle-help`, `circle-x`, `clock`, `cloud`, `code`, `cpu`, `database`, `dollar-sign`, `eye`, `file-text`, `flask-conical`, `gauge`, `git-branch`, `globe`, `graduation-cap`, `hand-coins`, `hand-helping`, `handshake`, `heart`, `history`, `image`, `layers`, `lightbulb`, `link`, `list-checks`, `lock`, `mail`, `map-pin`, `medal`, `megaphone`, `message-circle`, `mic`, `newspaper`, `party-popper`, `puzzle`, `quote`, `repeat`, `rocket`, `scale`, `school`, `search`, `settings`, `share-2`, `shield-check`, `smartphone`, `sparkles`, `target`, `terminal`, `trending-down`, `trending-up`, `triangle-alert`, `trophy`, `user`, `users`, `wand-sparkles`, `wrench`, `x`, `zap`

Lucide (ISC). Para adicionar um ícone, veja [shared/manutencao.md](../shared/manutencao.md).

## Imagens

Fluxo completo (pesquisar, baixar, capturar, enviar ao Figma) em [shared/imagens.md](../shared/imagens.md).

- Imagem baixada pelo fluxo: `{ "asset": "nome" }`. O nó, a proporção e o crédito vêm do manifesto `runs/<slug>/img/imagens.json`.
- Algo que já está no Figma: `{ "node": "123:45", "credito": "OpenAI" }`. Se o nó tem preenchimento de imagem, ele é reaproveitado; vídeo, vetor e grupo são clonados e encaixados.
- Espaço pendente: `{ "key": "nome", "ratio": 1.5 }`.
- Opções: `ajuste` (`fill` ou `fit`; `fit` para recorte com fundo transparente na capa `arte`), `borda: false`, `credito`, `creditoPrefixo` (padrão "Imagem: ").
- Com `credito`, o motor põe o selo "Imagem: <crédito>" sobre a imagem.
