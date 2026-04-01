---
name: md-to-teaching-material-page
description: >
  Converte um arquivo Markdown estruturado de material didático (cursos, lições, apostilas)
  em um componente de página React (.tsx) usando os componentes customizados do projeto
  Oceano Academy (H1, H2, H3, P, Separator, Container, UL, SummaryLi, HeroContainer, etc.).
  Use esta skill SEMPRE que o usuário fornecer um arquivo .md de conteúdo didático e pedir
  para gerar ou atualizar a página React correspondente — mesmo que ele diga apenas
  "gera a página", "converte pra TSX", "cria o componente" ou variações disso.
  Também acione quando o usuário disser "transforma esse markdown em página" ou
  "faz a página desse curso/lição/material".
---

# md-to-teaching-material-page

Converte um arquivo Markdown de material didático no formato do Oceano Academy em um componente de página React TypeScript (`.tsx`), usando os componentes customizados do projeto.

---

## Inputs esperados

- Um arquivo `.md` com estrutura de material didático (curso, lição, apostila).
- Um arquivo `page.tsx` existente que será **alterado** (não criado do zero).

> **IMPORTANTE — verificação antes de executar:**
> Se o usuário não fornecer o arquivo `page.tsx`, **pare e solicite-o** antes de prosseguir:
> _"Para aplicar as alterações, preciso do arquivo `page.tsx` que será modificado. Pode enviá-lo?"_
> Somente continue após receber o arquivo. Nunca crie um `page.tsx` do zero se não foi fornecido um.

### Estrutura típica do Markdown de input

```markdown
## Nome do Curso

## SUMÁRIO

- LIÇÃO 1 – Título da lição
- Subitem do sumário
- Outro subitem

## LIÇÃO 1 – Título da lição

Objetivo geral
Texto do objetivo...

## Seção da lição

Texto do conteúdo...

### Subseção

Texto...
```

---

## Output esperado

O arquivo `page.tsx` fornecido pelo usuário, **modificado** com o conteúdo gerado a partir do markdown:

- Componente React default export atualizado com o novo conteúdo
- Imports preservados ou atualizados conforme necessário
- Estrutura existente respeitada; apenas o conteúdo derivado do markdown é substituído

---

## Componentes customizados disponíveis

| Componente                       | Import                                                                                       | Uso                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `H1`                             | `~/components/ui`                                                                            | Título principal do curso                            |
| `H2`                             | `~/components/ui`                                                                            | Título de seção (lição, sumário, materiais)          |
| `H3`                             | `~/components/ui`                                                                            | Subseção dentro de lição                             |
| `P`                              | `~/components/ui`                                                                            | Parágrafo de texto                                   |
| `Separator`                      | `~/components/ui`                                                                            | Divisor entre seções                                 |
| `HeroContainer`                  | `~/components/hero`                                                                          | Wrapper do cabeçalho hero                            |
| `Container`                      | `~/components/container`                                                                     | Wrapper de seção com margens                         |
| `UL`                             | `~/components/ui/ul`                                                                         | Lista não-ordenada                                   |
| `SummaryLi`                      | `~/components/summary-li`                         | Item do sumário (aceita prop `subList` para subitem) |
| `AllTeachingMaterialsBackButton` | `~/components/back-buttons/all-teaching-materials` | Botão de voltar                                      |

---

## Regras de conversão

### 1. Estrutura geral da página

```tsx
export default function NomeDoCurso() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Nome do Curso</H1>
          <P className="mt-0">Subtítulo ou descrição curta.</P>
        </div>
      </HeroContainer>

      <Separator className="my-8" />

      {/* Seção de Materiais de Apoio - sempre incluir, mesmo sem links */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="materials-didactic">Materiais de Apoio</H2>
        <UL className="mt-0">{/* links opcionais */}</UL>
      </Container>

      <Separator className="my-8" />

      {/* Sumário */}
      <Container className="mb-10 sm:mb-16">
        <H2>Sumário</H2>
        <UL className="mt-0 space-y-2 sm:space-y-2">{/* SummaryLi items */}</UL>
      </Container>

      <Separator className="my-8" />

      {/* Conteúdo das lições */}
      {/* ... */}
    </section>
  );
}
```

### 2. Geração de IDs âncora

Converta títulos para IDs kebab-case sem acentos:

| Título original                      | ID gerado                                                     |
| ------------------------------------ | ------------------------------------------------------------- |
| `LIÇÃO 1 – As coisas que tens visto` | `lesson-1`                                                    |
| `Para Começar`                       | `lesson-1-para-começar` (mantém acento no ID, mas é opcional) |
| `1. A VISÃO do CRISTO GLORIFICADO`   | `lesson-1-a-visao-do-cristo-glorificado`                      |

**Padrão de IDs:**

- Lição principal: `lesson-{N}`
- Subseção de lição: `lesson-{N}-{slug-da-subseção}`

### 3. Sumário

- Cada item de lição principal → `<SummaryLi>` com link `href="#lesson-{N}"`
- Cada subitem → `<SummaryLi subList>` com link para a âncora correspondente
- Texto do link em Title Case (primeira letra maiúscula), sem caps lock

### 4. Objetivo geral

Quando o markdown contiver "Objetivo geral" seguido de texto:

```tsx
<div className="flex flex-col gap-4">
  <P className="font-semibold text-black dark:text-white">Objetivo Geral</P>
  <P className="mt-0">Texto do objetivo...</P>
</div>
```

### 5. Seções de conteúdo (H3)

Cada subseção da lição:

```tsx
<div className="flex flex-col gap-4">
  <H3 id="lesson-{N}-{slug}">Título da subseção</H3>
  <P className="">Parágrafo 1...</P>
  <P className="">Parágrafo 2...</P>
</div>
```

- Cada parágrafo separado no markdown → `<P>` separado no TSX
- Nunca concatenar parágrafos distintos em um único `<P>`

### 6. Lição completa

```tsx
<Container className="mb-10 sm:mb-16">
  <H2 id="lesson-{N}">Lição {N} – Título da lição</H2>

  {/* Objetivo Geral */}
  <div className="flex flex-col gap-4">
    <P className="font-semibold text-black dark:text-white">Objetivo Geral</P>
    <P className="mt-0">...</P>
  </div>

  {/* Subseções */}
  <div className="flex flex-col gap-4">
    <H3 id="lesson-{N}-para-comecar">Para começar</H3>
    <P className="">...</P>
  </div>

  <div className="flex flex-col gap-4">
    <H3 id="lesson-{N}-{slug}">1. Título da subseção</H3>
    <P className="">...</P>
  </div>
</Container>
```

---

## Processo de execução

1. **Verifique os inputs:** se o `page.tsx` não foi fornecido, solicite-o ao usuário e aguarde. Não prossiga sem ele.

2. **Leia o markdown** e identifique:

   - Título do curso (primeiro `##`)
   - Itens do sumário
   - Lições e suas subseções
   - Parágrafos de conteúdo

3. **Leia o `page.tsx`** fornecido e entenda sua estrutura atual (imports, nome do componente, seções existentes).

4. **Mapeie os IDs** de todas as âncoras seguindo as regras acima.

5. **Gere o conteúdo TSX** completo seguindo a estrutura e componentes definidos, substituindo o corpo do componente existente.

6. **Salve** o arquivo alterado em `/mnt/user-data/outputs/page.tsx`, preservando o nome original.

7. **Apresente** o arquivo com `present_files`.

---

## Exemplo de referência

Veja `/mnt/skills/user/md-to-react-page/references/example.tsx` para o output completo de referência gerado a partir do arquivo `curso-apocalipse.md`.
