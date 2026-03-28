import type { Church } from "~/server/types/church";

export const churches: Church[] = [
  {
    id: "aguas-claras-qs-01",
    name: "Águas Claras - DF",
    address: "QS 01, Rua 210, Lote 26, Águas Claras - DF",
    coverImage: "aguas-claras-qs-01.png",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanodagraca/",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 10:00",
          "Culto da Família - 18:30",
        ],
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"],
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: [
          "1a Sexta do Mês - Deeper - 20:30",
          "3a Sexta do Mês - Deeper Joy - 20:30",
        ],
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: ["Café com Deus - 09:00"],
      },
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento",
    ],
    pastors: [
      { name: "Pr. Sinval de Souza", image: "/pastors/sinval-de-souza.jpg" },
      { name: "Pr. Rosália Santt", image: "/pastors/rosalia-santt.jpg" },
    ],
    googleMapsUrl: "https://goo.gl/maps/WEmFk5SjRdZFMyadA",
  },
  {
    id: "aguas-lindas-qd-25",
    name: "Águas Lindas - GO",
    address: "QD 25, Lote 1-B3, Jardins Brasília, Águas Lindas - GO",
    coverImage: "aguas-lindas-qd-25.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanoaguaslindas",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 17:00",
          "Culto da Família - 19:00",
        ],
      },
      {
        weekday: "Segunda-feira",
        worshipNameAndTime: ["Oração - 20:00"],
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"],
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: ["Café com Deus - 08:00"],
      },
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento",
    ],
    pastors: [
      { name: "Pr. Anderson Luiz", image: "/pastors/anderson-luiz-01.jpg" },
      {
        name: "Pra. Kellen Damaris",
        image: "/pastors/kellen-damaris-01.jpg",
      },
    ],
    googleMapsUrl: "https://goo.gl/maps/XPHLrjZGMUQa1yz79",
  },
  {
    id: "ceilandia-sul-qnm-05",
    name: "Ceilândia Sul - DF",
    address: "QNM 05 Conj. P Lote 16, Ceilândia Sul - DF",
    coverImage: "ceilandia-sul-qnm-05.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanoceilandiasul",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:30",
          "Culto da Família - 19:00",
        ],
      },
      {
        weekday: "Segunda-feira",
        worshipNameAndTime: ["Oração - 20:00"],
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"],
      },
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento",
    ],
    pastors: [
      { name: "Pr. Leverson Eustáquio", image: "/pastors/leverson-01.jpg" },
      {
        name: "Pra. Maria Vania",
        image: "/pastors/maria-vania-01.jpg",
      },
    ],
    googleMapsUrl: "https://goo.gl/maps/sQHx2AbFFDx6YBBK8",
  },
  {
    id: "jardins-mangueiral-pc-atividades-5",
    name: "Jardins Mangueiral - DF",
    address: "Pç de Atividades 5 Lote 01, Jardins Mangueiral - DF",
    coverImage: "jardins-mangueiral-pc-atividades-5.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanojardinsmangueiral",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 19:00",
        ],
      },
      {
        weekday: "Segunda-feira",
        worshipNameAndTime: ["Oração - 20:00"],
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"],
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: ["1a Sexta do Mês - Deeper - 20:30"],
      },
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento",
    ],
    pastors: [
      {
        name: "Pr. Josué de Oliveira",
        image: "/pastors/josue-oliveira-01.jpg",
      },
    ],
    googleMapsUrl: "https://goo.gl/maps/JXGDqENkzr537z9U9",
  },
  {
    id: "samambaia-sul-qs-116",
    name: "Samambaia Sul - DF",
    address: "QS 116 Conj. 02 Lote 07 Samambaia Sul - DF",
    coverImage: "samambaia-sul-qs-116.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanosamambaiasul",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 10:00",
          "Culto da Família - 19:00",
        ],
      },
      {
        weekday: "Segunda-feira",
        worshipNameAndTime: ["Oração - 20:00"],
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"],
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: ["1a Sexta do Mês - Deeper - 20:30"],
      },
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento",
    ],
    pastors: [
      {
        name: "Pr. Marcelo Medeiros",
        image: "/pastors/marcelo-medeiros-01.jpg",
      },
      {
        name: "Pra. Valéria Soares",
        image: "/pastors/valeria-soares-01.jpg",
      },
    ],
    googleMapsUrl: "https://goo.gl/maps/N5cfXJe5C28atcKQ8",
  },
  {
    id: "caldas-novas-go-getulio-vargas",
    name: "Caldas Novas - GO",
    address: "Av. Getúlio Vargas, Qd 01 - Lote 04, Caldas Novas - GO",
    coverImage: "caldas-novas-go-getulio-vargas.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanocaldasnovas",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: ["Culto da Família - 19:00"],
      },
      {
        weekday: "Segunda-feira",
        worshipNameAndTime: ["Oração - 20:00"],
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Oração - 09:00", "Quarta da Graça - 20:00"],
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: ["1a Sexta do Mês - Deeper - 20:00"],
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: [
          "2o Sábado do Mês - Café com Deus - 16:00",
          "4o Sábado do Mês - Café com Deus - 16:00",
        ],
      },
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento",
    ],
    pastors: [
      {
        name: "Pr. Mauruzan Rodrigues",
        image: "/pastors/mauruzan-rodrigues-01.jpg",
      },
      {
        name: "Pra. Mirian Rodrigues",
        image: "/pastors/mirian-rodrigues-01.jpg",
      },
    ],
    googleMapsUrl: "https://maps.app.goo.gl/vpEwnC758LRCkqMK7",
  },
  {
    id: "guine-bissau-bissau-cutum-3",
    name: "Bissau - Guiné-Bissau",
    address: "Cuntum 3 Bissau - Guiné-Bissau",
    coverImage: "guine-bissau-bissau-cutum-3.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanoguinebissau",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: ["Culto da Família - 09:30"],
      },
      {
        weekday: "Terça-feira",
        worshipNameAndTime: ["Culto de Oração - 19:30"],
      },
      {
        weekday: "Quinta-feira",
        worshipNameAndTime: ["Culto de Oração - 17:00"],
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: ["Escola Bíblica - 19:30"],
      },
    ],
    amenities: ["Banheiros"],
    pastors: [
      {
        name: "Pr. Carlos João",
        image: "/pastors/carlos-joao-01.jpg",
      },
      {
        name: "Ms. Elza da Paixão",
        image: "/pastors/elza-da-paixao-01.jpg",
      },
    ],
    googleMapsUrl: "https://goo.gl/maps/uh5SVhmuuZQS8iDm9",
  },
];

export const churchById = (id: string) => {
  return churches.find((church) => church.id === id);
};
