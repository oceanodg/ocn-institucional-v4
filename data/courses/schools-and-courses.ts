import type { Course } from "~/server/types";

export const CTADefaultLabel =
  "Inscreva-se –– <span class='italic'>é gratuito</span>";
export const defaultMembersAreaLoginUrl = "https://academy.oceanodagraca.com";

export const connectCourse: Course = {
  title: "Connect",
  description:
    "O Connect é o primeiro passo para mergulhar no Oceano da Graça: um curso que apresenta nossa visão e valores.",
  image: "/images/courses/connect/yt-thumb-connect.png",
  link: "/oceano-academy/cursos/connect",
  linkText: "Saiba mais",
  ctaUrl: "https://academy.oceanodagraca.com/invites/bkA3Jx/join",
  lessons: [
    {
      title: "Nossos Pastores-Líderes",
      description: "História de vida, chamado e liderança pastoral.",
      thumbnail: "/images/courses/connect/lesson-thumbnails/lesson-1.png",
    },
    {
      title: "Nossa Identidade Ministerial",
      description: "Missão, visão, valores e âncoras bíblicas.",
      thumbnail: "/images/courses/connect/lesson-thumbnails/lesson-2.png",
    },
    {
      title: "Nossa Estrutura Ministerial",
      description: "Ministérios, programas e áreas de atuação.",
      thumbnail: "/images/courses/connect/lesson-thumbnails/lesson-3.png",
    },
    {
      title: "Nossos Programas",
      description:
        "<span class='italic'>Faça Parte</span> (integração e consolidação) e <span class='italic'>Faça a Sua Parte</span> (voluntariado e missão).",
      thumbnail: "/images/courses/connect/lesson-thumbnails/lesson-4.png",
    },
  ],
};

export const voluntariadoCourse: Course = {
  title: "Voluntariado",
  description:
    "Servir é um chamado: cada voluntário é parte da família, expressando o amor de Deus através do serviço.",
  image: "/images/courses/voluntariado/yt-thumb-voluntariado.png",
  link: "/oceano-academy/cursos/voluntariado",
  linkText: "Saiba mais",
  ctaUrl: "https://academy.oceanodagraca.com/invites/xDYzDQ/join",
  lessons: [
    {
      title: "Quem somos",
      description: "Identidade e missão da igreja.",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-1.png",
    },
    {
      title: "Nossos Ministérios",
      description:
        "Descrição de cada área (Louvor, Intercessão, Kids, Comunicação, Eventos, Diaconia, Artes, Missão, etc.).",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-2.jpg",
    },
    {
      title: "Marcas de um voluntário",
      description:
        "Amar a Deus, amar pessoas, comprometimento, flexibilidade, coração ensinável, excelência, proatividade e bom testemunho.",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-3.png",
    },
    {
      title: "Procedimentos práticos",
      description:
        "Comunicação, crachá de identificação, check-in/check-out, código de vestimenta, postura nas redes sociais e participação em Pequenos Grupos.",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-4.jpg",
    },
    {
      title: "Agradecimentos",
      description: "Venha ser família com a gente!",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-5.jpg",
    },
  ],
};

export const fundamentosCourse: Course = {
  title: "Fundamentos",
  description:
    "Principais pilares da fé cristã e temas essenciais da doutrina cristã sob a perspectiva pentecostal.",
  image: "/images/courses/fundamentos/yt-thumb-fundamentos-small.png",
  link: "/oceano-academy/cursos/fundamentos",
  linkText: "Saiba mais",
  ctaUrl: "https://academy-ocn.memberkit.com.br/invites/Q85BZb/join",
  lessons: [
    {
      title: "Cremos na Bíblia Sagrada",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-1.png",
    },
    {
      title: "Cremos em Deus",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-2.png",
    },
    {
      title: "Cremos em Jesus Cristo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-3.png",
    },
    {
      title: "Cremos no Espírito Santo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-4.png",
    },
    {
      title: "Cremos no perdão dos pecados",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-5.png",
    },
    {
      title: "Cremos na justificação",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-6.png",
    },
    {
      title: "Cremos na salvação e no novo nascimento",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-7.png",
    },
    {
      title: "Cremos nas ordenanças de Jesus",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-8.png",
    },
    {
      title: "Cremos no batismo no Espírito Santo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-9.png",
    },
    {
      title: "Cremos na santificação",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-10.png",
    },
    {
      title: "Cremos na segunda vinda de Cristo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-11.png",
    },
    {
      title: "Cremos no tribunal de Cristo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-12.png",
    },
    {
      title: "Cremos no juízo final",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-13.png",
    },
  ],
};

export const vidaNovaCourse: Course = {
  title: "Nova Vida",
  description:
    "Princípios básicos da fé cristã, fortalecimento da sua identidade em Cristo e estabelecimento de raízes firmes na Palavra.",
  image: "/images/courses/vida-nova/yt-thumb-vida-nova-small.jpg",
  link: "/oceano-academy/cursos/vida-nova",
  linkText: "Saiba mais",
  ctaUrl: "https://academy-ocn.memberkit.com.br/invites/xOV18G/join",
  lessons: [
    {
      title: "Conhecendo o Pai, o Filho e o Espírito Santo",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-1.jpg",
    },
    {
      title: "Sou uma nova criatura",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-2.jpg",
    },
    {
      title: "Não há condenação em Cristo",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-3.jpg",
    },
    {
      title: "O Batismo nas águas",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-4.jpg",
    },
    {
      title: "O memorial da Ceia do Senhor",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-5.jpg",
    },
    {
      title: "Nossa razão de existir",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-6.jpg",
    },
  ],
};

export const feNoFeedCourse: Course = {
  title: "Fé no Feed",
  description:
    "Como viver Cristo no mundo das redes sociais. O feed das suas redes sociais fala mais sobre você do que imagina.",
  image: "/images/courses/fe-no-feed/yt-thumb-fe-no-feed-small.jpg",
  link: "/oceano-academy/cursos/fe-no-feed",
  linkText: "Saiba mais",
  ctaUrl: "https://academy.oceanodagraca.com/invites/Qv5E9x/join",
  lessons: [
    {
      title: "A boca fala do que o coração está cheio",
      description:
        "O que você posta revela quem você é. Descubra como encher o coração da Palavra e refletir isso no seu feed.",
      thumbnail: "/images/courses/fe-no-feed/lesson-thumbnails/lesson-1.jpg",
    },
    {
      title: "Você é o que você compartilha",
      description:
        "Curtidas e compartilhamentos não são neutros. Aprenda a usar sua liberdade em Cristo para edificar e glorificar a Deus.",
      thumbnail: "/images/courses/fe-no-feed/lesson-thumbnails/lesson-2.jpg",
    },
    {
      title: "Somos o sal que tempera ou a maldade que contamina?",
      description:
        "Sua influência online pode curar ou ferir. Seja sal que conserva e transforma no mundo digital.",
      thumbnail: "/images/courses/fe-no-feed/lesson-thumbnails/lesson-3.jpg",
    },
    {
      title:
        "Entre curtidas e chamado: identidade em Cristo vs. aparência digital",
      description:
        "Mais do que seguidores, viva sua verdadeira identidade em Cristo sem ser refém de métricas e algoritmos.",
      thumbnail: "/images/courses/fe-no-feed/lesson-thumbnails/lesson-4.jpg",
    },
  ],
};

export const cartaTiagoCourse: Course = {
  title: "Tiago: Quando Crer se Torna Agir",
  description:
    "Uma jornada de fé prática, onde o conhecimento bíblico encontra a transformação diária.",
  image: "/images/courses/carta-tiago/yt-thumb-carta-tiago-small.png",
  link: "/oceano-academy/cursos/carta-tiago",
  linkText: "Saiba mais",
  ctaUrl: "https://academy.oceanodagraca.com/invites/Gav7Dx/join",
  lessons: [
    {
      title: "Quando a prova faz a fé brilhar",
      description:
        "A fé que resiste nas tempestades e amadurece nas provações.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-1.png",
    },
    {
      title: "Clareza do alto em dias nublados",
      description:
        "A sabedoria que vence as tentações e forma um coração íntegro.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-2.png",
    },
    {
      title: "A fé que não fica no discurso",
      description:
        "O chamado a uma fé viva, que se expressa em misericórdia e obras.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-3.png",
    },
    {
      title: "Domando a língua, curando o coração",
      description: "O poder das palavras e a pureza do coração que as inspira.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-4.png",
    },
    {
      title: "A sabedoria que perfuma a vida",
      description: "A diferença entre a sabedoria terrena e a que vem de Deus.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-5.png",
    },
    {
      title: "As guerras que começam dentro de nós",
      description: "Conflitos, desejos e a submissão ao senhorio de Cristo.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-6.png",
    },
    {
      title: "Quando o céu julga a riqueza da terra",
      description:
        "A justiça divina e a paciência do crente que espera o Senhor.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-7.png",
    },
    {
      title: "Orações que abrem céus e curam almas",
      description: "A oração como instrumento de cura, fé e comunhão.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-8.png",
    },
    {
      title: "A fé que unge, cura e restaura",
      description: "O agir de Deus na comunidade através da oração e da unção.",
      thumbnail: "/images/courses/carta-tiago/lesson-thumbnails/lesson-9.png",
    },
  ],
};

export const pequenosGruposCourse: Course = {
  title: "Pequenos Grupos",
  description:
    "Identidade, a visão e a prática dos Pequenos Grupos da Igreja Oceano da Graça.",
  image: "/images/courses/pequenos-grupos/yt-thumb-pequenos-grupos.png",
  link: "/oceano-academy/cursos/pequenos-grupos",
  linkText: "Saiba mais",
  ctaUrl: "https://academy.oceanodagraca.com/invites/Q5n16b/join",
  lessons: [
    {
      title: "A identidade da igreja-família",
      description: "",
      thumbnail:
        "/images/courses/pequenos-grupos/lesson-thumbnails/lesson-1.png",
    },
    {
      title: "O discipulado como estilo de vida",
      description: "",
      thumbnail:
        "/images/courses/pequenos-grupos/lesson-thumbnails/lesson-2.png",
    },
    {
      title: "Caracterização dos Pequenos Grupos",
      description: "",
      thumbnail:
        "/images/courses/pequenos-grupos/lesson-thumbnails/lesson-3.png",
    },
    {
      title: "Estrutura Organizacional dos Pequenos Grupos",
      description: "",
      thumbnail:
        "/images/courses/pequenos-grupos/lesson-thumbnails/lesson-4.png",
    },
    {
      title: "Encontros de Pequenos Grupos",
      description: "",
      thumbnail:
        "/images/courses/pequenos-grupos/lesson-thumbnails/lesson-5.png",
    },
    {
      title: "O processo de crescimento dos Pequenos Grupos",
      description: "",
      thumbnail:
        "/images/courses/pequenos-grupos/lesson-thumbnails/lesson-6.png",
    },
  ],
};

export type schoolsSlugs =
  | "escola-de-membros"
  | "escola-biblica"
  | "escola-de-lideres";

export const schools: Record<schoolsSlugs, { courses: Course[] }> = {
  "escola-de-membros": {
    courses: [
      connectCourse,
      voluntariadoCourse,
      fundamentosCourse,
      vidaNovaCourse,
      pequenosGruposCourse,
    ],
  },
  "escola-biblica": {
    courses: [cartaTiagoCourse, feNoFeedCourse],
  },
  "escola-de-lideres": {
    courses: [],
  },
};
