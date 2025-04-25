"use client";
import { useEffect, useState } from "react";

const useActiveSection = (sectionIds: string[], threshold = 0.3) => {
  const [active, setActive] = useState<string | null>(null);
  const [sections, setSections] = useState<Record<string, IntersectionObserverEntry>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.querySelector(`[data-target="${id}"]`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // setSections((prev: Record<string, IntersectionObserverEntry>) => {
          //   return entry.isIntersecting
          //     ? { ...prev, [id]: entry }
          //     : { ...prev, [id]: undefined };
          // });
          setSections((prev: Record<string, IntersectionObserverEntry>) => {
            const updated = { ...prev };
            if (entry.isIntersecting) {
              updated[id] = entry;
            } else {
              delete updated[id];
            }
            return updated;
          });
        },
        { threshold }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, threshold]);

  useEffect(() => {
    const visibleEntries = Object.entries(sections)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, entry]) => entry && entry.isIntersecting)
      .map(([id, entry]) => ({ id, ratio: entry!.intersectionRatio }));

    if (!visibleEntries.length) return;

    // Sort by intersection ratio (most visible first)
    visibleEntries.sort((a, b) => b.ratio - a.ratio);

    const mostVisible = visibleEntries[0];
    if (mostVisible && mostVisible.id !== active) {
      setActive(mostVisible.id);
    }
  }, [active, sections]);

  return active;
};

export default useActiveSection;