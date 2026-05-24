import { ArrowLeft } from "lucide-react";
import { Container } from "~/components/container";

export function EscolaBiblicaBackButton() {
  return (
    <Container className="pb-2 sm:pb-2">
      <div className="flex justify-start">
        <a
          href="/oceano-academy/escolas/escola-biblica"
          className="h-9 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-100/80 hover:text-gray-700/80 inline-flex items-center gap-2 rounded-md text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a Escola Bíblica
        </a>
      </div>
    </Container>
  );
}
