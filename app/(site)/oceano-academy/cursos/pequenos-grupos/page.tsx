import { Container } from "~/components/container";
import { AllCoursesBackButton } from "~/components/back-buttons/all-courses";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";
import { LessonsCards } from "~/components/lessons-cards";
import {
  defaultMembersAreaLoginUrl,
  pequenosGruposCourse,
} from "~/data/courses/schools-and-courses";
import { LoginLink } from "~/components/course-cta/login-link";

export default function PequenosGruposPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllCoursesBackButton href="/oceano-academy/escolas/escola-de-membros" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-1">
            <H1 className="text-left">Pequenos Grupos</H1>
            <P className="mt-0">
              Guia prático para líderes e membros viverem o discipulado como
              estilo de vida, fortalecendo relacionamentos, amadurecendo a fé e
              conectando pessoas a Jesus com amor e graça.
            </P>
          </div>

          <div className="sm:flex-1 order-first sm:order-last mb-6 sm:mb-0">
            <img
              src="/images/courses/pequenos-grupos/yt-thumb-pequenos-grupos.png"
              alt="Connect Course"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </HeroContainer>

      <LoginLink loginUrl={defaultMembersAreaLoginUrl} />

      <Separator className="my-14" />

      <div className="mt-4 sm:mt-10 space-y-0">
        <Container className="">
          <div>
            <H2>Sobre o curso</H2>
            <P className="">
              Este treinamento apresenta a identidade, a visão e a prática dos
              Pequenos Grupos da Igreja Oceano da Graça, destacando seu papel
              essencial no cuidado, no discipulado e na consolidação de vidas.
            </P>
            <P>
              Ao longo das aulas, você compreenderá os fundamentos bíblicos da
              igreja-família, o modelo de discipulado relacional, a estrutura
              dos grupos, o funcionamento dos encontros e o processo saudável de
              crescimento e multiplicação.
            </P>
            <P>
              O curso também oferece orientações práticas para líderes e membros
              viverem o discipulado como estilo de vida, fortalecendo
              relacionamentos, amadurecendo a fé e conectando pessoas a Jesus
              com amor e graça.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Porque assistir o curso?</H3>
            <UL className="">
              <li>
                Para compreender a identidade e a cultura da igreja-família.
              </li>
              <li>Para entender o discipulado como essência da vida cristã.</li>
              <li>
                Para conhecer a estrutura e o funcionamento dos Pequenos Grupos.
              </li>
              <li>
                Para aprender como viver os pilares da fé na prática relacional.
              </li>
              <li>
                Para desenvolver uma visão de crescimento saudável e
                multiplicação.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Para quem é este curso?</H3>
            <UL className="">
              <li>Líderes e futuros líderes de Pequenos Grupos.</li>
              <li>Membros que já participam de um Pequeno Grupo.</li>
              <li>
                Pessoas que desejam se integrar e crescer em relacionamentos
                cristãos saudáveis.
              </li>
              <li>
                Servos que querem compreender e viver o discipulado na prática.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Pré-requisitos</H3>
            <UL className="">
              <li>Ser membro ativo da igreja.</li>
              <li>Desejo de crescer espiritualmente e relacionalmente.</li>
              <li>Compromisso com a vida em comunidade.</li>
              <li>
                Coração ensinável e disposição para caminhar em discipulado.
              </li>
            </UL>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="mt-4 mb-14 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H2>Estrutura do curso</H2>
            <P className="">
              O Treinamento de Pequenos Grupos foi desenvolvido para alinhar
              identidade, visão e prática do discipulado relacional, preparando
              cada participante para viver a fé em comunidade de forma saudável,
              intencional e multiplicadora.
            </P>
            <P className="">Ao longo das aulas, você aprenderá sobre:</P>
          </div>
          <LessonsCards lessons={pequenosGruposCourse.lessons} />
          <P className="">
            Este curso é um guia prático e espiritual para fortalecer
            relacionamentos, amadurecer a fé e participar ativamente da missão
            de conectar pessoas a Jesus com amor e graça.
          </P>
        </Container>
      </div>
    </section>
  );
}
