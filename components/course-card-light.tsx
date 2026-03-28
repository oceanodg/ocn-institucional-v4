import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { P } from "./ui";

export function CourseCardLight({
  title,
  description,
  image,
  link,
  linkText,
  openInNewTab,
}: {
  title: string;
  description: string;
  image?: string;
  link: string;
  linkText: string;
  openInNewTab?: boolean;
}) {
  return (
    <Card className="max-w-md shadow-none gap-1 rounded-lg flex flex-col pt-0">
      <a
        href={link}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className="contents"
      >
        <div className="mt-0 w-full aspect-video bg-muted rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        <div className="flex-1 space-y-0">
          <CardHeader className="pb-0 pt-8 flex-row items-center text-xl sm:text-2xl font-semibold">
            {title}
          </CardHeader>

          <CardContent className="text-sm sm:text-[15px]">
            <P className="mt-0 text-left leading-6 text-muted-foreground">
              {description}
            </P>
          </CardContent>
        </div>
      </a>
    </Card>
  );
}
