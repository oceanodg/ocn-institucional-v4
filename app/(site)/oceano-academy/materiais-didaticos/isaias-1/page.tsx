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
      "text/markdown": "/oceano-academy/materiais-didaticos/isaias-1.md",
    },
  },
};

export default function CursoIsaias1() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton tab="antigo" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Livro de Isaías – Módulo I</H1>
          <P className="mt-0">
            Estudo do livro do profeta Isaías: alertas, profecias, chamado ao
            arrependimento, o amor e a justiça de Deus, além de escatologia
            bíblica.
          </P>
        </div>

        <HeroImage
          src="/images/oceano-academy/materiais-didaticos/isaias-1/isaias-1-cover.webp"
          alt="Livro de Isaías – Módulo I"
        />
      </HeroContainer>

      <Separator className="mt-20 sm:mt-20" />

      <Container className="mt-6 sm:mt-8 mb-10 sm:mb-16">
        <H2 id="materials-didactic">Materiais de Apoio</H2>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold w-[110px] sm:w-[160px]">
                Apostila
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1gTSXK2HEoIV9u9KYAk7heojbrBEsLsfo/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/isaias-1.md">
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
                  <LinkSmall href="https://drive.google.com/file/d/18Y0YvacT00AyBbpF-V3Q6ZVO0WqNSEud/view?usp=sharing">
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
                  <LinkSmall href="https://drive.google.com/file/d/1870QBv0EiPfdtOUYreGtJKdqI6ArzFpP/view?usp=sharing">
                    <FileImage className="size-4" />
                    L1: Os Pecados
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1r8jZhyEQLiPMfU_eJNw8j7zeiUwZoTgi/view?usp=sharing">
                    <FileImage className="size-4" />
                    L2: A Era Crista Prevista
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1QlhC9dH0OKOlyQ4bOQNzC7Y8QAPfyqxa/view?usp=sharing">
                    <FileImage className="size-4" />
                    L3: O Chamado
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1N7XNv4lD5xdZy7IqIPFijcqlVztXaXTx/view?usp=sharing">
                    <FileImage className="size-4" />
                    L4: Vinda do Messias
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1nYExoCNo5zxWF0SMh8Nwgz_60AmuMhk-/view?usp=sharing">
                    <FileImage className="size-4" />
                    L5: Disciplina de Deus
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/15GS1oEMzpchxG44Al5o0MCEKUYyrN2Cf/view?usp=sharing">
                    <FileImage className="size-4" />
                    L6: Apocalipse
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
                  <LinkSmall href="https://drive.google.com/file/d/1h2wlgRtv7rXf4Ziy34mzS4PVrj2AEfB2/view?usp=sharing">
                    <FileText className="size-4" />
                    L1: Os Pecados
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1JW9EP_I1tP462_pLF-j2qN5qCnVWl_G4/view?usp=sharing">
                    <FileText className="size-4" />
                    L2: A Era Crista Prevista
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1-2E2LRWHf3Go8daFU9eHCsioytZSktC5/view?usp=sharing">
                    <FileText className="size-4" />
                    L3: O Chamado
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/12zAKwYYLW_inGsyvraRxae894F1AcM7c/view?usp=sharing">
                    <FileText className="size-4" />
                    L4: Vinda do Messias
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1vbjsarihc-Ld73P4iM5OULJzqNN8Pa5_/view?usp=sharing">
                    <FileText className="size-4" />
                    L5: Disciplina de Deus
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1mxuWRPgPE3-YHEPG76wDB3tARf8Lj5bs/view?usp=sharing">
                    <FileText className="size-4" />
                    L6: Apocalipse
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
            <a href="#lesson-1">
              Lição 1 – Os Pecados e os Sofrimentos Que Eles Trazem
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-deus-tem-ciencia-de-todo-nosso-pecado">
              1. Deus Tem Ciência de Todo Nosso Pecado
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-cultuando-com-hipocrisia">
              2. Cultuando Com Hipocrisia
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-convite-para-a-graca">3. Convite Para a Graça</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-deus-julga-mas-da-oportunidade-de-perdao">
              4. Deus Julga, Mas Dá Oportunidade de Perdão
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">Lição 2 – A Era Cristã Foi Prevista</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-gloria-futura-do-verdadeiro-israel">
              1. A Glória Futura do Verdadeiro Israel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-julgamento-de-juda-e-de-jerusalem">
              2. O Julgamento de Judá e de Jerusalém
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-reinado-do-renovo-do-senhor">
              3. O Reinado do Renovo do Senhor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-parabola-da-vinha-ma-e-sua-aplicacao">
              4. A Parábola da Vinha Má e Sua Aplicação
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">Lição 3 – Detalhando Um Chamado</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-isaias-olha-para-o-senhor">
              1. Isaías Olha Para o Senhor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-isaias-olha-para-si-mesmo">
              2. Isaías Olha Para Si Mesmo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-chega-o-momento-da-decisao">
              3. Chega o Momento da Decisão
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-israel-nao-podia-ver">4. Israel Não Podia Ver</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">Lição 4 – A Vinda do Messias Foi Profetizada</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-um-menino-chamado-emanuel">
              1. Um Menino Chamado Emanuel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-senhor-e-a-nossa-esperanca">
              2. O Senhor É a Nossa Esperança
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-vinda-e-o-poder-do-messias">
              3. A Vinda e o Poder do Messias
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-reinado-do-messias">4. O Reinado do Messias</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-5">
              Lição 5 – A Disciplina de Deus Sobre as Nações
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-mesmo-julgando-deus-e-misericordioso">
              1. Mesmo Julgando, Deus É Misericordioso
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-a-arrogancia-das-nacoes">
              2. A Arrogância das Nações
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-a-disciplina-de-deus-vem-sobre-seus-inimigos">
              3. A Disciplina de Deus Vem Sobre Seus Inimigos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-o-julgamento-de-deus">4. O Julgamento de Deus</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-6">Lição 6 – O Apocalipse de Isaías</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-o-senhor-julgara-todos-os-transgressores">
              1. O Senhor Julgará Todos os Transgressores
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-a-abolicao-da-morte">2. A Abolição da Morte</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-deus-ama-protege-e-salva-o-seu-povo">
              3. Deus Ama, Protege e Salva o Seu Povo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-a-revivificacao-da-vinha-do-senhor">
              4. A Revivificação da Vinha do Senhor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#editorial">Editorial</a>
          </SummaryLi>
        </UL>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 1 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-1">
          Lição 1 – Os Pecados e os Sofrimentos Que Eles Trazem
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Alertar a Igreja sobre erros e direcionar ao certo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 1</P>
          <P className="">
            Que bênção começarmos o estudo de mais uma revista, sendo que, desta
            vez, estaremos aprendendo sobre o livro do profeta Isaías, que se
            reveste de extrema importância para os judeus, como também para nós
            a igreja do Senhor Jesus, trazendo alertas, profecias, chamado ao
            arrependimento, preocupação e amor de Deus, além de escatologia
            bíblica!
          </P>
          <P className="">
            O livro de Isaías foi escrito pelo próprio profeta, por volta de 740
            a.C. e é um dos mais compreensíveis do Antigo Testamento. É um dos
            profetas maiores e se coloca em quinto lugar em termos de extensão,
            após Gênesis, Salmos, Jeremias e Ezequiel. Isaías é considerado por
            muitos como o quinto evangelho. É considerado também uma mini Bíblia
            por conter 66 capítulos, assim como toda a Bíblia Sagrada. Isaías
            significa “Jeová salva”. Ele era filho de Amós e foi profeta de
            Jerusalém por 40 anos. O contexto da época era que tanto Israel
            quanto Judá estavam sendo ameaçados por inimigos externos, por conta
            da sua falta de retidão e idolatria exacerbada, causando a ira de
            Deus, a despeito de todo alerta ao arrependimento.
          </P>
          <P className="">
            Tudo isso nos remete às consequências do pecado, mas em
            contrapartida, a possibilidade de perdão do nosso Senhor Jesus, que
            sempre nos alerta para termos uma vida abundante, santa e
            irrepreensível baseada na Sua Palavra. A partir de agora, você é
            convidado a mergulhar conosco no estudo desse livro tão importante e
            atual. Deus nos abençoe nesta jornada!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-deus-tem-ciencia-de-todo-nosso-pecado">
            1. Deus tem ciência de todo nosso pecado
          </H3>
          <P className="">
            Uma das maiores mentiras que cauteriza as mentes das pessoas é
            pensar que Deus não tem ciência dos nossos pecados e isso faz com
            que se peque de maneira oculta. A prática contumaz do pecado faz com
            que se viva envolto pelo mesmo, até mesmo de maneira social, achando
            normal todas as coisas erradas. Mas tudo está sendo registrado e,
            pior, trará consequências diretas aos que praticam tais coisas.
          </P>
          <P className="">
            Deus alertou o Seu povo para se cuidar e não adotar os cultos e a
            idolatria dos povos de Canaã (Jz 2.18,19), mas a desobediência e a
            conviv ência com os pecados dos cananeus passaram a envolver
            diretamente os israelitas (Jz 3.4,5). Eles chegaram a queimar em
            sacrifício seus próprios filhos ao deus Moloque, praticaram
            feitiçaria, magia, adivinhação, toda imoralidade sexual com
            prostitutas cultuais (1Rs 14.24; 2Rs 21.6; 2Cr 33.5).
          </P>
          <P className="">
            Não obstante todo esse cenário de perversão e condenação futura,
            Deus deu toda oportunidade de arrependimento ao Seu povo, utilizando
            profetas como Isaías, que profetizou a respeito de Judá e Jerusalém,
            nos dias de Uzias, Jotão, Acaz e Ezequias, reis de Judá (Is 1.1).
            Deus sempre nos dá oportunidade de arrependimento e confissão dos
            nossos pecados, desde que nos posicionemos em sinceridade de coração
            e em verdade clamemos pelo Seu perdão. Quando nos arrependemos, Ele
            nos perdoa por intermédio de Jesus Cristo que pagou todo o preço da
            condenação dos pecados na cruz do calvário.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-cultuando-com-hipocrisia">
            2. Cultuando com hipocrisia
          </H3>
          <P className="">
            Uma forma do povo de Judá se achegar a Deus era por meio da oferta
            de sacrifícios, que era um dos meios para cultuá-Lo. O problema era
            que o povo oferecia seus holocaustos sem qualquer posicionamento de
            arrependimento ou de reverência ao Deus que havia lhes dado a terra
            prometida, que havia livrado seus pais da escravidão do Egito, que
            sempre foi fiel a eles. A hipocrisia no culto a Deus tinha se
            tornado prática cotidiana daquele povo. Eles não faziam separação
            entre o santo e o profano, tudo lhes era comum e tinha o mesmo
            valor. O pecado faz isso.
          </P>
          <P className="">
            Nos versículos 11 a 17 do capítulo 1, Isaías evidenciou o
            posicionamento Santo de Deus em relação ao culto hipócrita, sem
            reverência, circundado pelo pecado. Não, Deus não aceita esse tipo
            de sacrifício, mesmo sendo ofertados os melhores carneiros, a mais
            rica gordura, os melhores animais cevados, como naquela época, bem
            como vultosas quantias de dinheiro ou, até mesmo, as melhores
            canções ou pregações, como nos dias hodiernos. Para se achegar a
            Deus, deve-se ter santidade e santificação.
          </P>
          <P className="">
            Santidade é a qualidade de quem escolhe viver separado das coisas
            erradas do mundo, do pecado, vivendo em fidelidade e cumprimento da
            Palavra de Deus. Santificação é o processo de tornar alguém santo, é
            um ato da graça Divina para com todos aqueles que são receptivos a
            essa ação. Tudo é questão de escolha, como veremos a seguir.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-convite-para-a-graca">3. Convite para a graça</H3>
          <P className="">
            Os versículos 18 a 20, do capítulo 1, apresentam a mais profunda
            prova da graça de Deus, mesmo no Antigo Testamento. Sim, havia graça
            no Antigo Testamento; na verdade, a graça de Deus é algo eterno, um
            favor imerecido.
          </P>
          <P className="">
            Apesar de todo pecado de Judá, Deus convidou o povo a tomar decisão
            ao arrependimento. Por meio do profeta Isaías, Ele disse que, ainda
            que os pecados deles fossem como a escarlata, uma cor vermelho viva,
            eles se tornarão brancos como a neve; ainda que fossem como o
            carmesim, também uma cor vermelho viva, se tornariam brancos como a
            lã. Que amor, que graça, que oportunidade de livramento e salvação!
            Somente Deus, em Sua Majestade e Grandeza poderia proporcionar
            tamanha oportunidade a um povo tão envolto no lamaçal do pecado e de
            dura cerviz. O incrível de tudo isso é que esses versículos são
            estendidos a nós ainda hoje.
          </P>
          <P className="">
            Em complemento ao convite, Deus oportunizou a escolha de duas
            alternativas: comer o melhor da terra ou ser devorado à espada (vv.
            19,20). Isso é livre arbítrio, é cada pessoa optar por uma vida em
            abundância ou à condenação eterna (Mt 7.13,14). A chancela e a
            certeza do cumprimento veio do próprio Deus, no versículo 20:
            “porque a boca do Senhor o disse”. Isso nos remete à realidade da
            Palavra de Deus aos que O escolherem, mas, em contrapartida àqueles
            que optarem pela segunda alternativa, a condenação eterna no
            inferno. A escolha é nossa!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-deus-julga-mas-da-oportunidade-de-perdao">
            4. Deus julga, mas dá oportunidade de perdão
          </H3>
          <P className="">
            Deus julga, mas sempre dá a oportunidade do perdão. Essa é uma das
            vertentes da graça de Deus. Estamos falando bastante em graça, mas o
            que vem a ser isso? Graça é o amor que jamais mereceremos, mesmo nos
            esforçando ao máximo em todas as áreas de nossas vidas, utilizando
            todas as nossas habilidades, conhecimento, tudo o que temos. É
            também o atributo de nos permitir enfrentar e vencer toda e qualquer
            situação desfavorável.
          </P>
          <P className="">
            Judá seria condenado, não por causa da ira de Deus, mas por não ter
            dado ouvidos aos profetas, aos alertas, por não ter escolhido o
            caminho do perdão, do arrependimento. Nesse caso, somente lhes cabia
            a condenação; eles iriam sofrer as consequências do pecado e
            colheriam tudo o que haviam plantado (Gl 6.7). Deus permitiria que
            essa nação fosse levada cativa pelo império babilônico, pelo rei
            Nabucodonosor II, o que foi concretizado por volta do ano 607 a.C. O
            rei Jeoaquim de Judá foi forçado a se submeter, tornando-se um
            vassalo da Babilônia (2 Rs 24.1). Foi durante esse tempo que foram
            levados de Judá muitos jovens sem defeito, de boa aparência, sábios
            e doutos em ciência, como Daniel, Hananias, Azarias e Misael (Dn
            1.4).
          </P>
          <P className="">
            Muitas vezes, passamos por situações desfavoráveis, simplesmente
            porque nos recusamos a dar ouvidos à voz de Deus. Assim como Judá,
            ficamos à mercê do inimigo, presos, cativos e distantes de Deus,
            simplesmente por que escolhemos o caminho errado (Pv 14.12).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            A compreensão do livro de Isaías, do contexto do povo de Israel e de
            Judá nos permite adentrar ao conhecimento da rebeldia da humanidade,
            da graça, do amor e do perdão de Deus. Não nos enganemos, Deus não
            deixará de aplicar a Sua justiça a todos aqueles que insistirem em
            viver à mercê da carnalidade e do pecado. Cada semente plantada
            gerará um tipo de planta e essa planta frutificará. Mesmo não
            querendo colher, a pessoa que plantou deverá efetuar a colheita.
            Assim será no Juízo Final, onde o julgamento acontecerá, para todo
            aquele que não entregou sua vida a Jesus. Só não haverá condenação
            para aqueles que receberem a Jesus em suas vidas.
          </P>
          <P className="">
            Deus continua alertando a humanidade para que se posicione em
            santidade, em santificação, dando ouvidos à Sua poderosa Palavra,
            vivendo uma vida íntegra e distante do pecado. Nas próximas lições
            teremos mais oportunidades de aprender sobre as ações de Deus, por
            intermédio do profeta Isaías. Você é nosso convidado a experimentar
            o que vem pela frente nestas treze lições. Ainda não acabou! Temos a
            chance de fazer com que nossas vidas tomem rumos diferentes, da
            condenação para a vida eterna; do inferno para o céu; do tormento
            para a alegria e paz. Igreja do Senhor Jesus: esteja alerta e tome a
            decisão certa!
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – A Era Cristã Foi Prevista</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Evidenciar a profecia bíblica da era cristã ocorrida séculos antes
            pelo profeta Isaías.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 2-5</P>
          <P className="">
            Que bom reencontrar você aqui! Isso significa que você está firme no
            propósito de perseverança e de dedicação em aprender sobre o livro
            de Isaías. Vamos lá, então?
          </P>
          <P className="">
            Nesta lição, aprenderemos sobre as profecias de Isaías sobre a era
            cristã e sobre a vinda do Messias para a remissão dos pecados da
            humanidade, principalmente do povo de Israel. Aprenderemos ainda
            sobre a glória futura do verdadeiro Israel, o julgamento de Judá e
            de Jerusalém pelos seus pecados e o Reinado do Renovo do Senhor.
            Atente-se ao fato de que essas profecias aconteceram há mais de sete
            séculos a.C., muito antes do nascimento de Jesus. Somente Deus com o
            Seu domínio de tudo e de todas as coisas poderia fazer dessa forma!
            Observe, ainda, que tudo aconteceu conforme previsto e no tempo
            certo! Dessa forma, devemos aprender a conhecer e a confiar no nosso
            Deus. Aleluia!
          </P>
          <P className="">
            Veremos também que Isaías previu que a Igreja do Senhor Jesus seria
            estabelecida na Terra e que o Dia do Senhor viria. Neste Dia, todos
            aqueles que confiaram e confiarem em imagens de escultura e em
            falsos deuses, e não no Deus Verdadeiro, serão julgados e
            condenados. Isaías ainda demonstrou a falta do conhecimento do povo
            de Israel ilustrando com a parábola da vinha má. Israel é a vinha e
            essa atitude de negligência em relação a Deus faria com que eles
            fossem “consumidos pelo fogo” (Is 5.24-30). Preparados? Vamos então
            para mais uma jornada de conhecimento. Deus abençoe a todos!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-gloria-futura-do-verdadeiro-israel">
            1. A glória futura do verdadeiro Israel
          </H3>
          <P className="">
            No capítulo 2 de Isaías, Deus revelou ao profeta que, nos últimos
            dias, a Igreja do Senhor Jesus seria estabelecida na Terra. Deus
            ainda condenou a prática da idolatria no meio do povo escolhido,
            onde eles se prostravam, cultuavam e ofereciam sacrifícios a deuses
            estranhos, muitas vezes oferecendo os próprios filhos. Isaías
            terminou o capítulo dizendo que o Dia do Senhor viria, sendo um dia
            decisivo e de julgamento para a humanidade.
          </P>
          <P className="">
            Nos versículos 1-3, o profeta ultrapassou sua visão em relação ao
            caos da nação e previu o reino glorioso do Messias, onde Jerusalém
            seria estabelecida como a capital política e religiosa do mundo. O
            versículo 4 demonstra que o Senhor julgará todos os problemas
            internacionais e apresentará a solução dos conflitos entre todos os
            povos. Um dos destaques do capítulo está nos versículos 6-9, onde o
            Senhor revelou os pecados que estavam arraigados no meio da nação.
            Eles, ao invés de irem à Fonte, que é Deus, priorizaram fazer
            consultas a adivinhadores, firmando alianças com os pagãos. Também
            por isso, Deus os condenaria, expondo-os à humilhação diante de
            todos os inimigos.
          </P>
          <P className="">
            No final do capítulo (vv. 12-22), o filho de Amós citou o Dia do
            Senhor, onde o Senhor dos Exércitos tratará toda a promiscuidade,
            arrogância, altivez e pecados da raça humana; ninguém escapará, quer
            sejam, governos, ricos, poderosos... Naquele dia, o Senhor será
            exaltado e todos os ídolos desaparecerão.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-julgamento-de-juda-e-de-jerusalem">
            2. O julgamento de Judá e de Jerusalém
          </H3>
          <P className="">
            No capítulo 3 de Isaías, há dois julgamentos, sendo um de Judá e de
            Jerusalém e o outro, das mulheres de Jerusalém. Haveria fome e
            escassez entre eles, tamanha que ninguém desejaria governá-los, onde
            Deus lhes daria meninos por chefes e crianças por governantes (v.4).
          </P>
          <P className="">
            O primeiro julgamento foi por conta do excesso de confiança em sua
            abundância e prosperidade, além do desvio do alvo de adoração, ao
            invés de ser o Senhor Deus, eles estavam adorando deuses falsos
            esquecendo-se do Verdadeiro, corrompendo-se, tendo atitudes iguais
            ou piores às dos pagãos, ao ponto de serem comparados com Sodoma
            (v.9). Os versículos de 1 a 4 dizem que o Senhor tiraria: “o
            sustento e o apoio, todo sustento de pão e todo sustento de água”,
            “o valente, o guerreiro e o juiz; o profeta, o adivinho e o ancião”,
            “o capitão de cinquenta, o nobre, o conselheiro, o hábil artífice e
            o perito em encantamentos”. Em contrapartida, Deus faria com que
            houvesse consolo para os justos (vv.10,11). Isso demonstra a
            misericórdia de Deus para com aqueles que permanecem fiéis, a
            despeito de tudo de errado que os cercam.
          </P>
          <P className="">
            Quanto ao segundo julgamento (vv.16-26), o profeta trouxe palavras
            duras contra as damas da corte da alta classe de Jerusalém que,
            altivas, andavam vaidosas, orgulhosas, enfeitadas. Deus disse que
            suas vestes luxuosas seriam trocadas por panos de sacos, teriam suas
            cabeças rapadas, ficariam viúvas, chorando por causa do luto.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-reinado-do-renovo-do-senhor">
            3. O reinado do Renovo do Senhor
          </H3>
          <P className="">
            Com somente seis versículos, no capítulo 4, Deus revelou ao profeta
            sobre o Renovo do Senhor (v.2) que, naquele Dia, seria de “beleza e
            de glória”. Esse Renovo é Jesus Cristo. Por Seu intermédio, Deus
            restaurará todas as coisas, não apenas para o povo escolhido, os
            judeus, mas para toda a humanidade, do passado, do presente e do
            futuro, em extensão escatológica, desde que O tenham recebido ou O
            recebam como Senhor e Salvador.
          </P>
          <P className="">
            O termo “renovo” apresenta dois sentidos: primeiro, representa o
            fruto da terra onde o profeta faz uma analogia demonstrando que
            Jesus Cristo, quando veio, veio como um rebento da raiz de Davi,
            aparentemente morta (Is 53.2; Jr 23.5; 33.15). O Novo Testamento
            explica que Jesus é o filho de Davi (por isso, a raiz de Davi) que
            traz salvação eterna a todos que se entregarem a Ele, a crerem Nele
            (Jo 15.1-8). O segundo sentido representa os frutos espirituais
            produzidos por Cristo (Is 11.1).
          </P>
          <P className="">
            O reinado de beleza e glória faz alusão ao Reino de Jesus que será
            permeado de uma beleza que olhos jamais viram, ouvidos não ouviram,
            corações não foram penetrados sobre isso (1Co 2.9); haverá coisas
            inefáveis, indizíveis (2Co 12.4). Deus purificará seu povo (v. 4),
            restaurará a fertilidade da terra e abençoará toda habitação pela
            Sua presença; será a proteção de Jerusa- lém (v.5). Acima da nuvem
            de fumaça de cada habitação, estará o tabernáculo, símbolo da
            proteção de Deus e de Sua comunhão com o Seu povo (v.6).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-parabola-da-vinha-ma-e-sua-aplicacao">
            4. A parábola da vinha má e sua aplicação
          </H3>
          <P className="">
            O filho de Amós, no capítulo 5, entoou um cântico popular ao Senhor
            (“meu amado”), por meio de uma parábola, a da vinha má. Embora essa
            parábola fale de destruição, Israel ainda foi apresentado como a
            “planta preferida do Senhor” (v.7), demonstrando o amor de Deus para
            com o Seus.
          </P>
          <P className="">
            Os frutos da vinha do Senhor dos Exércitos eram “uvas bravas” ao
            invés de “uvas boas” (v.2), significando que seus pecados trouxeram
            julgamento sobre a terra. Depois são apresentados seis “ais”
            evidenciando: cobiça (vv.8- 10), embriaguez (vv.11-17), indiferença
            (vv. 18,19), distorção de princípios (v.20), orgulho (v.21) e
            injustiça (vv. 22-25). Nos versículos 24 e 25, Deus disse que Sua
            ira não se aplacaria, da mesma forma que em Isaías 9.12,17,21 e
            10.4. Deus julgaria por completo o Seu povo por meio de escravidão e
            do cativeiro de Israel, reino do Norte, pelos assírios e de Judá,
            reino do Sul, pelos babilônios. Deus sempre levou muito a sério o
            pecado da humanidade e nada, absolutamente, deixará de ser julgado.
            A solução contra a condenação, concretizada em Jesus, é recebê-Lo,
            entregar a vida a Ele e permitir que o Espírito Santo faça habitação
            em nós.
          </P>
          <P className="">
            Nesse capítulo, aprendemos que, rapidamente, a música se transformou
            em acusação profética. Dessa forma, devemos refletir e nos
            posicionar com atenção cuidadosa em relação à nossa vida e às nossas
            ações; tudo deve estar de acordo com a vontade de Deus e com a Sua
            Palavra.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Isaías era um profeta, um porta-voz de Deus e foi usado para
            profetizar o que aconteceria no futuro, impactando diretamente o
            povo de Israel, de Judá e o mundo. Deus já tinha a solução para o
            pecado da humanidade porque, na Sua presciência, Ele já sabia o que
            iria acontecer. Deus já sabia que Jesus teria de Se entregar para o
            resgate da humanidade por meio do Seu sacrifício vicário e perfeito
            na cruz.
          </P>
          <P className="">
            Séculos antes, Isaías profetizou a vinda do Messias. Profetizou o
            julgamento de Judá e de Israel, onde a ira de Deus seria aplicada
            usando os inimigos para a concretização do Seu intento. Isaías falou
            do Reinado do Renovo do Senhor, dando detalhes celestiais de como
            será permeado de glória, de majestade; será eterno. Isaías utilizou
            cânticos, parábolas, profecias, tudo para demonstrar o cuidado, o
            amor, o zelo, a justiça, o controle de Deus sobre tudo, sobre todas
            as coisas. Isaías cumpriu o seu chamado.
          </P>
          <P className="">
            Hoje vivemos a era cristã que foi prevista pelo filho de Amós. Jesus
            já veio. Ele voltará para buscar a Sua Noiva, imaculada, lavada e
            remida pelo poder do Seu sangue. Todos aqueles que derem ouvidos à
            voz do Rei poderão entrar pelas portas das mansões celestiais e
            viverem eternamente em paz, gozo e glória diante da Sua Majestade.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – Detalhando Um Chamado</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Expor a questão do chamado de Isaías e incentivar o leitor a exercer
            o seu chamado.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 6</P>
          <P className="">
            É uma alegria imensa aprender a Palavra do Senhor, não é? Dando
            continuidade ao nosso estudo, abordaremos agora o capítulo 6 de
            Isaías, onde o profeta, mesmo perdendo um amigo, o rei, v ê o Trono
            de Deus e os serafins por cima Dele clamando uns aos outros e
            declarando que a glória do Senhor enche a terra.
          </P>
          <P className="">
            É importante observarmos que o profeta olhou em pelo menos duas
            direções. Todo chamado é assim. Ele olha para Deus, contemplando a
            Sua glória. Ele olha para si, reconhecendo seus pecados e a sua
            pequenez diante do Soberano. O que lhe resta, então, diante do
            chamado feito por Deus? Essa resposta é o que veremos hoje, tendo
            como base o posicionamento de Isaías em relação ao momento do seu
            chamado.
          </P>
          <P className="">
            É importante a observação da função do chamado na obra de Deus. No
            caso em comento, Israel estava envol- to em toda sorte de pecados,
            idolatria, alianças pagãs, consulta de adivinhos, prostituição,
            pecados sexuais e muitos outros. Deus iria levantar alguém para ser
            o Seu porta-voz, aquele que traria as revelações, os alertas e
            também exporia o julgamento do Senhor diante de todas aquelas
            práticas. Então, surge a pergunta que ressoa ainda hoje em todos os
            corações: “ A quem enviarei, e quem há de ir por nós?”. E aí, qual é
            a sua resposta? Saiba que prestaremos conta diante do Senhor dos
            Exércitos, caso não cumpramos o que nos está determinado, fazendo a
            diferença nesse mundo tão pecaminoso e maligno. Que Deus nos
            abençoe!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-isaias-olha-para-o-senhor">
            1. Isaías olha para o Senhor
          </H3>
          <P className="">
            O profeta Isaías estava, talvez, no templo quando ele viu o Senhor.
            O detalhe interessante é que Deus apareceu para o filho de Amós, no
            ano da morte do rei Uzias, aproximadamente 740 a.C. Esse rei foi um
            dos maiores líderes de Judá, apesar de ter sido disciplinado nos
            últimos anos de sua vida (2Cr 26.16-21). Ao que tudo indica, Isaías
            era amigo do rei e sentiu a grandiosa perda.
          </P>
          <P className="">
            O que seria da nação? Afinal o seu rei havia morrido. Incertezas e
            interrogações sempre surgem diante de situações desfavoráveis que
            atravessamos. O trono humano estava sem rei e o próximo a ocupar não
            se sabia como seria o seu reinado. Apesar disso, o profeta v ê o
            Senhor assentado sobre um alto e sublime trono. Entendeu? Deus
            continua tendo o domínio, o controle sobre tudo, sobre todas as
            coisas. Ele continua no Seu trono com Sua Majestade e Glória. Nada,
            absolutamente, sai do Seu controle. Aleluia!
          </P>
          <P className="">
            Atente-se que as abas das vestes do Senhor enchiam o templo,
            demonstrando toda a infinita glória de Deus. Serafins, que
            significam “seres arden- tes”, os mesmos citados em Apocalipse
            4.6-9, clamavam: “Santo, santo, santo...” (v.3). Isso nos faz
            entender que Santo é o Deus Pai, Santo é o Deus Filho e Santo é o
            Deus Espírito Santo, ou seja, a Trindade é Santa. Isaías olhou para
            o Senhor. Devemos olhar para Deus em todos os momentos. Olhe para
            Ele e jamais se deixe enfraquecer, pelo contrário, encha-se de
            força, de esperança e de renovação.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-isaias-olha-para-si-mesmo">
            2. Isaías olha para si mesmo
          </H3>
          <P className="">
            Isaías, antes de anunciar os “ais” ao povo, primeiramente confessou
            a Deus o seu próprio pecado dizendo: “ Ai de mim! Estou perdido!
            Porque sou homem de lábios impuros...” (v.5). Todas as pessoas que
            se aproximam do Senhor, diante da Sua santidade, passam pela mesma
            experiência de Isaías, que é externada por meio de confissão de
            pecados, choro, pranto, arrependimento, mudança de atitudes e
            reconhecimento de quem nós somos. Precisamos mais disso!
          </P>
          <P className="">
            Olhar para nós mesmos é uma ação que está em desuso ultimamente.
            Muito se olha para os outros, sem enxergar nossos próprios defeitos
            (Mt 7.3-5). Em contrapartida, reaprenda a olhar para si.
            Diariamente, faça análises introspectivas para alcance do
            aperfeiçoamento cristão, para uma vida de santidade, de temor e
            reverência às coisas de Deus. Reinvente-se, mas sempre baseie a
            mudança na Palavra de Deus.
          </P>
          <P className="">
            No versículo 7, um serafim, somente após o reconhecimento do
            profeta, pegou uma brasa viva no altar e tocou na boca dele. As
            brasas vivas eram levadas do altar de holocausto para dentro do
            Lugar Santíssimo no Dia da Expiação (Lv 16.12), dia de oferta pelos
            sacrifícios para expiação dos pecados do povo. Essa ação teve pelo
            menos dois significados: o perdão dos pecados por meio dos
            sacrifícios do altar (hoje é por meio do sacrifício de Jesus) e a
            purificação para exercer o chamado. Imediatamente após isso, o
            Senhor fez a grandiosa pergunta do versículo 8. É o que veremos a
            seguir.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-chega-o-momento-da-decisao">
            3. Chega o momento da decisão
          </H3>
          <P className="">
            “A quem enviarei, e quem há de ir por nós?” (v.8). Vamos analisar
            essa pergunta. Diante de todo questionamento, quem o faz, espera uma
            resposta positiva ou negativa. Será que temos o poder da decisão, da
            resposta? Creio que sim! Muitas pessoas dizem “não” para o chamado
            de Deus, recusando-se a exercer os seus ministérios e, quando os
            exercem, acham que os mesmos são descartáveis, podendo “dar um
            tempo” por causa de assuntos seculares, particulares. Observe ainda
            que Deus falou “por nós”. Quem estava em pecado era o povo de Judá,
            mas Deus se colocou junto com eles, não como pecador, o que é
            impossível para Deus, mas como Aquele que jamais abandona o Seu
            povo, como Aquele que sustenta quem diz “sim” para o chamado. Ele
            vai junto e garante o que for necessário para o cumprimento da
            missão.
          </P>
          <P className="">
            Entenda que o chamado é uma evidência do amor, da graça de Deus,
            onde Ele estende a outras pessoas a chance de serem alcançados, por
            meio de nós. Por isso, devemos ser "instrumentos" no Seu Reino para
            resgate daqueles que necessitam experimentar a porção dessa
            misericórdia. E quem o Senhor utilizará? Seres humanos, como eu e
            você. O chamado é para nós!
          </P>
          <P className="">
            Infelizmente, poucos respondem aos seus chamados! Fácil não é, mas o
            regozijo de ganhar almas para Deus, de proclamar a Sua Palavra, de
            fazer a Sua obra é indescritível. Isso sem falar que haverá galardão
            para aqueles que fizerem a obra com excelência (1 Co 3.11- 15).
            Então, “ide”!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-israel-nao-podia-ver">4. Israel não podia ver</H3>
          <P className="">
            Todo chamado tem um motivo específico ou geral. No caso de Isaías
            foi por conta dos pecados de Israel. Por isso, Deus citou o
            versículo 9: “Vá e diga a este povo: “Ouçam; ouçam, mas sem
            entender. Vejam; vejam, mas sem perceber”. À primeira vista, a
            tarefa específica de Isaías demonstrou ter sido dar ocasião ao
            endurecimento final da nação, anunciando a sua destruição. Evidente
            que o propósito divino é, antes, permitir ao povo o arrependimento,
            salvando-o das consequências dos seus pecados.
          </P>
          <P className="">
            Nesse contexto do ministério de Isaías, diante de todos os alertas,
            visões, profecias, tendo como ponto culminante os mais incríveis
            milagres já vistos, foi como se Deus agitasse uma bandeira vermelha
            de alerta diante da nação, a fim de fazê-la retroceder de seus
            pecados, de sua dureza de coração, de sua cegueira espiritual.
            Infelizmente, Israel não queria ver isso, recusou-se a enxergar
            todos os alertas.
          </P>
          <P className="">
            Quando um povo, ainda que seja o povo escolhido, se posiciona contra
            Deus, até mesmo as Suas misericórdias não se furtam de proceder ao
            julgamento dessas ações. Isaías perguntou no versículo 11: “ Até
            quando, Senhor?” Deus respondeu que seria até que a terra fosse
            assolada e o povo desaparecesse. Atente-se para o termo “décima
            parte” do versículo 13! Isso significa que um restante será deixado,
            que também será destruído, ficando somente o toco, a raiz, de onde
            ainda brotará um Rebento, um Renovo, Jesus. Que tremendo!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            Que lição abençoada! Aprendemos a importância do chamado, tendo como
            base o chamado de Isaías que é um dos maiores da Bíblia. Quando o
            filho de Amós saiu do templo, ele não era mais a mesma pessoa; agora
            era um missionário, uma voz profética diante de um povo duro, cego e
            voltado ao pecado; não era mais somente um espectador, como a
            maioria, mas um participante da obra, do Reino de Deus. Da mesma
            forma, devemos responder ao nosso chamado, o mais breve possível,
            porque as almas estão perecendo, indo para o inferno e responderemos
            por cada uma delas, caso seja por conta de nossa omissão.
          </P>
          <P className="">
            Quando nos aproximamos do Senhor, de Sua santidade, reconhecemos
            quem somos. Por isso, essa auto análise deve ser feita diariamente
            para que nos aperfeiçoemos e nos livremos dos pecados que, tão
            tenazmente, nos assedia. Todo obreiro, servo de Deus, deve viver em
            santidade, com a vida no altar do Senhor, não achando normal as
            coisas mundanas, pelo contrário, sendo instrumentos para abrir os
            olhos das demais pessoas.
          </P>
          <P className="">
            A cegueira espiritual de Israel não está distante do que se encontra
            hoje. Cada vez mais, o pecado envolve e ceifa as vidas das pessoas.
            Por isso, devemos nos posicionar, assim como Isaías, e sermos vozes
            proféticas neste mundo maligno e pecaminoso.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">Lição 4 – A Vinda do Messias Foi Profetizada</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">Texto áureo: Isaías 7-12</P>
          <P className="mt-0">
            Demonstrar o plano de Deus em relação à vinda do Messias profetizada
            por Isaías.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-introducao">Introdução</H3>
          <P className="">
            Prezado leitor e aluno, que bom reencontrá-lo para mais uma jornada
            de aprendizado! Nesta lição estudaremos sobre as profecias de Isaías
            sobre a vinda do Messias, fato tão esperado pela nação judaica e
            pelo mundo. Não se esqueça de que essas profecias aconteceram mais
            de sete séculos antes do Seu nascimento! Deus já sabia de tudo; Ele
            tem o controle de tudo, de todas as coisas. O filho de Amós foi o
            escolhido, mas teve que dizer “sim” (lição anterior), para ser a voz
            profética naquela nação.
          </P>
          <P className="">
            O contexto da época era de crescimento de poder dos assírios, que
            ameaçavam as outras nações. Por esse motivo, Israel e a Síria se
            uniram para se fortalecerem e se protegerem. O propósito deles era
            de que Judá se unisse a eles, porém, isso não aconteceu.
            Secretamente, o rei Acaz, negociava uma aliança com os assírios para
            proteger Judá (2 Rs 16.1-9). Porque Acaz não deu ouvidos a Isaías,
            Deus afastou-se dele e deu um sinal a toda a casa de Davi, conforme
            o verso 14, do capítulo 7: “Eis que a virgem conceberá e dará à luz
            um filho e lhe chamará Emanuel.” Isso se concretizou em Má- ria,
            conforme Mateus 1.23.
          </P>
          <P className="">
            Ele veio conforme foi profetizado. O sinal se cumpriu exatamente
            conforme foi predito. Deus acerta sempre! Nesta lição, você ainda
            verá mais detalhes da profecia e tudo o que o profeta Isaías previu
            sobre a vinda do Messias. Aproveite o ensino e atente-se aos
            detalhes que confirmam e chancelam a veracidade da Bíblia. Deus
            abençoe!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-um-menino-chamado-emanuel">
            1. Um menino chamado Emanuel
          </H3>
          <P className="">
            Foi profetizado que a virgem conceberia, daria à luz a um filho, e o
            Seu nome seria Emanuel (Is 7.14) e isso aconteceu exatamente
            conforme fora previsto! Emanuel significa “Deus co- nosco”. Deus
            estaria conosco, por intermédio do Seu Filho. A concepção foi pelo
            Espírito Santo (Lc 1.31-35). Jesus nasceu de uma mãe humana, mas Ele
            já existia antes de Maria, na eternidade passada (Jo 1.1-3; 3.13). O
            Messias veio para salvar o ser humano da condenação eterna, pelos
            seus pecados. Por meio da morte e do derramamento do sangue de Jesus
            na cruz, a porta, mesmo estreita (Mt 7.13,14), foi aberta. O
            sacrifício foi perfeito, o preço foi pago. A partir daí, todos
            aqueles que confessarem a Jesus Cristo como Senhor e Salvador,
            seriam salvos (Rm 10.9,10).
          </P>
          <P className="">
            A profecia da vinda do Messias foi um sinal para o rei Acaz e para o
            povo judeu, especialmente para a casa de Davi, pois Ele seria a raiz
            de Davi. O Filho seria uma lembrança de que Deus estava com o Seu
            povo e habitaria no meio dele, demonstrando todo o Seu cuidado e
            amor para com eles.
          </P>
          <P className="">
            Cristo não é sobrenome de Jesus, mas é uma palavra do latim
            “Christu”, derivado do grego “Khristós”, que significa “ungido”,
            derivado do hebraico “Mashiach” que significa “Messias”. Je- sus
            Cristo é o Messias tão esperado pelo povo judeu, mas não recebido e
            reconhe- cido por eles (Jo 1.11). Por isso a salvação foi estendida
            aos gentios. Todos que recebem a Jesus formam a Sua Igreja.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-senhor-e-a-nossa-esperanca">
            2. O Senhor é a nossa esperança
          </H3>
          <P className="">
            Judá iria pagar pela sua infidelidade e pecados. Juntamente com a
            profecia do menino Emanuel, outros dois foram mencionados no
            capítulo 8 de Isaías. Ambos eram filhos do profeta. Eram
            “Sear-Jasube”, que significa “um resto volverá” e
            “Maer-Salal-Hás-Baz”, que quer dizer “rápido-despojo-presa-segura”.
          </P>
          <P className="">
            O primeiro nome remete à certeza da consumação do cativeiro
            babilônico e Isaías teve uma visão de um remanescente libertado, de
            onde veio o nome do filho. Esse remanescente e seu glorioso futuro
            fornecem o tema central do livro de Isaías. O segundo filho do
            profeta foi por conta da Síria e Israel que seriam rapidamente
            despojados. O nome desse filho de Isaías expressava a ideia de
            rápido livramento. Foi o que aconteceu! Os assírios vitoriosos
            arremeteram com imensa força sobre Judá (v.8) e somente foram
            contidos pela intervenção poderosa do Senhor (Is 37.36). Dessa
            forma, os nomes dos filhos de Isaías evidenciaram os motivos de suas
            proclamações diárias em Judá: livramento presente, cativeiro
            vindouro e glória futura.
          </P>
          <P className="">
            O pecado sempre traz consequências (Rm 6.23). A pior das
            consequências é a morte eterna, a condenação ao inferno. Mas Deus
            sempre foi e continua sendo a única esperança para a humanidade. A
            quem recorreremos e quem poderá nos salvar? Somente Deus, em Jesus
            Cristo, a fonte da salvação e da vida eterna. A vinda e o poder do
            Messias é o que continuaremos a ver no próximo tópico.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-vinda-e-o-poder-do-messias">
            3. A vinda e o poder do Messias
          </H3>
          <P className="">
            Chegamos ao capítulo 9 de Isaías, onde a profecia do advento do
            Messias foi proferida séculos antes evidenciando como seria e o que
            envolveria tudo isso.
          </P>
          <P className="">
            O Rei dos reis e Senhor dos Senhores viria e Isaías foi a voz
            profética do Antigo Testamento que mais detalhou a Sua vinda e o Seu
            poder (Is 7.14; 8.14; 9.6,7; 22.22; 25.8; 28.16; 35.5,6; 53.2-12).
            Por isso ele é conhecido como o “profeta messiânico”. Todas as
            profecias do advento foram cumpridas. É importante saber que no Novo
            Testamento, o livro mais citado é o livro de Isaías.
          </P>
          <P className="">
            Os judeus creem que Isaías foi um profeta de Deus, mas não
            reconhecem que Jesus Cristo é o Messias. Eles não esperavam um
            salvador sofredor, mas foi isso que foi profetizado. Isaías
            descreveu de forma clara que o Messias seria sacrificado por nossos
            pecados, que seria desfigurado, moído por nossas transgressões, que
            não teria aparência, nem formosura, seria desprezado e rejeitado
            entre os homens. Em contrapartida, com a Sua morte, Ele venceria e
            reinaria para todo sempre. Por isso, Isaías também o descreveu, no
            versículo 6, como “Maravilhoso conselheiro” onde o Seu Reino será
            indescritível e governado com sabedoria e justiça; “Deus Forte",
            demonstrando a Sua força e poder; “Pai da Eternidade”, pois Seu
            Reinado é eterno, “Príncipe da Paz”, pois no Seu Reino haverá paz.
            Todos que reconhecem Jesus como O Messias e O recebem, passam a
            fazer parte do Seu Reino.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-reinado-do-messias">4. O reinado do Messias</H3>
          <P className="">
            Nos capítulos 10 a 12 do livro de Isaías, estaremos evidenciando o
            Reinado do Messias, com citação do Milênio e como fazer parte desse
            Reino.
          </P>
          <P className="">
            O filho de Amós tinha um olhar para o futuro e suas profecias nos
            fornecem detalhes gloriosos do mundo vindouro, alimentando a nossa
            esperança quanto à eternidade juntos ao nosso Rei. Será um mundo sem
            guerras, reinado por um Justo e Benevolente Soberano da descendência
            de Davi, cuja dinastia tinha chegado ao fim, mas de sua família,
            viria o Rei dos reis. Seu Reino será governado com retidão (11.1-5).
            Pertencerão a este Reino todos os remidos de todas as nações, povos,
            línguas (Ap 7.9-11) que O confessarem como Senhor e Salvador, crendo
            no Seu sacrifício.
          </P>
          <P className="">
            Ocorrerá a restauração da criação, onde a natureza poderá desfrutar
            da harmonia, regozijo e paz da mesma forma que havia antes do pecado
            (11.6- 9). Será o Reinado Milenar de Jesus. Dentre as linhas
            doutrinárias, cremos na “Dispensacionalista”. Dessa forma, Jesus
            arrebatará a igreja antes da Grande Tribulação, e voltará para
            salvar Israel antes do Milênio quando ocorrerá a Batalha do
            Armagedom, onde Satanás será preso por mil anos. A Igreja
            arrebatada, já terá passado pelo Tribunal de Cristo e pelas Bodas do
            Cordeiro. O Milênio será na Terra e Israel será a principal nação.
            Será um tempo de paz universal, júbilo, gozo, alegria, santidade,
            glória, conforto, justiça, completo conhecimento do Senhor, natureza
            abençoada e livre de maldição.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            Que bênção esse estudo de hoje e quão bom foi tê-lo como aluno!
            Mesmo Judá e Israel estarem prestes a serem levados cativos, Deus,
            por intermédio do profeta Isaías, animou o povo quanto à esperança
            futura, detalhando a vinda do Messias, onde um menino nasceria de
            uma virgem e se chamaria Emanuel, o “Deus conosco”. Deus estaria
            conosco, por intermédio de Jesus Cristo.
          </P>
          <P className="">
            A nossa esperança deve estar exclusivamente em Jesus. Ele é a nossa
            força, o nosso cântico, a nossa salvação (Is 12.6). Ele foi o único
            que deu a Sua vida em favor da humanidade e ressuscitou ao terceiro
            dia para reinar para todo sempre. Mesmo não sendo reconhecido pelo
            Seu povo, os judeus, como o Messias prometido, pelo Seu amor, a
            salvação foi estendida aos gentios e a possibilidade de passar a
            eternidade com Ele, ao invés da condenação ao inferno, desde que, é
            claro, O reconheçam e O recebam em suas vidas.
          </P>
          <P className="">
            Jesus reinará por mil anos aqui na Terra, onde a própria natureza e
            toda a criação serão restauradas à sua origem como era antes do
            pecado. A Igreja com o corpo glorificado reinará com Jesus, após ter
            recebido seu galardão no Tribunal de Cristo e ter participado da
            grande festa das Bodas do Cordeiro. Nossos corações devem arder pela
            esperança da eternidade e salvação. Maranata!
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 5 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-5">Lição 5 – A Disciplina de Deus Sobre as Nações</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">Texto áureo: Isaías 13-23</P>
          <P className="mt-0">
            Demonstrar ao leitor a disciplina de Deus sobre as nações da Terra.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-introducao">Introdução</H3>
          <P className="">
            Leitor abençoado, vamos dar continuidade ao nosso estudo do livro de
            Isaías? Hoje aprenderemos sobre a disciplina de Deus sobre as
            nações, por conta dos seus pecados, irreverência, arrogância,
            idolatria. Deus julgará todos os que se colocam como Seus inimigos,
            que preferem ficar distantes Dele, que confiam em sua força e em si
            mesmos. Ainda assim, Deus dá oportunidade para que haja
            arrependimento. Isso é amor, isso é graça, isso é misericórdia. Em
            contrapartida, o ser humano prefere se envolver em tudo que o afasta
            do Senhor, dando vazão ao pecado. O fim é um só: condenação.
          </P>
          <P className="">
            Nos capítulos 13 a 23, veremos o plano de Deus não apenas para o Seu
            povo, mas também para dez nações gentias (Babilônia, Assíria,
            Filístia, Moabe, Damasco, Etiópia, Egito, Edom, Arábia e Fenícia).
            Ainda vemos profecias contra as atitudes de Judá e de Jerusalém.
            Isso foi naquela época, mas o mesmo juízo virá sobre as nações do
            mundo atual.
          </P>
          <P className="">
            Todo líder mundial, mesmo com seu poderio militar, econômico,
            financeiro, tecnológico tem a oportunidade de reconhecer que “...o
            Altíssimo tem domínio sobre os reinos do mundo e os dá a quem ele
            quer.” (Dn 4.25). Diferente disso, eles têm escolhido o caminho da
            apostasia, da apologia ao erro, do descrédito à Bíblia e a Deus.
            Todos serão julgados pelo Soberano Juiz. Quem dera entendessem o
            Salmo 33.12 que diz: “Feliz a nação cujo Deus é o Senhor, e o povo
            que ele escolheu para a sua herança.”!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-mesmo-julgando-deus-e-misericordioso">
            1. Mesmo julgando, Deus é misericordioso
          </H3>
          <P className="">
            As atitudes do povo de Judá e de Jerusalém se confundiam com as dos
            vizinhos pagãos. O provérbio popular era “comamos e bebamos, porque
            amanhã morreremos” (Is 22.13) e “Vamos nos encharcar de bebidas
            fortes.” (Is 56.12). Foi por essas atitudes que Isaías os colocou na
            lista das nações que sentiriam o juízo de Deus. Ainda assim, a
            misericórdia do Senhor livraria Judá da invasão assíria, mas não os
            pouparia dos babilônios. Isso porque não houve arrependimento
            sincero e abandono dessas práticas malignas. O juízo viria, mas
            seria envolvido em uma porção de misericórdia.
          </P>
          <P className="">
            Misericórdia é uma característica diretamente ligada ao amor de
            Deus. No Antigo Testamento, dentre os seus significados, encontramos
            “hanan”, que dá ideia de graça e favor. Já no Novo Testamento,
            destaca-se “eleos”, que significa compaixão e piedade. Os versículos
            22 e 23, do capítulo 3, de Lamentações afirmam: “ As misericórdias
            do Senhor são a causa de não sermos consumidos, porque as suas
            misericórdias não têm fim; renovam-se cada manhã. Grande é a tua
            fidelidade.” Observe que a palavra “misericórdia” aqui está no
            plural, dando entendimento de que a mesma é infinita, renovando-se a
            cada manhã.
          </P>
          <P className="">
            Judá e Israel fizeram de tudo para não serem conquistados pelos
            inimigos, menos confiar no Senhor (Is 22.11). Em vez de se envolver
            no pecado, deveriam ter se humilhado, arrependido e pranteado. O
            juízo era iminente. Mas isso também é misericórdia (Pv 3.12; Hb
            12.6).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-a-arrogancia-das-nacoes">
            2. A arrogância das nações
          </H3>
          <P className="">
            Quanto mais poder, mais autoconfiança e mais distanciamento de Deus.
            É isso que estava acontecendo com as nações naquela época e também
            acontece nos dias atuais. A sentença foi dada por Isaías e Deus
            agiria contra a arrogância das nações.
          </P>
          <P className="">
            A Babilônia foi completamente destruída, jamais foi reconstruída e
            deixou de existir. A Assíria seria usada como instrumento de Deus
            para o cumprimento do Seu propósito, mas também aconteceria o seu
            juízo na terra de Judá, durante o reinado do rei Ezequias, onde Deus
            destruiu todo o seu exército quando este ameaçava invadir Jerusalém.
            A Filístia foi exterminada pela guerra e pela fome. Moabe, que era
            fruto do incesto de Ló com sua filha, foi invadido e arrasado pela
            Assí- ria. Damasco (Síria) sofreu juntamente com Efraim, por serem
            aliados contra Judá, sendo tomada pelos inimigos.
          </P>
          <P className="">
            Quanto à Etiópia, o profeta destacou o alvoroço entre os etíopes e a
            convocação de suas armas, e que eles iriam a Jerusalém com presentes
            para o Senhor e para o rei de Judá. O Egito foi conquistado pelo rei
            da Assíria, onde os ídolos egípcios não puderam protegê-los. Edom,
            descendentes de Esaú, seriam silenciados e não mais existiriam. A
            Arábia experimentaria um golpe terrífico dentro de um ano. A Fenícia
            teria sua economia devastada.
          </P>
          <P className="">
            Com tudo isso, aprendemos que de nada adianta o poder, a fama e o
            reconhecimento humano. A vida passa rápido e, um dia, todos
            prestarão contas de suas vidas, de seus atos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-a-disciplina-de-deus-vem-sobre-seus-inimigos">
            3. A disciplina de Deus vem sobre seus inimigos
          </H3>
          <P className="">
            Deus usou nações ímpias para executar o juízo sobre o Seu povo, por
            conta dos seus pecados. Mas, Ele não “fechou os olhos” diante dos
            erros dessas nações. É o caso da Babilônia, a primeira nação citada
            nos capítulos 13 e 14, onde a sua queda foi declarada. A Babilônia
            suplantaria a Assíria, que era a nação dominadora no tempo de
            Isaías. O império da Média, que naquela época era desconhecido,
            posteriormente destruiria a Babilônia.
          </P>
          <P className="">
            O ponto importante a ser observado é que os judeus seriam levados
            presos pelo rei babilônio, ficariam ca- tivos por setenta anos como
            escravos, mas, com a queda da Babilônia, eles voltariam para
            Jerusalém, reconstrui- riam os muros da cidade, suas casas e o
            templo, conforme descrito nos livros de Esdras e Neemias. Quando uma
            nação trata outra com injustiça, Deus não deixa de fazer justiça e
            disciplinar quem assim age. O Senhor, no Seu trono, tem o controle
            de tudo e não deixará de punir toda injustiça e pecado,
            principalmente, se o reflexo desse erro e injustiça for contra o
            povo de Deus (1Cr 16.22).
          </P>
          <P className="">
            Quando uma nação se torna inimiga de Deus e se volta contra Ele
            confiando em sua economia, riquezas e poderio militar, o Senhor
            precisa demonstrar que a confiança deve ser somente Nele. Deus é
            refúgio e fortaleza. Para isso, Ele envia profetas, vozes que
            declaram Sua perfeita vontade, dando possibilidade de arrependimento
            e, caso não haja mudança de atitudes, a punição virá, com toda
            certeza.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-o-julgamento-de-deus">4. O julgamento de Deus</H3>
          <P className="">
            Judá era a única nação que possuía a lei de Deus, no entanto, o
            Senhor fez com que outras dez nações prestassem contas a Ele. Uma
            coisa que todos devem saber é que Deus é amor, mas é justiça. Mesmo
            que pensem diferente, digam que não acreditam, discursem com
            eloquência e sabedoria contra as coisas de Deus, contra a Sua
            Palavra, o Grande Dia virá e tudo o que foi feito de errado será
            evidenciado e julgado.
          </P>
          <P className="">
            Aqueles que não reconhecerem o perfeito plano de salvação de Deus,
            por intermédio do Messias, Jesus Cristo, serão condenados (Hb 9.27).
            Comparecerão diante do Grande Trono Bran- co (Ap 20.11-15). Todos os
            grandes, os pequenos, de todas as épocas, de todos os lugares serão
            julgados, um por um segundo as suas obras. Não haverá defesa, pois
            rejeitaram o Advogado (1Jo 2.1). A única sentença será a condenação
            no lago de fogo e enxofre. Se o nome não estiver no livro da vida, o
            fim será a condenação eterna. Mas, quem recebeu a Jesus e se
            entregou a Ele, tem o nome escrito nesse livro, e não será
            condenado, pois o preço já foi pago. Comparecerão diante do Tribunal
            de Cristo (2Co 5.10) para prestação de contas de suas obras e
            recebimento do galardão, não para condenação.
          </P>
          <P className="">
            Assim como para o povo de Deus, Israel, há promessas de restauração
            e regeneração (Jr 33.8; Ez 11.17), onde eles reconhecerão a Jesus
            como o Messias (Zc 12.10), todo aquele que confessar ao Cristo com
            os lábios e crer com o coração, será salvo (Rm 10.9,10).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-conclusao">Conclusão</H3>
          <P className="">
            Que privilégio podermos aprender de Deus e sabermos o que acontecerá
            no futuro da humanidade! Todas as profecias de Isaías aconteceram ou
            acontecerão, pois descrevem o que está no coração de Deus para o ser
            humano, Seu controle sobre tudo e Sua justiça que acontece no tempo
            certo. Aprendemos que o Senhor, por conta do Seu amor, misericórdia
            e graça, sempre dá a oportunidade de arrependimento. Caso não haja,
            as consequências virão e o julgamento também.
          </P>
          <P className="">
            Imagine a prepotência de alguns líderes mundiais que governam
            confiando em si mesmos, no seu exército, armas e economia. Um dia
            estarão diante do Grande Trono Branco e responderão por seus atos,
            se não tiverem os nomes escritos no livro da vida. Caso não tenham
            se arrependido, lá estarão os ditadores que executaram e torturaram
            muitas pessoas, por conta de sua arrogância. Todos prestarão contas,
            sejam as dez nações citadas por Isaías, sejam as de todos os tempos,
            ninguém escapará.
          </P>
          <P className="">
            Qual é a solução então? A única solução se chama “Jesus Cristo”.
            Somente Ele pode nos livrar do inferno, da condenação eterna e nos
            proporcionar a dádiva de estarmos com Ele no céu. Para que arriscar?
            Não queira “pagar para ver”. Corra e receba a Jesus, caso ainda não
            tenha feito. Sim, agora mesmo, aí onde você está.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 6 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-6">Lição 6 – O Apocalipse de Isaías</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Destacar as profecias apocalípticas do livro de Isaías.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-introducao">Introdução</H3>
          <P className="mt-0">Texto áureo: Isaías 24-27</P>
          <P className="">
            Vamos estudar um pouco de escatologia baseada nas profecías
            apocalípticas de Isaías? Apocalipse vem do grego “apokálypsis” e
            significa “revelação”, “manifestação”; é a revelação das coisas que
            irão acontecer. Deus revela aos profetas sobre o que irá ocorrer,
            conforme vemos em Amós 3.7: "Certamente o Senhor Deus não fará coisa
            alguma, sem primeiro revelar o seu segredo aos seus servos, os
            profetas.”.
          </P>
          <P className="">
            Na lição anterior, baseada nos capítulos 13 a 23, aprendemos sobre
            os juízos proferidos contra dez nações e em particular, Judá. Agora,
            a ênfase do juízo é sobre o mundo inteiro. Será um julgamento
            universal e englobará pessoas de todos os tempos. Esse será o “Dia
            do Senhor”. No Novo Testamento esse dia está registrado em Mateus
            24, Marcos 13 e Apocalipse 6-19. Deus julgará todos os
            transgressores que são amantes do pecado, das obras carnais (Gl
            5.19-21). Estes não herdarão o Reino de Deus.
          </P>
          <P className="">
            O filho de Amós foi o porta-voz de alerta do povo daquela época e
            das gerações futuras sobre o julgamento dos inimigos de Deus; sobre
            a preservação do povo escolhido, os judeus, em sua terra; e sobre a
            restauração de Israel. Isaías falou sobre a abolição da morte
            proporcionando vida eterna àqueles que se renderem ao Seu Plano de
            Salvação. A despeito de todas as profecias apocalípticas, Deus
            demonstra o Seu amor, proteção e salvação à humanidade. Quem se
            submete ao Senhor, com certeza, verá que verdadeiramente "valeu a
            pena”!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-o-senhor-julgara-todos-os-transgressores">
            1. O Senhor julgará todos os transgressores
          </H3>
          <P className="">
            Deus é o Grande Juiz e jamais erra em Seus julgamentos. Ele
            utilizará a retidão de Sua Palavra para proferir a sentença. Por
            isso a Palavra de Deus é o nosso referencial. Ninguém será condenado
            injustamente. Todas as obras serão julgadas, mesmo aquelas
            praticadas em oculto. Tudo está sendo registrado. O capítulo 24 de
            Isaías demonstrou as calamidades que extinguirão a Terra, com todas
            as suas castas, ocupações e distinções sociais.
          </P>
          <P className="">
            Os pecados e transgressões da humanidade não só afetam o homem
            diretamente, mas também a natureza. Da mesma forma que sentimos e
            vemos a degradação da Terra, o homem se atola em seus pecados e
            desobediência. Há séculos, o planeta vem sendo poluído, devastado e
            Deus tem ouvido o gemido da natureza. Paulo descreveu isso em
            Romanos 1.18-2.16. Em Isaías 24.5, o profeta disse que: "A terra
            está contaminada por causa dos seus moradores, porque transgridem as
            leis, violam os estatutos e quebram a aliança eterna."
          </P>
          <P className="">
            O versículo 18 cita a abertura das “represas do alto”, nos fazendo
            lembrar do dilúvio (Gn 7.11). Jesus nos alertou em Mateus 24.37-42
            que a humanidade se tornaria como nos dias de Noé, onde todos
            comiam, bebiam, casavam-se e se davam em casamento, até o dia do
            juízo, o dilúvio. É importante sabermos que no Dia do Senhor, não
            somente a humanidade será afetada, mas também Satanás e suas hostes
            malignas. Deus julgará todos e tudo para inaugurar uma nova terra,
            um novo tempo eterno.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-a-abolicao-da-morte">2. A abolição da morte</H3>
          <P className="">
            No capítulo 25, o profeta citou que: “Tragará a morte para sempre,
            e, assim, o Senhor Deus enxugará as lágrimas de todos os rostos, e
            tirará de toda a terra o vexame do seu povo, por- que o Senhor
            falou”, dando esperança de vida eterna sem ter que passar pela
            morte, pela dor da perda de entes queridos, onde esse inimigo será
            destruído para sempre.
          </P>
          <P className="">
            Quando o homem e a mulher pecaram no Éden (Gn 3), três tipos de
            morte passaram a fazer parte da humanidade: carnal, espiritual e
            eterna. A carnal é a morte física. A espiritual é aquela pessoa que
            não tem Jesus em sua vida. Já a eterna, a pior das três, é a
            condenação eterna ao inferno. Pelo sacrifício de Jesus Cristo, essas
            mortes foram vencidas. A carnal não mais existirá pois seremos
            arrebatados e teremos corpos glorificados (1Co 15.35.49). A
            espiritual é eliminada quando recebemos a Jesus como Senhor e
            Salvador. Somos religados a Deus, pois é o nosso espírito que está
            ligado às coisas de Deus. A morte eterna não acontecerá para os
            salvos em Cristo Jesus, pois a promessa é de vida eterna.
          </P>
          <P className="">
            O último inimigo a ser vencido e destruído será a morte (1Co 15.26,
            54; Ap 21.4). Com a ressurreição de Jesus, Ele venceu a morte e nos
            dará a vida eterna. Ainda no versículo 8, é dito que “Deus enxugará
            todas as lágrimas”, sendo que na eternidade não haverá tristeza, nem
            choro. A tristeza do funeral foi transformada em alegria da festa de
            casamento. A noiva estará para sempre com o Noivo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-deus-ama-protege-e-salva-o-seu-povo">
            3. Deus ama, protege e salva o seu povo
          </H3>
          <P className="">
            O capítulo 26 se inicia com a expressão “naquele dia” que se refere
            ao “Dia do Senhor” e todas as bênçãos vinculadas que se seguirão
            quando o Senhor derrotar todos os seus inimigos. Há promessas para o
            povo de Deus. No contexto de Isaías, Samaria tinha sido destruída
            pelos inimigos assírios, Jerusalém, pelos babilônios, mas a Nova
            Jerusalém será invencível, será eterna, não haverá inimigos para o
            povo salvo.
          </P>
          <P className="">
            No “Dia do Senhor”, Deus julgará e condenará toda a arrogância das
            nações da Terra, mas Jerusalém será purificada (Zc 13.1), será
            justificada para um povo santo (Is 26.2). No versículo 3, a palavra
            “paz”, que no hebraico é “shalom”, dá entendimento muito mais além
            do que o refrigério do fim de uma guerra. Alcança bênçãos
            inimagináveis, indescritíveis, perfeitas e eternas. O verso 4
            chancela quem promete a bênção, a “rocha eterna”, o Senhor que é
            Deus Forte, Eterno. Essas promessas são para aqueles que “confiam
            sempre no Senhor”.
          </P>
          <P className="">
            Dos versículos 7 a 11, é enfatizado sobre a “vereda plaina”. Isso dá
            ideia de restauração, pois, os judeus, ao longo de sua história,
            andaram por caminhos tortuosos e atolados no pecado. A promessa é de
            caminhos aplainados, livres de oscilações e obstáculos. Dos versos
            12 a 18, são citadas as “dores de parto”, por causa das
            transgressões e pecados do povo de Israel. Mas os versos 19 a 21
            citam o “orvalho vivificador” que é aquele que dá vida nova ao solo
            e à vegetação. Essas são promessas a Israel.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-a-revivificacao-da-vinha-do-senhor">
            4. A revivificação da vinha do Senhor
          </H3>
          <P className="">
            Aprendemos na lição 2 sobre a “parábola da vinha do Senhor” (Is 5.1-
            7) que remete à tristeza fúnebre. No capítulo 27, o contexto é de um
            cântico alegre do revivescimento da vinha. É a vida, a revivificação
            do povo de Deus que estava morto e condenado. A videira é Israel. No
            tempo de Isaías, a videira estava produzindo uvas bravas, mas no
            Reino de Deus, Israel florescerá, brotará e frutificará (v. 6). A
            Bíblia ainda cita outras duas vinhas: Cristo e a Igreja (Jo 15), e a
            “videira da terra” (Ap 14.18), que simboliza os gentios na terra.
            Aqueles que pertencem a Deus, sendo Sua “vinha” devem ser ramos
            firmes, fiéis e produzir frutos bons, doces e que glorifiquem ao Seu
            Dono.
          </P>
          <P className="">
            Da mesma forma que no capítulo 26, o 27 também se inicia com
            “naquele dia”. O Leviatã será destruído. As nações ao redor de
            Israel tinham vários mitos e lendas sobre monstros marinhos e um
            deles era comparado ao leviatã ou dragão (algumas traduções citam
            “crododilo”). Deus abaterá esse inimigo, ou seja, destruirá
            definitivamente a Satanás, que aqui é figurado como esse leviatã.
            Naquele Dia, não mais haverá escravidão de Satanás e de seus falsos
            deuses que seduz o mundo para os adorar.
          </P>
          <P className="">
            Isaías finaliza o capítulo, nos ver- sículos 12 e 13, enfatizando o
            livramen- to do povo de Israel da escravidão das nações gentias. A
            vitória será comemorada na eternidade como uma festa que não terá
            fim, com muita alegria e com o “ressoar da trombeta”. Você estará
            nessa festa?
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-conclusao">Conclusão</H3>
          <P className="">
            Aleluia e Glória a Deus por mais uma lição, mais uma oportunidade de
            aprendermos da Palavra Dele! Querido leitor, pudemos ver que Isaías
            profetizou sobre coisas futuras, revelações apocalípticas, que
            aconteceriam e que acontecerão. Foi predito que haverá julgamento
            para todo o mundo, de acordo com as suas obras, mesmo aquelas
            praticadas em oculto. Assim como ocorreu o dilúvio e a humanidade
            não estava esperando o juízo, assim ocorrerá no fim dos tempos.
          </P>
          <P className="">
            Todos os inimigos de Deus serão destruídos e o último será a morte.
            Jesus venceu e tem autoridade para decretar o fim da morte. Ele
            ressuscitou e tem poder sobre a morte. Romanos 6.23 diz que “o
            salário do pecado é a morte”, mas o versículo continua e diz que
            “mas o dom gratuito de Deus é a vida eterna em Cristo Jesus”.
          </P>
          <P className="">
            Deus continua amando o Seu povo e proporcionando oportunidades de
            arrependimento e conversão. Há promessas para Israel. Promessas de
            libertação, de paz, de restauração, de eternidade, na Nova
            Jerusalém. A vinha que antes produzia somente frutos bravos,
            produzirá frutos bons, que glorificam ao Seu Dono, o Senhor Deus.
            Tudo isso será com muita festa e alegria, com o som de trombetas. O
            convite para a festa já foi feito. Você é um dos convidados?
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
            <P className="mt-0 font-semibold">Revisão Teológica:</P>
            <P className="mt-0">Pr Anderson Luiz Santos</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Rezende</P>
            <P className="mt-0">Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentarista:</P>
            <P className="mt-0">Pr. Lúcio Andres</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
