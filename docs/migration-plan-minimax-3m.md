# Plano de Migração: React Router 7 → Next.js 16 (App Router)

## Contexto

O projeto atual é um site institucional de igreja (Igreja Oceano da Graça) desenvolvido com React Router 7. A migração para Next.js 16 foi solicitada para manter o projeto atualizado com tecnologias mais modernas e com melhor suporte da comunidade.

### Estado Atual do Projeto

- **Framework**: React Router 7 com SSR
- **UI**: Shadcn UI + Radix UI + TailwindCSS 4
- **Routing**: 50+ rotas centralizadas em `app/routes.ts`
- **Dados**: Páginas estáticas (sem loaders/actions dinâmicos)
- **Portuguese**: Todo o conteúdo em português brasileiro

## Abordagem de Migração

Migração gradual - criar estrutura Next.js mantendo projeto React Router operacional durante a transição.

---

## Fases da Migração

### Fase 1: Preparação e Configuração

**Objetivo**: Criar estrutura base Next.js mantendo compatibilidade

1. **Criar projeto Next.js 16 paralelo**

   ```bash
   npx create-next-app@latest ocn-next --typescript --tailwind --app --eslint --src-dir
   ```

2. **Configurar alias de importação**
   - No `tsconfig.json`, manter `~/*` apontando para `app/*`
   - Isso permite reutilizar componentes existentes

3. **Migrar configurações**
   - `tailwind.config.ts` → manter compatibilidade
   - Variáveis CSS do projeto atual
   - Google Tag Manager (GTM-M8ZH4SPL)

4. **Migrar dependências**
   ```json
   {
     "dependencies": {
       "next": "^16.0.0",
       "react": "^19.1.0",
       "react-dom": "^19.1.0",
       "@radix-ui/react-*": "^1.1.0",
       "lucide-react": "^0.469.0",
       "tailwind-merge": "^3.0.0",
       "clsx": "^2.1.1",
       "class-variance-authority": "^0.7.1"
     }
   }
   ```

### Fase 2: Estrutura de Diretórios

**Objetivo**: Mapear estrutura React Router → Next.js App Router

| React Router 7                  | Next.js 16 App Router       |
| ------------------------------- | --------------------------- |
| `app/routes.ts`                 | `app/` (file-based routing) |
| `app/root.tsx`                  | `app/layout.tsx` (root)     |
| `client/layouts/main.tsx`       | `app/(site)/layout.tsx`     |
| `client/routes/home.tsx`        | `app/(site)/page.tsx`       |
| `client/routes/about/index.tsx` | `app/(site)/sobre/page.tsx` |
| `app/client/components/`        | `app/components/`           |
| `app/client/features/`          | `app/features/`             |

**Estrutura Next.js proposta:**

```
app/
├── (site)/                    # Grupo de rotas com layout
│   ├── layout.tsx            # Navbar + Footer
│   ├── page.tsx              # Home
│   ├── sobre/
│   │   └── page.tsx
│   ├── igrejas/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   └── ...
├── api/                       # Rotas de API (se necessário)
├── components/               # Componentes reutilizáveis
├── features/                 # Componentes de features
└── lib/                      # Utilitários
```

### Fase 3: Migração de Componentes

**Prioridade**: Componentes de layout → UI → Features

1. **Layout Principal**
   - `app/client/layouts/main.tsx` → `app/(site)/layout.tsx`
   - Substituir `<Outlet />` por `{children}`
   - Navbar e Footer permanecem

2. **Root Layout**
   - `app/root.tsx` → `app/layout.tsx`
   - Substituir `Links`, `Meta`, `Scripts` por componentes Next.js
   - Manter Google Tag Manager

3. **Componentes de Navegação**
   - Substituir `Link` de `react-router` por `Link` de `next/link`
   - Remover `useLocation` e `useParams` (usar hooks Next.js)

### Fase 4: Migração de Rotas

**Mapeamento de rotas principais:**

| Rota React Router | Rota Next.js                         |
| ----------------- | ------------------------------------ |
| `/`               | `app/(site)/page.tsx`                |
| `/sobre`          | `app/(site)/sobre/page.tsx`          |
| `/igrejas`        | `app/(site)/igrejas/page.tsx`        |
| `/igrejas/:id`    | `app/(site)/igrejas/[id]/page.tsx`   |
| `/doacoes`        | `app/(site)/doacoes/page.tsx`        |
| `/oceano-academy` | `app/(site)/oceano-academy/page.tsx` |
| `/igreja-online`  | `app/(site)/igreja-online/page.tsx`  |
| `/projetos`       | `app/(site)/projetos/page.tsx`       |

**Parâmetros dinâmicos:**

- `$id` → `[id]`
- `quizzes/:id` → `quizzes/[id]`

### Fase 5: Ajustes de API

| React Router              | Next.js                                              |
| ------------------------- | ---------------------------------------------------- |
| `useLoaderData()`         | `useLoader()` (server components) ou `await fetch()` |
| `useParams()`             | `params` props                                       |
| `type LoaderFunctionArgs` | `Promise<{ params: ... }>`                           |

**Exemplo de migração de loader:**

```typescript
// React Router
export async function loader({ params }: LoaderFunctionArgs) {
  return json({ church: getChurch(params.id) });
}

// Next.js App Router
export async function generateStaticParams() {
  return churches.map((church) => ({ id: church.id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const church = getChurch(id);
  // ...
}
```

### Fase 6: Limpeza e Verificação

1. **Remover dependências React Router**

   ```bash
   npm uninstall react-router @react-router/node @react-router/dev @react-router/serve
   ```

2. **Verificar TypeScript**

   ```bash
   npm run typecheck
   ```

3. **Testar build**
   ```bash
   npm run build
   ```

---

## Arquivos Críticos a Modificar

### Arquivos principais:

- `package.json` - dependências Next.js
- `tsconfig.json` - path aliases
- `tailwind.config.ts` - configuração Tailwind
- `app/layout.tsx` - root layout
- `app/(site)/layout.tsx` - site layout

### Arquivos de rotas (50+ arquivos em `app/client/routes/`):

- Todos os arquivos em `app/client/routes/` → `app/(site)/`

### Componentes com imports de react-router:

- `app/client/components/navbar/*.tsx`
- `app/client/components/footer.tsx`
- `app/client/layouts/main.tsx`
- `app/client/features/quizzes/index.tsx`
- `app/client/features/reading-plans/index.tsx`

---

## Verificação e Testes

1. **Desenvolvimento local**

   ```bash
   # Next.js
   npm run dev   # porta 3000

   # Manter React Router disponível para comparação
   # em outro terminal
   ```

2. **Verificações required**
   - [ ] Todas as rotas funcionam corretamente
   - [ ] Navegação entre páginas sem erros
   - [ ] Google Tag Manager carregando
   - [ ] Responsive design funcionando
   - [ ] TypeScript sem erros
   - [ ] Build passando

3. **Teste de regressão**
   - Comparar páginas antes/depois da migração
   - Verificar SEO (meta tags)
   - Verificar performance

---

## Observações

1. **SSR**: Next.js App Router usa Server Components por padrão
2. **Client Components**: Adicionar `'use client'` em componentes interativos
3. **静态生成 (SSG)**: O projeto é estático, ideal para Next.js Static Exports ou Incremental Static Regeneration
4. **Imagens**: Considerar migrar para `next/image` futuramente

---

## Timeline Sugerido

| Fase                 | Tempo Estimado |
| -------------------- | -------------- |
| Fase 1: Configuração | 1 dia          |
| Fase 2: Estrutura    | 1 dia          |
| Fase 3: Componentes  | 2 dias         |
| Fase 4: Rotas        | 3 dias         |
| Fase 5: Ajustes      | 1 dia          |
| Fase 6: Limpeza      | 1 dia          |
| **Total**            | **~9 dias**    |

---

_Plano criado em: 2026-03-22_
_Versão: Next.js 16 (App Router) - Migração Gradual_
