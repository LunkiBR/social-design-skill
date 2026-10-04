# Social Design

Sistema de posts de Instagram da Liga de Inteligência Artificial da UFSCar: carrossel de feed 4:5 e sequência de stories 9:16.

Você traz o **tema**, os **outliers** (posts de referência que foram muito bem) e o **conteúdo**. A IA:
1. decide o ângulo e escolhe um arco narrativo e um hook;
2. escreve um plano de slides;
3. aciona o motor `LIGA_SOCIAL`, que monta o post no Figma com a identidade da Liga e roda o QA.

A estrutura **não é fixa**. Cada post combina arquétipos de slide conforme o conteúdo, e o motor e o validador garantem consistência visual, ritmo e qualidade editorial.

## Como pedir

- "Quero um carrossel sobre o lançamento do Gemini 3. Referências: <links>."
- "Tema: IA nos estudos de cálculo. Me dá 3 ângulos antes de produzir."
- "Desmonta esse outlier e me diz o que dá para aproveitar: <link>."
- "Faz os stories de divulgação do último carrossel, com enquete."
- "Acha o gráfico oficial do anúncio e um print da página do produto para o slide de prova."

A entrada da skill é [SKILL.md](SKILL.md).

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `shared/` | Posicionamento, pauta, outliers, imagens (pesquisa, download, captura, crédito), narrativa (arcos, hooks, CTA), roteiro (ritmo e checklist) e manutenção |
| `carrossel-4x5/` | Especificação dos 17 arquétipos de feed e o plano de exemplo (Dots) |
| `stories-9x16/` | Especificação de stories, stickers e o plano de exemplo |
| `motor/build.js` | Fonte do motor `LIGA_SOCIAL`, publicado no Figma |
| `scripts/` | `validar_plano.py`, `chamada.py`, `publicar.py`, `outlier.py` e `imagens.py` |
| `acervo/` | Fichas de outliers, imagens de referência (não publicáveis) e o histórico de posts publicados |
| `research/` | Pesquisas que fundamentam os números do sistema |
| `runs/` | Um diretório por post produzido: plano, mapa e imagens |

## Comandos

```text
python scripts/validar_plano.py runs/<data>-<slug>/plano.json
python scripts/chamada.py runs/<data>-<slug>/plano.json
python scripts/outlier.py score perfil.csv
python scripts/outlier.py ficha <slug> --ref <url>
python scripts/imagens.py candidatas <url-da-página>
python scripts/imagens.py commons "<busca>"
python scripts/imagens.py baixar <url> --run runs/<data>-<slug> --nome <chave> --credito "<quem>"
python scripts/imagens.py capturar <url> --run runs/<data>-<slug> --nome <chave> --credito "<quem>"
python -m unittest discover -s tests
```

Python 3.10 ou posterior. `imagens.py` usa Pillow (`pip install pillow`) e o Edge ou o Chrome instalado para capturas; o resto usa só a biblioteca padrão.

## Figma

Arquivo `rbxe2L7fFOqKELar7dZ9zD`:
- `Sistema — Social` (`721:2`): motor, marcas, variáveis `Liga / Social` e estilos `Social/*`.
- `Produção — Social`: os posts montados e um catálogo visual de todos os arquétipos.
- `Assets — Social`: as imagens baixadas ou capturadas, uma por nó (`asset/<slug>/<nome>`), usadas pelos planos.

A versão anterior desta skill (acervo, rotas e prancha HTML) está em `../backups/socialdesign-before-motores-20261004`.
