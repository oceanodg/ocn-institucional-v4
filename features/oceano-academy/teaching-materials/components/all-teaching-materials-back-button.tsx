import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "~/components/container";

export function AllTeachingMaterialsBackButton() {
  return (
    <Container className="pb-2 sm:pb-2">
      <div className="flex justify-start">
        <Link
          href="/oceano-academy/materiais-didaticos"
          className="h-9 px-4 py-2 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70 inline-flex items-center gap-2 rounded-md text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Materiais Didáticos
        </Link>
      </div>
    </Container>
  );
}
