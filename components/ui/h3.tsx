import { cn } from "~/lib/utils";

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
        "scroll-m-20 text-xl md:text-xl lg:text-2xl font-medium tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}
