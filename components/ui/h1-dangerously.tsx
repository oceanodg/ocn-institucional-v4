import { cn } from "~/lib/utils";

export function H1Dangerously({
  dangerouslySetInnerHTML,
  className,
}: {
  dangerouslySetInnerHTML: { __html: string };
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance",
        className
      )}
    >
      <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    </h1>
  );
}
