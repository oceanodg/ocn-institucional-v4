import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, P, Separator } from "~/components/ui";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { validTabs, type ValidTab } from "./constants";
import { EscolaBiblicaBackButton } from "~/components/back-buttons/escola-biblica-back-button";
import {
  MaterialsTabContent,
  type Material,
  type MaterialGroup,
  type MaterialsTab,
} from "./materials-tab-content";

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

const charactersMaterials: MaterialGroup[] = [
  {
    title: "Primeiros Eventos Bíblicos",
    description: [""],
    materials: [
      {
        title: "Adão",
        description: "Primeiro homem, criado por Deus",
        url: "https://drive.google.com/file/d/1suEfqfgz-O5gvq8WWtUHFZjKc_Urptot/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Eva",
        description: "Primeira mulher, criada por Deus",
        url: "https://drive.google.com/file/d/1h0bCOJEKCA8x4_V38tCazlQEom7ofwPJ/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Caim",
        description: "Primeiro filho de Adão e Eva, marcado após matar Abel",
        url: "https://drive.google.com/file/d/1eJOOTlKnrZ6UrHH0TOCkl2w6N665j1P0/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Abel",
        description: "Filho justo de Adão e Eva, primeiro mártir da fé",
        url: "https://drive.google.com/file/d/1oQLCmUPV2VQv9RLiGwHIs8Atp5TbCyZl/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Sete",
        description: "Terceiro filho de Adão e Eva, linhagem da qual viria Noé",
        url: "https://drive.google.com/file/d/1FtgpPgw_q33wRS-Rl_lFi6IqO8hFqGh9/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Noé",
        description: "Justo diante de Deus, construtor da Arca e arauto da fé",
        url: "https://drive.google.com/file/d/15FOx0Zao0OO81EKTvm-YpJwP9WQdGdyZ/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
  {
    title: "Era Patriarcal",
    description: [""],
    materials: [
      {
        title: "Abraão",
        description: "Pai da fé de muitos povos, chamado de Ur para Canaã",
        url: "https://drive.google.com/file/d/1xpDrb8cq13LCKFDsbigoei7eO7tt6jKo/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Isaac",
        description: "Filho da promessa, Herdeiro da Aliança",
        url: "https://drive.google.com/file/d/10ba4NpP5CxCNtYZimz5r2NqIs3_bBkUi/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Jacó",
        description: "Pai das doze tribos de Israel",
        url: "https://drive.google.com/file/d/1iAjSp0qptwd6OMSpyA-V3ghP-68fJAXs/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "José",
        description: "Governador do Egito, exemplo de providência divina",
        url: "https://drive.google.com/file/d/1z87jhh43C3HJ1fTHZj1nFZyZIq-WlFLe/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Jó",
        description:
          "Homem íntegro e temente a Deus, exemplo de fidelidade em meio ao sofrimento",
        url: "https://drive.google.com/file/d/1zK--xHYzTNtQGaPadxiTPNXCqREk84Yi/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
  {
    title: "O Êxodo e a Conquista de Canaã",
    description: [""],
    materials: [
      {
        title: "Moisés",
        description:
          "Libertador de Israel, mediador da aliança e das leis de Deus",
        url: "https://drive.google.com/file/d/1JqFk5Odht8q_ME1OO789pbW_mgi0vaZZ/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Arão",
        description: "Irmão de Moisés e primeiro sumo sacerdote de Israel",
        url: "https://drive.google.com/file/d/14zhGMf7gtFiXshkki4ppnmdYOsbHNDtY/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Josué",
        description: "Sucessor de Moisés, líder na conquista de Canaã",
        url: "https://drive.google.com/file/d/1hF6diTnRAHAy_dJTGu1XZObUHfgVcW65/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
  {
    title: "Período dos Juízes",
    description: [""],
    materials: [
      {
        title: "Gideão",
        description:
          "Conhecido por sua vitória sobre os midianitas com um pequeno exército",
        url: "https://drive.google.com/file/d/1FWumtCXhMacM8jLFthAbBzXKk7TFJGHP/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Sansão",
        description:
          "Famoso por sua força extraordinária, consagrado nazireu desde o nascimento",
        url: "https://drive.google.com/file/d/1ajJwg4CHohz8rC4hdDJHjAF4h5eqfY1V/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
  {
    title: "Período da Monarquia Unida e Dividida",
    description: [""],
    materials: [
      {
        title: "Rei Saul",
        description: "Primeiro rei de Israel, ungido pelo profeta Samuel",
        url: "https://drive.google.com/file/d/1qkNs3GT7NvLyv5J3FwXra0T4yDZvszsC/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Rei Davi",
        description: "Conhecido como o homem segundo o coração de Deus",
        url: "https://drive.google.com/file/d/1jcCwmOvc7LHzdgjjdya7iMs-LP2KufXl/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Rei Salomão",
        description:
          "Famoso por sua sabedoria e por construir o Templo em Jerusalém",
        url: "https://drive.google.com/file/d/1QSEXB4tAS3RSem_8bKnUpbAGNRg_kcY_/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Elias",
        description:
          "Profeta poderoso de Israel, confrontou Acabe e os profetas de Baal",
        url: "https://drive.google.com/file/d/10SZNMlrOpdmWDFfh5WMZtxuvEQ5wQwSr/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Eliseu",
        description:
          "Sucessor de Elias, famoso por milagres e ministério entre reis",
        url: "https://drive.google.com/file/d/1J80wdGdEfl_Tm1Jtu1FjQpyc8Yjk0IsB/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Jonas",
        description:
          "Profeta enviado a Nínive, conhecido pela história do grande peixe",
        url: "https://drive.google.com/file/d/1ot-mGBjN9SEPsjozUhRYB27Cur1vA726/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Oséias",
        description:
          "Profeta que ilustrou o amor persistente de Deus por Israel",
        url: "https://drive.google.com/file/d/1oWIPVmaMvaMA3d4SqpzVWhewcLKdKX0j/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Isaías",
        description: "Profeta autor de grandes profecias sobre o Messias",
        url: "https://drive.google.com/file/d/1CfRTXAQB26IGx6R5Y6SKoOaIN2-xAZqs/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Jeremias",
        description: "Profeta das lágrimas, autor das Lamentações",
        url: "https://drive.google.com/file/d/10zgf5KeZN3_TOAOSjytO0C7ckMrQaM6x/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Habacuque",
        description:
          "Conhecido pelo diálogo com Deus sobre justiça e sofrimento",
        url: "https://drive.google.com/file/d/1B-mh9FSyrC6AAOtzNihjo2Rsp5op8uj1/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Daniel",
        description:
          "Profeta na corte da Babilônia, intérprete de sonhos e visões",
        url: "https://drive.google.com/file/d/1pC4JkIGxx09hQ6CTnN1BKNlTxjsJz6Wt/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Ezequiel",
        description:
          "Profeta do exílio babilônico, conhecido por visões simbólicas",
        url: "https://drive.google.com/file/d/1WGkkZtokK-yRuxqv2XU5DE2x9zx2Q0ld/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Joel",
        description: "O profeta do derramamento do Espírito",
        url: "https://drive.google.com/file/d/11kbz5NJ6CcjDuUJLUh-3rHCCCJudGX0s/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Amós",
        description: "O profeta da justiça",
        url: "https://drive.google.com/file/d/11y0DnlOpYF86bwqn4pD3RQH8w7jaDbq5/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Obadias",
        description: "A dor de Deus diante da infidelidade",
        url: "https://drive.google.com/file/d/1X4t0s48NJK6uLjt9xPjR1U24CFWGFHmn/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Miquéias",
        description: "Profeta da justiça e da esperança",
        url: "https://drive.google.com/file/d/1-NUi1SF4KsQ-xxps7va97BQYD5hBHQMc/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Naum",
        description: "Juízo sobre Nínive",
        url: "https://drive.google.com/file/d/1bSDQ3XF4kPGj7k1Sd5VV337g3JYRWGvM/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Sofonias",
        description: 'Profetizou sobre o "Dia do Senhor"',
        url: "https://drive.google.com/file/d/1SqQXpwItkfRXLPJrxpSVUWEgsRiVe2Gd/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Ageu",
        description: "Profetizou sobre a apatia espiritual",
        url: "https://drive.google.com/file/d/1A2DLHLIfbPuNwEHU40E2wjB3LKeWuXGb/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Zacarias",
        description: "Anuncia renovação espiritual",
        url: "https://drive.google.com/file/d/1acALOjRC5DZhCifnJHF6r6tdZL-YXC-L/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Profeta Malaquias",
        description: "Chama o povo ao retorno sincero",
        url: "https://drive.google.com/file/d/1mCXXh8fe-GxXrPwJqtdXSUpG4p4AQHgj/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
];

const materialTabs: MaterialsTab[] = [
  {
    value: "antigo",
    heading: "Antigo Testamento",
    groups: oldTestamentMaterials,
  },
  {
    value: "novo",
    heading: "Novo Testamento",
    groups: newTestamentMaterials,
  },
  {
    value: "personagens",
    heading: "Personagens",
    groups: charactersMaterials,
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

export default async function MateriaisDidaticosPage({
  searchParams,
}: MateriaisDidaticosPageProps) {
  const params = await searchParams;
  const tab = Array.isArray(params?.tab) ? params.tab[0] : params?.tab;
  const defaultTab = isValidTab(tab) ? tab : "antigo";

  return (
    <section className="relative backdrop-blur-sm">
      <EscolaBiblicaBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Materiais de Apoio</H1>
          <P className="mt-0">
            Consolide o seu conhecimento bíblico com os materiais de apoio da
            Escola Bíblica da Oceano Academy.
          </P>
        </div>
      </HeroContainer>

      <Separator className="my-10" />

      <div className="space-y-0">
        <Container className="mb-10 sm:mb-16">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="mb-6" variant="line">
              <TabsTrigger value="antigo">AT</TabsTrigger>
              <TabsTrigger value="novo">NT</TabsTrigger>
              <TabsTrigger value="personagens">Personagens</TabsTrigger>
            </TabsList>

            {materialTabs.map((tab) => (
              <MaterialsTabContent key={tab.value} {...tab} />
            ))}
          </Tabs>
        </Container>
      </div>
    </section>
  );
}
