---
name: ocn-lesson-cloze-generator
description: 'Gera um arquivo Markdown de exercícios cloze (frases com lacunas) a partir do texto de uma apostila bíblica ou teológica, usando a técnica de cloze deletion para reforçar memorização de conceitos-chave, nomes, lugares e referências bíblicas. Use esta skill SEMPRE que o usuário fornecer o texto de uma apostila (bíblica, teológica ou didática) e pedir para gerar frases com lacunas, exercício de cloze, completar as frases, preencher os espaços em branco, ou variações disso — mesmo que não mencione "skill" explicitamente. Também acione quando o usuário disser "cria o cloze dessa lição", "gera as frases com lacunas desse conteúdo", "faz o exercício de completar" desse material", "gera o preencha as lacunas", ou similar.'
---

# Cloze Gerador — Apostilas Bíblicas (Oceano Academy)

Gera um arquivo Markdown de exercícios cloze (frases com palavras omitidas) a partir
do texto colado de uma apostila, usando a técnica de cloze deletion para reforçar
a fixação de conceitos, nomes, lugares e referências bíblicas centrais da lição.

---

## O que é a técnica de cloze

A técnica de cloze (cloze deletion) consiste em pegar uma frase completa e correta
do texto-fonte e remover uma ou mais palavras-chave, substituindo-as por uma lacuna
(`_____`). O aluno deve preencher a lacuna com a palavra certa, com base no que leu
na apostila. É uma técnica de recuperação ativa (active recall), eficaz para fixar
vocabulário teológico, nomes próprios, lugares, números e termos doutrinários.

---

## Entrada esperada

O usuário fornecerá o texto da apostila diretamente na conversa (colado como texto,
documento anexado ou arquivo .md). O texto deve conter:

- Título da lição (ex: "Lição 1 – Foi assim que tudo começou")
- Seções com subtítulos (ex: "A criação do mundo", "A queda do homem")
- Conteúdo explicativo com referências bíblicas (ex: Gn 1.1, Rm 5.12)

---

## Saída esperada

Um único arquivo Markdown com o nome `cloze-[slug-da-licao].md`, contendo:

1. **Cabeçalho** com título do curso/livro e da lição
2. **Frases cloze agrupadas por seção**, com subtítulo de cada seção (sem emojis)
3. **3 a 5 frases por seção**, cada uma extraída/adaptada do texto com 1 lacuna
   (raramente 2, apenas quando a frase for longa e comportar duas omissões sem
   ficar ambígua)
4. **Banco de palavras** opcional por seção (ver Passo 4), para apoiar o aluno
5. **Gabarito completo** ao final, numerado, com a palavra correta e a referência
   bíblica quando existir

---

## Processo passo a passo

### Passo 1 — Analisar a apostila

Leia o texto completo e extraia:

- Título do curso ou livro bíblico (quando identificável) e título da lição
- Lista de seções (excluindo "Introdução", "Conclusão" e similares, salvo se
  tiverem conteúdo factual ou doutrinário substancial)
- Para cada seção: frases-chave que carregam informação central (nomes,
  lugares, números, termos doutrinários, referências bíblicas)

### Passo 2 — Selecionar as frases-base

Para cada seção, escolha 3 a 5 frases do próprio texto (ou levemente adaptadas
para funcionar isoladamente, fora do contexto do parágrafo original) que:

- Contenham uma informação central e verificável (não uma opinião ou frase de
  transição)
- Façam sentido completo mesmo lidas isoladamente, sem depender de frases
  anteriores
- Sejam claras e objetivas, evitando frases longas demais ou com múltiplas
  subordinadas

> Não invente frases que não estejam sustentadas pelo conteúdo da apostila.
> Pequenas adaptações de conectivos são permitidas para a frase funcionar
> isolada, mas a informação factual deve vir sempre do texto original.

> **Nunca mencionar a fonte como "apostila"**: se a frase original citar a fonte
> (ex: "a apostila apresenta os dez mandamentos..."), reescreva usando "o texto"
> em vez de "apostila", "material" ou "documento". Ex.: em vez de "a apostila
> afirma que a graça não começa no Novo Testamento", escreva "o texto afirma
> que a graça não começa no Novo Testamento".

### Passo 3 — Escolher a palavra a ser omitida

Para cada frase selecionada, escolha **uma palavra ou expressão curta** (1 a 3
palavras) que seja a informação central que se deseja testar. Priorize, nesta
ordem:

1. Nomes próprios (pessoas, lugares) — ex: "Adão", "Éden", "Nazaré"
2. Termos doutrinários-chave — ex: "graça", "aliança", "redenção"
3. Números e referências bíblicas — ex: "seis dias", "Gn 1.27"
4. Verbos ou substantivos centrais da afirmação — ex: "criou", "pecado"

Evite omitir:

- Artigos, preposições ou conectivos (ex: "de", "para", "que")
- Palavras que possam ter múltiplas respostas corretas plausíveis, gerando
  ambiguidade

Substitua a palavra escolhida por uma lacuna no formato `_____` (5 underlines,
independente do tamanho da palavra omitida, para não dar pista pelo tamanho).

### Passo 4 — Banco de palavras (opcional, por seção)

Ao final de cada seção, adicione um pequeno banco de palavras embaralhado com
as respostas daquela seção (mais 1 ou 2 palavras "distratoras" plausíveis, que
não são resposta de nenhuma lacuna daquela seção), para apoiar alunos com mais
dificuldade. Use este formato:

```
**Banco de palavras:** graça, Adão, Éden, aliança, pecado, redenção
```

> Este banco é opcional — inclua por padrão, mas informe ao usuário que pode
> ser removido se ele preferir um exercício sem apoio.

### Passo 5 — Escrever o gabarito

Ao final do documento, após todas as seções, inclua uma seção `## Gabarito`
com:

- Número da frase (ex: **1.**)
- Palavra(s) correta(s) que preenchem a lacuna
- Referência bíblica relevante entre parênteses, em itálico, quando existir
  no texto da apostila (ex: _(Gn 1.27)_)

### Passo 6 — Nomear e salvar o arquivo

Gerar o slug a partir do título da lição:

- Remover acentos e caracteres especiais
- Substituir espaços por hífens
- Colocar tudo em minúsculas

Exemplo: "Lição 1 – Foi assim que tudo começou"
→ `cloze-licao-1-foi-assim-que-tudo-comecou.md`

Salvar em: `/mnt/user-data/outputs/[nome-do-arquivo].md`

---

## Formato do arquivo Markdown de saída

```markdown
# Cloze — [Título do Curso / Livro Bíblico]

## [Título da Lição]

---

### [Título da Seção 1]

1. No princípio, Deus criou os céus e a **\_**. _(Gn 1.1)_
2. Deus formou o homem a partir do **\_** da terra.
3. Adão foi colocado no jardim do **\_** para cultivá-lo e guardá-lo. _(Gn 2.15)_

**Banco de palavras:** terra, pó, Éden, aliança, graça

---

### [Título da Seção 2]

[... continua, numeração seguindo em sequência (4, 5, 6...) ...]

---

## Gabarito

**1.** terra _(Gn 1.1)_
**2.** pó
**3.** Éden _(Gn 2.15)_

[... continua para todas as frases ...]
```

---

## Regras de qualidade

- **Fidelidade ao texto**: toda frase e resposta correta devem estar diretamente
  sustentadas pelo conteúdo da apostila. Não inventar informações ausentes.
- **Nunca mencionar a fonte como "apostila" nas frases geradas**: ao redigir ou
  adaptar as frases cloze, refira-se ao conteúdo lido sempre como "o texto",
  nunca como "apostila", "material" ou "documento". Ex.: escrever "o texto
  afirma que a graça não começa no Novo Testamento" em vez de "a apostila
  afirma que a graça não começa no Novo Testamento". Essa regra vale apenas
  para as frases e o banco de palavras — o restante da skill (cabeçalhos,
  instruções internas, nome de arquivos etc.) pode continuar usando "apostila"
  normalmente.
- **Uma lacuna clara por frase**: evitar frases com mais de uma lacuna, exceto
  quando a frase for longa e as duas omissões não gerarem ambiguidade entre si.
- **Sem ambiguidade**: a palavra correta deve ser a única resposta razoável para
  a lacuna, dado o contexto da frase.
- **Referências bíblicas**: usar exatamente como aparecem no texto da apostila
  (ex: Gn 1.1, não Gênesis 1:1).
- **Linguagem**: português do Brasil (pt-BR), tom claro e didático, adequado ao
  contexto de ensino bíblico cristão evangélico.
- **Sem emojis**: não usar emojis em nenhuma parte do arquivo gerado.
- **Numeração contínua**: as frases devem ser numeradas de forma contínua ao
  longo de todo o documento (1, 2, 3... até o final), mesmo que agrupadas por
  seção.
- **Gabarito completo**: o gabarito deve cobrir 100% das frases, sem exceção.
- **Seções opcionais**: incluir "Introdução" e "Conclusão" como blocos apenas se
  contiverem fatos verificáveis com substância. Caso contrário, ignorar.

---

## Nome do arquivo de saída

Gerar o slug a partir do título da lição:

- Remover acentos e caracteres especiais
- Substituir espaços por hífens
- Colocar tudo em minúsculas

Exemplo: "Lição 1 – As coisas que tens visto e as que são"
→ `complete-a-frase-licao-1-as-coisas-que-tens-visto-e-as-que-sao.md`

Se o usuário não informar aonde salvar o arquivo,
pergunte e se ele não informar, salve em `/docs/oceano-academy-materiais-didaticos/clozes/[nome-do-arquivo].md`
