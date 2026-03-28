import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar";
import { cn } from "~/lib/utils";
import { Container } from "~/components/container";
import { P } from "./ui";

interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
  containerClassName?: string;
}

export function Testimonial(props: TestimonialProps) {
  const { quote, author, containerClassName } = props;

  return (
    <Container
      className={cn(
        "px-4 py-12 sm:py-16 text-center justify-center items-center gap-0 lg:gap-0 bg-zinc-100 sm:rounded-md",
        containerClassName
      )}
    >
      <div className="flex flex-col items-center text-center gap-10">
        <P className="max-w-3xl sm:text-lg text-primary italic text-center px-2 sm:px-0">
          &ldquo;{quote}&rdquo;
        </P>

        <div className="flex items-center gap-3 sm:gap-4">
          <Avatar className="size-11 sm:size-12">
            <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
          </Avatar>

          <div className="text-left">
            <P className="mt-0 font-medium sm:text-base text-primary">
              {author.name}
            </P>
            <P className="mt-0">{author.role}</P>
          </div>
        </div>
      </div>
    </Container>
  );
}
