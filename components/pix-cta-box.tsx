"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button, P } from "./ui";
import { Container } from "./container";
import { lora } from "~/lib/fonts";

interface PixCTABoxProps {
  pixKey: string;
  pixDescription: string;
}

export function PixCTABox({ pixKey, pixDescription }: PixCTABoxProps) {
  const [showCheckIcon, setShowCheckIcon] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setShowCheckIcon(true);

    setTimeout(() => {
      setShowCheckIcon(false);
    }, 5000);
  };

  return (
    <Container className="bg-white rounded-lg border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
        <div className="flex-1">
          <div
            className={`text-xl sm:text-2xl font-semibold text-gray-700 ${lora.className}`}
          >
            {pixDescription}
          </div>
          <P className="mt-2 sm:mt-1 text-left">{pixKey}</P>
        </div>

        <div className="w-full sm:w-auto sm:shrink-0">
          <Button
            variant="outline"
            size="lg"
            className="h-12 hover:cursor-pointer bg-gray-900 hover:bg-gray-900/80 text-white hover:text-white w-full sm:w-80"
            onClick={handleCopyPix}
          >
            {showCheckIcon ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Chave Pix copiada
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copiar chave Pix
              </>
            )}
          </Button>
        </div>
      </div>
    </Container>
  );
}
