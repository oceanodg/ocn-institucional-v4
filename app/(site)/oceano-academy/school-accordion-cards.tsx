"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  P,
} from "~/components/ui";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Globe, House } from "lucide-react";
import { lora } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import { data, type Course, type Modality, type School } from "./schools-data";

function CourseModalityIndicator({ modality }: { modality: Modality }) {
  const showOnline =
    modality === "Online" || modality === "Presencial e Online";
  const showPresencial =
    modality === "Presencial" || modality === "Presencial e Online";

  return (
    <>
      <span
        className="flex shrink-0 items-center gap-1 text-muted-foreground sm:hidden"
        aria-label={modality}
      >
        {showPresencial ? (
          <House className="size-3.5 shrink-0" aria-hidden />
        ) : null}
        {showOnline ? (
          <Globe className="size-3.5 shrink-0" aria-hidden />
        ) : null}
      </span>
      <Badge
        variant="secondary"
        className="hidden shrink-0 px-2.5 py-1 sm:inline-flex"
      >
        {modality}
      </Badge>
    </>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http");
}

function linkProps(href: string) {
  return isExternalHref(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

function CourseAccordionItem({
  course,
  enrollHref,
}: {
  course: Course;
  enrollHref?: string;
}) {
  const learnMoreHref = course.learnMoreHref;
  const hasActions = Boolean(enrollHref || learnMoreHref);

  return (
    <AccordionItem value={course.id}>
      <AccordionTrigger
        className={cn(
          "items-center gap-2 px-4 py-4 hover:no-underline sm:gap-4 sm:px-5 [&>svg]:translate-y-0 text-muted-foreground",
          hasActions && "text-blue-500"
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:justify-between sm:gap-3">
          <span className="min-w-0 flex-1 text-left text-sm sm:flex-initial sm:text-base">
            {course.title}
          </span>
          {course.modality ? (
            <CourseModalityIndicator modality={course.modality} />
          ) : null}
        </div>
      </AccordionTrigger>

      <AccordionContent className="border-t bg-white px-4 py-4 sm:px-5 sm:py-7">
        {course.description ? (
          <P className="mt-0">{course.description}</P>
        ) : null}

        {hasActions ? (
          <div
            className={cn(
              "flex flex-row flex-wrap items-center gap-2",
              course.description && "mt-4"
            )}
          >
            {enrollHref ? (
              <Button
                size="sm"
                className="shrink-0 hover:cursor-pointer"
                asChild
              >
                <a href={enrollHref} {...linkProps(enrollHref)}>
                  Inscreva-se
                </a>
              </Button>
            ) : null}

            {learnMoreHref && enrollHref ? (
              <Button
                size="sm"
                variant="link"
                className="h-auto shrink-0 p-0 text-muted-foreground hover:cursor-pointer hover:underline ml-2"
                asChild
              >
                <a href={learnMoreHref} {...linkProps(learnMoreHref)}>
                  Saiba mais
                </a>
              </Button>
            ) : null}

            {learnMoreHref && !enrollHref ? (
              <Button
                size="sm"
                variant="outline"
                className="shrink-0 hover:cursor-pointer"
                asChild
              >
                <a href={learnMoreHref} {...linkProps(learnMoreHref)}>
                  Saiba mais
                </a>
              </Button>
            ) : null}
          </div>
        ) : null}
      </AccordionContent>
    </AccordionItem>
  );
}

function SchoolAccordionCard({ school }: { school: School }) {
  const hasUpcomingCourses = school.courses.some(
    (course) => course.comingSoon
  );

  return (
    <Card className="gap-0 rounded-lg bg-white py-0 shadow-none">
      <CardHeader className="px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <Badge
            variant="secondary"
            className="order-first px-2.5 py-1 sm:order-last"
          >
            {school.pillar.label}
          </Badge>
          <div
            className={cn(
              "text-xl font-semibold text-gray-700 sm:text-2xl",
              lora.className
            )}
          >
            {school.title}
          </div>
        </div>

        <P className="mt-0 text-left sm:mt-1">{school.description}</P>
      </CardHeader>

      <CardContent className="px-6 pb-6 sm:px-8 sm:pb-7">
        <div className="mb-3 flex flex-wrap gap-1 sm:hidden">
          <Badge variant="secondary" className="px-2.5 py-1">
            <Globe />
            Online
          </Badge>
          <Badge variant="secondary" className="px-2.5 py-1">
            <House />
            Presencial
          </Badge>
        </div>

        <Accordion
          type="single"
          collapsible
          className="overflow-hidden rounded-lg border"
        >
          {school.courses.map((course) => (
            <CourseAccordionItem
              key={course.id}
              course={course}
              enrollHref={course.enrollHref ?? school.inviteHref}
            />
          ))}
        </Accordion>

        {hasUpcomingCourses ? (
          <p className="mt-4 text-sm text-muted-foreground italic sm:text-base">
            * em breve
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function SchoolAccordionCards() {
  return (
    <div className="flex flex-col gap-4">
      {data.map((school) => (
        <SchoolAccordionCard key={school.id} school={school} />
      ))}
    </div>
  );
}
