export const validTabs = ["antigo", "novo", "personagens"] as const;
export type ValidTab = (typeof validTabs)[number];
