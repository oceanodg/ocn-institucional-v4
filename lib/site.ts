export const SITE_URL = "https://www.oceanodagraca.com";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}
