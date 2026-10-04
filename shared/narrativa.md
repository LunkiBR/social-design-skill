# Narrativa: papéis, arcos, hooks e CTA

Base: [research/pesquisa-sistema-conteudo.md](../research/pesquisa-sistema-conteudo.md), seções 2 a 4 e 8. Regras com [F] têm fonte; o resto é heurística de prática.

## Papéis de slide (lista fechada)

Cada slide do carrossel tem exatamente um `papel`. O papel diz **o que o slide faz**; o arquétipo (`t`) diz **como ele aparece**.

| Papel | Função | Arquétipos que servem |
|---|---|---|
| hook | Promessa ou notícia que faz parar. Só slide 1 | capa |
| contexto | Quem, o quê, quando | texto, imagem, numero |
| definicao | "O que é", em uma frase e uma analogia | texto (com destaque), definicao |
| mecanismo | Como funciona, em 2 a 4 passos | passos, comparacao, texto |
| tensao | Problema, risco, custo de não saber | cards, mito-fato, statement |
| prova | Número, citação, print, resultado. Leva fonte | numero, grafico, imagem, citacao |
| exemplo | Cena concreta ou mini-caso ("exemplo ilustrativo" se for inventado) | timeline, texto, imagem |
| virada | Contra-intuitivo, erro comum desfeito | mito-fato, statement, pergunta |
| impacto | O que muda para você (2 a 3 itens) | cards |
| comparacao | A versus B | comparacao |
| passo | Um passo executável de tutorial | passos, texto, imagem |
| sintese | A lição em uma frase | statement, resumo |
| respiro | Pausa leve | respiro, numero, pergunta |
| cta | Uma única ação. Só no último slide | fechamento |

## Arcos de carrossel

Escolha **um arco como espinha**. Pode trocar um slide por outro papel quando o conteúdo pedir. Notícia é sempre A1, A2 ou A13.

| # | Arco | Quando | Sequência de papéis | Slides | CTA |
|---|---|---|---|---|---|
| A1 | Explicador de notícia | Anúncio com fatos a esclarecer | hook > contexto > definicao > mecanismo > prova > sintese > cta | 6–8 | seguir, salvar |
| A2 | Notícia + impacto no dia a dia (padrão da série News) | Novidade que mexe na rotina | hook > definicao > mecanismo > impacto > exemplo > impacto > tensao > cta | 8 | compartilhar, comentar, seguir |
| A3 | Mito vs fato | Equívocos sobre IA | hook > (mito/fato+prova) ×3 > virada > sintese > cta | 6–8 | compartilhar |
| A4 | Passo a passo | Ensinar a fazer algo | hook(resultado) > pré-requisitos > passo ×4–6 > erro comum > resultado > cta | 7–10 | salvar |
| A5 | Comparação A vs B | Ferramentas, modelos, abordagens | hook(A ou B?) > critérios > comparacao ×2 > exemplo > veredito por caso > cta | 6–8 | salvar, comentar |
| A6 | Linha do tempo | Como chegamos aqui | hook > marcos datados > virada(onde estamos) > sintese > cta | 6–9 | seguir, salvar |
| A7 | Lista / ranking | Ferramentas, recursos, hábitos | hook(número) > item ×5–8 > bônus > cta | 7–10 | salvar |
| A8 | Estudo de caso / bastidor | Projeto ou competição da Liga | hook(resultado) > contexto > decisão > obstáculo > solução > prova > aprendizado > cta | 7–9 | comentar, seguir |
| A9 | Erro comum → correção | Prompts ruins, maus hábitos | hook(erro) > por que parece certo > por que falha > correção > antes/depois > sintese > cta | 6–8 | salvar |
| A10 | Pergunta → resposta | Dúvidas da caixa de perguntas | hook(pergunta) > resposta curta > explicação > exemplo > limite > cta | 5–7 | mandar pergunta |
| A11 | O que vem aí | Tendência, roadmap | hook(pergunta de futuro) > sinal ×3 > cenário > o que observar > cta | 6–8 | comentar, seguir |
| A12 | Glossário | Evento ou tema com jargão | hook > termo ×6–10 > como se conectam > cta | 7–12 | salvar |
| A13 | Resumo de evento | Cobertura de keynote ou conferência | hook(maior anúncio) > mapa do que saiu > anúncio ×3–4 > o que ficou de fora > sintese > cta | 7–10 | seguir |
| A14 | Devo usar X? | Escolha por perfil | hook(pergunta) > critério ×3 > se/então > exemplo > veredito > cta | 6–8 | salvar |
| A15 | Testei X | Experimento simples e verificável | hook(resultado) > pergunta do teste > método > prova > limites > conclusão > cta | 6–8 | comentar |
| A16 | Recrutamento | Processo seletivo aberto | hook(oportunidade) > quem somos > o que você faz > áreas > etapas e prazos > FAQ > cta | 6–8 | inscrever |

Não repita o mesmo arco em mais de 3 posts seguidos (confira `acervo/publicados.jsonl`).

## Arcos de stories

| # | Arco | Cartões | Sequência | Sticker | CTA |
|---|---|---|---|---|---|
| S1 | Anúncio de evento | 4–5 | gancho com data > o que é > destaque > como participar > contagem | contagem no último; link no 4 | inscrever |
| S2 | Bastidores | 3–5 | cena > contexto > detalhe > pergunta > teaser | enquete ou caixa no 4 | responder |
| S3 | Quiz educativo | 3–4 | pergunta com quiz > dica > resposta com 1 insight > "quer ver mais?" | quiz no 1; link no 4 | abrir o post |
| S4 | Notícia em 3 stories | 3 | o que aconteceu > por que importa > o que muda + link | enquete opcional no 3 | abrir o post |
| S5 | Contagem regressiva | 2–3 | teaser > contagem > o que esperar | contagem | lembrete |
| S6 | Recrutamento | 5–7 | inscrições abertas > quem somos > o que você faz > etapas e prazos > FAQ > como se inscrever > prazo | caixa no 5; link no 6; contagem no 7 | inscrever |
| S7 | Divulgação de post do feed | 2–5 | teaser (não repetir a capa) > pergunta ligada ao tema > post novo + link | enquete no 2 | abrir o post |
| S8 | Resposta a perguntas | 3–5 | pergunta literal > resposta em frases curtas > "mande a sua" | caixa | enviar pergunta |

Saída é maior nos 3 primeiros cartões [F]: gancho no 1 e valor já no 2. Um sticker interativo por cartão. Link só no último ou penúltimo, com a informação essencial também no cartão (o clique no link é baixo).

## Hooks (slide 1)

Até **12 palavras e 70 caracteres** no feed; até **8 palavras** no story. Um substantivo concreto (nome, produto, número) na primeira metade. Uma ideia só.

| # | Tipo | Fórmula | Exemplo |
|---|---|---|---|
| H1 | Notícia | [Quem] + [verbo] + [o que muda para você] | "A OpenAI quer colocar um colega digital no seu dia a dia" |
| H2 | Número | [Número] + [sujeito] + [consequência] | "3 recursos do dev day que mudam como você programa" |
| H3 | Contra-intuitivo | "[Crença] está errada" | "Mais parâmetros não significa modelo melhor" |
| H4 | Promessa prática | "Como [resultado] em [limite]" | "Como revisar código com IA sem entregar seu projeto" |
| H5 | Pergunta honesta | Pergunta que o carrossel responde inteira | "Por que o ChatGPT erra conta de três dígitos?" |
| H6 | Lista | "N [coisas] para [objetivo]" | "5 termos de IA que você vai ouvir no próximo evento" |
| H7 | Erro comum | "Você [faz X]? Veja o custo" | "Você escreve prompts assim? Veja por que sai fraco" |
| H8 | Identificação | "Se você [perfil], isto é para você" | "Cursa engenharia e não sabe por onde começar em IA?" |
| H9 | Consequência | "[Mudança] muda o que [perfil] consegue fazer" | "Esse recurso muda o que um estagiário consegue entregar" |
| H10 | Comparação | "[A] ou [B]: qual para [uso]" | "Cursor ou Copilot: qual para a faculdade?" |
| H11 | Bastidor | "Fizemos [X]. Veja o que deu errado" | "Treinamos um modelo em um fim de semana. O que falhou" |
| H12 | Previsão | "O que muda em [área] em [prazo]" | "O que muda em IA para programadores em 12 meses" |
| H13 | Citação | Frase curta + atribuição | "'[frase do CEO]' O que isso significa na prática" |

Bloqueado pelo validador: "você não vai acreditar", "chocante", "ninguém te conta", "revolucionário", "incrível", "mudou tudo", caixa-alta contínua. Nome ou número do hook precisa reaparecer nos slides seguintes.

**Slide 2 é uma segunda capa** [F]: o Instagram pode reexibir o carrossel começando por ele. Ele precisa se entender sozinho (sem começar por "Ele", "Isso", "Mas") e trazer a promessa ou o dado mais forte.

## CTA e legenda

Um CTA por post, igual no último slide e na legenda.

| CTA | Combina com |
|---|---|
| Salvar | tutorial, lista, glossário, comparação, erro → correção |
| Compartilhar com alguém ("manda para quem…") | notícia com impacto, mito/fato |
| Comentar uma opinião (pergunta real) | previsão, comparação, experimento |
| Comentar palavra-código | só com material real entregue por DM |
| Seguir | série News, resumo de evento |
| Inscrever-se | recrutamento, evento |

Nunca "marque 3 amigos".

Legenda (`legenda.texto`): primeira linha com até 125 caracteres, com a palavra-chave e a promessa (não repita o hook palavra por palavra). Depois 2 a 4 frases com o que o leitor leva e a fonte, quando houver. Termine com o CTA. Total de 30 a 80 palavras. Use 3 a 5 hashtags específicas no fim (`legenda.hashtags`, máximo 5 [F]). Posts públicos são indexados pelo Google: escreva a legenda e o `alt` de cada slide como texto de busca.
