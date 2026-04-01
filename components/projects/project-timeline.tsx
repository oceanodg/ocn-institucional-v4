import { cn } from "~/lib/utils";
import { UL } from "~/components/ui/ul";
import { Container } from "~/components/container";
import { Card, CardContent } from "~/components/ui/card";
import { H2Dangerously } from "~/components/ui/h2-dangerously";
import { Separator } from "~/components/ui/separator";

type TimelineEntry = {
  title: string;
  content: Array<string>;
};

interface ProjectTimelineProps {
  title: string;
  containerClassName?: string;
  timelineData: TimelineEntry[];
}

export function ProjectTimeline(props: ProjectTimelineProps) {
  const { title, containerClassName, timelineData } = props;

  return (
    <Container
      className={cn(
        "px-4 sm:px-0 pb-2 py-0 sm:py-0 sm:pb-0 text-center justify-center items-center",
        containerClassName
      )}
    >
      <H2Dangerously dangerouslySetInnerHTML={{ __html: title }} />

      <div className="relative mx-auto max-w-4xl">
        <Separator orientation="vertical" className="absolute left-2 top-4" />

        {timelineData.map((entry, index) => (
          <div key={index} className="relative mb-6 pl-8">
            {/* <div className="bg-foreground absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" /> */}

            <div className="bg-foreground absolute left-0 top-3 flex size-5 items-center justify-center rounded-full">
              <div className="bg-background size-3 rounded-full"></div>
            </div>

            <h4 className="rounded-sm px-4 py-2 text-xl font-semibold tracking-tight text-left bg-zinc-100 w-fit">
              {entry.title}
            </h4>

            <Card className="py-4 border-none shadow-none">
              <CardContent className="px-0 xl:px-2">
                <UL className="list-disc">
                  {entry.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </UL>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
