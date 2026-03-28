import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H3, P, Separator } from "~/components/ui";
import { defaultWhatsAppNumber } from "~/data/common-data";
import { WhatsAppCTABox } from "~/components/whatsapp-cta-box";

export function SmallGroups() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Pequenos Grupos</H1>
          <P className="mt-0">Você não foi criado para caminhar sozinho.</P>
        </div>
      </HeroContainer>

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H3>Vida em comunidade</H3>
            <P className="text-left">
              A vida cristã é vivida em comunidade, no compartilhar da fé, no
              apoio mútuo e na alegria de crescer junto. Nos Pequenos Grupos,
              encontramos mais do que encontros semanais: encontramos família,
              amizade, discipulado e comunhão verdadeira.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Um ambiente de acolhimento</H3>
            <P className="text-left">
              É nesse ambiente íntimo e acolhedor que a Palavra ganha vida no
              dia a dia, que as orações se tornam mais próximas e que as
              vitórias são celebradas juntos. Aqui, cada pessoa tem voz, cada
              história tem valor e cada coração encontra um lugar para
              pertencer.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Encontre seu lugar</H3>
            <P className="text-left">
              Nossa equipe está comprometida em ajudar você a se conectar a um
              Pequeno Grupo que combine com sua realidade. Preencha o formulário
              abaixo e deixe-nos caminhar ao seu lado nessa jornada. Há um lugar
              esperando por você, e ele pode ser o próximo passo para
              experimentar o que significa ser parte da família de Deus.
            </P>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mt-4 sm:mt-7">
        <div>
          <H3 className="">Faça parte de um Pequeno Grupo</H3>
          <P className="">
            Entre em contato pelo WhatsApp, clicando no botão ou preencha o
            formulário abaixo para que possamos te ajudar a encontrar o grupo
            perfeito para você.
          </P>
        </div>
      </Container>

      <WhatsAppCTABox
        phoneNumber={defaultWhatsAppNumber}
        text="Olá, gostaria de fazer parte de um Pequeno Grupo."
        openInNewTab={true}
        ctaText="Entrar em contato"
      />

      <Container className="mt-0 sm:mt-7">
        <div className="mt-6">
          <iframe
            src={
              "https://docs.google.com/forms/d/e/1FAIpQLScqqYN1TcE0qvbjiie6Xa_0nv-DV79SudqKdv-yn522mJGZFQ/viewform?embedded=true"
            }
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

      {/* <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <H2>Nossos Pequenos Grupos</H2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {smallGroups.map((smallGroup) => (
            <InfoCard
              key={smallGroup.name}
              title={smallGroup.name}
              description={
                smallGroup.about.length > 100
                  ? `${smallGroup.about.substring(0, 100)}...`
                  : smallGroup.about
              }
              link={`/pequenos-grupos/${smallGroup.slug}`}
              linkText="Saiba mais"
              openInNewTab={false}
            />
          ))}
        </div>
      </Container> */}
    </section>
  );
}
