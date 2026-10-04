# Imagens: pesquisar, baixar, capturar e usar com crédito

Toda imagem tem **um uso** e **uma procedência registrada**. O script é `scripts/imagens.py` (rode `python scripts/imagens.py` sem argumentos para a ajuda).

## Dois usos, duas pastas

| Uso | Pasta | Vai para o post? |
|---|---|---|
| `post`: a imagem aparece no slide | `runs/<data>-<slug>/img/` | Sim, com crédito automático |
| `referencia`: estudo de outlier, moodboard, comparação | `acervo/referencias/<slug>/` | **Nunca**. O validador bloqueia |

Cada pasta tem um `imagens.json` com URL, página de origem, crédito, licença, tamanho, proporção, data e o nó no Figma.

## Onde procurar, em ordem de preferência

1. **Material oficial.** Newsroom e press kit da empresa, página do produto, documentação, README no GitHub, figuras do paper (confira a licença no arXiv) e pôster do vídeo oficial. Exemplos: `openai.com/news`, `anthropic.com/news` (tem "Download press kit"), `blog.google`, `ai.meta.com/blog`. Licença `oficial`.
2. **Print real** da página, da interface ou do gráfico, com `capturar`. É a melhor prova de um produto ou de um número publicado. Licença `captura`.
3. **Wikimedia Commons** para o genérico: pessoas públicas, lugares, objetos, o campus da UFSCar. Busque com `commons`; use só CC BY, CC BY-SA, CC0 ou domínio público, e copie autor e licença no crédito. Licença `cc` ou `dominio-publico`.
4. **Fotos da Liga** (eventos, bastidores, projetos). Licença `propria`, sem selo de crédito.
5. **Imagem gerada** para cena ou metáfora, nunca como prova de algo real. Licença `gerada-ia`.

Evite foto de agência ou de veículo de imprensa (Getty, Reuters, AP, Folha…), imagem de banco sem licença, posts de outros criadores (só como `referencia`), rosto de pessoa sem notoriedade pública, logo recortado de outro contexto e qualquer imagem com marca d'água.

## Fluxo

1. **Achar a página.** Use WebSearch (com `allowed_domains` para focar no site oficial) ou o navegador; confirme que a página é a fonte primária do fato.
2. **Listar as imagens da página:** `python scripts/imagens.py candidatas <url>` mostra og:image, imagens do corpo (a maior variante do `srcset`), pôsteres de vídeo, texto alternativo, largura e o crédito sugerido.
3. **Propor ao usuário** uma tabela curta: o que a imagem mostra, de onde vem, licença, crédito e em qual slide entra. Baixe depois do ok (ou se o usuário já autorizou baixar o que for oficial).
4. **Baixar:**
   ```text
   python scripts/imagens.py baixar <url-da-imagem> --run runs/<data>-<slug> --nome <chave> --credito "Anthropic" --origem <página> --licenca oficial
   ```
   O script confere que é imagem, converte para PNG (com transparência) ou JPEG, limita a 2160 px no lado maior e registra.
5. **Ou capturar a página:**
   ```text
   python scripts/imagens.py capturar <url> --run runs/<data>-<slug> --nome <chave> --credito "OpenAI" --recorte 130,140,1020,1240
   ```
   Usa o Edge ou o Chrome sem janela, em 2× para ficar nítido. O recorte é em px da página: capture primeiro sem recorte, olhe a imagem (Read) e recapture recortando o trecho que importa, sem banner de cookies.
6. **Conferir** cada arquivo com Read: conteúdo certo, nitidez, nada de dado pessoal à mostra.
7. **Enviar ao Figma:**
   - `python scripts/imagens.py alvos runs/<data>-<slug> <slug>` gera o código de um `use_figma`, que cria um retângulo por imagem na página `Assets — Social` e devolve os ids;
   - chame `upload_assets` com `count` igual ao número de imagens e `nodeIds` nos ids devolvidos, na mesma ordem;
   - `python scripts/imagens.py enviar runs/<data>-<slug> <nome>=<submitUrl> …` envia os bytes e grava nó e hash no manifesto. As URLs valem 10 minutos.
8. **Usar no plano:** `"imagem": { "asset": "<nome>" }`. O `chamada.py` troca pelo nó, pela proporção e pelo crédito. Campos extras (`ajuste`, `borda`) continuam valendo.

## Crédito

- O motor coloca o selo "Imagem: <crédito>" no canto inferior esquerdo da imagem. Na capa com foto em sangria, ele vai para o canto superior direito.
- Licenças `propria` e `gerada-ia` não levam selo. Use `creditoPrefixo` para trocar "Imagem: " (ex.: "Print: ", "Vídeo: ").
- Imagem já existente no Figma (`{"node": …}`) leva `"credito"` explícito quando for de terceiros; o validador avisa quando falta.
- A legenda do post repete a fonte quando a imagem é prova de um fato.

Base: a Lei 9.610/98, art. 46, III, permite citar trechos de obra para estudo, crítica ou polêmica, na medida justificada e com autor e origem indicados. Usar material de imprensa oficial com crédito para noticiar e explicar segue essa lógica. Não é parecer jurídico: na dúvida, use print próprio, Commons ou foto da Liga. Se um titular pedir, retire a imagem.

## Referências de outros perfis (outliers)

- O caminho mais confiável é o usuário mandar o print. Salve em `acervo/referencias/<slug>/` e registre a ficha em [outliers.md](outliers.md).
- Post público: `candidatas <url-do-post>` às vezes devolve a og:image. `capturar` funciona quando a página não exige login (Instagram e X costumam exigir).
- Tudo em `acervo/referencias/` é salvo com uso `referencia`, mesmo que o comando diga outra coisa.

## Vídeo

Não há extração de frames instalada. Use o pôster do vídeo (`candidatas`), o print do usuário ou a captura da página no momento certo. Vídeos que já estão no Figma (como o dos Dots) entram por `{"node": …}`.
