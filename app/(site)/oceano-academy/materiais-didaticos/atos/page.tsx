import { HeroContainer } from "~/components/hero";
import { AllTeachingMaterialsBackButton } from "~/components/back-buttons/all-teaching-materials";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";
import { SummaryLi } from "~/components/summary-li";

export default function CursoAtos() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Atos dos Apóstolos</H1>
          <P className="mt-0">
            A propagação do evangelho de Jerusalém a Roma pelo poder do Espírito
            Santo.
          </P>
        </div>
      </HeroContainer>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="materials-didactic">Materiais de Apoio</H2>
        <UL className="mt-0">
          <li>Em breve</li>
        </UL>
      </Container>

      <Separator className="my-8" />

      {/* Sumário */}
      <Container className="mb-10 sm:mb-16">
        <H2>Sumário</H2>
        <UL className="mt-0 space-y-2 sm:space-y-2">
          <SummaryLi>
            <a href="#lesson-1">Lição 1 – O Livro de Atos</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-autor-de-atos">
              Tópico 1: O Autor de Atos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-data-e-para-quem-o-livro-foi-escrito">
              Tópico 2: Data e Para Quem o Livro Foi Escrito
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-as-principais-caracteristicas-de-atos">
              Tópico 3: As Principais Características de Atos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-mensagem-central">
              Tópico 4: A Mensagem Central
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">Lição 2 – Em Jerusalém</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-espera-do-pentecostes">
              Tópico 1: À Espera do Pentecostes (Atos 1:6-26)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-dia-de-pentecostes">
              Tópico 2: O Dia de Pentecostes (Atos 2:1-47)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-inicio-da-perseguicao">
              Tópico 3: O Início da Perseguição (Atos 3:1-4:31)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-contra-ataque-satanico">
              Tópico 4: O Contra-Ataque Satânico (Atos 4:32-6:7)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">
              Lição 3 – Os Fundamentos da Missão Mundial
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-estevao-o-martir">
              Tópico 1: Estêvão, o Mártir (Atos 6:8-7:60)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-filipe-o-evangelista">
              Tópico 2: Filipe, o Evangelista (Atos 8:1-40)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-conversao-de-saulo-e-cornelio">
              Tópico 3: A Conversão de Saulo e Cornélio (Atos 9:1-11:18)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-expansao-e-oposicao">
              Tópico 4: Expansão e Oposição (Atos 11:19-12:24)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">Lição 4 – O Apóstolo dos Gentios</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-primeira-viagem-missionaria">
              Tópico 1: A Primeira Viagem Missionária (Atos 12:25-14:28)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-concilio-de-jerusalem">
              Tópico 2: O Concílio de Jerusalém (Atos 15:1-16:5)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-missoes">
              Tópico 3: Missões (Atos 16:6-21:17)
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-roma">
              Tópico 4: Roma (Atos 21:18-28:31)
            </a>
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
        <H2 id="lesson-1">Lição 1 – O Livro de Atos</H2>

        <div className="flex flex-col gap-4">
          <P className="font-semibold text-black dark:text-white">
            Objetivo Geral
          </P>
          <P className="mt-0">
            Ensinar ao leitor sobre as particularidades do livro de Atos, suas
            características, seu autor, bem como entender a mensagem central
            deste livro.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-introducao">Introdução</H3>
          <P className="">
            O Livro de Atos é o volume 2 do relato de Lucas sobre as
            &quot;boas novas&quot; de Jesus e como elas se espalharam de
            Jerusalém a Roma pelo poder do Espírito. Henry J. Cadbury (1958)
            considera que Atos não é apenas um apêndice ou um posfácio, mas uma
            obra única e contínua com o seu Evangelho. Lucas o escreveu como um
            diplomata, historiador e teólogo-evangelista. Se este livro não se
            encontrasse na Bíblia, teríamos poucas informações sobre os
            primórdios da igreja, com exceção do que encontramos nas cartas de
            Paulo, por exemplo, e nas de Pedro.
          </P>
          <P className="">
            Recebemos 4 relatos sobre a vida de Jesus nos evangelhos, mas somente
            1 sobre a igreja primitiva. Atos, portanto, ocupa um lugar de
            extrema notoriedade pois, sem ele, por exemplo, provavelmente não
            iríamos possuir informação alguma sobre a primeira igreja grega em
            Antioquia, da qual se propagou a missão cristã de alcance mundial.
            Além disso, talvez jamais teríamos uma explanação da atividade
            missionária de Paulo ou uma descrição de como o evangelho se
            disseminou pelas cidades estratégicas do mundo romano.
          </P>
          <P className="">
            Outro fator de suma importância é a forma como Lucas conecta Jesus
            com O Espírito Santo e, ao lermos este livro, verificamos que o
            Espírito é a chave para o ministério de Jesus na Terra. Com a vinda
            do Messias e do Espírito, o tempo da graça de Deus chega. O
            evangelho é a atividade de Deus na História e agora a salvação é
            tanto para os Judeus como para os gentios.
          </P>
          <P className="">
            Geralmente falamos &quot;Atos dos Apóstolos&quot;, entretanto ele não
            nos fornece um relatório extenso dos apóstolos. Com exceção de Paulo,
            somente outros 3 são mencionados com maior destaque: Tiago (irmão de
            João), João, o qual aparece na narrativa, mas nunca fala, e Pedro.
            Outro aspecto característico de Atos é que, para se entender este
            livro, necessitamos reconhecer o &quot;movimento&quot; do evangelho
            narrado em 6 partes:
          </P>
          <P className="">
            <em>1 - Atos 1:1-6:7</em>: narração da propagação das &quot;boas
            novas&quot; de Jesus em Jerusalém pelos apóstolos;
          </P>
          <P className="">
            <em>2 - Atos 6:8-9:31</em>: primeira expansão geográfica para a
            Judéia e Samaria;
          </P>
          <P className="">
            <em>3 - Atos 9:32-12:24</em>: primeira expansão para os gentios;
          </P>
          <P className="">
            <em>4 - Atos 12:25-16:5</em>: expansão dos gentios na Ásia e como os
            primeiros líderes tiveram que lidar com a &quot;problemática&quot; da
            inclusão dos gentios;
          </P>
          <P className="">
            <em>5 - Atos 16:6-19:20</em>: disseminação do evangelho da Ásia à
            Europa.
          </P>
          <P className="">
            <em>6 - Atos 19:1-28:31</em>: relato de como Paulo (o apóstolo dos
            gentios) finalmente chega com as &quot;boas novas&quot; a Roma (a
            capital do mundo gentio).
          </P>
          <P className="">
            Quanto à interpretação de Atos, embora reconheçamos o contexto
            histórico em que foi escrito, entendemos que seu conteúdo é relevante
            e aplicável aos crentes de hoje. As experiências e práticas descritas
            no livro de Atos servem como modelo para a igreja contemporânea,
            especialmente no que se refere à atuação do Espírito Santo e à
            prática dos dons espirituais. Por exemplo, ao refletirmos sobre a
            escolha de Matias para substituir Judas (Atos 1:23-26), vemos a
            importância de buscar a direção de Deus em decisões importantes na
            igreja, confiando que o Espírito Santo guia Seu povo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-autor-de-atos">Tópico 1: O Autor de Atos</H3>
          <P className="">
            Apesar de Atos não afirmar, Lucas é considerado o autor deste livro.
            Entretanto, não sabemos muito sobre ele e há somente 3 referências
            que citam seu nome: Colossenses 4:14, Filemon 24 e 2 Timóteo 4:11.
            Em vista disso, podemos afirmar que Lucas era um médico e companheiro
            de Paulo, pois estava com este durante o seu último aprisionamento.
            Além disso, também conseguimos concluir que Lucas era gentio porquanto
            em Colossenses 4:11 conclui-se uma lista de menções e saudações
            daqueles que eram da &quot;circuncisão&quot;, ou seja, judeus. No
            próximo versículo é estabelecido uma nova lista e, inferimos, que
            seja de gentios, uma vez que seu nome é incluído no versículo 14, com
            a certeza de que ele não se encontra na lista de pessoas &quot;da
            circuncisão&quot;. Desta forma, chegamos à conclusão de que Lucas é o
            único autor gentio no Novo Testamento.
          </P>
          <P className="">
            Quanto ao fato de Lucas ser um médico, como citado em Colossenses
            4:14, poderíamos predizer este fato devido aos termos médicos que ele
            usa. Por exemplo, em Lucas 4:35: &quot;Mas Jesus o repreendeu,
            dizendo: — Cale-se e saia desse homem. O demônio, depois de o ter
            jogado no chão no meio de todos, saiu daquele homem sem lhe fazer
            mal.&quot; Neste versículo ele usa o termo médico de convulsão. Já em
            Lucas 9:38: &quot;E eis que, do meio da multidão, surgiu um homem,
            dizendo em alta voz: — Mestre, peço que o senhor olhe o meu filho,
            porque é o único que tenho.&quot; O autor desta vez usa a palavra
            convencional de um médico que está atendendo a um paciente quando
            expressa &quot;peço que o senhor olhe o meu filho&quot;.
          </P>
          <P className="">
            Um outro exemplo curioso seria Lucas 18:25: &quot;Porque é mais fácil
            um camelo passar pelo fundo de uma agulha do que um rico entrar no
            Reino de Deus.&quot; Diferentemente de Mateus 19:24 e Marcos 10:25,
            Lucas usa o termo técnico no grego <em>belone</em>, que significa a
            agulha de um cirurgião, enquanto os outros evangelhos apresentam o
            grego <em>raphis</em>, vocábulo comum para &quot;agulha&quot; de
            alfaiate. Os médicos se submetiam a um treinamento rigoroso naqueles
            tempos e pode-se perceber o grego refinado de Lucas, atestando que o
            mesmo era uma pessoa culta. Além de ser médico e amigo de Paulo, ele
            também morou na Palestina e, podemos inferir, que o autor passou um
            tempo se familiarizando com as histórias e costumes judeus, coletando
            material para seus livros.
          </P>
          <P className="">
            Lucas era um historiador e suas fontes são todas primordiais, mas de
            onde ele as obteve? Há duas respostas para esta pergunta:
          </P>
          <P className="">
            1. Os primeiros 15 capítulos de Lucas com relatos dos quais ele não
            tinha conhecimento pessoal: provavelmente, o autor teve acesso aos
            registros das igrejas locais, os quais talvez não tenham sido
            escritos, mas poderiam ter sido relatados. Existia o registro da
            igreja de Jerusalém, o qual encontramos nos capítulos de Atos 1-5 e
            15-16. Também temos o registro da igreja de Cesaréia, capítulos
            8:26-40 e 9:31-10:48. Por último encontramos o registro da igreja de
            Antioquia, capítulos 11:19 e 12:25-14:28.
          </P>
          <P className="">
            2. Capítulos 16-28: Lucas teve conhecimento pessoal de muito que foi
            incluído nesta seção, pois sua narração passa da terceira pessoa para
            &quot;nós&quot;. Ele provavelmente deve ter mantido um diário de
            viagem, no qual escrevia os acontecimentos do dia. As passagens em
            que ele escreve &quot;nós&quot; são as seguintes: 16:10-17, 20:5-16,
            21:1-18 e 27:1-28:16. Lucas deve ter estado presente em todos esses
            acontecimentos, sendo testemunha ocular. Quanto aos eventos em que
            estava ausente, ele pôde coletar informações para seu livro nas
            muitas horas em que passou com Paulo na prisão.
          </P>
          <P className="">
            Ao ler o livro de Atos, temos a certeza de que nenhum outro
            historiador teve fontes melhores ou usou-as com tanta acuracidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-data-e-para-quem-o-livro-foi-escrito">
            Tópico 2: Data e Para Quem o Livro Foi Escrito
          </H3>
          <P className="">
            A data em que o livro de Atos foi escrito é incerta, uma vez que
            estudiosos estão divididos entre uma data antes da morte de Paulo
            (por volta de 64 A.D - Atos 28:30-31) e outra depois da queda de
            Jerusalém (70 A.D, devido ao seu uso de Marcos). Tanto quanto o
            evangelho de Lucas quanto Atos foram escritos para um homem cujo nome
            era Teófilo (Lucas 1:3; Atos 1:1). Devido ao fato de Lucas o chamar
            de &quot;excelentíssimo Teófilo&quot;, pode-se concluir que ele era
            de um alto escalão do governo romano. Porém, existem 3 possibilidades
            sobre a identidade de Teófilo:
          </P>
          <P className="">
            1. Possivelmente, Teófilo não seria um nome real pois naqueles tempos
            era considerado perigoso ser cristão. O nome em si vem de duas
            palavras no grego: <em>Theo</em> (Deus) e <em>philos</em> (amigo).
            Hipoteticamente, Lucas teria escrito para alguém que amava Deus, mas
            escondeu a sua verdadeira identidade por segurança.
          </P>
          <P className="">
            2. Outra probabilidade é a de que Teófilo era uma pessoa real, um
            funcionário importante do governo. Talvez Lucas estivesse endereçando
            seus livros a ele para mostrá-lo como o Cristianismo é algo benéfico
            e que os cristãos eram boas pessoas. Supostamente ele estaria
            escrevendo para um oficial do governo não perseguir a igreja.
          </P>
          <P className="">
            3. Existe uma terceira teoria baseada no fato de Lucas ser um médico
            e estes geralmente eram escravos nos tempos antigos. Há sugestões de
            que Teófilo era seu paciente e que estaria gravemente doente.
            Entretanto, pela expertise e devoção de Lucas, ele tenha sido curado,
            o que levaria Teófilo a dar a Lucas sua liberdade. Por outro lado,
            ele teria escrito os livros a ele como forma de gratidão e, como o
            que ele tinha mais de precioso naquela época era a história de Jesus,
            ele a escreveu e a enviou a seu benfeitor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-as-principais-caracteristicas-de-atos">
            Tópico 3: As Principais Características de Atos
          </H3>
          <P className="">
            <em>
              Escrevi o primeiro livro, ó Teófilo, relatando todas as coisas que
              Jesus começou a fazer e a ensinar até o dia em que foi elevado às
              alturas, depois de haver dado mandamentos por meio do Espírito
              Santo aos apóstolos que tinha escolhido. (Atos 1:1-2)
            </em>
          </P>
          <P className="">
            Lucas considera que o livro de Atos seja o volume 2 de sua obra
            sobre as origens do Cristianismo, a qual constitui um quarto do Novo
            Testamento. É importante salientar que o autor não enxerga o volume 1
            como sendo a história de Jesus Cristo desde o seu nascimento,
            sofrimentos pelos quais passou, morte, ressurreição e ascensão aos
            céus. Também não acredita que o volume 2 seja sobre a história da
            igreja de Jesus Cristo, seus sofrimentos pela perseguição e a
            conquista de Roma. O contraste que ele expõe não ocorre entre Jesus e
            sua igreja, mas entre as duas etapas do ministério de Cristo.
          </P>
          <P className="">
            O autor narra no Evangelho de Lucas as obras que Jesus começou a
            fazer e ensinar até sua ascensão. Já em Atos, ele relata o que Jesus
            continuou a operar e ensinar após sua ascensão, principalmente
            através de seus apóstolos. Portanto, o ministério de Cristo neste
            mundo em forma de homem foi continuado pelo seu ministério celestial
            por intermédio dO Espírito Santo em seus apóstolos.
          </P>
          <P className="">
            John Stott questiona qual seria, então, o nome correto para o segundo
            volume de Lucas? O Codex Sinaiticus, do quarto século, o intitula de{" "}
            <em>Praxeis</em> (&quot;Atos&quot;). Porém, não há uma explicação de
            quem seriam esses atos que ele está descrevendo. O título
            tradicional desde o segundo século é &quot;Os Atos dos
            Apóstolos&quot;, com ou sem o artigo definido. Entretanto, outros
            estudiosos, como Johann Albrecht no século XVIII, recomendaram a
            designação de &quot;Os Atos do Espírito Santo&quot;, pois o volume 1
            relataria os &quot;Atos de Jesus Cristo&quot;. Conceito este
            difundido por Arthur T. Pierson (1895):
          </P>
          <P className="">
            <em>
              Podemos, talvez, nos aventurar a chamar este livro de &quot;Os Atos
              do Espírito Santo&quot;, pois, do começo ao fim, ele é o registro
              de seu advento e atividade. Aqui ele é visto chegando e operando...
              Só se reconhece um único Ator e Agente verdadeiro, todos os outros,
              chamados atores ou trabalhadores, são apenas seus instrumentos, o
              agente sendo o que atua e o instrumento, aquilo através do qual ele
              atua.
            </em>
          </P>
          <P className="">
            Outro comentário valioso sobre o livro de Atos é feito por Pierson
            ao encerrar seu livro:
          </P>
          <P className="">
            <em>
              Igreja de Cristo! Os relatos desses atos do Espírito Santo nunca
              foram completados. Esse é o livro que não possui fim, pois está à
              espera de novos capítulos a serem acrescentados no ritmo e na
              medida em que o povo de Deus confirma o bendito Espírito na sua
              santa cadeira de comando.
            </em>
          </P>
          <P className="">
            Outra característica essencial de Atos é que este livro diferencia o
            Cristianismo de todas as outras religiões. Apesar de Jesus ter
            morrido e ressuscitado completando seu ministério na terra, a sua
            obra de expiação foi um fim, mas também um começo. Após sua ascensão
            e com a vinda dO Espírito Santo, Jesus continuou sua obra neste
            mundo. Desta forma, previamente ao término de seu ministério, Jesus
            tomou medidas para que sua função permanecesse na terra (por
            intermédio dos apóstolos) mas a partir do céu (mediante O Espírito
            Santo).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-mensagem-central">
            Tópico 4: A Mensagem Central
          </H3>
          <P className="">
            O livro de Atos tem sua mensagem central na obra de Deus através da
            vida de pessoas que se dedicaram a Jesus Cristo, agindo por
            intermédio dO Espírito Santo. As boas novas da salvação agora são
            tanto para o judeu quanto para o gentio. A ação dO Espírito Santo
            edifica a igreja e possibilita a propagação do evangelho a partir dos
            judeus para os gentios. Desta forma, os cristãos têm o bom senso de
            trabalhar junto com Deus para incluir os gentios em Sua salvação. A
            salvação é para todos e nada pode impedi-la. As boas novas são
            aceitas por uns, mas rejeitadas por outros. O evangelho foi
            disseminado de Jerusalém à Judéia e de Samaria ao restante do mundo.
            Consequentemente, o cristianismo se transformou de um tronco do
            judaísmo em uma religião mundial, a qual foi aceita em todos os
            lugares, inclusive em Roma, a base do paganizado império romano.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Podemos concluir de que Atos é um livro importante para entendermos a
            história dos primórdios da igreja. Lucas possuiu todas as
            qualificações para escrever um relatório detalhado de como os
            apóstolos continuaram a obra de Jesus aqui na terra pelo intermédio
            dO Espírito Santo. Além disso, a salvação não é oferecida somente
            aos judeus, agora ela é estendida aos gentios. Fato curioso, pois o
            autor é o único gentio do Novo Testamento.
          </P>
          <P className="">
            Enquanto os deuses de outras religiões &quot;morrem&quot;, Jesus é O
            único que morreu, ressuscitou e foi elevado aos céus. Isto faz parte
            da obra salvífica de Deus, para que O Espírito Santo continuasse o
            ministério de Cristo aqui na terra. Portanto, que possamos agir como
            filhos amados, portadores dO Espírito do único Deus que não
            abandonou seus seguidores nesta terra.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – Em Jerusalém</H2>

        <div className="flex flex-col gap-4">
          <P className="font-semibold text-black dark:text-white">
            Objetivo Geral
          </P>
          <P className="mt-0">
            Explanar sobre os eventos ocorridos antes e durante o dia de
            Pentecostes, assim como as primeiras perseguições da igreja e o que
            satanás fez para tentar destruí-la.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-introducao">Introdução</H3>
          <P className="">
            O dia de Pentecostes, o qual foi o principal evento dos primeiros
            capítulos de Atos, é considerado importante pois concretizou a
            promessa de Jesus na qual Ele &quot;derramaria&quot; O Espírito Santo
            sobre os seus discípulos. Esta é a última obra da função salvífica de
            Cristo (até a sua segunda vinda). Como os profetas haviam
            profetizado, o encerramento da carreira dO Filho do Homem na Terra
            também marcaria um novo começo.
          </P>
          <P className="">
            A partir de agora, O Espírito Santo estaria com os cristãos para
            equipá-los a continuar a ação de evangelização dos povos. Assim como
            O Espírito veio a Jesus, o mesmo aconteceria com seus discípulos. O
            Espírito concederia a segurança salvação aos seguidores dO Mestre e
            também os estimularia a propagar a mensagem de &quot;boas
            novas&quot; a todas as nações. A salvação foi dada a eles pela graça,
            mas ela também precisa ser compartilhada.
          </P>
          <P className="">
            Entretanto, antes do dia de Pentecostes acontecer, os cristãos
            passaram por um período de espera, quarenta dias entre a ressurreição
            e a ascensão dO Messias, e mais dez dias entre a ascensão e o
            Pentecostes. Com orientações bem claras, Lucas faz questão de
            incluí-las no final do seu Evangelho e no início de Atos:
          </P>
          <P className="">
            <em>
              Eis que envio sobre vós a promessa de meu Pai; permanecei, pois, na
              cidade, até que do alto sejais revestidos de poder. (Lucas 24:49)
            </em>
          </P>
          <P className="">
            <em>
              E, comendo com eles, determinou-lhes que não se ausentassem de
              Jerusalém, mas que esperassem a promessa do Pai, a qual, disse ele,
              de mim ouvistes. Porque João, na verdade, batizou com água, mas vós
              sereis batizados com o Espírito Santo, não muito depois destes dias.
              (Atos 1:4-5)
            </em>
          </P>
          <P className="">
            Porém, os discípulos não ficaram ociosos durante os cinquenta dias de
            espera do Pentecostes. O autor de Atos faz uma descrição de 4
            eventos valiosos:
          </P>
          <P className="">
            1. Eles foram comissionados;
            <br />
            2. Eles viram Jesus ser elevado às alturas;
            <br />
            3. Eles perseveraram juntos em oração;
            <br />
            4. Eles substituíram Judas por Matias, como o décimo segundo
            apóstolo.
          </P>
          <P className="">
            John Stott comenta que não podemos considerar que esses eventos
            tenham sido meramente humanos, pois foi Jesus quem os comissionou,
            ascendeu aos céus, quem lhes fez a promessa do Espírito Santo pelo
            qual oravam e quem escolheu o novo apóstolo. A missão de
            evangelização só poderia iniciar depois que eles tivessem sido
            comissionados para testemunhar, após Jesus ter sido elevado às alturas
            e a vinda do Espírito para os capacitar.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-espera-do-pentecostes">
            Tópico 1: À Espera do Pentecostes (Atos 1:6-26)
          </H3>
          <P className="">
            <strong>1.1 Eles foram comissionados (1:6-8)</strong>
          </P>
          <P className="">
            <em>
              Então os que estavam reunidos com Jesus lhe perguntaram: — Será este
              o tempo em que o Senhor irá restaurar o reino a Israel? Jesus
              respondeu: — Não cabe a vocês conhecer tempos ou épocas que o Pai
              fixou pela sua própria autoridade. Mas vocês receberão poder, ao
              descer sobre vocês o Espírito Santo, e serão minhas testemunhas
              tanto em Jerusalém como em toda a Judeia e Samaria e até os confins
              da terra. (Atos 1:6-8)
            </em>
          </P>
          <P className="">
            O que Lucas retrata sobre os quarenta dias em que Jesus esteve
            ressurreto? A resposta é encontrada em Atos 1:3:
          </P>
          <P className="">
            <em>
              Depois de ter padecido, Jesus se apresentou vivo a seus apóstolos,
              com muitas provas incontestáveis, aparecendo-lhes durante quarenta
              dias e falando das coisas relacionadas com o Reino de Deus.
            </em>
          </P>
          <P className="">
            O Reino de Deus! Primeiramente, Jesus discursa sobre o Reino, o qual
            também tinha sido a essência de sua pregação no decorrer de seu
            ministério público na Terra. Contudo, o foco da mensagem dO Cristo
            ressuscitado também foi o Reino.
          </P>
          <P className="">
            Em segundo lugar, O Messias explana sobre o fato de que os discípulos
            deveriam aguardar a vinda do Espírito Santo. Portanto, os dois
            assuntos primordiais entre a ressurreição de Jesus e sua ascensão
            foram o reino de Deus e Seu Espírito. Possivelmente, O Cristo tenha
            explicado sobre a relação entre ambos, pois os profetas do Antigo
            Testamento muitas vezes os associaram um ao outro.
          </P>
          <P className="">
            Ao perguntarem &quot;<em>Será este o tempo em que o Senhor irá
            restaurar o reino a Israel?</em>&quot;, os discípulos cometeram o
            erro de confundir a natureza do reino e a relação entre o reino e o
            Espírito. A confusão se dá pois eles estavam esperando um reino
            político, nacional e de restauração imediata. Jesus faz a correção do
            pensamento deles quanto à natureza, extensão e chegada do reino nos
            versículos 7-8 de Atos 1:
          </P>
          <P className="">
            <em>a. O Reino de Deus é espiritual quanto ao caráter</em>
          </P>
          <P className="">
            &quot;Reino&quot; tem um significado de território, uma localização
            geográfica, mas o reino de Deus não tem uma definição territorial,
            jamais constando em algum mapa. A exemplo disso são os dois a
            caminho de Emaús que esperavam que Jesus iria redimir Israel, mas
            ficaram tristes devido à crucificação, pois achavam que O Messias os
            libertaria do jugo colonial de Roma. Com a ressurreição dO Cristo,
            eles voltaram a ter esta esperança.
          </P>
          <P className="">
            A resposta de Jesus nos remete ao Espírito Santo, porquanto falou que
            o Espírito viria sobre eles, dando-lhes poder. A atividade do
            &quot;poder&quot; é intrínseca ao conceito de Reino. Todavia, o poder
            do Reino é diferente do poder dos reinos terrestres. O Reino de Deus
            são os seus mandamentos instituídos na vida dos Cristãos através do
            Espírito Santo. Mediante uma mensagem de paz e não de guerra, pela
            atuação do Espírito e não pela força de armas. No entanto, não
            podemos cair no erro de espiritualizar o reino em excesso como se ele
            operasse somente no céu e não na terra. Apesar de o reino não ser um
            programa político, ele possui implicações políticas e sociais
            radicais, pois seus valores entram em contraste com os valores
            seculares. Os seguidores negam a César a lealdade suprema e
            concedem-na somente a Jesus.
          </P>
          <P className="">
            <em>b. O Reino de Deus é internacional quanto a seus membros</em>
          </P>
          <P className="">
            As ideias limitadas dos apóstolos eram nacionalistas uma vez que
            questionaram Jesus se Ele restauraria Israel, que os macabeus haviam
            reconquistado no segundo século a.C, por um reduzido espaço de
            tempo, para posteriormente perdê-lo de novo.
          </P>
          <P className="">
            Jesus os abriu a mente quando prometeu que o Espírito Santo lhes
            concederia poder de serem suas testemunhas, começando em Jerusalém, a
            capital nacional e lugar da condenação e crucificação dO Messias, até
            os confins da terra. A tese de Johannes Blauw é de que a concepção
            do Antigo Testamento compreenderia uma preocupação com as nações
            (Deus as criou e elas se curvarão diante dEle), mas não uma missão
            às nações (sair para conquistá-las).
          </P>
          <P className="">
            O Reino de Deus prevalece sobre uma comunidade internacional em que
            raça, nação, posição e sexo não são empecilhos para a comunhão. E
            quando o reino for consagrado no final, a incontável multidão dos
            remidos será retirada de &quot;todas as nações, tribos, povos e
            línguas&quot;.
          </P>
          <P className="">
            <em>c. O Reino de Deus é gradual quanto à expansão</em>
          </P>
          <P className="">
            Quando os apóstolos perguntam &quot;será este o tempo&quot;, eles
            deixam transparecer a preocupação quanto ao &quot;momento&quot; que
            Jesus devolveria o Reino ao seu povo. Ao responder, Jesus tem dois
            pontos. Primeiramente, &quot;<em>Não cabe a vocês conhecer tempos ou
            épocas que o Pai fixou pela sua própria autoridade</em>&quot;. Tempos
            (<em>chronoi</em>) ou épocas (<em>kairoi</em>), juntos, constituem o
            plano de Deus. O questionamento sugere curiosidade ou impaciência, ou
            ambas. Porém, o Filho afirma que não sabia o dia nem a hora de sua
            volta (<em>parousia</em>). Desta forma, os apóstolos são forçados a
            permanecer na ignorância, pois os mistérios pertencem a Deus e as
            coisas reveladas nos competem e devemos ficar contentes com elas.
          </P>
          <P className="">
            Em segundo lugar, embora eles não estivessem aptos a conhecer os
            tempos e as épocas, eles necessitavam estar cientes de que receberiam
            poder para que, no período entre a vinda do Espírito e a segunda
            vinda de Cristo, pudessem ser suas testemunhas. Os seguidores de
            Jesus devem propagar o evangelho até a sua segunda vinda, testemunhas
            até aos confins da terra e até a consumação do século.
          </P>
          <P className="">
            <strong>1.2 Eles viram Jesus subir ao céu (1:9-12)</strong>
          </P>
          <P className="">
            <em>
              Depois de ter dito isso, Jesus foi elevado às alturas, à vista
              deles, e uma nuvem o encobriu dos seus olhos. E, estando eles com
              os olhos fixos no céu, enquanto Jesus subia, eis que dois homens
              vestidos de branco se puseram ao lado deles e lhes disseram: —
              Homens da Galileia, por que vocês estão olhando para as alturas?
              Esse Jesus que foi levado do meio de vocês para o céu virá do modo
              como vocês o viram subir. Então os apóstolos voltaram do monte das
              Oliveiras para Jerusalém. A distância até a cidade é de cerca de um
              quilômetro. (Atos 1:9-12)
            </em>
          </P>
          <P className="">
            Somente os onze apóstolos viram Jesus ascender aos céus, mas em certo
            momento da segunda vinda todo o olho verá. Ao invés de voltar sozinho
            (como ascendeu), milhões de santos - humanos e angelicais -
            constituirão uma comitiva. E, ao contrário de ser uma volta exclusiva
            a um local (&quot;Lá está!&quot; ou &quot;Ei-lo aqui!&quot;), será
            &quot;assim como relâmpago, fuzilando, que brilha de uma à outra
            extremidade do céu&quot;.
          </P>
          <P className="">
            <strong>
              1.3 Eles oraram pela chegada dO Espírito (1:12-14)
            </strong>
          </P>
          <P className="">
            <em>
              Então os apóstolos voltaram do monte das Oliveiras para Jerusalém.
              A distância até a cidade é de cerca de um quilômetro. Quando
              entraram na cidade, subiram para o cenáculo onde se reuniam Pedro,
              João, Tiago, André, Filipe, Tomé, Bartolomeu, Mateus, Tiago, filho
              de Alfeu, Simão, o Zelote, e Judas, filho de Tiago. Todos estes
              perseveravam unânimes em oração, com as mulheres, com Maria, mãe de
              Jesus, e com os irmãos dele. (Atos 1:12-14)
            </em>
          </P>
          <P className="">
            No Evangelho de Lucas, ele declara que nos dias seguintes à ascensão
            os discípulos estavam sempre no templo, louvando a Deus (Lc 24:53).
            Já em Atos, há o relato de que eles perseveraram unânimes em oração
            (Atos 1:14). O vocábulo &quot;unânimes&quot; traduz{" "}
            <em>homothymadon</em>, empregada 10 vezes por Lucas (uma das suas
            palavras favoritas) e que ocorre somente uma vez em todo o resto do
            Novo Testamento. Este termo pode ser definido como &quot;reuniam-se
            no mesmo lugar&quot; ou &quot;faziam a mesma coisa&quot;, ou seja,
            orando. Porém em outros textos pode ser traduzido como &quot;oração
            unânime&quot; (Atos 4:24) ou &quot;decisão unânime&quot; (Atos
            15:25), no que podemos concluir que essa &quot;unanimidade&quot;
            seria mais do que um simples encontro e sim uma concordância quanto
            àquilo pelo que oravam. Eles oravam com &quot;uma mente ou um
            propósito ou um impulso&quot;.
          </P>
          <P className="">
            A oração deles era perseverante! O verbo de perseveravam (
            <em>proskartereo</em>) é definido como estar &quot;ocupado&quot; ou
            ser &quot;persistente&quot; em toda a atividade. É o mesmo verbo
            usado mais tarde por Lucas quando ele se refere aos novos convertidos
            que &quot;perseveravam na doutrina dos apóstolos&quot; (Atos 2:42) e
            aos apóstolos que priorizam a oração e pregação (Atos 6:4). O
            fundamento dessa união e perseverança em oração é o mandamento e a
            promessa de Jesus. Portanto, concluímos que as promessas de Deus não
            tornam nossas orações supérfluas, mas elas nos dão a garantia para
            orarmos e a confiança de que Ele ouvirá e responderá.
          </P>
          <P className="">
            <strong>
              1.4 Eles substituíram Judas por Matias como apóstolo (Atos
              1:15-26)
            </strong>
          </P>
          <P className="">
            <em>
              Naqueles dias, Pedro se levantou no meio dos irmãos, que formavam
              um grupo de mais ou menos cento e vinte pessoas, e disse: — Irmãos,
              era necessário que se cumprisse a Escritura que o Espírito Santo
              predisse pela boca de Davi, a respeito de Judas, que foi o guia
              daqueles que prenderam Jesus. Ele era um dos nossos e teve parte
              neste ministério. Ora, este homem adquiriu um campo com o preço da
              iniquidade e, caindo de cabeça, rompeu-se pelo meio, e todos os
              seus intestinos se derramaram. Isto chegou ao conhecimento de todos
              os moradores de Jerusalém, de maneira que em sua própria língua
              esse campo era chamado Aceldama, isto é, Campo de Sangue. E Pedro
              continuou: — Porque está escrito no Livro dos Salmos: &quot;Fique
              deserta a sua morada, e não haja quem nela habite.&quot; — E:
              &quot;Que outro tome o seu encargo.&quot; — Portanto, é necessário
              que, dos homens que nos acompanharam todo o tempo em que o Senhor
              Jesus andou entre nós, começando no batismo de João, até o dia em
              que foi tirado do nosso meio e levado às alturas, um destes se
              torne testemunha conosco da sua ressurreição. Então propuseram dois:
              José, chamado Barsabás, também conhecido como Justo, e Matias. E,
              orando, disseram: — Tu, Senhor, que conheces o coração de todos,
              revela-nos qual dos dois escolheste para preencher a vaga neste
              ministério e apostolado, do qual Judas se desviou, indo para o seu
              próprio lugar. Depois fizeram um sorteio, e a sorte caiu sobre
              Matias, que foi acrescentado ao grupo dos onze apóstolos. (Atos
              1:15-26)
            </em>
          </P>
          <P className="">
            De acordo com o Antigo Testamento, Pedro declara que &quot;convinha
            que se cumprisse as Escrituras&quot;. Salmos 109:8 diz: &quot;
            <em>Sejam poucos os seus dias, e outro tome o seu encargo</em>
            .&quot; Como a escolha apostólica deve ser feita pelo Senhor Jesus,
            eles lançaram sortes (v.26). Entretanto, este método era usado no
            Antigo Testamento e não parece ter sido usado depois que o Espírito
            Santo foi derramado entre eles.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-dia-de-pentecostes">
            Tópico 2: O Dia de Pentecostes (Atos 2:1-47)
          </H3>
          <P className="">
            Dentre os 4 evangelistas, Lucas é o que mais salienta o Espírito
            Santo, relatando a imprescindibilidade da capacitação dele. Assim
            como o Espírito veio sobre Jesus quando este foi batizado, também foi
            guiado por ele, no poder dele e ungido por ele, agora era a vez dos
            discípulos o receberem para serem capacitados para a missão mundial.
            O Pentecostes foi o cumprimento da promessa de Jesus para lhes
            ensinar e lembrar de Seus ensinos.
          </P>
          <P className="">
            A festa de Pentecostes possuía dois significados: um agrícola e outro
            histórico. Sendo a segunda das três festas anuais para comemorar a
            ceifa, era chamada de &quot;Festa da Colheita&quot;, pois era o fim
            da colheita dos cereais, ou &quot;Festa das Semanas&quot;, por
            acontecer sete semanas ou 50 dias após a páscoa.{" "}
            <em>Pentekostos</em> é definido como &quot;quinquagésimo&quot;. Perto
            do fim do período intertestamentário, começou-se a ser comemorada
            como aniversário da entrega da lei no Monte Sinai, pois foram 50
            dias após o Êxodo.
          </P>
          <P className="">
            O Pentecostes apresenta 3 sinais sobrenaturais: um som do céu,
            apareceram línguas como de fogo e todos ficaram cheios do Espírito
            Santo. Esses sinais podem parecer naturais, mas eram sobrenaturais.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-inicio-da-perseguicao">
            Tópico 3: O Início da Perseguição (Atos 3:1-4:31)
          </H3>
          <P className="">
            Após a cura do coxo que estava à porta do templo, Pedro e João falam
            ao povo sobre as &quot;boas novas&quot;. Mas os sacerdotes, o capitão
            do templo e os saduceus, ressentidos por pregarem Jesus ressuscitado
            dentre os mortos, prenderam estes discípulos e os recolheram ao
            cárcere até o dia seguinte. Entretanto, muitos creram, subindo a
            quase 5 mil o número de convertidos.
          </P>
          <P className="">
            Lucas aponta que ambas as ondas de perseguição tiveram seu início com
            os saduceus (Atos 4:1 e 5:17). Mas quem eram os saduceus? Eles eram
            a classe governante dos aristocratas ricos, integrados ao sistema
            romano e temiam o ensino revolucionário dos apóstolos. Acreditavam
            que a era messiânica foi iniciada na era dos macabeus e, por isso,
            não estavam à espera de um messias. Também não aceitavam a
            ressurreição dos mortos e viam os apóstolos como agitadores e
            perturbadores da lei. Entretanto, Lucas nos lembra de que a
            perseguição não impediu a propagação do Evangelho, pois eles poderiam
            prender os apóstolos, mas não as &quot;boas novas&quot; e subiu em
            quase 5 mil o número de cristãos naquele dia.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-contra-ataque-satanico">
            Tópico 4: O Contra-Ataque Satânico (Atos 4:32-6:7)
          </H3>
          <P className="">
            Satanás atacou a igreja em 3 frentes:
          </P>
          <P className="">
            1. Violência física - ele tentou acabar com a igreja através da
            perseguição;
          </P>
          <P className="">
            2. Corrupção moral - infiltrar o mal na vida interna da igreja (por
            exemplo, Ananias e Safira);
          </P>
          <P className="">
            3. Distração - tentou tirar os apóstolos de suas responsabilidades
            prioritárias (oração e pregação) para se preocuparem com a
            administração social, que não era a tarefa deles.
          </P>
          <P className="">
            <em>
              Naqueles dias, aumentando o número dos discípulos, houve murmuração
              dos helenistas contra os hebreus, porque as viúvas deles estavam
              sendo esquecidas na distribuição diária. Então os doze convocaram a
              comunidade dos discípulos e disseram: — Não é correto que nós
              abandonemos a palavra de Deus para servir às mesas. Por isso,
              irmãos, escolham entre vocês sete homens de boa reputação, cheios
              do Espírito e de sabedoria, para os encarregarmos desse serviço.
              Quanto a nós, nos consagraremos à oração e ao ministério da
              palavra. (Atos 6:1-4)
            </em>
          </P>
          <P className="">
            Um princípio vital para as igrejas de hoje é que Deus chama todo o
            Seu povo para o ministério, com pessoas diferentes designadas para
            funções específicas, momento em que devem manter o foco naquilo que
            lhes foi incumbido, evitando distrações e promovendo uma organização
            que descentralize as tarefas, permitindo a participação de outros no
            serviço ao Senhor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Percebemos que durante a espera por Pentecostes, os discípulos não
            estavam ociosos e que a oração era unânime. Portanto, as promessas de
            Deus nos estimulam a orar. O dia de Pentecostes é marcado pelo
            derramamento do Espírito Santo, o qual foi prometido por Jesus e
            enviado para capacitar os seguidores de Cristo a lembrarem de tudo o
            que o Messias fez e propagarem as &quot;boas novas&quot; até os
            confins da terra.
          </P>
          <P className="">
            Ao receberem este poder, os discípulos começaram sua missão de fazer
            outros discípulos. Entretanto, a perseguição da igreja é iniciada
            pelos saduceus, pois rejeitavam a ressurreição dos mortos e não criam
            na vinda de um messias. Eles tentaram sufocar o evangelho ao
            prenderem Pedro e João, mas não conseguiram prender as &quot;boas
            novas&quot; e muitos foram convertidos. Por último, precisamos estar
            atentos às estratégias de satanás para esmagar a igreja. Devemos
            tomar cuidado com a corrupção moral infiltrada na casa de Deus e de
            termos os que são chamados ao ministério da palavra focados nesta
            prioridade.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – Os Fundamentos da Missão Mundial</H2>

        <div className="flex flex-col gap-4">
          <P className="font-semibold text-black dark:text-white">
            Objetivo Geral
          </P>
          <P className="mt-0">
            Explanar sobre os primeiros acontecimentos que impulsionaram a missão
            mundial e exemplificar como 4 homens foram importantes para a
            preparação do caminho até os gentios.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-introducao">Introdução</H3>
          <P className="">
            Após a vinda do Espírito Santo, a igreja sofreu um contra-ataque de
            satanás, mas foi derrotado como Lucas relata em Atos 6:7:{" "}
            <em>
              A palavra de Deus crescia e, em Jerusalém, o número dos discípulos
              aumentava. Também um grande grupo de sacerdotes obedecia à fé
            </em>
            .
          </P>
          <P className="">
            Composta apenas de Judeus e restrita somente a Jerusalém, a igreja
            estava quase pronta para iniciar sua missão mundial. O Espírito Santo
            começará a dispersar os cristãos pelo mundo, mas primeiramente Lucas
            explana os fundamentos da missão contando a história de Estêvão, o
            mártir, Filipe, o evangelista, Saulo, o fariseu e a de Cornélio, o
            centurião. Juntamente com Pedro, esses quatro homens contribuíram
            fortemente para a propagação do Evangelho.
          </P>
          <P className="">
            Estêvão, cuja pregação recebeu forte oposição dos judeus, defendeu
            sua posição diante do Sinédrio e argumentou que Deus é livre para ir
            aonde quiser e também para fazer seu povo avançar. Entretanto, foi
            apedrejado até a morte, fato que exerceu influência em Saulo de
            Tarso.
          </P>
          <P className="">
            Filipe foi o primeiro a pregar o Evangelho para os samaritanos
            desprezados, anulando a barreira que os judeus possuíam com este
            povo. Ele também foi usado pelo Espírito para conduzir o primeiro
            africano a Cristo, o eunuco etíope, o qual também foi batizado.
          </P>
          <P className="">
            A igreja é dispersa após o apedrejamento de Estêvão e Saulo de Tarso
            consentiu com a sua morte. Saulo desejou destruir a igreja e começou
            a perseguir e aprisionar os cristãos:{" "}
            <em>
              Indo de casa em casa, arrastava homens e mulheres, lançando-os na
              prisão. (Atos 8:3b)
            </em>{" "}
            Sua conversão foi essencial para a missão de evangelizar os gentios.
          </P>
          <P className="">
            Cornélio, se não o primeiro, foi um dos primeiros gentios a se
            converter e se juntar à igreja. O Espírito Santo falou diretamente a
            ele e a Pedro, cujo preconceito judaico foi vencido em relação aos
            gentios. Apenas após a atuação destes 4 homens a primeira viagem
            missionária ocorre.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-estevao-o-martir">
            Tópico 1: Estêvão, o Mártir (Atos 6:8-7:60)
          </H3>
          <P className="">
            Quem era Estêvão? Precisamos fazer uma revisão da lição anterior para
            recordarmos quem ele era:
          </P>
          <P className="">
            <em>
              Naqueles dias, aumentando o número dos discípulos, houve murmuração
              dos helenistas contra os hebreus, porque as viúvas deles estavam
              sendo esquecidas na distribuição diária. Então os doze convocaram a
              comunidade dos discípulos e disseram: — Não é correto que nós
              abandonemos a palavra de Deus para servir às mesas. Por isso,
              irmãos, escolham entre vocês sete homens de boa reputação, cheios
              do Espírito e de sabedoria, para os encarregarmos desse serviço.
              Quanto a nós, nos consagraremos à oração e ao ministério da
              palavra. O parecer agradou a todos. Então elegeram Estêvão, homem
              cheio de fé e do Espírito Santo, Filipe, Prócoro, Nicanor, Timão,
              Pármenas e Nicolau, prosélito de Antioquia. Apresentaram estes
              homens aos apóstolos, que, orando, lhes impuseram as mãos. (Atos
              6:1-6)
            </em>
          </P>
          <P className="">
            Os apóstolos precisavam se consagrar à oração e ao ministério da
            palavra, pois trabalhos administrativos o impediriam de focar na
            propagação do Evangelho. Desta forma, 7 homens foram escolhidos para
            cuidarem das viúvas e Estêvão, um homem cheio de fé e do Espírito
            Santo, estava entre eles. No versículo posterior, ele é novamente
            apresentado como um homem cheio de graça e poder, que fazia prodígios
            e grandes sinais no meio do povo (Atos 6:8). Agora se diz que além
            dos apóstolos, outros discípulos também operavam prodígios e sinais,
            não se limitando somente aos 12.
          </P>
          <P className="">
            Outro fator importante sobre Estêvão é que, apesar de fazer parte dos
            7 escolhidos para a área administrativa da igreja, ele não deixou de
            pregar, pois foi contra a sua palavra que alguns se levantaram. Eles
            eram da sinagoga chamada dos Libertos, dos cireneus, dos
            alexandrinos e dos da Cilícia e da província da Ásia. Os
            &quot;Libertos&quot; (<em>libertinoi</em>, uma transliteração grega
            de uma palavra latina) eram escravos libertos e seus descendentes.
            Por terem sido libertos da escravidão, eram judeus estrangeiros que
            teriam se mudado para Jerusalém. E os outros? Quem eram os judeus de
            Cirene, Alexandria, Cilícia e Ásia? Alguns estudiosos creem que
            seriam 4 sinagogas diferentes somadas à dos Libertos. Já outros
            julgam ser duas, três ou quatro sinagogas. John Stott considera ser
            somente uma, pois a palavra está no singular. Talvez Saulo de Tarso
            estivesse no meio dos judeus uma vez que ele era originário da
            Cilícia.
          </P>
          <P className="">
            Eles se levantaram contra Estêvão, porém não podiam sobrepor-se à
            sabedoria e ao Espírito com que ele falava (Atos 6:10). Precisamos
            lembrar que uma das promessas de Jesus foi exatamente esta:
          </P>
          <P className="">
            <em>
              &quot;porque eu lhes darei palavras e sabedoria a que não poderão
              resistir nem contradizer todos os que se opuserem a vocês&quot;.
              (Lucas 21:15)
            </em>
          </P>
          <P className="">
            Desapontados com o fato de não poder debater com Estêvão, eles
            começam uma campanha de difamação contra ele e subornam algumas
            pessoas:
          </P>
          <P className="">
            <em>
              Então subornaram alguns homens para que dissessem: — Ouvimos este
              homem proferir blasfêmias contra Moisés e contra Deus. (Atos 6:11)
            </em>
          </P>
          <P className="">
            Posteriormente, esses judeus da sinagoga investiram contra Estêvão, o
            agarraram e o levaram ao sinédrio, apresentando testemunhas falsas
            contra ele. Acusaram-no de não cessar de falar contra o &quot;santo
            lugar e contra a lei&quot;. Por que isso era considerado
            &quot;blasfêmia&quot;? O santo lugar (o templo) é a casa de Deus e a
            lei a &quot;escritura sagrada&quot;, ou seja, Estêvão estaria falando
            contra Deus. Eles usaram o fato de este discípulo ter dito que
            Jesus, o Nazareno, destruiria este lugar e mudaria os costumes que
            Moisés havia dado. O Evangelho de João nos explica ao que Cristo
            estava se referindo:
          </P>
          <P className="">
            <em>
              Então, os judeus lhe perguntaram: — Que sinal milagroso pode
              mostrar-nos como prova da sua autoridade para fazer tudo isso?
              Jesus lhes respondeu: — Destruam este templo, e eu o levantarei em
              três dias. Os judeus responderam: — Este templo levou quarenta e
              seis anos para ser edificado, e você o levantará em três dias?
              Contudo, o templo ao qual ele se referia era o seu corpo (João
              2:18-21)
            </em>
          </P>
          <P className="">
            Jesus está falando de si mesmo ao falar da destruição do templo, pois
            haveria de ressuscitar após 3 dias. Logo, O Cristo falou de seu
            próprio corpo e afirma que Ele é o novo templo de Deus. Por isso que,
            embora no passado terem se reunido no templo para se encontrarem com
            Deus, o novo local para esse ajuntamento seria Ele mesmo. O segundo
            ponto, sobre Jesus falar contra a escritura sagrada, nos remete ao
            fato de que Ele disse que cumpriria a lei dando a sua vida por nós,
            consumando todo o sacerdócio e sacrifício. Portanto, o templo e a lei
            seriam substituídos. Os judeus simplesmente usaram o sentido literal
            das palavras do Nazareno.
          </P>
          <P className="">
            Todos no sinédrio viram o rosto de Estêvão como se fosse rosto de
            anjo. O rosto de Moisés resplandeceu quando desceu do monte Sinai
            quando Deus o entregou a lei:
          </P>
          <P className="">
            <em>
              Quando Moisés desceu do monte Sinai, tendo nas mãos as duas tábuas
              do testemunho, sim, quando desceu do monte, Moisés não sabia que a
              pele do seu rosto resplandecia, depois de Deus ter falado com ele.
              (Êxodo 34:29)
            </em>
          </P>
          <P className="">
            Fato curioso que nos leva a questionar se Deus estaria demonstrando
            que tanto o ministério de Moisés quanto o de Estêvão teriam sua
            validação, uma vez que o rosto de Moisés resplandece ao estar na
            presença de Deus e o de Estêvão ao pregar o Evangelho.
          </P>
          <P className="">
            Apesar de sua mensagem de defesa a partir de Atos 7:2, os judeus
            rilhavam os dentes contra ele, clamaram em alta voz, taparam os
            ouvidos e o apedrejaram (Atos 7:54-59). Como os romanos haviam
            retirado dos judeus o direito de executarem a pena capital, este
            apedrejamento pode ser considerado um linchamento popular. E deixaram
            suas vestes aos pés de um jovem chamado Saulo (v. 58b).
          </P>
          <P className="">
            Assim como na crucificação de Jesus, Estêvão clamou em alta voz no
            momento de sua morte e disse &quot;Senhor, recebe o meu
            espírito&quot; e também pediu para que não fosse imputado pecado aos
            que o apedrejaram. Bem parecido com as palavras de Jesus na cruz, com
            a diferença de que O Messias se dirigiu a Deus e Estêvão clamou a
            Jesus. O discípulo imitando o seu mestre. E adormeceu: um termo
            sutil para quem havia acabado de sofrer uma morte brutal. E Saulo de
            Tarso consentia com sua morte (Atos 8:1a).
          </P>
          <P className="">
            Muitos colocam o foco em Estêvão ter sido o primeiro mártir na
            história do cristianismo, mas o que Lucas enfatiza é seu papel na
            missão cristã mundial por meio do seu ensino e morte. No Antigo
            Testamento, Deus estava atado a seu povo onde quer que estivesse e
            não em edifícios. Do mesmo modo, Jesus está com seu povo onde quer
            que seja. Quando Paulo e Barnabé partem em sua primeira viagem
            missionária, eles vão descobrir que, assim como Abraão, José e
            Moisés, Deus está com eles e é precisamente isso que relatam ao
            voltar (Atos 14:27; 15:12). Uma afirmação essencial para a missão,
            pois mudanças são difíceis uma vez que afetam onde iremos morar e
            nossos costumes. A igreja de Deus é um povo e não edifícios e a
            palavra de Deus são as Escrituras e não as tradições.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-filipe-o-evangelista">
            Tópico 2: Filipe, o Evangelista (Atos 8:1-40)
          </H3>
          <P className="">
            Filipe, assim como Estêvão, fazia parte dos 7 que foram escolhidos
            para cuidar das viúvas:
          </P>
          <P className="">
            <em>
              O parecer agradou a toda a comunidade; e elegeram Estêvão, homem
              cheio de fé e do Espírito Santo, Filipe, Prócoro, Nicanor, Timão,
              Pármenas e Nicolau, prosélito de Antioquia. Apresentaram-nos
              perante os apóstolos, e estes, orando, lhes impuseram as mãos.
              (Atos 6:5-6)
            </em>
          </P>
          <P className="">
            Lucas crê que o ministério de ambos ajudou a preparar o caminho para
            a missão entre os gentios. Com a morte de Estêvão, os discípulos
            foram dispersos para a Judeia e Samaria:
          </P>
          <P className="">
            <em>
              Naquele dia, levantou-se grande perseguição contra a igreja em
              Jerusalém; e todos, exceto os apóstolos, foram dispersos pelas
              regiões da Judeia e Samaria. (Atos 8:1b)
            </em>
          </P>
          <P className="">
            Ao fugirem da perseguição contra a igreja, os discípulos iam por toda
            a parte pregando o Evangelho. Enquanto os apóstolos continuavam em
            Jerusalém, os outros cristãos conduziram a evangelização nos outros
            locais: &quot;<em>Entrementes, os que foram dispersos iam por toda
            parte pregando a palavra</em>&quot; (Atos 8:4). Porém, isso não
            significa dizer que viraram &quot;pregadores&quot; ou
            &quot;missionários&quot; de tempo integral, pois a expressão grega
            não significa mais do que &quot;compartilharam as boas novas&quot;.
          </P>
          <P className="">
            <em>
              Filipe, descendo à cidade de Samaria, anunciava-lhes a Cristo. As
              multidões atendiam, unânimes, às coisas que Filipe dizia,
              ouvindo-as e vendo os sinais que ele operava. Pois os espíritos
              imundos de muitos possessos saíam gritando em alta voz; e muitos
              paralíticos e coxos foram curados. E houve grande alegria naquela
              cidade. (Atos 8:5-8)
            </em>
          </P>
          <P className="">
            Pode ser um pouco difícil para entendermos a coragem de Filipe ao
            pregar o evangelho aos samaritanos, pois o conflito entre judeus e
            samaritanos já existia há mil anos. Este desentendimento começou no
            século X a.C., quando as 10 tribos desertaram e fizeram Samaria a
            sua capital, e somente 2 tribos continuaram a ser leais a Jerusalém.
            O atrito se acentuou com a captura de Samaria pela Assíria em 722
            a.C., causando muitos a serem deportados e o país ser repovoado por
            estrangeiros. Quando os judeus voltaram para sua terra, no século VI
            a.C., recusaram a ajuda de Samaria na reconstrução do templo. O
            conflito se consolidou no século V a.C., quando um templo rival no
            monte Gerizim foi construído e rejeitaram as Escrituras do Antigo
            Testamento, com exceção do Pentateuco. Os judeus menosprezam os
            samaritanos como híbridos, na raça e na religião, pois os consideram
            hereges e cismáticos. No Evangelho de João, o Autor afirma que
            &quot;<em>os judeus não se dão bem com os samaritanos</em>&quot;
            (João 4:9b). Entretanto, sabemos que Jesus possuía uma simpatia por
            eles.
          </P>
          <P className="">
            <strong>2.1 Filipe e o Eunuco</strong>
          </P>
          <P className="">
            <em>
              Um anjo do Senhor disse a Filipe: — Levante-se e vá para o Sul, no
              caminho que desce de Jerusalém a Gaza; este se acha deserto. Filipe
              se levantou e foi. Havia um etíope, eunuco, alto oficial de
              Candace, rainha dos etíopes, o qual era superintendente de todo o
              seu tesouro. Ele tinha vindo adorar em Jerusalém e estava
              regressando ao seu país. E, assentado na sua carruagem, vinha lendo
              o profeta Isaías. (Atos 8:26-27)
            </em>
          </P>
          <P className="">
            A &quot;Etiópia&quot; a que Atos se refere correspondia ao &quot;Nilo
            Superior&quot; de hoje, área de Assuã a Cartum. O Etíope exercia um
            cargo alto e provavelmente era um negro africano. Ele pode ter sido
            judeu por nascimento ou conversão, uma vez que a dispersão judaica
            tinha chegado ao Egito e, talvez, além dessa região. Não é provável
            que ele seja gentio, pois Lucas o teria apontado como o primeiro
            gentio convertido.
          </P>
          <P className="">
            O Espírito Santo ordena Filipe a se aproximar do carro e
            acompanhá-lo, quando ouve que o Eunuco estava lendo o profeta Isaías
            (todos liam em voz alta naquela época). Ao Filipe perguntar se ele
            compreendia o que lia, ele humildemente responde que não entenderia
            se alguém não o explicasse. Armínio (1853) enfatizava a importância
            da vontade humana e da responsabilidade individual na busca pela
            verdade. Ele acreditava que cada pessoa deveria ser incentivada a ler
            e interpretar a Bíblia, não apenas de maneira passiva, mas de forma
            ativa, participando do processo de compreensão e aplicação dos
            ensinamentos bíblicos. Para ele, o estudo bíblico era essencial para
            uma fé genuína e uma vida cristã sólida, destacando que a negligência
            desse estudo afastava os cristãos da verdadeira compreensão de Deus e
            de Sua vontade. O coração do eunuco estava com solo fértil para
            receber o evangelho e foi prontamente batizado. Paulo precisou de uma
            visão sobrenatural de Jesus para crer, enquanto o etíope não passou
            por absolutamente nada que fosse sobrenatural, mas creu.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-conversao-de-saulo-e-cornelio">
            Tópico 3: A Conversão de Saulo e Cornélio (Atos 9:1-11:18)
          </H3>
          <P className="">
            <strong>3.1 A conversão de Saulo</strong>
          </P>
          <P className="">
            <em>
              Saulo, respirando ainda ameaças e morte contra os discípulos do
              Senhor, dirigiu-se ao sumo sacerdote e lhe pediu cartas para as
              sinagogas de Damasco, a fim de que, caso achasse alguns que eram do
              Caminho, tanto homens como mulheres, os levassem presos para
              Jerusalém. Enquanto seguia pelo caminho, ao aproximar-se de
              Damasco, subitamente uma luz do céu brilhou ao seu redor. Ele caiu
              por terra e ouviu uma voz que lhe dizia: — Saulo, Saulo, por que
              você me persegue? Ele perguntou: — Senhor, quem é você? E a
              resposta foi: — Eu sou Jesus, a quem você persegue. Mas levante-se
              e entre na cidade, onde lhe dirão o que você deve fazer. Os homens
              que viajavam com Saulo pararam emudecidos, ouvindo a voz, mas não
              vendo ninguém. Então Saulo se levantou do chão e, abrindo os olhos,
              nada podia ver. E, guiando-o pela mão, levaram-no para Damasco.
              Esteve três dias sem ver, durante os quais nada comeu, nem bebeu.
              (Atos 9:1-9)
            </em>
          </P>
          <P className="">
            Saulo de Tarso, nascido na Cilícia, foi instruído por Gamaliel
            segundo o rigor da Lei e era zeloso para com Deus (Atos 22:3). Ele
            esperava entrar na cidade de Damasco como um corajoso adversário de
            Cristo, mas entrou sendo guiado por outros, humilhado e cego. Ao
            Jesus perguntar &quot;por que me persegues?&quot;, Ele está
            questionando diretamente a consciência de Saulo. Então, Saulo se pôs
            a orar e jejuar ao chegar em Damasco. Entretanto, a conversão de
            Saulo não estava completa, pois Deus fala com o discípulo Ananias em
            uma visão:
          </P>
          <P className="">
            <em>
              Então o Senhor lhe disse: — Levante-se e vá à rua que se chama
              Direita e, na casa de Judas, procure um homem de Tarso chamado
              Saulo. Ele está orando e, numa visão, viu entrar um homem, chamado
              Ananias, e impor-lhe as mãos, para que recuperasse a vista. (Atos
              9:11-12)
            </em>
          </P>
          <P className="">
            A princípio, Ananias hesitou em ir ao encontro de Saulo, pois sabia
            que este perseguia as igrejas. Seria suicídio! Mas Jesus replicou
            &quot;VAI!&quot;, visto que Saulo iria se transformar em um
            instrumento poderoso na evangelização dos gentios e Jesus fez questão
            de confirmar seu ministério através de outro discípulo.
          </P>
          <P className="">
            <em>
              Então Ananias foi e, entrando na casa, impôs as mãos sobre Saulo,
              dizendo: — Saulo, irmão, o Senhor Jesus, que apareceu a você no
              caminho para cá, me enviou para que você volte a ver e fique cheio
              do Espírito Santo. Imediatamente caíram dos olhos de Saulo umas
              coisas parecidas com escamas, e ele voltou a ver. A seguir,
              levantou-se e foi batizado. E, depois de comer, sentiu-se
              fortalecido. (Atos 9:17-19)
            </em>
          </P>
          <P className="">
            As primeiras palavras de Ananias para Saulo foram &quot;Saulo,
            irmão&quot;! Ele estava dando as &quot;boas-vindas&quot;, tratando-o
            como parte da família cristã. Interessante notar que Ananias impôs as
            mãos em um homem temporariamente cego. Um toque para uma pessoa que
            não podia ver a expressão no rosto de Ananias, mas conseguia sentir
            seu toque de cuidado. Saulo se torna agora o propagador das
            &quot;boas novas&quot; e vira uma testemunha de Cristo. A palavra
            grega para &quot;testemunho&quot; é <em>martys</em>, que veio a ser
            associada com martírio. Deus escolheu um rebelde como Saulo e o
            mudou de lobo para ovelha.
          </P>
          <P className="">
            <strong>3.2 A conversão de Cornélio</strong>
          </P>
          <P className="">
            Depois de lermos sobre a conversão de Saulo, Lucas relata a de
            Cornélio, provavelmente o primeiro gentio a se tornar cristão.
            Cornélio era um centurião, homem piedoso e temente a Deus, que fazia
            muitas esmolas ao povo e sempre orava (Atos 10:1-2). Um dia ele teve
            uma visão na qual viu um anjo que dizia para mandar chamar Pedro
            (Atos 10:3-8). Esta história tem Pedro como agente principal e ele
            parece estar com uma atitude mental preparada para receber as
            instruções de ir e batizar Cornélio, pois no capítulo 9 Pedro se
            hospeda na casa de um curtidor. Os curtidores eram julgados como
            cerimonialmente impuros por trabalharem com animais mortos. Como Deus
            iria lidar com Pedro e mudar a intolerância racial dele? A resposta é
            dada nesta visão:
          </P>
          <P className="">
            <em>
              No dia seguinte, enquanto eles viajavam e já estavam perto da
              cidade de Jope, Pedro subiu ao terraço, por volta do meio-dia, a
              fim de orar. Estando com fome, quis comer; mas, enquanto lhe
              preparavam a comida, sobreveio-lhe um êxtase. Viu o céu aberto e
              um objeto como se fosse um grande lençol, que descia do céu e era
              baixado à terra pelas quatro pontas, contendo todo tipo de
              quadrúpedes, répteis da terra e aves do céu. E ouviu-se uma voz
              que se dirigia a ele: — Levante-se, Pedro! Mate e coma. Mas Pedro
              respondeu: — De modo nenhum, Senhor! Porque nunca comi nada que
              fosse impuro ou imundo. Pela segunda vez, a voz lhe falou: — Não
              considere impuro aquilo que Deus purificou. Isso aconteceu três
              vezes, e, em seguida, aquele objeto foi levado de volta para o céu.
              (Atos 10:9-16)
            </em>
          </P>
          <P className="">
            Deus tratou com o coração de Pedro e o ensinou a não fazer distinção
            entre os judeus e os gentios. Este fato contribuiu para o avanço da
            propagação do Evangelho para todos os povos, pois Pedro precisava
            entender primeiramente que a salvação é estendida a todas as pessoas.
            Pedro e os que foram com ele à casa de Cornélio testificam que o
            Espírito Santo é derramado sobre os gentios também (Atos 10:44-46).
            Os da casa de Cornélio pedem a Pedro que permanecesse com eles por
            alguns dias, pois seria uma forma de nutri-los com a palavra.
            Portanto, concluímos que o Espírito Santo faz a obra de conversão,
            mas também precisamos de mestres humanos para nos ensinar acerca das
            Escrituras.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-expansao-e-oposicao">
            Tópico 4: Expansão e Oposição (Atos 11:19-12:24)
          </H3>
          <P className="">
            Nos capítulos de Atos 11:19-12:24, vemos a expansão da igreja que
            chegou à Fenícia, Chipre e Antioquia, lugar onde os discípulos são
            chamados de &quot;cristãos&quot; pela primeira vez. Entretanto,
            Herodes, mandou prender alguns da igreja para maltratar. A igreja
            sofre oposição do rei e Tiago, irmão de João, é morto à espada e
            Pedro é preso. É nesta hora que vemos como a igreja orou
            fervorosamente a Deus. Como John Stott declara: &quot;a igreja se
            voltou à oração, a única arma daqueles que não têm poder&quot;.
            Mesmo Pedro algemado e enclausurado na prisão com segurança máxima,
            Deus faz um milagre de enviar seu anjo para o libertar. O Senhor
            pode permitir que os tiranos se orgulhem por um tempo, oprimindo a
            igreja, mas eles não vencem. Herodes foi ferido por um anjo do
            Senhor e, comido por vermes, morreu (Atos 12:23).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            Com a dispersão dos discípulos, Deus começa a preparar o caminho
            para que os gentios sejam alcançados. Mesmo estando prestes a morrer,
            Estêvão prega as &quot;boas novas&quot;. O primeiro mártir dá o
            exemplo de como importa sofrermos por Cristo para que o Evangelho
            seja propagado. Filipe, com sua ousadia, estende a mensagem cristã
            aos samaritanos, quebrando a barreira de anos de desentendimento com
            os judeus.
          </P>
          <P className="">
            A conversão de Saulo abriu um caminho ainda maior para a missão
            mundial, pois ele era o agente que perseguia a igreja e, agora,
            usando toda a sua sabedoria da lei, prega Cristo crucificado e
            ressurreto, O Messias esperado. Por último, Pedro, vencendo seu
            preconceito contra os não judeus, tem uma revelação que a salvação é
            para todos e testemunha isso com a conversão de Cornélio,
            provavelmente o primeiro gentio a se tornar cristão. A obra de Deus
            pode sofrer uma oposição momentânea, mas satanás não prevalecerá.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">Lição 4 – O Apóstolo dos Gentios</H2>

        <div className="flex flex-col gap-4">
          <P className="font-semibold text-black dark:text-white">
            Objetivo Geral
          </P>
          <P className="mt-0">
            Explanar ao leitor as características das viagens missionárias de
            Paulo, as divergências entre judeus e gentios sobre a questão da
            salvação e como o apóstolo dos gentios chegou até Roma.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-introducao">Introdução</H3>
          <P className="">
            Com o cumprimento da profecia de Jesus Cristo, Seu Nome foi pregado
            em Jerusalém e toda a Judeia e Samaria e, agora, é abrangido até
            &quot;os confins da terra&quot;. Estêvão e Filipe, os diáconos da
            igreja, prepararam o caminho por meio de martírio (Estêvão) e
            evangelização ousada entre os samaritanos. Além disso, Pedro recebe
            uma revelação sobre os não judeus e, com a conversão de Cornélio
            (provavelmente o primeiro gentio a se converter) a igreja entende que
            a salvação é para todos os que creem. Entretanto, o evangelismo
            estava delimitado à Palestina e Síria e, apesar de Chipre ter sido
            citado em Atos 11:9, não havia planos de propagar as boas novas às
            outras nações além do mar. Agora com Saulo, que havia também sido
            comissionado a apóstolo, a primeira viagem missionária vem a se
            tornar realidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-primeira-viagem-missionaria">
            Tópico 1: A Primeira Viagem Missionária (Atos 12:25-14:28)
          </H3>
          <P className="">
            Profetas e mestres se encontravam na igreja de Antioquia e, enquanto
            eles estavam adorando e jejuando, o Espírito Santo diz a eles para
            separar Barnabé e Saulo para a obra que os tinha chamado. Barnabé era
            um homem de bem, cheio do espírito e de muita fé (Atos 11:24).
          </P>
          <P className="">
            Então, Barnabé e Saulo foram até Selêucia e de lá navegaram até
            Chipre. Ao chegar em Salamina, iniciaram a propagação do Evangelho
            nas sinagogas judaicas e João Marcos os auxiliava. O vocábulo{" "}
            <em>hyperetes</em> era usado em relação a um servo ou assistente de
            médicos, oficiais do exército, sacerdotes e políticos, não explicando
            se a ajuda de Marcos era no sentido pastoral ou prática (cozinhando,
            limpando). Lucas enfatiza três episódios na primeira viagem
            missionária: Paulo compartilhando as &quot;boas novas&quot; para o
            procônsul e confrontando um judeu mágico em Pafos, pregando em
            Antioquia da Pisídia e falando ao ar livre para pagãos em Listra.
          </P>
          <P className="">
            O mágico, Barjesus, era um falso profeta e também tinha por nome{" "}
            <em>Elimas</em>. Os judeus costumavam ter um segundo nome grego ou
            romano e foi neste momento que Lucas decide apresentar o outro nome
            de Saulo, uma vez que ele estava avançando para um contexto não
            judaico: <em>mas Saulo, também chamado Paulo</em> (Atos 13:9). O
            procônsul Sérgio Paulo almejava ouvir a palavra de Deus e mandou
            chamar Barnabé e Saulo, mas Elimas se opunha a eles. Então, Saulo, o
            repreende e o mágico fica cego. Vendo o que tinha acontecido, o
            procônsul crê e fica maravilhado com a doutrina do Senhor.
          </P>
          <P className="">
            <em>
              &quot;E, navegando de Pafos, Paulo e seus companheiros viajaram a
              Perge da Panfília. João, porém, deixando-os, voltou para
              Jerusalém&quot;. (Atos 13:13)
            </em>
          </P>
          <P className="">
            O texto bíblico acima não expõe o motivo de João Marcos ter deixado
            Paulo e seus companheiros. A opinião de Lucas só fica clara em
            relação a este acontecimento em Atos 15:38:{" "}
            <em>
              Mas Paulo não achava justo levar aquele que tinha se afastado deles
              desde a Panfília, não os acompanhando no trabalho.
            </em>{" "}
            O termo &quot;afastar&quot; tem o significado de &quot;desertar&quot;,
            &quot;abandonar&quot;. Entretanto, posteriormente, João voltou a ser
            útil para o ministério de Paulo (Colossenses 4:10; 2 Timóteo 4:11).
          </P>
          <P className="">
            Ao chegarem em Antioquia da Pisídia, entraram na sinagoga no sábado.
            Após a leitura da Lei e dos Profetas, os chefes da sinagoga
            disseram-lhes que se tivessem alguma palavra de consolo, que a
            proferissem. Paulo levanta e faz um discurso começando com um resumo
            da história de Israel, dos patriarcas à monarquia. Em seguida, conta
            a história de Jesus e foca em Sua morte e ressurreição, revelando o
            cumprimento das Escrituras. Finalmente, Paulo faz o apelo entre a
            vida e a morte:
          </P>
          <P className="">
            <em>
              Portanto, meus irmãos, saibam que é por meio de Jesus que a
              remissão dos pecados é anunciada a vocês; e, por meio dele, todo o
              que crê é justificado de todas as coisas das quais vocês não
              puderam ser justificados pela lei de Moisés. Portanto, tenham
              cuidado para que não lhes aconteça o que os profetas disseram:
              &quot;Vejam, ó desprezadores! Fiquem maravilhados e desapareçam,
              porque, no tempo de vocês, eu realizo obra tal que vocês não
              acreditarão se alguém lhes contar.&quot; (Atos 13:38-41)
            </em>
          </P>
          <P className="">
            Através da Lei de Moisés não há justificação para ninguém, porém, por
            intermédio de Jesus todo o que crê será salvo. A resposta à pregação
            de Paulo foi positiva:
          </P>
          <P className="">
            <em>
              &quot;Quando Paulo e Barnabé estavam saindo, as pessoas pediram
              que, no sábado seguinte, lhes falassem estas mesmas palavras.
              Terminada a reunião na sinagoga, muitos dos judeus e dos prosélitos
              piedosos seguiram Paulo e Barnabé, e estes, falando com eles, os
              persuadiam a continuar firmes na graça de Deus&quot;. (Atos
              13:42-43)
            </em>
          </P>
          <P className="">
            No sábado seguinte, quase toda a cidade se reuniu para ouvir a
            Palavra, mas os judeus ficaram com inveja ao verem a multidão e
            blasfemaram, contradizendo o que Paulo pregava. Ao que Barnabé e
            Paulo responderam:{" "}
            <em>
              Era necessário pregar a palavra de Deus primeiro a vocês. Mas, como
              vocês a rejeitam e se julgam indignos da vida eterna, eis que nós
              voltamos para os gentios
            </em>{" "}
            (Atos 13:46). E houve muita alegria entre os gentios ao ouvirem
            isso. O Evangelho foi propagado, mas os judeus começaram a perseguir
            Paulo e Barnabé e, estes, sacudindo o pó dos pés, foram para Icônio.
            Lá, pregaram de tal forma que muitos vieram a crer, tanto judeus como
            gregos. Apesar de os judeus que não creram neles terem incitado e
            irritado o ânimo dos gentios, Paulo e Barnabé ainda passaram um bom
            tempo evangelizando em Icônio. Todavia, alguns judeus e gentios
            formaram um movimento para os maltratar e apedrejar, o que levou
            Paulo e Barnabé a fugirem para Listra e Derbe.
          </P>
          <P className="">
            Em Listra, Paulo cura um paralítico de nascença e gera uma comoção
            entre o povo:
          </P>
          <P className="">
            <em>
              Quando as multidões viram o que Paulo tinha feito, gritaram em
              língua licaônica: — Os deuses, em forma de homens, desceram até
              nós. A Barnabé chamavam Júpiter, e a Paulo, Mercúrio, porque este
              era o principal portador da palavra. O sacerdote de Júpiter, cujo
              templo estava em frente da cidade, trazendo touros e grinaldas para
              junto dos portões da cidade, queria oferecer um sacrifício
              juntamente com a multidão. Porém, ouvindo isto, os apóstolos
              Barnabé e Paulo, rasgando as suas roupas, saltaram para o meio da
              multidão, gritando: — Senhores, por que estão fazendo isto? Nós
              também somos seres humanos como vocês, sujeitos aos mesmos
              sentimentos, e anunciamos o evangelho a vocês para que se convertam
              destas coisas vãs ao Deus vivo, que fez o céu, a terra, o mar e
              tudo o que neles há.
            </em>
          </P>
          <P className="">
            Uma lenda local conta que Júpiter e Mercúrio uma vez visitaram a
            região montanhosa da Frígia, mas estavam disfarçados de homens. Ao
            procurar abrigo, foram rejeitados milhares de vezes, até que um casal
            de camponeses idosos ofereceram sua cabana para hospedá-los, embora
            fossem pobres. Os deuses recompensaram os idosos, mas destruíram os
            que não os ajudaram com uma enchente. Como a língua licaônica era
            usada para anunciar a sua crença de que os deuses os visitavam, Paulo
            e Barnabé não compreendiam o que estava acontecendo inicialmente. O
            fato de os missionários terem rasgado as suas vestes reflete quão
            horrorizados estavam com a blasfêmia do povo.
          </P>
          <P className="">
            <em>
              — Senhores, por que estão fazendo isto? Nós também somos seres
              humanos como vocês, sujeitos aos mesmos sentimentos, e anunciamos o
              evangelho a vocês para que se convertam destas coisas vãs ao Deus
              vivo, que fez o céu, a terra, o mar e tudo o que neles há. Nas
              gerações passadas, Deus permitiu que todos os povos andassem nos
              seus próprios caminhos. Contudo, não deixou de dar testemunho de si
              mesmo, fazendo o bem, dando a vocês chuvas do céu e estações
              frutíferas, enchendo o coração de vocês de fartura e de alegria.
              Dizendo isto, foi ainda com dificuldade que impediram a multidão de
              lhes oferecer sacrifícios. (Atos 15:15-18)
            </em>
          </P>
          <P className="">
            O discurso de Paulo para iletrados pagãos nos mostra como o apóstolo
            usava abordagens diferentes para falar com leigos em Listra. Ao falar
            com os judeus em Antioquia, ele prega sobre o Antigo Testamento, mas
            com os pagãos, ele usou o mundo natural ao redor, que eles conheciam
            e viam. A mensagem tem seu cerne em Cristo, mas com abordagens
            diferentes para grupos de pessoas distintas. Após ser apedrejado e ir
            a Derbe, Paulo retorna com Barnabé a Listra, Icônio e Antioquia da
            Síria. Precisamos dar ênfase ao versículo de Atos 14:23:{" "}
            <em>
              E, promovendo-lhes, em cada igreja, a eleição de presbíteros.
            </em>{" "}
            Paulo precisou deixar os novos convertidos, mas deixou-os equipados
            com presbíteros. Há uma total dependência do Espírito Santo aqui,
            pois Paulo não poderia estar em vários lugares ao mesmo tempo, mas
            precisava se afastar dos novos cristãos para que eles crescessem
            independente dele, mas dependentes de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-concilio-de-jerusalem">
            Tópico 2: O Concílio de Jerusalém (Atos 15:1-16:5)
          </H3>
          <P className="">
            <em>
              Alguns indivíduos que foram da Judeia para Antioquia ensinavam aos
              irmãos: — Se vocês não forem circuncidados segundo o costume de
              Moisés, não podem ser salvos. Tendo surgido um conflito e grande
              discussão de Paulo e Barnabé com eles, foi resolvido que esses dois
              e mais alguns fossem a Jerusalém, aos apóstolos e presbíteros, para
              tratar desta questão. (Atos 15:1-2)
            </em>
          </P>
          <P className="">
            Como Deus iria incorporar os gentios à comunidade cristã? Eles
            tornaram-se cristãos, mas não judeus. A paz na comunhão cristã em
            Antioquia da Síria foi quebrada com a chegada de alguns da Judeia, o
            qual posteriormente Paulo chama de &quot;perturbadores&quot;. Eles
            afirmavam que os gentios precisavam se circuncidar e observar a lei
            de Moisés. Esta é a mesma situação a que Paulo se refere em Gálatas
            2:11-16.
          </P>
          <P className="">
            O pecador é salvo pela graça somente ou parte pela graça e parte por
            nossas boas obras? Uma mistura de fé e obras, graça e lei, Jesus e
            Moisés? A igreja de Antioquia decide convocar um concílio para
            esclarecer as dúvidas, acabar com as controvérsias e restabelecer a
            paz. Então, Paulo e Barnabé e mais alguns deveriam ir a Jerusalém
            para solucionar essas questões.
          </P>
          <P className="">
            Uma carta foi escrita aos gentios em Antioquia, Síria e Cilícia,
            afirmando que saíram do meio deles um grupo que os perturbou com
            palavras e os transtornou a mente. O que ficou decidido? Os próximos
            versículos respondem a este questionamento:
          </P>
          <P className="">
            <em>
              Pois pareceu bem ao Espírito Santo e a nós não impor a vocês maior
              encargo além destas coisas essenciais: que vocês se abstenham das
              coisas sacrificadas a ídolos, bem como do sangue, da carne de
              animais sufocados e da imoralidade sexual; se evitarem essas
              coisas, farão bem. (Atos 15:28-29)
            </em>
          </P>
          <P className="">
            O concílio de Jerusalém obteve duas conquistas: confirmou o Evangelho
            da graça e o amor venceu ao preservar a comunhão através de
            concessões aos escrúpulos dos judeus conscienciosos. Como Lutero
            afirma: Paulo era forte na fé e manso no amor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-missoes">
            Tópico 3: Missões (Atos 16:6-21:17)
          </H3>
          <P className="">
            A semente do Evangelho é plantada pela primeira vez na Europa, uma
            missão que estava no coração de Deus, pois foi deste local que as
            &quot;boas novas&quot; se espalharam para os grandes continentes:
            África, Ásia, América do Norte, América Latina e Oceania. Paulo
            incluía as capitais em suas viagens e ainda escreveria a cada uma das
            igrejas nessas capitais.
          </P>
          <P className="">
            <em>
              E percorreram a região frígio-gálata, tendo sido impedidos pelo
              Espírito Santo de pregar a palavra na província da Ásia. Chegando
              perto de Mísia, tentaram ir para Bitínia, mas o Espírito de Jesus
              não o permitiu. E, tendo contornado Mísia, foram a Trôade. À
              noite, Paulo teve uma visão na qual um homem da Macedônia estava em
              pé e lhe rogava, dizendo: — Passe à Macedônia e ajude-nos. Assim
              que Paulo teve a visão, imediatamente procuramos partir para aquele
              destino, concluindo que Deus nos havia chamado para lhes anunciar o
              evangelho. (Atos 16:6-10)
            </em>
          </P>
          <P className="">
            Uma característica importante nas viagens de Paulo é que ele estava
            na total dependência do Espírito Santo. O Espírito o impede de pregar
            na província da Ásia, de ir para Bitínia e é o mesmo quem lhe deu uma
            visão para ir à Macedônia. Outro fator essencial é a prontidão de
            Paulo para obedecer ao chamado de Deus, pois no versículo 10 eles
            procuraram partir <em>imediatamente</em>. Entretanto, o apóstolo não
            tomou uma decisão sozinho, pois o verbo &quot;concluindo&quot;,
            significa literalmente &quot;juntar&quot;, &quot;encaixar
            mentalmente&quot;. Ou seja, ele partilhou os dados com os outros
            para, assim, decidir partir.
          </P>
          <P className="">
            Lucas cita a conversão de 3 pessoas em Atos 16: Lídia, a qual parece
            ser uma mulher rica, uma jovem escrava anônima e o carcereiro romano.
            Pessoas de diferentes classes sociais, mas que foram recebidas sem
            distinção na igreja. No judaísmo, o cabeça da casa sempre orava
            agradecendo não ter nascido mulher, gentio nem escravo, mas aqui
            estavam os representantes dessas classes salvos em Cristo.
          </P>
          <P className="">
            Como Paulo havia escrito aos gálatas: não pode haver judeu nem grego;
            nem escravo nem liberto; nem homem nem mulher; porque todos vós sois
            um em Cristo. Este é o poder unificador do Evangelho.
          </P>
          <P className="">
            Lucas relata as missões em Tessalônica e Bereia com bastante
            brevidade, porém os cristãos de Bereia deram um grande exemplo a ser
            seguido pelos demais. Paulo pregou para eles e os judeus de Bereia
            examinavam as escrituras para verificar se seus argumentos eram
            convincentes. John Stott afirma que Paulo &quot;acreditava na
            doutrina (sua mensagem possuía um conteúdo teológico), mas não no
            doutrinamento (instrução tirânica que exige aceitação sem
            crítica)&quot;.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-roma">Tópico 4: Roma (Atos 21:18-28:31)</H3>
          <P className="">
            Depois de suas viagens missionárias, Paulo chega a Jerusalém e há uma
            mudança abrupta. Ele foi atacado, capturado, preso e julgado. Lucas
            relata os 5 julgamentos que ele passou: diante de uma multidão de
            judeus na área do templo, diante do Supremo Conselho dos judeus, em
            Cesareia (terceiro e quarto) diante de Félix e Festo e o último
            diante do rei Herodes Agripa II, também em Cesareia. Esses 5
            julgamentos englobam 6 capítulos na Bíblia, quase duzentos
            versículos, pois Lucas achou interessante retratar a reação dos
            judeus (que estavam mais hostis ao Evangelho) e os romanos
            (francamente favoráveis).
          </P>
          <P className="">
            Apesar dos sofrimentos de Paulo não terem uma característica
            redentora, eles foram parecidos com o de Jesus, pois ambos o apóstolo
            e o Messias: foram rejeitados pelo seu próprio povo, foram acusados
            injustamente, foram batidos no rosto diante de um tribunal, foram
            vítimas infelizes dos planos dos judeus, ouviram o barulho de uma
            multidão que dizia &quot;mata-o&quot; e foram sujeitados a uma série
            de 5 julgamentos.
          </P>
          <P className="">
            Além disso, Paulo e Jesus foram acusados pelos judeus, mas julgados
            pelos romanos. Lucas nos mostra que apesar das acusações dos judeus,
            os romanos não foram capazes de encontrar nenhum erro sequer neles.
            Após Paulo se apresentar diante do Sinédrio, O Senhor aparece a ele:
          </P>
          <P className="">
            <em>
              Na noite seguinte, o Senhor, pondo-se ao lado de Paulo, disse: —
              Coragem! Pois assim como você deu testemunho a meu respeito em
              Jerusalém, é necessário que você testemunhe também em Roma. (Atos
              23:11)
            </em>
          </P>
          <P className="">
            Coragem! Coragem, Paulo! Provavelmente, a violência dos últimos dias,
            a acusação dos judeus e estar diante do sinédrio deixaram o apóstolo
            ansioso quanto ao que estava por vir. Jesus o conforta com uma
            palavra clara e direta, o que deve ter dado a ele a calma e coragem
            que ele precisava para suportar os 3 primeiros julgamentos, 2 anos
            de prisão e sua viagem cheia de adversidades até Roma.
          </P>
          <P className="">
            Roma era a capital do Império Romano e sua fundação foi chamada de
            &quot;a maior conquista política de todos os tempos&quot;. Era a
            maior e mais estonteante das cidades antigas, ficando famosa pela sua
            administração e facilitou viagens através de um sistema de estradas e
            portos, agindo como ímã para as pessoas. Era ali que poderia ser o
            centro de propagação do Evangelho. Paulo chegou a Roma apesar de uma
            viagem atribulada, mas chegou como prisioneiro. A promessa de Jesus
            não incluiu esta informação. Sua prisão e julgamento deram-se por
            sua lealdade ao Evangelho. O sofrimento autenticou o seu ministério e
            ele estava à disposição de morrer por Cristo. Ele combateu o bom
            combate, completou a carreira, guardou a fé.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            Muitos foram os problemas encontrados por Paulo em suas viagens
            missionárias, mas ele seguiu firme até completar sua carreira. As
            viagens missionárias fizeram com que a promessa de Jesus fosse
            cumprida de pregar as boas novas &quot;até os confins da terra&quot;.
            Vemos como as igrejas foram instituídas pelo Espírito Santo e como o
            apóstolo precisava se afastar para que elas ficassem dependentes de
            Deus.
          </P>
          <P className="">
            Já o concílio de Jerusalém veio resolver o problema interno da
            igreja: a salvação é somente pela graça e não uma mistura de graça e
            lei. As outras missões de Paulo nos relatam seu caráter de coragem e
            fé em Cristo a ponto de sofrer pelo Evangelho, pois para Paulo o
            viver é Cristo e o morrer é lucro.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Referências Bibliográficas */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="references">Referências Bibliográficas</H2>
        <div className="flex flex-col gap-4">
          <P className="">
            ARMÍNIO, Jacó. <em>The Works of James Arminius, D.D., Formerly
            Professor of Divinity in the University of Leyden.</em> Translated
            by James Nichols, Auburn and Buffalo: Derby, Miller and Orton, 1853.
          </P>
          <P className="">
            BARCLAY, William. <em>The Acts of the Apostles</em>. 3. Ed. -
            Kentucky: Westminster John Knox Press, 2003.
          </P>
          <P className="">
            <em>Bíblia King James Fiel</em>: com Estudo Holman. Rio de Janeiro:
            BV Films Editora, 2015.
          </P>
          <P className="">
            CADBURY, Henry. <em>The Making of Luke-Acts</em> (Macmillan, 1927;
            2ª ed. SPCK, 1958).
          </P>
          <P className="">
            FEE, Gordon et al. <em>How to Read the Bible: Book by Book</em>.
            Michigan: Zondervan, 2002.
          </P>
          <P className="">
            STOTT, John. <em>A Mensagem de Atos</em>: Até os Confins da Terra.
            2. Ed. - São Paulo: ABU editora, 2020.
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
              <span className="font-semibold">Curso:</span> Atos dos Apóstolos
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
            <P className="mt-0">Pr. Sinval Júlio de Souza</P>
            <P className="mt-0">Pr. Lúcio Andres</P>
            <P className="mt-0">Braitner Lobato</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão:</P>
            <P className="mt-0">Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentaristas:</P>
            <P className="mt-0">Marcelo Leite e Larissa Fauber</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
