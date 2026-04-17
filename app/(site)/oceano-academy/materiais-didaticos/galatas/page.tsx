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
      "text/markdown": "/oceano-academy/materiais-didaticos/galatas.md",
    },
  },
};

export default function CursoGalatas() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Carta aos Gálatas</H1>
          <P className="mt-0">
            A Carta Magna da Liberdade Cristã: justificação pela fé e não por
            obras da lei.
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
                  <LinkSmall href="https://drive.google.com/file/d/1MHsV1a7wEmgFkYCmlqYqP8W_qOvSi9ME/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/galatas.md">
                    <Hash className="size-4" />
                    MD
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
                  <LinkSmall href="https://www.youtube.com/watch?v=UdP2LsHsAyY">
                    <SquarePlay className="size-4" />
                    Gálatas
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
            <a href="#lesson-1">Lição 1 – O Verdadeiro Evangelho</a>
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
            <a href="#lesson-2">Lição 2 – Paulo e os Outros Apóstolos</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-aprovacao-dos-outros-apostolos">
              1. A Aprovação dos Outros Apóstolos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-paulo-diante-da-igreja">
              2. Paulo Diante da Igreja
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-paulo-diante-de-pedro">
              3. Paulo Diante de Pedro
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-crucificado-estou-nao-vivo-mais-eu">
              4. Crucificado Estou, Não Vivo Mais Eu
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">Lição 3 – Compreendendo a Lei e a Graça</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-abraao-foi-salvo-pela-fe">
              1. Abraão Foi Salvo Pela Fé
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-ninguem-e-justificado-pela-lei-mas-pela-fe">
              2. Ninguém É Justificado Pela Lei, Mas Pela Fé
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-viver-pela-lei-ou-pela-graca">
              3. Viver Pela Lei ou Pela Graça
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-unidade-por-intermedio-de-cristo">
              4. A Unidade Por Intermédio de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – Atenção Gálatas: Liberdade e Limites
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-voces-agora-sao-filhos">
              1. Vocês Agora São Filhos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-uma-igreja-que-regrediu">
              2. Uma Igreja Que Regrediu
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-dizer-a-verdade-nao-nos-faz-inimigos">
              3. Dizer a Verdade Não Nos Faz Inimigos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-filiacao-determina-a-condicao">
              4. A Filiação Determina a Condição
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-liberdade-com-limites">
              5. Liberdade Com Limites
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-uma-luta-diaria">6. Uma Luta Diária</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-5">
              Lição 5 – Atenção Gálatas: Vivendo no Espírito
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-as-obras-da-carne-sao-manifestas">
              1. As Obras da Carne São Manifestas
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-nao-ha-lei-contra-o-fruto-do-espirito">
              2. Não Há Lei Contra o Fruto do Espírito
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-levando-fardos">3. Levando Fardos</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-nao-erreis">4. Não Erreis!</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-fazendo-o-bem-aos-nossos">
              5. Fazendo o Bem Aos Nossos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-sendo-uma-nova-criatura">
              6. Sendo Uma Nova Criatura
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

      {/* LIÇÃO 1 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-1">Lição 1 – O Verdadeiro Evangelho</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Discernir entre o verdadeiro evangelho e os falsos ensinos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-para-comecar">Para Começar</H3>
          <P className="">
            O nosso objeto de estudo é a chamada Carta Magna da Liberdade
            Cristã, Gálatas. Esta epístola foi escrita pelo apóstolo Paulo, nos
            anos 50 d.C., aos judeus e gentios convertidos da província romana
            da Galácia.
          </P>
          <P className="">
            Como Martinho Lutero e John Wesley, cristãos ao redor do mundo têm
            sido transformados pelo estudo de Gálatas, cujo caráter apologético
            refuta o ensino da &quot;religião das obras&quot;. A carta adverte
            os cristãos sobre legalismo, esforço próprio e a troca da graça de
            Cristo por um evangelho diferente.
          </P>
          <P className="">
            O tema central de Gálatas é a justificação pela fé e não por obras
            da lei ou méritos humanos. Como missionário, Paulo investia nos
            grandes centros urbanos, a começar pelas sinagogas, devido à sua
            biografia (Gl 1.13,14; Fp 3.4,5). Mas seu foco era os gentios. O
            apóstolo fundava igrejas por onde passava e zelava por elas, mesmo
            de longe. Ao saber que judaizantes aparentemente convertidos ao
            cristianismo se infiltraram nas igrejas da Galácia, ensinando o
            evangelho mesclado à guarda da lei mosaica e lançando dúvidas no
            coração dos cristãos, Paulo se dirige por escrito àquelas igrejas.
            Reivindica sua autoridade apostólica, defende o verdadeiro evangelho
            e condena o legalismo, esclarecendo que não precisamos &quot;fazer
            algo&quot; para merecer a salvação. A epístola traz ensinamentos
            profundos que se aplicam à igreja do século XXI. Vamos refletir e
            aprender sobre o verdadeiro evangelho nesta lição. Bom estudo!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-homem-nao-tem-autoridade-sobre-o-evangelho">
            1. O Homem Não Tem Autoridade Sobre o Evangelho
          </H3>
          <P className="">
            Paulo inicia a Carta aos Gálatas apresentando-se como
            &quot;apóstolo&quot;: não era só &apos;enviado&apos;, mas
            pertencente a um grupo restrito de homens a quem Deus deu autoridade
            para lançar os fundamentos da Igreja e edificá-la. O selo de seu
            apostolado é o próprio Cristo e Deus Pai (Gl 1.1). Na saudação aos
            cristãos da Galácia, Paulo menciona a essência do verdadeiro
            Evangelho (Gl 1.3,4) cujo conceito expõe em Rm 1.16,17. Esta palavra
            &apos;evangelho&apos; vem de dois termos gregos: eu, que quer dizer
            &quot;bom&quot; e angelia, &quot;mensagem, notícia, novas&quot;.
            Logo, a palavra euangelion significa &quot;boas novas&quot;. Ninguém
            dissertou sobre o Evangelho melhor do que Paulo. Seu encontro com
            Jesus no caminho de Damasco transformou-o de modo poderoso e ele foi
            chamado para pregar aos gentios primeiramente (At 9.15; 22.21). Após
            ser confrontado pelo Cristo ressurreto, o perseguidor dos crentes
            tornou-se um intrépido missionário. Sua pregação consistia na Lei e
            nos Profetas, atualizando os ouvintes sobre o cumprimento das
            profecias a respeito do Messias na pessoa de Cristo. A autoridade de
            Paulo ao contestar os judaizantes decorria do conhecimento profundo
            da Lei e por ter sido chamado pelo próprio Jesus. Para ele,
            acrescentar as obras da lei à obra de Cristo era o mesmo que negar
            Jesus. A mensagem do Evangelho ainda hoje é distorcida por falsos
            mestres que atribuem à ações humanas um fator decisivo para a
            salvação. Que estejamos aptos a discernir o verdadeiro Evangelho dos
            falsos ensinos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-outro-evangelho">2. O Outro Evangelho</H3>
          <P className="">
            Diante do transtorno doutrinário nas igrejas da Galácia, Paulo
            reitera aos cristãos que se mantenham fiéis ao Evangelho que lhes
            foi pregado e ao qual se converteram.
          </P>
          <P className="">
            O apóstolo pronúncia uma maldição contra quem pregar um evangelho
            diferente do evangelho de Cristo (Gl 1.8) – um anjo, um pregador,
            até mesmo o próprio Paulo seria amaldiçoado e relegado ao inferno,
            pois não estaria edificando a Igreja, mas inquietando os irmãos (Gl
            1.7; 5.10).
          </P>
          <P className="">
            A palavra &apos;anátema&apos; deriva do latim &apos;anathema&apos;
            que significa excomunhão, reprovação. E Paulo se inclui e aos demais
            irmãos nesta condição: &quot;ainda que nós mesmos&quot;, ou seja, na
            hipótese de perversão do Evangelho qualquer pessoa seria
            amaldiçoada! Ao mencionar um caso extremo, &quot;um anjo do
            céu&quot;, Paulo extingue toda a possibilidade de distorção do
            evangelho sem castigo. &quot;Outros evangelhos&quot; podem chegar
            aos crentes e desviá-los da verdade (vv.8,9).
          </P>
          <P className="">
            Se Paulo se surpreende com a receptividade dos gálatas a outro
            ensinamento (Gl 1.6), nós devemos estar atentos ao tipo de evangelho
            que ouvimos. A mensagem que nos faz crer sermos merecedores da
            salvação e das bênçãos divinas é um evangelho distorcido e quem o
            prega é amaldiçoado. Que tenhamos discernimento diante do evangelho
            que nos é apresentado diariamente, inclusive por programas de rádio
            e TV e pelas redes sociais. A depender de sua essência, seremos
            abençoados ou amaldiçoados como os que pregam para nós.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-paulo-recebeu-o-evangelho-diretamente-de-cristo">
            3. Paulo Recebeu o Evangelho Diretamente de Cristo
          </H3>
          <P className="">
            Na defesa de seu apostolado, Paulo explica sobre o evangelho que
            prega. Primeiro, ele anuncia que recebeu o evangelho de Deus, e este
            não segue parâmetros humanos (Gl 1.11). Depois, afirma não ter
            patrono, não repetir o que outros lhe falaram, mas pregar o que
            Jesus lhe revelou (v.12).
          </P>
          <P className="">
            A palavra usada para &apos;revelação&apos; (do grego apokalypsis) se
            relaciona a &apos;tirar o véu&apos;. O próprio Deus se revelou ao
            apóstolo no caminho, e ele argumenta: diferente do que supunham e
            espalhavam os judaizantes, não pretendia agradar aos homens no
            ministério (Gl 1.10), mas sim a Deus. Paulo esclarece aos gálatas
            como se opunha ao evangelho (v.13-16, argumento biográfico).
          </P>
          <P className="">
            Ele defende seu ministério apostólico, pois os falsos mestres
            questionavam a autenticidade da sua mensagem, alegando que Paulo não
            era de fato um apóstolo, por não haver andado com Jesus e não ser um
            dos Doze. Se o verdadeiro apóstolo era chamado diretamente por
            Jesus, Paulo o era.
          </P>
          <P className="">
            Segundo a Bíblia, o centro do evangelho é Deus e não o ser humano, a
            quem compete crer no sacrifício perfeito de Jesus. O evangelho
            segundo os homens agrada a plateia (v.10) e massageia o ego (como as
            focadas na autoajuda), constituindo um falso evangelho desagradável
            a Deus. Ao contrário do evangelho que gira em torno do ser humano, o
            verdadeiro evangelho concentra-se em agradar a Deus e atém-se à Sua
            Palavra, porque apenas esta pode transformar (1 Pe 1.23).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-uma-igreja-madura-discerne-o-verdadeiro-evangelho">
            4. Uma Igreja Madura Discerne o Verdadeiro Evangelho
          </H3>
          <P className="">
            As igrejas da Galácia resultavam do trabalho missionário de Paulo
            (At 16.6;18.23) e eram compostas, em sua maioria, de gentios
            convertidos. &quot;Obras antigas como o Comentário sobre as Guerras
            Gálicas se referem aos moradores da Galácia como pessoas
            inconstantes, nas quais não se devia confiar&quot; (Livres em
            Cristo, A. Nicodemus, p.12). Embora tivessem essa característica, a
            expressão &quot;tão depressa passásseis&quot; (Gl 1.6) não se refere
            à conversão recente dos gálatas, mas à rapidez com que cederam aos
            argumentos dos judaizantes.
          </P>
          <P className="">
            Aparentemente, tais cristãos foram tão receptivos ao Evangelho ao se
            converterem a Cristo, como o foram aos falsos mestres. Com palavras
            sedutoras, os judaizantes pregavam que à fé se devia somar a
            circuncisão e os ritos do judaísmo; isso levava os gálatas a achar
            que a obra de Cristo foi insuficiente e que só crer nEle não
            garantia salvação.
          </P>
          <P className="">
            Expressões modernas do legalismo antigo podem ser encontradas hoje
            no meio cristão: o fundamentalismo rígido e sem misericórdia e até a
            reintrodução de práticas judaicas são exemplos disto. Ritos baseados
            em usos e costumes, e interpretações errôneas e descontextualizadas
            de textos bíblicos podem nos fazer acreditar que só a fé é pouco
            para sermos salvos, e que devemos &apos;pagar o preço&apos; para
            entrarmos no céu. Isto constitui o falso evangelho. Como Igreja,
            devemos repudiar todo ensinamento que ponha o homem no centro do
            evangelho e nos leve a crer que por nossos méritos seremos salvos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Nesta lição, fomos desafiados a rever nossos conceitos. O cristão
            precisa entender qual é o verdadeiro Evangelho e saber discernir
            entre este e os falsos ensinos. Assim como os gálatas, por vezes
            somos levados a servir a Deus pensando que por nossas obras seremos
            salvos. Mas nossos méritos e nossa justiça são como trapos de
            imundícia diante do Senhor (Is 64.6).
          </P>
          <P className="">
            Por sua misericórdia, Deus nos dá a salvação e Suas bênçãos. Não
            merecemos a entrega de Cristo na cruz, não merecemos Seu amor, não
            merecemos Seu cuidado diário. Gálatas é um chamado à percepção do
            tipo de evangelho que seguimos e praticamos. A Palavra de Deus nos
            adverte que a salvação é pela fé e que o centro do Evangelho é
            Cristo.
          </P>
          <P className="">
            Sem fé é impossível agradar a Deus (Hb 11.6), portanto nossas obras
            apenas testificarão ao mundo sobre nossa fé, pela qual alcançamos a
            salvação. A base de nossa vida e pregação deve ser a Palavra de Deus
            (2 Co 4.2) e o Cristo vivo que salva o pecador pela fé (Mc 5.34; Ef
            2.8). Que nosso conceito sobre salvação passe pela fé e não pelo
            esforço humano, como nos ensina a Palavra de Deus. Que tenhamos
            discernimento!
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – Paulo e os Outros Apóstolos</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Destacar o ministério de Paulo em relação aos outros apóstolos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-para-comecar">Para Começar</H3>
          <P className="">
            O estudo de Gálatas amplia nossa visão sobre o Evangelho. No
            capítulo 2, foco desta lição, aprendemos sobre a unidade do
            Evangelho: mesmo quando ele é pregado a públicos diferentes, a
            judeus ou aos gentios, o Evangelho é único.
          </P>
          <P className="">
            A ida de Paulo a Jerusalém (Gl 2.1) pode ser a referida em Atos
            15.1,2 na qual a questão dos judaizantes é apresentada. Os líderes
            da Igreja confirmaram o ministério de Paulo (Gl 2.9); Pedro, Tiago e
            João não exigiram de Paulo a observância das leis judaicas, porque
            elas não faziam parte do verdadeiro Evangelho: acrescentar obras ou
            rituais à mensagem de Cristo é invalidar as boas-novas (Gl 2.16).
          </P>
          <P className="">
            Desde o dia de Pentecostes, os apóstolos Pedro e João faziam
            milagres e pregavam a Cristo, sendo até presos (At 4.1-4,9-10;
            5.18-20, p. ex.) e sua pregação e a dos demais apóstolos ecoava por
            toda a Jerusalém. Após a morte de Estevão, os cristãos foram
            dispersos pela Judeia e Samaria, exceto os apóstolos (At 8.1).
          </P>
          <P className="">
            O Evangelho se espalhou, chegando aos gentios (At 10.28,45). Enviado
            da igreja em Jerusalém a Antioquia da Síria, Barnabé buscou Paulo em
            Tarso (At 11.25) e ambos foram fazer a obra missionária (At 13.2),
            que culminou com a fundação da igreja da Galácia. A unidade da
            Igreja em torno do verdadeiro Evangelho é de suma importância para
            nós cristãos.
          </P>
          <P className="">
            Vamos compreender melhor a necessidade de estarmos unidos em Cristo,
            apesar das diferenças e de renunciar a nós mesmos para viver em
            Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-aprovacao-dos-outros-apostolos">
            1. A Aprovação dos Outros Apóstolos
          </H3>
          <P className="">
            Em qualquer meio profissional ou de classe, precisamos nos sentir
            acolhidos e aprovados. Paulo foi apresentado aos apóstolos por
            Barnabé (At 9.27).
          </P>
          <P className="">
            Após viagens missionárias e fundação de igrejas, Paulo não se sentiu
            inferior a eles (Gl 2.6), mas um igual, tão apóstolo quanto os que
            andaram com Jesus e foram por ele escolhidos. Em reunião particular
            (v.2), Paulo se encontrou com os líderes da igreja-mãe, em
            Jerusalém, tidos como colunas (v.9).
          </P>
          <P className="">
            Tiago, Pedro e João nada acrescentaram ao evangelho revelado a Paulo
            (v.6); este Tiago é irmão de Jesus (Gl 1.19) que substituiu o Tiago
            decapitado por Herodes (At 12.2), um dos Doze. Ao saberem sobre o
            evangelho da incircuncisão confiado por Deus a Paulo, os líderes se
            conectaram a ele e a Barnabé, apertando-lhes as mãos em sinal de
            comunhão e amizade (v.7,9).
          </P>
          <P className="">
            Diferente dos falsos apóstolos infiltrados nas igrejas da Galácia, o
            trio de pastores da igreja em Jerusalém não censurou ou tentou
            diminuir Paulo, mas abraçou-no em sua chamada distinta da de Pedro.
            Havia um chamado para pregar aos judeus e o expoente deste era
            Pedro, e havia também um chamado específico para levar o Evangelho
            aos gentios, incircunsisos pela lei de Moisés, cujo expoente era
            Paulo.
          </P>
          <P className="">
            Os apóstolos de Jerusalém reconheceram a operação de Deus por
            ministérios diversos (1Co 12.5) e que Deus capacitara Pedro e Paulo
            a públicos diferentes (vv.7,8). A autoridade apostólica dos Doze e
            de Paulo era a mesma, e a união dos apóstolos em torno do Evangelho
            fez com que a Igreja se fortalecesse ainda mais.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-paulo-diante-da-igreja">
            2. Paulo Diante da Igreja
          </H3>
          <P className="">
            Paulo conta às igrejas da Galácia que as igrejas da Judeia não o
            conheciam pessoalmente, apenas sabiam a respeito dele e glorificavam
            a Deus por sua vida (Gl 1.22-24). Em sua carta, Paulo narra a viagem
            à Jerusalém e sua estadia com os apóstolos. Ele confronta os que se
            deixaram levar pelos falsos mestres, os quais poderiam ir a
            Jerusalém e destruir a reputação de Paulo diante da igreja-mãe (Gl
            2.2b). Isto o apóstolo evita, indo expor o conteúdo de sua pregação
            e se afinar com os líderes daquela igreja. Ao longo da epístola,
            vemos a influência de Paulo nas igrejas da Galácia.
          </P>
          <P className="">
            Ele expõe as ações dos falsos irmãos: &quot;se tinham entremetido e
            secretamente entraram a espiar a liberdade que temos em Cristo
            Jesus, para nos porém em servidão&quot; (Gl 2.4) – o objetivo deles
            era subjugar os crentes à observância da lei de Moisés, ignorando a
            liberdade da fé em Cristo. A estas ações ousadas, Paulo resistiu
            imediatamente (v.5) quando as presenciou.
          </P>
          <P className="">
            A epístola certamente encorajou os cristãos da Galácia a repudiar as
            imposições legalistas, que lhes subtraíam a liberdade cristã. Do
            mesmo modo, esta epístola nos constrange a revisar o tipo de
            evangelho que praticamos e pregamos, a fim de que não nos submetamos
            a jugo humano sugerido a fim de completar a salvação.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-paulo-diante-de-pedro">3. Paulo Diante de Pedro</H3>
          <P className="">
            O relato de Paulo agora vai de Jerusalém, centro judaico do
            cristianismo a Antioquia da Síria (Gl 2.11), centro gentílico do
            cristianismo (At 11.20,26) e centro missionário de expansão do
            evangelho (At 13.1-3). Neste incidente, vemos Paulo confrontando
            Pedro por atitudes hipócritas.
          </P>
          <P className="">
            Em Antioquia, Pedro foi bem recebido e comeu com os cristãos
            gentios, pois já havia entendido que Deus não faz acepção de pessoas
            (At 10.28-35). Mas com a chegada de um grupo de Jerusalém que usa o
            nome de Tiago para alegar autoridade sem o consentimento deste (At
            15.24), Pedro se afasta dos cristãos gentios (Gl 2.12),
            comprometendo a comunhão. A pressão fez com que outros e até Barnabé
            (v.13) passassem a um comportamento dissimulado também; Pedro, por
            ser &apos;apóstolo da circuncisão&apos;, não queria ser visto
            comungando com incircuncisos (v.12b). Paulo repreendeu Pedro
            publicamente: sua dissimulação e hipocrisia afetava a igreja.
          </P>
          <P className="">
            A mensagem do evangelho é inegociável, os que creem são salvos pela
            fé, sem acepção de pessoas. Esse incidente entre dois grandes
            líderes foi um marco que preservou a verdade do evangelho, pois
            tirou o jugo legalista de sobre os cristãos e afirmou a
            universalidade do evangelho – graças à percepção espiritual de
            Paulo. O líder dos apóstolos de Jerusalém certamente ficou
            envergonhado, mas não guardou rancor de Paulo, o que se vê por suas
            palavras em 2 Pe 3.15.
          </P>
          <P className="">
            Em nossos dias, confrontos à atitudes e comportamentos que
            comprometam a verdade do evangelho não devem significar cisão na
            Igreja. Devem ser oportunidades para consolidação de nossa fé.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-crucificado-estou-nao-vivo-mais-eu">
            4. Crucificado Estou, Não Vivo Mais Eu
          </H3>
          <P className="">
            A argumentação de Paulo ao confrontar Pedro representa a afirmação
            do ponto central de sua carta: a justificação é só pela fé em Jesus.
            Ninguém se justifica perante Deus pelas obras.
          </P>
          <P className="">
            O crente judeu do Antigo Testamento confiava na substituição feita
            pelos sacrifícios e não nos próprios méritos para obter a graça de
            Deus. Logo, após Jesus, quem crê nEle e em Seu sacrifício perfeito
            morreu para a Lei: não vive para o sistema legalista, mas para Deus.
            Os cristãos devem ser &quot;crucificados&quot; com Cristo (Gl 2.20)
            a fim de morrer para o pecado, para a Lei e para o presente século
            mau (Gl 1.4), pois Cristo realizou uma obra completa.
          </P>
          <P className="">
            No v.20, Paulo enfatiza sua nova vida: o &apos;velho&apos; Paulo, um
            fariseu orgulhoso, arrogante por seu grande conhecimento e zelo
            ficou &apos;na cruz&apos;. Quando se rendeu a Jesus, ele passou a
            viver em Cristo. Na carne, Paulo é desafiado diariamente a proceder
            como Cristo, renunciando-se a si mesmo (Mt 16.24) e vivendo na fé do
            Filho de Deus. O amor e a entrega de Jesus são convincentes o
            suficiente para que o intelectual Paulo se submeta às mais diversas
            provações por amor a Cristo, que com amor o chamou (2Co 11.23-29).
            Nós somos crucificados espiritual e representativamente em Cristo.
          </P>
          <P className="">
            Unidos a Ele, vivemos num corpo físico, mas Jesus vive em nosso
            espírito. Renunciar nosso ego e deixar o caráter e a vontade de
            Cristo prevalecer em nós é um desafio que compensa (Lc 9.24).
            Renunciar a si mesmo, de aspirações humanas e terrenas e deixar
            Jesus reinar como salvador e Senhor de nossa vida deve ser nossa
            resposta a Seu sacrifício por nós!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            A unidade da Igreja como Corpo de Cristo foi nosso foco nesta lição,
            ao estudarmos as relações de Paulo com os outros apóstolos e sua
            posição, vivendo &quot;na fé do Filho de Deus&quot;. Aprendemos que
            só há um Evangelho, independente do público-alvo. Vimos que Paulo
            cita sua visita a Jerusalém como defesa de seu apostolado e sua
            reprimenda a Pedro como introdução à argumentação em favor da
            justificação pela fé independente das obras da Lei. Entendemos que a
            confrontação pode levar à consolidação da nossa fé, a fim de que
            pratiquemos e preguemos o verdadeiro Evangelho.
          </P>
          <P className="">
            Apesar de parecer politicamente incorreto, Paulo questionou não a
            pessoa de Pedro, mas suas atitudes, a fim de que o Evangelho fosse
            livre das amarras legalistas. Talvez se Paulo tivesse se calado
            diante da situação, os cristãos fossem constrangidos a
            circuncidar-se, e seguir dieta e calendário judaicos até hoje. Porém
            Paulo estava espiritualmente atento e teceu a argumentação sólida
            que caracteriza o Evangelho genuíno.
          </P>
          <P className="">
            Em Cristo, não há judeu nem gentio (Rm 10.12,13), Deus não faz
            acepção de pessoas (Rm 2.11). Todos os que creem na obra completa de
            Jesus podem ser salvos e devem crucificar seu &apos;eu&apos;. Que em
            nossos relacionamentos como Igreja vivamos o verdadeiro Evangelho da
            fé e da renúncia!
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – Compreendendo a Lei e a Graça</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Compreender a Lei e a Graça, as características de cada uma e a
            diferença entre elas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-para-comecar">Para Começar</H3>
          <P className="">
            O estudo de hoje concentra-se em Gálatas 3. O capítulo expõe uma das
            doutrinas fundamentais do cristianismo, a justificação pela fé (Rm
            3.28). Somos levados por Paulo a meditar sobre a relação Lei X
            Graça. O apóstolo começa advertindo os cristãos da Galácia (Gl 3.1),
            pois estes se haviam deixado enganar por falsos mestres cujo ensino
            mesclava a fé com a observância de regras da Torá.
          </P>
          <P className="">
            A Lei institui ritos exteriores, enquanto a Graça institui a mudança
            do coração (Rm 2.29). A estratégia divina simples de tornar o
            pecador inocente por meio da justificação pela fé era questionada
            pelos judaizantes, que viam o evangelho de Cristo como uma
            continuação do judaísmo. Eles não admitiam, como muitos não admitem
            atualmente, a simplicidade do Evangelho. Por isso, Paulo faz várias
            indagações aos gálatas (Gl 3.2-5) e os chama de insensatos por duas
            vezes – a fim de incitá-los a rever seus conceitos cristãos.
          </P>
          <P className="">
            Na sequência, Paulo introduz a figura de Abraão, cuja salvação se
            deu por fé: &quot;creu Abraão em Deus, e isso lhe foi imputado
            (creditado) como justiça&quot; (Gn 15.6; Gl 3.6), assim como deveria
            se dar a salvação (por fé), a partir de Jesus. Se a fé sempre foi o
            meio de salvação, tanto no Antigo quanto no Novo Testamento, esta é
            uma lição basilar para nós. O projeto de salvação definitiva de Deus
            na pessoa de Cristo nos encanta e desafia, como estudaremos. Que
            Deus nos constranja a servi-lo por fé e não por vista!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-abraao-foi-salvo-pela-fe">
            1. Abraão Foi Salvo Pela Fé
          </H3>
          <P className="">
            O apóstolo Paulo apresenta aos gálatas a fé como o meio para
            salvação humana. A fé é &quot;o firme fundamento das coisas que se
            esperam e a prova das coisas que se não veem.&quot; (Hb 11.1).
            Através da fé em Cristo, os gentios se tornam filhos espirituais de
            Abraão (Gl 3.6-9), o Pai da fé (Rm 4.16). Paulo cita Gn 15.6 ao
            expor os mestres judaizantes, que tanto prezavam pela Lei e se
            gabavam de ter Abraão por pai, mas desprezavam o fato de Abraão ter
            sido justificado pela fé. Ele creu em Deus, num tempo em que não
            havia as Escrituras, nem os recursos que temos.
          </P>
          <P className="">
            E até hoje paira a dúvida: como uma pessoa imperfeita pode ser
            considerada justa por um Deus perfeito (Jó 25.4)? Pela ótica dos
            judaizantes, era preciso cumprir a Lei mosaica para ser aceito por
            Deus. Mas, no Antigo Testamento, a salvação era através da fé. O que
            mudou ao longo do tempo foi o conteúdo da fé do crente, a depender
            do quanto de revelação Deus foi dando à humanidade.
          </P>
          <P className="">
            Antes de Cristo, as pessoas eram salvas porque criam que Deus iria
            resolver o problema do pecado, um dia. Expressavam sua fé no
            Salvador que viria através do sacrifício de cordeiros, que
            prefiguravam Jesus, &quot;o cordeiro de Deus que tira o pecado do
            mundo&quot; (Jo 1:29). Em Cristo, temos a revelação completa (Cl
            1.17-20) e podemos alcançar, além da salvação, as bençãos prometidas
            na Palavra, pela fé. Vamos por nossa fé em ação e crer mais no
            Senhor Jesus?
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-ninguem-e-justificado-pela-lei-mas-pela-fe">
            2. Ninguém É Justificado Pela Lei, Mas Pela Fé
          </H3>
          <P className="">
            Uma das doutrinas básicas do cristianismo é a justificação pela fé.
            Paulo reafirma que pela lei ninguém será justificado (Hc 2.4; Gl
            3.11), mas pela fé. A fé justificadora é viva, genuína, frutífera, e
            se manifesta por obras como testemunho ao mundo. E o que é
            justificação? Vem do latim justificare, que significa &quot;fazer
            justo&quot;.
          </P>
          <P className="">
            No Antigo Testamento, tsadaq (termo hebraico), &quot;declarar
            justo&quot;, traz o sentido de justificar (Pv 17.15). No Novo
            Testamento, o termo grego é dikaioo, que significa &quot;inocentar,
            declarar/tratar como justo&quot; (Rm 8.33). Pela Soteriologia, o ato
            de justificar implica em imputar a justiça de uma pessoa a outra,
            isto é, declarar alguém que é injusto, justo, pelos méritos de outra
            pessoa, no caso, Cristo (Rm 3.22-24).
          </P>
          <P className="">
            A justificação ocorre no tribunal de Deus em um ato único (Tt
            3.5-7). Quando é justificado, o pecador recebe um novo status legal
            perante Deus, embora continue pecador (agora perdoado). A
            justificação é recebida pela fé (At 13.39) e, por ela, Cristo nos
            reveste com sua própria santidade. Essa doutrina marca o rompimento
            dos reformadores com a Igreja romana, que ensinava a justificação
            pelas obras recomendadas por Roma.
          </P>
          <P className="">
            A Reforma Protestante teve início no coração de Lutero, quando ele
            entendeu a verdade intrínseca a Rm 1.17: &quot;o justo viverá da
            fé&quot;. Para ele e outros grandes reformadores, a justificação é a
            base do cristianismo. Que possamos como Lutero internalizar esta
            verdade e viver por fé e não por vista (2 Co 5.7).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-viver-pela-lei-ou-pela-graca">
            3. Viver Pela Lei ou Pela Graça
          </H3>
          <P className="">
            Quem obedecesse a Lei para ser salvo estava sob a maldição que a
            própria Lei impunha a quem não a segue à risca (Dt 27.26; Gl 3.10).
            O ser humano, imperfeito, jamais poderia cumpri-la totalmente. A lei
            não fora dada para salvar, mas apontava a necessidade de um
            Salvador, simbolizado no sistema de sacrifícios.
          </P>
          <P className="">
            Quando Jesus se entregou na cruz como nosso representante, Ele nos
            livrou da maldição da Lei que era a morte como castigo (Dt 21.23; Hb
            10.28). Sob a Lei, é preciso fazer para poder viver (Lv 18.5), mas
            sob a Graça recebe-se vida pela fé (Rm 1.17; Gl 3.11).
          </P>
          <P className="">
            Os judaizantes ensinavam que a benção estaria na obediência à Lei.
            Por isso, Paulo lembra que a Lei trazia maldição e esta deveria
            estar sobre nós; tal maldição caiu sobre Cristo que sofreu o castigo
            em nosso lugar (v.13). Isso para que a benção prometida ao judeu
            Abraão chegasse a nós, gentios, pela fé – por ela nos tornamos
            filhos espirituais de Abraão (Gl 3.7-9). A justificação pela fé, a
            benção de Abraão, foi estendida a todas as famílias da terra por
            Cristo, filho/descendente de Abraão (v.14,16).
          </P>
          <P className="">
            Também por Ele recebemos o Espírito Santo permanentemente em nós (Jo
            14.16,17), pois já não estamos sob maldição. A Lei veio por causa
            das transgressões (Gl 3.19), mas com o fim de nos guardar, como um
            tutor (v.24), temporariamente, até que Cristo viesse e justificasse
            a todos os creem nEle. Que decidamos viver pela Graça!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-unidade-por-intermedio-de-cristo">
            4. A Unidade Por Intermédio de Cristo
          </H3>
          <P className="">
            Ao sermos justificados pela fé, já debaixo da Graça, percebemos que
            não há um Evangelho para os judeus, outro para os gentios, assim
            como não há divisões raciais, sociais ou de gênero no céu. O
            pensamento humano pode preferir a religião das obras e dos méritos
            que vai do homem em direção a Deus, mas a Palavra de Deus nos expõe
            a graça e a misericórdia que vêm de Deus para os homens, na pessoa
            de seu Filho Jesus. O apóstolo Paulo afirma que a fé em Cristo nos
            une e nos faz filhos de Deus (Gl 3.26), justificados dos pecados e
            em paz com Deus (Rm 5.1).
          </P>
          <P className="">
            Escrevendo a igrejas bombardeadas por um &apos;outro
            evangelho&apos;, Paulo admoesta os gálatas contra as divisões
            (v.28), tal como na carta aos coríntios, igreja que enfrentava este
            desafio (1 Co 1.10-13). A obra de Cristo derruba as barreiras
            culturais entre judeus e gentios (Rm 10.12); elas poderiam surgir na
            Galácia se uns seguissem a lei mosaica e outros não.
          </P>
          <P className="">
            Ser filho de Deus envolve fraternidade em Cristo e, por isso,
            devemos prezar pela unidade da Igreja, como conceituada por Paulo
            aos Efésios (Ef. 4.1-6). O sacrifício de Cristo nos garante acesso
            ao Pai e este não faz acepção de pessoas (Rm 2.11). Logo, nós que
            herdamos (como filhos) a promessa (bênção) como descendência de
            Abraão (Gl 3.29), não podemos discriminar quem se chega à Cristo
            pela fé, seja por seu passado, seja por suas falhas. Que a graça e a
            misericórdia fluam através de nós à nossa família de fé.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            A vida cristã é desafiadora. Quanto mais aprendemos, mais percebemos
            o quanto nos falta aprender. Esta lição descortinou detalhes sobre a
            obra perfeita de Cristo na cruz, caracterizando a Lei e a Graça e
            expondo as diferenças entre elas.
          </P>
          <P className="">
            O plano da salvação, apresentado em Gênesis, perpassa toda a Bíblia,
            pois a Graça é antes da Lei e está acima dela. Esta serviu como
            &quot;aio&quot; até que, na plenitude do tempo, Deus nos permitisse
            ter na cruz o representante humano perfeito que não veio revogar a
            Lei, mas cumpri-la (Mt 5.17).
          </P>
          <P className="">
            Observamos que havia salvação no Antigo Testamento pela fé, como no
            caso de Abraão. Estudamos a doutrina da justificação pela fé e a
            vida sob a Graça com suas bênçãos. E percebemos que, como Igreja,
            precisamos nos manter unidos em Cristo. Quão salutar é quando
            investimos nosso tempo no estudo do Palavra!
          </P>
          <P className="">
            A simplicidade do Evangelho é nos dias de hoje ainda subestimada por
            vários cristãos, que criam ou seguem um sistema de regras legalistas
            e humanas, a fim de colaborar com sua própria salvação. Mas por
            méritos não entraremos no céu. O mérito é unicamente de Jesus e
            nosso papel é aceitar por fé que de culpados, Deus nos transforme em
            inocentes através do sacrifício de Cristo!
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">Lição 4 – Atenção Gálatas: Liberdade e Limites</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Conhecer alguns alertas feitos aos gálatas e evitarmos erros iguais,
            bem como compreender a liberdade cristã e os seus limites.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-para-comecar">Para Começar</H3>
          <P className="">
            O estudo da carta aos Gálatas nos conduz a uma reflexão profunda
            sobre a justificação pela fé e a liberdade cristã. No capítulo 4,
            Paulo alerta os gálatas – e a nós – sobre os perigos de abandonar a
            graça para retornar à escravidão da Lei. Ele expõe cinco contrastes
            que evidenciam a superioridade da fé sobre o legalismo, destacando a
            transformação dos crentes de escravos para filhos de Deus, a mudança
            em seu relacionamento com ele e a oposição entre a liberdade da
            promessa e a servidão das obras. A infiltração dos mestres
            judaizantes nas igrejas da Galácia trouxe confusão, promovendo um
            evangelho distorcido que exigia a observância da Lei como condição
            para a salvação.
          </P>
          <P className="">
            No capítulo 5, Paulo reforça o chamado à liberdade cristã. Uma vez
            libertos do pecado, os crentes não devem se submeter novamente ao
            jugo do legalismo, mas viver segundo o Espírito. O apóstolo
            esclarece que a disputa com os judaizantes não era por liderança ou
            influência, mas pela verdade do Evangelho: enquanto a salvação pela
            fé em Cristo é suficiente e completa, os falsos mestres insistiam na
            necessidade da circuncisão e das obras da Lei. Paulo adverte que
            quem escolhe esse caminho se coloca sob um jugo impossível de
            carregar. Ele destaca ainda a luta entre carne e Espírito, mostrando
            que aqueles guiados pelo Espírito produzem frutos que refletem a
            nova vida em Cristo.
          </P>
          <P className="">
            Esses ensinamentos continuam atuais e desafiadores. Devemos nos
            perguntar: estamos vivendo na liberdade do Evangelho ou sob fardos
            desnecessários? Que este estudo nos leve a examinar nossa caminhada
            e a permanecer firmes na graça de Deus. Bom estudo!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-voces-agora-sao-filhos">
            1. Vocês Agora São Filhos
          </H3>
          <P className="">
            O primeiro contraste que Paulo apresenta é entre a condição de
            escravo e de filho (Gl 4.1-7), conectando este capítulo aos
            versículos anteriores, onde ele se refere aos justificados pela fé
            como &quot;descendência de Abraão e herdeiros&quot; (Gl 3.29). Antes
            de Cristo, éramos herdeiros tutelados, em situação análoga à de
            escravos (4.1).
          </P>
          <P className="">
            Como um tutor, a Lei guardava a humanidade, como tutor (3.24) até
            que esta chegasse à maioridade, à plenitude dos tempos (4.4). Na
            sociedade antiga, tutores e curadores cuidavam do herdeiro até a
            idade dele desfrutar os bens herdados. A maioridade chega com o
            nascimento de Jesus, humano e judeu (v.4), e altera a condição de
            escravos para filhos adotivos (v.5), que agora podem ter intimidade
            com o Pai (v.6), pois têm o Espírito Santo. O escravo não pode ser
            herdeiro, o filho sim, daí nossa liberdade agora (2 Co 3.17; Hb
            10.19).
          </P>
          <P className="">
            A Palavra define &quot;filho de Deus&quot; como aquele que recebe
            Jesus, crendo em Seu nome (Jo 1.12). Somos todos criados, portanto,
            criaturas (Tg 1.18), mas recebemos o poder de sermos feitos filhos
            pela fé (Gl 3.26). Não estamos mais na condição de escravos
            (servos), mas somos filhos e herdeiros de Deus por Cristo (Gl 4.7).
          </P>
          <P className="">
            Temos uma herança incorruptível (Rm 8.17;1 Pe 3-5). Na família de
            Deus, há só um Filho natural, Jesus; por Sua bondade, Deus nos
            adotou, nos tirando da tutela da Lei (Gl 4.5). Paulo alerta aos
            gálatas e a nós: &quot;Já não és mais servo&quot; (v.7). Não nos
            submetamos a nenhum jugo!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-uma-igreja-que-regrediu">
            2. Uma Igreja Que Regrediu
          </H3>
          <P className="">
            Em outro alerta aos gálatas, Paulo questiona seu retrocesso
            espiritual. Antes, eram idólatras, serviam a deuses falsos criados
            pela imaginação humana – o que Paulo chama de primeiros rudimentos
            do mundo (Gl 4.3), equiparados a &quot;filosofias e vãs
            sutilezas&quot; e &quot;tradição dos homens&quot; (Cl 2.8). Deixaram
            a idolatria ao se converterem a Jesus mas, por influência dos
            judaizantes, regrediram (Gl 4.10). A Lei é &quot;boa, santa e
            justa&quot; (Rm 7.12); Paulo condena o legalismo, a ideia de que, se
            cumprida integralmente, a Lei garantirá a salvação (Gl 5.4).
          </P>
          <P className="">
            É surpreendente a perspectiva do apóstolo: se os gálatas aceitassem
            o falso ensino e se deixassem circuncidar, observando calendário
            judaico e dieta religiosa como condição para serem salvos, estariam
            como que retornando à condição anterior em que serviam a deuses
            falsos como escravos dos rudimentos do mundo! Paulo perguntara:
            &quot;Sois vós tão insensatos que, tendo começado pelo Espírito,
            acabeis agora pela carne?&quot; (Gl 3.3).
          </P>
          <P className="">
            E agora ele expõe o receio de ter trabalhado à toa (Gl 4.11). Se
            assim fosse, os gálatas seriam como o terreno pedregoso, citado por
            Jesus, que não tinha raiz (Mt 13.5,6,20,21). A vida espiritual deve
            progredir (Pv 4.18). Não podemos adorar outro senão Jesus. Qualquer
            coisa que tome o lugar de Cristo como Salvador e Senhor da nossa
            vida caracteriza idolatria. Que na caminhada cristã não retrocedamos
            (Hb 10.28), mas prossigamos para o alvo (Fp 3.13,14).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-dizer-a-verdade-nao-nos-faz-inimigos">
            3. Dizer a Verdade Não Nos Faz Inimigos
          </H3>
          <P className="">
            Paulo agora contrasta a atitude inicial dos gálatas com sua atitude
            atual. Este alerta (Gl 4.12-18) é sobre a mudança de comportamento
            dos crentes em relação ao apóstolo e a mensagem pregada por ele,
            devido à intromissão dos judaizantes nas igrejas da Galácia.
            &quot;Por mais que sofresse agora, ele se recordava que os gálatas
            não lhe causaram nenhum dano no começo, quando pela primeira vez os
            visitou, mas ignoraram sua enfermidade física a qual obrigou-o a
            permanecer entre eles como um doente.
          </P>
          <P className="">
            Ele não se afastou deles até que os familiarizou com as boas novas
            do Evangelho.&quot; (Comentário Bíblico Moody, p.26). Após receberem
            Paulo &quot;como um anjo de Deus&quot; (v.14), eles o estavam
            rejeitando como a um &quot;inimigo&quot; (v.16). Paulo sugere que os
            judaizantes agiam como ele antes de se converter, com zelo extremado
            e mal direcionado (Gl 1.14; 4.17). O apóstolo manteve-se zeloso por
            seus filhos na fé, embora perplexo, e mostrou que os verdadeiros
            inimigos eram os que inquietavam a igreja (Gl 1.7) e agiam a fim de
            obter o apreço que os gálatas tinham por Paulo, com bajulação (Gl
            4.17).
          </P>
          <P className="">
            Note que o motivo de considerarem Paulo um inimigo era ele ter dito
            a verdade. Jesus nos exorta a sermos vigilantes no falar (Mt 5.37),
            não nos eximindo de falar quando necessário (At 18.9). Jesus é a
            verdade (Jo 14.6) e nós devemos falar a verdade pois ela edifica o
            Corpo de Cristo, sem &apos;lançar em rosto&apos; (o que nem Deus não
            costuma fazer, Tg 1.5).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-filiacao-determina-a-condicao">
            4. A Filiação Determina a Condição
          </H3>
          <P className="">
            O último alerta de Paulo se inspira numa alegoria para complementar
            o argumento de que a justificação sempre foi pela fé (Gl 4.21-31).
            Paulo usou a estratégia dos judaizantes: argumentar com a Lei, mas
            provando que a Lei (Torá) apontava para Jesus. Outra vez Paulo traz
            Abraão, agora com seus filhos: Ismael, filho da escrava e Isaque,
            filho da livre.
          </P>
          <P className="">
            Alegoria era um método comum dos judeus para defender seu ponto de
            vista. Sara e Hagar são a alegoria de dois concertos: a aliança
            abraâmica e a aliança mosaica. O Monte Sinai está para Hagar e para
            a Jerusalém terrena assim como Sara está para a Jerusalém celestial.
          </P>
          <P className="">
            Hagar remete ao legalismo e à Jerusalém terrena. Sara remete à
            liberdade cristã e à Jerusalém celestial, mãe de todos os que são
            justificados pela fé (v.26). Ismael, gerado segundo a carne,
            perseguiu Isaque, gerado por promessa, segundo o Espírito. Na Torá
            foi dito a Abraão &quot;lança fora a escrava e seu filho&quot; (Gn
            21.10,12; Gl 4.30); de igual modo Deus ordena aos gálatas por Paulo
            que deixassem os filhos da escravidão, os legalistas! Os filhos da
            promessa são livres, como Isaque (v.28) – livres em Cristo de todo
            jugo do sistema legalista que exige esforços humanos.
          </P>
          <P className="">
            Os filhos espirituais de Abraão herdarão as bênçãos prometidas a
            ele, mas os que seguem a Lei e se submetem à escravidão espiritual e
            ao legalismo não recebem herança. Que nós possamos viver de fé em fé
            e receber herança entre os santificados (At 20.32).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-liberdade-com-limites">5. Liberdade Com Limites</H3>
          <P className="">
            Os cristãos gálatas estavam na iminência de se tornar escravos da
            Lei. Por isso, Paulo continua no assunto do capítulo anterior,
            alertando-os a não se submeterem ao jugo do legalismo (Gl 5.1). De
            acordo com o apóstolo, os gentios precisavam escolher entre Cristo e
            a circuncisão que, uma vez escolhida, demandaria a obediência total
            à Lei e invalidaria a obra de Cristo, caracterizando a justificação
            pelas obras.
          </P>
          <P className="">
            Aceitar a circuncisão significava abandonar a graça de Cristo (Gl
            5.4) em favor da autojustificação, que é inferior e impossível. O
            verdadeiro crente permanece na graça (Rm. 5:2). Enquanto o legalista
            vive na insegurança, porque não sabe se fez o suficiente segundo o
            padrão da justiça divina – aqueles que estão justificados pela fé,
            aguardam a esperança da justiça (Rm 8.10,11; Gl 5.5).
          </P>
          <P className="">
            Para os gálatas, viver sob a servidão da Lei pode parecer mais fácil
            do que administrar a liberdade, já que esta tem limites. A liberdade
            cristã exige firmeza e não equivale à libertinagem, não é uma
            licença para viver no pecado (Rm 6.16,18; Gl 5.13). O cristão deixa
            de ser escravo do pecado para ser escravo de Cristo (Rm 6.22). Este
            veio para cumprir a Lei e dar-nos a salvação gratuitamente (Mt 5.17;
            Rm 3.24); logo, o Evangelho deve ser praticado em liberdade,
            servindo aos irmãos (Gl 5.13). Os limites da liberdade cristã estão
            referidos na Palavra de Deus e contêm a carne.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-uma-luta-diaria">6. Uma Luta Diária</H3>
          <P className="">
            Em sua argumentação, Paulo aponta para a luta diária do cristão (Gl
            5.16,17). Novamente, ele expõe os dois sistemas de salvação: a
            salvação pelas obras (carne) e a salvação pela fé (Espírito). Eles
            são opostos e guerreiam entre si constantemente (v.17), o que já foi
            antecipado em Gl 3.3.
          </P>
          <P className="">
            Mas há possibilidade de vencer a carne e o desejo de ser salvo (por
            cumprir regras e seguir o legalismo). &quot;A forma futura na
            negativa (&apos;não cumprireis&apos;) é uma notável promessa. Andar
            a cada momento pela fé na palavra de Deus sob o controle do Espírito
            é garantia de vitória absoluta sobre os desejos de nossa natureza
            pecaminosa.&quot; (O Novo Comentário Bíblico – Novo Testamento, p.
            495).
          </P>
          <P className="">
            Carne é a nossa natureza pecaminosa, herdada de Adão e Eva. O
            Espírito Santo é recebido pela fé (Gl 3.2,14) e ajuda nosso espírito
            resistir à carne a fim de que os propósitos espirituais de Deus se
            realizem em nós e não as inclinações carnais. Estas envolvem,
            inclusive, a pretensão de &quot;colaborar com a salvação&quot;.
          </P>
          <P className="">
            Paulo também fala sobre carne e Espírito no sentido pessoal e ético,
            como o conflito interno que confronta os desejos pecaminosos com o
            desejo de santificação. Esse conflito é diário e desafiador para o
            cristão. Negar-se a si mesmo (Mt 16.24) e viver sob a orientação do
            Espírito Santo dá ao crente a possibilidade de não cair nas
            tentações cotidianas. Esta guerra comum a todos nós é para que
            &quot;não façais o que quereis&quot; (Gl 5.17b).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            O estudo da carta aos Gálatas nos conduz a uma reflexão profunda
            sobre nossa fé e nosso compromisso com o verdadeiro Evangelho.
            Aprendemos que a liberdade cristã não significa ausência de limites,
            mas um chamado à responsabilidade de viver no Espírito, longe do
            legalismo e das obras da carne. O perigo de começar bem na fé e, com
            o tempo, permitir que falsos ensinos ou desejos pessoais nos afastem
            da verdade é real. Assim como os gálatas foram influenciados por
            mestres judaizantes que distorciam o Evangelho, também hoje
            enfrentamos ensinos e ideologias que tentam enfraquecer ou modificar
            a mensagem de Cristo.
          </P>
          <P className="">
            Paulo nos lembra que nossas escolhas espirituais determinam nosso
            destino: ou semeamos para a carne, colhendo corrupção e escravidão,
            ou semeamos para o Espírito, recebendo a vida eterna. A luta entre
            carne e Espírito não é apenas um conceito teórico, mas uma realidade
            diária. Nossas ações, palavras e decisões revelam onde está nosso
            coração. Se nos apoiamos na graça de Deus e buscamos viver em
            santidade, produziremos o fruto do Espírito, que reflete a
            verdadeira transformação interior operada por Cristo.
          </P>
          <P className="">
            Diante desse ensinamento, precisamos nos perguntar: como temos
            vivido nossa fé? Temos permitido que o Espírito Santo nos guie ou
            estamos presos a um evangelho superficial e conveniente? Nossa
            liberdade está sendo usada para glorificar a Deus e servir ao
            próximo ou para justificar comportamentos contrários à Palavra? Que
            possamos nos examinar com sinceridade e buscar uma vida cristã
            autêntica, firmada na graça, no amor e na verdade do Evangelho. Que
            Deus nos fortaleça para que possamos permanecer fiéis até o fim,
            vivendo plenamente a liberdade que há em Cristo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 5 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-5">Lição 5 – Atenção Gálatas: Vivendo no Espírito</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Demonstrar os reflexos da semeadura e da colheita na vida do homem.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-para-comecar">Para Começar</H3>
          <P className="">
            O estudo dos capítulos 5 e 6 de Gálatas nos conduz a uma reflexão
            profunda sobre a luta interna entre a carne e o Espírito, que marca
            a vida cristã, exige que busquemos orientação do Espírito para
            produzir o fruto do Espírito, que reflete a verdadeira transformação
            de uma vida em Cristo.
          </P>
          <P className="">
            No sexto capítulo, Paulo apresenta a Lei da Semeadura, destacando
            que o tipo de semente que plantamos em nossas vidas determinará a
            colheita que teremos. Ele exorta os crentes a restaurarem aqueles
            que caíram em pecado com humildade e vigilância, e incentiva a
            prática do bem, lembrando sempre que a verdadeira liberdade cristã
            passa pela cruz. A salvação, como Paulo afirma, é radicalmente pela
            graça e não pelas obras, refutando qualquer tentativa de reconciliar
            a graça de Deus com as obras humanas, como proposto por algumas
            doutrinas. Para nós, cristãos que seguimos a Bíblia, a graça de Deus
            é suficiente, e a salvação não depende de nossa capacidade de
            realizar boas obras, mas da fé genuína em Cristo.
          </P>
          <P className="">
            Que este estudo nos ajude a discernir claramente essas verdades e a
            viver com a liberdade que Cristo conquistou para nós, sem nos
            desviar para qualquer sistema de salvação baseado em méritos
            humanos. Que possamos estar firmes na fé e preparados para responder
            aos questionamentos sobre nossa prática cristã. Bom estudo!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-as-obras-da-carne-sao-manifestas">
            1. As Obras da Carne São Manifestas
          </H3>
          <P className="">
            Paulo cita as obras da carne, que podem escravizar o espírito, a
            alma e o corpo do indivíduo (1 Ts 5.23). As obras da carne (natureza
            pecaminosa) são agrupadas em quatro categorias: 1) pecados sexuais
            (Gl 5.19): prostituição ou imoralidade (na prática), impureza e
            lascívia (na mente); 2) manifestações religiosas erradas (v.20a):
            idolatria e feitiçaria, que caracterizavam não só a cultura
            helênica, mas também as várias religiões daquela época, cujo cerne
            era o culto às imagens, prática de magia, encantamento e contato com
            os mortos; 3) pecados relacionais (v.20,21a): inimizades,
            rivalidades, ciúmes, ira, ambição egoísta, discórdias, partidarismo
            (heresias), invejas. Isto lhes soava familiar, pois parece ter
            havido discussões e conflitos nas igrejas da Galácia, devido à ação
            dos judaizantes (Gl 5.15). 4) atitudes coletivas pecaminosas (v.21):
            bebedeiras e orgias (glutonarias), que expressam descontrole e busca
            pela satisfação dos desejos mais básicos da natureza humana
            (adâmica). Assim viviam os gentios, nas culturas onde a degradação
            moral imperava (Ef 4.19).
          </P>
          <P className="">
            Essa é uma lista representativa e pode ser completada (Rm 1.28-32; 1
            Co 6.10). Quem vive na prática destas obras não herdará o Reino de
            Deus. Observe que as obras da carne são a expressão pecaminosa da
            natureza humana e as obras da lei são a expressão religiosa dela.
            Para ambas, a solução é a justificação pela fé em Cristo Jesus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-nao-ha-lei-contra-o-fruto-do-espirito">
            2. Não Há Lei Contra o Fruto do Espírito
          </H3>
          <P className="">
            Ao contrário do plural &quot;obras da carne&quot;, Paulo agora fala
            em &quot;fruto do Espírito&quot;, no singular. &quot;Talvez Paulo
            tenha desejado mostrar o caráter caótico e multiforme das
            manifestações da nossa natureza carnal, referindo-se a elas como
            &apos;obras&apos;. Contudo, debaixo do poder do Espírito Santo, o
            cristão produz o fruto, único, coeso, apontando para uma vida
            consistente, caracterizada por nove virtudes bastante similares (Gl
            5.22,23)&quot; (Livres em Cristo, A. Nicodemus, p. 255). A analogia
            do fruto lembra o ensinamento de Jesus (Jo 15.1-5). A primeira
            virtude é o amor, do qual derivam as demais virtudes (Gl 5.6; 1 Jo
            4.8): alegria (gozo), paz, paciência (longanimidade), benignidade,
            bondade, fé, mansidão e domínio próprio. O Espírito Santo nos dá o
            poder de mortificarmos nossa carne, já que o cristão verdadeiro está
            crucificado com Cristo (Gl 2.20; 5.24) e produzirmos o fruto do
            Espírito por seu agir diário em nós (v.25).
          </P>
          <P className="">
            Paulo torna evidente o contraste entre a vida no Espírito, debaixo
            da graça de Deus e enraizada na justificação pela fé e a vida sob a
            Lei, que fortalece as inclinações carnais (Rm 6.14). Contra o fruto
            do Espírito não há lei, não há restrições, pois essas virtudes ou
            atitudes espirituais cumprem a Lei de Deus (v.23; Rm 8.4; 13.10). Os
            cristãos que andam em Espírito não cobiçam, não se provocam e não
            invejam uns aos outros (Gl 5.25-26). Que possamos deixar o Espírito
            Santo produzir em nós Seu fruto!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-levando-fardos">3. Levando Fardos</H3>
          <P className="">
            Paulo começa orientando as igrejas quanto à restauração espiritual
            do irmão que pecou (Gl 6.1, NVI) para que se cumpra a Lei de Cristo
            (v.2) que é o amor (Mc 12.29-31) e cita também a responsabilidade
            pessoal de cada crente (v.3-5). A expressão &quot;chegar a ser
            surpreendido&quot; (v.1a) pode indicar que o cristão seja pego de
            surpresa por alguma tentação e peque, e não que o irmão seja
            flagrado no pecado.
          </P>
          <P className="">
            A seguir, Paulo diz como corrigir o irmão com quatro atitudes: 1)
            mansidão/brandura, um fruto do Espírito que só os espirituais têm
            (v.1; Tt 3.2); 2) cuidar de si mesmo: a atitude de vigilância evita
            que se caia no mesmo pecado que se tenta corrigir (1 Co 10.12); 3)
            assumir o fardo do outro, ajudar o pecador a suportar o peso da
            consciência do pecado até que este seja vencido (Jo 8.34); 4)
            humildade, com a qual devemos corrigir o outro, tendo em mente que
            não somos perfeitos, estamos sujeitos a tentações. Ser humilde e
            levar a própria carga (Gl 6.5) é não dar lugar à arrogância
            espiritual e não se sentir superior ao irmão que eventualmente
            pecou.
          </P>
          <P className="">
            Quem se auto compara com o que caiu conclui ser melhor do que ele,
            enganando-se (v. 3). Cada cristão deve &quot;provar sua própria
            obra&quot;, examinar-se para ver se está seguindo o exemplo de
            Cristo (Jo 13.15; 2 Co 13.5). Devemos assumir essa responsabilidade
            pessoal e individual no Corpo de Cristo (Rm 12.5). Se o cristão se
            julgar superior, será semelhante ao fariseu de Lc 18.11,12!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-nao-erreis">4. Não Erreis!</H3>
          <P className="">
            Paulo apresenta em Gl 6.7,8 a chamada Lei da Semeadura. É provável
            que Paulo se refira a alguns crentes das igrejas da Galácia que
            desprezavam seus pastores e mestres não dando a eles o sustento
            devido (Gl 6.6), por influência dos judaizantes.
          </P>
          <P className="">
            O apóstolo aconselha-nos a não errar pensando que Deus não perceberá
            as nossas ações. A Lei da Semeadura é óbvia e não se pode driblar: o
            que for plantado hoje, no tempo adequado será colhido. Uma
            associação semelhante aparece em 2 Co 9.6. O famoso Gl 6.7 se refere
            à atitude das igrejas da Galácia quanto ao sustento de seus líderes.
          </P>
          <P className="">
            A semente a ser plantada são os bens dos cristãos no provimento dos
            que cuidam deles e na expansão do Reino de Deus (1 Co 9.11-14); a
            colheita é espiritual visto que, investindo na obra de Deus, os
            cristãos investirão no Reino e colherão a vida eterna. A semeadura
            na carne resulta em corrupção ou destruição (NVI).
          </P>
          <P className="">
            Os que gastam seus bens apenas nas coisas materiais, esquecendo-se
            do sustento do Reino e de sua expansão incorrem no erro de semear
            para colher inclusive uma eternidade longe de Deus. Ao contrário, os
            que investiam no sustento dos que os instruíram no verdadeiro
            Evangelho, semearam no Espírito e colheriam do Espírito a vida
            eterna, perseverando até o fim e sendo salvos (Mt 10.22). Aplicando
            o contexto do investimento no Reino de Deus, no sustento aos que nos
            pastoreiam, como está nossa semeadura?
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-fazendo-o-bem-aos-nossos">
            5. Fazendo o Bem Aos Nossos
          </H3>
          <P className="">
            O apóstolo aconselha os cristãos gálatas a continuarem semeando o
            bem: &quot;Não nos cansemos de fazer o bem. Pois, se não
            desanimarmos, chegará o tempo certo em que faremos a colheita.&quot;
            (Gl 6.9, NTLH).
          </P>
          <P className="">
            Entre a semeadura e a colheita há um tempo. Quem espera plantar e
            ver resultado imediato pode desanimar. Paulo anima os gálatas a
            semear pois o tempo de Deus, o tempo de colher vai chegar. Segundo
            Paulo, fazer o bem pode significar manter a obra de Deus (v.6),
            compartilhar seus bens com seus mestres, semeando para o Espírito
            (v.8) e ajudar os necessitados (At 20.35; Tt 3.14), ou seja, é a
            prática do bem de modo geral. Devemos fazer o bem enquanto temos
            tempo e oportunidade, pois se o presente nos permite ser generosos,
            ajudar quem precisa, nada sabemos quanto ao futuro.
          </P>
          <P className="">
            E a prática do bem deve se estender a todos, sem exceção, como Jesus
            ensinou (Mt 5.44), incluindo até os inimigos nisso (Rm 12.20). Paulo
            sugere duas esferas da beneficência cristã: a todos e aos da família
            da fé. Os irmãos em Cristo são a prioridade. Se semearmos o bem,
            principalmente na vida dos nossos irmãos, certamente colheremos o
            bem. A vida é como um bumerangue, o que fazemos aos outros diz muito
            sobre nós (Mt 7.12,16; 12.35) e volta para nós multiplicado.
            Portanto, plantemos boas sementes, principalmente na família de fé;
            estejamos com o olhar atento às necessidades do nosso próximo,
            cumprindo assim a lei de Cristo (Mt 22.36-40).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-sendo-uma-nova-criatura">
            6. Sendo Uma Nova Criatura
          </H3>
          <P className="">
            Paulo retoma o contraste entre as motivações e intenções dos
            judaizantes e as dele próprio. Os judaizantes não eram sinceros, não
            tinham amor genuíno pelos gálatas. Se identificavam como cristãos,
            mas defendiam a Lei, pois não admitiam que a morte de Cristo era
            suficiente para salvar. Pensavam só em si e não estavam dispostos a
            sofrer por Jesus (Gl 6.12). Eles eram hipócritas, não guardavam a
            Lei e queriam impô-la aos gentios, a fim de gloriar-se em tê-los
            cooptado para o judaísmo (v.13).
          </P>
          <P className="">
            Paulo reafirma sua motivação na Carta aos Gálatas que é considerada
            a mais pessoal de todas, porque ele faz referências a si mesmo em
            vários trechos, ao contrário das outras epístolas. E qual a sua
            motivação, em que se gloria? Na cruz de Cristo. A cruz representa
            vergonha, tortura e morte, mas nela Cristo se fez maldição por nós e
            nos livrou do jugo do pecado e da Lei. A cruz é o centro do
            verdadeiro Evangelho! Pela cruz, Paulo e os cristãos estão
            crucificados para o mundo, não fazem mais parte dele.
          </P>
          <P className="">
            Por mundo, entende-se o sistema de valores pecaminosos, o modo de
            pensar antagônico a Deus. Pela cruz, morremos para o mundo e somos
            feitos nova criatura: &quot;as coisas velhas já passaram; eis que
            tudo se fez novo&quot; (2 Co 5.17). A circuncisão e a incircuncisão
            perdem seu valor salvífico. O milagre da geração de uma nova
            criatura é devido à obra perfeita, completa e suficiente de Cristo.
            A salvação é pela fé neste sacrifício rompe com a vida antiga e é
            superior a todo sistema de regras e de pecado. Que passemos pela
            cruz!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-conclusao">Conclusão</H3>
          <P className="">
            Ao refletirmos sobre o ensino de Paulo nas cartas aos gálatas, somos
            levados a um confronto sincero com nossa vida cristã. Não basta
            afirmar ser cristão; nossas atitudes diárias revelam o verdadeiro
            estado do nosso coração. A luta interna entre a carne e o Espírito é
            real e constante, desafiando-nos a escolher, a cada momento, se
            seguiremos a natureza pecaminosa ou a direção do Espírito. Se
            decidirmos nos submeter ao legalismo e às obras da carne, nossa vida
            refletirá os frutos da natureza adâmica. No entanto, se optarmos por
            viver pela graça, em fé, seremos guiados a produzir o fruto do
            Espírito, que não está sujeito à condenação.
          </P>
          <P className="">
            Paulo nos alerta também sobre a semeadura espiritual: o tipo de
            semente que plantamos determinará a colheita que teremos. Não se
            trata de semear para um benefício material, mas para a vida eterna,
            semeando no Espírito e fazendo o bem, especialmente entre a família
            da fé. Ele nos desafia a examinar nossas motivações, refletindo se
            estamos realmente seguindo o exemplo de Cristo ou nos deixando
            enganar por doutrinas que distorcem a verdade do Evangelho. Assim
            como Paulo, que se gloria na cruz de Cristo, somos chamados a passar
            pela cruz, crucificando nosso &quot;eu&quot; e nos tornando novas
            criaturas, livres do pecado e herdeiros da promessa da vida eterna.
            Que possamos viver em plena liberdade, não mais prisioneiros do
            legalismo ou das obras humanas, mas firmados na graça de Cristo, com
            uma vida transformada e direcionada pelo Espírito.
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
              <span className="font-semibold">Curso:</span> Carta aos Gálatas
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
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Teológica:</P>
            <P className="mt-0">Pr Leverson Eustáquio</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Textual:</P>
            <P className="mt-0">Rose Viana</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Rezende</P>
            <P className="mt-0">Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentarista:</P>
            <P className="mt-0">Elcivanni Santos</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
