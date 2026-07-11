import { Container } from "~/components/container";
import { AllCoursesBackButton } from "~/components/back-buttons/all-courses";
// import { TopCTAButton } from "~/components/course-cta/top";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";
import { LessonsCards } from "~/components/lessons-cards";
import {
  CTADefaultLabel,
  defaultMembersAreaLoginUrl,
  voluntariadoCourse,
} from "~/data/courses/schools-and-courses";
import { LoginLink } from "~/components/course-cta/login-link";

export default function VoluntariadoPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllCoursesBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-1">
            <H1 className="text-left">Voluntariado</H1>
            <P className="mt-0">
              Servir é mais do que uma tarefa: é um chamado.
            </P>
            <P className="">
              Na Igreja Oceano da Graça, entendemos que cada voluntário é parte
              essencial da família, expressando o amor de Deus por meio do
              serviço ao próximo.
            </P>
            <P className="">
              O Treinamento de Voluntário foi criado para capacitar, inspirar e
              alinhar todos que escolheram dizer “sim” a esse propósito.
            </P>
          </div>

          <div className="sm:flex-1 order-first sm:order-last mb-6 sm:mb-0">
            <img
              src="/images/courses/voluntariado/yt-thumb-voluntariado.png"
              alt="Connect Course"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </HeroContainer>

      {/* <TopCTAButton
        ctaUrl={voluntariadoCourse.ctaUrl}
        ctaText={CTADefaultLabel}
        loginUrl={defaultMembersAreaLoginUrl}
        openInNewTab={true}
      /> */}

      <LoginLink
        loginUrl={defaultMembersAreaLoginUrl}
        className="mt-10 sm:mt-10"
      />

      <Separator className="my-14" />

      {/* <EmbededYoutubeVideo youtubeVideoId={defaultHeroYoutubeVideoId} /> */}

      <div className="mt-4 sm:mt-10 space-y-0">
        <Container className="">
          <div>
            <H2>Sobre o curso</H2>
            <P className="text-left">
              Este treinamento apresenta a identidade da igreja, os ministérios,
              funções e responsabilidades, além de destacar as marcas que devem
              estar presentes na vida de cada voluntário. Também oferece
              orientações práticas sobre procedimentos, postura e integração ao
              corpo da igreja.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Porque assistir o curso?</H3>
            <UL className="list-disc">
              <li>Para entender a visão e missão da Oceano da Graça.</li>
              <li>
                Para conhecer os diferentes ministérios e áreas de atuação.
              </li>
              <li>
                Para aprender os padrões de comportamento e excelência no
                serviço.
              </li>
              <li>
                Para viver o voluntariado como expressão de gratidão e amor a
                Jesus.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Para quem é este curso?</H3>
            <UL className="list-disc">
              <li>
                Todos que já servem como voluntários nos ministérios da igreja.
              </li>
              <li>Novos membros que desejam iniciar no voluntariado.</li>
              <li>Pessoas que querem alinhar serviço e espiritualidade.</li>
              <li>Líderes e equipes de apoio que coordenam ministérios.</li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Pré-requisitos</H3>
            <UL className="list-disc">
              <li>
                Ser membro ativo da Oceano da Graça (em alguns ministérios,
                mínimo de 6 meses de membresia).
              </li>
              <li>Amar a Deus, as pessoas e a igreja.</li>
              <li>
                Compromisso com pontualidade, flexibilidade e coração ensinável.
              </li>
              <li>
                Disposição para servir com excelência e manter bom testemunho.
              </li>
            </UL>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="mt-4 pb-20 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H2>Estrutura do curso</H2>
            <P>
              O Treinamento de Voluntário é o guia que prepara cada servo para
              viver seu chamado com alegria, excelência e propósito, conectando
              pessoas a Jesus com amor e graça.
            </P>
          </div>
          <LessonsCards lessons={voluntariadoCourse.lessons} />
        </Container>
      </div>

      {/* <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <CTABox
          title={"Inscreva-se agora"}
          description={"Vem ser família com a gente!"}
          buttonLink={voluntariadoCourse.ctaUrl}
          buttonText={CTADefaultLabel}
          openInNewTab={true}
          showArrow={false}
        />
      </Container> */}
    </section>
  );
}
