import { Container } from "~/components/container";
import { P } from "~/components/ui";

type LoginLinkProps = {
  loginUrl: string;
};

export function LoginLink(props: LoginLinkProps) {
  const { loginUrl } = props;

  return (
    <Container className="w-full sm:w-96 p-4 sm:p-6 gap-3 lg:gap-3">
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
