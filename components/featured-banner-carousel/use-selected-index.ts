"use client";

import * as React from "react";

import type { CarouselApi } from "~/components/ui/carousel";

export function useSelectedIndex(api: CarouselApi | undefined) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const update = () => setSelectedIndex(api.selectedScrollSnap());

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return selectedIndex;
}
