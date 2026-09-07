import { llmsSections } from "~/data/seo";
import { absoluteUrl } from "~/lib/site";

export const dynamic = "force-static";

export function GET() {
  const sections = llmsSections.map(({ title, links }) => {
    const items = links.map(
      (link) =>
        `- [${link.title}](${absoluteUrl(link.path)}): ${link.description}`,
    );

    return `## ${title}\n\n${items.join("\n")}`;
  });

  const markdown = [
    "# Igreja Oceano da Graça",
    "> Site oficial da Igreja Oceano da Graça, com informações sobre a igreja, seus templos, a comunidade online e os recursos de formação cristã da Oceano Academy.",
    "O conteúdo está em português do Brasil. Consulte as páginas indicadas para informações atuais sobre horários, contatos, cursos e formas de participação. Os materiais didáticos abaixo estão disponíveis em Markdown; os demais links levam às páginas HTML do site.",
    ...sections,
  ].join("\n\n");

  return new Response(`${markdown}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
