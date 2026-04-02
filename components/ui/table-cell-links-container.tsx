import { cn } from "~/lib/utils";

interface TableCellLinksContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function TableCellLinksContainer({
  children,
  className,
  ...props
}: TableCellLinksContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:flex-wrap gap-2 items-start sm:items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
