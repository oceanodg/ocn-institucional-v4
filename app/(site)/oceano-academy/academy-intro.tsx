"use client";

import { useState } from "react";

import { Container } from "~/components/container";
import { H3, P } from "~/components/ui";

const additionalSections = [
  {
    title: "Nossa Missão",
    description: (
      <>
        Acreditamos que a fé não deve ser vivida de forma superficial, mas
        enraizada na Palavra de Deus. Como disse C. H. Spurgeon:{" "}
        <span className="italic">
          "Um cristão sem conhecimento é como uma casa sem alicerces."
        </span>{" "}
        Por isso, nossa missão é oferecer ensino sólido, relevante e acessível,
        para que cada pessoa conheça mais profundamente as Escrituras e caminhe
        com segurança em sua jornada espiritual.
      </>
    ),
  },
  {
    title: "Uma jornada de descoberta",
    description:
      "Aqui, cada aula, cada encontro, cada curso é uma oportunidade de mergulhar mais fundo nesse oceano de graça e de verdade. Queremos que você descubra que a Bíblia é um livro vivo, sempre atual, capaz de moldar caráter, renovar a mente e sustentar famílias inteiras.",
  },
  {
    title: "Crescimento integral",
    description:
      "Na Oceano Academy, você não apenas aprende: você cresce, compartilha, se conecta e é desafiado a viver a fé de maneira prática e vibrante. Estamos aqui para preparar uma igreja madura, apaixonada por Jesus e pronta para impactar o mundo.",
  },
];

export function AcademyIntro() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-0 flex flex-col sm:mt-0">
      <Container className="pt-0 sm:pt-4">
        <div>
          <P className="text-left">
            A <span className="font-bold">Oceano Academy</span> é o braço
            educacional da nossa igreja.
            {!showMore ? (
              <>
                {" "}
                <button
                  type="button"
                  className="inline cursor-pointer text-blue-500 underline-offset-4 hover:underline"
                  aria-expanded={showMore}
                  aria-controls="academy-intro-more"
                  onClick={() => setShowMore(true)}
                >
                  saiba mais
                </button>
              </>
            ) : (
              <>
                {" "}
                Ela nasceu com o propósito de fortalecer as bases da fé por meio
                do conhecimento bíblico, alcançando cada fase da vida: crianças,
                adolescentes, jovens, homens, mulheres, casais e toda a família
                espiritual.
              </>
            )}
          </P>
        </div>
      </Container>

      {showMore ? (
        <div id="academy-intro-more" className="flex flex-col">
          {additionalSections.map((section) => (
            <Container key={section.title}>
              <div>
                <H3>{section.title}</H3>
                <P className="text-left">{section.description}</P>
              </div>
            </Container>
          ))}
        </div>
      ) : null}
    </div>
  );
}
