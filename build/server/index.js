import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link, useLocation, useParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import React, { useState, useCallback } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon, XIcon, Menu, Globe, Youtube, Instagram, ArrowRight, MapPin, SquareArrowOutUpRight, Check, Copy, ArrowLeft } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "pt-BR",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("script", {
        dangerouslySetInnerHTML: {
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M8ZH4SPL');`
        }
      }), /* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx("noscript", {
        children: /* @__PURE__ */ jsx("iframe", {
          src: "https://www.googletagmanager.com/ns.html?id=GTM-M8ZH4SPL",
          height: "0",
          width: "0",
          style: {
            display: "none",
            visibility: "hidden"
          }
        })
      }), children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
function meta({}) {
  return [{
    title: "Igreja Oceano da Graça"
  }, {
    name: "description",
    content: "Igreja Oceano da Graça. Vem ser família com a gente."
  }];
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx(
          ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
const menuLinks = [
  {
    title: "Igreja Online",
    href: "/igreja-online",
    submenu: [
      {
        title: "Conheça",
        href: "/igreja-online"
      },
      {
        title: "Saiba Mais",
        href: "/igreja-online/saiba-mais"
      },
      {
        title: "Acompanhamento",
        href: "/igreja-online/atendimento-pastoral"
      },
      {
        title: "Orações",
        href: "/igreja-online/pedidos-de-oracao"
      },
      {
        title: "PGs",
        href: "/igreja-online/pequenos-grupos"
      },
      {
        title: "Cultos ao vivo",
        href: "/igreja-online/cultos-ao-vivo"
      }
    ]
  },
  {
    title: "Igrejas",
    href: "/igrejas",
    submenu: [
      {
        title: "Nossas Igrejas",
        href: "/igrejas"
      },
      {
        title: "Aguás Claras - DF",
        href: "/igrejas/aguas-claras-qs-01"
      },
      {
        title: "Águas Lindas - GO",
        href: "/igrejas/aguas-lindas-qd-25"
      },
      {
        title: "Ceilândia Sul - DF",
        href: "/igrejas/ceilandia-sul-qnm-05"
      },
      {
        title: "Samambaia Sul - DF",
        href: "/igrejas/samambaia-sul-qs-116"
      },
      {
        title: "Jardins Mangueiral - DF",
        href: "/igrejas/jardins-mangueiral-pc-atividades-5"
      },
      {
        title: "Caldas Novas - GO",
        href: "/igrejas/caldas-novas-go-getulio-vargas"
      },
      {
        title: "Bissau - Guiné-Bissau",
        href: "/igrejas/guine-bissau-bissau-cutum-3"
      }
    ]
  },
  // {
  //   title: "Projetos",
  //   href: "/projetos",
  //   submenu: [
  //     {
  //       title: "Projetos",
  //       href: "/projetos",
  //     },
  //     {
  //       title: "Baio Negado",
  //       href: "/projetos/baio-negado",
  //     },
  //   ],
  // },
  {
    title: "Academy",
    href: "/oceano-academy",
    submenu: [
      {
        title: "Conheça",
        href: "/oceano-academy"
      },
      {
        title: "Escolas",
        href: "/oceano-academy/escolas"
      },
      {
        title: "Escola de Membros",
        href: "/oceano-academy/escolas/escola-de-membros"
      },
      {
        title: "Escola Bíblica",
        href: "/oceano-academy/escolas/escola-biblica"
      }
    ]
  },
  {
    title: "Quem Somos",
    href: "/sobre",
    submenu: [
      {
        title: "Nossa Razão",
        href: "/sobre/nossa-razao"
      },
      {
        title: "Nossa História",
        href: "/sobre/nossa-historia"
      }
    ]
  },
  {
    title: "Nossos Pastores",
    href: "/nossos-pastores"
  },
  {
    title: "Projetos",
    href: "/projeto-expansao"
  },
  {
    title: "Doações",
    href: "/doacoes"
  }
];
const NavMenu = (props) => {
  const location = useLocation();
  const isCurrentPage = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };
  const activeClass = "underline underline-offset-6 decoration-1.5";
  return /* @__PURE__ */ jsx(NavigationMenu, { ...props, viewport: false, className: "z-50 hidden md:flex", children: /* @__PURE__ */ jsx(
    NavigationMenuList,
    {
      className: "gap-0 space-x-0 text-sm",
      onMouseEnter: (e) => e.preventDefault(),
      children: menuLinks.map(({ title, href, submenu, external }) => /* @__PURE__ */ jsx(NavigationMenuItem, { children: submenu ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          NavigationMenuTrigger,
          {
            className: cn(
              "text-[15px] font-normal h-10 px-4 py-2 mr-1 cursor-pointer",
              isCurrentPage(href) ? activeClass : ""
            ),
            onPointerEnter: (e) => e.preventDefault(),
            onPointerMove: (e) => e.preventDefault(),
            onPointerLeave: (e) => e.preventDefault(),
            children: title
          }
        ),
        /* @__PURE__ */ jsx(
          NavigationMenuContent,
          {
            className: "z-50",
            onPointerEnter: (e) => e.preventDefault(),
            onPointerLeave: (e) => e.preventDefault(),
            children: /* @__PURE__ */ jsx("ul", { className: "grid w-[190px] gap-1 p-0", children: submenu.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: item.external ? /* @__PURE__ */ jsx(
              "a",
              {
                href: item.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                children: /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-none", children: item.title })
              }
            ) : /* @__PURE__ */ jsx(
              Link,
              {
                to: item.href,
                className: "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                children: /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-none", children: item.title })
              }
            ) }) }, item.title)) })
          }
        )
      ] }) : /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          className: "text-[15px] font-normal mr-1",
          asChild: true,
          children: /* @__PURE__ */ jsx(
            Link,
            {
              to: href,
              className: isCurrentPage(href) ? activeClass : "",
              target: external ? "_blank" : void 0,
              children: title
            }
          )
        }
      ) }, title))
    }
  ) });
};
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(
    Link,
    {
      ref,
      className: cn(
        "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(props.icon, { className: "mb-4 h-6 w-6" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold leading-none", children: title }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children })
      ]
    }
  ) }) });
});
ListItem.displayName = "ListItem";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}
const NavigationSheet = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isCurrentPage = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };
  const activeClass = "underline underline-offset-6 decoration-1.5";
  const handleLinkClick = useCallback(() => {
    setOpen(false);
  }, []);
  return /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "icon",
        onTouchStart: (e) => e.preventDefault(),
        onClick: (e) => {
          e.preventDefault();
          setOpen(true);
        },
        children: /* @__PURE__ */ jsx(Menu, {})
      }
    ) }),
    /* @__PURE__ */ jsxs(SheetContent, { className: "p-5", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block", children: /* @__PURE__ */ jsx(Link, { to: "/", onClick: handleLinkClick, className: "inline-flex", children: /* @__PURE__ */ jsx("img", { src: "/logo/logo-minimal.png", alt: "Logo", className: "w-8 h-8" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 text-base flex flex-col gap-4", children: menuLinks.map(
        ({ title, href, submenu }) => submenu ? /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: /* @__PURE__ */ jsxs(AccordionItem, { value: title, className: "border-none", children: [
          /* @__PURE__ */ jsx(
            AccordionTrigger,
            {
              className: `py-0 hover:no-underline ${isCurrentPage(href) ? activeClass : ""}`,
              children: title
            }
          ),
          /* @__PURE__ */ jsx(AccordionContent, { className: "pt-3 pb-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3 pl-4", children: submenu.map(
            (item) => item.external ? /* @__PURE__ */ jsx(
              "a",
              {
                href: item.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                onClick: handleLinkClick,
                children: item.title
              },
              item.title
            ) : /* @__PURE__ */ jsx(
              Link,
              {
                to: item.href,
                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                onClick: handleLinkClick,
                children: item.title
              },
              item.title
            )
          ) }) })
        ] }) }, title) : /* @__PURE__ */ jsx(
          Link,
          {
            to: href,
            className: isCurrentPage(href) ? activeClass : "",
            onClick: handleLinkClick,
            children: title
          },
          href
        )
      ) })
    ] })
  ] });
};
const Navbar = () => {
  return /* @__PURE__ */ jsx("div", { className: "bg-muted", children: /* @__PURE__ */ jsx("nav", { className: "h-16 bg-background border-b", children: /* @__PURE__ */ jsxs("div", { className: "h-full flex items-center justify-between max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/logo/logo-minimal.png",
          alt: "Logo",
          className: "w-8 h-8"
        }
      ) }),
      /* @__PURE__ */ jsx(NavMenu, { className: "hidden md:block" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx(NavigationSheet, {}) }) })
  ] }) }) });
};
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const Footer = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col border-t bg-gray-50", children: /* @__PURE__ */ jsx("footer", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-lg mx-auto p-6 sm:p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/logo/odg-black-logo.svg",
          alt: "Igreja Oceano da Graça",
          className: "w-32 mx-auto md:mx-0"
        }
      ),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 flex flex-col sm:flex-row sm:items-center gap-4", children: menuLinks.map(({ title, href }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        Link,
        {
          to: href,
          className: "text-muted-foreground hover:text-foreground",
          children: title
        }
      ) }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", target: "_blank", children: "Igreja Oceano da Graça" }),
        " ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " © Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Link, { to: "https://www.oceanodagraca.com/", target: "_blank", children: /* @__PURE__ */ jsx(Globe, { className: "h-4.5 w-4.5" }) }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "https://www.youtube.com/c/OceanodaGra%C3%A7a",
            target: "_blank",
            children: /* @__PURE__ */ jsx(Youtube, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "https://www.instagram.com/oceanodagraca/",
            target: "_blank",
            children: /* @__PURE__ */ jsx(Instagram, { className: "h-5 w-5" })
          }
        )
      ] })
    ] })
  ] }) }) });
};
const main = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col min-h-screen",
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx("main", {
      className: "w-full max-w-screen-lg sm:mx-auto flex-1",
      children: /* @__PURE__ */ jsx(Outlet, {})
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: main
}, Symbol.toStringTag, { value: "Module" }));
function Container({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: cn(
        "px-6 py-5 sm:px-8 sm:py-5 flex flex-col gap-8 lg:gap-10",
        className
      ),
      children
    }
  );
}
function HeroContainer({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: cn(
        "px-6 py-6 sm:px-8 sm:py-8 flex flex-col gap-8 lg:gap-10",
        className
      ),
      children
    }
  );
}
function H1({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "h1",
    {
      className: cn(
        "scroll-m-20 text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance",
        className
      ),
      children
    }
  );
}
function H2({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "h2",
    {
      className: cn(
        "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 leading-7",
        className
      ),
      children
    }
  );
}
function H3({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "h3",
    {
      className: cn(
        "scroll-m-20 text-xl md:text-xl lg:text-2xl font-medium tracking-tight",
        className
      ),
      children
    }
  );
}
function P({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: cn(
        "leading-6 mt-4 text-muted-foreground text-left",
        className
      ),
      children
    }
  );
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 pt-6", className),
      ...props
    }
  );
}
function CTABox({
  title,
  description,
  buttonLink,
  buttonText,
  openInNewTab,
  disabled = false,
  showArrow = true
}) {
  return /* @__PURE__ */ jsx(Container, { className: "bg-white rounded-lg border", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xl sm:text-2xl font-semibold", children: title }),
      /* @__PURE__ */ jsx(P, { className: "mt-2 sm:mt-1 text-left", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:w-auto sm:flex-shrink-0", children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        size: "lg",
        className: "h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-80 md:px-8",
        onClick: () => {
          if (openInNewTab) {
            window.open(buttonLink, "_blank");
          } else {
            window.location.href = buttonLink;
          }
        },
        disabled,
        children: [
          /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: buttonText } }),
          disabled ? null : showArrow ? /* @__PURE__ */ jsx(ArrowRight, {}) : null
        ]
      }
    ) })
  ] }) });
}
function CardWithLink({
  title,
  description,
  image,
  link,
  linkText,
  openInNewTab
}) {
  return /* @__PURE__ */ jsx(Card, { className: "max-w-md shadow-none hover:shadow-xs transition-all duration-300 gap-1 rounded-lg flex flex-col", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: link,
      target: openInNewTab ? "_blank" : void 0,
      rel: openInNewTab ? "noopener noreferrer" : void 0,
      className: "contents space-y-1",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "pt-0 pb-0 flex-row items-center gap-3 text-xl sm:text-2xl font-semibold", children: title }),
          /* @__PURE__ */ jsx(CardContent, { className: "", children: /* @__PURE__ */ jsx(P, { className: "mt-0 sm:mt-2 text-left", children: description }) })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { className: "pt-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 font-medium text-black hover:text-black/70 hover:cursor-pointer text-sm", children: [
          linkText,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
        ] }) }) })
      ]
    }
  ) });
}
const features$1 = [
  {
    title: "Nossos templos",
    description: "Encontre um templo da Igreja Oceano da Graça perto de você.",
    link: "/igrejas",
    linkText: "Saiba mais"
  },
  {
    title: "Oceano Academy",
    description: "Cresça na Graça e no conhecimento do Nosso Senhor Jesus Cristo.",
    link: "/oceano-academy",
    linkText: "Saiba mais"
  },
  {
    title: "Quem Somos",
    description: "Conheça os valores e a história da Igreja Oceano da Graça.",
    link: "/sobre",
    linkText: "Saiba mais"
  },
  {
    title: "Doações",
    description: "Contribua com a obra de Deus, com a Igreja Oceano da Graça.",
    link: "/doacoes",
    linkText: "Saiba mais"
  }
];
function Welcome() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Bem-vindo à Igreja Oceano da Graça!" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Aqui você encontra um espaço preparado para viver a fé. Venha ser família com a gente!" })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-2 sm:mt-6", children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "h-full w-full rounded-lg",
        src: "https://www.youtube.com/embed/pMCvzTl_yz4",
        title: "YouTube video player",
        frameBorder: 0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    ) }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-2 sm:mt-4", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H2, { children: "A Igreja Oceano da Graça" }),
      /* @__PURE__ */ jsx(P, { className: "text-left", children: "Nossa razão de existir é: amar a Deus, nos amarmos e amar pessoas, assim como Jesus fez com amor e graça. Nesse sentido, as bases da nossa cultura se fundamentam no relacionamento com Deus e com as pessoas." })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(
        CTABox,
        {
          title: "Igreja Online",
          description: "Acesse a Igreja Oceano da Graça de qualquer lugar.",
          buttonLink: "/igreja-online",
          buttonText: "Saiba mais"
        }
      ),
      /* @__PURE__ */ jsx(
        CTABox,
        {
          title: "Projetos de Expansão",
          description: "Contribua com este sonho.",
          buttonLink: "/projeto-expansao",
          buttonText: "Saiba mais",
          openInNewTab: false
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs(Container, { className: "mt-0 sm:mt-0 mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsx(H2, { children: "Acesso rápido" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8", children: features$1.map((feature) => /* @__PURE__ */ jsx(
        CardWithLink,
        {
          ...feature,
          openInNewTab: false
        },
        feature.title
      )) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border px-6 py-6 rounded-lg", children: [
      /* @__PURE__ */ jsx(H2, { className: "", children: "Seja parte da família Oceano" }),
      /* @__PURE__ */ jsx(P, { className: "text-left", children: "Queremos que você se sinta em casa. Faça-nos uma visita!" }),
      /* @__PURE__ */ jsx(P, { className: "text-left mt-2 sm:mt-1", children: /* @__PURE__ */ jsx("span", { className: "font-medium italic", children: "Vem ser família com a gente!" }) })
    ] }) })
  ] });
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Quem Somos" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Conheça a Igreja Oceano da Graça." })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-0 sm:mt-0 mb-10 sm:mb-16", children: /* @__PURE__ */ jsxs("div", { className: "pt-0 sm:pt-0 mt-10 sm:mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8", children: [
      /* @__PURE__ */ jsx(
        CardWithLink,
        {
          title: "Nossa Razão",
          description: "Conectar pessoas a Jesus com amor e graça.",
          link: "/sobre/nossa-razao",
          linkText: "Saiba mais",
          openInNewTab: false
        }
      ),
      /* @__PURE__ */ jsx(
        CardWithLink,
        {
          title: "Nossa História",
          description: "Como tudo começou.",
          link: "/sobre/nossa-historia",
          linkText: "Saiba mais",
          openInNewTab: false
        }
      ),
      /* @__PURE__ */ jsx(
        CardWithLink,
        {
          title: "Nossos Pastores",
          description: "Amor e cuidado com a Igreja Oceano da Graça.",
          link: "/nossos-pastores",
          linkText: "Saiba mais",
          openInNewTab: false
        }
      )
    ] }) })
  ] });
}
const index$3 = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(About, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$3
}, Symbol.toStringTag, { value: "Module" }));
function UL({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      className: cn(
        "list-disc list-outside leading-6 pl-3.5 sm:pl-3.5 mt-4 text-left sm:text-left text-muted-foreground space-y-3 sm:space-y-1",
        className
      ),
      children
    }
  );
}
function OurReason() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Nossa Razão" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Conectando pessoas a Jesus com amor e graça." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-7 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Nossas Âncoras" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Nossa razão de existir pode ser compreendida a partir de três perspectivas: amar a Deus, nos amarmos e amar pessoas (Mt 22.37-39), assim como Jesus fez com amor (Jo 13.34; 15.12; Mt 22.39) e graça (Jo 1.14; Ef 2.8,9; 4.7, Tt 2.11). Nesse sentido, as bases da nossa cultura se fundamentam no relacionamento com Deus e com as pessoas. Por isso, biblicamente, identificamos as âncoras que determinam a nossa forma de ser igreja (Mt 22.37-39; Mt 28.16-20): adoração, discipulado, comunhão, serviço e evangelismo." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Para nos conectarmos a Jesus, temos a adoração e o discipulado. A adoração versa sobre quem somos em Deus e indica o nosso relacionamento diário com Deus como estilo de vida individual e coletivamente. O discipulado trata de quem devemos ser em Deus e compreende o desenvolvimento da nossa maturidade espiritual, social, emocional, vocacional e ministerial." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Para nos conectarmos a pessoas por Jesus, temos a comunhão, o serviço e o evangelismo. A comunhão diz respeito à nossa forma prática de ser família, dentro e fora da igreja local, a partir da recepção e integração de pessoas com amor e graça. O serviço é a resposta direta ao amor de Deus por nós, identificando e satisfazendo as reais necessidades das comunidades interna e externa com generosidade. Evangelismo e missões não é uma opção, é uma expressão viva do amor e da graça por pessoas que ainda não se conectaram com Jesus." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "A partir das nossas âncoras, nossos principais valores podem ser destacados, a ponto de definir traços da cultura Oceano de ser:" })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { className: "", children: "Adoração" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Quanto à adoração, somos uma igreja essencialmente bíblica e submissa ao Espírito Santo; quanto à forma de cultuar somos contemporâneos e contextualizados; temos o relacionamento íntimo e disciplinado com Deus como estilo de vida; consideramos a excelência, a gratidão e a honra como manifestações práticas do adorar." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { className: "", children: "Comunhão" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Quanto à comunhão, somos uma família acolhedora cujos relacionamentos são saudáveis e encorajadores, com amor e graça; uma igreja em que pessoas imperfeitas desejam fazer parte, sem legalismos ou excessos de religiosidade; uma comunidade que recebe, integra e consolida pessoas de toda sorte, sem acepção." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { className: "", children: "Serviço" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Quanto ao serviço, somos uma igreja em que cada membro faz a sua parte servindo voluntariamente e contribuindo generosamente como resposta direta ao amor de Jesus." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { className: "", children: "Discipulado" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Quanto ao discipulado, somos uma igreja-família que vive um processo de amadurecimento na fé por meio da educação cristã, de programas de formação e capacitação continuada, da prática ministerial, visando o aperfeiçoamento do caráter à semelhança de Cristo." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { className: "", children: "Evangelismo" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Quanto ao evangelismo, queremos ser uma igreja cuja cultura do Reino de Deus seja determinante para a relevância e transformação da realidade de vidas e da comunidade local; cujo testemunho pessoal e coletivo seja a sua principal ferramenta para conectar pessoas a Jesus." })
      ] }) }),
      /* @__PURE__ */ jsx(Separator, { className: "my-10 sm:my-16" }),
      /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { className: "", children: "Nossas Convicções" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Cremos em Deus Pai, Filho e Espírito Santo e no Seu governo sobre tudo;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos que Jesus é o nosso único e suficiente salvador;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos na salvação por meio da fé como fruto do amor e da graça de Deus;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos que a Bíblia é a palavra de Deus e a nossa regra de fé e prática;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos no poder da transformação de qualquer pessoa através da Bíblia;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos no arrebatamento da Igreja e na volta pessoal de Jesus;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos no poder e nos dons do Espírito Santo nas suas mais variadas maneiras;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos na prática da espiritualidade sem legalismos;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos na família tradicional como projeto de Deus para a sociedade;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos nos Pequenos Grupos como forma de ser igreja-família;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos no voluntariado como expressão prática do amor a Deus e ao próximo;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos no discipulado como processo de maturidade cristã e ministerial;" }),
          /* @__PURE__ */ jsx("li", { children: "Cremos na cultura do Reino de Deus como princípio de transformação social;" })
        ] })
      ] }) })
    ] })
  ] });
}
const ourReason = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(OurReason, {});
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ourReason
}, Symbol.toStringTag, { value: "Module" }));
function OurHistory() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Nossa História" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Como tudo começou." })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-2 sm:mt-6", children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "h-full w-full rounded-lg",
        src: "https://www.youtube.com/embed/qm9DHriSDF8",
        title: "YouTube video player",
        frameBorder: 0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: " space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "mt-2 sm:mt-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Pr. Sinval de Souza: Longos anos de dor e aflições" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Desde 1997, Pr. Sinval de Souza tem exercido seu chamado vocacional à frente de diversas igrejas no Distrito Federal. Em 2000, profeticamente, Deus lhe disse: “Por esses dias, o tirarei do seu trabalho, colocarei em uma cadeira de rodas, o aposentarei e o curarei, pois te quero cuidando do meu rebanho”. No ano de 2001, desafiado por Deus, fundou o Ministério IDEPS (Assembleia de Deus do Setor P Sul) com um grupo de amigos, inicialmente, focado no Setor P Sul, localizado em Ceilândia, cidade satélite do Distrito Federal. Em junho de 2002, Pr. Sinval de Souza foi diagnosticado com câncer no intestino, sujeitando-se a intenso sofrimento e desnutrição, chegando a ser desenganado pelos médicos durante o tratamento no Instituto do Câncer do Estado de São Paulo. Em janeiro de 2003, submeteu-se à cirurgia que o conduziu à cura do câncer e à descoberta da fatídica doença de Crohn." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Cura milagrosa" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Em julho de 2004, a aposentadoria se concretizou tal como a profecia. Após quatro longos anos de dor e aflições, em junho de 2006, a cura foi milagrosamente profetizada na presença de centena de testemunhas oculares, durante as celebrações do quinto aniversário da IDEPS, sendo confirmada pela medicina em agosto do mesmo ano. A partir de 2008, ministerialmente, viveu expressivo processo de expansão com a abertura de novas igrejas filiadas. Em 2012, a igreja em Águas Claras foi inaugurada, experimentando rápido e sólido crescimento. Em dezembro de 2019, a igreja IDEPS, situada no setor P Sul foi emancipada." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Identidade ministerial e Expansão" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Nesse contexto, em junho de 2020, debaixo do claro direcionamento de Deus, nossa identidade ministerial foi ressignificada para Igreja Oceano da Graça, cuja razão de existir tem sido marcada por “Conectar pessoas a Jesus com amor e graça”. Desde então, temos vivido o cumprimento de promessas divinas sobre nosso ministério, ao longo das últimas décadas. Deus tem nos levado a uma expansão ministerial dentro e fora do Brasil. Hoje, no Distrito Federal, estamos em Águas Claras, Ceilândia Sul, Jardins Mangueiral e Samambaia Sul. Em Goiás, estamos em Águas Lindas e Caldas Novas. Na África Ocidental, já estamos em Bissau, capital de Guiné Bissau. Outros estados e países já estão no coração de Deus para servimos com amor e graça. Em breve, chegaremos à Europa e a Espanha será a porta de entrada." })
      ] }) })
    ] })
  ] });
}
const ourHistory = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(OurHistory, {});
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ourHistory
}, Symbol.toStringTag, { value: "Module" }));
function InfoCardWithImage({
  title,
  description,
  image
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "max-w-md shadow-none gap-1 rounded-lg flex flex-col pt-0 border-none", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-0 w-full aspect-video", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: title,
        className: "w-full h-full object-cover rounded-lg"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "px-0 pb-0 pt-8 flex-row items-center text-xl sm:text-2xl font-semibold", children: title }),
      /* @__PURE__ */ jsx(CardContent, { className: "px-0 text-sm sm:text-[15px]", children: /* @__PURE__ */ jsx(P, { className: "mt-0", children: description }) })
    ] })
  ] });
}
function OurPastors() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Nossos Pastores" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Direcionados por uma visão dada por Deus estão seguindo um caminho de amor e cuidado com a Igreja Oceano da Graça." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-8 space-y-0 mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8", children: [
      /* @__PURE__ */ jsx(
        InfoCardWithImage,
        {
          title: "Pr. Sinval de Souza",
          description: "Pastor, teólogo, advogado, administrador de empresas e ex-gerente da Caixa Econômica Federal; pastoreia desde 1998, com uma trajetória marcada pelos milagres da cura do câncer de intestino, da doença de Crohn e, também, pela condução e expansão de igrejas relevantes.",
          image: "/images/pastors/pr-sinval-01.jpg"
        }
      ),
      /* @__PURE__ */ jsx(
        InfoCardWithImage,
        {
          title: "Pra. Rosália Santt",
          description: "Pastora, cantora, compositora, teóloga, membro da Ordem dos Músicos do Brasil; gravou vários álbuns com canções que abençoaram gerações; pastoreia mulheres desde 2002, sendo idealizadora da Conferência Primavera Mulher que, desde 2012.",
          image: "/images/pastors/pra-rosalia-01.jpg"
        }
      )
    ] }) }) })
  ] });
}
const ourPastors = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(OurPastors, {});
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ourPastors
}, Symbol.toStringTag, { value: "Module" }));
const churches = [
  {
    id: "aguas-claras-qs-01",
    name: "Águas Claras - DF",
    address: "QS 01, Rua 210, Lote 26, Águas Claras - DF",
    coverImage: "aguas-claras-qs-01.png",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanodagraca/",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 10:00",
          "Culto da Família - 18:30"
        ]
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"]
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: [
          "(1a e 3a Sexta do Mês) - Juventude Deeper - 20:30"
        ]
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: ["Café com Deus - 09:00"]
      }
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento"
    ],
    pastors: [
      { name: "Pr. Sinval de Souza", image: "/pastors/sinval-de-souza.jpg" },
      { name: "Pr. Rosália Santt", image: "/pastors/rosalia-santt.jpg" }
    ],
    googleMapsUrl: "https://goo.gl/maps/WEmFk5SjRdZFMyadA"
  },
  {
    id: "aguas-lindas-qd-25",
    name: "Águas Lindas - GO",
    address: "QD 25, Lote 1-B3, Jardins Brasília, Águas Lindas - GO",
    coverImage: "aguas-lindas-qd-25.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanoaguaslindas",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 10:00",
          "Culto da Família - 19:00"
        ]
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"]
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: [
          "(1a e 3a Sexta do Mês) - Juventude Deeper - 20:30"
        ]
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: ["Café com Deus - 09:00"]
      }
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento"
    ],
    pastors: [
      { name: "Pr. Anderson Luiz", image: "/pastors/anderson-luiz-01.jpg" },
      {
        name: "Pra. Kellen Damaris",
        image: "/pastors/kellen-damaris-01.jpg"
      }
    ],
    googleMapsUrl: "https://goo.gl/maps/XPHLrjZGMUQa1yz79"
  },
  {
    id: "ceilandia-sul-qnm-05",
    name: "Ceilândia Sul - DF",
    address: "QNM 05 Conj. P Lote 16, Ceilândia Sul - DF",
    coverImage: "ceilandia-sul-qnm-05.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanoceilandiasul",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 10:00",
          "Culto da Família - 19:00"
        ]
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"]
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: [
          "(1a e 3a Sexta do Mês) - Juventude Deeper - 20:30"
        ]
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: ["Café com Deus - 09:00"]
      }
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento"
    ],
    pastors: [
      { name: "Pr. Leverson Eustáquio", image: "/pastors/leverson-01.jpg" },
      {
        name: "Pra. Maria Vania",
        image: "/pastors/maria-vania-01.jpg"
      }
    ],
    googleMapsUrl: "https://goo.gl/maps/sQHx2AbFFDx6YBBK8"
  },
  {
    id: "jardins-mangueiral-pc-atividades-5",
    name: "Jardins Mangueiral - DF",
    address: "Pç de Atividades 5 Lote 01, Jardins Mangueiral - DF",
    coverImage: "jardins-mangueiral-pc-atividades-5.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanojardinsmangueiral",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 10:00",
          "Culto da Família - 19:00"
        ]
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"]
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: [
          "(1a e 3a Sexta do Mês) - Juventude Deeper - 20:30"
        ]
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: ["Café com Deus - 09:00"]
      }
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento"
    ],
    pastors: [
      {
        name: "Pr. Josué de Oliveira",
        image: "/pastors/josue-oliveira-01.jpg"
      }
    ],
    googleMapsUrl: "https://goo.gl/maps/JXGDqENkzr537z9U9"
  },
  {
    id: "samambaia-sul-qs-116",
    name: "Samambaia Sul - DF",
    address: "QS 116 Conj. 02 Lote 07 Samambaia Sul - DF",
    coverImage: "samambaia-sul-qs-116.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanosamambaiasul",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 10:00",
          "Culto da Família - 19:00"
        ]
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"]
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: [
          "(1a e 3a Sexta do Mês) - Juventude Deeper - 20:30"
        ]
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: ["Café com Deus - 09:00"]
      }
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento"
    ],
    pastors: [
      {
        name: "Pr. Marcelo Medeiros",
        image: "/pastors/marcelo-medeiros-01.jpg"
      },
      {
        name: "Pra. Valéria Soares",
        image: "/pastors/valeria-soares-01.jpg"
      }
    ],
    googleMapsUrl: "https://goo.gl/maps/N5cfXJe5C28atcKQ8"
  },
  {
    id: "caldas-novas-go-getulio-vargas",
    name: "Caldas Novas - GO",
    address: "Av. Getúlio Vargas, Qd 01 - Lote 04, Caldas Novas - GO",
    coverImage: "caldas-novas-go-getulio-vargas.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanocaldasnovas",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: [
          "Escola Bíblica - 09:00",
          "Culto da Família - 10:00",
          "Culto da Família - 19:00"
        ]
      },
      {
        weekday: "Quarta-feira",
        worshipNameAndTime: ["Quarta da Graça - 20:00"]
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: [
          "(1a e 3a Sexta do Mês) - Juventude Deeper - 20:30"
        ]
      },
      {
        weekday: "Sábado",
        worshipNameAndTime: ["Café com Deus - 09:00"]
      }
    ],
    amenities: [
      "Acessibilidade",
      "Banheiros",
      "Berçario",
      "Oceano KIDS",
      "Estacionamento"
    ],
    pastors: [
      {
        name: "Pr. Mauruzan Rodrigues",
        image: "/pastors/mauruzan-rodrigues-01.jpg"
      },
      {
        name: "Pra. Mirian Rodrigues",
        image: "/pastors/mirian-rodrigues-01.jpg"
      }
    ],
    googleMapsUrl: "https://maps.app.goo.gl/vpEwnC758LRCkqMK7"
  },
  {
    id: "guine-bissau-bissau-cutum-3",
    name: "Bissau - Guiné-Bissau",
    address: "Cuntum 3 Bissau - Guiné-Bissau",
    coverImage: "guine-bissau-bissau-cutum-3.jpg",
    facebook: "https://www.facebook.com/igrejaoceanodagraca",
    instagram: "https://www.instagram.com/oceanoguinebissau",
    youtube: "https://www.youtube.com/OceanodaGraca",
    worshipDays: [
      {
        weekday: "Domingo",
        worshipNameAndTime: ["Culto da Família - 09:30"]
      },
      {
        weekday: "Terça-feira",
        worshipNameAndTime: ["Culto de Oração - 19:30"]
      },
      {
        weekday: "Quinta-feira",
        worshipNameAndTime: ["Culto de Oração - 17:00"]
      },
      {
        weekday: "Sexta-feira",
        worshipNameAndTime: ["Escola Bíblica - 19:30"]
      }
    ],
    amenities: ["Banheiros"],
    pastors: [
      {
        name: "Pr. Carlos João",
        image: "/pastors/carlos-joao-01.jpg"
      },
      {
        name: "Ms. Elza da Paixão",
        image: "/pastors/elza-da-paixao-01.jpg"
      }
    ],
    googleMapsUrl: "https://goo.gl/maps/uh5SVhmuuZQS8iDm9"
  }
];
const churchById = (id) => {
  return churches.find((church) => church.id === id);
};
function Churches() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Igrejas" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Conheça as igrejas da Igreja Oceano da Graça." })
    ] }) }),
    churches.map((church, index2) => {
      const isFirst = index2 === 0;
      const isLast = index2 === churches.length - 1;
      let containerClassName = "mb-0 sm:mb-0 pt-0 sm:pt-0";
      if (isFirst) {
        containerClassName = "pt-0 sm:pt-0 mt-10 sm:mt-14";
      } else if (isLast) {
        containerClassName = "mb-10 sm:mb-16 pt-0 sm:pt-0";
      }
      return /* @__PURE__ */ jsx(Container, { className: containerClassName, children: /* @__PURE__ */ jsx(
        CTABox,
        {
          title: church.name,
          description: church.address,
          buttonLink: `/igrejas/${church.id}`,
          buttonText: "Saiba mais",
          openInNewTab: false
        }
      ) }, church.id);
    })
  ] });
}
const index$2 = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(Churches, {});
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
function MapButton(props) {
  const { mapUrl, buttonText, openInNewTab, disabled = false } = props;
  return /* @__PURE__ */ jsx(Container, { className: "w-full sm:w-64", children: /* @__PURE__ */ jsxs(
    Button,
    {
      variant: "outline",
      size: "lg",
      className: "h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-full",
      disabled,
      onClick: () => {
        if (openInNewTab) {
          window.open(mapUrl, "_blank");
        } else {
          window.location.href = mapUrl;
        }
      },
      children: [
        /* @__PURE__ */ jsx(MapPin, { className: "" }),
        /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: buttonText } })
      ]
    }
  ) });
}
function Church(props) {
  const { id } = props;
  const church = churchById(id);
  if (!church) {
    return /* @__PURE__ */ jsx("div", { children: "Igreja não encontrada" });
  }
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-0 sm:gap-8 items-start sm:items-center justify-between", children: [
      /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-start text-left", children: [
        /* @__PURE__ */ jsx(H1, { className: "text-left", children: church.name }),
        /* @__PURE__ */ jsx(P, { className: "mt-0", children: church.address })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full sm:w-auto sm:flex sm:items-center", children: /* @__PURE__ */ jsx(
        MapButton,
        {
          mapUrl: church.googleMapsUrl,
          buttonText: "Ver no Google Maps",
          openInNewTab: true
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-10" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0 -mt-5", children: church.worshipDays.map((day, index2) => /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H3, { className: "", children: day.weekday }),
      /* @__PURE__ */ jsx(UL, { className: "", children: day.worshipNameAndTime.map((time, timeIndex) => /* @__PURE__ */ jsx("li", { children: time }, timeIndex)) })
    ] }) }, index2)) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-10" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-0", children: church.amenities.length > 0 && /* @__PURE__ */ jsx(Container, { className: "space-y-2", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(H3, { children: "Comodidades" }),
        /* @__PURE__ */ jsx(UL, { className: "", children: church.amenities.map((amenity, index2) => /* @__PURE__ */ jsx("li", { children: amenity }, index2)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6 ", children: /* @__PURE__ */ jsx(Container, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(H3, { children: "Redes Sociais" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          church.facebook && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: church.facebook,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2",
              children: [
                "Facebook",
                /* @__PURE__ */ jsx(SquareArrowOutUpRight, { className: "size-3.5" })
              ]
            }
          ) }),
          church.instagram && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: church.instagram,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2",
              children: [
                "Instagram",
                /* @__PURE__ */ jsx(SquareArrowOutUpRight, { className: "size-3.5" })
              ]
            }
          ) }),
          church.youtube && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: church.youtube,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2",
              children: [
                "YouTube",
                /* @__PURE__ */ jsx(SquareArrowOutUpRight, { className: "size-3.5" })
              ]
            }
          ) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2 mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(Container, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(H3, { children: "Pastores" }),
        /* @__PURE__ */ jsx(UL, { className: "", children: church.pastors.map((pastor, index2) => /* @__PURE__ */ jsx("li", { children: pastor.name }, index2)) })
      ] }) }) })
    ] })
  ] });
}
const $id = UNSAFE_withComponentProps(function() {
  const {
    id
  } = useParams();
  return /* @__PURE__ */ jsx(Church, {
    id: id ?? ""
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $id
}, Symbol.toStringTag, { value: "Module" }));
function PixCTABox() {
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const pixKey = "missoes@oceanodagraca.com";
  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setShowCheckIcon(true);
    setTimeout(() => {
      setShowCheckIcon(false);
    }, 5e3);
  };
  return /* @__PURE__ */ jsx(Container, { className: "bg-white rounded-lg border", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xl sm:text-2xl font-semibold", children: "Pix" }),
      /* @__PURE__ */ jsx(P, { className: "mt-2 sm:mt-1 text-left", children: pixKey })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:w-auto sm:flex-shrink-0", children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "lg",
        className: "h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-80",
        onClick: handleCopyPix,
        children: showCheckIcon ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, { className: "mr-2 h-4 w-4" }),
          "Chave Pix copiada"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Copy, { className: "mr-2 h-4 w-4" }),
          "Copiar chave Pix"
        ] })
      }
    ) })
  ] }) });
}
function Donations() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Doações" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Contribua com a obra de Deus." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-7 space-y-0", children: /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H3, { children: "Uma decisão de amor" }),
      /* @__PURE__ */ jsx(P, { className: "text-left", children: "Sua contribuição é um ato voluntário, uma decisão de amor pela obra de Deus e pelas vidas que podem ser abençoadas por meio de nossas ações e projetos." })
    ] }) }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mt-4 sm:mt-7 mb-10 sm:mb-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(PixCTABox, {}),
      /* @__PURE__ */ jsx(
        CTABox,
        {
          title: "Cartão de Crédito",
          description: "Doe com cartão de crédito.",
          buttonLink: "https://www.asaas.com/c/aonzyv7osvris4rg",
          buttonText: "Doar com Cartão de Crédito",
          openInNewTab: true,
          showArrow: false
        }
      )
    ] }) })
  ] });
}
const donations = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(Donations, {});
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: donations
}, Symbol.toStringTag, { value: "Module" }));
function Projects() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Projetos de Expansão" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Contribua com este sonho." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-7 space-y-0", children: /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H3, { children: "Uma decisão de amor" }),
      /* @__PURE__ */ jsx(P, { className: "", children: "Sua contribuição, independentemente do valor, é essencial para tornar realidade o sonho de levarmos a Palavra de Deus a todas as cidades do Distrito Federal e a Guiné-Bissau. Estamos construindo templos que serão lugares de adoração, comunhão e transformação de vidas — e você pode fazer parte disso!" }),
      /* @__PURE__ */ jsx(P, { className: "", children: "Escolha abaixo com qual valor mensal você deseja participar." }),
      /* @__PURE__ */ jsxs(P, { className: "", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "ATENÇÃO:" }),
        " O período de doações do projeto é de 12 meses, de forma recorrente."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs(Container, { className: "pt-0 sm:pt-0 mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsx(H3, { children: "Escolha o seu valor mensal" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx(PixCTABox, {}),
        /* @__PURE__ */ jsx(
          CTABox,
          {
            title: "Defina o Valor Mensal",
            description: "Doar com cartão de crédito.",
            buttonLink: "https://www.asaas.com/c/cjl9e93csdeddvo9",
            buttonText: "Doar Valor Mensal",
            openInNewTab: true,
            showArrow: false
          }
        ),
        /* @__PURE__ */ jsx(
          CTABox,
          {
            title: "R$ 100,00 / mês",
            description: "Doar com cartão de crédito.",
            buttonLink: "https://www.asaas.com/c/gqab5pzm0gf95ww7",
            buttonText: "Doar R$ 100,00/mês",
            openInNewTab: true,
            showArrow: false
          }
        ),
        /* @__PURE__ */ jsx(
          CTABox,
          {
            title: "R$ 200,00 / mês",
            description: "Doar com cartão de crédito.",
            buttonLink: "https://www.asaas.com/c/dn9gemexzl9pzodx",
            buttonText: "Doar R$ 200,00/mês",
            openInNewTab: true,
            showArrow: false
          }
        ),
        /* @__PURE__ */ jsx(
          CTABox,
          {
            title: "R$ 500,00 / mês",
            description: "Doar com cartão de crédito.",
            buttonLink: "https://www.asaas.com/c/8hy8dvg0xsoqi3p6",
            buttonText: "Doar R$ 500,00/mês",
            openInNewTab: true,
            showArrow: false
          }
        ),
        /* @__PURE__ */ jsx(
          CTABox,
          {
            title: "R$ 1.000,00 / mês",
            description: "Doar com cartão de crédito.",
            buttonLink: "https://www.asaas.com/c/7hth5mqsddfge63l",
            buttonText: "Doar R$ 1.000,00/mês",
            openInNewTab: true,
            showArrow: false
          }
        ),
        /* @__PURE__ */ jsx(
          CTABox,
          {
            title: "R$ 2.000,00 / mês",
            description: "Doar com cartão de crédito.",
            buttonLink: "https://www.asaas.com/c/476wpn2c13mbzkgq",
            buttonText: "Doar R$ 2.000,00/mês",
            openInNewTab: true,
            showArrow: false
          }
        ),
        /* @__PURE__ */ jsx(
          CTABox,
          {
            title: "R$ 5.000,00 / mês",
            description: "Doar com cartão de crédito.",
            buttonLink: "https://www.asaas.com/c/pt4dxj35y01ttdpx",
            buttonText: "Doar R$ 5.000,00/mês",
            openInNewTab: true,
            showArrow: false
          }
        )
      ] })
    ] })
  ] });
}
const projects = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(Projects, {});
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: projects
}, Symbol.toStringTag, { value: "Module" }));
function Academy() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Oceano Academy" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Cresça na Graça e no conhecimento do Nosso Senhor Jesus Cristo." })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-2 sm:mt-6", children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "h-full w-full rounded-lg",
        src: "https://www.youtube.com/embed/LEdj8ZOk8P8",
        title: "YouTube video player",
        frameBorder: 0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-7 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "A Oceano Academy" }),
        /* @__PURE__ */ jsxs(P, { className: "text-left", children: [
          "A ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Oceano Academy" }),
          " é o braço educacional da nossa igreja. Ela nasceu com o propósito de fortalecer as bases da fé por meio do conhecimento bíblico, alcançando cada fase da vida: crianças, adolescentes, jovens, homens, mulheres, casais e toda a família espiritual."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Nossa Missão" }),
        /* @__PURE__ */ jsxs(P, { className: "text-left", children: [
          "Acreditamos que a fé não deve ser vivida de forma superficial, mas enraizada na Palavra de Deus. Como disse C. H. Spurgeon:",
          " ",
          /* @__PURE__ */ jsx("span", { className: "italic", children: '"Um cristão sem conhecimento é como uma casa sem alicerces."' }),
          " ",
          "Por isso, nossa missão é oferecer ensino sólido, relevante e acessível, para que cada pessoa conheça mais profundamente as Escrituras e caminhe com segurança em sua jornada espiritual."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Uma jornada de descoberta" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Aqui, cada aula, cada encontro, cada curso é uma oportunidade de mergulhar mais fundo nesse oceano de graça e de verdade. Queremos que você descubra que a Bíblia é um livro vivo, sempre atual, capaz de moldar caráter, renovar a mente e sustentar famílias inteiras." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Crescimento integral" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Na Oceano Academy, você não apenas aprende: você cresce, compartilha, se conecta e é desafiado a viver a fé de maneira prática e vibrante. Estamos aqui para preparar uma igreja madura, apaixonada por Jesus e pronta para impactar o mundo." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Conheça nossas escolas",
        description: "Discipulado, Cursos de ensino e adoração e muito mais.",
        buttonLink: "/oceano-academy/escolas",
        buttonText: "Ver escolas",
        openInNewTab: false
      }
    ) })
  ] });
}
const index$1 = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(Academy, {});
});
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$1
}, Symbol.toStringTag, { value: "Module" }));
function Schools() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Escolas" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Nossas Escolas e Cursos da Oceano Academy." })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "pt-0 sm:pt-0 mt-10 sm:mt-14", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Escola de Membros",
        description: "Nosso discipulado institucional.",
        buttonLink: "/oceano-academy/escolas/escola-de-membros",
        buttonText: "Ver cursos",
        openInNewTab: false
      }
    ) }),
    /* @__PURE__ */ jsx(Container, { className: "mb-0 sm:mb-0 pt-0 sm:pt-0", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Escola Bíblica",
        description: "Cursos de ensino e adoração.",
        buttonLink: "/oceano-academy/escolas/escola-biblica",
        buttonText: "Ver cursos",
        openInNewTab: false
      }
    ) }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16 pt-0 sm:pt-0", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Escola de Líderes",
        description: "Cursos de capacitação para líderes.",
        buttonLink: "/oceano-academy/escolas/escola-de-lideres",
        buttonText: "Em breve",
        openInNewTab: false,
        disabled: true
      }
    ) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Já é cadastrado(a) em algum curso?",
        description: "Acesse agora a Oceano Academy.",
        buttonLink: "https://academy.oceanodagraca.com/",
        buttonText: "Acesse agora",
        openInNewTab: true
      }
    ) })
  ] });
}
const index = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(Schools, {});
});
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
function AllSchoolsBackButton() {
  return /* @__PURE__ */ jsx(Container, { className: "pb-2 sm:pb-2", children: /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: "/oceano-academy/escolas",
      className: "h-9 px-4 py-2 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70 inline-flex items-center gap-2 rounded-md text-sm",
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Ver todas as escolas"
      ]
    }
  ) }) });
}
function CourseCard({
  title,
  description,
  image,
  link,
  linkText,
  openInNewTab
}) {
  return /* @__PURE__ */ jsx(Card, { className: "max-w-md shadow-none hover:shadow-sm transition-all duration-300 gap-1 rounded-lg flex flex-col pt-0", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: link,
      target: openInNewTab ? "_blank" : void 0,
      rel: openInNewTab ? "noopener noreferrer" : void 0,
      className: "contents space-y-1",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mt-0 w-full aspect-video bg-muted rounded-lg", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: title,
            className: "w-full h-full object-cover rounded-t-lg"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "pb-0 pt-8 flex-row items-center text-xl sm:text-2xl font-semibold", children: title }),
          /* @__PURE__ */ jsx(CardContent, { className: "text-sm sm:text-[15px]", children: /* @__PURE__ */ jsx(P, { className: "mt-0 text-left leading-6 text-muted-foreground", children: description }) })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { className: "", children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "h-12 hover:cursor-pointer w-full sm:w-full bg-black hover:bg-black/80 text-white hover:text-white",
            onClick: () => {
              if (openInNewTab) {
                window.open(link, "_blank");
              } else {
                window.location.href = link;
              }
            },
            children: [
              linkText,
              /* @__PURE__ */ jsx(ArrowRight, {})
            ]
          }
        ) })
      ]
    }
  ) });
}
const CTADefaultLabel = "Inscreva-se –– <span class='italic'>é gratuito</span>";
const defaultMembersAreaLoginUrl = "https://academy.oceanodagraca.com";
const connectCourse = {
  title: "Connect",
  description: "O Connect é o primeiro passo para mergulhar no Oceano da Graça: um curso que apresenta nossa visão e valores.",
  image: "/images/courses/connect/yt-thumb-connect.png",
  link: "/oceano-academy/cursos/connect",
  linkText: "Saiba mais",
  ctaUrl: "https://academy.oceanodagraca.com/invites/bkA3Jx/join",
  lessons: [
    {
      title: "Nossos Pastores-Líderes",
      description: "História de vida, chamado e liderança pastoral.",
      thumbnail: "/images/courses/connect/lesson-thumbnails/lesson-1.png"
    },
    {
      title: "Nossa Identidade Ministerial",
      description: "Missão, visão, valores e âncoras bíblicas.",
      thumbnail: "/images/courses/connect/lesson-thumbnails/lesson-2.png"
    },
    {
      title: "Nossa Estrutura Ministerial",
      description: "Ministérios, programas e áreas de atuação.",
      thumbnail: "/images/courses/connect/lesson-thumbnails/lesson-3.png"
    },
    {
      title: "Nossos Programas",
      description: "<span class='italic'>Faça Parte</span> (integração e consolidação) e <span class='italic'>Faça a Sua Parte</span> (voluntariado e missão).",
      thumbnail: "/images/courses/connect/lesson-thumbnails/lesson-4.png"
    }
  ]
};
const voluntariadoCourse = {
  title: "Voluntariado",
  description: "Servir é um chamado: cada voluntário é parte da família, expressando o amor de Deus através do serviço.",
  image: "/images/courses/voluntariado/yt-thumb-voluntariado.png",
  link: "/oceano-academy/cursos/voluntariado",
  linkText: "Saiba mais",
  ctaUrl: "https://academy.oceanodagraca.com/invites/xDYzDQ/join",
  lessons: [
    {
      title: "Quem somos",
      description: "Identidade e missão da igreja.",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-1.png"
    },
    {
      title: "Nossos Ministérios",
      description: "Descrição de cada área (Louvor, Intercessão, Kids, Comunicação, Eventos, Diaconia, Artes, Missão, etc.).",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-2.jpg"
    },
    {
      title: "Marcas de um voluntário",
      description: "Amar a Deus, amar pessoas, comprometimento, flexibilidade, coração ensinável, excelência, proatividade e bom testemunho.",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-3.png"
    },
    {
      title: "Procedimentos práticos",
      description: "Comunicação, crachá de identificação, check-in/check-out, código de vestimenta, postura nas redes sociais e participação em Pequenos Grupos.",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-4.jpg"
    },
    {
      title: "Agradecimentos",
      description: "Venha ser família com a gente!",
      thumbnail: "/images/courses/voluntariado/lesson-thumbnails/lesson-5.jpg"
    }
  ]
};
const fundamentosCourse = {
  title: "Fundamentos",
  description: "Principais pilares da fé cristã e temas essenciais da doutrina cristã sob a perspectiva pentecostal.",
  image: "/images/courses/fundamentos/yt-thumb-fundamentos-small.jpg",
  link: "/oceano-academy/cursos/fundamentos",
  linkText: "Saiba mais",
  ctaUrl: "https://academy-ocn.memberkit.com.br/invites/Q85BZb/join",
  lessons: [
    {
      title: "Cremos na Bíblia Sagrada",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-1.jpg"
    },
    {
      title: "Cremos em Deus",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-2.jpg"
    },
    {
      title: "Cremos em Jesus Cristo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-3.jpg"
    },
    {
      title: "Cremos no Espírito Santo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-4.jpg"
    },
    {
      title: "Cremos no perdão dos pecados",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-5.jpg"
    },
    {
      title: "Cremos na justificação",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-6.jpg"
    },
    {
      title: "Cremos na salvação e no novo nascimento",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-7.jpg"
    },
    {
      title: "Cremos nas ordenanças de Jesus",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-8.jpg"
    },
    {
      title: "Cremos no batismo no Espírito Santo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-9.jpg"
    },
    {
      title: "Cremos na santificação",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-10.jpg"
    },
    {
      title: "Cremos na segunda vinda de Cristo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-11.jpg"
    },
    {
      title: "Cremos no tribunal de Cristo",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-12.jpg"
    },
    {
      title: "Cremos no juízo final",
      description: "",
      thumbnail: "/images/courses/fundamentos/lesson-thumbnails/lesson-13.jpg"
    }
  ]
};
const vidaNovaCourse = {
  title: "Nova Vida",
  description: "Princípios básicos da fé cristã, fortalecimento da sua identidade em Cristo e estabelecimento de raízes firmes na Palavra.",
  image: "/images/courses/vida-nova/yt-thumb-vida-nova-small.jpg",
  link: "/oceano-academy/cursos/vida-nova",
  linkText: "Saiba mais",
  ctaUrl: "https://academy-ocn.memberkit.com.br/invites/xOV18G/join",
  lessons: [
    {
      title: "Conhecendo o Pai, o Filho e o Espírito Santo",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-1.jpg"
    },
    {
      title: "Sou uma nova criatura",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-2.jpg"
    },
    {
      title: "Não há condenação em Cristo",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-3.jpg"
    },
    {
      title: "O Batismo nas águas",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-4.jpg"
    },
    {
      title: "O memorial da Ceia do Senhor",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-5.jpg"
    },
    {
      title: "Nossa razão de existir",
      description: "",
      thumbnail: "/images/courses/vida-nova/lesson-thumbnails/lesson-6.jpg"
    }
  ]
};
const feNoFeedCourse = {
  title: "Fé no Feed",
  description: "Como viver Cristo no mundo das redes sociais. O feed das suas redes sociais fala mais sobre você do que imagina.",
  image: "/images/courses/fe-no-feed/yt-thumb-fe-no-feed-small.jpg",
  link: "/oceano-academy/cursos/fe-no-feed",
  linkText: "Saiba mais",
  ctaUrl: "https://academy.oceanodagraca.com/invites/Qv5E9x/join",
  lessons: [
    {
      title: "A boca fala do que o coração está cheio",
      description: "O que você posta revela quem você é. Descubra como encher o coração da Palavra e refletir isso no seu feed.",
      thumbnail: "/images/courses/fe-no-feed/lesson-thumbnails/lesson-1.jpg"
    },
    {
      title: "Você é o que você compartilha",
      description: "Curtidas e compartilhamentos não são neutros. Aprenda a usar sua liberdade em Cristo para edificar e glorificar a Deus.",
      thumbnail: "/images/courses/fe-no-feed/lesson-thumbnails/lesson-2.jpg"
    },
    {
      title: "Somos o sal que tempera ou a maldade que contamina?",
      description: "Sua influência online pode curar ou ferir. Seja sal que conserva e transforma no mundo digital.",
      thumbnail: "/images/courses/fe-no-feed/lesson-thumbnails/lesson-3.jpg"
    },
    {
      title: "Entre curtidas e chamado: identidade em Cristo vs. aparência digital",
      description: "Mais do que seguidores, viva sua verdadeira identidade em Cristo sem ser refém de métricas e algoritmos.",
      thumbnail: "/images/courses/fe-no-feed/lesson-thumbnails/lesson-4.jpg"
    }
  ]
};
const schools = {
  "escola-de-membros": {
    courses: [
      connectCourse,
      voluntariadoCourse,
      fundamentosCourse,
      vidaNovaCourse
    ]
  },
  "escola-biblica": {
    courses: [feNoFeedCourse]
  },
  "escola-de-lideres": {
    courses: []
  }
};
function CardWithImageAndLink({
  title,
  description,
  image,
  link,
  linkText,
  openInNewTab
}) {
  return /* @__PURE__ */ jsx(Card, { className: "max-w-md shadow-none hover:shadow-xs transition-all duration-300 gap-1 rounded-lg flex flex-col pt-0", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: link,
      target: openInNewTab ? "_blank" : void 0,
      rel: openInNewTab ? "noopener noreferrer" : void 0,
      className: "contents space-y-1",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mt-0 w-full aspect-video bg-muted rounded-lg", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: title,
            className: "w-full h-full object-cover rounded-t-lg"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "pb-0 pt-8 flex-row items-center text-xl sm:text-2xl font-semibold", children: title }),
          /* @__PURE__ */ jsx(CardContent, { className: "text-sm sm:text-[15px]", children: /* @__PURE__ */ jsx(P, { className: "mt-0 text-left leading-6 text-muted-foreground", children: description }) })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { className: "pt-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 font-medium text-black hover:text-black/70 hover:cursor-pointer text-sm", children: [
          linkText,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
        ] }) }) })
      ]
    }
  ) });
}
function EscolaDeMembros() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(AllSchoolsBackButton, {}),
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Escola de Membros" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Nosso discipulado institucional." })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs(Container, { className: "mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsx(H2, { children: "Cursos" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8", children: schools["escola-de-membros"].courses.map((course) => /* @__PURE__ */ jsx(
        CardWithImageAndLink,
        {
          ...course,
          openInNewTab: false
        },
        course.title
      )) })
    ] })
  ] });
}
const escolaDeMembros = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(EscolaDeMembros, {});
});
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: escolaDeMembros
}, Symbol.toStringTag, { value: "Module" }));
function EscolaBiblica() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(AllSchoolsBackButton, {}),
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Escola Bíblica" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Cursos de ensino e adoração." })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs(Container, { className: "mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsx(H2, { children: "Cursos" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8", children: schools["escola-biblica"].courses.map((course) => /* @__PURE__ */ jsx(
        CardWithImageAndLink,
        {
          ...course,
          openInNewTab: false
        },
        course.title
      )) })
    ] })
  ] });
}
const escolaBiblica = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(EscolaBiblica, {});
});
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: escolaBiblica
}, Symbol.toStringTag, { value: "Module" }));
function EscolaDeLideres() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(AllSchoolsBackButton, {}),
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Escola de Líderes" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Cursos de capacitação para líderes." })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs(Container, { className: "mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsx(H2, { children: "Cursos" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8", children: schools["escola-de-lideres"].courses.map((course) => /* @__PURE__ */ jsx(CourseCard, { ...course, openInNewTab: false }, course.title)) })
    ] })
  ] });
}
const escolaDeLideres = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(EscolaDeLideres, {});
});
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: escolaDeLideres
}, Symbol.toStringTag, { value: "Module" }));
function AllCoursesBackButton(props) {
  const { href = "/oceano-academy" } = props;
  return /* @__PURE__ */ jsx(Container, { className: "pb-2 sm:pb-2", children: /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      className: "h-9 px-4 py-2 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70 inline-flex items-center gap-2 rounded-md text-sm",
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Ver todos os cursos"
      ]
    }
  ) }) });
}
function TopCTAButton(props) {
  const { ctaUrl, ctaText, loginUrl, openInNewTab, disabled = false } = props;
  return /* @__PURE__ */ jsxs(Container, { className: "w-full sm:w-96 p-4 sm:p-6 gap-3 lg:gap-3", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "lg",
        className: "h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-full",
        disabled,
        onClick: () => {
          if (openInNewTab) {
            window.open(ctaUrl, "_blank");
          } else {
            window.location.href = ctaUrl;
          }
        },
        children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: ctaText } })
      }
    ),
    /* @__PURE__ */ jsxs(P, { className: "mt-0 sm:mt-0 mx-auto sm:mx-0", children: [
      "Já é cadastrado(a)?",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: loginUrl,
          className: "text-primary hover:text-primary/80 underline underline-offset-2 ",
          target: "_blank",
          children: "Acesse aqui"
        }
      )
    ] })
  ] });
}
function PDangerously({
  dangerouslySetInnerHTML,
  className
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: cn(
        "leading-6 mt-4 text-left text-muted-foreground",
        className
      ),
      children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML })
    }
  );
}
function LessonCard(props) {
  const { title, description, thumbnail } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-10 sm:items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6 sm:mb-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: thumbnail,
        alt: title,
        className: "w-full sm:w-40 h-auto rounded-sm"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 sm:flex-1", children: [
      /* @__PURE__ */ jsx(H3, { className: "text-left", children: title }),
      /* @__PURE__ */ jsx(
        PDangerously,
        {
          className: "mt-0",
          dangerouslySetInnerHTML: { __html: description }
        }
      )
    ] })
  ] });
}
function LessonsCards(props) {
  const { lessons } = props;
  return /* @__PURE__ */ jsx("div", { className: "my-4 flex flex-col gap-4", children: lessons.map((lesson) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      LessonCard,
      {
        title: lesson.title,
        description: lesson.description,
        thumbnail: lesson.thumbnail
      },
      lesson.title
    ),
    lessons.indexOf(lesson) !== lessons.length - 1 && /* @__PURE__ */ jsx(Separator, { className: "my-10 sm:mt-8 sm:mb-4" })
  ] }, lesson.title)) });
}
function FeNoFeed() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(AllCoursesBackButton, { href: "/oceano-academy/escolas/escola-biblica" }),
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-1", children: [
        /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Fé no Feed" }),
        /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Como viver Cristo no mundo das redes sociais." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "O feed das suas redes sociais fala mais sobre você do que imagina. Cada curtida, comentário ou postagem revela o que ocupa o seu coração." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Mas… será que sua presença digital tem refletido Cristo?" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sm:flex-1 order-first sm:order-last mb-6 sm:mb-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/courses/fe-no-feed/yt-thumb-fe-no-feed.jpg",
          alt: "Connect Course",
          className: "w-full h-auto rounded-lg"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(
      TopCTAButton,
      {
        ctaUrl: feNoFeedCourse.ctaUrl,
        ctaText: CTADefaultLabel,
        loginUrl: defaultMembersAreaLoginUrl,
        openInNewTab: true
      }
    ),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-10 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Sobre o curso" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "O Curso Fé no Feed é um guia prático e bíblico para transformar suas redes sociais em um espaço de testemunho, influência positiva e missão. Aqui você vai aprender a unir fé, propósito e autenticidade em cada publicação." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Porque assistir o curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Aprenda a usar suas redes como extensão do seu testemunho cristão;" }),
          /* @__PURE__ */ jsx("li", { children: "Descubra como lidar com curtidas, algoritmos e aprovação digital sem perder sua identidade em Cristo;" }),
          /* @__PURE__ */ jsx("li", { children: "Transforme sua presença online em oportunidade de evangelismo, edificação e inspiração;" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Para quem é este curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Jovens e adultos que desejam usar suas redes sociais com propósito;" }),
          /* @__PURE__ */ jsx("li", { children: "Líderes de ministérios e comunicadores cristãos;" }),
          /* @__PURE__ */ jsx("li", { children: "Qualquer pessoa que queira alinhar fé e vida digital;" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Pré-requisitos" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Ter redes sociais ativas;" }),
          /* @__PURE__ */ jsx("li", { children: "Desejo de viver Cristo no ambiente digital;" }),
          /* @__PURE__ */ jsx("li", { children: "Não precisa ter formação teológica – só coração aberto!" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-7 space-y-0", children: /* @__PURE__ */ jsxs(Container, { className: "", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(H2, { children: "Estrutura do curso" }) }),
      /* @__PURE__ */ jsx(LessonsCards, { lessons: feNoFeedCourse.lessons })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Inscreva-se agora",
        description: "Vem ser família com a gente!",
        buttonLink: feNoFeedCourse.ctaUrl,
        buttonText: CTADefaultLabel,
        openInNewTab: true,
        showArrow: false
      }
    ) })
  ] });
}
const feNoFeed = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(FeNoFeed, {});
});
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: feNoFeed
}, Symbol.toStringTag, { value: "Module" }));
function Connect() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(AllCoursesBackButton, { href: "/oceano-academy/escolas/escola-de-membros" }),
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-1", children: [
        /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Connect" }),
        /* @__PURE__ */ jsx(P, { className: "mt-0", children: "O Connect é o primeiro passo para mergulhar no Oceano da Graça." }),
        /* @__PURE__ */ jsxs(P, { className: "", children: [
          "Um curso simples, acolhedor e inspirador que apresenta nossa visão, valores e oportunidades de servir. Aqui, você e sua família encontram",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "pertencimento, propósito e comunhão." })
        ] }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Vem ser família com a gente!" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sm:flex-1 order-first sm:order-last mb-6 sm:mb-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/courses/connect/yt-thumb-connect.png",
          alt: "Connect Course",
          className: "w-full h-auto rounded-lg"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(
      TopCTAButton,
      {
        ctaUrl: connectCourse.ctaUrl,
        ctaText: CTADefaultLabel,
        loginUrl: defaultMembersAreaLoginUrl,
        openInNewTab: true
      }
    ),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-10 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Sobre o curso" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "O curso apresenta a história, valores, missão, visão e estrutura ministerial da Oceano da Graça. Também mostra como funcionam nossos programas de integração e voluntariado, ajudando cada pessoa a descobrir seu lugar na família da fé." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Porque assistir o curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "list-disc", children: [
          /* @__PURE__ */ jsx("li", { children: "Para conhecer de perto a visão e missão da Igreja Oceano da Graça." }),
          /* @__PURE__ */ jsx("li", { children: "Para entender como funcionam nossos ministérios, programas e estrutura." }),
          /* @__PURE__ */ jsx("li", { children: "Para se sentir parte da família e encontrar seu espaço de serviço e comunhão." }),
          /* @__PURE__ */ jsx("li", { children: "Para dar os primeiros passos na fé de forma acompanhada e intencional." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Para quem é este curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "list-disc", children: [
          /* @__PURE__ */ jsx("li", { children: "Novos membros da Igreja Oceano da Graça." }),
          /* @__PURE__ */ jsx("li", { children: "Visitantes que desejam entender melhor nossa identidade." }),
          /* @__PURE__ */ jsx("li", { children: "Pessoas que querem se engajar nos ministérios e programas da igreja." }),
          /* @__PURE__ */ jsx("li", { children: "Famílias que buscam pertencer a uma comunidade acolhedora." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Pré-requisitos" }),
        /* @__PURE__ */ jsxs(UL, { className: "list-disc", children: [
          /* @__PURE__ */ jsx("li", { children: "Estar disposto a conhecer e se envolver com a visão da igreja." }),
          /* @__PURE__ */ jsx("li", { children: "Desejo de se conectar mais profundamente a Jesus e à família da fé." }),
          /* @__PURE__ */ jsx("li", { children: "Não é necessário nenhum conhecimento prévio." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-7 space-y-0", children: /* @__PURE__ */ jsxs(Container, { className: "", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Estrutura do curso" }),
        /* @__PURE__ */ jsx(P, { children: "O Connect é dividido em blocos temáticos que apresentam:" })
      ] }),
      /* @__PURE__ */ jsx(LessonsCards, { lessons: connectCourse.lessons })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Inscreva-se agora",
        description: "Vem ser família com a gente!",
        buttonLink: connectCourse.ctaUrl,
        buttonText: CTADefaultLabel,
        openInNewTab: true,
        showArrow: false
      }
    ) })
  ] });
}
const connect = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(Connect, {});
});
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: connect
}, Symbol.toStringTag, { value: "Module" }));
function Voluntariado() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(AllCoursesBackButton, { href: "/oceano-academy/escolas/escola-de-membros" }),
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-1", children: [
        /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Voluntariado" }),
        /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Servir é mais do que uma tarefa: é um chamado." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Na Igreja Oceano da Graça, entendemos que cada voluntário é parte essencial da família, expressando o amor de Deus por meio do serviço ao próximo." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "O Treinamento de Voluntário foi criado para capacitar, inspirar e alinhar todos que escolheram dizer “sim” a esse propósito." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sm:flex-1 order-first sm:order-last mb-6 sm:mb-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/courses/voluntariado/yt-thumb-voluntariado.png",
          alt: "Connect Course",
          className: "w-full h-auto rounded-lg"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(
      TopCTAButton,
      {
        ctaUrl: voluntariadoCourse.ctaUrl,
        ctaText: CTADefaultLabel,
        loginUrl: defaultMembersAreaLoginUrl,
        openInNewTab: true
      }
    ),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-10 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Sobre o curso" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Este treinamento apresenta a identidade da igreja, os ministérios, funções e responsabilidades, além de destacar as marcas que devem estar presentes na vida de cada voluntário. Também oferece orientações práticas sobre procedimentos, postura e integração ao corpo da igreja." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Porque assistir o curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "list-disc", children: [
          /* @__PURE__ */ jsx("li", { children: "Para entender a visão e missão da Oceano da Graça." }),
          /* @__PURE__ */ jsx("li", { children: "Para conhecer os diferentes ministérios e áreas de atuação." }),
          /* @__PURE__ */ jsx("li", { children: "Para aprender os padrões de comportamento e excelência no serviço." }),
          /* @__PURE__ */ jsx("li", { children: "Para viver o voluntariado como expressão de gratidão e amor a Jesus." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Para quem é este curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "list-disc", children: [
          /* @__PURE__ */ jsx("li", { children: "Todos que já servem como voluntários nos ministérios da igreja." }),
          /* @__PURE__ */ jsx("li", { children: "Novos membros que desejam iniciar no voluntariado." }),
          /* @__PURE__ */ jsx("li", { children: "Pessoas que querem alinhar serviço e espiritualidade." }),
          /* @__PURE__ */ jsx("li", { children: "Líderes e equipes de apoio que coordenam ministérios." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Pré-requisitos" }),
        /* @__PURE__ */ jsxs(UL, { className: "list-disc", children: [
          /* @__PURE__ */ jsx("li", { children: "Ser membro ativo da Oceano da Graça (em alguns ministérios, mínimo de 6 meses de membresia)." }),
          /* @__PURE__ */ jsx("li", { children: "Amar a Deus, as pessoas e a igreja." }),
          /* @__PURE__ */ jsx("li", { children: "Compromisso com pontualidade, flexibilidade e coração ensinável." }),
          /* @__PURE__ */ jsx("li", { children: "Disposição para servir com excelência e manter bom testemunho." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-7 space-y-0", children: /* @__PURE__ */ jsxs(Container, { className: "", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Estrutura do curso" }),
        /* @__PURE__ */ jsx(P, { children: "O Treinamento de Voluntário é o guia que prepara cada servo para viver seu chamado com alegria, excelência e propósito, conectando pessoas a Jesus com amor e graça." })
      ] }),
      /* @__PURE__ */ jsx(LessonsCards, { lessons: voluntariadoCourse.lessons })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Inscreva-se agora",
        description: "Vem ser família com a gente!",
        buttonLink: voluntariadoCourse.ctaUrl,
        buttonText: CTADefaultLabel,
        openInNewTab: true,
        showArrow: false
      }
    ) })
  ] });
}
const voluntariado = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(Voluntariado, {});
});
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: voluntariado
}, Symbol.toStringTag, { value: "Module" }));
function VidaNova() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(AllCoursesBackButton, { href: "/oceano-academy/escolas/escola-de-membros" }),
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-1", children: [
        /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Nova Vida" }),
        /* @__PURE__ */ jsx(P, { className: "mt-0", children: "O início da caminhada cristã é um momento especial, cheio de descobertas e fundamentos que sustentarão toda a vida de fé." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "O Curso Nova Vida foi desenvolvido para conduzir cada novo discípulo aos princípios básicos da fé cristã, fortalecendo sua identidade em Cristo e estabelecendo raízes firmes na Palavra ." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sm:flex-1 order-first sm:order-last mb-6 sm:mb-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/courses/vida-nova/yt-thumb-vida-nova.jpg",
          alt: "Connect Course",
          className: "w-full h-auto rounded-lg"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(
      TopCTAButton,
      {
        ctaUrl: vidaNovaCourse.ctaUrl,
        ctaText: CTADefaultLabel,
        loginUrl: defaultMembersAreaLoginUrl,
        openInNewTab: true
      }
    ),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-10 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Sobre o curso" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Este curso apresenta os fundamentos bíblicos da fé cristã, abordando temas essenciais como salvação, oração, leitura bíblica, comunhão e vida em comunidade. Ele prepara o novo convertido para crescer espiritualmente e viver de maneira plena a nova vida em Jesus." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Porque assistir o curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Para compreender melhor a salvação e o novo nascimento em Cristo;" }),
          /* @__PURE__ */ jsx("li", { children: "Para aprender práticas espirituais básicas e essenciais para a fé;" }),
          /* @__PURE__ */ jsx("li", { children: "Para fortalecer sua caminhada cristã com fundamentos sólidos;" }),
          /* @__PURE__ */ jsx("li", { children: "Para viver em comunhão, descobrindo o valor de pertencer à família de Deus;" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Para quem é este curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Novos convertidos que deram seus primeiros passos na fé;" }),
          /* @__PURE__ */ jsx("li", { children: "Pessoas que desejam consolidar sua vida espiritual;" }),
          /* @__PURE__ */ jsx("li", { children: "Quem busca compreender a base bíblica da vida cristã;" }),
          /* @__PURE__ */ jsx("li", { children: "Qualquer cristão que queira renovar seus fundamentos na fé;" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Pré-requisitos" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Ter decidido entregar a vida a Cristo;" }),
          /* @__PURE__ */ jsx("li", { children: "Desejo sincero de crescer espiritualmente;" }),
          /* @__PURE__ */ jsx("li", { children: "Disponibilidade para participar das aulas e vivenciar os princípios ensinados;" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-7 space-y-0", children: /* @__PURE__ */ jsxs(Container, { className: "", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Estrutura do curso" }),
        /* @__PURE__ */ jsx(P, { children: "O Curso Nova Vida é o primeiro passo para consolidar a fé, viver em comunhão e experimentar plenamente a transformação que só Jesus pode oferecer." })
      ] }),
      /* @__PURE__ */ jsx(LessonsCards, { lessons: vidaNovaCourse.lessons })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Inscreva-se agora",
        description: "Vem ser família com a gente!",
        buttonLink: vidaNovaCourse.ctaUrl,
        buttonText: CTADefaultLabel,
        openInNewTab: true,
        showArrow: false
      }
    ) })
  ] });
}
const vidaNova = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(VidaNova, {});
});
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vidaNova
}, Symbol.toStringTag, { value: "Module" }));
function Fundamentos() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(AllCoursesBackButton, { href: "/oceano-academy/escolas/escola-de-membros" }),
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-24 sm:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-1", children: [
        /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Fundamentos" }),
        /* @__PURE__ */ jsx(P, { className: "mt-0", children: "A vida cristã, assim como uma construção, precisa estar firmada em alicerces sólidos." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Sem bases bem definidas, a fé corre o risco de sucumbir diante dos ventos de falsos ensinos e das pressões da vida moderna." }),
        /* @__PURE__ */ jsxs(P, { className: "", children: [
          "O ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Curso Fundamentos" }),
          " nasceu para consolidar os principais pilares da fé cristã e conduzir cada discípulo a uma caminhada madura, enraizada na Palavra de Deus."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sm:flex-1 order-first sm:order-last mb-6 sm:mb-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/courses/fundamentos/yt-thumb-fundamentos.jpg",
          alt: "Connect Course",
          className: "w-full h-auto rounded-lg"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(
      TopCTAButton,
      {
        ctaUrl: fundamentosCourse.ctaUrl,
        ctaText: CTADefaultLabel,
        loginUrl: defaultMembersAreaLoginUrl,
        openInNewTab: true
      }
    ),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-10 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Sobre o curso" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "O curso apresenta os temas essenciais da doutrina cristã sob a perspectiva pentecostal: a Bíblia Sagrada, Deus, Jesus Cristo, Espírito Santo, perdão dos pecados, justificação, salvação e novo nascimento, ordenanças de Jesus, batismo no Espírito Santo, santificação, segunda vinda de Cristo, tribunal de Cristo e juízo final." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Além disso, cada lição é acompanhada por exercícios de fixação, reforçando o aprendizado e ajudando o aluno a aplicar o conteúdo em sua vida espiritual." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Porque assistir o curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Para fortalecer sua fé em bases bíblicas sólidas;" }),
          /* @__PURE__ */ jsx("li", { children: "Para compreender as principais doutrinas cristãs sem superficialidade;" }),
          /* @__PURE__ */ jsx("li", { children: "Para aprender de forma prática, com estudos, reflexões e exercícios;" }),
          /* @__PURE__ */ jsx("li", { children: "Para crescer em maturidade espiritual e viver um cristianismo relevante;" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Para quem é este curso?" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Novos convertidos que precisam de fundamentos firmes;" }),
          /* @__PURE__ */ jsx("li", { children: "Cristãos que desejam aprofundar-se na Palavra de Deus;" }),
          /* @__PURE__ */ jsx("li", { children: "Líderes de células, discipuladores e professores de Escola Bíblica;" }),
          /* @__PURE__ */ jsx("li", { children: "Qualquer pessoa que queira ter clareza doutrinária e viver uma fé sólida;" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Pré-requisitos" }),
        /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { children: "Desejo genuíno de crescer em conhecimento bíblico;" }),
          /* @__PURE__ */ jsx("li", { children: "Compromisso em participar das aulas e realizar os exercícios;" }),
          /* @__PURE__ */ jsx("li", { children: "Não é necessário ter conhecimento teológico prévio;" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-7 space-y-0", children: /* @__PURE__ */ jsxs(Container, { className: "", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H2, { children: "Estrutura do curso" }),
        /* @__PURE__ */ jsx(P, { className: "", children: "O Curso Fundamentos é a base sólida que todo cristão precisa para crescer em maturidade, permanecer firme na fé e viver um evangelho relevante em qualquer tempo." }),
        /* @__PURE__ */ jsx(P, { className: "", children: "Cada lição trata de um tema central da fé cristã:" })
      ] }),
      /* @__PURE__ */ jsx(LessonsCards, { lessons: fundamentosCourse.lessons })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Inscreva-se agora",
        description: "Vem ser família com a gente!",
        buttonLink: fundamentosCourse.ctaUrl,
        buttonText: CTADefaultLabel,
        openInNewTab: true,
        showArrow: false
      }
    ) })
  ] });
}
const fundamentos = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(Fundamentos, {});
});
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fundamentos
}, Symbol.toStringTag, { value: "Module" }));
function InfoCard({
  title,
  description
}) {
  return /* @__PURE__ */ jsx(Card, { className: "max-w-md shadow-none gap-1 rounded-lg flex flex-col bg-white border", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pt-0 pb-0 flex-row items-center gap-3 text-xl sm:text-2xl font-semibold", children: title }),
    /* @__PURE__ */ jsx(CardContent, { className: "", children: /* @__PURE__ */ jsx(P, { className: "mt-0 text-left", children: description }) })
  ] }) });
}
const features = [
  {
    title: "Acompanhamento Pastoral",
    description: "Nossa equipe de pastores está comprometida em oferecer um acompanhamento pastoral com base na Palavra de Deus.",
    link: "/igreja-online/atendimento-pastoral",
    linkText: "Saiba mais"
  },
  {
    title: "Pedidos de Oração",
    description: "Acreditamos no poder da oração e no Deus que responde quando clamamos a Ele com fé.",
    link: "/igreja-online/pedidos-de-oracao",
    linkText: "Saiba mais"
  },
  {
    title: "Pequenos Grupos",
    description: "Você não foi criado para caminhar sozinho. Encontre um grupo de pessoas que te ajudam a crescer em Deus.",
    link: "/igreja-online/pequenos-grupos",
    linkText: "Saiba mais"
  },
  {
    title: "Academy",
    description: "Cresça na Graça e no conhecimento do Nosso Senhor Jesus Cristo.",
    link: "/oceano-academy",
    linkText: "Saiba mais"
  },
  {
    title: "Cultos ao vivo",
    description: "Assista aos nossos cultos ao vivo e participe ativamente da Igreja.",
    link: "/igreja-online/cultos-ao-vivo",
    linkText: "Saiba mais"
  },
  {
    title: "Doações",
    description: "Ajude a Igreja Oceano da Graça Online a continuar a levar a Palavra de Deus para o mundo inteiro.",
    link: "/doacoes",
    linkText: "Saiba mais"
  }
];
function WelcomeOnlineChurch() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Bem-vindo à Igreja Oceano da Graça Online!" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Aqui você encontra um espaço preparado para que a distância nunca seja um obstáculo para viver a fé." })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-2 sm:mt-6", children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "h-full w-full rounded-lg",
        src: "https://www.youtube.com/embed/ByCBXVdftq4",
        title: "YouTube video player",
        frameBorder: 0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    ) }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-2 sm:mt-4", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H2, { children: "O projeto Igreja Online" }),
      /* @__PURE__ */ jsx(P, { className: "text-left", children: "Nasceu no coração de nossos pastores, Sinval de Souza e Rosália Santt, o desejo de alcançar pessoas além das paredes físicas da igreja e oferecer o mesmo cuidado, ensino e comunhão a quem, por qualquer motivo, não pode estar presente localmente." })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8", children: [
      /* @__PURE__ */ jsx(
        InfoCard,
        {
          title: "Nossa Missão Online",
          description: "Aqui você encontra um espaço preparado para que a distância nunca seja um obstáculo para viver a fé. Cada culto, cada palavra, cada encontro é pensado para conectar você a Jesus com amor e graça. Nossa missão é clara: formar discípulos, edificar famílias e anunciar o Evangelho de maneira viva e transformadora."
        }
      ),
      /* @__PURE__ */ jsx(
        InfoCard,
        {
          title: "Liderança Pastoral",
          description: "Os pastores Sinval e Rosália conduzem este ministério com paixão e dedicação. Ele, com sua história marcada por milagres e por uma vida inteira de serviço ao Reino. Ela, com sua voz, sensibilidade e chamado para inspirar mulheres e famílias através do cuidado pastoral e da música. Juntos, eles carregam o compromisso de pastorear com verdade e graça."
        }
      ),
      /* @__PURE__ */ jsx(
        InfoCard,
        {
          title: "Comunidade Virtual Completa",
          description: "Na Igreja Online você pode participar dos cultos ao vivo, receber oração, aprender mais da Palavra através da Oceano Academy, compartilhar a vida nos Pequenos Grupos e crescer espiritualmente em comunidade, mesmo que esteja a quilômetros de distância."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mt-0 sm:mt-14", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(H2, { className: "text-left", children: "Nosso Manifesto" }) }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-0 sm:mt-0", children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "h-full w-full rounded-lg",
        src: "https://www.youtube.com/embed/LPEvPT4_wbc",
        title: "YouTube video player",
        frameBorder: 0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    ) }) }),
    /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border px-6 py-6 rounded-lg", children: [
      /* @__PURE__ */ jsx(H2, { className: "", children: "Seja parte da família Oceano" }),
      /* @__PURE__ */ jsx(P, { className: "text-left", children: "Queremos que você se sinta em casa. Aqui, não importa de onde você nos acompanha: você é parte da família." }),
      /* @__PURE__ */ jsxs(P, { className: "text-left mt-2 sm:mt-1", children: [
        "Igreja Online,",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium italic", children: "vem ser família com a gente!" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsxs(Container, { className: "mt-12 sm:mt-14 mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsx(H2, { children: "Acesso rápido" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8", children: features.map((feature) => /* @__PURE__ */ jsx(
        CardWithLink,
        {
          ...feature,
          openInNewTab: false
        },
        feature.title
      )) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mb-10 sm:mb-16", children: /* @__PURE__ */ jsx(
      CTABox,
      {
        title: "Em dúvida sobre a Igreja Online?",
        description: "Fale conosco que teremos prazer em te ajudar.",
        buttonLink: "/igreja-online/saiba-mais",
        buttonText: "Saiba mais",
        openInNewTab: false
      }
    ) })
  ] });
}
const about = UNSAFE_withComponentProps(function Home2() {
  return /* @__PURE__ */ jsx(WelcomeOnlineChurch, {});
});
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const defaultWhatsAppNumber = "5561996308847";
function WhatsAppCTABox({
  phoneNumber,
  text,
  openInNewTab = true,
  ctaText = "Entrar em contato"
}) {
  return /* @__PURE__ */ jsx(Container, { className: "mt-4 sm:mt-7", children: /* @__PURE__ */ jsx(Container, { className: "bg-white rounded-lg border", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: `https://wa.me/${phoneNumber}${text ? `?text=${text}` : ""}`,
        target: openInNewTab ? "_blank" : void 0,
        className: "mt-0 sm:block mx-auto sm:mx-0 w-36",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/whatsapp-full-logo.png",
            alt: "Whatsapp",
            className: "w-36 mt-0 hover:opacity-80 transition-all duration-100"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:w-auto sm:flex-shrink-0 mt-3 sm:mt-0", children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "lg",
        className: "h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-72",
        onClick: () => {
          if (openInNewTab) {
            window.open(
              `https://wa.me/${phoneNumber}${text ? `?text=${text}` : ""}`,
              "_blank"
            );
          } else {
            window.location.href = `https://wa.me/${phoneNumber}${text ? `?text=${text}` : ""}`;
          }
        },
        children: ctaText
      }
    ) })
  ] }) }) });
}
function OnlineChurch() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Igreja Online" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Aqui você encontra um espaço preparado para que a distância nunca seja um obstáculo para viver a fé." })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { className: "mt-4 sm:mt-7", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H3, { className: "", children: "Deixe o seu contato para saber mais sobre a Igreja Online" }),
      /* @__PURE__ */ jsx(P, { className: "", children: "Entre em contato pelo WhatsApp, clicando no botão ou preencha o formulário abaixo para que possamos entrar em contato com você." })
    ] }) }),
    /* @__PURE__ */ jsx(
      WhatsAppCTABox,
      {
        phoneNumber: defaultWhatsAppNumber,
        text: "Olá, gostaria de saber mais sobre a Igreja Online.",
        openInNewTab: true,
        ctaText: "Entrar em contato"
      }
    ),
    /* @__PURE__ */ jsx(Container, { className: "mt-0 sm:mt-7", children: /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSdytPrLBLi6rGL6ozTUi9_lbCACrvEWT8KYhsG0jSr2Q2wSDg/viewform?embedded=true",
        width: "100%",
        height: "1150",
        frameBorder: 0,
        marginHeight: 0,
        marginWidth: 0,
        children: "Carregando…"
      }
    ) }) })
  ] });
}
const onlineChurch = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(OnlineChurch, {});
});
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: onlineChurch
}, Symbol.toStringTag, { value: "Module" }));
function LiveService() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Cultos ao Vivo" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Experimente a igreja em qualquer lugar do mundo." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-7 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Horário das transmissões" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Não importa onde você esteja na vida, queremos que a Igreja Oceano de Graça seja um lugar onde você possa confiar para receber a Palavra de Deus, inspiração, encorajamento e apoio." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Domingo" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsxs(UL, { className: "", children: [
          /* @__PURE__ */ jsx("li", { className: "mt-0", children: "Culto da Família - 10:00" }),
          /* @__PURE__ */ jsx("li", { className: "mt-0", children: "Culto da Família - 18:30" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Quarta-feira" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx(UL, { className: "", children: /* @__PURE__ */ jsx("li", { className: "mt-0", children: "Quarta da Graça - 20:00" }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mt-4 sm:mt-7", children: /* @__PURE__ */ jsx(Container, { className: "bg-white rounded-lg border", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.youtube.com/c/OceanodaGra%C3%A7a/live",
          target: "_blank",
          className: "mt-0 sm:block mx-auto sm:mx-0 w-36",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/youtube-full-logo.png",
              alt: "Youtube",
              className: "w-36 mt-0 hover:opacity-80 transition-all duration-100"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "w-full sm:w-auto sm:flex-shrink-0 mt-3 sm:mt-0", children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          size: "lg",
          className: "h-12 hover:cursor-pointer bg-black hover:bg-black/80 text-white hover:text-white w-full sm:w-72",
          onClick: () => {
            window.open(
              "https://www.youtube.com/c/OceanodaGra%C3%A7a/live",
              "_blank"
            );
          },
          children: [
            "Acessar",
            /* @__PURE__ */ jsx(ArrowRight, {})
          ]
        }
      ) })
    ] }) }) })
  ] });
}
const liveService = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(LiveService, {});
});
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: liveService
}, Symbol.toStringTag, { value: "Module" }));
function PastoralCare() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Acompanhamento Pastoral" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Na nossa igreja, ninguém precisa caminhar sozinho." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-7 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Cuidado em todas as estações" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "O cuidado pastoral é uma expressão do amor de Jesus, e queremos estar ao seu lado nos momentos de alegria, de dúvida ou de dor. Seja para compartilhar uma vitória, buscar orientação ou simplesmente ter alguém para ouvir, nossos pastores estão aqui para você." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Como funciona o atendimento" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Nossa equipe pastoral tem o compromisso de oferecer acompanhamento baseado na Palavra de Deus, com sensibilidade, oração e amor. Você pode escolher ser atendido de forma prática pelo WhatsApp ou, se preferir, deixar seus dados no formulário abaixo para que possamos entrar em contato com você." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Uma experiência de cuidado" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "O atendimento pastoral é um espaço de escuta, cuidado e edificação espiritual. Mais do que um encontro, é uma oportunidade de experimentar a presença de Cristo através do cuidado de quem serve." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mt-4 sm:mt-7", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H3, { className: "", children: "Entre em contato para atendimento pastoral" }),
      /* @__PURE__ */ jsx(P, { className: "", children: "Entre em contato pelo WhatsApp, clicando no botão ou preencha o formulário abaixo para agendar um atendimento pastoral e um pastor entrará em contato com você." })
    ] }) }),
    /* @__PURE__ */ jsx(
      WhatsAppCTABox,
      {
        phoneNumber: defaultWhatsAppNumber,
        text: "Olá, gostaria de agendar um atendimento pastoral.",
        openInNewTab: true,
        ctaText: "Entrar em contato"
      }
    ),
    /* @__PURE__ */ jsx(Container, { className: "mt-0 sm:mt-7", children: /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSe_ZkwSByae2HrKfaC_BEK18yWlYLQRxhV0ZvCCUZw4Uug-FA/viewform?embedded=true",
        width: "100%",
        height: "1150",
        frameBorder: 0,
        marginHeight: 0,
        marginWidth: 0,
        children: "Carregando…"
      }
    ) }) })
  ] });
}
const pastoralCare = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(PastoralCare, {});
});
const route24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pastoralCare
}, Symbol.toStringTag, { value: "Module" }));
function PrayRequest() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Pedidos de Oração" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Acreditamos no poder da oração e no Deus que responde quando clamamos a Ele com fé." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-7 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Você não está sozinho" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Você não está sozinho em sua caminhada, queremos interceder por você e apresentar sua vida diante do Senhor." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Nossa intercessão por você" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Nossa equipe de oração está comprometida em orar com dedicação e amor, confiando que Deus ouve cada súplica e age segundo a Sua vontade. Seja qual for a sua necessidade, cremos que a oração pode trazer paz, direção e esperança." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mt-4 sm:mt-7", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H3, { className: "", children: "Registre seu pedido de oração" }),
      /* @__PURE__ */ jsx(P, { className: "", children: "Entre em contato pelo WhatsApp, clicando no botão ou preencha o formulário abaixo e registre seu pedido de oração. Estaremos ao seu lado, buscando em Deus respostas, consolo e milagres." })
    ] }) }),
    /* @__PURE__ */ jsx(
      WhatsAppCTABox,
      {
        phoneNumber: defaultWhatsAppNumber,
        text: "Olá, gostaria de registrar meu pedido de oração.",
        openInNewTab: true,
        ctaText: "Entrar em contato"
      }
    ),
    /* @__PURE__ */ jsx(Container, { className: "mt-0 sm:mt-7", children: /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSdiTCZ-iQ06rE0-ff4oWZCgD4o9UqvHK090XUHNXI3EfUMvgg/viewform?embedded=true",
        width: "100%",
        height: "960",
        frameBorder: 0,
        marginHeight: 0,
        marginWidth: 0,
        children: "Carregando…"
      }
    ) }) })
  ] });
}
const prayRequest = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(PrayRequest, {});
});
const route25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: prayRequest
}, Symbol.toStringTag, { value: "Module" }));
function SmallGroups() {
  return /* @__PURE__ */ jsxs("section", { className: "relative backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(HeroContainer, { className: "pb-2 sm:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(H1, { className: "text-left", children: "Pequenos Grupos" }),
      /* @__PURE__ */ jsx(P, { className: "mt-0", children: "Você não foi criado para caminhar sozinho." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-7 space-y-0", children: [
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Vida em comunidade" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "A vida cristã é vivida em comunidade, no compartilhar da fé, no apoio mútuo e na alegria de crescer junto. Nos Pequenos Grupos, encontramos mais do que encontros semanais: encontramos família, amizade, discipulado e comunhão verdadeira." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Um ambiente de acolhimento" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "É nesse ambiente íntimo e acolhedor que a Palavra ganha vida no dia a dia, que as orações se tornam mais próximas e que as vitórias são celebradas juntos. Aqui, cada pessoa tem voz, cada história tem valor e cada coração encontra um lugar para pertencer." })
      ] }) }),
      /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(H3, { children: "Encontre seu lugar" }),
        /* @__PURE__ */ jsx(P, { className: "text-left", children: "Nossa equipe está comprometida em ajudar você a se conectar a um Pequeno Grupo que combine com sua realidade. Preencha o formulário abaixo e deixe-nos caminhar ao seu lado nessa jornada. Há um lugar esperando por você, e ele pode ser o próximo passo para experimentar o que significa ser parte da família de Deus." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx(Container, { className: "mt-4 sm:mt-7", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(H3, { className: "", children: "Faça parte de um Pequeno Grupo" }),
      /* @__PURE__ */ jsx(P, { className: "", children: "Entre em contato pelo WhatsApp, clicando no botão ou preencha o formulário abaixo para que possamos te ajudar a encontrar o grupo perfeito para você." })
    ] }) }),
    /* @__PURE__ */ jsx(
      WhatsAppCTABox,
      {
        phoneNumber: defaultWhatsAppNumber,
        text: "Olá, gostaria de fazer parte de um Pequeno Grupo.",
        openInNewTab: true,
        ctaText: "Entrar em contato"
      }
    ),
    /* @__PURE__ */ jsx(Container, { className: "mt-0 sm:mt-7", children: /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://docs.google.com/forms/d/e/1FAIpQLScqqYN1TcE0qvbjiie6Xa_0nv-DV79SudqKdv-yn522mJGZFQ/viewform?embedded=true",
        width: "100%",
        height: "960",
        frameBorder: 0,
        marginHeight: 0,
        marginWidth: 0,
        children: "Carregando…"
      }
    ) }) })
  ] });
}
const smallGroups = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx(SmallGroups, {});
});
const route26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: smallGroups
}, Symbol.toStringTag, { value: "Module" }));
const version = UNSAFE_withComponentProps(function() {
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-background text-foreground",
    children: /* @__PURE__ */ jsxs("div", {
      className: "text-center space-y-4 p-8 rounded-lg shadow-lg bg-card text-card-foreground w-96",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-2xl font-bold",
        children: "Versão"
      }), /* @__PURE__ */ jsx("p", {
        className: "font-bold",
        children: "0.1"
      }), /* @__PURE__ */ jsx("p", {
        className: "text-muted-foreground",
        children: "27/10/2025 14:45"
      }), /* @__PURE__ */ jsx("p", {
        className: "text-muted-foreground",
        children: "."
      })]
    })
  });
});
const route27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: version
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-NIUmrkk_.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/index-D93QrDEf.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-C29zVfN3.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/index-D93QrDEf.js"], "css": ["/assets/root-CzbwsC6x.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/layouts/main": { "id": "client/layouts/main", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/main-Co-Jckao.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D93QrDEf.js", "/assets/separator-3PL9DoJs.js", "/assets/index-D3tiAWgw.js", "/assets/utils-D-KgF5mV.js", "/assets/createLucideIcon-3-wEuV26.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/home": { "id": "client/routes/home", "parentId": "client/layouts/main", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-BKbxl4ym.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h2-B4T5XUa2.js", "/assets/separator-3PL9DoJs.js", "/assets/cta-box-31Z8_aLh.js", "/assets/card-with-link-DpknS74H.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/button-CVZ3rhyV.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/card-BraU9DXf.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/about/index": { "id": "client/routes/about/index", "parentId": "client/layouts/main", "path": "sobre", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-XvkM_SPa.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/card-with-link-DpknS74H.js", "/assets/utils-D-KgF5mV.js", "/assets/card-BraU9DXf.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/createLucideIcon-3-wEuV26.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/about/our-reason": { "id": "client/routes/about/our-reason", "parentId": "client/layouts/main", "path": "sobre/nossa-razao", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/our-reason-DkZj6t1u.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h2-B4T5XUa2.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/ul-sj5OSS7b.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/about/our-history": { "id": "client/routes/about/our-history", "parentId": "client/layouts/main", "path": "sobre/nossa-historia", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/our-history-BUQkp625.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/utils-D-KgF5mV.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/about/our-pastors": { "id": "client/routes/about/our-pastors", "parentId": "client/layouts/main", "path": "nossos-pastores", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/our-pastors-4yd43Kxd.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/card-BraU9DXf.js", "/assets/utils-D-KgF5mV.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/churches/index": { "id": "client/routes/churches/index", "parentId": "client/layouts/main", "path": "igrejas", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-B1trYPEW.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/cta-box-31Z8_aLh.js", "/assets/churches-DyFVSlMN.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/createLucideIcon-3-wEuV26.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/churches/$id": { "id": "client/routes/churches/$id", "parentId": "client/layouts/main", "path": "igrejas/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/_id-Bodl4I8U.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/churches-DyFVSlMN.js", "/assets/button-CVZ3rhyV.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/ul-sj5OSS7b.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/donations": { "id": "client/routes/donations", "parentId": "client/layouts/main", "path": "doacoes", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/donations-CHjl6yX3.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/pix-cta-box-CIwbHy1K.js", "/assets/cta-box-31Z8_aLh.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/button-CVZ3rhyV.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/arrow-right-DXwgc8dT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/projects": { "id": "client/routes/projects", "parentId": "client/layouts/main", "path": "projeto-expansao", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/projects-Dxja-nZd.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/cta-box-31Z8_aLh.js", "/assets/pix-cta-box-CIwbHy1K.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/button-CVZ3rhyV.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/createLucideIcon-3-wEuV26.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/index": { "id": "client/routes/oceano-academy/index", "parentId": "client/layouts/main", "path": "oceano-academy", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index--cBlIBPM.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/cta-box-31Z8_aLh.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/index-D93QrDEf.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/schools/index": { "id": "client/routes/oceano-academy/schools/index", "parentId": "client/layouts/main", "path": "oceano-academy/escolas", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-BapeoYYE.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/cta-box-31Z8_aLh.js", "/assets/separator-3PL9DoJs.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/index-D93QrDEf.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/schools/escola-de-membros": { "id": "client/routes/oceano-academy/schools/escola-de-membros", "parentId": "client/layouts/main", "path": "oceano-academy/escolas/escola-de-membros", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/escola-de-membros-B7OI0d6M.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/all-schools-back-button-C-kuwU3N.js", "/assets/h2-B4T5XUa2.js", "/assets/separator-3PL9DoJs.js", "/assets/schools-and-courses-B0psot74.js", "/assets/card-with-image-and-link-v9AdUwZ-.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/card-BraU9DXf.js", "/assets/arrow-right-DXwgc8dT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/schools/escola-biblica": { "id": "client/routes/oceano-academy/schools/escola-biblica", "parentId": "client/layouts/main", "path": "oceano-academy/escolas/escola-biblica", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/escola-biblica-D7w4D8de.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h2-B4T5XUa2.js", "/assets/separator-3PL9DoJs.js", "/assets/all-schools-back-button-C-kuwU3N.js", "/assets/schools-and-courses-B0psot74.js", "/assets/card-with-image-and-link-v9AdUwZ-.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/card-BraU9DXf.js", "/assets/arrow-right-DXwgc8dT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/schools/escola-de-lideres": { "id": "client/routes/oceano-academy/schools/escola-de-lideres", "parentId": "client/layouts/main", "path": "oceano-academy/escolas/escola-de-lideres", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/escola-de-lideres-CsDMu0d0.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h2-B4T5XUa2.js", "/assets/separator-3PL9DoJs.js", "/assets/all-schools-back-button-C-kuwU3N.js", "/assets/button-CVZ3rhyV.js", "/assets/card-BraU9DXf.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/schools-and-courses-B0psot74.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/createLucideIcon-3-wEuV26.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/courses/fe-no-feed": { "id": "client/routes/oceano-academy/courses/fe-no-feed", "parentId": "client/layouts/main", "path": "oceano-academy/cursos/fe-no-feed", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/fe-no-feed-D_i05wex.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/lessons-cards-B-23Ch38.js", "/assets/h2-B4T5XUa2.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/ul-sj5OSS7b.js", "/assets/schools-and-courses-B0psot74.js", "/assets/cta-box-31Z8_aLh.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js", "/assets/index-D93QrDEf.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/arrow-right-DXwgc8dT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/courses/connect": { "id": "client/routes/oceano-academy/courses/connect", "parentId": "client/layouts/main", "path": "oceano-academy/cursos/connect", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/connect-xISkREZ9.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/lessons-cards-B-23Ch38.js", "/assets/h2-B4T5XUa2.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/ul-sj5OSS7b.js", "/assets/schools-and-courses-B0psot74.js", "/assets/cta-box-31Z8_aLh.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js", "/assets/index-D93QrDEf.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/arrow-right-DXwgc8dT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/courses/voluntariado": { "id": "client/routes/oceano-academy/courses/voluntariado", "parentId": "client/layouts/main", "path": "oceano-academy/cursos/voluntariado", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/voluntariado-CaIXHraq.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/lessons-cards-B-23Ch38.js", "/assets/h2-B4T5XUa2.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/ul-sj5OSS7b.js", "/assets/schools-and-courses-B0psot74.js", "/assets/cta-box-31Z8_aLh.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js", "/assets/index-D93QrDEf.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/arrow-right-DXwgc8dT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/courses/vida-nova": { "id": "client/routes/oceano-academy/courses/vida-nova", "parentId": "client/layouts/main", "path": "oceano-academy/cursos/vida-nova", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/vida-nova-Bn4e1YmY.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/lessons-cards-B-23Ch38.js", "/assets/h2-B4T5XUa2.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/ul-sj5OSS7b.js", "/assets/schools-and-courses-B0psot74.js", "/assets/cta-box-31Z8_aLh.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js", "/assets/index-D93QrDEf.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/arrow-right-DXwgc8dT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/oceano-academy/courses/fundamentos": { "id": "client/routes/oceano-academy/courses/fundamentos", "parentId": "client/layouts/main", "path": "oceano-academy/cursos/fundamentos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/fundamentos-BG5VjHRL.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/lessons-cards-B-23Ch38.js", "/assets/h2-B4T5XUa2.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/ul-sj5OSS7b.js", "/assets/schools-and-courses-B0psot74.js", "/assets/cta-box-31Z8_aLh.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js", "/assets/index-D93QrDEf.js", "/assets/createLucideIcon-3-wEuV26.js", "/assets/arrow-right-DXwgc8dT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/online-church/about": { "id": "client/routes/online-church/about", "parentId": "client/layouts/main", "path": "igreja-online", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-KF8G8vr6.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h2-B4T5XUa2.js", "/assets/separator-3PL9DoJs.js", "/assets/card-BraU9DXf.js", "/assets/cta-box-31Z8_aLh.js", "/assets/card-with-link-DpknS74H.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/button-CVZ3rhyV.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/createLucideIcon-3-wEuV26.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/online-church/online-church": { "id": "client/routes/online-church/online-church", "parentId": "client/layouts/main", "path": "igreja-online/saiba-mais", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/online-church-n0MCRxuv.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/whatsapp-cta-box-Doi4c48n.js", "/assets/utils-D-KgF5mV.js", "/assets/button-CVZ3rhyV.js", "/assets/index-D3tiAWgw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/online-church/live-service": { "id": "client/routes/online-church/live-service", "parentId": "client/layouts/main", "path": "igreja-online/cultos-ao-vivo", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/live-service-E-R0X6Xa.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/ul-sj5OSS7b.js", "/assets/button-CVZ3rhyV.js", "/assets/separator-3PL9DoJs.js", "/assets/arrow-right-DXwgc8dT.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D3tiAWgw.js", "/assets/index-D93QrDEf.js", "/assets/createLucideIcon-3-wEuV26.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/online-church/pastoral-care": { "id": "client/routes/online-church/pastoral-care", "parentId": "client/layouts/main", "path": "igreja-online/atendimento-pastoral", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/pastoral-care-CnMW_xrP.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/whatsapp-cta-box-Doi4c48n.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/button-CVZ3rhyV.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/online-church/pray-request": { "id": "client/routes/online-church/pray-request", "parentId": "client/layouts/main", "path": "igreja-online/pedidos-de-oracao", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/pray-request-DYYoWfDS.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/whatsapp-cta-box-Doi4c48n.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/button-CVZ3rhyV.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/online-church/small-groups": { "id": "client/routes/online-church/small-groups", "parentId": "client/layouts/main", "path": "igreja-online/pequenos-grupos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/small-groups-B__B2W6E.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js", "/assets/p-BgZKH9Wn.js", "/assets/h3-DEGs0kQG.js", "/assets/separator-3PL9DoJs.js", "/assets/whatsapp-cta-box-Doi4c48n.js", "/assets/utils-D-KgF5mV.js", "/assets/index-D93QrDEf.js", "/assets/index-D3tiAWgw.js", "/assets/button-CVZ3rhyV.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "client/routes/version": { "id": "client/routes/version", "parentId": "root", "path": "version", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/version-CRsOL9iq.js", "imports": ["/assets/chunk-PVWAREVJ-DIaTsoHx.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-34785fdd.js", "version": "34785fdd", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "client/layouts/main": {
    id: "client/layouts/main",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "client/routes/home": {
    id: "client/routes/home",
    parentId: "client/layouts/main",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "client/routes/about/index": {
    id: "client/routes/about/index",
    parentId: "client/layouts/main",
    path: "sobre",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "client/routes/about/our-reason": {
    id: "client/routes/about/our-reason",
    parentId: "client/layouts/main",
    path: "sobre/nossa-razao",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "client/routes/about/our-history": {
    id: "client/routes/about/our-history",
    parentId: "client/layouts/main",
    path: "sobre/nossa-historia",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "client/routes/about/our-pastors": {
    id: "client/routes/about/our-pastors",
    parentId: "client/layouts/main",
    path: "nossos-pastores",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "client/routes/churches/index": {
    id: "client/routes/churches/index",
    parentId: "client/layouts/main",
    path: "igrejas",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "client/routes/churches/$id": {
    id: "client/routes/churches/$id",
    parentId: "client/layouts/main",
    path: "igrejas/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "client/routes/donations": {
    id: "client/routes/donations",
    parentId: "client/layouts/main",
    path: "doacoes",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "client/routes/projects": {
    id: "client/routes/projects",
    parentId: "client/layouts/main",
    path: "projeto-expansao",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "client/routes/oceano-academy/index": {
    id: "client/routes/oceano-academy/index",
    parentId: "client/layouts/main",
    path: "oceano-academy",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "client/routes/oceano-academy/schools/index": {
    id: "client/routes/oceano-academy/schools/index",
    parentId: "client/layouts/main",
    path: "oceano-academy/escolas",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "client/routes/oceano-academy/schools/escola-de-membros": {
    id: "client/routes/oceano-academy/schools/escola-de-membros",
    parentId: "client/layouts/main",
    path: "oceano-academy/escolas/escola-de-membros",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "client/routes/oceano-academy/schools/escola-biblica": {
    id: "client/routes/oceano-academy/schools/escola-biblica",
    parentId: "client/layouts/main",
    path: "oceano-academy/escolas/escola-biblica",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "client/routes/oceano-academy/schools/escola-de-lideres": {
    id: "client/routes/oceano-academy/schools/escola-de-lideres",
    parentId: "client/layouts/main",
    path: "oceano-academy/escolas/escola-de-lideres",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "client/routes/oceano-academy/courses/fe-no-feed": {
    id: "client/routes/oceano-academy/courses/fe-no-feed",
    parentId: "client/layouts/main",
    path: "oceano-academy/cursos/fe-no-feed",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "client/routes/oceano-academy/courses/connect": {
    id: "client/routes/oceano-academy/courses/connect",
    parentId: "client/layouts/main",
    path: "oceano-academy/cursos/connect",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "client/routes/oceano-academy/courses/voluntariado": {
    id: "client/routes/oceano-academy/courses/voluntariado",
    parentId: "client/layouts/main",
    path: "oceano-academy/cursos/voluntariado",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "client/routes/oceano-academy/courses/vida-nova": {
    id: "client/routes/oceano-academy/courses/vida-nova",
    parentId: "client/layouts/main",
    path: "oceano-academy/cursos/vida-nova",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "client/routes/oceano-academy/courses/fundamentos": {
    id: "client/routes/oceano-academy/courses/fundamentos",
    parentId: "client/layouts/main",
    path: "oceano-academy/cursos/fundamentos",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "client/routes/online-church/about": {
    id: "client/routes/online-church/about",
    parentId: "client/layouts/main",
    path: "igreja-online",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "client/routes/online-church/online-church": {
    id: "client/routes/online-church/online-church",
    parentId: "client/layouts/main",
    path: "igreja-online/saiba-mais",
    index: void 0,
    caseSensitive: void 0,
    module: route22
  },
  "client/routes/online-church/live-service": {
    id: "client/routes/online-church/live-service",
    parentId: "client/layouts/main",
    path: "igreja-online/cultos-ao-vivo",
    index: void 0,
    caseSensitive: void 0,
    module: route23
  },
  "client/routes/online-church/pastoral-care": {
    id: "client/routes/online-church/pastoral-care",
    parentId: "client/layouts/main",
    path: "igreja-online/atendimento-pastoral",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "client/routes/online-church/pray-request": {
    id: "client/routes/online-church/pray-request",
    parentId: "client/layouts/main",
    path: "igreja-online/pedidos-de-oracao",
    index: void 0,
    caseSensitive: void 0,
    module: route25
  },
  "client/routes/online-church/small-groups": {
    id: "client/routes/online-church/small-groups",
    parentId: "client/layouts/main",
    path: "igreja-online/pequenos-grupos",
    index: void 0,
    caseSensitive: void 0,
    module: route26
  },
  "client/routes/version": {
    id: "client/routes/version",
    parentId: "root",
    path: "version",
    index: void 0,
    caseSensitive: void 0,
    module: route27
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
