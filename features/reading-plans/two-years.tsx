import type { ReadingPlan } from "~/server/types/reading-plan";
import twoYears from "./data/two-years.json";
import { AllReadingPlansBackButton } from "./components/all-reading-plans-back-button";
import { H1, H2, P, Separator } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export function ReadingPlanTwoYears() {
  const readingPlan = twoYears as ReadingPlan;

  return (
    <section className="relative backdrop-blur-sm">
      <AllReadingPlansBackButton />

      <HeroContainer className="pb-2 sm:pb-0 mb-10 sm:mb-16">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Leitura em Dois Anos</H1>
          <P className="mt-0">
            Pequena porção diária. Leitura completa da Bíblia em dois anos.
          </P>
        </div>

        <Table className="">
          <TableHeader>
            <TableRow className="">
              <TableCell className="border font-bold w-[150px]">
                Testamentos
              </TableCell>
              <TableCell className="border">Antigo e Novo Testamento</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell className="border font-bold">Dias</TableCell>
              <TableCell>720 Dias</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell className="border font-bold">
                Tempo de Leitura
              </TableCell>
              <TableCell>98 horas e 8 minutos</TableCell>
            </TableRow>
          </TableHeader>
        </Table>
      </HeroContainer>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2>Dias e Passagens</H2>

        <Table>
          <TableBody>
            {readingPlan?.days?.map((day) => {
              return (
                <TableRow key={day.day}>
                  <TableCell className="w-[50px]">{day.day}</TableCell>
                  <TableCell>{day.passages}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </section>
  );
}
