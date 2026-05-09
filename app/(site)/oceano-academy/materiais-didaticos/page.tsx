import Link from "next/link";
import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { cn } from "~/lib/utils";
import { validTabs, type ValidTab } from "./constants";

type Material = {
  title: string;
  description: string;
  url?: string;
};

type MaterialGroup = {
  title: string;
  description: Array<string>;
  materials: Array<Material>;
};

type MateriaisDidaticosPageProps = {
  searchParams?: Promise<{
    tab?: string | string[];
  }>;
};

function isValidTab(tab?: string): tab is ValidTab {
  return validTabs.includes(tab as ValidTab);
}

const oldTestamentMaterials: MaterialGroup[] = [
  {
    title: "Panorama",
    description: [
      "Uma visão geral da história bíblica do Antigo Testamento, desde a criação até o pós-exílio.",
    ],
    materials: [
      {
        title: "Panorama",
        description:
          "Uma visão geral da história bíblica do Antigo Testamento, desde a criação até o pós-exílio",
        url: "/oceano-academy/materiais-didaticos/panorama-biblico-at",
      },
    ],
  },

  {
    title: "Livros da Lei (Pentateuco)",
    description: [
      "Os cinco primeiros livros contam a história da criação do mundo e da nação que Deus escolheu para si. ",
      "São chamados livros da lei porque possuem as leis Mosaicas, divididas em dois grupos, a lei de Deus (os dez mandamentos) e a lei disciplinar ditas por Moisés.",
    ],
    materials: [
      {
        title: "Gênesis",
        description: "História da criação; Família de Abraão",
      },
      {
        title: "Êxodo",
        description: "Libertação de Israel do cativeiro egípcio",
      },
      { title: "Levítico", description: "Instruções para adoração" },
      {
        title: "Números",
        description: "Censos de Israel e peregrinação no deserto",
      },
      {
        title: "Deuteronômio",
        description: "Últimos sermões e leis de Moisés",
      },
    ],
  },

  {
    title: "Livros Históricos",
    description: [
      "Conta a história de Israel depois da instalação do povo em Canaã, a terra prometida.",
    ],
    materials: [
      { title: "Josué", description: "Conquistas de Canaã" },
      { title: "Juízes", description: "Anos de apostasia" },
      { title: "Rute", description: "Biografia de Rute" },
      { title: "1 Samuel", description: "O estabelecimento da monarquia" },
      { title: "2 Samuel", description: "Ascensão do rei Davi" },
      { title: "1 Reis", description: "Morte de Davi e reinado de Salomão" },
      { title: "2 Reis", description: "Reinos de Israel e Judá" },
      { title: "1 Crônicas", description: "História de Judá" },
      {
        title: "2 Crônicas",
        description: "Da monarquia ao cativeiro babilônico",
      },
      { title: "Esdras", description: "Volta do cativeiro" },
      { title: "Neemias", description: "Reconstrução de Jerusalém" },
      { title: "Ester", description: "Biografia de Ester" },
    ],
  },

  {
    title: "Livros Poéticos",
    description: [
      "Estes livros falam sobre a grandeza de Deus e da beleza da sua criação.",
      "Também nos aconselham sobre uma vida reta diante de Deus.",
    ],
    materials: [
      { title: "Jó", description: "Sofrimento e fragilidade da vida humana" },
      { title: "Salmos", description: "Experiência pessoal com Deus" },
      {
        title: "Provérbios",
        description: "Princípios aprendidos pela experiência",
      },
      { title: "Eclesiastes", description: "O que dá significado à vida?" },
      { title: "Cantares de Salomão", description: "Bênçãos do amor conjugal" },
    ],
  },

  {
    title: "Livros dos Profetas Maiores",
    description: [
      "Nos tempos de crise, Deus enviava seus profetas para falarem com o povo. Esta é a temática destes livros.",
      "O termo 'maior' refere-se ao tamanho e não a importância.",
    ],
    materials: [
      {
        title: "Isaías (Módulo 1)",
        description:
          "Alertas, profecias, chamado ao arrependimento, o amor e a justiça de Deus",
        url: "/oceano-academy/materiais-didaticos/isaias-1",
      },
      {
        title: "Isaías (Módulo 2)",
        description:
          "Denúncia do pecado, o livramento de Deus, a grandiosidade do Senhor, a salvação messiânica e as promessas para o futuro glorioso de Sião",
        url: "/oceano-academy/materiais-didaticos/isaias-2",
      },
      { title: "Jeremias", description: "Sobre a destruição de Jerusalém" },
      {
        title: "Lamentações de Jeremias",
        description: "Prantos sobre Jerusalém",
      },
      { title: "Ezequiel", description: "O afastamento da glória de Deus" },
      { title: "Daniel", description: "Profecias messiânicas" },
    ],
  },

  {
    title: "Livros dos Profetas Menores",
    description: [
      "Os profetas menores são uma coleção de doze livros breves, mas muito importantes para se entender a história de Israel.",
    ],
    materials: [
      { title: "Oséias", description: "Sobre reconciliação com Deus" },
      { title: "Joel", description: "Sobre arrependimento e bênçãos divinas" },
      { title: "Amós", description: "Sobre os abusos dos ricos" },
      {
        title: "Obadias",
        description: "Sobre o julgamento divino contra Edom",
      },
      {
        title: "Jonas",
        description: "Sobre a graça de Deus alcançando as piores pessoas",
      },
      { title: "Miquéias", description: "Sobre o desprezo do Senhor pelo mal" },
      { title: "Naum", description: "Sobre o desprezo do Senhor pelo mal" },
      { title: "Habacuque", description: "Sobre Deus salvando o seu povo" },
      { title: "Sofonias", description: "O Senhor é um Deus de justiça" },
      { title: "Ageu", description: "Sobre a reconstrução do templo" },
      { title: "Zacarias", description: "Sobre a reconstrução do templo" },
      { title: "Malaquias", description: "Sobre a restauração da comunhão" },
    ],
  },
];

const newTestamentMaterials: MaterialGroup[] = [
  {
    title: "Panorama",
    description: [
      "Uma visão geral da história bíblica do Novo Testamento, uma compilação de livros e cartas escritas após o nascimento de Jesus.",
    ],
    materials: [
      {
        title: "Panorama",
        description:
          "Uma visão geral da história bíblica do Novo Testamento, uma compilação de livros e cartas escritas após o nascimento de Jesus",
        url: "/oceano-academy/materiais-didaticos/panorama-biblico-nt",
      },
    ],
  },
  {
    title: "Evangelhos",
    description: [
      "Relatos do nascimento, da vida, da morte e ressurreição de Jesus Cristo.",
    ],
    materials: [
      {
        title: "Mateus",
        url: "/oceano-academy/materiais-didaticos/mateus",
        description: "Jesus, o Messias prometido do Antigo Testamento",
      },
      {
        title: "Marcos",
        url: "/oceano-academy/materiais-didaticos/marcos",
        description: "Jesus, ocupado em fazer a obra de Deus",
      },
      {
        title: "Lucas",
        url: "/oceano-academy/materiais-didaticos/lucas",
        description: "Jesus, o ser humano ideal",
      },
      {
        title: "João",
        url: "/oceano-academy/materiais-didaticos/joao",
        description: "Jesus, o eterno Filho de Deus que se torna homem",
      },
    ],
  },
  {
    title: "Livro Histórico",
    description: [
      "Relato da fundação da igreja primitiva e da expansão do cristianismo.",
    ],
    materials: [
      {
        title: "Atos",
        url: "/oceano-academy/materiais-didaticos/atos",
        description: "A expansão da igreja através do Império Romano",
      },
    ],
  },
  {
    title: "Cartas de Paulo",
    description: [
      "Fonte mais importante quando queremos estudar temas importantes como salvação, fé, arrependimento, a igreja e outros.",
    ],
    materials: [
      {
        title: "Introdução",
        url: "/oceano-academy/materiais-didaticos/introducao-cartas-paulinas",
        description: "Um estudo sobre a vida de Paulo e suas epístolas",
      },
      {
        title: "Romanos",
        url: "/oceano-academy/materiais-didaticos/romanos",
        description: "O Evangelho e a justificação",
      },
      {
        title: "1 Coríntios",
        url: "/oceano-academy/materiais-didaticos/corintios",
        description: "Resolvendo problemas de relacionamento",
      },
      {
        title: "2 Coríntios",
        url: "/oceano-academy/materiais-didaticos/corintios",
        description: "Princípios da liderança espiritual",
      },
      {
        title: "Gálatas",
        url: "/oceano-academy/materiais-didaticos/galatas",
        description: "Salvação somente pela fé",
      },
      {
        title: "Efésios",
        url: "/oceano-academy/materiais-didaticos/efesios",
        description: "A igreja como corpo vivo de Cristo",
      },
      {
        title: "Filipenses",
        url: "/oceano-academy/materiais-didaticos/filipenses",
        description: "Soluções para a alegria na vida cristã",
      },
      {
        title: "Colossenses",
        url: "/oceano-academy/materiais-didaticos/colossenses",
        description: "Espiritualidade explicada",
      },
      {
        title: "1 Tessalonicenses",
        url: "/oceano-academy/materiais-didaticos/tessalonicenses",
        description: "O ministério missionário e nossa esperança",
      },
      {
        title: "2 Tessalonicenses",
        url: "/oceano-academy/materiais-didaticos/tessalonicenses",
        description: "A segunda vinda de Cristo",
      },
      {
        title: "1 Timóteo",
        url: "/oceano-academy/materiais-didaticos/timoteo",
        description: "Orientação para um jovem líder",
      },
      {
        title: "2 Timóteo",
        url: "/oceano-academy/materiais-didaticos/timoteo",
        description: "Orientação para lidar com falsos mestres",
      },
      {
        title: "Tito",
        url: "/oceano-academy/materiais-didaticos/tito-e-filemom",
        description: "Orientação para outro jovem líder",
      },
      {
        title: "Filemon",
        url: "/oceano-academy/materiais-didaticos/tito-e-filemom",
        description: "Um apelo em favor de um escravo fugitivo",
      },
    ],
  },
  {
    title: "Cartas Gerais",
    description: [
      "Cartas que não são direcionadas a uma igreja específica, mas que tratam de temas importantes como fé, esperança, amor, etc.",
    ],
    materials: [
      {
        title: "Hebreus",
        url: "/oceano-academy/materiais-didaticos/hebreus",
        description: "Sobre a superioridade de Jesus Cristo",
      },
      {
        title: "Tiago",
        url: "/oceano-academy/materiais-didaticos/tiago",
        description: "Vivendo como cristão todos os dias",
      },
      {
        title: "1 Pedro",
        url: "/oceano-academy/materiais-didaticos/pedro",
        description: "Sofrimento e submissão do cristão",
      },
      {
        title: "2 Pedro",
        url: "/oceano-academy/materiais-didaticos/pedro",
        description: "Os escarnecedores e a segunda vinda de Cristo",
      },
      {
        title: "1 João",
        url: "/oceano-academy/materiais-didaticos/cartas-joao-e-judas",
        description: "Amor e obediência na vida cristã",
      },
      {
        title: "2 João",
        url: "/oceano-academy/materiais-didaticos/cartas-joao-e-judas",
        description: "Carta pessoal de encorajamento",
      },
      {
        title: "3 João",
        url: "/oceano-academy/materiais-didaticos/cartas-joao-e-judas",
        description: "Carta pessoal de encorajamento",
      },
      {
        title: "Judas",
        url: "/oceano-academy/materiais-didaticos/cartas-joao-e-judas",
        description: "Uma advertência contra os falsos mestres",
      },
    ],
  },
  {
    title: "Livro Profético",
    description: [
      "Livro profético, escrito para descrever: o fim dos tempos, os acontecimentos que antecederiam a Volta de Cristo e o futuro dos seres humanos.",
    ],
    materials: [
      {
        title: "Introdução",
        url: "/oceano-academy/materiais-didaticos/introducao-ao-apocalipse",
        description: "Uma visão do futuro da humanidade",
      },
      {
        title: "Apocalipse",
        url: "/oceano-academy/materiais-didaticos/apocalipse",
        description:
          "Revelação final de Deus sobre o fim e a vitória de Cristo",
      },
    ],
  },
];

function materialLI(material: Material): React.ReactNode {
  if (material.url) {
    return (
      <li key={material.title}>
        <a
          href={material.url}
          className="hover:underline underline-offset-4 text-blue-500"
        >
          {material.title}
        </a>
      </li>
    );
  }

  return (
    <li key={material.title} className="text-muted-foreground">
      {material.title} <span className="italic">(em breve)</span>
    </li>
  );
}

function LinkMaterial(props: {
  url: string;
  text: string;
  className?: string;
}) {
  const { url, text, className } = props;
  return (
    <Link
      href={url}
      className={cn(
        "dark:text-dark-secondary hover:dark:text-dark-secondary-2",
        "text-light-secondary hover:text-light-secondary-2",
        "block h-full w-full p-3",
        className
      )}
    >
      {text}
    </Link>
  );
}

function MaterialRow(material: Material) {
  const { title, description, url } = material;
  return (
    <TableRow
      className={cn(url ? "hover:cursor-pointer" : "hover:cursor-default")}
    >
      <TableCell className={cn("w-32 sm:w-52", url && "p-0")}>
        {url ? (
          <LinkMaterial
            url={url}
            text={title}
            className="text-blue-500 hover:text-blue-500/80 underline underline-offset-4"
          />
        ) : (
          <span className="text-muted-foreground">{title}</span>
        )}
      </TableCell>
      <TableCell className={cn(url && "p-0")}>
        {url ? (
          <LinkMaterial url={url} text={description} />
        ) : (
          <span className="text-muted-foreground">
            {description} <span className="font-medium italic">– em breve</span>
          </span>
        )}
      </TableCell>
    </TableRow>
  );
}

export default async function MateriaisDidaticosPage({
  searchParams,
}: MateriaisDidaticosPageProps) {
  const params = await searchParams;
  const tab = Array.isArray(params?.tab) ? params.tab[0] : params?.tab;
  const defaultTab = isValidTab(tab) ? tab : "antigo";

  return (
    <section className="relative backdrop-blur-sm">
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Materiais Didáticos</H1>
          <P className="mt-0">
            Consolide o seu conhecimento bíblico com os materiais didáticos da
            Escola Bíblica da Oceano Academy.
          </P>
        </div>
      </HeroContainer>

      <Separator className="my-10" />

      <div className="space-y-0">
        <Container className="mb-10 sm:mb-16">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="mb-6" variant="line">
              <TabsTrigger value="antigo">Antigo Testamento</TabsTrigger>
              <TabsTrigger value="novo">Novo Testamento</TabsTrigger>
            </TabsList>

            <TabsContent value="antigo">
              <section className="py-5 flex flex-col gap-8 sm:gap-10 mb-10">
                <H2>Antigo Testamento</H2>

                {oldTestamentMaterials.map((material) => (
                  <div key={material.title}>
                    <H3>{material.title}</H3>
                    <Table className="mt-6">
                      <TableBody>
                        {material.materials.map((material) => (
                          <MaterialRow key={material.title} {...material} />
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
              </section>
            </TabsContent>

            <TabsContent value="novo">
              <section className="py-5 flex flex-col gap-8 sm:gap-10 mb-10">
                <H2>Novo Testamento</H2>

                {newTestamentMaterials.map((material) => (
                  <div key={material.title}>
                    <H3>{material.title}</H3>
                    <Table className="mt-6">
                      <TableBody>
                        {material.materials.map((material) => (
                          <MaterialRow key={material.title} {...material} />
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
              </section>
            </TabsContent>
          </Tabs>
        </Container>
      </div>
    </section>
  );
}
