"use client";

import { H1 } from "~/components/ui/h1";
import { P } from "~/components/ui/p";
import { HeroContainer } from "~/components/hero";
import { H3 } from "~/components/ui/h3";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Separator } from "~/components/ui/separator";

const liveServiceSchedule: {
  weekday: string;
  times: { name: string; time: string }[];
}[] = [
  {
    weekday: "Domingo",
    times: [
      { name: "Culto da Família", time: "10:00" },
      { name: "Culto da Família", time: "18:30" },
    ],
  },
  {
    weekday: "Quarta-feira",
    times: [{ name: "Quarta da Graça", time: "20:00" }],
  },
];

export default function CultosAoVivoPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Cultos ao Vivo</H1>
          <P className="mt-0">
            Experimente a igreja em qualquer lugar do mundo.
          </P>
        </div>
      </HeroContainer>

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H3>Horário das transmissões</H3>
            <P className="text-left">
              Não importa onde você esteja na vida, queremos que a Igreja Oceano
              de Graça seja um lugar onde você possa confiar para receber a
              Palavra de Deus, inspiração, encorajamento e apoio.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Domingo</H3>
            <div className="flex flex-col gap-2">
              <UL className="">
                <li className="mt-0">Culto da Família - 10:00</li>
                <li className="mt-0">Culto da Família - 18:30</li>
              </UL>
            </div>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Quarta-feira</H3>
            <div className="flex flex-col gap-2">
              <UL className="">
                <li className="mt-0">Quarta da Graça - 20:00</li>
              </UL>
            </div>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mt-4 sm:mt-7">
        <Container className="bg-white rounded-lg border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-8">
            <div className="flex-1">
              <a
                href="https://www.youtube.com/c/OceanodaGra%C3%A7a/live"
                target="_blank"
                className="mt-0 sm:block mx-auto sm:mx-0 w-36"
              >
                <img
                  src="/images/youtube-full-logo.png"
                  alt="Youtube"
                  className="w-36 mt-0 hover:opacity-80 transition-all duration-100"
                />
              </a>
            </div>

            <div className="w-full sm:w-auto mt-3 sm:mt-0">
              <Button
                variant="outline"
                size="lg"
                className="h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-72"
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/c/OceanodaGra%C3%A7a/live",
                    "_blank"
                  );
                }}
              >
                Acessar
                <ArrowRight />
              </Button>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
