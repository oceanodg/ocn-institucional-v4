"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

import { lora } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import { Button, P, Separator } from "./ui";
import { Badge } from "./ui/badge";

export interface Course {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface School {
  id: string;
  title: string;
  description: string;
  pillar: {
    label: string;
    color: "teal" | "purple" | "blue" | "amber" | "rose";
  };
  courses: Course[];
}

function SchoolCard({ school }: { school: School }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-white transition-shadow duration-200",
        open && "shadow-sm"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        className="flex w-full flex-col gap-6 px-6 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8"
      >
        <div className="min-w-0 flex-1">
          <div
            className={cn(
              "text-xl font-semibold text-gray-700 sm:text-2xl",
              lora.className
            )}
          >
            {school.title}
          </div>

          <P className="mt-2 text-left sm:mt-1">{school.description}</P>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{school.pillar.label}</Badge>
            <span className="text-sm text-muted-foreground">
              {school.courses.length} curso
              {school.courses.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <ChevronDown
          className={cn(
            "shrink-0 self-end text-muted-foreground transition-transform duration-200 sm:self-auto",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="px-6 pb-5 sm:px-8">
          <Separator />

          <div className="flex flex-col gap-3 pt-5">
            {school.courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col gap-4 rounded-lg border bg-background p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-5"
              >
                <div className="min-w-0 flex-1">
                  <div
                    className={cn(
                      "text-lg font-semibold text-gray-700 sm:text-xl",
                      lora.className
                    )}
                  >
                    {course.title}
                  </div>
                  <P className="mt-1 text-left text-base sm:text-base">
                    {course.description}
                  </P>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full sm:w-auto sm:min-w-40"
                >
                  <a href={course.href}>
                    Saiba mais
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface SchoolAccordionProps {
  schools: School[];
  className?: string;
}

export function SchoolAccordion({ schools, className }: SchoolAccordionProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {schools.map((school) => (
        <SchoolCard key={school.id} school={school} />
      ))}
    </div>
  );
}
