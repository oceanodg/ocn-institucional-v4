"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { menuLinks } from "~/data/menu-links";

export const NavMenu = (props: NavigationMenuProps) => {
  const pathname = usePathname();

  const isCurrentPage = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  const activeClass = "underline underline-offset-6 decoration-1.5";

  return (
    <NavigationMenu {...props} viewport={false} className="z-50 hidden md:flex">
      <NavigationMenuList
        className="gap-0 space-x-0 text-sm"
        onMouseEnter={(e) => e.preventDefault()}
      >
        {menuLinks.map(({ title, href, submenu, external }) => (
          <NavigationMenuItem key={title}>
            {submenu ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    "text-[15px] font-normal h-10 px-4 py-2 mr-1 cursor-pointer text-gray-700 hover:text-gray-700/80",
                    isCurrentPage(href) ? activeClass : ""
                  )}
                  onPointerEnter={(e) => e.preventDefault()}
                  onPointerMove={(e) => e.preventDefault()}
                  onPointerLeave={(e) => e.preventDefault()}
                >
                  {title}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="z-50"
                  onPointerEnter={(e) => e.preventDefault()}
                  onPointerLeave={(e) => e.preventDefault()}
                >
                  <ul className="grid w-[190px] gap-1 p-0">
                    {submenu.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                            </Link>
                          )}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Button
                variant="ghost"
                className="text-[15px] font-normal mr-1 text-gray-700 hover:text-gray-700/80"
                asChild
              >
                <Link
                  href={href}
                  className={isCurrentPage(href) ? activeClass : ""}
                  target={external ? "_blank" : undefined}
                >
                  {title}
                </Link>
              </Button>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-700",
            className
          )}
          {...props}
        >
          <props.icon className="mb-4 h-6 w-6" />
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-700">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
