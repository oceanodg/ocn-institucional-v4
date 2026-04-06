import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

type Material = {
  title: string;
  link?: string;
};

type MaterialGroup = {
  title: string;
  materials: Material[];
};

const oldTestamentMaterials: MaterialGroup[] = [
  {
    title: "Livros da Lei (Pentateuco)",
    materials: [
      { title: "Gênesis" },
      { title: "Êxodo" },
      { title: "Levítico" },
      { title: "Números" },
      { title: "Deuteronômio" },
    ],
  },

  {
    title: "Livros Históricos",
    materials: [
      { title: "Josué" },
      { title: "Juízes" },
      { title: "Rute" },
      { title: "1 Samuel" },
      { title: "2 Samuel" },
      { title: "1 Reis" },
      { title: "2 Reis" },
      { title: "1 Crônicas" },
      { title: "2 Crônicas" },
      { title: "Esdras" },
      { title: "Neemias" },
      { title: "Ester" },
    ],
  },

  {
    title: "Livros Poéticos",
    materials: [
      { title: "Jó" },
      { title: "Salmos" },
      { title: "Provérbios" },
      { title: "Eclesiastes" },
      { title: "Cantares de Salomão" },
    ],
  },

  {
    title: "Livros dos Profetas Maiores",
    materials: [
      {
        title: "Isaías (Módulo 1)",
        link: "/oceano-academy/materiais-didaticos/isaias-1",
      },
      {
        title: "Isaías (Módulo 2)",
        link: "/oceano-academy/materiais-didaticos/isaias-2",
      },
      { title: "Jeremias" },
      { title: "Lamentações de Jeremias" },
      { title: "Ezequiel" },
      { title: "Daniel" },
    ],
  },

  {
    title: "Livros dos Profetas Menores",
    materials: [
      { title: "Oséias" },
      { title: "Joel" },
      { title: "Amós" },
      { title: "Obadias" },
      { title: "Jonas" },
      { title: "Miquéias" },
      { title: "Naum" },
      { title: "Habacuque" },
      { title: "Sofonias" },
      { title: "Ageu" },
      { title: "Zacarias" },
      { title: "Malaquias" },
    ],
  },
];

const newTestamentMaterials: MaterialGroup[] = [
  {
    title: "Evangelhos",
    materials: [
      {
        title: "Mateus",
        link: "/oceano-academy/materiais-didaticos/mateus",
      },
      {
        title: "Marcos",
        link: "/oceano-academy/materiais-didaticos/marcos",
      },
      {
        title: "Lucas",
        link: "/oceano-academy/materiais-didaticos/lucas",
      },
      {
        title: "João",
        link: "/oceano-academy/materiais-didaticos/joao",
      },
    ],
  },
  {
    title: "Livro Histórico",
    materials: [
      {
        title: "Atos dos Apóstolos",
        link: "/oceano-academy/materiais-didaticos/atos",
      },
    ],
  },
  {
    title: "Cartas de Paulo",
    materials: [
      {
        title: "Introdução às Cartas Paulinas",
        link: "/oceano-academy/materiais-didaticos/introducao-cartas-paulinas",
      },
      {
        title: "Romanos",
        link: "/oceano-academy/materiais-didaticos/romanos",
      },
      {
        title: "1 Coríntios",
        link: "/oceano-academy/materiais-didaticos/corintios",
      },
      {
        title: "2 Coríntios",
        link: "/oceano-academy/materiais-didaticos/corintios",
      },
      {
        title: "Gálatas",
        link: "/oceano-academy/materiais-didaticos/galatas",
      },
      {
        title: "Efésios",
        link: "/oceano-academy/materiais-didaticos/efesios",
      },
      {
        title: "Filipenses",
        link: "/oceano-academy/materiais-didaticos/filipenses",
      },
      {
        title: "Colossenses",
        link: "/oceano-academy/materiais-didaticos/colossenses",
      },
      {
        title: "1 Tessalonicenses",
        link: "/oceano-academy/materiais-didaticos/tessalonicenses",
      },
      {
        title: "2 Tessalonicenses",
        link: "/oceano-academy/materiais-didaticos/tessalonicenses",
      },
      {
        title: "1 Timóteo",
        link: "/oceano-academy/materiais-didaticos/timoteo",
      },
      {
        title: "2 Timóteo",
        link: "/oceano-academy/materiais-didaticos/timoteo",
      },
      {
        title: "Tito",
        link: "https://drive.google.com/file/d/1FVFG8B0bPQQkcGIXLX2e60qx_OCt07de/view?usp=sharing",
      },
      {
        title: "Filemon",
        link: "https://drive.google.com/file/d/1FVFG8B0bPQQkcGIXLX2e60qx_OCt07de/view?usp=sharing",
      },
    ],
  },
  {
    title: "Cartas Gerais",
    materials: [
      {
        title: "Hebreus",
        link: "https://drive.google.com/file/d/1PkJhr8y-yvWPnHIMnk4PBIyapQVK8bKz/view?usp=sharing",
      },
      {
        title: "Tiago",
        link: "https://drive.google.com/file/d/1pOXTmU1U1eshlCAOiXEd94G-ewUo9kHD/view?usp=sharing",
      },
      {
        title: "1 Pedro",
        link: "https://drive.google.com/file/d/1BOs7TpPH8oot4KZ1HUzc4ut1wXiGAmsh/view?usp=sharing",
      },
      {
        title: "2 Pedro",
        link: "https://drive.google.com/file/d/1BOs7TpPH8oot4KZ1HUzc4ut1wXiGAmsh/view?usp=sharing",
      },
      {
        title: "1 João",
        link: "https://drive.google.com/file/d/1bLpcHJZ-B0jJcMg9vY354SBKwSHwcNp-/view?usp=sharing",
      },
      {
        title: "2 João",
        link: "https://drive.google.com/file/d/1bLpcHJZ-B0jJcMg9vY354SBKwSHwcNp-/view?usp=sharing",
      },
      {
        title: "3 João",
        link: "https://drive.google.com/file/d/1bLpcHJZ-B0jJcMg9vY354SBKwSHwcNp-/view?usp=sharing",
      },
      {
        title: "Judas",
        link: "https://drive.google.com/file/d/1bLpcHJZ-B0jJcMg9vY354SBKwSHwcNp-/view?usp=sharing",
      },
    ],
  },
  {
    title: "Livro Profético",
    materials: [
      {
        title: "Introdução ao Apocalipse",
        link: "/oceano-academy/materiais-didaticos/introducao-ao-apocalipse",
      },
      {
        title: "Apocalipse",
        link: "/oceano-academy/materiais-didaticos/apocalipse",
      },
    ],
  },
];

function materialLI(material: Material): React.ReactNode {
  if (material.link) {
    return (
      <li key={material.title}>
        <a
          href={material.link}
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

export default function MateriaisDidaticosPage() {
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
          <Tabs defaultValue="novo" className="w-full">
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
                    <UL className="list-disc">
                      {material.materials.map(materialLI)}
                    </UL>
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
                    <UL className="list-disc">
                      {material.materials.map(materialLI)}
                    </UL>
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
