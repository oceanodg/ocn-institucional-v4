export type ReadingDay = {
  day: number;
  passages: string;
};

export type ReadingPlan = {
  days: ReadingDay[];
};
