import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { ArrowRight } from "lucide-react";
import { P } from "./ui";

export function CardWithLink({
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
    <Card className="max-w-md shadow-none hover:shadow-xs transition-all duration-300 gap-1 rounded-lg flex flex-col">
      <a
        href={link}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className="contents space-y-1"
      >
        <div className="flex-1">
          <CardHeader className="pt-0 pb-0 flex-row items-center gap-3 text-xl sm:text-2xl font-semibold">
            {title}
          </CardHeader>

          <CardContent className="">
            <P className="mt-0 sm:mt-2 text-left">{description}</P>
          </CardContent>
        </div>

        <CardFooter className="pt-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 font-medium text-black hover:text-black/70 hover:cursor-pointer text-sm">
              {linkText} <ArrowRight className="size-4" />
            </span>
          </div>
        </CardFooter>
      </a>
    </Card>
  );
}
