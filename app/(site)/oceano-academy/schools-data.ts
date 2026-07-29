export type Modality = "Online" | "Presencial" | "Presencial e Online";

export interface Course {
  id: string;
  title: string;
  description?: string;
  href?: string;
  modality?: Modality;
  enrollHref?: string;
  learnMoreHref?: string;
}

export interface School {
  id: string;
  title: string;
  description: string;
  pillar: {
    label: string;
  };
  hideCoursesQuantity?: boolean;
  inviteHref?: string;
  allCoursesHref?: string;
  courses: Course[];
}

export const data: School[] = [
  {
    id: "escola-de-membros",
    title: "1. Escola de Membros",
    description: "Integração e capacitação dos membros.",
    pillar: { label: "Discipulado" },
    courses: [
      {
        id: "connect",
        title: "1.1. Connect",
        description:
          "Encontro para recebimento de novos membros. Presencial e online.",
        enrollHref: "https://academy.oceanodagraca.com/invites/bkA3Jx/join",
        learnMoreHref: "/oceano-academy/cursos/connect",
        modality: "Presencial e Online",
      },
      {
        id: "fundamentos",
        title: "1.2. Fundamentos",
        description:
          "Curso que apresenta o credo da Igreja Oceano da Graça. Presencial e online.",
        enrollHref: "https://academy.oceanodagraca.com/invites/Q85BZb/join",
        learnMoreHref: "/oceano-academy/cursos/fundamentos",
        modality: "Online",
      },
      {
        id: "nova-vida",
        title: "1.3. Nova vida",
        description: "Curso preparatório para o batismo. Presencial e online.",
        enrollHref: "https://academy.oceanodagraca.com/invites/xOV18G/join",
        learnMoreHref: "/oceano-academy/cursos/vida-nova",
        modality: "Presencial e Online",
      },
      {
        id: "voluntariado",
        title: "1.4. Treinamento para Novos Voluntários",
        description:
          "Capacitação, inspiração e alinhamento, para todos que escolheram servir. Presencial e online.",
        learnMoreHref: "/oceano-academy/cursos/voluntariado",
        modality: "Presencial e Online",
      },
    ],
  },
  {
    id: "escola-da-familia",
    title: "2. Escola da Família",
    description: "Fortalecimento da família como projeto de Deus.",
    pillar: { label: "Comunhão" },
    courses: [
      {
        id: "one",
        title: "2.1. Curso One *",
        modality: "Presencial",
        description: "Curso para noivos, em breve. Será presencial.",
      },
      {
        id: "no-caminho",
        title: "2.2. No Caminho *",
        description: "Curso para pais, em breve. Será online.",
        modality: "Online",
      },
    ],
  },
  {
    id: "escola-de-lideres",
    title: "3. Escola de Líderes",
    description: "Preparo e crescimento para líderes.",
    pillar: { label: "Serviço" },
    courses: [
      {
        id: "lidera",
        title: "3.1. Lidera *",
        modality: "Presencial",
        description: "Curso de formação de líderes, em breve. Será presencial.",
      },
      {
        id: "pequenos-grupos",
        title: "3.2. Treinamento para Líderes de Pequenos Grupos",
        description:
          "Apresenta a identidade, a visão e a prática dos Pequenos Grupos da Igreja Oceano da Graça. Online.",
        href: "/oceano-academy/cursos/pequenos-grupos",
        modality: "Online",
      },
      {
        id: "primeira-onda",
        title: "3.3. Primeira Onda *",
        description:
          "Treinamento para plantadores de igreja, em breve. Será presencial.",
        modality: "Presencial",
      },
      {
        id: "escola-de-pastores",
        title: "3.4. Escola de Pastores *",
        description:
          "Curso de formação de pastores, em breve. Será presencial.",
        modality: "Presencial",
      },
    ],
  },
  {
    id: "escola-de-teologia",
    title: "4. Escola de Teologia",
    description:
      "Desenvolvimento de vocacionados para os ministérios congregacionais.",
    pillar: { label: "Missão" },
    courses: [
      {
        id: "ito",
        title: "4.1. ITO - Instituto de Teologia Oceano *",
        description: "Instituto de Teologia Oceano, em breve. Será presencial.",
        modality: "Presencial",
      },
    ],
  },
  {
    id: "escola-biblica",
    title: "Escola Bíblica",
    description: "Conhecimento bíblico para toda a Igreja.",
    pillar: { label: "Adoração" },
    hideCoursesQuantity: true,
    allCoursesHref: "/oceano-academy/escolas/escola-biblica",
    courses: [
      {
        id: "antigo-testamento",
        title: "Antigo Testamento",
        description:
          "Materiais de apoio para o estudo do Antigo Testamento das aulas presenciais da Escola Bíblica. Presencial e online.",
        href: "/oceano-academy/materiais-didaticos?tab=antigo",
        modality: "Presencial e Online",
      },
      {
        id: "novo-testamento",
        title: "Novo Testamento",
        description:
          "Materiais de apoio para o estudo do Novo Testamento das aulas presenciais da Escola Bíblica. Presencial e online.",
        href: "/oceano-academy/materiais-didaticos?tab=novo",
        modality: "Presencial e Online",
      },
      // {
      //   id: "personagens",
      //   title: "Personagens",
      //   href: "/oceano-academy/materiais-didaticos?tab=personagens",
      //   modality: "Online",
      // },
      // {
      //   id: "parabolas",
      //   title: "Parábolas",
      //   href: "/oceano-academy/materiais-didaticos?tab=parabolas",
      //   modality: "Online",
      // },
      {
        id: "planos-de-leitura",
        title: "Planos de Leitura",
        description: "Planos de leitura para iniciantes e avançados.",
        href: "/oceano-academy/planos-de-leitura",
        modality: "Online",
      },
    ],
  },
];
