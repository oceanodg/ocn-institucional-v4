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
            <a href="#lesson-1-para-começar">Para começar</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-visao-do-cristo-glorificado">
              1. A visão do Cristo glorificado
            </a>
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
          <H3 id="lesson-1-para-começar">Para começar</H3>
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
            declara bem- aventurado aquele que lê, ouve e guarda as palavras
            desta profecia (Ap 1.3), revelando seu caráter edificante e
            consolador. E ao final, Cristo reafirma essa mesma bem- aventurança,
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
        </div>
      </Container>
    </section>
  );
}
