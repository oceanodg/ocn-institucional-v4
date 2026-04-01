import { H1, P, H3, Separator, H2 } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";

export default function NossaRazaoPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Nossa Razão</H1>
          <P className="mt-0">Conectando pessoas a Jesus com amor e graça.</P>
        </div>
      </HeroContainer>

      <div className="mt-4 sm:mt-7 space-y-0">
        <Container className="">
          <div>
            <H2>Nossas Âncoras</H2>
            <P className="">
              Nossa razão de existir pode ser compreendida a partir de três
              perspectivas: amar a Deus, nos amarmos e amar pessoas (Mt
              22.37-39), assim como Jesus fez com amor (Jo 13.34; 15.12; Mt
              22.39) e graça (Jo 1.14; Ef 2.8,9; 4.7, Tt 2.11). Nesse sentido,
              as bases da nossa cultura se fundamentam no relacionamento com
              Deus e com as pessoas. Por isso, biblicamente, identificamos as
              âncoras que determinam a nossa forma de ser igreja (Mt 22.37-39;
              Mt 28.16-20): adoração, discipulado, comunhão, serviço e
              evangelismo.
            </P>
            <P className="">
              Para nos conectarmos a Jesus, temos a adoração e o discipulado. A
              adoração versa sobre quem somos em Deus e indica o nosso
              relacionamento diário com Deus como estilo de vida individual e
              coletivamente. O discipulado trata de quem devemos ser em Deus e
              compreende o desenvolvimento da nossa maturidade espiritual,
              social, emocional, vocacional e ministerial.
            </P>
            <P className="">
              Para nos conectarmos a pessoas por Jesus, temos a comunhão, o
              serviço e o evangelismo. A comunhão diz respeito à nossa forma
              prática de ser família, dentro e fora da igreja local, a partir da
              recepção e integração de pessoas com amor e graça. O serviço é a
              resposta direta ao amor de Deus por nós, identificando e
              satisfazendo as reais necessidades das comunidades interna e
              externa com generosidade. Evangelismo e missões não é uma opção, é
              uma expressão viva do amor e da graça por pessoas que ainda não se
              conectaram com Jesus.
            </P>
            <P className="">
              A partir das nossas âncoras, nossos principais valores podem ser
              destacados, a ponto de definir traços da cultura Oceano de ser:
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3 className="">Adoração</H3>
            <P className="">
              Quanto à adoração, somos uma igreja essencialmente bíblica e
              submissa ao Espírito Santo; quanto à forma de cultuar somos
              contemporâneos e contextualizados; temos o relacionamento íntimo e
              disciplinado com Deus como estilo de vida; consideramos a
              excelência, a gratidão e a honra como manifestações práticas do
              adorar.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3 className="">Comunhão</H3>
            <P className="">
              Quanto à comunhão, somos uma família acolhedora cujos
              relacionamentos são saudáveis e encorajadores, com amor e graça;
              uma igreja em que pessoas imperfeitas desejam fazer parte, sem
              legalismos ou excessos de religiosidade; uma comunidade que
              recebe, integra e consolida pessoas de toda sorte, sem acepção.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3 className="">Serviço</H3>
            <P className="">
              Quanto ao serviço, somos uma igreja em que cada membro faz a sua
              parte servindo voluntariamente e contribuindo generosamente como
              resposta direta ao amor de Jesus.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3 className="">Discipulado</H3>
            <P className="">
              Quanto ao discipulado, somos uma igreja-família que vive um
              processo de amadurecimento na fé por meio da educação cristã, de
              programas de formação e capacitação continuada, da prática
              ministerial, visando o aperfeiçoamento do caráter à semelhança de
              Cristo.
            </P>
          </div>
        </Container>

        <Container className="">
          <div>
            <H3 className="">Evangelismo</H3>
            <P className="">
              Quanto ao evangelismo, queremos ser uma igreja cuja cultura do
              Reino de Deus seja determinante para a relevância e transformação
              da realidade de vidas e da comunidade local; cujo testemunho
              pessoal e coletivo seja a sua principal ferramenta para conectar
              pessoas a Jesus.
            </P>
          </div>
        </Container>

        <Separator className="my-10 sm:my-16" />

        <Container className="mb-10 sm:mb-16">
          <div>
            <H2 className="">Nossas Convicções</H2>
            <UL className="">
              <li>
                Cremos em Deus Pai, Filho e Espírito Santo e no Seu governo
                sobre tudo;
              </li>
              <li>Cremos que Jesus é o nosso único e suficiente salvador;</li>
              <li>
                Cremos na salvação por meio da fé como fruto do amor e da graça
                de Deus;
              </li>
              <li>
                Cremos que a Bíblia é a palavra de Deus e a nossa regra de fé e
                prática;
              </li>
              <li>
                Cremos no poder da transformação de qualquer pessoa através da
                Bíblia;
              </li>
              <li>
                Cremos no arrebatamento da Igreja e na volta pessoal de Jesus;
              </li>
              <li>
                Cremos no poder e nos dons do Espírito Santo nas suas mais
                variadas maneiras;
              </li>
              <li>Cremos na prática da espiritualidade sem legalismos;</li>
              <li>
                Cremos na família tradicional como projeto de Deus para a
                sociedade;
              </li>
              <li>
                Cremos nos Pequenos Grupos como forma de ser igreja-família;
              </li>
              <li>
                Cremos no voluntariado como expressão prática do amor a Deus e
                ao próximo;
              </li>
              <li>
                Cremos no discipulado como processo de maturidade cristã e
                ministerial;
              </li>
              <li>
                Cremos na cultura do Reino de Deus como princípio de
                transformação social;
              </li>
            </UL>
          </div>
        </Container>
      </div>
    </section>
  );
}
