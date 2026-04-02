import { cn } from "~/lib/utils";
import { lora } from "~/lib/fonts";

export function H2({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 text-gray-700",
        lora.className,
        className
      )}
    >
      {children}
    </h2>
  );
}
