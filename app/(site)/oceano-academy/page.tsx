import Link from "next/link";

import { Container } from "~/components/container";
import { CTABox } from "~/components/cta-box";
import { AcademyHeroVideo } from "./academy-hero-video";
import { SchoolAccordionCards } from "./school-accordion-cards";
import { data } from "./schools-data";
import { SummaryLi } from "~/components/summary-li";
import { Button, H3, P, Separator } from "~/components/ui";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { UL } from "~/components/ui/ul";
import { lora } from "~/lib/fonts";
import { cn } from "~/lib/utils";

// function SchoolCards() {
//   return (
//     <Card className="gap-0 overflow-hidden rounded-lg bg-white py-0 shadow-none">
//       {data.map((school) => (
//         <div key={school.id}>
//           <CardHeader className="px-6 py-6 sm:px-8 sm:py-7">
//             <div className="flex flex-wrap items-center gap-3">
//               <Badge variant="secondary">{school.pillar.label}</Badge>
//               {!school.hideCoursesQuantity && (
//                 <span className="text-sm text-muted-foreground">
//                   {school.courses.length} curso
//                   {school.courses.length !== 1 ? "s" : ""}
//                 </span>
//               )}
//             </div>

//             <div
//               className={cn(
//                 "mt-4 text-xl font-semibold text-gray-700 sm:text-2xl",
//                 lora.className
//               )}
//             >
//               {school.title}
//             </div>

//             <P className="mt-2 text-left sm:mt-1">{school.description}</P>
//           </CardHeader>

//           <CardContent className="px-6 pb-6 sm:px-8 sm:pb-7">
//             <UL className="mt-0 pl-3.5 sm:pl-4 space-y-2 sm:space-y-2">
//               {school.courses.map((course) => (
//                 <SummaryLi
//                   key={course.id}
//                   className={
//                     !course.href
//                       ? "text-muted-foreground no-underline hover:no-underline cursor-default"
//                       : undefined
//                   }
//                 >
//                   {course.href ? (
//                     <Link href={course.href}>{course.title}</Link>
//                   ) : (
//                     <span>{course.title}</span>
//                   )}
//                 </SummaryLi>
//               ))}
//             </UL>
//             {school.courses.some((course) => !course.href) && (
//               <p className="mt-3 ml-3 text-sm sm:text-base text-muted-foreground italic">
//                 * em breve
//               </p>
//             )}
//             {school.inviteHref ? (
//               <div className="mt-6">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="h-12 hover:cursor-pointer bg-gray-900 hover:bg-gray-900/80 text-white hover:text-white w-full sm:w-62.5"
//                   asChild
//                 >
//                   <a
//                     href={school.inviteHref}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Inscreva-se
//                   </a>
//                 </Button>
//               </div>
//             ) : null}
//           </CardContent>

//           {school.id !== data[data.length - 1].id ? <Separator /> : null}
//         </div>
//       ))}
//     </Card>
//   );
// }

export default function OceanoAcademyPage() {
  return (
    <section className="relative backdrop-blur-sm">
      <AcademyHeroVideo />

      {/* <AcademyIntro /> */}

      {/* <Separator className="mt-4 sm:mt-8 mb-10 sm:mb-12" /> */}

      <Container className="pt-0 sm:pt-0 mt-10 sm:mt-12 mb-10 sm:mb-16">
        <div className="flex flex-col gap-4">
          <H3>Nossas escolas de formação</H3>

          <P className="-mt-2 mb-2 sm:mt-0 sm:mb-2">
            Encontre a formação certa para servir e crescer na fé.
          </P>

          {/* <SchoolCards /> */}

          <SchoolAccordionCards />

          <CTABox
            title="Já é cadastrado(a) em algum curso?"
            description="Acesse agora a plataforma de cursos da Oceano Academy."
            buttonLink="https://academy.oceanodagraca.com/"
            buttonText="Acesse agora"
            openInNewTab={true}
          />
        </div>
      </Container>
    </section>
  );
}
