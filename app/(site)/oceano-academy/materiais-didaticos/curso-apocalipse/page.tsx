import { HeroContainer } from "~/components/hero";
import { AllTeachingMaterialsBackButton } from "../../../../../features/oceano-academy/teaching-materials/components/all-teaching-materials-back-button";
import { H1, H2, H3, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { UL } from "~/components/ui/ul";

export default function CursoApocalipse() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllTeachingMaterialsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Curso Apocalipse</H1>
          <P className="mt-0">Um estudo sobre o Apocalipse.</P>
        </div>
      </HeroContainer>

      <Separator className="my-8" />

      <Container className="mb-10 sm:mb-16">
        <H2 id="materials-didactic">Materiais Didáticos</H2>

        <UL className="mt-0">
          <li>
            <a
              href="https://drive.google.com/file/d/1LNPbSqst5OOeNVjhGzmwB13PYwPflCQg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 text-blue-500"
            >
              Apostila
            </a>
          </li>
        </UL>
      </Container>
    </section>
  );
}
