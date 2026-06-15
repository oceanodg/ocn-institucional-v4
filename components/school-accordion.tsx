"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

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
    /** Tailwind color key used to derive bg/text/border variants */
    color: "teal" | "purple" | "blue" | "amber" | "rose";
  };
  courses: Course[];
}

// ─── Color map ────────────────────────────────────────────────────────────────

const colorMap: Record<
  School["pillar"]["color"],
  {
    pill: string;
    cardOpen: string;
    chevronOpen: string;
    courseBox: string;
    saibaMais: string;
  }
> = {
  teal: {
    pill: "bg-emerald-50 text-emerald-900",
    cardOpen: "border-emerald-300",
    chevronOpen: "text-emerald-700",
    courseBox: "bg-emerald-50 border border-emerald-200",
    saibaMais: "text-emerald-700 hover:text-emerald-500",
  },
  purple: {
    pill: "bg-violet-50 text-violet-900",
    cardOpen: "border-violet-300",
    chevronOpen: "text-violet-700",
    courseBox: "bg-violet-50 border border-violet-200",
    saibaMais: "text-violet-700 hover:text-violet-500",
  },
  blue: {
    pill: "bg-blue-50 text-blue-900",
    cardOpen: "border-blue-300",
    chevronOpen: "text-blue-700",
    courseBox: "bg-blue-50 border border-blue-200",
    saibaMais: "text-blue-700 hover:text-blue-500",
  },
  amber: {
    pill: "bg-amber-50 text-amber-900",
    cardOpen: "border-amber-300",
    chevronOpen: "text-amber-700",
    courseBox: "bg-amber-50 border border-amber-200",
    saibaMais: "text-amber-700 hover:text-amber-500",
  },
  rose: {
    pill: "bg-rose-50 text-rose-900",
    cardOpen: "border-rose-300",
    chevronOpen: "text-rose-700",
    courseBox: "bg-rose-50 border border-rose-200",
    saibaMais: "text-rose-700 hover:text-rose-500",
  },
};

// ─── ChevronIcon ──────────────────────────────────────────────────────────────

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ─── SchoolCard ───────────────────────────────────────────────────────────────

function SchoolCard({ school }: { school: School }) {
  const [open, setOpen] = useState(false);
  const colors = colorMap[school.pillar.color];

  return (
    <div
      className={[
        "rounded-xl border bg-white overflow-hidden transition-colors duration-200",
        open ? colors.cardOpen : "border-gray-200",
      ].join(" ")}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full text-left flex items-start gap-4 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400"
      >
        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
          <span className="text-[17px] font-medium text-gray-900 leading-snug">
            {school.title}
          </span>

          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={[
                "inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full",
                colors.pill,
              ].join(" ")}
            >
              {school.pillar.label}
            </span>
            <span className="text-[11px] text-gray-400">
              {school.courses.length} curso
              {school.courses.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Description only visible when open */}
          {open && (
            <p className="text-[12px] text-gray-500 leading-relaxed mt-0.5">
              {school.description}
            </p>
          )}
        </div>

        <ChevronIcon
          className={[
            "shrink-0 mt-0.5 transition-transform duration-250",
            open ? `rotate-180 ${colors.chevronOpen}` : "text-gray-400",
          ].join(" ")}
        />
      </button>

      {/* Courses */}
      {open && (
        <>
          <div className="h-px bg-gray-100 mx-5" />
          <div className="px-5 pt-3 pb-5 flex flex-col gap-2">
            {school.courses.map((course) => (
              <div
                key={course.id}
                className={[
                  "rounded-lg px-3 pt-2.5 pb-3",
                  colors.courseBox,
                ].join(" ")}
              >
                <p className="text-[14px] font-medium text-gray-900 mb-0.5">
                  {course.title}
                </p>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  {course.description}
                </p>
                <a
                  href={course.href}
                  className={[
                    "inline-flex items-center gap-1 text-[12px] font-medium mt-1.5 transition-colors",
                    colors.saibaMais,
                  ].join(" ")}
                >
                  <ArrowRightIcon />
                  Saiba mais
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── SchoolAccordion ──────────────────────────────────────────────────────────

interface SchoolAccordionProps {
  schools: School[];
  className?: string;
}

export function SchoolAccordion({ schools, className }: SchoolAccordionProps) {
  return (
    <div className={["flex flex-col gap-2.5", className].join(" ")}>
      {schools.map((school) => (
        <SchoolCard key={school.id} school={school} />
      ))}
    </div>
  );
}
