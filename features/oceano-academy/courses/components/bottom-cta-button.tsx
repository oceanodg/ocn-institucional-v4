"use client";

import { Button } from "~/components/ui";

type BottomCtaButtonProps = {
  ctaUrl: string;
  ctaText: string;
  openInNewTab: boolean;
};

export function BottomCTAButton(props: BottomCtaButtonProps) {
  const { ctaUrl, ctaText, openInNewTab } = props;

  return (
    // <div className="w-full sm:w-96 mt-10">
    <Button
      variant="outline"
      size="lg"
      className="h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-80"
      onClick={() => {
        if (openInNewTab) {
          window.open(ctaUrl, "_blank");
        } else {
          window.location.href = ctaUrl;
        }
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: ctaText }} />
    </Button>
    // </div>
  );
}
