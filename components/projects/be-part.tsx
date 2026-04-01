import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { H2Dangerously, P } from "~/components/ui";
import { CTAButton } from "~/components/projects/cta-button";

interface BePartOfTheProjectProps {
  h2: string;
  ctaText: string;
  ctaUrl: string;
  containerClassName?: string;
}

export function BePartOfTheProject(props: BePartOfTheProjectProps) {
  const { h2, ctaText, ctaUrl, containerClassName } = props;

  return (
    <Container
      className={cn(
        "px-4 py-12 sm:py-16 text-center justify-center items-center gap-0 lg:gap-0",
        "bg-zinc-100 sm:rounded-md",
        containerClassName
      )}
    >
      <div className="flex flex-col items-center text-center gap-10 sm:gap-12">
        <H2Dangerously
          dangerouslySetInnerHTML={{ __html: h2 }}
          className="pb-0"
        />

        <div className="flex flex-col gap-2 max-w-3xl sm:text-lg text-primary text-left px-0 sm:px-0">
          <P className="text-primary mt-0">
            Sua contribuição, independentemente do valor, é essencial para
            tornar realidade o sonho de levarmos a Palavra de Deus a todas as
            cidades do Distrito Federal e a Guiné-Bissau.
          </P>
          <P className="text-primary">
            Estamos construindo templos que serão lugares de adoração, comunhão
            e transformação de vidas — e você pode fazer parte disso!
          </P>
        </div>

        <CTAButton text={ctaText} url={ctaUrl} />
      </div>
    </Container>
  );
}
