import Link from "next/link";

import { Container } from "~/components/container";
import { CTABox } from "~/components/cta-box";
import { HeroContainer } from "~/components/hero";
import type { School } from "~/components/school-accordion";
import { SummaryLi } from "~/components/summary-li";
import { H1, P, Separator } from "~/components/ui";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { UL } from "~/components/ui/ul";
import { lora } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import { AcademyIntro } from "./academy-intro";

const data: School[] = [
  {
    id: "escola-de-membros",
    title: "1. Escola de Membros",
    description:
      "Proporcionar a integração e capacitar os novos membros para viverem sua identidade, cumprirem sua missão e fazerem a diferença por meio de uma participação ativa na igreja local.",
    pillar: { label: "Discipulado", color: "teal" },
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
    id: "escola-de-lideres",
    title: "2. Escola de Líderes",
    description:
      "Um ambiente de preparo e crescimento para líderes que desejam fortalecer seu chamado, desenvolver competências ministeriais e exercer uma liderança que inspira, transforma e impacta vidas.",
    pillar: { label: "Missão", color: "purple" },
    courses: [
      {
        id: "pequenos-grupos",
        title: "2.1. Líder de Pequenos Grupos",
        description:
          "Identidade, visão e a prática dos Pequenos Grupos da Igreja Oceano da Graça.",
        href: "/oceano-academy/cursos/pequenos-grupos",
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
              <span className="text-sm text-muted-foreground">
                {school.courses.length} curso
                {school.courses.length !== 1 ? "s" : ""}
              </span>
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
                <SummaryLi key={course.id}>
                  <Link href={course.href}>{course.title}</Link>
                </SummaryLi>
              ))}
            </UL>
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
          <P className="mt-0">
            Cresça na Graça e no conhecimento do Nosso Senhor Jesus Cristo.
          </P>
        </div>
      </HeroContainer>

      <Container className="mt-2 sm:mt-6">
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

      <AcademyIntro />

      <Separator className="my-14" />

      <Container className="pt-0 sm:pt-0 mb-10 sm:mb-16">
        <div className="flex flex-col gap-4">
          <CTABox
            title="Já é cadastrado(a) em algum curso?"
            description="Acesse agora a plataforma de cursos da Oceano Academy."
            buttonLink="https://academy.oceanodagraca.com/"
            buttonText="Acesse agora"
            openInNewTab={true}
          />

          <CTABox
            title="Escola Bíblica"
            description="Ensino e adoração."
            buttonLink="/oceano-academy/escolas/escola-biblica"
            buttonText="Saiba mais"
            openInNewTab={false}
          />

          {/* <CTABox
            title="Escola de Membros"
            description="Nosso discipulado institucional."
            buttonLink="/oceano-academy/escolas/escola-de-membros"
            buttonText="Ver cursos"
            openInNewTab={false}
          />

          <CTABox
            title="Escola de Líderes"
            description="Cursos de capacitação para líderes."
            buttonLink="/oceano-academy/escolas/escola-de-lideres"
            buttonText="Em breve"
            openInNewTab={false}
            disabled
          /> */}

          <SchoolCards />
          {/* 
          <CTABox
            title="Conheça nossas escolas"
            description="Discipulado, Cursos de ensino e adoração e muito mais."
            buttonLink="/oceano-academy/escolas"
            buttonText="Ver escolas"
            openInNewTab={false}
          />

          <CTABox
            title="Materiais Didáticos da Escola Bíblica"
            description="Acesse os materiais didáticos das aulas da Escola Bíblica."
            buttonLink="/oceano-academy/materiais-didaticos"
            buttonText="Acessar materiais"
            openInNewTab={false}
          />

          <CTABox
            title="Planos de Leitura Bíblica"
            description="Acesse os planos de leitura bíblica."
            buttonLink="/oceano-academy/planos-de-leitura"
            buttonText="Acessar Planos"
            openInNewTab={false}
          /> */}
        </div>
      </Container>
    </section>
  );
}
