import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H2, P, Separator } from "~/components/ui";
import type { Info } from "~/server/types/info";
import { CTABox } from "~/components/cta-box";
import { CardWithLink } from "~/components/card-with-link";

const features: Info[] = [
  {
    title: "Nossos templos",
    description: "Encontre um templo da Igreja Oceano da Graça perto de você.",
    link: "/igrejas",
    linkText: "Saiba mais",
  },
  {
    title: "Oceano Academy",
    description:
      "Cresça na Graça e no conhecimento do Nosso Senhor Jesus Cristo.",
    link: "/oceano-academy",
    linkText: "Saiba mais",
  },
  {
    title: "Quem Somos",
    description: "Conheça os valores e a história da Igreja Oceano da Graça.",
    link: "/sobre",
    linkText: "Saiba mais",
  },
  {
    title: "Doações",
    description: "Contribua com a obra de Deus, com a Igreja Oceano da Graça.",
    link: "/doacoes",
    linkText: "Saiba mais",
  },
];

export default function WelcomePage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Bem-vindo à Igreja Oceano da Graça!</H1>
          <P className="mt-0">
            Aqui você encontra um espaço preparado para viver a fé. Venha ser
            família com a gente!
          </P>
        </div>
      </HeroContainer>

      <Container className="mt-2 sm:mt-6">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/Qkhn6aHkFt4"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>

      {/* <Container className="mb-10 sm:mb-16">
        <div className="flex flex-col gap-4">
          <CTABox
            title="25 Anos - Oceano da Graça"
            description="Vamos celebrar juntos 25 anos de uma história marcada pela graça, pela presença de Deus e por vidas transformadas."
            buttonLink="https://25anos.oceanodagraca.com/"
            buttonText="Saiba mais"
            openInNewTab={true}
          />
        </div>
      </Container> */}

      {/* <Separator className="my-14" /> */}

      <Container className="mt-2 sm:mt-4">
        <div>
          <H2>A Igreja Oceano da Graça</H2>
          <P className="text-left">
            Nossa razão de existir é: amar a Deus, nos amarmos e amar pessoas,
            assim como Jesus fez com amor e graça. Nesse sentido, as bases da
            nossa cultura se fundamentam no relacionamento com Deus e com as
            pessoas.
          </P>
        </div>
      </Container>

      <Container className="mb-10 sm:mb-16">
        <div className="flex flex-col gap-4">
          <CTABox
            title="Igreja Online"
            description="Acesse a Igreja Oceano da Graça de qualquer lugar."
            buttonLink="/igreja-online"
            buttonText="Saiba mais"
          />
          <CTABox
            title="Projetos de Expansão"
            description="Contribua com este sonho."
            buttonLink="/projeto-expansao"
            buttonText="Saiba mais"
            openInNewTab={false}
          />
        </div>
      </Container>

      <Separator className="my-14" />

      <Container className="mt-0 sm:mt-0 mb-10 sm:mb-16">
        <H2>Acesso rápido</H2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {features.map((feature) => (
            <CardWithLink
              key={feature.title}
              {...feature}
              openInNewTab={false}
            />
          ))}
        </div>
      </Container>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <div className="bg-white border px-6 py-6 rounded-lg">
          <H2 className="">Seja parte da família Oceano</H2>
          <P className="text-left">
            Queremos que você se sinta em casa. Faça-nos uma visita!
          </P>
          <P className="text-left mt-2 sm:mt-1">
            <span className="font-medium italic">
              Vem ser família com a gente!
            </span>
          </P>
        </div>
      </Container>
    </section>
  );
}
