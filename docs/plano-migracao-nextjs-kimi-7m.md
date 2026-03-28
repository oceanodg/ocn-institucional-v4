# Plano de Migração: React Router 7 → Next.js 15

## Contexto

Projeto atual: **Oceano Igreja Online** - Site institucional de igreja brasileira
Stack atual: React Router 7 + TypeScript + TailwindCSS + Shadcn UI
Stack destino: Next.js 15 (App Router) + TypeScript + TailwindCSS + Shadcn UI

---

## 1. Resumo das Mudanças Arquiteturais

| Aspecto      | React Router 7                        | Next.js 15                              |
| ------------ | ------------------------------------- | --------------------------------------- |
| Roteamento   | Centralizado em `routes.ts`           | File-based em `app/`                    |
| Layouts      | Componente explícito com `<Outlet />` | `layout.tsx` aninhado                   |
| Data Loading | `loader`/`action` nas rotas           | Server Components + Server Actions      |
| Meta tags    | `meta` export nas rotas               | `metadata` export ou `generateMetadata` |
| Assets       | `public/` na raiz                     | `public/` na raiz (mantido)             |
| Path alias   | `~/*` → `./app/*`                     | `@/*` → `./src/*` ou `./app/*`          |

---

## 2. Estrutura de Pastas Atual vs Nova

### Atual (React Router 7)

```
app/
├── routes.ts                    # Configuração centralizada de rotas
├── root.tsx                     # Root component + meta/links
├── client/
│   ├── app.css                  # Tailwind + CSS variables
│   ├── components/              # Componentes UI e custom
│   │   └── ui/                  # Shadcn UI components
│   ├── features/                # Feature-specific components
│   ├── layouts/                 # Layout wrappers
│   ├── lib/                     # Utilitários
│   ├── routes/                  # Módulos de rotas
│   │   ├── home.tsx
│   │   ├── about/
│   │   ├── churches/
│   │   │   └── $id.tsx          # Rotas dinâmicas
│   │   └── ...
│   └── hooks/                   # Custom hooks
└── server/
    └── types/                   # Typescript types
```

### Nova (Next.js 15 App Router)

```
app/
├── layout.tsx                   # Root layout (substitui root.tsx)
├── globals.css                  # Tailwind + CSS variables
├── page.tsx                     # Home page (/)
├── sobre/
│   ├── page.tsx                 # /sobre
│   ├── nossa-razao/
│   │   └── page.tsx             # /sobre/nossa-razao
│   └── nossa-historia/
│       └── page.tsx             # /sobre/nossa-historia
├── igrejas/
│   ├── page.tsx                 # /igrejas
│   └── [id]/
│       └── page.tsx             # /igrejas/:id
├── oceano-academy/
│   ├── page.tsx
│   ├── escolas/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── ...
├── layout.tsx                   # Root layout
└── (main)/                      # Route group para layout principal
    ├── layout.tsx               # Layout com Navbar/Footer
    └── ...                      # Rotas que usam esse layout
components/
├── ui/                          # Shadcn UI (mantido)
├── features/                    # Feature components (movido de client/features)
└── ...                          # Outros componentes
lib/
└── utils.ts                     # cn() e utilitários
public/                          # Mantido (assets estáticos)
types/                           # Types do servidor
```

---

## 3. Mapeamento de Rotas

| Rota Atual                                | Arquivo RR7                                          | Nova Localização Next.js                               |
| ----------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| `/`                                       | `routes/home.tsx`                                    | `app/page.tsx`                                         |
| `/sobre`                                  | `routes/about/index.tsx`                             | `app/sobre/page.tsx`                                   |
| `/sobre/nossa-razao`                      | `routes/about/our-reason.tsx`                        | `app/sobre/nossa-razao/page.tsx`                       |
| `/sobre/nossa-historia`                   | `routes/about/our-history.tsx`                       | `app/sobre/nossa-historia/page.tsx`                    |
| `/nossos-pastores`                        | `routes/about/our-pastors.tsx`                       | `app/nossos-pastores/page.tsx`                         |
| `/igrejas`                                | `routes/churches/index.tsx`                          | `app/igrejas/page.tsx`                                 |
| `/igrejas/:id`                            | `routes/churches/$id.tsx`                            | `app/igrejas/[id]/page.tsx`                            |
| `/doacoes`                                | `routes/donations.tsx`                               | `app/doacoes/page.tsx`                                 |
| `/oceano-academy`                         | `routes/oceano-academy/index.tsx`                    | `app/oceano-academy/page.tsx`                          |
| `/oceano-academy/materiais-didaticos`     | `routes/oceano-academy/teaching-materials/index.tsx` | `app/oceano-academy/materiais-didaticos/page.tsx`      |
| `/oceano-academy/escolas`                 | `routes/oceano-academy/schools/index.tsx`            | `app/oceano-academy/escolas/page.tsx`                  |
| `/oceano-academy/escolas/:slug`           | `routes/oceano-academy/schools/*.tsx`                | `app/oceano-academy/escolas/[slug]/page.tsx`           |
| `/oceano-academy/cursos/:slug`            | `routes/oceano-academy/courses/*.tsx`                | `app/oceano-academy/cursos/[slug]/page.tsx`            |
| `/oceano-academy/planos-de-leitura`       | `routes/reading-plans/index.tsx`                     | `app/oceano-academy/planos-de-leitura/page.tsx`        |
| `/oceano-academy/planos-de-leitura/:slug` | `routes/reading-plans/*.tsx`                         | `app/oceano-academy/planos-de-leitura/[slug]/page.tsx` |
| `/igreja-online`                          | `routes/online-church/about.tsx`                     | `app/igreja-online/page.tsx`                           |
| `/igreja-online/*`                        | `routes/online-church/*.tsx`                         | `app/igreja-online/*/page.tsx`                         |
| `/projeto-expansao`                       | `routes/projects/expansion-project.tsx`              | `app/projeto-expansao/page.tsx`                        |
| `/projetos`                               | `routes/projects/index.tsx`                          | `app/projetos/page.tsx`                                |
| `/projetos/*`                             | `routes/projects/*.tsx`                              | `app/projetos/*/page.tsx`                              |
| `/quizzes/:id`                            | `routes/quizzes/quizzes.$id.tsx`                     | `app/quizzes/[id]/page.tsx`                            |
| `/version`                                | `routes/version.tsx`                                 | `app/api/version/route.ts` (API route)                 |

---

## 4. Passo a Passo da Migração

### Fase 1: Preparação e Setup (1-2 dias)

#### 1.1. Backup e Branch

```bash
git checkout -b migration/nextjs
```

#### 1.2. Instalação do Next.js

```bash
# Criar novo projeto Next.js (apenas para referência)
npx create-next-app@latest ocn-institucional-next --typescript --tailwind --eslint --app --src-dir=false

# Ou instalar no projeto existente
npm install next@latest react@latest react-dom@latest
npm install -D @types/node @types/react @types/react-dom
```

#### 1.3. Atualização de dependências

**Remover:**

- `@react-router/node`
- `@react-router/serve`
- `@react-router/dev`
- `react-router`
- `isbot`

**Adicionar:**

- `next`
- Mantém: `lucide-react`, `@radix-ui/*`, `tailwindcss`, `class-variance-authority`, `clsx`, `tailwind-merge`

#### 1.4. Atualizar package.json scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

---

### Fase 2: Configuração do Next.js (1 dia)

#### 2.1. next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Para Docker
  images: {
    unoptimized: true, // Se não usar next/image
  },
};

module.exports = nextConfig;
```

#### 2.2. Atualizar tsconfig.json

```json
{
  "compilerOptions": {
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

#### 2.3. Atualizar TailwindCSS

Next.js 15 usa PostCSS por padrão. Configurar `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Copiar tema atual de app.css
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

### Fase 3: Migração de Componentes Core (2-3 dias)

#### 3.1. Root Layout (`app/layout.tsx`)

Converter de `root.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M8ZH4SPL');`,
          }}
        />
      </head>
      <body>
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

#### 3.2. Main Layout (`app/(main)/layout.tsx`)

Converter de `client/layouts/main.tsx`:

```tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function MainLayout({
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

#### 3.3. Mover e atualizar componentes

- Mover `app/client/components/*` → `components/*`
- Mover `app/client/features/*` → `components/features/*`
- Mover `app/client/lib/*` → `lib/*`
- Atualizar imports: `~/` → `@/`

---

### Fase 4: Migração de Rotas (3-5 dias)

#### 4.1. Rotas Estáticas (Simples)

**Antes (React Router):**

```tsx
// app/client/routes/home.tsx
import { Welcome } from "~/client/features/welcome";

export default function Home() {
  return <Welcome />;
}
```

**Depois (Next.js):**

```tsx
// app/page.tsx
import { Welcome } from "@/components/features/welcome";

export default function HomePage() {
  return <Welcome />;
}
```

#### 4.2. Rotas Dinâmicas

**Antes:**

```tsx
// app/client/routes/churches/$id.tsx
import { useParams } from "react-router";
import { Church } from "~/client/features/churches/church";

export default function () {
  const { id } = useParams();
  return <Church id={id ?? ""} />;
}
```

**Depois:**

```tsx
// app/igrejas/[id]/page.tsx
import { Church } from "@/components/features/churches/church";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ChurchPage({ params }: PageProps) {
  const { id } = await params;
  return <Church id={id} />;
}
```

#### 4.3. Rotas com Loader (Data Loading)

**Antes:**

```tsx
// routes/quizzes/quizzes.$id.tsx
import { useLoaderData, type LoaderFunctionArgs } from "react-router";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  const quizData = quizzes[`/app/server/data/quizzes/${id}.json`];
  return { quiz: quizData?.default ?? null };
}

export default function () {
  const { quiz } = useLoaderData<typeof loader>();
  return <Quizzes quiz={quiz} />;
}
```

**Depois:**

```tsx
// app/quizzes/[id]/page.tsx
import { notFound } from "next/navigation";
import { Quizzes } from "@/components/features/quizzes";
import quizzes from "@/data/quizzes"; // ou fetch de API

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function QuizPage({ params }: PageProps) {
  const { id } = await params;
  const quiz = quizzes[id];

  if (!quiz) {
    notFound();
  }

  return <Quizzes quiz={quiz} />;
}

// Opcional: generateStaticParams para SSG
export async function generateStaticParams() {
  return Object.keys(quizzes).map((id) => ({ id }));
}
```

---

### Fase 5: Migração de Meta Tags (1 dia)

**Antes:**

```tsx
// root.tsx
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Igreja Oceano da Graça" },
    { name: "description", content: "..." },
  ];
}
```

**Depois:**

```tsx
// app/layout.tsx ou page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Igreja Oceano da Graça",
  description: "...",
};
```

Para meta tags dinâmicas:

```tsx
// app/quizzes/[id]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const quiz = await getQuiz(id);

  return {
    title: quiz?.title ?? "Quiz não encontrado",
    description: quiz?.description,
  };
}
```

---

### Fase 6: API Routes (Opcional, 1 dia)

Para rotas como `/version`, converter para API Routes:

```typescript
// app/api/version/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ version: process.env.npm_package_version });
}
```

---

### Fase 7: Ajustes e Testes (2-3 dias)

#### 7.1. Atualizar imports de ícones

Verificar se `lucide-react` continua funcionando (deve funcionar sem mudanças).

#### 7.2. Verificar componentes Shadcn UI

Reinstalar se necessário:

```bash
npx shadcn add button card dialog ...
```

#### 7.3. Testar rotas

```bash
npm run dev
# Verificar todas as rotas mapeadas
```

#### 7.4. Build de produção

```bash
npm run build
npm run start
```

---

## 5. Checklist de Migração

### Configuração

- [ ] Remover dependências do React Router
- [ ] Instalar Next.js e dependências
- [ ] Configurar `next.config.js`
- [ ] Atualizar `tsconfig.json` (paths)
- [ ] Configurar Tailwind para Next.js
- [ ] Criar `app/layout.tsx` (root)
- [ ] Mover CSS para `app/globals.css`

### Componentes

- [ ] Mover `client/components` → `components`
- [ ] Mover `client/features` → `components/features`
- [ ] Mover `client/lib` → `lib`
- [ ] Atualizar todos imports: `~/` → `@/`
- [ ] Criar `app/(main)/layout.tsx` (Navbar + Footer)

### Rotas

- [ ] `app/page.tsx` (home)
- [ ] `app/sobre/page.tsx`
- [ ] `app/sobre/nossa-razao/page.tsx`
- [ ] `app/sobre/nossa-historia/page.tsx`
- [ ] `app/nossos-pastores/page.tsx`
- [ ] `app/igrejas/page.tsx`
- [ ] `app/igrejas/[id]/page.tsx`
- [ ] `app/doacoes/page.tsx`
- [ ] `app/oceano-academy/page.tsx`
- [ ] `app/oceano-academy/escolas/page.tsx`
- [ ] `app/oceano-academy/escolas/[slug]/page.tsx`
- [ ] `app/oceano-academy/cursos/[slug]/page.tsx`
- [ ] `app/oceano-academy/materiais-didaticos/page.tsx`
- [ ] `app/oceano-academy/planos-de-leitura/page.tsx`
- [ ] `app/oceano-academy/planos-de-leitura/[slug]/page.tsx`
- [ ] `app/igreja-online/page.tsx`
- [ ] `app/igreja-online/*/page.tsx`
- [ ] `app/projeto-expansao/page.tsx`
- [ ] `app/projetos/page.tsx`
- [ ] `app/quizzes/[id]/page.tsx`
- [ ] `app/api/version/route.ts`

### Features Especiais

- [ ] Converter loaders para fetch/server functions
- [ ] Adicionar `generateMetadata` onde necessário
- [ ] Configurar GTM no layout
- [ ] Verificar Error Boundaries (`error.tsx`)
- [ ] Verificar `not-found.tsx`

### Testes

- [ ] Todas as rotas respondem corretamente
- [ ] Navegação entre páginas funciona
- [ ] Meta tags estão corretas
- [ ] Build de produção funciona
- [ ] Docker build funciona (se aplicável)

---

## 6. Riscos e Considerações

| Risco              | Mitigação                                     |
| ------------------ | --------------------------------------------- |
| Quebras de links   | Manter estrutura de URLs idêntica             |
| SEO impact         | Verificar meta tags, usar `generateMetadata`  |
| Performance        | Usar Server Components onde possível          |
| Componentes Shadcn | Reinstalar com `npx shadcn add` se necessário |
| Import.meta.glob   | Substituir por imports estáticos ou `fs`      |

---

## 7. Estimativa de Tempo

| Fase                    | Tempo Estimado |
| ----------------------- | -------------- |
| Setup e Configuração    | 1-2 dias       |
| Migração de Componentes | 2-3 dias       |
| Migração de Rotas       | 3-5 dias       |
| Meta Tags e SEO         | 1 dia          |
| Testes e Ajustes        | 2-3 dias       |
| **Total**               | **9-14 dias**  |

---

## 8. Recursos Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Migration](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Shadcn UI - Next.js Template](https://ui.shadcn.com/docs/installation/next)
- [Tailwind CSS - Next.js Guide](https://tailwindcss.com/docs/guides/nextjs)
