import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H3, P } from "~/components/ui";
import { defaultWhatsAppNumber } from "~/data/common-data";
import { WhatsAppCTABox } from "~/components/whatsapp-cta-box";

export function OnlineChurch() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Igreja Online</H1>
          <P className="mt-0">
            Aqui você encontra um espaço preparado para que a distância nunca
            seja um obstáculo para viver a fé.
          </P>
        </div>
      </HeroContainer>

      <Container className="mt-4 sm:mt-7">
        <div>
          <H3 className="">
            Deixe o seu contato para saber mais sobre a Igreja Online
          </H3>
          <P className="">
            Entre em contato pelo WhatsApp, clicando no botão ou preencha o
            formulário abaixo para que possamos entrar em contato com você.
          </P>
        </div>
      </Container>

      <WhatsAppCTABox
        phoneNumber={defaultWhatsAppNumber}
        text="Olá, gostaria de saber mais sobre a Igreja Online."
        openInNewTab={true}
        ctaText="Entrar em contato"
      />

      <Container className="mt-0 sm:mt-7">
        <div className="mt-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdytPrLBLi6rGL6ozTUi9_lbCACrvEWT8KYhsG0jSr2Q2wSDg/viewform?embedded=true"
            width="100%"
            height="1150"
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
