import { cn } from "~/lib/utils";

interface YoutubeEmbeddedProps {
  videoId: string;
  containerClassName?: string;
}

export function YoutubeEmbedded(props: YoutubeEmbeddedProps) {
  const { videoId, containerClassName } = props;

  return (
    <div className={cn("aspect-video w-full", containerClassName)}>
      <iframe
        className="h-full w-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
