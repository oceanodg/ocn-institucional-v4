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
        "leading-6 mt-4 text-left text-muted-foreground",
        className
      )}
    >
      <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    </p>
  );
}
