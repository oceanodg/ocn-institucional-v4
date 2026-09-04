"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

type FeaturedBannerArrowsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

const arrowClassName =
  "absolute top-1/2 z-20 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full border-white/40 bg-white/60 text-primary shadow-sm backdrop-blur-sm hover:bg-white/80 sm:inline-flex";

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
        className={cn(arrowClassName, "left-0 -translate-x-1/2")}
        onClick={onPrevious}
        aria-label="Banner anterior"
      >
        <ChevronLeft className="size-5" />
      </Button>

      <Button
        type="button"
        variant="outline"
        size="icon"
        className={cn(arrowClassName, "right-0 translate-x-1/2")}
        onClick={onNext}
        aria-label="Próximo banner"
      >
        <ChevronRight className="size-5" />
      </Button>
    </>
  );
}
