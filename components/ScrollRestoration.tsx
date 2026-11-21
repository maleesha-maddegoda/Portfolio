"use client";

import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration to avoid restoring previous scroll positions
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Instantly scroll to the top of the page on refresh or open
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    // If a hash exists in the URL, remove it without triggering a reload so browser doesn't anchor jump
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}
