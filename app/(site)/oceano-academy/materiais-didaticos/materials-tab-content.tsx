"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { H2, H3 } from "~/components/ui";
import { Input } from "~/components/ui/input";
import { TabsContent } from "~/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { cn } from "~/lib/utils";

export type Material = {
  title: string;
  description: string;
  url?: string;
  isUrlExternal?: boolean;
};

export type MaterialGroup = {
  title: string;
  description: Array<string>;
  materials: Array<Material>;
};

export type MaterialsTab = {
  value: string;
  heading: string;
  groups: MaterialGroup[];
};

function normalizeForSearch(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function matchesTitleSearch(title: string, query: string) {
  const normalizedQuery = normalizeForSearch(query.trim());
  if (!normalizedQuery) return true;
  return normalizeForSearch(title).includes(normalizedQuery);
}

function LinkMaterial(props: {
  url: string;
  text: string;
  className?: string;
  isUrlExternal?: boolean;
}) {
  const { url, text, className, isUrlExternal } = props;
  const linkClassName = cn(
    "dark:text-dark-secondary hover:dark:text-dark-secondary-2",
    "text-light-secondary hover:text-light-secondary-2",
    "block h-full w-full p-3",
    className
  );

  if (isUrlExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={url} className={linkClassName}>
      {text}
    </Link>
  );
}

function MaterialRow(material: Material) {
  const { title, description, url, isUrlExternal } = material;
  return (
    <TableRow
      className={cn(url ? "hover:cursor-pointer" : "hover:cursor-default")}
    >
      <TableCell className={cn("w-32 sm:w-52", url && "p-0")}>
        {url ? (
          <LinkMaterial
            url={url}
            text={title}
            isUrlExternal={isUrlExternal}
            className="text-blue-500 hover:text-blue-500/80 underline underline-offset-4"
          />
        ) : (
          <span className="text-muted-foreground">{title}</span>
        )}
      </TableCell>
      <TableCell className={cn(url && "p-0")}>
        {url ? (
          <LinkMaterial
            url={url}
            text={description}
            isUrlExternal={isUrlExternal}
          />
        ) : (
          <span className="text-muted-foreground">
            {description} <span className="font-medium italic">– em breve</span>
          </span>
        )}
      </TableCell>
    </TableRow>
  );
}

export function MaterialsTabContent({ value, heading, groups }: MaterialsTab) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim();
    if (!query) return groups;

    return groups
      .map((group) => ({
        ...group,
        materials: group.materials.filter((material) =>
          matchesTitleSearch(material.title, query)
        ),
      }))
      .filter((group) => group.materials.length > 0);
  }, [groups, searchQuery]);

  return (
    <TabsContent value={value}>
      <section className="py-5 flex flex-col gap-8 sm:gap-10 mb-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <H2>{heading}</H2>
          <div className="relative w-full sm:max-w-xs">
            <Search
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder="Pesquisar pelo nome..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="pl-9"
              aria-label={`Pesquisar materiais em ${heading}`}
            />
          </div>
        </div>

        {filteredGroups.length === 0 ? (
          <p className="text-muted-foreground">
            Nenhum material encontrado para &ldquo;{searchQuery.trim()}&rdquo;.
          </p>
        ) : (
          filteredGroups.map((group) => (
            <div key={group.title}>
              <H3>{group.title}</H3>
              <Table className="mt-6">
                <TableBody>
                  {group.materials.map((item) => (
                    <MaterialRow key={item.title} {...item} />
                  ))}
                </TableBody>
              </Table>
            </div>
          ))
        )}
      </section>
    </TabsContent>
  );
}
