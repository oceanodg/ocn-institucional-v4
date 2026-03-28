import { cn } from "~/lib/utils";

export function H2Dangerously({
  dangerouslySetInnerHTML,
  className,
}: {
  dangerouslySetInnerHTML: { __html: string };
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 leading-7",
        className
      )}
    >
      <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    </h2>
  );
}
