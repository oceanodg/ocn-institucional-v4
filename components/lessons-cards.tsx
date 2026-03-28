import type { Lesson } from "~/server/types/lesson";
import { Separator } from "./ui";
import { LessonCard } from "./lesson-card";

interface LessonsCardsProps {
  lessons: Lesson[];
}

export function LessonsCards(props: LessonsCardsProps) {
  const { lessons } = props;

  return (
    <div className="my-4 flex flex-col gap-4">
      {lessons.map((lesson) => (
        <div key={lesson.title}>
          <LessonCard
            key={lesson.title}
            title={lesson.title}
            description={lesson.description}
            thumbnail={lesson.thumbnail}
          />
          {lessons.indexOf(lesson) !== lessons.length - 1 && (
            <Separator className="my-10 sm:mt-8 sm:mb-4" />
          )}
        </div>
      ))}
    </div>
  );
}
