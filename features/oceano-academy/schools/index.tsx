import { Container } from "~/components/container";
import { CTABox } from "~/components/cta-box";
import { HeroContainer } from "~/components/hero";
import { H1, P, Separator } from "~/components/ui";

export function Schools() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Escolas</H1>
          <P className="mt-0">Nossas Escolas e Cursos da Oceano Academy.</P>
        </div>
      </HeroContainer>

      <Container className="pt-0 sm:pt-0 mt-10 sm:mt-14">
        <CTABox
          title="Escola de Membros"
          description="Nosso discipulado institucional."
          buttonLink="/oceano-academy/escolas/escola-de-membros"
          buttonText="Ver cursos"
          openInNewTab={false}
        />
      </Container>

      <Container className="mb-0 sm:mb-0 pt-0 sm:pt-0">
        <CTABox
          title="Escola Bíblica"
          description="Cursos de ensino e adoração."
          buttonLink="/oceano-academy/escolas/escola-biblica"
          buttonText="Ver cursos"
          openInNewTab={false}
        />
      </Container>

      <Container className="mb-10 sm:mb-16 pt-0 sm:pt-0">
        <CTABox
          title="Escola de Líderes"
          description="Cursos de capacitação para líderes."
          buttonLink="/oceano-academy/escolas/escola-de-lideres"
          buttonText="Em breve"
          openInNewTab={false}
          disabled
        />
      </Container>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <CTABox
          title="Já é cadastrado(a) em algum curso?"
          description="Acesse agora a Oceano Academy."
          buttonLink="https://academy.oceanodagraca.com/"
          buttonText="Acesse agora"
          openInNewTab={true}
        />
      </Container>
    </section>
  );
}
