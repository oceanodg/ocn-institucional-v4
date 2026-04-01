import type { ReadingPlan } from "~/server/types/reading-plan";
import dailyWisdom from "~/data/reading-plans/daily-wisdom.json";
import { AllReadingPlansBackButton } from "~/components/back-buttons/all-reading-plans";
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

export default function SabedoriaDiariaPage() {
  const readingPlan = dailyWisdom as ReadingPlan;

  return (
    <section className="relative backdrop-blur-sm">
      <AllReadingPlansBackButton />

      <HeroContainer className="pb-2 sm:pb-0 mb-10 sm:mb-16">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Sabedoria Diária</H1>
          <P className="mt-0">Salmos, Provérbios e Cantares de Salomão.</P>
        </div>

        <Table className="">
          <TableHeader>
            <TableRow className="">
              <TableCell className="border font-bold w-[150px]">
                Testamento
              </TableCell>
              <TableCell className="border">Antigo Testamento</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell className="border font-bold">Dias</TableCell>
              <TableCell>60 Dias</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell className="border font-bold">
                Tempo de Leitura
              </TableCell>
              <TableCell>7 horas e 51 minutos</TableCell>
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
