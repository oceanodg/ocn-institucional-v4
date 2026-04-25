import {
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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { LinkSmall } from "~/components/ui/link-small";
import { TableCellLinksContainer } from "~/components/ui/table-cell-links-container";

export const metadata = {
  alternates: {
    types: {
      "text/markdown": "/oceano-academy/materiais-didaticos/mateus.md",
    },
  },
};

export default function CursoMateus() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Os Evangelhos: Mateus</H1>
          <P className="mt-0">
            História do nascimento, ministério, morte e ressurreição de Jesus
            Cristo.
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
                  <LinkSmall href="https://drive.google.com/file/d/19h0gpUvWjRwC22KNRLdn0jkwy7i28uq4/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/mateus.md">
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
                  <LinkSmall href="https://drive.google.com/file/d/14gqAwzoqDyGLBPbss7m2NM1cXA_Gvtvu/view?usp=sharing">
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
                  <LinkSmall href="https://www.youtube.com/watch?v=VskOdIySJQI">
                    <SquarePlay className="size-4" />
                    Mateus 1-13
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=4E-Ju-WKe1k">
                    <SquarePlay className="size-4" />
                    Mateus 14-28
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
            <a href="#lesson-1">Lição 1 – O Nascimento e Ministério de Jesus</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-genealogia-de-jesus">1. Genealogia de Jesus</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-nascimento-de-jesus">
              2. O Nascimento de Jesus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-visita-dos-magos-e-a-fuga-para-o-egito">
              3. A Visita dos Reis Magos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-retorno-do-egito-e-a-vida-em-nazare">
              4. O Retorno do Egito e a Vida em Nazaré
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">Lição 2 – O Sermão da Montanha</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-as-bem-aventurancas">1. As bem-aventuranças</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-sal-da-terra-e-a-luz-do-mundo">
              2. O Sal da Terra e a Luz do Mundo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-ame-seus-inimigos">3. Ame seus inimigos</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-oracao-e-a-dependencia-de-deus">
              4. A Oração e a Dependência de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">
              Lição 3 – Os Milagres e Ensinamentos de Jesus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-os-milagres-de-cura">1. Os Milagres de Cura</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-acalmando-a-tempestade">
              2. Acalmando a Tempestade
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-escolha-dos-doze-apostolos-e-a-missao">
              3. A Escolha dos Doze Apóstolos e a Missão
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-as-parabolas-do-reino">
              4. As Parábolas do Reino
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – A Última Ceia, Morte e Ressurreição de Jesus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-ultima-ceia-e-o-getsemani">
              1. A Última Ceia e o Getsêmani
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-julgamento-e-a-crucificacao">
              2. O Julgamento e a Crucificação
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-ressurreicao">3. A Ressurreição</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-grande-comissao">4. A Grande Comissão</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#references">Referências Bibliográficas</a>
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
          Lição 1 – O Nascimento e Início do Ministério de Jesus
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="">Apresentar o nascimento e o ministério de Jesus.</P>
          <P className="">
            <span className="font-semibold">Texto áureo:</span> Mateus 1 e 2
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-introducao">Introdução</H3>
          <P className="">
            O Evangelho de Mateus se inicia de maneira singular, estabelecendo
            desde o princípio a identidade única e a missão de Jesus Cristo. Ao
            traçar a genealogia de Jesus, Mateus não apenas conecta-o à linhagem
            real de Davi e Abraão, cumprindo assim as profecias messiânicas do
            Antigo Testamento, mas também sinaliza a universalidade de sua
            mensagem redentora. Essa genealogia não é apenas uma lista de nomes,
            mas uma afirmação clara de que Jesus é o esperado Messias, o
            cumprimento das promessas divinas ao povo de Israel e, de forma mais
            ampla, à humanidade.
          </P>
          <P className="">
            Além da genealogia, Mateus narra o nascimento de Jesus de uma
            perspectiva única, enfocando a história pelos olhos de José,
            revelando a intervenção divina desde o início. Essa abordagem não
            apenas enfatiza a singularidade do nascimento virginal, mas também
            prepara o terreno para a revelação contínua da missão redentora de
            Jesus. Assim, o início do Evangelho de Mateus não apenas estabelece
            a base histórica e teológica de quem é Jesus, mas também aponta para
            a amplitude de sua obra salvadora e sua autoridade divina sobre toda
            a criação.
          </P>
          <P className="">
            Ainda, sob uma perspectiva acadêmica, observa-se que o Evangelho de
            Mateus atendia a diversas necessidades de seus contemporâneos.
            Destacam-se, dentre elas, a instrução e a catequização dos fiéis, a
            oferta de conteúdo apologético e evangelístico visando alcançar os
            judeus, o encorajamento aos cristãos diante da hostilidade do mundo
            e a inspiração de uma fé sólida em Jesus Cristo como o Messias
            prometido.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-genealogia-de-jesus">
            1. Genealogia de Jesus (Mateus 1:1-17)
          </H3>
          <P className="">
            A genealogia de Jesus, apresentada no início do evangelho de Mateus,
            serve como uma introdução poderosa que impressionaria qualquer judeu
            do século 1. Mateus organiza os nomes de maneira que culmina com
            Jesus, destacando a importância e a legitimidade de sua linhagem.
            Para os judeus da época, que conheciam profundamente a história de
            seus antepassados, essa genealogia funcionava como um anúncio
            grandioso, destacando Jesus como a figura central e culminante na
            linha de sucessão dos grandes patriarcas e reis de Israel.
          </P>
          <P className="">
            A linhagem apresentada por Mateus conecta Jesus diretamente a
            Abraão, o pai fundador da nação, e ao rei Davi, a quem foram feitas
            promessas de domínio futuro. A narrativa enfatiza que, após o exílio
            babilônico e séculos de espera e opressão, as antigas promessas de
            Deus estavam prestes a ser cumpridas. Mateus indica que Jesus é o
            tão esperado Messias, o ungido de Deus que trará a restauração e a
            redenção esperadas por Israel. Essa estrutura genealógica de três
            grupos de quatorze nomes não só legitima Jesus como descendente
            real, mas também simboliza a perfeição e a completude de sua
            chegada.
          </P>
          <P className="">
            Mateus também faz questão de destacar as formas inesperadas e, às
            vezes, controversas pelas quais Deus atuou na história de Israel,
            sugerindo que o nascimento de Jesus seria igualmente surpreendente.
            A inclusão de figuras como Tamar, Raabe e a esposa de Urias na
            genealogia demonstra que Deus frequentemente trabalha através de
            situações complexas e pouco convencionais. Com isso, Mateus prepara
            seus leitores para a narrativa extraordinária do nascimento virginal
            de Jesus, destacando que, assim como no passado, Deus continua a
            operar de maneiras surpreendentes e miraculosas para cumprir suas
            promessas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-nascimento-de-jesus">
            2. O Nascimento de Jesus (Mateus 1:18-25)
          </H3>
          <P className="">
            No Evangelho de Mateus, a narrativa do nascimento de Jesus é contada
            sob a perspectiva de José, contrastando com o relato de Lucas, que
            focaliza Maria. Embora ambos os evangelhos diferenciem-se em
            detalhes, eles convergem e se mostram compatíveis e complementares.
            Destaca-se o momento em que um anjo conforta José, assim como
            Gabriel consolou Maria, com as palavras "Não tenha medo." Essa
            semelhança sublinha a importância da fé e da confiança em Deus ao
            enfrentar circunstâncias incomuns e desafiadoras, um tema central na
            história do nascimento de Jesus. Mateus ainda procura deixar claro
            que o nascimento de Jesus foi proveniente de uma concepção virginal,
            enfatizando que José não conheceu Maria enquanto ela não deu à luz a
            Jesus, sendo tal concepção proveniente do Espírito Santo.
          </P>
          <P className="">
            O nome “Emanuel”, mencionado em Isaías e enfatizado por Mateus,
            significa “Deus conosco”, destacando a presença divina constante na
            história humana. Mateus estrutura seu evangelho em torno desse
            conceito central, enfatizando que Jesus é a encarnação de Deus entre
            seu povo, prometendo estar presente com eles até o fim dos tempos.
            Esse vínculo íntimo entre Deus e a humanidade é essencial para
            compreender não apenas o nascimento de Jesus, mas também seu
            propósito de redenção e salvação.
          </P>
          <P className="">
            Ao apresentar essas histórias, Mateus revela um Deus que não apenas
            intervém nos momentos cruciais, mas que escolhe habitar entre as
            pessoas, participando ativamente de suas vidas. Isso não apenas
            desafia as expectativas humanas sobre como Deus age, mas também
            oferece uma nova perspectiva de esperança e renovação em tempos de
            dificuldade. A mensagem de Mateus sobre Jesus é um convite para
            todos que enfrentam desafios e incertezas: confiem em Deus que está
            conosco, cujo amor e graça continuam a transformar vidas até hoje.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-visita-dos-magos-e-a-fuga-para-o-egito">
            3. A Visita dos Magos e a Fuga para o Egito (Mateus 2:1-15)
          </H3>
          <P className="">
            Mateus introduz os "magos" no relato do nascimento de Jesus para
            destacar um aspecto crucial: a universalidade do reinado de Cristo.
            Apesar de Jesus ser proclamado rei dos judeus, sua autoridade não se
            limita apenas a esse povo. Isso é sugerido pelos presentes que os
            magos oferecem, tipicamente reservados para reis ou divindades,
            indicando que Jesus é reconhecido desde o início como um governante
            de importância universal, cujo domínio se estende além das
            fronteiras étnicas ou religiosas.
          </P>
          <P className="">
            Na Antiguidade oriental, presentear era crucial ao se aproximar de
            superiores (Gn 43.11; 1Sm 9.7,8; 1Rs 10.2), geralmente de forma
            recíproca. O olíbano e a mirra eram itens valiosos: o primeiro, um
            tipo de incenso, e o segundo, um perfume precioso usado em
            embalsamamentos. Comentaristas antigos e modernos atribuem
            significados simbólicos aos três presentes dados pelos magos: ouro
            para a realeza, incenso para a divindade e mirra para a paixão e
            funeral. Alguns argumentam que os presentes simplesmente eram caros
            e comuns, possivelmente ajudando a financiar a viagem ao Egito, que
            será citada no tópico adiante.
          </P>
          <P className="">
            Além disso, a visita dos magos antecipa eventos futuros cruciais na
            narrativa de Mateus, especialmente o confronto final de Jesus com
            Pilatos, representante do maior império mundial da época. Enquanto
            os magos trouxeram presentes significativos para Jesus, reconhecendo
            sua realeza espiritual, Pilatos, posteriormente, reconhece Jesus
            como o "rei dos judeus", embora de maneira irônica e acompanhada por
            um ato de zombaria e violência, contrastando fortemente com a
            reverência dos magos.
          </P>
          <P className="">
            Essa narração em Mateus ressoa ao longo de todo o evangelho,
            desafiando os ouvintes a considerarem profundamente o que significa
            seguir um rei que não apenas transcende fronteiras humanas, mas
            também sacrifica-se em favor de seu povo. A história dos magos não é
            apenas um evento isolado, mas um prenúncio das tensões e revelações
            que culminam na morte de Jesus, onde sua verdadeira realeza é
            reconhecida mesmo nas circunstâncias mais sombrias e desafiadoras.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-retorno-do-egito-e-a-vida-em-nazare">
            4. O Retorno do Egito e a Vida em Nazaré (Mateus 2:19-23)
          </H3>
          <P className="">
            O Evangelho de Mateus apresenta o nascimento de Jesus em um contexto
            de intensa turbulência política e social. Desde o início, Jesus é
            retratado como uma figura ameaçadora aos poderes estabelecidos,
            simbolizado pela reação violenta de Herodes ao ouvir sobre seu
            nascimento. A matança dos bebês em Belém reflete não apenas a
            perseguição de um governante despótico, mas também ressoa com
            profecias do Antigo Testamento que prenunciam um salvador. Mateus
            enfatiza que Jesus nasceu não para trazer conforto e tranquilidade,
            mas para confrontar o mal e trazer a salvação esperada por Israel.
          </P>
          <P className="">
            Ao longo do relato de Mateus, o nascimento de Jesus é constantemente
            conectado às Escrituras, destacando seu papel como cumpridor das
            promessas divinas e herdeiro das expectativas messiânicas judaicas.
            As referências a profecias como Oséias 11:1 e Jeremias 31:15 não
            apenas situam Jesus na tradição profética de Israel, mas também
            sugerem que ele é a resposta divina aos anseios de libertação e
            justiça do povo. O estabelecimento da família de Jesus em Nazaré,
            conforme Isaías 11:1, reforça a ideia de um novo começo para a
            linhagem de Davi, indicando que Jesus não só representa uma
            continuidade, mas também uma renovação do projeto redentor de Deus.
          </P>
          <P className="">
            Em suma, o relato do nascimento de Jesus em Mateus não é apenas uma
            narrativa histórica, mas um manifesto teológico e político. Mateus
            apresenta Jesus como aquele que desafia os poderes terrenos,
            trazendo esperança e salvação não apenas para Israel, mas para toda
            a humanidade. Seu nascimento em condições adversas e sua subsequente
            missão revelam não apenas a vulnerabilidade divina, mas também a
            força transformadora que desafia todas as expectativas humanas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Os primeiros capítulos do Evangelho de Mateus não apenas narram o
            nascimento e os primeiros eventos da vida de Jesus, mas também
            estabelecem sua identidade como o cumprimento das profecias
            messiânicas. Ao reconhecer Jesus como o Messias prometido, somos
            confrontados com a chamada para vivermos de acordo com os princípios
            divinos revelados na Palavra de Deus. Isso não se trata apenas de
            aceitar intelectualmente sua divindade, mas de comprometer nossas
            vidas com os ensinamentos de Cristo, que nos chamam a amar a Deus
            sobre todas as coisas e ao próximo como a nós mesmos.
          </P>
          <P className="">
            Neste sentido, a vida de Jesus não é apenas um evento do passado,
            mas uma realidade viva e transformadora que desafia e inspira nossa
            jornada diária. Reconhecer Jesus como o cumprimento das promessas de
            Deus implica em uma resposta pessoal e comunitária, onde nos
            esforçamos para refletir sua graça e verdade em nossas interações e
            decisões. É um convite para vivermos com fé ativa, esperança
            renovada e amor abnegado, como verdadeiros seguidores daquele que
            veio não para ser servido, mas para servir e dar a sua vida em
            resgate por muitos.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – O Sermão da Montanha</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="">
            Explorar o Sermão da Montanha e como o Evangelho impacta a vida
            cristã.
          </P>
          <P className="">
            <span className="font-semibold">Texto áureo:</span> Mateus 5 e 6
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-introducao">Introdução</H3>
          <P className="">
            O Sermão da Montanha, sendo o primeiro de uma série de cinco
            discursos sobre a vida cristã, representa um marco essencial nos
            ensinamentos de Jesus, capturando a essência do Reino de Deus e
            desafiando profundamente seus ouvintes. Situado nos capítulos 5 a 7
            do Evangelho de Mateus, este sermão não apenas apresenta uma série
            de bem-aventuranças que redefinem as noções convencionais de
            felicidade, mas também estabelece um padrão elevado de conduta moral
            e espiritual para aqueles que escolhem seguir a Cristo. Jesus não
            apenas discorre sobre virtudes como humildade, mansidão e justiça,
            mas também convida seus seguidores a viverem de maneira radicalmente
            diferente do que é esperado pelo mundo.
          </P>
          <P className="">
            Ao longo dos séculos, o Sermão da Montanha tem desafiado e inspirado
            crentes e não crentes, servindo como um farol de orientação moral e
            um chamado à transformação interior. Nele, encontramos princípios
            universais de compaixão, perdão e amor ao próximo, que transcendem
            contextos culturais e temporais. Jesus não apenas apresenta uma
            visão utópica, mas oferece um modelo prático para uma vida de fé
            autêntica e comprometida, onde a ética não é uma mera conformidade
            externa, mas uma expressão genuína de um coração transformado pelo
            amor de Deus.
          </P>
          <P className="">
            Por derradeiro, o sermão, por ser um discurso sobre a vida cristã,
            mostra que o crente não torna Deus o soberano de sua vida, pois Ele
            já o é. Todavia, revela, diante da sujeição e obediência, ou da
            falta delas, que tipo de subordinado ao Reino o cristão é.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-as-bem-aventurancas">
            1. As Bem-aventuranças (Mateus 5:1-12)
          </H3>
          <P className="">
            O Sermão da Montanha, registrado nos capítulos 5, 6 e 7 do Evangelho
            de Mateus, transcende um simples código de ética; é um manifesto que
            redefine as expectativas do Reino de Deus para a humanidade. Ao
            proclamar as bem-aventuranças, Jesus não oferece apenas conselhos
            morais, mas anuncia uma realidade transformadora: aqueles que já
            vivem em conformidade com esses princípios estão em posição de serem
            celebrados e fortalecidos pela obra de Deus. Essas palavras não são
            uma mera descrição filosófica do mundo, mas um anúncio do evangelho
            — as boas-novas de que Deus está inaugurando uma nova era por meio
            de Jesus Cristo.
          </P>
          <P className="">
            O convite de Jesus para seguir seu caminho implica adentrar nessa
            nova realidade divina, onde as prioridades e as expectativas são
            subvertidas em relação aos padrões terrenos de sucesso e felicidade.
            Ao desafiar as noções convencionais de bênçãos e prosperidade, Jesus
            revela a natureza paradoxal do Reino de Deus, onde os humildes, os
            pacificadores e os que choram são reconhecidos como portadores da
            verdadeira felicidade divina. Essas bem- aventuranças não são apenas
            diretrizes para a vida presente, mas convocações para vivermos de
            acordo com a nova ordem inaugurada por Jesus, antecipando o
            cumprimento completo do Reino de Deus na terra como é nos céus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-sal-da-terra-e-a-luz-do-mundo">
            2. O Sal da Terra e a Luz do Mundo (Mateus 5:13-16)
          </H3>
          <P className="">
            Assim como o sal e a luz transformam de forma permanente o ambiente
            em que são introduzidos, Jesus desafia tanto os contemporâneos
            judeus quanto os leitores atuais a entender que sua mensagem não é
            simplesmente uma reforma moral, mas a introdução de um novo modo de
            ser que transcende as expectativas convencionais. Ao proclamar as
            bem-aventuranças, Jesus não apenas descreve uma realidade futura,
            mas convoca seus seguidores a viverem desde agora como participantes
            ativos no Reino de Deus, transformando assim o ambiente em que se
            encontram.
          </P>
          <P className="">
            A dinâmica entre a continuidade e a novidade na mensagem de Jesus é
            central. Ele não descarta a lei e os profetas, mas os cumpre de uma
            maneira radicalmente nova e transformadora. Jesus não só ensina
            sobre a justiça e a misericórdia, mas também encarna esses
            princípios em sua própria vida e morte, estabelecendo um padrão para
            seus seguidores. Ele não apenas desafia as interpretações vigentes
            da lei, mas redefine o que significa verdadeiramente viver segundo a
            vontade de Deus, convidando todos a uma mudança de coração e mente
            que reflete a nova aliança de Deus em Cristo.
          </P>
          <P className="">
            Assim, o Sermão do Monte não é apenas uma lista de ensinamentos
            morais, mas um chamado revolucionário para que os seguidores de
            Jesus sejam sal e luz no mundo, manifestando o Reino de Deus em suas
            vidas diárias. Jesus inaugura uma era em que a fidelidade a Deus não
            é apenas uma questão de observância externa da lei, mas uma
            transformação interior que se reflete em ações concretas de amor,
            justiça e serviço. Essa mensagem desafia continuamente os cristãos a
            hoje serem agentes de transformação e esperança em um mundo que
            tanto necessita.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-ame-seus-inimigos">
            3. Ame seus inimigos (Mateus 5:38-48)
          </H3>
          <P className="">
            O Sermão do Monte, registrado no Evangelho de Mateus, redefine a
            ética e a prática religiosa e enfatiza o mandamento central de Jesus
            para amar uns aos outros como reflexo do amor divino. Neste
            discurso, Jesus desafia as concepções tradicionais de justiça ao
            ensinar que o verdadeiro cumprimento da lei vai além da simples
            observância externa, exigindo uma transformação interna que se
            manifesta no amor, perdão e compaixão pelos outros.
          </P>
          <P className="">
            Num contexto marcado por tensões políticas e sociais, Jesus instrui
            seus seguidores a responderem ao mal com bondade, superando a lógica
            da retaliação. Ele propõe um caminho de justiça restauradora, que
            não apenas evita a escalada de hostilidade, mas busca ativamente a
            reconciliação e a paz. Dessa forma, o Sermão do Monte não se limita
            a oferecer diretrizes morais, mas convida os discípulos de Jesus a
            viverem de acordo com o amor exemplificado por ele, um amor que
            transcende barreiras e transforma vidas.
          </P>
          <P className="">
            Assim, mais do que um conjunto de regras éticas, o Sermão do Monte
            revela o caráter de Deus como amoroso e compassivo, e desafia seus
            seguidores a refletirem esse amor no mundo através de suas ações e
            atitudes. Este discurso revolucionário continua a inspirar e
            orientar aqueles que buscam seguir a Jesus não apenas como mestre,
            mas como o modelo supremo de como viver e amar uns aos outros.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-oracao-e-a-dependencia-de-deus">
            4. A Oração e a Dependência de Deus (Mateus 6:5-15; 6:25-34)
          </H3>
          <P className="">
            O Pai Nosso, ensinado por Jesus durante o Sermão do Monte, revela-se
            não apenas como uma oração, mas como um modelo de como nos
            aproximarmos de Deus de maneira significativa e eficaz. Esta oração
            não é uma fórmula mágica ou um conjunto de palavras vazias, mas sim
            um guia que Jesus oferece para nos conectar com o Pai celestial de
            forma autêntica e reverente. Ao chamar Deus de "Pai", Jesus evoca a
            imagem de um Deus que é próximo e acessível, mas também santo e
            poderoso, convidando seus seguidores a se relacionarem com ele em um
            nível pessoal e reverente.
          </P>
          <P className="">
            Vale ressaltar que a oração ensinada por Jesus contrasta fortemente
            com as orações hipócritas praticadas por muitos, cujo intuito não
            era buscar um relacionamento genuíno com Deus, mas sim ostentar uma
            suposta santidade perante os outros. Nesse contexto, observa-se que
            na Bíblia as pessoas oravam prostradas (Nm 16:22; Js 5:14; Dn 8:17;
            Mt 26:39; Ap 11:16), de joelhos (2Cr 6:13; Dn 6:10; Lc 22:41; At
            7:60; 9:40; 20:36; 21:5), sentadas (2Sm 7:18) e de pé (1Sm 1:26; Mc
            11:25; Lc 18:11, 13). Todavia, Jesus enfatizava que o motivo da
            oração é o aspecto mais crucial.
          </P>
          <P className="">
            Além de ser um modelo de como nos dirigir a Deus, o Pai Nosso
            estabelece a base para uma vida de fé ativa e comprometida. Ele
            enfatiza a importância de buscar o reino de Deus e a vontade divina
            antes de nossas próprias necessidades. Isso não apenas realça a
            prioridade de honrar a Deus em nossas vidas, mas também nos encoraja
            a buscar sua orientação e provisão para todas as áreas de nossas
            vidas. Ao reconhecer que Deus é o provedor de todas as coisas e o
            autor da justiça, a oração nos lembra de nossa dependência dele em
            todos os aspectos.
          </P>
          <P className="">
            Além disso, o Pai Nosso aborda o tema do perdão e da reconciliação,
            essencial para a vida cristã. Jesus instrui seus seguidores a
            pedirem perdão por seus próprios erros, enquanto também os desafia a
            perdoar aqueles que os ofendem. Essa prática de perdão mútuo não
            apenas reflete o perdão abundante de Deus, mas também promove a cura
            e a restauração nos relacionamentos humanos. Portanto, ao utilizar o
            Pai Nosso como um guia diário de oração, os cristãos são lembrados
            constantemente de seu compromisso com a justiça, o perdão e a busca
            contínua pelo reino de Deus em suas vidas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Aprendemos que o Sermão da Montanha não é apenas um conjunto de
            ideais elevados, mas um chamado prático e desafiador para os
            cristãos de hoje. Ele nos convida a viver uma vida marcada pela
            fidelidade a Deus e pela prática da justiça em todas as áreas de
            nossa existência. Esse ensinamento ressoa profundamente em um mundo
            frequentemente marcado pela injustiça, desigualdade e divisão. Como
            seguidores de Cristo, somos convocados não apenas a ouvir suas
            palavras, mas a vivê-las diariamente, refletindo o amor e a
            compaixão que ele exemplificou. Isso requer uma transformação de
            coração e mente, guiada pela fé e sustentada pela palavra de Deus.
          </P>
          <P className="">
            Assim, ao enfrentarmos os desafios contemporâneos, o Sermão do Monte
            nos orienta a influenciar positivamente nossa sociedade através de
            nossas ações e palavras. É um chamado à integridade, à misericórdia
            e à busca incansável pela paz e pela justiça, não apenas para nós
            mesmos, mas para todos à nossa volta. Ao internalizar esses valores
            e os aplicarmos em nossas interações cotidianas, não apenas honramos
            a mensagem de Jesus, mas também contribuímos para a construção de um
            mundo mais alinhado com os princípios do reino de Deus.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – Os Milagres e Ensinamentos de Jesus</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="">
            Apresentar os milagres de Jesus com o intuito de fortalecer nossa
            fé, pois Ele tem poder sobre todas as coisas.
          </P>
          <P className="">
            <span className="font-semibold">Texto áureo:</span> Mateus 8, 10 e
            13
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-introducao">Introdução</H3>
          <P className="">
            Os capítulos 8 a 13 dos Evangelhos são fundamentais para entender a
            autoridade e o poder divino de Jesus. Eles descrevem uma série de
            milagres e ensinamentos que revelam não apenas a capacidade
            sobrenatural de Jesus, mas também seu profundo compromisso com a
            humanidade. Esses capítulos destacam sua habilidade de curar
            doenças, controlar a natureza, expulsar demônios e até mesmo
            ressuscitar os mortos.
          </P>
          <P className="">
            Cada milagre realizado por Jesus nestes capítulos serve como uma
            prova tangível de sua divindade e compaixão. Os milagres de curas e
            libertações demonstram seu poder sobre forças físicas e espirituais,
            enquanto os milagres naturais, como a calmaria da tempestade,
            sublinham sua autoridade sobre a criação. Esses eventos
            extraordinários testemunham seu poder e soberania sobre todas as
            coisas.
          </P>
          <P className="">
            Além dos milagres, os ensinamentos de Jesus nestes capítulos
            oferecem uma visão profunda sobre o reino de Deus e a ética cristã.
            Suas parábolas e instruções desafiam as normas sociais e religiosas
            da época, promovendo um entendimento mais profundo de justiça,
            misericórdia e amor. Juntos, os milagres e ensinamentos contidos
            nestes capítulos formam um poderoso testemunho do caráter divino de
            Jesus e de sua missão redentora na terra.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-os-milagres-de-cura">
            1. Os Milagres de Cura (Mateus 8:1-17)
          </H3>
          <P className="">
            Percebe-se que Mateus registra os milagres de Jesus de maneira
            sintetizada, distinguindo- se dos demais evangelhos pela brevidade
            com que relata os fatos milagrosos. É notório que Mateus condensa
            instruções e conclusões, omite personagens secundários, entre outras
            coisas. Isso demonstra que Mateus entendia que a mensagem contida no
            milagre era mais importante que o próprio milagre, ao ponto de
            deixar de lado alguns detalhes que outros evangelistas destacaram.
          </P>
          <P className="">
            A seção do evangelho de Mateus, capítulos 8 e 9, explora como as
            pessoas percebiam a autoridade de Jesus em público, começando com as
            histórias do leproso e do servo do centurião. Em ambos os casos,
            Jesus demonstrou seu poder de cura, mas a questão vai além da cura
            física. No caso do leproso, Jesus não só cura, mas também restaura
            um membro de Israel, enquanto no caso do centurião, a fé na
            autoridade de Jesus se estende além de Israel, simbolizando a
            inclusão das nações.
          </P>
          <P className="">
            A lepra representava tanto uma doença grave quanto um banimento
            social. Os leprosos viviam isolados, sem contato humano, tornando a
            ação de Jesus de tocar e curar um leproso algo espantoso e
            profundamente comovente. Jesus, ao cumprir a lei, instrui o leproso
            a seguir o ritual necessário para ser reintegrado na sociedade,
            enfatizando a importância da restauração completa na comunidade de
            Israel, que é um objetivo fundamental do evangelho.
          </P>
          <P className="">
            O reconhecimento da autoridade de Jesus pelo centurião gentio em
            Cafarnaum é ainda mais impressionante. Ele compara a autoridade de
            Jesus sobre doenças à sua própria autoridade sobre soldados e
            escravos, o que Jesus considera uma demonstração notável de fé. Esta
            fé não é apenas uma atitude religiosa, mas um reconhecimento
            específico do poder de Jesus, que é recompensado conforme a crença
            do centurião.
          </P>
          <P className="">
            O desafio para os cristãos hoje é entender o que significa
            reconhecer e submeter-se à autoridade de Jesus, chamá-lo de Senhor e
            viver de acordo com isso. No Novo Testamento, "fé" não é uma
            percepção geral de uma dimensão sobrenatural ou uma confiança em uma
            divindade distante acessada por diferentes caminhos.
          </P>
          <P className="">
            Em termos cristãos, a fé significa acreditar que o Deus vivo confiou
            sua autoridade a Jesus, que a exerce para a salvação do mundo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-acalmando-a-tempestade">
            2. Acalmando a Tempestade (Mateus 8:23-27)
          </H3>
          <P className="">
            O mar é tradicionalmente visto como um símbolo de poder indomável e
            bravura. Sua força é perceptível mesmo em dias calmos, com as marés
            movendo milhares de litros de água constantemente. Quando os ventos
            se levantam, o mar revela seu poder avassalador com ondas
            gigantescas e ameaçadoras, especialmente perceptíveis para aqueles
            que se aventuram em um barco nessas condições.
          </P>
          <P className="">
            Os judeus não eram um povo marítimo, ao contrário de seus vizinhos
            fenícios e egípcios, que eram nações marítimas. Para Israel, a terra
            prometida era o foco principal, e o mar era frequentemente visto
            como um lugar de trevas e maldade nos escritos judaicos. No Antigo
            Testamento, Deus é mostrado dominando o mar, como no Êxodo, ou
            usando-o para corrigir a desobediência, como no caso de Jonas.
          </P>
          <P className="">
            Esse pano de fundo cultural e religioso sobre o mar está presente na
            narrativa de Mateus, que reflete a visão judaica do mar como um
            elemento de força superado pela autoridade divina. A história de
            Jonas é revisitada para entender melhor a narrativa de Mateus. Deus
            ordenou a Jonas que pregasse em Nínive, mas ele fugiu, resultando em
            uma grande tempestade. Jonas foi lançado ao mar pelos marinheiros,
            acalmando as águas, e depois foi engolido por um grande peixe que o
            devolveu à terra seca para cumprir sua missão.
          </P>
          <P className="">
            Mateus usa a comparação com Jonas para enfatizar que Jesus é um
            profeta maior, com autoridade absoluta sobre os elementos naturais.
            Enquanto Jonas foi um sinal do cuidado de Deus para com todos,
            incluindo os pagãos de Nínive, Jesus representa uma nova criação. As
            histórias de Jesus, como a de acalmar a tempestade, demonstram sua
            autoridade direta e poderosa, sem necessidade de auxílio. Jesus
            convida à fé específica em sua soberania.
          </P>
          <P className="">
            Os discípulos de Jesus, embora testemunharam seus feitos, ainda não
            compreendiam completamente sua autoridade, ao contrário de figuras
            como o centurião de Cafarnaum. Eles começam a questionar quem é
            Jesus, percebendo que sua autoridade vai além das curas e se estende
            aos elementos naturais. Mateus desafia os leitores a refletirem
            sobre como veem Jesus e se realmente o tratam como a autoridade
            suprema em todos os aspectos de suas vidas, além de questionar se os
            seguidores de Jesus agem de maneira que outros reconheçam essa
            autoridade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-escolha-dos-doze-apostolos-e-a-missao">
            3. A Escolha dos Doze Apóstolos e a Missão (Mateus 10:1-15)
          </H3>
          <P className="">
            Até esse momento, os discípulos eram como passageiros, enquanto
            Jesus dirigia, tomava todas as decisões e lidava com os desafios.
            Agora, Cristo os escolhe para agir, o que deve ter sido assustador
            para eles. Mateus lista os Doze apóstolos, destacando que eles são
            “enviados” para continuar a missão de Jesus e testemunhar sua
            ressurreição. O número doze simboliza a renovação de Israel, e os
            apóstolos não são apenas um sinal dessa restauração, mas também o
            meio pelo qual Deus a realiza.
          </P>
          <P className="">
            As curas que os discípulos realizaram serviam como sinais da nova
            vida que Deus estava trazendo a Israel através de Jesus. Aceitar
            essa mensagem significava abraçar a nova era que começava com Jesus;
            rejeitá-la resultava em consequências severas, indicando uma escolha
            de permanecer na escuridão. As instruções de Jesus eram específicas
            para aquele momento, mas Mateus as registra detalhadamente,
            acreditando que permaneceram relevantes para a igreja após a
            ressurreição de Jesus.
          </P>
          <P className="">
            Jesus instrui seus seguidores a não se orgulharem por serem os
            escolhidos do rei vindouro, mas a serem curadores e restauradores,
            trazendo esperança e vida aos outros sem buscar ganhos pessoais.
            Eles não devem levar dinheiro ou provisões, dependendo da
            hospitalidade daqueles que recebem sua mensagem, que deve ser
            oferecida gratuitamente. Isso lhes faz perceber a grande
            responsabilidade que têm, pois sua missão é transmitir a urgente
            mensagem do reino de Deus.
          </P>
          <P className="">
            As curas realizadas pelos discípulos são sinais da nova vida que
            Deus traz para Israel, iniciando uma nova era com Jesus. Aqueles que
            aceitam a mensagem se preparam para o reino de Deus, enquanto
            aqueles que a rejeitam escolhem permanecer na escuridão. A missão
            dos discípulos não é apenas oferecer uma nova experiência religiosa
            ou certeza de salvação, mas preparar as pessoas para a chegada
            iminente do reino de Deus.
          </P>
          <P className="">
            Hoje, essas instruções ainda aplicam-se à missão da igreja, que
            continua a ser chamada para anunciar a nova vida em Jesus, enfrentar
            desafios, e levar adiante a obra de restauração e renovação iniciada
            por ele.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-as-parabolas-do-reino">
            4. As Parábolas do Reino (Mateus 13:1-52)
          </H3>
          <P className="">
            Jesus utilizava parábolas como uma forma essencial de ensinar e
            transmitir verdades espirituais profundas. Por isso, Jesus escolheu
            falar por parábolas não apenas para facilitar o entendimento de
            conceitos espirituais complexos, mas também para encorajar seus
            ouvintes em um processo de reflexão, decisão e transformação
            espiritual. Suas parábolas ensinam verdades fundamentais sobre o
            reino de Deus, e também desafiam seus seguidores a viverem de acordo
            com essas verdades em suas vidas diárias.
          </P>
          <P className="">
            O Evangelho de Mateus reúne todas as parábolas no capítulo 13, que
            está no meio de seu evangelho, sendo o terceiro de cinco discursos
            (Mateus 5—7, 10, 13, 18 e 23—25). Estas parábolas refletem os
            eventos passados e apontam para o futuro, especialmente para o
            julgamento final onde Deus estabelecerá seu reino e erradicará a
            maldade. Jesus conta uma história enigmática de fracasso e sucesso,
            diferente das expectativas de Israel sobre a restauração de sua
            grandeza. Ele desafiou seus ouvintes a meditar e discutir suas
            palavras, buscando um entendimento mais profundo.
          </P>
          <P className="">
            Jesus usa uma metáfora agrícola, descrevendo um fazendeiro que
            parece desperdiçar a maior parte de sua semente. Este exagero
            ilustra os desafios no estabelecimento do reino de Deus e levanta
            questões sobre o tempo de espera e a promessa de uma colheita
            espetacular. Jesus afirma que, apesar das dificuldades de
            compreensão, a realização das esperanças de Israel está em andamento
            através dele. Ele encoraja seus seguidores a se agarrarem a ele,
            ouvirem e aprenderem continuamente.
          </P>
          <P className="">
            Mateus nos convida a refletir sobre a obra de Deus no mundo,
            seguindo o exemplo das multidões que ouviram Jesus à margem do lago.
            O cristianismo não oferece lições confortáveis, mas revela as ações
            de Deus e o que Ele deseja realizar através de nós.
          </P>
          <P className="">
            As parábolas relatadas em Mateus 13.1-53 são dirigidas não apenas
            aos discípulos, mas também às multidões. Mateus vincula este
            discurso a episódios anteriores, utilizando uma estrutura narrativa
            que inclui explicações e interpretações para destacar a relevância
            das parábolas. Estudos indicam que elas não são meras alegorias, mas
            narrativas com múltiplos níveis de significado, projetadas para
            provocar reflexões profundas e mudanças de percepção nos ouvintes.
            Assim como Jesus fez, devemos contar histórias que transmitam essas
            mensagens e encontrar maneiras de compartilhá-las, para que as
            pessoas ao nosso redor possam ouvir e compreender.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            Aprendemos que Jesus possui controle absoluto sobre a natureza,
            doenças, demônios e até a própria morte. Tal poder não apenas
            confirma sua divindade, mas também serve como um fundamento sólido
            para a fé de seus seguidores, mostrando que Ele é digno de total
            confiança e obediência.
          </P>
          <P className="">
            Para nós, reconhecer a autoridade de Jesus implica mais do que
            admiração pelos seus feitos; significa viver de acordo com seus
            ensinamentos. Suas instruções oferecem um guia prático e ético para
            nossas vidas, desafiando-nos a praticar a justiça, a misericórdia e
            o amor de maneira genuína e constante. Viver segundo os ensinamentos
            de Jesus é responder ao seu chamado para sermos discípulos fiéis,
            comprometidos com a transformação pessoal e com a influência
            positiva no mundo ao nosso redor.
          </P>
          <P className="">
            Confiar na soberania e na missão de Jesus nos dá a segurança de que
            estamos sob o cuidado de um Senhor que tem poder sobre todas as
            coisas. Isso nos encoraja a enfrentar as adversidades com esperança
            e fé, sabendo que Ele é capaz de operar milagres e trazer cura e
            libertação em nossas vidas. Ao seguir a Jesus e aderir aos seus
            ensinamentos, estamos participando de sua missão redentora,
            contribuindo para a manifestação do reino de Deus aqui na terra e
            aguardando com expectativa sua consumação final.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">
          Lição 4 – A Última Ceia, Morte e Ressurreição de Jesus
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="">
            Apresentar a Última Ceia, a Morte e a Ressurreição de Cristo a fim
            de que possamos nos lembrar do significado da Ceia e da importância
            da Cruz e da Ressurreição para a fé cristã.
          </P>
          <P className="">
            <span className="font-semibold">Texto áureo:</span> Mateus 26 e
            Mateus 28
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-introducao">Introdução</H3>
          <P className="">
            O relato de Mateus sobre a morte de Jesus é marcante e intenso,
            subvertendo expectativas com uma narrativa enérgica que corta como
            um machado. Ao invés do final suave e pacífico que alguns poderiam
            antecipar para Jesus após confrontar autoridades, Mateus expõe um
            drama carregado de emoções, anseios e horrores, que ecoam não apenas
            na vida de indivíduos, mas também em Israel, no mundo e em cada um
            de nós. Os personagens são ricos e variados, desde os principais
            como Caifás e Pedro até figuras obscuras como Judas e a dupla
            crucificada ao lado de Jesus, todos contribuindo para o cenário
            complexo e multifacetado que leva ao destino inexorável de Jesus.
          </P>
          <P className="">
            Os personagens secundários são igualmente significativos, como a
            esposa de Pilatos e as criadas que apontam para Pedro, cada um
            trazendo uma voz única para o drama central. A morte de Jesus é
            vista pelos líderes religiosos como uma necessidade política para
            preservar seu poder, enquanto outros, como a mulher anônima que unge
            Jesus, expressam um amor extravagante e devocional que desafia as
            convenções. Jesus, consciente de seu destino iminente, prepara seus
            seguidores para a jornada árdua e significativa à frente,
            simbolizada pela Páscoa como um momento de libertação e renovação da
            aliança com Deus.
          </P>
          <P className="">
            Este relato não apenas narra eventos históricos, mas convida os
            leitores a refletirem sobre seu próprio relacionamento com Jesus e o
            significado de seu sacrifício. É uma história de urgência, de amor
            extravagante e de destino divino que continua a desafiar e inspirar
            até hoje, convidando-nos a considerar profundamente como respondemos
            à mensagem de Jesus e como vivemos à luz de sua morte e
            ressurreição.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-ultima-ceia-e-o-getsemani">
            1. A Última Ceia e o Getsêmani (Mateus 26:17-46)
          </H3>
          <P className="">
            Na Última Ceia, os atos simbólicos de Jesus, como identificar o pão
            e o vinho com seu corpo e sangue, têm um significado profundo que
            ultrapassa as palavras. A Ceia é uma ordenança para os seguidores
            compartilharem desses elementos como um símbolo da nova aliança, o
            dom de perdão, nova vida e a chegada do reino de Deus. Eles
            comunicam não apenas uma mensagem, mas têm o poder de transformar
            vidas profundamente desordenadas e feridas, e proclamar Jesus como
            Senhor (1Coríntios 11:26).
          </P>
          <P className="">
            Os discípulos, longe de serem encorajados, estavam à beira da
            dispersão, enquanto Jesus se preparava para enfrentar sua própria
            escuridão. Pedro, o forte e impulsivo, logo se veria em uma crise de
            fraqueza, negando Jesus repetidamente. Isso sugere que o impacto
            poderoso dos atos de Jesus frequentemente revela nossa própria
            fragilidade e dependência.
          </P>
          <P className="">
            A Última Ceia ecoa como um lembrete contínuo de nossa necessidade do
            amor redentor de Deus até que o novo dia chegue e Jesus nos brinde
            com o novo vinho do reino de Deus.
          </P>
          <P className="">
            No jardim do Getsêmani, Jesus enfrentou uma batalha espiritual
            intensa, refletindo sobre o cálice da ira de Deus que estava prestes
            a beber. Contrariamente à imagem de um herói destemido, Jesus estava
            profundamente angustiado, rogando ao Pai para evitar o sofrimento
            iminente. Ele expressa seu desespero em múltiplas orações, buscando
            uma alternativa à provação que se avizinha, mas a resposta divina é
            um firme "não". Este momento revela não apenas a humanidade de
            Jesus, mas também sua aceitação da vontade de Deus, conforme
            ensinara aos discípulos no Pai-Nosso, vivendo o que ele mesmo
            ensinou.
          </P>
          <P className="">
            Para os discípulos, testemunhar essa agonia contrasta com sua
            expectativa de um líder triunfante. A lição de vigiar e orar com
            Jesus no Getsêmani torna-se crucial para entender o sofrimento
            humano e a necessidade de empatia e apoio nas horas sombrias. À
            medida que enfrentamos nossos próprios momentos de desespero e
            incerteza, Getsêmani oferece um ponto de conexão espiritual,
            lembrando-nos que o próprio Senhor do mundo passou por essas
            profundezas antes de nós, concedendo significado à nossa própria
            jornada de fé e sofrimento.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-julgamento-e-a-crucificacao">
            2. O Julgamento e a Crucificação (Mateus 26:57-27:56)
          </H3>
          <P className="">
            Nesta passagem crucial do evangelho de Mateus, Jesus enfrenta o
            ápice de sua missão na cruz. Ao citar as palavras iniciais do Salmo
            22, Mateus não busca consolar seus leitores ao sugerir que Deus
            estava simplesmente presente na agonia de Jesus. Pelo contrário, ele
            enfatiza que Jesus experimentou um profundo sentimento de abandono
            divino, carregando sobre si o peso do pecado de toda a humanidade,
            uma escuridão que até então não havia experimentado. Este momento
            não apenas cumpre sua missão de dar a vida como resgate, mas também
            prenuncia eventos futuros de juízo e restauração, conforme
            profetizado por Jesus em 24:29.
          </P>
          <P className="">
            Salienta-se que o julgamento de Jesus apresenta várias
            irregularidades: ocorreu na casa de Caifás, sem advogado de defesa,
            com uma acusação de blasfêmia não comprovada, e um veredicto rápido
            durante a noite, contrariando o prazo mínimo legal, dentre outras
            irregularidades. Assim, percebe-se que o desrespeito às regras
            judiciais evidentemente ocorreu por conveniência daqueles que
            queriam executar o Senhor Jesus Cristo.
          </P>
          <P className="">
            O ponto culminante é a morte de Jesus, descrita por Mateus como seu
            último suspiro, marcando o clímax para o qual toda a narrativa do
            evangelho se encaminha. Jesus permanece obediente até o fim, apesar
            do período de aparente abandono divino, um paradoxo central à sua
            missão redentora.
          </P>
          <P className="">
            Por fim, Mateus convida os leitores a contemplar não apenas o
            impacto imediato da morte de Jesus, mas também a olhar adiante para
            a restauração final e o novo mundo de Deus que está sendo
            inaugurado.
          </P>
          <P className="">
            A morte de Jesus não é apenas um evento histórico, mas o catalisador
            de uma transformação, que restaura a criação e oferece esperança e
            reconciliação para indivíduos e comunidades. Ao reconhecer Jesus
            como o Filho de Deus e comprometer-se a viver em sua fé, os leitores
            são desafiados a aprender diariamente sobre o amor do Pai e a
            contribuir para a obra redentora de Jesus no mundo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-ressurreicao">
            3. A Ressurreição (Mateus 28:1-10)
          </H3>
          <P className="">
            Na manhã da ressurreição, as mulheres que foram ao sepulcro de Jesus
            experimentaram uma mistura de medo e surpresa. Elas tinham ido com
            especiarias para completar o sepultamento que fora apressado na
            sexta-feira. Esperando encontrar paz e quietude, depararam-se com
            uma cena dramática descrita por Mateus: um terremoto, um anjo e
            guardas desmaiados. Mateus relata esses eventos extraordinários para
            enfatizar que algo divino estava ocorrendo, alinhado com a tradição
            judaica onde anjos aparecem em momentos significativos nos
            propósitos de Deus.
          </P>
          <P className="">
            Deus, que pareceu silencioso na crucificação, finalmente dá a
            palavra final com a ressurreição de Jesus. Esta não é apenas uma
            demonstração de poder, mas o início de um novo mundo prometido.
          </P>
          <P className="">
            Jesus ressuscitado marca o começo de uma nova era, enviando seus
            discípulos primeiro para a Galiléia e, depois, aos confins da terra,
            espalhando a notícia do que havia acontecido. A ressurreição é a
            resposta de Deus às perguntas não formuladas dos seguidores de Jesus
            e às questões levantadas pelo próprio Jesus na cruz.
          </P>
          <P className="">
            As mulheres, atordoadas e temerosas, encontraram Jesus quase
            imediatamente após serem instruídas pelo anjo. Enquanto Mateus e
            João relatam encontros com Jesus tanto em Jerusalém quanto na
            Galiléia, Lucas menciona apenas aparições em Jerusalém. O final
            abrupto do evangelho de Marcos também menciona instruções para ir à
            Galiléia. Esses encontros não são meramente para provar um ponto,
            mas para comissionar os discípulos para um novo trabalho e vida. A
            ressurreição confirma o propósito de Deus e prepara os discípulos
            para disseminar essa nova realidade.
          </P>
          <P className="">
            A cruz de Jesus é o ponto culminante da história do cristianismo,
            entendida plenamente somente à luz da ressurreição. Os discursos e
            ensinamentos de Jesus, como o Sermão do Monte, revelam sua
            identidade como o Messias de Israel. Ele ofereceu ao mundo uma nova
            lei e maneira de viver que agora se realiza através de sua
            ressurreição.
          </P>
          <P className="">
            O evangelho de Mateus ganha nova vida ao mostrar que Jesus, ao
            derrotar a morte, confirma seu papel divino e a nova ordem que ele
            veio estabelecer. Sendo o fato principal da fé cristã, pois o Cristo
            não apenas morreu, mas venceu a morte e vivo está! A pessoa de quem
            Mateus fala é revelado como aquele por meio de quem a morte é
            derrotada. Esta é a esperança do cristão, Jesus vive!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-grande-comissao">
            4. A Grande Comissão (Mateus 28:16-20)
          </H3>
          <P className="">
            Jesus deixa para seus seguidores três responsabilidades fundamentais
            para trazer sua autoridade ao mundo: fazer discípulos, batizar e
            ensinar. Fazer discípulos implica chamar pessoas para seguir Jesus e
            aprender seu modo de vida, assim como ele fez com os pescadores na
            Galileia. O evangelismo continua sendo essencial, pois ao anunciar
            as boas-novas de Deus e trazer pessoas à fé e obediência, a
            autoridade de Jesus é manifestada no mundo.
          </P>
          <P className="">
            A segunda responsabilidade é batizar. O batismo, relacionado à morte
            e ressurreição de Jesus, é uma ordenança e simboliza um compromisso
            profundo de morrer com ele e compartilhar sua nova vida. É uma marca
            pública e visível de pertencimento ao "nome" santo de Deus — o Pai,
            o Filho e o Espírito Santo. Esse ato é uma declaração de identidade
            e responsabilidade, assim como o nome dado a Jesus pelo anjo
            representava sua missão.
          </P>
          <P className="">
            A terceira responsabilidade é ensinar. O evangelho de Jesus promove
            um estilo de vida que contrasta com os valores do mundo. Mateus nos
            lembra da importância de dedicar energia para aprender e ensinar
            princípios fundamentais da fé cristã.
          </P>
          <P className="">
            Jesus não deixa seus seguidores apenas com tarefas a cumprir, mas
            também com promessas que as sustentam. A autoridade de Jesus é a
            razão para realizar essas responsabilidades, e a promessa de sua
            presença constante ("Emanuel, Deus conosco") oferece o suporte
            necessário para enfrentar os desafios desta missão. Essas promessas
            fornecem a maior motivação e consolo para seus seguidores ao longo
            da caminhada cristã.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            A narrativa da ceia, morte, ressurreição e grande comissão de Jesus
            constitui a base essencial da fé cristã. Na Última Ceia, Jesus
            compartilhou seu corpo e sangue simbolicamente, oferecendo perdão,
            nova vida e o reino de Deus. Este ato de comunhão lembra
            constantemente o sacrifício de Jesus e chama os cristãos à unidade e
            partilha.
          </P>
          <P className="">
            A morte de Jesus na cruz representa o ponto culminante de seu
            ministério, onde ele carrega o peso do pecado do mundo e experimenta
            uma profunda sensação de abandono. Sua obediência até o fim e
            disposição para sofrer pela humanidade demonstram o amor
            incondicional de Deus e a vitória sobre o pecado e a morte, abrindo
            caminho para a redenção.
          </P>
          <P className="">
            A ressurreição inaugura uma nova era, assegurando a vida eterna
            através de Jesus. A Grande Comissão, delegando aos cristãos a tarefa
            de fazer discípulos, batizar e ensinar, traz a autoridade de Jesus
            ao mundo, sustentada pela promessa de sua presença contínua. Juntos,
            esses elementos chamam os cristãos a viver em obediência, renovação
            e missão, imitando Jesus e proclamando o reino de Deus ao mundo.
          </P>
          <P className="">
            Jesus Cristo é o centro da nossa fé. Devemos lembrar e viver os
            frutos do sacrifício de Cristo, proclamando sua vitória e cumprindo
            sua grande comissão.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Referências Bibliográficas */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="references">Referências Bibliográficas</H2>
        <div className="flex flex-col gap-0">
          <P className="">
            CARSON, D.A. O Comentário de Mateus, 1ª Edição, Shedd Publicações,
            2011.
          </P>
          <P className="">
            WRIGHT, N.T. Evangelho para todos; Edição original, Vida Melhor
            Editora S.A. 2020.
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
              <span className="font-semibold">Curso:</span> Os Evangelhos:
              Mateus
            </P>
            <P className="mt-0">
              <span className="font-semibold">Ano:</span> 2024
            </P>
            <P className="mt-0">
              <span className="font-semibold">1ª Edição</span>
            </P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Coordenação Editorial:</P>
            <P className="mt-0">Márcio Rezende</P>
            <P className="mt-0">Ev. Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Conselho Editorial:</P>
            <P className="mt-0">Pr. Sinval Júlio de Souza</P>
            <P className="mt-0">Pr. Lúcio Andres</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Teológica:</P>
            <P className="mt-0">Ev. Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Textual:</P>
            <P className="mt-0">Ev. Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentarista:</P>
            <P className="mt-0">Thayná Cavalcante</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
