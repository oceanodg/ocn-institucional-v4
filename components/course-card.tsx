"use client";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { ArrowRight } from "lucide-react";
import { P } from "./ui";

export function CourseCard({
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
    <Card className="max-w-md shadow-none hover:shadow-sm transition-all duration-300 gap-1 rounded-lg flex flex-col pt-0">
      <a
        href={link}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className="contents space-y-1"
      >
        <div className="mt-0 w-full aspect-video bg-muted rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        <div className="flex-1 space-y-2">
          <CardHeader className="pb-0 pt-8 flex-row items-center text-xl sm:text-2xl font-semibold">
            {title}
          </CardHeader>

          <CardContent className="text-sm sm:text-[15px]">
            <P className="mt-0 text-left leading-6 text-muted-foreground">
              {description}
            </P>
          </CardContent>
        </div>

        <CardFooter className="">
          <Button
            variant="outline"
            size="lg"
            className="h-12 hover:cursor-pointer w-full sm:w-full bg-black hover:bg-black/80 text-white hover:text-white"
            onClick={() => {
              if (openInNewTab) {
                window.open(link, "_blank");
              } else {
                window.location.href = link;
              }
            }}
          >
            {linkText}
            <ArrowRight />
          </Button>
        </CardFooter>
      </a>
    </Card>
  );
}
