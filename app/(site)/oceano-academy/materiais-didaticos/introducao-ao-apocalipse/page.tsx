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
import { FileImage, NotepadText, SquarePlay, Workflow } from "lucide-react";

export default function IntroducaoApocalipsePage() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Introdução ao Apocalipse</H1>
          <P className="mt-0">Uma visão do futuro da humanidade.</P>
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
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <LinkSmall href="https://drive.google.com/file/d/1jqytl-aS6bHqZNnwTsocs463itks3Sso/view?usp=sharing">
                    <NotepadText className="size-4" />
                    Apostila
                  </LinkSmall>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Infográfico
              </TableCell>
              <TableCell>
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <LinkSmall href="https://drive.google.com/file/d/1eVMetjoFVPauDWO9aK4hbEvCWDcQ3g81/view?usp=sharing">
                    <FileImage className="size-4" />
                    Infográfico
                  </LinkSmall>
                </div>
              </TableCell>
            </TableRow>
            {/* <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Mapas Mentais
              </TableCell>
              <TableCell>
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <LinkSmall href="https://drive.google.com/file/d/1_D_1MZ0XBNg-jGyhngs9BXwHilNKhgrd/view?usp=drive_link">
                    <Workflow className="size-4" />
                    Lição 1
                  </LinkSmall>
                </div>
              </TableCell>
            </TableRow> */}
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">Vídeo</TableCell>
              <TableCell>
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <LinkSmall href="https://youtu.be/24rkpLp0GX8">
                    <SquarePlay className="size-4" />
                    Vídeo
                  </LinkSmall>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Palavras-Cruzadas
              </TableCell>
              <TableCell>
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <LinkSmall href="https://drive.google.com/file/d/1KKl3Msd4AvXjGcg6I3J4QqOH3Bx7Zz00/view?usp=drive_link">
                    <NotepadText className="size-4" />
                    Palavras-Cruzadas
                  </LinkSmall>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Caça-Palavras
              </TableCell>
              <TableCell>
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <LinkSmall href="https://drive.google.com/file/d/1nwJ5AwAr35gjn3IyPvrt6uQ0t9KQU53q/view?usp=sharing">
                    <NotepadText className="size-4" />
                    Caça-Palavras
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1BHzKxCgtH8s0oiZ09a_hgS2yQYdf0kaO/view?usp=sharing">
                    <NotepadText className="size-4" />
                    Respostas
                  </LinkSmall>
                </div>
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
              Lição 1 – Fundamentos bíblicos para estudar escatologia
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-introduction">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#topico-1-autoridade-da-palavra-e-metodo-fiel">
              Tópico 1: Autoridade da Palavra e método fiel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#topico-2-generos-profetico-e-apocaliptico">
              Tópico 2: Gêneros profético e apocalíptico
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#topico-3-grandes-temas-escatologicos-nas-escrituras">
              Tópico 3: Grandes temas escatológicos nas Escrituras
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#topico-4-perigos-a-evitar">Tópico 4: Perigos a evitar</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-2">
              Lição 2 – As quatro escolas clássicas de interpretação do
              Apocalipse
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-topico-1-preterismo-especialmente-o-parcial">
              Tópico 1: Preterismo (especialmente o parcial)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-topico-2-historicismo">Tópico 2: Historicismo</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-topico-3-futurismo">Tópico 3: Futurismo</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-topico-4-idealismo-ou-leitura-simbolica">
              Tópico 4: Idealismo (ou leitura simbólica)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-topico-5-avaliacao-sob-nossa-perspectiva">
              Tópico 5: Avaliação sob nossa perspectiva
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">
              Lição 3 – Correntes milenistas e perspectivas sobre Tribulação e
              Arrebatamento
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-topico-1-amilenismo">Tópico 1: Amilenismo</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-topico-2-pos-milenismo">
              Tópico 2: Pós-milenismo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-topico-3-pre-milenismo-historico">
              Tópico 3: Pré-milenismo histórico
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-topico-4-dispensacionalismo-geralmente-pre-milenista">
              Tópico 4: Dispensacionalismo geralmente pré-milenista
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-topico-5-arrebatamento-e-tribulacao">
              Tópico 5: Arrebatamento e Tribulação
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – Esperança que transforma: implicações pastorais e
              discernimento escatológico
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-topico-1-sinais-dos-tempos-e-vigilancia-confiante">
              Tópico 1: Sinais dos tempos e vigilância confiante
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-topico-2-israel-as-nacoes-e-a-igreja">
              Tópico 2: Israel, as nações e a Igreja
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-topico-3-santidade-esperanca-e-missao-no-poder-do-espirito">
              Tópico 3: Santidade, esperança e missão no poder do Espírito
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-topico-4-criterios-de-avaliacao-doutrinaria">
              Tópico 4: Critérios de avaliação doutrinária
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#editorial">Editorial</a>
          </SummaryLi>
          {/* <SummaryLi>
            <a href="#materials-didactic">Materiais Didáticos</a>
          </SummaryLi> */}
        </UL>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-1">
          Lição 1 – Fundamentos bíblicos para estudar escatologia
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar os fundamentos bíblicos e hermenêuticos da escatologia,
            afirmando a autoridade das Escrituras e a centralidade de Cristo,
            para ler profecia/apocalíptica com sobriedade e aplicar essa
            esperança à santidade e à missão da igreja.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-introduction">Introdução</H3>
          <P className="">
            A escatologia, à luz das Escrituras, é antes de tudo a linguagem da
            esperança bendita. Não se trata de curiosidade religiosa ou de um
            mapa secreto para decifrar datas, mas do anúncio seguro de que o
            Senhor Jesus virá em glória, consumará Sua obra e enxugará dos olhos
            toda lágrima. Quando nos aproximamos desse campo, fazemos isso com
            reverência, porque “toda a Escritura é inspirada por Deus” (2Tm 3.
            16 – 17) e, portanto, suficiente para orientar nossa fé e nossa
            prática. É com essa convicção que abrimos esta primeira lição,
            ancorados na Palavra, com Cristo no centro e o coração disposto a
            aprender.
          </P>
          <P className="">
            Também afirmamos nossa identidade cristã, que não negocia a
            autoridade e a clareza da revelação bíblica. O Espírito Santo, que
            inspirou os profetas e apóstolos, é o mesmo que ilumina o
            entendimento da igreja hoje. Assim, ler a Bíblia é um ato de fé
            obediente e um exercício de santidade, pois aquilo que Deus revelou
            sobre o fim molda a forma como vivemos no presente. Se a esperança
            futura é real, ela precisa transbordar em perseverança, santidade e
            missão.
          </P>
          <P className="">
            Por fim, estabelecemos um compromisso pedagógico: nesta apostila,
            tratamos de fundamentos, linhas de interpretação e implicações
            práticas. O estudo pormenorizado de Apocalipse ficará para o próximo
            módulo. Aqui, queremos preparar o terreno, ordenar as categorias e
            alinhar o coração da igreja com a verdade que sustenta a nossa
            esperança.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="topico-1-autoridade-da-palavra-e-metodo-fiel" className="">
            Tópico 1: Autoridade da Palavra e método fiel
          </H3>
          <P className="">
            A base é simples e inegociável: a Bíblia é a Palavra de Deus,
            inspirada, inerrante e suficiente. Isso significa que não precisamos
            de “códigos secretos” ou de chaves externas à própria Escritura para
            compreendê-la. Ao contrário, partimos do princípio de que a Bíblia
            interpreta a Bíblia; passagens mais claras iluminam as mais
            difíceis, e o conjunto do cânon resguarda a leitura de qualquer
            texto isolado. Essa postura protege o estudante tanto do
            reducionismo quanto da fantasia, mantendo-o dentro das cercas
            seguras da revelação.
          </P>
          <P className="">
            Por essa razão, adotamos o método histórico-gramatical, pois
            buscamos o sentido que o texto teve para seus primeiros leitores,
            atentos ao vocabulário, à gramática, ao contexto histórico e à
            unidade teológica do cânon. Isso não empobrece a leitura; pelo
            contrário, dá profundidade e realismo, porque lida com a linguagem
            como Deus a quis usar, no tempo e no espaço. Ler assim exige
            humildade diante do texto e disposição de submeter nossas
            expectativas ao que a Palavra, de fato, diz.
          </P>
          <P className="">
            Ao mesmo tempo, reconhecemos que a Escritura utiliza variadas formas
            de expressão. Há metáforas, hipérboles, paralelismos e símbolos, e
            todos eles apontam para verdades concretas. O método fiel não
            confunde símbolo com irrealidade, nem transforma poesia em
            cronograma. Ele se deixa guiar pelo gênero literário, pelas
            indicações do próprio autor sagrado e pelo testemunho mais amplo da
            Bíblia. Em suma, não agredimos o texto para que ele confirme nossos
            esquemas; dobramos nossos esquemas ao poder e à beleza do texto
            bíblico.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="topico-2-generos-profetico-e-apocaliptico">
            Tópico 2: Gêneros profético e apocalíptico
          </H3>
          <P className="">
            A profecia bíblica, desde os patriarcas e profetas, revela a vontade
            de Deus na história e aponta para o futuro de modo que convoque o
            povo à fidelidade. Isaías, Jeremias e Ezequiel falam tanto de juízos
            iminentes quanto de restauração vindoura, sempre chamando à aliança,
            ao arrependimento, à santidade e à confiança no Senhor. A profecia,
            portanto, não é mero prognóstico; é proclamação divina que
            interpreta o presente à luz do caráter de Deus e do Seu propósito
            eterno.
          </P>
          <P className="">
            Já a literatura apocalíptica, presente em livros como Daniel,
            Zacarias, Apocalipse, dentre outros, recorre a imagens vívidas,
            números simbólicos e contrastes dramáticos para revelar a soberania
            de Deus em meio à guerra espiritual que atravessa a história. O véu
            é levantado para que a igreja veja que o trono de Deus permanece
            firme, ainda que os impérios se ergam e caiam. Essa forma literária
            não inventa fantasias: ela condensa, em símbolos potentes,
            realidades espirituais e históricas que excedem a linguagem comum.
          </P>
          <P className="">
            Compreender esses gêneros nos livra de dois extremos igualmente
            nocivos. De um lado, a leitura fria que tenta reduzir toda visão a
            um esquema cronológico rígido, perdendo a força pastoral e
            espiritual do texto. De outro, a alegorização que dissolve o
            conteúdo em ideias vagas e atemporais, esvaziando promessas e juízos
            que a Bíblia anuncia como reais. Entre esses extremos, seguimos com
            sobriedade: símbolos servem a verdades sólidas, e o Deus que fala em
            imagens cumpre, na história e na consumação, o que prometeu.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="topico-3-grandes-temas-escatologicos-nas-escrituras">
            Tópico 3: Grandes temas escatológicos nas Escrituras
          </H3>
          <P className="">
            Toda a Bíblia respira escatologia porque toda a Bíblia aponta para
            Cristo e para o Reino de Deus. Desde Gênesis, com a promessa de que
            a semente da mulher esmagaria a cabeça da serpente (protoevangelho),
            até Apocalipse, com a visão dos novos céus e nova terra, a narrativa
            sagrada nos conduz à consumação. O Reino está “já” presente na obra
            de Cristo e na ação do Espírito, e “ainda não” plenamente consumado
            até que o Senhor retorne em glória. Essa tensão nos educa: vivemos
            entre a inauguração e a plenitude, cheios de esperança e vigilância.
          </P>
          <P className="">
            Nesse horizonte se destacam a vinda de Cristo, a ressurreição dos
            mortos, o juízo final e a renovação de todas as coisas. A segunda
            vinda não é metáfora de tempos melhores, é evento real e glorioso. A
            ressurreição não é apenas um consolo subjetivo, é a vitória da vida
            sobre a morte. O juízo não é um recurso retórico, é a afirmação
            santa de que Deus fará justiça. E a nova criação não é utopia, é o
            destino prometido aos remidos, nos quais Deus habitará para sempre.
            Essas verdades sustentam a igreja nas lutas do presente.
          </P>
          <P className="">
            Por isso, a escatologia bíblica consola e exorta. Consola porque nos
            lembra que nossos sofrimentos não têm a última palavra; exorta
            porque nos chama à santidade e à perseverança, visto que “todo
            aquele que tem esta esperança nele purifica-se a si mesmo” (1Jo
            3:3). A esperança cristã não nos aliena do mundo, mas nos envia ao
            mundo com a boa notícia de que o Cordeiro venceu. Assim, a doutrina
            do fim forma um povo que ora, trabalha e espera.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="topico-4-perigos-a-evitar">Tópico 4: Perigos a evitar</H3>
          <P className="">
            Ao trilhar esse caminho, precisamos nomear alguns riscos para que
            não sejamos enredados por eles. O primeiro é o fascínio por
            cronogramas categóricos, como se cada símbolo exigisse uma data e
            cada visão, um gráfico. A Escritura não foi dada para satisfazer a
            curiosidade, mas para firmar os santos em esperança e verdade.
            Quando o desejo de “saber quando” supera a determinação de
            “permanecer fiel”, já nos afastamos do propósito do texto.
          </P>
          <P className="">
            Outro risco é a alegorização indiscriminada, que transforma cada
            elemento em figura maleável e, com isso, esvazia a realidade das
            promessas e dos juízos. Símbolos existem, e precisamos respeitá-los,
            mas símbolos apontam para algo objetivo que Deus fará.
          </P>
          <P className="">
            Se tudo é metáfora, nada é certeza; e, sem certezas, a esperança
            perde o chão. Entre o literalismo ingênuo e a alegoria dissolvente,
            escolhemos a leitura humilde, submissa ao gênero e coerente com o
            restante da Bíblia.
          </P>
          <P className="">
            Por fim, há o perigo de desprezar o contexto bíblico e canônico.
            Textos arrancados de seu ambiente literário e histórico se tornam
            pretexto para qualquer imaginação. Por isso, a cada passo
            perguntamos: como o escritor fala? a quem ele fala? com que
            referências ele dialoga ao longo do cânon? A resposta a essas
            perguntas nos preserva da pressa, corrige expectativas e nos devolve
            ao trilho seguro da sã doutrina.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="conclusao">Conclusão</H3>
          <P className="">
            Uma escatologia sadia nasce da reverência à Palavra e floresce no
            jardim da igreja local. Quando Cristo ocupa o centro, a esperança
            deixa de ser um tema distante e se torna um modo de viver. O
            Espírito nos anima à missão, e a santidade adorna a nossa confissão.
            Entre o “já” e o “ainda não”, oramos com toda a igreja: “Vem, Senhor
            Jesus” (Ap 22:20), e, enquanto esperamos, trabalhamos, consolamos,
            ensinamos e guardamos a fé.
          </P>
          <P className="">
            Um pouco diferente dos demais materiais, quero sugerir a leitura de
            alguns trechos bíblicos: 2Tm 3:14–17; 2Pe 1:16–21; Daniel 7; Mateus
            24; 1Tessalonicenses 4:13–18; Apocalipse 1. Se possível, leia essas
            passagens em oração, anotando promessas, advertências e expressões
            que reforcem a soberania de Deus e a centralidade de Cristo. Essa
            prática simples fortalecerá sua mente e aquecerá seu coração para as
            próximas lições.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">
          Lição 2 – As quatro escolas clássicas de interpretação do Apocalipse
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar e comparar preterismo, historicismo, futurismo e
            idealismo para orientar uma leitura bíblica fiel e cristocêntrica.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-introducao">Introdução</H3>
          <P>
            Ao longo da história da igreja, cristãos fiéis às Escrituras
            buscaram compreender a mensagem profética e apocalíptica com
            seriedade, humildade e temor do Senhor. No caso de Apocalipse, esse
            esforço resultou em quatro abordagens interpretativas principais,
            que, embora diferentes entre si, pretendem honrar a autoridade da
            Palavra e iluminar o povo de Deus em meio às lutas do tempo
            presente.
          </P>
          <P>
            Conhecer essas escolas não visa alimentar debates estéreis, mas
            oferecer ferramentas para uma leitura mais consciente, caridosa e
            responsável.
          </P>
          <P>
            Além disso, observar como essas leituras surgiram e se consolidaram
            ajuda a identificar seus pontos fortes e suas fragilidades. Em vez
            de caricaturas, precisamos de definições sobrias e avaliações
            equilibradas. Desse modo, o estudante da bíblia se vê capacitado a
            dialogar com irmãos de outras tradições, sem abrir mão da convicção
            de que a Bíblia é o padrão supremo de fé e prática.
          </P>
          <P>
            Por fim, convém recordar que esta lição não expõe o texto de
            Apocalipse em si, o que ficará para o próximo módulo, mas descreve
            as lentes interpretativas mais usuais. Mantemos, portanto, uma
            atenção pastoral: toda interpretação deve conduzir à esperança, à
            santidade e à missão, com Cristo absolutamente no centro e a igreja
            firmada no “assim diz o Senhor”.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-topico-1-preterismo-especialmente-o-parcial">
            Tópico 1: Preterismo (especialmente o parcial)
          </H3>
          <P>
            O preterismo sustenta, em linhas gerais, que a maior parte das
            profecias de Apocalipse se cumpriu nos acontecimentos do primeiro
            século, sobretudo na crise envolvendo Jerusalém e o Império Romano.
            Nessa perspectiva, o livro teria oferecido consolo e direção
            imediatos às igrejas perseguidas, desvelando a soberania de Deus
            sobre impérios que se levantam e caem. Ao enfatizar o contexto
            original, o preterismo convida o leitor a entrar no mundo dos
            primeiros destinatários e a perceber como o Senhor já interveio na
            história em juízo e graça.
          </P>
          <P>
            Por outro lado, mesmo entre preteristas parciais, permanece a
            confissão de eventos ainda futuros, como a volta visível de Cristo,
            a ressurreição e o juízo final. Desse modo, não se trata de negar a
            esperança por vir, mas de situar muitas visões como pronunciamentos
            de juízo e livramento que já encontraram cumprimento inicial. Essa
            ênfase pode ser pedagogicamente útil, pois combate leituras soltas
            de qualquer raiz histórica e chama a atenção para a retórica
            profética que fala a um povo real em um tempo real.
          </P>
          <P>
            Entretanto, é preciso cautela. Quando mal aplicado, o preterismo
            pode reduzir indevidamente expectativas escatológicas claramente
            anunciadas nas Escrituras, transformando o horizonte da consumação
            em um eco distante. Para evitar esse perigo, a igreja deve preservar
            a tensão bíblica entre cumprimento histórico e consumação futura,
            lembrando que os atos de Deus no passado são penhor e antecipação,
            não substitutos, da vitória plena do Cordeiro.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-topico-2-historicismo">Tópico 2: Historicismo</H3>
          <P>
            O historicismo enxerga Apocalipse como um panorama contínuo da
            história da igreja, desde o período apostólico até a consumação. Ao
            ler as visões como marcos sucessivos, essa abordagem pretende
            mostrar a mão de Deus guiando os séculos, confortando os santos em
            meio a perseguições, corrupções e reformas. A força dessa leitura
            está em conectar o texto sagrado à longa marcha da fé cristã,
            encorajando gerações a reconhecerem a fidelidade de Deus em cada
            época.
          </P>
          <P>
            Todavia, exatamente por tentar mapear períodos extensos, o
            historicismo pode incorrer em excessiva maleabilidade, ajustando
            símbolos conforme novas conjunturas aparecem. Isso gera
            interpretações mutantes, ora muito confiantes, ora forçadas, que
            acabam enfraquecendo a convicção do leitor. A tentação de datar tudo
            com precisão, ou de identificar cada figura com atores políticos
            contingentes, transforma o texto em um tabuleiro instável.
          </P>
          <P>
            Para que essa abordagem não descambe para o arbitrário, ela precisa
            submeter-se com rigor ao contexto bíblico e reconhecer seus limites.
            Um uso pastoralmente sábio do historicismo pode ressaltar a
            perseverança dos santos ao longo dos séculos e a certeza de que o
            Senhor reina, sem pretender estabelecer correspondências definitivas
            a cada evento da história mundial. Assim, a ênfase na providência de
            Deus se mantém, enquanto a fantasia interpretativa é freada.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-topico-3-futurismo">Tópico 3: Futurismo</H3>
          <P>
            O futurismo compreende que, a partir de determinado ponto do livro,
            comumente associado a Apocalipse 4, as visões dizem respeito a
            eventos majoritariamente futuros, culminando no retorno glorioso de
            Cristo, nos juízos finais e na plena manifestação do Reino. Essa
            perspectiva preserva com vigor a expectativa bendita e a seriedade
            dos anúncios proféticos, combatendo leituras que diluem o aspecto
            objetivo da consumação em meras metáforas existenciais.
          </P>
          <P>
            Além disso, ao tomar com sobriedade as declarações acerca do juízo,
            da vitória do Cordeiro e da nova criação, o futurismo mantém o
            coração da igreja em vigilância e esperança. A convicção de que há
            um desfecho real para a história fortalece a santidade e o zelo
            evangelístico, pois “o tempo está próximo” não apenas no sentido
            teológico, mas também na certeza de que Deus cumprirá tudo quanto
            prometeu.
          </P>
          <P>
            Em contrapartida, o futurismo deve guardar-se do sensacionalismo e
            do excesso de esquemas rígidos. Linhas do tempo inflexíveis,
            cálculos de datas e atribuições dogmáticas de cada símbolo a um
            evento contemporâneo traem a prudência bíblica e desviam o olhar de
            Cristo. Quando praticado com reverência, porém, o futurismo promove
            exatamente o contrário: atenção humilde ao texto e vida cristã
            marcada por esperança, fidelidade e missão.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-topico-4-idealismo-ou-leitura-simbolica">
            Tópico 4: Idealismo (ou leitura simbólica)
          </H3>
          <P>
            O idealismo, por sua vez, lê as visões de Apocalipse como
            representações simbólicas de princípios espirituais perenes: a
            oposição entre o Reino de Deus e as trevas, a perseverança dos
            santos, o juízo de Deus contra toda idolatria e, sobretudo, a
            vitória final do Cordeiro. Em vez de fixar cada imagem em um evento
            histórico pontual, essa abordagem ressalta a aplicabilidade do livro
            a todos os tempos e lugares, encorajando a igreja de hoje tanto
            quanto a do primeiro século.
          </P>
          <P>
            Essa ênfase pode ser espiritualmente frutífera, porque impede que
            Apocalipse se torne refém de chaves políticas passageiras. Ao
            lembrar que os dragões e as bestas também simbolizam sistemas de
            rebelião e sedução que ressurgem na história, o idealismo ajuda o
            crente a discernir enganos, resistir à idolatria e manter a
            fidelidade ao Cordeiro em qualquer contexto cultural. A espada que
            sai da boca de Cristo, assim, continua julgando e salvando em cada
            geração.
          </P>
          <P>
            Ainda assim, o idealismo precisa evitar a diluição do conteúdo
            profético em imagens descompromissadas com a história e com a
            consumação futura. A Escritura não fala apenas de princípios; fala
            de atos de Deus no tempo e no fim dos tempos. Por isso, a leitura
            simbólica precisa conviver com a convicção de que há eventos
            concretos, ainda por se cumprir, que coroarão a obra redentora de
            Cristo diante de todo o universo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-topico-5-avaliacao-sob-nossa-perspectiva">
            Tópico 5: Avaliação sob nossa perspectiva
          </H3>
          <P>
            Na tradição pentecostal tradicional, costuma-se privilegiar o
            futurismo de modo responsável, preservando a literalidade onde o
            texto assim o requer e reconhecendo o emprego de símbolos onde o
            gênero literário os impõe. Essa preferência nasce do zelo em manter
            viva a bem-aventurada esperança, sem ceder ao pânico ou ao
            espetáculo. Ao mesmo tempo, é sábio colher das demais escolas seus
            contributos legítimos: o enraizamento histórico do preterismo, a
            visão de longa duração do historicismo e a aplicabilidade constante
            do idealismo.
          </P>
          <P>
            Com isso em mente, o crente se beneficia quando aprende a ler com
            equilíbrio, evitando tanto o reducionismo que pretende encaixar o
            texto em moldes inflexíveis quanto a fluidez que torna qualquer
            coisa possível. A diretriz é simples e exigente: Cristo no centro, a
            Escritura como árbitro e a edificação do povo de Deus como
            finalidade. Se uma interpretação rouba a esperança, estimula a
            vaidade intelectual ou promove medo infecundo, ela precisa ser
            revista à luz da Palavra.
          </P>
          <P>
            Em última análise, a boa teologia se prova no fruto. Se a leitura de
            Apocalipse conduz a uma vida mais santa, a uma esperança mais sólida
            e a um compromisso missionário mais ardente, estamos no caminho
            certo. Se, ao contrário, produz arrogância, intrigas e especulações,
            é preciso retornar às Escrituras com oração humilde, pedindo ao
            Espírito Santo que nos guie “em toda a verdade” e nos mantenha
            firmes até o dia de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P>
            Aprender as quatro escolas de interpretação do Apocalipse é como
            adquirir um conjunto de lentes para observar o mesmo céu estrelado.
            Algumas ampliam o passado imediato, outras percorrem séculos, outras
            focam o horizonte da consumação, e outras destacam constelações
            perenes de princípios espirituais. O que não pode mudar é o centro
            da visão: o Cordeiro que venceu, reina e voltará. Firmados nessa
            certeza, seguimos estudando com temor, ensinando com caridade e
            vivendo com a esperança que não engana.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">
          Lição 3 – Correntes milenistas e perspectivas sobre Tribulação e
          Arrebatamento
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar e distinguir correntes milenistas e posições sobre
            Arrebatamento/Tribulação para orientar uma leitura bíblica fiel,
            cristocêntrica e pastoral.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-introducao">Introdução</H3>
          <P>
            Ao tratarmos do Milênio e dos eventos correlatos — Tribulação e
            Arrebatamento — entramos em um terreno onde a igreja, ao longo da
            história, buscou compreender Apocalipse 20 e passagens afins com
            seriedade, humildade e zelo pelas Escrituras. Não se trata de
            curiosidade teológica, e sim de fidelidade ao testemunho bíblico e
            de cuidado pastoral com o rebanho do Senhor. Por isso,
            apresentaremos as principais correntes com reverência, reconhecendo
            pontos fortes e limitações, e mantendo a convicção inegociável de
            que a Palavra de Deus é a nossa regra de fé e prática.
          </P>
          <P>
            É importante lembrar que, embora haja diferenças entre cristãos
            sinceros na leitura desses temas, todos concordam no essencial:
            Cristo voltará, julgará com justiça, ressuscitará os Seus e
            inaugurará em plenitude novos céus e nova terra. Essa base comum nos
            ajuda a caminhar em caridade, mesmo ao examinarmos perspectivas
            distintas. O propósito, portanto, não é fomentar disputas, mas
            esclarecer categorias e fortalecer a esperança bendita que sustenta
            a vida santa e a missão da igreja.
          </P>
          <P>
            Dito isso, seguiremos um percurso simples: primeiro, apresentaremos
            as correntes milenistas mais conhecidas; depois, abordaremos as
            principais posições quanto à Tribulação e ao Arrebatamento, sempre
            chamando atenção para implicações pastorais. Que o Senhor, pelo Seu
            Espírito, nos conduza “em toda a verdade” enquanto submetemos nossas
            leituras ao texto sagrado.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-topico-1-amilenismo">Tópico 1: Amilenismo</H3>
          <P>
            O amilenismo entende o Milênio de Apocalipse 20 como uma realidade
            simbólica que descreve o presente reinado de Cristo após Sua vitória
            na cruz e ressurreição, realidade esta experimentada pela igreja ao
            longo da história até a consumação. Nessa leitura, a “prisão” de
            Satanás limita sua ação de engano nas nações, permitindo a expansão
            do Evangelho, ao passo que os santos “reinam” com Cristo em sentido
            espiritual, aguardando a manifestação final de todas as coisas.
            Assim, enfatiza-se a unidade do plano redentivo e a soberania de
            Deus que já se manifesta na história.
          </P>
          <P>
            Essa perspectiva tem a virtude de sublinhar que a vitória de Cristo
            não está adiada para um futuro remoto, mas já foi inaugurada. A
            igreja, portanto, não vive como quem está derrotado, e sim como povo
            que anuncia um Rei entronizado. Tal ênfase incentiva a missão e a
            perseverança, lembrando que as aflições presentes não anulam o
            triunfo do Cordeiro. Além disso, essa leitura convida à prudência
            diante de cronogramas detalhados, evitando a tentação de transformar
            símbolos em gráficos inflexíveis.
          </P>
          <P>
            Por outro lado, o amilenismo precisa lidar cuidadosamente com textos
            que parecem apontar para uma etapa futura específica associada ao
            Milênio, bem como com as descrições da vitória final sobre o mal.
            Uma leitura simbólica, quando mal aplicada, pode reduzir o peso de
            promessas e juízos que as Escrituras apresentam com vigor. Para
            manter o equilíbrio, é essencial que a interpretação simbólica
            caminhe de mãos dadas com a convicção de que Deus age na história e
            trará, de modo público e inconfundível, a consumação de Seu Reino.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-topico-2-pos-milenismo">Tópico 2: Pós-milenismo</H3>
          <P>
            O pós-milenismo projeta um avanço progressivo do Evangelho na
            história, de tal modo que, antes do retorno de Cristo, haveria um
            período de maior justiça, paz e influência cristã — um “milênio”
            caracterizado por bênçãos e pela expansão visível do Reino. Nessa
            ótica, a missão da igreja é instrumento privilegiado de Deus para
            transformar culturas e nações, e as promessas bíblicas de
            restauração têm cumprimentos históricos crescentes ao longo dos
            séculos.
          </P>
          <P>
            Essa visão tem o mérito de reacender o fervor evangelístico e a
            responsabilidade social, lembrando que o Evangelho não é apenas
            mensagem para a alma, mas boa nova que atinge todas as esferas da
            vida. Ao insistir que Cristo reina e que a Palavra produz frutos no
            tempo, o pós-milenismo combate o derrotismo e a resignação,
            convidando a igreja a trabalhar com esperança, educação bíblica e
            serviço amoroso aos povos.
          </P>
          <P>
            Entretanto, o otimismo histórico precisa ser temperado pelas
            advertências das Escrituras quanto à apostasia, ao engano e à
            perseguição nos últimos dias. Textos como Mateus 24 e 2Timóteo 3
            alertam para tempos difíceis, o que exige cuidado para que a
            expectativa de progresso não se torne ingenuidade. Um pós-milenismo
            biblicamente robusto deve manter a tensão entre promessas de avanço
            e realismo quanto à oposição do mundo, evitando triunfalismo e
            submetendo-se, sempre, ao testemunho completo do cânon.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-topico-3-pre-milenismo-historico">
            Tópico 3: Pré-milenismo histórico
          </H3>
          <P>
            O pré-milenismo histórico afirma que Cristo voltará antes de um
            Milênio literal na terra, inaugurando um período de justiça e paz
            sob Seu governo. Em linhas gerais, essa leitura costuma ver a igreja
            atravessando tribulações ao longo da história, mantendo-se fiel até
            a manifestação gloriosa do Senhor, que derrota os inimigos e
            estabelece o Seu Reino milenar antes da consumação final. Aqui, a
            leitura direta de Apocalipse 19–20 recebe destaque, preservando a
            expectativa concreta de eventos futuros decisivos.
          </P>
          <P>
            Uma das suas forças é manter viva a esperança de que Deus intervirá
            na história de modo público e incontestável, conforme o fluir do
            próprio texto. Ao tomar com seriedade a sequência narrativa — a
            vinda de Cristo, a derrota das bestas, a prisão de Satanás e o
            reinado — o pré-milenismo histórico evita dissolver a consumação em
            princípios atemporais, lembrando que a fé cristã aponta para atos
            divinos reais, inclusive na ordem criada.
          </P>
          <P>
            Ainda assim, essa perspectiva requer sobriedade ao ordenar
            pormenores e interpretar símbolos. A tentação de construir
            cronologias fechadas e de amarrar cada figura a um acontecimento
            contemporâneo pode desviar o foco de Cristo. O caminho mais prudente
            é o da reverência: manter o que é claro, reconhecer a presença de
            símbolos e, diante do que é discutível, exercitar humildade,
            guardando a unidade da fé e a edificação do povo de Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-topico-4-dispensacionalismo-geralmente-pre-milenista">
            Tópico 4: Dispensacionalismo (geralmente pré-milenista)
          </H3>
          <P>
            O dispensacionalismo compartilha com o pré-milenismo a convicção de
            um Milênio futuro e literal, mas articula a história da redenção em
            “dispensações” e distingue, de modo mais nítido, Israel e a Igreja
            em certas promessas e expectativas proféticas. Em muitos autores
            dessa corrente, aparece a defesa do arrebatamento pré-tribulacional,
            da Grande Tribulação subsequente e da restauração futura de Israel
            segundo as alianças, culminando no Reino milenar sob o Messias.
          </P>
          <P>
            Entre seus pontos fortes, está a atenção às alianças e promessas do
            Antigo Testamento, bem como a esperança viva na iminência da volta
            de Cristo. Ao valorizar profecias sobre Israel e nações, o
            dispensacionalismo chama a igreja a ler a Bíblia como uma história
            coerente, na qual Deus cumpre Sua Palavra com precisão. Essa ênfase
            frequentemente estimula a vigilância e o compromisso evangelístico,
            mantendo o coração aquecido pela bem-aventurada esperança.
          </P>
          <P>
            Todavia, a mesma estrutura que confere clareza pode, quando mal
            aplicada, dar margem a esquemas inflexíveis e identificações
            apressadas. A prudência bíblica requer que se evitem cálculos de
            datas e correspondências dogmáticas entre símbolos e eventos
            políticos imediatos. Submeter cada detalhe ao contexto, ao gênero
            literário e ao conjunto do cânon é o antídoto seguro para que a
            expectativa ardente não se torne sensacionalismo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-topico-5-arrebatamento-e-tribulacao">
            Tópico 5: Arrebatamento e Tribulação
          </H3>
          <P>
            Quanto ao Arrebatamento, nós, os cristãos evangélicos, sustentamos
            de modo unânime, a reunião dos santos com Cristo, conforme
            1Tessalonicenses 4:13–18 e 1Coríntios 15:50–58. As diferenças
            aparecem ao situar essa bem-aventurada esperança em relação à
            Tribulação: alguns a colocam antes (pré-tribulacionismo), outros no
            meio ou próximo ao fim (meso/mi-tribulacionismo), e outros após a
            Tribulação (pós-tribulacionismo). Em todas estas posições, o centro
            permanece o mesmo: Cristo voltará, e Seu povo estará com Ele para
            sempre.
          </P>
          <P>
            Sobre a Tribulação, as Escrituras descrevem um tempo de intensa
            prova, engano e juízo, no qual a igreja é chamada à perseverança e
            fidelidade. Mateus 24, 2Tessalonicenses 2 e Apocalipse apresentam,
            com diferentes ênfases, um quadro de oposição crescente, mas também
            de triunfo do Cordeiro. A sabedoria pastoral, aqui, consiste em
            preparar a igreja para qualquer cenário, sem pânico e sem
            ingenuidade: vigilância, vida santa, confiança nas promessas e
            compromisso missionário devem caracterizar-nos até o último dia.
          </P>
          <P>
            Em nossa perspectiva pentecostal, professamos o dispensacionalismo
            pré-tribulacionista, por entendermos que a postura mais bíblica une
            zelo e sobriedade. Assim, aguardamos o Senhor com o coração aquecido
            pela esperança e os pés firmes na obediência, rejeitando
            especulações e datismos. Se Ele vier hoje, queremos ser achados
            fiéis; se tardar, não esmoreceremos, pois “quem há de vir virá, e
            não tardará”, e “o justo viverá pela fé”. Assim, a doutrina não nos
            afasta das ruas e das casas, mas nos empurra à evangelização, ao
            discipulado e ao serviço, no poder do Espírito.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P>
            As correntes milenistas e as posições sobre Arrebatamento e
            Tribulação, quando tratadas com fidelidade bíblica e humildade
            cristã, não dividem o corpo, antes o educam. Elas nos ensinam a
            pensar à luz do cânon inteiro, a reconhecer a grandeza da obra de
            Cristo e a viver com coragem, sabendo que a história caminha para o
            dia em que todo olho O verá. Se, ao final do estudo, nossa esperança
            está mais firme, nossa santidade mais desejada e nossa missão mais
            urgente, então caminhamos pelo trilho certo.
          </P>
          <P>
            Quero incentivá-lo(a) à leitura bíblica indicando: Apocalipse 19–20;
            1Tessalonicenses 4:13–18; 1Coríntios 15:50–58; Mateus 24; Romanos
            11. Se possível, leia em oração, comparando passagens e anotando
            conexões temáticas; essa prática fortalecerá sua convicção na
            suficiência das Escrituras e manterá Cristo no centro da expectativa
            da igreja.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">
          Lição 4 – Esperança que transforma: implicações pastorais e
          discernimento escatológico
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Aplicar a escatologia à vida e ao ministério, guiando a igreja em
            vigilância, santidade e missão, com discernimento bíblico e
            centralidade de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-introducao">Introdução</H3>
          <P>
            A escatologia, quando recebida com fé e sobriedade, desce do púlpito
            para a vida diária e transforma o coração do cristão. Ela consola os
            aflitos, corrige os descaminhos e reacende a esperança, não como
            fuga do mundo, mas como força para servir nele com olhos postos em
            Cristo. Por isso, mais do que elaborar esquemas, precisamos cultivar
            uma espiritualidade que una verdade e amor, doutrina e vida, mente e
            coração, sempre sob a autoridade das Escrituras.
          </P>
          <P>
            Nesse horizonte, a tarefa pastoral não é alimentar ansiedade nem
            curiosidade mórbida, e sim conduzir o povo ao “assim diz o Senhor”,
            lembrando que a volta de Cristo é certeza que santifica, e o juízo
            de Deus é verdade que responsabiliza. Ensinar escatologia é cuidar
            de gente, é pastorear consciências diante do Deus santo que prometeu
            fazer novas todas as coisas. Quando essa convicção governa o ensino,
            a igreja caminha segura, evita extremos e floresce em santidade e
            missão.
          </P>
          <P>
            Assim, esta lição propõe um caminho de discernimento, ancorado na
            Palavra, para que a esperança futura ilumine escolhas presentes.
            Trataremos dos sinais dos tempos com vigilância confiante, do lugar
            de Israel e das nações sem especulação, da santidade impulsionada
            pela esperança e de critérios para avaliar doutrinas. Em todas as
            etapas, manteremos Cristo no centro e a Escritura como árbitro
            final.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-topico-1-sinais-dos-tempos-e-vigilancia-confiante">
            Tópico 1: Sinais dos tempos e vigilância confiante
          </H3>
          <P>
            Jesus falou de guerras, rumores de guerras, engano religioso e
            perseguições, mas também do avanço do Evangelho até os confins da
            terra. Esses sinais não foram dados para nos paralisar pelo medo, e
            sim para nos despertar à vigilância e à fidelidade. A leitura desses
            textos, especialmente Mateus 24 e passagens correlatas, deve unir
            discernimento e serenidade, porque o Senhor governa a história e
            nada escapa ao Seu decreto soberano.
          </P>
          <P>
            A vigilância cristã não é pânico cronometrado; é obediência
            paciente. Em vez de tentar encaixar cada manchete em uma profecia,
            aprendemos a ver o mundo com lentes bíblicas: o pecado ainda fere,
            os reinos ainda se exaltam, o engano ainda seduz, mas o Cordeiro já
            venceu. O realismo das dores não anula a realidade do trono. Por
            isso, a igreja ora, trabalha e espera, sem se entregar ao desespero
            que desonra a providência de Deus.
          </P>
          <P>
            Quando o coração é governado por essa esperança, o crente desenvolve
            uma atenção prudente ao tempo presente. Ele rejeita especulações,
            evita dogmatizar sobre o que o texto não define e se dedica ao que o
            texto ordena: perseverar na fé, amar os irmãos, proclamar o
            Evangelho e guardar a própria vida na santidade. É assim que os
            sinais cumprem sua função pedagógica: não como curiosidade, mas como
            chamado à fidelidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-topico-2-israel-as-nacoes-e-a-igreja">
            Tópico 2: Israel, as nações e a Igreja
          </H3>
          <P>
            As Escrituras testemunham a fidelidade de Deus às Suas promessas e
            mostram, ao longo do cânon, o entrelaçamento de Israel, das nações e
            da Igreja no plano redentor. Esse tema exige mãos firmes na Bíblia e
            pés no chão da história. É cediço que fatos proféticos estão
            acontecendo e ainda acontecerão com o povo de Israel; isso culminará
            no cumprimento das profecias bíblicas. Devemos estar atentos, mas
            sem cair em inferências que a própria Palavra não autoriza,
            preservando a sobriedade exegética e a centralidade de Cristo.
          </P>
          <P>
            Uma leitura pastoralmente responsável reconhece a dignidade de
            Israel na história bíblica e a centralidade de Cristo como
            cumprimento das promessas. A igreja, enxertada pela graça, não se
            gloria, mas teme e adora, enquanto ora por judeus e gentios,
            desejando que todos cheguem ao conhecimento da verdade. Essa postura
            conserva o fervor missionário e evita o espetáculo da especulação
            geopolítica travestida de exegese.
          </P>
          <P>
            No cotidiano da comunidade, isso se traduz em intercessão sincera,
            pregação fiel e esperança humilde. Em vez de usar mapas, redes
            sociais e manchetes para sustentar certezas apressadas, preferimos
            usar o texto sagrado para sustentar o coração do povo de Deus.
            Assim, honramos a soberania do Senhor na história e mantemos a
            igreja focada no que lhe cabe: testemunhar Cristo, amar o próximo e
            esperar a consumação com mãos limpas e lâmpadas acesas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-topico-3-santidade-esperanca-e-missao-no-poder-do-espirito">
            Tópico 3: Santidade, esperança e missão no poder do Espírito
          </H3>
          <P>
            A esperança escatológica, quando é bíblica, produz frutos no
            caráter. “Quem tem esta esperança nele purifica-se a si mesmo”, não
            por moralismo, mas por amor Àquele que vem. A santidade, então,
            deixa de ser um ideal abstrato e se torna resposta concreta ao
            Cristo que retornará em glória. O crente aprende a dizer “não” às
            paixões do tempo, não por nostalgia do passado, mas por desejo do
            Reino que se aproxima.
          </P>
          <P>
            Essa mesma esperança acende a chama da missão. O Espírito Santo,
            promessa do Pai, não foi dado para alimentar curiosidades, e sim
            para vestir a igreja de poder, a fim de que ela anuncie o Evangelho
            com ousadia. Quando pregamos a cruz, a ressurreição e a volta de
            Cristo, não estamos espalhando pavor, e sim oferecendo vida. O
            relógio de Deus nos move, não para os porões do medo, mas para as
            ruas do serviço.
          </P>
          <P>
            No dia a dia, isso significa transformar a expectativa da vinda do
            Senhor em hábitos santos e obras de amor. A congregação que canta
            “Vem, Senhor Jesus” é a mesma que visita o enfermo, sustenta o
            fraco, consola o aflito e discipula novos convertidos. A chama da
            esperança ilumina o caminho da obediência, e o óleo do Espírito
            mantém essa chama acesa até o último dia.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-topico-4-criterios-de-avaliacao-doutrinaria">
            Tópico 4: Critérios de avaliação doutrinária
          </H3>
          <P>
            Quando surgem interpretações concorrentes, a igreja precisa de
            critérios que honrem a autoridade da Palavra. O primeiro é a
            centralidade de Cristo: qualquer leitura que desloca o Cordeiro do
            trono interpretativo já começa torta. O segundo é a coerência
            canônica: textos não competem entre si, iluminam-se mutuamente, e o
            todo do cânon guia a leitura das partes. O terceiro é o fruto:
            doutrina que produz soberba, medo paralisante ou divisão sem causa
            precisa ser revista à luz das Escrituras.
          </P>
          <P>
            Além disso, convém distinguir convicções essenciais de inferências
            secundárias. A volta visível de Cristo, a ressurreição, o juízo e a
            nova criação são pilares inegociáveis. Já a ordenação fina de certos
            eventos e a identificação específica de símbolos pedem humildade.
            Onde a Bíblia silencia, silenciamos; onde ela fala, falamos com
            coragem. Esse equilíbrio guarda a igreja da tirania das modas
            teológicas e da rigidez dos sistemas fechados.
          </P>
          <P>
            Por fim, a submissão à igreja local e a pastores piedosos ajuda a
            comunidade a caminhar segura. O ministério da Palavra, exercido com
            oração, estudo e temor do Senhor, serve de guarda para que o rebanho
            não seja levado por “todo vento de doutrina”. A boa teologia, regada
            de humildade, sempre desemboca em adoração. E a adoração, nutrida
            pela verdade, firma a igreja na estrada estreita até o dia de
            Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P>
            A escatologia bíblica não é um labirinto para eruditos, mas um farol
            para peregrinos. Quando Cristo é o centro e a Escritura é a régua, a
            esperança deixa de ser capítulo distante e se torna modo de viver. A
            igreja, então, aprende a interpretar os tempos sem perder a paz, a
            amar as nações sem ceder à especulação, a buscar santidade sem
            moralismo e a permanecer firme na verdade sem triunfalismo. Entre o
            já e o ainda não, seguimos servindo, crendo e esperando, até que a
            alva definitiva rompa e vejamos o Rei em Sua beleza.
          </P>
          <P>
            Por derradeiro, sugiro as leituras bíblicas: Mateus 24–25;
            1Tessalonicenses 5; 2Pedro 3; Apocalipse 21–22. Se possível, leia
            esses textos em oração, anotando como cada um orienta o coração para
            vigilância, santidade e missão. Essa prática simples afia o
            discernimento, fortalece a esperança e mantém acesa a chama do “Vem,
            Senhor Jesus”.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="editorial">Editorial</H2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <P className="mt-0">
              <span className="font-semibold">Curso:</span> Introdução ao
              Apocalipse
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
            <P className="mt-0">Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Resende</P>
            <P className="mt-0">Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentaristas:</P>
            <P className="mt-0">Wagner Monteiro</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
