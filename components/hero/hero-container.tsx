import { cn } from "~/lib/utils";

export function HeroContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "px-6 py-6 sm:px-8 sm:py-8 flex flex-col gap-8 lg:gap-10",
        className
      )}
    >
      {children}
    </section>
  );
}
