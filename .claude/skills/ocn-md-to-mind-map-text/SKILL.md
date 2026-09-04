---
name: ocn-md-to-mind-map-text
description: >
  Converte um arquivo Markdown estruturado (apostilas, cursos, materiais didáticos) em um mapa mental
  hierárquico no formato Markdown, pronto para importar em ferramentas como Whimsical, Miro ou Obsidian.
  A saída usa exclusivamente bullets aninhados (sem setas ou conectores textuais), com profundidade
  de aninhamento ajustada ao conteúdo. Use esta skill SEMPRE que o usuário fornecer um Markdown de
  apostila ou material didático e pedir para gerar um mapa mental, mind-map, mapa de tópicos ou
  variações disso — mesmo que diga apenas "faz o mind-map disso", "gera o mapa mental", "cria o
  mapa de tópicos desse material" ou similar.
---

# ocn-md-to-mind-map-text Skill

Converte apostilas em Markdown para um mapa mental hierárquico em Markdown puro:

| Arquivo              | Conteúdo                                               |
| -------------------- | ------------------------------------------------------ |
| `mind_map_<slug>.md` | Mapa mental completo em Markdown com bullets aninhados |

---

## Quando acionar

- Usuário fornece Markdown de apostila/curso e pede "mapa mental", "mind-map" ou "mapa de tópicos"
- Usuário diz "faz o mind-map desse material", "gera o mapa mental da lição X"
- Usuário quer estrutura hierárquica do conteúdo para importar em ferramenta visual

---

## Parâmetros

| Parâmetro | Padrão         | Descrição                                                                         |
| --------- | -------------- | --------------------------------------------------------------------------------- |
| `input`   | obrigatório    | Texto Markdown da apostila (colado na conversa ou em arquivo)                     |
| `depth`   | `auto`         | Profundidade máxima de aninhamento (`auto` = Claude decide conforme o conteúdo)   |
| `detail`  | `full`         | Nível de detalhe: `full` (todos os pontos), `summary` (apenas tópicos principais) |
| `prefix`  | slug do título | Prefixo do arquivo de saída                                                       |

---

## Regras de formatação da saída

1. **Nó raiz** → `# Título do curso` (H1)
2. **Lições / capítulos** → `## Lição N – Título` (H2)
3. **Seções / tópicos** → `### N. Título da seção` (H3)
4. **Pontos principais** → `- bullet de primeiro nível`
5. **Sub-pontos** → `  - bullet de segundo nível` (2 espaços por nível)
6. **Detalhes / exemplos / referências** → `    - bullet de terceiro nível` (4 espaços)
7. **Profundidade extra** → aninhe quantos níveis forem necessários, sempre com 2 espaços adicionais por nível
8. **Sem setas** → nunca use `→`, `->`, `->>` ou qualquer conector textual; a hierarquia é expressa apenas pelo aninhamento
9. **Sem texto corrido** → cada ideia deve ser um bullet; nunca use parágrafos dentro do mapa
10. **Referências bíblicas** → mantenha entre parênteses no mesmo bullet, ex: `- Abandono do primeiro amor (Ap 2.4)`
11. **Contrastes e oposições** → expresse como sub-bullets irmãos, nunca como texto com "vs" ou "×"
12. **Nomes em negrito** → use `**Nome**` para destacar personagens, igrejas ou conceitos-chave de uma seção
13. **Nunca mencionar a fonte como "apostila"** → embora a entrada seja o texto de uma
    apostila, os bullets gerados nunca devem usar as palavras "apostila", "material" ou
    "documento" para se referir ao conteúdo de origem. Quando for necessário referenciar
    a fonte, use sempre "o texto". Ex.: em vez de `- A apostila afirma que a graça não
    começa no Novo Testamento`, escreva `- O texto afirma que a graça não começa no
    Novo Testamento`

---

## Passo a passo

### 1. Receber o input

O input pode vir de duas formas:

- **Colado na conversa** → use diretamente
- **Arquivo enviado** → leia de `/mnt/user-data/uploads/<arquivo>.md`

### 2. Gerar o mapa mental via API Anthropic

```python
import anthropic, re

client = anthropic.Anthropic()

# Carregue o texto do material (colado ou lido do arquivo)
material_text = """..."""  # substitua pelo conteúdo real

msg = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=8000,
    system="""Você é um especialista em síntese de conteúdo didático cristão.
Sua tarefa é converter apostilas em mapas mentais hierárquicos em Markdown puro.

REGRAS OBRIGATÓRIAS:
- Use APENAS bullets aninhados com 2 espaços por nível de profundidade
- NUNCA use setas (→, ->, →), conectores textuais ou parágrafos
- Mantenha referências bíblicas entre parênteses no mesmo bullet
- Use **negrito** para destacar nomes e conceitos-chave
- Aninhe quantos níveis forem necessários para capturar a hierarquia do conteúdo
- Cada ideia = um bullet; nunca agrupe duas ideias no mesmo bullet
- Preserve a estrutura H1 > H2 > H3 > bullets do material original
- Nunca use as palavras "apostila", "material" ou "documento" para se referir à fonte
  do conteúdo; se precisar referenciar a origem dentro de um bullet, use "o texto"
- Retorne SOMENTE o Markdown do mapa mental, sem explicações, sem preâmbulo""",
    messages=[{
        "role": "user",
        "content": f"""Converta este material didático em um mapa mental hierárquico em Markdown.

ESTRUTURA ESPERADA:
# Título do curso

## Lição 1 – Título
### 1. Título da seção
- Ponto principal
  - Sub-ponto
    - Detalhe ou referência (Ap 1.1)
  - Outro sub-ponto
- Outro ponto principal

## Lição 2 – Título
...

MATERIAL:
{material_text}"""
    }]
)

mind_map_md = msg.content[0].text
```

---

## Estrutura da saída esperada

```markdown
# Nome do Curso

## Lição 1 – Título da lição

### 1. Título da seção

- **Conceito-chave**
  - Sub-ponto A
    - Detalhe (Ap 1.3)
  - Sub-ponto B
- Outro ponto
  - Detalhe

### 2. Título da seção

- Ponto
  - Sub-ponto
    - Nível 3
      - Nível 4 (se necessário)

## Lição 2 – Título da lição

...
```

---

## Troubleshooting

| Problema                                | Solução                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------- |
| Output com setas ou conectores          | Reforce no prompt: "NUNCA use setas ou conectores textuais"                     |
| Bullets muito rasos (pouco aninhamento) | Adicione ao prompt: "aninhe ao máximo, cada sub-ideia deve ser um nível abaixo" |
| Output com parágrafos em vez de bullets | Reforce: "cada ideia = um bullet, nunca parágrafos"                             |
| Arquivo muito longo para o contexto     | Processe lição por lição, concatene os outputs                                  |
| Referências bíblicas ausentes           | Adicione ao prompt: "preserve todas as referências bíblicas do texto original"  |
| Bullet menciona "apostila" ou "material" | Reforce: "nunca use 'apostila', 'material' ou 'documento'; use 'o texto'"       |

---

## Notas técnicas

- A skill não depende de scripts externos — todo o processamento é feito via API Anthropic
- O Markdown gerado é compatível com Whimsical, Miro, Obsidian, Notion e qualquer editor que suporte listas aninhadas
- Para materiais muito extensos (4+ lições densas), considere processar por lição e concatenar
- O modelo usado é sempre `claude-sonnet-4-20250514`

## Nome do arquivo de saída

Gerar o slug a partir do título da lição:

- Remover acentos e caracteres especiais
- Substituir espaços por hífens
- Colocar tudo em minúsculas

Exemplo: "Lição 1 – As coisas que tens visto e as que são"
→ `mind-map-licao-1-as-coisas-que-tens-visto-e-as-que-sao.md`

Se o usuário não informar aonde salvar o arquivo,
pergunte e se ele não informar, salve em `/docs/oceano-academy-materiais-didaticos/mind-maps/[nome-do-arquivo].md`
