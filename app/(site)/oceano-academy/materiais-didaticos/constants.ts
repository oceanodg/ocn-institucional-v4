export const validTabs = ["antigo", "novo"] as const;
export type ValidTab = (typeof validTabs)[number];
