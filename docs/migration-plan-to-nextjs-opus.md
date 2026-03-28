# Plano de Migração: React Router 7 → Next.js (App Router)

## Contexto e Motivação

O projeto **ocn-institucional-v4** é o site institucional da Igreja Oceano da Graça, atualmente construído com React Router 7 (SSR via Vite). A migração para Next.js visa:

- Melhor suporte a Server Components (RSC) e streaming
- Ecossistema mais maduro para SSR/SSG
- Otimização automática de imagens (`next/image`)
- Deploy simplificado (Vercel, Docker, standalone)
- Maior comunidade e tooling

### Estado Atual

| Aspecto         | Detalhe                                                                 |
| --------------- | ----------------------------------------------------------------------- |
| **Framework**   | React Router 7.7.1 + Vite 6.3.3                                         |
| **React**       | 19.1.0                                                                  |
| **Node**        | 22.20.0                                                                 |
| **Estilização** | Tailwind CSS 4.1.4 (via `@tailwindcss/vite`) + `tw-animate-css`         |
| **UI**          | Shadcn UI (new-york style, zinc base) + Radix UI + Lucide               |
| **Rotas**       | ~50 rotas centralizadas em `app/routes.ts` (não file-based)             |
| **Dados**       | 100% estáticas — apenas 1 loader (`quizzes.$id`) com `import.meta.glob` |
| **SSR**         | Habilitado, servido via `@react-router/serve`                           |
| **Deploy**      | Docker (node:20-alpine)                                                 |
| **Idioma**      | Todo conteúdo em pt-BR, paths em português                              |

### Dependências Atuais do React Router

Pacotes a serem removidos:

- `react-router` (7.7.1)
- `@react-router/node` (7.7.1)
- `@react-router/serve` (7.7.1)
- `@react-router/dev` (7.7.1 — devDep)

---

## Inventário de Impacto

### Arquivos que importam de `react-router`

| Arquivo                                                                                                   | APIs usadas                                                                       |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `app/root.tsx`                                                                                            | `isRouteErrorResponse`, `Links`, `Meta`, `Outlet`, `Scripts`, `ScrollRestoration` |
| `app/client/layouts/main.tsx`                                                                             | `Outlet`                                                                          |
| `app/client/components/navbar/nav-menu.tsx`                                                               | `Link`, `useLocation`                                                             |
| `app/client/components/navbar/navigation-sheet.tsx`                                                       | `Link`, `useLocation`                                                             |
| `app/client/components/footer.tsx`                                                                        | `Link`                                                                            |
| `app/client/features/reading-plans/index.tsx`                                                             | `Link`                                                                            |
| `app/client/features/reading-plans/components/all-reading-plans-back-button.tsx`                          | `Link`                                                                            |
| `app/client/features/oceano-academy/teaching-materials/components/all-teaching-materials-back-button.tsx` | `Link`                                                                            |
| `app/client/features/projects/components/price-box/index.tsx`                                             | `Link`                                                                            |
| `app/client/features/quizzes/index.tsx`                                                                   | `Link`                                                                            |
| `app/client/routes/quizzes/quizzes.$id.tsx`                                                               | `useLoaderData`, `LoaderFunctionArgs`                                             |
| `app/client/routes/churches/$id.tsx`                                                                      | `useParams`, `LoaderFunctionArgs`                                                 |

### Padrões do Vite a substituir

- `import.meta.glob` — usado em `quizzes.$id.tsx` para carregar JSONs dinamicamente
- `import.meta.env.DEV` — usado em `root.tsx` no ErrorBoundary

### Componentes que precisam de `"use client"`

Componentes com estado/efeitos/hooks do browser que precisarão da diretiva:

- `navbar/nav-menu.tsx` (usa `useLocation` → `usePathname`)
- `navbar/navigation-sheet.tsx` (usa `useState`, `useCallback`, `useLocation`)
- `navbar/index.tsx` (já é client component potencialmente)
- `features/quizzes/index.tsx` (interatividade de quiz)
- Qualquer componente Shadcn com interação (Accordion, Sheet, Tabs, Tooltip, DropdownMenu)

---

## Arquitetura Proposta (Next.js App Router)

### Estrutura de Diretórios

```
ocn-institucional-v4/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (html, head, body, GTM, fonts)
│   ├── not-found.tsx             # Página 404
│   ├── error.tsx                 # Error boundary global
│   ├── (site)/                   # Route group com layout Navbar+Footer
│   │   ├── layout.tsx            # Navbar + main + Footer
│   │   ├── page.tsx              # Home (/)
│   │   ├── sobre/
│   │   │   ├── page.tsx          # /sobre
│   │   │   ├── nossa-razao/
│   │   │   │   └── page.tsx      # /sobre/nossa-razao
│   │   │   └── nossa-historia/
│   │   │       └── page.tsx      # /sobre/nossa-historia
│   │   ├── nossos-pastores/
│   │   │   └── page.tsx          # /nossos-pastores
│   │   ├── igrejas/
│   │   │   ├── page.tsx          # /igrejas
│   │   │   └── [id]/
│   │   │       └── page.tsx      # /igrejas/:id
│   │   ├── doacoes/
│   │   │   └── page.tsx          # /doacoes
│   │   ├── oceano-academy/
│   │   │   ├── page.tsx          # /oceano-academy
│   │   │   ├── escolas/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── escola-de-membros/page.tsx
│   │   │   │   ├── escola-biblica/page.tsx
│   │   │   │   └── escola-de-lideres/page.tsx
│   │   │   ├── cursos/
│   │   │   │   ├── fe-no-feed/page.tsx
│   │   │   │   ├── connect/page.tsx
│   │   │   │   ├── voluntariado/page.tsx
│   │   │   │   ├── vida-nova/page.tsx
│   │   │   │   ├── fundamentos/page.tsx
│   │   │   │   ├── carta-tiago/page.tsx
│   │   │   │   └── pequenos-grupos/page.tsx
│   │   │   ├── materiais-didaticos/
│   │   │   │   ├── page.tsx
│   │   │   │   └── introducao-ao-apocalipse/page.tsx
│   │   │   └── planos-de-leitura/
│   │   │       ├── page.tsx
│   │   │       ├── iniciante/page.tsx
│   │   │       ├── desafio-dos-90-dias/page.tsx
│   │   │       ├── plano-anual/page.tsx
│   │   │       ├── ordem-dos-livros/page.tsx
│   │   │       ├── ordem-cronologica/page.tsx
│   │   │       ├── leitura-em-dois-anos/page.tsx
│   │   │       ├── sabedoria-diaria/page.tsx
│   │   │       ├── isaias/page.tsx
│   │   │       ├── evangelhos/page.tsx
│   │   │       ├── novo-testamento/page.tsx
│   │   │       └── novo-testamento-em-ordem-cronologica/page.tsx
│   │   ├── igreja-online/
│   │   │   ├── page.tsx
│   │   │   ├── saiba-mais/page.tsx
│   │   │   ├── cultos-ao-vivo/page.tsx
│   │   │   ├── atendimento-pastoral/page.tsx
│   │   │   ├── pedidos-de-oracao/page.tsx
│   │   │   └── pequenos-grupos/page.tsx
│   │   ├── projeto-expansao/
│   │   │   └── page.tsx
│   │   ├── projetos/
│   │   │   ├── page.tsx
│   │   │   └── projeto-exemplo/page.tsx
│   │   └── quizzes/
│   │       └── [id]/page.tsx
│   └── version/
│       └── page.tsx              # /version (sem layout site)
├── components/                   # Migrado de app/client/components/
│   ├── ui/                       # Shadcn UI (inalterado)
│   └── ...                       # Componentes customizados
├── features/                     # Migrado de app/client/features/
├── lib/                          # Migrado de app/client/lib/
├── server/                       # Migrado de app/server/ (types, data)
├── public/                       # Assets estáticos (já existente)
├── next.config.ts
├── tailwind.config.ts            # Não necessário se usar Tailwind v4 com PostCSS
├── postcss.config.mjs
├── tsconfig.json
├── components.json               # Shadcn config atualizado
├── Dockerfile
└── package.json
```

### Mapeamento Completo de Rotas

| Rota (URL)                                                               | React Router Atual                       | Next.js App Router                                                                |
| ------------------------------------------------------------------------ | ---------------------------------------- | --------------------------------------------------------------------------------- |
| `/`                                                                      | `client/routes/home.tsx`                 | `app/(site)/page.tsx`                                                             |
| `/sobre`                                                                 | `client/routes/about/index.tsx`          | `app/(site)/sobre/page.tsx`                                                       |
| `/sobre/nossa-razao`                                                     | `client/routes/about/our-reason.tsx`     | `app/(site)/sobre/nossa-razao/page.tsx`                                           |
| `/sobre/nossa-historia`                                                  | `client/routes/about/our-history.tsx`    | `app/(site)/sobre/nossa-historia/page.tsx`                                        |
| `/nossos-pastores`                                                       | `client/routes/about/our-pastors.tsx`    | `app/(site)/nossos-pastores/page.tsx`                                             |
| `/igrejas`                                                               | `client/routes/churches/index.tsx`       | `app/(site)/igrejas/page.tsx`                                                     |
| `/igrejas/:id`                                                           | `client/routes/churches/$id.tsx`         | `app/(site)/igrejas/[id]/page.tsx`                                                |
| `/doacoes`                                                               | `client/routes/donations.tsx`            | `app/(site)/doacoes/page.tsx`                                                     |
| `/oceano-academy`                                                        | `client/routes/oceano-academy/index.tsx` | `app/(site)/oceano-academy/page.tsx`                                              |
| `/oceano-academy/materiais-didaticos`                                    | `...teaching-materials/index.tsx`        | `app/(site)/oceano-academy/materiais-didaticos/page.tsx`                          |
| `/oceano-academy/materiais-didaticos/introducao-ao-apocalipse`           | `...introduction-to-revelation.tsx`      | `app/(site)/oceano-academy/materiais-didaticos/introducao-ao-apocalipse/page.tsx` |
| `/oceano-academy/escolas`                                                | `...schools/index.tsx`                   | `app/(site)/oceano-academy/escolas/page.tsx`                                      |
| `/oceano-academy/escolas/escola-de-membros`                              | `...escola-de-membros.tsx`               | `app/(site)/oceano-academy/escolas/escola-de-membros/page.tsx`                    |
| `/oceano-academy/escolas/escola-biblica`                                 | `...escola-biblica.tsx`                  | `app/(site)/oceano-academy/escolas/escola-biblica/page.tsx`                       |
| `/oceano-academy/escolas/escola-de-lideres`                              | `...escola-de-lideres.tsx`               | `app/(site)/oceano-academy/escolas/escola-de-lideres/page.tsx`                    |
| `/oceano-academy/cursos/fe-no-feed`                                      | `...fe-no-feed.tsx`                      | `app/(site)/oceano-academy/cursos/fe-no-feed/page.tsx`                            |
| `/oceano-academy/cursos/connect`                                         | `...connect.tsx`                         | `app/(site)/oceano-academy/cursos/connect/page.tsx`                               |
| `/oceano-academy/cursos/voluntariado`                                    | `...voluntariado.tsx`                    | `app/(site)/oceano-academy/cursos/voluntariado/page.tsx`                          |
| `/oceano-academy/cursos/vida-nova`                                       | `...vida-nova.tsx`                       | `app/(site)/oceano-academy/cursos/vida-nova/page.tsx`                             |
| `/oceano-academy/cursos/fundamentos`                                     | `...fundamentos.tsx`                     | `app/(site)/oceano-academy/cursos/fundamentos/page.tsx`                           |
| `/oceano-academy/cursos/carta-tiago`                                     | `...carta-tiago.tsx`                     | `app/(site)/oceano-academy/cursos/carta-tiago/page.tsx`                           |
| `/oceano-academy/cursos/pequenos-grupos`                                 | `...pequenos-grupos.tsx`                 | `app/(site)/oceano-academy/cursos/pequenos-grupos/page.tsx`                       |
| `/oceano-academy/planos-de-leitura`                                      | `...reading-plans/index.tsx`             | `app/(site)/oceano-academy/planos-de-leitura/page.tsx`                            |
| `/oceano-academy/planos-de-leitura/iniciante`                            | `...beginner.tsx`                        | `app/(site)/oceano-academy/planos-de-leitura/iniciante/page.tsx`                  |
| `/oceano-academy/planos-de-leitura/desafio-dos-90-dias`                  | `...90-day-challenge.tsx`                | `...desafio-dos-90-dias/page.tsx`                                                 |
| `/oceano-academy/planos-de-leitura/plano-anual`                          | `...annual.tsx`                          | `...plano-anual/page.tsx`                                                         |
| `/oceano-academy/planos-de-leitura/ordem-dos-livros`                     | `...book-order.tsx`                      | `...ordem-dos-livros/page.tsx`                                                    |
| `/oceano-academy/planos-de-leitura/ordem-cronologica`                    | `...chronological-bible.tsx`             | `...ordem-cronologica/page.tsx`                                                   |
| `/oceano-academy/planos-de-leitura/leitura-em-dois-anos`                 | `...two-years.tsx`                       | `...leitura-em-dois-anos/page.tsx`                                                |
| `/oceano-academy/planos-de-leitura/sabedoria-diaria`                     | `...daily-wisdom.tsx`                    | `...sabedoria-diaria/page.tsx`                                                    |
| `/oceano-academy/planos-de-leitura/isaias`                               | `...isaiah.tsx`                          | `...isaias/page.tsx`                                                              |
| `/oceano-academy/planos-de-leitura/evangelhos`                           | `...gospels.tsx`                         | `...evangelhos/page.tsx`                                                          |
| `/oceano-academy/planos-de-leitura/novo-testamento`                      | `...new-testament.tsx`                   | `...novo-testamento/page.tsx`                                                     |
| `/oceano-academy/planos-de-leitura/novo-testamento-em-ordem-cronologica` | `...chronological-new-testament.tsx`     | `...novo-testamento-em-ordem-cronologica/page.tsx`                                |
| `/igreja-online`                                                         | `...online-church/about.tsx`             | `app/(site)/igreja-online/page.tsx`                                               |
| `/igreja-online/saiba-mais`                                              | `...online-church.tsx`                   | `app/(site)/igreja-online/saiba-mais/page.tsx`                                    |
| `/igreja-online/cultos-ao-vivo`                                          | `...live-service.tsx`                    | `app/(site)/igreja-online/cultos-ao-vivo/page.tsx`                                |
| `/igreja-online/atendimento-pastoral`                                    | `...pastoral-care.tsx`                   | `app/(site)/igreja-online/atendimento-pastoral/page.tsx`                          |
| `/igreja-online/pedidos-de-oracao`                                       | `...pray-request.tsx`                    | `app/(site)/igreja-online/pedidos-de-oracao/page.tsx`                             |
| `/igreja-online/pequenos-grupos`                                         | `...small-groups.tsx`                    | `app/(site)/igreja-online/pequenos-grupos/page.tsx`                               |
| `/projeto-expansao`                                                      | `...expansion-project.tsx`               | `app/(site)/projeto-expansao/page.tsx`                                            |
| `/projetos`                                                              | `...projects/index.tsx`                  | `app/(site)/projetos/page.tsx`                                                    |
| `/projetos/projeto-exemplo`                                              | `...example-project.tsx`                 | `app/(site)/projetos/projeto-exemplo/page.tsx`                                    |
| `/quizzes/:id`                                                           | `...quizzes.$id.tsx`                     | `app/(site)/quizzes/[id]/page.tsx`                                                |
| `/version`                                                               | `client/routes/version.tsx`              | `app/version/page.tsx`                                                            |

---

## Fases da Migração

### Fase 0 — Preparação (branch nova)

1. Criar branch `feat/nextjs-migration`
2. Salvar snapshot do projeto atual com tag git

---

### Fase 1 — Scaffolding do Projeto Next.js

**Objetivo:** Configurar a base Next.js no mesmo repositório, removendo a estrutura do React Router.

#### 1.1 Atualizar `package.json`

Adicionar:

```json
{
  "dependencies": {
    "next": "latest"
  },
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  }
}
```

Remover:

- `react-router`, `@react-router/node`, `@react-router/serve`
- `@react-router/dev` (devDep)
- `vite`, `vite-tsconfig-paths`, `@tailwindcss/vite`

Manter:

- `react`, `react-dom` (19.1.0)
- Todos os `@radix-ui/*`
- `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`
- `tailwindcss` (4.x), `tw-animate-css`
- `@types/react`, `@types/react-dom`, `@types/node`, `typescript`

#### 1.2 Criar `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
```

> Nota: `output: "standalone"` para deploy Docker otimizado.

#### 1.3 Criar `postcss.config.mjs`

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

> Substituir `@tailwindcss/vite` por `@tailwindcss/postcss` (Tailwind v4 no Next.js).

#### 1.4 Atualizar `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"]
    },
    "resolveJsonModule": true,
    "isolatedModules": true,
    "incremental": true,
    "esModuleInterop": true,
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

> Mudança no alias: `~/*` agora aponta para `./*` (raiz do projeto) em vez de `./app/*`, já que `components/`, `features/`, `lib/` e `server/` ficam na raiz.

#### 1.5 Atualizar `components.json` (Shadcn)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "~/components",
    "utils": "~/lib/utils",
    "ui": "~/components/ui",
    "lib": "~/lib",
    "hooks": "~/hooks"
  },
  "iconLibrary": "lucide"
}
```

> Ativar `rsc: true` e atualizar aliases.

#### 1.6 Remover arquivos do React Router

- `react-router.config.ts`
- `vite.config.ts`
- `app/routes.ts`
- `app/root.tsx`
- `app/client/layouts/main.tsx`
- Diretório `.react-router/`
- Todos os arquivos em `app/client/routes/`

#### 1.7 Reorganizar diretórios

```
# Mover para raiz do projeto
app/client/components/ → components/
app/client/features/   → features/
app/client/lib/        → lib/
app/client/data/       → data/
app/server/            → server/
app/client/app.css     → app/globals.css
```

---

### Fase 2 — Root Layout e Layout do Site

#### 2.1 Criar `app/layout.tsx` (Root Layout)

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Igreja Oceano da Graça",
  description: "Igreja Oceano da Graça. Vem ser família com a gente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M8ZH4SPL');`}
        </Script>
      </head>
      <body className="bg-background text-foreground antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8ZH4SPL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
```

#### 2.2 Criar `app/(site)/layout.tsx`

```tsx
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full max-w-screen-lg sm:mx-auto flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
```

#### 2.3 Criar `app/not-found.tsx`

```tsx
export default function NotFound() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
    </main>
  );
}
```

#### 2.4 Criar `app/error.tsx`

```tsx
"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Oops!</h1>
      <p>{error.message || "An unexpected error occurred."}</p>
    </main>
  );
}
```

---

### Fase 3 — Migração dos Componentes Compartilhados

#### 3.1 Substituição de `Link` (react-router → next/link)

A migração de `Link` é o principal ponto de mudança nos componentes:

| React Router                          | Next.js                                                        |
| ------------------------------------- | -------------------------------------------------------------- |
| `import { Link } from "react-router"` | `import Link from "next/link"`                                 |
| `<Link to="/path">`                   | `<Link href="/path">`                                          |
| `useLocation()`                       | `usePathname()` (de `next/navigation`)                         |
| `useParams()`                         | `useParams()` (de `next/navigation`) ou props `params` no page |
| `useLoaderData()`                     | Props do Server Component ou `fetch`                           |

**Arquivos a alterar:**

- `components/navbar/nav-menu.tsx` — trocar `Link`/`to` por `Link`/`href`; trocar `useLocation` por `usePathname`
- `components/navbar/navigation-sheet.tsx` — mesma troca
- `components/navbar/index.tsx` — trocar `Link`
- `components/footer.tsx` — trocar `Link`/`to` por `Link`/`href`
- `features/reading-plans/index.tsx` — trocar `Link`
- `features/reading-plans/components/all-reading-plans-back-button.tsx` — trocar `Link`
- `features/oceano-academy/teaching-materials/components/all-teaching-materials-back-button.tsx` — trocar `Link`
- `features/projects/components/price-box/index.tsx` — trocar `Link`
- `features/quizzes/index.tsx` — trocar `Link`

#### 3.2 Diretiva `"use client"`

Adicionar `"use client"` nos seguintes arquivos:

- `components/navbar/nav-menu.tsx` (já tem — manter)
- `components/navbar/navigation-sheet.tsx` (usa `useState`, `useCallback`)
- `features/quizzes/index.tsx` (se tiver interatividade/estado)
- Todos os componentes Shadcn que já são client components (Accordion, Sheet, Tabs, Tooltip, etc. — eles já declaram `"use client"` internamente)

#### 3.3 Componentes Shadcn UI

Os componentes em `components/ui/` **não precisam de alteração** significativa. O Shadcn UI já suporta Next.js App Router. Apenas garantir que `components.json` está atualizado (Fase 1.5).

#### 3.4 Utilitário `cn`

`lib/utils.ts` permanece **inalterado** — já usa `clsx` + `tailwind-merge`.

---

### Fase 4 — Migração das Páginas (Route Modules → Page Components)

#### 4.1 Padrão para páginas estáticas (maioria)

Praticamente todas as rotas seguem este padrão:

**Antes (React Router):**

```tsx
import { SomeFeature } from "~/client/features/some-feature";
export default function () {
  return <SomeFeature />;
}
```

**Depois (Next.js):**

```tsx
import { SomeFeature } from "~/features/some-feature";
export default function Page() {
  return <SomeFeature />;
}
```

A mudança é mínima: atualizar o path do import (de `~/client/features/` para `~/features/`) e nomear a função.

#### 4.2 Página com parâmetro dinâmico: `/igrejas/[id]`

**Antes:**

```tsx
import { useParams } from "react-router";
import { Church } from "~/client/features/churches/church";

export default function () {
  const { id } = useParams();
  return <Church id={id ?? ""} />;
}
```

**Depois:**

```tsx
import { Church } from "~/features/churches/church";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Church id={id} />;
}
```

#### 4.3 Página com dados dinâmicos: `/quizzes/[id]`

**Antes:** usa `import.meta.glob` para carregar JSONs e `loader`/`useLoaderData`.

**Depois:**

```tsx
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { Quizzes } from "~/features/quizzes";
import type { Quiz } from "~/server/types";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const filePath = path.join(
      process.cwd(),
      "server/data/quizzes",
      `${id}.json`
    );
    const raw = await fs.readFile(filePath, "utf-8");
    const quiz: Quiz = JSON.parse(raw);
    return <Quizzes quiz={quiz} />;
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "server/data/quizzes");
  const files = await fs.readdir(dir);
  return files
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ id: f.replace(".json", "") }));
}
```

#### 4.4 Rota `/version` (sem layout do site)

Fica fora do route group `(site)`:

```
app/version/page.tsx
```

---

### Fase 5 — Atualização de Imports em Todos os Arquivos

Devido à reorganização dos diretórios, **todos os imports com `~/client/`** precisam ser atualizados:

| Antes                  | Depois                         |
| ---------------------- | ------------------------------ |
| `~/client/components/` | `~/components/`                |
| `~/client/features/`   | `~/features/`                  |
| `~/client/lib/`        | `~/lib/`                       |
| `~/client/data/`       | `~/data/`                      |
| `~/server/types`       | `~/server/types` (sem mudança) |

Isso pode ser feito com find-and-replace global:

- `~/client/components` → `~/components`
- `~/client/features` → `~/features`
- `~/client/lib` → `~/lib`
- `~/client/data` → `~/data`

---

### Fase 6 — Dockerfile e Deploy

#### 6.1 Atualizar Dockerfile

```dockerfile
FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

#### 6.2 Atualizar `.dockerignore`

Adicionar:

```
.next
node_modules
```

#### 6.3 Atualizar `.gitignore`

Adicionar:

```
.next/
next-env.d.ts
```

Remover:

```
.react-router/
```

---

### Fase 7 — Limpeza e Verificação

1. Remover diretório `app/client/` (já movido)
2. Remover `app/routes.ts`, `app/root.tsx`
3. Remover `react-router.config.ts`, `vite.config.ts`
4. Remover `.react-router/`
5. Executar `npm run typecheck`
6. Executar `npm run build`
7. Testar todas as rotas manualmente
8. Verificar Google Tag Manager no browser
9. Verificar responsividade mobile
10. Comparar visual entre versão antiga e nova

---

## Guia de Migração de APIs

| Conceito React Router 7    | Equivalente Next.js App Router                        |
| -------------------------- | ----------------------------------------------------- |
| `routes.ts` (centralizado) | File-based routing em `app/`                          |
| `layout("...", [...])`     | `layout.tsx` em diretórios                            |
| `route("path", "module")`  | `path/page.tsx`                                       |
| `<Outlet />`               | `{children}`                                          |
| `loader()`                 | Server Component async function / `fetch`             |
| `useLoaderData()`          | Props diretas do Server Component                     |
| `action()`                 | Server Actions (`"use server"`)                       |
| `<Link to="">`             | `<Link href="">` (de `next/link`)                     |
| `useLocation()`            | `usePathname()` (de `next/navigation`)                |
| `useParams()`              | `useParams()` (de `next/navigation`) ou `params` prop |
| `useNavigate()`            | `useRouter()` (de `next/navigation`)                  |
| `<Meta />`                 | `export const metadata` ou `generateMetadata()`       |
| `<Links />`                | Gerenciado automaticamente pelo Next.js               |
| `<Scripts />`              | Gerenciado automaticamente pelo Next.js               |
| `<ScrollRestoration />`    | Nativo do Next.js                                     |
| `import.meta.env.DEV`      | `process.env.NODE_ENV === 'development'`              |
| `import.meta.glob()`       | `fs.readdir()` + `import()` dinâmico ou `require()`   |
| `ErrorBoundary` (export)   | `error.tsx` (arquivo)                                 |
| `meta()` (export)          | `export const metadata` ou `generateMetadata()`       |

---

## Riscos e Mitigações

| Risco                                    | Probabilidade | Impacto | Mitigação                                                                             |
| ---------------------------------------- | ------------- | ------- | ------------------------------------------------------------------------------------- |
| Tailwind v4 incompatível com Next.js     | Baixa         | Alto    | Usar `@tailwindcss/postcss` em vez de `@tailwindcss/vite`; testar build imediatamente |
| Shadcn components quebram com RSC        | Baixa         | Médio   | Componentes interativos já usam `"use client"`; testar cada componente                |
| `import.meta.glob` sem substituto direto | Certa         | Baixo   | Substituir por `fs.readdir` + `JSON.parse` em Server Components                       |
| SEO/meta tags regridem                   | Média         | Alto    | Usar `generateMetadata()` em páginas que precisam; verificar com Lighthouse           |
| Assets estáticos com paths diferentes    | Baixa         | Baixo   | `public/` funciona igual no Next.js                                                   |
| Performance de cold start em Docker      | Média         | Médio   | `output: "standalone"` reduz bundle size do server                                    |

---

## Melhorias Futuras (Pós-Migração)

Após a migração base, considerar:

1. **`next/image`** — substituir `<img>` por `<Image>` para otimização automática
2. **`generateMetadata()`** — adicionar metadata por página para SEO
3. **`generateStaticParams()`** — pré-gerar páginas dinâmicas (`/igrejas/[id]`, `/quizzes/[id]`)
4. **Static Export** — se não houver server-side logic, considerar `output: "export"` para site 100% estático
5. **Middleware** — redirects, rewrites, i18n
6. **Analytics** — migrar de GTM para `@next/third-parties/google` para melhor performance

---

## Timeline Estimada

| Fase      | Descrição                                     | Tempo Estimado |
| --------- | --------------------------------------------- | -------------- |
| 0         | Preparação (branch, tag)                      | 0.5 dia        |
| 1         | Scaffolding (configs, deps, reorganizar dirs) | 1 dia          |
| 2         | Root Layout e Layout do Site                  | 0.5 dia        |
| 3         | Migração dos Componentes Compartilhados       | 1 dia          |
| 4         | Migração das ~50 Páginas                      | 2 dias         |
| 5         | Atualização de Imports                        | 0.5 dia        |
| 6         | Dockerfile e Deploy                           | 0.5 dia        |
| 7         | Limpeza e Verificação                         | 1 dia          |
| **Total** |                                               | **~7 dias**    |

---

## Checklist Final

- [ ] Todas as 50+ rotas respondem nos mesmos URLs
- [ ] Navbar e Footer funcionando com navegação client-side
- [ ] Google Tag Manager carregando e disparando eventos
- [ ] Quiz dinâmico (`/quizzes/:id`) funcionando
- [ ] Igreja dinâmica (`/igrejas/:id`) funcionando
- [ ] Página `/version` sem layout do site
- [ ] TypeScript sem erros (`npm run typecheck`)
- [ ] Build passando (`npm run build`)
- [ ] Docker build funcionando
- [ ] Layout responsivo preservado
- [ ] Fonts (Inter) carregando corretamente
- [ ] Dark mode (via Tailwind) funcionando
- [ ] Variáveis CSS do Shadcn aplicando corretamente

---

_Plano criado em: 2026-03-28_
_Versão alvo: Next.js (App Router) com React 19 e Tailwind CSS 4_
_Autor: Claude (Opus)_
