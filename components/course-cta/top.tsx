"use client";

import { Container } from "~/components/container";
import { Button, P } from "~/components/ui";

type TopCtaButtonProps = {
  ctaUrl: string;
  ctaText: string;
  loginUrl: string;
  openInNewTab: boolean;
  disabled?: boolean;
};

export function TopCTAButton(props: TopCtaButtonProps) {
  const { ctaUrl, ctaText, loginUrl, openInNewTab, disabled = false } = props;

  return (
    <Container className="w-full sm:w-96 p-4 sm:p-6 gap-3 lg:gap-3">
      <Button
        variant="outline"
        size="lg"
        className="h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-full"
        disabled={disabled}
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

      <P className="mt-0 sm:mt-0 mx-auto sm:mx-0">
        Já é cadastrado(a)?{" "}
        <a
          href={loginUrl}
          className="text-primary hover:text-primary/80 underline underline-offset-2 "
          target="_blank"
        >
          Acesse aqui
        </a>
      </P>
    </Container>
  );
}
