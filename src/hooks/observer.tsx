"use client";
import { useState, useEffect } from "react";

const useIntersectionObserver = (targets: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute("data-target");
            if (targetId && targets.includes(targetId)) {
              setActiveSection(targetId);
            }
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold to your preference
      }
    );

    // Observe each target section
    targets.forEach((target) => {
      const element = document.querySelector(`[data-target="${target}"]`);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [targets]);

  return activeSection;
};

export default useIntersectionObserver