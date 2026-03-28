import { Container } from "~/components/container";
import { AllCoursesBackButton } from "~/features/oceano-academy/courses/components/all-courses-back-button";
import { TopCTAButton } from "~/features/oceano-academy/courses/components/top-cta-button";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";
import { LessonsCards } from "~/components/lessons-cards";
import {
  CTADefaultLabel,
  defaultMembersAreaLoginUrl,
  cartaTiagoCourse,
} from "./data/schools-and-courses";
import { CTABox } from "~/components/cta-box";

export function CartaTiago() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllCoursesBackButton href="/oceano-academy/escolas/escola-biblica" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-1">
            <H1 className="text-left">Tiago: Quando Crer se Torna Agir</H1>
            <P className="mt-0">
              A fé cristã não é apenas uma ideia, mas uma prática que transforma
              o cotidiano.
            </P>
            <P className="">
              O curso Tiago – Quando Crer se Torna Agir conduz o aluno por uma
              das cartas mais desafiadoras e práticas do Novo Testamento,
              mostrando que a verdadeira espiritualidade se expressa em atitudes
              concretas.
            </P>
            <P className="">
              Assim como o ouro é purificado no fogo, a fé é aperfeiçoada nas
              provas, maturada nas decisões e confirmada nas obras.
            </P>
            <P className="">
              Inspirado na epístola escrita por Tiago, irmão do Senhor e líder
              da Igreja em Jerusalém, o curso apresenta uma teologia viva, ética
              e pastoral.
            </P>
            <P className="">
              Cada lição conecta fé e prática, doutrina e vida, conduzindo o
              discípulo a um cristianismo coerente, maduro e transformador.
            </P>
          </div>

          <div className="sm:flex-1 order-first sm:order-last mb-6 sm:mb-0">
            <img
              src="/images/courses/carta-tiago/yt-thumb-carta-tiago-small.png"
              alt="Carta de Tiago"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </HeroContainer>

      <TopCTAButton
        ctaUrl={cartaTiagoCourse.ctaUrl}
        ctaText={CTADefaultLabel}
        loginUrl={defaultMembersAreaLoginUrl}
        openInNewTab={true}
      />

      {/* <TopCTAButton
        ctaUrl={cartaTiagoCourse.ctaUrl}
        ctaText={`<i>Em breve</i>`}
        loginUrl={defaultMembersAreaLoginUrl}
        openInNewTab={false}
        disabled={true}
      /> */}

      <Separator className="my-14" />

      {/* <EmbededYoutubeVideo youtubeVideoId={defaultHeroYoutubeVideoId} /> */}

      <div className="mt-4 sm:mt-10 space-y-0">
        <Container className="">
          <div>
            <H2>Sobre o curso</H2>
            <P className="">
              O estudo da carta de Tiago revela a espiritualidade do cotidiano:
              fé que resiste nas provações, sabedoria que ilumina, palavras que
              curam e amor que serve.
            </P>
            <P className="">
              O curso percorre cada capítulo da epístola, destacando temas como
              maturidade cristã, domínio da língua, sabedoria do alto, justiça
              social e oração eficaz.
            </P>
            <P className="">
              Cada lição traz fundamentação bíblica, reflexão teológica e
              aplicação prática, levando o aluno a entender que fé e ação são
              inseparáveis na vida do cristão.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Porque assistir o curso?</H3>
            <UL className="">
              <li>
                Para descobrir como a fé autêntica se manifesta em atitudes
                concretas.
              </li>
              <li>
                Para crescer em maturidade espiritual e integridade moral.
              </li>
              <li>
                Para aprender a lidar com provações, tentações e desafios da
                vida à luz da Palavra.
              </li>
              <li>
                Para desenvolver uma espiritualidade prática e compassiva, que
                une santidade e serviço.
              </li>
              <li>
                Para ser desafiado a viver um cristianismo coerente, que
                transforma o coração e a sociedade.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Para quem é este curso?</H3>
            <UL className="">
              <li>
                Novos convertidos que desejam compreender como a fé se traduz em
                vida.
              </li>
              <li>
                Cristãos que anseiam amadurecer espiritualmente e viver com
                coerência.
              </li>
              <li>
                Líderes, professores e discipuladores que querem ensinar uma fé
                prática e bíblica.
              </li>
              <li>
                Qualquer pessoa que deseje alinhar suas palavras, ações e
                convicções ao Evangelho.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Pré-requisitos</H3>
            <UL className="">
              <li>Disposição para refletir e aplicar a Palavra.</li>
              <li>Comprometimento com a prática e o discipulado.</li>
              <li>
                Desejo genuíno de crescer em sabedoria e maturidade cristã.
              </li>
            </UL>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="">
        <Container className="">
          <div>
            <H2>Estrutura do curso</H2>

            <P className="">
              Cada lição se aprofunda em um tema central da carta de Tiago,
              destacando a sabedoria prática da fé:
            </P>
          </div>
          <LessonsCards lessons={cartaTiagoCourse.lessons} />
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="mt-4 sm:mt-7 space-y-0 mb-10 sm:mb-16">
        <Container className="">
          <div>
            <H2>Em resumo</H2>

            <P className="">
              O curso Tiago – Quando Crer se Torna Agir é um convite à coerência
              cristã.
            </P>
            <P className="">
              É uma jornada de fé prática, onde o conhecimento bíblico encontra
              a transformação diária.
            </P>
            <P className="">
              Nele, cada discípulo é desafiado a unir sabedoria, fé e ação,
              tornando-se um reflexo vivo do Evangelho no mundo.
            </P>
            <P className="">Fé verdadeira não apenas fala, ela age.</P>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />
      <Container className="mb-10 sm:mb-16">
        <CTABox
          title={"Inscreva-se agora"}
          description={"Vem ser família com a gente!"}
          buttonLink={cartaTiagoCourse.ctaUrl}
          buttonText={CTADefaultLabel}
          openInNewTab={true}
          showArrow={false}
        />
      </Container>
    </section>
  );
}
