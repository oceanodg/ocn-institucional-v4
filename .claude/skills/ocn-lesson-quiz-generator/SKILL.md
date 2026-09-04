---
name: ocn-lesson-quiz-generator
description: 'Gera um arquivo Markdown completo de avaliação (quiz) a partir do texto de uma apostila bíblica ou teológica. Produz questões intercaladas de múltipla escolha (MC) e verdadeiro/falso (VF), agrupadas por seção da apostila, com gabarito comentado e referências bíblicas ao final. Use esta skill SEMPRE que o usuário fornecer o texto de uma apostila (bíblica, teológica ou didática) e pedir para gerar uma avaliação, quiz, prova, teste, questões, perguntas de revisão, ou variações disso — mesmo que   não mencione "skill" explicitamente. Também acione quando o usuário disser "cria o quiz dessa lição", "gera as perguntas desse conteúdo", "faz a avaliação desse material", "gera a prova", "faz as questões", ou similar.'
---

# Quiz Gerador — Apostilas Bíblicas

Gera um arquivo Markdown de avaliação completo a partir do texto colado de uma apostila.

---

## Entrada esperada

O usuário fornecerá o texto da apostila diretamente na conversa (colado como texto,
documento anexado ou arquivo .md). O texto deve conter:

- Título da lição (ex: "Lição 1 – As coisas que tens visto e as que são")
- Seções numeradas ou com subtítulos (ex: "1. A visão do Cristo glorificado")
- Conteúdo explicativo com referências bíblicas (ex: Ap 1.3, Jo 19.26)

---

## Saída esperada

Um único arquivo Markdown com o nome `quiz-[slug-da-licao].md`, salvo em
`/mnt/user-data/outputs/`, contendo:

1. **Cabeçalho** com título do curso/livro e da lição
2. **Perguntas agrupadas por seção**, com subtítulo de cada seção antes das perguntas
3. **Questões intercaladas**: 2 Múltipla Escolha (MC) + 2 Verdadeiro ou Falso (VF) por seção
4. **Gabarito comentado** ao final, com justificativa e referências bíblicas para cada questão

---

## Processo passo a passo

### Passo 1 — Analisar a apostila

Leia o texto completo e extraia:

- Título da lição
- Lista de seções (excluindo "Para começar", "Conclusão" e similares introdutórios/finais)
- Para cada seção: tema central, afirmações-chave, referências bíblicas citadas, nomes
  de lugares/personagens, e possíveis pontos de confusão doutrinária

> ⚠️ Inclua "Para começar" e "Conclusão" apenas se tiverem conteúdo substancial com
> fatos ou referências verificáveis. Caso contrário, pule-as.

### Passo 2 — Gerar as questões por seção

Para cada seção identificada, gere exatamente:

**2 questões de Múltipla Escolha (MC)**

- 4 alternativas (a, b, c, d)
- Apenas uma alternativa correta
- Distratores plausíveis, mas claramente incorretos para quem leu o texto
- Evitar alternativas do tipo "Todas as anteriores" ou "Nenhuma das anteriores"
- Variar o nível: uma pergunta mais factual, uma mais interpretativa
- Incluir a referência bíblica relevante ao final do enunciado, em itálico,
  quando a pergunta estiver diretamente ancorada em um versículo da apostila
  (ex: _Ap 2.4_). Se a pergunta for conceitual sem versículo direto, omitir.

**2 questões de Verdadeiro ou Falso (VF)**

- Afirmações diretas, sem dupla negação
- Uma verdadeira e uma falsa (para balancear)
- A afirmação falsa deve conter um erro específico e identificável no texto
  (ex: trocar nome de cidade, inverter característica de uma igreja)
- Incluir a referência bíblica relevante ao final da afirmação, em itálico,
  quando existir versículo direto associado (ex: _Jo 19.26_). Se não houver
  versículo específico, omitir.

**Ordem das questões dentro de cada seção:**

```
MC 1
VF 1
MC 2
VF 2
```

### Passo 3 — Numerar as questões globalmente

As questões devem ser numeradas de forma contínua ao longo de todo o documento
(Q1, Q2, Q3... até o final), mesmo que agrupadas por seção.

### Passo 4 — Escrever o gabarito comentado

Ao final do documento, após todas as perguntas, inclua uma seção `## Gabarito` com:

- Número da questão (ex: **Q1**)
- Resposta correta
- Justificativa em 2–4 frases explicando **por que** é a resposta certa
- Referência bíblica relevante (quando existir no texto da apostila)

---

## Formato do arquivo Markdown de saída

```markdown
# Quiz — [Título do Livro/Curso]

## [Título da Lição]

---

### [Título da Seção 1]

**Q1** [texto da pergunta] _Ref: Ap 1.18_

a) [alternativa]
b) [alternativa]
c) [alternativa]
d) [alternativa]

---

**Q2** [afirmação] _Ref: Jo 19.26_

( ) Verdadeiro ( ) Falso

---

**Q3** [texto da pergunta conceitual sem versículo direto]

a) [alternativa]
b) [alternativa]
c) [alternativa]
d) [alternativa]

---

**Q4** [afirmação] _Ref: Ap 2.4_

( ) Verdadeiro ( ) Falso

---

### [Título da Seção 2]

[... continua ...]

---

## Gabarito

**Q1** — Resposta: b)
[Justificativa]. _Referência: Ap 1.18_

**Q2** — Resposta: Verdadeiro
[Justificativa]. _Referência: Jo 19.26_

[... continua para todas as questões ...]
```

---

## Regras de qualidade

- **Fidelidade ao texto**: todas as respostas corretas devem ser diretamente sustentadas
  pelo conteúdo da apostila. Não inventar informações ausentes.
- **Referências bíblicas**: usar exatamente como aparecem no texto da apostila
  (ex: Ap 1.3, não Apocalipse 1:3).
- **Linguagem**: português do Brasil (pt-BR), tom formal e claro, adequado ao contexto
  de ensino bíblico cristão evangélico.
- **Dificuldade equilibrada**: misturar perguntas fáceis (memorização) e médias
  (compreensão/interpretação). Evitar pegadinhas ou ambiguidade.
- **Gabarito completo**: o gabarito deve cobrir 100% das questões, sem exceção.

---

## Nome do arquivo de saída

Gerar o slug a partir do título da lição:

- Remover acentos e caracteres especiais
- Substituir espaços por hífens
- Colocar tudo em minúsculas

Exemplo: "Lição 1 – As coisas que tens visto e as que são"
→ `quiz-licao-1-as-coisas-que-tens-visto-e-as-que-sao.md`

Se o usuário não informar aonde salvar o arquivo,
pergunte e se ele não informar, salve em `/docs/oceano-academy-materiais-didaticos/quizzes/[nome-do-arquivo].md`
