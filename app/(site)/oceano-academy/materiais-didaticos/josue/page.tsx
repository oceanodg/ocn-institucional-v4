import {
  FileImage,
  FileText,
  GraduationCap,
  Hash,
  SquarePlay,
  Workflow,
} from "lucide-react";
import { HeroContainer, HeroImage } from "~/components/hero";
import { AllTeachingMaterialsBackButton } from "~/components/back-buttons/all-teaching-materials";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";
import { SummaryLi } from "~/components/summary-li";
import { Table, TableCell, TableHeader, TableRow } from "~/components/ui/table";
import { LinkSmall } from "~/components/ui/link-small";
import { TableCellLinksContainer } from "~/components/ui/table-cell-links-container";

export const metadata = {
  alternates: {
    types: {
      "text/markdown": "/oceano-academy/materiais-didaticos/josue.md",
    },
  },
};

export default function Josue() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton tab="antigo" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Josué</H1>
          <P className="mt-0">
            Conquistas de Canaã e o início da administração de Israel.
          </P>
        </div>

        {/* <HeroImage
          src="/images/oceano-academy/materiais-didaticos/levitico-numero-deuteronomio/levitico-numero-deuteronomio-cover.webp"
          alt="Levítico, Números e Deuteronômio"
        /> */}
      </HeroContainer>

      <Separator className="mt-20 sm:mt-20" />

      <Container className="mt-6 sm:mt-8 mb-10 sm:mb-16">
        <H2 id="materials-didactic" className="">
          Materiais de Apoio
        </H2>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold w-[110px] sm:w-[160px]">
                Apostila
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1KOxiUvOQ2kW_ToVColtjc1f9gFLogKn4/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/josue.md">
                    <Hash className="size-4" />
                    MD
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            {/*
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Mapa Mental
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://whimsical.com/ocn7/ocn-escola-biblica-at-Vwf2XrtErHeQATx88Axg8B">
                    <Workflow className="size-4" />
                    Mapa Mental
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1yG2OLew1GM8NfrUMRr09TzzfePWfPzf7/view?usp=drive_link">
                    <FileText className="size-4" />
                    L1: Santos
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1SStF27YnQfc6lYnFBqD7frnhgHWhIvQe/view?usp=drive_link">
                    <FileText className="size-4" />
                    L2: Caminhem
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1GScX8RjMkYFCjxAuBNhyeKthwjpM3To5/view?usp=drive_link">
                    <FileText className="size-4" />
                    L3: Lembrem-se
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1llHvVDp2K7tbnjf3L52dteuhKugPBS5P/view?usp=drive_link">
                    <FileText className="size-4" />
                    L4: Vivam
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Vídeos Recomendados
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://www.youtube.com/watch?v=bR5qA3fmpEM">
                    <SquarePlay className="size-4" />
                    Levítico
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=6MtqQzOTukQ">
                    <SquarePlay className="size-4" />
                    Números
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=udwkeytvMPI">
                    <SquarePlay className="size-4" />
                    Deuteronômio
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Infográficos
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1sE_16dgHnbRKcjCogPRXQw3t75fchane/view?usp=drive_link">
                    <FileImage className="size-4" />
                    L1: Santos
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1AKaI7lPzDeIuWS6pXfN2DUCGD1ws2rut/view?usp=drive_link">
                    <FileImage className="size-4" />
                    L2: Caminhem
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1Z79hS38c2NQjc-9WndpRso6DgMRk8u-s/view?usp=drive_link">
                    <FileImage className="size-4" />
                    L3: Lembrem-se
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1Y-NrRS9XzLdHvsp6mEUrpjvAwCNqt5EP/view?usp=drive_link">
                    <FileImage className="size-4" />
                    L4: Vivam
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Perguntas e Respostas (FAQ)
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1pa5JyRAtdLk_-z1ftiwiUW2glfYG-o1J/view?usp=sharing">
                    <FileText className="size-4" />
                    L1: Santos
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1yJkFf2iKxA9f9AsAB8NcDuGuS_g2FNLD/view?usp=sharing">
                    <FileText className="size-4" />
                    L2: Caminhem
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1JGypU7BHZ4KHKjP9ekPcKYVsejBxDAF9/view?usp=sharing">
                    <FileText className="size-4" />
                    L3: Lembrem-se
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1rbHWKTXGykfluAXK7XUz_Ko2gUAmKWJj/view?usp=sharing">
                    <FileText className="size-4" />
                    L4: Vivam
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">Quizzes</TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1i03hsHe9etGCfSVHzZOyFNTconOWuG5Y/view?usp=sharing">
                    <FileText className="size-4" />
                    L1: Santos
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1SvesWy-E_zMB9owD1qg4xMP9e1hW7qAr/view?usp=sharing">
                    <FileText className="size-4" />
                    L2: Caminhem
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1LTkdBQeUwu8FYVkPh35xq9UDTh2hHo79/view?usp=sharing">
                    <FileText className="size-4" />
                    L3: Lembrem-se
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1oE9sk7dknDtTA2zVw7T35wnJm68T2Wmr/view?usp=sharing">
                    <FileText className="size-4" />
                    L4: Vivam
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">Devocional</TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1PANmvqIJT9oeROMzG-l-tXmHRO0hShCy/view?usp=sharing">
                    <FileText className="size-4" />
                    L1: Santos
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1dCjZhkGHtVTc7hSu41FBnHAil_Cep4Ni/view?usp=sharing">
                    <FileText className="size-4" />
                    L2: Caminhem
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/18kHac80Ys9PXpO9ttEEvp-rDutTbhky1/view?usp=sharing">
                    <FileText className="size-4" />
                    L3: Lembrem-se
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1oD1HNeG0dybeM1Wism0zZGvruW8cduZz/view?usp=sharing">
                    <FileText className="size-4" />
                    L4: Vivam
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Curso Recomendado
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="/oceano-academy/cursos/fundamentos">
                    <GraduationCap className="size-4" />
                    Fundamentos
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow> */}
          </TableHeader>
        </Table>
      </Container>
    </section>
  );
}
