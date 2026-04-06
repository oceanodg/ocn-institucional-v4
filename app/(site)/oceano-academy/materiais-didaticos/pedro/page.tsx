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

export default function CursoPedro() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">As Cartas de Pedro</H1>
          <P className="mt-0">
            Estudando a esperança viva, a santidade prática, o crescimento
            espiritual e a vigilância contra falsos mestres nas cartas do
            apóstolo Pedro.
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
                  <LinkSmall href="https://drive.google.com/file/d/1BOs7TpPH8oot4KZ1HUzc4ut1wXiGAmsh/view?usp=sharing">
                    <NotepadText className="size-4" />
                    Cartas de Pedro
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
              Lição 1 – Esperança Viva em Meio ao Sofrimento
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-viva-esperanca-pelo-novo-nascimento">
              1. A Viva Esperança Pelo Novo Nascimento
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-chamado-a-santidade-como-reflexo-da-esperanca">
              2. Chamado à Santidade Como Reflexo da Esperança
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-palavra-que-converte-e-sustenta-o-povo-de-deus">
              3. A Palavra Que Converte e Sustenta o Povo de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-identidade-do-povo-de-deus">
              4. A Identidade do Povo de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">
              Lição 2 – Como Peregrinos e Testemunhas no Mundo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-testemunho-e-conduta-exemplar-diante-do-mundo">
              1. Testemunho e Conduta Exemplar Diante do Mundo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-submissao-espiritual-no-trabalho-e-o-exemplo-de-cristo">
              2. A Submissão Espiritual no Trabalho e o Exemplo de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-santidade-e-testemunho-dentro-do-lar">
              3. Santidade e Testemunho Dentro do Lar
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-chamados-ao-bem">4. Chamados ao Bem</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-vigilancia-humildade-e-firmeza-na-fe">
              5. Vigilância, Humildade e Firmeza na Fé
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">
              Lição 3 – Crescimento Espiritual e Verdade Apostólica
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-suficiencia-da-graca">
              1. A Suficiência da Graça
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-escada-da-maturidade-espiritual">
              2. A Escada da Maturidade Espiritual (2Pe 1.5–7)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-o-perigo-da-estagnacao-e-da-cegueira-espiritual">
              3. O Perigo da Estagnação e da Cegueira Espiritual
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-autoridade-apostolica-como-fundamento-da-fe">
              4. A Autoridade Apostólica Como Fundamento da Fé
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-inspiracao-das-escrituras-como-luz-segura">
              5. A Inspiração das Escrituras Como Luz Segura (2Pe 1.19–21)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – Falsos Mestres, Juízo Final e a Esperança da Vinda de
              Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-para-comecar">Para Começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-os-falsos-mestres-e-sua-infiltracao-dissimulada">
              1. Os Falsos Mestres e Sua Infiltração Dissimulada
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-juizo-inevitavel-sobre-os-falsos-mestres">
              2. O Juízo Inevitável Sobre os Falsos Mestres
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-corrupcao-moral-e-espiritual-dos-falsos-mestres">
              3. A Corrupção Moral e Espiritual dos Falsos Mestres (2Pe 2.10–22)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-os-zombadores-e-a-negacao-da-vinda-de-cristo">
              4. Os Zombadores e a Negação da Vinda de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-dia-do-senhor-e-a-nova-criacao">
              5. O Dia do Senhor e a Nova Criação
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
        <H2 id="lesson-1">Lição 1 – Esperança Viva em Meio ao Sofrimento</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Mostrar que a identidade e a esperança do cristão, fundamentadas na
            obra de Cristo e no novo nascimento, sustentam sua santidade e
            firmeza em tempos de provação.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-para-comecar">Para Começar</H3>
          <P className="">
            A Primeira Carta de Pedro nasce em um contexto de dor real. Os
            cristãos da Ásia Menor viviam sob crescente perseguição. Não eram
            vistos como cidadãos confiáveis, mas como rebeldes, subversivos ou
            fanáticos. Muitos perderam bens, família e status. Outros
            enfrentaram violência física. Nesse cenário de tensão, Pedro escreve
            uma das cartas mais cheias de esperança do Novo Testamento.
          </P>
          <P className="">
            Pedro não escreve como teórico distante. Ele sabia o que era falhar
            e ser restaurado. O apóstolo que negou o Mestre agora é o pastor que
            consola o rebanho. E ele começa chamando os cristãos de
            &quot;eleitos peregrinos&quot; (1Pe 1.2, ARA). Há aqui um equilíbrio
            profundo: são escolhidos por Deus e estrangeiros no mundo. Essa
            tensão define toda a teologia da carta — segurança eterna e
            fragilidade presente, glória futura e sofrimento atual.
          </P>
          <P className="">
            Pedro não promete um evangelho confortável. Ele reconhece que os
            crentes &quot;são entristecidos, por um pouco de tempo, por várias
            provações&quot; (1Pe 1.6, ARA). Mas ele interpreta esse sofrimento à
            luz da eternidade. As provações não são sinal de abandono; são o
            forno onde Deus refina a fé. O sofrimento vivenciado pelo cristão
            não possui natureza punitiva, mas sim pedagógica; ele não representa
            um propósito final, mas constitui o processo através do qual Deus
            molda e forma o caráter.
          </P>
          <P className="">
            A carta também destaca a esperança viva. Não é uma esperança
            subjetiva, mas fundamentada na ressurreição de Cristo. A fé cristã
            não é mero consolo emocional — é certeza escatológica. O futuro já
            está decidido, e por isso é possível viver o presente com coragem.
            Em um mundo caótico, Pedro aponta para uma herança
            &quot;incorruptível, sem mácula e que não se pode murchar&quot; (1Pe
            1.4, ARA).
          </P>
          <P className="">
            Finalmente, Pedro apresenta a santidade não como moralismo, mas como
            fruto dessa nova identidade. Ser santo é viver como cidadão do céu
            enquanto ainda caminhamos na Terra. É carregar o perfume do Reino em
            meio à poeira das provações. É essa esperança firmada no Cristo
            ressurreto que inaugura a jornada da carta — e é essa esperança que
            sustenta toda a maturidade cristã.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-viva-esperanca-pelo-novo-nascimento">
            1. A viva esperança pelo novo nascimento
          </H3>
          <P className="">
            Pedro inicia exaltando: &quot;Bendito o Deus e Pai de nosso Senhor
            Jesus Cristo, que, segundo a sua muita misericórdia, nos regenerou
            para uma viva esperança, mediante a ressurreição de Jesus Cristo
            dentre os mortos&quot; (1Pe 1.3, ARA). A expressão &quot;viva
            esperança&quot; mostra que não se trata de otimismo humano, mas de
            vida espiritual real, surgida do novo nascimento. Não é esperança
            que morre com as circunstâncias; é esperança que se fortalece no
            fogo.
          </P>
          <P className="">
            Essa esperança está ancorada em três pilares: na regeneração — Deus
            nos fez nascer de novo; na ressurreição de Cristo — nossa garantia
            objetiva; e na herança futura — incorruptível e reservada nos céus
            (1Pe 1.4). Warren Wiersbe (1984) diz que &quot;A esperança do crente
            não está em algo, mas em Alguém. Cristo ressuscitou, logo a nossa
            esperança não pode morrer&quot;. Por isso Pedro afirma que essa
            esperança leva o crente a suportar provações sem perder a alegria
            (1Pe 1.6–8).
          </P>
          <P className="">
            A fé, quando provada, revela sua qualidade. Pedro compara esse
            processo ao ouro refinado no fogo (1Pe 1.7). Paulo reforça essa
            mesma verdade: &quot;A tribulação produz perseverança; a
            perseverança, experiência; e a experiência, esperança&quot; (Rm
            5.3–4, ARA). A fé testada não fragiliza, pelo contrário, fortalece.
          </P>
          <P className="">
            O cristão não vive de circunstâncias, mas de convicções. Em tempos
            de dor, a esperança viva nos lembra que Deus já decidiu nosso
            futuro, e isso transforma nosso presente.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-chamado-a-santidade-como-reflexo-da-esperanca">
            2. Chamado à santidade como reflexo da esperança
          </H3>
          <P className="">
            A consequência prática da esperança é a santidade. Pedro lembra aos
            seus leitores a advertência divina contidas em Levíticos 11 e 19:
            &quot;Sede santos, porque eu sou santo&quot; (1Pe 1.16, ARA). A
            santidade aqui não é isolacionismo religioso, mas separação ética em
            meio ao mundo. É viver como quem pertence a Deus.
          </P>
          <P className="">
            Pedro estabelece três fundamentos da santidade: a mente preparada —
            pensar com sobriedade (1Pe 1.13); a obediência ao Pai — abandonar a
            velha natureza (1Pe 1.14); e o fundamento da redenção — fomos
            comprados pelo sangue de Cristo (1Pe 1.18–19).
          </P>
          <P className="">
            A santidade emerge como uma resposta espontânea daquele que
            compreende profundamente o significado da cruz. Não consiste em
            tentar ganhar ou conquistar o amor divino através de méritos
            pessoais, mas sim em manifestar e espelhar a glória de Deus em suas
            atitudes e comportamentos. Tal santidade é sustentada pela esperança
            nas promessas futuras e se manifesta concretamente nas ações e
            escolhas da vida cotidiana.
          </P>
          <P className="">
            Pedro conecta santidade à eternidade: a obediência tem valor porque
            fomos resgatados por um preço eterno. Paulo ecoa isso: &quot;Fostes
            comprados por preço. Agora, glorificai a Deus no vosso corpo&quot;
            (1Co 6.20, ARA). A santidade é identidade antes de ser
            comportamento.
          </P>
          <P className="">
            Como podemos observar, a santidade não é um peso, mas um privilégio.
            É viver como filhos amados, expressando a beleza do caráter de Deus
            em um mundo que perdeu o senso de pureza.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-palavra-que-converte-e-sustenta-o-povo-de-deus">
            3. A palavra que converte e sustenta o povo de Deus
          </H3>
          <P className="">
            Nesta carta Pedro destaca que os cristãos foram regenerados
            &quot;não de semente corruptível, mas de incorruptível, mediante a
            palavra de Deus&quot; (1Pe 1.23, ARA). A Palavra viva é a fonte da
            vida espiritual e o alimento para o crescimento contínuo de todo
            cristão.
          </P>
          <P className="">
            Ele ordena: &quot;Desejai ardentemente, como crianças
            recém-nascidas, o genuíno leite espiritual&quot; (1Pe 2.2, ARA).
            Essa imagem revela dependência, desejo e crescimento. Assim como um
            bebê saudável não vive sem leite, um cristão não vive sem a Palavra.
            Então podemos concluir que a fé que não se alimenta da Palavra
            definha; a que se alimenta floresce.
          </P>
          <P className="">
            O Apóstolo ainda ensina que: &quot;A palavra do Senhor permanece
            para sempre&quot; (1Pe 1.25, ARA), ecoando Isaías 40.8. Em um mundo
            volátil, a Palavra é o único fundamento estável. Jesus afirmou:
            &quot;O céu e a terra passarão, mas as minhas palavras não
            passarão&quot; (Mt 24.35, ARA).
          </P>
          <P className="">
            Disso podemos concluir que o crescimento espiritual exige fome da
            Palavra. Quem não se alimenta enfraquece. Quem se alimenta avança. A
            maturidade não nasce do acaso, mas da comunhão diária com o Deus que
            fala.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-identidade-do-povo-de-deus">
            4. A identidade do povo de Deus
          </H3>
          <P className="">
            Neste ponto, Pedro oferece uma das descrições mais belas da igreja
            em toda a Bíblia. Ele afirma que Cristo é a Pedra Viva, rejeitada
            pelos homens, mas escolhida por Deus (1Pe 2.4). E os cristãos,
            unidos a Ele, tornam-se &quot;pedras vivas&quot;, formando uma
            &quot;casa espiritual&quot; e um &quot;sacerdócio santo&quot; (1Pe
            2.5, ARA).
          </P>
          <P className="">
            Pedro identifica a igreja com o Israel espiritual, aplicando aos
            cristãos títulos antes usados para o povo da aliança (1Pe 2.9): raça
            eleita, sacerdócio real, nação santa e povo de propriedade exclusiva
            de Deus. São títulos carregados de missão: &quot;para proclamar as
            virtudes daquele que vos chamou das trevas para a sua maravilhosa
            luz&quot; (1Pe 2.9, ARA). A identidade define o propósito.
          </P>
          <P className="">
            O apóstolo Pedro não busca redefinir ou anular Israel, mas sim
            estende a comunidade pactual para acolher tanto judeus quanto
            gentios que vivenciaram o processo de regeneração espiritual. Nessa
            perspectiva, a igreja não funciona como substituta de Israel, mas
            como instrumento que realiza sua missão universal de alcance a todos
            os povos.
          </P>
          <P className="">
            O Apóstolo Paulo confirma isso: &quot;Vós sois o corpo de Cristo e
            individualmente membros desse corpo&quot; (1Co 12.27, ARA). A igreja
            é o templo vivo onde Deus habita. Assim, a igreja não é plateia, mas
            sacerdócio; não é prédio, mas povo. Todo crente é ministro, todo
            crente é testemunha. Nossa identidade determina nossa missão.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            A primeira parte da carta de Pedro revela que a jornada cristã só
            pode ser compreendida quando vista pela lente da esperança viva.
            Pedro não oferece uma resposta simplista ao sofrimento; ele oferece
            uma nova maneira de interpretá-lo. O sofrimento, para o cristão, não
            é o colapso da fé, mas o laboratório onde a fé é provada, refinada e
            fortalecida. Assim como o ouro só revela sua pureza no fogo, a fé só
            revela sua autenticidade nas provações (1Pe 1.7). O sofrimento se
            torna, paradoxalmente, um sinal de que pertencemos ao Reino eterno.
          </P>
          <P className="">
            Ao mesmo tempo, Pedro nos lembra que a santidade não é um ideal
            inalcançável, mas um chamado possível porque nasce do evangelho. Não
            somos santos para sermos aceitos por Deus; somos santos porque já
            fomos aceitos. A santidade é fruto da identidade, não da
            performance. Quando Pedro diz: &quot;Sede santos, porque Eu sou
            santo&quot; (1Pe 1.16, ARA), ele nos chama a refletir o Pai que nos
            adotou. Assim, a santidade não é isolamento, mas testemunho; não é
            rigidez, mas beleza; não é presunção, mas gratidão.
          </P>
          <P className="">
            Além disso, Pedro destaca que o crescimento espiritual não é
            automático; é resposta à Palavra viva e permanente de Deus (1Pe
            1.23–25). Em um mundo que muda todos os dias, a Palavra permanece.
            Em um mundo que grita, a Palavra orienta. Em um mundo que desmancha
            identidades, a Palavra define quem somos. É a Escritura que gera
            vida, sustenta a fé e forma o caráter. Sem ela, o cristão definha;
            com ela, floresce.
          </P>
          <P className="">
            Por fim, Pedro nos conduz ao ápice da identidade cristã: somos
            pedras vivas, sacerdócio real, nação santa, povo exclusivo de Deus
            (1Pe 2.9). Não somos sobreviventes isolados, mas comunidade
            espiritual unida ao Cristo vivo. A igreja não é uma instituição
            fria; é um edifício espiritual habitado pelo próprio Deus. Recebemos
            novos títulos não para ostentação, mas para missão: proclamar as
            virtudes daquele que nos chamou das trevas para Sua maravilhosa luz.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – Como Peregrinos e Testemunhas no Mundo</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Mostrar como os cristãos são chamados a viver como peregrinos
            santos, testemunhas fiéis e servos de Cristo em todas as esferas da
            vida, refletindo a glória de Deus no mundo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-para-comecar">Para Começar</H3>
          <P className="">
            Se na primeira parte da carta Pedro tratou da identidade do cristão,
            agora ele se volta à conduta. Da teologia ele passa para a prática.
            É a lógica do evangelho: quem nós somos determina como devemos
            viver. Por isso, depois de afirmar que somos &quot;raça eleita,
            sacerdócio real, nação santa&quot; (1Pe 2.9, ARA), ele imediatamente
            diz: &quot;Exorto-vos a vos absterdes das paixões carnais, que fazem
            guerra contra a alma&quot; (1Pe 2.11, ARA).
          </P>
          <P className="">
            Pedro sabe que a igreja vive, mas não pertence ao mundo. Essa tensão
            é inevitável. Ser peregrino não significa ser alheio à sociedade;
            significa ser luz dentro dela. Ser estrangeiro não é ser isolado; é
            ser diferente. A vida cristã, então, não se expressa apenas nos
            cultos, mas em todas as esferas da vida.
          </P>
          <P className="">
            A segunda seção da carta é profundamente prática. O Apóstolo fala
            sobre submissão às autoridades, papel do trabalhador,
            responsabilidades do cônjuge, chamada ao serviço, relacionamento na
            igreja, vigilância espiritual, humildade e resistência ao diabo. Ele
            não trata de temas teóricos, mas de questões do dia a dia.
          </P>
          <P className="">
            O pano de fundo é claro: os cristãos estavam sendo observados. Seus
            inimigos procuravam qualquer motivo para acusá-los. Por isso, Pedro
            os chama a viver &quot;bom procedimento&quot; entre os gentios (1Pe
            2.12, ARA). O apóstolo Pedro exemplifica um cristianismo que se
            concretiza na prática cotidiana, revelando-se fundamentalmente
            através das experiências vividas e do testemunho de vida, em
            detrimento de argumentações teóricas ou discursos verbais.
          </P>
          <P className="">
            Aqui aprendemos que a santidade não é apenas um estado; é um estilo
            de vida. É a forma como tratamos o próximo, reagimos à injustiça,
            aceitamos a disciplina de Deus e servimos uns aos outros.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-testemunho-e-conduta-exemplar-diante-do-mundo">
            1. Testemunho e conduta exemplar diante do mundo
          </H3>
          <P className="">
            Pedro inicia com um apelo pastoral: &quot;exorto-vos... a vos
            absterdes das paixões carnais&quot; (1Pe 2.11, ARA). A guerra aqui
            não é externa, mas interna. As paixões carnais tentam sabotar a
            integridade do cristão. Paulo confirma a mesma batalha: &quot;a
            carne milita contra o Espírito&quot; (Gl 5.17, ARA). A santidade
            começa na alma antes de aparecer no comportamento.
          </P>
          <P className="">
            Em seguida, Pedro mostra que a conduta santa tem impacto
            evangelístico: &quot;tendo bom testemunho... para que... glorifiquem
            a Deus&quot; (1Pe 2.12, ARA). O comportamento do cristão pode
            silenciar acusações (1Pe 2.15) e até levar incrédulos ao
            arrependimento. A missão, portanto, passa pela coerência de vida.
          </P>
          <P className="">
            Logo em seguida fala de submissão às autoridades (1Pe 2.13–17). Não
            é submissão cega, mas graciosa. O cristão reconhece que a ordem
            civil existe por desígnio de Deus (Rm 13.1). A submissão funciona
            como testemunho ao revelar confiança na soberania divina, mesmo sob
            governos injustos.
          </P>
          <P className="">
            Assim, Pedro resume a ética cristã em quatro verbos (1Pe 2.17):
            honrar a todos; amar os irmãos; temer a Deus; respeitar o rei. Ou
            seja, dignidade para todos, afeição para a igreja, reverência a Deus
            e ordem social. Podemos então compreender que o nosso comportamento
            fala mais alto do que nossas palavras. O mundo não precisa apenas
            ouvir sobre Cristo — precisa vê-lo em nosso modo de viver,
            trabalhar, obedecer e reagir.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-submissao-espiritual-no-trabalho-e-o-exemplo-de-cristo">
            2. A submissão espiritual no trabalho e o exemplo de Cristo
          </H3>
          <P className="">
            A carta não se resume ao contexto social, mas Pedro passa também
            pelo contexto profissional. Os &quot;servos&quot; aqui (1Pe 2.18)
            eram trabalhadores domésticos, muitos deles tratados injustamente.
            Em vez de incitar rebelião violenta, o autor aponta para a submissão
            graciosa como instrumento de testemunho. Ele não legitima
            injustiças; ele revela um modo cristão de enfrentá-las.
          </P>
          <P className="">
            A chave é o exemplo de Cristo: &quot;Ele não cometeu pecado... sendo
            ultrajado, não revidava... mas entregava-se àquele que julga
            retamente&quot; (1Pe 2.22–23, ARA). Cristo é o modelo supremo de
            submissão redentora. Sua obediência silenciosa derrotou o mal. Isso
            ecoa Isaías 53.7: &quot;Foi oprimido e humilhado, mas não abriu a
            boca&quot; (ARA). Pedro conecta sofrimento, justiça e redenção em um
            só fio. W. Barclay comenta: &quot;Pedro não ensina servilismo, mas
            coragem moral. A submissão cristã é piedade ativa, não passividade
            covarde&quot; (1958).
          </P>
          <P className="">
            O foco da submissão é entregar a causa a Deus, o Justo Juiz (1Pe
            2.23). O cristão não ignora a injustiça; ele a enfrenta com fé. A
            vingança não é arma do Reino; a integridade, sim. Desta forma, no
            trabalho, o cristão testemunha mais pelo caráter do que pela
            reclamação. A reação madura ao tratamento injusto revela quem
            governa nosso coração: a carne ou Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-santidade-e-testemunho-dentro-do-lar">
            3. Santidade e testemunho dentro do lar
          </H3>
          <P className="">
            Agora o foco é na família. Em uma sociedade patriarcal, mulheres
            cristãs casadas com maridos incrédulos enfrentavam grandes desafios.
            Pedro não ordena submissão opressora, mas submissão evangelizadora —
            a conduta piedosa poderia ganhar o marido &quot;sem palavra
            alguma&quot; (1Pe 3.1, ARA).
          </P>
          <P className="">
            A beleza enfatizada aqui é interior: &quot;seu trajo não seja... mas
            o homem interior do coração&quot; (1Pe 3.3–4, ARA). A verdadeira
            elegância nasce da mansidão e tranquilidade do espírito. A beleza
            cristã fundamenta-se em princípios éticos antes de considerações
            estéticas; ela reside no caráter interior antes de se manifestar na
            aparência externa.
          </P>
          <P className="">
            Aos maridos, Pedro exige compreensão, honra e tratamento respeitoso
            (1Pe 3.7). Isso era revolucionário. Num mundo que via mulheres como
            inferiores, Pedro ordena que elas sejam tratadas como
            &quot;coerdeiras da graça&quot; (1Pe 3.7). Aqui está a semente do
            cristianismo que transforma estruturas sociais.
          </P>
          <P className="">
            Paulo ecoa o mesmo princípio: &quot;Maridos, amai vossas mulheres
            como Cristo amou a igreja&quot; (Ef 5.25, ARA). Fica claro que o
            testemunho mais poderoso não acontece no púlpito, mas no lar. Um
            casamento governado pelo evangelho é um sermão vivo, pregado todos
            os dias.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-chamados-ao-bem">4. Chamados ao bem</H3>
          <P className="">
            Agora o foco é ampliado, o Apóstolo amplia a visão: a comunidade
            inteira deve viver em harmonia, compaixão e humildade (1Pe 3.8).
            Essas virtudes são antídotos contra a hostilidade do mundo. Em vez
            de retribuir mal por mal, os cristãos devem abençoar (1Pe 3.9). É
            espiritualidade contracultural.
          </P>
          <P className="">
            O apóstolo Pedro cita o Salmo 34 para reforçar a ética da língua, da
            paz e da justiça (1Pe 3.10–12). Ele reconhece que fazer o bem
            provoca oposição, mas assegura que &quot;melhor é sofrer fazendo o
            bem&quot; (1Pe 3.17, ARA). O fundamento dessa postura é Cristo, que
            sofreu pelos justos e pelos injustos &quot;para conduzir-nos a
            Deus&quot; (1Pe 3.18, ARA).
          </P>
          <P className="">
            Podemos então concluir que sofrer por Cristo não é sinal de
            fraqueza, mas de identidade. Quando respondemos ao mal com o bem,
            mostramos quem realmente vive em nós.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-vigilancia-humildade-e-firmeza-na-fe">
            5. Vigilância, humildade e firmeza na fé
          </H3>
          <P className="">
            O ensino agora é voltado para a resistência espiritual. O cristão
            deve abandonar o pecado passado (1Pe 4.1–3) e viver para a vontade
            de Deus. Isso provoca estranhamento nos incrédulos (1Pe 4.4), mas a
            integridade vale o custo. Ele lembra que todos prestarão contas (1Pe
            4.5). O apóstolo destaca três atitudes essenciais: sobriedade para
            orar (1Pe 4.7), amor que cobre pecados (1Pe 4.8) e serviço com os
            dons recebidos (1Pe 4.10–11).
          </P>
          <P className="">
            No capítulo 5, a ênfase é liderança serva (1Pe 5.1–4), humildade
            coletiva (1Pe 5.5–7), vigilância contra o diabo (1Pe 5.8–9) e
            esperança no Deus de toda graça (1Pe 5.10). O apóstolo Pedro
            exemplifica a integração equilibrada de duas virtudes notavelmente
            raras: a solidez e a determinação ao enfrentar as forças inimigas,
            simultaneamente com a docilidade e a gentileza nas interações com as
            pessoas ao seu redor.
          </P>
          <P className="">
            Podemos então fixar que a vida cristã exige vigilância permanente. A
            humildade abre a porta da graça; a vigilância impede o ataque; a
            perseverança mantém o caminho. Firmar-se na fé é resistir até ver a
            glória final.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Nesta segunda parte da carta, Pedro nos mostra que a santidade não é
            uma teoria, mas um modo de viver. Ela se manifesta nas relações
            sociais, no trabalho, no casamento, na igreja e nas provações. A fé
            verdadeira se torna testemunho quando entra na rotina. Cada espaço
            da vida é lugar de missão: a rua, o escritório, a cozinha, o culto,
            a adversidade.
          </P>
          <P className="">
            A mensagem central é clara: o cristão é peregrino no mundo, mas
            testemunha para o mundo. Sua vida aponta para outro Reino, outra
            lógica, outro Senhor. O sofrimento não apaga esse testemunho; o
            intensifica. A submissão não diminui; exalta Cristo. A vigilância
            não amedronta; protege. A humildade não enfraquece; atrai graça.
          </P>
          <P className="">
            Assim, Pedro mostra que a maturidade espiritual não se mede pela
            ausência de problemas, mas pela presença de integridade. Não se mede
            por palavras, mas por reações. Não se mede por posição, mas por
            submissão a Cristo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">
          Lição 3 – Crescimento Espiritual e Verdade Apostólica
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Ensinar que o crescimento espiritual contínuo e a firmeza
            doutrinária são essenciais para resistir ao engano, fortalecer a fé
            e viver de modo digno o chamado de Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-para-comecar">Para Começar</H3>
          <P className="">
            A Segunda Carta de Pedro é marcada pela urgência. Diferente da
            primeira, escrita para consolar cristãos perseguidos, esta carta é
            escrita para alertar cristãos. O apóstolo sente que sua partida está
            próxima: &quot;Certo estou de que em breve deixarei o meu
            tabernáculo&quot; (2Pe 1.14, ARA). O tom pastoral torna-se o tom de
            um testamento espiritual. Pedro quer deixar a igreja preparada para
            viver sem ele.
          </P>
          <P className="">
            O problema central era o avanço de falsos mestres que seduziam,
            contaminavam e confundiam o povo de Deus. Eles negavam verdades
            fundamentais, desprezavam a moralidade e se infiltravam com sutil
            aparência de piedade. Pedro não responde com sentimentalismo, mas
            com fundamento: crescimento espiritual e firmeza na verdade
            revelada.
          </P>
          <P className="">
            Por isso, antes de denunciar os falsos mestres (cap. 2), ele
            fortalece os crentes. Antes de mostrar o erro, ele os enraíza na
            verdade. Um cristão firme na graça e na Palavra não é facilmente
            enganado.
          </P>
          <P className="">
            Pedro então apresenta uma das listas mais belas do Novo Testamento —
            a &quot;escada das virtudes&quot;: fé, virtude, conhecimento,
            domínio próprio, perseverança, piedade, fraternidade e amor (2Pe
            1.5–7). Cada degrau sustenta o próximo. Essa escada aponta para
            Cristo, que serve como nosso padrão a ser seguido, nosso alvo a ser
            perseguido e nosso modelo a ser imitado.
          </P>
          <P className="">
            Por fim, o autor afirma que sua mensagem é verdadeira porque é fruto
            de testemunho ocular e inspiração divina. Ele viu a glória de Cristo
            na transfiguração; ele ouviu a voz do Pai; ele confirma que a
            Escritura é &quot;inspirada pelo Espírito Santo&quot; (2Pe 1.21).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-suficiencia-da-graca">
            1. A suficiência da graça
          </H3>
          <P className="">
            No início da segunda carta, Pedro inicia declarando que a fé dos
            crentes é semelhante a dele (2Pe 1.1). Isso é extraordinário. O
            apóstolo não se coloca acima de ninguém. Ele diz que a fé do novo
            convertido é tão valiosa quanto a do apóstolo que andou com Jesus.
          </P>
          <P className="">
            O Apóstolo afirma que Deus nos concedeu &quot;tudo&quot; — não
            parte, não em parcelas, não sob condição — mas &quot;tudo o que diz
            respeito à vida e à piedade&quot; (2Pe 1.3, ARA). Isso significa que
            não precisamos de revelações secretas, acessos especiais ou
            misticismos. Tudo já foi dado em Cristo. Paulo declara o mesmo:
            &quot;Nele habita corporalmente toda a plenitude da divindade&quot;
            (Cl 2.9, ARA).
          </P>
          <P className="">
            Pedro explica como recebemos esse &quot;tudo&quot;: pela graça, pelo
            conhecimento de Cristo e por meio das promessas preciosas e
            grandíssimas (2Pe 1.4). Essas promessas nos fazem
            &quot;co-participantes da natureza divina&quot; — não no sentido de
            nos tornarmos deuses, mas de sermos transformados pelo caráter santo
            do Senhor (Ef 4.24). Participar da natureza divina significa ser
            transformado moralmente pela ação e influência do Espírito Santo.
          </P>
          <P className="">
            O cristão não vive carente de poder. Já recebemos tudo. A maturidade
            vem de buscar o conhecimento de Cristo que já nos foi concedido.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-escada-da-maturidade-espiritual">
            2. A escada da maturidade espiritual (2Pe 1.5–7)
          </H3>
          <P className="">
            Aqui Pedro une duas verdades fundamentais: Deus concede a graça e o
            crente deve se esforçar. Por isso ele diz: &quot;Empenhai-vos por
            acrescentar à vossa fé...&quot; (2Pe 1.5, ARA). A fé não é estática;
            é dinâmica. O novo nascimento é o início, não o fim.
          </P>
          <P className="">
            Pedro então descreve a famosa &quot;escada das virtudes&quot;: Fé —
            o fundamento (Hb 11.6); Virtude — excelência moral, coerência (Fp
            4.8); Conhecimento — discernimento espiritual, sabedoria bíblica;
            Domínio próprio — domínio dos impulsos, fruto do Espírito (Gl 5.23);
            Perseverança — firmeza constante, resistência nas provações (Rm
            5.4); Piedade — vida devota, relação íntima com Deus; Fraternidade —
            amor entre irmãos; e Amor ágape — amor sacrificial, que reflete o
            coração de Cristo.
          </P>
          <P className="">
            Cada virtude sustenta a outra. Barclay diz que &quot;Essa escada
            revela o processo pelo qual a fé se torna madura e efetiva. A vida
            cristã não é improviso; é construção diária&quot; (1958).
          </P>
          <P className="">
            O discípulo de Jesus afirma que se essas virtudes &quot;existirem e
            aumentarem&quot;, o crente não será inútil nem infrutífero (2Pe
            1.8). Em outras palavras: crescer é a única forma de não estagnar.
          </P>
          <P className="">
            O Apóstolo Paulo também confirma: &quot;Transformai-vos pela
            renovação da vossa mente&quot; (Rm 12.2, ARA). Crescimento é chamado
            bíblico, não opcional. Por isso a maturidade não é destino
            automático — é construção intencional. Todo dia, cada decisão, cada
            renúncia é um degrau na escada que nos aproxima do caráter de
            Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-o-perigo-da-estagnacao-e-da-cegueira-espiritual">
            3. O perigo da estagnação e da cegueira espiritual
          </H3>
          <P className="">
            Sobre a estagnação na vida do cristão Pedro é realista: quem não
            cresce se torna cego (2Pe 1.9). Não cego físico, mas cego
            espiritual. Essa cegueira tem três sintomas: a perda do
            discernimento; esquece-se da purificação dos pecados; e retrocede
            moralmente.
          </P>
          <P className="">
            A estagnação espiritual é perigosa porque cria vulnerabilidade ao
            engano. O cristão que não cresce se torna presa fácil para falsos
            mestres. Uma fé que se mantém parada, sem movimento ou
            desenvolvimento, expõe-se a graves riscos espirituais. O cristão que
            negligencia o progresso espiritual e permanece estacionário em sua
            jornada de fé inevitavelmente experimentará um colapso espiritual e
            moral.
          </P>
          <P className="">
            Por isso Pedro diz: &quot;Procurai com diligência confirmar a vossa
            vocação e eleição&quot; (2Pe 1.10, ARA). Ele não diz para produzir a
            salvação, mas para confirmar pela vida o que Deus fez na alma. Obras
            não salvam, mas confirmam. A promessa é gloriosa: quem cresce não
            tropeça (2Pe 1.10) e terá ampla entrada no Reino eterno (2Pe 1.11).
            A expressão &quot;ampla entrada&quot; indica recepção honrosa — como
            atletas que retornam triunfantes para casa (1Co 9.24–25).
          </P>
          <P className="">
            Se há algo que o cristão não pode aceitar é a estagnação. Crescer na
            fé não é luxo espiritual; é sobrevivência. Quem não cresce, adoece.
            Quem cresce, floresce.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-autoridade-apostolica-como-fundamento-da-fe">
            4. A autoridade apostólica como fundamento da fé
          </H3>
          <P className="">
            Entre os versículos 12 a 18, do capítulo 1, da segunda carta, o
            Apóstolo reforça a base da mensagem: o testemunho apostólico é
            verdadeiro. Ele não fala por rumores, tradições ou mitos. Ele fala
            como testemunha ocular da glória de Cristo: &quot;fomos testemunhas
            oculares da sua majestade&quot; (2Pe 1.16, ARA).
          </P>
          <P className="">
            Ele recorda a transfiguração (Mt 17.1–8): viu a glória, ouviu a voz
            do Pai e presenciou a majestade de Cristo. Pedro não baseia sua fé
            em emoções, mas em fatos. Ele desmente os falsos mestres que
            alegavam visões e revelações místicas. A revelação verdadeira não é
            fruto de imaginação humana, mas da intervenção de Deus.
          </P>
          <P className="">
            O teólogo Stott (1996) observa que &quot;a fé cristã se apoia em
            acontecimentos históricos e testemunho confiável, não em mitos
            religiosos&quot;.
          </P>
          <P className="">
            Assim, Pedro reforça que o evangelho não é invenção; é verdade
            revelada. Isso, em um mundo obcecado por experiências subjetivas, o
            cristão precisa se firmar no testemunho apostólico. A fé não repousa
            em sentimentos, mas em fatos: Cristo viveu, morreu, ressuscitou e
            será revelado em glória.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-inspiracao-das-escrituras-como-luz-segura">
            5. A inspiração das Escrituras como luz segura (2Pe 1.19–21)
          </H3>
          <P className="">
            A conclusão do primeiro capítulo é uma das declarações mais
            poderosas da Bíblia sobre si mesma: &quot;nenhuma profecia da
            Escritura provém de interpretação particular&quot; (2Pe 1.20, ARA).
          </P>
          <P className="">
            Isso significa que a Escritura não nasceu da mente humana. Ela é
            obra do Espírito Santo. Pedro afirma: &quot;homens santos falaram da
            parte de Deus, movidos pelo Espírito Santo&quot; (2Pe 1.21, ARA).
          </P>
          <P className="">
            A imagem aqui é a de vento enchendo as velas de um navio. Os autores
            humanos escreveram, mas quem os empurrou foi o Espírito. Paulo
            comunga do mesmo entendimento, dizendo que &quot;Toda Escritura é
            inspirada por Deus&quot; (2Tm 3.16, ARA). A Bíblia é o livro através
            do qual Deus se comunica de forma viva e dinâmica. Sua inspiração
            não elimina ou desconsidera a contribuição do autor humano, mas
            assegura e garante a verdade e a autoridade divinas.
          </P>
          <P className="">
            Por isso Pedro diz que a Palavra é &quot;como a luz que brilha em
            lugar escuro&quot; (2Pe 1.19). Sem essa luz, o cristão tropeça. Com
            essa luz, caminha seguro.
          </P>
          <P className="">
            Em dias de confusão doutrinária e opiniões humanas, a única
            segurança do cristão é a Escritura. Ela é lâmpada, é alimento, é
            âncora. Onde a Palavra é negligenciada, o engano triunfa; onde ela é
            abraçada, a verdade floresce.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            O primeiro capítulo da segunda carta de Pedro é um chamado urgente
            ao crescimento espiritual e à firmeza doutrinária. Pedro sabe que
            uma fé infantil não resistirá aos vendavais espirituais. Por isso,
            ele inicia lembrando que Deus já nos deu tudo o que precisamos para
            viver em santidade. A graça é suficiente, mas não dispensa o
            esforço, pois ela inspira dedicação.
          </P>
          <P className="">
            A escada das virtudes mostra que maturidade espiritual não é
            acidente, mas construção intencional. Deus fornece os recursos; nós
            desenvolvemos o caráter. E quanto mais crescemos, mais discernimento
            temos, menos tropeçamos e mais útil nos tornamos.
          </P>
          <P className="">
            Pedro alerta que a estagnação nos torna cegos. Mas o crescimento
            confirma nossa vocação, fortalece nossa esperança e nos prepara para
            uma entrada triunfante no Reino eterno.
          </P>
          <P className="">
            Ele ainda nos lembra que nossa fé é histórica, sólida, confiável.
            Ela repousa no testemunho apostólico e na Escritura inspirada. Não
            seguimos fábulas ou mitos; seguimos a luz que brilha em meio às
            trevas.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">
          Lição 4 – Falsos Mestres, Juízo Final e a Esperança da Vinda de Cristo
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Expor a gravidade do engano espiritual promovido pelos falsos
            mestres, revelar o juízo inevitável de Deus sobre eles e firmar o
            cristão na esperança da segunda vinda de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-para-comecar">Para Começar</H3>
          <P className="">
            A última parte da Segunda Carta de Pedro é um alerta vermelho
            piscando. Depois de fundamentar os crentes na verdade (cap. 1), o
            apóstolo agora expõe o engano com detalhes (cap. 2). Ele não suaviza
            a mensagem e não usa linguagem diplomática. Ele fala como um pastor
            que sabe que suas ovelhas estão cercadas por lobos.
          </P>
          <P className="">
            O Apóstolo Pedro sabe que falsos mestres não chegam com placas
            dizendo &quot;Cuidado, sou falso&quot;. Eles se infiltram. Falam
            mansamente. Parecem espirituais. Usam vocabulário cristão, mas, como
            ele diz, &quot;introduzirão dissimuladamente heresias
            destruidoras&quot; (2Pe 2.1, ARA).
          </P>
          <P className="">
            Por isso, esta lição é direta: o perigo é real, o juízo é certo, e a
            esperança dos crentes permanece inabalável. Pedro não denuncia para
            gerar medo, mas para gerar vigilância. Ele quer crentes
            espiritualmente lúcidos, não ingênuos. Ele sabe que a igreja que não
            discerne será devorada pela confusão teológica e moral.
          </P>
          <P className="">
            Além disso, no capítulo 3, Pedro volta-se para a esperança mais
            poderosa da fé cristã: a segunda vinda de Cristo. Os falsos mestres
            negavam esse evento — e, ao fazer isso, libertavam-se de qualquer
            senso de juízo ou moralidade. Se não há retorno de Cristo, não há
            prestação de contas. Se não há prestação de contas, qualquer vida
            serve.
          </P>
          <P className="">
            Assim, esta lição une três temas inseparáveis: o engano dos falsos
            mestres, o juízo final e a esperança da nova criação.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-os-falsos-mestres-e-sua-infiltracao-dissimulada">
            1. Os falsos mestres e sua infiltração dissimulada
          </H3>
          <P className="">
            Pedro começa o capítulo dois afirmando que, assim como no Antigo
            Testamento surgiram falsos profetas, agora surgem falsos mestres
            dentro da comunidade cristã (2Pe 2.1). Ele não fala de ateus ou
            perseguidores externos, mas de líderes religiosos que se dizem
            cristãos.
          </P>
          <P className="">
            Esses falsos mestres introduzem heresias destruidoras — trazendo
            ensinos que parecem bíblicos, mas corrompem a verdade; negam o
            Senhor — não necessariamente negando verbalmente, mas negando pela
            vida e doutrina; e seduzem muitos — o engano costuma ser popular
            (2Pe 2.2).
          </P>
          <P className="">
            Pedro afirma que eles exploram o povo &quot;com palavras
            fictícias&quot; (2Pe 2.3). A palavra grega aqui, <em>plastos</em>,
            dá origem à nossa palavra &quot;plástico&quot; — algo moldado,
            manipulado. Eles moldam discursos a fim de conquistar seguidores e
            obter vantagens. Jesus já havia advertido: &quot;Falsos profetas...
            enganarão a muitos&quot; (Mt 24.11, ARA). Paulo também: &quot;o
            próprio Satanás se transforma em anjo de luz&quot; (2Co 11.14, ARA).
          </P>
          <P className="">
            Engano espiritual não se detecta por aparência, emoção ou
            popularidade, mas pela fidelidade à Escritura. O cristão deve
            avaliar tudo pela Palavra, não pela voz da cultura, nem pelos
            números, nem pelo carisma de quem fala.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-juizo-inevitavel-sobre-os-falsos-mestres">
            2. O juízo inevitável sobre os falsos mestres
          </H3>
          <P className="">
            Entre os versículos 4 a 10, do capítulo 2, Pedro deixa claro que a
            paciência de Deus não significa impunidade. O juízo é certo, e ele
            usa três exemplos históricos para provar isso: os anjos caídos —
            Deus não poupou os anjos que pecaram, mas os entregou à escuridão
            (2Pe 2.4; Judas 6); o mundo antigo e o dilúvio — Deus preservou Noé,
            mas julgou o mundo ímpio (2Pe 2.5; Gn 6–9); e Sodoma e Gomorra —
            Deus destruiu as cidades corruptas, mas livrou Ló (2Pe 2.6–7; Gn
            19).
          </P>
          <P className="">
            A mensagem é clara: Deus livra os piedosos, mas reserva juízo para
            os ímpios. Os falsos mestres não são apenas pessoas equivocadas. São
            agentes de corrupção moral. Pedro os descreve como
            &quot;atrevidos&quot;, &quot;insolentes&quot;,
            &quot;irracionais&quot; e &quot;autodestrutivos&quot;. Não se
            submetem à autoridade de Deus, desprezam a santidade e espalham
            imoralidade.
          </P>
          <P className="">
            O fim deles é certo: &quot;Sobre eles não tarda o juízo&quot; (2Pe
            2.3, ARA). Paulo faz a mesma advertência: &quot;Deus não se deixa
            escarnecer&quot; (Gl 6.7, ARA).
          </P>
          <P className="">
            O cristão não precisa temer o avanço do mal. Deus não perde o
            controle. O juízo de Deus é certeiro, a justiça de Deus é perfeita e
            nada passa despercebido aos seus olhos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-corrupcao-moral-e-espiritual-dos-falsos-mestres">
            3. A corrupção moral e espiritual dos falsos mestres (2Pe 2.10–22)
          </H3>
          <P className="">
            Agora (v. 10-22) Pedro descreve o comportamento desses falsos
            líderes com detalhes. Eles são sensuais (2Pe 2.10), arrogantes (2Pe
            2.10), escravos do pecado (2Pe 2.19), cheios de adultério (2Pe
            2.14), avarentos (2Pe 2.3) e sedutores de almas instáveis (2Pe
            2.14).
          </P>
          <P className="">
            Eles prometem liberdade, mas são escravos. Dizem conhecer a verdade,
            mas vivem na mentira. Conhecem o vocabulário da fé, mas não possuem
            o caráter de Cristo.
          </P>
          <P className="">
            A frase mais forte está no final: &quot;O cão voltou ao seu próprio
            vômito&quot; e &quot;A porca lavada voltou a revolver-se no
            lamaçal&quot; (2Pe 2.22, ARA). Ou seja: um falso mestre pode até
            parecer piedoso, pode até pregar bem, mas sem uma transformação
            genuína, ele sempre voltará à corrupção. Para Judas eles são
            &quot;nuvens sem água&quot;, &quot;árvores sem frutos&quot; (v.12).
          </P>
          <P className="">
            A igreja deve avaliar não apenas a teologia de um líder, mas seu
            caráter. Curriculum não substitui santidade. Carisma não substitui
            piedade. Deus zela mais pelo caráter do que pelo talento.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-os-zombadores-e-a-negacao-da-vinda-de-cristo">
            4. Os zombadores e a negação da vinda de Cristo
          </H3>
          <P className="">
            Pedro agora trata da negação da volta de Cristo. Os falsos mestres
            zombavam: &quot;Onde está a promessa da sua vinda?&quot; (2Pe 3.4,
            ARA).
          </P>
          <P className="">
            A lógica deles era simples: nada muda; tudo continua igual; se Deus
            não interveio até agora, não intervirá. Isso é naturalismo puro,
            filosofia sem transcendência. Pedro responde de três maneiras: eles
            ignoram a criação — o mundo não surgiu sozinho (Gn 1.1), Deus criou;
            ignoram o dilúvio — o mundo já foi destruído uma vez como juízo (Gn
            6–9); e ignoram o propósito de Deus — o céu e a terra atuais
            &quot;estão reservados para o fogo&quot; (2Pe 3.7).
          </P>
          <P className="">
            No mesmo sentido Paulo afirma que &quot;Deus ordenou os tempos e
            épocas&quot; (At 17.26, ARA). Assim, o mundo moderno, como esses
            zombadores, vive negando o sobrenatural, mas o cristão sabe que a
            história caminha para um final definido por Deus. Para o servo fiel,
            o fim não será caos — será Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-dia-do-senhor-e-a-nova-criacao">
            5. O Dia do Senhor e a nova criação
          </H3>
          <P className="">
            Pedro fecha com uma visão grandiosa. Deus não atrasa. Ele deseja que
            homens se arrependam (2Pe 3.9).
          </P>
          <P className="">
            Ainda, esse dia virá de repente: &quot;O Dia do Senhor virá como
            ladrão&quot; (2Pe 3.10). Três eventos ocorrerão: os céus passarão;
            os elementos se desfarão; e a terra será queimada. O universo atual
            será purificado. E então se cumprirá a promessa: &quot;novos céus e
            nova terra, nos quais habita a justiça&quot; (2Pe 3.13, ARA).
          </P>
          <P className="">
            Pedro conclui com três mandamentos: vivam em santidade e piedade
            (2Pe 3.11) — a iminência do retorno de Cristo reorienta toda a vida
            do crente; aguardem e apressem a vinda de Cristo (2Pe 3.12) — a vida
            santa &quot;apressa&quot; a vinda porque coopera com o plano de
            Deus; e permaneçam firmes na graça (2Pe 3.17–18) — não se deixem
            levar pelos erros.
          </P>
          <P className="">
            Como fechamento da carta afirma: &quot;Crescei na graça e no
            conhecimento de nosso Senhor e Salvador Jesus Cristo&quot; (2Pe
            3.18). Esse é o mesmo Pedro que, anos antes, era impetuoso,
            instável, inseguro. Agora, maduro pelo sofrimento, ele encerra sua
            carta com aquilo que aprendeu na prática: crescimento é para a vida
            toda.
          </P>
          <P className="">
            O cristão vive entre o &quot;já&quot; e o &quot;ainda não&quot;. Já
            fomos redimidos; ainda aguardamos a consumação. E essa esperança
            deve moldar cada dia: santidade no presente, vigilância no caminho e
            olhos sempre fixos na eternidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            Os capítulos finais de 2 Pedro são um alerta e um consolo. Um
            alerta, porque o engano espiritual é real, atraente e destrutivo.
            Falsos mestres não são apenas adversários intelectuais, mas ameaças
            à santidade e à saúde da igreja. Pedro denuncia sua corrupção, sua
            arrogância, sua sensualidade e sua escravidão ao pecado. Ele mostra
            que o juízo é certo — ninguém engana Deus.
          </P>
          <P className="">
            Entretanto também é um consolo, porque, apesar do avanço da
            impiedade, Deus preserva os seus. Ele salvou Noé, salvou Ló e
            salvará o seu povo hoje. Ele governa a história e conduz todas as
            coisas para o grande dia de Cristo. A segunda vinda não é mito; é
            certeza. A nova criação não é sonho; é promessa. A história não
            caminha para o caos; caminha para Cristo.
          </P>
          <P className="">
            Pedro encerra com o remédio divino para tempos perigosos: santidade,
            vigilância e crescimento contínuo na graça e na verdade. Onde há
            crescimento, há firmeza. Onde há firmeza, há discernimento. Onde há
            discernimento, o engano perde força.
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
              <span className="font-semibold">Curso:</span> As cartas de Pedro
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
            <P className="mt-0">Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Textual:</P>
            <P className="mt-0">Wagner Monteiro</P>
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
