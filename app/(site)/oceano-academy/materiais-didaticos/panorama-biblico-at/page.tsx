import { FileText, GraduationCap, Hash, SquarePlay } from "lucide-react";
import { HeroContainer } from "~/components/hero";
import { AllTeachingMaterialsBackButton } from "~/components/back-buttons/all-teaching-materials";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";
import { SummaryLi } from "~/components/summary-li";
import { Table, TableCell, TableHeader, TableRow } from "~/components/ui/table";
import { LinkSmall } from "~/components/ui/link-small";
import { TableCellLinksContainer } from "~/components/ui/table-cell-links-container";

export const metadata = {
  alternates: {
    types: {
      "text/markdown":
        "/oceano-academy/materiais-didaticos/panorama-biblico-at.md",
    },
  },
};

export default function PanoramaBiblicoAT() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Panorama Bíblico do Antigo Testamento</H1>
          <P className="mt-0">
            Uma visão geral da história bíblica do Antigo Testamento, desde a
            criação até o pós-exílio.
          </P>
        </div>
      </HeroContainer>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="materials-didactic">Materiais de Apoio</H2>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold w-[110px] sm:w-[160px]">
                Apostila
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/12Xzz_qIdfW75urVYuZEnUS5DP3Lu_YW5/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/panorama-biblico-at.md">
                    <Hash className="size-4" />
                    MD
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Vídeos Recomendados
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://www.youtube.com/watch?v=kzC5e5V0gtA">
                    <SquarePlay className="size-4" />
                    Visão Geral AT
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=c9IwEZcYWws">
                    <SquarePlay className="size-4" />A Lei
                  </LinkSmall>
                  <LinkSmall href="https://www.youtube.com/watch?v=K8iwowbjX6c">
                    <SquarePlay className="size-4" />
                    Os Profetas
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Curso Recomendado
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="/oceano-academy/cursos/fundamentos">
                    <GraduationCap className="size-4" />
                    Fundamentos
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
          </TableHeader>
        </Table>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2>Sumário</H2>
        <UL className="mt-0 space-y-2 sm:space-y-2">
          <SummaryLi>
            <a href="#lesson-1">Lição 1 – Foi Assim Que Tudo Começou</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-como-perder-o-paraiso-em-tres-capitulos-criacao-e-queda-de-adao-e-eva">
              Como Perder o Paraíso em Três Capítulos: Criação e Queda de Adão e
              Eva
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-irmao-contra-irmao-uma-tragedia-anunciada-entre-caim-e-abel">
              Irmão Contra Irmão: uma Tragédia Anunciada Entre Caim e Abel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-o-diluvio-julgamento-de-deus-sobre-a-humanidade-corrompida">
              O Dilúvio: Julgamento de Deus Sobre a Humanidade Corrompida
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-torre-de-babel-simbolo-da-rebeliao-do-homem">
              A Torre de Babel: Símbolo da Rebelião do Homem
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-2">Lição 2 – A História dos Patriarcas</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-historia-de-abraao-o-pai-da-fe-de-muitos-povos">
              A História de Abraão, o Pai da Fé de Muitos Povos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-historia-de-isaque-o-herdeiro-da-promessa">
              A História de Isaque, o Herdeiro da Promessa
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-historia-de-jaco-o-pai-das-doze-tribos-de-israel">
              A História de Jacó, o Pai das Doze Tribos de Israel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-a-historia-de-jose-o-governador-do-egito">
              A História de José, o Governador do Egito
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-3">Lição 3 – Um Longo Período no Egito</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-moises-nasce-para-libertar">
              Moisés Nasce para Libertar
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-moises-e-chamado">Moisés É Chamado</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-moises-e-bem-sucedido">Moisés É Bem-sucedido</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-provisao-vem-do-senhor">
              A Provisão Vem do Senhor
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-4">
              Lição 4 – A Aliança de Deus com o Povo de Israel
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-alianca-regulamentada-nos-10-mandamentos">
              Aliança Regulamentada nos 10 Mandamentos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-arca-da-alianca-e-o-tabernaculo">
              A Arca da Aliança e o Tabernáculo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-as-leis-e-o-encerramento-do-ministerio-de-moises">
              As Leis e o Encerramento do Ministério de Moisés
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-conquista-da-terra-prometida">
              A Conquista da Terra Prometida
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-5">Lição 5 – A Era dos Juízes</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-nacao-sem-um-compromisso-duradouro">
              Nação Sem um Compromisso Duradouro
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-os-juizes-debora-e-gideao">
              Os Juízes Débora e Gideão
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-os-juizes-jefte-e-sansao">
              Os Juízes Jefté e Sansão
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-o-ultimo-juiz-samuel">O Último Juiz, Samuel</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-5-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-6">Lição 6 – O Início do Período Monárquico</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-a-ascensao-e-queda-de-saul">
              A Ascensão e Queda de Saul
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-a-uncao-sobre-davi">A Unção Sobre Davi</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-a-ascensao-de-davi">A Ascensão de Davi</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-o-reinado-de-salomao">O Reinado de Salomão</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-6-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-7">Lição 7 – O Reino Dividido</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-o-reino-do-norte-idolatria-corrupcao-e-julgamento">
              O Reino do Norte: Idolatria, Corrupção e Julgamento
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-profetas-em-acao-o-que-deus-fala-ele-cumpre">
              Profetas em Ação: o Que Deus Fala, Ele Cumpre
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-o-reino-do-sul-altos-e-baixos-diante-de-deus">
              O Reino do Sul: Altos e Baixos Diante de Deus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-profetas-em-juda-um-ministerio-necessario">
              Profetas em Judá: um Ministério Necessário
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-7-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#lesson-8">Lição 8 – Depois da Queda, um Recomeço</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-o-imperio-assirio-e-a-queda-do-reino-do-norte">
              O Império Assírio e a Queda do Reino do Norte
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-o-imperio-babilonico-e-a-queda-do-reino-do-sul">
              O Império Babilônico e a Queda do Reino do Sul
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-o-periodo-do-exilio">O Período do Exílio</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-o-pos-exilio-a-reconstrucao-de-jerusalem">
              O Pós-exílio: a Reconstrução de Jerusalém
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-8-conclusao">Conclusão</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#editorial">Editorial</a>
          </SummaryLi>
        </UL>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-1">Lição 1 – Foi assim que tudo começou</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar historicamente os principais fatos dos primeiros
            capítulos de Gênesis, o livro do princípio de todas as coisas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-introducao">Introdução</H3>
          <P className="">
            Toda história tem um princípio. E o princípio da história de tudo e
            de todos se encontra no primeiro livro da Bíblia, Gênesis. Este nome
            “Gênesis” significa “princípio”, definindo bem o seu conteúdo, pois
            nele estão contidos o princípio do céu e da terra, de todas as
            formas de vida e de todas as instituições e dos relacionamentos
            humanos. É possível ver em Gênesis, também, a origem de todas as
            grandes doutrinas bíblicas referentes a Deus, ao homem, ao pecado e
            à salvação. Neste livro, as perguntas fundamentais que todo ser
            humano faz (De onde viemos? O que estamos fazendo aqui? Para onde
            vamos?) são respondidas. Afinal, como afirma um antigo provérbio
            grego: “um bom começo é meio caminho andado”.
          </P>
          <P className="">
            A autoria de Gênesis é atribuída a Moisés, tanto pelas comunidades
            judaicas como pelas cristãs. O livro trata de eventos que se
            estendem desde a criação do universo e do homem (Gn 1-2), uma ação
            poderosa efetuada por Deus, preexistente a todas as coisas (Is
            43.13; Jo 1.1; Cl 1.17), até a morte de José, o que abrange um
            período de 2.369 anos. Entretanto, nesta primeira lição, serão
            abordados os fatos que estão inseridos no texto compreendido entre
            Gn 1.1 e Gn 11.9.
          </P>
          <P className="">
            Sendo assim, você está convidado a embarcar nessa aventura de
            estudos sobre a origem do universo, do primeiro casal (Adão e Eva) e
            do pecado, o primeiro homicídio, o dilúvio e a Torre de Babel, pois
            foi assim que tudo começou.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-como-perder-o-paraiso-em-tres-capitulos-criacao-e-queda-de-adao-e-eva">
            Como perder o paraíso em três capítulos: criação e queda de Adão e
            Eva
          </H3>
          <P className="">
            Deus iniciou Sua obra, conforme registrado em Gênesis 1.1: “No
            princípio, Deus criou os céus e a terra”, sendo Ele a “Causa
            Primeira” de todas as coisas: a precisão com que os astros se movem
            e a forma como estão dispostos no firmamento demonstram que tudo
            isso não surgiu por acaso (Sl 19.1).
          </P>
          <P className="">
            Ele trouxe à existência todas as coisas em seis dias (Gn 1.1-23).
            Porém, a fim de concluir Sua obra, criou o primeiro casal, Adão e
            Eva (Gn 1.26-28; Gn 2.7,18,21-23), descansando no sétimo dia, dando
            ao homem o exemplo de trabalhar durante seis dias e descansar no
            sétimo.
          </P>
          <P className="">
            O Senhor colocou no Éden duas árvores específicas: a do conhecimento
            do bem e do mal (Gn 2.17) e a da vida (Gn 3.22,24), deixando para
            Adão e Eva uma ordem de não comerem do fruto da árvore do
            conhecimento do bem e do mal, a fim de ensiná-los a obedecê-Lo e
            servi-Lo por sua livre vontade. Entretanto, eles cederam à tentação
            da serpente e comeram do fruto dessa árvore (Gn 3.1-7) desobedecendo
            a Deus. Esse evento é conhecido na Teologia como “queda” ou “pecado
            original”.
          </P>
          <P className="">
            Então, Adão e Eva sofreram o primeiro julgamento da Bíblia: para a
            mulher, dor e submissão ao marido (Gn 3.16); para o homem, trabalho
            árduo até sua morte em um solo cheio de espinhos (Gn 3.17- 19); para
            ambos e sua descendência, expulsão do Paraíso e impedimento de
            acesso à árvore da vida. Apesar disso, surge a promessa divina de
            redenção (Gn 3.15).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-irmao-contra-irmao-uma-tragedia-anunciada-entre-caim-e-abel">
            Irmão contra irmão: uma tragédia anunciada entre Caim e Abel
          </H3>
          <P className="">
            Após saírem do paraíso, Adão e Eva tiveram dois filhos: Caim e Abel
            (Gn 4.1,2). Ao entrar no mundo, o pecado se tornou hereditário e se
            multiplicou, alcançando grandes proporções: do coração do primeiro
            casal passou aos filhos e, depois, a toda a humanidade (Sl 51.5; Rm
            5.12).
          </P>
          <P className="">
            Caim era agricultor (Gn 4.2) e seu irmão Abel foi pastor de ovelhas
            (Gn 4.2). A Bíblia conta que, em certo momento, os dois irmãos
            levaram ofertas ao Senhor (Gn 4.3,4): como agricultor, Caim trouxe
            sua oferta do fruto da terra; Abel, como pastor, trouxe das
            primícias do seu rebanho. A Bíblia não dá nenhuma explicação exata
            sobre o porquê Deus rejeitou a oferta de Caim e aceitou a de Abel,
            mas fornece detalhes que permitem entender a diferenciação entre as
            ofertas dos irmãos. Um ponto relevante é que Deus não apenas aceitou
            a oferta de Abel e rejeitou a de Caim, mas “O Senhor se agradou de
            Abel e de sua oferta, mas de Caim e de sua oferta não se agradou”
            (Gn 4.4,5). O que está em foco não é a oferta que cada um trouxe,
            mas o coração do ofertante.
          </P>
          <P className="">
            Com isso, “Caim ficou muito irritado e fechou a cara” (Gn 4.5) e,
            apesar de ser advertido por Deus (Gn 4.7,8), mata seu irmão mais
            novo (Gn 4.8), cometendo o primeiro homicídio da história. Caim, por
            fim, “se retirou da presença do Senhor” (Gn 4.16) e “edificou uma
            cidade” (Gn 4.17) dando prosseguimento a uma posteridade vergonhosa
            (Gn 4.18-24).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-o-diluvio-julgamento-de-deus-sobre-a-humanidade-corrompida">
            O dilúvio: julgamento de deus sobre a humanidade corrompida
          </H3>
          <P className="">
            Em Gênesis 4.25,26 veem-se duas classes de homens no mundo: os
            “piedosos”, descendentes de Sete (filho de Adão), e os ímpios,
            descendentes de Caim. Em uma geração corrompida e violenta (Gn
            6.11), apenas Noé e sua família, que descendiam de Sete,
            mantiveram-se fiéis e obedientes a Deus, e eles encontraram o Seu
            favor (Gn 6.8,9,22). Por causa disso, o Senhor chama Noé para uma
            missão: construir uma arca, com ordens específicas quanto à sua
            feitura e aos que deveriam entrar nela, pois destruiria o mundo (Gn
            6.13-21), firmando uma aliança com Noé (Gn 6.18), a fim de que por
            seu intermédio a promessa da redenção continuaria seu curso até o
            cumprimento em Cristo (Lc 3.20-36).
          </P>
          <P className="">
            Noé, sua família e os casais de animais, entraram na arca quando
            veio o dilúvio sobre a terra, chovendo por quarenta dias (Gn
            7.11-17), fazendo perecer todos que não embarcaram (Gn 6.21-23).
          </P>
          <P className="">
            Quando as águas secaram (Gn 8.13), Noé, sua família e todos os
            animais saíram da arca e a primeira atitude que ele tomou foi
            levantar um altar ao Senhor e oferecer holocaustos (Gn 8.20). Quando
            Deus, aceitando o sacrifício, estabeleceu com Noé uma aliança,
            prometendo que nunca mais a terra seria destruída por um dilúvio,
            pondo um arco-íris como símbolo dessa aliança (Gn 9.8-17).
          </P>
          <P className="">
            Mais tarde, Noé predisse o futuro de seus filhos (Gn 9.24-27),
            apontando Sem como aquele por meio do qual Deus abençoaria o mundo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-torre-de-babel-simbolo-da-rebeliao-do-homem">
            A torre de babel: símbolo da rebelião do homem
          </H3>
          <P className="">
            O capítulo 10 de Gênesis apresenta o que é conhecido como “Quadro
            das Nações” ou “Tabela das Nações”, traçando a genealogia (registro
            dos antepassados de alguém) de Noé (Gn 10.1-8). Essa genealogia se
            estende até Ninrode, que reinou sobre Babel (Gn 10.10), construindo,
            posteriormente, Nínive, Reobote-Ir, Calá e Resém, na Assíria (Gn
            10.11,12). E foram justamente os descendentes de Ninrode que
            planejaram construir a Torre de Babel (Gn 11.2-4). É interessante
            notar a correspondência entre os capítulos 10 e 11 de Gênesis: o
            capítulo 10 mostra as nações descendentes de Noé separadas em suas
            “moradas”, enquanto que o capítulo 11 mostra como se deu essa
            separação.
          </P>
          <P className="">
            Nota-se, pelas palavras dos descendentes de Ninrode registradas em
            Gênesis 11.4: “Venham, vamos construir uma cidade e uma torre cujo
            topo chegue até os céus e tornemos célebre o nosso nome, para que
            não sejamos espalhados pela terra”, que a sua intenção era a de se
            levantaram em um ato de rebelião contra Deus, não querendo se
            submeter à Sua determinação de povoarem a terra, e que a torre seria
            o centro dessa rebelião. Isso mostra, também, o resíduo no coração
            do homem, plantado pela serpente, de querer ser igual a Deus (Gn
            3.5).
          </P>
          <P className="">
            Entretanto, Deus intervém e desfaz esse plano ardiloso, colocando em
            andamento Seu propósito soberano (Gn 1.28; Gn 9.1), dispersando as
            nações ao confundir sua língua (Gn 11.7-9).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Concluindo esta primeira lição da jornada pelo Antigo Testamento,
            esperamos que você tenha conseguido entender a relevância histórica
            dos primeiros capítulos de Gênesis, onde foram abordados: a criação
            dos primeiros seres humanos que, apesar de terem sido colocados num
            lugar paradisíaco, desobedeceram à ordem do Senhor quanto a não
            comerem da árvore do conhecimento do bem e do mal, sendo expulsos do
            Jardim do Éden; o primeiro homicídio da raça humana, cometido entre
            dois irmãos (Caim e Abel); a degeneração da humanidade, que se
            tornou corrupta e violenta, levando à sua extinção quase total por
            meio do dilúvio, nos dias de Noé; e, por fim, o projeto dos homens
            em construir uma torre, a fim de confrontar o Criador, que redundou
            no espalhamento das nações, quando da confusão das línguas em Babel.
          </P>
          <P className="">
            Apesar disso, o que se depreende, é que desde o início da história
            da humanidade há uma graça sustentadora de Deus presente até mesmo
            em cada um dos julgamentos ocorridos, mostrando que o Senhor
            constantemente dá uma segunda chance ao homem, apesar de seus
            pecados cruéis, para que o Seu propósito seja cumprido.
          </P>
          <P className="">
            Por fim, sugere-se a leitura deste material didático e a
            participação em aula, a fim de que o aprendizado seja efetivo e
            duradouro.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">Lição 2 – A história dos patriarcas</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar os fatos mais relevantes contidos nos últimos 39
            capítulos de Gênesis, que falam dos patriarcas bíblicos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-introducao">Introdução</H3>
          <P className="">
            É digno de nota que os primeiros 11 capítulos de Gênesis abrangem,
            aproximadamente, um período de 2.000 anos, espaço temporal que se
            aproxima do restante da Bíblia. Isso se deve ao fato de que as
            Escrituras contam, primeiramente, a história da redenção de modo
            sucinto, sendo a história das nações um caso dependente daquele
            inicial.
          </P>
          <P className="">
            A Bíblia destacava, antes de Gênesis 11.26, Adão e Noé como
            personagens cujas vidas serviram como apoio para o plano divino e
            suas consequências para a raça humana. Agora, Abraão é o principal
            nome nesse propósito divino, junto àqueles que são conhecidos como
            patriarcas (Isaque, Jacó e José). Suas histórias pessoais e de seus
            descendentes preenchem os capítulos remanescentes do livro de
            Gênesis, formando uma corrente que se estende por toda a Bíblia.
          </P>
          <P className="">
            É bem verdade que a designação “patriarca” não provém do Antigo
            Testamento, mas é mencionada em épocas mais recentes (At 7.8 e
            versículos seguintes, que falam dos doze patriarcas; em At 2.29 Davi
            também é considerado um patriarca). Os patriarcas eram assim
            chamados por causa da organização em torno de si, pois eles reuniam
            funções diversas, tais como a de chefes militares, sacerdotes e
            líderes políticos.
          </P>
          <P className="">
            Nesta lição acompanhe as vidas de Abraão, Isaque, Jacó e José, onde
            sua importância será ressaltada, tanto para os hebreus quanto para
            os cristãos, afinal essa é a história dos patriarcas.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-historia-de-abraao-o-pai-da-fe-de-muitos-povos">
            A história de Abraão, o pai da fé de muitos povos
          </H3>
          <P className="">
            Abraão tem esse título porque é considerado o pai das três maiores
            religiões monoteístas do mundo. O patriarca nasceu em Ur dos
            Caldeus, cidade rica e sofisticada da Mesopotâmia, possuindo
            agricultura adiantada, com drenagem e irrigação desenvolvidas. Nessa
            época os moradores de Ur eram politeístas (Js 24.2). Ao chamar
            Abraão, Deus faz com que Gn 3.15 cumpra-se através dele, separando-o
            do ambiente pagão e, além dos pessoais, promete-lhe bênçãos
            nacionais, territoriais e espirituais (Gn 12.1-3).
          </P>
          <P className="">
            Abraão levou consigo para Canaã sua esposa, seu sobrinho Ló, seus
            bens e as pessoas que se juntaram a ele (Gn 12.5). Mais à frente,
            Abraão e Ló separam-se, já que seus rebanhos cresceram tanto que não
            havia pasto suficiente para ambos (Gn 13.5-12)
          </P>
          <P className="">
            A história de Abraão é de uma vida de fé. Porém, sua fé entra em
            conflito com a realidade: ele será uma grande nação (Gn 12.2), mas
            Sara era estéril (Gn 11.30). Contudo, Deus reafirma a promessa de
            que o herdeiro viria de Abraão e Sara (Gn 15.4; Gn 17.19), o que
            aconteceu quando o pai da fé tinha 100 anos (Gn 21.1-5). O maior
            teste da fé de Abraão aconteceu em Gn 22, quando Deus ordenou que
            oferecesse Isaque em sacrifício. Abraão obedeceu por confiar em uma
            providência divina (Gn 22.5; Hb 11.17-19) e Isaque foi poupado (Gn
            22.11,12). Abraão morreu com 175 anos (Gn 25.7), o que significa que
            andou com Deus por mais de 100 anos (Gn 12.4).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-historia-de-isaque-o-herdeiro-da-promessa">
            A história de Isaque, o herdeiro da promessa
          </H3>
          <P className="">
            Herdeiro da promessa, Isaque nasceu quando seus pais, Abraão tinha
            100 anos e Sara, 90 anos. A vida de Isaque foi bem diferente da de
            seu pai. Ainda vivo, Abraão resolveu arranjar um casamento para seu
            filho, enviando seu servo Eliezer para escolher para ele uma esposa
            dentre os seus parentes (Gn 24.4), mantendo a integridade familiar.
            Através de Eliezer Deus interveio na escolha de Rebeca, filha de
            Betuel, sobrinho-neto de Abraão, para ser esposa de Isaque (Gn
            24.15). Após Isaque orar a Deus (Rebeca era estéril, Gn 25.21), sua
            esposa ficou grávida de gêmeos, que disputaram entre si no ventre de
            sua mãe, pois seriam duas grandes nações (Gn 25.22,23), mas o mais
            velho (Esaú) serviria ao mais moço (Jacó).
          </P>
          <P className="">
            Por causa de uma de grande fome, Isaque desceu a Gerar com sua
            família (Gn 26) e lá, cometeu o mesmo erro que seu pai ao ocultar a
            identidade de sua esposa ao rei dos filisteus, Abimeleque (Gn 26.7).
            Quando este descobriu o engano, repreendeu Isaque e proibiu qualquer
            um de tocá-lo (Gn 26.8- 11).
          </P>
          <P className="">
            Com idade avançada e visão enfraquecida, Isaque convocou Esaú e lhe
            pediu para caçar e preparar uma comida, para proferir sobre ele uma
            bênção. Rebeca vê uma oportunidade de usurpar essa bênção em favor
            de Jacó, seu filho preferido (Gn 27.5-13,27-29). Após “roubar” a
            bênção de Esaú, Jacó foge e só retorna depois de 20 anos, pouco
            antes de Isaque morrer com 180 anos (Gn 35.28).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-historia-de-jaco-o-pai-das-doze-tribos-de-israel">
            A história de Jacó, o pai das doze tribos de israel
          </H3>
          <P className="">
            Jacó, cujo nome significa “aquele que agarra o calcanhar” ou
            “suplantador”, parece ser o verdadeiro pai do povo escolhido, pois
            lhe nasceram 12 filhos, que se tornaram os cabeças das 12 tribos de
            Israel. Quando ia para Harã, fugindo de seu irmão Esaú por
            interceptar a sua bênção de primogenitura, Jacó teve uma visão em
            que Deus lhe fez promessas e deu àquele lugar o nome de Betel, Casa
            de Deus (Gn 28.11-19).
          </P>
          <P className="">
            Quando chegou em Harã, procurou a casa de Labão, seu tio, por
            orientação de sua mãe (Gn 27.43,44). Lá, ele se encanta por Raquel,
            filha de Labão e se compromete a trabalhar sete anos para tomá- la
            como esposa, mas é enganado por seu tio, recebendo Lia como esposa
            (Gn 29.23-25). Mas essa não foi a única vez que Labão enganou a Jacó
            (Gn 30.7; Gn 31.41). Ele se casou com Raquel e trabalhou mais sete
            anos (Gn 29.27,28). Em Harã, Deus abençoou Jacó com onze filhos, uma
            filha e muito gado (Gn 30.43).
          </P>
          <P className="">
            Após 20 anos na casa de Labão, Jacó e sua família retornaram para a
            casa de seu pai, em Canaã (Gn 31.18). No caminho, ele se encontra
            com anjos de Deus (Gn 32.1) e, depois, no vau do Jaboque ele luta
            com um anjo até o romper do dia e tem o seu nome mudado para Israel,
            “Príncipe de Deus” (Gn 32.24-28). Na sequência, Jacó se encontra com
            seu irmão Esaú e eles se reconciliaram (Gn 33.1-4). Jacó, agora
            Israel, ainda tem mais um filho, Benjamim, totalizando doze (Gn
            33.18).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-a-historia-de-jose-o-governador-do-egito">
            A história de José, o governador do Egito
          </H3>
          <P className="">
            A biografia de José, que se estende do capítulo 37 ao 50 de Gênesis,
            conclui uma grande e preciosa lição de providência da parte de Deus.
            Quando ele tinha 17 anos, relatou dois sonhos que teve com seus
            irmãos, que passaram a odiá-lo e invejá-lo (Gn 37.5-11). O que
            motivou isso é que, pelos sonhos, os irmãos de José, e seu próprio
            pai (Jacó), serviriam a ele. Certo dia José foi procurar seus
            irmãos, a fim de dar notícias deles a seu pai notícias deles. Foi
            quando eles conspiraram contra José e o venderam como escravo a uma
            caravana de ismaelitas que passava por ali indo para o Egito (Gn
            37.12-28).
          </P>
          <P className="">
            No Egito José foi vendido a Potifar, oficial de Faraó (Gn 37.36).
            Lá, “O Senhor estava com José” (Gn 39.2) e Potifar percebeu que a
            prosperidade em sua casa foi alcançada por causa da gestão do rapaz
            que, mesmo diante da tentação da esposa do seu senhor, não cedeu,
            dada a sua integridade (Gn 39.7-12). Apesar disso, o jovem José foi
            levado à prisão. Mas, mesmo no cárcere, o Senhor estava com ele (Gn
            39.21-23).
          </P>
          <P className="">
            Após interpretar os sonhos do copeiro e do padeiro de Faraó na
            prisão, José interpreta os sonhos do rei do Egito e é alçado a
            administrador da nação (Gn 40-41). Com a chegada da seca e da fome,
            os irmãos de José vão ao Egito em busca de alimentos e se
            reencontram com ele. Seus irmãos voltaram a Canaã, buscaram Jacó,
            seu pai, e migraram ao Egito com tudo que tinham (Gn 42-50).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Com esta segunda lição da jornada pelo Antigo Testamento, conclui-se
            o estudo do livro de Gênesis, onde as biografias dos patriarcas de
            Israel foram abordadas, entendendo-se não somente os seus aspectos
            históricos, mas também os espirituais relacionados à vida cristã.
            Por isso, foram seguidas as seguintes trilhas nos últimos capítulos
            de Gênesis: a história de Abraão, pai da fé dos judeus e dos
            cristãos; a história de Isaque, o herdeiro da promessa; a história
            de Jacó, o pai das doze tribos da nação de Israel; e, finalmente, a
            história de José, aquele que se tornou governador do Egito.
          </P>
          <P className="">
            A lição conclusiva é que as experiências desses patriarcas estavam
            ligadas com o plano de redenção, prometido por Deus desde Gênesis
            3.15, perpassando a vida deles. Até mesmo as situações mais adversas
            que esses homens vivenciaram serviram de lições para provar que o
            Senhor mantém tudo sob o mais absoluto controle de Suas mãos,
            conduzindo tudo para o Seu propósito soberano, pois “Sabemos que
            todas as coisas cooperam para o bem daqueles que amam a Deus,
            daqueles que são chamados segundo o seu propósito (Rm 8.26).
          </P>
          <P className="">
            Não deixe de ler este material para as próximas aulas, participando
            ativamente de cada uma delas. Assim, o seu aprendizado será de
            excelência.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – Um longo período no Egito</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Apresentar historicamente os eventos descritos nos demais capítulos
            de Gênesis.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-introducao">Introdução</H3>
          <P className="">
            O povo de Deus, a saber, o povo hebreu chegou ao Egito não por
            acaso, mas por providência divina, num período de muita fome na
            terra, através de José, filho de Jacó, que depois de ter sido
            vendido como escravo pelos próprios irmãos e ter passado também por
            um período na prisão, Deus em Sua onisciência e soberania o levantou
            como vice-governador do Egito para a preservação da vida,
            especialmente do Seu povo. Isso Deus já havia comunicado a Abraão de
            que a Sua descendência seria escravizada em terra estranha, mas
            quando houvesse se tornado uma nação, seria tirada com mão forte e
            poderosa (Gn 15.13,14).
          </P>
          <P className="">
            Após 430 anos no Egito (Êx 12.40) e debaixo de escravidão, Deus
            levantou o libertador de Israel para, por meio dele, fazer cumprir a
            Sua promessa de libertação. O nascimento de Moisés se deu debaixo da
            providência do Todo-poderoso que, depois de ter se tornado um homem
            de virtude singular, tornou- se poderoso em palavras e em obras e
            pôde mudar a história não somente do povo hebreu, mas de toda a
            humanidade.
          </P>
          <P className="">
            Como veremos a seguir, não foi por acaso que Moisés foi instruído em
            toda a ciência do Egito onde viveu por 40 anos e, posteriormente, na
            terra de Midiã, na escola divina por mais 40 anos, pois, para toda e
            qualquer realização há um momento certo, um momento apropriado para
            todo o propósito debaixo do céu (Ec 3.1).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-moises-nasce-para-libertar">
            Moisés nasce para libertar
          </H3>
          <P className="">
            A promessa de Deus a Abraão (Gn 17.4), a Isaque (Gn 26.4) e a Jacó
            (Gn 28.14) estava em cumprimento na terra do Egito, pois Deus não se
            esquece das suas promessas. Mormente nesse tempo de multiplicação,
            levantou-se no Egito um rei que não conhecia José e vendo o
            crescimento dos hebreus teve medo de se tornarem um povo mais forte
            e poderoso e submeteu-os a trabalhos forçados em todo tipo de
            tarefas que eram obrigados a realizar (Êx 1.8-14).
          </P>
          <P className="">
            Não conseguindo frear o crescimento dos hebreus, foi determinado que
            as parteiras deixassem as meninas viverem, mas que matassem os
            meninos recém-nascidos e elas, temendo a Deus, não cumpriram tal
            determinação. Neste momento, o faraó ordenou a todo o seu povo para
            que jogassem no rio todos os meninos hebreus recém-nascidos, mas que
            as meninas hebreias deixassem viver (Êx 1.15- 22).
          </P>
          <P className="">
            Porém, foi nesse tempo da promessa de Deus a Abraão que nasceu
            Moisés (At 7.17) e, já nascido, pela fé foi escondido por três meses
            porque seus pais viram que era um menino formoso e não temeram o
            mandado do rei (Hb 11.23). O que fez os seus pais tomarem essa
            atitude foi a fé de que, através daquele filho, Deus restauraria o
            Seu povo e foi pela fé que a mãe de Moisés preparou uma arca,
            lançando-o no rio e enviando sua irmã Miriam para saber o que lhe
            aconteceria (Êx 2.1-4). A fé nas promessas de Deus nos move e nos
            faz agir de maneira corajosa frente às adversidades.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-moises-e-chamado">Moisés é chamado</H3>
          <P className="">
            Necessário é que o povo de Deus creia que Deus é fiel para cumprir
            as Suas promessas e entenda que nada pode frustrar os Seus
            desígnios. Moisés passou por um período de 40 anos na escola divina,
            apascentando o rebanho de seu sogro e vivendo uma vida nômade no
            deserto de Midiã.
          </P>
          <P className="">
            Deus o estava preparando para que, mais à frente, estivesse em
            condições de conduzir o Seu rebanho no deserto do Sinai, rumo à
            terra de Canaã. Não obstante, já havia passado 40 anos no Egito onde
            aprendeu a ser um legislador e estadista. Dessa forma, Yahweh o
            preparou para realizar a Sua obra. No Egito, aprendeu a ser
            legislador; no deserto, a ser pastor; e, preparado, foi chamado para
            ser o libertador do povo hebreu que se encontrava sob escravidão no
            Egito.
          </P>
          <P className="">
            A chamada de Moisés foi realizada de uma maneira extraordinária e
            gloriosa, literalmente feita no fogo (Êx 3.2). A presença divina foi
            real e teofanicamente houve a aparição do próprio Deus. “Vem agora,
            pois, e Eu te enviarei a Faraó, para que tires o meu povo do Egito.”
            (Êx 3.10). Com estas palavras, Moisés foi comissionado para a sua
            maior missão, a libertação do povo de Deus. Dessa forma, fica claro
            o seguinte: 1) A urgência – “Vem agora”; 2) Quem comissiona: “Eu te
            enviarei”; 3) O lugar: “O Egito”; 4) O propósito: “para que tires o
            meu povo...". A missão que Deus nos dá sempre tem objetivos e
            precisamos entendê-los para realizarmos a Sua obra.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-moises-e-bem-sucedido">Moisés é bem-sucedido</H3>
          <P className="">
            Ninguém pode impedir Deus de agir e Ele não age sumariamente sem
            aviso prévio, a fim de levar o homem ou a nação à conversão e ao
            arrependimento, com vistas a livrar-se do julgamento. No entanto,
            com o endurecimento do coração de faraó, Deus demonstrou no Egito o
            Seu poder e as Suas maravilhas (Êx 3.20). Deus operou os Seus sinais
            com o intuito de convencer o faraó a libertar o Seu povo e para
            credenciar Moisés como o líder do Seu povo, envergonhando o inimigo
            e engrandecendo o Seu ungido. Deus tirou o Seu povo da escravidão
            com mão forte e poderosa.
          </P>
          <P className="">
            Ao sair do Egito, o Senhor estabeleceu um memorial para Israel, a
            Páscoa. Esta é uma palavra hebraica que significa “passagem”,
            tornando-se uma das três grandes festas solenes que passou, a partir
            de então, a ser comemorada anualmente, pois estava ligada ao Êxodo e
            à libertação da escravidão e, assim como os judeus se reúnem em
            torno do “cordeiro”, a igreja se reúne em torno de Cristo, o
            Cordeiro pascal, para celebrar Sua morte, ressurreição e a
            libertação do domínio do mundo.
          </P>
          <P className="">
            E, antevendo o obstáculo futuro, Deus deu a estratégia para Moisés
            conduzir o povo, pois, para deixar o jugo da escravidão, teria que
            atravessar o Mar Vermelho. Da mesma forma, situações se apresentam
            diante da igreja como obstáculos para a libertação da escravidão do
            mundo, mas, assim como Israel atravessou e celebrou, em Cristo, a
            Sua igreja pode vencer e celebrar (1Co 15.57).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-provisao-vem-do-senhor">
            A provisão vem do Senhor
          </H3>
          <P className="">
            Deus é provedor, é o Jeová-Jireh e tem por virtude prover todas as
            coisas. É Ele quem supre as nossas necessidades (Mt 6.28-34). Para
            Israel no deserto proveu a água (Êx 15.23-25), proveu comida (ÊX
            16.35), não somente com o maná, mas também carne, além de prover as
            vestimentas que, durante quarenta anos, não se envelheceram e nem os
            sapatos se romperam (Dt 8.4). Ainda assim, os filhos de Israel se
            mostraram ingratos, desejando a comida do Egito e rejeitando o maná
            do céu. A ingratidão é a qualidade dos que não reconhecem as bênçãos
            de Deus e dos que têm corações endurecidos.
          </P>
          <P className="">
            Deus é provedor na subsistência e nas guerras. Foi assim quando os
            amalequitas atacaram os filhos de Israel que foi à peleja sob o
            comando de Josué. Moisés subiu à colina com o cajado nas mãos com
            Arão e Hur. Levantando Moisés as mãos, Israel vencia e, abaixando,
            os amalequitas prevaleciam. Assim, Arão e Hur sentaram Moisés sobre
            uma pedra e ergueram as suas mãos até a vitória.
          </P>
          <P className="">
            A unidade torna o povo forte e vencedor porque não sobrecarrega um
            em detrimento dos demais. Louvado seja Deus que não deixa o seu povo
            sem a orientação e a estratégia na caminhada como fez a Moisés por
            intermédio de Jetro seu sogro que percebendo a exaustão do líder na
            resolução dos conflitos, bem como o sofrimento do povo, orientou-lhe
            a escolher homens tementes a Deus para lhe ajudar a levar a carga
            (Êx 18.13-24)!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            O nosso Deus é um Deus de promessas e quando decide cumpri-las não
            há nada e nem ninguém que possa impedi-Lo. Ficou evidente que o
            Egito conspirou por vezes para que a promessa divina feita a Abraão
            (Gn 17.4) não se cumprisse e caísse por terra, a ponto de intentar
            matar o libertador de Deus à Israel, porém, Deus o colocou aos
            cuidados do próprio faraó para que o alimentasse, instruísse e o
            capacitasse para a Sua obra.
          </P>
          <P className="">
            Passado o tempo determinado, o próprio Deus o toma e o coloca na Sua
            escola no deserto de Midiã (Êx 2.11-21) para uma preparação
            específica e, após o tempo designado, o chamou de uma forma gloriosa
            e por intermédio dele operou sinais e maravilhas na terra do Egito,
            a fim de demonstrar o Seu poder, abater faraó e engrandecer Moisés
            como líder do Seu povo.
          </P>
          <P className="">
            Importa ressaltar que, durante a saída do jugo da escravidão e
            peregrinação, Deus proveu o Seu povo dando-lhe água, comida,
            conservando suas vestimentas e os seus calçados, além de dar vitória
            nas guerras. Importa reconhecer que Deus não mudou e nEle não há
            mudança e nem sombra de variação (Tg 1.17); Ele é o Guarda fiel do
            Seu povo (Sl 121.3) e que quem nEle confia, tem recompensa (Hb
            10.35).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">Lição 4 – A aliança de Deus com o povo de Israel</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Demonstrar a aliança de Deus mediada por Moisés e a sucessão para
            Josué.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-introducao">Introdução</H3>
          <P className="">
            Quando da libertação do povo de Israel da escravidão do Egito e da
            partida para a terra prometida, Deus não os guiou pela terra dos
            filisteus que seria o caminho mais curto para chegar em Canaã, mas
            fez o povo dar a volta no deserto, seguindo o caminho que leva ao
            Mar Vermelho, ainda que mais longe, pois Deus sabia que se o povo se
            defrontasse com a guerra, se arrependeria e voltaria para o Egito
            (Êx 13.17-18).
          </P>
          <P className="">
            Mesmo a peregrinação ter durado 40 anos no deserto, esse não foi o
            propósito inicial de Deus que, desde o momento da libertação da
            escravidão, manifestou a Sua presença protetora guiando-os com uma
            coluna de nuvem de dia e uma coluna de fogo de noite. Com amor
            protetor, abriu o Mar Vermelho para que pudessem atravessar (Êx
            14.21-28), fez pão cair do céu para os alimentar (Êx 16.21-35), fez
            sair água da rocha (Nm 20.11) e mandou codornizes para comerem (Nm
            11.4-6). E, ainda assim, o povo se fez incrédulo e se portou de
            maneira infiel e desobediente ao Deus que os tirara do Egito com mão
            forte e lhe mostrara todos esses feitos no deserto, pelo que o
            Senhor fez com que levassem 40 anos para atravessar o deserto (Nm
            14. 1-14).
          </P>
          <P className="">
            Nesta lição acompanharemos a trajetória desse povo, desde a chegada
            ao deserto até a conquista da terra prometida, entendendo a
            revelação de Deus como Senhor e Soberano, bem como a maneira como o
            homem deve se relacionar com o seu Criador e Senhor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-alianca-regulamentada-nos-10-mandamentos">
            Aliança regulamentada nos 10 mandamentos
          </H3>
          <P className="">
            No terceiro mês que Israel saiu do Egito, Deus estabeleceu a Aliança
            Mosaica no Monte Sinai como uma aliança condicional, ao estabelecer
            obrigações para o povo que as aceitou integralmente (Êx 19.1,5,8) e
            tal aliança serviria, dentre outros fatores, para distinguir Israel
            como o povo escolhido.
          </P>
          <P className="">
            Ressalta-se que o Decálogo, literalmente, dez mandamentos, é o
            resumo da lei moral de Deus que foi escrito por Ele próprio no Sinai
            em duas tábuas de pedra (Êx 20.1; 31.18) e que dentre os propósitos
            da lei, podemos destacar a revelação da santidade de Deus, trazer o
            conhecimento do pecado e estabelecer um padrão de justiça para o
            homem. E, conforme Êxodo capítulo 20.1-17, os mandamentos do
            Decálogo destacam-se em: 1º “Não terás outros deuses diante de mim”;
            2º “Não fará para ti imagens de escultura”; 3º “Não tomarás o nome
            do Senhor, teu Deus, em vão”; 4º “Lembra-te do dia de sábado, para o
            santificar”; 5ª “Honra a teu pai e tua mãe”; 6º “Não matarás”; 7º
            “Não adulterarás”; 8º “Não furtarás”; 9º “Não dirás falso
            testemunho” e 10º “Não cobiçarás”.
          </P>
          <P className="">
            Por causa dos estatutos da Aliança Mosaica, os livros de Moisés, o
            Pentateuco, é chamado tanto no A.T como no N.T de lei, “torá” no
            hebraico (Js 1.8; Ed 7.10; Dn 9.11; Mt 12.5; Lc 2.22), pois foi no
            Monte Sinai que Israel tornou-se a nação eleita, assumiu o
            privilégio de mediar as bênçãos de Deus para o mundo e
            comprometeu-se em ser uma nação santa.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-arca-da-alianca-e-o-tabernaculo">
            A Arca da Aliança e o Tabernáculo
          </H3>
          <P className="">
            A Arca da Aliança representava a presença de Deus. Era a peça mais
            valiosa do Tabernáculo e ficava no “Santo dos santos”, construída de
            madeira de acácia e revestida com ouro por dentro e por fora. Era
            retangular e media 2,5 côvados de comprimento, 1,5 de largura e 1,5
            de altura (Êx 25.10-11). A tampa era denominada de “Propiciatório”,
            adornada com dois querubins de ouro, um em frente do outro com as
            asas abertas para o centro da arca (Êx 25.17-21). O sentido da tampa
            era cobrir algo valioso que se encontrava dentro da arca. Uma vez
            por ano o sumo sacerdote aspergia sangue sobre o propiciatório como
            expiação pelos pecados do povo, apontando para o sacrifício perfeito
            que seria realizado por Cristo.
          </P>
          <P className="">
            O Tabernáculo foi projetado por Deus e determinado a Moisés que o
            fizesse conforme o modelo, com o propósito de cumprir o desejo de
            Deus de habitar novamente entre os homens, pois o pecado havia
            colocado uma barreira de separação (Êx 25.8).
          </P>
          <P className="">
            Para representar o homem diante de Deus, o próprio Deus estabeleceu
            o ofício sacerdotal (Êx, 28.38), pois, com a construção do
            tabernáculo, o sacerdócio não seria mais de cada chefe de família, e
            para atender as exigências do culto, Deus instituiu o sacerdócio e
            chamou Arão e seus filhos para o ofício (Êx 28.1). O sacerdócio não
            é tarefa para homens, e nem homens escolhem a si mesmos e assim como
            Arão foi escolhido por Deus, Cristo foi feito sacerdote eterno (Hb
            5.4-6).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-as-leis-e-o-encerramento-do-ministerio-de-moises">
            As leis e o encerramento do ministério de Moisés
          </H3>
          <P className="">
            Moisés foi o grande receptor das leis de Deus dadas a Israel (Êx
            20.19-22), pois o povo temeu e não quis recebê-las diretamente de
            Deus, colocando-o como mediador diante do Eterno. Na verdade, o
            Senhor não entregou a Israel apenas o Decálogo, mas uma lei ampla
            com aspectos morais, religiosos e civis com vistas à uma convivência
            ideal, pois estaria cercado por nações pagãs, ímpias e perversas com
            comportamentos reprováveis diante de Deus e dos homens.
          </P>
          <P className="">
            Faz-se importante ressaltar o cuidado de Deus com o Seu povo
            trazendo leis normativas acerca da escravidão (Êx 21.1-7); acerca da
            violência e dos acidentes (Êx 21.12-36); leis acerca da proteção da
            propriedade (Êx 22.1-15); acerca das responsabilidades sociais (Êx
            22.16-31); leis acerca do exercício da justiça (Êx 23.1-9); acerca
            do sábado (Êx 23.1-13) e leis acerca das grandes festas anuais (Êx
            23.14-19), com vistas a ensinar o Seu povo a se portar como nação
            civil e religiosa.
          </P>
          <P className="">
            Por fim, vemos no livro de Deuteronômio Moisés fazendo uma repetição
            da Lei, isso antes da sua partida e da entrada de Israel em Canaã,
            pois a geração passada havia perecido e a nova geração precisava
            entende-la para entrar na Terra Prometida. Na planície de Moabe,
            Moisés com 120 anos fez quatro discursos e encerrou suas palavras
            animando o povo e exortando semelhantemente a Josué, colocando-o
            como seu substituto à vista de todo o Israel (Dt 31.1-8).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-conquista-da-terra-prometida">
            A conquista da terra prometida
          </H3>
          <P className="">
            Após a morte de Moisés, servo do Senhor, Josué, filho de Num,
            assumiu a liderança de Israel, comissionado e encorajado pelo
            próprio Deus que lhe garantiu a vitória se tão somente fosse
            obediente (Js 1.7-8). E, no cumprimento da promessa feita a Abraão,
            o povo de Israel entrou na terra de Canaã e Deus determinou a
            circuncisão de todos os homens nascidos no deserto (Js 5.1-9). Tudo
            isso, após celebraram a Páscoa (Js 5.10-12), tudo em conformidade
            com as leis do Sinai, pois tanto a circuncisão quanto a Páscoa eram
            preparativos de habilitação para a conquista da terra prometida.
          </P>
          <P className="">
            A conquista da terra prometida iniciou-se pela vitória sobre Jericó,
            uma cidade extraordinariamente fortificada que serviu para mostrar
            ao povo a fidelidade do Deus de Israel que com mão forte e poderosa
            ia adiante do seu povo dando-lhes a vitória por onde passava, tanto
            contra as cidades do sul (Js 10) como contra as cidades do norte (Js
            11).
          </P>
          <P className="">
            Após essas conquistas, Israel sob a liderança de Josué fez o
            registro e a distribuição das terras por herança às tribos. Foram as
            terras repartidas por sortes com exceção da tribo de Levi que havia
            sido consagrada ao sacerdócio, cujos filhos foram distribuídos em
            cidades no meio das demais tribos para ensinarem acerca de Deus (Js
            21). A tribo de Levi não foi destinada a receber herança com Israel,
            pois a sua herança era o próprio Deus e o seu sustento as ofertas do
            tabernáculo (Dt 18.1-8).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            A libertação de Israel se deu com o propósito de levá-lo a uma terra
            prometida, e o próprio Deus o conduziu por meio de Moisés e de seu
            substituto Josué, por meio dos quais manifestou os seus sinais
            portentosos tanto na peregrinação, quanto na conquista da terra.
          </P>
          <P className="">
            No Sinai, Deus estabeleceu Sua aliança com Israel a fim de torná-lo
            um povo exclusivamente Seu, entregando-lhes as Suas leis que
            deveriam ser cumpridas como povo escolhido e separado das demais
            nações. E, nessa Aliança, Deus projetou o tabernáculo e instituiu o
            culto, onde poderia habitar e Se relacionar com o Seu povo.
          </P>
          <P className="">
            Em consequência da incredulidade e desobediência do povo e, apesar
            de todo o cuidado e provisão, na Sua justa ira, Deus fez aquela
            injusta geração perecer no deserto, com exceção de Josué e Calebe
            que permaneceram fiéis quando os dez espias inflamaram o povo. E,
            após a morte de Moisés, o Eterno comissionou Josué como seu
            substituto por meio do qual deu a Israel, as vitórias nas guerras e
            a conquista da terra prometida. No cumprimento da promessa de Deus a
            Abraão, Israel recebeu a terra por herança com exceção dos levitas
            que receberam como herança o próprio Deus, pois foram consagrados ao
            Sacerdócio sagrado.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-5">Lição 5 – A era dos Juízes</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">Demonstrar os juízes como liderança de Israel.</P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-introducao">Introdução</H3>
          <P className="">
            Aos cento e dez anos de idade morreu Josué, o líder que trilhou com
            o povo de Israel o caminho da submissão a Deus, sendo sucedido
            inicialmente pelos anciãos que andaram ao seu lado e que
            presenciaram todo o cuidado do Senhor por Israel (Js 24.29-31).
            Durante esse período, o povo permaneceu servindo ao Senhor (Jz 2.7),
            entretanto, esse estado não durou muito.
          </P>
          <P className="">
            Ao passar aquela geração que acompanhou Josué, seus sucessores
            mudaram o comportamento, pois permitiram que o pecado da idolatria
            oriunda dos cananeus arraigasse em seus corações. Diante disso, Deus
            levantou juízes para liderarem.
          </P>
          <P className="">
            O período dos juízes é marcado por ciclos sucessivos, cujo início
            foi o pecado do povo, que seguidamente era alertado, se arrependia e
            recebia o perdão. Após certo lapso temporal, o ciclo se iniciava
            novamente. Esse período perdurou por aproximadamente 309 anos e foi
            marcado pela atuação desses líderes políticos, militares e
            espirituais que coordenaram, com a ajuda do Senhor, a vida daquela
            sociedade. Ressalta-se que, serão destacados na presente lição os
            juízes: Débora, Gideão, Jefté e Sansão, sem nos esquecermos do
            sacerdote Eli e de Samuel.
          </P>
          <P className="">
            Assim, o leitor é convidado a mergulhar na história do povo de
            Israel quando eles estavam sendo guiados por líderes conhecidos como
            juízes e perceber que “Perto está o Senhor de todos os que o
            invocam, de todos os que o invocam em verdade. Ele satisfaz o desejo
            dos que o temem; ouve o seu clamor e os salva.” (Sl 145.18,19).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-nacao-sem-um-compromisso-duradouro">
            Nação sem um compromisso duradouro
          </H3>
          <P className="">
            A história apresentada no livro de Juízes transcorre no período que
            vai desde a conquista da terra de Canaã até o início da monarquia em
            Israel. Nesse período, encontramos uma geração desequilibrada que
            sucedeu a Josué e aos líderes que o acompanhavam, um povo que
            colocou fim na unidade e na solidariedade que existia entre seus
            integrantes durante as lutas e desafios relatados no livro de Josué.
            Frente a essa situação, o Senhor chamou alguns líderes fortes para
            conduzir o povo. São eles descritos no livro de Juízes: Otoniel
            (3.7-11), Eúde (3.12-30), Sangar (3.31), Débora (4-5), Gideão (6-8),
            Tolá (10.1- 2), Jair (10.3-5), Jefté (10.6-12.7), Ibsã 12.8-10, Elom
            (12.11-12), Abdom (12.13-15) e Sansão (13-16). Após estes juízes e
            antes do período monárquico, encontramos o sacerdote Eli e
            posteriormente o profeta e sacerdote Samuel, que também lideraram
            Israel.
          </P>
          <P className="">
            Entre os denominados juízes, na realidade, pouco ou quase nada havia
            da ação de julgar, pois eram mais líderes militares, guerreiros e
            libertadores que em determinadas situações conduziam o povo com a
            ajuda do Senhor. Ao obterem desfecho positivo, o povo se mantinha
            fiel a Deus, tão somente durante a vida daquele juiz, caindo em
            corrupção moral e religiosa logo em seguida (Jz 2.11-19). Ou seja, o
            pecado da idolatria gerou um ciclo vicioso que havia se instaurado
            entre os israelitas, não permitindo que eles obtivessem um
            compromisso duradouro com Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-os-juizes-debora-e-gideao">
            Os juízes Débora e Gideão
          </H3>
          <P className="">
            O texto de Juízes 4.4 revela Débora como profetisa e juíza.
            Provavelmente foi uma mulher memorável para ser aceita como juíza,
            principalmente, por ser um período patriarcal em que as mulheres
            eram reputadas cidadãs inferiores. É importante fazermos referência
            ao relato bíblico que expõe a vitória do povo israelita sobre a
            opressão de Jabim, rei cananeu. Débora e Baraque, general da tribo
            de Naftali, derrotaram Sísera, general de Jabim, sendo ele morto
            conforme profetizado por Débora. Essa batalha foi o ponto de partida
            para a libertação total do povo de Israel das mãos de Jabim (Jz
            4.23,24).
          </P>
          <P className="">
            Na época de Gideão, os agricultores da sua região, povoado de Ofra,
            eram constantemente assediados por salteadores midianitas, que
            saqueavam suas plantações e devastavam a terra (Jz 6.5). Veja que no
            verso 11 do capítulo 6 de Juízes o texto apresenta Gideão malhando o
            trigo secretamente com medo dos midianitas. Contudo, é neste momento
            que o Anjo do Senhor aparece para Gideão, o chama de “homem valente”
            (Jz 6.12) e promete que, com a força outorgada por Deus, ele
            libertaria os israelitas das mãos dos midianitas. Para tanto, Gideão
            deveria destruir os altares pagãos. Diante desse pedido, ele
            solicita um sinal ao Anjo, que é concedido. Após o sinal e o
            cumprimento da ordem dada pelo Anjo, Gideão segue em prol de
            arregimentar soldados para a guerra.
          </P>
          <P className="">
            Gideão foi exitoso em angariar pessoas para guerrear. Neste momento,
            ele pede sinal por duas vezes no sentido de confirmar que o Senhor
            os libertaria, o que novamente foi atendido pelo Senhor do
            Exércitos. Quando o exército foi estabelecido, Deus ordenou que
            Gideão reduzisse a quantidade do exército para mostrar que a vitória
            viria d’Ele e não da força humana. Assim, Gideão venceu com tão
            somente 300 homens, demonstrando a fidelidade e soberania de Deus
            (Hb 10.23).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-os-juizes-jefte-e-sansao">
            Os juízes Jefté e Sansão
          </H3>
          <P className="">
            Da região de Gileade surge Jefté que era filho de uma prostituta (Jz
            11.1). Ele foi expulso de casa (Jz 11.2) e viveu à custa de roubos e
            crimes (Jz 11.3). Ou seja, começou mal, mas conquistou tanta
            proeminência em Israel que se tornou juiz por seis anos (Jz 12.7).
            Jefté foi responsável por libertar os israelitas da opressão dos
            amonitas e combater a ciumenta cidade de Efraim. O grande destaque
            da história se dá quando Jefté em uma atitude precipitada realiza um
            duro juramento ao Senhor. Ele ofereceu em holocausto aquilo que
            primeiro lhe saísse ao encontro quando chegasse em casa, caso fosse
            vitorioso contra os filhos de Amom (Jz 11.30,31). Após a vitória,
            infelizmente, quem veio ao seu encontro foi sua única filha (Jz
            11.34).
          </P>
          <P className="">
            Provavelmente, a história de Sansão é uma das mais conhecidas da
            Bíblia. Esse homem era da tribo de Dã e seus pais fizeram o voto
            vitalício de nazireu por ele (Jz 13.5). Os nazireus eram um grupo de
            pessoas dedicados a Deus por toda a vida que, em síntese, deviam se
            abster voluntariamente do vinho e de bebidas fortes, não podiam
            cortar os cabelos e nem se aproximar de cadáveres (Nm 6.1-21).
          </P>
          <P className="">
            Durante seu crescimento, Sansão obteve orientação quanto ao
            nazireado, entretanto, em lugar da força espiritual, identificou-se
            que ele recebeu enorme força física. Sansão era um homem com enorme
            sede de vingança, com temperamento desprezível e propenso a mulheres
            imorais e corruptas. É evidente que a única parte do voto de nazireu
            que Sansão observava era a de não cortar os cabelos. O relato mais
            popular de Sansão é certamente o relacionamento com Dalila, romance
            que lhe custou a vida (Jz 16). No relato bíblico da vida de Sansão,
            pode-se observar grande similaridade com a batalha enfrentada por
            todos os cristãos, ou seja, a luta da carne contra o Espírito (Gl
            5.17). A santificação deve ser uma constante na vida cristã, onde se
            espera que o fruto do Espírito brote com abundância (Gl 5.22,23).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-o-ultimo-juiz-samuel">O último juiz, Samuel</H3>
          <P className="">
            Desde o seu nascimento, Samuel sempre experimentou o agir
            sobrenatural de Deus. Ana, sua mãe, era estéril (1Sm 1.2), e naquele
            tempo uma mulher sem filhos era considerada uma fracassada. Em vista
            disso, ela buscou em Deus a solução para seu problema (1Sm 1.10,11)
            e realizou um voto dizendo: “Senhor dos Exércitos, se de fato
            olhares para a aflição da tua serva, e te lembrares de mim, e não te
            esqueceres da tua serva, e lhe deres um filho homem, eu o dedicarei
            ao Senhor por todos os dias da sua vida, e sobre a cabeça dele não
            passará navalha”. Assim, ela conseguiu a tão almejada gestação de
            onde nasceu Samuel (1Sm 1.20).
          </P>
          <P className="">
            Samuel teve a oportunidade de presenciar a transição do período dos
            juízes para a monarquia. Essa transição começou com o crescimento e
            amadurecimento das tribos, e isso exigiu uma estrutura de governo
            mais formal. Assim, ergueu-se Samuel, que foi aceito pelas tribos
            como um líder dentre os juízes.
          </P>
          <P className="">
            A narrativa apresentada no livro de 1 Samuel expõe que Samuel nasceu
            durante a velhice de Eli, o então sumo sacerdote. O menino cresceu
            no tabernáculo como aprendiz de Eli e qualificou-se para servir ao
            povo como sacerdote, profeta e juiz.
          </P>
          <P className="">
            Depois da morte de Eli, Samuel foi confirmado como líder diante da
            autoridade espiritual que possuía. O mesmo problema sucessório que o
            sacerdote Eli enfrentou diante da corrupção de seus filhos, também
            ocorreu com Samuel, pois seus filhos Joel e Abias também haviam se
            tornado corruptos (1Sm 8). Em face do exposto e diante da falta de
            fé do povo, os anciãos israelitas pediram por um rei humano. Mesmo
            resistindo, Samuel ungiu Saul como rei de Israel. Após atos de
            desobediência, Saul foi rejeitado por Deus e ordenou que Samuel
            ungisse como sucessor o filho de Jessé, Davi. Tempos depois, o
            profeta, sacerdote e juiz Samuel morreu e foi enterrado em Rama.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-5-conclusao">Conclusão</H3>
          <P className="">
            Deus é o Senhor do tempo e não perde o controle da história. No
            momento adequado, Ele estabelece governos, períodos e levanta homens
            e mulheres, cada qual com suas dificuldades e erros, mas todos, sem
            exceção, têm a oportunidade de se alinhar com o propósito divino
            (1Tm 2.3,4; Ef 5.17,18; 1Ts 4.3; 5.18).
          </P>
          <P className="">
            Um compromisso verdadeiro, contínuo e duradouro com Deus urge
            atualmente, pois o cristão sincero não pode deixar-se envolver no
            mesmo ciclo em que vivia o povo de Israel durante a liderança dos
            juízes. Sempre que falecia um juiz, os israelitas enfrentavam o
            declínio e o fracasso. Mesmo assim, quando o povo clamava por
            socorro, Deus providenciava um líder para levantar o povo do
            declínio.
          </P>
          <P className="">
            É cógnito que lidar com as pressões e atrativos da vida moderna não
            é fácil, e se envolver num circuito entre pecado, arrependimento e
            perdão se torna comum no cotidiano, mas entenda que Deus está
            disposto a ajudar aqueles que querem desfrutar de verdadeira
            liberdade, segurança e felicidade, pois são provenientes da
            maravilhosa graça do Senhor.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-6">Lição 6 – O início do período monárquico</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Relatar o início do período monárquico apresentando os primeiros
            reis.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-introducao">Introdução</H3>
          <P className="">
            A lição anterior apresentou de maneira sucinta o vínculo do último
            juiz, Samuel, com o início do período monárquico. Quando o povo de
            Israel percebeu que Samuel se encontrava em idade avançada e que
            seus filhos não seguiam ao Senhor da mesma maneira que seu genitor,
            começaram a pedir um rei para os guiarem, assim como ocorria com as
            nações circunvizinhas (1Sm 8.1-5). Samuel não olhava para aquele
            pedido com bons olhos, entretanto orou ao Senhor e recebeu a ordem
            para que ouvisse a voz do povo e constituísse o primeiro rei de
            Israel, Saul (1Sm 8.6,7).
          </P>
          <P className="">
            Saul, filho de Quis, da tribo de Benjamim, foi ungido rei (1Sm
            10.1). Inicialmente, Saul foi um bom rei, mas isso não durou muito
            tempo. O primeiro rei de Israel foi substituído por Davi, (1Sm
            16.13) um jovem que aprendeu lições de oração, adoração e confiança
            em Deus, tudo isso antes de assumir o trono. Davi foi sucedido por
            seu filho Salomão, um rei que ficou conhecido por sua sabedoria e
            por ter construído o primeiro Templo de Jerusalém (1Rs 3.9; 6.1,38).
          </P>
          <P className="">
            Assim, a lição convida o leitor a contemplar o começo da era dos
            reis de Israel e perceber que, começa reino e termina reino, mas o
            Senhor permanece como o Rei dos reis, Senhor dos senhores e a rocha
            aonde toda e qualquer dependência deve ser estabelecida.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-a-ascensao-e-queda-de-saul">
            A ascensão e queda de Saul
          </H3>
          <P className="">
            O relato bíblico sobre a ascensão do rei Saul expressa a rejeição a
            Deus por parte do povo de Israel (1Sm 8.7). O ato de solicitarem um
            rei humano demonstrou que o povo havia rejeitado o reinado de Deus
            (reino teocrático) sobre eles.
          </P>
          <P className="">
            O povo de Israel estava olhando para os reinos à sua volta e
            desejava ser como eles, mesmo que para isso fosse necessário
            rejeitar a liderança divina. O Senhor ordena que Samuel exponha qual
            seria o costume do rei que haveria de reinar sobre eles, mesmo assim
            o povo aceita (1Sm 8.9-22), pois estava ansioso por seguir o padrão
            mundano contemporâneo. Nesse cenário surge Saul, um homem de grande
            formosura, bem-apessoado e que se destacava entre a multidão (1Sm
            9.2). Ele foi ungido rei por Samuel e recebeu o Espírito do Senhor
            (1Sm 10.1,6). O começo de seu reinado foi marcado por demonstrações
            de liderança e habilidade durante as campanhas militares.
          </P>
          <P className="">
            Entretanto, os erros de Saul foram suficientes para derrubá-lo do
            trono. A narrativa bíblica apresenta alguns desses erros: em Gilgal
            tenta usurpar o ofício sacerdotal de Samuel (1Sm 13,8-14);
            desobedeceu a ordem do Senhor para destruir plenamente os
            amalequitas (1Sm 15); e em En-Dor, Saul busca ajuda de uma
            feiticeira (1Sm 28.1-19). Enfim, numa batalha contra os filisteus, o
            rei Saul morreu lançando-se sobre sua própria espada (1Sm 31.4),
            colocando fim a um reinado de quarenta anos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-a-uncao-sobre-davi">A unção sobre Davi</H3>
          <P className="">
            O filho de Jessé, da tribo de Judá, Davi, foi ungido pelo profeta
            Samuel como o segundo rei de Israel. Isso aconteceu após a
            desobediência de Saul em destruir completamente os amalequitas. A
            unção sobre Davi é marcada por um relato bíblico interessante.
            Samuel é orientado por Deus para encher um chifre de azeite e seguir
            até Belém ao encontro de Jessé, pois de um dos seus filhos o Senhor
            levantaria um novo rei (1Sm 16.1).
          </P>
          <P className="">
            Ao chegar em Belém, Samuel convida Jessé e seus filhos para
            sacrificar ao Senhor (1Sm 16.5), neste momento os filhos de Jessé
            começam a entrar. Samuel deixa o olhar humano guiá-lo, porquanto ao
            ver Eliabe, o filho mais velho de Jessé, logo imagina estar diante
            do futuro rei (1Sm 16.6). Contudo, Deus alerta a Samuel que aquele
            não era o novo rei e que ele não atentasse para aparência, visto que
            Deus olha para o coração (1Sm 16.7). Em seguida, passam-se todos os
            demais filhos de Jessé e nenhum deles é escolhido por Deus, todavia,
            ainda falta um, Davi (1Sm 16.11).
          </P>
          <P className="">
            O “menor” é escolhido pelo Senhor, assim Samuel unge a Davi e,
            daquele dia em diante, o Espírito do Senhor se apoderou do novo
            ungido (1Sm 16.13). Davi não foi, de pronto, reconhecido pelo povo
            como novo rei de Israel, mas passou por vários episódios antes de se
            tornar definitivamente rei. Davi viveu desde vitórias memoráveis,
            como o êxito sobre o gigante Golias (1Sm 17.23-58), até momentos de
            fuga, quando escapa de Saul e se abriga em Ramá (1Sm 19.18-24).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-a-ascensao-de-davi">A ascensão de Davi</H3>
          <P className="">
            Antes de se sentar definitivamente no trono de Israel, Davi se
            tornou rei da tribo de Judá em Hebrom (2Sm 2.4), nessa posição
            começou a fazer importantes alianças estratégicas. Transcorrido
            aproximadamente sete anos, Davi se torna rei sobre todas as tribos
            de Israel (2Sm 5.1,3). Ele foi um rei que convergiu a adoração a
            Deus em Jerusalém e estabeleceu um poderoso e preponderante
            exército.
          </P>
          <P className="">
            O texto bíblico expõe que Davi teve várias esposas e,
            consequentemente, foi pai de muitos filhos. Dentre suas esposas, o
            capítulo 11, do segundo livro de Samuel, destaca a sua esposa
            Bate-Seba e relata o pecado de adultério e homicídio praticados pelo
            rei Davi. Diante de seu pecado, o rei foi arduamente repreendido
            pelo profeta Natã, que expõe o pecado que até então estava encoberto
            (2Sm 12.1-12). O rei se arrepende de seu pecado e é perdoado por
            Deus (2Sm 12.13). As consequências de seu ato pecaminoso afetaram
            tanto ele quanto Bate-Seba e sua família. Davi ouviu que: “Agora,
            pois, a espada jamais se afastará da sua casa, porque você me
            desprezou e tomou a mulher de Urias, o heteu, para ser sua mulher."
            (2Sm 12.10).
          </P>
          <P className="">
            O Salmo 51, que tem como escritor o rei Davi, demonstra a sua
            confissão detalhada com relação ao pecado com Bate-Seba, na qual
            reconhece sua culpa. Ainda, destaca que tem certeza do perdão de
            Deus e que sua vida e alegria foram restauradas (Sl 51.12).
          </P>
          <P className="">
            Davi reinou quarenta anos sobre Israel e então morreu (1Rs 2.11)
            deixando como sucessor o seu filho Salomão (1Rs 2.12). O rei Davi
            era sensível à voz de Deus e possuía um coração plenamente voltado
            ao Senhor. Isso mostra que todo e qualquer cristão é suscetível ao
            erro, mas também é capaz de se arrepender e encontrar porto seguro
            em Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-o-reinado-de-salomao">O reinado de Salomão</H3>
          <P className="">
            Salomão foi o sucessor do rei Davi. Era seu filho com Bate-Seba.
            Salomão foi o terceiro rei de Israel e destacou-se por conta da
            sabedoria advinda de Deus. Antes de morrer, Davi aconselhou a
            Salomão a guardar as ordenanças do Senhor e praticá-las, pois,
            fazendo assim prosperaria em tudo que fizesse (1Rs 2.1-9; vide Js
            1.8). O rei Salomão reinou em Israel por cerca de quarenta anos (1Rs
            11.42), no começo do seu reinado enfrentou algumas oposições,
            entretanto, com a morte ou banimento de seus opositores passou a
            reinar sem grandes dificuldades.
          </P>
          <P className="">
            O rei Davi desejou edificar um Templo ao Senhor (2Sm 7), mas essa
            tarefa Deus outorgou a Salomão, pois com a sabedoria adquirida de
            Deus, construiu o Templo no Monte Moriá, em Jerusalém, para abrigar
            a Arca da Aliança. A inauguração do Templo foi marcada por uma
            grande celebração (1Rs 8-9). Vale destacar o momento estupendo em
            que a Glória do Senhor enche o templo a ponto dos sacerdotes não
            poderem entrar (2Cr 7.1-3).
          </P>
          <P className="">
            O sonho que Salomão teve, quando Deus lhe pergunta o que mais
            desejava receber (1Rs 3.5–9), marca uma das mais evidentes
            características de Salomão, isto é, a sabedoria. Naquele momento o
            rei pede ao Senhor sabedoria para julgar o povo em retidão. O pedido
            é atendido e Deus ainda lhe concede mais adicionando riquezas,
            glória e longevidade, caso andasse nos caminhos do Senhor.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-6-conclusao">Conclusão</H3>
          <P className="">
            A presente lição apresentou a transição do reino teocrático para o
            reino monárquico em Israel, expondo o desejo desenfreado do povo em
            viver nos mesmos moldes daqueles que o cercavam. seguidamente, foram
            apresentados os três primeiros monarcas de Israel que, entre erros e
            acertos, guiaram o povo em relativa unidade. A monarquia unida
            permanece tão somente até o reinado de Salomão, já que o Reino de
            Israel foi dividido em duas partes, sendo este objeto de estudo das
            próximas lições.
          </P>
          <P className="">
            É tendência humana julgar o outro apenas pelas aparências externas.
            Não obstante, o Senhor tem poder e capacidade de ver o íntimo de uma
            pessoa. Verificamos isso quando o sacerdote Samuel fica
            impressionado com Eliabe, irmão de Davi (1Sm 16.6), mas Deus alerta
            Samuel, pois Ele conhece o íntimo de cada pessoa. Assim, é
            necessário labutar diariamente para que, tanto o externo como o
            interno sejam motivo de louvor a Deus.
          </P>
          <P className="">
            Por fim, sobreleva-se que o reino eterno prometido a Davi não foi
            extinto. A aliança davídica está em pleno cumprimento em Jesus
            Cristo, o Rei Eterno (2Pe 1.11).
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-7">Lição 7 – O Reino dividido</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Demonstrar que a monarquia requerida pelo povo de Israel foi
            dividida, expondo características dos Reinos do Norte e do Sul.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-introducao">Introdução</H3>
          <P className="">
            No reinado de Davi e Salomão, foram escritos praticamente todos os
            livros poéticos (Salmos, Provérbios, Eclesiastes e Cantares). Apesar
            dos grandes feitos, Salomão deixou um reino desunido e
            espiritualmente fraco. Seu coração estava dividido entre a adoração
            a Deus e o culto aos ídolos pagãos. O rei devia manter a unidade do
            reino sendo fiel a Deus. Salomão foi infiel. Também impôs uma carga
            pesada de impostos ao povo, submetendo-o a trabalhos forçados em
            seus projetos de construção. Deus julgou a infidelidade do rei,
            avisando que Israel seria dividido (1Reis 11.11-13,26-40).
          </P>
          <P className="">
            Após a morte de Salomão, seu filho assumiu o trono, em 930 a.C. O
            povo pediu ao novo rei a redução de impostos, porém, Roboão os
            ameaçou com mais tributos e exploração. Por isso, Israel se dividiu:
            com Jeroboão, ex-oficial de Salomão e líder da rebelião popular,
            ficaram 10 tribos, o Reino do Norte; com Roboão, neto de Davi,
            ficaram as tribos de Judá e Benjamim, formando o Reino do Sul.
          </P>
          <P className="">
            O poderoso reino de Israel reduziu-se a dois reinos fracos e, por
            vezes, rivais entre si. Conheça a história do Reino dividido e
            perceba que a fidelidade a Deus atrai bençãos, enquanto a
            infidelidade atrai maldições. Observe que Ele é paciente e adverte a
            Seus filhos como um Pai amoroso, pronto a dar o melhor àqueles que O
            obedecem de coração. Creia que Deus levanta profetas para anunciar
            Sua Palavra, cumprindo-a no tempo determinado. Bom estudo!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-o-reino-do-norte-idolatria-corrupcao-e-julgamento">
            O reino do norte: idolatria, corrupção e julgamento
          </H3>
          <P className="">
            O primeiro rei de Israel (como foi chamado o Reino do Norte) foi
            Jeroboão. No norte do país, ele construiu dois altares com
            esculturas de bezerros de ouro como centros de adoração, por medo de
            que o povo desistisse da rebelião se continuasse indo adorar no
            templo, em Jerusalém. Jeroboão nomeou sacerdotes fora da tribo de
            Levi e mudou festas e leis religiosas, desprezando as ordenanças
            divinas. Este ato do rei fez o povo desviar-se, inaugurando um tempo
            de idolatria e corrupção. Embora maior e mais poderoso que o Reino
            do Sul, o Reino do Norte era menos estável. Israel teve três
            capitais: Siquém, Tirza e Samaria, bem como dezenove reis, de nove
            dinastias.
          </P>
          <P className="">
            O parâmetro de conduta dos reis para julgamento divino em 1 e 2 Reis
            é a idolatria de Jeroboão. Um dos reis mais conhecidos do período é
            Acabe, cuja esposa (Jezabel) trabalhou para implantar o culto a Baal
            como religião oficial de Israel. Ela ordenou a morte dos profetas e
            assumiu a frente dos assuntos religiosos do reino. Israel foi se
            corrompendo nos aspectos político, social e religioso.
          </P>
          <P className="">
            O declínio do Reino do Norte se deu pelo recorrente descaso e
            desobediência a Deus e às Suas leis e advertências. Após inúmeros
            avisos, o juízo de Deus veio por meio dos assírios. Este povo bélico
            e cruel foi o instrumento usado por Deus para punir Israel. O Senhor
            alertou o povo por meio de Seus profetas, usados para comunicar Sua
            justiça.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-profetas-em-acao-o-que-deus-fala-ele-cumpre">
            Profetas em ação: o que deus fala, ele cumpre
          </H3>
          <P className="">
            Deus levantou vários profetas no Antigo Testamento. Não sabemos os
            nomes de todos (1Reis 13.1-6). Dirigiram-se a reis e os repreenderam
            por seus pecados, como Elias e Eliseu, que atuaram nos reinados de
            Acabe e Acazias. Milagres e confrontos são marcas deles. Há
            “profetas escritores”, cujas profecias constam na Bíblia. São eles:
            Jonas, que profetizou durante o reinado de Jeoás; Amós, profeta
            quando Jeroboão II e Zacarias eram reis; e Oseias, cujo ministério
            se deu de Jeroboão II a Oseias (rei com o mesmo nome do profeta). Os
            principais são Amós e Oseias.
          </P>
          <P className="">
            O profeta Amós denunciou a exploração dos humildes, a injustiça, a
            perversão e a hipocrisia de Israel (Amós 2.6-7; 6.1-6; 8.4-6).Suas
            profecias sobre o cativeiro (Amós 3.13-15; 5.27; 6.7; 9.1,4,8) se
            cumpriram com a queda de Samaria, em 722 a.C. Profecias contra
            nações (Amós 1.3-15; 2.1-5) também se cumpriram.
          </P>
          <P className="">
            Os povos foram derrotados/destruídos e, no caso de Judá, um
            remanescente ficou (Amós 9.11). Já Oseias profetizou contra o
            adultério espiritual de Israel e, através dele, Deus mostrou ao povo
            seus erros. Oseias se casou com Gômer (prostituta e esposa infiel),
            obedecendo a Deus e, por meio século de ministério, ele encenou a
            tríplice mensagem: Deus abomina os pecados do povo, o julgamento é
            certo, mas o amor leal de Deus permanece. As profecias de Oseias se
            cumpriram (Oseias 9.3,9,11,16-17; 10.5-8; 13.16). Deus cumpre o que
            diz!
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-o-reino-do-sul-altos-e-baixos-diante-de-deus">
            O reino do sul: altos e baixos diante de Deus
          </H3>
          <P className="">
            O neto de Davi, Roboão, reagiu à reivindicação do povo de modo
            intransigente. Seguiu o conselho dos jovens (1Reis 12.10,14), mas
            fugiu para Jerusalém após o encarregado dos tributos ser morto por
            israelitas revoltados com o novo rei. Roboão convocou Judá e
            Benjamim para retomarem o controle do reino. Mas, Deus falou que
            estava no controle e ordenou que voltassem para casa. Roboão e seu
            exército obedeceram. O Reino do Sul, chamado de Judá, permaneceu
            estável, mantendo a dinastia de Davi e a capital em Jerusalém.
          </P>
          <P className="">
            O culto ao Deus de Israel continuou, apesar de a idolatria coexistir
            durante os 354 anos do reino. Dois dos vinte reis foram
            completamente aprovados por Deus: Ezequias e Josias. Seis foram
            elogiados por serem obedientes como Davi e os demais “fizeram o que
            era mau aos olhos do Senhor”.
          </P>
          <P className="">
            Os principais reis são Ezequias, por sua reforma religiosa e pela
            ação de Deus contra o exército da Assíria (2 Reis 18.4,17-35;
            19.32,35) e Josias, que imitou Ezequias ao reestabelecer o culto ao
            Senhor (2 Reis 23.2-3,21-25). Alguns reis incentivaram os judeus à
            idolatria, com destaque para Manassés, filho de Ezequias. Por causa
            de suas abominações e pecados, Deus se irritou a ponto de suscitar
            os babilônicos contra Judá (2 Reis 24.3-4). Em 586 a.C.,
            Nabucodonosor invadiu Jerusalém e levou a população ao exílio. Mas,
            conforme as profecias, o remanescente fiel foi restaurado após o
            cativeiro.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-profetas-em-juda-um-ministerio-necessario">
            Profetas em Judá: um ministério necessário
          </H3>
          <P className="">
            O povo de Judá continuava a adorar a Deus no templo em Jerusalém.
            Mas, por influência de Salomão, admitiu também cultos pagãos (1Reis
            11.5,7; 2Reis 18.4; 23.4-14). Deus levantou Isaías, Miqueias,
            Sofonias, Jeremias e Habacuque como profetas no Reino do Sul antes
            do cativeiro. Durante o exílio, Deus também levantou Daniel e
            Ezequiel e, após o exílio, Ageu, Zacarias e Malaquias. Isaías
            profetizou durante o reinado de Uzias, Jotão, Acaz e Ezequias. Suas
            principais profecias contra Judá e Jerusalém (Isaías 3.8,14; 5.13;
            39.6-7) se cumpriram (2Reis 24.14; 25.8-13).
          </P>
          <P className="">
            Além das profecias sobre Judá, Isaías também profetizou contra
            nações gentias (Isaías 10.12; 13.17-20; 14.31;16.14) e tudo se
            cumpriu (2 Reis 19.35-37). Isaías é conhecido como “profeta
            messiânico” devido às profecias sobre o Messias cumpridas na
            primeira vinda de Cristo e às mileniais. Miqueias profetizou nos
            dias dos reis Jotão, Acaz e Ezequias. Parece que seu ministério
            precedeu as reformas religiosas de Ezequias.
          </P>
          <P className="">
            Ele profetizou o cativeiro (Miqueias 4.10) quando a Babilônia ainda
            estava sob domínio assírio. Destaca- se, ainda, o profeta Jeremias,
            cujo ministério foi simultâneo aos últimos reinados de Judá, a
            partir de 627 a.C., quando Josias era rei. Jeremias foi
            contemporâneo de Sofonias, Habacuque, Daniel e Ezequiel. Foi também
            profeta durante o exílio. O ministério profético foi muito
            necessário a Judá.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-7-conclusao">Conclusão</H3>
          <P className="">
            A infidelidade de Salomão influenciou tanto a divisão do reino
            quanto a decadência espiritual e política de Israel e de Judá. Jesus
            disse que “um reino dividido contra si mesmo não subsistirá” (Mateus
            12.25). As tribos de Israel não se mantiveram unidas, pois, faltou o
            culto conjunto a Deus no templo em Jerusalém e a obediência às leis
            divinas. Por isso, caíram diante das grandes potências da época.
          </P>
          <P className="">
            A sentença pela infidelidade do povo foi consumada com os cativeiros
            assírio e babilônico, respectivamente. No Reino do Norte, foi
            instituída uma forma distorcida de adoração. Esta abriu as portas
            para a alienação religiosa, a corrução, as injustiças e a perversão.
            No Reino do Sul, apesar da adoração oficial a Deus, a idolatria
            paralela irritou ao Senhor.
          </P>
          <P className="">
            Os profetas levantados alertaram aos reis e ao povo, transmitindo as
            palavras do Senhor, advertindo e predizendo o futuro. Em ambos os
            reinos, Deus executou juízo contra os infiéis. O Senhor tem velado
            por Sua palavra para a cumprir (Jeremias 1.12) e nenhuma palavra
            dita por Deus volta vazia, mas cumpre o que Lhe apraz (Isaías
            55.11). Que sigamos o exemplo dos reis obedientes, cuja conduta nos
            inspira a sermos fiéis a Deus, integralmente, a fim de recebermos
            dEle o melhor!
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-8">Lição 8 – Depois da queda, um recomeço</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-objetivo-geral">Objetivo Geral</H3>
          <P className="mt-0">
            Compreender a queda de Israel e de Judá diante dos impérios assírio
            e babilônico, respectivamente, o exílio e o pós-exílio.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-introducao">Introdução</H3>
          <P className="">
            A constituição da monarquia em Israel, em resposta ao pedido do
            povo, trouxe grandes prejuízos para os israelitas, uma vez que, após
            120 anos de monarquia unida, houve uma ruptura espiritual e
            nacional. Durante a monarquia dividida, o povo se afastou de Deus e
            perdeu sua identidade monoteísta. Ao incorporar o culto às
            divindades pagãs, Israel e Judá pecaram contra Deus, cujo amor,
            cuidado e perdão os mantinha fiéis a Ele. Deus advertiu-os por Seus
            profetas, falando contra a idolatria e a corrupção, mas foi
            ignorado. Sendo assim, o juízo de Deus veio sobre as duas nações, em
            tempos distintos, através de grandes potências daquela época: os
            assírios atacaram e conquistaram Israel e os babilônios tomaram
            Judá.
          </P>
          <P className="">
            O Reino do Norte foi levado cativo e desapareceu, disperso pelo
            império assírio. O Reino do Sul, exilado, aprendeu as lições do
            cativeiro e voltou a Jerusalém disposto a servir ao único Deus.
            Neste estudo, você entenderá como surgiram os samaritanos e como se
            deu a reconstrução de Jerusalém, com a percepção dos repatriados da
            necessidade de retomar o verdadeiro culto ao Deus de Israel. Verá
            que Deus remove reis e estabelece reis (Daniel 2.21), a fim de fazer
            cumprir Sua palavra.
          </P>
          <P className="">
            O panorama do Antigo Testamento estará completo ao final desta
            lição. Leia cada versículo indicado aqui. Isto te fará ter uma visão
            ampla da Bíblia e, certamente, produzirá em você estrutura
            espiritual mais sólida e duradoura.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-o-imperio-assirio-e-a-queda-do-reino-do-norte">
            O império assírio e a queda do Reino do Norte
          </H3>
          <P className="">
            Deus usou o império assírio para punir Israel, o Reino do Norte, por
            sua idolatria e afastamento das leis divinas, por sua degradação
            moral e injustiça social. A Assíria foi fundada por Assur,
            descendente de Sem, mas conquistada por Ninrode, que edificou a
            Nínive (Gênesis 10.10-12) e a outras cidades no Planalto de Assur.
          </P>
          <P className="">
            Os assírios eram os mais temidos do Oriente Médio, conhecidos por
            sua tecnologia militar (considerado o primeiro exército organizado
            do mundo) e sua crueldade com os inimigos. A partir do rei
            Tiglate-Pileser III (745-727 a.C.), a Assíria passou a espalhar os
            povos conquistados por outras regiões do império, a fim de
            apagar-lhes a identidade e o nacionalismo.
          </P>
          <P className="">
            Deixava só os mais pobres no país conquistado e trazia colonos de
            outras regiões para repovoar o território. Após derrotar o rei de
            Israel em socorro a Acaz, rei de Judá (2 Reis 15.29;16.7),
            Tiglate-Pileser III levou a maioria das tribos de Israel e as de
            além do Jordão para a Assíria (1 Crônicas 5.26). Samaria, a capital
            do Reino do Norte, foi tomada após três anos de cerco, em 722 a.C.
            (2 Reis 17.5-23). Judá também foi atacada por Senaqueribe, rei da
            Assíria, que tomou várias cidades e cercou Jerusalém. Deus a livrou
            em duas ocasiões (2 Reis 18.17-19.8; Isaías 37.10-38). O império
            assírio caiu conforme as profecias de Naum (Naum 3.1,18,19), quando
            os babilônios e os medos se coligaram para derrotar os assírios em
            612 a.C..
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-o-imperio-babilonico-e-a-queda-do-reino-do-sul">
            O império babilônico e a queda do Reino do Sul
          </H3>
          <P className="">
            O Reino do Sul, à semelhança de Israel, enfrentou o juízo de Deus,
            por sua idolatria e desobediência ao Senhor. Deus suscitou os
            babilônios, que recém haviam conquistado o império assírio, contra
            Judá. Os babilônios foram uma das civilizações que ocuparam a
            Mesopotâmia.
          </P>
          <P className="">
            Após o domínio assírio, derrotado pela coalizão entre medos e
            babilônios, o rei Nabopolasar seguiu expandindo seu império em
            direção ao Egito. Seu filho, Nabucodonozor, era um governante
            estrategista, mas também um rei cruel com quem o contrariava. Ele
            reconstruiu Babilônia em todo o seu esplendor, sendo o principal rei
            dos babilônios, seguido por Hamurabi (que elaborou o famoso código
            de leis, baseado no princípio de talião).
          </P>
          <P className="">
            Os babilônios levavam os povos dominados para a capital do império,
            deixavam os mais pobres nos territórios conquistados e permitiam que
            os cativos mantivessem sua religião e cultura. Em 598 a.C.,
            Nabucodonozor invadiu Judá e levou os tesouros da Casa do Senhor,
            bem como o rei, as demais autoridades, os nobres e os profissionais
            mais destacados, cerca de 10 mil pessoas (2 Reis 24.11- 16). Em 586
            a.C., Jerusalém foi invadida e o templo foi queimado (2 Reis
            25.2-4,8-16). Na invasão de Jerusalém e em mais duas ocasiões, os
            babilônios levaram cativos 4.600 judeus (Jeremias 52.28-30).
            Conforme profecias, a Babilônia caiu diante dos medos (Isaías
            13.17-20; Daniel 5.28,31).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-o-periodo-do-exilio">O período do exílio</H3>
          <P className="">
            O povo de Deus foi feito cativo. Os deportados do Reino do Norte
            nunca voltaram em massa do cativeiro. Foram levados para diferentes
            regiões do império assírio, dispersando-se. Os colonos enviados pelo
            rei da Assíria para repovoar o território de Israel, misturaram-se
            aos mais pobres da terra, poucos israelitas que foram deixados ali
            (2 Reis 17.24). Assim, surgiram os samaritanos, povo que adorava ao
            Deus do céu e também aos deuses de seus antepassados (2 Reis
            17.29-33,41). Já os cativos do Reino do Sul, em geral, não foram
            maltratados.
          </P>
          <P className="">
            O Salmo 137 nos mostra o povo chorando por saudade de Jerusalém, não
            por arrependimento; pedindo vingança e não, o perdão. Os profetas
            atuantes neste período foram: Daniel, na corte babilônica; Ezequiel,
            entre os cativos nas proximidades da Babilônia e Jeremias, junto ao
            povo pobre deixado em Jerusalém.
          </P>
          <P className="">
            O cativeiro de Judá durou cerca de 70 anos, conforme profecia
            (Jeremias 25.11-12) e produziu mudanças no caráter nacional dos
            judeus: i) a maioria ficou livre das práticas de idolatria; ii)
            desenvolveram uma fé firme e clara; iii) evitaram alianças com
            outras nações; e iv) de agricultores e criadores de rebanhos,
            tornaram-se comerciantes. Muitos judeus não quiseram voltar à
            Jerusalém, mas permaneceram nas grandes cidades (como Babilônia e
            Susã, por exemplo). Em 536 a.C., Ciro editou o decreto para
            reconstrução de Jerusalém (Esdras 1.2,3).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-o-pos-exilio-a-reconstrucao-de-jerusalem">
            O pós-exílio: a reconstrução de Jerusalém
          </H3>
          <P className="">
            Deus cumpriu a promessa de trazer o povo de Judá de volta à sua
            terra (Jeremias 29.10-14). O primeiro grupo retornou a Jerusalém,
            sob o comando de Sesbazar, príncipe de Judá (Esdras 1.8; 5.14),
            encarregado de trazer de volta os utensílios do Templo. Zorobabel
            foi o responsável pela retomada do culto verdadeiro, tendo
            reedificado o altar do holocausto, sobre o qual passaram a ser
            oferecidos sacrifícios diários, segundo os ritos mosaicos.
          </P>
          <P className="">
            A Festa dos Tabernáculos foi celebrada pelos repatriados, conforme
            determinava a Lei (Esdras 3.2-6). Zorobabel reedificou o Templo,
            apesar das acusações dos samaritanos cujas ações paralisaram por
            mais de uma década a construção. Ele integra a genealogia de Jesus
            (Lucas 3.27).
          </P>
          <P className="">
            O segundo grupo voltou com Esdras, escriba e sacerdote (Esdras
            7.21), cuja função foi avaliar as condições civis e religiosas do
            povo que morava em Jerusalém e nas regiões próximas. Ele fez
            reformas importantes, principalmente em relação aos casamentos
            mistos de judeus com estrangeiras e em relação ao ensino da Lei de
            Deus.
          </P>
          <P className="">
            Neste ínterim, pode ter acontecido a história registrada no livro de
            Ester. O terceiro grupo foi liderado por Neemias, o responsável por
            reconstruir os muros de Jerusalém. Ele foi governador de Judá
            (Neemias 5.14) e um grande líder que, junto com o sacerdote e
            escriba Esdras, realizou reformas religiosas importantes (Neemias
            12.47; 13.10-13,15-19).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-8-conclusao">Conclusão</H3>
          <P className="">
            A história de Israel é fascinante. Desde o seu surgimento como nação
            até o estabelecimento da monarquia, vemos a mão de Deus guiando o
            Seu povo.
          </P>
          <P className="">
            O governo monárquico instituído a pedido do povo de Israel revelou o
            que é ser conduzido por humanos: com falhas e orgulho, o ser humano
            teima em não admitir erros e consertar-se. Isso aconteceu com os
            reinos de Israel e de Judá, pois, tiveram oportunidades, mas
            insistiram em permanecer no pecado, provocando a ira do Senhor. Com
            Seu domínio soberano sobre a humanidade, Deus levantou nações que
            humilharam israelitas e judeus. Cumprindo a Sua palavra, o Eterno
            conservou um remanescente, que pôde voltar a Jerusalém e
            reconstruí-la.
          </P>
          <P className="">
            Que não sejamos como aquele povo, que desperdiçou oportunidades
            preciosas de melhorar, de chegar mais perto de Deus e de ser fiel a
            Ele! “Aproximem-se de Deus, e ele se aproximará de vocês! Pecadores,
            limpem as mãos, e vocês, que têm a mente dividida, purifiquem o
            coração!” (Tiago 4.8).
          </P>
          <P className="">
            O dia é hoje e a hora é já de nos quebrantarmos debaixo da poderosa
            mão do Senhor, em obediência a Ele. Que Deus te revista de forças
            espirituais para crescer na graça e no conhecimento de nosso Senhor
            e Salvador Jesus Cristo cada dia mais!
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Editorial */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="editorial">Editorial</H2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <P className="mt-0">
              <span className="font-semibold">Curso:</span> Panorama bíblico do
              Antigo Testamento
            </P>
            <P className="mt-0">
              <span className="font-semibold">Ano:</span> 2022
            </P>
            <P className="mt-0">
              <span className="font-semibold">1ª Edição</span>
            </P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Coordenação Editorial:</P>
            <P className="mt-0">Pb Braitner Lobato</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Conselho Editorial:</P>
            <P className="mt-0">Pr. Sinval Júlio de Souza</P>
            <P className="mt-0">Pr Lúcio Andres</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Teológica:</P>
            <P className="mt-0">Pr Lúcio Andres</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão Textual:</P>
            <P className="mt-0">Pr Lúcio Andres</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Pb Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentaristas:</P>
            <P className="mt-0">
              Pr Marcelo Mantovani – Lições 1 e 2
            </P>
            <P className="mt-0">
              Pr Leverson Eustaquio – Lições 3 e 4
            </P>
            <P className="mt-0">Wagner Monteiro – Lições 5 e 6</P>
            <P className="mt-0">Elcivanni Santos – Lições 7 e 8</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
