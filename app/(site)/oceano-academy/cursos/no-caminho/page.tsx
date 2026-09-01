import { Container } from "~/components/container";
import { AllCoursesBackButton } from "~/components/back-buttons/all-courses";
import { TopCTAButton } from "~/components/course-cta/top";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";
import { LessonsCards } from "~/components/lessons-cards";
import {
  CTADefaultLabel,
  defaultMembersAreaLoginUrl,
  noCaminhoCourse,
} from "~/data/courses/schools-and-courses";
import { CTABox } from "~/components/cta-box";

export default function NoCaminhoPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllCoursesBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-1">
            <H1 className="text-left">No Caminho</H1>
            <P className="mt-0 font-semibold">
              Ensinar no caminho é viver de uma maneira que um dia nossos filhos
              saibam caminhar com Deus mesmo quando não estivermos ao lado
              deles.
            </P>
            <P className="">
              Criar filhos é uma das maiores dádivas que Deus pode confiar a uma
              família — e também uma das maiores responsabilidades.
            </P>
            <P className="">
              O <span className="font-semibold">Curso No Caminho</span> nasceu
              para ajudar pais e responsáveis a compreenderem seu papel na
              formação espiritual dos filhos, reconhecendo que o discipulado
              começa dentro de casa, na simplicidade da vida cotidiana, no
              exemplo, na Palavra, na oração e nos relacionamentos.
            </P>
          </div>

          <div className="sm:flex-1 order-first sm:order-last mb-6 sm:mb-0">
            <img
              src="/images/courses/no-caminho/yt-thumb-no-caminho.webp"
              alt="Curso No Caminho"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </HeroContainer>

      <TopCTAButton
        ctaUrl={noCaminhoCourse.ctaUrl}
        ctaText={CTADefaultLabel}
        loginUrl={defaultMembersAreaLoginUrl}
        openInNewTab={true}
      />

      <Separator className="my-14" />

      {/* <EmbededYoutubeVideo youtubeVideoId={defaultHeroYoutubeVideoId} /> */}

      <div className="mt-4 sm:mt-10 space-y-0">
        <Container className="">
          <div>
            <H2>Sobre o curso</H2>
            <P className="text-left">
              Mais do que preparar uma família para o momento da apresentação de
              uma criança ao Senhor, o{" "}
              <span className="font-semibold">No Caminho</span> é um convite
              para compreender o compromisso que começa depois dela.
            </P>
            <P className="">
              Ao longo do curso, os pais conhecerão os fundamentos bíblicos da
              apresentação de crianças, compreenderão sua diferença em relação
              ao batismo e refletirão sobre a responsabilidade de conduzir seus
              filhos nos caminhos do Senhor.
            </P>
            <P className="">
              O curso também aborda o discipulado dentro do lar, o poder do
              exemplo, o ensino das Escrituras, a construção de um ambiente
              espiritualmente saudável, a oração, a correção amorosa e a
              importância da comunidade da fé na formação das novas gerações.
            </P>
            <P className="">
              Porque apresentar um filho ao Senhor é um momento.{" "}
              <span className="font-semibold">
                Conduzi-lo no caminho é uma missão para a vida.
              </span>
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Por que assistir ao curso?</H3>
            <UL className="">
              <li>
                Para compreender o significado bíblico da apresentação de
                crianças;
              </li>
              <li>
                Para entender a diferença entre apresentação e batismo;
              </li>
              <li>
                Para reconhecer o papel dos pais como primeiros discipuladores
                dos filhos;
              </li>
              <li>
                Para aprender a transformar momentos comuns da família em
                oportunidades de discipulado;
              </li>
              <li>
                Para construir um lar onde Palavra, oração, graça e exemplo
                façam parte da vida cotidiana;
              </li>
              <li>
                Para compreender o papel da igreja como parceira da família na
                formação espiritual das crianças.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Para quem é este curso?</H3>
            <UL className="">
              <li>Pais que desejam apresentar seus filhos ao Senhor;</li>
              <li>
                Famílias que querem compreender melhor sua responsabilidade
                espiritual;
              </li>
              <li>
                Pais e responsáveis que desejam desenvolver o discipulado dentro
                de casa;
              </li>
              <li>
                Famílias que querem estabelecer princípios bíblicos na criação
                dos filhos;
              </li>
              <li>
                Todos aqueles que desejam construir um legado de fé para as
                próximas gerações.
              </li>
            </UL>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3>Pré-requisitos</H3>
            <UL className="">
              <li>Não é necessário conhecimento teológico prévio;</li>
              <li>
                Desejo de compreender biblicamente a responsabilidade espiritual
                dos pais;
              </li>
              <li>
                Disposição para aplicar os princípios aprendidos à vida
                familiar.
              </li>
            </UL>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H2>Estrutura do curso</H2>
            <P className="">
              O <span className="font-semibold">Curso No Caminho</span> é
              composto por duas lições que conduzem a família da compreensão do
              ato público de apresentação à missão diária do discipulado dentro
              do lar.
            </P>
          </div>
          <LessonsCards lessons={noCaminhoCourse.lessons} />
          <div>
            <P className="">
              Você não precisa ser um pai ou uma mãe perfeita. Precisa estar
              disposto a caminhar.
            </P>
            <P className="">
              Porque nossos filhos não precisam apenas que lhes mostremos o
              caminho.
            </P>
            <P className="">
              <span className="font-semibold">
                Eles precisam que caminhemos com eles.
              </span>
            </P>
          </div>
        </Container>
      </div>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <CTABox
          title={"Inscreva-se agora"}
          description={"Vem ser família com a gente!"}
          buttonLink={noCaminhoCourse.ctaUrl}
          buttonText={CTADefaultLabel}
          openInNewTab={true}
          showArrow={false}
        />
      </Container>
    </section>
  );
}
