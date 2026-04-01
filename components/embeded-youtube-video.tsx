import { cn } from "~/lib/utils";
import { Container } from "~/components/container";

interface EmbededYoutubeVideoProps {
  youtubeVideoId: string;
  title?: string;
  containerClassName?: string;
  iframeClassName?: string;
}

export function EmbededYoutubeVideo(props: EmbededYoutubeVideoProps) {
  const { youtubeVideoId, title, containerClassName, iframeClassName } = props;

  const allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

  return (
    <Container className={cn(containerClassName)}>
      <div className="aspect-video w-full">
        <iframe
          className={cn("h-full w-full rounded-lg", iframeClassName)}
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          title={title ?? "Igreja Oceano da Graça"}
          frameBorder={0}
          allow={allow}
          allowFullScreen
        />
      </div>
    </Container>
  );
}
