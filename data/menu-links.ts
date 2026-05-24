export type MenuLink = {
  title: string;
  href: string;
  external?: boolean;
  submenu?: MenuLink[];
};

export const menuLinks: MenuLink[] = [
  {
    title: "Igreja Online",
    href: "/igreja-online",
    submenu: [
      {
        title: "Conheça",
        href: "/igreja-online",
      },
      {
        title: "Saiba Mais",
        href: "/igreja-online/saiba-mais",
      },
      {
        title: "Acompanhamento",
        href: "/igreja-online/atendimento-pastoral",
      },
      {
        title: "Orações",
        href: "/igreja-online/pedidos-de-oracao",
      },
      {
        title: "PGs",
        href: "/igreja-online/pequenos-grupos",
      },
      {
        title: "Cultos ao vivo",
        href: "/igreja-online/cultos-ao-vivo",
      },
    ],
  },
  {
    title: "Igrejas",
    href: "/igrejas",
    submenu: [
      {
        title: "Nossas Igrejas",
        href: "/igrejas",
      },
      {
        title: "Aguás Claras - DF",
        href: "/igrejas/aguas-claras-qs-01",
      },
      {
        title: "Águas Lindas - GO",
        href: "/igrejas/aguas-lindas-qd-25",
      },
      {
        title: "Ceilândia Sul - DF",
        href: "/igrejas/ceilandia-sul-qnm-05",
      },
      {
        title: "Samambaia Sul - DF",
        href: "/igrejas/samambaia-sul-qs-116",
      },
      {
        title: "Jardins Mangueiral - DF",
        href: "/igrejas/jardins-mangueiral-pc-atividades-5",
      },
      {
        title: "Caldas Novas - GO",
        href: "/igrejas/caldas-novas-go-getulio-vargas",
      },
      {
        title: "Bissau - Guiné-Bissau",
        href: "/igrejas/guine-bissau-bissau-cutum-3",
      },
    ],
  },
  // {
  //   title: "Projetos",
  //   href: "/projetos",
  //   submenu: [
  //     {
  //       title: "Projetos",
  //       href: "/projetos",
  //     },
  //     {
  //       title: "Baio Negado",
  //       href: "/projetos/baio-negado",
  //     },
  //   ],
  // },
  {
    title: "Academy",
    href: "/oceano-academy",
    submenu: [
      {
        title: "Conheça a Academy",
        href: "/oceano-academy",
      },
      {
        title: "Escola Bíblica",
        href: "/oceano-academy/escolas/escola-biblica",
      },
      {
        title: "Escola de Membros",
        href: "/oceano-academy/escolas/escola-de-membros",
      },
      {
        title: "Planos de Leitura",
        href: "/oceano-academy/planos-de-leitura",
      },
      {
        title: "Acesse seu Curso",
        href: "https://academy.oceanodagraca.com/",
        external: true,
      },
    ],
  },
  {
    title: "Quem Somos",
    href: "/sobre",
    submenu: [
      {
        title: "Nossa Razão",
        href: "/sobre/nossa-razao",
      },
      {
        title: "Nossa História",
        href: "/sobre/nossa-historia",
      },
    ],
  },
  {
    title: "Nossos Pastores",
    href: "/nossos-pastores",
  },
  {
    title: "Projetos",
    href: "/projeto-expansao",
  },
  {
    title: "Doações",
    href: "/doacoes",
  },
];
