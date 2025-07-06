"use client";
import { useEffect, useState, useRef } from "react";

const useActiveSection = (sectionIds: string[], threshold = 0.3) => {
  const [active, setActive] = useState<string | null>(null);
  const sectionsRef = useRef<Record<string, IntersectionObserverEntry>>({});
  const activeRef = useRef<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.querySelector(`[data-target="${id}"]`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update the ref without causing a re-render
          if (entry.isIntersecting) {
            sectionsRef.current[id] = entry;
          } else {
            delete sectionsRef.current[id];
          }

          // Calculate the most visible section
          const visibleEntries = Object.entries(sectionsRef.current)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, e]) => e.isIntersecting)
            .map(([id, entry]) => ({ id, ratio: entry.intersectionRatio }));

          if (!visibleEntries.length) return;

          visibleEntries.sort((a, b) => b.ratio - a.ratio);
          const mostVisible = visibleEntries[0]?.id;

          // Only update state if there's a change
          if (mostVisible && mostVisible !== activeRef.current) {
            activeRef.current = mostVisible;
            setActive(mostVisible);
          }
        },
        { threshold }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, threshold]);

  return active;
};

export default useActiveSection;