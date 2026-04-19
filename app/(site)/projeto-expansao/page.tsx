import { H1, P, H3, Separator } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { CTABox } from "~/components/cta-box";
import { PixCTABox } from "~/components/pix-cta-box";

export default function ProjetoExpansaoPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Projetos Juntos pelo Reino</H1>
          <P className="mt-0">Contribua com este sonho.</P>
        </div>
      </HeroContainer>

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H3>Uma decisão de amor</H3>
            <P className="">
              Sua contribuição, independentemente do valor, é essencial para
              tornar realidade o sonho de levarmos a Palavra de Deus a todas as
              cidades do Distrito Federal e a Guiné-Bissau. Estamos construindo
              templos que serão lugares de adoração, comunhão e transformação de
              vidas — e você pode fazer parte disso!
            </P>
            <P className="">
              Escolha abaixo com qual valor mensal você deseja participar.
            </P>
            <P className="">
              <span className="font-semibold">ATENÇÃO:</span> O período de
              doações do projeto é de 12 meses, de forma recorrente.
            </P>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="pt-0 sm:pt-0 mb-10 sm:mb-16">
        <H3>Escolha o seu valor mensal</H3>
        <div className="flex flex-col gap-4">
          <PixCTABox pixKey="missoes@oceanodagraca.com" pixDescription="Pix" />
          <CTABox
            title="Doação Única"
            description="Doar com cartão de crédito."
            buttonLink="https://www.asaas.com/c/lsrnvhk1tabj4x7u"
            buttonText="Fazer Doação Única"
            openInNewTab={true}
            showArrow={false}
          />
          <CTABox
            title="Defina o Valor Mensal"
            description="Doar com cartão de crédito."
            buttonLink="https://www.asaas.com/c/cjl9e93csdeddvo9"
            buttonText="Doar Valor Mensal"
            openInNewTab={true}
            showArrow={false}
          />
          <CTABox
            title="R$ 100,00 / mês"
            description="Doar com cartão de crédito."
            buttonLink="https://www.asaas.com/c/gqab5pzm0gf95ww7"
            buttonText="Doar R$ 100,00/mês"
            openInNewTab={true}
            showArrow={false}
          />
          <CTABox
            title="R$ 200,00 / mês"
            description="Doar com cartão de crédito."
            buttonLink="https://www.asaas.com/c/dn9gemexzl9pzodx"
            buttonText="Doar R$ 200,00/mês"
            openInNewTab={true}
            showArrow={false}
          />
          <CTABox
            title="R$ 500,00 / mês"
            description="Doar com cartão de crédito."
            buttonLink="https://www.asaas.com/c/8hy8dvg0xsoqi3p6"
            buttonText="Doar R$ 500,00/mês"
            openInNewTab={true}
            showArrow={false}
          />
          <CTABox
            title="R$ 1.000,00 / mês"
            description="Doar com cartão de crédito."
            buttonLink="https://www.asaas.com/c/7hth5mqsddfge63l"
            buttonText="Doar R$ 1.000,00/mês"
            openInNewTab={true}
            showArrow={false}
          />
          <CTABox
            title="R$ 2.000,00 / mês"
            description="Doar com cartão de crédito."
            buttonLink="https://www.asaas.com/c/476wpn2c13mbzkgq"
            buttonText="Doar R$ 2.000,00/mês"
            openInNewTab={true}
            showArrow={false}
          />
          <CTABox
            title="R$ 5.000,00 / mês"
            description="Doar com cartão de crédito."
            buttonLink="https://www.asaas.com/c/pt4dxj35y01ttdpx"
            buttonText="Doar R$ 5.000,00/mês"
            openInNewTab={true}
            showArrow={false}
          />
        </div>
      </Container>
    </section>
  );
}
