import {
  FileImage,
  FileText,
  GraduationCap,
  Hash,
  SquarePlay,
  Workflow,
} from "lucide-react";
import { HeroContainer } from "~/components/hero";
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
      "text/markdown": "/oceano-academy/materiais-didaticos/isaias-2.md",
    },
  },
};

export default function CursoIsaias2() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton tab="antigo" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Livro de Isaías – Módulo II</H1>
          <P className="mt-0">
            Estudo aprofundado do livro do profeta Isaías, abordando a denúncia
            do pecado, o livramento de Deus, a grandiosidade do Senhor, a
            salvação messiânica e as promessas para o futuro glorioso de Sião.
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
                  <LinkSmall href="https://drive.google.com/file/d/1CsmXlXjmYKjQWZU5ZBQzkzR2o9fXEwVS/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/isaias-2.md">
                    <Hash className="size-4" />
                    MD
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Plano de Estudo
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/18wliSqV5VAPPOylPkLR0HkCgfnYIp-jF/view?usp=sharing">
                    <FileText className="size-4" />
                    Plano de Estudo
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Mapa Mental
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://whimsical.com/ocn7/ocn-escola-biblica-GgrjZLEXpFtuzvGrxYkM7b">
                    <Workflow className="size-4" />
                    Mapa Mental
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
                  <LinkSmall href="https://www.youtube.com/watch?v=EZ5LTlriVLs">
                    <SquarePlay className="size-4" />
                    Isaias 1-39
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=tAWKUvWe5JI">
                    <SquarePlay className="size-4" />
                    Isaias 40-66
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=K8iwowbjX6c">
                    <SquarePlay className="size-4" />
                    Os Profetas
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
                  <LinkSmall href="https://drive.google.com/file/d/1Ec3TyXjnIf6E47P14RMb-VlU1VOArSmv/view?usp=sharing">
                    <FileImage className="size-4" />
                    L7: Denúncia
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/148LwXZXPjLzalB8tIvD4FdRBoMuBlN7o/view?usp=sharing">
                    <FileImage className="size-4" />
                    L8: Vitória
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1d9kmUZLOJaCfNwWHdb1ZsSwijIt16_rW/view?usp=sharing">
                    <FileImage className="size-4" />
                    L9: Doença e Cura
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1YJyd0spch9zGcCMYyhbepUSUlBbM40CX/view?usp=sharing">
                    <FileImage className="size-4" />
                    L10: Grande És Tu, Senhor!
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1XMXBSyn80NCGdJ5XnV8zvua74YlXP95B/view?usp=sharing">
                    <FileImage className="size-4" />
                    L11: Salvação do Senhor
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1qTk84wNiquCVfA_jPe_5wTIQMnsq1e7h/view?usp=sharing">
                    <FileImage className="size-4" />
                    L12: Promessas e Alertas
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1Ml7XfT9qxI9KudA6mnlqFf2cIRj0sEKb/view?usp=sharing">
                    <FileImage className="size-4" />
                    L13: Teu É o Reino
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
                  <LinkSmall href="https://drive.google.com/file/d/1_u0Ct6jm2zGW8MYmCMC4NJdE7Q5iJ8_I/view?usp=sharing">
                    <FileText className="size-4" />
                    L7: Denúncia
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/12TsyZYyAQ3pu0eQiv3MeZTIHVKD523Nq/view?usp=sharing">
                    <FileText className="size-4" />
                    L8: Vitória
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1E5bsiokQ8OMwSOi6ajnioKHWhoDEsArY/view?usp=sharing">
                    <FileText className="size-4" />
                    L9: Doença e Cura
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/14jk3XBKDdZUaqBIlYVbumz_MhXGtM6sU/view?usp=sharing">
                    <FileText className="size-4" />
                    L10: Grande És Tu, Senhor!
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1YU2ZQuCno-ibP08LDlc8IXEqluyMh_Ag/view?usp=sharing">
                    <FileText className="size-4" />
                    L11: Salvação do Senhor
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1_b1csbm4NiS9lIhWdBNIJfsxN1-RCngI/view?usp=sharing">
                    <FileText className="size-4" />
                    L12: Promessas e Alertas
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1y6-38yn5Y4n10LXZyhF47TioRGlszj0D/view?usp=sharing">
                    <FileText className="size-4" />
                    L13: Teu É o Reino
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
            </TableRow>
          </TableHeader>
        </Table>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2>Sumário</H2>
        <UL className="mt-0 space-y-2 sm:space-y-2">
          <SummaryLi>
            <a href="#lesson-7">
              Lição 7 – Denúncia do Pecado e Livramento de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-toda-impiedade-e-castigada">
              1. Toda Impiedade É Castigada
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-a-repreensao-e-o-livramento-de-jerusalem">
              2. A Repreensão e o Livramento de Jerusalém
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-o-reinado-do-messias-e-a-libertacao-do-povo-de-deus">
              3. O Reinado do Messias e a Libertação do Povo de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-a-ira-de-deus-contra-as-nacoes-e-o-dia-da-igreja-triunfante">
              4. A Ira de Deus Contra as Nações e o Dia da Igreja Triunfante
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-8">Lição 8 – Deus Não Deixa o Inimigo Vencer</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-quando-tudo-parece-que-esta-acabado">
              1. Quando Tudo Parece Que Está Acabado
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-a-petulancia-do-inimigo">
              2. A Petulância do Inimigo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-na-hora-da-angustia-consulte-a-deus">
              3. Na Hora da Angústia, Consulte a Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-deus-responde-e-age">4. Deus Responde e Age</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-9">Lição 9 – Doença, Cura e Alerta de Deus</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-9-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-9-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-9-a-casa-deve-estar-em-ordem">
              1. A Casa Deve Estar em Ordem
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-9-deus-e-a-unica-solucao">
              2. Deus É a Única Solução
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-9-deus-responde-as-oracoes">
              3. Deus Responde as Orações
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-9-atencao-nao-baixe-a-guarda">
              4. Atenção! Não Baixe a Guarda
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-9-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-10">Lição 10 – Quão Grande És Tu, Senhor!</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-10-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-10-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-10-a-majestade-de-deus">1. A Majestade de Deus</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-10-deus-prova-sua-grandeza">
              2. Deus Prova Sua Grandeza
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-10-o-senhor-e-o-unico-deus">
              3. O Senhor É o Único Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-10-deus-e-maior-do-que-os-nossos-inimigos">
              4. Deus É Maior do Que os Nossos Inimigos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-10-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-11">Lição 11 – A Salvação Vem do Senhor</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-11-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-11-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-11-o-servo-do-senhor-e-os-gentios">
              1. O Servo do Senhor e os Gentios
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-11-o-servo-do-senhor-ultrajado-mas-fiel">
              2. O Servo do Senhor Ultrajado, Mas Fiel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-11-a-redencao-e-a-restauracao-de-israel">
              3. A Redenção e a Restauração de Israel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-11-o-sofrimento-e-a-gloria-do-messias">
              4. O Sofrimento e a Glória do Messias
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-11-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-12">Lição 12 – Promessas e Alertas</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-12-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-12-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-12-o-futuro-glorioso-de-siao">
              1. O Futuro Glorioso de Sião
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-12-busque-a-salvacao-enquanto-pode">
              2. Busque a Salvação, Enquanto Pode
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-12-deus-e-contra-os-guias-cegos-e-a-idolatria">
              3. Deus É Contra os Guias Cegos e a Idolatria
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-12-o-jejum-que-deus-quer-e-a-maldade-de-israel">
              4. O Jejum Que Deus Quer e a Maldade de Israel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-12-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-13">Lição 13 – Teu É o Reino e Tua É a Glória</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-13-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-13-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-13-a-nova-jerusalem-e-sua-gloria">
              1. A Nova Jerusalém e Sua Glória
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-13-um-novo-comeco">2. Um Novo Começo</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-13-um-deus-que-trabalha-para-o-que-nele-espera">
              3. Um Deus Que Trabalha Para o Que nEle Espera
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-13-novos-ceus-e-nova-terra">
              4. Novos Céus e Nova Terra
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-13-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#editorial">Editorial</a>
          </SummaryLi>
        </UL>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 7 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-7">Lição 7 – Denúncia do Pecado e Livramento de Deus</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">Texto áureo: Isaías 30.18</P>
          <P className="mt-0">
            Demonstrar a denúncia do pecado e o livramento de Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-introducao">Introdução</H3>

          <P className="">
            Encontramos nos capítulos em referência (cap. 28-35) que, naquele
            momento, o propósito de Deus era evidenciar princípios e aplicações
            envolvidos no relacionamento entre Ele e o povo de Israel. O povo de
            Israel, os seus sacerdotes e profetas andavam continuamente ébrios
            pelo vinho e pela soberba (28.1,7), agindo de maneira rebelde.
            Assim, foi necessário demonstrar que, quando o povo rejeita a
            palavra e a aliança, segue-se a destruição, mas a fé que confia em
            um Deus soberano e amoroso é o único caminho a perseguir.
          </P>
          <P className="">
            Porém, assim como um pai amoroso que repreende e corrige o filho,
            almejando para ele um futuro melhor, Deus age com o seus (Hb 12.5,6;
            Pv 3.12). O profeta Isaías foi porta-voz do Senhor para repreender e
            alertar o povo de Israel sobre o juízo vindouro, contudo, Deus
            preservaria alguns de Judá, o remanescente, e seria seu protetor.
            Conforme Isaías pregava a mensagem divina aos seus contemporâneos,
            Deus catalogava palavras de conforto e esperança aos futuros
            crentes, deixando claro que no grande dia &quot;virá com poder, e o
            seu braço dominará; eis que o seu galardão está com ele, e diante
            dele vem a sua recompensa&quot; (Is 40.10).
          </P>
          <P className="">
            Assim, nesta oportunidade, você será conduzido a observar os pecados
            do povo de Israel e Judá outrora denunciados pelo profeta Isaías, e
            o cogente livramento de Deus, quer seja hodiernamente ou no grande
            Dia, àqueles que se arrependem e o buscam verdadeiramente.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-toda-impiedade-e-castigada">
            1. Toda impiedade é castigada
          </H3>
          <P className="">
            Deus governa a história mundial sendo soberano sobre toda situação.
            Mesmo diante de tal assertiva encontramos Judá de forma deliberada,
            se recusando a confiar no caminho do Senhor para confiar no exército
            do Egito. E de outro lado, Samaria que era conhecida pela sua
            devassidão, deixando exalar o odor do pecado do orgulho, como
            bêbados cambaleando em direção da sua própria condenação.
          </P>
          <P className="">
            Diante da falta de arrependimento, Deus enviou o rei da Assíria para
            destruir Efraim e levar as dez tribos cativas (28.2), assim como uma
            tempestade impetuosa a Assíria arrasa com o povo impenitente (2Rs
            17). Da mesma maneira, Judá cometeu os mesmos pecados de Efraim, e
            mesmo diante dos avisos do Senhor, eles decidiram endurecer sua
            cerviz (2Rs 17.13,14). Pela sua rejeição à palavra do Senhor, eles
            mesmos caíram para trás, tropeçando na Pedra preciosa de esquina
            (Messias) (28.16) recebendo, então, o &quot;dilúvio do açoite&quot;
            como castigo, que pode referir-se ao exílio quando do ataque
            babilônio (2Rs 25).
          </P>
          <P className="">
            Quando a santificação é negligenciada, o resultado será uma colheita
            catastrófica (Pv 22.8; Gl 6.6,7), assim, para uma boa colheita é
            imprescindível uma boa semeadura e é necessária a prática da
            perseverança. Muitos até iniciam a semeadura para colher em Deus,
            entretanto abandonam o processo antes da colheita. A santificação,
            sem a qual ninguém verá o Senhor (Hb 12.14), e a boa semeadura são
            inegociáveis na vida cristã!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-a-repreensao-e-o-livramento-de-jerusalem">
            2. A repreensão e o livramento de Jerusalém
          </H3>
          <P className="">
            No decorrer do reinado de Ezequias, rei de Judá, toda a Palestina
            estava em uma embaraçosa submissão à Assíria. Além do mais, as
            atitudes do governo da Babilônia geravam incertezas sobre a
            manutenção do poder dominador da Assíria. Nesse contexto, Judá se vê
            prestes a ser invadida pelos Assírios, momento em que o rei Ezequias
            frente às alternativas que possuía, que eram: a aliança com o Egito;
            com os Babilônios; ou com o Senhor, toma o caminho do erro, e assim,
            o rei de Judá firma aliança com os egípcios (30.2). Ou seja, Judá
            ergue o estandarte da rebelião.
          </P>
          <P className="">
            Isaías expõe claramente a condição espiritual de Judá: &quot;Porque
            este é um povo rebelde; são filhos mentirosos, filhos que não querem
            ouvir a lei do Senhor. Eles dizem aos videntes: &apos;Não tenham
            mais visões!&apos; E aos profetas: &apos;Não profetizem para nós o
            que é reto; digam-nos coisas agradáveis, profetizem
            ilusões.&apos;&quot; (Is 30.9,10). É notória a rebeldia, o desprezo
            e rejeição às advertências que provêm de Deus.
          </P>
          <P className="">
            Nos dias atuais, temos encontrado fartamente ensinos que focam nos
            desejos humanos em detrimento da Palavra de Deus. Isso é o
            extraordinário querendo ser como o ordinário, o anormal como o
            normal e a exceção como a regra, são pessoas cheias de si, que não
            querem se adequar as verdades bíblicas, mas preferem se fartar de
            mentiras e engodos do inferno (2Tm 3.1-5).
          </P>
          <P className="">
            Mesmo extemporâneo, o rei Ezequias toma uma atitude de fé, se
            arrepende e busca refúgio em Deus, em consequência ele pôde observar
            que Deus é tão bom quanto sua preciosa palavra (Sl 107.1), e o rei e
            Judá são salvos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-o-reinado-do-messias-e-a-libertacao-do-povo-de-deus">
            3. O reinado do Messias e a libertação do povo de Deus
          </H3>
          <P className="">
            Nesse momento, Isaías retira o foco do ataque iminente da Assíria
            sobre Jerusalém e vai ao tempo de paz. Em meio às injustiças dos
            reinos humanos, o profeta expõe que surgirá um tempo de verdadeira
            paz, momento este que será governado pelo próprio Messias (Reino
            Milenar).
          </P>
          <P className="">
            É cediço que Isaías previu a vinda do Messias e sobre as
            circunstâncias de seu período na Terra, nenhum outro escrito é tão
            integralmente messiânico. O livro de Isaías é comumente conhecido
            como o &quot;Evangelho de Isaías&quot; frente a clareza e tantos
            detalhes sobre a primeira vinda do Messias e remissões a fatos que
            ainda irão se cumprir, a exemplo do reinado milenar de Jesus Cristo.
          </P>
          <P className="">
            No versículo 22 do capítulo 33 de Isaías identifica-se o ideal
            perfeito da teocracia, pois o Senhor é encontrado como aquele que
            possui todos os poderes em sua mão. Ele é o Todo Poderoso (Sl
            62.11), nada escapa do Seu controle, sendo ele o legislador, o
            julgador e executor de todo o mundo. (Lc 1.37).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-a-ira-de-deus-contra-as-nacoes-e-o-dia-da-igreja-triunfante">
            4. A ira de Deus contra as nações e o dia da igreja triunfante
          </H3>
          <P className="">
            A ira de Deus é uma resposta divina à desobediência e pecado do ser
            humano. O apóstolo Paulo introduzindo o tema de sua epístola aos
            Romanos define que: &quot;A ira de Deus se revela do céu contra toda
            impiedade e injustiça dos seres humanos que, por meio da sua
            injustiça, suprimem a verdade.&quot; (Rm 1.18). Assim, o
            derramamento da ira de Deus é necessário porque Ele é santo e justo.
            Logo, não toma o culpado por inocente (Ex 20.7; Ez 18.20; Na 1.2,3)
            e não faz qualquer acepção de pessoas (At. 10.34).
          </P>
          <P className="">
            Nos capítulos 34 e 35, Isaías descreve, respectivamente, a vingança
            do Senhor sobre Edom como tipificando o inimigo escatológico de Deus
            e a restauração de Sião para servir como modelo da realização
            escatológica das promessas. O Senhor virá e salvará o Seu santo
            povo, e então, os olhos dos cegos serão abertos, os ouvidos dos
            surdos se abrirão, os coxos saltarão como cervos e a língua dos
            mudos cantará. (35.4-6) Maranata!
          </P>
          <P className="">
            Em breve chegará o momento, não tardará e nem falhará, em que a
            noiva do Senhor será retirada deste mundo ao encontro do noivo. E
            aquele que deseja fazer parte desse momento triunfantemente
            indescritível, basta crer em Jesus Cristo como seu único, suficiente
            e eterno salvador e mergulhar no oceano da graça de Deus. (Ef 2.8)
            Você aceita?
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-conclusao">Conclusão</H3>
          <P className="">
            Notavelmente, tanto Efraim como Judá se encontravam fora do prumo de
            Deus, recusaram a palavra de repreensão proferida por Isaías e
            perceberam o castigo. A lei da semeadura é vigente e não falha, pois
            o reto Juiz está velando pelos seus princípios.
          </P>
          <P className="">
            Judá se mostrou carnal e rebelde quando preferiu a suposta segurança
            ofertada pelo exército dos egípcios em detrimento às firmes
            promessas de Deus. Tal atitude revelou o caráter imundo (28.8) de
            Judá, que se esconde da verdade atrás de mentiras. Mesmo diante
            dessa atitude, Deus estava atento ao clamor do remanescente, e
            quando o clamor surgiu e o arrependimento fluiu, Deus se apresentou
            com seu amor incondicional e livrou Seu povo.
          </P>
          <P className="">
            No livro de Isaías encontramos o caráter messiânico e o apocalíptico
            fluindo de maneira cristalina reiteradas vezes, por influência
            disso, somos levados a viajar no tempo passado e futuro. Isso nos
            gera o desejo e a certeza do grande Dia do Senhor.
          </P>
          <P className="">
            Assim, devemos refletir se estamos posicionados com os olhos fitos
            nos preceitos divinos, em transformação diária pela santificação e
            plantando sementes agradáveis ao Senhor e ao próximo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 8 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-8">Lição 8 – Deus Não Deixa o Inimigo Vencer</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">Demonstrar que Deus sempre vence.</P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 37.20</P>
          <P className="">
            No décimo quarto ano do rei Ezequias, o Reino de Judá foi invadido e
            atacado pelo Reino Assírio, então governado pelo rei Senaqueribe. O
            grande exército de Senaqueribe realizou uma invasão avassaladora que
            destruiu várias cidades de Judá, seguindo como um rolo compressor
            rumo à Jerusalém. Ao chegarem em Jerusalém, capital de Judá, o Rei
            Assírio envia seu conselheiro real para impor medo aos líderes e ao
            povo, momento em que Deus foi afrontado pelo porta-voz do rei
            Senaqueribe.
          </P>
          <P className="">
            Sabemos que dias maus são inevitáveis na vida do ser humano, não
            sendo diferente na vida do cristão (Ef. 6.13), que por vezes se
            depara com momentos que parecem sitiá-lo. Ora, Jerusalém estava em
            quarentena forçada, não conseguia ver qualquer porta de escape,
            assim também é o olhar do cristão quando é trincheirado pelo
            inimigo, que age das formas mais perversas possíveis, zombando e
            tentando tirar a fé. Entretanto, são nesses momentos que o cristão
            deve replicar a atitude do rei Ezequias (37.1,2,14) e confiar
            plenamente do Senhor que nunca perdeu e nunca perderá uma batalha.
          </P>
          <P className="">
            Com efeito, ao olhar para a narrativa dos capítulos 36 e 37, o
            leitor perceberá que Deus não deixa o inimigo vencer. O
            comportamento do cristão diante das adversidades pode ser moldado
            com base no exemplo do rei Ezequias. Em vez de ceder ao medo e ao
            desespero, o cristão deve confiar plenamente no Senhor e na Sua
            promessa de cuidado e vitória. Ele deve buscar a Deus em oração,
            buscando Sua direção e força para enfrentar as situações
            desafiadoras. Além disso, o cristão deve permanecer firme em sua fé,
            não permitindo que as provocações do inimigo abalem sua confiança no
            poder de Deus. Assim, &quot;conheçamos e prossigamos em conhecer o
            Senhor!&quot; (Os 6.3).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-quando-tudo-parece-que-esta-acabado">
            1. Quando tudo parece que está acabado
          </H3>
          <P className="">
            Os capítulos 36 e 37 do Livro de Isaías descreve o cerco de
            Jerusalém realizado pelo Rei Senaqueribe. Ele subiu ao trono em 705
            a.C., depois da morte de seu pai Sargão II. Seu reinado foi marcado
            por atrocidades e desrespeito à vida humana. Nesse contexto outro
            personagem nos chama a atenção: Rabsaqué, conselheiro do rei
            Senaqueribe. Ele foi o porta-voz das afrontas proferidas pelo rei,
            face o rei Ezequias e ao Senhor.
          </P>
          <P className="">
            Jerusalém agora está cercada pelo grande exército de Senaqueribe,
            que contava com no mínimo cento e oitenta e cinco mil soldados, as
            cidades circunvizinhas estão destruídas e os sobreviventes levados
            cativos, o medo e a insegurança tomam conta do coração do povo e de
            seus líderes. O temor é majorado diante das palavras de Rabsaqué,
            porta-voz e conselheiro real de Senaqueribe, quando em alta voz,
            junto ao aqueduto do açude superior, declara petulantemente seu
            poderio e a suposta pequenez de Jerusalém e de seu Deus. Antes de
            tudo isso, em 2Rs 18.13.16, o texto bíblico deixa claro que o Rei
            Assírio havia traído o Rei de Judá quando, aparentemente, aceita a
            sujeição de Ezequias, contudo repentinamente revigora as investidas
            contra Jerusalém.
          </P>
          <P className="">
            O rei Ezequias vinha agindo diferentemente de seu pai, Acaz, que foi
            um fantoche nas mãos dos assírios, obedecendo os seus mandos e
            desmandos, levando o povo de Judá à idolatria e pagando altos
            tributos. Ezequias reteve os tributos que outrora eram pagos aos
            assírios e reprimiu a idolatria do meio do povo em Judá,
            postes-ídolos foram derrubados, destruiu os santuários pagãos,
            quebrou as colunas, transformou tudo em pedaços. Essas atitudes,
            fizeram com que o rei Senaqueribe avançasse em uma campanha militar
            contra Judá. Diante desse contexto deve-se firmar na mente e coração
            do cristão que, quando a fase está difícil, Deus está no controle de
            tudo (Is 43.13).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-a-petulancia-do-inimigo">
            2. A petulância do inimigo
          </H3>
          <P className="">
            As palavras confrontadoras do rei Senaqueribe, proferidas pelo seu
            porta-voz Rabsaqué, demonstram a petulância do inimigo. Sua fala
            expressa que confiar no Egito é se colocar numa posição de
            desesperança (36.4-7), que, pelo olhar assírio, o próprio Senhor
            havia se insurgido conta o povo e ordenado o ataque, vez que teve
            seus altares reduzidos (36.7,10; 2Rs 18.4) e expôs a pequenez
            quantitativa do exército de Jerusalém (36.8,9). Não sendo suficiente
            as palavras de arrogância perpetrada face ao rei Ezequias, o
            porta-voz, agora, dirige-se ao povo e oferece uma oferta de paz, sob
            a condição de rendição, declarando que o povo não deveria dar
            ouvidos a Ezequias nem a Deus, pois nem um nem outro teria
            habilidade para livrar Jerusalém (36.15-20).
          </P>
          <P className="">
            O erro de Rabsaqué foi a blasfêmia proferida no verso 18: &quot;Não
            deixem que Ezequias os engane, dizendo: &apos;O Senhor nos
            livrará.&apos; Será que os deuses das nações puderam livrar, cada um
            a sua terra, das mãos do rei da Assíria?&quot;. O Senhor ouviu
            (37.4,6,7) quando Rabsaqué o igualou aos deuses das demais nações. O
            Senhor é incomparável, não há nada nem ninguém que se compare ao
            nosso Deus (Is 40.18,25).
          </P>
          <P className="">
            O cristão enfrenta constantemente afrontas do inimigo espiritual. O
            mundo, com seus valores e ensinamentos centrados no materialismo e
            na autoconfiança, tenta influenciar os servos de Deus. No entanto,
            mesmo diante da grandiosidade de Deus, Ele se torna perceptível para
            aqueles que o buscam sinceramente. É necessário que o cristão esteja
            atento a essas influências negativas e se mantenha firme na
            dependência do Senhor. Ao buscar uma comunhão íntima com Deus, ele
            encontrará força, sabedoria e discernimento para resistir às
            tentações do mundo e permanecer fiel aos princípios bíblicos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-na-hora-da-angustia-consulte-a-deus">
            3. Na hora da angústia, consulte a Deus
          </H3>
          <P className="">
            O povo de Jerusalém se encontrava em uma situação de extrema
            adversidade diante do exército assírio que os cercava. Com uma força
            militar imponente e um clima de medo e tensão, a cidade estava
            ameaçada de total destruição. A pressão psicológica imposta pelo
            inimigo era insuportável, afetando profundamente a mente e o coração
            do povo. Ao observarem as cidades vizinhas totalmente arrasadas e ao
            olharem para o Egito em busca de esperança, só encontravam
            desesperança. Diante desse panorama desafiador, surge a questão:
            qual seria o próximo passo?
          </P>
          <P className="">
            Nesse momento crucial, Ezequias toma a melhor atitude possível: ele
            se prostra diante do Senhor em oração. O rei rasga suas vestes e se
            cobre de pano de saco (37.1), expressando angústia e arrependimento.
            Ele se humilha diante do Rei dos reis, reconhecendo sua própria
            pequenez e fragilidade. Ao mesmo tempo, Ezequias ordena que seus
            servos informem Isaías sobre as palavras petulantes do rei
            Senaqueribe, buscando uma resposta de Deus por meio do profeta. E,
            de fato, Deus responde à oração de Ezequias por intermédio de
            Isaías.
          </P>
          <P className="">
            Em tempos de adversidade, devemos seguir o exemplo do rei de Judá,
            buscando refúgio no lugar adequado e nos aproximando de pessoas
            tementes a Deus, que possuam experiência, sabedoria e conhecimento
            espiritual. Quando a aflição se intensifica, não devemos hesitar em
            buscar o conselho e a orientação daqueles que são instrumentos de
            Deus. Como vemos no livro de Isaías 41:13, não estamos sozinhos,
            pois o próprio Deus nos garante que Ele está ao nosso lado.
            Portanto, diante de obstáculos difíceis e batalhas árduas, não
            hesite em buscar ajuda. Lembre-se de que há apoio disponível e você
            não precisa enfrentar as dificuldades sozinho.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-deus-responde-e-age">4. Deus responde e age</H3>
          <P className="">
            Quando Ezequias recebe pela segunda vez as palavras de afronta de
            Senaqueribe, ele age sabiamente ao buscar a Deus através da oração e
            ao apresentar a carta recebida. O Senhor responde a Ezequias por
            meio do profeta Isaías, assegurando-lhe que Senaqueribe e seu
            exército não entrarão em Jerusalém, e que nem mesmo uma flecha será
            lançada contra a cidade. Além disso, é declarado que Senaqueribe
            retornará pelo mesmo caminho pelo qual avançou (37.34).
          </P>
          <P className="">
            Agora, um ato divino de proporções maciças acontece: o Anjo do
            Senhor, naquela mesma noite, fere cento e oitenta e cinco mil
            soldados assírios de uma única vez, criando um cenário de espanto e
            desespero para os sobreviventes e de êxito pós-batalha para o povo
            de Jerusalém. Os meios sobrenaturais utilizados pelo Senhor nos
            relembram a morte dos primogênitos no Egito (Êxodo 12.12). Assim,
            Deus luta em favor do seu povo, cumprindo sua fidelidade à promessa
            feita a Davi (37.35).
          </P>
          <P className="">
            Mesmo diante daquela visão perturbadora, Senaqueribe persiste com o
            coração endurecido e retorna a Nínive. Lá, enquanto adorava seu
            deus, é assassinado à espada por seus próprios filhos, Adrameleque e
            Sarezer, que fogem deixando como sucessor o filho Esar-Hadom.
            Enquanto Senaqueribe encontra a morte no templo de seu deus
            Nisroque, do outro lado, Ezequias encontra a vida no templo de seu
            Deus!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-conclusao">Conclusão</H3>
          <P className="">
            A Assíria revelou sua prepotência e orgulho devido à sua habilidade
            na guerra e ao seu poderio militar. Eles confiavam completamente na
            força humana e nos deuses feitos por mãos humanas, que eram
            impotentes. No entanto, aqueles que confiam em Deus nunca serão
            abalados (Sl 125.1), mesmo que aparentemente não possuam habilidades
            ou forças visíveis.
          </P>
          <P className="">
            Às vezes, os caminhos percorridos pelos cristãos podem parecer
            sombrios, como se não houvesse saída, e o inimigo pode parecer maior
            do que realmente é. A petulância e a prepotência do inimigo com suas
            investidas podem afetar psicologicamente aqueles que resistem a tais
            ataques.
          </P>
          <P className="">
            No entanto, Deus nos chama a confiar em Sua Palavra (Sl 127.1,2), a
            depender exclusivamente d&apos;Ele, lembrando sempre que o Guarda de
            Israel nunca dorme nem cochila (Sl 121.4). O Senhor tem levantado
            diariamente pessoas para amar e servir, com o propósito de
            demonstrar Seu cuidado por meio da união.
          </P>
          <P className="">
            Aconteça o que acontecer, independentemente das circunstâncias, a
            realidade é que Deus nunca perde uma batalha. Portanto, podemos
            desfrutar de verdadeira segurança e felicidade provenientes da
            maravilhosa graça do Senhor. Podemos declarar, mesmo sendo fracos:
            &quot;Eu sou forte&quot; (Jl 3.10).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 9 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-9">Lição 9 – Doença, Cura e Alerta de Deus</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-9-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Destacar a cura do rei Ezequias e a necessidade de se manter alerta.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-9-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 38.16</P>
          <P className="">
            O rei Ezequias encontra-se agora moribundo, pois padecia de uma
            enfermidade mortal. Esse prólogo histórico está elencado em 2Rs
            20.1-11, 2Cr 32.24-31 e no capítulo 38 de Isaías, texto que
            estudaremos nesta lição juntamente com o capítulo 39.
          </P>
          <P className="">
            Não se sabe ao certo, mas é plausível dizer que tal fato pode ter
            ocorrido antes do cerco de Jerusalém pelos assírios. Entretanto, o
            que podemos afirmar é que o rei Ezequias foi acometido por uma
            doença que fatalmente o levaria à morte, o texto bíblico não expõe
            qual era a doença, mas sabemos que um dos sintomas era o surgimento
            de úlcera. É exatamente nesse momento que o Senhor ordena que o
            profeta Isaías fosse até a presença de Ezequias e lhe avisasse que
            ele deveria colocar a sua casa em ordem, pois logo morreria. Diante
            do aviso, Ezequias clama a Deus pedindo socorro e chora
            copiosamente. Então, antes que o profeta Isaías houvesse saído da
            cidade (2Rs 20.4), Deus ordena que ele retorne e diga para Ezequias:
            &quot;Ouvi a sua oração e vi as suas lágrimas&quot; (38.5).
          </P>
          <P className="">
            A ordem do Senhor para que o profeta retornasse demonstra que o
            Senhor ouve o clamor do cristão (Jr 29.12,13). A Palavra de Deus
            impulsiona os crentes a orarem constantemente (Ef. 6.18), não
            desanimando, mas confiantes de que no momento certo o Senhor virá
            com a solução (1Pe 5.7). Ou seja, a oração demonstra confiança em
            Deus (Sl 20.7; Jr 17.7).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-9-a-casa-deve-estar-em-ordem">
            1. A casa deve estar em ordem
          </H3>
          <P className="">
            O termo &quot;colocar a casa em ordem&quot; remete à vida familiar,
            ou seja, à prática diária voltada ao discipulado e à vivência da fé
            no lar. Esse termo nos ajuda a compreender que Deus não se preocupa
            apenas com nossa vida espiritual, mas também com a vida familiar,
            incluindo o relacionamento entre marido e mulher e a criação dos
            filhos (Gn 18.19; Dt 6.2,7; Pv 22.6; Ef 5.22,25; 6.1,4).
          </P>
          <P className="">
            O Senhor conhecia a deficiência do rei Ezequias no cuidado com sua
            família, mesmo sendo um homem de fé (2Rs 18.5). Ele tinha a falha da
            negligência familiar, um erro que afeta inúmeros lares. O rei
            deveria se preparar para passar o bastão, realizar uma organização
            sucessória, mas isso não aconteceu. Após receber a notícia de que
            viveria mais quinze anos, Ezequias passou a pensar apenas em si
            mesmo e desprezou as gerações futuras (2Rs 20.19). Como resultado,
            ele gerou um filho chamado Manassés, que se tornou conhecido como o
            pior rei de Judá (2Rs 21.1-18; 2Cr 33.1-20). Suas ações foram
            completamente contrárias às de seu pai, chegando ao ponto de
            praticar o horrível ato de sacrificar seu próprio filho.
          </P>
          <P className="">
            No mundo atual, vivemos em tempos de instabilidade de valores, onde
            o certo e o errado mudam constantemente e com grande facilidade. No
            entanto, os valores expostos na Palavra de Deus são imutáveis e
            constituem a última palavra e o único manual para a vida familiar.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-9-deus-e-a-unica-solucao">
            2. Deus é a única solução
          </H3>
          <P className="">
            Ao receber a notícia de que morreria, Ezequias vira o rosto para a
            parede em sinal de dependência exclusiva de Deus, como se dissesse
            que não existe mais ninguém além do Senhor. Ele ora e, aos prantos,
            clama fazendo remissão às suas atitudes que expressaram lealdade a
            Deus, esperando que Ele leve isso em conta ao dar seu veredito.
          </P>
          <P className="">
            Nas três passagens bíblicas que relatam a história da doença de
            Ezequias e sua maravilhosa cura, identificamos que a enfermidade que
            acometia o rei era mortal (Is 38.1; 2Rs 20.1; 2Cr 32.24). Seu estado
            de saúde era tão grave que um dos sintomas era uma úlcera (Is
            38.21), que provavelmente não conseguia cicatrizar. Ou seja, aos
            olhos humanos, não havia mais solução, ele estava no leito da morte.
          </P>
          <P className="">
            Diante do clamor e das lágrimas de arrependimento de Ezequias, o
            Senhor ordena que Isaías retorne e libere uma palavra de cura e
            sobrevida. Quando buscamos respostas na fonte correta, a solução é
            apenas uma questão de tempo. Aqueles que colocam sua fé em Deus
            podem descansar seguros, ao ponto de enxergar paz em meio à guerra,
            sabendo que os milagres são para os dias de hoje tanto quanto foram
            para o tempo de Jesus Cristo (Is 53.5; Mt 4.23; Tg 5.14,15). Deus é
            &quot;aquele que cura vocês&quot; (Ex 15.26).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-9-deus-responde-as-oracoes">
            3. Deus responde as orações
          </H3>
          <P className="">
            Deus fez promessas a Davi e nunca as abandonou, nem mesmo em relação
            aos seus filhos. Ele sempre cumpre suas promessas e permanece fiel
            em todos os momentos. A oração de Ezequias mostra que, em tempos de
            aflição, os seres humanos recorrem ao poder de suas boas ações como
            uma forma de barganhar com Deus. O rei clama: &quot;Lembra-te de que
            tenho andado diante de ti com fidelidade, com coração íntegro, e
            tenho feito o que é reto aos teus olhos&quot; (38.3). No entanto,
            prevalece a misericórdia amável de Deus, que ouve nossos clamores,
            mesmo quando baseados em presunções hipócritas.
          </P>
          <P className="">
            Ao se render a Deus em oração e se colocar em uma atitude de
            rendição, o rei Ezequias recebeu uma resposta instantânea ao seu
            clamor. A resposta foi rápida, pois &quot;Antes que Isaías saísse do
            pátio central, a palavra do Senhor veio a ele, dizendo: Volte e diga
            a Ezequias...&quot; (2Rs 20.4,5a). As respostas e soluções de Deus
            ocorrem no tempo adequado (Rm 8.28), sempre ajustadas a cada
            situação específica. Portanto, não devemos ficar ansiosos, mas
            confiantes naquele que tem todo o poder (Fl 4.6).
          </P>
          <P className="">
            No cântico de louvor pela restauração de sua saúde (38.9-20),
            Ezequias reconhece a soberania de Deus. O salmo combina sua oração
            anterior e a cura recebida com toques de lamento (38.10-14) e
            gratidão ao Senhor (38.15-20). O cântico revela que seu espírito
            voltou à posição de humildade (2Cr 32.26).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-9-atencao-nao-baixe-a-guarda">
            4. Atenção! Não baixe a guarda
          </H3>
          <P className="">
            A notícia da cura maravilhosa e do sinal realizado para confirmar o
            milagre se espalhou rapidamente, chegando aos ouvidos do rei da
            Babilônia. O Senhor fez o sol retroceder dez graus (Is 38.7,8) para
            demonstrar a Ezequias que Ele é fiel à Sua palavra. Esse sinal
            atraiu especialmente a atenção dos babilônios, que eram conhecedores
            da astronomia (2Cr 32.31).
          </P>
          <P className="">
            Em resposta, o rei babilônico Merodaque-Baladã enviou cartas e
            presentes a Ezequias. No entanto, mesmo com acertos anteriores, o
            rei Ezequias continuou tomando decisões que revelaram sua
            instabilidade quando estava sob pressão e tentação. Ele mostrou toda
            a sua riqueza dada por Deus (2Cr 32.27-29; Is 39.4) e se mostrou
            aberto à ideia de uma aliança com os babilônios.
          </P>
          <P className="">
            Diante disso, Isaías profetizou o exílio babilônico que aconteceria
            nos próximos anos (39.6,7). Mesmo diante do oráculo de Deus e da
            acusação profética, Ezequias se mostrou indiferente em relação às
            gerações futuras, pensando: &quot;Haverá paz e segurança em meus
            dias&quot; (39.8).
          </P>
          <P className="">
            O inimigo espiritual ataca de forma sorrateira nos pontos mais
            sensíveis de cada cristão, especialmente após uma vitória. Esse é um
            momento estratégico, pois a euforia pode dominar os sentimentos e o
            cristão pode se encontrar desprevenido. É necessário estar vigilante
            durante nossa jornada neste mundo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-9-conclusao">Conclusão</H3>
          <P className="">
            A família é uma instituição divina, criada por Deus (Gn 2.24) e
            consequentemente protegida por Ele. Podemos verificar essa afirmação
            quando o profeta Isaías recebe a ordem do Senhor para que o rei
            Ezequias colocasse sua casa em ordem, pois ele iria morrer devido à
            doença que havia contraído. Diante da iminência da morte, Ezequias
            toma a atitude correta e busca, exclusivamente em Deus, a solução
            para sua enfermidade mortal. Quando as lágrimas de arrependimento
            escorrem pelo rosto do cristão, Deus move os céus e até mesmo o sol
            para confirmar suas promessas.
          </P>
          <P className="">
            Podemos identificar que Deus atendeu ao pedido de Ezequias (não
            morrer), mas Ezequias não atendeu ao pedido de Deus (colocar sua
            casa em ordem), pois falhou em preparar uma sucessão pacífica e
            baixou a guarda diante das sutilezas do inimigo.
          </P>
          <P className="">
            Nos relatos bíblicos sobre a vida, morte e sucessão do rei Ezequias,
            Deus registra ensinamentos valiosos e aplicáveis atualmente, tanto
            para a esfera individual quanto familiar. Esses ensinamentos
            frutificarão em justiça (Fl 1.9-11) na vida daqueles que buscam
            conhecimento na Verdade (Jo 17.17) e a praticam (Tg 1.22).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 10 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-10">Lição 10 – Quão Grande És Tu, Senhor!</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-10-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">Demonstrar a grandiosidade do Senhor.</P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-10-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 40.22,23</P>
          <P className="">
            O livro do profeta Isaías é comumente conhecido entre os estudiosos
            como a &quot;mini Bíblia&quot;, pois possui 66 capítulos, que se
            assemelham aos 66 livros da Bíblia. Os primeiros 39 capítulos tratam
            diretamente da relação entre o Senhor e os judeus, enquanto os
            próximos 27 falam sobre a graça, a salvação e a segunda vinda do
            Messias, abrangendo também os gentios. Essa divisão curiosamente
            reflete o cânon bíblico, no qual o Antigo Testamento possui 39
            livros direcionados principalmente aos judeus, e os próximos 27
            abordam a graça, a salvação e a volta de Jesus, sendo destinados não
            apenas aos judeus, mas também aos gentios. Assim, iniciaremos
            resumidamente os estudos sobre as profecias de salvação, graça e
            esperança.
          </P>
          <P className="">
            Neste momento, o livro revela a supremacia e a grandiosidade de Deus
            diante de tudo e todos, tanto no passado, no presente quanto no
            futuro (40.12-41.29). Deus é o perfeito criador (42.5; 45.18), cujas
            palavras são eternas (40.8), Ele guarda fielmente o Seu povo
            (40.11), possui todo o poder (onipotência) (40.12) e todo o
            conhecimento (onisciência) (40.13,14). Nada e ninguém se compara ao
            Senhor. Portanto, toda adoração deve ser direcionada exclusivamente
            a Deus, que declara: &quot;Eu sou o primeiro e eu sou o último, além
            de mim não há Deus&quot; (44.6).
          </P>
          <P className="">
            Como não se render diante da majestade de um Deus que demonstra Sua
            grandeza e sabedoria por meio da criação e da Sua palavra? Portanto,
            quando o cristão se encontrar diante de inimigos aparentemente
            insuperáveis, ele deve clamar ao único Deus que tem o poder para
            derrotar a &quot;Babilônia&quot; como prova de Seu amor e
            fidelidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-10-a-majestade-de-deus">1. A majestade de Deus</H3>
          <P className="">
            Da mesma forma que a mensagem de desastre chegou no passado
            (39.5-7), também veio a mensagem de conforto (40.1,2). O livro do
            profeta Isaías descreve a promessa de libertação para Israel,
            consolando o povo diante do exílio e antecipando o fim dos
            cativeiros em Babilônia. Essa mensagem anunciava o fim do sofrimento
            causado pelo castigo divino e a chegada das bênçãos e da salvação. É
            evidente a atemporal sabedoria de Deus, revelando que Ele não está
            sujeito ao tempo, mas é o Criador do tempo (Ap 4.11).
          </P>
          <P className="">
            No campo da apologética, o escritor Ralph O. Muncaster, em sua obra
            &quot;Examine as Evidências&quot;, apresenta várias afirmações
            científicas que já foram declaradas pela Palavra do Senhor no
            passado. Um exemplo notável é o formato da Terra, que, mesmo antes
            da afirmação de Copérnico no século XV/XVI, a maioria acreditava que
            a Terra era plana, seguindo o modelo geocêntrico aristotélico. No
            entanto, a Bíblia já afirmava, por volta de 700 a.C, no livro de
            Isaías 40.22, o formato circular da Terra. Isso mostra claramente a
            onisciência de Deus diante do limitado conhecimento humano.
          </P>
          <P className="">
            O Senhor é incomparável e superior a qualquer ídolo. Ele não apenas
            age em favor daqueles que nEle esperam, mas também exerce
            constantemente Seu atributo de onipotência, renovando as forças
            daqueles que O aguardam (40.28-31).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-10-deus-prova-sua-grandeza">
            2. Deus prova Sua grandeza
          </H3>
          <P className="">
            &quot;Não tema, [...] não fique com medo, [...] Eu lhe dou
            forças&quot; (41.10). Essas afirmações revelam claramente a essência
            do compromisso divino e instruem o povo a renunciar ao medo e se
            firmar na presença de Deus. O Senhor promete lutar as batalhas e
            vencer as guerras (2Cr 20.17), libertando assim o Seu povo. Diante
            dessa promessa, o cristão pode confiar que, à medida que a oposição
            do mundo aumenta, sua eficácia diminui (41.12). &quot;Pois eu, o
            Senhor, seu Deus, o tomo pela mão direita e lhe digo: &apos;Não
            tenha medo, pois eu o ajudarei&apos;&quot; (41.13).
          </P>
          <P className="">
            Portanto, a glória pertence ao Senhor e Ele não a compartilha com
            nada nem ninguém (42.8), <em>soli deo gloria</em>. Atribuir glória e
            honra a Deus é uma forma de expressar que Ele é único, eterno,
            exclusivo, inigualável, poderoso e santíssimo Senhor na vida
            daqueles que assim O proclamam. A Ele seja a glória para sempre! (Rm
            11.36).
          </P>
          <P className="">
            O salmista já proclamava que confiar no Senhor é o motivo para
            permanecer firme continuamente (Sl 125.1). Confirmando essa
            afirmação, os versículos 2, 6 e 7 de Isaías 43 revelam as promessas
            de Deus em resgatar Israel e garantir proteção, independentemente do
            tamanho e do poder do inimigo. O Pai Eterno é o mesmo ontem, hoje e
            para sempre. Portanto, lance sobre Ele toda a sua ansiedade (1Pe
            5.7), pois Ele te guardará (43.2) e suprirá todas as suas
            necessidades (Fl 4.19).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-10-o-senhor-e-o-unico-deus">
            3. O Senhor é o único Deus
          </H3>
          <P className="">
            Nos versículos 2 e 3 do capítulo 44 de Isaías, podemos ver Deus
            comparando a si mesmo a uma mãe cuidadosa e protetora que concebeu e
            deu à luz a um filho. Ele promete uma restauração e um avivamento
            intenso, comparando-os às torrentes de águas derramadas sobre o
            sedento e sua posteridade. A restauração após o exílio e a profecia
            do futuro avivamento estavam firmadas pelo único e verdadeiro Senhor
            de toda a história. As Escrituras Sagradas repetidamente ensinam que
            há apenas um Deus verdadeiro (Dt 6.4; Is 43.10-11; 44.6; Rm 3.30; Gl
            3.20; Ap 1.8), existindo em três pessoas distintas: Pai, Filho e
            Espírito Santo (2Co 13.13; 1Jo 5.7), e elas indicam a relação
            imutável que o Senhor mantém com seu povo (Tg 1.17).
          </P>
          <P className="">
            Portanto, não há como comparar o Senhor aos ídolos, objetos que
            dependem da força do braço humano para serem confeccionados (44.12)
            e que não podem fazer nada, exceto serem lançados no fogo e servirem
            de lenha (44.14-19). O profeta Isaías expõe a loucura e a insensatez
            da idolatria, mostrando que são obras das mãos humanas, como
            &quot;espantalhos&quot; que não falam e não podem se locomover (Jr
            10.3-5).
          </P>
          <P className="">
            A compreensão de que o Senhor é o único Deus nos leva a uma comunhão
            mais íntima, pois entendemos a necessidade de entregar todos os
            nossos pensamentos, sentimentos, atitudes e problemas a Ele. É
            imperativo depositar completamente a nossa vida diante do Senhor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-10-deus-e-maior-do-que-os-nossos-inimigos">
            4. Deus é maior do que os nossos inimigos
          </H3>
          <P className="">
            O Senhor se apresenta como o criador de todas as coisas e,
            consequentemente, como aquele que pode dar continuidade aos seus
            propósitos, sem que ninguém possa detê-lo. Poderia a criatura
            contender com seu criador? Jamais (45.9)! De forma semelhante ao
            descrito no livro de Gênesis (Gn 1.1,2), o Senhor reitera seu poder
            criador (45.18) e demonstra que é capaz de levar adiante o seu plano
            sem qualquer interrupção (Jó 42.2).
          </P>
          <P className="">
            O profeta Isaías anunciou que o tempo de angústia e sofrimento que o
            povo de Israel passaria na Babilônia chegaria ao fim, que o jugo
            babilônico seria quebrado e que as bênçãos logo estariam a caminho.
            As profecias relatam que a Babilônia e seus ídolos seriam derrubados
            pelo Todo-Poderoso através do rei persa Ciro II (45.1). Toda a
            altivez e poder babilônico, juntamente com seus deuses impotentes,
            seriam destruídos diante do infalível plano do Senhor.
          </P>
          <P className="">
            O profeta mais uma vez destaca o cuidado e amor do Senhor pelo seu
            povo, comparando-o ao amor materno (46.3), que é a expressão de amor
            humano mais gratuita que existe até os dias de hoje. O Senhor é
            indiscutivelmente superior a todos, e nenhum inimigo pode escapar de
            suas poderosas mãos. Ele está e continuará cuidando fielmente do seu
            povo. &quot;Mil poderão cair ao seu lado, dez mil à sua direita, mas
            nada o atingirá.&quot; (Sl 91.7)
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-10-conclusao">Conclusão</H3>
          <P className="">
            Só há um Deus vivo e verdadeiro, o Deus criador dos céus e da Terra
            (45.18), o mantenedor da vida (Sl 36.9), aquele que sustenta o
            universo com sua poderosa palavra (Hb 1.3) e que tem o controle dos
            tempos (2Pe 3.8). Para Deus, não há doença incurável, vida
            irrecuperável ou casamento sem solução, pois para Ele todas as
            coisas são possíveis (Mt 19.26). Perseguir o caminho que leva ao
            conhecimento do Senhor é ser fortalecido, pois aqueles que conhecem
            a Deus são um povo forte (Dn 11.32).
          </P>
          <P className="">
            A sorte de Israel foi mudada, como destacado pelo profeta Isaías,
            que ressalta o livramento que o povo alcançaria durante o exílio
            babilônico. Ele revela que o poder de Deus é incomparável e que Seus
            propósitos sempre se cumprirão, e nenhum inimigo tem poder
            semelhante para detê-Lo.
          </P>
          <P className="">
            Entregue sua vida nas mãos de Deus, pois Ele é suficientemente
            amoroso, poderoso e sábio para cuidar, guiar, proteger e salvar
            você. Mesmo que as lutas desta vida cheguem, mesmo que a tempestade
            desabe sobre você e que o inimigo tente impedi-lo, se sua vida
            estiver nas mãos do Senhor, você estará sempre protegido!
            &quot;Guarda-me, ó Deus, pois em Ti me refugio.&quot; (Sl 16.1).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 11 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-11">Lição 11 – A Salvação Vem do Senhor</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-11-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Demonstrar que a salvação vem somente do Senhor Jesus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-11-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 52.7</P>
          <P className="">
            No verso 16, capítulo 10 do evangelho de João, o próprio Cristo
            afirma que: &quot;Ainda tenho outras ovelhas, não deste aprisco.
            Preciso trazer também estas. Elas ouvirão a minha voz e, então,
            haverá um só rebanho e um só pastor.&quot;. O texto revela que
            convém ao Senhor agregar ao seu aprisco ovelhas de outras paragens.
            Deste modo, o conceito de Povo de Deus foi largueado aos gentios
            (povos e nações distintos do povo israelita), possibilitando a
            salvação de todos (Rm 11.1-32). Nesta lição, veremos o profeta
            Isaías destacando o Messias (Servo do Senhor) como o responsável por
            encaminhar as nações a servirem a Deus (49.6), sendo essa missão
            realizada por meio de seu corpo, ou seja, sua igreja (1Co 12.27).
          </P>
          <P className="">
            Durante o exílio babilônico, era previsto que o povo de Israel se
            mostrasse descrente com o livramento do Senhor. Diante disso, Isaías
            repreende a descrença e demonstra que Deus jamais abandona seu povo,
            diferentemente do que ocorreria no futuro, quando os judeus
            rejeitaram a Jesus Cristo (Jo 1.11).
          </P>
          <P className="">
            O Cristo rejeitado pelos judeus é apresentado em Isaías como servo
            sofredor, que padeceria e não seria tratado como ser humano (52.14),
            sem aparência (53.2), desprezado pelos homens (53.3). Mas, mesmo
            diante da dolorosa rejeição, Cristo tomou sobre si as nossas mazelas
            (53.4) e nos curou (53.5), trazendo salvação a todos os homens e
            tornando-se vitorioso eternamente (53.11).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-11-o-servo-do-senhor-e-os-gentios">
            1. O Servo do Senhor e os gentios
          </H3>
          <P className="">
            Até os dias atuais, não seria impróprio dizer que o amor de mãe é o
            mais altruísta que existe entre os seres humanos. Sabe-se que
            existem poucas exceções, mas a regra é a entrega de um amor que não
            espera nada em troca. Em consideração a isso, o Senhor se assemelha
            a uma mulher que nunca, jamais se esqueceria do seu filho
            recém-nascido e que estaria continuamente vigilante, como aquela mãe
            que vela seu filho durante o sono (49.15,16). Este amor é tão
            intenso e incomparável que &quot;[..] Deus prova o seu próprio amor
            para conosco pelo fato de Cristo ter morrido por nós quando ainda
            éramos pecadores.&quot; (Rm 5.8).
          </P>
          <P className="">
            Isaías profetiza sobre o Servo do Senhor (49.3), destacando que ele
            seria o instrumento pelo qual Deus seria adorado por todos,
            inclusive pelos gentios (49.6). Sem qualquer dúvida, a profecia diz
            respeito a Jesus Cristo, o Messias que viria para reconciliar os
            judeus e levar os gentios a servirem ao Senhor dos senhores. Ora, a
            profecia revelada por Deus a Isaías demonstra seu amor salvífico
            tanto por judeus quanto por gentios &quot;[...] Farei também com que
            você seja uma luz para os gentios, para que você seja a minha
            salvação até os confins da terra.&quot; (49.6b).
          </P>
          <P className="">
            A graça do Senhor evidencia a sua misericórdia sobre aqueles que não
            merecem. Mesmo em situação degradante e flagrantemente imundos pelo
            pecado, Deus alcança todos os que se rendem ao pé da cruz declarando
            que Jesus Cristo é o Senhor (Rm 10.9,10).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-11-o-servo-do-senhor-ultrajado-mas-fiel">
            2. O Servo do Senhor ultrajado, mas fiel
          </H3>
          <P className="">
            O desrespeito e descrédito de Israel, alinhados com suas iniquidades
            e transgressões frente à profecia do iminente exílio que sofreriam
            pelas mãos dos babilônios, foram um prenúncio da posterior rejeição
            dos judeus a Jesus Cristo. Entretanto, o Senhor não se cansa de
            alertar o povo de Israel sobre a vinda do Messias e o cumprimento da
            divina tarefa do Servo, pois assim como as demais nações, Israel
            também depende do sacrifício de Jesus Cristo para sua salvação.
          </P>
          <P className="">
            Isaías revela que o ultraje de Jesus não era suficiente para
            interromper sua fidelidade para com aqueles que sempre existiram e
            sempre existirão, os fiéis servos remanescentes, que não se deixam
            corromper com as imundícias do mundo, mas olham para o alto e clamam
            incessantemente: Maranata! Pois não são deste mundo (Jo 15.18) e
            sabem que Deus os amou ao ponto de entregar seu próprio filho para
            lhes salvar (Jo 3.16).
          </P>
          <P className="">
            A narrativa profética antevê que o Cristo seria plenamente obediente
            a Deus, mesmo diante da terrível morte que padeceria (Fl 2.8), não
            levou em consideração as afrontas e o desrespeito do seu próprio
            povo (Sl 69.7-10). Jesus Cristo já sabia antecipadamente tudo o que
            passaria para trazer salvação (Mc 8.31-33; 9.30-32; Mt 20.17-19;
            26.1,2; Jo 18.4) e mesmo assim não retrocedeu, pois olhava com seu
            incomparável amor para você.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-11-a-redencao-e-a-restauracao-de-israel">
            3. A redenção e a restauração de Israel
          </H3>
          <P className="">
            O termo redenção significa a liberdade alcançada mediante o
            pagamento de um preço. O ser humano é pecador e, por isso, carece da
            glória de Deus para alcançar a libertação dessa culpa, sendo obtida
            mediante a redenção que há em Cristo (Rm 3.23,24). Já o termo
            restauração é o mesmo que renovar (Mt 17.11) ou restabelecer (Jr
            30.17), ou seja, reaver a posição ou estado que foi perdido. O
            remanescente de Israel (51.1) agora recebe uma palavra de conforto e
            entusiasmo, deixando claro que Deus não deixaria de redimir e
            restaurar os fiéis, trazendo regozijo e alegria em lugar da amargura
            (51.12).
          </P>
          <P className="">
            Sobre o tema deste tópico, cabe uma análise escatológica (estudo das
            últimas coisas) sobre o tratamento do Senhor para com Israel. Nos
            oráculos de Isaías, é notório que Israel seria o centro de toda a
            disseminação da Palavra de Deus (Ex 19.5,6), que o Messias nasceria
            naquela nação e que seu reino duraria para sempre (Sl 145.13).
            Contudo, Israel falhou diante do chamado do Senhor por causa dos
            seus vários pecados, sendo necessário estabelecer um &quot;novo
            concerto&quot; (Jo 1.11,12). Assim, após o arrebatamento da igreja,
            restarão somente os judeus e os gentios, mas as promessas de
            redenção e restauração de Israel não serão quebradas ante a
            fidelidade de Deus.
          </P>
          <P className="">
            Hodiernamente, é bem-aventurado aquele que anuncia as boas-novas
            (52.7), pois apregoa a salvação em Cristo, revelando que os cativos
            poderão ser libertos, os doentes curados e os aflitos gozarem da paz
            através da maravilhosa redenção que há em Jesus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-11-o-sofrimento-e-a-gloria-do-messias">
            4. O sofrimento e a glória do Messias
          </H3>
          <P className="">
            Nos versos 2 e 3 do capítulo 53 de Isaías, o profeta registra a
            impressão externa transmitida pelo Servo do Senhor. O texto isaiano
            revela que ele teria uma origem humilde (Is 11.1), que não teria
            beleza que chamasse a atenção das pessoas ou criasse predileção. O
            texto continua afirmando que ele experimentaria desprezo, ódio,
            injustiça, dores e morte (Fl 2.7,8). Tudo isso sobreveio sobre
            Cristo, que se entregou para ser pregado no madeiro por amor.
          </P>
          <P className="">
            O cumprimento solitário dessa missão de amor fez Jesus receber sobre
            si o castigo de todos os nossos pecados, retirando o sofrimento
            oriundo da queda adâmica e dos pecados pessoais. Sobre Ele desabou a
            iniquidade de todos nós, foi oprimido e humilhado. Contudo, realizou
            tal feito como o verdadeiro Cordeiro de Deus, calado e em plena
            submissão ao Pai (53.4-9).
          </P>
          <P className="">
            Jesus agiu através da substituição, lançando sobre os seus ombros o
            fardo cheio das sanções que nós deveríamos pagar, sofrendo uma
            punição sobre-humana. Ele foi pagando a pena que era nossa. Por fim,
            sua obra de sofrimento cumpriu a vontade do Senhor, pois enquanto as
            pessoas meneavam a cabeça olhando para cruz, Ele, de forma
            voluntária, dava sua vida por todos. Não obstante, ao terceiro dia,
            Ele ressuscitou e permanece vivo para todo o sempre!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-11-conclusao">Conclusão</H3>
          <P className="">
            O autor da narrativa do livro de Jonas exibe em seus escritos que:
            &quot;Ao Senhor pertence a salvação!&quot; (Jn 2.9b). Resta evidente
            que a salvação vem única e exclusivamente de Jesus Cristo, o Servo
            do Senhor, que não fez e não faz acepção de pessoas (At 10.34), quer
            seja judeu ou gentio, Ele bate à porta, aguardando que seja aberta
            para entrar com salvação (Ap 3.20).
          </P>
          <P className="">
            Isaías profetiza que o Servo do Senhor viria e seria a ponte que
            religaria os judeus e ligaria os gentios a Deus. O Servo seria
            ultrajado, mas, mesmo ciente do que iria passar, permaneceria fiel
            às promessas de Deus, pois tinha os olhos fitos na redenção e
            restauração de todos aqueles que nEle creem. O sofrimento e morte
            suportados por Cristo fazem os olhos do coração mais duro marejar,
            mas, ao final, Ele se apresentou vencedor para nos justificar. (Jo
            11.25,26).
          </P>
          <P className="">
            Para ser salvo, é preciso reconhecer que Jesus Cristo morreu pelos
            nossos pecados e que ressuscitou ao terceiro dia dentre os mortos
            (Rm 10.9). O Messias é o único mediador capaz de levar o homem a
            Deus (1Tm 2.5), ou seja, Ele é o único capaz de lhe dar a vida
            eterna (Jo 5.24; 10.28).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 12 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-12">Lição 12 – Promessas e Alertas</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-12-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Destacar as promessas de Deus e os alertas sobre o pecado.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-12-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 55.6,7</P>
          <P className="">
            Deus concede inspiração ao profeta Isaías para que escreva seus
            alertas e evidencie suas promessas ao povo contemporâneo. Contudo,
            as mensagens também têm cunho escatológico, servindo como um alerta
            para aquela geração e para o futuro, apresentando como será glorioso
            quando chegar o grande Dia.
          </P>
          <P className="">
            Ao alertar o povo sobre o pecado da idolatria, Deus deixa claro que
            não aceita e nem pactua com a atitude daqueles que colocam sua
            confiança em ídolos e que praticam a imoralidade e a luxúria. Tal
            estilo de vida leva à morte (Rm 6.23a). O povo de Israel estava
            ludibriado com os rituais mundanos, ritos cheios de feitiçaria,
            adultério, depravação e morte. Chegavam ao ponto de sacrificarem os
            próprios filhos aos deuses pagãos. Assim, o profeta alerta o povo
            para não colocarem sua confiança nos ídolos, pois com um simples
            sopro eles seriam destruídos. Em vez disso, devem confiar no Senhor
            (57.13).
          </P>
          <P className="">
            A ordem é alargar a tenda, olhando para o futuro glorioso que Deus
            tem reservado para o povo fiel. Para aqueles que recebem
            gratuitamente a graça oferecida, que não se dobram diante do mundo,
            suas práticas e seus inúmeros &quot;ídolos&quot;, mas, rasgam seus
            corações e se doam diariamente em prol do voluntariado, tendo por
            meta conectar pessoas a Cristo com amor e graça.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-12-o-futuro-glorioso-de-siao">
            1. O futuro glorioso de Sião
          </H3>
          <P className="">
            Isaías profetiza que, devido ao pecado, Israel e Judá estariam
            cabisbaixos no exílio babilônico. No entanto, a boa notícia de
            salvação convida o povo sofrido a se alegrar frente ao futuro que os
            esperava. Tal convite é universal, o esforço e o incomparável amor
            do Servo do Senhor revelam o resultado que somente Ele poderia
            alcançar: a salvação para todo o homem. O escritor aos Hebreus
            aplica a profecia descrita em Isaías 54.1 à Jerusalém celestial (Hb
            12.22), destacando assim o caráter profético do texto, que se
            cumprirá quando os crentes entrarem nos portais celestes (Gl 4.26).
          </P>
          <P className="">
            O profeta Isaías demonstra a beleza do futuro glorioso prometido à
            Jerusalém. O chamado para que louvem a Deus é anunciado, as bênçãos
            estavam chegando em grande escala. O temor deverá bater em retirada,
            dado que a humilhação já é finda e o povo não será mais
            envergonhado, porquanto o Criador será e é o seu redentor (54.5).
            Naquele dia, a misericórdia não deixará Jerusalém e a paz reinará em
            definitivo. (Ap 21.4; 1Co 15.26; Is 35.10).
          </P>
          <P className="">
            Sabe-se que muitas são as armadilhas e artimanhas preparadas
            constantemente pelo inimigo no intuito de derrubar o cristão fiel. É
            notório o avanço do mundo com seus conceitos e ensinos divergentes à
            Palavra de Deus, o ataque contumaz com ensinos malignos aos de tenra
            idade. Sem falar na quantidade crescente de falsos mestres que se
            intrometem no meio da igreja com doutrinas destruidoras (2Pe 2.1).
            Todavia, o Senhor nos garante que &quot;nenhuma arma forjada contra
            você prosperará&quot; (Is 54.17).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-12-busque-a-salvacao-enquanto-pode">
            2. Busque a salvação, enquanto pode
          </H3>
          <P className="">
            O tão precioso evangelho é ofertado gratuitamente, pois o preço já
            foi pago (1Co 6.20; 1Pe 1.18,19). Mesmo o mais pobre e miserável dos
            homens pode adquiri-lo, não há barreira, basta querer, confessar e
            crer (Rm 10.9). O ser humano que recebe o evangelho e crer no Cristo
            ressurreto gozará de satisfação plena no Espírito Santo.
          </P>
          <P className="">
            A maldade humana, em todas as suas formas, exige arrependimento.
            Para tanto, Isaías apresenta nos versos 6 e 7 do capítulo 55, um dos
            textos bíblicos mais populares, alertando o homem sobre a
            necessidade de, em arrependimento, buscar a Deus na pessoa de seu
            Filho Jesus: &quot;Busquem o Senhor enquanto ele pode ser
            encontrado; invoquem-no enquanto ele está perto. Que o ímpio
            abandone o seu mau caminho, e o homem mau, os seus pensamentos;
            converta-se ao Senhor, que se compadecerá dele, e volte-se para o
            nosso Deus, porque é rico em perdoar.&quot; (Is 55.6,7). Jesus
            Cristo se mantém de braços abertos, esperando os que o buscam (Jo
            6.37).
          </P>
          <P className="">
            A Palavra proferida pelo Senhor sempre cumprirá o desígnio para o
            qual foi enviada. Ela nunca falha, e seu efeito não será tardio
            (55.11). O apóstolo Pedro, em sua primeira carta, no verso 23 do
            capítulo 1, revela que a Palavra de Deus é uma semente
            incorruptível, viva e eterna, que age no coração humano e produz
            fruto para glória de Deus. Posto isso, o cristão tem o dever de
            anunciá-la em tempo e fora de tempo (2Tm 4.2).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-12-deus-e-contra-os-guias-cegos-e-a-idolatria">
            3. Deus é contra os guias cegos e a idolatria
          </H3>
          <P className="">
            O cuidado do atalaia (56.10a) em busca de proteção contra os ataques
            externos e o zelo do pastor (56.11c) para satisfazer as necessidades
            internas das ovelhas são dois evidentes aspectos do líder. Tais
            enfoques são levantados no texto bíblico (56.9-12) para demonstrar
            que os profetas de Israel estavam andando como cegos, dormindo
            diante dos alertas divinos, pois não enxergavam, mas continuavam a
            liderar; e que os gananciosos governantes permaneciam insaciáveis
            mesmo diante da iminente destruição.
          </P>
          <P className="">
            A conduta idólatra do povo e dos líderes é constantemente condenada
            pelo profeta. Deus os exorta para que não mais se curvem diante de
            imagens de escultura e lhe prestem cultos e rituais, no entanto que
            se arrependam, temam e sirvam ao único Deus verdadeiro (57.13), que
            entra nos mais sinceros e contritos corações (57.15).
          </P>
          <P className="">
            É bem verdade que não importa a condição financeira, cultura, etnia,
            ou qualquer outro estado externo do homem para que Deus demonstre o
            seu amor e faça morada, mas é necessário um arrependimento sincero,
            tendo por base a indispensável observância da Palavra do Senhor.
            Deus ama o pecador incondicionalmente, mas não ignora o pecado, pois
            não o tolera. (Is 61.8).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-12-o-jejum-que-deus-quer-e-a-maldade-de-israel">
            4. O jejum que Deus quer e a maldade de Israel
          </H3>
          <P className="">
            O jejum é a abstenção de alimentos por determinado período, com um
            desígnio preestabelecido. A Bíblia nos entrega vários exemplos de
            jejum, podendo ser parcial (Dn 10.2,3), onde o cristão se abstém de
            determinados alimentos; pode ser o normal, em que se ingere somente
            água (Mt 4.2); e o total, onde se abstém de tudo (At. 9.9). Tal
            prática perpetua-se até os dias atuais, sendo uma recomendação
            bíblica (At 13.3) e poderosíssima ferramenta para o cristão que o
            exerce com sabedoria (Mt 6.16-18).
          </P>
          <P className="">
            Caso o jejum não seja feito da maneira correta, pode se demonstrar
            uma prática vazia. Isto foi exatamente o que aconteceu com o povo de
            Israel (58.3). A maneira hipócrita de jejuar do povo foi exposta
            frente ao orgulho e ódio que eram exteriorizados em seus empregados.
            A mera religiosidade não agrada a Deus, sendo ineficiente o jejum
            praticado sem a observância cotidiana das boas atitudes
            preestabelecidas na Palavra do Senhor. O jejum que o Senhor quer
            está diretamente ligado às atitudes de justiça do crente, onde
            deve-se negar a si mesmo em benefício do próximo.
          </P>
          <P className="">
            As práticas pecaminosas são responsáveis pelo distanciamento entre
            Deus e o ser humano (59.2). Isaías, no capítulo 59, denuncia as
            iniquidades dos filhos de Israel que tornava evidente tal separação.
            Mas, é certo que a mão do Senhor não está encolhida para que não
            possa salvar e ouvidos agravados, para não ouvir (59.1).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-12-conclusao">Conclusão</H3>
          <P className="">
            De tudo que foi analisado na presente lição, pode-se, de maneira
            sintetizada, dizer que os oráculos escritos por Isaías ensinam que o
            Senhor continua alertando o ser humano com vistas a salvação. Um
            futuro glorioso é prometido àquele que nEle crer, que não anda
            segundo o conselho dos ímpios (Sl 1), que não se rende à idolatria,
            mas em tempo hábil buscou e encontrou o Senhor que se deixa achar.
          </P>
          <P className="">
            Infelizmente, muitas coisas têm se tornado ídolos na vida do ser
            humano. A veneração, o tempo despendido, a honra e o desprezo aos
            demais em atenção ao ídolo descortinam a idolatria. Essa atitude é
            demasiadamente perigosa e desencadeia sanções gravíssimas (1Co
            6.9,10; Ap 21.8; 22.15).
          </P>
          <P className="">
            Lidar com as pressões da vida moderna não é fácil. Sabendo disso, o
            Senhor deixou sua santa Palavra como manual de regras de fé e
            conduta (2Tm 3.16,17), que alerta o cristão dos perigos e também
            conforta com a promessa de um breve futuro glorioso na Jerusalém
            celeste. Assim, cante alegremente e alargue o espaço da tua tenda,
            porque transbordará de grandes bênçãos (54.1-3). Não temas, porque o
            Santo de Israel é o teu Redentor (54.4,5).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 13 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-13">Lição 13 – Teu É o Reino e Tua É a Glória</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-13-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">Demonstrar que do Senhor é o reino e a glória.</P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-13-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 61.1-3</P>
          <P className="">
            A grandiosa obra de restauração do povo judeu (60.15-22) ocorrerá
            plenamente no futuro. Naquele momento, o Messias se apresentará como
            o desejado das nações e trará salvação ao povo de Israel (60.16).
            Ele colocará seus pés no monte das oliveiras e livrará Israel (Zc
            14.3-5), pois continua sendo alvo do amor de Deus. O cumprimento se
            completará na Jerusalém celestial (Gl 4.26; Ap 21.9-22.5), onde a
            igreja estará triunfante e radiante de alegria juntamente com o
            Noivo (Jo 14.3) e quando o Senhor fizer novos céus e nova terra
            (66.22).
          </P>
          <P className="">
            O apóstolo João recebeu a revelação de que o Senhor é o Alfa e o
            Ômega, o Todo-Poderoso (Ap 1.1,8), sendo Ele o Senhor do passado,
            presente e futuro. O término da oração do &quot;Pai Nosso&quot; (Mt
            6.9-13) deixa claro que a Deus pertence o Reino, o poder e a glória.
            Assim, veremos nos escritos do profeta Isaías a ratificação de tais
            afirmações, para que o leitor possa sossegar no Senhor.
          </P>
          <P className="">
            Ouvimos a voz do Senhor ao lermos Sua Palavra, e Ele vela por Sua
            Palavra para cumpri-la (Jr 1.12). Com efeito, o leitor enxergará que
            a salvação em Cristo o levará à Nova Jerusalém, mesmo sendo um
            caminho imerecido pelo ser humano. A bondade de Deus em favor
            daquele que nEle espera ultrapassa nossa compreensão, concedendo tal
            benefício. Por derradeiro, o leitor compreenderá a renovação da
            criação e a formação de novos céus e nova terra.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-13-a-nova-jerusalem-e-sua-gloria">
            1. A nova Jerusalém e sua glória
          </H3>
          <P className="">
            É anunciado por Isaías que, passado o período de aflição de
            Jerusalém no exílio, o povo gozaria de um futuro glorioso em uma
            nova Jerusalém. O anúncio é escatológico e revela a &quot;Jerusalém
            lá de cima&quot; (Gl 4.26), preparada para todos aqueles que deram
            ouvidos às palavras do Servo do Senhor.
          </P>
          <P className="">
            O alerta contínuo do profeta Isaías para que o povo torne a buscar
            ao Senhor enquanto é dia e dê ouvidos à mensagem do Servo (Is 55.6)
            mostra o cuidado e zelo do Senhor para com seu povo, pois revela sua
            longanimidade para com aqueles que permanecem sob o jugo do pecado.
            Deus, em demonstração de amor, por reiteradas vezes levantou
            profetas que alertaram o povo a deixar o pecado, pois as
            consequências oriundas da prática do erro seriam desastrosas (Rm
            8.13).
          </P>
          <P className="">
            No entanto, os servos que permanecem com olhos fitos no Senhor e
            andam na luz segundo o Espírito em breve caminharão pelas ruas da
            Nova Jerusalém e contemplarão sua glória. A Jerusalém celestial será
            iluminada eternamente pela luz que emana do Senhor (60.19), sendo um
            lugar extremamente precioso e símbolo da glória de Deus, onde será
            possível o acesso face a face com o Criador. A profecia revela a
            imponência e realeza da nova morada, um lugar de paz, segurança e
            salvação (60.18), pois nela congregarão todos os salvos em Cristo
            Jesus (60.21).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-13-um-novo-comeco">2. Um novo começo</H3>
          <P className="">
            O Servo sofredor, aquele que carregaria a pesada carga de pecados
            que não era sua, tomando o lugar miserável que pertencia ao povo,
            traria a graça de Deus anunciada nas Boas-Novas. Ora, tudo o que
            outrora aconteceu durante o período desolador no exílio babilônico,
            não poderia se comparar com a glória da salvação que viria através
            do Messias. Um novo começo é proclamado, o ano aceitável do Senhor,
            o favor de Deus chegará como resposta ao arrependimento do povo e
            trará bênçãos incomensuráveis (61.1-3).
          </P>
          <P className="">
            O profeta, descrevendo as promessas feitas ao povo (61.6-9) diante
            de um novo começo, revela a forma como os cristãos serão conhecidos,
            a saber: &quot;família bendita do Senhor&quot; (61.9b). Os
            privilégios ministeriais dos sacerdotes (1Pe 2.5,9; Ap 1.6; 5.10),
            assim como o regozijo de saber que brevemente irão à pátria (Fl
            3.20), fizeram e fazem com que o povo de Deus mantenha a cabeça
            erguida olhando para o alto (Cl 3.1-3) e continuem o caminho à
            Jerusalém celestial.
          </P>
          <P className="">
            Os momentos de tribulação, lutas e desafios enfrentados pelo povo de
            Deus durante sua passagem neste mundo, não se comparam ao gozo da
            glória futura da nova Jerusalém. De maneira enfática, o profeta
            Isaías relata o contraste entre o estado atual (desamparada e
            desolada) e o futuro glorioso de Jerusalém (62.4), destacando que o
            Salvador virá e trará o seu galardão e a glória de Jerusalém serão
            ainda maior por causa dEle (62.11,12).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-13-um-deus-que-trabalha-para-o-que-nele-espera">
            3. Um Deus que trabalha para o que nEle espera
          </H3>
          <P className="">
            A mensagem profética em Isaías apresenta um Deus com atributos
            comunicáveis (ex: benignidade (Is 63.7; Sl 86.5)) e incomunicáveis
            (ex: onipotência (Is 44.24; Ap 1.8)). Tais atributos são qualidades
            atribuídas ao caráter divino que ajudam a entender quem é Deus.
            Percebe-se que Deus não está distante, Ele está presente e pronto
            para se relacionar com aquele que busca conhecê-Lo (Jr 9.23,24). O
            profeta Isaías em sua última oração (63.7-19; 64) evidencia a
            bondade e misericórdia de Deus e afirma que celebrará as
            benignidades do Senhor em favor da casa de Israel.
          </P>
          <P className="">
            Diante de um Deus tão poderoso, mas que trabalha em favor dos seus
            (64.4), frente ao maior amor do mundo, o profeta se constrange e
            expõe a condição humana dizendo que: &quot;Todos nós somos como o
            imundo, e todas as nossas justiças são como trapo da imundícia.
            Todos nós murchamos como a folha; e as nossas iniquidades nos
            arrastam como um vento.&quot; (64.6). Ou seja, é necessário o sangue
            de Cristo para limpar e purificar o homem manchado pelo pecado.
          </P>
          <P className="">
            A ansiedade é um mal que tem afligido um expressivo número de
            pessoas atualmente. As preocupações cotidianas e os imprevistos são
            situações que podem tirar o sossego de qualquer pessoa. Apesar
            disso, deve-se acreditar que existe um Deus sem igual, que trabalha
            para aquele que nele espera (64.4; Fl 4.6-8).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-13-novos-ceus-e-nova-terra">
            4. Novos céus e nova Terra
          </H3>
          <P className="">
            Diz o Senhor, e sua promessa é fiel e verdadeira, que seus servos
            terão mantimentos, terão a sede saciada, cantarão de alegria, pois
            serão bem-aventurados (65.13,14). Essas promessas garantem segurança
            e esperança mesmo em momentos conturbados e de esmorecimento.
          </P>
          <P className="">
            Os últimos versos do capítulo 65 de Isaías, igualmente ao capítulo
            21 de Apocalipse, vêm encorajar o povo a permanecer firme e
            constante, pois logo viriam novos céus e nova terra, onde a vida
            será significativamente abençoada para todos. Haverá uma restauração
            de todo o universo, onde toda a terra será transformada (2Pe
            3.7,13).
          </P>
          <P className="">
            Assim conclui-se o estudo proposto na presente revista, incitando ao
            cristão a entender que o Senhor alertou o seu povo a respeito da
            desobediência e sempre esteve pronto a ajudá-los quando existia
            arrependimento. Quando Israel decidiu permanecer sob rebelião, isso
            lhe custou muito caro, pois logo sobreveio o jugo dos assírios e
            posteriormente o exílio babilônico. No entanto, a maior esperança do
            profeta Isaías era uma nova Jerusalém purificada, onde o reino de
            Deus seria restaurado pelo Servo do Senhor e a sua luz surgiria
            alcançando todas as nações. O Servo seria rejeitado pelos seus e
            morto pelo pecado de toda a humanidade, contudo, viveria novamente e
            declararia justo os que desejam um relacionamento com Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-13-conclusao">Conclusão</H3>
          <P className="">
            Por tudo que estudamos até aqui ficou demonstrado que do Senhor é o
            reino e a glória para todo o sempre! O domínio pleno de tudo e sobre
            todos está nas mãos daquele que reina eternamente. A sua grandeza e
            soberania nos constrange a render-lhe glória, pois é o único digno
            de receber toda a honra e glória. Mas, mesmo diante de tamanha
            magnificência ele olha para o cristão e diz &quot;E eis que estou
            com vocês todos os dias até o fim dos tempos.&quot; (Mt 28.20b).
          </P>
          <P className="">
            Deus revela sua misericórdia e bondade ao se colocar disposto a
            trabalhar em favor daqueles que nEle espera, demonstra seu amor e
            cuidado ao preparar uma nova Jerusalém para que sua igreja esteja
            com Ele eternamente, por fim, estabelece um novo começo com novos
            céus e nova Terra.
          </P>
          <P className="">
            Com a graça de Deus e anseio de &quot;quero mais&quot;, chegamos ao
            fim desse módulo, entretanto, findamos seguros de que estamos
            melhores do que éramos quando iniciamos. Assim, busquem a Cristo
            enquanto é possível (Is 55.6) e Ele te susterá, &quot;Porque eu, o
            Senhor, seu Deus, o tomo pela mão direita e lhe digo: &apos;Não
            tenha medo, pois eu o ajudarei.&apos;&quot; (Is 41.13).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Editorial */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="editorial">Editorial</H2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <P className="mt-0">
              <span className="font-semibold">Curso:</span> Livro de Isaías
            </P>
            <P className="mt-0">
              <span className="font-semibold">Ano:</span> 2021
            </P>
            <P className="mt-0">
              <span className="font-semibold">1ª Edição</span>
            </P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Conselho Editorial:</P>
            <P className="mt-0">Pr Sinval Júlio de Souza</P>
            <P className="mt-0">Pr Lúcio Andres</P>
            <P className="mt-0">Braitner Lobato</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Rezende</P>
            <P className="mt-0">Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentarista:</P>
            <P className="mt-0">Wagner Monteiro</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
