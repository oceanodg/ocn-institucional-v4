---
name: ocn-lesson-faq-generator
description: 'Gera um arquivo Markdown de FAQ (Perguntas e Respostas) a partir do texto de uma apostila bíblica ou teológica. Produz perguntas agrupadas por seção da lição, com respostas claras e referências bíblicas inline sempre que possível. Use esta skill SEMPRE que o usuário fornecer o texto de uma apostila (bíblica, teológica ou didática) e pedir para gerar um FAQ, perguntas e respostas, P&R, ou variações disso — mesmo que não mencione "skill" explicitamente. Também acione quando o usuário disser "cria o FAQ dessa lição", "gera as perguntas e respostas desse conteúdo", "faz o P&R desse material", "gera as dúvidas frequentes", ou similar.'
---

# FAQ Gerador — Apostilas Bíblicas (Oceano Academy)

Gera um arquivo Markdown de FAQ completo a partir do texto colado de uma apostila.

---

## Entrada esperada

O usuário fornecerá o texto da apostila diretamente na conversa (colado como texto,
documento anexado ou arquivo .md). O texto deve conter:

- Título da lição (ex: "Lição 1 – Foi assim que tudo começou")
- Seções com subtítulos (ex: "A criação e queda de Adão e Eva")
- Conteúdo explicativo com referências bíblicas (ex: Gn 1.1, Rm 5.12)

---

## Saída esperada

Um único arquivo Markdown com o nome `faq-[slug-da-licao].md`, contendo:

1. **Cabeçalho** com título do curso/livro e da lição
2. **Blocos de perguntas agrupados por seção**, com subtítulo de cada seção (sem emojis)
3. **3 a 5 perguntas por seção**, em formato `**Pergunta?**` seguido da resposta em prosa
4. **Referências bíblicas inline** nas respostas, em itálico e entre parênteses — ex: _(Gn 1.1)_
5. **Bloco final de reflexão geral** com 1 pergunta síntese que captura a mensagem central da lição
6. Separadores `---` entre cada par de pergunta e resposta

---

## Processo passo a passo

### Passo 1 — Analisar a apostila

Leia o texto completo e extraia:

- Título do curso ou livro bíblico (quando identificável) e título da lição
- Lista de seções (excluindo "Introdução", "Conclusão" e similares, salvo se tiverem
  conteúdo factual ou doutrinário substancial)
- Para cada seção: tema central, personagens, eventos, doutrinas, referências bíblicas

### Passo 2 — Definir os blocos temáticos

Cada seção da apostila vira um bloco de FAQ. Não use emojis nos títulos dos blocos
nem em nenhuma outra parte do arquivo gerado.

### Passo 3 — Gerar as perguntas por bloco

Para cada bloco, gere **3 a 5 perguntas**, seguindo estas diretrizes:

- **Tom**: perguntas naturais, como um aluno curioso faria ao professor
- **Variedade**: misturar perguntas factuais (quem, o quê, quando, onde) e
  interpretativas (por que, qual o significado, como isso se relaciona)
- **Fidelidade**: todas as respostas devem ser diretamente sustentadas pelo texto
  fornecido. Não inventar informações ausentes
- **Referências bíblicas**: incluir inline na resposta, em itálico, toda vez que o
  texto citar um versículo relacionado à pergunta — ex: _(Gn 3.15)_, _(Rm 5.12)_
- **Formato das referências**: usar exatamente como aparecem no texto fornecido
  (ex: Gn 1.1, não Gênesis 1:1)
- **Nunca mencionar a fonte como "apostila"**: nas perguntas e respostas geradas,
  jamais use as palavras "apostila", "material" ou "documento" para se referir ao
  conteúdo de origem. Use sempre "o texto" (ou reformule sem precisar citar a fonte).
  Ex.: em vez de "Por que a apostila afirma que a graça não começa no Novo
  Testamento?", escreva "Por que o texto afirma que a graça não começa no Novo
  Testamento?"
- **Respostas com lista**: quando uma pergunta tiver múltiplas consequências, itens
  ou aspectos distintos, usar lista com marcadores e negrito para o rótulo de cada item

### Passo 4 — Escrever o bloco de reflexão geral

Ao final, após todos os blocos temáticos, adicione um bloco `### Reflexão geral`
com **1 pergunta síntese** que capture a mensagem central ou a lição espiritual
principal da apostila, conectando os temas entre si.

### Passo 5 — Nomear e salvar o arquivo

Gerar o slug a partir do título da lição:

- Remover acentos e caracteres especiais
- Substituir espaços por hífens
- Colocar tudo em minúsculas

Exemplo: "Lição 1 – Foi assim que tudo começou"
→ `faq-licao-1-foi-assim-que-tudo-comecou.md`

Salvar em: `/mnt/user-data/outputs/[nome-do-arquivo].md`

---

## Formato do arquivo Markdown de saída

```markdown
# FAQ — [Título do Curso / Livro Bíblico]

## [Título da Lição]

---

### [Título do Bloco Temático 1]

**[Pergunta 1?]**
[Resposta em prosa, com referências bíblicas inline em itálico. Ex: *(Gn 1.1)*]

---

**[Pergunta 2?]**
[Resposta com múltiplos itens, quando aplicável:]

- **Rótulo A:** descrição _(Ref)_
- **Rótulo B:** descrição _(Ref)_

[Frase complementar com a graça ou promessa no contexto. *(Ref)*]

---

[... 3 a 5 perguntas por bloco ...]

---

### [Título do Bloco Temático 2]

[... continua ...]

---

### Reflexão geral

**[Pergunta síntese da lição?]**
[Resposta que conecta os temas da lição, destacando a mensagem central e referências
bíblicas-chave. *(Ref)*]
```

---

## Regras de qualidade

- **Fidelidade ao texto**: nenhuma resposta deve introduzir informações ausentes no texto fornecido
- **Referências bíblicas**: sempre que o texto citar um versículo vinculado ao tema da
  pergunta, incluí-lo na resposta — é um diferencial essencial deste FAQ
- **Linguagem**: português do Brasil (pt-BR), tom claro e acessível, adequado ao contexto
  de ensino bíblico cristão evangélico
- **Completude**: o FAQ deve cobrir todos os eventos, personagens e doutrinas relevantes
  mencionados no texto, sem deixar lacunas temáticas significativas
- **Sem menção à fonte**: as perguntas e respostas nunca devem chamar o conteúdo de
  origem de "apostila", "material" ou "documento" — usar sempre "o texto" quando for
  necessário referenciar a fonte
- **Separadores**: usar `---` entre cada par de pergunta/resposta dentro do mesmo bloco,
  e entre os blocos temáticos
- **Seções opcionais**: incluir "Introdução" e "Conclusão" como blocos apenas se contiverem
  fatos verificáveis ou reflexões doutrinárias com substância. Caso contrário, ignorar

---

## Exemplo de referência

O FAQ gerado para "Lição 1 – Foi assim que tudo começou" (Antigo Testamento, Oceano Academy)
serve como referência de qualidade esperada: blocos temáticos bem delimitados, sem emojis,
perguntas variadas entre factuais e interpretativas, respostas em prosa
com referências bíblicas inline, e um bloco final de reflexão que sintetiza a mensagem
espiritual da lição.

---

## Nome do arquivo de saída

Gerar o slug a partir do título da lição:

- Remover acentos e caracteres especiais
- Substituir espaços por hífens
- Colocar tudo em minúsculas

Exemplo: "Lição 1 – As coisas que tens visto e as que são"
→ `faz-licao-1-as-coisas-que-tens-visto-e-as-que-sao.md`

Se o usuário não informar aonde salvar o arquivo,
pergunte e se ele não informar, salve em `/docs/oceano-academy-materiais-didaticos/faqs/[nome-do-arquivo].md`
