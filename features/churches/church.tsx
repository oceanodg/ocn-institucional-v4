import { H1, P, H3, Button, Separator, H2 } from "~/components/ui";
import { HeroContainer } from "~/components/hero";
import { Container } from "~/components/container";
import { churchById } from "./data/churches";
import { MapButton } from "~/components/churches/map-button";
import { UL } from "~/components/ui/ul";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";

export interface ChurchProps {
  id: string;
}

export function Church(props: ChurchProps) {
  const { id } = props;

  const church = churchById(id);

  if (!church) {
    return <div>Igreja não encontrada</div>;
  }

  return (
    <section className="relative backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-8 items-start sm:items-center justify-between">
        <HeroContainer className="pb-2 sm:pb-0 flex-1">
          <div className="flex flex-col gap-2 items-start text-left">
            <H1 className="text-left">{church.name}</H1>
            <P className="mt-0">{church.address}</P>
          </div>
        </HeroContainer>

        <div className="w-full sm:w-auto sm:flex sm:items-center">
          <MapButton
            mapUrl={church.googleMapsUrl}
            buttonText="Ver no Google Maps"
            openInNewTab={true}
          />
        </div>
      </div>

      <Separator className="my-10" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0 -mt-5">
        {church.worshipDays.map((day, index) => (
          <Container key={index} className="">
            <div>
              <H3 className="">{day.weekday}</H3>
              <UL className="">
                {day.worshipNameAndTime.map((time, timeIndex) => (
                  <li key={timeIndex}>{time}</li>
                ))}
              </UL>
            </div>
          </Container>
        ))}
      </div>

      <Separator className="my-10" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0">
        {/* Coluna Esquerda - Dias e Horários dos Cultos */}
        <div className="space-y-0">
          {church.amenities.length > 0 && (
            <Container className="space-y-2">
              <div className="space-y-2">
                <H3>Comodidades</H3>
                <UL className="">
                  {church.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </UL>
              </div>
            </Container>
          )}
        </div>

        {/* Coluna Direita - Redes Sociais e Amenidades */}
        <div className="space-y-6 ">
          {/* Redes Sociais */}
          <Container className="space-y-4">
            <div className="space-y-2">
              <H3>Redes Sociais</H3>
              <UL className="">
                {church.facebook && (
                  <li>
                    <a
                      href={church.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      Facebook
                      <SquareArrowOutUpRight className="size-3.5" />
                    </a>
                  </li>
                )}
                {church.instagram && (
                  <li>
                    <a
                      href={church.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      Instagram
                      <SquareArrowOutUpRight className="size-3.5" />
                    </a>
                  </li>
                )}
                {church.youtube && (
                  <li>
                    <a
                      href={church.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      YouTube
                      <SquareArrowOutUpRight className="size-3.5" />
                    </a>
                  </li>
                )}
              </UL>
            </div>
          </Container>
        </div>

        <div className="md:col-span-2 mb-10 sm:mb-16">
          <Container className="space-y-4">
            <div className="space-y-2">
              <H3>Pastores</H3>
              <UL className="">
                {church.pastors.map((pastor, index) => (
                  <li key={index}>{pastor.name}</li>
                ))}
              </UL>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
