// https://www.shadcnui-blocks.com/blocks/footer-04
// npx shadcn add https://shadcn-ui-blocks.akashmoradiya.com/r/footer-04.json

import Link from "next/link";
import { Globe, Instagram, Youtube } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import { menuLinks } from "~/data/menu-links";

export const Footer = () => {
  return (
    <div className="flex flex-col border-t bg-gray-50">
      <footer className="">
        <div className="max-w-5xl mx-auto p-6 sm:p-8">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}

              <img
                src="/logo/odg-black-logo.svg"
                alt="Igreja Oceano da Graça"
                className="w-32 mx-auto md:mx-0"
              />

              <ul className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                {menuLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator />

          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground text-center">
              <a href="/" target="_blank">
                Igreja Oceano da Graça
              </a>{" "}
              {new Date().getFullYear()} &copy; Todos os direitos reservados.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a
                href="https://www.oceanodagraca.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.youtube.com/c/OceanodaGra%C3%A7a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/oceanodagraca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
