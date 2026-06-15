import { Container } from "~/components/container";
import { CTABox } from "~/components/cta-box";
import { HeroContainer } from "~/components/hero";
import { School, SchoolAccordion } from "~/components/school-accordion";
import { H1, H3, P, Separator } from "~/components/ui";

const SCHOOLS: School[] = [
  {
    id: "escola-de-membros",
    title: "Escola de Membros",
    description:
      "Proporcionar a integração e capacitar os novos membros para viverem sua identidade, cumprirem sua missão e fazerem a diferença por meio de uma participação ativa na igreja local.",
    pillar: { label: "Discipulado", color: "teal" },
    courses: [
      {
        id: "connect",
        title: "1. Connect",
        description:
          "O Connect é o primeiro passo para mergulhar no Oceano da Graça.",
        href: "/oceano-academy/cursos/connect",
      },
      {
        id: "fundamentos",
        title: "2. Fundamentos",
        description:
          "Base doutrinária essencial: Os principais pilares da fé cristã.",
        href: "/oceano-academy/cursos/fundamentos",
      },
      {
        id: "nova-vida",
        title: "3. Nova vida",
        description: "Condução nos princípios básicos da fé cristã.",
        href: "/oceano-academy/cursos/vida-nova",
      },
      {
        id: "voluntariado",
        title: "4. Voluntariado",
        description:
          "Capacitação, inspiração e alinhamento, para todos que escolheram servir.",
        href: "/oceano-academy/cursos/voluntariado",
      },
    ],
  },
  {
    id: "escola-de-lideres",
    title: "Escola de Líderes",
    description:
      "Um ambiente de preparo e crescimento para líderes que desejam fortalecer seu chamado, desenvolver competências ministeriais e exercer uma liderança que inspira, transforma e impacta vidas.",
    pillar: { label: "Liderança", color: "purple" },
    courses: [
      {
        id: "pequenos-grupos",
        title: "1. Líder de Pequenos Grupos",
        description:
          "Identidade, visão e a prática dos Pequenos Grupos da Igreja Oceano da Graça.",
        href: "/oceano-academy/cursos/pequenos-grupos",
      },
    ],
  },
];

export default function OceanoAcademyPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Oceano Academy</H1>
          <P className="mt-0">
            Cresça na Graça e no conhecimento do Nosso Senhor Jesus Cristo.
          </P>
        </div>
      </HeroContainer>

      <Container className="mt-2 sm:mt-6">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/LEdj8ZOk8P8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H3>A Oceano Academy</H3>
            <P className="text-left">
              A <span className="font-bold">Oceano Academy</span> é o braço
              educacional da nossa igreja. Ela nasceu com o propósito de
              fortalecer as bases da fé por meio do conhecimento bíblico,
              alcançando cada fase da vida: crianças, adolescentes, jovens,
              homens, mulheres, casais e toda a família espiritual.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Nossa Missão</H3>
            <P className="text-left">
              Acreditamos que a fé não deve ser vivida de forma superficial, mas
              enraizada na Palavra de Deus. Como disse C. H. Spurgeon:{" "}
              <span className="italic">
                "Um cristão sem conhecimento é como uma casa sem alicerces."
              </span>{" "}
              Por isso, nossa missão é oferecer ensino sólido, relevante e
              acessível, para que cada pessoa conheça mais profundamente as
              Escrituras e caminhe com segurança em sua jornada espiritual.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Uma jornada de descoberta</H3>
            <P className="text-left">
              Aqui, cada aula, cada encontro, cada curso é uma oportunidade de
              mergulhar mais fundo nesse oceano de graça e de verdade. Queremos
              que você descubra que a Bíblia é um livro vivo, sempre atual,
              capaz de moldar caráter, renovar a mente e sustentar famílias
              inteiras.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Crescimento integral</H3>
            <P className="text-left">
              Na Oceano Academy, você não apenas aprende: você cresce,
              compartilha, se conecta e é desafiado a viver a fé de maneira
              prática e vibrante. Estamos aqui para preparar uma igreja madura,
              apaixonada por Jesus e pronta para impactar o mundo.
            </P>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="pt-0 sm:pt-0 mb-10 sm:mb-16">
        <div className="flex flex-col gap-4">
          <CTABox
            title="Já é cadastrado(a) em algum curso?"
            description="Acesse agora a plataforma de cursos da Oceano Academy."
            buttonLink="https://academy.oceanodagraca.com/"
            buttonText="Acesse agora"
            openInNewTab={true}
          />

          <CTABox
            title="Escola Bíblica"
            description="Ensino e adoração."
            buttonLink="/oceano-academy/escolas/escola-biblica"
            buttonText="Saiba mais"
            openInNewTab={false}
          />

          {/* <CTABox
            title="Escola de Membros"
            description="Nosso discipulado institucional."
            buttonLink="/oceano-academy/escolas/escola-de-membros"
            buttonText="Ver cursos"
            openInNewTab={false}
          />

          <CTABox
            title="Escola de Líderes"
            description="Cursos de capacitação para líderes."
            buttonLink="/oceano-academy/escolas/escola-de-lideres"
            buttonText="Em breve"
            openInNewTab={false}
            disabled
          /> */}

          <SchoolAccordion schools={SCHOOLS} />
          {/* 
          <CTABox
            title="Conheça nossas escolas"
            description="Discipulado, Cursos de ensino e adoração e muito mais."
            buttonLink="/oceano-academy/escolas"
            buttonText="Ver escolas"
            openInNewTab={false}
          />

          <CTABox
            title="Materiais Didáticos da Escola Bíblica"
            description="Acesse os materiais didáticos das aulas da Escola Bíblica."
            buttonLink="/oceano-academy/materiais-didaticos"
            buttonText="Acessar materiais"
            openInNewTab={false}
          />

          <CTABox
            title="Planos de Leitura Bíblica"
            description="Acesse os planos de leitura bíblica."
            buttonLink="/oceano-academy/planos-de-leitura"
            buttonText="Acessar Planos"
            openInNewTab={false}
          /> */}
        </div>
      </Container>
    </section>
  );
}
