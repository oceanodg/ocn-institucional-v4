import { cn } from "~/lib/utils";

export function PDangerously({
  dangerouslySetInnerHTML,
  className,
}: {
  dangerouslySetInnerHTML: { __html: string };
  className?: string;
}) {
  return (
    <p
      className={cn(
        "leading-6 mt-4 text-left text-muted-foreground text-base sm:text-lg",
        className
      )}
    >
      <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    </p>
  );
}
