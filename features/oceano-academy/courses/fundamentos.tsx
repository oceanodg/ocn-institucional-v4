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
  fundamentosCourse,
} from "./data/schools-and-courses";
import { CTABox } from "~/components/cta-box";

export function Fundamentos() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllCoursesBackButton href="/oceano-academy/escolas/escola-de-membros" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-1">
            <H1 className="text-left">Fundamentos</H1>
            <P className="mt-0">
              A vida cristã, assim como uma construção, precisa estar firmada em
              alicerces sólidos.
            </P>
            <P className="">
              Sem bases bem definidas, a fé corre o risco de sucumbir diante dos
              ventos de falsos ensinos e das pressões da vida moderna.
            </P>
            <P className="">
              O <span className="font-semibold">Curso Fundamentos</span> nasceu
              para consolidar os principais pilares da fé cristã e conduzir cada
              discípulo a uma caminhada madura, enraizada na Palavra de Deus.
            </P>
          </div>

          <div className="sm:flex-1 order-first sm:order-last mb-6 sm:mb-0">
            <img
              src="/images/courses/fundamentos/yt-thumb-fundamentos.png"
              alt="Connect Course"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </HeroContainer>

      <TopCTAButton
        ctaUrl={fundamentosCourse.ctaUrl}
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
              O curso apresenta os temas essenciais da doutrina cristã sob a
              perspectiva pentecostal: a Bíblia Sagrada, Deus, Jesus Cristo,
              Espírito Santo, perdão dos pecados, justificação, salvação e novo
              nascimento, ordenanças de Jesus, batismo no Espírito Santo,
              santificação, segunda vinda de Cristo, tribunal de Cristo e juízo
              final.
            </P>
            <P className="">
              Além disso, cada lição é acompanhada por exercícios de fixação,
              reforçando o aprendizado e ajudando o aluno a aplicar o conteúdo
              em sua vida espiritual.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Porque assistir o curso?</H3>
            <UL className="">
              <li>Para fortalecer sua fé em bases bíblicas sólidas;</li>
              <li>
                Para compreender as principais doutrinas cristãs sem
                superficialidade;
              </li>
              <li>
                Para aprender de forma prática, com estudos, reflexões e
                exercícios;
              </li>
              <li>
                Para crescer em maturidade espiritual e viver um cristianismo
                relevante;
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Para quem é este curso?</H3>
            <UL className="">
              <li>Novos convertidos que precisam de fundamentos firmes;</li>
              <li>Cristãos que desejam aprofundar-se na Palavra de Deus;</li>
              <li>
                Líderes de células, discipuladores e professores de Escola
                Bíblica;
              </li>
              <li>
                Qualquer pessoa que queira ter clareza doutrinária e viver uma
                fé sólida;
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Pré-requisitos</H3>
            <UL className="">
              <li>Desejo genuíno de crescer em conhecimento bíblico;</li>
              <li>
                Compromisso em participar das aulas e realizar os exercícios;
              </li>
              <li>Não é necessário ter conhecimento teológico prévio;</li>
            </UL>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H2>Estrutura do curso</H2>
            <P className="">
              O Curso Fundamentos é a base sólida que todo cristão precisa para
              crescer em maturidade, permanecer firme na fé e viver um evangelho
              relevante em qualquer tempo.
            </P>
            <P className="">
              Cada lição trata de um tema central da fé cristã:
            </P>
          </div>
          <LessonsCards lessons={fundamentosCourse.lessons} />
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <CTABox
          title={"Inscreva-se agora"}
          description={"Vem ser família com a gente!"}
          buttonLink={fundamentosCourse.ctaUrl}
          buttonText={CTADefaultLabel}
          openInNewTab={true}
          showArrow={false}
        />
      </Container>
    </section>
  );
}
