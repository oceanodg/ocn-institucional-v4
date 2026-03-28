import { H1, P, H3, Separator } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";

export function OurHistory() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Nossa História</H1>
          <P className="mt-0">Como tudo começou.</P>
        </div>
      </HeroContainer>

      <Container className="mt-2 sm:mt-6">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/qm9DHriSDF8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>

      <div className=" space-y-0">
        <Container className="mt-2 sm:mt-4">
          <div>
            <H3>Pr. Sinval de Souza: Longos anos de dor e aflições</H3>
            <P className="">
              Desde 1997, Pr. Sinval de Souza tem exercido seu chamado
              vocacional à frente de diversas igrejas no Distrito Federal. Em
              2000, profeticamente, Deus lhe disse: “Por esses dias, o tirarei
              do seu trabalho, colocarei em uma cadeira de rodas, o aposentarei
              e o curarei, pois te quero cuidando do meu rebanho”. No ano de
              2001, desafiado por Deus, fundou o Ministério IDEPS (Assembleia de
              Deus do Setor P Sul) com um grupo de amigos, inicialmente, focado
              no Setor P Sul, localizado em Ceilândia, cidade satélite do
              Distrito Federal. Em junho de 2002, Pr. Sinval de Souza foi
              diagnosticado com câncer no intestino, sujeitando-se a intenso
              sofrimento e desnutrição, chegando a ser desenganado pelos médicos
              durante o tratamento no Instituto do Câncer do Estado de São
              Paulo. Em janeiro de 2003, submeteu-se à cirurgia que o conduziu à
              cura do câncer e à descoberta da fatídica doença de Crohn.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Cura milagrosa</H3>
            <P className="">
              Em julho de 2004, a aposentadoria se concretizou tal como a
              profecia. Após quatro longos anos de dor e aflições, em junho de
              2006, a cura foi milagrosamente profetizada na presença de centena
              de testemunhas oculares, durante as celebrações do quinto
              aniversário da IDEPS, sendo confirmada pela medicina em agosto do
              mesmo ano. A partir de 2008, ministerialmente, viveu expressivo
              processo de expansão com a abertura de novas igrejas filiadas. Em
              2012, a igreja em Águas Claras foi inaugurada, experimentando
              rápido e sólido crescimento. Em dezembro de 2019, a igreja IDEPS,
              situada no setor P Sul foi emancipada.
            </P>
          </div>
        </Container>

        <Container className="mb-10 sm:mb-16">
          <div>
            <H3>Identidade ministerial e Expansão</H3>
            <P className="">
              Nesse contexto, em junho de 2020, debaixo do claro direcionamento
              de Deus, nossa identidade ministerial foi ressignificada para
              Igreja Oceano da Graça, cuja razão de existir tem sido marcada por
              “Conectar pessoas a Jesus com amor e graça”. Desde então, temos
              vivido o cumprimento de promessas divinas sobre nosso ministério,
              ao longo das últimas décadas. Deus tem nos levado a uma expansão
              ministerial dentro e fora do Brasil. Hoje, no Distrito Federal,
              estamos em Águas Claras, Ceilândia Sul, Jardins Mangueiral e
              Samambaia Sul. Em Goiás, estamos em Águas Lindas e Caldas Novas.
              Na África Ocidental, já estamos em Bissau, capital de Guiné
              Bissau. Outros estados e países já estão no coração de Deus para
              servimos com amor e graça. Em breve, chegaremos à Europa e a
              Espanha será a porta de entrada.
            </P>
          </div>
        </Container>
      </div>
    </section>
  );
}
