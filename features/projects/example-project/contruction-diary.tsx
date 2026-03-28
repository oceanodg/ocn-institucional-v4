import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { H2Dangerously } from "~/components/ui/h2-dangerously";
import { H3, P, Separator } from "~/components/ui";
import { YoutubeEmbedded } from "~/components/youtube-embeded";

export function ConstructionDiary() {
  return (
    <Container
      className={cn(
        "px-4 sm:px-0 pb-2 py-0 sm:py-0 sm:pb-0 text-center justify-center items-center"
      )}
    >
      <H2Dangerously
        dangerouslySetInnerHTML={{ __html: "Diário de Construção" }}
      />

      <div className="mt-2 sm:mt-6 w-full flex flex-col gap-8 sm:gap-10">
        <div className="text-left flex flex-col gap-1">
          <H3>Concretagem da Fundação</H3>
          <P className="mt-0 text-sm font-semibold">Fase: Fundação</P>
          <P className="mt-0 text-sm italic">Última atualização: 06/11/2025</P>
        </div>

        <YoutubeEmbedded videoId="zfSTHYBIAFU" containerClassName="" />

        <div className="flex flex-col gap-2">
          <P className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </P>

          <P className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </P>
        </div>
      </div>

      <Separator className="my-8 sm:my-10" />

      <div className="mt-2 sm:mt-6 w-full flex flex-col gap-8 sm:gap-10">
        <div className="text-left flex flex-col gap-1">
          <H3>Concretagem da Fundação</H3>
          <P className="mt-0 text-sm font-semibold">Fase: Fundação</P>
          <P className="mt-0 text-sm italic">Última atualização: 06/11/2025</P>
        </div>

        <YoutubeEmbedded videoId="zfSTHYBIAFU" containerClassName="" />

        <div className="flex flex-col gap-2">
          <P className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </P>

          <P className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </P>
        </div>
      </div>

      {/* <Separator className="mt-8 sm:mt-10 mb-14 sm:mb-24" /> */}
    </Container>
  );
}
