import type { ReadingPlan } from "~/server/types/reading-plan";
import data from "./data/90-day-challenge.json";
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

export function ReadingPlan90DayChallenge() {
  const readingPlan = data as ReadingPlan;

  return (
    <section className="relative backdrop-blur-sm">
      <AllReadingPlansBackButton />

      <HeroContainer className="pb-2 sm:pb-0 mb-10 sm:mb-16">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Desafio dos 90 Dias</H1>
          <P className="mt-0">Leia a Bíblia inteira em somente 90 dias.</P>
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
              <TableCell>90 Dias</TableCell>
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
