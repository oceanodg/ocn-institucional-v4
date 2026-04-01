import { Container } from "~/components/container";
import { H1Dangerously } from "~/components/ui/h1-dangerously";
import { H2Dangerously } from "~/components/ui/h2-dangerously";
import { CTAButton } from "~/components/projects/cta-button";
import { FinancialProgressCard } from "~/components/financial-progress-card";

interface ProjectHeroProps {
  h1: string;
  h2: string;
  actualValue: number;
  targetValue: number;
  ctaUrl: string;
  ctaText: string;
}

export function ProjectHero(props: ProjectHeroProps) {
  const { h1, h2, actualValue, targetValue, ctaUrl, ctaText } = props;

  return (
    <Container className="px-4 mt-6 sm:mt-14 pb-2 sm:pb-0 text-center justify-center items-center">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-2 text-center justify-center items-center">
          <H1Dangerously dangerouslySetInnerHTML={{ __html: h1 }} />
          <H2Dangerously
            className="mt-4 sm:mt-2 text-xl lg:text-2xl font-normal text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: h2 }}
          />
        </div>

        <FinancialProgressCard
          actualValue={actualValue}
          targetValue={targetValue}
        />

        <CTAButton text={ctaText} url={ctaUrl} />
      </div>
    </Container>
  );
}
