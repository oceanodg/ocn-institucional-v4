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
import { Table, TableCell, TableHeader, TableRow } from "~/components/ui/table";
import { LinkSmall } from "~/components/ui/link-small";
import { TableCellLinksContainer } from "~/components/ui/table-cell-links-container";

export const metadata = {
  alternates: {
    types: {
      "text/markdown": "/oceano-academy/materiais-didaticos/timoteo.md",
    },
  },
};

export default function CursoTimoteo() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Cartas a Timóteo</H1>
          <P className="mt-0">
            Fundamentos para a liderança cristã, o cuidado pastoral e a
            preservação da sã doutrina na Igreja.
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
                  <LinkSmall href="https://drive.google.com/file/d/188fmXS3j1oZpaytCO6Enh3ftMrzOxZSV/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/timoteo.md">
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
                  <LinkSmall href="https://drive.google.com/file/d/1ZfsMOoZxZOm6sM4xWuB9wCWMv5uSBNhG/view?usp=sharing">
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
                  <LinkSmall href="https://www.youtube.com/watch?v=EK43-lXnV50">
                    <SquarePlay className="size-4" />1 Timóteo
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=AxTyLu521XU">
                    <SquarePlay className="size-4" />2 Timóteo
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

      {/* Sumário */}
      <Container className="mb-10 sm:mb-16">
        <H2>Sumário</H2>
        <UL className="mt-0 space-y-2 sm:space-y-2">
          <SummaryLi>
            <a href="#lesson-1">
              Lição 1 – O Chamado Para Uma Vida de Santidade e Serviço
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-homem-nao-tem-autoridade-sobre-o-evangelho">
              1. O Homem Não Tem Autoridade Sobre o Evangelho
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-outro-evangelho">2. O Outro Evangelho</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-paulo-recebeu-o-evangelho-diretamente-de-cristo">
              3. Paulo Recebeu o Evangelho Diretamente de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-uma-igreja-madura-discerne-o-verdadeiro-evangelho">
              4. Uma Igreja Madura Discerne o Verdadeiro Evangelho
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">
              Lição 2 – A Oração e Piedade na Vida do Cristão
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-poder-da-intercessao-pelos-homens">
              1. O Poder da Intercessão Pelos Homens
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-vontade-de-deus-que-todos-se-salvem">
              2. A Vontade de Deus: Que Todos Se Salvem
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-cristo-o-unico-mediador">
              3. Cristo, o Único Mediador
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-orando-com-pureza-e-santidade">
              4. Orando Com Pureza e Santidade
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">Lição 3 – O Perfil do Líder Segundo Deus</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-o-carater-irrepreensivel-do-lider-cristao">
              1. O Caráter Irrepreensível do Líder Cristão
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-o-exemplo-do-bispo-na-igreja">
              2. O Exemplo do Bispo na Igreja
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-os-diaconos-e-seu-servico-ao-corpo-de-cristo">
              3. Os Diáconos e Seu Serviço ao Corpo de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-recompensa-para-os-fieis-servos-do-senhor">
              4. A Recompensa Para os Fiéis Servos do Senhor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – Permanecendo Fiel em Meio à Apostasia
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-os-tempos-dificeis-e-a-degradacao-moral">
              1. Os Tempos Difíceis e a Degradação Moral
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-necessidade-de-permanecer-na-sa-doutrina">
              2. A Necessidade de Permanecer na Sã Doutrina
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-as-escrituras-a-base-da-nossa-fe">
              3. As Escrituras: a Base da Nossa Fé
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-preparados-para-toda-boa-obra">
              4. Preparados Para Toda Boa Obra
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-5">
              Lição 5 – Combati o Bom Combate: a Coroa da Justiça
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-a-consciencia-de-uma-vida-gasta-para-deus">
              1. A Consciência de Uma Vida Gasta Para Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-a-certeza-da-vitoria-final">
              2. A Certeza da Vitória Final
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-a-coroa-da-justica-reservada-aos-fieis">
              3. A Coroa da Justiça Reservada aos Fiéis
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-a-esperanca-gloriosa-da-vinda-de-cristo">
              4. A Esperança Gloriosa da Vinda de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#editorial">Editorial</a>
          </SummaryLi>
        </UL>
      </Container>

      <Separator className="my-8" />

      {/* Lição 1 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-1">
          Lição 1 – O Chamado Para Uma Vida de Santidade e Serviço
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar como a graça e misericórdia de Deus se manifestaram na
            vida de Paulo e como se estende à vida de cada um que crê e confessa
            a Cristo Jesus, como seu Senhor e Salvador.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-para-comecar">Para Começar</H3>
          <P className="">
            Quando o apóstolo Paulo escreve a Timóteo, ele não está apenas dando
            conselhos pessoais ou diretrizes práticas; ele está, pela inspiração
            do Espírito Santo, estabelecendo fundamentos duradouros para a
            liderança cristã, o cuidado pastoral e a preservação da sã doutrina
            na Igreja. Suas palavras refletem profunda preocupação com a
            integridade do Evangelho e o caráter dos que o ministram. As cartas
            pastorais, especialmente 1 Timóteo, são um verdadeiro manual de
            fidelidade e discernimento em tempos de confusão e corrupção
            espiritual.
          </P>
          <P className="">
            Logo no primeiro capítulo, Paulo alerta com veemência sobre os
            perigos das falsas doutrinas e da má interpretação da Lei. Ele
            destaca que o objetivo da instrução cristã é o amor que procede de
            um coração puro, de uma boa consciência e de uma fé sem hipocrisia
            (1Tm 1.5). Para o apóstolo, não bastava apenas ter conhecimento —
            era necessário viver uma fé autêntica, transformadora, guiada pela
            verdade do Evangelho e não pelas tradições humanas ou especulações
            genealógicas que nada edificavam.
          </P>
          <P className="">
            A partir do versículo 12 até o 17, Paulo abre o coração em um
            testemunho poderoso da graça de Deus. Ele reconhece, com humildade,
            que antes era blasfemo, perseguidor e insolente, mas foi alcançado
            pela misericórdia do Senhor. No versículo 15, declara que Cristo
            veio ao mundo para salvar os pecadores, dos quais ele se considera o
            principal. Isso não é um exagero retórico, mas uma expressão sincera
            de alguém que entende profundamente o peso do pecado e a grandeza da
            graça. Ainda assim, ele glorifica a Deus por tê-lo considerado fiel
            e o ter colocado no ministério, não por méritos próprios, mas pela
            graça abundante de Cristo.
          </P>
          <P className="">
            Em meio a um contexto marcado por mestres da lei que distorciam as
            Escrituras para obter prestígio e benefício próprio — alguns até
            reivindicando vínculos genealógicos com Davi ou com figuras como
            Josué —, Paulo não hesita em denunciar tais enganos. Ele reafirma
            que o centro da fé cristã não está em linhagens humanas, mas no
            poder do Evangelho. Por isso, encerra essa seção com uma doxologia
            fervorosa: &quot;Ao Rei eterno, imortal, invisível, Deus único,
            honra e glória para todo o sempre. Amém&quot; (1Tm 1.17). Essa
            exaltação revela o coração de Paulo: uma vida rendida à soberania e
            à majestade de Deus, cuja verdade deve ser proclamada com coragem,
            zelo e fidelidade.
          </P>
          <P className="">
            Neste curso veremos que as cartas a Timóteo nos lembram que a
            liderança cristã é, acima de tudo, uma vocação de serviço santo,
            fundamentado na Palavra, moldado pela graça, e vivido em meio a uma
            batalha espiritual constante. Paulo chama Timóteo — e a Igreja em
            todos os tempos — a guardar o bom depósito da fé, com coragem,
            humildade e amor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-homem-nao-tem-autoridade-sobre-o-evangelho">
            1. O Homem Não Tem Autoridade Sobre o Evangelho
          </H3>
          <P className="">
            Ao escrever a Timóteo, Paulo testemunha nos versículos 12 e 13 sua
            experiência pessoal, expressando profunda gratidão a Cristo:
            &quot;Dou graças ao que me fortaleceu, a Cristo Jesus, Senhor nosso,
            que me considerou fiel, designando-me para o ministério&quot;. Ele
            relembra seu passado como blasfemo, perseguidor e insolente, mas
            declara com ênfase: &quot;Contudo, alcancei misericórdia&quot;. O
            foco está na ação divina — não foi sua herança judaica, nem seu zelo
            religioso ou conhecimento da Lei que o credenciaram ao ministério,
            mas unicamente a graça de Deus.
          </P>
          <P className="">
            Essa afirmação ilustra a essência do Evangelho: o chamado
            ministerial e a salvação são dádivas graciosas, e não conquistas
            humanas. Como ensina em Efésios 2:8-9, &quot;pela graça sois salvos,
            mediante a fé; e isto não vem de vós, é dom de Deus; não de obras,
            para que ninguém se glorie&quot;. Paulo é um exemplo vivo de que o
            Evangelho não é uma construção humana sobre a qual o homem exerce
            controle. A autoridade pertence a Cristo e é Ele quem chama,
            capacita e envia.
          </P>
          <P className="">
            No versículo 14, Paulo acrescenta que essa graça foi
            &quot;superabundante com a fé e o amor que há em Cristo Jesus&quot;,
            destacando que a graça divina não atua de forma isolada, mas
            acompanha-se da transformação interior produzida pela fé e pelo amor
            cristão. Essa tríade — graça, fé e amor — é o que move o cristão à
            missão. Como ele afirma em 2 Coríntios 5:14-15: &quot;Porque o amor
            de Cristo nos constrange, julgando-nos assim: que, se um morreu por
            todos, logo todos morreram. E ele morreu por todos, para que os que
            vivem não vivam mais para si, mas para aquele que por eles morreu e
            ressuscitou&quot;. Esse é o motor da vida cristã autêntica.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-outro-evangelho">2. O Outro Evangelho</H3>
          <P className="">
            Ao declarar que foi posto no ministério (1Tm 1:12), Paulo não afirma
            que Deus criou algo apenas para ele, mas que foi inserido em um
            ministério já existente — o de Cristo. A palavra
            &quot;ministério&quot; (do grego <em>diakonia</em>) carrega o
            sentido de serviço, função ou tarefa. No Novo Testamento, refere-se
            ao serviço a Deus e ao próximo, sempre com vistas à proclamação do
            Evangelho e à edificação da Igreja.
          </P>
          <P className="">
            O ministério de Cristo é resumido no versículo 15: &quot;Cristo
            Jesus veio ao mundo para salvar os pecadores&quot;. Todos os que
            foram regenerados por essa verdade são chamados a servir nesse mesmo
            ministério, ainda que em diferentes funções. Como afirma Paulo em
            Efésios 4:11-12, &quot;Ele mesmo concedeu uns para apóstolos, outros
            para profetas, outros para evangelistas, e outros para pastores e
            mestres, com vistas ao aperfeiçoamento dos santos, para o desempenho
            do seu serviço, para edificação do corpo de Cristo&quot;.
          </P>
          <P className="">
            Isso significa que, independentemente do papel ou dom específico,
            todos os cristãos estão inseridos no mesmo propósito: glorificar a
            Deus através do anúncio do Evangelho e do discipulado. O &quot;outro
            evangelho&quot; mencionado por Paulo em Gálatas 1:6-9 — uma
            deturpação centrada em méritos humanos ou tradições legalistas — é
            um perigo real que ameaça desviar o crente do verdadeiro ministério
            de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-paulo-recebeu-o-evangelho-diretamente-de-cristo">
            3. Paulo Recebeu o Evangelho Diretamente de Cristo
          </H3>
          <P className="">
            Ainda no capítulo primeiro, no versículo 16, Paulo afirma:
            &quot;Mas, por esta mesma razão, me foi concedida
            misericórdia&quot;, referindo-se ao fato de ter sido o principal dos
            pecadores. Isso não é uma hipérbole, mas um reconhecimento sincero
            de sua antiga oposição violenta ao Evangelho. Deus o escolheu como
            um exemplo vivo da profundidade de Sua misericórdia. Paulo não
            apenas foi salvo, mas transformado e usado como instrumento de Deus.
          </P>
          <P className="">
            Sua vida se tornou uma vitrine da longanimidade de Cristo — a
            paciência divina em suportar o pecador até o momento de sua
            regeneração. Essa demonstração serve para incentivar outros a
            confiarem na graça redentora de Deus. Como em Efésios 2:7:
            &quot;para mostrar, nos séculos vindouros, a suprema riqueza da sua
            graça, em bondade para conosco em Cristo Jesus&quot;.
          </P>
          <P className="">
            Essa verdade é também expressa no Salmo 32:5, citado por Paulo de
            maneira implícita, mostrando que o arrependimento genuíno leva ao
            perdão certo: &quot;Confessei-te o meu pecado [...] e tu perdoaste a
            iniquidade do meu pecado&quot;. Assim como Paulo, todos que se
            arrependem com fé têm a promessa de vida eterna. Como ele escreve a
            Tito (1:2): &quot;Na esperança da vida eterna, a qual Deus, que não
            pode mentir, prometeu antes dos tempos eternos&quot;.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-uma-igreja-madura-discerne-o-verdadeiro-evangelho">
            4. Uma Igreja Madura Discerne o Verdadeiro Evangelho
          </H3>
          <P className="">
            Paulo encerra essa seção de sua carta com uma doxologia que revela
            sua teologia elevada e reverente: &quot;Assim, ao Rei eterno,
            imortal, invisível, Deus único, honra e glória para todo o sempre.
            Amém&quot; (1Tm 1:17). Aqui, ele exalta os atributos de Deus: Sua
            eternidade, Sua incorruptibilidade, Sua transcendência e Sua
            unicidade. Esse louvor não é apenas uma conclusão emocional, mas um
            ensinamento doutrinário. Uma igreja madura sabe que o Evangelho
            começa e termina em Deus.
          </P>
          <P className="">
            O salmo 145:13 confirma: &quot;O teu reino é de todos os séculos, e
            o teu domínio subsiste por todas as gerações&quot;. Deus é
            incorruptível — Ele não muda, não falha e não se adapta às
            tendências humanas. Ele é invisível não por ser ausente, mas por ser
            santo, inalcançável à visão humana, como Deus declarou a Moisés em
            Êxodo 33:20: &quot;Homem nenhum verá a minha face e viverá&quot;.
          </P>
          <P className="">
            Por fim, Paulo declara que a Deus deve ser dada honra e glória
            eternamente. A existência de Deus transcende o tempo cronológico (
            <em>Kronos</em>) e se firma no tempo eterno (<em>Kairós</em>).
            Assim, mesmo quando todas as coisas cessarem, a adoração continuará.
            A igreja que entende e vive essa verdade não será levada por ventos
            de doutrina, mas permanecerá firme, adorando o Deus único, em
            espírito e em verdade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Ao estudarmos o início da primeira carta de Paulo a Timóteo, pudemos
            aprender como a longanimidade, misericórdia e graça de Deus mudou a
            vida do pior dos pecadores e o transformou em um exemplo de fé.
          </P>
          <P className="">
            Aprendemos também que toda a obra redentora é realizada por Cristo
            Jesus, que nos amou ainda quando éramos pecadores, como diz Romanos
            5.8: &quot;Mas Deus prova o próprio amor para conosco pelo fato de
            ter Cristo morrido por nós, sendo nós ainda pecadores&quot;.
          </P>
          <P className="">
            Vimos ainda que honrar e glorificar a Deus não se limita somente à
            nossa vida terrena, mas também à vida eterna, a nossa bendita
            esperança. Portanto nosso modo de viver, falar, andar, vestir, agir
            ou qualquer outra atitude deve ser para a glória e louvor do nome do
            Senhor Jesus Cristo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Lição 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – A Oração e Piedade na Vida do Cristão</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Mostrar que a oração é uma das principais armas do crente, aliada à
            verdade contida na Palavra de Deus, apontando para Cristo como o
            único mediador entre Deus e os homens, portanto deve sempre ter um
            coração limpo e sincero.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-para-comecar">Para Começar</H3>
          <P className="">
            Na continuidade da carta a Timóteo, o apóstolo Paulo escreve sobre a
            necessidade, a prática e a eficácia da oração na vida cristã. Ele
            apresenta a oração como um instrumento indispensável para uma vida
            tranquila, piedosa e frutífera em todas as áreas, tanto individual
            quanto comunitária. O crente, por meio da oração, encontra direção,
            força e comunhão com Deus, além de exercer seu papel de intercessor
            por todos — inclusive pelos que estão em autoridade. Isso é
            refletido em diversas de suas epístolas:
          </P>
          <P className="">
            &quot;Orai sem cessar&quot; (1Ts 5:17); &quot;Quero, portanto, que
            os varões orem em todo lugar, levantando mãos santas, sem ira e sem
            animosidade&quot; (1Tm 2:8); &quot;Perseverai na oração, vigiando
            com ações de graças&quot; (Cl 4:2); &quot;Regozijai-vos na
            esperança, sede pacientes na tribulação, na oração,
            perseverantes&quot; (Rm 12:12).
          </P>
          <P className="">
            A oração, portanto, não é um rito formal ou mera tradição, mas
            expressão vital da dependência do cristão de Deus. É por meio dela
            que se intercede por familiares, amigos, autoridades, inimigos e até
            desconhecidos, obedecendo à ordem de Cristo em Mateus 5:44:
            &quot;Orai pelos que vos perseguem&quot;.
          </P>
          <P className="">
            O apóstolo Paulo também introduz neste capítulo o conceito de
            piedade, que nas Escrituras está ligado à reverência prática, à
            devoção e ao respeito profundo por Deus. Segundo 1Tm 4:8, a piedade
            é proveitosa &quot;para tudo, tendo promessa da vida presente e da
            que há de vir&quot;. Uma vida piedosa, portanto, não se limita à
            religiosidade exterior, mas é fruto de uma fé viva que se manifesta
            em amor, humildade e retidão. Ela envolve amar até os inimigos, como
            reflexo do caráter de Cristo.
          </P>
          <P className="">
            Por fim, Paulo exalta Jesus Cristo como o único mediador entre Deus
            e os homens, reafirmando a centralidade da obra redentora na fé
            cristã. Essa verdade ecoa também na carta aos Hebreus, onde Cristo é
            descrito como o Mediador da nova aliança (Hb 8:6; 9:15; 12:24),
            Aquele que se entregou de uma vez por todas, para que todos quantos
            creem sejam salvos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-poder-da-intercessao-pelos-homens">
            1. O Poder da Intercessão Pelos Homens
          </H3>
          <P className="">
            Desde os fundamentos da fé cristã, ensina-se que todo crente deve
            orar — com sinceridade e em nome de Jesus — como Ele mesmo ordenou
            em João 14:13-14. A oração não deve ser vazia, repetitiva ou
            mecânica, mas um ato consciente, cheio de fé e humildade. Paulo, ao
            instruir Timóteo, reforça três expressões de oração fundamentais:
            <strong> Súplica</strong> – Pedido humilde e insistente, como vemos
            em Daniel 9:3-19, Moisés em Êxodo 33:18 e Davi em Salmo 142.
            <strong> Intercessão</strong> – Oração em favor de outros, como
            Cristo orou em João 17 e Paulo pelos crentes em Efésios 1:16 e 3:14.
            <strong> Ação de graças</strong> – Gratidão a Deus por Suas obras e
            promessas (Sl 95:2).
          </P>
          <P className="">
            A oração intercessora tem grande valor espiritual, pois é o canal
            por meio do qual o cristão participa da missão de Deus no mundo.
            Paulo é específico: devemos orar &quot;por todos os homens&quot;
            (1Tm 2:1), inclusive &quot;pelos reis e por todos os que exercem
            autoridade&quot;, pois são eles que criam as leis para reger a vida
            do povo. Algumas leis, no contexto da carta a Timóteo, traziam
            perigo ao povo de Deus, algo que não é tão diferente atualmente.
          </P>
          <P className="">
            A motivação por trás disso é para que os crentes tenham &quot;uma
            vida tranquila e mansa&quot; (1Tm 2:2), vivida &quot;com toda
            piedade e respeito&quot;. A oração constante por todos evidencia uma
            igreja madura, pacificadora, que não busca vingança, mas a vontade
            de Deus. Por isso, ele também escreve &quot;...que os varões orem em
            todo lugar, levantando mãos santas, sem ira e sem animosidade.&quot;
            (1Tm 2:8), algumas traduções usam a frase &quot;...sem ódio e sem
            brigas.&quot; Tudo isso aliado à fé (Mt 21:22) e à persistência (Lc
            18:1-7).
          </P>
          <P className="">
            O Senhor conhece o coração do homem e sabe quando uma oração é
            realmente sincera, verdadeira. E essa oração com certeza terá a sua
            resposta.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-vontade-de-deus-que-todos-se-salvem">
            2. A Vontade de Deus: Que Todos Se Salvem
          </H3>
          <P className="">
            A vontade de Deus expressa por Paulo a Timóteo é clara: que todos os
            homens sejam salvos e cheguem ao pleno conhecimento da verdade (1Tm
            2:4). Esse desejo universal não nega a soberania divina, mas destaca
            que a salvação é oferecida a todos por meio do Evangelho. Paulo
            conhecia pessoalmente a resistência à verdade, pois antes de sua
            conversão, combatia ferozmente a igreja de Cristo, acreditando estar
            agradando a Deus.
          </P>
          <P className="">
            Seu encontro com Cristo no caminho de Damasco foi um divisor de
            águas. De perseguidor, passou a pregador. A experiência
            transformadora de Paulo é um testemunho da graça irresistível de
            Deus, capaz de redimir até o mais endurecido dos pecadores. Por
            isso, ele insiste em proclamar que a salvação está disponível a
            todos os que creem, como afirma em Romanos 1:16: &quot;O Evangelho é
            o poder de Deus para salvação de todo aquele que crê&quot;.
          </P>
          <P className="">
            A resistência à verdade, como nos dias de Paulo, também se manifesta
            hoje em forma de ceticismo, relativismo moral e falsas doutrinas.
            Por isso, a missão da Igreja permanece a mesma: anunciar o Evangelho
            com fidelidade e coragem. Cada crente, como embaixador de Cristo, é
            chamado a viver e proclamar essa verdade.
          </P>
          <P className="">
            Paulo orienta Timóteo a manter o foco: combater os desvios
            doutrinários internos (1Tm 1:20) e proclamar as boas novas aos de
            fora. A liderança cristã precisa estar atenta às duas frentes:
            preservar a sã doutrina e levar a mensagem de salvação a quem ainda
            não a conhece.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-cristo-o-unico-mediador">
            3. Cristo, o Único Mediador
          </H3>
          <P className="">
            Um dos pilares da teologia cristã é a mediação exclusiva de Cristo.
            Paulo afirma categoricamente: &quot;Há um só Deus e um só mediador
            entre Deus e os homens, Jesus Cristo, homem&quot; (1Tm 2:5). Essa
            verdade exclui qualquer tentativa de criar outros caminhos ou
            intermediários entre o ser humano e Deus.
          </P>
          <P className="">
            Jesus é o cumprimento da promessa messiânica e o mediador da nova
            aliança (Hb 9:15). Sua obra é completa, suficiente e eterna. Ele
            morreu de uma vez por todas (Hb 10:10), oferecendo-se como
            sacrifício perfeito (Hb 7:27). Como disse: &quot;Eu sou o caminho, a
            verdade e a vida. Ninguém vem ao Pai senão por mim&quot; (Jo 14:6).
          </P>
          <P className="">
            No Antigo Testamento, Moisés aparece como um mediador entre Deus e o
            povo de Israel, mas ele não era perfeito. Por isso, no Novo
            Testamento, aparece a pessoa de Jesus, que palmilhou sobre essa
            terra e num sacrifício único e perfeito, derramou seu sangue, morreu
            e ressuscitou ao terceiro dia, justificando, redimindo,
            reconciliando o homem novamente com Deus. Jesus é a nova aliança (Hb
            9:15), a verdadeira reconciliação (2Co 5:18-19).
          </P>
          <P className="">
            Apesar disso, ainda há doutrinas que ensinam múltiplos mediadores —
            sejam santos, anjos ou figuras religiosas. Tais ideias, porém,
            contrariam as Escrituras. A fé reformada insiste:{" "}
            <em>solus Christus</em> — somente Cristo. Ele é o único capaz de nos
            representar diante do Pai.
          </P>
          <P className="">
            Por isso, Paulo se autodeclara &quot;pregador, apóstolo e mestre dos
            gentios na fé e na verdade&quot; (1Tm 2:7). Sua missão era proclamar
            essa verdade absoluta, sem concessões, mesmo diante da oposição.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-orando-com-pureza-e-santidade">
            4. Orando Com Pureza e Santidade
          </H3>
          <P className="">
            Paulo volta ao tema da oração com uma ênfase adicional: a disposição
            interior do crente. A eficácia da oração está diretamente ligada à
            santidade de quem ora. Ele escreve: &quot;Quero, portanto, que os
            varões orem em todo lugar, levantando mãos santas, sem ira e sem
            animosidade&quot; (1Tm 2:8). Levantar as mãos era um gesto comum de
            oração na cultura judaica, símbolo de entrega e reverência.
          </P>
          <P className="">
            Porém, mais importante do que o gesto externo é o estado do coração.
            O apóstolo alerta contra a ira, discussões e contendas — atitudes
            que contaminam a oração. O crente deve vigiar constantemente contra
            o ódio, o orgulho, o espírito de competição e o ressentimento. Como
            Paulo escreve em Efésios 4:31, &quot;Longe de vós toda amargura, e
            cólera, e ira, e gritaria, e blasfêmia&quot;.
          </P>
          <P className="">
            O Espírito Santo é quem capacita o cristão a viver em santidade, mas
            o crente também deve cooperar com Ele, buscando a pureza em
            pensamentos, palavras e ações. Isso inclui domínio próprio nas
            reações, mansidão nos relacionamentos e integridade nas decisões.
          </P>
          <P className="">
            A liderança cristã deve ser exemplo nisso. Um líder que não governa
            bem o próprio espírito dificilmente conduzirá bem o povo de Deus. A
            oração, portanto, é um reflexo da vida espiritual. Deus se agrada de
            corações quebrantados, não de mãos levantadas cheias de rancor (Is
            1:15-17).
          </P>
          <P className="">
            A santidade é, assim, uma condição para orações eficazes. Como está
            escrito: &quot;Sede santos, porque eu sou santo&quot; (1Pe 1:16). E
            somente por meio do Espírito Santo é possível manter-se em constante
            transformação à imagem de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            O jovem Timóteo, além de ter a avó e a mãe como exemplos de fé, teve
            um excelente professor, Paulo, escolhido pelo Espírito Santo para
            levar o evangelho aos gentios. Ele o preparou para os desafios que
            viriam, por isso o recomendava que qualquer decisão devesse ser
            regada com oração com reverência, com o coração puro, com a mente
            voltada para o Senhor, numa entrega total.
          </P>
          <P className="">
            Ele deixava claro a Timóteo que a confiança, a fé, a dependência,
            têm que estar firmadas totalmente e exclusivamente no Senhor, na
            verdade da sua Palavra, pois não existe um outro mediador. Existe
            somente um único mediador, Cristo, e essa verdade está escrita na
            Palavra de Deus e cada crente deve crer nessa verdade.
          </P>
          <P className="">
            A determinação de Paulo continua valendo, pois a igreja ainda está
            presente na Terra, o processo de santidade, a ordem de orar sem
            brigas, sem discussões, e de pregar a verdade em tempo e fora de
            tempo, ainda deve ser feito.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Lição 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – O Perfil do Líder Segundo Deus</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Destacar a importância de ter líderes cristãos com caráter
            irrepreensível, que vivam em santidade, que manejem bem a palavra,
            que sejam exemplos de servos, verdadeiros imitadores de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-para-comecar">Para Começar</H3>
          <P className="">
            A igreja em Éfeso enfrentava sérios problemas em sua liderança. O
            pastor local, Timóteo, era um jovem ainda em formação, lidando com
            dúvidas internas e com dura oposição de falsos mestres. Esses
            mestres estavam promovendo doutrinas corrompidas, provocando a
            apostasia de alguns irmãos. Ao tomar conhecimento da situação, o
            apóstolo Paulo escreve a ele com o objetivo de ajudá-lo a enfrentar
            esses desafios.
          </P>
          <P className="">
            Embora Paulo tivesse intenção de visitar Timóteo (1Tm 3:14), o
            contexto era complicado: ele enfrentava perseguições e prisões
            durante suas viagens missionárias. Sabendo que sua presença poderia
            não acontecer, Paulo apressa-se em escrever para orientar,
            fortalecer e respaldar a liderança de Timóteo na condução da igreja
            do Senhor Jesus Cristo.
          </P>
          <P className="">
            Éfeso era uma das principais cidades portuárias da Ásia Menor. Lá se
            localizava o famoso templo de Artemis (ou Diana), e a cultura local
            estava profundamente marcada por práticas de prostituição, luxúria e
            feitiçaria (At 19:17-19). Os falsos mestres se aproveitavam dessa
            cultura e da inexperiência da liderança para deturpar os
            ensinamentos cristãos (1Tm 4:1-2).
          </P>
          <P className="">
            Diante disso, Paulo orienta Timóteo a escolher líderes baseando-se
            no caráter, confiabilidade, fidelidade e respeito aos ensinamentos
            da verdadeira palavra de Deus. Ele apresenta um conjunto de
            qualidades (1Tm 3:2-7) que servirão de critério para selecionar uma
            liderança sólida e piedosa. Essas qualidades serão estudadas a
            seguir.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-o-carater-irrepreensivel-do-lider-cristao">
            1. O Caráter Irrepreensível do Líder Cristão
          </H3>
          <P className="">
            Antes de falarmos sobre o caráter irrepreensível, é importante
            compreender o que é caráter. Segundo o Dicionário Bíblico online da
            Bíblia.com.br: &quot;Caráter: do latim character e do grego
            charaktér. Cunho especial que distingue as coisas entre si; marca;
            índole; resolução; firmeza; expressão ajustada; natureza;
            sentimentos; feitio moral.&quot;
          </P>
          <P className="">
            No campo da psicologia, é o conjunto de qualidades e atitudes que
            configuram o modo de ser de uma pessoa. O caráter é moldado tanto
            pelas disposições herdadas quanto pelas experiências vividas.
          </P>
          <P className="">
            No contexto cristão, o modelo de caráter é Jesus Cristo. O líder
            deve espelhar-se em Cristo em obediência, humildade, fidelidade e
            entrega à vontade do Pai (Jo 12:27-28; Fp 2:2-8). Ter um caráter
            irrepreensível é ser coerente entre o que se prega e o que se vive
            (Mt 23:1-4). O verdadeiro líder não busca status, mas exala o bom
            perfume de Cristo (2Co 2:14-17), manifesta os frutos do Espírito e
            caminha em fidelidade à Palavra.
          </P>
          <P className="">
            Em 1Tm 3:2-7, Paulo lista qualidades que definem o caráter de um
            líder cristão. São critérios permanentes, válidos para todas as
            épocas. Eles orientam a escolha de líderes que não apenas governem,
            mas sirvam com integridade e amor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-o-exemplo-do-bispo-na-igreja">
            2. O Exemplo do Bispo na Igreja
          </H3>
          <P className="">
            Paulo começa sua instrução sobre os bispos dizendo: &quot;Fiel é
            esta palavra: se alguém deseja o episcopado, excelente obra
            deseja.&quot; (1Tm 3:1).
          </P>
          <P className="">
            A palavra grega <em>epískopos</em> &nbsp; significa
            &quot;supervisor&quot;, &quot;pastor&quot; ou &quot;ancião&quot;. No
            Novo Testamento, esses termos se referem à mesma função (At
            20:17,28). O episcopado, portanto, é um chamado ao cuidado do
            rebanho.
          </P>
          <P className="">
            Trata-se de uma obra excelente, mas que exige renúncia e dedicação
            (Lc 9:23-24). O bispo deve ser exemplo na vida familiar (1Tm 3:4),
            no ensino da Palavra (1Tm 3:2), na vida de oração e na busca por
            santidade. Deve evitar vícios e violência, ter bom testemunho fora
            da igreja, não ser neófito e agir com humildade (1Tm 3:3,7; 5:1-3).
          </P>
          <P className="">
            O episcopado não é um título de status, mas um ministério de
            serviço. Exige conduta irrepreensível — moral, espiritual, familiar
            e pública. O bispo deve ser o primeiro a servir, refletindo a luz de
            Cristo por onde passa.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-os-diaconos-e-seu-servico-ao-corpo-de-cristo">
            3. Os Diáconos e Seu Serviço ao Corpo de Cristo
          </H3>
          <P className="">
            O serviço diaconal surge em Atos 6, quando os apóstolos designam
            homens para cuidar das viúvas e da distribuição de alimentos (At
            6:1-3). A palavra diácono vem do grego <em>diakonos</em>, que
            significa &quot;servo&quot;, &quot;ministro&quot; ou
            &quot;ajudante&quot;.
          </P>
          <P className="">
            Contudo, este &quot;servo&quot; é um representante da igreja local,
            do seu líder, do seu pastor e do seu Deus. Seu trabalho vai além da
            distribuição de alimentos, do cuidado com a mesa e da assistência às
            viúvas. Mesmo que alguns encontrem a plenitude no seu chamado no
            ministério diaconal, é bom que o diácono esteja sempre preparado,
            por serem homens escolhidos e cheios do Espírito Santo e sabedoria
            (At 6:3), devem estar aptos a pregar bem o Evangelho e ensinar a
            Palavra. Por isso, deve estar preparado para pregar e ensinar a
            Palavra, como fizeram Estêvão (At 7) e Felipe (At 8).
          </P>
          <P className="">
            Hoje, os diáconos exercem um papel vital no voluntariado cristão:
            auxiliam na recepção, liturgia, logística, distribuição da Ceia,
            cuidado com o templo e assistência aos necessitados. Mesmo nas
            tarefas simples, seu serviço deve refletir humildade, compromisso e
            amor ao próximo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-recompensa-para-os-fieis-servos-do-senhor">
            4. A Recompensa Para os Fiéis Servos do Senhor
          </H3>
          <P className="">
            Paulo afirma: &quot;Porque os que servirem bem como diáconos
            alcançarão para si mesmos justa preeminência e muita intrepidez na
            fé em Cristo Jesus.&quot; (1Tm 3:13)
          </P>
          <P className="">
            Ao longo das Escrituras, vemos que Deus honra os que O servem com
            fidelidade — com bênçãos materiais (Pv 22:4), espirituais (2Pe
            1:10-11) e familiares (Dt 28:1-13). Deus não fica devendo nada a
            ninguém (Hb 6:10), Ele é fiel para com aqueles a quem Ele ama e que
            são fiéis a Ele.
          </P>
          <P className="">
            Há recompensa para os servos fiéis do Senhor, não só agora, mas para
            toda eternidade. Essa recompensa não é exclusiva para pastores,
            bispos, presbíteros ou diáconos, mas é prometida a todos que
            perseverarem na carreira da fé. A principal recompensa é a nossa
            salvação e a certeza de termos nossos nomes escritos no Livro da
            Vida. Deus nos promete muito mais, desde a coroa da vida (Ap 2:10),
            um novo nome (Ap 2:17), com direito a assentar-se com ele no trono
            (Ap 3:21), e comer da árvore da vida (Ap 2:7). Essa promessa não se
            limita aos líderes, mas é estendida a todo cristão. Se você ainda
            não serve ao Senhor, este é um bom momento para começar!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            Desde o início desta carta, Paulo demonstra grande zelo pela
            formação da liderança cristã (1Tm 1:3-4). Ele orienta Timóteo a
            observar critérios específicos para identificar líderes segundo o
            coração de Deus.
          </P>
          <P className="">
            Embora exigente, o perfil do líder cristão é plenamente alcançável
            por meio da graça, da dedicação, da oração e da obediência. Deus
            continua chamando homens e mulheres para liderar com humildade,
            integridade e amor.
          </P>
          <P className="">
            O líder cristão — bispo, pastor, presbítero ou diácono — deve ser
            irrepreensível, fiel a Deus, dedicado à Palavra, à oração, à família
            e ao cuidado com o rebanho do Senhor (1Tm 3:1-13). E àqueles que
            forem fiéis até o fim, o Senhor promete honra nesta vida e
            recompensa eterna no porvir (Ap 2:7,11,17; 3:5,12,21; 21:7).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Lição 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">Lição 4 – Permanecendo Fiel em Meio à Apostasia</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Compreender a gravidade da apostasia nos últimos dias e a
            importância de permanecer fiel a Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-para-comecar">Para Começar</H3>
          <P className="">
            Apostasia (do grego: ἀποστασία, &quot;rebelião&quot;,
            &quot;abandono&quot; ou &quot;afastamento&quot;) é o ato consciente
            e deliberado de afastar-se da fé verdadeira, rejeitando a verdade de
            Deus revelada nas Escrituras. Não se trata de uma dúvida momentânea
            ou fraqueza espiritual, mas de uma rejeição intencional da verdade.
            A Bíblia trata a apostasia com seriedade, alertando contra falsos
            mestres (1Tm 4.1), o endurecimento do coração (Hb 3.12-13) e o
            abandono da fé (2Ts 2.3).
          </P>
          <P className="">
            Ao iniciar o capítulo 3 de sua segunda carta a Timóteo, o apóstolo
            Paulo lança um sólido alerta sobre a degradação moral e espiritual
            que caracterizaria os &quot;últimos dias&quot;. No contexto paulino,
            essa expressão não se limita a eventos escatológicos futuros, mas
            abrange todo o período entre a ascensão de Cristo e Sua segunda
            vinda.
          </P>
          <P className="">
            Paulo já percebia sinais dessa decadência em sua época: a Igreja
            enfrentava a propagação de falsos ensinos, distorções de conduta e o
            abandono dos valores bíblicos. Com discernimento pastoral, ele
            exorta Timóteo a afastar-se dos que praticam tais coisas e a
            permanecer firme na verdade recebida desde a infância, alicerçada
            nas Escrituras Sagradas, que são inspiradas por Deus e eficazes para
            o ensino, repreensão, correção e formação na justiça (2Tm 3.16).
          </P>
          <P className="">
            Mesmo ciente de que sua partida se aproximava, Paulo não foca em si
            mesmo, mas dedica suas últimas palavras a instruir Timóteo com zelo
            e urgência. Ele deseja prepará-lo para liderar com fidelidade,
            defender a fé e manter um testemunho aprovado diante de Deus e dos
            homens. Essa missão é ainda hoje o chamado de todo aquele que deseja
            ser fiel ao evangelho.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-os-tempos-dificeis-e-a-degradacao-moral">
            1. Os Tempos Difíceis e a Degradação Moral
          </H3>
          <P className="">
            Desde os primeiros séculos, a Igreja foi perseguida, mas permaneceu
            fiel por causa do compromisso com a Palavra de Deus. No entanto,
            Paulo alerta que os tempos difíceis não seriam marcados apenas pela
            perseguição externa, mas também surgiriam tempos difíceis marcados
            por um crescente esfriamento da fé, pela corrupção dos valores
            morais e pela distorção da sã doutrina.
          </P>
          <P className="">
            Em 2Tm 3.1-5, ele descreve um cenário preocupante em que os homens
            se tornariam amantes de si mesmos, quebrando o principal dos
            mandamentos: o amor a Deus (Mt 22.37-38), e se tornando avarentos,
            presunçosos, desobedientes, ingratos, profanos, irreconciliáveis,
            caluniadores, amantes dos prazeres, com aparência de piedade, mas
            negando sua eficácia. Paulo está alertando contra os lobos
            travestidos de ovelhas que entram no meio do povo de Deus e até se
            parecem com as ovelhas do Senhor, mas são ferramentas de Satanás,
            com o objetivo de disseminar o falso ensino enganando a muitos.
          </P>
          <P className="">
            Esse alerta não é apenas para os dias finais da história, mas
            refere-se a todo o período desde a ascensão de Cristo até a sua
            segunda vinda — um tempo em que a Igreja precisaria discernir os
            perigos espirituais e permanecer vigilante. Paulo chama a atenção
            para o fato de que muitos manteriam uma aparência de piedade, mas
            negariam o poder transformador do Evangelho.
          </P>
          <P className="">
            Diante disso, o conselho apostólico é claro: afastar-se desses
            comportamentos e permanecer firme na verdade. A advertência de Paulo
            é extremamente atual e nos convida à reflexão e à perseverança,
            mesmo em meio a tempos de relativismo moral, superficialidade
            espiritual e confusão doutrinária.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-necessidade-de-permanecer-na-sa-doutrina">
            2. A Necessidade de Permanecer na Sã Doutrina
          </H3>
          <P className="">
            Depois que Paulo apresenta a lista de obras da carne que ocuparam o
            lugar de Deus no coração dessas pessoas, ele passa a falar sobre a
            forma de agir dos falsos mestres (2Tm 3.6). Esses indivíduos são
            estrategistas, verdadeiros predadores à procura de presas fáceis
            (2Tm 3.7).
          </P>
          <P className="">
            Observando o cenário, Paulo usa um termo pejorativo ao mencionar até
            mesmo &quot;mulheres néscias&quot;, carregadas de pecados e levadas
            por várias concupiscências. O perigo de querer beber de todo tipo de
            doutrina está no fato de, posteriormente, não se saber mais
            discernir qual é a verdadeira.
          </P>
          <P className="">
            Esse tipo de engano massageia o ego de quem já se afeiçoou ao
            pecado. Por isso, é essencial permanecer firmemente arraigado na sã
            doutrina, conhecendo e praticando a verdade do Evangelho.
          </P>
          <P className="">
            Os falsos mestres sempre tentarão influenciar aqueles que ainda não
            têm raízes profundas na fé. Essas mulheres, por exemplo, não
            conheciam a verdade (Jo 8.32), e por isso eram escravas das
            mentiras. Um exemplo atual dessa escravidão é a crença de que não é
            necessário mudar de vida porque &quot;Deus é amor&quot; e &quot;não
            julgará suas práticas&quot;.
          </P>
          <P className="">
            Paulo chega ao ponto de comparar esses falsos mestres aos
            feiticeiros do faraó, que, segundo a tradição judaica, se chamavam
            Janes e Jambres. Eles se opuseram a Moisés, tentando imitar, por
            meio de feitiçaria, os sinais que ele realizou na presença de Faraó.
          </P>
          <P className="">
            A missão do falso mestre é ser uma força opositora disfarçada de
            verdade, com o objetivo de enganar aqueles que ainda coxeiam entre
            dois pensamentos — os que não têm intimidade com a Palavra nem
            convicção da fé que professam.
          </P>
          <P className="">
            O cuidado de Paulo e seu desejo de que Timóteo compreendesse o
            cenário tenebroso revelam que a única maneira eficaz de combater e
            eliminar o falso ensino é permanecer firme na proclamação da sã
            doutrina. Por isso, ele enfatiza, em 2 Timóteo 2.15, a importância
            de o obreiro estar devidamente preparado para defender sua fé e
            doutrina, apresentando-se a Deus como obreiro aprovado, que não tem
            do que se envergonhar e que maneja corretamente a palavra da
            verdade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-as-escrituras-a-base-da-nossa-fe">
            3. As Escrituras: a Base da Nossa Fé
          </H3>
          <P className="">
            Paulo conduz Timóteo a um nível profundo de reflexão — um chamado
            que só aqueles amadurecidos na fé conseguem compreender plenamente.
            O apóstolo o lembra que, mesmo conhecendo de perto suas lutas,
            sofrimentos, perseguições e abandonos, nada disso deveria desviá-lo
            do propósito.
          </P>
          <P className="">
            Ele destaca que Timóteo, desde a infância, havia sido instruído nas
            Sagradas Escrituras, ensinadas por sua avó Lóide e sua mãe Eunice
            (2Tm 1.5; 3.15), além de ter sido discipulado pelo próprio apóstolo.
            Por isso, Paulo exorta: &quot;Permanece firme naquilo que aprendeste
            e de que foste inteirado, sabendo de quem o aprendeste&quot; (2Tm
            3.14).
          </P>
          <P className="">
            A mensagem central de Paulo é clara: nenhum cenário de caos,
            sofrimento ou heresia deve afastar o servo de Deus da verdade
            aprendida na Palavra. Portanto, Timóteo deveria continuar firme, não
            se desviar do caminho, e manter-se enraizado na fé bíblica.
          </P>
          <P className="">
            Paulo não escreveu essa carta com o objetivo de lamentar ou
            reclamar. Também não fez promessas de um evangelho fácil, sem dores
            ou perseguições. Pelo contrário, ele foi claro ao afirmar que
            &quot;todos quantos querem viver piedosamente em Cristo Jesus serão
            perseguidos&quot; (2Tm 3.12).
          </P>
          <P className="">
            Essa sinceridade apostólica e esse nível de ensino só podem ser
            compreendidos por aqueles que já se apaixonaram verdadeiramente pelo
            Senhor. O evangelho que a Bíblia apresenta não é um evangelho de
            fantasia, mas de renúncia, fidelidade e perseverança — mesmo em meio
            às provações. Quando escreveu aos irmãos em Éfeso, Paulo fez questão
            de deixá-los cientes de que a postura do cristão diante dos ataques
            de Satanás deve ser como a de um soldado bem armado e preparado para
            o combate espiritual. Ele afirmou: &quot;Revesti-vos de toda a
            armadura de Deus, para poderdes ficar firmes contra as ciladas do
            diabo&quot; (Ef 6.11).
          </P>
          <P className="">
            Todo salvo precisa compreender essa verdade espiritual: a vida
            cristã é uma guerra declarada contra o império das trevas. E a única
            forma de sermos vitoriosos é conhecendo a Palavra e aplicando-a no
            nosso dia a dia, tendo um íntimo relacionamento com o Senhor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-preparados-para-toda-boa-obra">
            4. Preparados Para Toda Boa Obra
          </H3>
          <P className="">
            A autoridade das Escrituras não está sujeita à cultura, opinião
            humana ou tempo histórico. Paulo é categórico ao afirmar que
            &quot;toda a Escritura é divinamente inspirada&quot;, ou seja,
            soprada por Deus. Ela é útil para ensinar a verdade, repreender o
            erro, corrigir o comportamento e instruir o cristão a viver de modo
            justo. Em dias em que muitos preferem doutrinas que agradam aos
            ouvidos (2Tm 4.3), a Palavra continua sendo o padrão absoluto da
            verdade (Jo 17.17).
          </P>
          <P className="">
            O objetivo final é formar o caráter cristão: &quot;para que o homem
            de Deus seja perfeito e perfeitamente habilitado para toda boa
            obra&quot; (2Tm 3.17). Não se trata apenas de conhecimento
            intelectual, mas de transformação prática. A Escritura molda servos
            úteis, prontos para agir com sabedoria, integridade e fé. Como diz o
            salmista: &quot;Lâmpada para os meus pés é a tua palavra, e luz para
            os meus caminhos&quot; (Sl 119.105).
          </P>
          <P className="">
            Sem a Palavra, a igreja perde o rumo. Por isso, Paulo exorta Timóteo
            a permanecer firme no que aprendeu desde a infância (2Tm 3.14-15).
            Num mundo onde muitos trocam a verdade pela conveniência, somos
            chamados a voltar à base — à Palavra que salva, corrige e ensina.
            Que possamos ser encontrados como obreiros aprovados (2Tm 2.15),
            comprometidos com a Escritura e preparados para toda boa obra que
            glorifique a Deus.
          </P>
          <P className="">
            Acredito que é desejo do coração de todo servo e serva fiel ao
            Senhor cumprir com integridade o ministério que recebeu, e poder
            dizer como o apóstolo Paulo: &quot;Combati o bom combate, acabei a
            carreira, guardei a fé&quot; (2Tm 4.7). Essa declaração não vem de
            alguém perfeito, mas de um obreiro aprovado, que enfrentou lutas,
            perseguições e renúncias, mas permaneceu firme, sem negociar sua fé.
          </P>
          <P className="">
            O ministério cristão não é um caminho fácil, mas é um chamado
            glorioso. O verdadeiro servo trabalha com os olhos no galardão
            eterno, aguardando com esperança &quot;a coroa da justiça, que o
            Senhor, justo juiz, me dará naquele dia&quot; (2Tm 4.8). Mais do que
            resultados visíveis, importa apresentar-se diante de Deus com as
            mãos cheias de obras feitas com amor, zelo e obediência.
          </P>
          <P className="">
            Que o nosso desejo diário seja viver e servir de modo a ouvir
            d&apos;Ele: &quot;Muito bem, servo bom e fiel...&quot; (Mt 25.23).
            Que a nossa carreira seja concluída com a certeza de que guardamos a
            fé até o fim.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            Vivemos dias semelhantes aos descritos por Paulo: tempos de confusão
            moral, espiritual e doutrinária. A apostasia é uma realidade
            crescente, e a resposta da Igreja deve ser discernimento, fidelidade
            à sã doutrina e permanência na Palavra.
          </P>
          <P className="">
            A aparência de piedade não substitui uma vida transformada pelo
            Evangelho. Fé genuína se evidencia na obediência, santidade e amor à
            verdade. O desafio atual é não apenas conhecer a doutrina, mas viver
            por ela.
          </P>
          <P className="">
            As Escrituras continuam sendo o fundamento seguro para uma fé viva.
            Elas instruem, fortalecem, corrigem e preparam para a boa obra. Não
            há maturidade cristã fora da Palavra. Que sejamos como Timóteo:
            firmes na verdade, fiéis na missão, e prontos para enfrentar os
            desafios do nosso tempo com coragem, sabedoria e esperança eterna.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Lição 5 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-5">
          Lição 5 – Combati o Bom Combate: a Coroa da Justiça
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Entender o poder de um chamado e de uma vida totalmente oferecida e
            dedicada ao seu cumprimento.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-para-comecar">Para Começar</H3>
          <P className="">
            A segunda carta de Paulo a Timóteo foi escrita entre 66 e 67 d.C.
            Nesses dias havia diferentes tipos de tribunais, inclusive tribunais
            militares, que eram usados durante os jogos públicos em cidades como
            Atenas. Nestes jogos, os atletas competiam com dedicação e
            disciplina, buscando agradar ao juiz da arena, que tinha autoridade
            para avaliar seu desempenho e conceder-lhes a coroa da vitória —
            normalmente feita de folhas de louro.
          </P>
          <P className="">
            Esse contexto cultural e histórico foi aproveitado por Paulo para
            ilustrar uma verdade espiritual profunda: como servos do Senhor,
            devemos ensinar com clareza que o Tribunal de Cristo é uma realidade
            futura e certa para todos os crentes, e isso deve ser uma motivação
            para uma vida de consagração, santidade, serviço e integridade.
            Recompensas aguardam aqueles que perseveram até o fim, não por
            vanglória, mas para glorificar ao Senhor.
          </P>
          <P className="">
            Paulo escreve a primeira e segunda carta a Timóteo como conselhos
            pastorais a seu filho na fé, a quem havia deixado em Éfeso para
            cuidar da igreja local. A primeira carta visa orientar Timóteo sobre
            como lidar com falsos mestres, organizar a liderança da igreja
            (presbíteros e diáconos) e incentivar a piedade, disciplina e
            firmeza doutrinária. Já na segunda carta, Paulo escreve preso em
            Roma, próximo de sua execução, e demonstra tom mais pessoal e
            urgente. Ele exorta Timóteo a permanecer fiel ao evangelho, mesmo
            diante das perseguições e da apostasia crescente. Ambas as cartas
            refletem a preocupação de Paulo com a sã doutrina e com a
            continuidade da liderança fiel na igreja. Elas revelam também o
            coração pastoral de Paulo e seu desejo de formar líderes
            espiritualmente maduros.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-a-consciencia-de-uma-vida-gasta-para-deus">
            1. A Consciência de Uma Vida Gasta Para Deus
          </H3>
          <P className="">
            O apóstolo, em 2 Timóteo 4:7-8, diz: &quot;Combati o bom combate,
            completei a carreira, guardei a fé. Desde agora, a coroa da justiça
            me está guardada, a qual o Senhor, justo juiz, me dará naquele dia;
            e não somente a mim, mas também a todos os que amarem a sua
            vinda.&quot; Aqui encontramos o testemunho poderoso de um homem que
            dedicou sua vida ao serviço de Deus. A consciência de Paulo de ter
            gastado sua vida para Deus é um exemplo que devemos seguir.
          </P>
          <P className="">
            Libação significa literalmente &quot;derramar&quot; ou
            &quot;verter&quot;. Era um derramamento de um líquido (vinho, óleo,
            leite) como ato de culto a Deus (Êxodo 29:40-41). A prática da
            libação não era exclusiva de Israel. Povos do Antigo Oriente Médio
            também ofereciam bebidas aos seus deuses como sinal de reverência.
            Em Israel, no entanto, a libação era regulada por Deus e tinha um
            significado espiritual e simbólico mais elevado:
          </P>
          <P className="">
            <strong>Entrega total a Deus:</strong> o líquido (geralmente vinho)
            era derramado totalmente, representando consagração completa.{" "}
            <strong>Complemento ao sacrifício:</strong> nunca era oferecida
            sozinha, mas junto com ofertas de cereais e animais — formando um
            culto completo. <strong>Símbolo de alegria e celebração:</strong> o
            vinho derramado representava a alegria da adoração verdadeira.{" "}
            <strong>Sombra profética:</strong> &nbsp;no Novo Testamento, Paulo
            usa a imagem da libação para descrever sua vida derramada pelo
            evangelho (Fp 2.17; 2Tm 4.6), apontando para Cristo como o
            sacrifício pleno e completo.
          </P>
          <P className="">
            Adam Clarke interpreta a expressão &quot;já estou sendo oferecido
            por libação&quot; como uma metáfora para o sacrifício iminente de
            Paulo, comparando sua morte à oferta derramada em rituais
            religiosos.
          </P>
          <P className="">
            Quando pensamos em uma vida gasta para o Senhor, somos levados a
            refletir sobre como estamos utilizando o tempo e os talentos que
            Deus nos confiou. Cada dia é uma oportunidade de glorificar a Deus
            através de nossas ações, pensamentos e palavras. Vivemos em um mundo
            que muitas vezes nos distrai e nos afasta da verdadeira finalidade
            da vida. No entanto, a consciência de uma vida gasta para Deus nos
            motiva a permanecer firmes em nossa caminhada cristã.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-a-certeza-da-vitoria-final">
            2. A Certeza da Vitória Final
          </H3>
          <P className="">
            A certeza da vitória final é um dos pilares da nossa fé. Romanos
            8:37 nos assegura que &quot;em todas estas coisas somos mais que
            vencedores, por aquele que nos amou.&quot; Paulo não apenas combateu
            o bom combate; ele teve plena certeza de que a vitória final era
            sua, não por suas forças, mas por meio do amor de Cristo. Assim como
            ele, nós também devemos cultivar essa certeza em nossos corações.
          </P>
          <P className="">
            Navegamos por desafios, lutas e adversidades, mas devemos lembrar
            que Cristo já venceu o mundo (Jo 16:33). Ele é a nossa esperança, e
            por meio d&apos;Ele somos chamados a lutar com coragem, sabendo que
            já temos a vitória garantida. O apóstolo Paulo nos convida a
            permanecer firmes, a não desanimar, pois a luta que enfrentamos
            agora é temporária, mas a glória que nos espera é eterna.
          </P>
          <P className="">
            O apóstolo expressa com clareza sua certeza da vitória final. Ele
            escreve essas palavras como um testamento de fé ao final de sua
            vida, demonstrando convicção e esperança na recompensa eterna. Ele
            confia que receberá a &quot;coroa da justiça&quot; — símbolo da
            recompensa eterna das mãos do Senhor. E essa promessa não é só para
            ele, mas para todos os que amam a vinda de Cristo. &quot;A todos
            quantos amam a sua vinda&quot; (v.8) indica que a recompensa está
            reservada para aqueles que aguardam o retorno de Cristo com amor e
            expectativa. Isso não se trata apenas de um desejo de escapar do
            sofrimento, mas de uma entrega total a Cristo e sua obra.
          </P>
          <P className="">
            Em resumo, podemos afirmar que também receberemos a coroa da justiça
            se continuarmos firmes na fé, esperando com amor a vinda de Cristo e
            vivendo em fidelidade ao que Ele nos chamou. A recompensa está
            garantida pela justiça e fidelidade de Deus, não pelas nossas
            próprias forças.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-a-coroa-da-justica-reservada-aos-fieis">
            3. A Coroa da Justiça Reservada aos Fiéis
          </H3>
          <P className="">
            A Bíblia está repleta de promessas divinas e por isso podemos
            encontrar vários tipos, vejamos:
          </P>
          <P className="">
            <strong>Coroa da Vida</strong> — para os que perseveram sob
            provações ou foram mortos (Tg 1.12).{" "}
            <strong>Coroa da Justiça</strong> — para os que amam a vinda de
            Cristo (2Tm 4.8). <strong>Coroa da Glória</strong> — para os líderes
            fiéis (1Pe 5.4). <strong>Coroa Incorruptível</strong> — para os que
            dominam o próprio corpo e vivem com integridade (1Co 9.25).{" "}
            <strong>Coroa de Alegria</strong> — pelos frutos espirituais e vidas
            alcançadas — ganhador de almas (1Ts 2.19).
          </P>
          <P className="">
            Voltando à passagem de 2 Timóteo, encontramos a menção à &quot;coroa
            da justiça&quot;. Essa coroa não é uma recompensa comum; é um
            símbolo da justiça divina e da recompensa que Deus promete a todos
            aqueles que perseveram na fé. A coroa da justiça nos lembra que as
            lutas e as tribulações que enfrentamos não são em vão.
          </P>
          <P className="">
            Paulo, em 1 Coríntios 9.24-25, compara a vida cristã a uma corrida:
            &quot;Não sabeis vós que os que correm no estádio, todos, na
            verdade, correm, mas um só leva o prêmio? Correi de tal maneira que
            o alcanceis.&quot; E mais adiante, ele afirma que o crente busca uma
            coroa incorruptível, diferente da coroa perecível dos atletas
            terrenos.
          </P>
          <P className="">
            Ser fiel em um mundo que muitas vezes se opõe aos princípios de Deus
            é um desafio, mas é uma luta que vale a pena. Este compromisso nos
            leva a uma vida de santidade e serviço, onde nos tornamos
            instrumentos nas mãos do Senhor. Ao perseverarmos na fé, estamos não
            apenas recebendo a coroa da justiça, mas também estamos apontando
            outros para Cristo, levando esperança e luz em um mundo de trevas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-a-esperanca-gloriosa-da-vinda-de-cristo">
            4. A Esperança Gloriosa da Vinda de Cristo
          </H3>
          <P className="">
            Paulo fala com confiança sobre a coroa da justiça que será dada a
            ele pelo Senhor, o &quot;reto juiz&quot;, no Dia Final. Essa coroa
            não é apenas para ele, mas para todos os que amam a vinda de Cristo.
            A &quot;vinda de Cristo&quot; (ou &quot;aparição de Cristo&quot;) é
            o evento que marca a recompensa eterna e a justiça final para todos
            que viveram fielmente.
          </P>
          <P className="">
            &quot;Já agora a coroa da justiça me está guardada, a qual o Senhor,
            reto juiz, me dará naquele Dia; e não somente a mim, mas também a
            todos quantos amam a sua vinda&quot; (2Tm 4:8).
          </P>
          <P className="">
            A vinda de Cristo &nbsp; está atrelada à ideia de justiça. Cristo,
            como o &quot;reto juiz&quot;, trará a recompensa justa àqueles que
            viveram para Ele. Essa certeza de justiça no julgamento é a base da
            esperança cristã. A vinda de Cristo não será apenas um evento de
            glorificação para Cristo, mas também um momento de vindicação para
            os seus seguidores.
          </P>
          <P className="">
            Paulo fala sobre sua morte iminente, mas ele não vê isso como um fim
            trágico, mas como o cumprimento de sua missão. Ele está pronto para
            partir, porque sabe que seu trabalho foi bem-feito e que a
            recompensa final está próxima. Para ele, a esperança na vinda de
            Cristo supera qualquer sofrimento ou dificuldade que ele tenha
            enfrentado ao longo de sua vida de ministério.
          </P>
          <P className="">
            A vinda de Cristo é mais do que uma esperança distante ou futura;
            ela é algo que os cristãos devem amar e ansiar. Esse amor pela vinda
            de Cristo significa um desejo de ver a justiça de Deus sendo
            estabelecida e a recompensa sendo dada aos fiéis. Aquele que ama
            essa vinda vive em expectativa ativa, permanecendo fiel, sabendo que
            a espera é um período de preparação para a eternidade.
          </P>
          <P className="">
            Vivemos em um tempo em que a esperança pode parecer escassa, mas a
            vinda de Cristo nos dá ânimo. A promessa de que seremos
            recompensados por nossa fé e perseverança nos enche de coragem para
            continuar lutando o bom combate todos os dias. Portanto, mantenhamos
            nossos olhos fixos em Jesus, o autor e consumador da nossa fé.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-conclusao">Conclusão</H3>
          <P className="">
            Ao meditarmos sobre a vida do apóstolo Paulo e suas palavras finais
            a Timóteo, somos desafiados a refletir sobre o valor de uma
            existência plenamente dedicada ao Senhor. Sua comparação com a
            libação — símbolo de entrega total — nos lembra que nossa vida deve
            ser gasta como uma oferta contínua diante de Deus, marcada pela
            fidelidade, serviço e amor à verdade. Paulo não apenas combateu o
            bom combate, mas o fez com a certeza de que, ao final, seria coroado
            não por mérito próprio, mas pela justiça do Justo Juiz, que
            recompensa a perseverança dos santos.
          </P>
          <P className="">
            Assim como Paulo, somos chamados a correr com propósito, resistir às
            provações com fé e guardar a esperança da volta gloriosa de Cristo.
            A coroa da justiça não é apenas uma promessa para ele, mas para
            todos os que amam e aguardam a vinda do Senhor. Que essa esperança
            gloriosa nos motive a viver com santidade, coragem e integridade,
            certos de que nossa recompensa está guardada nos céus. Que o
            Espírito Santo nos fortaleça para que, ao final da nossa jornada,
            também possamos dizer: &quot;Combati o bom combate, completei a
            carreira, guardei a fé&quot;.
          </P>
          <P className="">
            Que Deus nos fortaleça e nos inspire a viver diariamente na
            expectativa de sua gloriosa vinda. Amém.
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
              <span className="font-semibold">Curso:</span> Cartas a Timóteo
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
            <P className="mt-0">Pr Lúcio Andres</P>
            <P className="mt-0">Ev Wagner Monteiro</P>
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
            <P className="mt-0">Ev Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentaristas:</P>
            <P className="mt-0">Lição 1 – Pr Anderson Silva</P>
            <P className="mt-0">Lição 2 – Ev Marcelo Brito</P>
            <P className="mt-0">Lição 3 – Pr André</P>
            <P className="mt-0">Lição 4 – Pr Oziel</P>
            <P className="mt-0">Lição 5 – Pr Oilson</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
