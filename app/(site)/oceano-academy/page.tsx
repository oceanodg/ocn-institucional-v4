import Link from "next/link";

import { Container } from "~/components/container";
import { CTABox } from "~/components/cta-box";
import { HeroContainer } from "~/components/hero";
import { SummaryLi } from "~/components/summary-li";
import { Button, H1, P, Separator } from "~/components/ui";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { UL } from "~/components/ui/ul";
import { lora } from "~/lib/fonts";
import { cn } from "~/lib/utils";

interface Course {
  id: string;
  title: string;
  description?: string;
  href?: string;
}

interface School {
  id: string;
  title: string;
  description: string;
  pillar: {
    label: string;
  };
  hideCoursesQuantity?: boolean;
  inviteHref?: string;
  courses: Course[];
}

const data: School[] = [
  {
    id: "escola-de-membros",
    title: "1. Escola de Membros",
    description: "Integração e capacitação dos membros.",
    pillar: { label: "Discipulado" },
    inviteHref: "https://academy-ocn.memberkit.com.br/invites/x4y9DQ/join",
    courses: [
      {
        id: "connect",
        title: "1.1. Connect",
        description:
          "O Connect é o primeiro passo para mergulhar no Oceano da Graça.",
        href: "/oceano-academy/cursos/connect",
      },
      {
        id: "fundamentos",
        title: "1.2. Fundamentos",
        description:
          "Base doutrinária essencial: Os principais pilares da fé cristã.",
        href: "/oceano-academy/cursos/fundamentos",
      },
      {
        id: "nova-vida",
        title: "1.3. Nova vida",
        description: "Condução nos princípios básicos da fé cristã.",
        href: "/oceano-academy/cursos/vida-nova",
      },
      {
        id: "voluntariado",
        title: "1.4. Voluntariado",
        description:
          "Capacitação, inspiração e alinhamento, para todos que escolheram servir.",
        href: "/oceano-academy/cursos/voluntariado",
      },
    ],
  },
  {
    id: "escola-da-familia",
    title: "2. Escola da Família",
    description: "Fortalecimento da família como projeto de Deus.",
    pillar: { label: "Comunhão" },
    courses: [
      { id: "mulher", title: "2.1. Mulher *" },
      { id: "homem", title: "2.2. Homem *" },
      { id: "one", title: "2.3. Curso One *" },
      { id: "casados", title: "2.4. Casados *" },
      { id: "pais", title: "2.5. Pais *" },
    ],
  },
  {
    id: "escola-de-lideres",
    title: "3. Escola de Líderes",
    description: "Preparo e crescimento para líderes.",
    pillar: { label: "Missão" },
    courses: [
      {
        id: "lideranca-geral",
        title: "3.1. Formação de Líderes *",
      },
      {
        id: "pequenos-grupos",
        title: "3.2. Líder de Pequenos Grupos",
        href: "/oceano-academy/cursos/pequenos-grupos",
      },
      {
        id: "convergencia-ministerial",
        title: "3.3. Convergência Ministerial *",
      },
      {
        id: "escola-de-pioneiros",
        title: "3.4. Escola de pioneiros *",
      },
    ],
  },
  {
    id: "escola-de-ministros",
    title: "4. Escola de Ministros",
    description:
      "Desenvolvmento de vocacionados para os ministérios congregacionais.",
    pillar: { label: "Serviço" },
    courses: [
      {
        id: "ministro-geral",
        title: "4.1. Escola de Pastores *",
      },
    ],
  },
  {
    id: "escola-biblica",
    title: "Escola Bíblica",
    description: "Conhecimento bíblico para toda a Igreja.",
    pillar: { label: "Adoração" },
    hideCoursesQuantity: true,
    courses: [
      {
        id: "antigo-testamento",
        title: "Antigo Testamento",
        href: "/oceano-academy/materiais-didaticos?tab=antigo",
      },
      {
        id: "novo-testamento",
        title: "Novo Testamento",
        href: "/oceano-academy/materiais-didaticos?tab=novo",
      },
      {
        id: "personagens",
        title: "Personagens",
        href: "/oceano-academy/materiais-didaticos?tab=personagens",
      },
      {
        id: "parabolas",
        title: "Parábolas",
        href: "/oceano-academy/materiais-didaticos?tab=parabolas",
      },
      {
        id: "planos-de-leitura",
        title: "Planos de Leitura",
        href: "/oceano-academy/planos-de-leitura",
      },
    ],
  },
];

function SchoolCards() {
  return (
    <Card className="gap-0 overflow-hidden rounded-lg bg-white py-0 shadow-none">
      {data.map((school) => (
        <div key={school.id}>
          <CardHeader className="px-6 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">{school.pillar.label}</Badge>
              {!school.hideCoursesQuantity && (
                <span className="text-sm text-muted-foreground">
                  {school.courses.length} curso
                  {school.courses.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            <div
              className={cn(
                "mt-4 text-xl font-semibold text-gray-700 sm:text-2xl",
                lora.className
              )}
            >
              {school.title}
            </div>

            <P className="mt-2 text-left sm:mt-1">{school.description}</P>
          </CardHeader>

          <CardContent className="px-6 pb-6 sm:px-8 sm:pb-7">
            <UL className="mt-0 pl-3.5 sm:pl-4 space-y-2 sm:space-y-2">
              {school.courses.map((course) => (
                <SummaryLi
                  key={course.id}
                  className={
                    !course.href
                      ? "text-muted-foreground no-underline hover:no-underline cursor-default"
                      : undefined
                  }
                >
                  {course.href ? (
                    <Link href={course.href}>{course.title}</Link>
                  ) : (
                    <span>{course.title}</span>
                  )}
                </SummaryLi>
              ))}
            </UL>
            {school.courses.some((course) => !course.href) && (
              <p className="mt-3 ml-3 text-sm sm:text-base text-muted-foreground italic">
                * em breve
              </p>
            )}
            {school.inviteHref ? (
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 hover:cursor-pointer bg-gray-900 hover:bg-gray-900/80 text-white hover:text-white w-full sm:w-[250px]"
                  asChild
                >
                  <a
                    href={school.inviteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inscreva-se
                  </a>
                </Button>
              </div>
            ) : null}
          </CardContent>

          {school.id !== data[data.length - 1].id ? <Separator /> : null}
        </div>
      ))}
    </Card>
  );
}

export default function OceanoAcademyPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Oceano Academy</H1>
        </div>
      </HeroContainer>

      <Container className="mt-2 sm:mt-4">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/LEdj8ZOk8P8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>

      {/* <AcademyIntro /> */}

      {/* <Separator className="mt-4 sm:mt-8 mb-10 sm:mb-12" /> */}

      <Container className="pt-0 sm:pt-0 mt-10 sm:mt-8 mb-10 sm:mb-16">
        <div className="flex flex-col gap-4">
          <CTABox
            title="Já é cadastrado(a) em algum curso?"
            description="Acesse agora a plataforma de cursos da Oceano Academy."
            buttonLink="https://academy.oceanodagraca.com/"
            buttonText="Acesse agora"
            openInNewTab={true}
          />

          <SchoolCards />
        </div>
      </Container>
    </section>
  );
}
