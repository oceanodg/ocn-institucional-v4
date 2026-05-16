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
      "text/markdown": "/oceano-academy/materiais-didaticos/tiago.md",
    },
  },
};

export default function CursoTiago() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton tab="novo" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">A Carta de Tiago</H1>
          <P className="mt-0">
            Uma fé provada, prática e perseverante — desafiando o cristão a
            viver com integridade, amor e obediência à Palavra.
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
                  <LinkSmall href="https://drive.google.com/file/d/1pOXTmU1U1eshlCAOiXEd94G-ewUo9kHD/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/tiago.md">
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
                  <LinkSmall href="https://drive.google.com/file/d/1lSWhKuoLkdwwcr6JCTIiAB-4s0lth6Ib/view?usp=sharing">
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
                Vídeo Recomendado
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://www.youtube.com/watch?v=jkMUhg4pqSk">
                    <SquarePlay className="size-4" />
                    Tiago
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
                  <LinkSmall href="https://drive.google.com/file/d/1I85FN0BsfSNRTeJBFJ-TQSFUBN_3StpU/view?usp=sharing">
                    <FileImage className="size-4" />
                    L1: Fé Provada
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1IfDAeQrv8xmydGV0sI-CX2t98v2fWbh5/view?usp=sharing">
                    <FileImage className="size-4" />
                    L2: Fé Vencedora
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/110e3lKDkv9EfvICl8yrY5RyfKWVIqF0Z/view?usp=sharing">
                    <FileImage className="size-4" />
                    L3: Fé Sábia
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1zKcX2Uwlqih3MeSxBTrQsnrQP6Kxch4v/view?usp=sharing">
                    <FileImage className="size-4" />
                    L4: Fé Perseverante
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Cursos Recomendados
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="/oceano-academy/cursos/carta-tiago">
                    <GraduationCap className="size-4" />
                    Tiago
                  </LinkSmall>
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
            <a href="#lesson-1">Lição 1 – A Fé Provada e Perseverante</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-tiago-servo-de-deus-e-do-senhor-jesus-cristo">
              1. Tiago: Servo de Deus e do Senhor Jesus Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-alegria-nas-provacoes-e-maturidade-espiritual">
              2. Alegria nas Provações e Maturidade Espiritual
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-tentacao-e-a-responsabilidade-humana">
              3. A Tentação e a Responsabilidade Humana
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-pratica-da-palavra-como-marca-do-cristao">
              4. A Prática da Palavra Como Marca do Cristão
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">
              Lição 2 – A Fé Que Vence a Acepção e Se Confirma em Obras
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-pecado-da-acepcao-de-pessoas">
              1. O Pecado da Acepção de Pessoas
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-lei-real-do-amor">2. A Lei Real do Amor</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-fe-sem-obras-e-morta">3. Fé Sem Obras É Morta</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-exemplos-de-abraao-e-raabe-fe-em-acao">
              4. Exemplos de Abraão e Raabe: Fé em Ação
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">
              Lição 3 – A Fé Que Controla a Língua e Manifesta Sabedoria
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-responsabilidade-dos-mestres-e-o-poder-da-lingua">
              1. A Responsabilidade dos Mestres e o Poder da Língua
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-sabedoria-terrena-versus-a-sabedoria-do-alto">
              2. A Sabedoria Terrena Versus a Sabedoria do Alto
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-as-causas-das-guerras-e-contendas">
              3. As Causas das Guerras e Contendas
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-submissao-a-deus-e-a-pratica-da-humildade">
              4. A Submissão a Deus e a Prática da Humildade
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">Lição 4 – A Fé Perseverante</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-paciencia-nas-provacoes-e-esperanca-na-vinda-do-senhor">
              1. Paciência nas Provações e Esperança na Vinda do Senhor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-contra-a-murmuracao-e-o-julgamento-precipitado">
              2. Contra a Murmuração e o Julgamento Precipitado
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-poder-da-oracao-na-vida-do-crente">
              3. O Poder da Oração na Vida do Crente
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-restauracao-dos-que-se-desviam">
              4. A Restauração dos Que Se Desviam
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#editorial">Editorial</a>
          </SummaryLi>
        </UL>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 1 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-1">Lição 1 – A Fé Provada e Perseverante</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Ensinar que a verdadeira fé resiste às provações, gera perseverança
            e se manifesta em obediência.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-para-comecar">Para Começar</H3>
          <P className="">
            A carta de Tiago é direta, prática e desafiadora. Escrita por Tiago,
            irmão do Senhor e líder da igreja em Jerusalém (At 15.13-21), ela
            foi endereçada às &quot;doze tribos que se encontram na
            Dispersão&quot; (Tg 1.1, ARA), ou seja, cristãos judeus espalhados
            pelo Império Romano, enfrentando perseguições, pressões sociais e
            provações diárias.
          </P>
          <P className="">
            Desde o início, Tiago deixa claro que a fé não é algo teórico ou
            apenas intelectual. Ele não está interessado em debates abstratos,
            mas em mostrar como a fé se traduz em comportamento, decisões e
            atitudes concretas. Como afirma Hernandes Dias Lopes (2015),
            &quot;Tiago é o mais prático dos escritores do Novo Testamento,
            chamando os cristãos a uma fé que se vê, que se toca, que se
            prova&quot;.
          </P>
          <P className="">
            Logo no primeiro capítulo, ele aborda temas essenciais da vida
            cristã: como enfrentar as provações, como lidar com as tentações, a
            necessidade de sabedoria e a importância de não apenas ouvir, mas
            praticar a Palavra. Esse é o coração da sua mensagem: fé verdadeira
            é fé vivida.
          </P>
          <P className="">
            É interessante notar que, ao contrário de Paulo, que muitas vezes
            começa suas cartas exaltando a graça e a condição do crente em
            Cristo, Tiago já inicia tratando da prática diária da fé em meio ao
            sofrimento. Ele sabia que seus leitores precisavam de orientação
            imediata para não desanimar nem se desviar.
          </P>
          <P className="">
            Portanto, ao estudarmos esta lição, seremos desafiados a enxergar
            nossas próprias provações sob a ótica da fé, a assumir
            responsabilidade diante das tentações, a buscar sabedoria do alto e
            a viver como praticantes da Palavra, e não apenas ouvintes.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-tiago-servo-de-deus-e-do-senhor-jesus-cristo">
            1. Tiago: servo de Deus e do Senhor Jesus Cristo
          </H3>
          <P className="">
            O autor se apresenta de forma simples e poderosa: &quot;Tiago, servo
            de Deus e do Senhor Jesus Cristo, às doze tribos que se encontram na
            Dispersão, saudações&quot; (Tg 1.1, ARA). Ele não se identifica como
            irmão de Jesus, mas como servo. Isso demonstra humildade e
            reconhecimento da autoridade de Cristo. Paulo também se identifica
            como servo de Cristo (Rm 1.1), mostrando que a maior honra do
            cristão é servir. Jesus ensinou: &quot;Se alguém me serve, o Pai o
            honrará&quot; (Jo 12.26, ARA).
          </P>
          <P className="">
            Tiago era líder respeitado da igreja de Jerusalém, mencionado em
            Atos e em Gálatas (At 12.17; Gl 2.9). No entanto, sua maior
            identidade não estava em sua posição ou parentesco, mas em seu
            serviço a Cristo. Como observa André Jácomo Silva (2021),
            &quot;Tiago não reivindica status, mas submete sua vida ao senhorio
            de Cristo, ensinando-nos que a liderança cristã é fundamentada no
            serviço&quot;.
          </P>
          <P className="">
            Seu público eram cristãos judeus dispersos, que enfrentavam
            perseguições, exclusão social e pobreza. A saudação inicial já traz
            um tom pastoral: ele os reconhece como povo de Deus em peregrinação.
          </P>
          <P className="">
            Da mesma forma, a nossa identidade principal também não deve estar
            em cargos, títulos ou conquistas, mas em sermos servos de Cristo.
            Assim como Tiago, devemos viver com humildade, sabendo que
            pertencemos ao Senhor e que nossa missão é servir em meio às lutas
            do cotidiano.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-alegria-nas-provacoes-e-maturidade-espiritual">
            2. Alegria nas provações e maturidade espiritual
          </H3>
          <P className="">
            Logo no início, Tiago lança uma afirmação desconcertante: &quot;Meus
            irmãos, tende por motivo de toda alegria o passardes por várias
            provações&quot; (Tg 1.2, ARA). Alegria nas provações? Esse é o
            paradoxo da fé cristã.
          </P>
          <P className="">
            Paulo ensina algo semelhante em Rm 5.3-4: &quot;E não somente isto,
            mas também nos gloriamos nas próprias tribulações, sabendo que a
            tribulação produz perseverança; e a perseverança, experiência; e a
            experiência, esperança&quot;.
          </P>
          <P className="">
            Pedro da mesma forma: &quot;Para que, uma vez confirmado o valor da
            vossa fé, muito mais preciosa do que o ouro perecível, mesmo apurado
            por fogo, redunde em louvor, glória e honra na revelação de Jesus
            Cristo&quot; (1Pe 1.7, ARA).
          </P>
          <P className="">
            As provações não são motivo de desespero, mas de crescimento. Tiago
            explica: &quot;sabendo que a provação da vossa fé, uma vez
            confirmada, produz perseverança. Ora, a perseverança deve ter ação
            completa, para que sejais perfeitos e íntegros, em nada
            deficientes&quot; (Tg 1.3-4, ARA). O sofrimento, quando enfrentado
            com fé, gera maturidade espiritual.
          </P>
          <P className="">
            Ele também lembra que, em meio às lutas, devemos pedir sabedoria a
            Deus, que dá liberalmente (Tg 1.5). Essa sabedoria não é mera
            inteligência, mas discernimento espiritual para agir conforme a
            vontade de Deus em tempos difíceis. Hernandes Dias Lopes (2015)
            comenta: &quot;As provações não são acidentes de percurso, mas
            instrumentos de Deus para nos tornar mais fortes e santos&quot;.
            Portanto, a alegria não está na dor em si, mas no fruto que ela
            produz: perseverança e maturidade.
          </P>
          <P className="">
            Quando enfrentamos dificuldades, nossa reação natural é reclamar ou
            desanimar. No entanto, Tiago nos convida a encarar as provações como
            oportunidades de crescimento espiritual, pois o cristão maduro
            aprende a confiar em Deus no meio das lutas e a enxergar nelas a mão
            de um Pai que educa e aperfeiçoa seus filhos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-tentacao-e-a-responsabilidade-humana">
            3. A tentação e a responsabilidade humana
          </H3>
          <P className="">
            Tiago distingue provação de tentação. A provação vem de fora e visa
            fortalecer a fé; a tentação surge de dentro, dos desejos
            pecaminosos. &quot;Ninguém, ao ser tentado, diga: Sou tentado por
            Deus; porque Deus não pode ser tentado pelo mal e ele mesmo a
            ninguém tenta&quot; (Tg 1.13, ARA).
          </P>
          <P className="">
            Paulo diz que: &quot;Não vos sobreveio tentação que não fosse
            humana; mas Deus é fiel e não permitirá que sejais tentados além das
            vossas forças; pelo contrário, juntamente com a tentação, vos
            proverá livramento, de sorte que a possais suportar&quot; (1Co
            10.13, ARA). Por esse motivo Jesus nos ensinou a orar: &quot;Não nos
            deixes cair em tentação; mas livra-nos do mal&quot; (Mt 6.13, ARA).
          </P>
          <P className="">
            O processo da tentação é descrito em etapas: a cobiça atrai e seduz,
            concebe o pecado, e este, uma vez consumado, gera a morte (Tg
            1.14-15). É uma progressão que começa no coração. Por isso, a
            responsabilidade não é de Deus nem das circunstâncias, mas do
            próprio homem.
          </P>
          <P className="">
            Em contraste, Tiago lembra que &quot;toda boa dádiva e todo dom
            perfeito são lá do alto, descendo do Pai das luzes&quot; (Tg 1.17,
            ARA). Deus não é fonte de tentação, mas de bênçãos. Ele nos gerou
            pela palavra da verdade, para que fôssemos primícias de suas
            criaturas (Tg 1.18). William Barclay (1956) observa: &quot;Tiago é
            realista. Ele sabe que a tentação é poderosa, mas insiste que a
            vitória é possível, pois Deus nos deu uma nova natureza&quot;.
          </P>
          <P className="">
            Isso nos desafia a assumir responsabilidade diante do pecado. Não
            podemos culpar os outros, a sociedade ou até mesmo Deus. Somos
            chamados a vigiar nossos desejos e a buscar em Deus a força para
            resistir. O cristão maduro reconhece suas fraquezas, mas confia no
            poder da Palavra que o fez nascer de novo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-pratica-da-palavra-como-marca-do-cristao">
            4. A prática da Palavra como marca do cristão
          </H3>
          <P className="">
            Tiago encerra o capítulo enfatizando que a verdadeira fé não é
            apenas ouvir, mas praticar a Palavra. &quot;Tornai-vos, pois,
            praticantes da palavra e não somente ouvintes, enganando-vos a vós
            mesmos&quot; (Tg 1.22, ARA). Jesus destaca que são
            &quot;Bem-aventurados aqueles que ouvem a palavra de Deus e a
            guardam&quot; (Lc 11.28, ARA). No mesmo sentido João afirma:
            &quot;Ora, aquele que diz que permanece nele, esse deve também andar
            assim como ele andou&quot; (1Jo 2.6, ARA).
          </P>
          <P className="">
            Tiago compara o ouvinte negligente a alguém que olha no espelho e
            logo se esquece do que viu (Tg 1.23-24). A Palavra revela nossa
            condição, mas só produz transformação se for obedecida. Por isso,
            Tiago chama de &quot;lei da liberdade&quot; (Tg 1.25) aquela Palavra
            que, obedecida, traz verdadeira vida. Além disso, ele mostra que a
            religião pura e sem mácula é prática: cuidar dos órfãos e viúvas em
            suas tribulações e guardar-se da corrupção do mundo (Tg 1.27). A fé
            autêntica se traduz em compaixão e santidade.
          </P>
          <P className="">
            Hernandes Dias Lopes (2015) comenta que &quot;Tiago não admite uma
            fé estéril. A verdadeira religião não está em ritos ou palavras, mas
            em ações que glorificam a Deus e abençoam o próximo&quot;.
          </P>
          <P className="">
            Isso nos desafia a viver uma fé prática. Não basta frequentar cultos
            ou ouvir sermões; é preciso colocar a Palavra em ação no cotidiano.
            O cristão maduro é reconhecido por suas atitudes de amor, justiça e
            santidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Nesta primeira lição, vimos que Tiago nos convida a uma fé provada e
            perseverante. Ele nos lembra que somos, antes de tudo, servos de
            Cristo; que as provações são oportunidades para crescer; que a
            tentação nasce de nossos próprios desejos; e que a verdadeira
            religião é praticar a Palavra no dia a dia.
          </P>
          <P className="">
            A carta começa confrontando nossa tendência de viver uma fé apenas
            nominal ou superficial. Em vez disso, Tiago nos chama a uma fé que
            enfrenta provações com alegria, resiste às tentações com
            responsabilidade e obedece à Palavra com ações concretas.
          </P>
          <P className="">
            O cristão é desafiado a viver de forma íntegra em meio às lutas,
            transformando cada provação em oportunidade de amadurecimento
            espiritual, rejeitando a tentação e praticando o amor e a santidade.
            Assim, mostramos ao mundo que nossa fé é real e visível.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">
          Lição 2 – A Fé Que Vence a Acepção e Se Confirma em Obras
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Mostrar que a fé verdadeira não admite acepção de pessoas e se
            comprova por meio de obras de justiça, amor e obediência a Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-para-comecar">Para Começar</H3>
          <P className="">
            O capítulo 2 da carta de Tiago é um dos mais diretos e práticos de
            todo o Novo Testamento. Ele aborda dois temas centrais: a tentação
            de tratar pessoas com distinção e a relação inseparável entre fé e
            obras.
          </P>
          <P className="">
            Na comunidade cristã do primeiro século, marcada por grandes
            desigualdades sociais, era comum a tentação de honrar os ricos e
            desprezar os pobres. Tiago denuncia essa prática como incompatível
            com a fé em Cristo: &quot;Meus irmãos, não tenhais a fé em nosso
            Senhor Jesus Cristo, Senhor da glória, em acepção de pessoas&quot;
            (Tg 2.1, ARA).
          </P>
          <P className="">
            Em seguida, ele enfrenta uma das maiores tensões teológicas do
            cristianismo: fé e obras. Para Tiago, não existe fé verdadeira sem
            prática. &quot;Assim, também a fé, se não tiver obras, por si só
            está morta&quot; (Tg 2.17, ARA). A fé não é mero assentimento
            intelectual, mas confiança viva que se expressa em ação.
          </P>
          <P className="">
            O Teólogo Hernandes Dias Lopes (2015) afirma que &quot;Tiago não
            contradiz Paulo. Enquanto Paulo combate o legalismo, Tiago combate o
            formalismo. Paulo ensina que somos salvos pela fé sem as obras;
            Tiago ensina que a fé verdadeira nunca vem sozinha, mas sempre
            acompanhada de obras&quot;.
          </P>
          <P className="">
            Portanto, esta lição nos desafia a viver uma fé coerente, sem
            discriminação social e visível em atitudes concretas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-pecado-da-acepcao-de-pessoas">
            1. O pecado da acepção de pessoas
          </H3>
          <P className="">
            Tiago inicia condenando o favoritismo. Ele pinta a cena de uma
            assembleia onde entra um homem rico, bem-vestido, e outro pobre,
            maltrapilho. Se o rico recebe um lugar de honra e o pobre é colocado
            num canto, isso é acepção pecaminosa. Ele diz: &quot;Se, todavia,
            fazeis acepção de pessoas, cometeis pecado, sendo arguido pela lei
            como transgressores&quot; (Tg 2.9, ARA).
          </P>
          <P className="">
            Deus declara em Dt 10.17: &quot;Pois o Senhor, vosso Deus, é o Deus
            dos deuses... que não faz acepção de pessoas, nem aceita
            suborno&quot;. Paulo reforça: &quot;Porque, para com Deus, não há
            acepção de pessoas&quot; (Rm 2.11, ARA).
          </P>
          <P className="">
            Essa prática era comum na sociedade greco-romana, mas não pode ter
            lugar na igreja. A fé cristã proclama que todos são iguais diante de
            Deus (Gl 3.28). Honrar os ricos e desprezar os pobres é negar o
            evangelho. William Barclay (1956) comenta: &quot;A igreja deve ser o
            lugar onde as distinções sociais desaparecem e todos são recebidos
            como irmãos&quot;.
          </P>
          <P className="">
            A igreja de hoje também enfrenta o risco da parcialidade, seja por
            status social, etnia, aparência ou posição. O cristão maduro é
            chamado a acolher a todos sem distinção, demonstrando o amor de
            Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-lei-real-do-amor">2. A lei real do amor</H3>
          <P className="">
            Tiago mostra que o mandamento central da Lei é o amor: &quot;Amarás
            o teu próximo como a ti mesmo&quot; (Tg 2.8, ARA). Essa é a
            &quot;lei real&quot;, pois foi confirmada por Cristo (Jo 13.34).
            Negligenciar o amor e praticar acepção de pessoas é quebrar toda a
            Lei.
          </P>
          <P className="">
            Jesus disse: &quot;Amarás o Senhor, teu Deus... e ao teu próximo
            como a ti mesmo. Destes dois mandamentos dependem toda a Lei e os
            Profetas&quot; (Mt 22.37-40, ARA). Paulo também afirma: &quot;Porque
            toda a lei se cumpre em um só preceito: Amarás o teu próximo como a
            ti mesmo&quot; (Gl 5.14, ARA).
          </P>
          <P className="">
            Tiago lembra ainda que o juízo será sem misericórdia para quem não
            praticar misericórdia, mas &quot;a misericórdia triunfa sobre o
            juízo&quot; (Tg 2.13, ARA). Isso mostra que a fé se expressa em amor
            prático, especialmente aos necessitados. Para Hernandes Dias Lopes
            (2015) afirma que &quot;O cristianismo não pode ser reduzido a
            doutrina sem vida. O amor é o termômetro da verdadeira fé&quot;.
          </P>
          <P className="">
            A prática do amor deve marcar nossas relações diárias. Amar o
            próximo não é opção, mas mandamento. Nossa fé só é autêntica quando
            se expressa em misericórdia, compaixão e justiça para com todos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-fe-sem-obras-e-morta">3. Fé sem obras é morta</H3>
          <P className="">
            Tiago faz a pergunta central: &quot;Meus irmãos, qual é o proveito,
            se alguém disser que tem fé, mas não tiver obras? Pode, acaso,
            semelhante fé salvá-lo?&quot; (Tg 2.14, ARA). Ele ilustra com um
            exemplo prático: se alguém vê um irmão com fome e não o ajuda, de
            nada adianta dizer &quot;vai em paz&quot;. Ele afirma: &quot;Assim,
            também a fé, se não tiver obras, por si só está morta&quot; (Tg
            2.17, ARA). Aqui está o ponto: fé verdadeira se manifesta em ações
            concretas. Uma fé que não se traduz em obras é apenas ilusão.
          </P>
          <P className="">
            O autor de Hebreus (Hb 11.8 ARA) diz: &quot;Pela fé, Abraão, quando
            chamado, obedeceu, a fim de ir para um lugar que devia receber por
            herança; e partiu sem saber aonde ia&quot;. Falando sobre Raabe, (Hb
            11.31, ARA) afirma: &quot;Pela fé, Raabe, a meretriz, não foi
            destruída com os desobedientes, porque acolheu, com paz, os
            espias&quot;. William Barclay (1956) observa: &quot;Tiago não nega a
            necessidade da fé, mas insiste que a fé genuína não pode ser
            estéril. Ela é sempre dinâmica e ativa&quot;.
          </P>
          <P className="">
            Precisamos avaliar nossa fé. Se ela não se manifesta em amor,
            serviço e justiça, é sinal de que está morta. O cristão maduro
            demonstra sua fé em atitudes que refletem o caráter de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-exemplos-de-abraao-e-raabe-fe-em-acao">
            4. Exemplos de Abraão e Raabe: fé em ação
          </H3>
          <P className="">
            Para reforçar seu ponto, Tiago cita dois exemplos: Abraão, o
            patriarca de Israel, e Raabe, uma prostituta gentia. Ambos
            demonstraram sua fé por meio de obras.
          </P>
          <P className="">
            Abraão ofereceu Isaque em obediência, mostrando que sua fé não era
            apenas teórica (Gn 22). Raabe acolheu os espias israelitas,
            arriscando sua vida por confiar no Deus de Israel (Js 2). Assim,
            Tiago conclui: &quot;Assim como o corpo sem espírito é morto, assim
            também a fé sem obras é morta&quot; (Tg 2.26, ARA).
          </P>
          <P className="">
            O Professor Hernandes Dias Lopes (2015) afirma: &quot;Abraão e Raabe
            representam extremos da sociedade: um patriarca e uma prostituta.
            Mas ambos foram justificados porque sua fé produziu obras. Isso
            mostra que o critério de Deus não é posição, mas fé obediente&quot;.
          </P>
          <P className="">
            A fé que agrada a Deus não é apenas confissão de lábios, mas
            obediência e coragem. Devemos ser como Abraão e Raabe: prontos a
            agir conforme a fé, mesmo quando isso exige sacrifício ou risco.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Nesta lição, aprendemos que a fé verdadeira não admite acepção, mas
            pratica a lei do amor. Também vimos que fé sem obras é morta, e que
            Abraão e Raabe são exemplos de fé em ação.
          </P>
          <P className="">
            Tiago não permite que nos enganemos com uma fé apenas teórica ou
            verbal. A verdadeira fé se traduz em atitudes de amor, justiça e
            obediência.
          </P>
          <P className="">
            Somos desafiados a examinar nossa fé e a viver de modo coerente.
            Isso significa acolher a todos sem distinção, praticar a
            misericórdia, servir ao próximo e demonstrar nossa confiança em Deus
            com atitudes concretas. Uma fé viva é uma fé que se vê.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">
          Lição 3 – A Fé Que Controla a Língua e Manifesta Sabedoria
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Ensinar que a fé genuína se expressa no domínio da língua e na
            sabedoria vinda do alto, em contraste com a mundanidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-para-comecar">Para Começar</H3>
          <P className="">
            Tiago é intensamente prático e não evita temas que tocam diretamente
            o cotidiano da igreja. No capítulo 3, ele aborda um dos maiores
            desafios da vida cristã: o controle da língua. Ele reconhece o poder
            destrutivo das palavras e a responsabilidade ainda maior daqueles
            que ensinam. A língua pode edificar ou destruir, abençoar ou
            amaldiçoar, aproximar de Deus ou afastar do próximo.
          </P>
          <P className="">
            No mesmo capítulo, Tiago contrasta dois tipos de sabedoria: a
            terrena, marcada por inveja e ambição egoísta, e a que vem do alto,
            caracterizada por pureza, paz e misericórdia. A fé viva deve se
            manifestar em palavras controladas e atitudes sábias.
          </P>
          <P className="">
            No capítulo 4, ele vai além e mostra a raiz das contendas: paixões
            desordenadas que guerreiam dentro do coração humano. O resultado é
            conflito, cobiça e até violência. O antídoto, segundo Tiago, é a
            submissão a Deus e a prática da humildade.
          </P>
          <P className="">
            Assim, esta lição nos desafia a viver uma fé que governa as
            palavras, busca a sabedoria do alto e se expressa em humildade e
            paz.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-responsabilidade-dos-mestres-e-o-poder-da-lingua">
            1. A responsabilidade dos mestres e o poder da língua
          </H3>
          <P className="">
            Tiago adverte que nem todos devem se tornar mestres, porque maior é
            o juízo sobre quem ensina (Tg 3.1). Isso não significa desestimular
            o ensino, mas lembrar que o dom da palavra exige responsabilidade.
          </P>
          <P className="">
            Ele compara a língua a um leme que dirige um navio ou a uma pequena
            chama que incendeia uma floresta (Tg 3.4-5). É pequena, mas tem
            poder imenso. Pode ser instrumento de bênção ou de destruição.
            &quot;Com ela bendizemos ao Senhor e Pai; também, com ela,
            amaldiçoamos os homens, feitos à semelhança de Deus&quot; (Tg 3.9,
            ARA).
          </P>
          <P className="">
            A Bíblia confirma essa advertência em Pv 18.21: &quot;A morte e a
            vida estão no poder da língua; o que bem a utiliza come do seu
            fruto&quot;. Jesus também declarou: &quot;Pois do que há em
            abundância no coração, disso fala a boca&quot; (Mt 12.34, ARA).
            Nossas palavras revelam nosso interior. William Barclay (1956)
            comenta: &quot;Poucas coisas custam tão pouco e têm tanto poder
            quanto a palavra. Tiago chama o cristão a santificar sua fala como
            reflexo de sua fé&quot;.
          </P>
          <P className="">
            O cristão deve aprender a usar a língua para edificar, consolar e
            ensinar. Isso implica vigilância diária e dependência do Espírito
            Santo. Uma fé verdadeira se manifesta também no que falamos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-sabedoria-terrena-versus-a-sabedoria-do-alto">
            2. A sabedoria terrena versus a sabedoria do alto
          </H3>
          <P className="">
            Tiago distingue claramente a falsa sabedoria da verdadeira. A
            sabedoria terrena é invejosa, egoísta e desordeira; a que vem do
            alto é pura, pacífica, amável, cheia de misericórdia e de bons
            frutos (Tg 3.17).
          </P>
          <P className="">
            Essa mesma distinção é encontrada em Pv 2.6: &quot;Porque o Senhor
            dá a sabedoria, e da sua boca vem a inteligência e o
            entendimento&quot;. Paulo também reforça em 1Co 1.18: &quot;A
            palavra da cruz é loucura para os que se perdem, mas para nós, que
            somos salvos, poder de Deus&quot;.
          </P>
          <P className="">
            Tiago nos chama a demonstrar a sabedoria do alto em &quot;mansidão
            de sabedoria&quot; (Tg 3.13). Não basta conhecimento; a sabedoria
            verdadeira se mostra em atitudes humildes e práticas. O mestre
            Hernandes Dias Lopes (2015) observa: &quot;A sabedoria que vem do
            alto não é teórica nem abstrata; é prática e relacional, gerando paz
            e reconciliação&quot;.
          </P>
          <P className="">
            O cristão é desafiado a buscar a sabedoria de Deus em oração e
            aplicá-la em decisões, relacionamentos e palavras. Essa sabedoria é
            visível e frutífera, não arrogante nem orgulhosa.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-as-causas-das-guerras-e-contendas">
            3. As causas das guerras e contendas
          </H3>
          <P className="">
            Tiago pergunta: &quot;De onde vêm as guerras e contendas que há
            entre vós? De onde, senão dos prazeres que militam na vossa
            carne?&quot; (Tg 4.1, ARA). A raiz dos conflitos está nos desejos
            egoístas. O homem deseja, mas não obtém; inveja, mas não conquista;
            e assim gera contenda.
          </P>
          <P className="">
            Paulo escrevendo aos Gálatas (Gl 5.16, ARA) confirma: &quot;Andai no
            Espírito e jamais satisfareis à concupiscência da carne&quot;. Jesus
            também declarou: &quot;Bem-aventurados os pacificadores, porque
            serão chamados filhos de Deus&quot; (Mt 5.9, ARA).
          </P>
          <P className="">
            Tiago afirma que muitos não recebem porque não pedem; e quando
            pedem, pedem mal, para gastar em seus prazeres (Tg 4.3). A solução é
            resistir ao diabo e submeter-se a Deus (Tg 4.7). William Barclay
            (1956) resume: &quot;A vida cristã é uma luta de lealdades: ou
            servimos a nós mesmos e ao mundo, ou servimos a Deus com
            humildade&quot;.
          </P>
          <P className="">
            Devemos examinar nossos desejos e reconhecer que muitos conflitos
            vêm do egoísmo. A fé genuína nos chama a viver em paz, a depender de
            Deus em oração sincera e a rejeitar a amizade do mundo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-submissao-a-deus-e-a-pratica-da-humildade">
            4. A submissão a Deus e a prática da humildade
          </H3>
          <P className="">
            Tiago confronta a arrogância humana de planejar o futuro sem
            considerar a soberania de Deus: &quot;Vós não sabeis o que sucederá
            amanhã... em vez disso, devíeis dizer: Se o Senhor quiser, não só
            viveremos, como também faremos isto ou aquilo&quot; (Tg 4.14-15,
            ARA).
          </P>
          <P className="">
            O livro de Provérbios registra (Pv 16.9) e confirma: &quot;O coração
            do homem traça o seu caminho, mas o Senhor lhe dirige os
            passos&quot;. E Pedro exorta: &quot;Humilhai-vos, portanto, sob a
            poderosa mão de Deus, para que ele, em tempo oportuno, vos
            exalte&quot; (1Pe 5.6, ARA).
          </P>
          <P className="">
            A vida cristã exige humildade em reconhecer a fragilidade da vida e
            a soberania divina. Negligenciar isso é vanglória e pecado (Tg
            4.16-17). Hernandes Dias Lopes (2015) comenta: &quot;A humildade é o
            caminho da graça. O soberbo tenta viver sem Deus, mas o humilde
            encontra nele direção e segurança&quot;.
          </P>
          <P className="">
            Devemos aprender a planejar com sabedoria, mas sempre submetendo
            tudo à vontade de Deus. A fé verdadeira é humilde e dependente,
            reconhecendo que nossa vida está em suas mãos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            Nesta lição aprendemos que Tiago trata de temas que tocam
            profundamente nossa vida diária e comunitária. Primeiro, ele nos
            lembra da grande responsabilidade dos mestres e do poder da língua.
            Palavras não são neutras: podem trazer vida ou morte, bênção ou
            maldição. O cristão é chamado a refletir Cristo também em sua fala,
            usando os lábios para edificar e não destruir.
          </P>
          <P className="">
            Depois, fomos confrontados com o contraste entre a sabedoria terrena
            e a do alto. A terrena é egoísta e cheia de inveja; a celestial é
            pura, pacífica e misericordiosa. A fé genuína não gera arrogância
            intelectual, mas humildade prática que se traduz em mansidão e boas
            obras.
          </P>
          <P className="">
            Também vimos que as guerras e contendas surgem de desejos
            desordenados que militam dentro de nós. Em vez de buscar a paz, o
            coração humano muitas vezes busca satisfação própria. Tiago nos
            chama a resistir ao diabo e a nos submeter a Deus, porque somente
            assim poderemos viver reconciliados com o próximo.
          </P>
          <P className="">
            Por fim, ele nos advertiu contra a arrogância de planejar sem
            considerar a vontade do Senhor. A verdadeira fé é humilde,
            reconhecendo que nossa vida é breve e que somente Deus dirige nossos
            caminhos.
          </P>
          <P className="">
            O cristão maduro deve aprender a controlar suas palavras, buscar
            sabedoria do alto, vencer o egoísmo e viver em dependência de Deus.
            Isso significa cultivar humildade, mansidão e submissão diária ao
            Senhor. Em um mundo de palavras duras e conflitos constantes, somos
            chamados a ser luz através de uma fé que se manifesta em sabedoria e
            paz.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">Lição 4 – A Fé Perseverante</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Ensinar que a fé genuína persevera nas provações, expressa paciência
            diante das injustiças e manifesta poder por meio da oração,
            produzindo cura, perdão e restauração espiritual.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-para-comecar">Para Começar</H3>
          <P className="">
            A carta de Tiago termina como começou: chamando os cristãos à
            coerência entre fé e prática. Se no início ele denunciou a fé sem
            obras (Tg 2.17), agora conclui mostrando que a fé verdadeira se
            revela na paciência, na oração e no amor restaurador. A comunidade
            cristã, dispersa e oprimida, precisava aprender a esperar o agir de
            Deus com perseverança e confiança.
          </P>
          <P className="">
            O capítulo 5 é um dos textos mais pastorais do Novo Testamento.
            Tiago não fala a teólogos, mas a crentes cansados, trabalhadores
            explorados, doentes e aflitos. A fé deles estava sendo testada não
            apenas por perseguições externas, mas também por tentações internas
            — impaciência, murmuração e desânimo. Por isso, ele insiste:
            &quot;Sede, pois, irmãos, pacientes, até à vinda do Senhor&quot; (Tg
            5.7, ARA).
          </P>
          <P className="">
            Essa paciência cristã não é passividade. É uma espera ativa,
            fundamentada na esperança da justiça final de Deus. Assim como o
            lavrador aguarda o fruto da terra, o crente espera o cumprimento das
            promessas (Tg 5.7–8). Hernandes Dias Lopes (2016) comenta: &quot;A
            paciência não é inércia, é fé amadurecida. Esperar é confiar que
            Deus trabalha mesmo quando não vemos&quot;.
          </P>
          <P className="">
            Além da perseverança, Tiago apresenta a oração como o coração da
            vida cristã. Ele ensina que a oração não é apenas recurso de
            socorro, mas relacionamento contínuo com o Deus soberano. O apóstolo
            encerra sua carta apontando para o poder da oração comunitária, a
            restauração dos que erram e o perdão como expressão suprema da fé
            viva.
          </P>
          <P className="">
            Em resumo, Tiago mostra que a fé perseverante é também uma fé
            intercessora, pois suporta as provações com paciência, transforma o
            sofrimento em oração e promove cura espiritual no corpo de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-paciencia-nas-provacoes-e-esperanca-na-vinda-do-senhor">
            1. Paciência nas provações e esperança na vinda do Senhor
          </H3>
          <P className="">
            Tiago começa exortando os irmãos a terem paciência &quot;até à vinda
            do Senhor&quot;. Ele usa três exemplos: o lavrador, os profetas e
            Jó. O lavrador planta, espera as chuvas e confia na colheita (Tg
            5.7). Os profetas suportaram perseguições, mas perseveraram na
            fidelidade (Tg 5.10). E Jó é o modelo supremo de constância no
            sofrimento, pois manteve a fé apesar das perdas (Tg 5.11).
          </P>
          <P className="">
            A esperança cristã não é uma fuga da realidade, mas uma força
            interior para suportar o presente. Paulo ensina o mesmo:
            &quot;Porque a nossa leve e momentânea tribulação produz para nós
            eterno peso de glória&quot; (2Co 4.17, ARA). A paciência bíblica é
            alimentada pela visão escatológica — o Senhor virá e fará justiça.
          </P>
          <P className="">
            Warren Wiersbe (1984) comenta: &quot;Tiago nos lembra que a fé que
            não espera é fé que desanima. O crente vive entre a semeadura e a
            colheita, mas o Deus da promessa nunca falha&quot;. Essa paciência é
            ativa, sustentada por oração, serviço e confiança na soberania
            divina.
          </P>
          <P className="">
            A fé madura aprende a esperar o tempo de Deus. O cristão paciente
            não se revolta com o mal, mas o vence com o bem (Rm 12.21). A
            esperança da vinda do Senhor é o antídoto contra a ansiedade e a
            amargura.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-contra-a-murmuracao-e-o-julgamento-precipitado">
            2. Contra a murmuração e o julgamento precipitado
          </H3>
          <P className="">
            O escritor: &quot;Irmãos, não vos queixeis uns dos outros, para não
            serdes julgados&quot; (Tg 5.9, ARA). O sofrimento pode nos tornar
            críticos e impacientes. Em vez de edificar, passamos a murmurar.
            Tiago lembra que o &quot;Juiz está às portas&quot; (Tg 5.9), ou
            seja, o Senhor observa nosso coração e nossas palavras.
          </P>
          <P className="">
            A murmuração é um sinal de incredulidade. O povo de Israel murmurou
            no deserto e foi impedido de entrar na terra prometida (Nm
            14.26–30). O cristão maduro confia no caráter de Deus mesmo quando
            não entende os caminhos do Senhor.
          </P>
          <P className="">
            Russell Shedd (2005) observa que &quot;Tiago não condena a dor, mas
            a impaciência que gera ressentimento. O silêncio piedoso é fruto da
            fé que descansa na justiça divina.&quot; Jesus é o exemplo máximo
            dessa atitude: &quot;Quando ultrajado, não revidava com ultraje;
            quando maltratado, não fazia ameaças&quot; (1Pe 2.23, ARA).
          </P>
          <P className="">
            Em tempos de tensão e provação, é melhor calar e orar do que
            murmurar e ferir. A fé perseverante transforma queixas em clamor e
            palavras amargas em intercessão.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-poder-da-oracao-na-vida-do-crente">
            3. O poder da oração na vida do crente
          </H3>
          <P className="">
            Nesta seção (Tg 5.13–18), Tiago revela o aspecto mais prático da fé:
            a oração em todas as circunstâncias. Ele pergunta: &quot;Está alguém
            entre vós sofrendo? Faça oração. Está alguém alegre? Cante
            louvores&quot; (Tg 5.13, ARA). A vida cristã é marcada por diálogo
            constante com Deus — em dor ou alegria.
          </P>
          <P className="">
            Ele enfatiza a oração comunitária e a oração de fé. Os presbíteros
            são chamados a orar pelos enfermos, ungindo-os com óleo em nome do
            Senhor (Tg 5.14). O foco não está no óleo em si, mas no nome de
            Jesus e na fé que invoca Seu poder. Pedro também testemunhou esse
            poder: &quot;Pela fé no nome de Jesus, é que este homem foi
            fortalecido&quot; (At 3.16, ARA).
          </P>
          <P className="">
            Tiago ainda cita Elias como exemplo de eficácia na oração:
            &quot;Elias era homem semelhante a nós, sujeito aos mesmos
            sentimentos, e orou com fervor&quot; (Tg 5.17, ARA). A oração não
            depende de quem ora, mas do Deus que responde. Hernandes Dias Lopes
            (2016) escreve: &quot;A oração eficaz é fruto de um coração reto,
            não de uma técnica espiritual. Deus ouve quem anda em comunhão com
            Ele.&quot;
          </P>
          <P className="">
            Assim, o crente maduro não trata a oração como último recurso, mas
            como primeira resposta. Orar é confiar na soberania de Deus, é
            descansar no Seu tempo e no Seu propósito. Uma igreja viva é uma
            igreja que ora.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-restauracao-dos-que-se-desviam">
            4. A restauração dos que se desviam
          </H3>
          <P className="">
            A carta é encerrada com um apelo à restauração: &quot;Se algum entre
            vós se desviar da verdade e alguém o converter, sabei que aquele que
            converte o pecador do seu caminho salvará da morte a alma dele e
            cobrirá multidão de pecados&quot; (Tg 5.19–20, ARA).
          </P>
          <P className="">
            A fé prática não é apenas pessoal — ela é comunitária. A igreja
            madura se importa com os que caem. Assim como Cristo busca a ovelha
            perdida (Lc 15.4–7), o crente deve agir com graça e verdade na
            restauração dos irmãos.
          </P>
          <P className="">
            John Stott (1996) comenta: &quot;A comunhão cristã autêntica inclui
            disciplina e amor. Não podemos ser indiferentes à queda do outro,
            pois somos guardiões uns dos outros na fé.&quot; O amor cobre
            multidão de pecados, não por omitir o erro, mas por conduzir o
            pecador ao arrependimento e à graça.
          </P>
          <P className="">
            Por fim, a fé viva é também fé restauradora. Deus nos chama a ser
            instrumentos de cura espiritual dentro do corpo de Cristo. Cada
            crente é chamado a cuidar, interceder e restaurar, como quem estende
            a mão do Bom Pastor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            A carta de Tiago termina com uma poderosa síntese da fé cristã: uma
            fé que espera, ora e restaura. A paciência, a oração e o amor são as
            colunas que sustentam a maturidade espiritual. Tiago não apresenta
            um cristianismo teórico, mas uma espiritualidade que toca a vida
            cotidiana — trabalho, sofrimento, saúde, relacionamentos e
            comunidade.
          </P>
          <P className="">
            Aprendemos que a paciência é a expressão da confiança em Deus. O
            crente maduro não busca atalhos, mas permanece firme, sabendo que a
            justiça divina prevalecerá. A oração, por sua vez, é a respiração da
            fé. Ela nos mantém ligados à fonte do poder e da paz. E o amor
            restaurador é o selo da verdadeira comunidade cristã — uma igreja
            que ora e cuida é uma igreja viva.
          </P>
          <P className="">
            Tiago encerra sem despedidas formais, talvez para nos lembrar que o
            cristianismo autêntico não termina em palavras, mas em ação. Ele
            começa e termina falando de fé viva — uma fé que transforma o
            caráter e muda o mundo.
          </P>
          <P className="">
            A fé que persevera é a fé que ora. A fé que ora é a fé que ama. Que
            o Espírito Santo nos conduza a viver uma espiritualidade madura, que
            enfrenta o sofrimento com paciência, transforma as aflições em
            oração e as quedas em restauração. Assim, nossa fé será completa —
            não apenas falada, mas vivida, como ensinou Tiago.
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
              <span className="font-semibold">Curso:</span> A Carta de Tiago
            </P>
            <P className="mt-0">
              <span className="font-semibold">Ano:</span> 2025
            </P>
            <P className="mt-0">
              <span className="font-semibold">1ª Edição</span>
            </P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Conselho Editorial:</P>
            <P className="mt-0">Pr Sinval Júlio de Souza</P>
            <P className="mt-0">Ev Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Teológica:</P>
            <P className="mt-0">Ev Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Textual:</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentarista:</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
