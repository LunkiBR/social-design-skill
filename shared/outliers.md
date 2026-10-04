# Outliers: identificar, desmontar e reaproveitar sem copiar

Outlier é um post que performou muito acima do normal **do próprio perfil**. Ele não prova que um tema funciona; ele aponta um **mecanismo** que vale testar. Base: [research/pesquisa-sistema-conteudo.md](../research/pesquisa-sistema-conteudo.md), seção 5.

## 1. Identificar (score)

score = métrica do post ÷ mediana da mesma métrica nos últimos 12 a 30 posts **do mesmo formato** do mesmo perfil, excluindo o próprio post.

| Score | Leitura |
|---|---|
| ≥ 3× | candidato |
| ≥ 5× | forte |
| ≥ 10× | excepcional |

- Métricas públicas: curtidas e comentários (carrossel), visualizações (reels). Salvamentos e envios não são públicos: infira pelo tipo de conteúdo, não invente.
- Ignore posts com menos de 7 dias.
- Descarte ou anote quando a causa é externa: sorteio, impulsionamento, colab ou repost de conta grande, notícia que todo mundo cobriu no dia.
- Só trate um mecanismo como **padrão** depois de 3 outliers com o mesmo mecanismo.

Para calcular com uma planilha: `python scripts/outlier.py score perfil.csv` (colunas `post,data,formato,curtidas,comentarios[,views]`). O script lista os candidatos com score e mediana.

## 2. Desmontar (ficha)

Crie a ficha com `python scripts/outlier.py ficha <slug>` e preencha em `acervo/outliers/<slug>.json`:

| Campo | Pergunta |
|---|---|
| ref, autor, data_coleta, formato | De onde veio e quando foi visto |
| score, metrica, base | Número, métrica e tamanho da amostra (ou `null` se não há dado) |
| tema | Assunto bruto |
| gatilho | Havia notícia ou evento? |
| angulo | Qual a tese ou pergunta? |
| hook | Tipo (H1–H13), número de palavras, o que o slide 1 prometia |
| arco | Número de slides, arco (A1–A16 ou S1–S8), layout dominante |
| prova | Que dado, fonte ou demonstração sustentava |
| emocao | Curiosidade, alívio, identificação, utilidade, orgulho, surpresa |
| cta | Qual e onde |
| causa_distribuicao | Colab, repost, tendência, conta grande, nenhuma conhecida |
| mecanismo | "Funcionou porque ___", em uma frase **sem marca nem tema** |
| adaptar / nao_adaptar | O que vale trazer e o que depende da identidade do autor |
| aprovado_por | Quem aprovou como repertório da Liga (vazio até aprovação) |

## 3. Reaproveitar sem copiar

1. Escreva o mecanismo sem marca nem tema. Exemplo: "traduz um anúncio técnico em efeitos na rotina, com uma linha do tempo ilustrada".
2. Aplique a um tema novo da pauta.
3. **Regra de não cópia:** o post da Liga difere do original em pelo menos **2 eixos** (tema, ângulo, arco, exemplo, visual) e traz pelo menos **1 elemento original** (dado, exemplo brasileiro, contexto UFSCar, teste próprio). O validador exige `eixos_diferentes` (2+) e `contribuicao_original`.
4. Registre o outlier na pauta (`pauta.outliers`) com a hipótese testável.
5. Nunca reproduza texto, imagem ou layout de outro perfil.

## 4. Quando o usuário manda o outlier

- Link: abra, leia legenda e slides visíveis, anote o que for público. Se não abrir, peça um print.
- Print: descreva o que vê e preencha a ficha com o que é observável; deixe o score `null` se não houver base.
- Ele pode aprovar o mecanismo sem aprovar todo o post: registre o escopo em `adaptar` e `aprovado_por`.
