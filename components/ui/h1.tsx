import { cn } from "~/lib/utils";
import { lora } from "~/lib/fonts";

export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-3xl sm:text-4xl font-bold tracking-tight text-balance text-gray-700",
        lora.className,
        className
      )}
    >
      {children}
    </h1>
  );
}
