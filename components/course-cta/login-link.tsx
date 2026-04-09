import { Container } from "~/components/container";
import { P } from "~/components/ui";
import { cn } from "~/lib/utils";

type LoginLinkProps = {
  loginUrl: string;
  className?: string;
};

export function LoginLink(props: LoginLinkProps) {
  const { loginUrl, className } = props;

  return (
    <Container
      className={cn("w-full sm:w-96 p-4 sm:p-6 gap-3 lg:gap-3", className)}
    >
      <P className="mt-0 sm:mt-0 mx-auto sm:mx-0">
        Já é cadastrado(a)?{" "}
        <a
          href={loginUrl}
          className="text-primary hover:text-primary/80 underline underline-offset-2 "
          target="_blank"
        >
          Acesse aqui
        </a>
      </P>
    </Container>
  );
}
