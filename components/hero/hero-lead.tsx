import { cn } from "~/lib/utils";

export function HeroLead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex flex-col gap-0", className)}>{children}</div>;
}
