"use client";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

interface CTAButtonProps {
  text: string;
  url: string;
  openInNewTab?: boolean;
  disabled?: boolean;
  containerClassName?: string;
  buttonClassName?: string;
}

export function CTAButton(props: CTAButtonProps) {
  const {
    text,
    url,
    openInNewTab,
    disabled,
    containerClassName,
    buttonClassName,
  } = props;

  return (
    <div className={cn("w-full sm:w-96", containerClassName)}>
      <Button
        variant="outline"
        size="lg"
        className={cn(
          "h-14 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-full font-medium",
          buttonClassName
        )}
        onClick={() => {
          if (openInNewTab) {
            window.open(url, "_blank");
          } else {
            window.location.href = url;
          }
        }}
        disabled={disabled}
      >
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </Button>
    </div>
  );
}
