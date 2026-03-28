import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H3, P, Separator } from "~/components/ui";
import { defaultWhatsAppNumber } from "~/data/common-data";
import { WhatsAppCTABox } from "~/components/whatsapp-cta-box";

export function PastoralCare() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Acompanhamento Pastoral</H1>
          <P className="mt-0">
            Na nossa igreja, ninguém precisa caminhar sozinho.
          </P>
        </div>
      </HeroContainer>

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H3>Cuidado em todas as estações</H3>
            <P className="text-left">
              O cuidado pastoral é uma expressão do amor de Jesus, e queremos
              estar ao seu lado nos momentos de alegria, de dúvida ou de dor.
              Seja para compartilhar uma vitória, buscar orientação ou
              simplesmente ter alguém para ouvir, nossos pastores estão aqui
              para você.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Como funciona o atendimento</H3>
            <P className="text-left">
              Nossa equipe pastoral tem o compromisso de oferecer acompanhamento
              baseado na Palavra de Deus, com sensibilidade, oração e amor. Você
              pode escolher ser atendido de forma prática pelo WhatsApp ou, se
              preferir, deixar seus dados no formulário abaixo para que possamos
              entrar em contato com você.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Uma experiência de cuidado</H3>
            <P className="text-left">
              O atendimento pastoral é um espaço de escuta, cuidado e edificação
              espiritual. Mais do que um encontro, é uma oportunidade de
              experimentar a presença de Cristo através do cuidado de quem
              serve.
            </P>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mt-4 sm:mt-7">
        <div>
          <H3 className="">Entre em contato para atendimento pastoral</H3>
          <P className="">
            Entre em contato pelo WhatsApp, clicando no botão ou preencha o
            formulário abaixo para agendar um atendimento pastoral e um pastor
            entrará em contato com você.
          </P>
        </div>
      </Container>

      <WhatsAppCTABox
        phoneNumber={defaultWhatsAppNumber}
        text="Olá, gostaria de agendar um atendimento pastoral."
        openInNewTab={true}
        ctaText="Entrar em contato"
      />

      <Container className="mt-0 sm:mt-7">
        <div className="mt-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe_ZkwSByae2HrKfaC_BEK18yWlYLQRxhV0ZvCCUZw4Uug-FA/viewform?embedded=true"
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
