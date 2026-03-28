import { cn } from "~/lib/utils";

export function HeroImage({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "-my-2 w-full overflow-hidden rounded-lg border md:rounded-xl",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full", imageClassName)}
      />
    </div>
  );
}
