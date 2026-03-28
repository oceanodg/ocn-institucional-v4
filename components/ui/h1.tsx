import { cn } from "~/lib/utils";

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
        "scroll-m-20 text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
}
