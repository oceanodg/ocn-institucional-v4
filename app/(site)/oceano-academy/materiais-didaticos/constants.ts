export const validTabs = [
  "antigo",
  "novo",
  "personagens",
  "parabolas",
] as const;
export type ValidTab = (typeof validTabs)[number];
