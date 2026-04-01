import { ArrowLeft } from "lucide-react";
import { Container } from "~/components/container";

type AllCoursesBackButtonProps = {
  href?: string;
};

export function AllCoursesBackButton(props: AllCoursesBackButtonProps) {
  const { href = "/oceano-academy" } = props;

  return (
    <Container className="pb-2 sm:pb-2">
      <div className="flex justify-start">
        <a
          href={href}
          className="h-9 px-4 py-2 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70 inline-flex items-center gap-2 rounded-md text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Ver todos os cursos
        </a>
      </div>
    </Container>
  );
}
