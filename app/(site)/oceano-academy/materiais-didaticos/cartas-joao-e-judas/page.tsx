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
      "text/markdown":
        "/oceano-academy/materiais-didaticos/cartas-joao-e-judas.md",
    },
  },
};

export default function CursoCartasJoaoEJudas() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton tab="novo" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">As Cartas de João e Judas</H1>
          <P className="mt-0">
            Verdade, amor, discernimento e perseverança à luz das cartas de 1, 2
            e 3 João e Judas.
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
                  <LinkSmall href="https://drive.google.com/file/d/1bLpcHJZ-B0jJcMg9vY354SBKwSHwcNp-/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/cartas-joao-e-judas.md">
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
                  <LinkSmall href="https://drive.google.com/file/d/1uNKxBWbVFtTMCXYzY6Ejz7AIztCGX42M/view?usp=sharing">
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
                  <LinkSmall href="https://www.youtube.com/watch?v=vKZ-RGmZs-8">
                    <SquarePlay className="size-4" />
                    1-3 João
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=Ep975kf8vXE">
                    <SquarePlay className="size-4" />
                    Judas
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
                  <LinkSmall href="https://drive.google.com/file/d/1nYEZUotcfcstl5diZPD0gCA6PmYBFx5y/view?usp=sharing">
                    <FileImage className="size-4" />
                    L1: Deus é Amor
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1aFJLXEJw9sDJpFCxBY6xnwAlA_wBnk0e/view?usp=sharing">
                    <FileImage className="size-4" />
                    L2: Hospitalidade Cristã
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/163zfKVQbS8N778m4tH8ARVt0CsdsF1Cr/view?usp=sharing">
                    <FileImage className="size-4" />
                    L3: Contender pela Fé
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1MnTk0tBbirIglecMPzxWg2FTk_jEyIVo/view?usp=sharing">
                    <FileImage className="size-4" />
                    L4: Perseverança
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
                  <LinkSmall href="https://drive.google.com/file/d/12cezNkkdFHe83ZTm2psCVZccuYn1RfVp/view?usp=sharing">
                    <FileText className="size-4" />
                    L1: Deus é Amor
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1hZHBMog_hgXsCB8b5UHB89xvjnq1v3aW/view?usp=sharing">
                    <FileText className="size-4" />
                    L2: Hospitalidade Cristã
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1DuXKBaj3cRe5YFVyPlD8_BESQR7QcNzt/view?usp=sharing">
                    <FileText className="size-4" />
                    L3: Contender pela Fé
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1e1O-zE6NpyRpp9mU97WkptkQYmVatEf5/view?usp=sharing">
                    <FileText className="size-4" />
                    L4: Perseverança
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
              Lição 1 – Deus é Luz e Deus é Amor: A Vida dos Filhos de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-verbo-da-vida-deus-e-luz-e-a-realidade-do-pecado">
              1. O Verbo da Vida, Deus é Luz e a Realidade do Pecado
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-obediencia-amor-fraternal-e-nao-amar-o-mundo">
              2. Obediência, Amor Fraternal e Não Amar o Mundo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-ultima-hora-os-anticristos-e-a-uncao-que-permanece">
              3. A Última Hora, os Anticristos e a Unção que Permanece
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-filhos-de-deus-justica-e-amor-em-acao">
              4. Filhos de Deus, Justiça e Amor em Ação
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-discernir-os-espiritos-deus-e-amor-a-fe-que-vence-o-mundo-e-a-certeza-da-vida-eterna">
              5. Discernir os Espíritos, Deus é Amor, a Fé que Vence o Mundo e a
              Certeza da Vida Eterna
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">
              Lição 2 – Verdade e Amor na Hospitalidade Cristã
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-caminhar-na-verdade-que-gera-amor">
              1. Caminhar na Verdade que Gera Amor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-amor-com-portas-e-janelas-hospitalidade-com-discernimento">
              2. Amor com Portas e Janelas: Hospitalidade com Discernimento
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-gaio-e-demetrio-modelos-de-hospitalidade-missionaria">
              3. Gaio e Demétrio: Modelos de Hospitalidade Missionária
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-diotrefes-quando-o-ego-toma-o-pulpito">
              4. Diótrefes: Quando o Ego Toma o Púlpito
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">
              Lição 3 – Contender pela Fé: Discernimento e Santidade em Tempos
              de Engano
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-chamados-amados-e-guardados-identidade-antes-da-batalha">
              1. Chamados, Amados e Guardados: Identidade antes da Batalha
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-tres-exemplos-que-advertem-israel-anjos-sodoma">
              2. Três Exemplos que Advertem: Israel, Anjos, Sodoma
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-arrogancia-espiritual-e-rebeldia-as-autoridades">
              3. Arrogância Espiritual e Rebeldia às Autoridades
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-ai-deles-caim-balacao-e-cora-caminhos-de-perdicao">
              4. Ai deles! Caim, Balaão e Corá: Caminhos de Perdição
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – Edificar, Guardar e Alcançar: Perseverança no Amor de
              Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-lembrem-se-dos-apostolos-realismo-espiritual">
              1. Lembrem-se dos Apóstolos: Realismo Espiritual
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-edificar-e-orar-permanecer-no-amor-de-deus">
              2. Edificar e Orar: Permanecer no Amor de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-misericordia-que-disciplina-tres-posturas-pastoris">
              3. Misericórdia que Disciplina: Três Posturas Pastoris
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-doxologia-que-sustenta-nossos-passos">
              4. A Doxologia que Sustenta Nossos Passos
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
          Lição 1 – Deus é Luz e Deus é Amor: A Vida dos Filhos de Deus
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Compreender os eixos centrais de 1 João — Cristo verdadeiro
            (encarnação), comunhão, obediência, amor fraternal, discernimento
            doutrinário e certeza da salvação — e aplicá-los à vida da igreja.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-para-comecar">Para Começar</H3>
          <P className="">
            Antes de avançarmos para a mensagem pastoral, vale situar a carta no
            seu cenário histórico e literário. A tradição da igreja atribui 1
            João ao apóstolo João, o mesmo do Quarto Evangelho, possivelmente já
            em idade avançada e servindo à região de Éfeso. A data mais aceita
            fica no final do primeiro século, entre 85 e 95 d.C., com
            destinatários espalhados por igrejas da Ásia Menor que enfrentavam
            cismas internos e ensinos que negavam a encarnação de Cristo.
          </P>
          <P className="">
            O texto não segue o formato epistolar comum, aproxima-se de um
            sermão pastoral que circulou entre comunidades irmãs, com linguagem
            simples e teologia profunda. Seu propósito é tríplice, fortalecer a
            comunhão com o Pai e com o Filho, oferecer critérios de
            discernimento contra falsos mestres e firmar a certeza da vida
            eterna aos que creem. Para isso, o autor usa contrastes marcantes
            como luz e trevas, verdade e mentira, amor e ódio, obediência e
            pecado, bem como três provas da vida nova que atravessam toda a
            carta, prova doutrinária que confessa o Filho encarnado, prova moral
            que caminha em santidade e prova social que ama os irmãos. Esse pano
            de fundo ajuda a ler cada linha com atenção devocional e sobriedade
            doutrinária, algo precioso para a igreja cristã em nossos dias.
          </P>
          <P className="">
            A primeira carta de João fala com a simplicidade de quem ama e com a
            firmeza de quem pastoreia. Não é um ensaio acadêmico, mas uma
            convocação à vida real na luz de Deus. João nos chama de
            &quot;filhinhos&quot; e nos conduz a um cristianismo sem maquiagem:
            verdade sem fingimento, amor sem cálculo, obediência sem desculpa.
            Em um mundo de sombras, ele lembra que Deus é luz e que não há como
            viver em comunhão com Deus e, ao mesmo tempo, pactuar com as trevas
            (1Jo 1.5–7, NAA).
          </P>
          <P className="">
            Logo no início, João testemunha que o Verbo da vida foi visto,
            ouvido e tocado (1Jo 1.1–4, NAA). Não há cristianismo sem
            encarnação: Jesus veio em carne, viveu, morreu e ressuscitou. A fé
            cristã não se sustenta em ideias desconexas, mas no fato histórico
            da vinda do Filho de Deus. Por isso, João derruba qualquer
            espiritualidade que despreze a vida concreta, os irmãos de carne e
            osso, a obediência que se traduz em prática.
          </P>
          <P className="">
            Outro eixo de João é a alegria completa (1Jo 1.4, NAA). Alegria,
            aqui, não é anestesia, mas fruto da comunhão com Deus e com o povo
            de Deus. Onde a verdade é crida e o amor é praticado, a alegria
            floresce — mesmo em tempos de pressão e heresias. João não escreve
            para &quot;inventar novidade&quot;, mas para afirmar o que é desde o
            princípio e guardar a igreja de seduções antigas com roupas novas.
          </P>
          <P className="">
            Por fim, João nos dá provas concretas da vida nova: quem crê em
            Cristo confessa o pecado, anda como Ele andou, ama os irmãos,
            discerne o erro e persevera. Não é perfeccionismo; é direção. Não é
            moralismo frio; é vida gerada do alto. &quot;Deus é luz&quot; e
            &quot;Deus é amor&quot; não são slogans: são a moldura que define
            quem somos e como vivemos (1Jo 1.5; 4.8, NAA).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-verbo-da-vida-deus-e-luz-e-a-realidade-do-pecado">
            1. O Verbo da Vida, Deus é Luz e a Realidade do Pecado
          </H3>
          <P className="">
            João começa com uma afirmação ousada: Jesus, a Palavra da Vida, é
            real e foi experimentado pelos apóstolos. A fé cristã nasce do
            testemunho apostólico e comunica comunhão com o Pai e com o Filho
            (1Jo 1.1–3, NAA). A igreja não é um clube de afinidades, mas uma
            comunidade gerada pela revelação de Deus em Cristo.
          </P>
          <P className="">
            O Deus com quem temos comunhão é luz e nEle não há treva alguma (1Jo
            1.5, NAA). Andar na luz não é vida impecável, mas vida exposta:
            verdade diante de Deus, arrependimento honesto e caminhada em
            santidade. As sombras da mentira, da duplicidade e do autoengano não
            combinam com a verdade do Evangelho.
          </P>
          <P className="">
            Sendo assim, João confronta dois extremos: negar o pecado (&quot;não
            temos pecado&quot;) e banalizá-lo (&quot;pecado não importa&quot;).
            O caminho bíblico é confissão e fé na obra de Cristo: &quot;Se
            confessarmos os nossos pecados, ele é fiel e justo para nos perdoar
            os pecados e nos purificar de toda injustiça&quot; (1Jo 1.9, NAA).
            Não é a autoconfiança, mas a graça que nos mantém em pé.
          </P>
          <P className="">
            Para nosso consolo, João apresenta Cristo como nosso &quot;Advogado
            junto ao Pai&quot; e &quot;propiciação pelos nossos pecados&quot;
            (1Jo 2.1–2, NAA). O Cristo encarnado, que derramou seu sangue, é o
            fundamento da nossa segurança. Como observou I. Howard Marshall, a
            carta sustenta &quot;a certeza da vida eterna para os que
            creem&quot; sem abrir concessão ao pecado (Marshall, 1978).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-obediencia-amor-fraternal-e-nao-amar-o-mundo">
            2. Obediência, Amor Fraternal e Não Amar o Mundo
          </H3>
          <P className="">
            A fé se reconhece pelos passos: &quot;Aquele que diz que permanece
            nele, esse deve também andar assim como ele andou&quot; (1Jo 2.6,
            NAA). João não constrói uma salvação pelas obras, mas insiste que a
            obediência e as obras são evidências da comunhão com Deus. Quem
            conhece a Deus guarda seus mandamentos.
          </P>
          <P className="">
            O &quot;mandamento antigo&quot; é sempre novo: amar o irmão (1Jo
            2.7–11, NAA). O amor fraternal não é um extra para os mais devotos;
            é marca de quem saiu das trevas e agora vive na luz. Onde o amor ao
            irmão é negado, a luz foi substituída por sombras de religião. John
            Stott nota que João une doutrina e ética: &quot;A fé verdadeira se
            expressa no amor verdadeiro&quot; (Stott, 1988).
          </P>
          <P className="">
            João também alerta: &quot;Não amem o mundo, nem o que há no
            mundo&quot; (1Jo 2.15–17, NAA). O &quot;mundo&quot; é o sistema em
            rebelião contra Deus, movido pela cobiça da carne, cobiça dos olhos
            e soberba da vida. Amar o mundo é diluir a fé no espírito da época;
            amar o Pai é viver em aliança com Sua vontade.
          </P>
          <P className="">
            Há aqui um chamado pastoral à sobriedade: vigiemos nossa imaginação,
            nossos desejos e ambições. O Evangelho não proíbe o adquirir; proíbe
            a idolatria. O problema não é ter coisas, mas ser possuído por elas.
            O amor ao Pai liberta o coração para servir, dar e perdoar.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-ultima-hora-os-anticristos-e-a-uncao-que-permanece">
            3. A Última Hora, os Anticristos e a Unção que Permanece
          </H3>
          <P className="">
            &quot;Já é a última hora&quot; — a era entre a primeira e a segunda
            vinda de Cristo (1Jo 2.18, NAA). Nesse tempo, surgem
            &quot;anticristos&quot;: mestres que negam o Filho e tentam desviar
            o rebanho. A estratégia de João não é alarmismo, mas enraizamento:
            permanecer no que ouviram &quot;desde o princípio&quot; (1Jo
            2.24–25, NAA).
          </P>
          <P className="">
            João lembra que a igreja recebeu a unção do Santo (1Jo 2.20, NAA).
            Essa unção não dispensa o ensino apostólico; capacita a acolhê-lo. A
            promessa é clara: quem permanece no Filho e no Pai tem a vida eterna
            (1Jo 2.25, NAA). A perseverança não é orgulho; é graça sustentando
            passos firmes.
          </P>
          <P className="">
            A negação do Filho é a raiz de toda heresia. Por isso, discernimento
            doutrinário é cuidado com a saúde da igreja. Stephen S. Smalley
            sublinha que 1 João integra cristologia e comunhão: &quot;a fé
            correta sustenta a vida correta&quot; (Smalley, 1984).
          </P>
          <P className="">
            No fim, João chama à santidade: aguardando a manifestação de Cristo,
            vivamos de modo que não sejamos envergonhados diante dEle (1Jo
            2.28–29, NAA). A esperança futura molda a ética presente.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-filhos-de-deus-justica-e-amor-em-acao">
            4. Filhos de Deus, Justiça e Amor em Ação
          </H3>
          <P className="">
            &quot;Vejam que grande amor o Pai nos tem concedido, a ponto de
            sermos chamados filhos de Deus&quot; (1Jo 3.1, NAA). A filiação não
            é uma metáfora poética, mas uma identidade real conferida pela
            graça. Somos acolhidos na família de Deus, selados por um novo
            pertencimento e por uma nova natureza. Por isso, João é direto: quem
            nasceu de Deus não transforma o pecado em estilo de vida; o pecado
            pode acontecer, mas já não reina, porque fomos libertos do seu
            domínio e chamados a andar na luz (1Jo 3.6–10, NAA). A vida do filho
            não é impecável, mas é irreconciliável com a prática deliberada do
            mal.
          </P>
          <P className="">
            Esse amor do Pai desce do discurso para a mesa e para o bolso,
            tornando-se gesto concreto. &quot;Não amemos de palavra, nem de
            língua, mas de fato e de verdade&quot; (1Jo 3.18, NAA). O padrão não
            nasce do nosso esforço, mas do próprio Cristo: &quot;Conhecemos o
            amor nisto: que ele deu a sua vida por nós; e devemos dar a nossa
            vida pelos irmãos&quot; (1Jo 3.16, NAA). Onde o amor de Deus é
            conhecido, a indiferença perde espaço. Servir, repartir e perdoar
            deixam de ser extras e passam a ser sinais de que a vida nova
            chegou. Amor que não serve não é amor bíblico.
          </P>
          <P className="">
            Essa prática de amor e justiça produz confiança diante de Deus. João
            afirma que nosso coração se aquieta quando fazemos o que é agradável
            a Ele (1Jo 3.19–22, NAA). A obediência não compra bênçãos; ela
            alinha o coração à vontade do Pai e, assim, nos encoraja a orar com
            ousadia. A oração, então, deixa de ser um grito perdido e torna-se
            conversa de filhos que confiam no caráter do Pai e que pedem segundo
            Seus caminhos.
          </P>
          <P className="">
            No centro disso está um mandamento com duas faces inseparáveis: crer
            no nome do Seu Filho Jesus Cristo e amar uns aos outros (1Jo 3.23,
            NAA). Fé verdadeira não é apenas assentimento intelectual; é
            confiança obediente que se derrama em amor fraternal. Quem crê, ama;
            quem ama, persevera na verdade. É assim que a comunidade se torna
            testemunha viva do Evangelho: doutrina que ilumina, amor que aquece.
          </P>
          <P className="">
            A vida cristã, portanto, é doutrina e prática; fé e amor; verdade e
            serviço. Não é ativismo barulhento nem moralismo frio, mas
            obediência grata que nasce da filiação. O Espírito imprime em nós o
            &quot;DNA&quot; do Pai, e ele aparece no cotidiano: justiça nas
            decisões, misericórdia nas relações e integridade nos bastidores.
            Como filhos, não buscamos aprovação pelo desempenho; vivemos em
            santidade porque já fomos amados e adotados. E, amados assim,
            aprendemos a amar &quot;de fato e de verdade&quot;.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-discernir-os-espiritos-deus-e-amor-a-fe-que-vence-o-mundo-e-a-certeza-da-vida-eterna">
            5. Discernir os Espíritos, Deus é Amor, a Fé que Vence o Mundo e a
            Certeza da Vida Eterna
          </H3>
          <P className="">
            João pede prova de autenticidade: &quot;Ponham à prova os
            espíritos&quot; (1Jo 4.1, NAA). O teste é cristológico, pois
            confessar que Jesus Cristo veio em carne (1Jo 4.2, NAA). O Espírito
            de Deus sempre exalta o Cristo verdadeiro; o erro o distorce.
          </P>
          <P className="">
            No coração da carta ecoa: &quot;Deus é amor&quot; (1Jo 4.8, NAA).
            Não é clichê devocional, é teologia do Calvário: &quot;Nisto
            consiste o amor: não em que nós tenhamos amado a Deus, mas em que
            ele nos amou&quot; e enviou Seu Filho como propiciação (1Jo 4.10,
            NAA). Quem foi amado assim, ama &quot;assim&quot;.
          </P>
          <P className="">
            A fé que recebe Jesus como o Cristo é a fé que vence o mundo (1Jo
            5.1–5, NAA). Vencemos não por bravura, mas por nova natureza. O
            testemunho de Deus acerca do Filho é firme, e quem crê tem o
            testemunho &quot;em si&quot; (1Jo 5.10, NAA). Aqui está a grande
            certeza: &quot;quem tem o Filho tem a vida&quot; (1Jo 5.12, NAA).
          </P>
          <P className="">
            João encerra com segurança e sobriedade: confiança em oração (1Jo
            5.14–15, NAA), cuidado com o pecado (1Jo 5.16–17, NAA), consciência
            do maligno e de que &quot;estamos no Verdadeiro&quot; (1Jo 5.19–20,
            NAA). A última frase é um golpe final na idolatria: &quot;Filhinhos,
            guardem-se dos ídolos&quot; (1Jo 5.21, NAA). Verdade e amor protegem
            a igreja.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Diante do testemunho de 1 João, fica claro que a igreja permanece
            saudável quando une verdade e amor em santidade prática. Assim,
            confessamos o Cristo que veio em carne, caminhamos na luz com
            arrependimento sincero e praticamos amor fraternal que se traduz em
            serviço. Desse modo, a fé deixa de ser enfeite e torna-se vida que
            obedece, discerne e persevera, pois &quot;quem tem o Filho tem a
            vida&quot; (1Jo 5.12, NAA). Além disso, ao provar os espíritos e
            rejeitar o &quot;mundo&quot; que seduz, guardamos o coração da
            idolatria e mantemos a comunhão com o Pai e com o Filho.
          </P>
          <P className="">
            Portanto, para os nossos dias, o chamado é simples e profundo.
            Permanecemos firmes na Palavra, dependentes do Espírito Santo e
            comprometidos com uma vida de oração que pede segundo a vontade de
            Deus. Ao mesmo tempo, cultivamos hospitalidade responsável,
            liderança servidora e discernimento doutrinário, a fim de acolher o
            que é fiel e fechar a porta ao engano. Por fim, caminhamos com
            alegria completa na comunhão, certos de que o Deus que nos chamou é
            poderoso para nos guardar de tropeçar e nos apresentar, com
            exultação, diante da sua glória (1Jo 1.4; 5.14–15; Jd 24–25, NAA).
            Assim, seguimos na luz, em amor e em missão, para a glória de
            Cristo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – Verdade e Amor na Hospitalidade Cristã</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Aplicar os princípios de 2 e 3 João à vida comunitária: caminhar na
            verdade e no amor, exercendo hospitalidade responsável e
            discernimento contra falsos mestres.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-para-comecar">Para Começar</H3>
          <P className="">
            As duas cartas curtas de 2 e 3 João soam como bilhetes pastorais,
            mas pesam como marretas no alicerce da igreja. Em 2 João, a tensão:
            acolher com amor e, ao mesmo tempo, proteger o rebanho de quem nega
            Cristo. Em 3 João, o equilíbrio: incentivar a hospitalidade
            missionária (Gaio), denunciar a tirania e o personalismo na
            liderança (Diótrefes) e reconhecer exemplos fiéis (Demétrio).
            Verdade e amor caminham de mãos dadas; nunca uma sem a outra.
          </P>
          <P className="">
            Ao lidar com heresias, João não promove caça às bruxas, mas também
            não relativiza o Evangelho. O critério continua cristológico e
            ético, como a pessoa confessa Cristo e como trata os irmãos? A
            igreja é chamada a examinar mensagens e mensageiros, sem perder a
            ternura, sem ceder ao engano.
          </P>
          <P className="">
            Essas cartas também falam sobre poder e serviço. O Evangelho derruba
            personalismos e agendas particulares. Liderar é servir, não
            monopolizar a comunhão. A missão depende de uma igreja que acolhe,
            investe e envia com alegria — mas com discernimento.
          </P>
          <P className="">
            Por fim, João nos lembra do rosto, da conversa e do abraço:
            &quot;quero falar face a face&quot; (2Jo 12; 3Jo 14, NAA). O cuidado
            pastoral é pessoal. A verdade se encarna no encontro, a caridade se
            prova à mesa, e a unidade se preserva no caminhar juntos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-caminhar-na-verdade-que-gera-amor">
            1. Caminhar na Verdade que Gera Amor
          </H3>
          <P className="">
            João saúda a senhora eleita e seus filhos como uma comunidade que
            anda na verdade (2Jo 1–2, NAA). Verdade aqui não é mera opinião
            forte nem sentimento piedoso. É o ensino apostólico sobre Cristo
            recebido pela fé, confessado publicamente e guardado na prática
            diária. Essa verdade molda a consciência, regula a vida e orienta a
            comunhão. Quem abraça a verdade é consolidado por graça,
            misericórdia e paz que não apenas aliviam o coração, mas estruturam
            a vida da igreja (2Jo 3, NAA).
          </P>
          <P className="">
            O mandamento que vem desde o princípio é amar uns aos outros (2Jo 5,
            NAA). João não permite que o amor se torne um slogan vazio e o
            coloca no caminho certo quando afirma que o amor é andar segundo os
            mandamentos de Deus (2Jo 6, NAA).
          </P>
          <P className="">
            Amor sem obediência se degrada em sentimentalismo. Obediência sem
            amor endurece em legalismo. O caminho bíblico une ambos e resulta em
            um modo de vida que reflete o caráter de Cristo.
          </P>
          <P className="">
            No contexto da carta esse amor firmado na verdade torna-se proteção
            concreta contra os enganadores que não confessam Jesus Cristo vindo
            em carne (2Jo 7, NAA). A igreja não pode ser ingênua. Hospitalidade
            e abertura sem discernimento cooperam com o erro. João exorta a
            cuidar para não perder aquilo que já foi realizado preservando o
            fruto do trabalho apostólico e a integridade do Evangelho no meio do
            povo de Deus (2Jo 8, NAA). Permanecer na doutrina de Cristo é
            condição para permanecer no Pai e no Filho (2Jo 9, NAA).
          </P>
          <P className="">
            Na prática pastoral, vale promover um discipulado que integra
            doutrina e vida. Ensinar sã cristologia com atenção e fidelidade.
            Cultivar práticas concretas de amor como visitação intencional,
            cuidado dos vulneráveis, partilha generosa, oração perseverante e
            reconciliação corajosa. Formar crentes com coluna vertebral e
            coração aberto, firmes na confissão, ternos no cuidado, zelosos na
            santidade e prontos na hospitalidade, sempre segundo os mandamentos
            do Senhor, para a glória de Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-amor-com-portas-e-janelas-hospitalidade-com-discernimento">
            2. Amor com Portas e Janelas: Hospitalidade com Discernimento
          </H3>
          <P className="">
            A hospitalidade cristã foi vital para a expansão da igreja. Contudo,
            acolher mestres que negam a encarnação de Cristo significa cooperar
            com o erro (2Jo 10–11, NAA). João não manda agir com hostilidade, e
            sim com responsabilidade. O lar do crente não pode transformar-se em
            plataforma para o anticristo.
          </P>
          <P className="">
            O critério permanece nítido quanto à doutrina de Cristo. Quando a
            mensagem nega o Filho, o amor verdadeiro protege o rebanho. Quando a
            mensagem confessa o Filho e caminha na instrução apostólica, o amor
            abre a porta, a mesa e o cofre. I. Howard Marshall observa que 2
            João costura a ética da hospitalidade à confissão cristológica
            (Marshall, 1978).
          </P>
          <P className="">
            Isso não revela frieza, e sim zelo santo. Em tempos de múltiplas
            vozes, a igreja ama com inteligência, acolhe os fiéis, sustenta
            servos verdadeiros e, ao mesmo tempo, recusa dar plataforma a quem
            corrói o Evangelho.
          </P>
          <P className="">
            No cotidiano, vale adotar políticas simples e bíblicas para a
            pregação e ensino cristocêntrico que preservem a saúde da igreja e
            mantenham Cristo no centro da mensagem. Isso inclui critérios claros
            para quem prega e ensina, avaliação de vida e doutrina, submissão às
            Escrituras como autoridade suprema, compromisso com a exposição fiel
            da Palavra.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-gaio-e-demetrio-modelos-de-hospitalidade-missionaria">
            3. Gaio e Demétrio: Modelos de Hospitalidade Missionária
          </H3>
          <P className="">
            Gaio aparece como um amigo da verdade e da igreja. O ancião celebra
            seu caminho fiel e seu cuidado prático pelos irmãos, especialmente
            pelos estrangeiros, que testemunham diante da congregação o alcance
            desse amor (3Jo 5–6, NAA). Encaminhá-los de maneira digna de Deus
            não é detalhe logístico, é culto em movimento. Enviar bem é adorar
            bem.
          </P>
          <P className="">
            Esses obreiros seguem viagem por causa do Nome e não dependem dos
            gentios para o sustento, o que nos chama a recebê-los com
            generosidade e a nos tornarmos cooperadores da verdade (3Jo 7–8,
            NAA). Quando a igreja abre a casa, reparte recursos e intercede, a
            missão ganha fôlego. O amor deixa o discurso e vira rota, mesa e
            provisão.
          </P>
          <P className="">
            Demétrio traz outro retrato. Seu bom testemunho vem de todos e da
            própria verdade, sinal de vida íntegra e doutrina firme, útil para a
            obra (3Jo 12, NAA). John Stott observa que a tríade testemunho
            público, verdade e reconhecimento apostólico confirma seu caráter e
            serviço confiável (Stott, 1988). Gente assim se torna ponte segura
            onde muitos só constroem muros.
          </P>
          <P className="">
            No serviço, vale cultivar a cultura de hospitalidade, sustento
            generoso, intercessão perseverante e acompanhamento próximo. A
            missão avança com pés que vão e com mãos que sustentam, e a igreja
            amadurece quando envia com honra, acolhe com carinho e caminha junto
            em verdade e amor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-diotrefes-quando-o-ego-toma-o-pulpito">
            4. Diótrefes: Quando o Ego Toma o Púlpito
          </H3>
          <P className="">
            Diótrefes aparece como quem busca a primazia e se coloca acima dos
            demais (3Jo 9, NAA). Rejeita a autoridade apostólica, difama os
            irmãos, fecha a porta aos missionários e ainda impede quem deseja
            acolhê-los (3Jo 10, NAA). É o retrato do personalismo atual que
            adoece comunidades.
          </P>
          <P className="">
            João escolhe a transparência e o pastoreio fiel. Ele anuncia que
            tratará desses feitos e, ao mesmo tempo, encoraja os crentes com um
            chamado simples e firme. Amado, não imites o que é mau e sim o que é
            bom (3Jo 11, NAA). Liderança cristã não é palco nem vaidade. É
            serviço humilde aos pés de Cristo e cuidado real com o rebanho. Onde
            há abuso de poder, o evangelho é negado na prática, ainda que seja
            proclamado com os lábios.
          </P>
          <P className="">
            O caminho de cura passa pelo retorno à verdade apostólica e pela
            retomada de uma cultura de amparo. Quando o amor governa, as portas
            se abrem para a missão do evangelho e se fecham para projetos
            pessoais que dividem e ferem.
          </P>
          <P className="">
            Podemos concluir que, convém fortalecer a liderança colegiada,
            ensinar continuamente sobre serviço e humildade e exercer a
            disciplina bíblica quando necessário. Comunidades que caminham assim
            preservam a saúde do corpo, glorificam a Cristo e protegem as
            ovelhas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Assim, ao percorrermos 2 e 3 João, percebemos que a igreja permanece
            saudável quando une verdade e amor em cada decisão. Desse modo, a
            hospitalidade se torna caminho de missão, a doutrina de Cristo serve
            como critério para parcerias, e a liderança se expressa em serviço
            humilde. Além disso, a centralidade de Jesus orienta o púlpito e o
            ensino, enquanto a comunhão face a face fortalece vínculos e cura
            feridas, conforme anseia o coração pastoral do apóstolo.
          </P>
          <P className="">
            Portanto, viver esses princípios hoje requer oração perseverante,
            submissão às Escrituras e sensibilidade ao Espírito Santo, marcas de
            uma fé verdadeira. Enquanto acolhemos obreiros fiéis e sustentamos a
            obra com generosidade, permanecemos vigilantes contra o erro e o
            personalismo, lembrando que o amor verdadeiro protege o rebanho e
            promove reconciliação. Do mesmo modo, a disciplina bíblica exercida
            com mansidão, preserva a unidade e aponta para Cristo como Senhor da
            igreja.
          </P>
          <P className="">
            Por fim, que cada casa e cada culto expressem um testemunho
            cristocêntrico, em que a Palavra é anunciada com fidelidade e o povo
            responde com fé operosa. Assim, a igreja caminha na luz, cresce em
            amor e avança na missão, esperando com esperança viva a misericórdia
            do Senhor para a vida eterna, conforme lemos em 2Jo 6, 3Jo 8 e 3Jo
            11, NAA.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">
          Lição 3 – Contender pela Fé: Discernimento e Santidade em Tempos de
          Engano
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Compreender o chamado de Judas para &quot;batalhar diligentemente
            pela fé&quot; e reconhecer as marcas dos falsos mestres, respondendo
            com santidade, sobriedade e amor à verdade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-para-comecar">Para Começar</H3>
          <P className="">
            Como ponto de partida, vale situar a carta no seu contexto histórico
            e literário. O autor se apresenta como Judas, servo de Jesus Cristo
            e irmão de Tiago, muito provavelmente o mesmo Judas parente (irmão -
            Mt 13.55 e Mc 6.3) do Senhor mencionado nos Evangelhos, escrevendo a
            comunidades da região siro-palestinense e possivelmente também da
            Ásia Menor. A data mais provável se encontra entre meados e fim do
            primeiro século, muitos estudiosos propõem o intervalo entre 65 e 80
            d.C., período marcado por tensões internas e pela circulação de
            falsos mestres.
          </P>
          <P className="">
            O escrito tem caráter exortativo, aproxima-se de uma homilia breve,
            emprega linguagem vigorosa e imagens do Antigo Testamento, além de
            recorrer a tradições judaicas intertestamentárias como 1 Enoque e a
            Assunção de Moisés, o que não implica endosso canônico dessas obras,
            mas uso retórico conhecido pelos leitores. Há afinidade literária
            com 2 Pedro, o que sugere diálogo de fontes ou tradição comum,
            enquanto o propósito permanece nítido, conclamar os crentes a
            batalhar pela fé entregue de uma vez por todas, preservando a
            comunidade na santidade e na sã doutrina.
          </P>
          <P className="">
            A carta de Judas é um alerta urgente que ressoa como um toque de
            trombeta. Escrevendo a cristãos &quot;chamados, amados em Deus Pai e
            guardados em Jesus Cristo&quot; (Jd 1, NAA), ele revela o seu desejo
            inicial de falar sobre &quot;a salvação que nos é comum&quot;, mas,
            diante da ameaça, muda o rumo e conclama a igreja a &quot;batalhar
            diligentemente pela fé que uma vez por todas foi entregue aos
            santos&quot; (Jd 3, NAA). Não é uma convocação à agressividade, mas
            à fidelidade, tratando a verdade como tesouro sagrado.
          </P>
          <P className="">
            Judas denuncia que &quot;certos indivíduos&quot; se infiltraram
            sorrateiramente na comunidade (Jd 4, NAA). Eles transformam a graça
            de Deus em libertinagem e negam, por suas práticas e ensinos,
            &quot;o nosso único Soberano e Senhor, Jesus Cristo&quot; (Jd 4,
            NAA). O perigo não está apenas do lado de fora; por isso a
            vigilância precisa ser espiritual e comunitária. Discernimento não é
            suspeita crônica, mas amor à verdade e zelo pela santidade.
          </P>
          <P className="">
            Para fundamentar sua advertência, Judas recorre à história sagrada:
            Israel incrédulo, anjos que abandonaram seu estado original, Sodoma
            e Gomorra — todos exemplos de como Deus julga a impiedade (Jd 5–7,
            NAA). A mensagem é simples e solene, a graça de Deus não é licença,
            é libertação que nos conduz à obediência. Onde a graça é distorcida,
            a igreja perde o rumo.
          </P>
          <P className="">
            A carta não é sombria, é pastoral. Judas escreve a um povo
            &quot;guardado em Jesus Cristo&quot; (Jd 1, NAA). O tom firme visa
            proteger a comunhão, preservar a pureza do Evangelho e encorajar a
            perseverança. A resposta fiel aos falsos mestres não é pânico, mas
            retorno ao &quot;que foi entregue&quot; — a fé apostólica, crida,
            vivida e ensinada na igreja.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-chamados-amados-e-guardados-identidade-antes-da-batalha">
            1. Chamados, Amados e Guardados: Identidade antes da Batalha
          </H3>
          <P className="">
            Judas inicia lembrando quem somos em Cristo: chamados por Deus,
            amados no Pai, guardados em Jesus (Jd 1, NAA). Identidade precede
            missão; segurança antecede luta. Não contendemos pela fé a partir do
            medo, mas da certeza de que Deus é nosso Guardião. É por isso que
            ele saúda com &quot;misericórdia, paz e amor&quot; multiplicados (Jd
            2, NAA) — dons que sustentam a igreja na tempestade.
          </P>
          <P className="">
            O apelo central chega no verso 3, isto é, batalhar diligentemente
            pela fé entregue &quot;uma vez por todas&quot;. A fé apostólica não
            é produto em evolução cultural, mas depósito sagrado. Contender,
            aqui, é empenhar-se com inteligência, humildade e coragem para
            preservar a sã doutrina e a santidade de vida. Segundo Thomas R.
            Schreiner, Judas &quot;combina ortodoxia e ortopraxia&quot; ao
            mostrar que a doutrina certa conduz à vida certa (Schreiner, 2003).
          </P>
          <P className="">
            No verso 4, o problema é nomeado como pessoas que se infiltraram. A
            imagem sugere ação discreta, quase imperceptível. Transformar a
            graça em libertinagem é anular, na prática, o senhorio de Cristo.
            Onde a graça é reduzida a permissividade, o pecado perde gravidade e
            a cruz perde centralidade. O resultado é uma espiritualidade sem
            arrependimento e um evangelho sem cruz.
          </P>
          <P className="">
            A resposta pastoral de Judas começa pela vigilância doutrinária e
            pela vida comunitária saudável. Uma igreja enraizada nas Escrituras,
            que ora, discerne e exerce disciplina com amor, não é presa fácil do
            engano. Contender é guardar o coração, a casa e o púlpito — com
            Bíblia aberta e mãos estendidas para servir.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-tres-exemplos-que-advertem-israel-anjos-sodoma">
            2. Três Exemplos que Advertem: Israel, Anjos, Sodoma
          </H3>
          <P className="">
            Judas relembra que o Senhor salvou um povo do Egito, mas destruiu os
            que não creram (Jd 5, NAA). Privilégio não substitui perseverança. A
            história de Israel ensina que incredulidade dentro da comunidade
            traz juízo. Graça e responsabilidade caminham juntas, quem crê
            persevera; quem endurece colhe as consequências.
          </P>
          <P className="">
            Os anjos que não guardaram seu lugar foram &quot;guardados&quot; em
            algemas para o juízo (Jd 6, NAA). A comparação é forte, pois se
            seres celestiais não escaparam do julgamento por sua rebelião,
            quanto mais os que vivem em rebeldia insolente contra Deus. O foco
            de Judas é combater a presunção, uma vez que ninguém está acima da
            verdade revelada.
          </P>
          <P className="">
            Sodoma e Gomorra exemplificam a degradação moral que rejeita a ordem
            de Deus e corrompe o dom da sexualidade (Jd 7, NAA). O juízo que
            caiu sobre elas é &quot;exemplo do fogo eterno&quot;. Judas não faz
            sensacionalismo moralista, mas reafirma que a santidade de Deus é
            séria. A ética cristã não nasce do medo, e sim do amor e da
            submissão a Cristo.
          </P>
          <P className="">
            Assim, Judas busca trazer função pedagógica ao lembrar do passado. A
            igreja nutre uma memória bíblica que corrige desvios atuais. Quando
            relembramos a história da salvação, recuperamos a sobriedade, a
            esperança e o discernimento para os dilemas presentes.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-arrogancia-espiritual-e-rebeldia-as-autoridades">
            3. Arrogância Espiritual e Rebeldia às Autoridades
          </H3>
          <P className="">
            Judas descreve os falsos mestres como sonhadores que contaminam a
            carne, rejeitam autoridade e difamam dignidades (Jd 8, NAA). A
            tríade ética-teológica é clara: impureza, insubmissão e
            irreverência. O problema não é apenas intelectual; é moral e
            espiritual. Negar o senhorio de Cristo desemboca em vida sem freios
            e desprezo à autoridade ordenada por Deus.
          </P>
          <P className="">
            O contraste aparece no episódio de Miguel, o arcanjo, que,
            disputando com o diabo acerca do corpo de Moisés, não ousou
            pronunciar juízo difamatório, mas disse: &quot;O Senhor te
            repreenda!&quot; (Jd 9, NAA). Se um arcanjo exerce reverência diante
            do juízo, como falsos mestres ousam blasfemar do que ignoram?
            Humildade e temor santo são marcas do verdadeiro servo de Deus.
          </P>
          <P className="">
            Esses enganadores &quot;se corrompem&quot; no que compreendem
            &quot;por instinto&quot; (Jd 10, NAA). É uma espiritualidade que
            desce, não que sobe; que adora os próprios impulsos, não a vontade
            de Deus. A fé bíblica, ao contrário, educa desejos, disciplina a
            língua e submete o coração à Palavra.
          </P>
          <P className="">
            Para a igreja, isso significa cultivar uma cultura de honra, de
            respeito às autoridades legítimas, ensino fiel e correção em amor.
            Onde há reverência por Deus e por sua ordem, há espaço para
            florescer a vida nova.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-ai-deles-caim-balacao-e-cora-caminhos-de-perdicao">
            4. Ai deles! Caim, Balaão e Corá: Caminhos de Perdição
          </H3>
          <P className="">
            Judas reúne três figuras para desmascarar os intrusos: o caminho de
            Caim (ódio e violência), o erro de Balaão (ganância religiosa) e a
            rebelião de Corá (insurgência contra a autoridade de Deus) — (Jd 11,
            NAA). Falsos mestres reproduzem velhos pecados com roupagens novas.
            O diagnóstico é espiritual e ético: coração homicida, olhos
            cobiçosos e pés insubmissos.
          </P>
          <P className="">
            Ele os chama de &quot;rochas submersas&quot; nas festas de amor —
            perigos ocultos em águas aparentemente calmas (Jd 12, NAA). Também
            são &quot;nuvens sem água&quot;, &quot;árvores sem fruto&quot;,
            &quot;ondas bravias&quot;, &quot;estrelas errantes&quot; (Jd 12–13,
            NAA). As metáforas pintam um retrato de esterilidade, instabilidade
            e desorientação. Quem segue tais guias termina à deriva.
          </P>
          <P className="">
            A denúncia não é para alimentar ressentimento, mas para proteger a
            comunhão. A mesa do Senhor e o amor fraternal são lugares de
            sinceridade e serviço, não de exploração e vaidade. Quando pessoas
            transformam a igreja em palco, Judas nos manda acender as luzes do
            discernimento.
          </P>
          <P className="">
            Richard Bauckham observa que Judas usa &quot;uma retórica profética
            vigorosa&quot; para acordar a igreja da sonolência moral (Bauckham,
            1983). Às vezes, a palavra firme é a forma mais alta de caridade,
            quando o perigo é real e presente.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            Diante da voz firme e pastoral de Judas, compreendemos que a igreja
            permanece fiel quando une doutrina saudável e vida santa sob a
            direção do Espírito Santo. Assim, combatemos o erro sem ceder à
            agressividade, preservamos a graça como libertação que conduz à
            obediência e guardamos a comunhão pela verdade que foi entregue de
            uma vez por todas aos santos. Desse modo, identidade vem antes de
            missão, pois somos chamados, amados e guardados em Cristo, e é a
            partir dessa segurança que vigiamos o coração, o lar e o púlpito.
          </P>
          <P className="">
            Portanto, enquanto recordamos os exemplos solenes das Escrituras e
            reconhecemos os perigos de falsos mestres que distorcem a graça,
            devemos caminhar com discernimento bíblico, oração perseverante e
            submissão às Escrituras, marcas caras à fé cristã. Além disso,
            cultivarmos uma espiritualidade que educa afetos, honra autoridades
            legítimas e transforma amor em serviço concreto, para que a mesa da
            comunhão permaneça sincera e a missão avance com pureza e poder.
          </P>
          <P className="">
            Por fim, confiamos que Aquele que nos chamou é fiel para nos
            sustentar. Assim, edificados &quot;na fé santíssima&quot;,
            fortalecidos no amor e firmes na esperança, batalhemos
            diligentemente sem perder a ternura, proclamando Jesus como nosso
            único Soberano e Senhor. Que a misericórdia, a paz e o amor sejam
            multiplicados sobre a igreja, para que vivamos na luz, amemos em
            verdade e avancemos na missão, tudo para a glória de Deus.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">
          Lição 4 – Edificar, Guardar e Alcançar: Perseverança no Amor de Deus
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Praticar a perseverança cristã: recordar a palavra apostólica,
            edificar-se na santíssima fé, orar no Espírito, guardar-se no amor
            de Deus e exercer misericórdia com firmeza e compaixão.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-para-comecar">Para Começar</H3>
          <P className="">
            Se a primeira metade da carta soou como alarme, a segunda soa como
            direção. Judas não encerra com denúncia; termina com discipulado.
            Ele nos manda lembrar as palavras dos apóstolos, pois os
            &quot;escarnecedores&quot; que seguem paixões ímpias já haviam sido
            previstos (Jd 17–18, NAA). Surpresa diminui quando a igreja vive com
            Bíblia aberta e coração desperto.
          </P>
          <P className="">
            A estratégia de Deus para tempos de confusão não é uma cruzada de
            raiva, mas uma casa bem edificada. &quot;Edifiquem-se na fé
            santíssima e orem no Espírito Santo&quot; (Jd 20, NAA). O povo de
            Deus vence não com barulho, mas com raízes, que são a Palavra, a
            oração e o amor. Judas nos chama a permanecer no lugar certo:
            &quot;guardem-se no amor de Deus&quot; (Jd 21, NAA).
          </P>
          <P className="">
            Esse permanecer não é passividade; é perseverança ativa enquanto
            aguardamos &quot;a misericórdia de nosso Senhor Jesus Cristo para a
            vida eterna&quot; (Jd 21, NAA). Esperança futura alimenta fidelidade
            presente. Onde a eternidade governa a agenda, a igreja vive com
            sobriedade e compaixão.
          </P>
          <P className="">
            Por fim, Judas nos envia de volta à missão com três imperativos de
            misericórdia (Jd 22–23, NAA). Discernimento não nos isola; envia-
            nos. O zelo pela verdade anda com lágrimas pelos enganados. A
            santidade não cancela a misericórdia; a regula.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-lembrem-se-dos-apostolos-realismo-espiritual">
            1. Lembrem-se dos Apóstolos: Realismo Espiritual
          </H3>
          <P className="">
            Judas ordena: &quot;Lembrem-se&quot; (Jd 17, NAA). A memória
            apostólica é antídoto contra a ilusão. Os apóstolos anunciaram que
            viriam escarnecedores, homens &quot;que causam divisões, seguem a
            própria alma, e não têm o Espírito&quot; (Jd 18–19, NAA). Quando
            isso ocorre, não precisamos entrar em pânico; precisamos voltar às
            Escrituras.
          </P>
          <P className="">
            O realismo espiritual admite que haverá mistura dentro da comunidade
            visível. Nem todos que falam de Cristo pertencem a Cristo. Por isso,
            a igreja precisa de critérios bíblicos para reconhecer frutos,
            doutrina e caráter. Discernimento é amor à verdade e cuidado com as
            ovelhas.
          </P>
          <P className="">
            Lembrar-se implica também aprender com a história da igreja:
            heresias, cismas, correções. A ortodoxia não nasceu em estúdio, foi
            forjada em meio a batalhas reais. Quando conhecemos as
            &quot;pegadas&quot; dos apóstolos, andamos mais seguros hoje.
          </P>
          <P className="">
            Essa lembrança é devocional e comunitária: leitura pública da
            Palavra, discipulado de base, estudos bíblicos sistemáticos. Crentes
            que se lembram, permanecem. Crentes que esquecem, se desmancham.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-edificar-e-orar-permanecer-no-amor-de-deus">
            2. Edificar e Orar: Permanecer no Amor de Deus
          </H3>
          <P className="">
            &quot;Mas vós, amados, edificando-vos na vossa fé santíssima e
            orando no Espírito Santo, guardai-vos no amor de Deus&quot; (Jd
            20–21, NAA). A imagem é de construção contínua. A fé santíssima é o
            alicerce apostólico; a oração no Espírito é o &quot;sopro&quot; que
            vivifica a casa. Permanecer no amor de Deus é habitar esse lugar de
            comunhão e obediência.
          </P>
          <P className="">
            A edificação envolve doutrina sólida, adoração centrada em Cristo,
            princípios observados e vida de santidade. Não há atalho. Uma igreja
            que lê a Bíblia com atenção, ora com fervor e pratica a
            reciprocidade cresce em maturidade. É a simplicidade robusta do Novo
            Testamento.
          </P>
          <P className="">
            Orar &quot;no Espírito&quot; contrasta com viver &quot;segundo a
            própria alma&quot; (Jd 19, NAA). É submeter desejos, pedidos e
            decisões ao governo de Deus. Onde o Espírito conduz, Cristo é
            exaltado, a Palavra é amada e os frutos do Espírito florescem no
            cotidiano da igreja.
          </P>
          <P className="">
            &quot;Guardai-vos no amor de Deus&quot; não significa conquistar o
            amor, mas permanecer sob sua influência, nutrindo a esperança da
            &quot;misericórdia de nosso Senhor Jesus Cristo para a vida
            eterna&quot; (Jd 21, NAA). Esperança escatológica alimenta
            perseverança ética.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-misericordia-que-disciplina-tres-posturas-pastoris">
            3. Misericórdia que Disciplina: Três Posturas Pastoris
          </H3>
          <P className="">
            Judas propõe três atitudes distintas, conforme o estado espiritual
            das pessoas. Primeira: &quot;Tenham compaixão dos que estão na
            dúvida&quot; (Jd 22, NAA). Há irmãos feridos, confusos, que precisam
            de paciência, ensino e cuidado. A resposta é abraço e discipulado,
            não dureza.
          </P>
          <P className="">
            Segunda: &quot;Salvem alguns, arrebatando-os do fogo&quot; (Jd 23,
            NAA). Quando o perigo é iminente, a ação deve ser firme e rápida:
            confrontar o pecado, apontar a cruz, restaurar com verdade e
            urgência. Amor age, não adia. Como observa D. A. Carson, Judas
            equilibra &quot;tato pastoral&quot; e &quot;decisão moral&quot; ao
            adequar a resposta ao caso (Carson, 1994).
          </P>
          <P className="">
            Terceira: &quot;Tenham misericórdia com temor, detestando até a
            roupa manchada pela carne&quot; (Jd 23, NAA). Misericórdia não é
            cumplicidade. Ajudamos sem nos contaminar, exercendo discernimento e
            limites. É possível ser compassivo e prudente, acolhedor e santo,
            como Jesus é.
          </P>
          <P className="">
            Esse triplo caminho molda ministérios de aconselhamento, disciplina
            e restauração. Comunidades que praticam essas posturas tornam-se
            hospitais espirituais, não tribunais frios nem spas permissivos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-doxologia-que-sustenta-nossos-passos">
            4. A Doxologia que Sustenta Nossos Passos
          </H3>
          <P className="">
            Judas encerra com uma das doxologias mais belas da Escritura.
            &quot;Ora, àquele que é poderoso para vos guardar de tropeçar e para
            vos apresentar com exultação, imaculados diante da sua
            glória...&quot; (Jd 24, NAA). A perseverança dos santos repousa no
            poder do Salvador. Não nos sustentamos a nós mesmos; somos
            sustentados.
          </P>
          <P className="">
            Ele é &quot;o único Deus, nosso Salvador, mediante Jesus Cristo,
            nosso Senhor&quot;. A Ele sejam glória, majestade, domínio e
            autoridade &quot;antes de todos os séculos, agora e para todo o
            sempre&quot; (Jd 25, NAA). Doutrina termina em adoração; ética
            desemboca em louvor. O coração que contempla a glória de Deus
            encontra força para viver santo no mundo.
          </P>
          <P className="">
            Essa doxologia corrige duas tentações: ativismo ansioso e fatalismo
            passivo. Não vencemos por esforço nu, nem desistimos por desânimo:
            confiamos e trabalhamos, porque Ele é poderoso para guardar e
            apresentar. A esperança futura anima a fidelidade presente.
          </P>
          <P className="">
            O cristão que canta Judas 24–25 aprende a caminhar com passos
            firmes. Adoração centrada em Deus cura o coração do medo e da
            soberba. O Deus que guarda também envia; o Deus que apresenta também
            purifica.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            À luz da carta de Judas, percebemos que a resposta cristã aos tempos
            de confusão não é barulho, mas enraizamento: edificamo-nos na fé
            santíssima, oramos no Espírito Santo e permanecemos no amor de Deus
            enquanto aguardamos, com esperança viva, a misericórdia de Jesus
            Cristo para a vida eterna.
          </P>
          <P className="">
            Assim, lembramos as palavras dos apóstolos, discernimos os falsos
            mestres sem perder a compaixão pelos enganados e servimos com
            santidade que não negocia a verdade. A vida da igreja, portanto,
            amadurece quando une doutrina sólida, devoção fervorosa e
            misericórdia prudente, pois a graça não autoriza a libertinagem;
            antes, liberta para a obediência.
          </P>
          <P className="">
            Desse modo, caminhamos com realismo e confiança: realismo, porque há
            &quot;escarnecedores&quot; e divisões; confiança, porque Aquele que
            nos chamou é poderoso para nos guardar de tropeçar e para nos
            apresentar com alegria, imaculados diante da sua glória. Por isso, o
            verdadeiro cristão mantém a Bíblia aberta, o coração sensível ao
            Espírito e as mãos estendidas em serviço, batalhando diligentemente
            pela fé que foi entregue de uma vez por todas aos santos, enquanto
            transforma doutrina em vida, culto em missão e esperança futura em
            fidelidade presente. A Deus, nosso Salvador, por meio de Jesus
            Cristo, sejam a glória e a autoridade agora e para sempre. Amém.
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
              <span className="font-semibold">Curso:</span> As Cartas de João e
              Judas
            </P>
            <P className="mt-0">
              <span className="font-semibold">Ano:</span> 2026
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
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Rezende</P>
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
