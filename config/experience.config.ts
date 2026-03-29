export interface ExperienceDetail {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  link: string;
  achievements: string[];
  responsibilities: string[];
  companyDescription: string;
}

export const experiences: ExperienceDetail[] = [
  {
    period: "2024 - 2026",
    role: "React.js Developer",
    company: "WDG",
    location: "Georgia",
    description:
      "Developed casino SaaS solution at WDG. Built and maintained frontend features for white-label casino platforms, focusing on performance and user engagement.",
    companyDescription:
      "WDG is a development agency specializing in SaaS solutions for the gaming and casino industry.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "WebSockets",
      "REST APIs",
    ],
    link: "https://wdgplays.com/en",
    responsibilities: [
      "Developed casino SaaS solution for white-label platforms",
      "Built and maintained frontend features focused on performance",
      "Implemented user engagement tools and real-time features",
    ],
    achievements: [
      "Successfully contributed to casino SaaS platform development",
      "Delivered high-performance frontend for gaming solutions",
    ],
  },
  {
    period: "Apr 2024 - Oct 2024",
    role: "React Developer",
    company: "Vitistravel",
    location: "Tbilisi, Georgia (Remote)",
    description:
      "Created a custom travel site with Next.js and Express. Used Prisma and MySQL to build dynamic tour listings and contact forms. Increased client engagement by improving site UX and speed.",
    companyDescription:
      "Vitistravel is a tours and travel services platform offering seamless booking experiences for travel services in Georgia.",
    technologies: [
      "Next.js",
      "Express",
      "Prisma",
      "MySQL",
      "Zustand",
      "React",
      "TypeScript",
    ],
    link: "https://vitistravel.com",
    responsibilities: [
      "Built custom travel site with Next.js and Express",
      "Created dynamic tour listings and contact forms using Prisma and MySQL",
      "Improved site UX and speed to increase client engagement",
    ],
    achievements: [
      "Successfully delivered complete tours platform under contract",
      "Increased client engagement through UX and performance improvements",
    ],
  },
  {
    period: "Feb 2023 - Jan 2024",
    role: "React Developer",
    company: "Metrix",
    location: "Georgia (Remote)",
    description:
      "Built a repair service site using Next.js and REST APIs. Designed responsive layouts with TailwindCSS. Delivered fast-loading pages that improved customer booking flow.",
    companyDescription:
      "Metrix is a repair and rental service platform offering customer booking solutions.",
    technologies: [
      "Next.js",
      "REST APIs",
      "TailwindCSS",
      "TypeScript",
      "Redux.js",
      "React",
    ],
    link: "https://metrix.ge",
    responsibilities: [
      "Built repair service site using Next.js and REST APIs",
      "Designed responsive layouts with TailwindCSS",
      "Delivered fast-loading pages to improve customer booking flow",
    ],
    achievements: [
      "Successfully modernized repair service platform",
      "Improved customer booking flow through performance optimization",
    ],
  },
  {
    period: "Jun 2021 - May 2022",
    role: "Frontend Developer",
    company: "VipTrade",
    location: "Tbilisi, Georgia (On-site)",
    description:
      "Built and maintained the frontend of a custom CRM platform using React.js and TailwindCSS. Worked closely with the backend team to integrate real-time data and user workflows. Improved UI consistency and made the CRM more responsive and user-friendly across devices.",
    companyDescription:
      "VipTrade (LLC Trade Holding) is a trading and commerce platform operating in Georgia.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "JavaScript",
      "REST APIs",
      "CSS",
      "HTML",
    ],
    link: "https://viptrade.ge",
    responsibilities: [
      "Built and maintained custom CRM platform frontend",
      "Integrated real-time data and user workflows with backend team",
      "Improved UI consistency and cross-device responsiveness",
    ],
    achievements: [
      "Made CRM more user-friendly and responsive across devices",
      "Successfully delivered frontend for business operations",
    ],
  },
] as const;
