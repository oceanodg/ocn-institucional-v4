import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H2, P, Separator } from "~/components/ui";
import type { Info } from "~/server/types/info";
import { InfoCard } from "~/components/info-card";
import { CTABox } from "~/components/cta-box";
import { CardWithLink } from "~/components/card-with-link";

const features: Info[] = [
  {
    title: "Acompanhamento Pastoral",
    description:
      "Nossa equipe de pastores está comprometida em oferecer um acompanhamento pastoral com base na Palavra de Deus.",
    link: "/igreja-online/atendimento-pastoral",
    linkText: "Saiba mais",
  },
  {
    title: "Pedidos de Oração",
    description:
      "Acreditamos no poder da oração e no Deus que responde quando clamamos a Ele com fé.",
    link: "/igreja-online/pedidos-de-oracao",
    linkText: "Saiba mais",
  },
  {
    title: "Pequenos Grupos",
    description:
      "Você não foi criado para caminhar sozinho. Encontre um grupo de pessoas que te ajudam a crescer em Deus.",
    link: "/igreja-online/pequenos-grupos",
    linkText: "Saiba mais",
  },
  {
    title: "Academy",
    description:
      "Cresça na Graça e no conhecimento do Nosso Senhor Jesus Cristo.",
    link: "/oceano-academy",
    linkText: "Saiba mais",
  },
  {
    title: "Cultos ao vivo",
    description:
      "Assista aos nossos cultos ao vivo e participe ativamente da Igreja.",
    link: "/igreja-online/cultos-ao-vivo",
    linkText: "Saiba mais",
  },
  {
    title: "Doações",
    description:
      "Ajude a Igreja Oceano da Graça Online a continuar a levar a Palavra de Deus para o mundo inteiro.",
    link: "/doacoes",
    linkText: "Saiba mais",
  },
];

export function WelcomeOnlineChurch() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">
            Bem-vindo à Igreja Oceano da Graça Online!
          </H1>
          <P className="mt-0">
            Aqui você encontra um espaço preparado para que a distância nunca
            seja um obstáculo para viver a fé.
          </P>
        </div>
      </HeroContainer>

      <Container className="mt-2 sm:mt-6">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/ByCBXVdftq4"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>

      <Container className="mt-2 sm:mt-4">
        <div>
          <H2>O projeto Igreja Online</H2>
          <P className="text-left">
            Nasceu no coração de nossos pastores, Sinval de Souza e Rosália
            Santt, o desejo de alcançar pessoas além das paredes físicas da
            igreja e oferecer o mesmo cuidado, ensino e comunhão a quem, por
            qualquer motivo, não pode estar presente localmente.
          </P>
        </div>
      </Container>

      <Container className="">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <InfoCard
            title="Nossa Missão Online"
            description="Aqui você encontra um espaço preparado para que a distância nunca seja um obstáculo para viver a fé. Cada culto, cada palavra, cada encontro é pensado para conectar você a Jesus com amor e graça. Nossa missão é clara: formar discípulos, edificar famílias e anunciar o Evangelho de maneira viva e transformadora."
          />

          <InfoCard
            title="Liderança Pastoral"
            description="Os pastores Sinval e Rosália conduzem este ministério com paixão e dedicação. Ele, com sua história marcada por milagres e por uma vida inteira de serviço ao Reino. Ela, com sua voz, sensibilidade e chamado para inspirar mulheres e famílias através do cuidado pastoral e da música. Juntos, eles carregam o compromisso de pastorear com verdade e graça."
          />

          <InfoCard
            title="Comunidade Virtual Completa"
            description="Na Igreja Online você pode participar dos cultos ao vivo, receber oração, aprender mais da Palavra através da Oceano Academy, compartilhar a vida nos Pequenos Grupos e crescer espiritualmente em comunidade, mesmo que esteja a quilômetros de distância."
          />
        </div>
      </Container>

      <Separator className="my-14" />

      <Container className="mt-0 sm:mt-14">
        <div>
          <H2 className="text-left">Nosso Manifesto</H2>
        </div>
      </Container>

      <Container className="mt-0 sm:mt-0">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/LPEvPT4_wbc"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>

      <Container className="">
        <div className="bg-white border px-6 py-6 rounded-lg">
          <H2 className="">Seja parte da família Oceano</H2>
          <P className="text-left">
            Queremos que você se sinta em casa. Aqui, não importa de onde você
            nos acompanha: você é parte da família.
          </P>
          <P className="text-left mt-2 sm:mt-1">
            Igreja Online,{" "}
            <span className="font-medium italic">
              vem ser família com a gente!
            </span>
          </P>
        </div>
      </Container>

      <Separator className="my-14" />

      <Container className="mt-12 sm:mt-14 mb-10 sm:mb-16">
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
        <CTABox
          title="Em dúvida sobre a Igreja Online?"
          description="Fale conosco que teremos prazer em te ajudar."
          buttonLink="/igreja-online/saiba-mais"
          buttonText="Saiba mais"
          openInNewTab={false}
        />
      </Container>
    </section>
  );
}
