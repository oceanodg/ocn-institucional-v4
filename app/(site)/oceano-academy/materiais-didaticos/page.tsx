import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { UL } from "~/components/ui/ul";

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
        link: "https://drive.google.com/file/d/1gTSXK2HEoIV9u9KYAk7heojbrBEsLsfo/view?usp=sharing",
      },
      {
        title: "Isaías (Módulo 2)",
        link: "https://drive.google.com/file/d/1CsmXlXjmYKjQWZU5ZBQzkzR2o9fXEwVS/view?usp=sharing",
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
        link: "https://drive.google.com/file/d/19h0gpUvWjRwC22KNRLdn0jkwy7i28uq4/view?usp=sharing",
      },
      {
        title: "Marcos",
        link: "https://drive.google.com/file/d/1Fv97OYLq0BnH7CtliODGiUxnIMwNsF4V/view?usp=sharing",
      },
      {
        title: "Lucas",
        link: "https://drive.google.com/file/d/1FUsn59OUpWohICD6K3bQWT-5KreF_zzh/view?usp=sharing",
      },
      {
        title: "João",
        link: "https://drive.google.com/file/d/1BOOFXMBL7lvufbiHPeCTHJ-Mio4uFwl3/view?usp=sharing",
      },
    ],
  },
  {
    title: "Livro Histórico",
    materials: [
      {
        title: "Atos dos Apóstolos",
        link: "https://drive.google.com/file/d/1hxws88uPWOOF70X8MRp9NZRzecX_TFDp/view?usp=sharing",
      },
    ],
  },
  {
    title: "Cartas de Paulo",
    materials: [
      {
        title: "Introdução às Cartas Paulinas",
        link: "https://drive.google.com/file/d/1eW57j-NbUN2XpL9njr_aPXpWUCUESlWM/view?usp=sharing",
      },
      {
        title: "Romanos",
        link: "https://drive.google.com/file/d/1HqO-AezNpQAoH2-qb6k2Pv1vR-kcv371/view?usp=sharing",
      },
      {
        title: "1 Coríntios",
        link: "https://drive.google.com/file/d/1rmzOF3dEmFNaBAjkw2FWBirtp3ckzxnh/view?usp=sharing",
      },
      {
        title: "2 Coríntios",
        link: "https://drive.google.com/file/d/1rmzOF3dEmFNaBAjkw2FWBirtp3ckzxnh/view?usp=sharing",
      },
      {
        title: "Gálatas",
        link: "https://drive.google.com/file/d/1MHsV1a7wEmgFkYCmlqYqP8W_qOvSi9ME/view?usp=sharing",
      },
      {
        title: "Efésios",
        link: "https://drive.google.com/file/d/14KOv7sIQ5g_Gz33R__1i_oXwBswgq_XN/view?usp=sharing",
      },
      {
        title: "Filipenses",
        link: "https://drive.google.com/file/d/1fZy2ZL39xzwLo3YVaK4Ng784g2r_HnJr/view?usp=sharing",
      },
      {
        title: "Colossenses",
        link: "https://drive.google.com/file/d/1KzjYNdsRlRoXSWtyY7IK-c2gQQmwP0rX/view?usp=sharing",
      },
      {
        title: "1 Tessalonicenses",
        link: "https://drive.google.com/file/d/1rz6A0WmWONGlKvGaTJjWsf9m-vUvX9dn/view?usp=sharing",
      },
      {
        title: "2 Tessalonicenses",
        link: "https://drive.google.com/file/d/1rz6A0WmWONGlKvGaTJjWsf9m-vUvX9dn/view?usp=sharing",
      },
      {
        title: "1 Timóteo",
        link: "https://drive.google.com/file/d/188fmXS3j1oZpaytCO6Enh3ftMrzOxZSV/view?usp=sharing",
      },
      {
        title: "2 Timóteo",
        link: "https://drive.google.com/file/d/188fmXS3j1oZpaytCO6Enh3ftMrzOxZSV/view?usp=sharing",
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
        link: "/oceano-academy/materiais-didaticos/curso-apocalipse",
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
        {/* <Container className="py-0 sm:py-0">
          <div>
            <P className="flex items-center gap-2">
              Clique nos links abaixo para acessar os materiais didáticos da
              Escola Bíblica.
            </P>
          </div>
        </Container> */}

        <Container className="mb-10 sm:mb-16">
          <H2>Antigo Testamento</H2>

          {oldTestamentMaterials.map((material) => (
            <div key={material.title}>
              <H3>{material.title}</H3>
              <UL className="list-disc">
                {material.materials.map(materialLI)}
              </UL>
            </div>
          ))}
        </Container>

        <Container className="mb-10 sm:mb-16">
          <H2>Novo Testamento</H2>
          {newTestamentMaterials.map((material) => (
            <div key={material.title}>
              <H3>{material.title}</H3>
              <UL className="list-disc">
                {material.materials.map(materialLI)}
              </UL>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
