export type FeaturedBannerItem = {
  src: string;
  alt: string;
  href: string;
  title?: string;
  description?: string;
  date?: string;
};

export type FeaturedBannerCarouselProps = {
  banners: FeaturedBannerItem[];
  autoplayDelayMs?: number;
  ariaLabel?: string;
  className?: string;
};
