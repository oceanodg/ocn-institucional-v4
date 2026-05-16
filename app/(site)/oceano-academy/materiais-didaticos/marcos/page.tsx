import {
  FileImage,
  FileText,
  GraduationCap,
  Hash,
  SquarePlay,
  Workflow,
} from "lucide-react";
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
      "text/markdown": "/oceano-academy/materiais-didaticos/marcos.md",
    },
  },
};

export default function CursoMarcos() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton tab="novo" />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Os Evangelhos: Marcos</H1>
          <P className="mt-0">
            O evangelho de ação que apresenta Jesus como servo poderoso, repleto
            de milagres e autoridade divina.
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
                  <LinkSmall href="https://drive.google.com/file/d/1Fv97OYLq0BnH7CtliODGiUxnIMwNsF4V/view?usp=sharing">
                    <FileText className="size-4" />
                    PDF
                  </LinkSmall>
                  <LinkSmall href="/oceano-academy/materiais-didaticos/marcos.md">
                    <Hash className="size-4" />
                    MD
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Plano de Estudo
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1Rj72FtEo74vsVNNNT0JufwSINVRgq4lU/view?usp=sharing">
                    <FileText className="size-4" />
                    Plano de Estudo
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Mapa Mental
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://whimsical.com/ocn7/ocn-escola-biblica-GgrjZLEXpFtuzvGrxYkM7b">
                    <Workflow className="size-4" />
                    Mapa Mental
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Vídeo Recomendado
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://www.youtube.com/watch?v=EOT1Mo_YERM">
                    <SquarePlay className="size-4" />
                    Marcos
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Infográficos
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1ai8J2WzrszbMvj3WdgeAbPAvk8gXYeqE/view?usp=sharing">
                    <FileImage className="size-4" />
                    L1: Boas-Novas
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/12Hvh06QnSdnxIJF_IAsHRdRSf7YQi7ns/view?usp=sharing">
                    <FileImage className="size-4" />
                    L2: Milagres
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1BJGqvPLkh_DzoL5fBTxEdFAZrODbkRoT/view?usp=sharing">
                    <FileImage className="size-4" />
                    L3: Autoridade
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1PMj29TDDrNvaVTDWivOjovVNcRPuX5S0/view?usp=sharing">
                    <FileImage className="size-4" />
                    L4: Discipulado
                  </LinkSmall>
                </TableCellLinksContainer>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border font-semibold">
                Perguntas e Respostas (FAQ)
              </TableCell>
              <TableCell>
                <TableCellLinksContainer>
                  <LinkSmall href="https://drive.google.com/file/d/1rScBoXhM6Z66RNFwqYF7p0lEZvkzJppx/view?usp=sharing">
                    <FileText className="size-4" />
                    L1: Boas-Novas
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/173UwhBRn66c_pdVMuYU4P8NRVHflFhiq/view?usp=sharing">
                    <FileText className="size-4" />
                    L2: Milagres
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/14KQFY403aNdSjiuOsF7k9PJM1qPT_7AO/view?usp=sharing">
                    <FileText className="size-4" />
                    L3: Autoridade
                  </LinkSmall>
                  <LinkSmall href="https://drive.google.com/file/d/1s_fMhBHXmyggLr9PLu-RUA4NCvTYI9If/view?usp=sharing">
                    <FileText className="size-4" />
                    L4: Discipulado
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

      {/* Sumário */}
      <Container className="mb-10 sm:mb-16">
        <H2>Sumário</H2>
        <UL className="mt-0 space-y-2 sm:space-y-2">
          <SummaryLi>
            <a href="#lesson-1">
              Lição 1 – As Boas-Novas do Evangelho de Cristo
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-autor-do-evangelho-de-marcos">
              1. Autor do Evangelho de Marcos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-data-local-e-para-quem-o-evangelho-foi-escrito">
              2. Data, Local e Para Quem o Evangelho Foi Escrito
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-as-principais-caracteristicas-do-evangelho-segundo-marcos">
              3. As Principais Características do Evangelho Segundo Marcos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-a-mensagem-central">4. A Mensagem Central</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-1-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-2">
              Lição 2 – A Natureza dos Milagres no Evangelho de Marcos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-os-milagres-no-evangelho-de-marcos">
              1. Os Milagres no Evangelho de Marcos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-os-milagres-de-natureza">
              2. Os Milagres de Natureza
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-os-milagres-de-libertacao">
              3. Os Milagres de Libertação
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-os-milagres-de-cura">4. Os Milagres de Cura</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-2-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-3">Lição 3 – A Autoridade de Jesus em Ação</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-importancia-da-fe-na-realizacao-de-milagres">
              1. A Importância da Fé na Realização de Milagres
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-autoridade-de-jesus-sobre-as-doencas-e-a-morte">
              2. A Autoridade de Jesus Sobre as Doenças e a Morte
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-reacao-das-pessoas-diante-dos-milagres">
              3. A Reação das Pessoas Diante dos Milagres
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-a-demonstracao-do-reino-de-deus-por-meio-da-pregacao-de-jesus">
              4. A Demonstração do Reino de Deus por Meio da Pregação de Jesus
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-3-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#lesson-4">Lição 4 – O Chamado ao Discipulado de Jesus</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-objetivo-geral">Objetivo Geral</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-introducao">Introdução</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-a-eleicao-dos-doze">1. A Eleição dos Doze</a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-discipulado-o-mais-fascinante-projeto-de-vida">
              2. Discipulado: O Mais Fascinante Projeto de Vida
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-servir-de-cristo-e-o-desejo-de-grandeza-dos-discipulos">
              3. O Servir de Cristo e o Desejo de Grandeza dos Discípulos
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-o-chamado-a-participacao-nos-milagres">
              4. O Chamado à Participação nos Milagres
            </a>
          </SummaryLi>
          <SummaryLi subList>
            <a href="#lesson-4-conclusao">Conclusão</a>
          </SummaryLi>

          <SummaryLi>
            <a href="#references">Referências Bibliográficas</a>
          </SummaryLi>
          <SummaryLi>
            <a href="#editorial">Editorial</a>
          </SummaryLi>
        </UL>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 1 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-1">Lição 1 – As Boas-Novas do Evangelho de Cristo</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-objetivo-geral">Objetivo Geral</H3>
          <P className="">
            Ensinar ao leitor sobre as particularidades do livro de Marcos, suas
            características, seu autor, bem como entender a mensagem central
            desse livro.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-introducao">Introdução</H3>
          <P className="">
            O Livro de Marcos é um dos evangelhos sinóticos. O termo sinótico
            vem de duas palavras gregas, cujo significado é “ver conjuntamente”.
            Dessa forma, Mateus, Marcos e Lucas tratam basicamente dos mesmos
            aspectos da vida e ministério de Cristo. Dos evangelhos sinóticos,
            Marcos é o evangelho mais curto da Bíblia.
          </P>
          <P className="">
            Segundo Darrell Bock (2006), o Evangelho de Marcos é geralmente
            considerado o primeiro evangelho que foi escrito, ainda que esse
            fato não tenha um consenso unânime, a maioria dos estudiosos crê que
            Marcos foi escrito antes dos outros. Por isso, William Barclay
            (2009) o considerava o livro mais importante do mundo, já que serviu
            de fonte para os outros evangelhos.
          </P>
          <P className="">
            Contudo, fica a pergunta, por qual motivo quatro evangelhos? Temos
            quatro, pois cada um foi escrito a um público diferente, vejamos:
            Mateus foi escrito para os judeus e apresentou Jesus como rei, já
            Marcos escreveu para os romanos, povo guerreiro, e apresentou Jesus
            como servo, enquanto Lucas, ele escreveu para os gregos e mostrou
            Jesus como o homem perfeito, por fim, temos João que escreveu um
            evangelho universal e apresentou Jesus como Deus, o verbo encarnado.
            Acrescente-se que, o evangelho de Marcos fornece uma breve narrativa
            de três anos da campanha conduzida pelo “comandante” da salvação da
            humanidade, visando à libertação das almas e à derrota de Satanás, e
            completada pelas obras, os sofrimentos, a morte, a ressurreição e o
            triunfo final de Cristo. Assim, os evangelhos foram destinados a
            pessoas diferentes e com propósitos variados.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-autor-do-evangelho-de-marcos">
            1. Autor do Evangelho de Marcos
          </H3>
          <P className="">
            O Livro de Marcos foi escrito por um homem chamado João Marcos, que
            acompanhou Paulo, Barnabé e Pedro em suas missões. Diante disso,
            duas coisas nos chamam atenção: a primeira é a identidade de Marcos
            descrita nas Escrituras, pois seu nome completo era João Marcos,
            sendo que João era seu nome hebraico e Marcos seu nome romano. A
            segunda coisa que nos chama a atenção é que Marcos é considerado o
            autor do Evangelho que leva o seu nome. Embora ele não tenha sido um
            discípulo de Cristo, ele presenciou muitos fatos da sua vida, uma
            vez que morava em Jerusalém e sua casa se tornou um ponto de
            encontro da igreja. Logo, Marcos não foi discípulo de Jesus, mas de
            Pedro. Ademais, temos várias informações importantes sobre esse
            personagem nas Escrituras.
          </P>
          <P className="">
            Marcos era filho de Maria, mulher de Jerusalém, cuja casa estava
            aberta para os primeiros cristãos (At 12.12). Isso significa que
            João Marcos procedia de uma família de muitos bens materiais e tinha
            familiaridade com a Igreja.
          </P>
          <P className="">
            João Marcos acompanhou Paulo e Barnabé em sua primeira viagem
            missionária. A contemplação dos perigos que ameaçavam esse pequeno
            grupo ao viajar pelas regiões desconhecidas, parece tê-lo preocupado
            de tal maneira que voltou a Jerusalém (At 13.13). Diante desse fato,
            mais tarde, a proposta de Barnabé de levá-lo consigo na segunda
            viagem missionária provocou uma contenda entre Barnabé e Paulo.
            Assim, o apóstolo julgou melhor não levar com eles um “desertor”.
            Porém, Barnabé, que era primo de Marcos, achava que ele deveria ter
            a oportunidade de se redimir e, assim, separou-se de Paulo e levou
            Marcos consigo para Chipre (At 15.36-41). João Marcos justificou a
            confiança de Barnabé, pois relatos posteriores demonstram que foi
            bem-sucedido no ministério. Isso fica claro quando Pedro o mencionou
            favoravelmente (1 Pe 5.13), e Paulo mudou sua opinião a respeito
            dele, pois Marcos foi chamado por ele para ajuda-lo no final da sua
            vida, a ponto de escrever: “Traga Marcos com você, porque ele me é
            útil para o ministério” (2 Tm 4:11). Isso nos prova a mudança de
            conduta e o conceito de Paulo acerca de Marcos.
          </P>
          <P className="">
            Além disso, o testemunho abundante dos pais da Igreja torna bastante
            claro que Marcos acompanhou Pedro a Roma como seu intérprete e que
            compilou esse evangelho aproveitando as pregações de Pedro. Seu nome
            latino – Marcos – parece indicar que foi educado nos círculos
            romanos. Esses dados o tornam adequado para escrever um evangelho
            aos romanos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-data-local-e-para-quem-o-evangelho-foi-escrito">
            2. Data, Local e Para Quem o Evangelho Foi Escrito
          </H3>
          <P className="">
            Como dito antes, o evangelho de Marcos foi o primeiro a ser escrito.
            Não existe um consenso unânime acerca da data da sua redação;
            todavia, ele deve ter sido escrito entre 55 e 70 d.C., ou seja,
            antes da destruição de Jerusalém no ano 70 d.C., uma vez que ele não
            faz qualquer menção desse fato predito por Jesus. Jerusalém foi
            destruída pelo exército romano sob a liderança de Tito, depois de
            143 dias de cerco. Durante essa batalha, 600 mil judeus foram mortos
            e milhares levados cativos.
          </P>
          <P className="">
            Irineu e outros pais da igreja defenderam a tese de que Marcos foi
            escrito depois do martírio de Pedro e Paulo. Contudo, essa posição
            contraria a tese da maioria dos estudiosos que afirmam que Marcos
            foi o primeiro evangelho escrito, sendo a fonte primária dos demais.
          </P>
          <P className="">
            O consenso entre os estudiosos é que Marcos foi escrito de Roma para
            os cristãos que viviam em Roma, pois Marcos está presente com Paulo
            em sua primeira prisão e é chamado para estar com ele em sua segunda
            prisão. Nesse tempo, Roma era a maior cidade do mundo, com mais de
            um milhão de habitantes, e Nero era o imperador. Nero começou a
            reinar em 54 d.C., com a idade de 16 anos. Os primeiros anos do seu
            reinado foram de relativa paz e, por isso, por volta do ano 60 d.C.,
            Paulo apelou para ser julgado em Roma (At 25. 10,11).
          </P>
          <P className="">
            Para os estudiosos, o relato de Marcos foi redigido para satisfazer
            o pedido urgente do povo de Roma por um resumo dos ensinos de Pedro.
            As evidências podem ser destacadas a seguir: em primeiro lugar,
            Marcos enfatiza mais as obras de Cristo que seus ensinos, a ênfase
            nesse evangelho é sobre atividade, pois os romanos estavam mais
            interessados em ação que em palavras, por isso Marcos descreve mais
            os milagres de Cristo que seus ensinos; em segundo lugar, Marcos
            apresenta Jesus como servo, por esta causa o Evangelho de Marcos não
            se inicia com genealogia, uma vez que os romanos não estavam
            interessados em genealogia, mas em ação; em terceiro lugar, Marcos
            se detém em explicar os termos judaicos aos seus leitores; quando
            Jesus ressuscitou a filha de Jairo, tomou-a pela mão e lhe disse:
            “Talita cume”, que quer dizer: “Menina eu te mando, levanta-te” (Mc
            5.21); em quarto lugar, Marcos preocupou-se em explicar os costumes
            judaicos para seus leitores (Mc 7.3,4; 7.11; 14.12); em quinto
            lugar, Marcos usou várias palavras latinas, isso pode ser constatado
            observando alguns textos (Mc 5.9; 12.15); em sexto lugar, Marcos foi
            o evangelista que menos citou o Antigo Testamento, por exemplo, não
            cita o termo “lei”; e por último, Marcos usou a contagem de tempo
            romano, como vimos em Mc 6.48. Logo, essas evidências nos indicam
            que Marcos escreveu esse evangelho para os romanos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-as-principais-caracteristicas-do-evangelho-segundo-marcos">
            3. As Principais Características do Evangelho Segundo Marcos
          </H3>
          <P className="">
            Várias peculiaridades surpreendentes da versão de Marcos tornam-na
            única entre os Evangelhos. O estilo de escrever foi descrito como
            vigoroso e dramático. Como um Evangelho vigoroso, Marcos descreve os
            eventos da vida de Jesus, de modo sucinto e vívido, com a perícia
            pitoresca de um gênio literário. Um realismo vivo caracteriza tanto
            o estilo de Marcos como o seu relato não rebuscado dos fatos. Além
            disso, os acontecimentos são descritos sem alteração ou
            interpretação extensiva, e sua apresentação é marcada por uma
            qualidade objetiva encontrada nos relatórios de testemunhas
            oculares, ou seja, Marcos fala diretamente aos seus leitores, usando
            perguntas retóricas que os próprios leitores gostariam de fazer a si
            mesmos, tais como: “Mas quem é este que até o vento e o mar lhe
            obedecem?” (Mc 4.41). Ainda podemos sentir, em qualquer parte do
            texto, um vigor e tom de urgência. Acrescente-se que, a palavra
            característica deste Evangelho de ação é euthys, que ocorre 41 vezes
            e é traduzida nas várias versões como “diretamente”,
            “imediatamente”, “em seguida”, e “logo”.
          </P>
          <P className="">
            Outras características importantes distinguem o Evangelho de Marcos:
          </P>
          <P className="">
            Sendo um Evangelho de ação, ele enfatiza mais aquilo que Jesus fez,
            do que suas palavras. Por isso, Marcos registrar 18 milagres de
            Jesus, mas somente quatro das suas parábolas. Jesus é apresentado
            como servo que está sempre em atividade. Ele descreve Cristo,
            ocupado, deslocando-se de um lugar para outro, curando, libertando,
            pregando, e ensinando as pessoas;
          </P>
          <P className="">
            O livro é totalmente kerigmático em sua ênfase, ou seja, o livro
            começa focando o cerne da sua mensagem: “Princípio do evangelho de
            Jesus Cristo, Filho de Deus”(1.1). Jesus apresenta-se nesse
            evangelho como pregador, proclamador, por essa mensagem deve-se dar
            a vida, ela deve ser pregada ao mundo inteiro (Mc 13.10; 14.9;
            16.15);
          </P>
          <P className="">
            Podemos observar ainda que Marcos enfatiza a popularidade do
            ministério de Jesus, porque quando Jesus ensinava e por onde andava,
            as multidões se reuniam ao seu redor (Mc 1.33, 45), enfatiza ainda a
            identidade de Cristo, por exemplo, quando o Pai lhe disse: “Tu és
            meu filho amado” (Mc 1.11; 9.7);
          </P>
          <P className="">
            Jesus disse ao povo, aos discípulos, aos líderes religiosos e aos
            opositores que ele era o Filho de Deus. Ele demonstrou seu poder
            para perdoar, curar, libertar e deter as forças da natureza. Ele
            provou ser o Filho de Deus rompendo os grilhões da morte e saindo da
            sepultura;
          </P>
          <P className="">
            O autor apresenta Jesus como aquele que tem poder para operar
            milagres, uma vez que ressalta mais os milagres de Cristo do que
            seus sermões. Em cada capítulo do evangelho, até seu ministério
            final em Jerusalém, há registro de pelo menos um milagre;
          </P>
          <P className="">
            Por fim, Marcos enfatiza o sofrimento de Cristo, porque nenhum outro
            evangelho deu tanta ênfase à paixão de Cristo.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-a-mensagem-central">4. A Mensagem Central</H3>
          <P className="">
            O primeiro versículo desse evangelho é tanto o título do livro
            quanto a síntese do seu conteúdo. Alguns comentaristas como William
            Hendriksen relaciona a palavra “princípio” com a atuação de João
            Batista nos versículos seguintes, mas a melhor compreensão é que
            Marcos está introduzindo o conteúdo de todo o evangelho.
          </P>
          <P className="">A Bíblia menciona três começos, vejamos:</P>
          <P className="">
            Primeiro, no princípio era o verbo (Jo 1.1) – esse princípio está
            antes do tempo, no bojo da eternidade. Ele não pode ser datado.
          </P>
          <P className="">
            Segundo, no princípio criou Deus os céus e a terra (Gn 1.1) – esse
            começo é quando nos movemos da eternidade para o tempo. Nenhum
            estudioso conseguiu precisamente datar esse princípio, embora ele
            esteja dentro do tempo.
          </P>
          <P className="">
            Terceiro, princípio do evangelho de Jesus Cristo, Filho de Deus (Mc
            1.1) – esse princípio começa quando Jesus Cristo se fez carne. Jesus
            Cristo é o evangelho. Esse princípio pode ser datado. Marcos fala do
            princípio do evangelho, porque o evangelho estende-se à obra de
            Cristo por meio do seu Espírito e sua igreja, conforme o ensino de
            Atos 1.1.
          </P>
          <P className="">
            Porém, a parte mais importante do evangelho não é o que nós devemos
            fazer, mas o que Deus fez por nós em Cristo. O evangelho não é
            discussão nem debate, mas uma proclamação, ele está centrado na
            pessoa de Jesus Cristo. Logo, o conteúdo do evangelho é Jesus
            Cristo: sua vida, obra, morte, ressurreição, governo e segunda
            vinda. Ademais, como Marcos escreveu seu evangelho para os romanos,
            que davam grande importância à concisão, vai direto ao assunto, e já
            no princípio do versículo destaca o título pleno do Senhor, que
            abarca sua humanidade, sua missão redentora e sua divindade. Ele é
            plenamente homem (Jesus). Ele é o ungido de Deus (Cristo). Ele é
            plenamente divino (Filho de Deus).
          </P>
          <P className="">
            Finalmente, Marcos iniciou sua mensagem, revelando-nos a essência do
            evangelho. Sem essa doutrina não teremos nada sólido debaixo dos
            nossos pés, pois nossos corações são fracos e são muitos os nossos
            pecados. Assim, precisamos de um redentor que seja capaz de salvar
            completamente e libertar- nos da ira vindoura. Nós temos esse
            Salvador em Jesus Cristo, Ele é o Deus forte (Is 9.6).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-1-conclusao">Conclusão</H3>
          <P className="">
            Por tudo que estudamos até aqui, podemos concluir que o Evangelho de
            Marcos é único. Ele não se trata de uma biografia de Jesus como as
            descritas nos livros de Mateus e Lucas, mas relata as obras de
            Cristo e tudo o que Ele fez, apresentando Jesus como o Rei Salvador,
            nosso redentor. Aquele que venceu os demônios, a enfermidade e a
            morte. Sua ênfase nas obras poderosas e miraculosas de Cristo torna
            esse livro repleto de ação, expressivo e muito atraente.
          </P>
          <P className="">
            Como vimos, ainda, Marcos é o evangelho de ação. Nele Jesus é
            apresentado como um servo constantemente em atividade, sempre
            ocupado, deslocando-se de um lugar para outro, curando, libertando,
            pregando e ensinando às pessoas. Marcos enfatiza mais as obras de
            Cristo que suas palavras. Aprendemos que, a parte mais importante do
            evangelho não é o que devemos fazer, mas o que Deus fez por nós em
            Cristo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 2 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-2">
          Lição 2 – A Natureza dos Milagres no Evangelho de Marcos
        </H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-objetivo-geral">Objetivo Geral</H3>
          <P className="">
            Abordar os primeiros milagres de Jesus identificados no Evangelho de
            Marcos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-introducao">Introdução</H3>
          <P className="">
            A Natureza do Miraculoso, o que vem a ser isso? O termo milagre é
            aplicado a ocasiões incomuns, até mesmo por aqueles que não
            acreditam no sobrenatural. Nem sempre é fácil atribuir o verdadeiro
            significado bíblico à palavra. É provável que a definição mais
            simples, segundo C. S. Lewis, seja: “Uma interferência na natureza
            por um poder sobrenatural”. Para J. Gresham Machen (1984): “Um
            milagre é um evento no mundo exterior, que é trabalhado pelo poder
            imediato de Deus”, ou seja, a obra divina é milagrosa quando Deus
            utiliza o seu poder criativo, como o utilizou quando fez todas as
            coisas a partir do nada. Além disso, um milagre está além da
            capacidade intelectual do homem.
          </P>
          <P className="">
            Qual o propósito dos milagres? Alguns veem os milagres como eventos
            isolados na vida dos profetas ou do Senhor Jesus Cristo. No entanto
            o que podemos enxergar nos textos bíblicos é que o desespero de uma
            pessoa, a seriedade de uma situação, ou a iniciativa de um profeta
            ditou se um milagre deveria ou não ser realizado. Mas os milagres
            não estão espalhados em uma confusão geral ao longo da Bíblia
            Sagrada,. Em cada caso, os milagres serviriam para dar crédito à
            mensagem e ao mensageiro de Deus, em ligações importantes no
            desenvolvimento da tradição judaico-cristã, além disso, eles
            preservaram a verdade de Deus.
          </P>
          <P className="">
            Na nossa lição, vamos evidenciar alguns dos milagres de Jesus, uma
            vez que durante seu ministério terreno, Ele os usou para demonstrar
            a sua divindade, para provar que era o Enviado de Deus, para
            sustentar o seu Messianato, para ministrar com compaixão às
            multidões necessitadas, para guiar seus seguidores à fé salvadora,
            para evidenciar um renascimento espiritual interior, e como auxílio
            na instrução e preparação de seus discípulos para o ministério que
            eles estavam prestes a desempenhar. Os milagres de Jesus estão
            relatados ao longo dos quatro Evangelhos, e alguns milagres são
            mencionados em mais de um Evangelho.
          </P>
          <P className="">
            Sendo assim, Marcos dedica a maior parte do seu Evangelho a contar
            os milagres de Jesus mais do que qualquer um dos demais autores.
            Para ele, esses milagres eram a demonstração do poder de Jesus – Seu
            poder sobre as enfermidades, as forças do mal e, até mesmo, a
            natureza. Assim, muitos o procuravam para serem curados e saciados,
            alguns se perguntavam quem era Jesus realmente, e outros o seguiam.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-os-milagres-no-evangelho-de-marcos">
            1. Os Milagres no Evangelho de Marcos
          </H3>
          <P className="">
            No evangelho de Marcos (1.21-45) podemos observar os primeiros
            milagres de Jesus registrados pelo autor. Para o teólogo Adolf Pohl
            esse trecho esboça algo como um dia de trabalho de 24 horas de Jesus
            na cidade de Cafarnaum. Pela manhã, Ele inicia com o culto de sábado
            (1.21b), depois Jesus segue na casa de Pedro (1.29), à noite na rua
            (1.32), continua antes do raiar do sol (1.35) e termina durante a
            manhã com a partida da cidade (1.38). Os quatro períodos do dia
            correspondem a quatro cenários (sinagoga, casa, rua e deserto) e
            quatro plateias (judeus piedosos, grupo dos discípulos, multidão e
            tentador). Nesses trechos bíblicos podemos observar a autoridade do
            Filho de Deus para ensinar, sobre os demônios e para curar.
          </P>
          <P className="">
            Nesse contexto, vimos Jesus como um pregador estratégico, pois
            Cafarnaum era a maior e mais populosa das cidades pesqueiras que
            estavam ao redor do mar da Galiléia. Esse era um lugar apropriado
            para Ele expor a hipocrisia de alguns judeus e gentios com o
            evangelho do Reino de Deus.
          </P>
          <P className="">
            Em Marcos 1.22, é enfatizado a autoridade de Jesus para ensinar.
            Cerca de 42% dos versículos deste evangelho citam os ensinamentos de
            Cristo. Todos “maravilharam-se da sua doutrina”, pois era diferente
            da doutrina dos escribas e fariseus. Ele não se baseava na sabedoria
            de outros mestres ou rabinos. Sua autoridade vinha de si mesmo.
            Jesus tinha autoridade para ensinar, pois Ele é a própria verdade.
          </P>
          <P className="">
            Quanto à autoridade sobre os demônios, precisamos antes lembrar que
            a possessão demoníaca é um fato inegável. Na possessão os espíritos
            malignos assumem o controle da personalidade humana, e muitas vezes
            os demônios se infiltram no meio da congregação do povo de Deus.
            Contudo, Jesus, quando curou o endemoninhado de Cafarnaum (Mc
            1.24-29), mostrou Sua autoridade sobre eles. Assim, segundo os
            registros de Marcos, Jesus sempre enfrentou os espíritos malignos e
            cerca de 20%, dos 35 milagres que Ele realizou, foram para libertar
            homens desses espíritos. Em um desses casos, o demônio reconheceu
            Jesus como o Santo de Deus, mas Cristo recusou o testemunho de uma
            fonte tão indigna. Marcos percebeu a relevante repercussão que esse
            milagre de Jesus teve e decidiu enfatizar que “logo correu a sua
            fama (de Jesus) por toda a província da Galiléia”(Mc 1.28).
          </P>
          <P className="">
            Podemos ver também a autoridade de Jesus para curar, nesse caso, a
            sogra de Pedro (Paulo relata que Pedro era casado, assim como outros
            discípulos (1 Co 9.5)) e um leproso (Mc 1.29-45). No primeiro caso,
            Jesus curou totalmente a sogra de Simão Pedro, pois não apenas a
            febre passou, mas as forças daquela senhora foram renovadas, para
            que ela servisse a Jesus a aos Seus discípulos. Na segunda situação,
            Jesus, movido de grande compaixão, não somente curou o leproso, mas
            também o tocou. Quantas vezes vemos a necessidade de alguém, mas não
            nos sentimos tocados por ela nem nos envolvemos na situação? A
            Bíblia apresenta mais de 400 passagens que nos exortam a cuidar dos
            necessitados.
          </P>
          <P className="">
            Dessarte, tanto a cura dos enfermos como a expulsão de demônios das
            pessoas devem ter perdurado por toda a noite, porque Jesus tinha
            plena ciência de que somente Lhe restavam cerca de três anos e meio
            de vida aqui na terra para cumprir Sua missão.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-os-milagres-de-natureza">
            2. Os Milagres de Natureza
          </H3>
          <P className="">
            Segundo D. L. Moody, Jesus, provavelmente, por necessidade de
            isolamento e descanso, propôs uma viagem através do lago da
            Galiléia, quando enfrenta uma grande tempestade. Essa tempestade é
            descrita por Marcos (4.35- 41). Logo em seguida ele descreve a
            libertação do homem endemoninhado que Cristo encontrou do outro lado
            (5.1-20), assunto esse que versaremos no tópico seguinte.
          </P>
          <P className="">
            Ir “para a outra margem” do mar da Galiléia, que na verdade é um
            lago, é velejar por mais de 12 quilômetros, o que parecer ser fácil.
            No entanto, sua geografia é capaz de surpreender com variações
            climáticas das mais diversas. Até hoje é comum um grande temporal de
            vento acontecer durante a noite nesse mar. O ar quente tropical que
            surge da superfície do lago se junta ao ar frio das colinas ao
            redor, e o resultado turbulento disso faz com que se levantem
            grandes ondas, que tornam a navegação perigosa. Entretanto, o que
            nos chama a atenção é que Jesus diante dessa situação estava
            dormindo e o fato de estar dormindo demonstra Sua verdadeira
            humanidade. Porém, quando Jesus dá ordens ao vento e ao mar,
            expressam como Sua deidade era completa, pois somente o Deus Criador
            pode acalmar o vento e o mar e é isso que Jesus faz em nossas vidas
            quando estamos diante de uma situação inesperada.
          </P>
          <P className="">
            Mesmo diante dos relatos desse evangelho, às vezes, não conseguimos
            ver a bondade de Deus nas circunstâncias da vida, no entanto, mesmo
            assim, Deus continua sendo sempre bom. Dessa forma, as tempestades
            da vida não anulam a bondade de Deus. Só conseguimos enxergar a
            majestade dos montes quando estamos no vale e é das profundezas da
            nossa angústia que nos erguemos para as maiores conquistas da vida,
            por intermédio de Cristo. Logo, podemos aprender algumas lições com
            as tempestades da vida, vejamos:
          </P>
          <P className="">
            Primeiro, elas são inesperadas, elas chegam a nossa vida sem mandar
            recado, sem pedir licença. Pode ser um acidente, uma enfermidade,
            uma crise no casamento, um desemprego. Como seguidores de Cristo,
            devemos estar preparados para as tempestades que acontecerão. As
            aflições e as tempestades fazem parte da jornada de todo cristão;
          </P>
          <P className="">
            Segundo, elas são perigosas, Lucas diz que sobreveio uma tempestade
            de vento no lago, correndo eles o perigo de naufragar (Lc 8.23).
            Muitas vezes, as tempestades chegam de forma tão intensa que deixam
            as estruturas da nossa vida abalada. Elas podem colocar no chão
            aquilo que levamos anos para construir;
          </P>
          <P className="">
            Terceiro, elas podem não ser administráveis, sendo maiores do que
            nossa força. Os discípulos se esforçaram para contornar o problema,
            mas eles não puderam enfrentar a fúria do vento. Seus esforços não
            puderam vencer o problema, eles precisaram clamar a Jesus, pois o
            problema era maior do que a capacidade deles de resolver.
          </P>
          <P className="">
            Enfim, apresentando um contraste, Marcos narra a ordem que Cristo
            deu à tempestade: “Cala-te, aquieta-te”. O tempo verbal usado no
            grego bíblico mostra que ele repreendeu o vento uma vez (ação
            imediata), e houve grande bonança, ou seja, não houve necessidade de
            repetir a ordem, pois suscitou obediência imediata. Vimos então que
            Jesus é perfeitamente Deus. Ele é o criador e interventor na
            natureza. O vento ouve a sua voz, o mar se acalma quando ele fala.
            Todo o universo se curva diante da sua autoridade, Ele é o
            verdadeiro Deus. É ele quem acalma os terremotos da nossa alma.
            Logo, as tempestades fazem parte do currículo de Jesus para nos
            fortalecer na fé, pois as provas não vêm para nos destruir, mas para
            nos fortalecer. Um escritor registrou: “Quase todas as joias de Deus
            são lágrimas cristalizadas”. Apesar de todas as obras que os
            discípulos testemunharam, este milagre foi tão fenomenal que ficaram
            imaginando quem realmente seria seu mestre. “Quem é este”?
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-os-milagres-de-libertacao">
            3. Os Milagres de Libertação
          </H3>
          <P className="">
            A história do “endemoninhado gadareno” está relatada em Marcos
            5.1-20. Aqui Marcos descreve na íntegra como Cristo lidou com o
            endemoninhado de Gadara. Já Lucas relata toda a história em 11
            versículos (Lc 8.23-34), enquanto Mateus usa apenas sete (Mt
            8.28-33). Marcos, porém, conta-nos todos os detalhes. Diante deste
            texto bíblico vamos analisar um relato de libertação de uma pessoa
            possuída por forças demoníacas.
          </P>
          <P className="">
            Duas perguntas se tornam importantes para a nossa análise: quanto
            vale uma vida para Jesus? Quanto vale uma vida para Satanás? Jesus
            fez um alto investimento na vida desse homem gadareno, pois
            enfrentou a fúria do mar (Mc 4.35-41) e depois a fúria desse homem
            possesso. O escritor desse Evangelho vai de um mar agitado para um
            homem agitado. Humanamente, ambos eram indomáveis, mas Jesus os
            subjugou. E para Satanás? Quanto vale uma vida? Satanás roubou tudo
            de precioso que aquele homem possuíra: família, liberdade, saúde
            física e mental, dignidade, paz e decência. Logo, Satanás não faz
            nada pelas pessoas, mas contra elas, pois domina as pessoas através
            da possessão, arrasta- as para a impureza, bem como tornam-nas
            violentas.
          </P>
          <P className="">
            Um dos principais objetivos do Evangelho, segundo Marcos, é o
            propósito de derrotar Satanás e suas hostes demoníacas. Logo, o
            poder de Jesus sobre Satanás fica claramente demonstrado na expulsão
            de demônios. Além disso, o que Jesus faz pelas pessoas e fez na vida
            do gadareno? Primeiro, Jesus libertou esse homem da escravidão dos
            demônios (5.6-15), porque Cristo é o libertador dos homens. Segundo,
            Jesus devolveu a ele a dignidade da vida, restituiu a sua sanidade
            mental, pois quando Jesus age, Ele restaura a mente, o corpo e a
            alma. Aquele homem não era mais violento, não ofereceu mais nenhum
            perigo à família nem à sociedade. Jesus continua transformando
            monstros em homens santos; escravos de Satanás em homens livres,
            abortos vivos da sociedade em vasos de honra. Em terceiro lugar,
            Jesus dá ao gadareno uma gloriosa missão, pois o enviou como
            missionário para sua casa, para ser uma testemunha na sua terra.
            Antes ele espalhava medo e pavor, agora, anuncia as boas-novas de
            salvação. O gadareno tornou-se um dos primeiros missionários entre
            os gentios. Jesus saiu de Gadara, mas deixou uma grande testemunha
            ali. “Todos se maravilhavam quando ouviam quão grandes coisas Jesus
            lhe fizera”. Ao final, o gadareno permaneceu dando um vivo e
            poderoso testemunho da graça e do poder de Jesus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-os-milagres-de-cura">4. Os Milagres de Cura</H3>
          <P className="">
            Vários milagres de cura são registrados na Bíblia. No AT, esses
            milagres parecem centralizar-se em torno da época do Êxodo e do
            ministério de Elias e Eliseu. Por outro lado, o NT registra uma
            proporção maior de milagres de cura, quando foram operados por
            Cristo ou por seus seguidores, em seu nome. Dos 35 milagres de
            Cristo registrados no NT, 26 foram de cura. Dentre os de cura vamos
            destacar o da mulher hemorrágica por meio do toque da fé (Mc
            5.24-34).
          </P>
          <P className="">
            Ao ser expulso de Gadara, Jesus foi alegremente recebido por uma
            multidão em Cafarnaum, do outro lado do mar. A multidão o apertava,
            mas duas pessoas se destacam nesse trecho: Jairo e a mulher
            hemorrágica. Entretanto, quem era essa mulher? Ela era uma mulher
            anônima, excluída da comunidade, que perdera todos os seus bens na
            busca por saúde, pois sofria há doze anos de uma doença que a
            impedia de ser mãe. Ela aproximou-se de Jesus e com um toque
            silencioso e anônimo foi curada. Esta cura foi excepcional, não
            simplesmente porque foi instantânea, mas porque aconteceu sem
            qualquer participação aparentemente consciente de Cristo.
            Entretanto, Jesus logo tomou conhecimento do que aconteceu. Não
            devemos imaginar que o tocar nos vestidos tivesse algum efeito
            mágico, mas que Jesus em sua onisciência reconheceu o toque da fé e
            satisfez o desejo da mulher. Quanto à expressão “toque da fé”, cabe
            três destaques:
          </P>
          <P className="">
            Primeiro, o “toque da fé” começa com a consciência de uma grande
            necessidade (Mc 5.25) – aquela mulher apresentava um sofrimento
            prolongado, pois buscou a cura durante 12 anos. Apresentava um
            sofrimento que destruía os seus sonhos, porque perdia sangue
            diariamente, e ela não apenas estava perdendo a vida, como não
            poderia gerar vida. Ela sofria também de segregação conjugal, social
            e religiosa, pois segundo a lei mosaica, uma mulher com fluxo de
            sangue não podia relacionar-se com as pessoas, nem poderia entrar no
            templo nem na sinagoga;
          </P>
          <P className="">
            Segundo, o “toque da fé” acontece quando nos voltamos a Jesus (Mc
            5.27) – os nossos problemas não apenas nos afligem, eles também nos
            arrastam aos pés de Jesus. A mulher com fluxo de sangue depois de
            procurar vários médicos buscou a Jesus, pois ela ouvira falar Dele e
            das maravilhas que Ele fazia. Quando nossos problemas parecem
            insolúveis, ainda podemos ter esperança. Aquela mulher ao buscar
            Jesus e tocá-lo recebeu cura física, emocional e espiritual;
          </P>
          <P className="">
            Terceiro, o “toque da fé” acontece quando o contato pessoal com
            Jesus é o nosso maior objetivo de vida (Mc 5.27-34). Enquanto muitos
            comprimem a Cristo, mas poucos o tocavam pela fé. Jesus
            frequentemente estava no meio da multidão, infelizmente, muitos
            seguem a Jesus por curiosidade, mas não auferem nenhum benefício
            Dele. Agostinho, comentando essa passagem, disse que “uma multidão o
            aperta, mas só aquela mulher o toca, só ela recebe a cura”.
          </P>
          <P className="">
            Desse modo, a mulher com o fluxo de sangue recebeu cura imediata e
            completa. Ela voltou para casa livre, perdoada e salva, pois Jesus
            disse à mulher: “Vai-te em paz e fica livre do seu mal”. A benção
            que Jesus deu a mulher é uma promessa para nós.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-2-conclusao">Conclusão</H3>
          <P className="">
            Os milagres descritos no evangelho de Marcos revelam a profunda
            conexão entre o divino e o humano, mostrando como a intervenção de
            Deus pode transformar vidas de maneiras surpreendentes e poderosas.
            Através das ações de Jesus, vemos o alcance do poder divino em áreas
            da existência humana: cura, libertação e controle sobre a natureza.
            Cada milagre não apenas demonstra a autoridade de Jesus, mas também
            sublinha sua compaixão e preocupação com as necessidades das
            pessoas.
          </P>
          <P className="">
            Os milagres de cura, em particular, destacam a capacidade de Jesus
            de restaurar a saúde e a dignidade daqueles que sofrem. Esses atos
            de cura são um testemunho do amor de Deus e da sua disposição para
            intervir nas situações mais desesperadoras da vida.
          </P>
          <P className="">
            Além dos milagres de cura, os milagres de natureza, como a calmaria
            da tempestade, mostram o domínio de Jesus sobre as forças naturais.
            Estes eventos reforçam a ideia de que Jesus é o Criador, com
            autoridade sobre toda a criação. As tempestades que ele acalma não
            são apenas físicas, mas também simbólicas das tempestades
            espirituais e emocionais que enfrentamos. A mensagem é clara: em
            meio às crises, Jesus é a nossa paz e segurança.
          </P>
          <P className="">
            Os milagres de libertação, como a cura do endemoninhado gadareno,
            revelam a luta contra as forças do mal e a vitória definitiva de
            Jesus sobre Satanás. Estes milagres demonstram o poder de Jesus para
            libertar os cativos e transformar vidas, reafirmando que ninguém
            está fora do alcance da graça de Deus.
          </P>
          <P className="">
            Para os cristãos protestantes, os milagres de Jesus devem servir
            como fonte constante de inspiração e fortalecimento da fé. Eles nos
            lembram que o mesmo poder que operou através de Jesus está
            disponível para nós hoje, através do Espírito Santo. Enfrentamos
            desafios e provações, mas devemos lembrar que Jesus está conosco,
            pronto para intervir em nossas vidas. Que possamos viver com a
            confiança de que o Deus dos milagres ainda está ativo, que nossa fé
            seja fortalecida por esses relatos e que possamos ser testemunhas
            vivas do seu amor e poder transformador em nosso mundo.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 3 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-3">Lição 3 – A Autoridade de Jesus em Ação</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-objetivo-geral">Objetivo Geral</H3>
          <P className="">
            Discorrer sobre a demonstração do Reino de Deus por meio da pregação
            de Jesus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-introducao">Introdução</H3>
          <P className="">
            Jesus inicia seu ministério com a seguinte mensagem: “arrependei-vos
            e crede no evangelho”. Para Ele, você só poderá crer, de fato, se
            mudar sua maneira de viver. Os milagres do Seu ministério são um
            chamado para vivermos não de acordo com o que os olhos podem ver,
            mas segundo a fé. Seguir Jesus para os primeiros discípulos era
            viver de milagres. Em Marcos 9:23-24 um homem chega a Jesus com o
            filho lunático e Lhe diz: “Mestre, ajuda-me na minha falta de fé”. A
            resposta do Mestre foi “Se puderes crer, tudo é possível ao que
            crê”. Então, ter fé realiza o impossível, realiza milagres e curas.
          </P>
          <P className="">
            Apresentaremos também Jesus como soberano e poderoso. Diante de
            Jesus, o maior de todos os homens, João Batista se sente indigno de
            desatar-lhe as correias das sandálias. Diante Dele, todo o joelho se
            dobra no céu, na Terra e debaixo da Terra. João reconheceu: “Após
            mim vem aquele que é mais poderoso do que eu” (Mc 1.7). Ele tem
            poder sobre a natureza, os demônios, a enfermidade e a morte. Ele
            tem toda a autoridade e todo poder no céu e na terra. Falaremos de
            um homem chamado Jairo, que como João Batista, também crê na
            autoridade e poder de Jesus sobre a morte e doença.
          </P>
          <P className="">
            Nas Escrituras, podemos ver algumas reações das pessoas diante dos
            milagres de Jesus, encontramos incrédulos e crentes. A incredulidade
            traz morte ao mundo e fecha as portas para os milagres de Jesus. Ela
            é o mais tolo e inconsequente dos pecados, pois leva as pessoas a
            recusarem a mais clara evidência, a fechar os olhos ao mais límpido
            testemunho, e ainda a crer em enganosas mentiras. Já para os que têm
            fé, as portas são abertas para os milagres, curas e para a salvação.
          </P>
          <P className="">
            A pregação é o instrumento usado por Deus para chamar os pecadores e
            é a maior necessidade da igreja e do mundo. As referências bíblicas
            sobre a pregação possuem relação com uma proclamação pública. A
            palavra mais característica no NT é keruso (mais de 60 vezes), que
            significa “proclamar como um arauto”. No mundo da Antiguidade o
            arauto era a figura principal para transmitir informações oficiais e
            todos os decretos reais. A mensagem do evangelho do NT, surgiu
            conforme o que poderíamos chamar de dois estágios, primeiro,
            apareceu João Batista como um arauto messiânico proclamando
            “Arrependei-vos, porque é chegado o reino dos céus” (Mt 3.2), depois
            veio o Senhor Jesus proclamando a chegada do Reino de Deus.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-importancia-da-fe-na-realizacao-de-milagres">
            1. A Importância da Fé na Realização de Milagres
          </H3>
          <P className="">
            No evangelho escrito por Marcos (11.22-24) observamos a ilustração
            de Jesus sobre o uso da fé quando diz que é possível que um monte
            seja lançado ao mar, que é o exemplo de algo simplesmente impossível
            a compreensão humana. Logo, a intenção de Cristo é deixar claro que
            crer é a chave para a realização. No entanto, todas as nossas
            petições devem ser feitas em nome de Jesus (Jo 15.16) e para que
            tudo seja segundo a Sua vontade (1 Jo 5.14). O que nos leva a crer
            poderosamente é o objeto da nossa fé: a verdade.
          </P>
          <P className="">
            Em que sentido a fé move montanhas? Dizer que a fé move montanhas
            significa que não há nada impossível para aquele que confia
            plenamente em Deus. Em Mateus 17:19, os discípulos de Jesus não
            conseguiram expulsar um demônio que atormentava um jovem. Eles
            perguntaram a Jesus por que isso aconteceu, já que anteriormente
            haviam expulsado demônios. Jesus respondeu advertindo-os sobre a
            importância da fé e sua falta de perseverança na oração. Ele
            explicou que a verdadeira fé, mesmo que do tamanho de um grão de
            mostarda, permite a realização de coisas extraordinárias, ou seja,
            milagres (Mt 17:20). Quem possui tal fé é capaz de dizer a uma
            montanha: "Vá daqui para lá", e ela irá; e nada lhes será impossível
            (Mc 11:23).
          </P>
          <P className="">
            Além disso, Jesus fala de uma fé que pode operar milagres e curas, e
            realizar grandes coisas para Deus. Trata-se de uma fé genuína,
            eficaz, que produz resultados. Essa fé não é uma crença na “fé” como
            uma força ou poder, mas sim “fé em Deus”, uma obra de Deus que se
            manifesta no coração do cristão (Mc 9:24). É a plena certeza que
            Deus transmite ao coração de que nossas orações serão respondidas
            (Mc 11:23). Essa fé é gerada internamente no crente pelo Espírito
            Santo, não podendo ser produzida pela nossa própria mente (Rm 12:3).
            Dependemos de Cristo em tudo, pois "Sem mim nada podereis fazer" (Jo
            15:5). Devemos buscar Jesus, que é o autor e consumador da nossa fé
            (Hb 12:2). Sua presença real em nossas vidas e nossa obediência à
            Sua Palavra são a origem e o segredo da verdadeira fé, que opera sob
            o controle de Deus.
          </P>
          <P className="">
            Por fim, a verdadeira fé sempre opera de acordo com a Palavra de
            Deus, não se baseando em desejos humanos, mas na vontade de Deus.
            Essa fé está intimamente ligada à perseverança na oração, à
            disciplina de santificação e, principalmente, à meditação na Palavra
            de Deus, pois é através das Escrituras que Ele se revela e expressa
            Sua vontade.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-autoridade-de-jesus-sobre-as-doencas-e-a-morte">
            2. A Autoridade de Jesus Sobre as Doenças e a Morte
          </H3>
          <P className="">
            Em Marcos 5:35-43, encontramos mais um milagre de Jesus, onde Ele
            ressuscita a filha única de Jairo, um líder religioso, demonstrando
            Seu poder e autoridade sobre a morte e a doença. Jairo, um dos
            principais da sinagoga (lugar de adoração e ensino da Lei mosaica),
            era um líder leigo encarregado de supervisionar os serviços da
            sinagoga. Por já saber que Jesus tinha autoridade para operar
            milagres, Jairo foi ao Seu encontro com a maior necessidade que já
            havia enfrentado, pois ele acreditava que Cristo podia resolver seu
            problema. Aquele homem acreditava que apenas o toque do Mestre
            poderia curar sua filha, que estava muito enferma. Embora
            soubéssemos que Jesus poderia curar à distância, a fé de Jairo era
            inabalável.
          </P>
          <P className="">
            No texto de Marcos 5:22-23, vemos Jairo indo a Jesus, levando sua
            causa desesperadora. Ele reconhece a autoridade de Jesus e O busca
            com um profundo senso de urgência. O sofrimento muitas vezes nos
            conduz a Deus. Ernesto Trenchard afirma que a aflição é
            frequentemente a voz de Deus. As aflições se tornam fontes de
            bênçãos quando nos trazem a Jesus. Assim, Jairo acreditava que se
            Jesus fosse com ele e impusesse as mãos sobre sua filha, ela seria
            salva e viveria. Ele confiava na eficácia do toque de Jesus e via
            nEle a esperança para sua necessidade urgente. Quando Jairo
            encontrou Jesus, ele demonstrou três atitudes marcantes: humilhou-se
            diante de Jesus, clamou com perseverança e com fé. John Henrique
            Burn diz: “não há lugar na terra mais alto do que aos pés de Jesus”.
            Jairo acreditava que Cristo tinha autoridade para levantar sua filha
            do leito da morte.
          </P>
          <P className="">
            Jesus então vai com Jairo, levando esperança para seu desespero (Mc
            5:24). Quando Jesus está conosco, podemos ter a certeza de que Ele
            se importa com nossa dor e com as pessoas, incluindo nós. Além
            disso, quando Jesus está conosco, os imprevistos humanos não podem
            frustrar os propósitos divinos. No caminho, Jesus parou para
            conversar com uma mulher e libertá-la de seu mal (Mc 5:25). Com
            isso, Jairo deve ter ficado aflito quando Jesus interrompeu a
            caminhada até sua casa, mas nada pega Jesus de surpresa, pois Ele
            tem toda a autoridade. Aquele pai então recebe a notícia de casa:
            sua filha já morreu, não adianta mais incomodar o Mestre (Mc 5:35).
            A causa parecia perdida, mas Jesus, ao ouvir aquelas palavras, disse
            a Jairo: “Não temas, crê somente” (Mc 5:36). Quando Jesus está
            conosco, a morte e a doença não têm a última palavra (Mc 5:40-42);
            pelo contrário, precisam se retirar diante da autoridade de Jesus.
          </P>
          <P className="">
            Diante da voz do onipotente Filho de Deus, a morte se curva, dobra
            os joelhos e se prostra, vencida, perante o Criador. Quando Jesus
            chega à casa do principal da sinagoga, os presentes riram Dele, pois
            não conheciam o Deus vivo, e por isso, riram incrédulos. Mas Jesus,
            diante do coro da morte, ergue-se no solo da ressurreição:
            “Tomando-a pela mão, disse: Talita cumi, que quer dizer: Menina, eu
            te mando, levanta-te! Imediatamente, a menina se levantou e pôs-se a
            andar…” (Mc 5:41-42). Para Jesus, não existe causa perdida.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-reacao-das-pessoas-diante-dos-milagres">
            3. A Reação das Pessoas Diante dos Milagres
          </H3>
          <P className="">
            O capítulo 5 do livro de Marcos apresenta o triunfo da fé, enquanto
            o capítulo 6 registra a tragédia da incredulidade. Aquele capítulo é
            um sinal luminoso do poder de Jesus no meio da escuridão da miséria
            humana. Vemos nele o triunfo de Cristo sobre o diabo, a doença e a
            morte. No entanto, no capítulo 6, vemos a incredulidade dos
            nazarenos, de Herodes e dos próprios discípulos. Logo, veremos neste
            tópico a reação das pessoas diante dos milagres, consideraremos duas
            situações, a saber: portas fechadas pela incredulidade e portas
            abertas pela proclamação do evangelho.
          </P>
          <P className="">
            Quanto a incredulidade a encontramos nos versículos 1 e 2, do
            capítulo 6 desse evangelho. Jesus passa a ministrar em sua terra, na
            região de Nazaré, onde Ele havia crescido. Nesta ocasião as pessoas
            reconheceram a sabedoria e as maravilhas de Jesus, mas rejeitaram
            Sua mensagem por causa da dureza de coração e da frieza espiritual.
            Entre os versículos de 1 a 6, destacamos alguns pontos importantes:
          </P>
          <P className="">
            Primeiro, Jesus oferece uma segunda chance à cidade de Nazaré, pois
            no início do Seu ministério (Lc 4.16-30), Ele já havia sido expulso
            da sinagoga dessa cidade. Agora, Jesus volta em Nazaré dando ao povo
            uma nova oportunidade. O Povo de Nazaré deveria se sentir o povo
            mais privilegiado do mundo, pois ali o Filho de Deus havia passado
            sua infância e juventude, vendo os nazarenos muito de perto a (…)
            glória de Deus, na face de Cristo (2 Co 4.6), porém eles rejeitaram
            o mensageiro e a mensagem.
          </P>
          <P className="">
            Segundo, a incredulidade fecha as portas da oportunidade para
            Nazaré, uma vez que, Jesus não permaneceu lá. Ele foi adiante, não
            insistiu, Jesus seguiu procurando aqueles que pudessem responder aos
            Seus milagres e à Sua mensagem. Ele deixou Nazaré pela segunda vez,
            e não há menção de que tenha voltado lá. Assim, a maioria das
            pessoas pensa que tem ilimitadas oportunidades para crer, mas isso é
            engano.
          </P>
          <P className="">
            Terceiro, a incredulidade de Nazaré fecha as portas para os milagres
            de Jesus. Jesus não “pôde” fazer em Nazaré nenhum milagre, pois onde
            se rejeita o doador, a dádiva é sem sentido. Como um princípio
            geral, o poder segue a fé.
          </P>
          <P className="">
            Com relação às portas para a proclamação do evangelho, podemos
            observar que quando uma porta se fecha, Deus abre outras. Nesse
            sentido, Jesus ampliou Seu ministério comissionando os apóstolos,
            não os chamou apenas para estarem com Ele, mas também para os enviar
            a pregar e a expelir demônios (Mc 3.14-21). Jesus deu aos apóstolos
            a mensagem, quando eles saíram a pregar aos homens, não criaram a
            mensagem; levaram a mensagem. Eles não levaram aos homens as suas
            opiniões, mas a verdade de Deus. Os apóstolos pregaram o
            arrependimento, curaram os enfermos, expulsaram demônios, eles
            tinham a palavra e o poder.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-a-demonstracao-do-reino-de-deus-por-meio-da-pregacao-de-jesus">
            4. A Demonstração do Reino de Deus por Meio da Pregação de Jesus
          </H3>
          <P className="">
            A pregação é a obra mais importante que se pode fazer no mundo.
            Nenhum trabalho pode ser mais primordial e mais urgente do que a
            pregação. Jesus Cristo, o Filho de Deus, tornou-se um pregador sendo
            uma de suas funções enquanto esteve no mundo. Ele não apenas foi
            pregador, mas o pregador modelo.
          </P>
          <P className="">
            Sobre o ministério de pregação de Jesus, Marcos (1.14-15) começa sua
            narrativa com os eventos que aconteceram depois que João Batista foi
            entregue à prisão, assim como fizeram os escritores dos outros
            Evangelhos Sinóticos. No versículo 16, Jesus anunciou o Reino de
            Deus, pois esse era o tema de muitas profecias do Antigo Testamento
            e algo muito familiar para aqueles que ouviam Jesus. O
            “Arrependei-vos e crede” são atos de fé. Quando alguém aceita o
            único e verdadeiro objeto de sua fé, deixa de ser uma pessoa comum,
            porque só Jesus pode preencher o vazio de Deus que há em nós. No
            trecho em questão, Marcos fala sobre duas verdades acerca da
            pregação de Jesus:
          </P>
          <P className="">
            Em primeiro lugar, Jesus só iniciou o seu ministério de pregação
            depois que foi revestido com o Espírito Santo e confirmado pelo Pai
            (1.10,11), pois não há pregação sem capacitação divina. Jesus também
            só iniciou a sua pregação depois que triunfou sobre o diabo no
            deserto (1.12,13). Logo, aqueles que querem ter um ministério de
            pregação precisam da unção do Espírito, da aprovação do Pai, do
            conhecimento da Palavra e da vitória sobre Satanás.
          </P>
          <P className="">
            Em segundo lugar, Jesus evita os holofotes ou conflitos humanos.
            Possivelmente, qualquer pregador famoso gostaria de iniciar sua
            cruzada de pregação pela grande capital religiosa do mundo, a
            monumental cidade de Jerusalém, pois ela era a cidade da fé. Porém,
            Cristo direciona Seu ministério para uma região desprezada, a
            Galiléia, que era considerada uma região de trevas, era chamada
            Galiléia dos gentios, era terra de gente pobre, desprezada, enferma,
            possessa. Era um lugar atrasado, o fim do mundo, longe dos holofotes
            da fama. Foi nesse berço de trevas, conflitos, preconceitos e
            paganismo que o evangelho começou a ser proclamado.
          </P>
          <P className="">
            Além dos locais geográficos, cabe destacar tambem os temas das
            pregações de Jesus, sendo ele subdividido em tema gral e particular,
            vejamos:
          </P>
          <P className="">
            Quanto ao tema geral, Jesus pregou o evangelho de Deus. O proclamado
            inicia seu ministério sendo o proclamador. Jesus começou espalhando
            a alegria das boas-novas num berço de trevas e opressão. O evangelho
            de Deus deve ser o tema de toda pregação cristã. Mas, o que
            significa a palavra evangelho? Ela significa boas-novas, Jesus veio
            para trazer boas notícias. O evangelho é a promessa de vida; de
            perdão, de libertação, e de salvação. Esse tema é a mais esplêndida
            notícia que já soou neste mundo. O homem sem o evangelho está em
            trevas, o homem não podia conhecer quem é Deus. Jesus veio mostrar a
            verdade acerca de Deus.
          </P>
          <P className="">
            Quanto ao tema particular, consiste na plenitude do tempo, pois o
            próprio Deus põe fim à espera, uma vez que o povo esperou a vinda do
            Messias milhares de anos e, finalmente, eis o dia chegado. Jesus
            veio ao mundo na plenitude dos tempos (Gl 4.4). Essa chegada trouxe
            também o Reino, que traz salvação aos homens, indica a soberania, o
            domínio, o reinado de Deus, reconhecido no coração e ativo na vida
            do seu povo, efetuando completa salvação.
          </P>
          <P className="">
            Com relação ao Reino de Deus, fica uma pergunta: quais as condições
            para se entrar nele? Jesus não tinha apenas uma boa-nova para
            anunciar, mas também uma exigência a fazer. Ele apresenta duas
            condições para se entrar no Reino: arrependimento e crer no
            evangelho: Arrependimento, é uma palavra grega, metanoia, que
            significa mudança de mente, J.B. Carvalho, em seu livro Metanoia,
            fala que “para a maioria dos cristãos, na tradição e na tradução,
            metanoia se tornou arrependimento – seria uma mudança de rota, a
            conversão, o novo nascimento. Contudo, metanoia é mais que uma única
            experiência de mudança de mente, é uma mudança de mente continuada e
            sustentada. A metanoia começa na conversão e dura para toda a vida.
            Arrependimento é o início e não o fim da metanoia”. O começo da
            mensagem de Jesus ao mundo foi: “arrependei-vos e crede no
            evangelho”; E o que significa crer no evangelho? Egidio Gioia
            responde: “Significa crer em Deus, pois o evangelho é de Deus.
            Significa crer no Filho de Deus, pois Jesus pregou o evangelho de
            Deus. Significa crer no Espírito Santo, pois o Espírito Santo ungiu
            a Jesus para pregar o evangelho (…) Crer no evangelho é crer em
            Cristo crucificado, ressuscitado e glorificado. Crer em Cristo é ter
            a vida eterna”.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-3-conclusao">Conclusão</H3>
          <P className="">
            Posto isso, as escrituras nos ensinam que com a fé podemos realizar
            milagres, e que ter fé em Deus realiza o impossível. Assim,
            dependemos de Cristo em tudo, “Sem mim nada podereis fazer” (Jo
            15.5). Logo, buscamos, nesse estudo, destacar a autoridade de Jesus,
            mostramos Ele como soberano, pois o Filho de Deus tem a
            preeminência. Diante Dele, todo o joelho se dobra no céu, na terra e
            debaixo da terra. Ele tem poder sobre a natureza, os demônios, a
            enfermidade e a morte. Ele tem toda a autoridade e todo poder no Céu
            e na Terra.
          </P>
          <P className="">
            Descrevemos ainda dois tipos de reações diante dos milagres de
            Jesus, a incredulidade e a fé. Quando Jesus chega a sua terra,
            Nazaré, para ministrar, os habitantes daquela região rejeitaram Sua
            mensagem e devido a incredulidade deles, Cristo não foi capaz de
            realizar ali nenhum milagre. Onde o Senhor Jesus deveria ter podido
            encontrar a maior fé Nele, descobriu a mais persistente
            incredulidade. Porém, diferente daquela reação, temos as pessoas com
            fé suficiente, que recebiam e criam na mensagem, eram abençoadas,
            criam na Palavra de Deus, ficavam maravilhadas com os milagres que
            Jesus e os apóstolos faziam.
          </P>
          <P className="">
            Por fim, vimos que a pregação é a obra mais importante que se pode
            fazer no mundo, pois por meio dela, Jesus anunciou o Reino de Deus,
            bem como, as condições para se entrar no Reino: o arrependimento e
            crer no Evangelho. Entre o céu e a terra há um grande abismo, onde
            somente Jesus pode nos transportar em segurança para o céu. Logo,
            precisamos confiar Nele e agarrar-nos a Ele e, então, seremos
            levados salvos para o Reino de luz!
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* LIÇÃO 4 */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="lesson-4">Lição 4 – O Chamado ao Discipulado de Jesus</H2>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-objetivo-geral">Objetivo Geral</H3>
          <P className="">Discorrer sobre o chamado dos discípulos de Jesus.</P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-introducao">Introdução</H3>
          <P className="">
            A palavra grega mathetes empregada para discípulo é usada
            aproximadamente 270 vezes nos Evangelhos e livro de Atos. Ela é
            usada para definir um pupilo que se submete aos processos de
            aprendizado sob a responsabilidade de um professor. O conceito
            prevaleceu no Antigo Testamento e é exemplificado pelos “filhos dos
            profetas” (2 Rs 6.1), que foram os aprendizes que mais tarde
            substituíram Samuel, Elias e Elizeu. No Novo Testamento, em um
            sentido amplo, Jesus usou a palavra “discípulo” como aqueles seus
            seguidores vindos sob influência de seu ensino. Os discípulos de
            Jesus, hoje e naqueles dias, são aqueles que respondem ao seu
            convite: “Aprendei de mim”(Mt 11.29). Em sentido estrito, discípulo
            aplica-se ao círculo interno dos Doze, chamados em meio a um grupo
            maior para que pudessem estar com Cristo.
          </P>
          <P className="">
            A cruz de Cristo é símbolo de sofrimento, morte, vergonha, zombaria,
            rejeição e renúncia pessoal. Quando um crente toma a sua cruz e
            segue a Cristo, ele nega-se a si mesmo (Lc 14.26,27) e precisa
            decidir abraçar três tipos de lutas: (1) lutar contra o pecado,
            crucificando suas próprias concupiscências; (2) lutar contra Satanás
            e os poderes das trevas, para estender o Reino de Deus, bem como a
            perseguição que surge por resistirmos aos falsos mestres que
            distorcem o verdadeiro evangelho; e, (3) sofrer o ódio e o escárnio
            do mundo por testificarmos contra as suas obras más, por
            separarmo-nos dele moral e espiritualmente e por rejeitarmos seus
            padrões e suas filosofias que são contrarias aos princípios
            cristãos.
          </P>
          <P className="">
            No caminho para Jerusalém, via Jericó, ocorreu a maior e mais
            importante marcha da História. Ela foi a marcha de consequências
            eternas. Essa foi a marcha dos contrastes. Jesus sobe a Jerusalém
            corajosamente, enquanto seus discípulos estão cheios de temor. Ele
            sobe para dar a vida, eles sobem com para preservar as suas. Jesus
            sobe para servir, eles aspiram à grandeza. Cristo humilha-se, os
            discípulos exaltam-se. Quanto mais perto da cruz Jesus chega, mais o
            coração dos discípulos está endurecido e mais seus olhos estão
            turvos. Quanto mais Jesus se esvazia, mais eles se enchem de si
            mesmos.
          </P>
          <P className="">
            Finalmente, a Grande Comissão é a ordenança dada por Jesus à Sua
            Igreja com o fim de levar as boas novas de salvação, a todos os
            povos, em todos os lugares, em todas as línguas a fim de alcançá-los
            para o Reino de Deus (Mt 28.18- 20; Mc 16.15-20; Lc 24.46-49; Jo
            20.21,22; At 1.8). A Grande Comissão tem seu enfoque na vida das
            pessoas, envolvendo o aspecto espiritual, apontando para uma vida de
            reconhecimento do pecado e o arrependimento para que possam
            participar do Reino de Deus. “A grande Comissão preocupa-se,
            principalmente, com a expansão da Igreja no universo dos que ainda
            não pertencem à Igreja, quem quer que seja, e onde quer que esteja”
            (GABY, 2023, p. 8).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-a-eleicao-dos-doze">1. A Eleição dos Doze</H3>
          <P className="">
            No evangelho de Marcos 3:13-19, temos a eleição dos doze. Jesus
            tinha muitos discípulos, mas separou doze para serem apóstolos.
            Discípulo é um aprendiz, enquanto apóstolo é um enviado com uma
            missão maior, um embaixador em nome do Rei. A ordem é: primeiro
            converter, depois ordenar. Estes doze eram os apóstolos de Jesus –
            um grupo enviado para cumprir uma missão específica – e chamados a
            participar do ministério de milagres de Jesus.
          </P>
          <P className="">
            Muitos poderiam ser discípulos, mas apenas um grupo seleto foi
            escolhido para certas tarefas de liderança. Eles foram os
            instrumentos para receber a revelação de Deus e foram inspirados por
            Deus para o registro das Escrituras. Segundo Dewey Mulholland, a
            decisão de Jesus de escolher os doze foi uma das mais cruciais da
            História. Ele não escreveu livros, não ergueu monumentos nem
            construiu instituições, mas discipulou pessoas de modo eficaz para
            perpetuar Seu ministério. A existência da igreja prova o acerto de
            Sua decisão.
          </P>
          <P className="">
            Jesus escolheu soberanamente (Mc 3:13) Seus apóstolos (liderança da
            igreja) e podemos fazer três observações importantes:
          </P>
          <P className="">
            A primeira é que Jesus escolheu segundo a expressa vontade do Pai,
            pois Lucas informa que antes de chamar os apóstolos, Jesus
            dedicou-se à oração: “Naqueles dias, retirou-se para o monte, a fim
            de orar, e passou a noite orando a Deus. E, quando amanheceu, chamou
            a si Seus discípulos e escolheu doze dentre eles, aos quais deu
            também o nome de apóstolos” (Lc 6:12-13).
          </P>
          <P className="">
            A segunda é que Jesus escolheu de forma soberana, conforme a sua
            própria vontade. O evangelista Marcos registra isso em Mc 3:13.
            Jesus não fez uma pesquisa de opinião entre a multidão para escolher
            os doze, nem escolheu a liderança da igreja por critérios
            humanistas. Ele chama a quem quer, pois é soberano.
          </P>
          <P className="">
            A terceira verdade é que Jesus escolheu e capacitou, pois os homens
            que Ele escolheu não possuíam qualidades especiais, não eram todos
            ricos, não tinham posição social influente, eram homens comuns,
            limitados, alguns iletrados, outros de temperamentos explosivos.
            Contudo, Jesus os escolheu, ensinou, equipou e revestiu de poder.
            Com esses homens, Ele transformou o mundo.
          </P>
          <P className="">
            Quem foram esses doze eleitos por Jesus? Cristo os escolheu
            surpreendentemente (Mc 3:16-19), elegendo pessoas heterogêneas. Os
            doze são um espelho da nova família de Deus, composta de diferentes
            pessoas, lugares, profissões e ideologias. São pessoas limitadas e
            imperfeitas, que frequentemente discordam sobre muitos assuntos.
            Havia no grupo de Jesus desde um serviçal de Roma até um
            nacionalista que defendia a guerra contra Roma. Esse grupo tão
            heterogêneo aprendeu a viver sob o senhorio de Cristo e tornou-se
            uma bênção para o mundo.
          </P>
          <P className="">
            A escolha foi soberana e baseada na graça, não nos méritos, já que a
            única coisa que se destaca neles é a prontidão para seguir Jesus.
            Assim, vejamos quem eram esses homens: Simão Pedro, André, Tiago de
            Zebedeu, João, Filipe, Natanael (também conhecido como Bartolomeu),
            Tomé, Mateus (chamado Levi), Tiago filho de Alfeu, Simão o zelote ou
            cananeu, Judas o irmão de Tiago (às vezes chamado Tadeu) e Judas
            Iscariotes. Jesus foi capaz de juntar ao Seu redor e unir em uma
            família homens de criação e temperamentos diferentes, às vezes,
            completamente opostos.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-discipulado-o-mais-fascinante-projeto-de-vida">
            2. Discipulado: O Mais Fascinante Projeto de Vida
          </H3>
          <P className="">
            O ensinamento registrado em Marcos 8:34-38 é o resultado natural do
            sofrimento de Cristo. Se alguém quer seguir a Cristo, deve andar
            pelo caminho que Ele andou: o caminho da abnegação e da cruz. A cruz
            simboliza sofrimento, e a abnegação fala da prontidão em sofrer por
            alguém. Quem não se dispõe a carregar a cruz, não usará a coroa.
            Jesus sabia que as multidões O seguiam apenas pelos milagres e não
            estavam dispostas a trilhar o caminho da renúncia nem a se sujeitar
            ao discipulado. Ele não apenas abraça o caminho da cruz, mas exige o
            mesmo de Seus seguidores: renúncia e sacrifício (Mc 8:34).
          </P>
          <P className="">
            Jesus só tem um tipo de seguidor: o discípulo. Ele ordenou à Sua
            igreja que fizesse discípulos, não admiradores. O discipulado é o
            mais fascinante projeto de vida. Podemos destacar alguns aspectos
            importantes em relação ao discipulado:
          </P>
          <P className="">
            O discipulado é um convite pessoal, pois Jesus começa com uma
            chamada condicional: “Se alguém quiser...”. A soberania de Deus não
            violenta a vontade humana; é preciso existir uma predisposição para
            seguir a Cristo. Muitos querem apenas o glamour do evangelho, mas
            não a cruz. Querem os milagres, mas não a renúncia. Querem a
            prosperidade e a saúde, mas não o arrependimento. Querem o paraíso
            na terra, mas não a bem- aventurança no céu. O discipulado tem um
            preço a ser pago, mas somente para aqueles que quiserem.
          </P>
          <P className="">
            O discipulado é um convite para uma relação pessoal com Jesus:
            “...vir após mim...”, porque ser discípulo não é ser um admirador de
            Cristo, mas um seguidor. Assim como Jesus escolheu o caminho da
            cruz, o discípulo precisa seguir a Cristo não para o sucesso, mas
            para o calvário. Não há coroa sem cruz, nem céu sem renúncia. “Vir
            após mim” é ligar-se a Cristo como Seu discípulo.
          </P>
          <P className="">
            O discipulado é um convite para uma renúncia radical, já que Cristo
            nos chama não para a afirmação do eu, mas para a sua renúncia.
            “Negue-se a si mesmo” não significa odiar a si próprio ou rejeitar o
            básico de que precisamos para viver, mas entregar o controle da
            nossa vida totalmente a Cristo.
          </P>
          <P className="">
            O discipulado é um convite para morrer, pois “tomar a cruz” é
            abraçar a morte. Quem carregava a cruz estava a caminho da execução.
            Portanto, isso representa aquele que está morto para suas próprias
            vontades, alguém que está disposto a assumir todos os compromissos
            para que seu viver cristão seja completo.
          </P>
          <P className="">
            O discipulado é um convite para uma caminhada dinâmica com Cristo:
            “e siga-me”, pois seguir a Cristo é algo sublime e dinâmico. Esse
            desafio nos é exigido todos os dias, em nossas escolhas, decisões,
            propósitos, sonhos e realizações.
          </P>
          <P className="">
            Além disso, o discípulo conhece a necessidade da renúncia (Mc 8:35).
            Os valores de um discípulo estão invertidos: ganhar é perder e
            perder é ganhar. Para garantir a vida eterna, é preciso deixar de
            lado os bens materiais e os relacionamentos aos quais tanto nos
            apegamos (Mt 16:24-27). A aparente perda material significa ganho,
            enquanto o aparente ganho material pode ser considerado uma perda
            (Mt 19:21).
          </P>
          <P className="">
            O discípulo também sabe o valor inestimável da vida. Em Marcos 8:36,
            há um contraste entre o mundo e a alma. O termo “alma” é o mesmo que
            “vida” em Marcos 8:35. Ambos são traduções de psyché. Este princípio
            se aplica tanto ao nível físico quanto ao espiritual. Que valor há
            em obter tudo o que o mundo oferece se uma pessoa morre e não pode
            desfrutá-lo? Ou, qual a virtude de acumular um mundo de posses
            terrenas durante alguns poucos anos se isso significa perder a vida
            eterna? O valor de uma simples alma tem um significado
            extraordinário no Reino de Cristo.
          </P>
          <P className="">
            Enfim, o discípulo é alguém que não se envergonha de Cristo (Mc
            8:38). Quando Cristo usou a expressão “se envergonhar de mim e das
            minhas palavras”, estava estabelecendo um contraste com a atitude de
            disposição de perder a vida por causa Dele e do Evangelho.
            Envergonhar-se é negar Cristo na hora da provação em vez de ficar
            com Ele, mesmo sob o risco da morte. Da mesma maneira, quando o
            Senhor vier como Juiz, Ele se envergonhará e repudiará aqueles que O
            repudiaram.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-servir-de-cristo-e-o-desejo-de-grandeza-dos-discipulos">
            3. O Servir de Cristo e o Desejo de Grandeza dos Discípulos
          </H3>
          <P className="">
            Em Marcos 10:35-45, Jesus ensina sobre o serviço enquanto os
            discípulos aspiram à grandeza. Ele se humilha, e os discípulos se
            exaltam. Tiago e João, aliados com Salomé, sua mãe, chegam diante de
            Jesus com um pedido: querem preeminência na glória. Buscam tronos,
            holofotes e reconhecimento, enquanto Jesus percorre o caminho da
            renúncia, e eles seguem pela estrada da ambição. Moody afirma que
            este triste espetáculo de ambição egoísta se transformou em uma
            ocasião para o Senhor reafirmar a natureza da verdadeira grandeza.
            Ele lembrou os doze apóstolos do padrão de grandeza estipulado pelo
            mundo: os governadores e dignitários têm as pessoas sob seu domínio
            e exercem autoridade sobre elas. Entretanto, esse não deve ser o
            costume entre os seguidores de Cristo. Pelo contrário, aquele que
            quer tornar-se grande deve ser o que serve aos seus companheiros. O
            próprio Jesus foi o exemplo supremo de alguém que manifestava a
            verdadeira grandeza. Ele, que era o Messias de Deus, poderia muito
            bem ter reivindicado seus direitos de ser servido pelos homens. Mas,
            pelo contrário, Ele veio para servir e dar sua vida pela humanidade.
          </P>
          <P className="">
            Segundo Rick Warren, fomos moldados para servir a Deus; estamos na
            Terra para fazer uma contribuição, não fomos criados apenas para
            consumir recursos. Deus nos projetou para que nossa vida faça a
            diferença; fomos criados para acrescentar à vida na Terra, não
            apenas para extrair. Fomos criados e salvos para servir a Deus. A
            Bíblia diz: “Foi ele quem nos salvou e nos escolheu para o seu santo
            trabalho, não porque merecêssemos, mas porque esse era o seu plano
            muito antes do princípio do mundo – mostrar o seu amor e sua bondade
            para conosco por meio de Cristo” (2 Tm 1:9). Não fomos salvos pelo
            serviço, mas para o serviço.
          </P>
          <P className="">
            No Reino de Deus, temos um lugar, um propósito, um papel e uma
            função a cumprir. Isso dá à nossa vida enorme importância e valor.
            Daremos a vida por algo. O que será? Uma carreira, um esporte, um
            passatempo, fama, riquezas? Nenhuma dessas coisas será importante
            para sempre. Servir é o caminho para a verdadeira importância. É por
            meio do ministério que descobrimos o significado da vida. A Palavra
            de Deus diz: “Todos achamos nosso significado e função, como parte
            do seu corpo” (Rm 12:5). Ao servirmos juntos na família de Deus,
            nossa vida assume uma importância eterna.
          </P>
          <P className="">
            Logo, Jesus, percebendo a ambição no coração dos Seus discípulos,
            chama-os à parte e ministra-lhes mais uma lição sobre o espírito de
            grandeza que predomina no mundo. Ser grande no conceito do mundo é
            ser servido e ter poder sobre os outros. Mas, segundo Jesus (Mc
            10:43-44), a grandeza no Reino de Deus é medida pelo serviço e não
            pela dominação. Ser grande é ser servo, é estar a serviço dos outros
            em vez de ser servido pelos outros.
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-o-chamado-a-participacao-nos-milagres">
            4. O Chamado à Participação nos Milagres
          </H3>
          <P className="">
            Em Marcos 16:14-20, Jesus comissiona seus discípulos para pregar o
            Evangelho e realizar milagres. Trata-se da Grande Comissão, a ordem
            pós- ressurreição de Jesus aos seus discípulos, que é encontrada
            também nos outros três Evangelhos (Mt 28:19-20; Lc 24:47; Jo 20:21)
            e tem o propósito de fazer discípulos que observem os mandamentos de
            Cristo. As Escrituras ensinam claramente que Cristo deseja que seus
            seguidores realizem milagres ao anunciar o evangelho do Reino de
            Deus. Os discípulos de Jesus não deveriam apenas pregar o evangelho
            do reino e levar a salvação àqueles que creem (Mc 16:15-16), mas
            também concretizar o Reino de Deus, como fez Jesus (At 10:38) ao
            expulsar demônios e curar doenças e enfermidades.
          </P>
          <P className="">
            Paul Beasley-Murray faz algumas considerações sobre esta passagem
            bíblica:
          </P>
          <P className="">
            Primeiro, a boa nova é o próprio Jesus (Mc 16:15). As boas-novas são
            uma das palavras favoritas de Marcos, usadas sete vezes. Para ele, a
            história de Jesus é a boa nova a ser proclamada, pois Jesus, pela
            sua morte e ressurreição, estabeleceu o Seu Reino.
          </P>
          <P className="">
            Segundo, a boa nova de Jesus precisa ser pregada (Mc 16:15). O verbo
            "pregar" é outra palavra preferida de Marcos, encontrada 14 vezes
            neste evangelho, enquanto aparece apenas nove vezes em Mateus e
            Lucas. Marcos enfatiza que Cristo veio pregando (Mc 1:14), chamou
            seus discípulos para pregar (Mc 3:14), enviou-os a pregar e agora
            ordena que preguem em todo o mundo. Dewey Mulholland afirma que
            estar calado é um perigo maior que perseguição e morte; o evangelho
            só é boas-novas se for compartilhado.
          </P>
          <P className="">
            Terceiro, a boa nova de Jesus precisa ser recebida (Mc 16:16). O
            evangelho só é experimentado como boas-novas quando é recebido e
            crido. A Palavra de Deus é como uma espada de dois gumes: traz vida
            e também sentencia com a morte.
          </P>
          <P className="">
            Por último, a boa nova de Jesus precisa ser confirmada (Mc 16:18).
            Adolf Pohl afirma que os sinais não estão vinculados a cargos, mas à
            fé que permite que Deus seja Deus. Os sinais fazem parte do contexto
            missionário, pois o fato de "acompanharem" pressupõe que os
            discípulos estão em missão para difundir o evangelho.
          </P>
          <P className="">
            Enfim, a igreja é chamada para ser um sinal de Cristo vivo e
            ressurreto no mundo. William Barclay conclui seu comentário sobre
            Marcos afirmando que a vida cristã é vivida na presença e no poder
            daquele que foi crucificado e ressuscitou. O evangelista Marcos
            finaliza seu livro enfatizando duas verdades: Cristo é coroado à
            destra de Deus Pai e a igreja, em parceria com o Senhor, realiza Sua
            obra (Mc 16:19-20).
          </P>
        </div>

        <div className="flex flex-col gap-4">
          <H3 id="lesson-4-conclusao">Conclusão</H3>
          <P className="">
            Muitos dos seguidores de Jesus poderiam ser chamados de discípulos
            porque ouviam o Mestre e criam no que Ele dizia. Entretanto, Cristo
            escolheu apenas um grupo seleto e heterogêneo para confiar a ele a
            tarefa de levar o evangelho a todo o mundo. Um grupo como esse era
            um risco incrível, mas em Cristo, não há galileu nem judeu, nem
            conservador nem progressista, nem pecador nem cobrador nem zelote.
            Foi feito algo novo! Todos nós temos limitações. Jesus pode
            transformar um Tomé cético e incrédulo, num homem crente. Ele pode
            usar gente como você e eu na sua obra.
          </P>
          <P className="">
            O chamado de Jesus ao discipulado foi feito a todos que quiserem
            “vir após mim”. Não há nada que possa impedir quem está disposto a
            fazer isso. Nos dias de Jesus, tomar a cruz era, antes de tudo, uma
            confissão pública, não uma decisão tomada em segredo. O discipulado
            é uma proposta oferecida a todos indistintamente. Cristo dirige-se
            não apenas aos discípulos, mas também à multidão. O discipulado não
            é apenas para uma elite espiritual, mas para todos quantos quiserem
            seguir a Ele.
          </P>
          <P className="">
            A verdadeira grandeza não é questão de liderança, de autoridade, nem
            de grandes realizações pessoais, mas sim uma atitude do coração, de
            viver para Deus e para o próximo. Devemos nos dedicar a Deus de tal
            modo que nos identifiquemos com Sua vontade e propósitos na terra,
            sem desejarmos honrarias, posições de destaque ou recompensas
            materiais. Cumprir a vontade de Deus, levar os outros à salvação em
            Cristo, e agradar-Lhe são as recompensas dos que são realmente
            grandes.
          </P>
          <P className="">
            Finalmente, os discípulos partiram e pregaram por toda parte. O
            Senhor cooperou com eles confirmando a Palavra por meio de sinais.
            Esses cristãos, revestidos com o poder do Espírito Santo, mesmo
            perseguidos, empobrecidos, empunharam a bandeira do evangelho,
            proclamaram com desassombro a mensagem da ressurreição e
            conquistaram o mundo com o poder do evangelho.
          </P>
        </div>
      </Container>

      <Separator className="my-8" />

      {/* Referências Bibliográficas */}
      <Container className="mb-10 sm:mb-16">
        <H2 id="references">Referências Bibliográficas</H2>
        <div className="flex flex-col gap-4">
          <P className="">
            CARVALHO, JB. Metanoia: A Chave Está em sua mente. Brasília: Editora
            Chara, 2018.
          </P>
          <P className="">
            LOPES, Hernandes Dias. Marcos o Evangelho dos milagres. 2. Ed. – São
            Paulo: Hagnos, 2012. (Comentários Expositivos Hagnos).
          </P>
          <P className="">
            PEARLMAN, Myer. Conhecendo as doutrinas da Bíblia / Myer Pearlman:
            tradução Lawrence Olson – São Paulo: Ed. Vida, 2006.
          </P>
          <P className="">
            PFEIFFER, Charles F. Comentário Bíblico Moody. Volume 4: Os
            Evangelhos e Atos. São Paulo, 2001.
          </P>
          <P className="">
            RADMACHER, Earl D. O novo comentário bíblico NT, com recursos
            adicionais – A Palavra de Deus ao alcance de todos. 1 Ed. Rio de
            Janeiro, 2010.
          </P>
          <P className="">
            RIBAS JÚNIOR, Degmar. Dicionário Bíblico Wycliffe. 2. Ed. Rio de
            Janeiro, 2007.
          </P>
          <P className="">
            STAMPS, Donald C. Bíblia de Estudo Pentecostal – Revista e
            Corrigida. Edição 1995. Rio de Janeiro, 2002.
          </P>
          <P className="">
            WARREN, Rick, 1954. Uma vida com propósitos: você não está aqui por
            acaso; tradução James Monteiro dos Teis – São Paulo: Editora Vida,
            2003.
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
              <span className="font-semibold">Curso:</span> Marcos
            </P>
            <P className="mt-0">
              <span className="font-semibold">Ano:</span> 2024
            </P>
            <P className="mt-0">
              <span className="font-semibold">1ª Edição</span>
            </P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Conselho Editorial:</P>
            <P className="mt-0">Pr Sinval Júlio de Souza</P>
            <P className="mt-0">Pr Lúcio Andres</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Revisão:</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Projeto Gráfico e Diagramação:</P>
            <P className="mt-0">Márcio Rezende</P>
          </div>
          <div className="flex flex-col">
            <P className="mt-0 font-semibold">Comentarista:</P>
            <P className="mt-0">Isadora Fagundes</P>
          </div>
        </div>
      </Container>
    </section>
  );
}
