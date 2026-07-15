"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    document.body.classList.add("js");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("reveal", "show"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((s) => {
      s.classList.add("reveal");
      obs.observe(s);
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
