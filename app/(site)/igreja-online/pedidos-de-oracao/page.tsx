import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { defaultWhatsAppNumber } from "~/data/common-data";
import { WhatsAppCTABox } from "~/components/whatsapp-cta-box";

export default function PedidosDeOracaoPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Pedidos de Oração</H1>
          <P className="mt-0">
            Acreditamos no poder da oração e no Deus que responde quando
            clamamos a Ele com fé.
          </P>
        </div>
      </HeroContainer>

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H3>Você não está sozinho</H3>
            <P className="text-left">
              Você não está sozinho em sua caminhada, queremos interceder por
              você e apresentar sua vida diante do Senhor.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Nossa intercessão por você</H3>
            <P className="text-left">
              Nossa equipe de oração está comprometida em orar com dedicação e
              amor, confiando que Deus ouve cada súplica e age segundo a Sua
              vontade. Seja qual for a sua necessidade, cremos que a oração pode
              trazer paz, direção e esperança.
            </P>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mt-4 sm:mt-7">
        <div>
          <H3 className="">Registre seu pedido de oração</H3>
          <P className="">
            Entre em contato pelo WhatsApp, clicando no botão ou preencha o
            formulário abaixo e registre seu pedido de oração. Estaremos ao seu
            lado, buscando em Deus respostas, consolo e milagres.
          </P>
        </div>
      </Container>

      <WhatsAppCTABox
        phoneNumber={defaultWhatsAppNumber}
        text="Olá, gostaria de registrar meu pedido de oração."
        openInNewTab={true}
        ctaText="Entrar em contato"
      />

      <Container className="mt-0 sm:mt-7">
        <div className="mt-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdiTCZ-iQ06rE0-ff4oWZCgD4o9UqvHK090XUHNXI3EfUMvgg/viewform?embedded=true"
            width="100%"
            height="960"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          >
            Carregando…
          </iframe>
        </div>
      </Container>
    </section>
  );
}
