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
        "list-disc list-outside pl-3.5 sm:pl-4 mt-4 text-left sm:text-left space-y-3 sm:space-y-1",
        "leading-6 text-base sm:text-lg",
        "text-muted-foreground",
        className
      )}
    >
      {children}
    </ul>
  );
}
