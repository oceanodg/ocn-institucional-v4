import { H1, H2, P, Separator } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { schools } from "~/data/courses/schools-and-courses";
import { CardWithImageAndLink } from "~/components/card-with-image-and-link";
import { CTABox } from "~/components/cta-box";

export default function EscolaBiblicaPage() {
  return (
    <section className="relative backdrop-blur-sm">
      {/* <AllSchoolsBackButton /> */}

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Escola Bíblica</H1>
          <P className="mt-0">Cursos de ensino e adoração.</P>
        </div>
      </HeroContainer>

      <Separator className="my-14" />

      <Container className="pt-0 sm:pt-0 mb-10 sm:mb-16">
        <div className="flex flex-col gap-4">
          <CTABox
            title="Materiais de Apoio"
            description="Enriqueça seus estudos com os materiais de apoio."
            buttonLink="/oceano-academy/materiais-didaticos"
            buttonText="Acessar Materiais"
            openInNewTab={false}
          />
          <CTABox
            title="Planos de Leitura Bíblica"
            description="Estude a Bíblia de forma estruturada e organizada."
            buttonLink="/oceano-academy/planos-de-leitura"
            buttonText="Acessar Planos"
            openInNewTab={false}
          />
        </div>
      </Container>

      {/* <Separator className="my-14" /> */}

      <Container className="mb-10 sm:mb-16">
        <H2>Cursos</H2>

        <div className="grid grid-cols-1 gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {schools["escola-biblica"].courses.map((course) => (
            <CardWithImageAndLink
              key={course.title}
              {...course}
              openInNewTab={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
