import { Container } from "~/components/container";
import { AcademyHeroVideo } from "./academy-hero-video";
import { SchoolAccordionCards } from "./school-accordion-cards";
import { H3, P } from "~/components/ui";
import { CTABoxBgBlack } from "~/components/cta-box-bg-black";

export default function OceanoAcademyPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <AcademyHeroVideo />

      {/* <AcademyIntro /> */}

      {/* <Separator className="mt-4 sm:mt-8 mb-10 sm:mb-12" /> */}

      <Container className="pt-0 sm:pt-0 mt-10 sm:mt-12 mb-10 sm:mb-16">
        <CTABoxBgBlack
          title="Já é cadastrado(a) em algum curso?"
          description="Acesse agora a plataforma de cursos da Oceano Academy."
          buttonLink="https://academy.oceanodagraca.com/"
          buttonText="Acesse agora"
          openInNewTab={true}
        />

        <div className="flex flex-col gap-4">
          <H3>Nossas escolas de formação</H3>

          <P className="-mt-2 mb-2 sm:mt-0 sm:mb-2">
            Encontre a formação certa para servir e crescer na fé.
          </P>

          <SchoolAccordionCards />
        </div>
      </Container>
    </section>
  );
}
