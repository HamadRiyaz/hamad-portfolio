import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const PORTFOLIO_URL = "/portfolio/index.html";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { httpEquiv: "refresh", content: "0; url=/portfolio/index.html" },
      { title: "Hamad Riyaz — Python Developer & Web Scraping Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Hamad Riyaz: Python development, web scraping, data analysis and frontend engineering projects.",
      },
      {
        property: "og:title",
        content: "Hamad Riyaz — Python Developer & Web Scraping Specialist",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Hamad Riyaz: Python development, web scraping, data analysis and frontend engineering projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PORTFOLIO_URL }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace(PORTFOLIO_URL);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <p className="text-sm text-muted-foreground">
        Opening the portfolio&hellip;{" "}
        <a className="underline" href={PORTFOLIO_URL}>
          Continue
        </a>
      </p>
    </div>
  );
}
