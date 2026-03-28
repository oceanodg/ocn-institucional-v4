import { Church } from "~/features/churches/church";

export default async function IgrejaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Church id={id} />;
}
