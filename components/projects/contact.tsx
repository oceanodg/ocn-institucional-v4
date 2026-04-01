import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { H2, P } from "~/components/ui";
import { defaultWhatsAppNumber } from "~/data/common-data";
import { WhatsAppCTABox } from "~/components/whatsapp-cta-box";

interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <Container
      className={cn(
        "px-4 sm:px-0 pb-2 py-0 sm:py-0 sm:pb-0 mt-24 sm:mt-42 mb-10 sm:mb-16",
        "flex flex-col gap-2 sm:gap-0",
        "w-full text-center justify-center items-center"
      )}
    >
      <H2>Ainda com alguma dúvida?</H2>

      <P>
        Se você ainda tem alguma dúvida sobre o projeto, não hesite em entrar em
        contato conosco.
      </P>

      <div className="w-full ">
        <WhatsAppCTABox
          phoneNumber={defaultWhatsAppNumber}
          text="Olá, gostaria de saber mais sobre os Projetos da Igreja Oceano."
          openInNewTab={true}
          ctaText="Entrar em contato"
        />
      </div>
    </Container>
  );
}
