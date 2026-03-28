import { cn } from "~/lib/utils";

export function UL({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "list-disc list-outside leading-6 pl-3.5 sm:pl-3.5 mt-4 text-left sm:text-left text-muted-foreground space-y-3 sm:space-y-1",
        className
      )}
    >
      {children}
    </ul>
  );
}
