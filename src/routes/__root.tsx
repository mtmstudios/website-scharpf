import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCta } from "@/components/floating-cta";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";
import { CookieBanner } from "@/components/cookie-banner";
import { CategoryProvider } from "@/lib/category-context";
import { FooterCategoryBar } from "@/components/footer-category-bar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "E. Scharpf GmbH – Holzbau & Restaurierung Esslingen" },
      {
        name: "description",
        content:
          "Zimmerer & Dachdecker aus Esslingen. Restaurierung, Holzbau, Dach und Fassade – zuverlässig, nachhaltig, seit über 80 Jahren. Jetzt Beratung anfordern.",
      },
      { name: "author", content: "E. Scharpf GmbH" },
      {
        property: "og:title",
        content: "E. Scharpf GmbH – Holzbau & Restaurierung Esslingen",
      },
      {
        property: "og:description",
        content:
          "Zimmerer & Dachdecker aus Esslingen. Restaurierung, Holzbau, Dach und Fassade – zuverlässig, nachhaltig, seit über 80 Jahren. Jetzt Beratung anfordern.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "E. Scharpf GmbH – Holzbau & Restaurierung Esslingen" },
      { name: "twitter:description", content: "Zimmerer & Dachdecker aus Esslingen. Restaurierung, Holzbau, Dach und Fassade – zuverlässig, nachhaltig, seit über 80 Jahren. Jetzt Beratung anfordern." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8a61e9c6-8f1b-4f0c-a875-93ebbe5cd84e/id-preview-696ee65a--e3769cd0-107d-4f29-90a6-281ad4a1b908.lovable.app-1783432613811.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8a61e9c6-8f1b-4f0c-a875-93ebbe5cd84e/id-preview-696ee65a--e3769cd0-107d-4f29-90a6-281ad4a1b908.lovable.app-1783432613811.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,400;0,700;0,800;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <SiteHeader />
          <main className="flex-1 pb-16 md:pb-0">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <FooterCategoryBar />
          <SiteFooter />
        </div>
        <FloatingCta />
        <MobileStickyBar />
        <CookieBanner />
      </CategoryProvider>
    </QueryClientProvider>
  );
}
