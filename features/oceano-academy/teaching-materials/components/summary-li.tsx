import { cn } from "~/lib/utils";

export function SummaryLi({
  children,
  className,
  subList = false,
}: {
  children: React.ReactNode;
  className?: string;
  subList?: boolean;
}) {
  return (
    <li
      className={cn(
        "hover:underline underline-offset-4 text-blue-500 w-fit",
        subList && "ml-4 sm:ml-6",
        className
      )}
    >
      {children}
    </li>
  );
}
