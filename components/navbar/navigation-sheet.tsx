"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Menu } from "lucide-react";
import { menuLinks } from "~/features/menu-links";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isCurrentPage = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  const activeClass = "underline underline-offset-6 decoration-1.5";

  const handleLinkClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onTouchStart={(e) => e.preventDefault()}
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-5">
        <div className="inline-block">
          <Link href="/" onClick={handleLinkClick} className="inline-flex">
            <img src="/logo/logo-minimal.png" alt="Logo" className="w-8 h-8" />
          </Link>
        </div>

        <div className="mt-8 text-base flex flex-col gap-4">
          {menuLinks.map(({ title, href, submenu }) =>
            submenu ? (
              <Accordion key={title} type="single" collapsible>
                <AccordionItem value={title} className="border-none">
                  <AccordionTrigger
                    className={`py-0 hover:no-underline ${
                      isCurrentPage(href) ? activeClass : ""
                    }`}
                  >
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-0">
                    <div className="flex flex-col gap-3 pl-4">
                      {submenu.map((item) =>
                        item.external ? (
                          <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={handleLinkClick}
                          >
                            {item.title}
                          </a>
                        ) : (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={handleLinkClick}
                          >
                            {item.title}
                          </Link>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={href}
                href={href}
                className={isCurrentPage(href) ? activeClass : ""}
                onClick={handleLinkClick}
              >
                {title}
              </Link>
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
