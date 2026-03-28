# Plano de Migração: React Router 7 → Next.js 15

## Contexto

O projeto "Oceano - Igreja Online" está atualmente construído com React Router 7 e precisa ser migrado para Next.js 15. A migração permitirá aproveitar o ecossistema Next.js, incluindo App Router, Server Components, e otimizações automáticas.

### Estado Atual

- **Framework**: React Router 7.7.1 com SSR habilitado
- **Rotas**: ~48 rotas centralizadas em `app/routes.ts`
- **Build**: Vite + Docker (Node 20 Alpine)
- **Estilização**: TailwindCSS v4 + Shadcn UI (new-york style)
- **React**: v19.1.0

---

## Análise de Impacto

### Arquivos que requerem mudanças

#### 1. Configuração (remover/criar)

| Arquivo                  | Ação                                   |
| ------------------------ | -------------------------------------- |
| `vite.config.ts`         | Remover                                |
| `react-router.config.ts` | Remover                                |
| `app/routes.ts`          | Remover (substituído por App Router)   |
| `app/root.tsx`           | Remover (substituído por `layout.tsx`) |
| `package.json`           | Atualizar dependências                 |
| `tsconfig.json`          | Atualizar para Next.js                 |

#### 2. Componentes com imports do react-router

| Arquivo                                                                                                   | Mudança necessária                                  |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `app/client/components/navbar/nav-menu.tsx`                                                               | `Link` → `next/link`, `useLocation` → `usePathname` |
| `app/client/components/navbar/navigation-sheet.tsx`                                                       | `Link` → `next/link`, `useLocation` → `usePathname` |
| `app/client/components/footer.tsx`                                                                        | `Link` → `next/link`                                |
| `app/client/layouts/main.tsx`                                                                             | `Outlet` → `{children}`                             |
| `app/client/features/quizzes/index.tsx`                                                                   | `Link` → `next/link`                                |
| `app/client/features/reading-plans/index.tsx`                                                             | `Link` → `next/link`                                |
| `app/client/features/projects/components/price-box/index.tsx`                                             | `Link` → `next/link`                                |
| `app/client/features/oceano-academy/teaching-materials/components/all-teaching-materials-back-button.tsx` | `Link` → `next/link`                                |
| `app/client/features/reading-plans/components/all-reading-plans-back-button.tsx`                          | `Link` → `next/link`                                |

#### 3. Rotas com data fetching

| Arquivo                                     | Mudança necessária                                    |
| ------------------------------------------- | ----------------------------------------------------- |
| `app/client/routes/quizzes/quizzes.$id.tsx` | `loader` → Server Component ou `generateStaticParams` |
| `app/client/routes/churches/$id.tsx`        | `useParams` → parâmetro de página                     |

---

## Mapeamento de Rotas

### Estrutura atual → Next.js App Router

```
React Router                          →  Next.js App Router
─────────────────────────────────────────────────────────────
/                                     →  app/page.tsx
/sobre                                →  app/sobre/page.tsx
/sobre/nossa-razao                    →  app/sobre/nossa-razao/page.tsx
/sobre/nossa-historia                 →  app/sobre/nossa-historia/page.tsx
/nossos-pastores                      →  app/nossos-pastores/page.tsx
/igrejas                              →  app/igrejas/page.tsx
/igrejas/:id                          →  app/igrejas/[id]/page.tsx
/doacoes                              →  app/doacoes/page.tsx
/oceano-academy                       →  app/oceano-academy/page.tsx
/oceano-academy/escolas               →  app/oceano-academy/escolas/page.tsx
/oceano-academy/escolas/escola-de-membros →  app/oceano-academy/escolas/escola-de-membros/page.tsx
/oceano-academy/cursos/:slug          →  app/oceano-academy/cursos/[slug]/page.tsx
/oceano-academy/planos-de-leitura/*   →  app/oceano-academy/planos-de-leitura/*/page.tsx
/igreja-online/*                      →  app/igreja-online/*/page.tsx
/projetos/*                           →  app/projetos/*/page.tsx
/quizzes/:id                          →  app/quizzes/[id]/page.tsx
/version                              →  app/version/page.tsx
```

---

## Plano de Execução

### Fase 1: Setup Inicial

1. **Criar branch de migração**

   ```bash
   git checkout -b migrate/nextjs
   ```

2. **Instalar Next.js 15**

   ```bash
   npm install next@latest
   ```

3. **Remover dependências do React Router**

   ```bash
   npm uninstall react-router @react-router/node @react-router/serve @react-router/dev
   ```

4. **Atualizar package.json scripts**

   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint"
     }
   }
   ```

5. **Criar estrutura de diretórios do Next.js**
   ```
   app/
   ├── layout.tsx          # Layout raiz
   ├── page.tsx            # Home
   ├── globals.css         # Estilos globais
   ├── sobre/
   ├── igrejas/
   ├── doacoes/
   ├── oceano-academy/
   ├── igreja-online/
   ├── projetos/
   ├── quizzes/
   └── version/
   ```

### Fase 2: Configuração do Next.js

1. **Criar `next.config.ts`**

   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     reactStrictMode: true,
   };

   export default nextConfig;
   ```

2. **Atualizar `tsconfig.json`**

   ```json
   {
     "compilerOptions": {
       "target": "ES2017",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "strict": true,
       "noEmit": true,
       "esModuleInterop": true,
       "module": "esnext",
       "moduleResolution": "bundler",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "jsx": "preserve",
       "incremental": true,
       "plugins": [{ "name": "next" }],
       "paths": {
         "@/*": ["./*"]
       }
     },
     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
     "exclude": ["node_modules"]
   }
   ```

3. **Mover estilos**
   - `app/client/app.css` → `app/globals.css`

### Fase 3: Migração do Layout e Root

1. **Criar `app/layout.tsx`** (substitui `root.tsx`)
   - Mover Google Tag Manager
   - Configurar fontes (Inter)
   - Importar `globals.css`
   - Envolver com providers necessários

2. **Criar layout principal** em componentes
   - Manter estrutura do `main.tsx`
   - Usar `{children}` em vez de `<Outlet />`

### Fase 4: Migração de Componentes

1. **Atualizar imports de navegação**

   ```typescript
   // Antes
   import { Link, useLocation } from "react-router";

   // Depois
   import Link from "next/link";
   import { usePathname } from "next/navigation";
   ```

2. **Atualizar componente Link**

   ```typescript
   // Antes
   <Link to="/path">Text</Link>

   // Depois
   <Link href="/path">Text</Link>
   ```

3. **Marcar componentes cliente**
   - Adicionar `"use client"` onde necessário (componentes com hooks)

### Fase 5: Migração de Rotas

**Ordem de migração** (por complexidade):

1. **Rotas estáticas simples** (sem data fetching)
   - `/sobre`, `/nossos-pastores`, `/doacoes`
   - Mover conteúdo dos arquivos de rota para `page.tsx`

2. **Rotas com layout aninhado**
   - `/oceano-academy/*` - Criar `layout.tsx` para seção
   - `/igreja-online/*` - Criar `layout.tsx` para seção

3. **Rotas dinâmicas**
   - `/igrejas/[id]`
   - `/quizzes/[id]`

### Fase 6: Data Fetching

1. **Quiz com loader** (`/quizzes/[id]`)

   ```typescript
   // app/quizzes/[id]/page.tsx
   import quizzes from "@/server/data/quizzes";

   export async function generateStaticParams() {
     return Object.keys(quizzes).map((id) => ({ id }));
   }

   export default async function QuizPage({
     params,
   }: {
     params: Promise<{ id: string }>;
   }) {
     const { id } = await params;
     const quiz = quizzes[id];

     if (!quiz) return <div>Quiz não encontrado</div>;

     return <Quizzes quiz={quiz} />;
   }
   ```

2. **Carregar dados de igrejas**
   - Usar Server Components para buscar dados estáticos

### Fase 7: Atualizar Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
COPY . .
COPY --from=deps /node_modules ./node_modules
RUN npm run build

# Production image
FROM base AS runner
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /public ./public
COPY --from=builder --chown=nextjs:nodejs /.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

### Fase 8: Limpeza e Validação

1. **Remover arquivos obsoletos**
   - `app/routes.ts`
   - `app/root.tsx`
   - `vite.config.ts`
   - `react-router.config.ts`
   - `.react-router/`
   - `app/client/routes/` (após migração)

2. **Atualizar components.json**

   ```json
   {
     "aliases": {
       "components": "@/components",
       "utils": "@/lib/utils",
       "ui": "@/components/ui",
       "lib": "@/lib",
       "hooks": "@/hooks"
     }
   }
   ```

3. **Atualizar imports**
   - Substituir `~/` por `@/`
   - Atualizar todos os arquivos

---

## Estrutura Final

```
app/
├── layout.tsx              # Layout raiz (Google Tag Manager, fontes)
├── page.tsx                # Home
├── globals.css             # Estilos globais
├── components/
│   ├── ui/                 # Shadcn UI
│   ├── navbar/
│   ├── hero/
│   └── ...                 # Outros componentes
├── features/               # Features (mantido)
├── lib/
│   └── utils.ts
├── server/
│   ├── types/
│   └── data/
├── sobre/
│   ├── page.tsx
│   ├── nossa-razao/
│   │   └── page.tsx
│   └── nossa-historia/
│       └── page.tsx
├── igrejas/
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
├── oceano-academy/
│   ├── layout.tsx          # Layout da seção
│   ├── page.tsx
│   ├── escolas/
│   ├── cursos/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── planos-de-leitura/
├── igreja-online/
│   ├── layout.tsx
│   └── ...
├── projetos/
├── quizzes/
│   └── [id]/
│       └── page.tsx
└── version/
    └── page.tsx
```

---

## Verificação

### Checklist de Validação

- [ ] `npm run dev` inicia sem erros
- [ ] `npm run build` completa com sucesso
- [ ] Todas as rotas acessíveis
- [ ] Links de navegação funcionando
- [ ] Google Tag Manager integrado
- [ ] Estilos TailwindCSS aplicados
- [ ] Componentes Shadcn UI funcionando
- [ ] Rotas dinâmicas (`/igrejas/:id`, `/quizzes/:id`) funcionando
- [ ] Build Docker funcionando

### Comandos de Teste

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm run start

# Build Docker
docker build -t oceano-institucional .
docker run -p 3000:3000 oceano-institucional
```

---

## Riscos e Mitigações

| Risco                  | Mitigação                                 |
| ---------------------- | ----------------------------------------- |
| Quebra de imports      | Usar find/replace sistemático `~/` → `@/` |
| Componentes quebrados  | Testar cada rota após migração            |
| Estilos não aplicados  | Verificar import do globals.css no layout |
| Data fetching quebrado | Converter loaders para Server Components  |

---

## Tempo Estimado

- **Fase 1-2**: Setup - 1-2 horas
- **Fase 3-4**: Layout e componentes - 2-3 horas
- **Fase 5**: Migração de rotas - 4-6 horas
- **Fase 6**: Data fetching - 1-2 horas
- **Fase 7-8**: Docker e limpeza - 1-2 horas

**Total**: 9-15 horas
