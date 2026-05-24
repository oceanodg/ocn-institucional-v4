import { HeroContainer } from "~/components/hero";
import { H1, H2, P, Separator } from "~/components/ui";
import { Container } from "~/components/container";
import { CourseCard } from "~/components/course-card";
import { schools } from "~/data/courses/schools-and-courses";
import { CardWithImageAndLink } from "~/components/card-with-image-and-link";

export default function EscolaDeMembrosPage() {
  return (
    <section className="relative backdrop-blur-sm">
      {/* <AllSchoolsBackButton /> */}

      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Escola de Membros</H1>
          <P className="mt-0">Nosso discipulado institucional.</P>
        </div>
      </HeroContainer>

      <Separator className="my-14" />

      <Container className="mb-10 sm:mb-16">
        <H2>Cursos</H2>

        <div className="grid grid-cols-1 gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {schools["escola-de-membros"].courses.map((course) => (
            <CardWithImageAndLink
              key={course.title}
              {...course}
              openInNewTab={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
