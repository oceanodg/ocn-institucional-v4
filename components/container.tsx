import { cn } from "~/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "px-6 py-5 sm:px-8 flex flex-col gap-8 sm:gap-10",
        className
      )}
    >
      {children}
    </section>
  );
}
