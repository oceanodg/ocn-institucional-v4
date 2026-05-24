import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "~/components/container";
import { ValidTab } from "~/app/(site)/oceano-academy/materiais-didaticos/constants";

type Props = {
  tab?: ValidTab;
};

export function AllTeachingMaterialsBackButton(props: Props) {
  const { tab } = props;

  const href = tab
    ? `/oceano-academy/materiais-didaticos?tab=${tab}`
    : "/oceano-academy/materiais-didaticos";

  return (
    <Container className="pb-2 sm:pb-2">
      <div className="flex justify-start">
        <Link
          href={href}
          className="h-9 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-100/80 hover:text-gray-700/80 inline-flex items-center gap-2 rounded-md text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Materiais de Apoio
        </Link>
      </div>
    </Container>
  );
}
