# Pesquisa para o sistema de conteúdo Instagram da Liga de IA UFSCar

Data da pesquisa: 2026-10-04. Escopo: carrosséis de feed (1080x1350) e sequências de stories (1080x1920) para estudantes de engenharia/computação com familiaridade baixa ou média com IA. Série de notícias: "News | dev day".

Nome oficial: "Liga de Inteligência Artificial da UFSCar" (curto: "Liga de IA da UFSCar"). Nunca "LIA".

## 0. Como ler este relatório

Cada regra traz uma etiqueta de evidência.

| Etiqueta | Significado |
|---|---|
| [F] | Fonte oficial (Instagram/Meta, Mosseri) ou estudo com amostra e período declarados. A fonte vem entre colchetes, ex. [S6]. |
| [F-] | Há dado ou fonte, mas a evidência é fraca: blog de fornecedor, amostra pequena, estudo antigo, dado repetido por agregadores sem origem verificável, ou correlação sem controle. Use como hipótese, não como lei. |
| [H] | Heurística ou opinião de praticantes, ou derivação aritmética minha a partir de [F]. Não há estudo que a comprove. |

Aviso geral de honestidade. A literatura aberta sobre Instagram tem três problemas. Primeiro, os dados de benchmark vêm quase todos de fornecedores de ferramentas (Socialinsider, Buffer, Dash Social), que medem contas de marca, não perfis universitários pequenos. Segundo, a maior parte é correlacional: carrosséis "performam melhor" também porque quem escolhe fazer carrossel tende a investir mais no conteúdo. Terceiro, a maioria dos blogs de 2026 que aparecem em buscas repete números sem origem ("sends valem 3 a 5 vezes mais que likes", "82% de queda de alcance em 1,5 s"). Eu marquei esses números como [F-] ou os descartei. O que é realmente oficial e verificável é pouco: os três sinais de Mosseri, a reapresentação do slide 2, o limite de 5 hashtags, a indexação pelo Google, o esclarecimento sobre CTAs de palavra única e a lista de sinais do "Instagram Ranking Explained".

## 1. Sinais do algoritmo 2025-2026

### 1.1 O que é oficial

| Sinal | O que se sabe | Etiqueta |
|---|---|---|
| Os 3 sinais principais | Em janeiro de 2025 Mosseri disse: "the top three signals that matter most for ranking are watch time, likes and sends"; pede olhar "average watch time, likes per reach, and sends per reach". Likes pesam um pouco mais para quem já segue; sends pesam um pouco mais para quem não segue. Comentários não estão na lista. | [F] [S1] |
| Sends (compartilhar por DM) | "Per reach" significa proporção sobre quem viu, não número absoluto. Sends são o melhor sinal de alcance para não seguidores. A afirmação "sends valem 3 a 5 vezes mais que likes" circula em blogs sem fonte primária. | Sinal [F] [S1]; multiplicador [F-] [S36] |
| Saves | O explicador oficial lista "saved" entre as atividades do usuário que alimentam Feed, Explore e Reels, e Explore prediz "like, save, share". Não existe fala oficial dizendo que save é o sinal mais forte. "Save é o sinal mais forte" é opinião de blogs. | Existência do sinal [F] [S2]; ranking de força [H] |
| Tempo na publicação (dwell) | O Feed prediz a probabilidade de o usuário "spend a few seconds" na publicação, comentar, curtir, compartilhar e tocar na foto do perfil. Carrossel gera mais tempo por ter várias mídias. Não há documentação pública de "swipe depth" como insumo nomeado. | [F] [S2][S3]; mecanismo de swipe [H] |
| Cada superfície tem seu algoritmo | Feed e Stories priorizam relacionamento (quem você já interage). Reels e Explore priorizam popularidade e retenção, inclusive de contas que você não segue. Em Stories os previstos são: tocar para abrir, responder, pular para o próximo. | [F] [S2][S3] |
| Carrossel reaparece com o 2º slide | Mosseri (vídeo-dica no Instagram, out/2024): se alguém vê um carrossel e não desliza, ele pode aparecer de novo, mostrando o segundo slide. Dois motivos dados por ele para o alcance maior: mais mídia gera mais interações, e a possibilidade de reexibir. | [F] [S4] (via RouteNote, secundário) |
| Música em carrossel | Música em carrossel com imagens existia; em jun/2024 passou a valer também para carrossel com vídeo. Mosseri recomendou adicionar música a carrosséis e fotos para aumentar o alcance, pois elas ficam elegíveis à aba Reels. | [F] [S4][S5] (secundários) |
| Limite de hashtags | Em 18/dez/2025 a conta @creators anunciou que o Instagram atualizaria "gradualmente" o limite para 5 hashtags por post ou Reel, dizendo que "usar menos (até 5) hashtags mais direcionadas" pode melhorar o desempenho. Splitar entre legenda e primeiro comentário não aumenta o limite. | [F] [S16] (via imprensa, secundário; confirmar no app antes de depender) |
| Hashtag não dá alcance | Mosseri: hashtags "are not a way to get more reach"; servem para dizer do que o post trata e para busca. Estudo Socialinsider de 2022 (75 milhões de posts) não achou correlação relevante entre número de hashtags e distribuição. | [F] [S17b] (citado por segundos) |
| Conteúdo público indexado | Desde 10/jul/2025, conteúdo público de contas profissionais (maiores de 18, perfil público) é indexável por Google e outros buscadores: fotos, Reels, carrosséis, legendas. | [F] [S18] (imprensa) |
| CTAs de palavra única ("comente X") | Instagram esclareceu em jun/2024: perguntas e CTAs abertos são bons; o que pode tirar o conteúdo das recomendações é tentar "burlar o sistema". Automação por ferramentas como ManyChat com palavra-gatilho para entrega de material é aceitável se há engajamento real. Outra fonte cita a regra de recomendação: não recomendar conteúdo que peça explicitamente compartilhamentos, comentários ou marcações. A tensão entre as duas falas não foi resolvida pelo Instagram. | [F] [S19] |

### 1.2 O que os estudos mostram sobre formato e quantidade de slides

| Achado | Dado | Etiqueta |
|---|---|---|
| Carrossel x Reels x imagem (benchmarks 2025) | Engajamento médio: carrossel 0,55%, Reels 0,52%, imagem 0,37%. Alcance relativo: carrossel 3,32%, imagem 3,30%, Reels 3,15%. Carrossel lidera em saves em todos os tamanhos de conta. Tamanho da amostra não declarado na página. | [F-] [S12] |
| Buffer, mais de 4 milhões de posts (jan/2022 a out/2024) | Reels têm 36% mais alcance que carrosséis e 125% mais que imagem única. Carrosséis têm 12% mais engajamento que Reels e 114% mais que imagem única. Sem separação por tamanho de conta. | [F] [S9] |
| Buffer, 52 milhões de posts (2026) | Reels 30,81% de alcance; carrosséis com mediana de interação 6,90% por pessoa alcançada, cerca de 109% acima de Reels. Eu só vi este dado por agregadores. | [F-] [S10] |
| Nº ideal de slides | Socialinsider (22 milhões de posts, quase 3 milhões de carrosséis, publicado em 2020): 10 slides têm o maior engajamento por post (acima de 2%); engajamento cai depois de 3 slides e volta a subir a partir de 8. Dado de 2020, antes do limite de 20 slides (ago/2024). Em 2025 o mesmo fornecedor diz só que carrosséis com mais de 10 slides têm mais alcance. | [F-] [S11][S12] |
| Completion de carrossel | Metas como "completion de 55%+" e "swipe-through de 65-75%" aparecem em blogs de ferramentas sem metodologia. Instagram não expõe esse número publicamente. | [F-] [S40] |
| Limite técnico | Desde ago/2024 carrossel orgânico aceita até 20 slides. | [F] [S31] |

Conclusão prática sobre slides. Não há estudo causal recente que prove um número ótimo. O que se sustenta: carrossel funciona por tempo e por saves/sends; mais slides dão mais chances de interação, mas a atenção cai no meio (o pico de abandono é nos primeiros slides). Recomendação do sistema: 7 a 10 slides como padrão, 5 a 6 para ideias simples (mito/fato, pergunta e resposta), até 12 apenas para tutorial, glossário e lista. O carrossel de 8 slides que deu certo na Liga está dentro dessa faixa [H].

### 1.3 Frequência

| Item | Dado | Etiqueta |
|---|---|---|
| Frequência de feed | Buffer (2,1 milhões de posts, mais de 102 mil contas): 3 a 5 posts por semana dão cerca de 12% mais alcance por post que 1 a 2 por semana, e semanas sem post caem abaixo do normal da própria conta. A análise não separa Reels de carrossel e é correlacional. | [F] [S13] |
| Mix recomendado por fornecedores | Cerca de 60-70% Reels, 20-30% carrosséis, 10% imagens (comentário de especialista no relatório Socialinsider 2025). Mediana de 5 carrosséis e 8 Reels por mês nas contas de marca. | [F-] [S12] |
| Frequência realista para a Liga | 2 a 3 posts de feed por semana, dos quais 1 a 2 carrosséis. | [H] |
| Stories por dia | Dash Social (mais de 2 mil marcas, jan-jun/2025): mediana de 2 stories por dia em todos os tamanhos. Socialinsider: contas de 100 mil a 1 milhão publicam cerca de 80 stories por mês (cerca de 3 por dia). Dado antigo do RivalIQ: retenção se mantém acima de 70-75% até 5-6 frames por dia. | [F] [S6][S7]; RivalIQ [F-] [S38] |

### 1.4 Stories: sinais e números

Amostra: 161.180 stories de contas de marca, jan-mai/2025 contra 2024 [S6].

| Posição do frame | Taxa de saída | Etiqueta |
|---|---|---|
| 1 | 23,8% | [F] [S6] |
| 2 | 20,5% | [F] [S6] |
| 3 | 18,5% | [F] [S6] |
| 4 | 15,7% | [F] [S6] |
| 9 | 13,3% | [F] [S6] |
| 15 | 12,5% | [F] [S6] |

Outros números do mesmo estudo e do Dash Social:

- Contas de 1 a 5 mil seguidores: saída de 12,82% em story de imagem e 13,42% em vídeo; toque para avançar de 56,82% (imagem) e 50,50% (vídeo). Contas de 50 a 100 mil: saída de 7,70% e 8,60% [F] [S6].
- Taxa média de conclusão (completion) de 70% é considerada boa; saída média de 5% (Dash Social, jan-jun/2025) [F] [S7]. Os dois estudos medem coisas diferentes (um por story, outro por sequência), então não misture.
- A taxa de saída subiu em 2025 em todas as faixas em relação a 2024 [F] [S6].

Cautelas de interpretação [H]: a queda "por frame" tem viés de sobrevivência (quem chega ao frame 9 já é o público mais engajado), e o "alcance maior com 6 a 13 frames" reportado pelo Socialinsider é descritivo, não causal. O que se tira com segurança é que os 3 primeiros frames perdem de 18 a 24% da audiência cada um, então o frame 1 precisa de gancho e os frames 2 e 3 precisam entregar valor logo.

Números de stickers vindos de blogs ("interação de 15 a 25% do alcance", "quiz reduz saída em 27%", "link sticker com CTR de 1 a 3%"): todos [F-] [S8][S37]. A única medida com dois dados concordantes é que clique em link sticker é baixo, na casa de 1% (média citada de 1,2%) [F-] [S8]. Conclusão para o sistema: nunca dependa do link sticker como único caminho; leve a informação no próprio frame.

## 2. Biblioteca de arcos narrativos para carrossel

### 2.1 Papéis de slide (vocabulário fechado)

O sistema deve atribuir a cada slide exatamente um destes papéis [H]. A lista combina funções de cópia clássicas com o que a Liga já usou.

| Papel | Função | Palavras (título + corpo) |
|---|---|---|
| hook | Promessa ou notícia que faz parar. Só slide 1. | 6-12 |
| contexto | Situa quem, o quê, quando. | 25-40 |
| definicao | "O que é" em uma frase e uma analogia. | 25-40 |
| mecanismo | "Como funciona", em 2 a 4 passos ou um diagrama. | 20-40 |
| tensao | Problema, risco, controvérsia ou custo de não saber. | 20-35 |
| prova | Número, citação, print da fonte, resultado de teste. Leva fonte. | 15-35 |
| exemplo | Cena concreta ou mini-caso. Se for fictício, rotular "exemplo ilustrativo". | 25-45 |
| virada | Contra-intuitivo, erro comum desfeito, ponto de inflexão. | 15-30 |
| impacto | "O que muda para você" (cards, 2 a 3 itens). | 30-45 |
| comparacao | A vs B em colunas, 3 a 5 linhas. | 25-45 |
| passo | Um passo executável de tutorial. | 15-35 |
| sintese | Em uma frase, a lição. | 10-25 |
| respiro | Slide leve: número gigante, frase curta, imagem. | 3-15 |
| cta | Uma única ação. Só último slide. | 8-20 |

Pareamento com o conceito "Made to Stick" (simples, inesperado, concreto, crível, emocional, história) [S24]: hook = inesperado; definicao/sintese = simples; exemplo = concreto; prova = crível; impacto e virada = emocional. Uso como lente de revisão, não como método comprovado para Instagram [H].

### 2.2 Os arcos

Todos os números de slides abaixo são [H], com a faixa de 5 a 12 sustentada pelo item 1.2.

| # | Arco | Quando usar | Sequência de papéis | Slides | CTA que combina |
|---|---|---|---|---|---|
| A1 | Explicador de notícia | Lançamento, anúncio ou evento com informação nova e fatos a esclarecer | hook(notícia) > contexto > definicao > mecanismo > prova > sintese > cta | 6-8 | Seguir (série) ou salvar |
| A2 | Notícia + impacto no dia a dia (validado na Liga: carrossel de 8 slides) | Novidade que mexe na rotina de estudante ou profissional | hook(notícia) > definicao > mecanismo > impacto(por que importa) > exemplo(linha do tempo ilustrativa) > impacto(3 cards) > tensao(riscos, 3 cards) > cta | 8 | Compartilhar com alguém ("manda para quem...") ou comentar uma opinião aberta |
| A3 | Mito vs fato | Equívocos comuns sobre IA ("IA pensa", "mais parâmetros é melhor") | hook(mito) > [mito > fato+prova] x 3 > virada > sintese > cta | 6-8 | Compartilhar |
| A4 | Passo a passo / tutorial | Ensinar a fazer algo (usar uma ferramenta, montar um prompt, configurar um ambiente) | hook(resultado final) > pré-requisitos > passo x 4-6 > erro comum > resultado > cta | 7-10 | Salvar |
| A5 | Comparação A vs B | Duas ferramentas, modelos ou abordagens | hook(pergunta A ou B) > critérios > comparacao x 2 > exemplo > veredito por caso > cta | 6-8 | Salvar ou comentar qual usa |
| A6 | Linha do tempo | "Como chegamos aqui", histórico de um conceito ou de uma empresa | hook > ponto 1..N (marcos datados) > virada(onde estamos) > sintese > cta | 6-9 | Seguir ou salvar |
| A7 | Lista / ranking | Ferramentas, recursos, hábitos, leituras | hook(número) > item x 5-8 (mesmo layout) > bônus > cta | 7-10 | Salvar |
| A8 | Estudo de caso / bastidor | "Como construímos X na Liga", projeto ou competição | hook(resultado) > contexto > decisão 1 > erro/obstáculo > solução > resultado(prova) > aprendizado > cta | 7-9 | Comentar ou seguir; convite ao processo seletivo |
| A9 | Erro comum > correção | Prompts ruins, hábitos de estudo, mau uso de IA | hook(erro) > por que parece certo > por que falha(prova) > correção > antes/depois > sintese > cta | 6-8 | Salvar |
| A10 | Pergunta > resposta (FAQ) | Responder dúvidas vindas da caixa de perguntas dos stories ou de comentários | hook(pergunta literal) > resposta curta > explicação > exemplo > limite ("onde isso falha") > cta | 5-7 | Mandar nova pergunta |
| A11 | Previsão / "o que vem aí" | Tendência, roadmap, pós-evento | hook(pergunta de futuro) > sinal 1 > sinal 2 > sinal 3 > cenário > "o que observar" > cta | 6-8 | Comentar previsão ou seguir |
| A12 | Glossário | Evento ou tema com jargão ("10 termos para entender o dev day") | hook > termo x 6-10 (definição + analogia) > como se conectam > cta | 7-12 | Salvar |
| A13 | Resumo de evento (série "News | dev day") | Cobertura de keynote ou conferência | hook(maior anúncio) > mapa do que foi anunciado > anúncio x 3-4 (papel: definicao+impacto) > o que ficou de fora/dúvidas > sintese > cta | 7-10 | Seguir (série) |
| A14 | Decisão / "devo usar X?" | Escolha entre usar ou não, por perfil | hook(pergunta) > critério 1..3 > árvore "se... então" > exemplo > veredito > cta | 6-8 | Salvar |
| A15 | Experimento / "testei X" | Teste simples com resultado verificável | hook(resultado) > pergunta do teste > método > resultado(prova) > limites > conclusão > cta | 6-8 | Comentar o que testar a seguir |
| A16 | Recrutamento (feed) | Processo seletivo, vagas abertas | hook(oportunidade) > quem somos > o que você faz > áreas > etapas e prazos > FAQ > cta(inscrição) | 6-8 | Ação única: inscrever-se (link na bio ou legenda) |

Regras de uso dos arcos [H]:

- Combinar é permitido, mas apenas um arco é a espinha; o segundo entra como "slide substituto" (por exemplo, um slide de comparacao dentro de A2).
- O arco é escolhido pelo conteúdo: se há fato novo datado, A1/A2/A13; se há ferramenta nova, A4/A5; se há equívoco, A3/A9; se há pergunta, A10.
- Para público com pouca familiaridade, A2 (impacto no cotidiano) é o padrão da série, pois o ângulo "como isso impacta seu dia a dia" melhorou o entendimento no carrossel que a Liga já publicou.
- Notícia é sempre A1, A2 ou A13; evitar A7/A12 para notícia isolada (viram "lista de recursos" sem tensão).

### 2.3 Tipos de CTA e quando usar

| CTA | Sinal que busca | Arcos | Etiqueta |
|---|---|---|---|
| Salvar | Save | tutorial, lista, glossário, comparação, erro > correção | [H] |
| Compartilhar com alguém específico ("manda para quem...") | Send (sinal oficial de alcance) | notícia com impacto, mito/fato | [H]; sinal [F] [S1] |
| Comentar uma opinião aberta (pergunta real, não palavra-código) | Conversa | previsão, comparação, experimento | [H] |
| Comentar palavra-código para receber material | Lead/DM | só quando houver material real (checklist, guia) entregue por DM | permitido [F] [S19] |
| Seguir | Seguidor | série, resumo de evento | [H] |
| Inscrever-se | Conversão | recrutamento, evento | [H] |

## 3. Tipologia de hooks

### 3.1 O que a literatura diz

- Curiosidade nasce de uma lacuna de informação entre o que se sabe e o que se quer saber (Loewenstein, 1994) [F] [S22]. Manchetes com lacuna geram clique, mas quando o leitor percebe intenção de manipulação, a credibilidade da fonte e a vontade de compartilhar caem [F-] [S21][S22] (Kate Scott, J. of Pragmatics, 2021, descreve a linguagem de clickbait; a ligação com queda de confiança vem do resumo de modelo de curiosidade, não de experimento no Instagram).
- Conteúdo de valor prático e de emoção forte (admiração, surpresa) é mais compartilhado (Berger, "Contagious", STEPPS) [F-] [S23].
- Jovens preferem TikTok, Instagram e YouTube para notícia e relatam que notícia é difícil de entender; isso sustenta o formato de explicador [F] [S20].

### 3.2 Tipos de hook

Exemplos são de forma. Fatos nos exemplos são ilustrativos: o sistema deve substituir pelos fatos verificados do post. Nada de número inventado.

| # | Tipo | Fórmula | Exemplo em português (IA/tecnologia) | Visual de capa que combina |
|---|---|---|---|---|
| H1 | Notícia datada | [Quem] + [verbo de ação] + [o que muda para o leitor] | "A OpenAI quer colocar um colega digital no seu dia a dia" | Manchete tipográfica + selo "News | dev day" + data |
| H2 | Número/dado | [Número] + [sujeito] + [consequência] | "3 recursos do dev day que mudam como você programa" | Número gigante |
| H3 | Contra-intuitivo / mito | "[Crença comum] está errada" ou "[X] não é o que você pensa" | "Mais parâmetros não significa um modelo melhor" | Tipografia com palavra riscada |
| H4 | Promessa prática | "Como [resultado concreto] em [limite]" | "Como usar IA para revisar código sem entregar seu projeto ao modelo" | Print/mockup do resultado |
| H5 | Pergunta honesta | Pergunta cuja resposta o carrossel entrega inteira | "Por que o ChatGPT erra conta de três dígitos?" | Tipografia + detalhe visual do erro |
| H6 | Lista numerada | "N [coisas] para [objetivo]" | "5 termos de IA que você vai ouvir no próximo evento" | Número + miniatura dos itens |
| H7 | Erro comum | "Você provavelmente [faz X]. Veja o custo" | "Você escreve prompts assim? Veja por que a resposta sai fraca" | Antes/depois dividido |
| H8 | Identificação | "Se você [perfil], isto é para você" | "Cursa engenharia e ainda não sabe por onde começar em IA?" | Tipografia limpa, sem imagem |
| H9 | Stakes / consequência | "[Mudança] muda o que [perfil] consegue fazer" | "Esse recurso muda o que um estagiário júnior consegue entregar" | Imagem de produto ou cena |
| H10 | Comparação | "[A] vs [B]: qual para [uso]" | "Cursor ou Copilot: qual para a faculdade?" | Dois blocos opostos |
| H11 | Bastidor / prova | "Fizemos [X] em [tempo]. Veja o que deu errado" | "Treinamos um modelo na Liga em um fim de semana. O que falhou" | Foto da equipe ou tela do projeto |
| H12 | Previsão | "O que muda em [área] em [prazo]" | "O que muda em IA para programadores nos próximos 12 meses" | Tipografia + linha de tendência |
| H13 | Citação de fonte | Citação curta + atribuição | "'[frase do CEO]' O que isso significa na prática" | Print da fonte com destaque |

### 3.3 Slide 1: o que o torna eficaz

- Um ponto focal só: a manchete [H]. Texto do hook de 6 a 12 palavras e até 70 caracteres, no máximo 3 linhas [H]. Nenhum estudo mede comprimento ótimo de hook em carrossel; blogs de design recomendam 3 a 8 palavras ou menos de 40 a 60 caracteres em inglês [F-] [S34][S35]. Português gasta mais caracteres por ideia, por isso o teto de 12 palavras e 70 caracteres.
- Substantivo concreto (nome, produto, número, empresa) na primeira metade da frase [H].
- Marcador de série e data em tamanho pequeno ("News | dev day"), para reconhecimento sem competir com a manchete [H].
- Sinal de continuidade (seta, "1/8", corte visual na borda) [H]. Há blog que atribui +18% de swipes a setas, sem fonte; não usar o número [F-] [S34].
- Slide 1 aparece cortado na grade do perfil: o Instagram passou a mostrar a grade em 3:4 (janeiro de 2025); post 4:5 (1080x1350) perde uma faixa nas laterais e o centro seguro fica em cerca de 1012x1350 [F] [S29]. Manter manchete e logo dentro dessa área [H].

### 3.4 Slide 2: eficaz por causa do reexibir

Como o Instagram pode reexibir o carrossel começando pelo slide 2 (item 1.1), o slide 2 precisa funcionar como uma segunda capa [F][S4]; as recomendações de como fazê-lo são [H]:

- Autônomo: entende-se sem o slide 1. Evitar começar com pronome sem antecedente ("Ele", "Isso") ou "Mas".
- Traz promessa ou estrutura explícita ("Em 6 slides: o que é, como funciona e o que muda para você") ou o dado mais forte do carrossel.
- Contraste visual com o slide 1 (muda cor de fundo ou layout), para parecer um novo começo.
- No arco A2, o slide 2 é "o que é" em uma frase com nome do produto, e carrega o título em 12 palavras ou menos.

### 3.5 O que evitar

| Evitar | Por quê | Etiqueta |
|---|---|---|
| Lacuna que o carrossel não fecha ("Você não vai acreditar") | Intenção percebida como manipulação reduz confiança e compartilhamento | [F-] [S21][S22] |
| Superlativos e intensificadores ("revolucionário", "incrível", "chocante") | Marcadores linguísticos de clickbait [S21] e promessa que o texto não sustenta | [F-] |
| Hook que promete número ou nome que não aparece nos slides seguintes | Quebra de promessa | [H] |
| Medo e urgência sem fato ("a IA vai tomar seu emprego") | Corrói a marca educativa e atrai comentário de raiva, não send | [H] |
| Hook com 3 ideias | Foco se perde | [H] |
| Número de pesquisa sem fonte e data | Marca de credibilidade da Liga | [H] |

## 4. Stories

### 4.1 Regras comuns

| Regra | Valor | Etiqueta |
|---|---|---|
| Frames por sequência | 3 a 7. Saída do frame 1 a 3: 24%, 21%, 19%; a partir do 4º, 13-16% | [F] [S6]; faixa 3-7 [H] |
| Texto máximo por frame | 18 palavras, até 3 linhas. Deriva de 5 s de exibição padrão de foto x leitura média de 238 palavras por minuto em não ficção (cerca de 4 palavras por segundo) | [F] [S28]; derivação [H] |
| Frame 1 | gancho de até 8 palavras, imagem forte | [H] |
| Zona segura | Deixar livres 250 px no topo e 250 px na base (cerca de 14% de 1920). Área útil de cerca de 1080x1420 | [F-] [S30] |
| Um sticker interativo por frame | Dois competem entre si | [H] |
| Link sticker | Só no último frame ou penúltimo, e a informação essencial fica no próprio frame. CTR de link sticker em torno de 1% | [F-] [S8] |
| Alvo de conclusão | Completion de 70% é referência de marca saudável | [F] [S7] |
| Fonte e linguagem | Sans-serif, mínimo de 48 px de corpo, contraste 4,5:1 | [H] (conversão no item 7) |

Stickers [H se não marcado]:

| Sticker | Uso | Cuidado |
|---|---|---|
| Enquete (2 opções) | Menor esforço; abrir tema ou medir opinião. Colocar no frame 2 ou 3 | Opção "tanto faz" desperdiça |
| Quiz (3-4 opções) | Educativo: pergunta no frame 2, resposta com 1 insight no frame 3 | Quiz precisa ter resposta única e correta |
| Caixa de perguntas | Coletar dúvidas e alimentar o arco A10 do feed | Responder em até 24 h dos stories |
| Contagem regressiva | Evento ou prazo com data fixa. Ao tocar, o usuário pode ativar lembrete ou compartilhar [F] [S33] | Só com data real |
| Link | Último frame | CTR baixo |
| Reveal / Add Yours | Comunidade e recrutamento ("mostre seu projeto") | Usar raramente |

### 4.2 Arcos de stories

| # | Arco | Frames | Sequência | Sticker | CTA |
|---|---|---|---|---|---|
| S1 | Anúncio de evento | 4-5 (repetir em D-7, D-1 e dia) | 1 gancho com data e nome > 2 o que é e para quem > 3 programação/destaque > 4 como participar > 5 contagem | Contagem no 5; link no 4 | Inscrever-se |
| S2 | Bastidores | 3-5 | 1 cena (foto ou vídeo) > 2 contexto em 1 frase > 3 detalhe ou curiosidade > 4 pergunta > 5 teaser do próximo | Enquete ou caixa de perguntas no 4 | Responder |
| S3 | Enquete / quiz educativo | 3-4 | 1 pergunta com quiz > 2 dica ou pausa > 3 resposta e explicação em 1 insight > 4 "quer ver mais?" para o post | Quiz no 1; link no 4 | Abrir o post |
| S4 | Notícia em 3 stories | 3 | 1 o que aconteceu (hook) > 2 como funciona ou por que importa > 3 o que muda para você + link para o carrossel | Enquete opcional no 3 | Abrir o post ou compartilhar |
| S5 | Contagem regressiva | 2-3 | 1 teaser > 2 contagem > 3 lembrete do que esperar | Contagem | Ativar lembrete |
| S6 | Recrutamento / processo seletivo | 5-7 | 1 "inscrições abertas" > 2 quem somos > 3 o que você faz > 4 etapas e prazos > 5 FAQ (caixa de perguntas) > 6 como se inscrever > 7 prazo | Caixa de perguntas no 5; contagem no 7; link no 6 | Inscrever-se |
| S7 | Divulgação de post do feed | 2-3 | 1 teaser com recorte do slide 2 ou 3 (não repetir a capa) > 2 pergunta ou enquete ligada ao tema > 3 "post novo" com link/compartilhar | Enquete no 2 | Abrir o post |
| S8 | Resposta a perguntas | 3-5 | 1 pergunta literal > 2-4 resposta em frases curtas > 5 "mande a sua" | Caixa de perguntas | Enviar pergunta |

## 5. Metodologia de outliers

### 5.1 Identificar

Fórmula de ferramentas de criadores: score = métrica do post ÷ mediana da métrica dos últimos N posts do mesmo perfil e mesmo formato, excluindo o próprio post candidato. Mediana, e não média, para que um viral não distorça a base [F-] [S25][S26][S27].

| Parâmetro | Valor recomendado | Origem |
|---|---|---|
| Base | Mediana dos últimos 12 a 30 posts do mesmo formato (carrossel com carrossel, Reel com Reel) | Ferramenta Eden usa os últimos 30 posts do mesmo tipo [S26]; mínimo de 10 posts para calcular (Vamos) [S25]. Etiqueta [F-] |
| Janela | Posts de 7 dias a 12 meses; ignorar posts com menos de 7 dias (ainda acumulando) | [H] |
| Métrica pública | Likes e comentários (carrosséis); visualizações de Reels. Saves e sends não são públicos | Limite técnico [F-] |
| Limiar | Candidato: 3x ou mais. Forte: 5x ou mais. Excepcional: 10x ou mais. Eden usa faixas 1-3x, 3-5x, 5-10x, 10-50x, 50x+; Vamos considera outlier acima de 2x a mediana | [F-] [S25][S26]; limiares da Liga [H] |
| Amostra para padrão | Pelo menos 3 outliers com o mesmo mecanismo antes de tratá-lo como "padrão" | [H] |
| Normalização | O score é relativo ao próprio perfil, então um perfil pequeno pode ter outlier maior que um grande | [F-] [S25] |

Fatores que inflam e devem ser descartados ou anotados [H]: sorteio ("comente para concorrer"), post impulsionado, colaboração com conta grande, repost por conta grande, tendência externa do dia (um lançamento de modelo que todos cobriram). A proporção comentário/like alta sugere conteúdo conversacional ou CTA de comentário; likes altos e poucos comentários sugerem emoção ou identificação. Saves e sends são inferidos pelo tipo de conteúdo (lista e tutorial tendem a save; humor e "isso é você" tendem a send), não medidos [H].

Coleta: manual (inspeção do perfil, planilha com 12-30 posts por perfil) ou ferramenta. O sistema deve registrar a data da coleta e o método; não raspar contas privadas [H].

### 5.2 Desmontar o outlier sem copiar

Ficha de desmontagem (campos obrigatórios) [H]:

| Campo | Pergunta |
|---|---|
| Tema | Sobre o quê? (assunto bruto) |
| Gatilho de timing | Havia notícia ou evento? Data? |
| Ângulo | Qual a tese ou pergunta? (ex.: "impacto no seu dia") |
| Hook | Tipo (H1-H13), nº de palavras, o que o slide 1 prometia |
| Formato e arco | Nº de slides, arco (A1-A16), layout dominante |
| Prova | Que dado, fonte ou demonstração sustentava? |
| Emoção / motor | Curiosidade, alívio, medo, orgulho, identificação, utilidade (STEPPS: valor prático, emoção, moeda social) [S23] |
| CTA | Qual, e onde? |
| Causa de distribuição | Colab, repost, tendência, conta grande? |
| Mecanismo (1 frase) | "Funcionou porque ___" |

Do mecanismo ao reuso [H]:

1. Escrever o mecanismo em uma frase sem marca nem tema ("tradução de anúncio técnico para efeitos na rotina, com linha do tempo ilustrada").
2. Escolher um tema novo da pauta e aplicar o mecanismo.
3. Regra de não-cópia: o novo post precisa diferir do original em pelo menos 2 destes eixos: tema, ângulo, arco, exemplo, visual; e acrescentar pelo menos 1 elemento original da Liga (dado, exemplo brasileiro, contexto UFSCar, teste próprio).
4. Registrar na pauta o outlier-fonte (link e score) e a hipótese testável ("hook H9 com impacto em estágio deve superar a média de saves").
5. Depois de publicar, anotar o resultado e calcular o score do próprio post contra a mediana da Liga: o aprendizado fecha o ciclo.

Instagram prioriza conteúdo original e rebaixa agregadores; números como "queda de 60-80%" aparecem só em blogs [F-] [S36]. Reproduzir o conteúdo alheio também é um risco de reputação, o que reforça a regra de dois eixos [H].

### 5.3 Do outlier à pauta

Cartão de pauta (campos) [H]: tema; gatilho/data; ângulo; arco escolhido; hook candidato (2 variações); prova necessária e fonte; exemplo concreto; CTA; outlier-fonte e score; risco factual; prazo de revisão.

## 6. Variedade sem perder consistência

Não há estudo que quantifique isso para Instagram; as regras abaixo são [H] com base em prática de design de sistemas.

Princípio: 70% constante e 30% variável. Constante: grade, escala tipográfica, tokens de cor, posição do logo e do contador de slides ("03/08"), marcador de série, tratamento da capa e do CTA. Variável: layout do slide de corpo, tipo de elemento visual, densidade, destaque de cor [H].

| Regra | Valor |
|---|---|
| Biblioteca de layouts da marca | 6 a 8 layouts de corpo + capa + CTA. Menos de 5 vira monótono; mais de 10 quebra o reconhecimento |
| Exemplos de layouts de corpo | texto + título; número gigante; cards (2-3); comparação em colunas; linha do tempo; diagrama/passos; citação/print de fonte; imagem de apoio com legenda; slide de respiro |
| Repetição | Capa e CTA sempre iguais em estrutura. Corpo: não repetir o mesmo layout em slides consecutivos, exceto em lista, passo a passo e glossário, onde a repetição é o ritmo |
| Variedade mínima | Em carrossel de 8 slides, pelo menos 4 layouts distintos no corpo |
| Ritmo denso/leve | Máximo de 2 slides densos (mais de 35 palavras) em sequência; pelo menos 1 slide leve (15 palavras ou menos) a cada 4 slides |
| Alternância de modo | Alternar texto, dado, imagem/diagrama; não ter 3 slides só de texto seguidos |
| Elemento âncora | Um elemento visual que atravessa os slides (linha, marcador, cor de destaque) liga o conjunto |
| Série "News | dev day" | Capa-modelo fixa com selo e data; cor de destaque por post, não por slide; mesma ordem de arco A13 quando for cobertura de evento |
| Quando repetir | Repetir arcos que performaram; trocar o arco depois de 3 posts seguidos com o mesmo arco; testar um arco novo a cada 4 posts |

## 7. Densidade de texto e legibilidade

| Item | Regra | Etiqueta |
|---|---|---|
| Palavras por slide (feed) | Hook 6-12; corpo típico 25-40 (título até 10 + texto até 30); teto de 60 apenas para slide de comparação ou dados estruturados | [H] |
| Tempo de leitura por slide | Leitor adulto lê cerca de 238 palavras por minuto em não ficção (Brysbaert, 2019, meta-análise de 190 estudos, 18.573 participantes) [S28]. Em cerca de 10 s, o slide de 40 palavras. Meta: 8 a 10 s por slide | [F] dado de leitura; meta [H] |
| Palavras por carrossel | Perto de 8 slides x 35 = 280 palavras como alvo. Mais de 400 palavras vira artigo | [H] |
| Tamanho de fonte | Slide de 1080 px exibido em tela de cerca de 390 pt equivale a 0,36 pt por px. Corpo mínimo de 40 px (cerca de 14,5 pt), ideal 44-48 px; rótulos e fonte mínimo de 32 px (cerca de 11,5 pt, limite inferior); hook de 72 a 110 px | Conversão aritmética [H] |
| Contraste | Mínimo 4,5:1 (WCAG AA) para texto de corpo | [F-] (norma de acessibilidade, não específica do Instagram) |
| Hierarquia | No máximo 3 níveis por slide (kicker, título, texto) mais um apoio (fonte ou contador) | [H] |
| Ideia por slide | Uma. Um título = uma afirmação | [H] |
| Cards | Até 3 por slide, até 12 palavras cada | [H] |
| Jargão | Máximo de 1 termo novo por slide; definir no primeiro uso | [H] (público com baixa familiaridade) |
| Margens | Mínimo de 64 px; na capa, respeitar o centro de 1012 px | [F] [S29] para a capa; 64 px [H] |
| Story | Até 18 palavras e 3 linhas por frame | [H] |

## 8. Legenda e CTA

| Item | Recomendação | Etiqueta |
|---|---|---|
| Primeira linha | Até 125 caracteres (limite antes de "mais"), com a palavra-chave principal e a promessa. Não repetir a manchete palavra por palavra se ela já estiver no slide; trazer o contexto que o slide não tem | Limite de 125 [F-] [S15]; resto [H] |
| Comprimento | Dois estudos divergem: Socialinsider (9,1 milhões de posts, jan-jul/2023) diz que legendas abaixo de 30 palavras têm mais engajamento, principalmente em carrossel [S14]; um estudo de fornecedor com 4.408 posts de 152 contas (2026) acha melhor 126 a 800 caracteres [S15]. Faixa que cabe nos dois: 30 a 80 palavras | [F] [S14]; [F-] [S15]; síntese [H] |
| Palavras-chave | 2 a 4 palavras-chave naturais (tema, nome do produto, "IA", público) na primeira linha e no corpo. O Instagram diz que hashtags servem para busca e contexto; um experimento do Hootsuite (10 posts, 2022) viu 30% mais alcance com legenda de palavras-chave, amostra pequena demais para concluir | [F-] [S17] |
| SEO externo | Posts públicos de contas profissionais são indexáveis pelo Google desde jul/2025: legenda e texto de alt passam a valer como título e resumo | [F] [S18] |
| Texto alternativo | Preencher alt text descritivo em cada slide (acessibilidade e indexação) | [H] |
| Hashtags | Limite oficial de 5 (dez/2025); usar 3 a 5 específicas, no fim, e 0 genéricas ("#love") | [F] [S16]; número 3-5 [H] |
| Estrutura | Linha 1: promessa e palavra-chave. Corpo: 2 a 4 frases com o que o leitor leva e uma fonte quando houver. Fim: CTA único e hashtags | [H] |
| CTA único | Um CTA por post; o mesmo no último slide e na legenda; sem "salve, compartilhe e comente" juntos | [H] |
| "Comente X" | Permitido quando há entrega real por DM (esclarecimento do Instagram, jun/2024). Palavra-código sem material entregue ou pedido explícito de marcar amigos tem risco de não ser recomendado. Preferir pergunta aberta real | [F] [S19]; recomendação [H] |
| Música | Opcional. Mosseri recomendou música em carrossel para elegibilidade na aba Reels; testar como experimento A/B na série, sem dado próprio da Liga. Contas profissionais costumam ter biblioteca musical restrita: verificar | [F] [S4]; uso [H] |
| Colaboração | Collab post (até 5 autores) com ligas, laboratórios e eventos parceiros. Estudo acadêmico indica que o alcance do collab é próximo à média ponderada das contas e só a conta menor tende a ganhar; para uma conta pequena como a da Liga, vale testar | [F-] [S32] |

## 9. Checklist de qualidade editorial (pontuável)

Pontuar cada item de 0 a 2: 0 = falha, 1 = parcial, 2 = atende. Total máximo 24. Publicar com 20 ou mais e nenhum item crítico (marcado com *) em 0. Entre 16 e 19, revisar os itens com nota 0 ou 1. Abaixo de 16, refazer o plano.

| # | Item | 2 pontos quando |
|---|---|---|
| 1* | Hook | Até 12 palavras e 70 caracteres, substantivo concreto, tipo H1-H13 identificado, sem superlativo |
| 2* | Slide 2 autônomo | Entende-se sem o slide 1 e traz promessa ou dado forte |
| 3* | Promessa cumprida | Todo nome e número do hook reaparece e é explicado nos slides 2 a N |
| 4 | Um insight por slide | Cada slide tem 1 título-afirmação e 1 papel da lista |
| 5* | Prova e fonte | Afirmações factuais com fonte e data; pelo menos 1 slide de prova |
| 6 | Exemplo concreto | Há cena, número ou nome; exemplos fictícios rotulados "exemplo ilustrativo" |
| 7 | Transição | O fim de cada slide cria a pergunta que o próximo responde (ordem lógica, sem salto) |
| 8 | Densidade e legibilidade | Mediana de 35 palavras ou menos, máximo de 60, fonte mínima respeitada, 3 níveis de hierarquia |
| 9 | Variedade e identidade | 4 ou mais layouts distintos (8 slides), ritmo denso/leve, elementos de série presentes |
| 10* | CTA único | 1 CTA, no último slide e igual ao da legenda |
| 11 | Tom e precisão | Linguagem de nível de entrada (jargão definido), sem medo ou exagero; "Liga de IA da UFSCar" e nunca "LIA" |
| 12 | Legenda e descoberta | Primeira linha com palavra-chave, 30-80 palavras, 3-5 hashtags, alt text |

## 10. Regras para o sistema

Formato: ID, regra, como validar. Os IDs abaixo servem como código do validador; os valores vêm das seções acima.

### 10.1 Estrutura do carrossel

| ID | Regra | Validação |
|---|---|---|
| CAR-01 | Carrossel tem de 5 a 12 slides; padrão de 7 a 10 (8 para notícia) | contar slides |
| CAR-02 | Slide 1 tem papel "hook"; só o slide 1 usa esse papel | papel por slide |
| CAR-03 | O último slide tem papel "cta"; nenhum outro slide tem CTA | papel por slide |
| CAR-04 | Cada slide tem exatamente 1 papel da lista fechada (seção 2.1) | enum |
| CAR-05 | Um slide expressa uma ideia: 1 título-afirmação de até 10 palavras | contar título |
| CAR-06 | Slide 2 é autônomo: não começa com "Ele", "Ela", "Isso", "Mas", "Então"; tem título de até 12 palavras | regex + contagem |
| CAR-07 | Arco escolhido do catálogo A1 a A16 e registrado no plano | campo `arco` |
| CAR-08 | Notícia datada usa A1, A2 ou A13 | arco x tipo de conteúdo |
| CAR-09 | A partir de 6 slides, existe pelo menos 1 slide "exemplo" e 1 slide "prova" | papéis presentes |
| CAR-10 | Exemplo fictício leva o rótulo "exemplo ilustrativo" | texto no slide |
| CAR-11 | Toda afirmação factual numérica tem fonte e data (slide ou legenda) | campo `fonte` |
| CAR-12 | Nome e número do hook reaparecem em pelo menos um slide entre 2 e N | busca de tokens |
| CAR-13 | Cada slide termina com ponto que abre o seguinte (campo `transicao` preenchido em todos, exceto o último) | campo obrigatório |

### 10.2 Hook

| ID | Regra | Validação |
|---|---|---|
| HK-01 | Hook com 12 palavras ou menos e 70 caracteres ou menos; ideal de 6 a 10 palavras | contagem |
| HK-02 | Hook em no máximo 3 linhas no render | QA do motor |
| HK-03 | Tipo de hook declarado (H1 a H13) no plano | campo `hook_tipo` |
| HK-04 | Hook sem expressões proibidas: "você não vai acreditar", "chocante", "ninguém te conta", "revolucionário", "incrível", "mudou tudo" | lista de bloqueio |
| HK-05 | Hook sem caixa-alta contínua | regex |
| HK-06 | Hook contém pelo menos um substantivo próprio, produto ou número | heurística/NER |

### 10.3 Densidade e visual

| ID | Regra | Validação |
|---|---|---|
| DEN-01 | Mediana de palavras por slide de corpo de 35 ou menos; nenhum slide acima de 60 | contagem |
| DEN-02 | No máximo 3 níveis tipográficos por slide, mais 1 de apoio | QA do motor |
| DEN-03 | Corpo de no mínimo 40 px; rótulos de no mínimo 32 px; hook de no mínimo 72 px (canvas 1080x1350) | QA do motor |
| DEN-04 | Contraste texto/fundo de pelo menos 4,5:1 | QA do motor |
| DEN-05 | Cards: no máximo 3 por slide, até 12 palavras cada | contagem |
| DEN-06 | Máximo de 1 termo técnico novo por slide e definição no primeiro uso | campo `termos_novos` |
| DEN-07 | Slide 1: manchete e logo dentro do centro de 1012x1350 | geometria |
| DEN-08 | Margens mínimas de 64 px | geometria |
| VAR-01 | Biblioteca de 6 a 8 layouts de corpo, mais capa e CTA | catálogo |
| VAR-02 | Não repetir o mesmo layout em slides consecutivos, exceto arcos A4, A7 e A12 | sequência |
| VAR-03 | Em carrossel de 8 slides ou mais, usar 4 ou mais layouts distintos | contagem |
| VAR-04 | No máximo 2 slides densos (mais de 35 palavras) em sequência; pelo menos 1 slide leve (15 palavras ou menos) a cada 4 | sequência |
| VAR-05 | Pelo menos 1 elemento não textual (dado, diagrama, imagem, ícone) a cada 2 slides | elemento por slide |
| VAR-06 | Elementos de série fixos: selo "News | dev day", contador "NN/NN", posição do logo | QA do motor |

### 10.4 Legenda e CTA

| ID | Regra | Validação |
|---|---|---|
| LEG-01 | Primeira linha de até 125 caracteres com a palavra-chave principal | contagem |
| LEG-02 | Legenda de 30 a 80 palavras | contagem |
| LEG-03 | De 3 a 5 hashtags; máximo absoluto de 5; todas ao fim | contagem |
| LEG-04 | Texto alternativo preenchido em todos os slides | campo `alt` |
| CTA-01 | Um único CTA por post, igual no último slide e na legenda | comparação |
| CTA-02 | CTA de comentário é pergunta aberta ou palavra-código com material realmente entregue; nunca "marque 3 amigos" | lista de bloqueio |
| NOM-01 | Nunca "LIA"; usar "Liga de Inteligência Artificial da UFSCar" ou "Liga de IA da UFSCar" | regex |

### 10.5 Stories

| ID | Regra | Validação |
|---|---|---|
| STO-01 | Sequência com 3 a 7 frames | contagem |
| STO-02 | Frame 1 com gancho de até 8 palavras | contagem |
| STO-03 | No máximo 18 palavras e 3 linhas por frame | contagem |
| STO-04 | Texto e stickers fora das faixas de 250 px de topo e base | geometria |
| STO-05 | No máximo 1 sticker interativo por frame | contagem |
| STO-06 | Link sticker só no último ou penúltimo frame; informação essencial também no frame | posição |
| STO-07 | Contagem regressiva só com data real | campo `data` |
| STO-08 | Um CTA por sequência | contagem |
| STO-09 | Arco de stories do catálogo S1 a S8 registrado no plano | campo `arco_story` |
| STO-10 | Divulgação de post não repete a capa; usa recorte do slide 2 ou 3 | campo `origem_frame1` |

### 10.6 Outliers e pauta

| ID | Regra | Validação |
|---|---|---|
| OUT-01 | Score = métrica ÷ mediana dos últimos 12 a 30 posts do mesmo formato, excluindo o candidato | cálculo |
| OUT-02 | Um outlier só entra como candidato com score de 3 ou mais; "forte" com 5 ou mais; exigir 3 outliers do mesmo mecanismo antes de chamar de padrão | cálculo |
| OUT-03 | Descartar ou anotar outliers com sorteio, impulsionamento, colab ou repost de conta grande | campo `causa_distribuicao` |
| OUT-04 | Ficha de desmontagem completa (seção 5.2) | campos obrigatórios |
| OUT-05 | Pauta derivada difere do outlier-fonte em pelo menos 2 eixos e traz 1 elemento original | campos `eixos_diferentes` e `contribuicao_original` |
| OUT-06 | Cada pauta registra outlier-fonte, hipótese e métrica de resultado | campos obrigatórios |

### 10.7 Qualidade

| ID | Regra | Validação |
|---|---|---|
| QLD-01 | Checklist da seção 9 pontuado; publicar com 20 de 24 ou mais e nenhum item crítico (hook, slide 2, promessa, prova, CTA) em 0 | pontuação |
| QLD-02 | Revisão factual: toda notícia confere com fonte primária (comunicado ou documentação oficial da empresa) antes de publicar | campo `fonte_primaria` |
| QLD-03 | Variar arco: não usar o mesmo arco em mais de 3 posts consecutivos; testar um arco novo a cada 4 posts | histórico |

## 11. Limites desta pesquisa

- Os números de benchmark vêm de contas de marca em geral (Socialinsider, Buffer, Dash Social), não de ligas universitárias de 2 a 10 mil seguidores. Nenhum dado de carrossel de IA em português foi encontrado; o formato de série de notícias de tecnologia não tem benchmark público.
- O melhor número de slides tem como único estudo grande o de 2020 do Socialinsider [S11]; o limite de 20 slides só chegou em 2024. Usei 7 a 10 por consistência com esse estudo e com a experiência da Liga, não por prova.
- Sinais oficiais são poucos. Falas atribuídas a Mosseri em blogs de 2026 (por exemplo, "memorando de fim de ano de 2025" sobre autenticidade, "Q&A de julho/2026" sobre busca por embeddings, "sends valem 3-5x") não foram confirmadas em fonte primária por mim; tratei como [F-] ou não usei.
- Dados de sticker (interação 15-25%, redução de saída de 27%) vêm de agregadores sem metodologia; usei só qualitativamente.
- Hootsuite 2022 (palavras-chave 30% mais alcance) tem 10 posts; é anedota.
- As regras de variedade (70/30, 6 a 8 layouts, ritmo denso/leve) são práticas de design de sistema, não resultado de estudo de Instagram.
- Os limites de palavras por slide e de tamanho de fonte são derivações minhas (velocidade de leitura de Brysbaert e proporção 0,36 pt por px) e devem ser calibrados com o desempenho real da Liga.
- Não consegui abrir o artigo de Berger, o texto completo de Loewenstein nem a página do Instagram de 2025 sobre hashtags; usei resumos secundários.
- Sugestão: a Liga deve acompanhar saves e sends por post no Insights, pois são os sinais que o sistema quer otimizar e que não são públicos; esses dados darão a base própria para recalibrar estas regras.

## 12. URLs consultadas

Abertas e lidas (WebFetch):

- [S1] https://www.socialmediatoday.com/news/instagram-shares-algorithm-2025/738034/
- [S2] https://about.instagram.com/blog/announcements/instagram-ranking-explained
- [S3] https://www.socialmediatoday.com/news/instagram-explainer-feed-reels-and-stories-algorithm/651705/
- [S4] https://routenote.com/blog/instagram-carousels-perform-better-than-single-photos-according-to-the-head-of-instagram/
- [S5] https://www.socialmediatoday.com/news/instagram-music-carousel-posts-video/719341/
- [S6] https://www.socialinsider.io/blog/instagram-stories-benchmarks/ (e https://socialinsider.io/blog/instagram-stories-data)
- [S7] https://www.dashsocial.com/blog/every-instagram-stories-performance-benchmark-you-need-to-know
- [S8] https://www.upgrow.com/blog/instagram-stories-2026-completion-rates-views-engagement-benchmarks
- [S9] https://buffer.com/resources/instagram-reach-engagement-analysis/
- [S10] https://smashballoon.com/de/instagram-reels-vs-feed-posts-which-gets-more-engagement/ (resume o estudo de 52 milhões do Buffer)
- [S11] https://www.searchenginejournal.com/instagram-carousels/379311/ (resume o estudo Socialinsider de 2020)
- [S12] https://www.socialinsider.io/blog/instagram-carousels/ e https://www.socialinsider.io/blog/instagram-content-research/ (benchmarks 2025)
- [S13] https://buffer.com/resources/how-often-to-post-on-instagram/
- [S14] https://www.socialinsider.io/blog/instagram-caption-length/
- [S16] https://multiplayer.it/notizie/instagram-limita-gli-hashtag-se-ne-potranno-utilizzare-massimo-5-per-post.html
- [S19] https://www.socialmediatoday.com/news/instagram-clarifies-advice-on-single-word-ctas-and-longer-reels/718151/
- [S21] https://researchinnovation.kingston.ac.uk/en/publications/you-wont-believe-whats-in-this-paper-clickbait-relevance-and-the--3/
- [S25] https://intercom.help/getvamos/en/articles/16934858-the-outlier-score
- [S26] https://eden.so/help/discover/outlier-multiplier/
- [S34] https://www.trymypost.com/blog/instagram-carousel-hook-design-principles-2026
- [S37] https://skedsocial.com/blog/instagram-stories-marketing.md
- Buffer, estudo de 2022: https://buffer.com/resources/do-instagram-carousels-get-more-engagement/
- PDF Socialinsider 2025 (ilegível por texto): https://cdn.socialinsider.io/documents/instagram_benchmarks_2025.pdf

Vistas apenas em resultados de busca (resumo do buscador; não abertas, trate como secundárias):

- [S15] https://stackinfluence.com/short-instagram-captions-boost-engagement/ (caso de 4.408 posts)
- [S17] https://blog.hootsuite.com/experiment-instagram-seo-vs-hashtags/
- [S17b] https://blog.postly.ai/hashtags-fading-fast-unlock-instagram-success-without-them-in-2025/ e https://socialk.it/en/blog/instagram-hashtag-strategy
- [S18] https://influenceonline.co.uk/2025/07/18/instagram-posts-are-now-appearing-in-google-searches-this-is-what-pr-needs-to-know e https://www.afaqs.com/news/digital/search-engines-can-now-index-public-content-from-instagram-9483796
- [S20] https://www.politics.ox.ac.uk/news/young-audiences-are-redefining-how-they-consume-news-new-reuters-report-argues (Reuters Institute Digital News Report 2025)
- [S22] https://arxiv.org/pdf/1806.04212 (modelagem de curiosidade e clickbait; cita Loewenstein)
- [S23] https://penntoday.upenn.edu/2013-04-18/interviews/qa-jonah-berger
- [S24] https://sketchplanations.com/make-your-idea-sticky
- [S27] https://apify.com/datascoutlab/youtube-outlier-finder e https://ytgrowth.io/blog/youtube-outlier-video (esta última retornou 403)
- [S28] https://www.Gwern.net/doc/psychology/linguistics/2019-brysbaert.pdf (Brysbaert, 2019, Journal of Memory and Language)
- [S29] https://www.oktopost.com/blog/instagram-grid-size-guide/ e https://socialnewsdesk.com/blog/attention-instagram-creators-updated-image-and-video-dimensions-for-2025
- [S30] https://www.outfy.com/blog/fr/la-zone-de-securite-instagram-expliquee/
- [S31] https://metricool.com/instagram-increases-carousel-content-limit/ e https://vistasocial.com/insights/instagram-carousel-limit-doubled-to-20-photos-or-videos/
- [S32] https://hstalks.com/article/11245/download/ e https://www.creatorsjet.com/blog/are-instagram-collab-posts-worth-it-a-data-driven-guide
- [S33] https://later.com/blog/instagram-stories-countdown-sticker
- [S35] https://usevisuals.com/blog/social-media-copywriting-for-carousels e https://postnitro.ai/blog/post/carousel-typography-guide-perfecting-font-sizes-and-spacing
- [S36] https://posteverywhere.ai/blog/how-the-instagram-algorithm-works e https://www.dataslayer.ai/blog/instagram-algorithm-2025-complete-guide-for-marketers
- [S38] https://www.rivaliq.com/blog/instagram-stories-benchmark-report (403 na abertura; só o resumo de busca)
- [S40] https://www.contentspilot.com/en/articles/increase-instagram-carousel-completion-rate e https://postnitro.ai/blog/post/carousel-swipe-through-rate-optimization
- Tentativas sem sucesso (página 404 ou conteúdo ilegível): https://www.socialinsider.io/blog/instagram-carousel-engagement, https://www.socialinsider.io/data-geeks/Instagram-Carousel-Study.pdf, https://betanews.com/2025/12/19/instagram-puts-a-limit-on-hashtag-usage/ (403)
