import { H1, P } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { CardWithLink } from "~/components/card-with-link";

export function About() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Quem Somos</H1>
          <P className="mt-0">Conheça a Igreja Oceano da Graça.</P>
        </div>
      </HeroContainer>

      <Container className="mt-0 sm:mt-0 mb-10 sm:mb-16">
        {/* <H2>Acesso rápido</H2> */}

        <div className="pt-0 sm:pt-0 mt-10 sm:mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <CardWithLink
            title="Nossa Razão"
            description="Conectar pessoas a Jesus com amor e graça."
            link="/sobre/nossa-razao"
            linkText="Saiba mais"
            openInNewTab={false}
          />

          <CardWithLink
            title="Nossa História"
            description="Como tudo começou."
            link="/sobre/nossa-historia"
            linkText="Saiba mais"
            openInNewTab={false}
          />

          <CardWithLink
            title="Nossos Pastores"
            description="Amor e cuidado com a Igreja Oceano da Graça."
            link="/nossos-pastores"
            linkText="Saiba mais"
            openInNewTab={false}
          />
        </div>
      </Container>
    </section>
  );
}
