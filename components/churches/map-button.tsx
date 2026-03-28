"use client";

import { MapPin } from "lucide-react";
import { Container } from "~/components/container";
import { Button } from "~/components/ui";

type MapButtonProps = {
  mapUrl: string;
  buttonText: string;
  openInNewTab: boolean;
  disabled?: boolean;
};

export function MapButton(props: MapButtonProps) {
  const { mapUrl, buttonText, openInNewTab, disabled = false } = props;

  return (
    <Container className="w-full sm:w-64">
      <Button
        variant="outline"
        size="lg"
        className="h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-full"
        disabled={disabled}
        onClick={() => {
          if (openInNewTab) {
            window.open(mapUrl, "_blank");
          } else {
            window.location.href = mapUrl;
          }
        }}
      >
        <MapPin className="" />
        <span dangerouslySetInnerHTML={{ __html: buttonText }} />
      </Button>
    </Container>
  );
}
