import type { Project } from "~/server/types/project";

export const projects: Project[] = [
  {
    id: "projeto-exemplo",
    slug: "projeto-exemplo",
    name: "Projeto Exemplo",
    description: "Projeto de Exemplo",
  },
];

export const projectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};
