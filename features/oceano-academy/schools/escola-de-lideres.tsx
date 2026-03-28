import { H1, H2, P, Separator } from "~/components/ui";
import { AllSchoolsBackButton } from "./components/all-schools-back-button";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { CourseCard } from "~/components/course-card";
import { schools } from "../courses/data/schools-and-courses";

export function EscolaDeLideres() {
  return (
    <section className="relative backdrop-blur-sm">
      <AllSchoolsBackButton />

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Escola de Líderes</H1>
          <P className="mt-0">Cursos de capacitação para líderes.</P>
        </div>
      </HeroContainer>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <H2>Cursos</H2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {schools["escola-de-lideres"].courses.map((course) => (
            <CourseCard key={course.title} {...course} openInNewTab={false} />
          ))}
        </div>
      </Container>
    </section>
  );
}
