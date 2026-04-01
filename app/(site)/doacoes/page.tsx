import { H1, P, H3, Separator } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { PixCTABox } from "~/components/pix-cta-box";
import { CTABox } from "~/components/cta-box";

export default function DoacoesPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Doações</H1>
          <P className="mt-0">Contribua com a obra de Deus.</P>
        </div>
      </HeroContainer>

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H3>Uma decisão de amor</H3>
            <P className="text-left">
              Sua contribuição é um ato voluntário, uma decisão de amor pela
              obra de Deus e pelas vidas que podem ser abençoadas por meio de
              nossas ações e projetos.
            </P>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mt-4 sm:mt-7 mb-10 sm:mb-16">
        <div className="flex flex-col gap-4">
          <PixCTABox
            pixKey="pix@oceanodagraca.com"
            pixDescription="Pix - Chave"
          />
          <PixCTABox pixKey="05.122.594/0001-27" pixDescription="Pix - CNPJ" />
          <CTABox
            title="Cartão de Crédito"
            description="Doe com cartão de crédito."
            buttonLink="https://www.asaas.com/c/lsrnvhk1tabj4x7u"
            buttonText="Doar com Cartão de Crédito"
            openInNewTab={true}
            showArrow={false}
          />
        </div>
      </Container>
    </section>
  );
}
