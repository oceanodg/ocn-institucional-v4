import { H3 } from "./ui";
import { PDangerously } from "./ui/p-dangerously";

interface LessonCardProps {
  title: string;
  description: string;
  thumbnail: string;
}

export function LessonCard(props: LessonCardProps) {
  const { title, description, thumbnail } = props;

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 sm:items-center">
      <div className="mb-6 sm:mb-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full sm:w-40 h-auto rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-1 sm:flex-1">
        <H3 className="text-left">{title}</H3>
        <PDangerously
          className="mt-0"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
