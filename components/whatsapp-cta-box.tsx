"use client";

import { Container } from "./container";
import { Button } from "./ui";

export function WhatsAppCTABox({
  phoneNumber,
  text,
  openInNewTab = true,
  ctaText = "Entrar em contato",
}: {
  phoneNumber: string;
  text?: string;
  openInNewTab?: boolean;
  ctaText?: string;
}) {
  return (
    <Container className="mt-4 sm:mt-7">
      <Container className="bg-white rounded-lg border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-8">
          <div className="flex-1">
            <a
              href={`https://wa.me/${phoneNumber}${text ? `?text=${text}` : ""}`}
              target={openInNewTab ? "_blank" : undefined}
              className="mt-0 sm:block mx-auto sm:mx-0 w-36"
            >
              <img
                src="/images/whatsapp-full-logo.png"
                alt="Whatsapp"
                className="w-36 mt-0 hover:opacity-80 transition-all duration-100"
              />
            </a>
          </div>

          <div className="w-full sm:w-auto sm:flex-shrink-0 mt-3 sm:mt-0">
            <Button
              variant="outline"
              size="lg"
              className="h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-72"
              onClick={() => {
                if (openInNewTab) {
                  window.open(
                    `https://wa.me/${phoneNumber}${text ? `?text=${text}` : ""}`,
                    "_blank"
                  );
                } else {
                  window.location.href = `https://wa.me/${phoneNumber}${text ? `?text=${text}` : ""}`;
                }
              }}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
}
