import { cn } from "~/lib/utils";

interface LinkSmallProps extends React.ComponentProps<"a"> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function LinkSmall({
  href,
  children,
  className,
  ...props
}: LinkSmallProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex gap-1.5 items-center",
        "w-auto px-2 py-1 rounded-sm font-medium",
        "text-blue-500 hover:text-blue-600",
        "bg-blue-50 hover:bg-blue-100",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
