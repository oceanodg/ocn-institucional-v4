import { Container } from "~/components/container";
import { AllCoursesBackButton } from "~/components/back-buttons/all-courses";
import { TopCTAButton } from "~/components/course-cta/top";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";
import { LessonsCards } from "~/components/lessons-cards";
import {
  connectCourse,
  CTADefaultLabel,
  defaultMembersAreaLoginUrl,
} from "~/data/courses/schools-and-courses";
import { CTABox } from "~/components/cta-box";

export default function ConnectPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllCoursesBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-1">
            <H1 className="text-left">Connect</H1>
            <P className="mt-0">
              O Connect é o primeiro passo para mergulhar no Oceano da Graça.
            </P>
            <P className="">
              Um curso simples, acolhedor e inspirador que apresenta nossa
              visão, valores e oportunidades de servir. Aqui, você e sua família
              encontram{" "}
              <span className="font-semibold">
                pertencimento, propósito e comunhão.
              </span>
            </P>
            <P className="">Vem ser família com a gente!</P>
          </div>

          <div className="sm:flex-1 order-first sm:order-last mb-6 sm:mb-0">
            <img
              src="/images/courses/connect/yt-thumb-connect.png"
              alt="Connect Course"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </HeroContainer>

      <TopCTAButton
        ctaUrl={connectCourse.ctaUrl}
        ctaText={CTADefaultLabel}
        loginUrl={defaultMembersAreaLoginUrl}
        openInNewTab={true}
      />

      <Separator className="my-14" />

      {/* <EmbededYoutubeVideo youtubeVideoId={defaultHeroYoutubeVideoId} /> */}

      <div className="mt-4 sm:mt-10 space-y-0">
        <Container className="">
          <div>
            <H2>Sobre o curso</H2>
            <P className="text-left">
              O curso apresenta a história, valores, missão, visão e estrutura
              ministerial da Oceano da Graça. Também mostra como funcionam
              nossos programas de integração e voluntariado, ajudando cada
              pessoa a descobrir seu lugar na família da fé.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Porque assistir o curso?</H3>
            <UL className="list-disc">
              <li>
                Para conhecer de perto a visão e missão da Igreja Oceano da
                Graça.
              </li>
              <li>
                Para entender como funcionam nossos ministérios, programas e
                estrutura.
              </li>
              <li>
                Para se sentir parte da família e encontrar seu espaço de
                serviço e comunhão.
              </li>
              <li>
                Para dar os primeiros passos na fé de forma acompanhada e
                intencional.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Para quem é este curso?</H3>
            <UL className="list-disc">
              <li>Novos membros da Igreja Oceano da Graça.</li>
              <li>Visitantes que desejam entender melhor nossa identidade.</li>
              <li>
                Pessoas que querem se engajar nos ministérios e programas da
                igreja.
              </li>
              <li>
                Famílias que buscam pertencer a uma comunidade acolhedora.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Pré-requisitos</H3>
            <UL className="list-disc">
              <li>
                Estar disposto a conhecer e se envolver com a visão da igreja.
              </li>
              <li>
                Desejo de se conectar mais profundamente a Jesus e à família da
                fé.
              </li>
              <li>Não é necessário nenhum conhecimento prévio.</li>
            </UL>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H2>Estrutura do curso</H2>
            <P>O Connect é dividido em blocos temáticos que apresentam:</P>
          </div>
          <LessonsCards lessons={connectCourse.lessons} />
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <CTABox
          title={"Inscreva-se agora"}
          description={"Vem ser família com a gente!"}
          buttonLink={connectCourse.ctaUrl}
          buttonText={CTADefaultLabel}
          openInNewTab={true}
          showArrow={false}
        />
      </Container>
    </section>
  );
}
