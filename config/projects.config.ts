export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "WDG",
    category: "SaaS Casino Solution",
    description:
      "A scalable B2B casino management SaaS platform with real-time data processing, modular architecture, and comprehensive agency dashboard.",
    fullDescription:
      "WDG is a B2B casino management SaaS platform that provides casino operators with a complete solution for managing their operations. The platform combines real-time data processing with a modular architecture, allowing operators to scale their business efficiently while maintaining full control over their operations through an advanced agency dashboard.",
    challenge:
      "Casino operators needed a solution that could handle high-volume transactions in real-time while maintaining data accuracy and security. Existing solutions were either too rigid, lacked scalability, or failed to provide comprehensive agency management features.",
    solution:
      "We built a modular SaaS platform using Next.js for the frontend and Nest.js for the backend. The architecture supports real-time data synchronization across multiple agencies, with role-based access control and a customizable dashboard that adapts to each operator's needs.",
    results: [
      "Successfully deployed to multiple casino operators",
      "Real-time transaction processing under 100ms",
      "99.95% system uptime",
      "Modular architecture enables easy feature expansion",
    ],
    tags: ["Next.js", "TypeScript", "Nest.js", "Tailwind.css", "Shadcn"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Nest.js",
      "Tailwind CSS",
      "Shadcn",
      "PostgreSQL",
      "Redis",
      "WebSocket",
    ],
    year: "2026",
    liveUrl: "https://wdgplays.com/en",
    githubUrl: "",
    images: [
      "/projects/goodfriends1.png",
      "/projects/goodfriends2.png",
      "/projects/goodfriends3.png",
      "/projects/goodfriends4.png",
      "/projects/goodfriends5.png",
      "/projects/goodfriends6.png",
    ],
  },
  {
    id: 2,
    title: "Vitistravel",
    category: "Tour Booking Platform",
    description:
      "A tour booking platform for discovering and reserving travel experiences across Georgia with interactive listings and seamless booking management.",
    fullDescription:
      "Vitistravel is a comprehensive tour booking platform designed to help travelers discover and book unique travel experiences across Georgia. The platform features an intuitive interface for browsing tours, real-time availability checking, and a streamlined booking process that makes trip planning effortless.",
    challenge:
      "The travel market in Georgia lacked a centralized platform where users could easily discover and book tours. Travel agencies struggled with manual booking processes, and travelers had difficulty finding reliable tour options in one place.",
    solution:
      "We developed a full-featured booking platform with Next.js and integrated a real-time availability system. The platform includes interactive tour listings, user reviews, a secure payment gateway, and a dashboard for travel agencies to manage their bookings.",
    results: [
      "Streamlined booking process for 50+ travel agencies",
      "User-friendly interface with smooth animations",
      "Real-time availability updates",
      "Increased tour visibility across Georgia",
    ],
    tags: ["Next.js", "Typescript", "Tailwind.css", "Shadcn", "Framer Motion"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Framer Motion",
      "PostgreSQL",
      "Prisma",
      "Stripe",
    ],
    year: "2025",
    liveUrl: "https://vitistravel.com",
    githubUrl: "",
    images: [
      "/projects/vitistravel.png",
      "/projects/vitistravel2.png",

      "/projects/vitistravel3.png",
      "/projects/vitistravel4.png",

      "/projects/vitistravel5.png",
      "/projects/vitistravel6.png",
    ],
  },
  {
    id: 3,
    title: "Imperialtours",
    category: "Tour Booking Platform",
    description:
      "A high-performance tour booking platform redesigned for the Georgian travel market with fast performance and seamless user experience.",
    fullDescription:
      "Imperialtours is a high-performance tour booking platform that underwent a complete redesign to better serve the Georgian travel market. The platform focuses on delivering fast page loads, smooth interactions, and an intuitive booking flow that converts visitors into customers.",
    challenge:
      "The existing Imperialtours website suffered from slow performance, outdated design, and a complicated booking process that led to high drop-off rates. The client needed a modern solution that would improve user experience and increase conversions.",
    solution:
      "We rebuilt the platform from the ground up using Next.js for optimal performance. The new design features a clean, modern interface, streamlined booking flow, and responsive layout that works seamlessly across all devices.",
    results: [
      "50% faster page load times",
      "Improved mobile responsiveness",
      "Simplified booking process",
      "Modern design that builds trust",
    ],
    tags: ["Next.js", "Typescript", "Tailwind.css", "shadcn", "Framer Motion"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Framer Motion",
      "PostgreSQL",
      "NextAuth",
    ],
    year: "2025",
    liveUrl: "https://imperialtours.ge",
    githubUrl: "",
    images: [
      "/projects/imperialtours.png",
      "/projects/imperialtours2.png",
      "/projects/imperialtours3.png",
      "/projects/imperialtours4.png",
      "/projects/imperialtours5.png",
      "/projects/imperialtours6.png",
    ],
  },
  {
    id: 4,
    title: "Serwish",
    category: "Service Marketplace",
    description:
      "A service marketplace platform with complete frontend redesign enabling users to buy and sell services with real-time features and data visualization.",
    fullDescription:
      "Serwish is a service marketplace platform that connects service providers with customers. The platform underwent a complete frontend redesign to improve usability and add real-time features that enhance the buying and selling experience.",
    challenge:
      "The original platform had a dated interface and lacked real-time communication features. Users found it difficult to navigate listings and communicate with service providers, resulting in low engagement and incomplete transactions.",
    solution:
      "We redesigned the frontend using React and implemented WebSocket connections for real-time messaging and notifications. D3.js was integrated for interactive data visualization, providing users with insights into market trends and service performance.",
    results: [
      "Complete frontend modernization",
      "Real-time messaging system",
      "Interactive data dashboards",
      "Improved user engagement",
    ],
    tags: ["React", "WebSocket", "Node.js", "Typescript"],
    technologies: [
      "React",
      "WebSocket",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Redux",
    ],
    year: "2025",
    liveUrl: "https://serwish.ge",
    githubUrl: "",
    images: [
      "/projects/serwish.png",
      "/projects/serwish2.png",
      "/projects/serwish3.png",
      "/projects/serwish4.png",
      "/projects/serwish5.png",
      "/projects/serwish6.png",
    ],
  },
  {
    id: 5,
    title: "Metrix",
    category: "Construction & Repair Services",
    description:
      "A comprehensive platform connecting customers with professional construction and repair service providers.",
    fullDescription:
      "Metrix is a service platform designed to connect homeowners and businesses with trusted construction and repair professionals. The platform streamlines the process of finding, hiring, and managing service providers for various construction and repair needs, from minor fixes to major renovation projects.",
    challenge:
      "The construction and repair industry lacked a centralized, trustworthy platform where customers could easily find qualified professionals. Service providers struggled with inconsistent work opportunities and inefficient booking processes.",
    solution:
      "We built a full-stack platform using React for the frontend and Laravel for the backend. The system features a user-friendly interface, service provider profiles with reviews, a booking system, and secure payment processing. Customers can post jobs, compare quotes, and hire professionals with confidence.",
    results: [
      "Centralized platform for construction services",
      "Streamlined provider discovery and hiring",
      "Secure booking and payment system",
      "Increased visibility for service professionals",
    ],
    tags: ["React", "Laravel", "Typescript", "Tailwind.css"],
    technologies: [
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "REST API",
    ],
    year: "2025",
    liveUrl: "https://metrix.ge",
    githubUrl: "",
    images: [
      "/projects/metrix.png",
      "/projects/metrix2.png",
      "/projects/metrix3.png",
      "/projects/metrix4.png",
      "/projects/metrix5.png",
      "/projects/metrix6.png",
    ],
  },
] as const;
