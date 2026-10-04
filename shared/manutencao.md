# Manutenção do sistema

Mudanças de visual passam pelo sistema, nunca por ajuste manual em um post.

## Onde fica cada coisa

| Peça | Fonte de verdade | No Figma |
|---|---|---|
| Motor | `motor/build.js` | nó `lib/LIGA_SOCIAL` (`726:2`) na página `Sistema — Social` (`721:2`) |
| Cores | — | coleção `Liga / Social`, modos `Navy` (`721:0`) e `Claro` (`721:1`) |
| Tipografia | — | estilos `Social/*` (feed) e `Social Story/*` (stories) |
| Marcas | — | `marca/liga` (`721:67`) e `marca/news` (`723:2`, com as propriedades "Tópico" e "Com tópico") |
| Ícones | `ICONS` dentro de `motor/build.js` | — |
| Regras do plano | `scripts/validar_plano.py` | — |
| Pesquisa | `research/` | — |

## Mudar o motor

1. Edite `motor/build.js` e suba `version: 'x.y'`.
2. `node -e "new Function('figma', require('fs').readFileSync('motor/build.js','utf8'))"` para checar a sintaxe.
3. `python scripts/publicar.py`: gera `scripts/.saida/publicar-<n>.js` (patch, se houver cache) e imprime o `chars` e o `hash` esperados.
4. Cole cada arquivo, em ordem, como `code` de um `use_figma`. A última parte devolve `version`, `chars` e `hash`, que precisam bater com o esperado.
5. `python scripts/publicar.py --confirm` para atualizar o cache.
6. Remonte `carrossel-4x5/exemplo-plano.json` e `stories-9x16/exemplo-plano.json`, com `post.substituir` igual aos wrappers atuais (`742:15` e `742:338` na página `Produção — Social`). Compare os screenshots com o catálogo visual de arquétipos (`738:170`), que mostra todos os arquétipos em modo claro.

Gotchas do Plugin API que o motor já trata:
- Uma chamada `use_figma` aceita até 50 000 caracteres; a publicação completa vai em partes de 30 000.
- Paint ligado a variável sempre sai com opacidade 1. Transparência vai em `node.opacity` ou no alfa da própria variável.
- Ler `lib.characters` dentro de um laço estoura a memória; leia uma vez para uma variável.
- Espaço inseparável em pares longos quebra a palavra no meio; o motor só o usa em pares de até 16 caracteres.

## Adicionar um ícone

1. Baixe o SVG do Lucide (`https://cdn.jsdelivr.net/npm/lucide-static@1.52.0/icons/<nome>.svg`).
2. Acrescente o conteúdo interno do `<svg>` (os `<path>`, `<circle>`…) ao objeto `ICONS` em `motor/build.js`, em ordem alfabética.
3. Publique e atualize a lista em `carrossel-4x5/FORMAT.md`.

## Adicionar um arquétipo

1. Nova função `LAY.<nome>` no motor, usando `slide()`, `head()`, `put()` e os componentes `card`, `badge`, `chip` e `pill`. Nomeie os blocos com `bloco/<nome>` para o QA medir.
2. Acrescente-o a `ARQ_FEED` ou `ARQ_STORY`, `REQUIRED` e, se for de foco, `FOCO` em `scripts/validar_plano.py`, e documente no FORMAT.md.
3. Teste em navy e claro, com o mínimo e o máximo de itens.

## Mudar cores ou tipografia

Edite as variáveis da coleção `Liga / Social` ou os estilos `Social/*`. Os posts já montados acompanham a mudança. Confira o contraste: texto ≥ 4,5:1, título ≥ 7:1; Powder nunca é texto sobre fundo claro.
