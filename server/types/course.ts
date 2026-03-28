import type { Lesson } from "./lesson";

export type Course = {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  ctaUrl: string;
  lessons: Lesson[];
};
