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

export function CardWithButton({
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
    <Card className="max-w-md shadow-none gap-1 rounded-lg flex flex-col">
      <div className="flex-1">
        <CardHeader className="pt-0 pb-0 flex-row items-center gap-3 text-xl sm:text-2xl font-semibold">
          {title}
        </CardHeader>

        <CardContent className="">
          <P className="mt-0 sm:mt-2 text-left">{description}</P>
          {/* <div className="mt-5 w-full aspect-video bg-muted rounded-xl">
            <img src={image} alt={title} />
          </div> */}
        </CardContent>
      </div>

      <CardFooter className="pt-4">
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
    </Card>
  );
}
