"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

type FeaturedBannerArrowsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

const arrowClassName =
  "absolute top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-white text-primary shadow-md hover:bg-white sm:inline-flex";

export function FeaturedBannerArrows({
  onPrevious,
  onNext,
}: FeaturedBannerArrowsProps) {
  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className={cn(
          arrowClassName,
          "left-[calc((100%-var(--slide-width))/2)] -translate-x-1/2"
        )}
        onClick={onPrevious}
        aria-label="Banner anterior"
      >
        <ChevronLeft className="size-5" />
      </Button>

      <Button
        type="button"
        variant="outline"
        size="icon"
        className={cn(
          arrowClassName,
          "right-[calc((100%-var(--slide-width))/2)] translate-x-1/2"
        )}
        onClick={onNext}
        aria-label="Próximo banner"
      >
        <ChevronRight className="size-5" />
      </Button>
    </>
  );
}
