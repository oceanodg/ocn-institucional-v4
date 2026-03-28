import { CalendarDays, Church, Heart, Users } from "lucide-react";
import { P, Separator } from "~/components/ui";
import { ProjectHero } from "~/features/projects/components/project-hero";
import { TheDream } from "~/features/projects/components/the-dream";
import { Testimonial } from "~/components/testimonial";
import { StatsGridContainer } from "~/components/stats-grid-container";
import { ProjectTimeline } from "~/features/projects/components/project-timeline";
import { ProjectInvestments } from "~/features/projects/components/project-investments";
import { PriceBox } from "~/features/projects/components/price-box";
import { ProjectFAQ } from "~/features/projects/components/project-faq";
import { ConstructionDiary } from "~/features/projects/example-project/contruction-diary";
import { BePartOfTheProject } from "~/features/projects/components/be-part";
import { Contact } from "~/features/projects/components/contact";

export function ExampleProject() {
  return (
    <section className="relative backdrop-blur-sm">
      <ProjectHero
        h1={"Projeto Igreja Oceano da Graça em Guiné-Bissau"}
        h2={"Um lugar onde famílias encontram amor e esperança."}
        actualValue={250_000}
        targetValue={400_000}
        ctaUrl="#price-box"
        ctaText="FAÇA PARTE DESTE PROJETO"
      />

      <Separator className="my-14 sm:my-24" />

      <TheDream
        h2="Nosso Sonho: Como tudo começou"
        youtubeVideoId="pMCvzTl_yz4"
        ctaText="FAÇA PARTE DESTE PROJETO"
        ctaUrl="#price-box"
        paragraphs={[
          <P>
            <span className="italic">Lorem ipsum</span> dolor sit amet
            consectetur adipiscing elit. Quisque faucibus ex sapien vitae
            pellentesque sem placerat. In id cursus mi pretium tellus duis
            convallis. Tempus leo eu aenean sed diam urna tempor.
          </P>,
          <P>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </P>,
        ]}
      />

      <Testimonial
        quote="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
        author={{
          name: "Maria da Silva",
          role: "Mãe de família",
          avatar: {
            src: "https://picsum.photos/50",
            alt: "Maria da Silva",
          },
        }}
        containerClassName="mt-24 sm:mt-42"
      />

      <StatsGridContainer
        title="Impacto: O Projeto em Números"
        stats={[
          {
            icon: <Church className="size-6" />,
            value: "1.200 m²",
            label: "Área construída",
          },
          {
            icon: <CalendarDays className="size-6" />,
            value: "12 Meses",
            label: "Prazo estimado",
          },
          {
            icon: <Users className="size-6" />,
            value: "400 Pessoas",
            label: "Capacidade",
          },
          {
            icon: <Heart className="size-6" />,
            value: "+500 Famílias",
            label: "Famílias impactadas",
          },
        ]}
        containerClassName="mt-24 sm:mt-42"
      />

      <ProjectTimeline
        title="A Jornada, até aqui"
        containerClassName="mt-24 sm:mt-42"
        timelineData={[
          {
            title: "Concluído",
            content: [
              "Terreno adquirido. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              "Projeto aprovado. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.",
              "Começo da fundação. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.",
            ],
          },
          {
            title: "Em andamento",
            content: [
              "Alvenaria. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.",
            ],
          },
          {
            title: "Próximos passos",
            content: [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            ],
          },
        ]}
      />

      <ProjectInvestments
        title="Entenda o Investimento"
        containerClassName="mt-24 sm:mt-42"
        investments={[
          {
            title: "Fundação e Estrutura",
            totalAmount: "R$ 0.000.000,00",
            items: [
              {
                description: "Estrutura metálica",
                totalAmount: "R$ 000.000,00",
              },
              { description: "Fundação", totalAmount: "R$ 000.000,00" },
              { description: "Piso", totalAmount: "R$ 000.000,00" },
              {
                description:
                  "Lorem Ipsum Dolor Sit Amet. Lorem Sit Ipsum Dolor.",
                totalAmount: "R$ 0.000.000,00",
              },
            ],
          },
          {
            title: "Acabamento",
            totalAmount: "R$ 00.000.000,00",
            items: [
              {
                description: "Tinta",
                totalAmount: "R$ 000.000,00",
              },
            ],
          },
        ]}
        ctaText="QUERO CONTRIBUIR AGORA"
        ctaUrl="#price-box"
      />

      <PriceBox
        h2="Contribua da Melhor Forma"
        containerClassName="mt-24 sm:mt-42"
        plans={[
          {
            name: "Plano Bronze",
            pricing: 100,
            ctaText: "CONTRIBUIR COM R$ 100/mês",
            ctaUrl: "https://www.asaas.com/c/gqab5pzm0gf95ww7",
          },
          {
            name: "Plano Prata",
            pricing: 200,
            ctaText: "CONTRIBUIR COM R$ 200/mês",
            ctaUrl: "https://www.asaas.com/c/dn9gemexzl9pzodx",
          },
          {
            name: "Plano Ouro",
            pricing: 500,
            ctaText: "CONTRIBUIR COM R$ 500/mês",
            ctaUrl: "https://www.asaas.com/c/8hy8dvg0xsoqi3p6",
          },
        ]}
      />

      <ProjectFAQ
        h2="FAQ: Perguntas Frequentes"
        containerClassName="mt-24 sm:mt-42"
        faqs={[
          {
            question: "O que é o projeto?",
            answerParagraphs: [
              "O projeto é um projeto de construção de uma igreja.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            ],
          },
          {
            question: "O que é o projeto?",
            answerParagraphs: [
              "O projeto é um projeto de construção de uma igreja.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            ],
          },
          {
            question: "O que é o projeto?",
            answerParagraphs: [
              "O projeto é um projeto de construção de uma igreja.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            ],
          },
          {
            question: "O que é o projeto?",
            answerParagraphs: [
              "O projeto é um projeto de construção de uma igreja.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            ],
          },
        ]}
      />

      <Separator className="my-14 sm:my-24" />

      <ConstructionDiary />

      <BePartOfTheProject
        h2="Seja parte dessa história"
        ctaText="SEJA PARTE DESSA HISTÓRIA"
        ctaUrl="#price-box"
        containerClassName="mt-24 sm:mt-42"
      />

      <Contact />
    </section>
  );
}
