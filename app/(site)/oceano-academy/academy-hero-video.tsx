"use client";

import { useState } from "react";

import { Container } from "~/components/container";
import { HeroContainer } from "~/components/hero";
import { H1, P } from "~/components/ui";

export function AcademyHeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <HeroContainer className="pb-2 sm:pb-0">
        <div className="flex flex-col gap-2">
          <H1 className="text-left">Oceano Academy</H1>
          <P className="mt-0">
            Braço educacional da Igreja Oceano da Graça.
            {!showVideo ? (
              <>
                {" "}
                <button
                  type="button"
                  className="inline cursor-pointer text-blue-500 underline-offset-4 hover:underline"
                  aria-expanded={showVideo}
                  aria-controls="academy-hero-video"
                  onClick={() => setShowVideo(true)}
                >
                  Saiba mais
                </button>
              </>
            ) : null}
          </P>
        </div>
      </HeroContainer>

      {showVideo ? (
        <Container className="mt-2 sm:mt-4">
          <div id="academy-hero-video" className="aspect-video w-full">
            <iframe
              className="h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/LEdj8ZOk8P8"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Container>
      ) : null}
    </>
  );
}
