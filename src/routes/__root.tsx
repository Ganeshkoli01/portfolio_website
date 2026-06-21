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

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="mesh-bg" />
      <div className="grain" />
      <div className="relative max-w-lg text-center">
        <div className="relative mx-auto mb-6 h-40 w-40">
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-[var(--cyan)] via-[var(--violet)] to-[var(--pink)] opacity-40 blur-3xl" />
          <div className="relative grid h-full w-full place-items-center rounded-full bg-card/60 backdrop-blur border border-border">
            <span className="font-display text-6xl font-bold gradient-text animate-bounce">
              404
            </span>
          </div>
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground">
          Looks like you're lost in space
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're chasing drifted off into a black hole. Let's get you back to safer orbit.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan)] via-[var(--violet)] to-[var(--pink)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            ← Back to Home
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
      { title: "Ganesh Koli — CS Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ganesh Koli, a Computer Science Engineering student and full-stack web developer building modern web experiences with the MERN stack.",
      },
      { name: "author", content: "Ganesh Koli" },
      { property: "og:title", content: "Ganesh Koli — CS Engineer & Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Ganesh Koli, a Computer Science Engineering student and full-stack web developer building modern web experiences with the MERN stack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
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
    <html lang="en">
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
