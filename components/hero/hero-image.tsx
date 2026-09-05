"use client";

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function HeroImage({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger
        type="button"
        aria-label={`Ampliar imagem: ${alt}`}
        className={cn(
          "-my-2 block w-full cursor-zoom-in overflow-hidden rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:rounded-lg",
          className
        )}
      >
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full", imageClassName)}
        />
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="fixed inset-0 z-50 flex h-dvh w-full items-center justify-center px-4 py-16 outline-none sm:px-8 [@media(orientation:landscape)_and_(max-height:500px)]:py-2"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <DialogPrimitive.Title className="sr-only">
            {alt}
          </DialogPrimitive.Title>
          <img
            src={src}
            alt={alt}
            className="block h-auto w-auto max-h-full max-w-full object-contain"
          />
          <DialogPrimitive.Close asChild>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 size-11 rounded-full"
              aria-label="Fechar imagem ampliada"
            >
              <XIcon />
            </Button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
