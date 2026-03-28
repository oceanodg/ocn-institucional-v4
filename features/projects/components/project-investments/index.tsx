import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { H2Dangerously } from "~/components/ui/h2-dangerously";
import { ProjectInvestment } from "~/features/projects/components/project-investments/project-investment";
import type { Investment } from "~/features/projects/components/project-investments/types";
import { CTAButton } from "~/features/projects/components/cta-button";

interface ProjectInvestmentsProps {
  title: string;
  containerClassName?: string;
  ctaText: string;
  ctaUrl: string;
  investments: Investment[];
}

export function ProjectInvestments(props: ProjectInvestmentsProps) {
  const { title, containerClassName, investments, ctaText, ctaUrl } = props;

  return (
    <Container
      className={cn(
        "px-4 sm:px-0 pb-2 py-0 sm:py-0 sm:pb-0",
        "text-center justify-center items-center",
        // "gap-10 sm:gap-14",
        containerClassName
      )}
    >
      <H2Dangerously dangerouslySetInnerHTML={{ __html: title }} />

      <div className="flex flex-col gap-10 sm:gap-12 w-full">
        {investments.map((investment: Investment) => (
          <ProjectInvestment key={investment.title} investment={investment} />
        ))}
      </div>

      <CTAButton text={ctaText} url={ctaUrl} />
    </Container>
  );
}
