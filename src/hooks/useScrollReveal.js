import { useEffect } from "react";

// Attach this once near the root (Layout). It re-scans for ".reveal"
// elements whenever `dep` changes (e.g. route path), so newly mounted
// pages get their entrance animation too.
export function useScrollReveal(dep) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    // Wait a tick so freshly-routed pages exist in the DOM first.
    const timeoutId = window.setTimeout(() => {
      document
        .querySelectorAll(".reveal:not(.in-view)")
        .forEach((el) => observer.observe(el));
    }, 60);

    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [dep]);
}
