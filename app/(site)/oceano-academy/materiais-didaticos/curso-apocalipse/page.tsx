import { HeroContainer } from "~/components/hero";
import { AllTeachingMaterialsBackButton } from "~/components/back-buttons/all-teaching-materials";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";
import { SummaryLi } from "~/components/summary-li";

export default function CursoApocalipse() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Curso Apocalipse</H1>
          <P className="mt-0">Um estudo sobre o Apocalipse.</P>
        </div>
      </HeroContainer>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="materials-didactic">Materiais de Apoio</H2>
        <UL className="mt-0">
          <li>
            <a
              href="https://drive.google.com/file/d/1LNPbSqst5OOeNVjhGzmwB13PYwPflCQg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 text-blue-500"
            >
              Apostila
            </a>
          </li>
        </UL>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2>Sumário</H2>
        <UL className="mt-0 space-y-2 sm:space-y-2">
          <SummaryLi>
            <a href="#lesson-1">
              Lição 1 – As coisas que tens visto e as que são
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-para-comecar">Para começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-visao-do-cristo-glorificado">
              1. A visão do Cristo glorificado
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-as-igrejas-de-efeso-e-esmirna">
              2. As igrejas de Éfeso e Esmirna
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-pergamo-tiatira-e-sardes">
              3. Pérgamo, Tiatira e Sardes
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-filadelfia-e-laodiceia">
              4. Filadélfia e Laodiceia
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-2">
              Lição 2 – As coisas que depois destas hão de acontecer
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-para-comecar">Para começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-o-trono-de-deus-e-o-livro-selado">
              1. O trono de Deus e o livro selado
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-os-selos-as-trombetas-e-as-tacas">
              2. Os selos, as trombetas e as taças
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-os-grandes-personagens-do-apocalipse">
              3. Os grandes personagens do Apocalipse
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-queda-da-babilonia-e-a-volta-de-cristo">
              4. A queda da Babilônia e a volta de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-3">Lição 3 – O reino milenar de Cristo</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-para-comecar">Para começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-prisao-de-satanas">1. A prisão de Satanás</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-o-reino-milenar-de-cristo">
              2. O reino milenar de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-ultima-rebeliao">3. A última rebelião</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-o-juizo-do-grande-trono-branco">
              4. O juízo do grande trono branco
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-4">Lição 4 – Novos céus e nova terra</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-para-comecar">Para começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-nova-jerusalem">1. A nova Jerusalém</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-descricao-da-cidade-santa">
              2. A descrição da cidade santa
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-rio-e-a-arvore-da-vida">
              3. O rio e a árvore da vida
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-ultimo-chamado-de-cristo">
              4. O último chamado de Cristo
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

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-1">Lição 1 – As coisas que tens visto e as que são</H2>

        <div className="flex flex-col gap-4">
          <P className="font-semibold text-black dark:text-white">
            Objetivo Geral
          </P>
          <P className="mt-0">
            Apresentar a visão do Cristo glorificado e as mensagens às sete
            igrejas, levando-nos a compreender a própria condição espiritual e a
            cultivar fidelidade, arrependimento e esperança diante da presença
            ativa de Cristo na igreja.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-para-comecar">Para começar</H3>
          <P className="">
            O livro do Apocalipse começa com uma das cenas mais impressionantes
            de toda a Escritura, convidando o leitor a adentrar um ambiente de
            profunda revelação espiritual. João, exilado em Patmos, encontra-se
            em um contexto aparentemente desfavorável, mas é justamente ali que
            o Senhor decide abrir diante dele o panorama completo da história
            redentora, desde o presente da igreja até os eventos finais. Assim,
            a abertura do livro nos lembra que Deus não depende de
            circunstâncias ideais para se revelar; pelo contrário, Ele
            transforma desertos em lugares de visão. Ao iniciar a leitura desses
            capítulos, o estudante percebe rapidamente que há mais do que
            informações proféticas ali: há um chamado à comunhão íntima com
            Cristo glorificado e, consequentemente, a esperança bendita.
          </P>
          <P className="">
            O Apocalipse, longe de ser um livro de medo, apresenta-se como uma
            mensagem de esperança para a igreja. Desde o início, a Escritura
            declara bem-aventurado aquele que lê, ouve e guarda as palavras
            desta profecia (Ap 1.3), revelando seu caráter edificante e
            consolador. E ao final, Cristo reafirma essa mesma bem-aventurança,
            lembrando que feliz é aquele que guarda a profecia (Ap 22.7),
            fechando o livro com uma promessa de alegria e vitória. Assim, quem
            se aproxima do Apocalipse com o coração aberto descobre não um
            anúncio de terror, mas uma revelação de glória, esperança e triunfo
            para os que pertencem ao Senhor.
          </P>
          <P className="">
            Enquanto o versículo base da lição, Apocalipse 1.19, organiza o
            conteúdo em três grandes partes, esta primeira lição abrange as duas
            seções iniciais: aquilo que João viu e aquilo que descreve a
            realidade das igrejas do seu tempo. É impossível compreender o
            restante do livro sem antes contemplar a visão majestosa do Cristo
            ressurreto e ouvir com atenção as mensagens dirigidas às sete
            igrejas da Ásia Menor. É como se o Espírito nos conduzisse a um
            santuário espiritual, onde o próprio Senhor passeia por entre os
            candelabros e avalia Seus servos, revelando que Ele observa cada
            detalhe da vida da igreja.
          </P>
          <P className="">
            Portanto, ao mergulhar nesta lição, o leitor é convidado não somente
            a adquirir conhecimento doutrinário, mas também a permitir que
            Cristo examine suas motivações, fortaleça seu compromisso espiritual
            e desperte nele a paixão que marcou os primeiros discípulos. Afinal,
            o Cristo que João viu continua sendo o Cristo presente na igreja
            hoje, falando com autoridade, corrigindo com amor e garantido sua
            promessa de levar ao céu (Jo. 14; Fp 3.20; 1Co 5.1) aos que
            permanecem fiéis. Esta introdução busca, assim, despertar o coração
            do estudante para a seriedade e a beleza das mensagens contidas nos
            primeiros capítulos do Apocalipse.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-visao-do-cristo-glorificado" className="">
            1. A visão do Cristo glorificado
          </H3>
          <P className="">
            A narrativa inicia mostrando João em espírito no dia do Senhor,
            quando uma voz poderosa o surpreende e o direciona a registrar tudo
            o que lhe seria revelado. A visão que João contempla apresenta Jesus
            não mais em sua condição terrena, mas investido de plena glória,
            autoridade e majestade, contrastando radicalmente com o Cristo
            sofredor visto nos Evangelhos. Esse contraste torna-se ainda mais
            significativo quando lembramos que João esteve entre os poucos que
            permaneceram próximos de Jesus nos momentos finais da crucificação,
            sendo o único dos Doze que permaneceu ao pé da cruz, conforme João
            19.26. Agora, porém, aquele que outrora viu o Mestre em fraqueza
            voluntária contempla o mesmo Senhor revestido de plena soberania
            celestial.
          </P>
          <P className="">
            A descrição simbólica do Senhor, com olhos como chama de fogo, pés
            semelhantes ao bronze polido e uma voz como muitas águas, revela sua
            santidade absoluta e seu conhecimento profundo sobre todas as
            coisas. Nada escapa ao Seu olhar; nenhuma situação está fora do Seu
            alcance. Ao mesmo tempo, os símbolos dos candelabros e das estrelas
            reforçam que Cristo caminha entre as igrejas e sustenta em Suas mãos
            os responsáveis pela liderança espiritual. Isso demonstra que a
            igreja não está abandonada, mas submetida ao cuidado atento daquele
            que reina sobre a vida e sobre a morte, conforme Apocalipse 1.18.
          </P>
          <P className="">
            É significativo notar que João cai como morto diante da visão,
            evidenciando o impacto incomparável da presença de Cristo exaltado.
            No entanto, o Senhor o toca e o conforta, mostrando que Sua glória
            não é destinada a afastar, mas a trazer reverência acompanhada de
            graça. Assim, o primeiro capítulo estabelece a autoridade de Cristo
            como centro do Apocalipse e como Senhor absoluto da igreja,
            preparando o caminho para as mensagens que serão entregues às sete
            igrejas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-as-igrejas-de-efeso-e-esmirna" className="">
            2. As igrejas de Éfeso e Esmirna
          </H3>
          <P className="">
            A mensagem à igreja de Éfeso revela uma comunidade ativa, firme na
            doutrina e zelosa contra falsos mestres. Contudo, apesar de possuir
            características admiráveis, Jesus identifica um problema grave: o
            abandono do primeiro amor, conforme Apocalipse 2.4. Essa exortação
            demonstra que o Senhor valoriza o serviço, mas prioriza o
            relacionamento. Um cristianismo movido apenas por disciplina, sem
            fervor e sem afeto por Cristo, corre o risco de perder seu brilho
            espiritual. A ordem dada à igreja é clara: lembrar, arrepender-se e
            retornar às práticas que fluíam de um coração apaixonado pelo
            Senhor.
          </P>
          <P className="">
            Já Esmirna recebe uma mensagem diferente, marcada pelo consolo e
            pela coragem. Era uma igreja profundamente perseguida e
            economicamente empobrecida, porém espiritualmente rica. Jesus não
            lhe dirige críticas, apenas reforça a necessidade de fidelidade,
            mesmo diante de sofrimento extremo, como mencionado em Apocalipse
            2.10. Isso nos mostra que a provação não é sinal de abandono divino,
            mas oportunidade para demonstrar lealdade ao Senhor. Assim, a
            experiência de Esmirna representa milhares de crentes ao longo da
            história que permaneceram fiéis apesar das tribulações.
          </P>
          <P className="">
            O contraste entre Éfeso e Esmirna é pedagógico. Uma igreja ativa,
            mas esfriada no amor, e outra pobre e perseguida, mas fervorosa e
            fiel. Cristo se move entre ambas com graça e verdade, revelando que
            cada comunidade cristã possui desafios específicos que demandam
            respostas espirituais diferentes. Dessa forma, o estudo dessas duas
            igrejas nos ajuda a olhar para a própria vida devocional e avaliar
            se tem cultivado o amor genuíno ou se tem permanecido firme mesmo em
            meio à adversidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-pergamo-tiatira-e-sardes" className="">
            3. Pérgamo, Tiatira e Sardes
          </H3>
          <P className="">
            Quando Cristo dirige Suas palavras à igreja de Pérgamo, destaca sua
            fidelidade em um ambiente extremamente hostil espiritualmente. Ainda
            assim, o Senhor repreende a tolerância ao erro, especialmente
            ensinos que conduziam ao compromisso com práticas pagãs, como
            registrado em Apocalipse 2.14. Isso demonstra que a igreja pode
            estar no lugar certo, mas correndo o risco de permitir que doutrinas
            contrárias à Palavra infiltre-se em seu meio. Por isso, a exortação
            à vigilância doutrinária permanece atual para cada geração de
            cristãos.
          </P>
          <P className="">
            Em Tiatira, observa-se uma igreja que cresce em amor, fé e serviço,
            porém falha ao tolerar uma liderança enganosa comparada
            simbolicamente a Jezabel, conforme Apocalipse 2.20. Esse contraste
            entre crescimento e contaminação espiritual revela que nem todo
            avanço aparente significa saúde espiritual. Cristo analisa não
            apenas as obras, mas também a pureza do ensino e a santidade do
            povo. Ele chama ao arrependimento e promete recompensa aos que
            guardam a verdade até o fim, destacando o valor da perseverança.
          </P>
          <P className="">
            Por fim, Sardes apresenta o caso mais preocupante entre essas três
            igrejas. Possuía fama de viva, mas era espiritualmente morta, como
            registrado em Apocalipse 3.1. A aparência exterior mascarava a
            realidade interior, e Cristo a exorta a despertar e fortalecer o que
            restava. Essa mensagem revela que Deus não se impressiona com
            reputações, estruturas ou aparências, mas avalia a vitalidade
            espiritual autêntica. Dessa forma, Pérgamo, Tiatira e Sardes nos
            lembram que a fidelidade doutrinária, a santidade e a vigilância são
            elementos essenciais na vida cristã.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-filadelfia-e-laodiceia" className="">
            4. Filadélfia e Laodiceia
          </H3>
          <P className="">
            A igreja de Filadélfia recebe uma das mensagens mais animadoras de
            todo o Apocalipse. Apesar de ter pouca força, manteve-se fiel à
            Palavra e ao nome de Cristo, como descrito em Apocalipse 3.8. Jesus
            lhe concede uma porta aberta, simbolizando oportunidades de expansão
            missionária e espiritual, que ninguém poderia fechar. Esse detalhe
            reforça a verdade de que a obra de Deus não depende de grande
            capacidade humana, mas da obediência e da disposição em permanecer
            firme, mesmo quando os recursos parecem limitados.
          </P>
          <P className="">
            Em contrapartida, Laodiceia representa o extremo oposto. É uma
            igreja autossuficiente, marcada pela mornidão espiritual e pela
            falsa sensação de segurança, como advertido em Apocalipse 3.16–17.
            Cristo denuncia essa condição e convida a comunidade a buscar aquilo
            que realmente importa: ouro refinado pelo fogo, vestiduras brancas e
            colírio espiritual. Essa linguagem aponta para a necessidade de
            arrependimento, santidade e discernimento, elementos essenciais para
            recuperar o fervor espiritual perdido.
          </P>
          <P className="">
            Além disso, a memorável imagem de Cristo batendo à porta, registrada
            em Apocalipse 3.20, mostra que, mesmo diante da frieza espiritual, o
            Senhor continua oferecendo restauração e comunhão. Assim, Filadélfia
            e Laodiceia representam dois caminhos: o da fidelidade humilde e o
            da autossuficiência que conduz ao afastamento. Assim, somos
            convidados a identificar qual desses caminhos mais se aproxima de
            nossa vida espiritual atual.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao" className="">
            Conclusão
          </H3>
          <P className="">
            Ao encerrar a análise dos capítulos 1 a 3 do Apocalipse, torna-se
            evidente que Cristo glorificado é o centro absoluto da visão e
            também o examinador cuidadoso de Sua igreja. Ele não apenas observa,
            mas interfere, exorta e promete recompensas aos que permanecem
            fiéis. Essa compreensão deve produzir reverência e também esperança
            no coração do estudante, pois demonstra que o Senhor está
            profundamente envolvido com a vida espiritual de Seu povo.
          </P>
          <P className="">
            Além disso, as sete igrejas da Ásia ilustram realidades que
            continuam presentes no corpo de Cristo ao longo dos séculos. Cada
            mensagem revela desafios específicos, mas também aponta caminhos de
            restauração. A visão do Cristo glorificado traz autoridade às
            exortações e consola os que enfrentam dor e perseguição. Assim, esta
            lição transforma-se em uma convocação à vigilância espiritual, ao
            amor fervoroso e à fidelidade à Palavra.
          </P>
          <P className="">
            Por fim, ao compreender "as coisas que tens visto" e "as que são", o
            leitor se prepara para o restante do livro, no qual Cristo revelará
            os eventos futuros que culminarão na vitória final do Cordeiro. A
            fidelidade no presente é o alicerce para a esperança no futuro. A
            igreja atual precisa ouvir a voz do Espírito assim como aquelas sete
            igrejas ouviram, pois a mensagem continua a mesma: "Quem tem
            ouvidos, ouça o que o Espírito diz às igrejas".
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">
          Lição 2 – As coisas que depois destas hão de acontecer
        </H2>

        <div className="flex flex-col gap-4">
          <P className="font-semibold text-black dark:text-white">
            Objetivo Geral
          </P>
          <P className="mt-0">
            Compreender a soberania de Deus no Apocalipse, reconhecendo que os
            juízos, personagens e acontecimentos revelam a justiça divina e a
            vitória final do Cordeiro sobre o mal.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-para-comecar">Para começar</H3>
          <P className="">
            Ao entrarmos nos capítulos 4 a 19 do Apocalipse, somos conduzidos a
            uma mudança de ambiente que impressiona e desperta profundo temor
            reverente. Até aqui, João contemplou Cristo glorificado e ouviu as
            mensagens dirigidas às igrejas; agora, porém, ele é convidado a
            subir e ver as realidades celestiais que revelam o curso da história
            segundo a perspectiva divina, conforme Apocalipse 4.1. Quando o céu
            se abre diante de nós, percebemos que tudo o que ocorre na Terra
            está sob o olhar atento daquele que reina no trono e conduz todas as
            coisas para o cumprimento soberano de Seu propósito eterno.
          </P>
          <P className="">
            À medida que o leitor avança por estes capítulos, torna-se evidente
            que nada está fora do controle do Senhor. O desenrolar dos selos,
            das trombetas e das taças revela juízos progressivos, mostrando que
            Deus dá múltiplas oportunidades para arrependimento antes de aplicar
            sua justiça final. Essa sequência não é arbitrária, mas pedagógica;
            ela demonstra que a humanidade só compreenderá a gravidade do pecado
            quando confrontada com suas consequências. Por isso, ao estudarmos
            esses juízos, somos lembrados de que o Deus que salva também é o
            Deus que julga, e ambos os atributos coexistem plenamente em Sua
            pessoa.
          </P>
          <P className="">
            Esta introdução procura despertar o leitor para compreender que o
            Apocalipse não é um livro de terror, mas de esperança, pois mostra
            que o mal não triunfará. Mesmo diante das figuras mais sombrias e
            dos eventos mais intensos, o trono de Deus permanece inabalável,
            como está descrito em Apocalipse 4.2. Portanto, ao longo desta
            lição, enfatizaremos não apenas os juízos, mas a soberania de Deus,
            a vitória do Cordeiro e o propósito final de restaurar todas as
            coisas. Assim, ao estudar o futuro, somos levados a confiar ainda
            mais no Senhor no presente.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-o-trono-de-deus-e-o-livro-selado" className="">
            1. O trono de Deus e o livro selado
          </H3>
          <P className="">
            Quando João é transportado ao céu, a primeira visão que se apresenta
            diante dele é a do trono de Deus. Esse trono, além de apresentar
            autoridade, também expõe estabilidade, pureza e magnificência. Ao
            redor dele, seres viventes adoram continuamente, proclamando a
            santidade do Senhor, enquanto anciãos se prostram em sinal de
            submissão absoluta. Essa cena demonstra que toda adoração verdadeira
            nasce da contemplação de quem Deus é, e por isso João precisa ver o
            trono antes de ver os juízos. Sem essa perspectiva, o leitor poderia
            interpretar erroneamente os acontecimentos subsequentes como caos e
            descontrole, quando na verdade eles seguem uma ordem divina
            perfeita.
          </P>
          <P className="">
            A seguir, João observa um livro selado com sete selos em Apocalipse
            5.1. Esse livro representa o plano de Deus para a história, sua
            revelação completa e definitiva, e a autoridade para executá-lo. A
            ausência inicial de alguém digno de abri-lo produz grande tensão no
            ambiente celestial, levando João às lágrimas. Essa reação mostra que
            a humanidade está totalmente incapacitada de conduzir sua própria
            redenção ou restaurar a criação. Entretanto, o clima muda quando um
            dos anciãos anuncia que há sim alguém digno: o Leão da tribo de
            Judá.
          </P>
          <P className="">
            É então que surge o Cordeiro como tendo sido morto, conforme
            Apocalipse 5.6. Essa imagem une dois aspectos essenciais da obra de
            Cristo: autoridade e sacrifício. Ele venceu não pela força militar,
            mas pela entrega voluntária da própria vida. Por isso, somente Ele
            pode abrir o livro selado, pois apenas Seu sangue é suficiente para
            redimir e julgar com justiça. A partir desse momento, toda adoração
            celestial se volta para o Cordeiro, mostrando que a história
            encontra seu sentido e sua direção em Cristo. Este ponto é
            fundamental para toda a teologia do Apocalipse.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-os-selos-as-trombetas-e-as-tacas" className="">
            2. Os selos, as trombetas e as taças
          </H3>
          <P className="">
            Ao iniciar a abertura dos selos no capítulo 6, João descreve eventos
            que afetam a Terra de forma progressiva. Cada selo revela uma etapa
            do juízo divino, que atinge desde a ordem social até fenômenos
            naturais, além de mostrar perseguições severas aos santos. Esses
            acontecimentos não devem ser vistos como ações aleatórias, mas como
            respostas de Deus ao acúmulo da iniquidade humana. Mesmo assim, é
            importante notar que em vários momentos ainda existe espaço para
            arrependimento, indicando que o Senhor é tardio em irar-se e
            abundante em misericórdia.
          </P>
          <P className="">
            A sequência das trombetas, apresentada a partir de Apocalipse 8,
            intensifica os juízos. Enquanto os selos introduzem o cenário, as
            trombetas atingem diretamente a criação e revelam a seriedade da
            rebelião humana. O toque de cada trombeta traz impactos espirituais
            e físicos, fazendo com que a humanidade perceba a fragilidade de
            suas estruturas e a necessidade de reconhecer o senhorio de Deus.
            Ainda assim, conforme Apocalipse 9.20, muitos não se arrependem,
            revelando a profundidade do endurecimento humano diante da verdade
            divina.
          </P>
          <P className="">
            Por fim, as taças da ira, relatadas em Apocalipse 16, representam o
            ápice dos juízos. Aqui, observa-se que os homens, já profundamente
            endurecidos, recusam-se a arrepender-se. Assim, as taças mostram a
            justiça plena de Deus sendo manifestada, encerrando os ciclos
            anteriores e preparando o cenário para a intervenção direta de
            Cristo. Ao compreender essa progressão, fica claro que Deus age com
            ordem, paciência e propósito, revelando sua santidade e seu amor
            mesmo em meio ao juízo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-os-grandes-personagens-do-apocalipse" className="">
            3. Os grandes personagens do Apocalipse
          </H3>
          <P className="">
            Nos capítulos 12 a 14, João descreve figuras simbólicas que
            representam forças espirituais e sistemas que atuam ao longo da
            história da humanidade. A mulher vestida do sol aparece como
            representação do povo de Deus, desde Israel até a igreja. O dragão,
            identificado em Apocalipse 12.9 como Satanás, procura destruir o
            filho varão antes que ele cumpra seu propósito. No entanto, esse
            filho é arrebatado para Deus, indicando a vitória de Cristo sobre
            toda tentativa do inimigo de frustrar o plano divino. Essa cena
            revela a atuação contínua da batalha espiritual na história.
          </P>
          <P className="">
            Em seguida, surge a besta que emerge do mar, apresentada em
            Apocalipse 13.1, simbolizando o Anticristo com seus poder político e
            estrutura mundial que se opõem ao Reino de Deus. Sua autoridade
            provém do dragão, mostrando, ainda, que sistemas governamentais
            afastados de Deus acabam sendo influenciados pelo mal. A outra
            besta, que sobe da terra conforme Apocalipse 13.11, aponta para o
            falso profeta que legitima a ação da primeira besta. Juntas, essas
            duas figuras formam um sistema integrado de engano, perseguição e
            controle.
          </P>
          <P className="">
            No capítulo 14, porém, João contempla o Cordeiro e os cento e
            quarenta e quatro mil, representando o povo israelita fiel do
            Senhor, preservados vivos durante a grande Tribulação. Essa
            contraposição entre o sistema do anticristo e o povo de Deus mostra
            que, apesar da pressão e da perseguição, o Senhor preserva Seus
            servos e garante que seu nome esteja escrito no céu. Além disso,
            três anjos proclamam mensagens de juízo e advertência, evidenciando
            que, mesmo nos momentos mais sombrios da história, Deus não cessa de
            anunciar sua verdade. Esse conjunto de visões reafirma que a vitória
            final pertence ao Cordeiro.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3
            id="lesson-2-a-queda-da-babilonia-e-a-volta-de-cristo"
            className=""
          >
            4. A queda da Babilônia e a volta de Cristo
          </H3>
          <P className="">
            Os capítulos finais desta seção apresentam a queda da Babilônia,
            símbolo máximo da corrupção espiritual, moral e econômica do mundo
            sem Deus. Sua destruição, narrada em Apocalipse 18, demonstra que
            nenhum sistema baseado no pecado e na exploração humana pode
            permanecer diante da justiça divina. A lamentação dos reis e
            comerciantes contrasta com o júbilo celestial, pois aquilo que
            parecia indestrutível cai de forma repentina, revelando a
            fragilidade das estruturas do mal.
          </P>
          <P className="">
            Logo após essa queda, João descreve as bodas do Cordeiro em
            Apocalipse 19.7, momento de celebração e glorificação do Senhor
            Jesus, pois Sua noiva, a igreja, está preparada. Essa imagem
            expressa a união final e definitiva entre Cristo e Seu povo,
            destacando a pureza e a fidelidade da igreja diante daquele que a
            redimiu.
          </P>
          <P className="">
            Por fim, o capítulo 19 culmina com a volta gloriosa de Cristo,
            montado em um cavalo branco, como Rei dos reis e Senhor dos
            senhores. Sua aparição inaugura a derrota final da besta e do falso
            profeta, selando a vitória definitiva sobre o sistema anticristão. A
            batalha do Armagedom mostra que nenhum poder terreno ou espiritual é
            capaz de resistir ao poder do Filho de Deus. Assim, a narrativa
            prepara o leitor para os eventos do capítulo 20, que descrevem o
            Milênio e o juízo final.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao" className="">
            Conclusão
          </H3>
          <P className="">
            Ao concluir a lição 2, torna-se evidente que os capítulos 4 a 19
            apresentam a atuação soberana de Deus na história e a vitória
            progressiva do Cordeiro sobre todas as forças do mal. Cada cena,
            cada juízo e cada personagem revelam que nada acontece ao acaso;
            tudo cumpre um propósito definido pelo Senhor. A mensagem central
            permanece clara: o trono de Deus está firme e Seu plano está em
            plena execução, mesmo quando o mundo parece dominado pela injustiça.
          </P>
          <P className="">
            Além disso, a progressão dos juízos demonstra tanto a paciência
            quanto a justiça de Deus. Ele oferece oportunidades de
            arrependimento, mas também estabelece limites para o mal. A queda da
            Babilônia e a volta gloriosa de Cristo reafirmam que todo sistema
            que se levanta contra Deus será destruído e que o Reino de Cristo
            prevalecerá. Essa certeza alimenta a esperança da igreja ao longo
            das eras.
          </P>
          <P className="">
            Por fim, esta lição nos prepara para compreender os eventos finais
            do Apocalipse, especialmente o Milênio, o juízo final e a nova
            criação. O estudo desta seção do livro fortalece a fé do leitor,
            lembra que Deus está no controle e reafirma que, no fim, o bem
            triunfará porque Cristo já venceu. Assim, somos chamados a
            permanecer fiéis, vigilantes e cheios de esperança.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – O reino milenar de Cristo</H2>

        <div className="flex flex-col gap-4">
          <P className="font-semibold text-black dark:text-white">
            Objetivo Geral
          </P>
          <P className="mt-0">
            Compreender o propósito do Milênio e dos eventos finais do
            Apocalipse, reconhecendo a soberania de Cristo, o desfecho do mal e
            a justiça de Deus antes da eternidade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-para-comecar">Para começar</H3>
          <P className="">
            Ao chegarmos ao capítulo 20 do Apocalipse, somos conduzidos a um dos
            temas mais aguardados e discutidos dentro da escatologia cristã: o
            Milênio, o reinado de mil anos de Cristo sobre a Terra. Esse
            capítulo apresenta uma virada extraordinária na história, pois marca
            a derrota plena de forças espirituais malignas e inaugura uma nova
            fase da atuação de Deus no mundo. Depois dos juízos derramados nos
            capítulos anteriores e da gloriosa volta de Cristo em Apocalipse 19,
            agora o Senhor estabelece Seu governo de maneira visível, poderosa e
            incontestável. Para todo cristão que anseia pela restauração final,
            este capítulo acende esperança e fortalece a fé, pois mostra o
            triunfo definitivo do plano divino antes da eternidade final.
          </P>
          <P className="">
            Além disso, o Milênio não é apresentado como uma metáfora subjetiva,
            mas como um acontecimento concreto, no qual Cristo regerá as nações
            conforme promessas feitas ao longo das Escrituras, incluindo
            referências como Salmos 2, Isaías 11 e 65. Assim, entender esse
            período não é apenas um exercício profético, mas uma forma de
            compreender a fidelidade de Deus às Suas alianças e promessas. O
            capítulo também revela que, mesmo após séculos de paz e justiça, a
            humanidade ainda precisa enfrentar uma última prova espiritual,
            deixando claro que o problema do pecado não está no ambiente, mas no
            coração humano.
          </P>
          <P className="">
            Por essa razão, o estudo do Apocalipse 20 oferece ao crente não
            apenas informação profética, mas discernimento espiritual para
            compreender a natureza humana, a estratégia de Deus na história e o
            destino final do mal. Essa lição não pretende resolver todas as
            discussões acadêmicas sobre o tema, mas apresentar o texto bíblico
            com clareza, respeito e profundidade, sempre dentro da perspectiva
            dispensacionalista, que reconhece no Milênio um cumprimento literal
            das profecias bíblicas. É com esse espírito que seguimos para as
            seções desta lição.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-prisao-de-satanas" className="">
            1. A prisão de Satanás
          </H3>
          <P className="">
            A narrativa começa com a descida de um anjo que prende Satanás por
            mil anos. O poder do inimigo será bloqueado, impedindo-o de enganar
            as nações. Esse aprisionamento destaca que todos os acontecimentos
            anteriores culminam em um ato definitivo de Deus contra aquele que,
            desde o Éden, buscou usurpar a autoridade divina e afastar a
            humanidade da verdade. Ao ser lançado no abismo, Satanás é submetido
            a um estado de inatividade forçada, revelando que o Senhor tem
            controle absoluto sobre o reino espiritual.
          </P>
          <P className="">
            É importante compreender que essa prisão não significa uma simples
            retirada temporária, mas uma mudança radical no cenário espiritual
            da Terra. Durante o Milênio, as nações experimentarão um período de
            paz e justiça que jamais foi visto na história humana. A ausência da
            influência satânica revela que muitos dos conflitos e desordens
            presentes no mundo atual resultam da ação direta do inimigo, mesmo
            que nem todos percebam isso. Portanto, o aprisionamento descrito em
            Apocalipse 20.2 não é apenas uma ação judicial, mas uma demonstração
            do poder soberano de Cristo sobre o mal.
          </P>
          <P className="">
            Por fim, a declaração de que Satanás será solto por "pouco tempo"
            após os mil anos nos prepara para a última fase da história antes da
            eternidade. Esse detalhe mostra que Deus não age de forma
            arbitrária; Ele conduz todos os acontecimentos para revelar
            plenamente Sua justiça e Sua santidade. Contudo, até que cheguemos a
            esse momento, o capítulo nos apresenta o governo pacífico de Cristo,
            inaugurado após essa prisão decisiva.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-o-reino-milenar-de-cristo" className="">
            2. O reino milenar de Cristo
          </H3>
          <P className="">
            A descrição do reinado de Cristo durante o Milênio tem início com a
            visão de tronos e de pessoas que receberam autoridade para julgar.
            Entre esses participantes estão os mártires que foram mortos por
            causa do testemunho de Jesus e por não terem adorado a besta,
            conforme Apocalipse 20.4. Essa honra concedida aos mártires
            demonstra que Deus não esquece o sofrimento de Seus servos e que o
            preço pago pela fidelidade aqui na Terra será recompensado
            abundantemente no reino vindouro. Assim, o Milênio também se torna
            um tempo de vindicação, no qual a justiça de Deus se manifesta
            plenamente.
          </P>
          <P className="">
            Além disso, o Milênio é marcado por uma realidade diferente daquela
            que conhecemos hoje. O reinado de Cristo traz restauração, ordem e
            paz, conforme profecias como Isaías 11; 65 e Zacarias 14. Nesse
            período, a Terra experimenta condições espirituais e sociais
            transformadas, pois Cristo governa com justiça e sabedoria. A
            expressão "bem-aventurado e santo" aplicada aos participantes da
            primeira ressurreição reforça que o Milênio é um privilégio
            destinado aos que seguiram a Cristo com fidelidade durante a grande
            Tribulação. É um tempo em que o governo do Senhor se torna visível e
            experimentado em plenitude.
          </P>
          <P className="">
            Por fim, o reinado milenar também serve para revelar a bondade de
            Deus ao restaurar a criação e ao oferecer à humanidade um ambiente
            ideal onde a justiça prevalece. Durante esses mil anos, o mundo verá
            como seria a vida sem a influência destrutiva do inimigo. Esse
            período prepara o palco para a última confrontação, que demonstrará
            definitivamente a diferença entre os que servem a Deus e os que,
            mesmo diante de condições perfeitas, escolherão se rebelar.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-ultima-rebeliao" className="">
            3. A última rebelião
          </H3>
          <P className="">
            Após o término dos mil anos, Satanás é solto do abismo e volta a
            enganar as nações. Essa breve soltura pode parecer estranha à
            primeira vista, mas ela cumpre um propósito essencial no plano
            divino. Durante o Milênio, apesar da paz e da justiça reinantes,
            muitos nascerão e crescerão sem experimentar diretamente a tentação
            como a conhecemos hoje. Assim, quando Satanás é libertado, as
            escolhas humanas são colocadas à prova, revelando quem realmente
            segue a Cristo por convicção e quem apenas se beneficiava das
            circunstâncias favoráveis. Esse momento final demonstra que o
            problema do pecado não está nas condições externas, mas na
            disposição interna de cada coração.
          </P>
          <P className="">
            Além disso, a revolta liderada por Satanás é vasta, reunindo
            multidões simbolicamente descritas como "a areia do mar", conforme
            Apocalipse 20.8. Isso evidencia que mesmo o melhor dos ambientes não
            é capaz de regenerar o ser humano; somente a obra redentora de
            Cristo pode transformar o coração. A batalha final, contudo, não
            envolve um longo conflito, pois Deus intervém de forma direta e
            definitiva, consumindo os rebeldes e lançando Satanás no lago de
            fogo, conforme Apocalipse 20.10. A derrota do inimigo é completa,
            eterna e irrevogável.
          </P>
          <P className="">
            Assim, essa última rebelião não apenas encerra a atuação de Satanás,
            mas também finaliza a necessidade de qualquer prova adicional sobre
            a condição humana. Deus demonstra que Seu julgamento é justo e que
            Sua santidade exige separação definitiva entre o bem e o mal. Com
            isso, abre-se o caminho para o juízo final descrito nos versos
            seguintes.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-o-juizo-do-grande-trono-branco" className="">
            4. O juízo do grande trono branco
          </H3>
          <P className="">
            A cena do grande trono branco é uma das mais solenes de toda a
            Bíblia. João descreve um trono diante do qual céu e terra fogem,
            revelando que nada permanece intocado pelo poder e pela santidade de
            Deus. Diante desse trono, todos os mortos que rejeitaram a Cristo
            são ressuscitados para enfrentar o julgamento final. Não se trata de
            um julgamento para determinar salvação, pois aqueles que comparecem
            ali já pertencem à segunda ressurreição e não tiveram seus nomes
            encontrados no Livro da Vida. É um momento decisivo em que cada obra
            é julgada, conforme Apocalipse 20.12.
          </P>
          <P className="">
            Nesse julgamento, nenhum argumento humano é suficiente para
            justificar a rejeição ao evangelho. Os livros são abertos, revelando
            a verdade sobre cada vida, cada escolha e cada resistência ao
            chamado divino. A justiça de Deus se manifesta sem parcialidade,
            mostrando que Ele é paciente, misericordioso e justo em todos os
            seus caminhos. A transparência desse julgamento demonstra que
            ninguém será condenado injustamente; cada pessoa reconhecerá a
            retidão do Senhor, ainda que tardiamente.
          </P>
          <P className="">
            Ao final, aqueles cujos nomes não se acham escritos no Livro da Vida
            são lançados no lago de fogo, conforme Apocalipse 20.15. Essa é a
            separação definitiva, o desfecho de uma vida vivida distante de
            Deus. Embora seja uma verdade difícil, ela reforça a seriedade do
            evangelho e a necessidade urgente da salvação. O juízo do grande
            trono branco encerra completamente a história humana e prepara o
            leitor para a revelação final dos novos céus e nova terra.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao" className="">
            Conclusão
          </H3>
          <P className="">
            Ao final do estudo de Apocalipse 20, percebe-se claramente que a
            história humana caminha sob a direção soberana de Deus e que nenhum
            acontecimento escapa ao Seu controle. O Milênio revela a fidelidade
            divina em cumprir Suas promessas, enquanto a última rebelião expõe a
            verdadeira natureza do coração humano sem a transformação que vem do
            Espírito Santo. Assim, essa lição nos leva a refletir tanto sobre a
            grandeza de Cristo quanto sobre nossa necessidade de permanecer
            firmes na fé.
          </P>
          <P className="">
            Além disso, o juízo do grande trono branco lembra que existe um
            destino eterno para todos, e que a única garantia de salvação é ter
            o nome escrito no Livro da Vida. Não se trata de méritos pessoais,
            mas da graça oferecida por Cristo a todos os que creem. A certeza
            desse juízo final deve despertar em nós responsabilidade espiritual
            e urgência missionária, conscientes de que Deus deseja que todos se
            arrependam e venham ao conhecimento da verdade.
          </P>
          <P className="">
            Por fim, esta lição prepara o terreno para a última parte do livro
            do Apocalipse, que descreve o triunfo absoluto de Deus e a criação
            de um novo céu e uma nova terra. É com expectativa santa que
            avançamos para a próxima lição, certos de que o plano redentor de
            Deus culmina não no juízo, mas na restauração eterna.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">Lição 4 – Novos céus e nova terra</H2>

        <div className="flex flex-col gap-4">
          <P className="font-semibold text-black dark:text-white">
            Objetivo Geral
          </P>
          <P className="mt-0">
            Compreender a esperança eterna revelada nos capítulos finais do
            Apocalipse, reconhecendo a nova criação como o cumprimento
            definitivo do plano redentor de Deus e a plena comunhão dos salvos
            com o Senhor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-para-comecar">Para começar</H3>
          <P className="">
            Chegamos agora aos capítulos finais do Apocalipse, onde a narrativa
            toma um rumo completamente distinto de tudo visto até aqui. Após
            juízos, batalhas e o triunfo final de Cristo sobre o mal, João é
            conduzido a contemplar o desfecho glorioso do plano redentor de
            Deus: a criação de novos céus e nova terra. Esta não é uma simples
            visão poética, mas a concretização de todas as promessas feitas ao
            povo de Deus ao longo das Escrituras, desde Gênesis até os profetas
            e escritos apostólicos. É como se o Espírito abrisse a cortina da
            eternidade e nos permitisse enxergar, ainda que parcialmente, a
            herança que aguarda os salvos.
          </P>
          <P className="">
            Ao ler esses capítulos, percebemos que Deus não apenas conserta o
            que o pecado estragou, mas inaugura uma realidade totalmente nova,
            perfeita e incorruptível. A antiga ordem das coisas, marcada pelo
            sofrimento, injustiça e morte, finalmente desaparece diante da
            manifestação plena da glória de Deus, conforme Apocalipse 21.4. Essa
            nova criação não é apenas um lugar, mas o cumprimento da promessa de
            relacionamento perfeito entre Deus e Seu povo, rompendo
            definitivamente todas as barreiras impostas pelo pecado. É a
            restauração total da comunhão interrompida no Éden.
          </P>
          <P className="">
            Por isso, esta lição não é apenas informativa, mas profundamente
            consoladora. Ela renova a esperança do crente e fortalece sua fé,
            especialmente em tempos difíceis, quando a injustiça, a dor e as
            incertezas parecem dominar o cenário. João descreve uma realidade em
            que Deus habita com Seu povo de maneira plena, sem mediações, e onde
            a luz de Cristo substitui qualquer necessidade de sol ou lâmpada,
            conforme Apocalipse 22.5. Assim, ao estudar esses capítulos, somos
            convidados a viver com os olhos fixos na eternidade, lembrando que
            nosso destino final não é marcado por sofrimento, mas pela glória de
            estar para sempre com o Senhor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-nova-jerusalem" className="">
            1. A nova Jerusalém
          </H3>
          <P className="">
            O capítulo 21 se inicia com João vendo um novo céu e uma nova terra,
            e essa renovação completa marca um novo começo para toda a criação.
            Essa nova realidade não é fruto apenas de restauração, mas de um ato
            criador direto de Deus, que estabelece uma ordem inabalável e
            eterna. A antiga criação, marcada pela presença do pecado, já não
            existe. Essa transformação radical está diretamente ligada à vitória
            final de Cristo, pois Ele faz novas todas as coisas, como registrado
            em Apocalipse 21.5. A promessa de que Deus habitará com os homens
            revela a intenção divina desde o princípio: relacionar-se plenamente
            com Sua criação.
          </P>
          <P className="">
            A Nova Jerusalém, descrita como uma noiva adornada para seu marido,
            representa a cidade santa onde Deus e Seu povo viverão em comunhão
            eterna. A beleza dessa descrição não está apenas nos detalhes
            arquitetônicos apresentados posteriormente, mas no simbolismo da
            restauração completa da comunhão divina. Dor, lágrimas, morte e luto
            já não existirão, segundo Apocalipse 21.4. Essas palavras possuem um
            impacto profundo, pois tocam diretamente nas feridas humanas,
            oferecendo conforto a todos que sofrem neste mundo. A promessa de
            que essas coisas passarão é uma âncora firme para o coração cristão.
          </P>
          <P className="">
            Contudo, o texto também faz uma distinção clara entre aqueles que
            herdarão essa nova realidade e aqueles que dela serão excluídos,
            conforme Apocalipse 21.8. A santidade da nova criação exige uma
            separação definitiva entre o que pertence a Deus e tudo aquilo que
            rejeitou a Sua verdade. Assim, João apresenta tanto consolo quanto
            advertência, lembrando que a eternidade é um destino real que
            depende da resposta humana ao evangelho. Essa primeira parte do
            capítulo estabelece o tom para tudo que se segue.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-descricao-da-cidade-santa" className="">
            2. A descrição da cidade santa
          </H3>
          <P className="">
            Após apresentar a nova criação, João é convidado a contemplar com
            mais detalhes a Nova Jerusalém. O anjo o transporta em espírito a um
            grande e alto monte, onde ele vê a cidade descendo do céu da parte
            de Deus, conforme Apocalipse 21.10. Essa visão reforça que a cidade
            é totalmente de origem divina, sem qualquer participação humana em
            seu design. A descrição que se segue é tão rica que ultrapassa nossa
            capacidade de compreensão literal, mas transmite a ideia de beleza,
            perfeição e glória indescritíveis. Tudo na cidade reflete o caráter
            santo e majestoso de Deus.
          </P>
          <P className="">
            As dimensões da cidade e os materiais mencionados — ouro puro,
            pedras preciosas e ruas transparentes — não são meras representações
            estéticas. Eles comunicam a pureza e a santidade absoluta da cidade.
            A ausência de templo, conforme Apocalipse 21.22, revela que a
            presença de Deus e do Cordeiro preenche toda a realidade da Nova
            Jerusalém. Não há mais necessidade de estrutura religiosa, pois Deus
            habita integralmente com Seu povo. Assim, a adoração se torna plena,
            direta e contínua.
          </P>
          <P className="">
            Outro detalhe significativo é a ausência de noite, já que a glória
            de Deus ilumina a cidade, segundo Apocalipse 21.23. Esse simbolismo
            destaca que nada obscuro, falso ou pecaminoso terá espaço na
            eternidade. As portas da cidade permanecem sempre abertas, indicando
            segurança permanente, mas somente os que têm seus nomes escritos no
            Livro da Vida poderão entrar. Essa seção revela que a eternidade com
            Deus não é apenas um lugar de beleza, mas um ambiente de santidade
            absoluta.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-rio-e-a-arvore-da-vida" className="">
            3. O rio e a árvore da vida
          </H3>
          <P className="">
            O capítulo 22 inicia descrevendo um rio puro da água da vida, que
            flui do trono de Deus e do Cordeiro. Esse rio simboliza a provisão
            contínua e ilimitada da vida que procede de Deus. A imagem remete ao
            Éden e às promessas encontradas em Ezequiel 47, onde a água
            simboliza cura e restauração. No Apocalipse, esse rio representa a
            fonte eterna de vida que sustenta os salvos na presença de Deus. Não
            há escassez, não há interrupção, pois a abundância da vida flui
            diretamente do trono divino.
          </P>
          <P className="">
            A árvore da vida reaparece, agora produzindo frutos continuamente,
            mês após mês, conforme Apocalipse 22.2. Isso contrasta com sua
            presença limitada no Éden, de onde a humanidade foi expulsa após o
            pecado. Agora, porém, o acesso à árvore é restaurado e ampliado,
            simbolizando a vida eterna plena e imutável. As "folhas para cura
            das nações" apontam para a restauração perfeita da criação, onde não
            haverá mais maldição nem sofrimento. Essa visão nos lembra que Deus
            conclui a história exatamente onde ela começou, mas em um nível
            infinitamente superior.
          </P>
          <P className="">
            Além disso, o texto afirma que os servos de Deus o servirão e verão
            o seu rosto, conforme Apocalipse 22.4. Essa afirmação carrega o
            ponto mais alto de toda a revelação: a comunhão plena, direta e
            eterna com o Criador. Nenhuma barreira, nenhum véu, nenhuma
            distância. O nome de Deus estará na fronte de Seus servos, indicando
            pertencimento absoluto e irrevogável. A luz eterna que procede do
            Senhor elimina qualquer possibilidade de trevas, inaugurando um
            reinado que jamais terá fim.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-ultimo-chamado-de-cristo" className="">
            4. O último chamado de Cristo
          </H3>
          <P className="">
            Nos versos finais do livro, o Apocalipse assume um tom pastoral e
            convocatório. Cristo reafirma repetidamente que vem em breve, como
            registrado em Apocalipse 22.7, 12 e 20. Essa insistência não é
            acidental; ela enfatiza que a esperança cristã é fundamentada na
            promessa do retorno do Senhor. A proximidade dessa vinda deve
            motivar o crente à fidelidade, à santidade e à vigilância. Não se
            trata de especulação sobre datas, mas de postura espiritual diante
            do que Deus revelou.
          </P>
          <P className="">
            O texto também apresenta bem-aventuranças e advertências. Os que
            guardam as palavras desta profecia são considerados bem-aventurados,
            enquanto aqueles que tentam acrescentar ou retirar do livro são
            severamente advertidos, conforme Apocalipse 22.18–19. Essa seriedade
            demonstra que o Apocalipse não é um livro simbólico a ser manipulado
            conforme interesses humanos, mas a revelação final de Deus, que deve
            ser tratada com respeito, temor e obediência. Assim, o leitor é
            chamado não apenas a compreender, mas a viver esta mensagem.
          </P>
          <P className="">
            Além disso, o Espírito e a noiva fazem um convite universal: "Vem!",
            como descrito em Apocalipse 22.17. A graça final do Apocalipse se
            estende a todos que têm sede, oferecendo gratuitamente da água da
            vida. A conclusão do livro une, portanto, duas verdades
            fundamentais: a certeza da volta de Cristo e a oferta contínua da
            salvação. Assim, João encerra sua visão reafirmando a esperança
            cristã e convidando a igreja a permanecer firme até o dia em que
            essa promessa se cumprirá.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao" className="">
            Conclusão
          </H3>
          <P className="">
            Ao concluirmos os capítulos 21 e 22, contemplamos o ápice da
            revelação bíblica e o cumprimento pleno de todo o plano redentor de
            Deus. O Apocalipse não termina com juízo, destruição ou lamento, mas
            com restauração, esperança e comunhão eterna. Tudo aquilo que o
            pecado destruiu é renovado, e tudo aquilo que o coração humano
            jamais pôde compreender é finalmente revelado diante da glória de
            Deus. A nova criação não é uma ilustração, mas uma promessa concreta
            destinada aos que permanecem fiéis em Cristo.
          </P>
          <P className="">
            Esses capítulos também nos lembram que a fé cristã não é apenas para
            esta vida, mas aponta para a eternidade. A esperança de novos céus e
            nova terra fortalece os crentes em tempos difíceis, lembrando que as
            aflições do presente não podem ser comparadas à glória futura
            prometida, como afirma Romanos 8.18. Essa perspectiva eternal não
            nos afasta da realidade, mas nos capacita a viver com propósito,
            santidade e missão, sabendo que tudo neste mundo é passageiro.
          </P>
          <P className="">
            Por fim, o livro do Apocalipse nos leva a uma confissão simples e
            poderosa: "Ora, vem, Senhor Jesus", conforme Apocalipse 22.20. Que
            essa oração seja a expressão constante do seu coração, que aguarda
            com esperança viva o cumprimento de todas as promessas do Senhor. E
            que a certeza da eternidade com Deus nos impulsione a viver com
            fidelidade e amor até o último dia.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="editorial">Editorial</H2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <P className="mt-0">
              <span className="font-semibold">Curso:</span> Curso Apocalipse
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
            <P className="mt-0">Pr. Sinval Júlio de Souza</P>
            <P className="mt-0">Ev. Wagner Monteiro</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Pb. Márcio Resende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentaristas:</P>
            <P className="mt-0">Ev. Wagner Monteiro</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
