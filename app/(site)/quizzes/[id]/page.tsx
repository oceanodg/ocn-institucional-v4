import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { Quizzes } from "~/components/quizzes";
import type { Quiz } from "~/server/types";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const filePath = path.join(process.cwd(), "server/data/quizzes", `${id}.json`);
    const raw = await fs.readFile(filePath, "utf-8");
    const quiz: Quiz = JSON.parse(raw);
    return <Quizzes quiz={quiz} />;
  } catch {
    notFound();
  }
}
