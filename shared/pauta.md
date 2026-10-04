# Do tema à pauta

O usuário traz um tema, às vezes com outliers e conteúdo. Seu trabalho aqui é decidir **o ângulo**, não escrever slides.

## 1. Entender o insumo

Identifique a partir da mensagem, sem perguntar o que já foi dito:
- **tema** e **gatilho** (notícia datada, evento, dúvida recorrente, tema perene);
- **formato** pedido (carrossel, stories ou os dois);
- **conteúdo** que o usuário já mandou (links, textos, prints): leia tudo antes de propor;
- **outliers** que vieram junto.

Pergunte só o que mudaria a recomendação: por exemplo, se o objetivo é alcance novo ou relacionamento com quem já segue.

## 2. Pesquisar

- **Fatos:** busque a fonte primária (comunicado, documentação, paper) e um veículo confiável. Registre título, URL e data. Notícia sem confirmação primária fica fora ou entra como "segundo o veículo X".
- **Outliers:** se o usuário trouxe, desmonte cada um com a ficha de [outliers.md](outliers.md). Se não trouxe, procure 3 a 5 referências do mesmo tema ou formato em perfis de tecnologia e educação. Registre cada uma no acervo (`acervo/outliers/`) com o score quando houver dado público.
- **Acervo:** consulte `acervo/outliers/` e `acervo/publicados.jsonl` para reaproveitar mecanismos que já funcionaram e evitar repetir arco mais de 3 vezes seguidas.

## 3. Propor ângulos

Entregue de 2 a 3 ângulos **materialmente diferentes**. Para cada um:

| Campo | Exemplo |
|---|---|
| Ângulo (a tese em uma frase) | "Como isso impacta o seu dia a dia" |
| Público e objetivo | Estudante iniciante; entender e seguir a série |
| Arco | A2 (notícia + impacto) — ver [narrativa.md](narrativa.md) |
| Hook candidato (2 variações) | H1 "A OpenAI quer colocar um colega digital no seu dia a dia" / H9 "Esse recurso muda o que um estagiário consegue entregar" |
| Prova disponível | Vídeo oficial do DevDay; post da OpenAI |
| Mecanismo emprestado | Do outlier X: "tradução de anúncio técnico em efeito na rotina" |
| Risco | Recurso ainda em beta; não prometer disponibilidade |

Use **forte / parcial / desconhecido** para a força da evidência. Não invente nota de chance de viralizar.

Recomende um ângulo e diga o que deliberadamente não otimizar agora.

## 4. Fechar a pauta

Com o ângulo aceito (ou execução direta autorizada), preencha o bloco `pauta` do plano:

```json
"pauta": {
  "tema": "...", "gatilho": "...", "publico": "...", "objetivo": "...",
  "angulo": "...", "arco": "A2", "hook_tipo": "H1", "promessa": "...",
  "cta_tipo": "seguir",
  "outliers": [{ "ref": "URL ou arquivo", "score": 6.2, "mecanismo": "...", "eixos_diferentes": ["tema", "exemplo"] }],
  "contribuicao_original": "dado, exemplo brasileiro, contexto UFSCar ou teste próprio",
  "hipotese": "o que esperamos que aconteça e qual métrica olhar"
}
```

`cta_tipo`: `salvar`, `compartilhar`, `comentar`, `comentar-palavra` (só com material real entregue por DM), `seguir`, `inscrever`, `link` (stories) ou `responder` (stories).

## 5. Depois de publicar

Quando o usuário trouxer resultados, adicione uma linha em `acervo/publicados.jsonl` com data, slug, arco, hook_tipo, formato e as métricas com denominador (alcance, salvamentos, envios, curtidas, comentários). Calcule o score do próprio post contra a mediana da Liga (ver [outliers.md](outliers.md)). É assim que a hipótese da pauta é testada.
