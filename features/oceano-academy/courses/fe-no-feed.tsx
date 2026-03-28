import { Container } from "~/components/container";
import { AllCoursesBackButton } from "~/features/oceano-academy/courses/components/all-courses-back-button";
import { TopCTAButton } from "~/features/oceano-academy/courses/components/top-cta-button";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";
import { EmbededYoutubeVideo } from "./components/embeded-youtube-video";
import { defaultHeroYoutubeVideoId } from "./data/videos";
import { LessonsCards } from "~/components/lessons-cards";
import {
  CTADefaultLabel,
  defaultMembersAreaLoginUrl,
  feNoFeedCourse,
} from "./data/schools-and-courses";
import { CTABox } from "~/components/cta-box";

export function FeNoFeed() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllCoursesBackButton href="/oceano-academy/escolas/escola-biblica" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-1">
            <H1 className="text-left">Fé no Feed</H1>
            <P className="mt-0">
              Como viver Cristo no mundo das redes sociais.
            </P>
            <P className="">
              O feed das suas redes sociais fala mais sobre você do que imagina.
              Cada curtida, comentário ou postagem revela o que ocupa o seu
              coração.
            </P>
            <P className="">
              Mas… será que sua presença digital tem refletido Cristo?
            </P>
          </div>

          <div className="sm:flex-1 order-first sm:order-last mb-6 sm:mb-0">
            <img
              src="/images/courses/fe-no-feed/yt-thumb-fe-no-feed.jpg"
              alt="Connect Course"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </HeroContainer>

      <TopCTAButton
        ctaUrl={feNoFeedCourse.ctaUrl}
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
              O Curso Fé no Feed é um guia prático e bíblico para transformar
              suas redes sociais em um espaço de testemunho, influência positiva
              e missão. Aqui você vai aprender a unir fé, propósito e
              autenticidade em cada publicação.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Porque assistir o curso?</H3>
            <UL className="">
              <li>
                Aprenda a usar suas redes como extensão do seu testemunho
                cristão;
              </li>
              <li>
                Descubra como lidar com curtidas, algoritmos e aprovação digital
                sem perder sua identidade em Cristo;
              </li>
              <li>
                Transforme sua presença online em oportunidade de evangelismo,
                edificação e inspiração;
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Para quem é este curso?</H3>
            <UL className="">
              <li>
                Jovens e adultos que desejam usar suas redes sociais com
                propósito;
              </li>
              <li>Líderes de ministérios e comunicadores cristãos;</li>
              <li>Qualquer pessoa que queira alinhar fé e vida digital;</li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Pré-requisitos</H3>
            <UL className="">
              <li>Ter redes sociais ativas;</li>
              <li>Desejo de viver Cristo no ambiente digital;</li>
              <li>Não precisa ter formação teológica – só coração aberto!</li>
            </UL>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H2>Estrutura do curso</H2>
          </div>
          <LessonsCards lessons={feNoFeedCourse.lessons} />
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <CTABox
          title={"Inscreva-se agora"}
          description={"Vem ser família com a gente!"}
          buttonLink={feNoFeedCourse.ctaUrl}
          buttonText={CTADefaultLabel}
          openInNewTab={true}
          showArrow={false}
        />
      </Container>
    </section>
  );
}
