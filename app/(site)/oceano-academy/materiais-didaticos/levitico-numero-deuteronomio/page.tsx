import {
  FileImage,
  FileText,
  GraduationCap,
  Hash,
  SquarePlay,
  Wallpaper,
  Workflow,
} from "lucide-react";
import { HeroContainer } from "~/components/hero";
import { AllTeachingMaterialsBackButton } from "~/components/back-buttons/all-teaching-materials";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";
import { SummaryLi } from "~/components/summary-li";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { LinkSmall } from "~/components/ui/link-small";
import { TableCellLinksContainer } from "~/components/ui/table-cell-links-container";

export const metadata = {
  alternates: {
    types: {
      "text/markdown": "/oceano-academy/materiais-didaticos/exodo.md",
    },
  },
};

export default function Exodo() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton tab="antigo" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Levítico, Números e Deuteronômio</H1>
          <P className="mt-0">
            Instruções para adoração, censos de Israel, peregrinação no deserto
            e leis de Moisés.
          </P>
        </div>
      </HeroContainer>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="materials-didactic">Materiais de Apoio</H2>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold w-[110px] sm:w-[160px]">
                Apostila
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1ley1uu84aRRTHvhZWebh_nDBJaRen741/view?usp=drive_link">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  {/* <LinkSmall href="/oceano-academy/materiais-didaticos/levitico-numero-deuteronomio.md">
                      <Hash className="size-4" />
                      MD
                    </LinkSmall> */}
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
          </TableHeader>
        </Table>
      </Container>
    </section>
  );
}
