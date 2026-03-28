import Link from "next/link";
import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { H2Dangerously } from "~/components/ui/h2-dangerously";
import { PriceCard } from "~/features/projects/components/price-box/price-card";
import type { Plan } from "~/features/projects/components/price-box/types";
import { P } from "~/components/ui";

interface PriceBoxProps {
  h2: string;
  containerClassName?: string;
  plans: Plan[];
}

export function PriceBox(props: PriceBoxProps) {
  const { h2, containerClassName, plans } = props;
  return (
    <Container
      className={cn(
        "px-4 sm:px-0 pb-2 py-0 sm:py-0 sm:pb-0 text-center justify-center items-center",
        containerClassName
      )}
    >
      <H2Dangerously dangerouslySetInnerHTML={{ __html: h2 }} />

      <div id="price-box" className="flex flex-col gap-2">
        <div className="mt-2 sm:mt-6 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <PriceCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-2 sm:mt-6 w-full gap-2">
          <P className="text-center">Deseja contribuir de outra forma?</P>
          <Link href="/projeto-expansao" className="text-blue-500 ml-2">
            Clique aqui.
          </Link>
        </div>
      </div>
    </Container>
  );
}
