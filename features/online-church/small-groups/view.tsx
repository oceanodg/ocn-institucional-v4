"use client";

import { ArrowLeft } from "lucide-react";
import type { SmallGroup } from "~/server/types/small-group";
import { HeroContainer } from "~/components/hero";
import { Button, H1, H2, H3, P } from "~/components/ui";
import { Container } from "~/components/container";
import { Badge } from "~/components/ui/badge";

type SmallGroupsViewProps = {
  smallGroup: SmallGroup;
};

export function SmallGroupsView(props: SmallGroupsViewProps) {
  const { smallGroup } = props;

  const ctaUrl = `/pequenos-grupos/formulario-pedido?slug=${smallGroup.slug}`;

  return (
    <section className="relative backdrop-blur-sm">
      <Container className="pb-2 sm:pb-2">
        <div className="flex justify-start">
          <a
            href="/pequenos-grupos"
            className="h-9 px-4 py-2 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70 inline-flex items-center gap-2 rounded-md text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Pequenos Grupos
          </a>
        </div>
      </Container>

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">{smallGroup.name}</H1>
          <P className="mt-0">{smallGroup.fullAddress}</P>

          <div className="flex gap-2">
            {smallGroup.tags?.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </HeroContainer>

      <Container className="w-full sm:w-96 p-4 sm:p-6 gap-3 lg:gap-3">
        <Button
          variant="outline"
          size="lg"
          className="h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-full"
          onClick={() => {
            window.location.href = ctaUrl;
          }}
        >
          Participe deste PG
        </Button>
      </Container>

      <Container className="">
        <Container className="bg-zinc-100 rounded-lg">
          <div>
            <H2>Sobre o Pequeno Grupo</H2>
            <P className="">{smallGroup.about}</P>

            <H3 className="font-medium mt-8 sm:mt-10">Quando acontece?</H3>
            <P className="">
              <ul className="list-disc list-inside">
                <li>Todo sábado às 14:00.</li>
              </ul>
            </P>

            <H3 className="font-medium mt-8 sm:mt-10">Aonde?</H3>
            <P className="">QS 01, Rua 210, Lote 26 – Águas Claras - DF</P>
          </div>
        </Container>

        <Container className="bg-zinc-100 rounded-lg">
          <div>
            <H2>Líderes</H2>

            <P className="">
              <ul className="list-disc list-inside">
                {smallGroup.leaders.map((leader) => (
                  <li key={leader}>{leader}</li>
                ))}
              </ul>
            </P>
          </div>
        </Container>
      </Container>

      <Container className="mb-10 sm:mb-16">
        <Container className="bg-zinc-100 rounded-lg">
          <div>
            <H2>Faça parte agora</H2>
            <P className="">
              Está pronto para fazer parte deste Pequeno Grupo?
            </P>

            <div className="w-full sm:w-96 mt-10">
              <Button
                variant="outline"
                size="lg"
                className="h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-full"
                onClick={() => {
                  window.location.href = ctaUrl;
                }}
              >
                Participe deste PG
              </Button>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
