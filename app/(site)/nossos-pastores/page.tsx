import { H1, P, H3 } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { InfoCardWithImage } from "~/components/info-card-with-image";

export default function NossosPastoresPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Nossos Pastores</H1>
          <P className="mt-0">
            Direcionados por uma visão dada por Deus estão seguindo um caminho
            de amor e cuidado com a Igreja Oceano da Graça.
          </P>
        </div>
      </HeroContainer>

      <div className="mt-4 sm:mt-8 space-y-0 mb-10 sm:mb-16">
        <Container className="">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <InfoCardWithImage
              title="Pr. Sinval de Souza"
              description="Pastor, teólogo, advogado, administrador de empresas e ex-gerente da Caixa Econômica Federal; pastoreia desde 1998, com uma trajetória marcada pelos milagres da cura do câncer de intestino, da doença de Crohn e, também, pela condução e expansão de igrejas relevantes."
              image="/images/pastors/pr-sinval-01.jpg"
            />

            <InfoCardWithImage
              title="Pra. Rosália Santt"
              description="Pastora, cantora, compositora, teóloga, membro da Ordem dos Músicos do Brasil; gravou vários álbuns com canções que abençoaram gerações; pastoreia mulheres desde 2002, sendo idealizadora da Conferência Primavera Mulher que, desde 2012."
              image="/images/pastors/pra-rosalia-01.jpg"
            />

            {/* <div className="bg-card text-card-foreground max-w-md shadow-none hover:shadow-sm transition-all duration-300 gap-1 flex flex-col">
              <div className="mt-0 w-full aspect-video">
                <img
                  src={"/images/courses/connect/yt-thumb-connect.png"}
                  alt="Pr. Sinval de Souza"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex-1 space-y-2">
                <div className="grid auto-rows-min grid-rows-[auto_auto] gap-1.5 pb-0 pt-6 flex-row items-center text-xl sm:text-2xl font-semibold">
                  Pr. Sinval de Souza
                </div>

                <div className="text-sm sm:text-[15px]">
                  <P className="mt-0">
                    Pastor, teólogo, advogado, administrador de empresas e
                    ex-gerente da Caixa Econômica Federal; pastoreia desde 1998,
                    com uma trajetória marcada pelos milagres da cura do câncer
                    de intestino, da doença de Crohn e, também, pela condução e
                    expansão de igrejas relevantes.
                  </P>
                </div>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    </section>
  );
}
