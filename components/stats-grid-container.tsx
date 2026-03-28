import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { H2Dangerously } from "~/components/ui/h2-dangerously";
import { P } from "~/components/ui/p";

interface StatsGridContainerProps {
  title: string;
  stats: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }[];
  containerClassName?: string;
}

export function StatsGridContainer(props: StatsGridContainerProps) {
  const { title, stats, containerClassName } = props;

  return (
    <Container
      className={cn(
        "px-4 sm:px-0 pb-2 py-0 sm:py-0 sm:pb-0 text-center justify-center items-center",
        containerClassName
      )}
    >
      <H2Dangerously dangerouslySetInnerHTML={{ __html: title }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 sm:mt-6 w-full">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-md px-4 py-8 text-center shadow-xs gap-2 bg-zinc-100"
          >
            <div className="mb-2">{item.icon}</div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-2xl font-semibold text-gray-800">
                {item.value}
              </div>
              <div className="">
                <P className="mt-0 text-left">{item.label}</P>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
