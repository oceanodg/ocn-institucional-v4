import { Card, CardContent } from "~/components/ui/card";
import { CTAButton } from "~/components/projects/cta-button";
import type { Plan } from "~/components/projects/price-box/types";

interface PriceCardProps {
  plan: Plan;
}

export function PriceCard(props: PriceCardProps) {
  const { plan } = props;

  return (
    <Card key={plan.name} className="p-6 sm:p-8 shadow-none rounded-md">
      <CardContent className="flex flex-col gap-8 p-0">
        <div className="flex flex-col gap-6">
          <div className="relative flex flex-col gap-3">
            <h3 className={`text-lg font-semibold text-center`}>{plan.name}</h3>
          </div>

          <div className="flex items-end gap-0.5 justify-center">
            <span className="text-4xl font-bold">R$ {plan.pricing}</span>
            <span className="text-muted-foreground text-base">/ mês</span>
          </div>

          <CTAButton
            text={plan.ctaText}
            url={plan.ctaUrl}
            openInNewTab={false}
            containerClassName="w-full sm:w-full"
            buttonClassName="w-full sm:w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
