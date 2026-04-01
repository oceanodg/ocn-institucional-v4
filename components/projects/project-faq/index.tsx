import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { H2Dangerously } from "~/components/ui/h2-dangerously";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  P,
} from "~/components/ui";

import type { FAQ } from "~/components/projects/project-faq/types";

interface ProjectFAQProps {
  h2: string;
  faqs: Array<FAQ>;
  containerClassName?: string;
}

export function ProjectFAQ(props: ProjectFAQProps) {
  const { h2, faqs, containerClassName } = props;

  return (
    <Container
      className={cn(
        "px-4 sm:px-0 pb-2 py-0 sm:py-0 sm:pb-0",
        containerClassName
      )}
    >
      <div className="w-full text-center justify-center items-center">
        <H2Dangerously dangerouslySetInnerHTML={{ __html: h2 }} />
      </div>

      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                {faq.answerParagraphs.map((paragraph, index) => (
                  <P key={index} className="mt-0">
                    {paragraph}
                  </P>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
