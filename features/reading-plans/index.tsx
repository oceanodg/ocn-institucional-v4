import Link from "next/link";
import { H1, P, Separator } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { cn } from "~/lib/utils";
import { CTABox } from "~/components/cta-box";

export function LinkReadingPlan(props: { slug: string; text: string }) {
  const { slug, text } = props;
  return (
    <Link
      href={`/oceano-academy/planos-de-leitura/${slug}`}
      className={cn(
        "dark:text-dark-secondary hover:dark:text-dark-secondary-2",
        "text-light-secondary hover:text-light-secondary-2",
        "text-sm block"
      )}
    >
      {text}
    </Link>
  );
}

export function ReadingPlanRow(props: {
  slug: string;
  days: number;
  readingPlanName: string;
  about: string;
}) {
  const { slug, days, readingPlanName, about } = props;
  return (
    <TableRow className="hover:cursor-pointer">
      <TableCell className="">
        <LinkReadingPlan slug={slug} text={days.toString()} />
      </TableCell>
      <TableCell className="">
        <LinkReadingPlan slug={slug} text={readingPlanName} />
      </TableCell>
      <TableCell className="">
        <LinkReadingPlan slug={slug} text={about} />
      </TableCell>
    </TableRow>
  );
}

export function ReadingPlans() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0 mb-6 sm:mb-8">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Planos de Leitura</H1>
          <P className="mt-0">Planos de leitura para iniciantes e avançados.</P>
        </div>
      </HeroContainer>

      <Separator className="my-14" />

      <Container className="">
        <div className="flex flex-col gap-4">
          <CTABox
            title="Marcador de Leitura Bíblica"
            description="Baixe e imprima o seu marcador de leitura bíblica para acompanhar o seu progresso."
            buttonLink="https://drive.google.com/file/d/1fu29D2tIQeWY1sZcaWkxyV3HSuz3yEoA/view?usp=sharing"
            buttonText="Baixar Agora"
            openInNewTab={true}
          />
        </div>
      </Container>

      <Container className="mt-6 sm:mt-8 mb-10 sm:mb-16">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Dias</TableHead>
              <TableHead>Plano</TableHead>
              <TableHead>Sobre</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <ReadingPlanRow
              slug="iniciante"
              days={30}
              readingPlanName="Iniciante"
              about="Panorama Bíblico, para iniciantes."
            />
            <ReadingPlanRow
              slug="plano-anual"
              days={365}
              readingPlanName="Plano Anual"
              about="Leitura do Antigo Testamento uma vez e do Novo Testamento duas vezes no ano."
            />
            <ReadingPlanRow
              slug="ordem-dos-livros"
              days={365}
              readingPlanName="Ordem dos Livros"
              about="Leia de Gênesis 1 à Apocalipse 22 na ordem dos livros da Bíblia."
            />
            <ReadingPlanRow
              slug="ordem-cronologica"
              days={365}
              readingPlanName="Ordem Cronológica"
              about="Leia a Bíblia na ordem que os eventos aconteceram."
            />
            <ReadingPlanRow
              slug="leitura-em-dois-anos"
              days={720}
              readingPlanName="Leitura em Dois Anos"
              about="Pequena porção diária. Leitura completa da Bíblia em dois anos."
            />
            <ReadingPlanRow
              slug="desafio-dos-90-dias"
              days={90}
              readingPlanName="Desafio dos 90 dias"
              about="Leia a Bíblia inteira em somente 90 dias."
            />
            <ReadingPlanRow
              slug="sabedoria-diaria"
              days={60}
              readingPlanName="Sabedoria Diária"
              about="Salmos, Provérbios e Cantares de Salomão."
            />
            <ReadingPlanRow
              slug="isaias"
              days={71}
              readingPlanName="Isaías"
              about="Isaías em 71 dias."
            />
            <ReadingPlanRow
              slug="evangelhos"
              days={45}
              readingPlanName="Evangelhos"
              about="Vida e ministério do Senhor Jesus Cristo."
            />
            <ReadingPlanRow
              slug="novo-testamento"
              days={90}
              readingPlanName="Novo Testamento"
              about="Novo Testamento em 90 dias."
            />
            <ReadingPlanRow
              slug="novo-testamento-em-ordem-cronologica"
              days={90}
              readingPlanName="Novo Testamento em Ordem Cronológica"
              about="Novo Testamento na ordem que os eventos aconteceram."
            />
          </TableBody>
        </Table>
      </Container>
    </section>
  );
}
