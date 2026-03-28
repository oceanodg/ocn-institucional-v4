import { cn } from "~/lib/utils";

function formatCurrency(value: number) {
  return `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

interface FinancialProgressProps {
  actualValue: number;
  targetValue: number;
  containerClassName?: string;
}

export function FinancialProgress(props: FinancialProgressProps) {
  const { actualValue, targetValue, containerClassName } = props;
  const progressPercentage = (actualValue / targetValue) * 100;

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full",
        containerClassName
      )}
    >
      <div className="w-full max-w-3xl border rounded-lg p-6 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-left mb-4 gap-2">
          <div className="text-lg sm:text-xl font-semibold">
            {formatCurrency(actualValue)}
            <span className="ml-2 italic text-sm text-muted-foreground">
              (
              {progressPercentage.toLocaleString("pt-BR", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}
              % atingido)
            </span>
          </div>
          <div className="text-lg sm:text-xl font-semibold">
            Meta: {formatCurrency(targetValue)}
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="relative w-full h-10 border-3 border-zinc-700 rounded-sm overflow-hidden bg-white">
          {/* Parte preenchida com padrão hachurado */}
          <div
            className="absolute top-0 left-0 h-full transition-all duration-500"
            style={{
              width: `${progressPercentage}%`,
              backgroundImage: `repeating-linear-gradient(
                  45deg,
                  #000000,
                  #000000 2px,
                  transparent 2px,
                  transparent 6px,
                  #000000 6px,
                  #000000 8px,
                  transparent 8px,
                  transparent 12px
                )`,
            }}
          />

          {/* #86efac verde */}

          {/* Parte vazia */}
          <div
            className="absolute top-0 h-full bg-white"
            style={{
              left: `${progressPercentage}%`,
              width: `${100 - progressPercentage}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
