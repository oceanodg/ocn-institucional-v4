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
      "text/markdown": "/oceano-academy/materiais-didaticos/joao.md",
    },
  },
};

export default function CursoJoao() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton tab="novo" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Os Evangelhos: João</H1>
          <P className="mt-0">Adoração, Serviço, Comunhão e Discipulado.</P>
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
                  <LinkSmall href="https://drive.google.com/file/d/1BOOFXMBL7lvufbiHPeCTHJ-Mio4uFwl3/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/joao.md">
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
                  <LinkSmall href="https://drive.google.com/file/d/1QI-ZF9MK0GeQhomnzhXKEBMEk224-xNe/view?usp=sharing">
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
                  <LinkSmall href="https://www.youtube.com/watch?v=x2Q23ddS1TM">
                    <SquarePlay className="size-4" />
                    João 1-12
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=bKIiCTvr8CA">
                    <SquarePlay className="size-4" />
                    João 13-21
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
                  <LinkSmall href="https://drive.google.com/file/d/10p6DXURMIe8Wp6aHWsjRsGLMnQnlMqEe/view?usp=sharing">
                    <FileImage className="size-4" />
                    L1: O Verbo
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/190Z6ipThW0zty2zpG4xWD7tLlYjB_dSI/view?usp=sharing">
                    <FileImage className="size-4" />
                    L2: Nicodemos
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1x684INnqI93B0a0XrIJm9Z5fk3FdrnVT/view?usp=sharing">
                    <FileImage className="size-4" />
                    L3: O Bom Pastor
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/13f4p8Cvu9cNF5CEdGt7PhsImh7jnfe42/view?usp=sharing">
                    <FileImage className="size-4" />
                    L4: Última Ceia
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
              Lição 1 – O Verbo Encarnado: A Adoração ao Deus que Se Fez Carne
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-verbo-e-a-adoracao-a-deus">
              Tópico 1: O Verbo e a Adoração a Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-chamado-ao-servico-no-seguir-de-jesus">
              Tópico 2: O Chamado ao Serviço no Seguir de Jesus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-comunhao-e-luz-entre-os-discipulos">
              Tópico 3: Comunhão e Luz entre os Discípulos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-inicio-do-discipulado-em-joao">
              Tópico 4: O Início do Discipulado em João
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">
              Lição 2 – O Encontro Transformador com Nicodemos: Vida Renovada no
              Reino de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-adoracao-ao-deus-que-da-vida-nova">
              Tópico 1: Adoração ao Deus que Dá Vida Nova
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-servico-como-fruto-da-vida-transformada">
              Tópico 2: Serviço como Fruto da Vida Transformada
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-comunhao-baseada-na-verdade">
              Tópico 3: Comunhão Baseada na Verdade
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-discipulado-ensinar-o-novo-nascimento">
              Tópico 4: Discipulado: Ensinar o Novo Nascimento
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">
              Lição 3 – O Bom Pastor e a Comunidade dos Fiéis: Um Chamado à
              Comunhão Verdadeira
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-adoracao-ao-bom-pastor">
              Tópico 1: Adoração ao Bom Pastor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-servico-no-seguimento-do-bom-pastor">
              Tópico 2: Serviço no Seguimento do Bom Pastor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-comunhao-um-so-rebanho-um-so-pastor">
              Tópico 3: Comunhão: Um Só Rebanho, Um Só Pastor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-discipulado-conhecer-e-ensinar-a-voz-do-pastor">
              Tópico 4: Discipulado: Conhecer e Ensinar a Voz do Pastor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – A Última Ceia e a Grande Missão: O Compromisso de Fazer
              Discípulos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-adoracao-no-contexto-da-ultima-ceia">
              Tópico 1: Adoração no Contexto da Última Ceia
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-servico-ao-proximo-como-expressao-de-amor">
              Tópico 2: Serviço ao Próximo como Expressão de Amor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-comunhao-com-deus-e-com-os-irmaos">
              Tópico 3: Comunhão com Deus e com os Irmãos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-discipulado-e-a-missao-de-fazer-discipulos">
              Tópico 4: Discipulado e a Missão de Fazer Discípulos
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
        <H2 id="lesson-1">
          Lição 1 – O Verbo Encarnado: A Adoração ao Deus que Se Fez Carne
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar Jesus como o Verbo encarnado, promovendo a adoração, o
            serviço, a comunhão e o discipulado como respostas à Sua divindade e
            missão redentora.
          </P>
          <P className="">
            <span className="font-semibold">Texto Base:</span> João 1:1-18
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-introducao">Introdução</H3>
          <P className="">
            O Evangelho de João se destaca ao revelar Jesus como o Filho de Deus
            e o Verbo que se fez carne, destinado a judeus e gentios que, pela
            fé, formaram a Igreja de Cristo. Escrito entre 85 e 95 d.C. em
            Éfeso, por João, o &quot;discípulo amado&quot; e possível primo de
            Jesus, o evangelho tem um propósito profundo: apresentar a divindade
            de Jesus e Sua missão redentora. João, pela proximidade com Cristo,
            compartilha uma visão singular da vida e identidade de Jesus,
            enfatizando que Ele é a plena revelação de Deus à humanidade e,
            especialmente, à Igreja (João 19:26-27).
          </P>
          <P className="">
            Desde a introdução, o evangelho nos transporta à eternidade com as
            palavras: &quot;No princípio era o Verbo, e o Verbo estava com Deus,
            e o Verbo era Deus&quot; (João 1:1). Aqui, João faz uma declaração
            crucial: Jesus não apenas surgiu no tempo, mas existiu eternamente
            com Deus. Ele é anterior à criação, o que revela Sua divindade e o
            propósito de Sua vinda. Essa introdução não só conecta o relato à
            criação, mas também demonstra que Deus está se revelando de forma
            plena e definitiva à Sua Igreja. O Verbo encarnado é o Deus eterno
            que entra na história humana para trazer salvação, revelando a
            glória do Pai em sua totalidade: &quot;E o Verbo se fez carne e
            habitou entre nós&quot; (João 1:14). Essa revelação exige uma
            resposta de adoração, pois o Deus antes inatingível agora se tornou
            carne.
          </P>
          <P className="">
            A revelação do Verbo encarnado não só inspira a adoração, mas também
            chama ao serviço e à comunhão. João Batista, descrito como aquele
            que veio para &quot;dar testemunho da luz&quot; (João 1:8),
            exemplifica o serviço humilde de apontar outros para Cristo. Este
            serviço é o reflexo de uma vida que reconhece o Senhorio de Jesus e
            deseja que outros também O conheçam. Ao mesmo tempo, a chamada dos
            primeiros discípulos simboliza a criação de uma nova comunidade de
            fé, formada pela comunhão em Cristo (João 1:35-42). Isso nos lembra
            que a verdadeira revelação de Deus em Cristo nos une como Igreja, em
            adoração e serviço uns aos outros.
          </P>
          <P className="">
            Por fim, a resposta ao encontro com o Verbo encarnado é o
            discipulado. Assim como os primeiros discípulos prontamente seguiram
            Jesus e compartilharam com outros a descoberta do Messias, nós
            também somos chamados a discipular, ensinando e conduzindo outros a
            Cristo. O estudo de João 1:1-18 nos convida a mergulhar na
            compreensão da revelação plena de Deus em Jesus, o Verbo que estava
            antes da eternidade, e a responder a essa revelação com adoração,
            serviço, comunhão e discipulado, como Igreja de Cristo. Essa
            resposta tem sido colocada em prática diuturnamente pela nossa
            Igreja – Oceano da Graça – que continua a proclamar e viver essa
            revelação até os dias atuais.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-verbo-e-a-adoracao-a-deus">
            Tópico 1: O Verbo e a Adoração a Deus
          </H3>
          <P className="">
            João introduz o evangelho que carrega seu nome descrevendo Jesus
            como o Verbo (Logos), que estava com Deus e que era Deus (João 1:1).
            O conceito de &quot;Verbo&quot; é fundamental para compreender a
            adoração a Deus, pois revela a natureza divina e eterna de Cristo.
            &quot;Logos&quot; conecta a visão judaica da Palavra de Deus como
            meio de criação e a filosofia grega que vê o Logos como razão
            universal. João usa essa linguagem para mostrar que Jesus é a
            expressão completa da Palavra de Deus, a quem devemos adorar como
            Deus encarnado.
          </P>
          <P className="">
            A encarnação de Jesus é o clímax da revelação divina, onde a
            divindade encontra a humanidade de maneira tangível. Isso transforma
            a adoração a Jesus em algo mais profundo do que um simples ato de
            reverência; é o reconhecimento de Sua verdadeira natureza divina e
            Sua missão redentora. Em Filipenses 2:5-11, o apóstolo Paulo nos
            ensina sobre a humildade e entrega de Jesus: &quot;pois ele,
            subsistindo em forma de Deus, não julgou como usurpação o ser igual
            a Deus; antes, a si mesmo se esvaziou, assumindo a forma de servo,
            tornando-se em semelhança de homens; e reconhecido em figura humana,
            a si mesmo se humilhou, tornando-se obediente até à morte, e morte
            de cruz.&quot; Jesus, o Verbo encarnado, decidiu habitar no nosso
            meio e revelar Sua graça (João 1:14).
          </P>
          <P className="">
            Esses ensinamentos nos direcionam a adorá-Lo não por obrigação ou
            imposição, mas por reconhecer o que Ele é e o que Ele fez. A
            adoração se torna um reflexo natural e essencial de nossa vida em
            Cristo, uma prática que não conseguimos viver sem. Adoramos a Jesus
            pelo que Ele é, e não apenas pelo que Ele faz. Como a plena
            revelação de Deus, Jesus é digno de nossa adoração. Corre nas veias
            do verdadeiro cristão o desejo ardente de adorar Aquele que vive
            para todo o sempre, Jesus Cristo. A adoração a Deus, revelada em
            Jesus, é a resposta adequada à Sua encarnação e ao amor
            incomensurável que Ele demonstrou ao vir ao mundo, deixando Seu
            Trono de Glória e trazendo salvação a todos aqueles que n'Ele crer
            (João 3.16).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-chamado-ao-servico-no-seguir-de-jesus">
            Tópico 2: O Chamado ao Serviço no Seguir de Jesus
          </H3>
          <P className="">
            O Evangelho de João não apenas revela a identidade divina de Jesus,
            mas também destaca o chamado ao serviço que vem com o seguimento de
            Cristo. Desde o início de Seu ministério, Jesus demonstrou que
            segui-Lo também implica em servir aos outros. O chamado ao serviço é
            um tema central e é modelado pelo próprio exemplo de Jesus, que não
            veio para ser servido, mas para servir (Marcos 10:45).
          </P>
          <P className="">
            Certa vez, em um momento de grande aflição, fui compelido a pedir ao
            Senhor que retirasse minha vida e mantivesse a vida da minha filha.
            A resposta do Senhor foi que Ele não queria retirar nem minha vida
            nem a de minha filha, mas que desejava minha obediência ao
            ministério que Ele me havia confiado. Assim, somos chamados para
            seguir a Jesus e, durante esse caminho, devemos exercer nossos
            ministérios e servir ao Senhor, com o propósito de conectar pessoas
            a Cristo e ajudá-las a permanecerem no caminho (1 Coríntios 3:6 –
            &quot;Eu plantei, Apolo regou, mas o crescimento veio de
            Deus&quot;). Mesmo que seja o seu serviço o de plantar (levar o
            evangelho) ou o de regar (discipular), devemos realizá-lo com fé,
            pois nosso Deus é fiel e proporcionará o crescimento.
          </P>
          <P className="">
            O chamado ao serviço é claramente exemplificado por João Batista,
            que dedicou sua vida ao propósito que lhe foi designado desde o
            ventre de sua mãe. Como está escrito em Isaías 40:3: &quot;Voz do
            que clama no deserto: Preparai o caminho do Senhor, endireitai no
            ermo uma vereda para o nosso Deus.&quot; João Batista cumpriu
            fielmente esse serviço, com imenso amor à verdade, mesmo que isso
            significasse enfrentar a oposição e as retaliações do mundo. Ele se
            colocou como um soldado do Senhor, não temendo as consequências, e
            completou seu chamado com plenitude, encontrando sua recompensa na
            presença de Deus após a leve e momentânea dor deste mundo.
          </P>
          <P className="">
            No Evangelho de João, o serviço também é modelado por Jesus em Suas
            ações e ensinamentos. Em João 13:1-17, encontramos Jesus lavando os
            pés dos Seus discípulos, num ato de humildade que serve como um
            poderoso exemplo de serviço. Jesus declarou: &quot;Se eu, Senhor e
            Mestre, lavei os pés de vocês, vocês também devem lavar os pés uns
            dos outros&quot; (João 13:14). Este ato ilustra a essência do
            serviço cristão, que deve refletir o amor e a compaixão de Cristo.
          </P>
          <P className="">
            Portanto, o serviço no seguimento de Jesus não é uma mera obrigação,
            mas uma expressão de nossa nova identidade como discípulos. Seguir
            Jesus significa adotar uma postura de serviço, vivendo e
            compartilhando a mensagem de salvação e amor que Ele exemplificou.
            Assim, como João Batista e outros servos fiéis, somos chamados a
            cumprir nosso ministério com dedicação e amor, conectando pessoas a
            Cristo com amor e ajudando-as a permanecer no caminho da verdade com
            graça.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-comunhao-e-luz-entre-os-discipulos">
            Tópico 3: Comunhão e Luz entre os Discípulos
          </H3>
          <P className="">
            A escuridão é, inclusive no dicionário secular, frequentemente
            descrita como a ausência da luz. No contexto do Evangelho de João, a
            escuridão representa o estado de separação e ignorância espiritual,
            onde o caminho, a verdade e a vida de Deus não são plenamente
            conhecidas ou vividas. A luz é Cristo, que expõe as trevas internas
            do ser humano e proporciona a ele a possibilidade de enxergar seu
            estado, se arrepender e buscar auxílio d'Aquele que, além de ser a
            luz, também é o caminho, a verdade e a vida (João 14:6).
          </P>
          <P className="">
            João introduz Jesus com a declaração: &quot;N'Ele estava a vida, e a
            vida era a luz dos homens. A luz resplandece nas trevas, e as trevas
            não prevaleceram contra ela&quot; (João 1:4-5). Esta luz não é uma
            mera metáfora, mas uma realidade física e espiritual que traz
            clareza e orientação, unindo todos os que creem em Cristo e formando
            a base da comunhão cristã.
          </P>
          <P className="">
            A luz de Jesus ilumina o caminho dos crentes, revelando a natureza
            de Deus e Seus atributos, permitindo uma compreensão mais profunda
            da nossa identidade em Cristo. Em João 8:12, Jesus declarou:
            &quot;Eu sou a luz do mundo; quem me segue não andará em trevas, mas
            terá a luz da vida.&quot; Esta luz não só expõe as trevas do pecado
            e da separação, mas também une os crentes em uma comunidade de fé e
            apoio mútuo.
          </P>
          <P className="">
            A comunhão cristã é baseada na unidade que Jesus proporciona através
            de Sua luz. A verdadeira comunhão entre os discípulos é possível
            porque todos são iluminados pela mesma luz divina, que purifica e
            une. Como o apóstolo João escreveu em 1 João 1:7: &quot;Se andarmos
            na luz, como ele na luz está, temos comunhão uns com os outros, e o
            sangue de Jesus, seu Filho, nos purifica de todo pecado.&quot;
            Assim, a luz de Cristo também estabelece a base para uma comunidade
            espiritual harmoniosa e unida.
          </P>
          <P className="">
            Portanto, ao seguir a luz de Cristo, vivemos em unidade e harmonia,
            refletindo o amor e a verdade que Ele trouxe ao mundo. A comunhão
            cristã, fundamentada na luz de Jesus, é uma experiência
            enriquecedora que nos conecta uns aos outros e a Deus,
            permitindo-nos viver como uma verdadeira família.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-inicio-do-discipulado-em-joao">
            Tópico 4: O Início do Discipulado em João
          </H3>
          <P className="">
            Discipulado, refere-se ao processo de seguir e aprender com um
            mestre, no caso, Jesus Cristo. O termo &quot;discípulo&quot; vem do
            latim discipulus, que significa &quot;aluno&quot; ou
            &quot;seguidor&quot;. O discipulado é, portanto, o compromisso de
            seguir os ensinamentos de Jesus, aprender com Ele e aplicar Seus
            princípios em nossas vidas diárias. É uma jornada contínua e
            duradoura de transformação pessoal, onde o discípulo não apenas
            aprende, mas também se empenha em viver de acordo com os princípios
            e valores que Jesus ensinou.
          </P>
          <P className="">
            No Evangelho de João, vemos o início desse processo com o chamado
            dos primeiros discípulos. Em João 1:35-39, é narrado: &quot;No dia
            seguinte, João estava outra vez ali, e dois de seus discípulos. E,
            olhando para Jesus que passava, disse: 'Eis o Cordeiro de Deus!' E
            os dois discípulos ouviram-no dizer isto, e seguiram a Jesus. Jesus,
            voltando-se e vendo que o seguiam, perguntou-lhes: 'Que buscais?'
            Eles disseram-lhe: 'Rabi (que traduzido é Mestre), onde moras?'
            Respondeu-lhes: 'Vinde e vede.' Foram, pois, e viram onde morava, e
            naquele dia ficaram com Ele; era aproximadamente a hora
            décima.&quot;
          </P>
          <P className="">
            Neste relato, o chamado de André e João para seguir Jesus marca o
            início do discipulado. O convite de Jesus para que os discípulos
            &quot;viessem e vissem&quot; é um convite para uma experiência mais
            profunda com Ele, que vai além do simples acompanhamento físico. É o
            começo de um relacionamento transformador, onde a adoração e o
            aprendizado contínuo são centrais.
          </P>
          <P className="">
            O discipulado envolve mais do que somente aprender sobre Jesus; é
            também sobre praticar, viver em Sua presença, absorver Seus
            ensinamentos e integrá-los na vida cotidianamente. O fato de André e
            João passarem o dia com Jesus demonstra a importância da intimidade
            e do tempo dedicado ao aprendizado e ao relacionamento com o Mestre.
            Esse tempo de convivência permite que os discípulos conheçam Jesus
            mais profundamente e entendam melhor a Sua missão e propósito.
          </P>
          <P className="">
            Assim, o início do discipulado com Jesus é um convite para entrar em
            um processo contínuo de adoração, aprendizado e transformação. Como
            os primeiros discípulos, somos chamados a seguir Jesus, aprender com
            Ele e aplicar Seus ensinamentos em nossa vida diária, vivendo como
            verdadeiros discípulos e testemunhas de Sua graça e verdade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Desde o início, João apresentou Jesus como a luz que ilumina as
            trevas e a plena revelação de Deus, convidando-nos a adorar e servir
            com base em uma compreensão mais profunda de Sua natureza divina. A
            adoração a Jesus, reconhecendo-O como o Verbo e a luz do mundo,
            transcende o simples ato de reverência, tornando-se uma resposta
            natural ao entendimento de Sua verdadeira identidade e missão. Esse
            reconhecimento nos leva ao serviço, onde seguimos o exemplo de
            Cristo e nos dedicamos a conectar outros a Ele. O chamado ao serviço
            está intrinsecamente ligado à comunhão que a luz de Cristo
            proporciona, unindo os crentes em uma comunidade espiritual de apoio
            mútuo e crescimento.
          </P>
          <P className="">
            O discipulado, iniciado com o chamado dos primeiros discípulos, é
            uma jornada contínua que exige uma vivência diária dos ensinamentos
            de Jesus. Assim como André e João foram convidados a &quot;vir e
            ver&quot;, somos chamados a entrar em um relacionamento
            transformador com Cristo, aplicando Seus princípios em nossas vidas
            e compartilhando Sua mensagem com outros. Este processo de adoração,
            serviço e comunhão define o verdadeiro discipulado e reflete a
            missão da Igreja de Cristo.
          </P>
          <P className="">
            Nossa Igreja, Oceano da Graça, continua a viver e proclamar essas
            verdades, comprometendo-se a seguir a luz de Cristo e a expandir Seu
            Reino. O Evangelho de João não só nos apresenta a revelação de Deus
            em Jesus, mas também nos orienta a responder a essa revelação com
            uma vida de adoração, serviço, comunhão e discipulado, mantendo viva
            a missão de Cristo em nossos dias. Através dessa prática,
            reafirmamos nosso compromisso em viver como verdadeiros discípulos e
            testemunhas do amor e da verdade que Jesus trouxe ao mundo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">
          Lição 2 – O Encontro Transformador com Nicodemos: Vida Renovada no
          Reino de Deus
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Explorar o encontro entre Jesus e Nicodemos, enfatizando a
            importância do novo nascimento como uma transformação espiritual que
            nos capacita a adorar, servir, viver em comunhão e discipular outros
            na fé cristã.
          </P>
          <P className="">
            <span className="font-semibold">Texto Base:</span> João 3:1-21
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-introducao">Introdução</H3>
          <P className="">
            Nesta segunda lição, mergulharemos no encontro entre Jesus e
            Nicodemos, uma figura proeminente entre os judeus, membro do
            Sinédrio e um mestre nas Escrituras. Apesar de seu conhecimento
            religioso, Nicodemos buscou Jesus à noite, mostrando sua curiosidade
            e desejo de entender as verdades que Jesus ensinava. Neste diálogo,
            Jesus apresentou a Nicodemos o conceito fundamental do novo
            nascimento, destacando a necessidade de uma transformação espiritual
            profunda para que alguém possa ver e entrar no Reino de Deus.
          </P>
          <P className="">
            A partir desse encontro, exploraremos como o novo nascimento
            transforma nossa adoração, serviço, comunhão e discipulado. Jesus
            ensina que somente aqueles que nascem do Espírito podem
            verdadeiramente adorar a Deus e viver em comunhão com Ele e com
            outros crentes. A fé em Cristo nos leva a uma vida de serviço e ao
            compromisso de compartilhar essas verdades com o mundo, ajudando
            outros a experimentar essa mesma transformação.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-adoracao-ao-deus-que-da-vida-nova">
            Tópico 1: Adoração ao Deus que Dá Vida Nova
          </H3>
          <P className="">
            Nesta lição, somos apresentados a Nicodemos, um personagem de
            destaque. Vindo de uma família aristocrata, ele era um mestre sábio,
            fariseu e membro do Sinédrio, a mais alta corte judaica, composta
            por 70 membros notáveis. Sua posição e conhecimento das Escrituras
            faziam dele uma autoridade religiosa.
          </P>
          <P className="">
            Ao nos debruçarmos sobre o texto bíblico, percebemos que Nicodemos
            vai ao encontro de Jesus à noite. Suas razões para escolher esse
            momento podem ter sido diversas: ele poderia estar buscando
            privacidade, evitar que seus pecados fossem expostos publicamente
            ou, simplesmente, por não conseguir esperar até o amanhecer. O
            importante é que ele foi ao encontro do Mestre e, assim como
            Nicodemos, devemos buscar a Jesus e mergulhar em Seus ensinamentos,
            o que nos leva a adorá-Lo, pois Ele detém todo o conhecimento.
          </P>
          <P className="">
            Nicodemos afirma acreditar em Jesus devido aos sinais que Ele
            realizava, os quais revelavam que Jesus vinha da parte de Deus.
            Nesse momento, Jesus lhe ensinou uma verdade profunda: &quot;quem
            não nascer de novo não pode ver o Reino de Deus&quot; (João 3:3).
            Esse novo nascimento, operado pelo Espírito, é fundamental para que
            possamos adorar a Deus de maneira genuína. Adorar em espírito e em
            verdade só é possível quando passamos por uma transformação interna,
            realizada pelo Espírito Santo, que nos liberta do pecado e nos faz
            novas criaturas (2 Coríntios 5:17).
          </P>
          <P className="">
            Quando Jesus diz que é necessário &quot;nascer da água e do
            Espírito&quot; (João 3:5), Ele está se referindo à obra regeneradora
            do Espírito Santo. Esse renascimento nos capacita a reconhecer a
            majestade de Deus e a adorá-Lo, não apenas com palavras, mas com uma
            vida totalmente rendida a Ele. A verdadeira adoração nasce
            diretamente dessa transformação. Sem essa nova vida, a adoração se
            torna apenas um ritual vazio, mas, uma vez regenerados, adoramos com
            profundidade e verdade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-servico-como-fruto-da-vida-transformada">
            Tópico 2: Serviço como Fruto da Vida Transformada
          </H3>
          <P className="">
            O encontro entre Jesus e Nicodemos revelou não apenas a necessidade
            de um novo nascimento, mas também as implicações práticas dessa
            transformação. Quando Jesus falou sobre o vento em João 3:8, Ele
            disse: &quot;O vento sopra onde quer, você o ouve, mas não pode
            dizer de onde vem nem para onde vai. Assim acontece com todos os
            nascidos do Espírito.&quot; Essa metáfora nos mostra que o Espírito
            Santo age de maneira soberana e misteriosa, transformando vidas de
            modo invisível aos olhos humanos, mas evidente em seus frutos.
            Aqueles que nascem do Espírito são chamados a servir ao Senhor onde
            quer que Ele os guie, permitindo-se ser usados conforme a vontade de
            Deus. O serviço, assim, deve acontecer onde o Espírito Santo nos
            quiser usar, seja em nossa comunidade, no trabalho, ou até em
            situações inesperadas.
          </P>
          <P className="">
            A fé genuína em Cristo, como expressa no famoso João 3:16, não é uma
            fé passiva. Aquele que crê em Jesus, reconhecendo Seu sacrifício e
            recebendo a vida eterna, é chamado a viver uma vida que reflita essa
            transformação. João 3:17 nos lembra que Jesus não veio para condenar
            o mundo, mas para salvá-lo. Da mesma forma, aqueles que são
            regenerados pelo Espírito devem agir no mundo com o mesmo espírito
            de serviço e salvação.
          </P>
          <P className="">
            O vento do Espírito que transforma o coração de quem crê também
            impulsiona o cristão a servir. Como o vento que sopra de forma
            invisível, mas com efeitos poderosos, o serviço que nasce de uma
            vida transformada pelo Espírito pode não ser grandioso aos olhos do
            mundo, mas tem um impacto profundo nas vidas das pessoas ao nosso
            redor. Esse serviço é uma resposta natural à graça recebida, uma
            forma de manifestar o amor de Cristo e levar outros a experimentar o
            poder transformador do evangelho.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-comunhao-baseada-na-verdade">
            Tópico 3: Comunhão Baseada na Verdade
          </H3>
          <P className="">
            A transformação operada por Cristo não apenas nos conduz à adoração
            e ao serviço, mas também à comunhão com os outros que andam na luz.
            Em João 3:19-21, Jesus explica a Nicodemos que a luz veio ao mundo,
            mas muitos preferiram as trevas por causa de suas obras más. No
            entanto, aqueles que abraçam a verdade de Cristo vivem na luz e suas
            ações são vistas à luz de Deus. Essa luz é a própria presença de
            Jesus, que ilumina nossas vidas e nos une como uma comunidade de
            crentes.
          </P>
          <P className="">
            Em 1 João 1:7, somos lembrados: &quot;Se, porém, andarmos na luz,
            como Ele está na luz, mantemos comunhão uns com os outros, e o
            sangue de Jesus, Seu Filho, nos purifica de todo pecado.&quot; A luz
            de Cristo nos transforma de dentro para fora e nos chama a viver em
            comunhão genuína, onde há transparência, unidade e verdade. Essa
            comunhão é um reflexo da luz que recebemos de Jesus, e a partir
            dessa unidade, formamos uma comunidade de apoio mútuo, onde cada um
            é encorajado a crescer na fé.
          </P>
          <P className="">
            Andar na luz significa viver de acordo com a verdade do evangelho e,
            ao fazê-lo, nos tornamos parte de uma comunidade espiritual. Essa
            comunhão não é baseada em interesses ou conveniências, mas no
            vínculo que Cristo estabelece entre aqueles que são transformados
            por Sua luz. Como comunidade, somos chamados a viver de forma
            honesta e transparente, demonstrando o amor de Deus em nossas
            interações e edificando uns aos outros na fé.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-discipulado-ensinar-o-novo-nascimento">
            Tópico 4: Discipulado: Ensinar o Novo Nascimento
          </H3>
          <P className="">
            Nicodemos, apesar de ser um líder religioso respeitado e conhecedor
            das Escrituras, inicialmente não compreendeu o ensinamento de Jesus
            sobre o novo nascimento. Sua confusão revela a importância de um
            discipulado contínuo, onde somos chamados a aprender e a ensinar as
            verdades da Palavra de Deus. O discipulado é essencial para guiar
            aqueles que buscam entender o Reino de Deus, especialmente aqueles
            que, como Nicodemos, podem acreditar que já têm todo o conhecimento
            necessário.
          </P>
          <P className="">
            Como discutido na lição anterior, o discipulado é um processo
            contínuo, evolutivo e perene. Todo cristão, independentemente de sua
            maturidade espiritual ou posição dentro da comunidade de fé, deve
            permanecer na busca constante de aprendizado da Palavra de Deus. E,
            ao aprender, tem também a responsabilidade de contribuir para o
            crescimento espiritual dos demais irmãos na fé. Não importa o
            &quot;nível&quot; ou estágio que se tenha alcançado na caminhada
            cristã, todos permanecemos discípulos, pois sempre há algo novo para
            aprender e para compartilhar.
          </P>
          <P className="">
            Jesus não apenas ensinou sobre o novo nascimento, mas também
            exemplificou o que é ser um verdadeiro discipulador ao caminhar
            junto com Seus seguidores e ensiná-los continuamente. Assim como Ele
            fez com Nicodemos, somos chamados a compartilhar essas verdades com
            outros, levando-os a uma compreensão mais profunda do Reino de Deus.
            O discipulado envolve não só transmitir o conceito do novo
            nascimento, mas também ajudar as pessoas a experimentarem a
            transformação real e espiritual que só o Espírito Santo pode
            proporcionar. Dessa maneira, crescemos juntos como discípulos,
            avançando na fé e no entendimento do plano de Deus para nossas
            vidas.
          </P>
          <P className="">
            Após ter aprendido diretamente de Jesus, vemos que Nicodemos passou
            por uma transformação significativa em sua fé. Inicialmente
            confundido sobre o novo nascimento, ele se tornou uma figura que
            demonstrou verdadeira crença no Messias. Uma prova disso é sua
            participação no sepultamento do Senhor, quando Nicodemos supriu
            cerca de trinta quilos de especiarias, incluindo mirra e aloés, para
            embalsamar o corpo de Jesus, seguindo o costume judaico (João
            19:39-40). Este ato de cuidado e devoção mostra que ele não apenas
            compreendeu, mas também aceitou quem Jesus realmente era. Nicodemos,
            que uma vez buscou Jesus à noite, agora se revelava publicamente
            como um seguidor, participando de um momento crucial que marcou a
            vida e a morte do Messias.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            O encontro entre Nicodemos e Jesus nos ensina profundas lições sobre
            adoração, serviço, comunhão e discipulado. Ao ouvirmos as palavras
            de Jesus sobre a necessidade de &quot;nascer de novo&quot;, somos
            desafiados a buscar uma transformação espiritual genuína que nos
            capacita a adorar a Deus em espírito e em verdade. Esse novo
            nascimento é um processo que não só renova nossa adoração, mas
            também nos chama a uma vida de serviço ao próximo, refletindo a
            graça de Deus em nossas ações diárias.
          </P>
          <P className="">
            Além disso, a comunhão que resulta desse relacionamento com Cristo
            nos une como uma comunidade de crentes que vivem na luz da verdade.
            Ao andarmos na luz, somos purificados e edificados em uma comunidade
            que se apoia e cresce junto, sendo testemunhas do poder
            transformador do evangelho. A luz de Cristo nos chama a uma vida de
            transparência, honestidade e amor, onde a unidade entre os crentes
            reflete a presença de Deus.
          </P>
          <P className="">
            Por fim, o discipulado nos lembra que o aprendizado é contínuo.
            Assim como Nicodemos cresceu em sua compreensão de Jesus, devemos
            também crescer e ajudar outros a avançarem no conhecimento do Reino
            de Deus. O discipulado envolve ensinar, aprender e viver a
            transformação que o novo nascimento proporciona, guiados pelo
            Espírito Santo, que nos capacita a viver como verdadeiros seguidores
            de Cristo, servindo, adorando e caminhando na luz.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">
          Lição 3 – O Bom Pastor e a Comunidade dos Fiéis: Um Chamado à Comunhão
          Verdadeira
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Explorar a figura de Jesus como o Bom Pastor, enfatizando Seu
            cuidado sacrificial por Suas ovelhas e desafiando os crentes a
            refletirem sobre a adoração, o serviço, a comunhão e o discipulado,
            seguindo Seu exemplo e promovendo a unidade dentro da comunidade de
            fé.
          </P>
          <P className="">
            <span className="font-semibold">Texto Base:</span> João 10:1-18
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-introducao">Introdução</H3>
          <P className="">
            Nesta lição, exploraremos a pessoa de Jesus Cristo como o Bom
            Pastor, conforme descrito em João 10. Jesus se revelou como aquele
            que conhece, cuida e sacrifica Sua vida por Suas ovelhas,
            estabelecendo uma relação única com Seu povo. Esse texto nos mostra
            o profundo cuidado de Cristo pelo Seu rebanho e Seu desejo de unir
            os crentes em um só corpo.
          </P>
          <P className="">
            Ao compreendermos essa relação, somos chamados a refletir sobre o
            que significa adorar, servir e viver em comunhão, seguindo o exemplo
            do Bom Pastor. Jesus não apenas cuida das Suas ovelhas, mas também
            as convida para uma vida abundante, marcada pela segurança de Sua
            liderança e pela unidade entre os crentes.
          </P>
          <P className="">
            Neste contexto, o discipulado se torna um compromisso contínuo de
            aprender e ensinar a reconhecer a voz de Cristo em meio às muitas
            distrações, promovendo a edificação da Igreja e a prática de uma
            vida cristã autêntica. A lição nos desafia a viver de acordo com o
            exemplo do Bom Pastor, cultivando uma adoração verdadeira, um
            serviço dedicado e uma comunhão profunda com nossos irmãos na fé.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-adoracao-ao-bom-pastor">
            Tópico 1: Adoração ao Bom Pastor
          </H3>
          <P className="">
            Na época de Jesus Cristo, o trabalho de um pastor de ovelhas era
            essencial e exigia dedicação constante. Ele era responsável por
            proteger o rebanho de predadores e ladrões, guiar as ovelhas por
            terrenos difíceis em busca de alimento e água, e cuidar
            individualmente de cada animal, especialmente das ovelhas feridas ou
            perdidas. O pastor passava noites vigiando o rebanho, frequentemente
            dormindo na entrada do redil para protegê-las. Esse papel exigente
            de cuidado, liderança e sacrifício é uma metáfora poderosa que Jesus
            utilizou para descrever Sua relação com Seu povo como o Bom Pastor.
          </P>
          <P className="">
            Jesus usou essa metáfora para que o povo da época entendesse com
            clareza. Assim, eles seriam capazes de reconhecer que o Bom Pastor é
            digno de toda adoração, tendo como base Seu sacrifício voluntário
            por Suas ovelhas. Em João 10:11, Ele declarou: &quot;Eu sou o bom
            pastor. O bom pastor dá a sua vida pelas ovelhas.&quot; Esse
            sacrifício supremo de Jesus foi um ato de amor que nos trouxe
            salvação. Ele deu Sua própria vida para nos redimir, e esse gesto
            nos conduz a uma adoração verdadeira e profunda. Por meio de Sua
            morte e ressurreição, Jesus nos oferece segurança da salvação eterna
            e, consequentemente, de um relacionamento pessoal com Ele. Por isso,
            nossa adoração deve ser uma resposta ao Seu imenso amor e à entrega
            de Sua vida por nós. Ao compreendermos que Ele é o Pastor que nos
            guia e protege, adoramos não apenas com palavras, mas com uma vida
            completamente rendida a Ele.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-servico-no-seguimento-do-bom-pastor">
            Tópico 2: Serviço no Seguimento do Bom Pastor
          </H3>
          <P className="">
            Quando Jesus afirma que dá a vida pelas Suas ovelhas, Ele não apenas
            revela o sacrifício supremo por amor ao Seu povo, mas também nos
            ensina o valor do serviço ao próximo. Ao seguir Seu exemplo, somos
            chamados a servir com o mesmo amor e dedicação, cuidando dos outros
            como cuidamos de nós mesmos. Jesus se agrada daqueles que O servem
            por meio do cuidado ao próximo, contribuindo para a edificação da
            Igreja, Sua noiva, e para o crescimento espiritual da comunidade de
            fé.
          </P>
          <P className="">
            Em João 10:14-15, Jesus declarou: &quot;Eu sou o bom pastor; conheço
            as minhas ovelhas, e elas me conhecem... e dou a minha vida pelas
            ovelhas.&quot; Seu cuidado é relacional e sacrificial, pois Ele
            conhece Suas ovelhas individualmente e está disposto a se entregar
            por elas. Esse exemplo nos ensina que, como seguidores de Cristo,
            devemos servir aos outros com o mesmo amor sacrificial, buscando o
            bem-estar do próximo. Jesus não é apenas o Pastor que cuida, mas
            também o modelo de serviço que devemos imitar.
          </P>
          <P className="">
            Nosso serviço ao próximo, inspirado pelo exemplo do Bom Pastor, deve
            ser contínuo e perseverante, até o dia em que Ele venha buscar Seus
            servos para o banquete daquele Grande Dia. Assim como o cuidado de
            Jesus não cessa, o nosso também deve ser constante.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-comunhao-um-so-rebanho-um-so-pastor">
            Tópico 3: Comunhão: Um Só Rebanho, Um Só Pastor
          </H3>
          <P className="">
            Vimos na primeira lição que o evangelho escrito pelo discípulo João
            foi direcionado tanto a judeus quanto a gentios, formando a Igreja
            de Cristo, que abrange todos os tempos e nações. O verso 16 do
            capítulo 10 de João menciona &quot;outras ovelhas&quot;. Essas
            ovelhas referem-se aos gentios que, juntamente com os judeus que
            aceitaram Jesus como o Messias, viriam a constituir o corpo de
            Cristo. Com isso, Jesus antecipa a missão de levar o evangelho aos
            gentios após Sua morte e ressurreição.
          </P>
          <P className="">
            Já, em João 10:16, Jesus falou sobre unir Suas ovelhas em um só
            rebanho: &quot;Tenho outras ovelhas que não são deste aprisco.
            Também devo conduzi-las. Elas ouvirão a minha voz, e haverá um só
            rebanho e um só pastor.&quot; Esse versículo revela o desejo de
            Cristo pela unidade de Seu povo. Jesus une crentes de diferentes
            origens, culturas e nações em uma só comunhão, todos sob Seu cuidado
            e liderança. A unidade é um reflexo da obra redentora de Cristo, que
            nos torna um só corpo, uma só família. Como parte deste rebanho,
            somos chamados a viver em comunhão uns com os outros, promovendo a
            paz e a unidade dentro da comunidade de fé. Essa unidade é baseada
            na obediência à voz do Bom Pastor e na comunhão uns com os outros,
            refletindo o amor que Ele tem por todos.
          </P>
          <P className="">
            O apóstolo Paulo confirmou essa visão universal do evangelho em 2
            Coríntios 5:14, onde escreveu: &quot;Pois o amor de Cristo nos
            constrange, porquanto julgamos assim: um morreu por todos; logo,
            todos morreram.&quot; Este versículo enfatiza que a morte de Cristo
            foi um ato de redenção para todas as pessoas, independentemente de
            sua origem nacional ou cultural. Jesus morreu por todos, incluindo
            gregos, romanos, judeus, brasileiros e qualquer outra pessoa de
            qualquer nação. Este princípio revela que a missão da Igreja é
            inclusiva, aceitando as pessoas como estão, mas não compactuando que
            permaneçam em estado pecaminoso. A busca pela santidade é um
            princípio contínuo para todos que desejam se unir ao corpo de
            Cristo. Nossa tarefa é promover a unidade e a comunhão entre todos
            os que são chamados por Cristo, refletindo o amor abrangente e
            sacrificial de nosso Bom Pastor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-discipulado-conhecer-e-ensinar-a-voz-do-pastor">
            Tópico 4: Discipulado: Conhecer e Ensinar a Voz do Pastor
          </H3>
          <P className="">
            O discipulado, dentro do contexto do Bom Pastor, não se limita a
            aprender a reconhecer a voz de Jesus, mas também inclui a missão de
            ensinar outros a fazerem o mesmo. Em João 10:3-4, Jesus afirmou:
            &quot;O porteiro abre a porta, e as ovelhas ouvem a sua voz; Ele
            chama as suas próprias ovelhas pelo nome e as leva para fora. Quando
            conduz as suas próprias ovelhas, vai à frente delas, e estas o
            seguem, porque conhecem a sua voz.&quot; Este versículo enfatiza a
            importância de ouvir e seguir a voz de Cristo. Isso pode ser
            comparado à capacidade que os cristãos têm, nos dias atuais, de
            discernir a verdadeira Palavra de Deus das interpretações que visam
            agradar os anseios e desejos humanos, mantendo-se fiéis ao
            ensinamento verdadeiro de Cristo.
          </P>
          <P className="">
            Um dos maiores desafios do discipulado é ensinar outros a discernir
            a voz de Cristo em meio às muitas distrações e vozes que competem
            por nossa atenção. Assim como as ovelhas reconhecem a voz do Pastor
            e O seguem, nós, como discípulos, devemos estar atentos à liderança
            de Jesus e instruir outros a fazerem o mesmo. O discipulado é um
            processo contínuo de aprendizado e ensino, onde buscamos aprofundar
            nossa relação com Cristo e orientar outros a fazerem o mesmo.
          </P>
          <P className="">
            Este princípio é corroborado em Hebreus 5:14, que diz: &quot;Mas o
            alimento sólido é para os adultos, para aqueles que, pela prática,
            têm as suas faculdades exercitadas para discernir tanto o bem como o
            mal.&quot; Este versículo reforça a ideia de que o amadurecimento
            espiritual e a capacidade de discernir a voz de Cristo vêm com
            prática e ensino constante. Assim, o discipulado não é apenas uma
            jornada individual, mas uma missão de crescimento coletivo na fé e
            na compreensão da voz de nosso Bom Pastor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            A figura do Bom Pastor, apresentada por Jesus, é central para
            entender nossa relação com Ele e com a comunidade de fé. O cuidado
            sacrificial e a dedicação constante do pastor para com o seu rebanho
            se refletem na forma como Jesus se relaciona conosco, oferecendo Sua
            vida como o sacrifício definitivo por nossas almas. A adoração ao
            Bom Pastor deve ser uma resposta natural a esse amor imensurável,
            levando-nos a viver uma vida de rendição total a Ele. Esta adoração
            vai além de palavras, manifestando-se em ações que refletem o
            cuidado e o amor que Ele demonstrou.
          </P>
          <P className="">
            Além disso, nosso serviço ao próximo deve seguir o exemplo de
            Cristo, mantendo-se constante até o dia em que Ele retornará para
            reunir Suas ovelhas. O discipulado, então, não se limita a ouvir e
            reconhecer a voz de Jesus, mas também envolve o ensino e a
            orientação contínua de outros para que também possam discernir Sua
            voz. Como destaca Hebreus 5:14, nosso crescimento espiritual e
            discernimento vêm da prática constante e do ensino. Em conjunto,
            estes princípios garantem que, enquanto vivemos em comunhão e
            servimos ao próximo, permanecemos fiéis à missão de Cristo e
            preparados para Sua vinda.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">
          Lição 4 – A Última Ceia e a Grande Missão: O Compromisso de Fazer
          Discípulos
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar a Última Ceia como um momento central de ensino e
            prática, onde Jesus demonstrou o amor, serviço, comunhão e a missão
            de fazer discípulos, desafiando os crentes a aplicarem esses
            princípios em suas vidas diárias e dentro da comunidade cristã.
          </P>
          <P className="">
            <span className="font-semibold">Texto Base:</span> João 13-17
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-introducao">Introdução</H3>
          <P className="">
            Na última ceia, Jesus compartilhou ensinamentos profundos e
            marcantes com Seus discípulos, estabelecendo o tom para o que viria
            a ser a essência da vida cristã. Mais do que uma simples refeição,
            este momento foi carregado de simbolismo, refletindo o amor, o
            serviço, a comunhão e a missão de Cristo. Ele falou sobre o amor de
            Deus, demonstrou de maneira prática e poderosa ao lavar os pés de
            Seus discípulos. Este gesto de humildade ecoa até hoje como um
            exemplo de adoração e serviço, mostrando-nos que a verdadeira
            adoração deve incluir uma vida de entrega ao próximo.
          </P>
          <P className="">
            Jesus, ao realizar esse ato, nos constrange com Seu amor e humildade
            (2 Coríntios 5:14), ensinando-nos que a adoração não é apenas honrar
            a Deus com palavras, mas também com ações. Sua vida foi um exemplo
            claro de como devemos nos comportar: servindo aos outros como Ele
            serviu a nós. À medida que seguimos o exemplo de Cristo, aprendemos
            que adorar a Deus implica em nos despirmos do orgulho e nos
            entregarmos ao serviço humilde, tanto para Deus quanto para aqueles
            ao nosso redor.
          </P>
          <P className="">
            Além disso, Jesus nos chamou para uma vida de comunhão com Ele e
            também com nossos irmãos em Cristo. Sua oração pela unidade (João
            17) revela o desejo profundo de que vivamos em harmonia uns com os
            outros, refletindo o relacionamento íntimo que Ele tem com o Pai.
            Esta comunhão é um testemunho para o mundo e um reflexo da adoração
            autêntica, que não se limita ao nosso relacionamento individual com
            Deus, mas que nos chama a uma vida de unidade e amor em comunidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-adoracao-no-contexto-da-ultima-ceia">
            Tópico 1: Adoração no Contexto da Última Ceia
          </H3>
          <P className="">
            Na cena da Última Ceia, Jesus realizou um ato que surpreendeu Seus
            discípulos: Ele lavou os pés deles (João 13:1-5). O Senhor nos
            constrange com Seu amor e humildade, como Paulo descreve em 2
            Coríntios 5:14: &quot;Pois o amor de Cristo nos constrange&quot;. Ao
            ver essa manifestação de amor e serviço, nosso coração é movido a
            adorá-Lo, não apenas por Sua grandeza, mas também pela Sua
            disposição de se humilhar em favor de nós. Jesus, o Senhor do
            universo, escolheu servir, nos ensinando que a verdadeira adoração
            nasce da resposta a esse amor que nos envolve e nos chama a seguir o
            Seu exemplo.
          </P>
          <P className="">
            Vale destacar que na época de Jesus, o ato de lavar os pés era uma
            tarefa geralmente reservada aos servos ou escravos. Era um gesto de
            hospitalidade, uma vez que as pessoas andavam por caminhos
            empoeirados e sujos usando sandálias, o que fazia com que seus pés
            ficassem extremamente sujos. O anfitrião da casa, ao receber seus
            convidados, normalmente designava um servo para lavar os pés
            daqueles que chegavam. Ao realizar essa ação na Última Ceia, Jesus
            se colocou na posição de um servo, surpreendendo Seus discípulos,
            pois Ele, sendo o Mestre, escolheu fazer algo que normalmente seria
            considerado indigno de alguém em Sua posição.
          </P>
          <P className="">
            Esse exemplo de serviço é um chamado para que vivamos uma vida
            rendida a Cristo em cada detalhe, desde a oração até nossas ações
            cotidianas. Quando nos colocamos à disposição de Deus e dos outros,
            seguimos o padrão estabelecido por Cristo. Como Ele diz em João
            13:14-15: &quot;Se Eu, Senhor e Mestre, vos lavei os pés, vós também
            deveis lavar os pés uns dos outros.&quot; Esse ato cria a ponte para
            o próximo tópico, em que exploraremos o serviço como uma expressão
            do amor que nasce da verdadeira adoração a Jesus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-servico-ao-proximo-como-expressao-de-amor">
            Tópico 2: Serviço ao Próximo como Expressão de Amor
          </H3>
          <P className="">
            O exemplo de Cristo ao lavar os pés dos discípulos não foi apenas um
            ato isolado, mas um reflexo do maior mandamento: &quot;Um novo
            mandamento vos dou: que vos ameis uns aos outros; assim como Eu vos
            amei&quot; (João 13:34). Esse amor prático deve ser a base do
            serviço cristão. Silas Queiroz observa que o serviço ao próximo é a
            maneira mais eficaz de demonstrar o amor de Deus. O amor genuíno,
            que resulta em ações concretas, é o fundamento do discipulado de
            Cristo. Na nossa Igreja Oceano da Graça, nosso objetivo é não apenas
            falar sobre o amor, mas servir com amor e graça, inspirados pelo
            exemplo de Jesus. O serviço ao próximo é um reflexo direto da
            adoração verdadeira.
          </P>
          <P className="">
            Em sua primeira carta, João reforçou essa conexão entre amor e
            serviço: &quot;Filhinhos, não amemos de palavra, nem de língua, mas
            de fato e de verdade&quot; (1 João 3:18). O serviço cristão não é
            teórico, mas prático, devendo ser vivido com amor genuíno. Somos
            chamados a nos doar e a cuidar uns dos outros, mostrando o amor de
            Deus em ação, assim como Cristo fez. Nossa vida, portanto, é uma
            contínua expressão do amor de Deus, e o serviço é a principal
            manifestação desse amor no mundo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-comunhao-com-deus-e-com-os-irmaos">
            Tópico 3: Comunhão com Deus e com os Irmãos
          </H3>
          <P className="">
            Na oração sacerdotal de Jesus (João 17:20-23), Ele expressou Seu
            desejo de que os crentes sejam um, assim como Ele e o Pai são um.
            Como o apóstolo João enfatizou em sua primeira carta: &quot;Se
            andarmos na luz, como Ele na luz está, temos comunhão uns com os
            outros, e o sangue de Jesus, Seu Filho, nos purifica de todo
            pecado&quot; (1 João 1:7). A comunhão com Deus nos leva à comunhão
            uns com os outros, formando um corpo unido em amor e propósito.
          </P>
          <P className="">
            Na nossa Igreja Oceano da Graça, almejamos ser uma família, onde
            cada membro experimenta o cuidado e a comunhão genuína. Nosso desejo
            é viver como uma família unida, onde cada um pode dar e encontrar
            amparo, amor e apoio. Assim como Deus nos escolheu para sermos parte
            de Seu rebanho, também acreditamos que Ele nos escolheu para sermos
            parte desta família local. A unidade que buscamos é uma resposta à
            oração de Jesus por Seus discípulos e deve ser vivida de forma
            prática em nossas relações diárias.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-discipulado-e-a-missao-de-fazer-discipulos">
            Tópico 4: Discipulado e a Missão de Fazer Discípulos
          </H3>
          <P className="">
            Na continuação de Sua oração sacerdotal, Jesus enviou Seus
            discípulos ao mundo com a missão de fazer novos discípulos (João
            17:18-19). Esse envio refletiu o propósito de Cristo de alcançar e
            alimentar pessoas rumo ao reino de Deus e tudo isso por meio do
            ensino da Palavra. É cediço que a missão de fazer discípulos é
            central para o cristianismo, uma vez que o evangelho de Cristo deve
            ser transmitido de geração em geração, a tempo e fora de tempo.
            João, em sua terceira carta, expressou a importância de guiar outros
            na verdade: &quot;Não tenho maior alegria do que ouvir que meus
            filhos estão andando na verdade&quot; (3 João 1:4). Fazer discípulos
            envolve ensinar a verdade e capacitar outros a vivê-la.
          </P>
          <P className="">
            A Igreja Oceano da Graça tem como missão ser, e permanecer,
            independentemente do tempo, uma igreja bíblica, onde a Palavra de
            Deus é pregada com amor, zelo e dedicação. Nosso desejo é que cada
            irmão cresça no conhecimento das Escrituras, para que não seja
            levado por ventos de doutrina, mas esteja firme na fé. Almeja-se
            capacitar os irmãos a responderem com confiança sobre sua fé, como
            orienta 1 Pedro 3:15: &quot;Estejam sempre preparados para responder
            a qualquer que lhes pedir a razão da esperança que há em
            vocês.&quot; O discipulado, portanto, não é apenas um processo
            individual, mas comunitário, em que todos são chamados a crescer e
            ajudar outros a crescerem na fé.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            A Última Ceia de Jesus não foi apenas um evento histórico, mas um
            momento de ensino profundo que continua a moldar a vida dos crentes
            até hoje. Através de Seu exemplo de amor, serviço, comunhão e envio,
            somos convidados a viver de acordo com esses princípios em nosso
            cotidiano. A verdadeira adoração não se limita ao louvor, mas se
            manifesta em ações práticas, como o serviço ao próximo, a comunhão
            com nossos irmãos e o compromisso com o discipulado.
          </P>
          <P className="">
            Nossa missão, como Igreja Oceano da Graça, é continuar esse legado,
            pregando a Palavra de Deus com zelo e amor, capacitando os crentes a
            crescerem em fé e conhecimento. Somos chamados a ser uma comunidade
            que vive a verdade do evangelho, onde o serviço, o amor e a comunhão
            são os pilares que sustentam nossa caminhada cristã, seguindo o
            exemplo de Cristo e fazendo discípulos que também sigam Seus passos.
          </P>
          <P className="">
            Gostaria de expressar minha sincera gratidão a todos que
            acompanharam e participaram deste estudo. Sua dedicação em
            aprofundar o conhecimento das Escrituras e em caminhar na fé é um
            verdadeiro testemunho de amor a Deus e à Sua Palavra. Que as lições
            aprendidas fortaleçam sua comunhão com o Senhor e sua caminhada
            cristã, levando-os a viver o evangelho com integridade, amor e
            serviço. Que Deus continue abençoando e guiando você!
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
              <span className="font-semibold">Curso:</span> João – Adoração,
              Serviço, Comunhão e Discipulado
            </P>
            <P className="mt-0">
              <span className="font-semibold">Ano:</span> 2024
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
            <P className="mt-0 font-semibold">Revisão:</P>
            <P className="mt-0">Pr Lúcio Andres</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
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
