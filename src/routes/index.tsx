import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The Explore Uganda site is plain HTML/CSS/JS in public/explore-uganda/.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore Uganda | Discover the Pearl of Africa" },
      { name: "description", content: "Tourism website for Uganda's parks, wildlife and culture." },
      { property: "og:title", content: "Explore Uganda" },
      { property: "og:description", content: "Discover the Pearl of Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/explore-uganda/index.html");
  }, []);
  return <p style={{ padding: 24 }}>Loading Explore Uganda…</p>;
}
