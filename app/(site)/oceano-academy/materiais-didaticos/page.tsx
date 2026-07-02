import { Suspense } from "react";
import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, P, Separator } from "~/components/ui";
import { validTabs, type ValidTab } from "./constants";
import { EscolaBiblicaBackButton } from "~/components/back-buttons/escola-biblica-back-button";
import {
  type Material,
  type MaterialGroup,
  type MaterialsTab,
} from "./materials-tab-content";
import { MaterialsTabs } from "./materials-tabs";

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
        url: "/oceano-academy/materiais-didaticos/genesis",
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
  {
    title: "Evangelhos - Figuras Centrais e Familiares",
    description: [""],
    materials: [
      {
        title: "Jesus Cristo",
        description:
          "Filho de Deus, Salvador do mundo, Mestre perfeito, Messias e centro da fé cristã",
        url: "https://drive.google.com/file/d/1jWBrDJ0tqLXNbLnCXsjC8fhveyo3rWId/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Maria",
        description: "Mãe de Jesus, escolhida por Deus para gerar o Salvador",
        url: "https://drive.google.com/file/d/1OGFFz6HZXIepYUuaKBcdiKwZ2Eh6h_UD/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "José",
        description: "Pai terreno e protetor de Jesus durante sua infância",
        url: "https://drive.google.com/file/d/1OpULwQ41QkpOQlPOcJeA4nDEHsxuqcYp/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "João Batista",
        description:
          "Profeta e primo de Jesus que preparou o caminho para o Seu ministério",
        url: "https://drive.google.com/file/d/17GC129QrofJGMXGtUP5DGnQGsUF01aQ9/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
  {
    title: "Os 12 Apóstolos",
    description: [""],
    materials: [
      {
        title: "Pedro (Simão Pedro)",
        description:
          "Líder impulsivo dos discípulos que se tornou pilar da igreja primitiva",
        url: "https://drive.google.com/file/d/11Jw02T28ZeyssKvZ3JE2NBtMaIaU1z0C/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "João",
        description: 'O "discípulo amado"',
        url: "https://drive.google.com/file/d/1hhiZ6IFozgAq5-Kcf2ZGzbGXAUebRND3/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Tiago (filho de Zebedeu)",
        description: "Irmão de João e o primeiro apóstolo a ser martirizado",
        url: "https://drive.google.com/file/d/1Z2adWl2SbkUHI2CA_ZkN37DbC8GlvMOD/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "André",
        description:
          "Irmão de Pedro e o primeiro discípulo a ser chamado por Jesus",
        url: "https://drive.google.com/file/d/1DNY5jj84yGL-U23hVizY_yfHKz3j9bKa/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Filipe",
        description:
          "Discípulo que levou Natanael a Jesus e questionou sobre como alimentar a multidão",
        url: "https://drive.google.com/file/d/1uV_6V65mIOHiBqKYbBVOH9_B1N9Jd-El/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Bartolomeu (Natanael)",
        description:
          "Discípulo elogiado por Jesus como um israelita em quem não havia falsidade",
        url: "https://drive.google.com/file/d/1K5kJYIIbKA1CEagy9w-I_-ace9Uoh8Yh/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Tomé (o dídimo)",
        description:
          "Discípulo que duvidou da ressurreição até ver as feridas de Jesus",
        url: "https://drive.google.com/file/d/1mDMzWb1baqyUGyqxd5U1tyJd3meavdpC/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Mateus (Levi)",
        description:
          "Ex-cobrador de impostos que largou tudo para seguir Jesus",
        url: "https://drive.google.com/file/d/1BMZhYEpHRz2RCtZsEjnGj7NA02P7hcMw/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Tiago (filho de Alfeu)",
        description: 'Conhecido como "Tiago, o Menor"',
        url: "https://drive.google.com/file/d/1NHGUu0dEwIDq-724uWaIR0ZpO24n1ggV/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Simão (o Zelote)",
        description:
          "Discípulo que antes pertencia a um grupo político radical judeu",
        url: "https://drive.google.com/file/d/1Jvo1VVJpnvSk-cxoB5K9weJDAigRw8_9/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Judas (filho de Tiago)",
        description:
          "Apóstolo que perguntou a Jesus como Ele se manifestaria ao mundo",
        url: "https://drive.google.com/file/d/1QzsCj1MB8W2L2Zk4dLs9taHIcQFqYIy_/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Judas Iscariotes",
        description: "O discípulo que traiu Jesus",
        url: "https://drive.google.com/file/d/1lXDqOJ4XtO-i62GKH8aq8_O3fmAun6Va/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
  {
    title: "Líderes e Missionários Principais",
    description: [""],
    materials: [
      {
        title: "Paulo de Tarso (Saulo)",
        description: "Ex-perseguidor de cristãos que se converteu",
        url: "https://drive.google.com/file/d/11cpG7Cxhm78grUJAuSlMJFDbAR5t03u1/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Estêvão",
        description:
          "O primeiro mártir cristão, apedrejado após fazer uma defesa brilhante da fé",
        url: "https://drive.google.com/file/d/10hIiGyGQQMgDVuxT8lyMNugAu02S3fBX/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Filipe (o Evangelista)",
        description: "Diácono que pregou com grande avivamento em Samaria",
        url: "https://drive.google.com/file/d/1LPmkJOLOp5xDbRW73gA7UdJ_p3_tABQ5/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Barnabé",
        description: "Companheiro de viagens de Paulo",
        url: "https://drive.google.com/file/d/1sXrJsVhXMOu2m6WodkDrgj_bI77CpAMa/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Tiago (irmão de Jesus)",
        description:
          "Líder central da igreja em Jerusalém e autor da epístola que leva seu nome",
        url: "https://drive.google.com/file/d/18dmLmD0UWVJXfaQKM5Cpjz4KVO1CtSbM/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Matias",
        description:
          "O discípulo escolhido por sorteio para preencher a vaga deixada por Judas Iscariotes",
        url: "https://drive.google.com/file/d/1PcOcV5hNWl_P1UpR0y4ILdX0Fef6yzYa/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
  {
    title: "Cooperadores e Casais Missionários",
    description: [""],
    materials: [
      {
        title: "Áquila",
        description:
          "Judeu fabricante de tendas que, junto com sua esposa, foi um grande cooperador de Paulo",
        url: "https://drive.google.com/file/d/1ikLzxzmceEavYppyzcGOgfqpJ5BgS4Bj/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Priscila",
        description:
          "Esposa de Áquila, líder ativa que ajudou a instruir líderes na fé cristã",
        url: "https://drive.google.com/file/d/1vrTT9__CWV5uw3Ke5kGFylclN7eF3_MD/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Apolo",
        description:
          "Pregador judeu eloquente e versado nas Escrituras que fortaleceu a igreja em Corinto",
        url: "https://drive.google.com/file/d/1PrOoPy4MgKjXOPsEdNC03nslNWqoEyjE/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Silas (Silvano)",
        description: "Companheiro de prisão e de viagens missionárias de Paulo",
        url: "https://drive.google.com/file/d/1DyhWGJlu_L26BD8jOnwYSuZPLrLqPxBt/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Marcos (João Marcos)",
        description:
          "Jovem assistente de missões que, escritor do Evangelho de Marcos",
        url: "https://drive.google.com/file/d/1fbBvG0o0XgZqiwm-zQU5H6UhgEPqPnqv/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
  {
    title: "Discípulos e Filhos na Fé de Paulo",
    description: [""],
    materials: [
      {
        title: "Timóteo",
        description:
          "Jovem pastor e colaborador mais próximo e amado pelo apóstolo Paulo",
        url: "https://drive.google.com/file/d/1dCY8-XqC6p9O-tHBrXij29lS74eyfbWc/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Tito",
        description:
          "Líder de confiança encarregado de organizar as igrejas na ilha de Creta",
        url: "https://drive.google.com/file/d/1XGP42xGUj_PGzUUCU-YtRh4tj3_yRd-J/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Onésimo",
        description:
          "Escravo fugitivo que se converteu e se tornou um irmão em Cristo útil a Paulo",
        url: "https://drive.google.com/file/d/1Atn_1IxXK04H-Rn6l_i9loLWzfaLMsME/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Filemom",
        description:
          "Cristão rico de Colossos e senhor de Onésimo, a quem Paulo pediu que perdoasse o escravo",
        url: "https://drive.google.com/file/d/1CgLCVxb7jdX1OrVNNSwzB9bowKhtaxnQ/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },
];

const parablesMaterials: MaterialGroup[] = [
  {
    title: "O Reino de Deus e o Crescimento da Fé",
    description: [""],
    materials: [
      {
        title: "O Semeador",
        description:
          "O impacto da palavra de Deus depende de como o coração de quem a ouve a recebe (Mateus 13:3-9; Marcos 4:3-9; Lucas 8:5-8)",
        url: "https://drive.google.com/file/d/1JDpIFnXj-tWr1WGHtLzq3azrcb8DWqf3/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Joio e o Trigo",
        description:
          "O bem e o mal crescem juntos no mundo até o julgamento final (Mateus 13:24-30)",
        url: "https://drive.google.com/file/d/1m8VrrNHqhuwSyuHfuwpHP3zyOHRuSJOa/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "A Semente que Cresce Secretamente",
        description:
          "O crescimento do Reino de Deus é um processo divino e misterioso (Marcos 4:26-29)",
        url: "https://drive.google.com/file/d/1NhPAy2-ec5D3ZJpQQkJtn9HMErMQaDzi/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Grão de Mostarda",
        description:
          "O Reino começa minúsculo, mas cresce até se tornar grandioso (Mateus 13:31-32; Marcos 4:30-32; Lucas 13:18-19)",
        url: "https://drive.google.com/file/d/13IWN1rFHn5pGhPlO0cMixeNwp3EYmcvb/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Fermento",
        description:
          "A transformação silenciosa e total que o Reino opera no mundo e no indivíduo (Mateus 13:33; Lucas 13:20-21)",
        url: "https://drive.google.com/file/d/1x0R6oyRFJNImFft1oEDsUC8jpmNjeMFy/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "A Rede",
        description:
          "O recolhimento de todos os tipos de pessoas, seguidamente de uma separação final (Mateus 13:47-50)",
        url: "https://drive.google.com/file/d/1QNJ4-pDmduDBMa4qGM3b3zhBDtKF6S-A/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },

  {
    title: "O Valor Supremo do Reino",
    description: [""],
    materials: [
      {
        title: "O Tesouro Escondido",
        description:
          "A alegria de descobrir o Reino e abrir mão de tudo para focar nele (Mateus 13:44)",
        url: "https://drive.google.com/file/d/1NGsxoq5nS420TaFgjkbRA27_Gz0O5juT/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "A Pérola de Grande Valor",
        description:
          "A busca obstinada pelo que é verdadeiramente precioso (Mateus 13:45-46)",
        url: "https://drive.google.com/file/d/1rgwCZZP7wYL4cHaUIsI_4-1kc5NP3sXQ/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },

  {
    title: "O Amor, a Misericórdia e a Graça de Deus",
    description: [""],
    materials: [
      {
        title: "A Ovelha Perdida",
        description:
          "O pastor que deixa as noventa e nove no aprisco para buscar a única que se desgarrou (Mateus 18:12-14; Lucas 15:3-7)",
        url: "https://drive.google.com/file/d/12bpteIylfvCfqWM2jvmyAC4yDs6hOieh/view",
        isUrlExternal: true,
      },
      {
        title: "A Moeda Perdida",
        description:
          "A dedicação em encontrar o que se havia perdido e a celebração quando isso acontece (Lucas 15:8-10)",
        url: "https://drive.google.com/file/d/1ph-1z4joqE7axpDn9Yjbtaf8mPqNFyzA/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Filho Pródigo",
        description:
          "O amor incondicional do pai que acolhe o filho arrependido e confronta o orgulho do filho mais velho (Lucas 15:11-32)",
        url: "https://drive.google.com/file/d/1tRbmu_27-kUVAJKVfbKlCIOVWWsv5uDb/view",
        isUrlExternal: true,
      },
      {
        title: "Os Trabalhadores da Vinha",
        description:
          "A graça de Deus não se baseia no merecimento humano; o que chega por último recebe a mesma generosidade (Mateus 20:1-16)",
        url: "https://drive.google.com/file/d/1SiXmj9eriY8SN-eQByna5GXGN58q9qTX/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Os Dois Devedores",
        description:
          "Aquele que é mais perdoado demonstra maior amor (Lucas 7:41-43)",
        url: "https://drive.google.com/file/d/1yNjEyfnoXPmsSrS7joQVjA0TwVKPa_vd/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },

  {
    title: "O Amor ao Próximo e as Relações Humanas",
    description: [""],
    materials: [
      {
        title: "O Bom Samaritano",
        description:
          "O próximo é qualquer um de quem nos aproximamos para demonstrar misericórdia (Lucas 10:25-37)",
        url: "https://drive.google.com/file/d/1uAiH0iqHJfjciIIpLkjG7yki2gNy4FZz/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Credor Incompassivo",
        description:
          "Quem recebeu o perdão de Deus tem a obrigação de perdoar os seus semelhantes (Mateus 18:23-35)",
        url: "https://drive.google.com/file/d/12L04pt4btBsJxaC-hcpKlZ3vU28rmugY/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },

  {
    title: "Justiça, Riqueza e Generosidade",
    description: [""],
    materials: [
      {
        title: "O Rico Insensato",
        description:
          "O erro de acumular bens materiais esquecendo-se da vida espiritual e da mortalidade (Lucas 12:16-21)",
        url: "https://drive.google.com/file/d/1VbASNQCJ1nQscBht7n1DHz25jd7HjZma/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Rico e Lázaro",
        description:
          "As consequências na eternidade da falta de compaixão em vida (Lucas 16:19-31)",
        url: "https://drive.google.com/file/d/1sy8n_seoPMvK1xzcPrtTp07GjnSp56A7/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Administrador Astuto",
        description:
          "O uso sábio dos recursos terrenos com os olhos voltados para a eternidade (Lucas 16:1-9)",
        url: "https://drive.google.com/file/d/17-QwGOgFbPa_h7DVywQCxNLbBOvvbf26/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },

  {
    title: "Julgamento, Vigilância e a Segunda Vinda",
    description: [""],
    materials: [
      {
        title: "As Dez Virgens",
        description:
          "A necessidade de preparação espiritual contínua (manter o óleo na lâmpada) (Mateus 25:1-13)",
        url: "https://drive.google.com/file/d/106-xXHKow8hctztsQ4HD4Sk6QzXvBarR/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Os Talentos",
        description:
          "A responsabilidade de usar e multiplicar os dons e recursos que Deus nos confiou (Mateus 25:14-30; Lucas 19:12-27)",
        url: "https://drive.google.com/file/d/1i-uTM0hXYBP8cWJLV_5E-uWtn3s-3qnp/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Servo Fiel e o Mau Servo",
        description:
          "O dever de cumprir as obrigações com integridade mesmo na ausência visível do mestre (Mateus 24:45-51; Lucas 12:42-48)",
        url: "https://drive.google.com/file/d/1PAi7ddzRG4_KhU23yWcWldrjXqhRl5Bt/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Dono da Casa Vigilante",
        description:
          "O chamado à prontidão constante contra surpresas espirituais (Mateus 24:43-44; Lucas 12:39-40)",
        url: "https://drive.google.com/file/d/1dCuhGlZHXp6ZwGfdVr_gWO94l1dAARm9/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "A Figueira Estéril",
        description:
          "A paciência de Deus tem limites; espera-se que a nossa vida produza frutos práticos (Lucas 13:6-9)",
        url: "https://drive.google.com/file/d/1ymY_nUHM4NlvR2lvIN70I2pDFwSPNtHt/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },

  {
    title: "Orgulho, Humildade e Resposta ao Convite de Deus",
    description: [""],
    materials: [
      {
        title: "O Fariseu e o Publicano",
        description:
          "A oração arrogante baseada em méritos próprios versus o clamor humilde por misericórdia (Lucas 18:9-14)",
        url: "https://drive.google.com/file/d/1gxIHChFC0yemk5hmvnhQXyVgZzDFAWMj/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Os Primeiros Lugares",
        description:
          "O conselho prático e espiritual sobre buscar a modéstia em vez da autoexaltação (Lucas 14:7-11)",
        url: "https://drive.google.com/file/d/1dm53Ne1eddD6Dv0NM7SFkk0IuW-HpLMh/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Os Dois Filhos",
        description:
          "Obedecer de verdade é melhor do que apenas dizer que vai obedecer (Mateus 21:28-32)",
        url: "https://drive.google.com/file/d/1a5b083zeaaQD8GlMV3i6fumkGI8X6CCZ/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "A Grande Ceia",
        description:
          "Aqueles que rejeitam o convite de Deus por prioridades banais são substituídos pelos marginalizados (Mateus 22:1-14; Lucas 14:15-24)",
        url: "https://drive.google.com/file/d/1eh75VOmqqfSaWT1Bzh-IQ1LbpitXI52_/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "Os Lavradores Maus",
        description:
          "A rejeição histórica dos profetas e do próprio Filho de Deus pelos líderes religiosos (Mateus 21:33-46; Marcos 12:1-12; Lucas 20:9-19)",
        url: "https://drive.google.com/file/d/1djgXr4rJjFSYrw99g6XE8nbNk7GogG-T/view?usp=sharing",
        isUrlExternal: true,
      },
    ],
  },

  {
    title: "Sabedoria e Oração Perseverante",
    description: [""],
    materials: [
      {
        title: "Os Dois Construtores",
        description:
          "A diferença entre colocar a vida em prática sobre as palavras diárias de Jesus ou apenas ouvi-las (Mateus 7:24-27; Lucas 6:47-49)",
        url: "https://drive.google.com/file/d/1P0YPKfl8Ckdqmmf6i0C1KSUhVEZ1TifR/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "O Amigo Importuno",
        description:
          "A persistência na oração e a certeza de que Deus responde às nossas necessidades (Lucas 11:5-8)",
        url: "https://drive.google.com/file/d/1bBhrqUnL5KFhSgPT6LSpqSuQ43k5JyU6/view?usp=sharing",
        isUrlExternal: true,
      },
      {
        title: "A Viúva Persistente",
        description:
          "A constância na busca por justiça e a fidelidade em não desanimar (Lucas 18:1-8)",
        url: "https://drive.google.com/file/d/1zIg-f1ZTKUi-Hns7VMFsg5YfNDUA43D8/view?usp=sharing",
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
  {
    value: "parabolas",
    heading: "Parábolas de Jesus",
    groups: parablesMaterials,
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
          <Suspense>
            <MaterialsTabs tabs={materialTabs} defaultTab={defaultTab} />
          </Suspense>
        </Container>
      </div>
    </section>
  );
}
