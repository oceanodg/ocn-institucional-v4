"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { cn } from "~/lib/utils";

import type { FeaturedBannerItem } from "./types";

export type Slot = "center" | "left" | "right";

type FeaturedBannerStageCardProps = {
  banner: FeaturedBannerItem;
  slot: Slot;
  /** Quando definido, o cartão é montado nesse slot e anima até `slot`. */
  enterFrom?: Slot;
  durationMs: number;
  interactive: boolean;
  preload?: boolean;
};

const slotClassName: Record<Slot, string> = {
  center: "translate-x-0 scale-100",
  left: "translate-x-[calc(-1*var(--neighbor-offset))] scale-[var(--neighbor-scale)]",
  right: "translate-x-[var(--neighbor-offset)] scale-[var(--neighbor-scale)]",
};

/**
 * Garante que o estilo inicial seja computado antes de trocar para o slot
 * final, para que a transição CSS parta do slot de origem.
 */
function useEnterSlot<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  slot: Slot,
  enterFrom?: Slot
) {
  const [current, setCurrent] = React.useState<Slot>(enterFrom ?? slot);

  React.useEffect(() => {
    if (!enterFrom || current === slot) return;
    void ref.current?.getBoundingClientRect();
    setCurrent(slot);
  }, [ref, slot, enterFrom, current]);

  return enterFrom ? current : slot;
}

export function FeaturedBannerStageCard({
  banner,
  slot,
  enterFrom,
  durationMs,
  interactive,
  preload = false,
}: FeaturedBannerStageCardProps) {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const currentSlot = useEnterSlot(ref, slot, enterFrom);
  const isCenter = currentSlot === "center";

  return (
    <Link
      ref={ref}
      href={banner.href}
      tabIndex={interactive ? 0 : -1}
      aria-hidden={!interactive}
      draggable={false}
      style={{ transitionDuration: `${durationMs}ms` }}
      className={cn(
        "absolute inset-0 block overflow-hidden rounded-[var(--banner-radius)] bg-muted",
        "transition-transform ease-in-out will-change-transform motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        slotClassName[currentSlot]
      )}
    >
      <Image
        src={banner.src}
        alt={banner.alt}
        fill
        preload={preload}
        draggable={false}
        className="object-cover"
        sizes="(min-width: 1024px) 900px, 90vw"
      />
      <span
        aria-hidden="true"
        style={{ transitionDuration: `${durationMs}ms` }}
        className={cn(
          "pointer-events-none absolute inset-0 bg-black/45 transition-opacity ease-in-out motion-reduce:transition-none",
          isCenter ? "opacity-0" : "opacity-100"
        )}
      />
    </Link>
  );
}
