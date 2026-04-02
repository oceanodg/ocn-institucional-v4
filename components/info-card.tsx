import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { P } from "./ui";
import { lora } from "~/lib/fonts";

export function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="max-w-md shadow-none gap-1 rounded-lg flex flex-col bg-white border">
      <div className="flex-1">
        <CardHeader
          className={`pt-0 pb-0 flex-row items-center gap-3 text-xl sm:text-2xl font-medium text-gray-700 ${lora.className}`}
        >
          {title}
        </CardHeader>

        <CardContent className="">
          <P className="mt-0 text-left">{description}</P>
        </CardContent>
      </div>
    </Card>
  );
}
