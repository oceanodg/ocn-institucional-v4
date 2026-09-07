type ContentLink = {
  path: string;
  title: string;
  description: string;
};

type ContentSection = {
  title: string;
  links: ContentLink[];
};

// Curadoria compartilhada pelo sitemap e pelo llms.txt. Ver docs/seo.md.
export const contentSections: ContentSection[] = [
  {
    title: "Institucional",
    links: [
      {
        path: "/",
        title: "Igreja Oceano da Graça",
        description: "Apresentação da igreja e acesso às principais áreas do site.",
      },
      {
        path: "/sobre",
        title: "Quem Somos",
        description: "Conheça a Igreja Oceano da Graça.",
      },
      {
        path: "/sobre/nossa-historia",
        title: "Nossa História",
        description: "A história e o início da igreja.",
      },
      {
        path: "/sobre/nossa-razao",
        title: "Nossa Razão",
        description: "Propósito e valores: conectar pessoas a Jesus com amor e graça.",
      },
      {
        path: "/nossos-pastores",
        title: "Nossos Pastores",
        description: "Apresentação dos pastores da igreja.",
      },
      {
        path: "/igrejas",
        title: "Igrejas",
        description: "Encontre os templos e acesse endereços, horários e contatos.",
      },
      {
        path: "/projeto-expansao",
        title: "Projetos Juntos pelo Reino",
        description: "Expansão da igreja no Distrito Federal e em Guiné-Bissau e formas de contribuir.",
      },
      {
        path: "/doacoes",
        title: "Doações",
        description: "Informações para contribuir com a obra da igreja.",
      },
    ],
  },
  {
    title: "Igreja Online",
    links: [
      {
        path: "/igreja-online",
        title: "Igreja Online",
        description: "Conheça a comunidade online e suas formas de participação.",
      },
      {
        path: "/igreja-online/saiba-mais",
        title: "Saiba mais sobre a Igreja Online",
        description: "Entre em contato para conhecer e participar da Igreja Online.",
      },
      {
        path: "/igreja-online/cultos-ao-vivo",
        title: "Cultos ao Vivo",
        description: "Informações para acompanhar as transmissões dos cultos.",
      },
      {
        path: "/igreja-online/atendimento-pastoral",
        title: "Acompanhamento Pastoral",
        description: "Saiba como solicitar acompanhamento pastoral.",
      },
      {
        path: "/igreja-online/pedidos-de-oracao",
        title: "Pedidos de Oração",
        description: "Orientações para enviar pedidos de oração.",
      },
      {
        path: "/igreja-online/pequenos-grupos",
        title: "Pequenos Grupos",
        description: "Informações e inscrição para participar de pequenos grupos.",
      },
    ],
  },
  {
    title: "Oceano Academy",
    links: [
      {
        path: "/oceano-academy",
        title: "Oceano Academy",
        description: "Apresentação da área educacional da igreja e acesso à plataforma de ensino.",
      },
      {
        path: "/oceano-academy/escolas",
        title: "Escolas",
        description: "Conheça as escolas e seus cursos de formação cristã.",
      },
      {
        path: "/oceano-academy/escolas/escola-biblica",
        title: "Escola Bíblica",
        description: "Estudo da Bíblia e recursos de aprendizado bíblico.",
      },
      {
        path: "/oceano-academy/escolas/escola-de-membros",
        title: "Escola de Membros",
        description: "Cursos de formação para membros da igreja.",
      },
      {
        path: "/oceano-academy/escolas/escola-de-lideres",
        title: "Escola de Líderes",
        description: "Apresentação da escola de capacitação de líderes.",
      },
      {
        path: "/oceano-academy/materiais-didaticos",
        title: "Materiais Didáticos",
        description: "Catálogo de materiais para estudo da Bíblia.",
      },
      {
        path: "/oceano-academy/planos-de-leitura",
        title: "Planos de Leitura",
        description: "Planos de leitura bíblica para iniciantes e avançados.",
      },
    ],
  },
];

export const teachingMaterials = [
  {
    slug: "panorama-biblico-at",
    title: "Panorama Bíblico do Antigo Testamento",
    description: "Visão geral da história e dos livros do Antigo Testamento.",
  },
  {
    slug: "genesis",
    title: "Gênesis",
    description: "Criação, queda, patriarcas e a providência de Deus.",
  },
  {
    slug: "exodo",
    title: "Êxodo",
    description: "Libertação do cativeiro, formação de Israel e a presença de Deus.",
  },
  {
    slug: "levitico-numero-deuteronomio",
    title: "Levítico, Números e Deuteronômio",
    description: "Santidade, caminhada no deserto e a aliança com Deus.",
  },
  {
    slug: "isaias-1",
    title: "Isaías — Módulo I",
    description: "Pecado, chamado profético e promessas em Isaías.",
  },
  {
    slug: "isaias-2",
    title: "Isaías — Módulo II",
    description: "Continuação do estudo de Isaías: livramento, cura e advertências.",
  },
  {
    slug: "panorama-biblico-nt",
    title: "Panorama Bíblico do Novo Testamento",
    description: "Vida de Jesus, início da igreja, missão e cartas do Novo Testamento.",
  },
  {
    slug: "mateus",
    title: "Mateus",
    description: "Nascimento e ministério de Jesus, Sermão da Montanha e milagres.",
  },
  {
    slug: "marcos",
    title: "Marcos",
    description: "Boas-novas, milagres e a autoridade de Jesus.",
  },
  {
    slug: "lucas",
    title: "Lucas",
    description: "Promessa, preparação e ministério do Salvador.",
  },
  {
    slug: "joao",
    title: "João",
    description: "O Verbo encarnado, o novo nascimento e o Bom Pastor.",
  },
  {
    slug: "atos",
    title: "Atos dos Apóstolos",
    description: "Início da igreja em Jerusalém e expansão da missão cristã.",
  },
  {
    slug: "introducao-cartas-paulinas",
    title: "Introdução às Cartas Paulinas",
    description: "Vida de Paulo e contexto e estrutura de suas cartas.",
  },
  {
    slug: "romanos",
    title: "Romanos",
    description: "Necessidade do evangelho, pecado e redenção em Cristo.",
  },
  {
    slug: "corintios",
    title: "Cartas aos Coríntios",
    description: "Unidade da igreja, dons espirituais, sofrimento e generosidade.",
  },
  {
    slug: "galatas",
    title: "Gálatas",
    description: "O evangelho, o ministério de Paulo e a relação entre lei e graça.",
  },
  {
    slug: "efesios",
    title: "Efésios",
    description: "Graça, unidade, santidade e vida cristã no lar.",
  },
  {
    slug: "filipenses",
    title: "Filipenses",
    description: "Alegria, humildade, serviço e contentamento em Cristo.",
  },
  {
    slug: "colossenses",
    title: "Colossenses",
    description: "Supremacia de Cristo, discernimento e nova vida cristã.",
  },
  {
    slug: "tessalonicenses",
    title: "Cartas aos Tessalonicenses",
    description: "Santidade, perseverança e esperança na vinda de Cristo.",
  },
  {
    slug: "timoteo",
    title: "Cartas a Timóteo",
    description: "Santidade, oração, serviço e liderança na igreja.",
  },
  {
    slug: "tito-e-filemom",
    title: "Cartas a Tito e Filemon",
    description: "Sã doutrina e vida cristã na igreja e na sociedade.",
  },
  {
    slug: "hebreus",
    title: "Hebreus",
    description: "Supremacia de Cristo e seu sacerdócio perfeito.",
  },
  {
    slug: "tiago",
    title: "Tiago",
    description: "Fé perseverante, obras, domínio da língua e sabedoria.",
  },
  {
    slug: "pedro",
    title: "Cartas de Pedro",
    description: "Esperança no sofrimento, testemunho e crescimento espiritual.",
  },
  {
    slug: "cartas-joao-e-judas",
    title: "Cartas de João e Judas",
    description: "Amor, verdade, hospitalidade e perseverança na fé.",
  },
  {
    slug: "introducao-ao-apocalipse",
    title: "Introdução ao Apocalipse",
    description: "Fundamentos da escatologia e escolas de interpretação do Apocalipse.",
  },
  {
    slug: "apocalipse",
    title: "Apocalipse",
    description: "Estudo das visões do Apocalipse, do reino milenar e da nova criação.",
  },
];

export const teachingMaterialLinks: ContentLink[] = teachingMaterials.map(
  ({ slug, title, description }) => ({
    path: `/oceano-academy/materiais-didaticos/${slug}`,
    title,
    description,
  }),
);

// Páginas publicadas de detalhe; o llms.txt aponta para seus catálogos.
const additionalSitemapPaths = [
  "/oceano-academy/cursos/carta-tiago",
  "/oceano-academy/cursos/connect",
  "/oceano-academy/cursos/fe-no-feed",
  "/oceano-academy/cursos/fundamentos",
  "/oceano-academy/cursos/no-caminho",
  "/oceano-academy/cursos/pequenos-grupos",
  "/oceano-academy/cursos/vida-nova",
  "/oceano-academy/cursos/voluntariado",
  "/oceano-academy/planos-de-leitura/desafio-dos-90-dias",
  "/oceano-academy/planos-de-leitura/evangelhos",
  "/oceano-academy/planos-de-leitura/iniciante",
  "/oceano-academy/planos-de-leitura/isaias",
  "/oceano-academy/planos-de-leitura/leitura-em-dois-anos",
  "/oceano-academy/planos-de-leitura/novo-testamento",
  "/oceano-academy/planos-de-leitura/novo-testamento-em-ordem-cronologica",
  "/oceano-academy/planos-de-leitura/ordem-cronologica",
  "/oceano-academy/planos-de-leitura/ordem-dos-livros",
  "/oceano-academy/planos-de-leitura/plano-anual",
  "/oceano-academy/planos-de-leitura/sabedoria-diaria",
];

export const publishedPagePaths = [
  ...contentSections.flatMap(({ links }) => links.map(({ path }) => path)),
  ...teachingMaterialLinks.map(({ path }) => path),
  ...additionalSitemapPaths,
];

export const llmsSections: ContentSection[] = [
  ...contentSections,
  {
    title: "Materiais didáticos em Markdown",
    links: teachingMaterialLinks.map((link) => ({
      ...link,
      path: `${link.path}.md`,
    })),
  },
];
