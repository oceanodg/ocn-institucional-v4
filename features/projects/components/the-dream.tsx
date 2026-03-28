import { Fragment } from "react";
import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { H2Dangerously } from "~/components/ui/h2-dangerously";
import { YoutubeEmbedded } from "~/components/youtube-embeded";
import { CTAButton } from "~/features/projects/components/cta-button";

interface TheDreamProps {
  h2: string;
  youtubeVideoId: string;
  paragraphs: Array<React.ReactNode>;
  ctaText: string;
  ctaUrl: string;
  containerClassName?: string;
}

export function TheDream(props: TheDreamProps) {
  const {
    h2,
    youtubeVideoId,
    paragraphs,
    ctaText,
    ctaUrl,
    containerClassName,
  } = props;
  return (
    <Container
      className={cn(
        "px-4 sm:px-0 pb-2 py-0 sm:py-0 sm:pb-0 text-center justify-center items-center",
        containerClassName
      )}
    >
      <H2Dangerously dangerouslySetInnerHTML={{ __html: h2 }} />

      <div className="mt-2 sm:mt-6 w-full">
        <YoutubeEmbedded videoId={youtubeVideoId} containerClassName="" />
      </div>

      <div className="flex flex-col gap-2">
        {paragraphs.map((paragraph, index) => (
          <Fragment key={index}>{paragraph}</Fragment>
        ))}
      </div>

      <CTAButton text={ctaText} url={ctaUrl} />
    </Container>
  );
}
