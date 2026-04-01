import { H1, P, H3, Button, Separator } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { CTABox } from "~/components/cta-box";
import { projects } from "~/data/projects";

export default function ProjetosPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Projetos</H1>
          <P className="mt-0">Conheça os projetos da Igreja Oceano da Graça.</P>
        </div>
      </HeroContainer>

      {projects.map((project, index) => {
        const isFirst = index === 0;
        const isLast = index === projects.length - 1;

        let containerClassName = "mb-0 sm:mb-0 pt-0 sm:pt-0";

        if (isFirst) {
          containerClassName = "pt-0 sm:pt-0 mt-10 sm:mt-14";
        } else if (isLast) {
          containerClassName = "mb-10 sm:mb-16 pt-0 sm:pt-0";
        }

        return (
          <Container key={project.id} className={containerClassName}>
            <CTABox
              title={project.name}
              description={project.description}
              buttonLink={`/projetos/${project.slug}`}
              buttonText="Saiba mais"
              openInNewTab={false}
            />
          </Container>
        );
      })}
    </section>
  );
}
