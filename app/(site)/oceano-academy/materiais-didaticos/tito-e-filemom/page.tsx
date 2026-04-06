import { NotepadText } from "lucide-react";
import { HeroContainer } from "~/components/hero";
import { AllTeachingMaterialsBackButton } from "~/components/back-buttons/all-teaching-materials";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";
import { SummaryLi } from "~/components/summary-li";
import { Table, TableCell, TableHeader, TableRow } from "~/components/ui/table";
import { LinkSmall } from "~/components/ui/link-small";
import { TableCellLinksContainer } from "~/components/ui/table-cell-links-container";

export default function CursoTitoEFilemom() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Cartas a Tito e Filemon</H1>
          <P className="mt-0">
            Entendendo a sã doutrina, a vida cristã na sociedade e o poder
            transformador do evangelho nos relacionamentos.
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
                  <LinkSmall href="https://drive.google.com/file/d/1FVFG8B0bPQQkcGIXLX2e60qx_OCt07de/view?usp=sharing">
                    <NotepadText className="size-4" />
                    Cartas a Tito e Filemon
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
            <a href="#lesson-1">Lição 1 – A Igreja e a Sã Doutrina</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-autoridade-apostolica-de-paulo">
              1. A Autoridade Apostólica de Paulo (Tt 1.1-4)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-papel-de-tito-em-creta">
              2. O Papel de Tito em Creta (Tt 1.5)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-qualificacoes-dos-presbiteros">
              3. Qualificações dos Presbíteros (Tt 1.6-9)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-ameaca-dos-falsos-mestres">
              4. A Ameaça dos Falsos Mestres (Tt 1.10-16)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">Lição 2 – A Vida Cristã e a Sã Doutrina</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-instrucoes-para-os-mais-velhos">
              1. Instruções Para os Mais Velhos (Tt 2.1-3)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-instrucoes-para-os-mais-jovens">
              2. Instruções Para os Mais Jovens (Tt 2.4-8)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-instrucoes-para-os-servos">
              3. Instruções Para os Servos (Tt 2.9-10)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-graca-de-deus-como-fundamento">
              4. A Graça de Deus Como Fundamento (Tt 2.11-15)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">Lição 3 – A Vida Cristã na Sociedade</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-submissao-e-boas-obras-na-sociedade">
              1. Submissão e Boas Obras na Sociedade (Tt 3.1-2)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-lembranca-da-nossa-condicao-passada">
              2. Lembrança da Nossa Condição Passada (Tt 3.3)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-salvacao-pela-graca">
              3. A Salvação Pela Graça (Tt 3.4-7)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-pratica-constante-das-boas-obras">
              4. A Prática Constante das Boas Obras (Tt 3.8-11)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – O Evangelho Que Transforma Relacionamentos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-fe-e-o-amor-de-filemom">
              1. A Fé e o Amor de Filemom (Fm 1-7)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-intercessao-de-paulo-por-onesimo">
              2. A Intercessão de Paulo Por Onésimo (Fm 8-16)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-disposicao-de-paulo-em-assumir-a-divida">
              3. A Disposição de Paulo em Assumir a Dívida (Fm 17-19)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-evangelho-e-a-transformacao-das-relacoes">
              4. O Evangelho e a Transformação das Relações (Fm 20-25)
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
        <H2 id="lesson-1">Lição 1 – A Igreja e a Sã Doutrina</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Entender a realidade da igreja que havia em Creta e as principais
            qualificações necessárias aos presbíteros e a necessidade do combate
            aos falsos mestres.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-para-comecar">Para Começar</H3>
          <P className="">
            A carta de Paulo a Tito nos coloca diante de um dos maiores desafios
            da Igreja: manter a verdade do evangelho firme em meio a uma cultura
            hostil e enganosa. Creta era uma sociedade marcada por imoralidade,
            corrupção e mentiras (Tt 1.12). Não muito diferente do nosso tempo,
            a Igreja hoje também é pressionada pelo relativismo, por ideologias
            e falsos mestres. Diante disso, Paulo escreve a Tito, companheiro de
            longas caminhadas, para organizar a Igreja e estabelecer fundamentos
            sólidos de liderança e doutrina.
          </P>
          <P className="">
            A mensagem é clara: sem a verdade de Deus, a Igreja se perde; sem
            líderes piedosos, a comunidade enfraquece; sem disciplina
            espiritual, a fé se torna vulnerável. O que estava em jogo não era
            apenas a organização, mas o testemunho cristão diante do mundo.
          </P>
          <P className="">
            Hernandes Dias Lopes (2009) destaca que Tito associa de forma
            magnífica a doutrina ao dever; a teologia à vida. O dever decorre da
            doutrina; a vida é resultado da teologia. Ou seja, não há
            cristianismo verdadeiro separado de sã doutrina e de vida
            transformada.
          </P>
          <P className="">
            Assim como Tito recebeu a missão de corrigir, ensinar e edificar,
            também nós somos chamados a guardar a sã doutrina e a viver de modo
            que o evangelho seja visto em nossas vidas (Mt 5.16).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-autoridade-apostolica-de-paulo">
            1. A Autoridade Apostólica de Paulo (Tt 1.1-4)
          </H3>
          <P className="">
            Paulo inicia apresentando-se como &quot;servo de Deus e apóstolo de
            Jesus Cristo&quot; (Tt 1.1). Essa dupla designação mostra tanto sua
            humildade como sua autoridade. O termo &quot;servo&quot; (
            <em>doulos</em>) indica submissão total, enquanto
            &quot;apóstolo&quot; mostra o chamado direto de Cristo. MacArthur
            (2015) observa que Paulo poderia destacar seus privilégios e
            experiências extraordinárias, mas preferiu identificar-se, acima de
            tudo, como servo de Deus.
          </P>
          <P className="">
            O propósito de sua missão era promover a fé dos eleitos de Deus e o
            conhecimento da verdade que conduz à piedade (Tt 1.1). Aqui vemos a
            ligação inseparável entre fé, verdade e prática cristã. Barclay
            (1998) comenta que a verdade em Paulo não é apenas intelectual, mas
            algo que produz vida santa.
          </P>
          <P className="">
            Além disso, Paulo fundamenta sua mensagem na promessa de vida
            eterna, a qual o Deus que não pode mentir prometeu antes dos tempos
            eternos (Tt 1.2). Em contraste com a reputação dos cretenses como
            mentirosos, Paulo lembra que Deus é absolutamente fiel. Além disso,
            Paulo faz questão de destacar o caráter de Deus para fortalecer a
            confiança da igreja num ambiente hostil à verdade.
          </P>
          <P className="">
            Por fim, Paulo chama Tito de &quot;meu verdadeiro filho em nossa fé
            comum&quot; (Tt 1.4). Esse vínculo mostra que a autoridade
            apostólica não era fria nem burocrática, mas relacional e
            espiritual. Assim, o ensino vinha acompanhado de amor paternal e
            discipulado.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-papel-de-tito-em-creta">
            2. O Papel de Tito em Creta (Tt 1.5)
          </H3>
          <P className="">
            Paulo deixou Tito em Creta para pôr em ordem as coisas restantes e
            estabelecer presbíteros em cada cidade (Tt 1.5). A expressão
            &quot;pôr em ordem&quot; (<em>epidiorthōsē</em>) transmite a ideia
            de completar o que ainda estava incompleto, como um médico que
            endireita um osso quebrado. Isso mostra que o trabalho de Tito era
            pastoral e corretivo.
          </P>
          <P className="">
            Moody (1970) observa que Paulo não conferiu a Tito autoridade
            ditatorial, mas o orientou a organizar a igreja com base em
            princípios já estabelecidos, semelhantes ao que foi feito em Atos
            14.23, quando Paulo e Barnabé nomearam presbíteros em cada cidade.
            Ou seja, liderança era uma questão de discernimento espiritual, não
            de poder pessoal.
          </P>
          <P className="">
            O contexto cultural de Creta exigia firmeza. Os cretenses eram
            conhecidos por serem &quot;mentirosos, feras terríveis, ventres
            preguiçosos&quot; (Tt 1.12). A tarefa de Tito não era fácil, mas
            necessária. A presença de falsos mestres judaizantes e a imoralidade
            da cultura local faziam da missão de Tito um campo de batalha pela
            verdade.
          </P>
          <P className="">
            Esse papel de Tito ilustra que cada geração de líderes deve assumir
            a responsabilidade de continuar a obra apostólica. Portanto, Tito
            não apenas organizava uma igreja, mas preservava a pureza da fé.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-qualificacoes-dos-presbiteros">
            3. Qualificações dos Presbíteros (Tt 1.6-9)
          </H3>
          <P className="">
            A saúde da Igreja depende do caráter de seus líderes. Paulo lista as
            qualificações dos presbíteros: irrepreensível, marido de uma só
            mulher, filhos crentes, não arrogante, não irascível, não dado ao
            vinho, hospitaleiro, amante do bem, sóbrio, justo, piedoso e
            dominado por si mesmo (Tt 1.6-8).
          </P>
          <P className="">
            Essas características mostram que liderança cristã começa dentro do
            lar. Como Paulo afirma em 1Tm 3.5: &quot;se alguém não sabe governar
            a própria casa, como cuidará da igreja de Deus?&quot;. Hernandes
            Dias Lopes (2009) observa que o caráter é o selo do ministério. Não
            é o talento, mas a vida do líder que garante a saúde da igreja.
          </P>
          <P className="">
            Além disso, o presbítero deveria ser &quot;apegado à Palavra
            fiel&quot; (Tt 1.9). Isso significa lealdade às Escrituras, tanto
            para ensinar quanto para refutar os contradizentes. Aqui vemos o
            duplo papel do pastor: edificar os crentes e confrontar os falsos
            mestres.
          </P>
          <P className="">
            MacArthur (2015) lembra que Paulo não exigia perfeição, mas
            integridade comprovada. O líder deveria ser modelo visível do
            evangelho que pregava. Assim, a igreja seria conduzida não apenas
            por discursos, mas por exemplos de vida.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-ameaca-dos-falsos-mestres">
            4. A Ameaça dos Falsos Mestres (Tt 1.10-16)
          </H3>
          <P className="">
            Nesta parte Paulo alerta que &quot;há muitos insubordinados,
            faladores vãos e enganadores, especialmente os da circuncisão&quot;
            (Tt 1.10). Esses falsos mestres perturbavam famílias inteiras e
            ensinavam por ganância. A ordem de Paulo é direta: &quot;É preciso
            fazê-los calar&quot; (Tt 1.11).
          </P>
          <P className="">
            Moody (1970) observa que a doutrina tem dupla aplicação: exortar os
            crentes e convencer os contradizentes. Isso exige coragem pastoral,
            pois os falsos mestres não apenas distorcem a fé, mas contaminam a
            vida da igreja.
          </P>
          <P className="">
            A denúncia de Paulo é forte: &quot;Professam conhecer a Deus,
            entretanto, o negam-no por suas obras&quot; (Tt 1.16). Esse é o
            retrato da falsa religião: palavras piedosas sem transformação de
            vida. Hernandes Dias Lopes (2009) ressalta que &quot;não basta ser
            ortodoxo; é preciso ser ortoprático. A ortodoxia morta é tão letal
            quanto a heresia&quot;.
          </P>
          <P className="">
            A mentira dos falsos mestres não estava apenas no que ensinavam, mas
            no que viviam. Sua fé era vazia porque não produzia piedade. Para
            Paulo, o evangelho verdadeiro é inseparável de vida santa, por isso
            Tito deveria agir com firmeza.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Nesta primeira lição, aprendemos que Paulo estabelece o fundamento
            da Igreja: liderança piedosa, sã doutrina e disciplina contra falsos
            mestres. A igreja de Creta precisava de ordem, autoridade espiritual
            e proteção contra falsos ensinos.
          </P>
          <P className="">
            Hoje também precisamos de líderes íntegros, apegados à Palavra, que
            vivam o evangelho e o defendam. Em nossos dias de relativismo, o
            testemunho da Igreja depende de líderes e membros que unam fé,
            doutrina e vida. Como Paulo disse: &quot;Tem cuidado de ti mesmo e
            da doutrina. Persevera nestas coisas, porque, fazendo assim, te
            salvarás, tanto a ti mesmo como aos que te ouvem&quot; (1Tm 4.16).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – A Vida Cristã e a Sã Doutrina</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Compreender a importância da vida cristã e da sã doutrina para a
            vida prática.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-para-comecar">Para Começar</H3>
          <P className="">
            Depois de tratar da liderança e dos falsos mestres, Paulo passa a
            instruir Tito sobre como aplicar a sã doutrina na vida da comunidade
            cristã. O capítulo 2 é uma das passagens mais práticas do Novo
            Testamento, pois mostra como o evangelho deve ser vivido em
            diferentes grupos da igreja: homens e mulheres, jovens e idosos,
            servos e líderes.
          </P>
          <P className="">
            A fé cristã não é apenas um conjunto de crenças abstratas, mas um
            estilo de vida. A doutrina verdadeira precisa ser traduzida em
            comportamento. Hernandes Dias Lopes destaca (2009) que &quot;a
            ortodoxia sem ortopraxia é estérea, e a ortopraxia sem ortodoxia é
            cega&quot;. Em outras palavras, precisamos tanto da verdade quanto
            de uma vida coerente com ela.
          </P>
          <P className="">
            No mundo atual, onde há um abismo entre discurso e prática, a carta
            a Tito nos desafia a viver de forma íntegra, para que a Palavra de
            Deus não seja difamada (Tt 2.5). O testemunho da Igreja depende não
            apenas do que prega, mas também do que pratica.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-instrucoes-para-os-mais-velhos">
            1. Instruções Para os Mais Velhos (Tt 2.1-3)
          </H3>
          <P className="">
            Paulo orienta Tito a ensinar o que está de acordo com a sã doutrina
            (Tt 2.1). A primeira aplicação é para os mais velhos. Os homens
            deveriam ser temperantes, respeitáveis, prudentes e sadios na fé, no
            amor e na perseverança (Tt 2.2). Já as mulheres deveriam ser
            reverentes em sua maneira de viver, não caluniadoras, nem
            escravizadas ao vinho, mas mestras do bem (Tt 2.3).
          </P>
          <P className="">
            Essas qualificações mostram que a maturidade espiritual deve
            acompanhar a idade. Os anciãos são chamados a serem exemplos para os
            mais jovens, sustentando a igreja com fé e vida piedosa. Na cultura
            greco-romana, muitos idosos eram vistos como inúteis, mas Paulo
            resgata o valor espiritual da velhice como modelo de sabedoria e
            perseverança.
          </P>
          <P className="">
            MacArthur (2015) comenta que a maturidade não é apenas cronológica,
            mas espiritual. Um idoso na fé deve ser referência de caráter e
            devoção, alguém que mostre na prática o que significa resistir
            firmes até o fim.
          </P>
          <P className="">
            Os mais velhos da igreja hoje precisam assumir seu papel de
            mentores, inspirando as novas gerações a permanecer firmes na fé.
            Isso significa testemunhar perseverança, transmitir sabedoria
            bíblica e viver de modo a deixar um legado espiritual (Sl 71.18).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-instrucoes-para-os-mais-jovens">
            2. Instruções Para os Mais Jovens (Tt 2.4-8)
          </H3>
          <P className="">
            Na carta, Paulo recomenda as mulheres mais velhas a instruir as mais
            jovens a amarem seus maridos e filhos, a serem prudentes, puras,
            boas donas de casa, bondosas e sujeitas a seus maridos, para que a
            Palavra de Deus não seja difamada (Tt 2.4-5). Os jovens, por sua
            vez, deveriam ser sóbrios em tudo (Tt 2.6).
          </P>
          <P className="">
            Paulo também exorta Tito a ser &quot;em tudo exemplo de boas
            obras&quot; (Tt 2.7). Ou seja, a juventude cristã não é desculpa
            para imaturidade espiritual, mas oportunidade para o testemunho
            vivo. Hernandes Dias Lopes (2009) lembra que &quot;o mundo valoriza
            a juventude pelo vigor físico; a Bíblia valoriza a juventude pela
            santidade e pela coragem de se manter puro&quot;.
          </P>
          <P className="">
            A ênfase dessa recomendação não é apenas em boas intenções, mas em
            comportamento concreto que glorifique a Deus no lar e na sociedade.
            A família é apresentada como primeiro campo missionário da fé.
          </P>
          <P className="">
            Os jovens da igreja precisam aprender que sua vida é um reflexo do
            evangelho. Na escola, no trabalho ou nas redes sociais, devem
            mostrar equilíbrio, pureza e amor. A juventude cristã é chamada a
            ser um exemplo vivo de santidade (1Tm 4.12).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-instrucoes-para-os-servos">
            3. Instruções Para os Servos (Tt 2.9-10)
          </H3>
          <P className="">
            Paulo dedica uma parte especial aos servos, instruindo-os a serem
            obedientes a seus senhores, agradando em tudo, não sendo respondões,
            não furtando, mas mostrando fidelidade plena, &quot;para que em tudo
            sejam ornamento da doutrina de Deus, nosso Salvador&quot; (Tt
            2.9-10).
          </P>
          <P className="">
            Aqui vemos o princípio revolucionário do evangelho: em vez de
            estimular a revolta, Paulo chama os cristãos a viverem de forma que
            suas vidas sejam adornos do evangelho. Em um contexto em que a
            escravidão era uma realidade social, a mudança mais profunda não
            viria por imposição política, mas pela transformação do coração.
          </P>
          <P className="">
            MacArthur (2015) lembra que o maior testemunho do evangelho não está
            em palavras, mas em vidas transformadas que brilham em ambientes
            hostis. O trabalho, seja qual for, torna-se campo missionário quando
            exercido com integridade.
          </P>
          <P className="">
            Hoje, essa instrução se aplica ao ambiente de trabalho. O cristão
            deve ser o funcionário ou líder mais íntegro, fiel e exemplar,
            mostrando que sua vida é um reflexo do evangelho. Isso dá
            credibilidade à fé diante do mundo (Cl 3.23).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-graca-de-deus-como-fundamento">
            4. A Graça de Deus Como Fundamento (Tt 2.11-15)
          </H3>
          <P className="">
            A razão de todas essas instruções está na graça de Deus:
            &quot;Porquanto a graça de Deus se manifestou salvadora a todos os
            homens, educando-nos para que, renegadas a impiedade e as paixões
            mundanas, vivamos, no presente século, sensata, justa e
            piedosamente, aguardando a bendita esperança e a manifestação da
            glória do nosso grande Deus e Salvador Cristo Jesus&quot; (Tt
            2.11-13).
          </P>
          <P className="">
            A graça não é apenas perdão, mas poder transformador que educa o
            cristão para a santidade. A graça que salva também santifica. Ela
            nos tira do pecado e nos coloca numa vida de devoção a Deus. Moody
            (1970) observa que Paulo conclui este trecho com uma nota
            escatológica: a esperança da volta de Cristo é estímulo para uma
            vida santa no presente.
          </P>
          <P className="">
            A vida cristã só pode ser vivida com base na graça. Isso significa
            que não vivemos pela força da disciplina humana, mas pelo poder
            transformador do Espírito. A graça nos ensina a dizer
            &quot;não&quot; ao pecado e &quot;sim&quot; à santidade, aguardando
            a volta de Cristo com esperança (Hb 12.14).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Nesta lição vimos que a sã doutrina deve se traduzir em um modo de
            vida santo e equilibrado. Paulo instruiu os mais velhos a viverem
            com sobriedade e piedade, sendo referência espiritual (Tt 2.1-3).
            Ensinou também às mulheres e aos jovens a cultivarem amor, pureza e
            domínio próprio, lembrando que Tito deveria ser um modelo de boas
            obras em tudo (Tt 2.4-8). Os servos foram orientados a servir com
            fidelidade, tornando-se exemplo de integridade no trabalho e
            adornando o evangelho com sua conduta (Tt 2.9-10). Por fim, Paulo
            mostrou que a graça de Deus é o fundamento que salva, educa e nos
            impulsiona a viver em santidade, aguardando a bendita esperança da
            volta de Cristo (Tt 2.11-15).
          </P>
          <P className="">
            O desafio para nós é claro: não basta professar a fé, é preciso
            viver de forma coerente com o evangelho. Em casa, no trabalho e na
            igreja, cada cristão é chamado a ser exemplo de integridade e amor,
            refletindo a graça que nos salvou. Que cada etapa da vida —
            juventude, maturidade e serviço — seja marcada por um testemunho que
            glorifique a Deus e mostre ao mundo que a graça transforma não
            apenas o que cremos, mas também como vivemos.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – A Vida Cristã na Sociedade</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Pensar como devemos viver no meio social conforme a palavra de modo
            a refletir a graça com boas obras.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-para-comecar">Para Começar</H3>
          <P className="">
            Depois de instruir Tito sobre a vida interna da igreja, Paulo amplia
            a visão para a relação dos cristãos com a sociedade. O capítulo 3
            mostra que a fé não se limita ao templo ou às reuniões, mas se
            manifesta em nossa postura como cidadãos, trabalhadores e vizinhos.
          </P>
          <P className="">
            Creta era marcada por corrupção, insubordinação e rebeldia. Nesse
            contexto, os cristãos deveriam se distinguir pela obediência,
            mansidão e boas obras. Hernandes Dias Lopes (2009) resume: &quot;A
            carta a Tito mostra que a igreja não é um gueto isolado, mas um povo
            que vive em santidade dentro do mundo, como testemunha do
            evangelho&quot;.
          </P>
          <P className="">
            Essa lição é extremamente atual. Em um mundo polarizado, agressivo e
            sem referências morais, os cristãos são chamados a viver de modo
            diferente, mostrando que a graça de Deus transforma nossa conduta
            pública.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-submissao-e-boas-obras-na-sociedade">
            1. Submissão e Boas Obras na Sociedade (Tt 3.1-2)
          </H3>
          <P className="">
            Neste capítulo Paulo ordena a Tito: &quot;lembra-lhes que se
            sujeitem aos que governam, às autoridades, sejam obedientes e
            estejam prontos para toda boa obra&quot; (Tt 3.1). A submissão às
            autoridades não é servilismo, mas reconhecimento de que a ordem
            civil faz parte do plano de Deus (Rm 13.1).
          </P>
          <P className="">
            Em Creta havia revoltas constantes, esse ensino soava
            contracultural. O evangelho não chamava para a anarquia, mas para um
            testemunho de paz e respeito. Além disso, Paulo acrescenta:
            &quot;não difamem a ninguém, nem sejam altercadores, mas cordatos,
            dando provas de toda cortesia, para com todos os homens&quot; (Tt
            3.2). Essa postura contrasta com a cultura de hostilidade e
            violência da época.
          </P>
          <P className="">
            Hoje os cristãos devem ser cidadãos exemplares, obedecendo às leis,
            trabalhando pelo bem comum e sendo agentes de paz. Numa sociedade
            marcada por ódio e divisão, somos chamados a ser mansos e cordatos,
            para que o mundo veja em nós o caráter de Cristo (Mt 5.9).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-lembranca-da-nossa-condicao-passada">
            2. Lembrança da Nossa Condição Passada (Tt 3.3)
          </H3>
          <P className="">
            Paulo lembra os crentes: &quot;pois nós também, outrora, éramos
            insensatos, desobedientes, desgarrados, escravos de paixões e
            prazeres diversos, vivendo em malícia e inveja, odiosos e
            odiando-nos uns aos outros&quot; (Tt 3.3). Essa descrição é um
            retrato da vida sem Cristo. Paulo recorda essa realidade para gerar
            humildade. O cristão não deve olhar para o incrédulo com arrogância,
            mas com compaixão, pois já esteve no mesmo estado.
          </P>
          <P className="">
            Barclay comenta que esse versículo mostra que a maior diferença
            entre crentes e descrentes não está no mérito humano, mas na graça
            que transforma.
          </P>
          <P className="">
            A igreja de hoje precisa lembrar que não somos melhores do que os de
            fora. Se fomos salvos, foi pela graça. Essa consciência nos livra do
            orgulho religioso e nos move a amar os perdidos, lembrando que já
            estivemos na mesma condição (Ef 2.1-5).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-salvacao-pela-graca">
            3. A Salvação Pela Graça (Tt 3.4-7)
          </H3>
          <P className="">
            Paulo apresenta uma das declarações mais ricas do Novo Testamento:
            &quot;Quando, porém, se manifestou a benignidade de Deus, nosso
            Salvador, e o seu amor para com os homens, não por obras de justiça
            praticadas por nós, mas segundo a sua misericórdia, ele nos salvou,
            mediante o lavar regenerador e renovador do Espírito Santo&quot; (Tt
            3.4-5).
          </P>
          <P className="">
            Hernandes Dias Lopes (2009) afirma que esse texto é &quot;uma
            síntese magnífica do evangelho: a salvação não vem das obras, mas da
            graça; não vem do mérito humano, mas da misericórdia divina&quot;. O
            Espírito Santo é o agente dessa transformação: Ele regenera e
            renova, conduzindo o crente a uma nova vida.
          </P>
          <P className="">
            Essa passagem deve nos lembrar que nossa identidade não está em boas
            obras, mas na graça de Cristo. O cristão é chamado a viver em
            gratidão e humildade, reconhecendo que foi alcançado pela
            misericórdia, e agora deve refletir essa mesma graça em sua vida (Ef
            2.8-10).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-pratica-constante-das-boas-obras">
            4. A Prática Constante das Boas Obras (Tt 3.8-11)
          </H3>
          <P className="">
            Após refletir sobre a graça, a conclusão que Paulo chega é:
            &quot;afirmes categoricamente que os que creem em Deus sejam
            solícitos na prática de boas obras&quot; (Tt 3.8). A fé verdadeira
            produz frutos visíveis, e a igreja deve ser conhecida não por
            discussões inúteis, mas por boas obras.
          </P>
          <P className="">
            Podemos observar que Paulo contrasta as boas obras com as
            &quot;contendas tolas, genealogias e debates&quot; (Tt 3.9), que só
            dividem e nada edificam. A verdadeira fé se manifesta em serviço,
            não em disputas. Hernandes Dias Lopes (2009) lembra que &quot;a
            graça que salva também nos impulsiona a servir. A fé sem obras é
            morta&quot;. Assim, o evangelho gera ação, não apatia.
          </P>
          <P className="">
            A igreja precisa ser reconhecida não por brigas doutrinárias ou
            disputas internas, mas por seu amor e serviço ao próximo. Isso
            significa praticar a misericórdia, cuidar dos necessitados e ser
            presença transformadora na sociedade (Tg 2.14-17).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            Nesta lição aprendemos que a vida cristã não se restringe à
            comunidade de fé, mas se expressa também na sociedade. Fomos
            chamados a viver em submissão às autoridades e a dar exemplo de
            mansidão e cortesia, em um mundo marcado por rebelião e violência
            (Tt 3.1-2).
          </P>
          <P className="">
            Relembramos nossa condição passada sem Cristo, para que não sejamos
            arrogantes, mas humildes e compassivos com os perdidos (Tt 3.3).
            Vimos ainda a centralidade da graça de Deus na salvação: não somos
            salvos por obras, mas pela misericórdia de Deus, mediante o lavar
            regenerador e renovador do Espírito Santo (Tt 3.4-7). E, como fruto
            dessa graça, a prática das boas obras se torna indispensável,
            evitando disputas inúteis e promovendo o serviço amoroso ao próximo
            (Tt 3.8-11).
          </P>
          <P className="">
            Assim, o convite desta lição é claro: vivamos como cidadãos do Reino
            de Deus em meio à sociedade, lembrando sempre de onde fomos tirados
            e pela graça com que fomos salvos. Que nossas vidas reflitam
            mansidão, humildade e gratidão, e que sejamos conhecidos não por
            brigas ou divisões, mas por nossas boas obras e por um testemunho de
            amor que glorifica a Cristo diante do mundo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">
          Lição 4 – O Evangelho Que Transforma Relacionamentos
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Compreender como o cristão pode contribuir para a reconciliação
            entre pessoas e provocar a transformação de relacionamentos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-para-comecar">Para Começar</H3>
          <P className="">
            A carta a Filemom é a mais pessoal das epístolas paulinas, escrita a
            um cristão de Colossos sobre seu escravo fugitivo, Onésimo. Esse
            pequeno texto mostra o poder prático do evangelho na vida real.
          </P>
          <P className="">
            Paulo não trata apenas de doutrina, mas aplica o evangelho em um
            conflito humano: patrão e escravo, feridos por uma fuga e uma
            dívida. A resposta do apóstolo não é legalista, mas fundamentada na
            graça. Hernandes Dias Lopes (2009) chama essa carta de &quot;um
            manual de reconciliação cristã&quot;.
          </P>
          <P className="">
            A lição de Filemom é clara: o evangelho quebra barreiras sociais,
            cura feridas e transforma inimigos em irmãos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-fe-e-o-amor-de-filemom">
            1. A Fé e o Amor de Filemom (Fm 1-7)
          </H3>
          <P className="">
            Paulo começa agradecendo a Deus pela fé e pelo amor de Filemom, que
            já era conhecido por refrescar os corações dos santos (Fm 5-7). Esse
            testemunho positivo prepara o caminho para o pedido que virá.
          </P>
          <P className="">
            Dwight L. Moody (1970) comenta que a comunhão da fé só é real quando
            se traduz em atos concretos de amor e hospitalidade. Paulo reconhece
            que Filemom já vivia essa fé.
          </P>
          <P className="">
            William Barclay (1998) observa que a introdução mostra a sabedoria
            pastoral de Paulo: antes de exortar, ele elogia e reforça as
            virtudes de seu interlocutor.
          </P>
          <P className="">
            Podemos aplicar isso ainda hoje, apesar da carta falar de uma
            relação senhor e servo, pois a nossa fé deve ser marcada por amor
            visível. Assim como Filemom refrescava os corações dos santos,
            também devemos ser instrumentos de consolo e encorajamento na vida
            da igreja (Hb 10.24-25).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-intercessao-de-paulo-por-onesimo">
            2. A Intercessão de Paulo Por Onésimo (Fm 8-16)
          </H3>
          <P className="">
            Paulo poderia ordenar, mas prefere rogar com amor: &quot;Peço-te por
            meu filho Onésimo, que gerei nas minhas prisões&quot; (Fm 10). O
            escravo inútil tornou-se útil, pois foi transformado por Cristo.
          </P>
          <P className="">
            Hernandes Dias Lopes (2009) afirma que Onésimo representa cada
            pecador transformado pela graça: &quot;de inútil nos tornamos úteis,
            de escravos do pecado passamos a servos de Cristo&quot;.
          </P>
          <P className="">
            Paulo pede que Filemom o receba &quot;não como escravo; antes, muito
            acima de escravo, como irmão caríssimo&quot; (Fm 16). William
            Barclay (1998) observa que aqui está a revolução do evangelho: ele
            não destrói pela força, mas transforma relacionamentos pela graça.
          </P>
          <P className="">
            O cristão de hoje deve aprender a ver o próximo não segundo
            categorias sociais, mas como irmão em Cristo. Onde há preconceito ou
            divisão, o evangelho nos chama à reconciliação e à unidade (Gl
            3.28).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-disposicao-de-paulo-em-assumir-a-divida">
            3. A Disposição de Paulo em Assumir a Dívida (Fm 17-19)
          </H3>
          <P className="">
            Paulo se coloca como fiador: &quot;Se algum dano te fez ou te deve
            alguma coisa, põe isso na minha conta&quot; (Fm 18). Esse gesto
            aponta diretamente para a obra de Cristo.
          </P>
          <P className="">
            MacArthur (2015) observa que Paulo age como mediador, assim como
            Cristo pagou a dívida do pecador perante Deus. Essa é uma ilustração
            prática do evangelho vivido. O perdão verdadeiro muitas vezes
            envolve assumir o custo do erro do outro, exatamente como Cristo fez
            por nós.
          </P>
          <P className="">
            No relacionamento cristão, somos chamados a perdoar de forma
            sacrificial. Muitas vezes, isso significa abrir mão de direitos ou
            suportar perdas, para que a reconciliação aconteça:
            &quot;Suportai-vos uns aos outros, perdoai-vos mutuamente, caso
            alguém tenha motivo de queixa contra outrem. Assim como o Senhor vos
            perdoou, assim também perdoai vós; acima de tudo isto, porém, esteja
            o amor, que é o vínculo da perfeição&quot; (Colossenses 3:13,14). É
            assim que refletimos o amor de Cristo!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-evangelho-e-a-transformacao-das-relacoes">
            4. O Evangelho e a Transformação das Relações (Fm 20-25)
          </H3>
          <P className="">
            Paulo conclui com confiança de que Filemom fará até mais do que ele
            pede: &quot;Certo, como estou, da tua obediência, eu te escrevo,
            sabendo que farás mais do que estou pedindo&quot; (Fm 21). A
            reconciliação não seria apenas possível, mas inevitável para quem
            foi alcançado pela graça.
          </P>
          <P className="">
            Para Dwight Lyman Moody (1970) a carta mostra a essência da
            fraternidade cristã: em Cristo, patrão e escravo se tornam irmãos.
            Essa é a revolução silenciosa do evangelho. O pedido de Paulo não é
            apenas pessoal, mas comunitário: toda a igreja estava envolvida e
            testemunharia a reconciliação.
          </P>
          <P className="">
            Mesmo por meio dessa pequena carta, o evangelho nos chama a viver
            relacionamentos restaurados. Isso significa perdoar, pedir perdão e
            caminhar juntos em unidade. Onde há divisões, Cristo é o elo que
            reconcilia (2Co 5.18-19). Além disso podemos atuar como instrumento
            do Espírito Santo para promover a reconciliação entre irmãos, assim
            como o Apóstolo Paulo foi na vida de Filemon e Onésimo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            A carta a Filemom nos mostrou como o evangelho transforma
            relacionamentos quebrados. Primeiro, vimos o testemunho de fé e amor
            de Filemom, que já refrescava os corações dos santos e era exemplo
            de hospitalidade (Fm 1-7). Depois, contemplamos a intercessão
            amorosa de Paulo em favor de Onésimo, o escravo fugitivo, agora
            convertido e útil, pedido que o recebesse não mais como servo, mas
            como irmão em Cristo (Fm 8-16). Em seguida, Paulo se colocou como
            fiador da dívida de Onésimo, um gesto que aponta diretamente para
            Cristo, que assumiu em nosso lugar a culpa que não podíamos pagar
            (Fm 17-19). Por fim, vimos como o evangelho cria um novo padrão de
            vida comunitária, onde a reconciliação e a fraternidade prevalecem
            sobre as barreiras sociais (Fm 20-25).
          </P>
          <P className="">
            Essa carta nos convida a aplicar o evangelho em nossos próprios
            relacionamentos. Onde houver mágoa, que haja perdão. Onde houver
            dívida, que haja disposição de restaurar. Onde houver divisão, que
            Cristo seja o elo de reconciliação. Assim como Filemom foi chamado a
            acolher Onésimo como irmão, também nós somos chamados a viver a
            unidade da fé, deixando que a graça que nos salvou seja o alicerce
            para relações marcadas por amor, perdão e comunhão verdadeira.
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
              <span className="font-semibold">Curso:</span> Cartas a Tito e
              Filemon
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
            <P className="mt-0">Wagner Monteiro</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Teológica:</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Textual:</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Rezende</P>
            <P className="mt-0">Wagner Monteiro</P>
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
