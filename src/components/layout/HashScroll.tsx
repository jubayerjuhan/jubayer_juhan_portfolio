"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scrolls to hash targets when landing on the home page from other routes */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const scrollToHash = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    };

    requestAnimationFrame(scrollToHash);
  }, [pathname]);

  return null;
}
