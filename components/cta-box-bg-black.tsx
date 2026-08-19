"use client";

import { ArrowRight } from "lucide-react";
import { Button, P } from "./ui";
import { Container } from "./container";
import { twMerge } from "tailwind-merge";
import { lora } from "~/lib/fonts";

export function CTABoxBgBlack({
  title,
  description,
  buttonLink,
  buttonText,
  openInNewTab,
  buttonVariant = "outline",
  buttonClassName,
  disabled = false,
  showArrow = true,
}: {
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  buttonVariant?: "outline" | "default" | "secondary" | "ghost" | "link";
  buttonClassName?: string;
  openInNewTab?: boolean;
  disabled?: boolean;
  showArrow?: boolean;
}) {
  return (
    <Container className="bg-black rounded-lg border text-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
        <div className="flex-1">
          <div
            className={`text-xl sm:text-2xl font-semibold text-white ${lora.className}`}
          >
            {title}
          </div>
          <P className="mt-2 sm:mt-1 text-left text-gray-200">{description}</P>
        </div>

        <div className="w-full sm:w-auto sm:shrink-0">
          <Button
            variant={buttonVariant}
            size="lg"
            className={twMerge(
              "h-12 hover:cursor-pointer bg-white hover:bg-white/80 text-black hover:text-black w-full sm:w-52 md:px-8",
              buttonClassName
            )}
            onClick={() => {
              if (openInNewTab) {
                window.open(buttonLink, "_blank");
              } else {
                window.location.href = buttonLink;
              }
            }}
            disabled={disabled}
          >
            <span dangerouslySetInnerHTML={{ __html: buttonText }} />
            {disabled ? null : showArrow ? <ArrowRight /> : null}
          </Button>
        </div>
      </div>
    </Container>
  );
}
