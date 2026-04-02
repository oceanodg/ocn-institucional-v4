import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { P } from "./ui";
import { lora } from "~/lib/fonts";

export function InfoCardWithImage({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <Card className="max-w-md shadow-none gap-1 rounded-lg flex flex-col pt-0 border-none">
      <div className="mt-0 w-full aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 space-y-2">
        <CardHeader
          className={`px-0 pb-0 pt-8 flex-row items-center text-xl sm:text-2xl font-semibold ${lora.className}`}
        >
          {title}
        </CardHeader>

        <CardContent className="px-0 text-sm sm:text-[15px]">
          <P className="mt-0">{description}</P>
        </CardContent>
      </div>
    </Card>
  );
}
