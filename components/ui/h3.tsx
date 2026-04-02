import { cn } from "~/lib/utils";
import { lora } from "~/lib/fonts";

export function H3({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      id={id}
      className={cn(
        "scroll-m-20 text-xl md:text-xl lg:text-2xl font-medium tracking-tight text-gray-700",
        lora.className,
        className
      )}
    >
      {children}
    </h3>
  );
}
