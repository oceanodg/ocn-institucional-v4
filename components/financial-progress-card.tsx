import { Card, CardContent } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { cn } from "~/lib/utils";

function formatCurrency(value: number) {
  return `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

interface FinancialProgressCardProps {
  actualValue: number;
  targetValue: number;
  containerClassName?: string;
}

export function FinancialProgressCard(props: FinancialProgressCardProps) {
  const { actualValue, targetValue, containerClassName } = props;

  const progressPercentage = (actualValue / targetValue) * 100;

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full",
        containerClassName
      )}
    >
      <Card className="w-full max-w-3xl rounded-lg shadow-xs border">
        {/* <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Valor atingido
          </CardTitle>
        </CardHeader> */}

        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-green-600 font-medium">
                <span>{formatCurrency(actualValue)}</span>
              </div>

              <p className="text-sm font-medium text-muted-foreground">
                Meta: {formatCurrency(targetValue)}
              </p>
            </div>

            <Progress
              value={progressPercentage}
              className="mt-2 bg-gray-200 h-2"
            />

            <p className="text-sm text-muted-foreground mt-4 font-medium italic">
              {progressPercentage.toLocaleString("pt-BR", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}
              % da meta atingida
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
