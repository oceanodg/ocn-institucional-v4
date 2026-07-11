import { Container } from "~/components/container";
import { AllCoursesBackButton } from "~/components/back-buttons/all-courses";
import { TopCTAButton } from "~/components/course-cta/top";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";
import { LessonsCards } from "~/components/lessons-cards";
import {
  CTADefaultLabel,
  defaultMembersAreaLoginUrl,
  vidaNovaCourse,
} from "~/data/courses/schools-and-courses";
import { CTABox } from "~/components/cta-box";

export default function VidaNovaPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllCoursesBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-1">
            <H1 className="text-left">Nova Vida</H1>
            <P className="mt-0">
              O início da caminhada cristã é um momento especial, cheio de
              descobertas e fundamentos que sustentarão toda a vida de fé.
            </P>
            <P className="">
              O Curso Nova Vida foi desenvolvido para conduzir cada novo
              discípulo aos princípios básicos da fé cristã, fortalecendo sua
              identidade em Cristo e estabelecendo raízes firmes na Palavra .
            </P>
          </div>

          <div className="sm:flex-1 order-first sm:order-last mb-6 sm:mb-0">
            <img
              src="/images/courses/vida-nova/yt-thumb-vida-nova.jpg"
              alt="Connect Course"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </HeroContainer>

      <TopCTAButton
        ctaUrl={vidaNovaCourse.ctaUrl}
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
              Este curso apresenta os fundamentos bíblicos da fé cristã,
              abordando temas essenciais como salvação, oração, leitura bíblica,
              comunhão e vida em comunidade. Ele prepara o novo convertido para
              crescer espiritualmente e viver de maneira plena a nova vida em
              Jesus.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Porque assistir o curso?</H3>
            <UL className="">
              <li>
                Para compreender melhor a salvação e o novo nascimento em
                Cristo;
              </li>
              <li>
                Para aprender práticas espirituais básicas e essenciais para a
                fé;
              </li>
              <li>
                Para fortalecer sua caminhada cristã com fundamentos sólidos;
              </li>
              <li>
                Para viver em comunhão, descobrindo o valor de pertencer à
                família de Deus;
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Para quem é este curso?</H3>
            <UL className="">
              <li>Novos convertidos que deram seus primeiros passos na fé;</li>
              <li>Pessoas que desejam consolidar sua vida espiritual;</li>
              <li>Quem busca compreender a base bíblica da vida cristã;</li>
              <li>
                Qualquer cristão que queira renovar seus fundamentos na fé;
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Pré-requisitos</H3>
            <UL className="">
              <li>Ter decidido entregar a vida a Cristo;</li>
              <li>Desejo sincero de crescer espiritualmente;</li>
              <li>
                Disponibilidade para participar das aulas e vivenciar os
                princípios ensinados;
              </li>
            </UL>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H2>Estrutura do curso</H2>
            <P>
              O Curso Nova Vida é o primeiro passo para consolidar a fé, viver
              em comunhão e experimentar plenamente a transformação que só Jesus
              pode oferecer.
            </P>
          </div>
          <LessonsCards lessons={vidaNovaCourse.lessons} />
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <CTABox
          title={"Inscreva-se agora"}
          description={"Vem ser família com a gente!"}
          buttonLink={vidaNovaCourse.ctaUrl}
          buttonText={CTADefaultLabel}
          openInNewTab={true}
          showArrow={false}
        />
      </Container>
    </section>
  );
}
