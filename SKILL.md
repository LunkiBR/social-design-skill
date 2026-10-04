---
name: social-design
description: Criar posts de Instagram da Liga de IA da UFSCar (carrossel de feed 4:5 e sequência de stories 9:16) a partir de um tema, de outliers de referência e do conteúdo. A IA decide pauta, ângulo, arco narrativo e hook, escreve um plano de slides e o motor LIGA_SOCIAL monta no Figma com o sistema visual e QA. Use para pauta, carrossel, story, hook, legenda e análise de outliers. Para documentos A4 e apresentações, use liga-materiais.
---

# Social Design

Você é o editor de conteúdo; o sistema é o designer. O usuário pensa em **tema, outliers e conteúdo**. Você transforma isso em uma pauta com ângulo, escolhe um arco narrativo e escreve um **plano de slides**. O motor `lib/LIGA_SOCIAL` no Figma monta grid, tipografia, cor, ícones, rodapé e roda o QA. Você não desenha no Figma.

A estrutura **não é fixa**: cada post escolhe o próprio arco e combina arquétipos de slide conforme o conteúdo. O que é fixo é o sistema (marca, grade, escala tipográfica, cores, ritmo e QA).

Pasta de trabalho: `D:\lia ufscar\social design\skill`. Rode os scripts e salve os `runs/` lá, mesmo quando a skill for carregada da pasta instalada.
Arquivo Figma: `rbxe2L7fFOqKELar7dZ9zD`. Página do sistema: `Sistema — Social` (`721:2`), com o motor `lib/LIGA_SOCIAL` (`726:2`), as marcas `marca/liga` (`721:67`) e `marca/news` (`723:2`), a coleção de variáveis `Liga / Social` (modos Navy e Claro) e os estilos `Social/*` e `Social Story/*`. Os posts são montados na página `Produção — Social`.

## Roteamento

| O pedido é… | Faça | Abra |
|---|---|---|
| um tema ou ideia ainda aberta ("quero falar de X") | pauta: ângulos, outliers, recomendação | [shared/pauta.md](shared/pauta.md), [shared/outliers.md](shared/outliers.md) |
| analisar referências, links ou prints de outros perfis | desmontar outliers e registrar no acervo | [shared/outliers.md](shared/outliers.md), [shared/imagens.md](shared/imagens.md) |
| achar, baixar ou capturar imagens (oficiais, prints, Commons) | pesquisar, propor, baixar com procedência e enviar ao Figma | [shared/imagens.md](shared/imagens.md) |
| produzir um carrossel | pauta → roteiro → montagem | [shared/narrativa.md](shared/narrativa.md), [shared/roteiro.md](shared/roteiro.md), [carrossel-4x5/FORMAT.md](carrossel-4x5/FORMAT.md) |
| produzir stories | pauta → roteiro → montagem | [shared/narrativa.md](shared/narrativa.md), [shared/roteiro.md](shared/roteiro.md), [stories-9x16/FORMAT.md](stories-9x16/FORMAT.md) |
| carrossel e stories do mesmo tema | carrossel primeiro; os stories divulgam o post (arco S7) | os dois FORMAT.md, um por execução |
| documento A4, apresentação, playbook | fora desta skill | skill `liga-materiais` |
| mudar o visual, os arquétipos ou o motor | manutenção do sistema | [shared/manutencao.md](shared/manutencao.md) |

Leia sempre [shared/posicionamento.md](shared/posicionamento.md) antes da primeira pauta da conversa.

## Execução

1. **Pauta.** Siga [shared/pauta.md](shared/pauta.md). Se o usuário trouxe outliers, desmonte cada um ([shared/outliers.md](shared/outliers.md)); se não trouxe, pesquise referências do tema. Apresente 2 ou 3 ângulos com hook candidato e recomende um. Siga direto para o roteiro quando o usuário já tiver decidido o ângulo ou pedido execução direta.
2. **Fatos.** Verifique cada fato, número, nome e data em fonte primária ou em veículo confiável, e registre em `fontes`. Sem fonte, a frase sai do plano.
3. **Imagens.** Siga [shared/imagens.md](shared/imagens.md): procure primeiro material oficial e prints reais, proponha a lista ao usuário, baixe ou capture com `scripts/imagens.py` (procedência e crédito ficam registrados) e envie ao Figma. Concluído quando cada imagem do post tem nó no manifesto.
4. **Roteiro.** Siga [shared/roteiro.md](shared/roteiro.md) e o FORMAT.md do formato. Salve em `runs/<data>-<slug>/plano.json`. Concluído quando `python scripts/validar_plano.py runs/<data>-<slug>/plano.json` termina com 0 erro.
5. **Montagem.** Rode `python scripts/chamada.py runs/<data>-<slug>/plano.json` e cole a saída como `code` de um `use_figma` (carregue antes a skill `figma-use`). Imagens: `{"asset": "<nome>"}` para as baixadas pelo fluxo de imagens (o crédito sai automático), `{"node": "<id>", "credito": "…"}` para algo que já está no Figma, `{"key": "..."}` para um espaço pendente.
6. **QA.** A montagem devolve `qa`. Corrija o **plano**, nunca o desenho, e remonte com `post.substituir` igual ao `wrapper` anterior. Concluído quando não há `ERROR`, cada `WARNING` foi corrigido ou justificado e um screenshot de cada slide foi revisado com o checklist de [shared/roteiro.md](shared/roteiro.md#checklist).
7. **Entrega.** Escreva `runs/<data>-<slug>/mapa.md` com slide → frame → fonte, a pauta escolhida, os outliers usados, as imagens com origem e licença, a legenda final e as pendências. Entregue o link do wrapper, a legenda e o mapa.

Regras que não mudam:
- Nunca chame a Liga de "LIA". Use "Liga de Inteligência Artificial da UFSCar" ou "Liga de IA da UFSCar"; no texto corrido, "a Liga".
- Não invente métricas, parceiros, vagas, critérios de seleção nem casos da Liga. Exemplo inventado leva o rótulo "exemplo ilustrativo".
- Referência viral não é prova de desempenho. Outlier inspira mecanismo, não conteúdo copiado.
