import { cn } from "~/lib/utils";

export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "leading-6 mt-4 text-muted-foreground text-left text-base sm:text-lg",
        className
      )}
    >
      {children}
    </p>
  );
}
