import type { SmallGroup } from "~/server/types/small-group";
import { HeroContainer } from "~/components/hero";
import { H1, H2, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { ArrowLeft } from "lucide-react";

type SmallGroupsNewProps = {
  smallGroup: SmallGroup | null;
};

export function SmallGroupsNew(props: SmallGroupsNewProps) {
  const { smallGroup } = props;

  let src =
    "https://docs.google.com/forms/d/e/1FAIpQLSduOEZR5UPwUC5cy5aj8YDtbZJ6jeLMKmsgnRi-u6OuGcoAKA/viewform?usp=pp_url";

  if (smallGroup) {
    src += `&entry.542441573=${smallGroup.name}`;
  }

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
          <H1 className="text-left">Pequenos Grupos</H1>
          <P className="mt-0">Solicite um Pequeno Grupo para você.</P>
        </div>
      </HeroContainer>

      <Separator className="my-14" />

      <Container className="px-4">
        <div>
          <H2 className="">Formulário de pedido para Pequeno Grupo</H2>
          <P className="mt-0">
            Preencha o formulário abaixo para que possamos te ajudar a encontrar
            o grupo perfeito para você.
          </P>
        </div>
        <iframe
          src={src}
          width="100%"
          height="960"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Carregando…
        </iframe>
      </Container>
    </section>
  );
}
