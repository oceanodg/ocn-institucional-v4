import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Container } from "~/components/container";
import { Button, H2, P } from "~/components/ui";

export function PrimaveraMulher2026() {
  return (
    <Container className="py-8 mt-2 sm:mt-14 sm:rounded-md bg-pink-50">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
        <div className="relative w-full overflow-hidden rounded-sm">
          <Image
            src="/images/events/primavera-mulher/primavera-mulher-2026.jpeg"
            alt="Primavera Mulher 2026 — 25 e 26 de setembro"
            width={900}
            height={1200}
            className="h-auto w-full object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-col">
          <H2 className="mt-0 pb-0 text-gray-900">
            Conferência Primavera Mulher
          </H2>

          <P className="mt-3 sm:mt-4 text-gray-900">
            As inscrições estão oficialmente abertas para a Primavera Mulher
            2026! 🌷
          </P>
          <P className="text-gray-900">
            Nos dias 25 e 26 de setembro, viveremos mais uma edição desse
            encontro que tem marcado histórias, despertado mulheres e gerado
            transformação através da presença de Deus.
          </P>
          <P className="text-gray-900">
            Os lugares são limitados e, nesta edição, teremos assentos marcados.
            Então não deixe para depois!
          </P>

          {/* <Separator className="my-6" /> */}

          <Button
            className="mt-6 h-auto min-h-14 w-full flex-wrap gap-x-2 gap-y-1 whitespace-normal rounded-md bg-linear-to-r from-pink-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white hover:from-pink-600/90 hover:to-orange-500/90 hover:text-white text-sm sm:text-base [&_svg]:shrink-0 text-left"
            asChild
          >
            <a
              href="https://primaveramulher.oceanodagraca.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="min-w-0 text-pretty">
                SAIBA MAIS SOBRE A CONFERÊNCIA
              </span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </Container>
  );
}
