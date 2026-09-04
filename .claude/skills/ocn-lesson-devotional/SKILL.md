---
name: ocn-lesson-devotional
description: 'Gera um devocional em Markdown, dividido em 6 dias de leitura, a partir do texto de uma apostila bíblica ou teológica. Se o usuário enviar o curso inteiro (geralmente 4 ou 5 lições), gera um devocional separado para CADA lição, um arquivo por lição. Use esta skill SEMPRE que o usuário fornecer o texto de uma apostila (bíblica, teológica ou didática) e pedir para gerar um devocional, devocional diário, plano devocional, ou variações disso — mesmo que não mencione "skill" explicitamente. Também acione quando o usuário disser "cria o devocional dessa lição", "gera o devocional desse curso", "faz o devocional de 6 dias", "transforma essa apostila em devocional", ou similar.'
---

# Devocional Gerador — Apostilas Bíblicas (Oceano Academy)

Gera, a partir do texto de uma apostila, um devocional curto organizado para ser lido
ao longo de **6 dias**. Se o material enviado contiver mais de uma lição (curso completo),
gera **um devocional por lição**, cada um em seu próprio arquivo.

Esta skill não usa código-fonte (Python ou qualquer outra linguagem) — todo o trabalho é
de leitura, interpretação e redação direta do Markdown de saída.

---

## Entrada esperada

O usuário fornecerá o texto de uma apostila (colado como texto, documento anexado ou
arquivo .md), podendo ser:

- **Uma única lição** (ex: "Lição 3 – A queda e a promessa"), ou
- **Um curso inteiro**, com várias lições em sequência (tipicamente 4 ou 5)

O texto deve conter título(s) de lição, seções com subtítulos e conteúdo explicativo com
referências bíblicas.

---

## Saída esperada

- Se a entrada for **uma lição**: um único arquivo Markdown `devocional-[slug-da-licao].md`
- Se a entrada for **um curso com várias lições**: um arquivo Markdown por lição, cada um
  com o nome `devocional-[slug-da-licao].md`, nunca um arquivo único combinando todas as lições

Cada arquivo contém:

1. **Cabeçalho** com título do curso/livro e da lição
2. **6 blocos de dia** (Dia 1 a Dia 6), cada um com: título temático do dia, texto
   devocional curto, um versículo-chave, uma pergunta de reflexão e, quando fizer sentido
   para aquele conteúdo, uma oração breve
3. Separadores `---` entre os dias

---

## Processo passo a passo

### Passo 1 — Identificar as lições no material

Se o texto enviado contiver mais de uma lição (títulos como "Lição 1", "Lição 2" etc.),
trate cada lição de forma **totalmente independente** a partir daqui — repita os passos 2
a 5 para cada uma, gerando um arquivo de saída por lição. Não misture conteúdo de lições
diferentes num mesmo devocional.

### Passo 2 — Analisar a lição e mapear seu conteúdo

Para a lição em questão, leia o texto completo e extraia:

- Título da lição e do curso/livro bíblico (quando identificável)
- As seções da lição, na ordem em que aparecem, com o tema central de cada uma
- Personagens, eventos, doutrinas e referências bíblicas de cada seção
- O fio condutor espiritual da lição — a ideia ou verdade principal que ela ensina

### Passo 3 — Distribuir o conteúdo em 6 dias (sem modelo fixo)

**Não existe uma estrutura padrão de dias para aplicar em toda lição.** A divisão em 6 dias
deve nascer da própria organização da lição, não de um roteiro genérico repetido de lição
para lição. Use o seguinte raciocínio, adaptando ao caso:

- Se a lição tem 5–6 seções de peso parecido, cada seção pode virar um dia
- Se a lição tem menos seções (ex: 3), uma seção mais densa ou com múltiplos sub-temas
  pode ser desdobrada em 2 dias, cada um focando um ângulo diferente
- Se a lição tem mais seções do que dias, agrupe seções afins num mesmo dia
- Reserve o último dia para uma síntese que conecta os temas da lição à vida prática do
  leitor, quando isso não tiver sido naturalmente coberto pelos dias anteriores

O critério é sempre: **o que a lição realmente ensina, na ordem e no peso em que ensina**,
nunca um esqueleto pronto de "Dia 1: introdução, Dia 2: contexto..." aplicado por hábito.

### Passo 4 — Escrever cada dia

Para cada um dos 6 dias, produza:

- **Título do dia**: curto, temático, extraído do conteúdo real daquele dia (não usar
  títulos genéricos como "Dia 1 – Introdução")
- **Texto devocional**: breve (aproximadamente 100–150 palavras), tom pastoral e pessoal,
  em prosa, fiel ao conteúdo da apostila — sem inventar informações ausentes no texto-fonte
- **Versículo-chave**: uma referência bíblica central daquele trecho, no mesmo formato
  usado na apostila (ex: Gn 3.15, não Gênesis 3:15)
- **Pergunta de reflexão**: sempre presente, uma pergunta pessoal e aplicável que convide
  o leitor a examinar a própria vida à luz do que foi lido naquele dia
- **Nunca mencionar a fonte como "apostila"**: no texto devocional e na pergunta de
  reflexão, jamais use as palavras "apostila", "material" ou "documento" para se referir
  ao conteúdo de origem. Use sempre "o texto" (ou reformule sem precisar citar a fonte).
  Ex.: em vez de "Por que a apostila afirma que a graça não começa no Novo Testamento?",
  escreva "Por que o texto afirma que a graça não começa no Novo Testamento?"
- **Oração breve**: incluir apenas quando o conteúdo do dia pedir naturalmente esse
  fechamento (ex: um chamado à confissão, gratidão, entrega). Não forçar uma oração em
  todo dia só para preencher a estrutura — dias mais reflexivos ou expositivos podem
  terminar apenas na pergunta

### Passo 5 — Nomear e salvar o(s) arquivo(s)

Gerar o slug a partir do título da lição:

- Remover acentos e caracteres especiais
- Substituir espaços por hífens
- Colocar tudo em minúsculas

Exemplo: "Lição 3 – A queda e a promessa" → `devocional-licao-3-a-queda-e-a-promessa.md`

Salvar um arquivo por lição.

---

## Formato do arquivo Markdown de saída

```markdown
# Devocional — [Título do Curso / Livro Bíblico]

## [Título da Lição]

Um devocional de 6 dias para acompanhar esta lição.

---

### Dia 1 — [Título temático do dia, extraído do conteúdo]

[Texto devocional em prosa, ~100–150 palavras, tom pastoral e pessoal.]

**Versículo-chave:** [Referência, ex: Gn 1.1]

**Para refletir:** [Pergunta pessoal de reflexão.]

[Oração breve, apenas quando fizer sentido para o conteúdo do dia.]

---

### Dia 2 — [Título temático do dia]

[... mesma estrutura ...]

---

[... até o Dia 6 ...]
```

---

## Regras de qualidade

- **Fidelidade ao texto**: nenhum texto devocional deve introduzir fatos, doutrinas ou
  eventos ausentes na apostila de origem
- **Um devocional por lição**: mesmo recebendo um curso inteiro, nunca combine lições
  diferentes em um único arquivo ou em um único conjunto de 6 dias
- **Sem modelo genérico repetido**: o recorte temático dos 6 dias deve refletir a
  estrutura real de cada lição — duas lições diferentes não devem produzir devocionais
  com a mesma "forma" de divisão só porque seguem um roteiro fixo
- **Extensão**: o devocional é curto por definição — texto de cada dia enxuto,
  sem parágrafos longos ou repetição de ideias
- **Pergunta de reflexão**: presente em todos os 6 dias, sem exceção
- **Oração**: presente apenas quando o conteúdo do dia justificar, nunca por padrão
- **Referências bíblicas**: usar exatamente como aparecem no texto da apostila
- **Sem menção à fonte**: o texto devocional e a pergunta de reflexão nunca devem
  chamar o conteúdo de origem de "apostila", "material" ou "documento" — usar sempre
  "o texto" quando for necessário referenciar a fonte
- **Linguagem**: português do Brasil (pt-BR), tom devocional, acolhedor e pessoal —
  diferente do tom mais expositivo do FAQ ou do tom avaliativo do quiz
- **Sem código-fonte**: a geração é inteiramente redacional; não usar Python nem
  qualquer outro código para montar o devocional

---

## Nome do arquivo de saída

Gerar o slug a partir do título da lição:

- Remover acentos e caracteres especiais
- Substituir espaços por hífens
- Colocar tudo em minúsculas

Exemplo: "Lição 1 – As coisas que tens visto e as que são"
→ `devotional-licao-1-as-coisas-que-tens-visto-e-as-que-sao.md`

Se o usuário não informar aonde salvar o arquivo,
pergunte e se ele não informar, salve em `/docs/oceano-academy-materiais-didaticos/devotionals/[nome-do-arquivo].md`
