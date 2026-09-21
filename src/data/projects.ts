import { Project } from '../types';
import { withBasePath } from '../utils/assetPath';

export const projects: Project[] = [
  {
    id: 1,
    title: "Tricon Properties",
    description:
      "Responsive real estate site highlighting premium rental communities with easy navigation, community highlights, and guided steps for prospective residents.",
    image: withBasePath("project-images/tricon-properties.png"),
    repoUrl: "https://triconproperty.com/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Designing a lifestyle-focused property site that balances visuals with clear leasing information while keeping performance high on mobile.",
    solution:
      "Built a lightweight React experience with structured sections for amenities, resident support, and leasing steps, pairing animation cues with optimized assets for fast loads across devices.",
  },

  {
    id: 3,
    title: "Prime Housing",
    description:
      "Marketing site for a housing developer with project spotlights, investment highlights, and an emphasis on trust-building content for buyers.",
    image: withBasePath("project-images/prime-housing.png"),
    repoUrl: "https://primehousingraj.com/",
    technologies: ["React", "JavaScript", "SCSS", "AOS"],
    challenge:
      "Presenting multiple residential projects with clear value propositions while keeping calls-to-action prominent.",
    solution:
      "Created modular sections for hero messaging, amenities, and investment benefits, paired with scroll-triggered reveals and persistent inquiry prompts to guide visitors.",
  },
  {
    id: 4,
    title: "Moto Power",
    description:
      "Product-focused site for a lubricants brand featuring flagship offerings, certification highlights, and distributor contact options.",
    image: withBasePath("project-images/moto-power.png"),
    repoUrl: "https://motopowerlub.com/",
    technologies: ["Vue", "TypeScript", "Tailwind CSS", "GSAP"],
    challenge:
      "Delivering a brand-heavy presentation that still loads quickly and keeps product details discoverable on smaller screens.",
    solution:
      "Implemented optimized image delivery, interactive product tiles, and a mobile-first layout so visitors can quickly scan specifications and reach sales teams.",
  },
  {
    id: 2,
    title: "Arza Mart",
    description:
      "Production e-commerce platform built end-to-end for live customer traffic, with a focused storefront, reliable caching, and ad-attribution insight.",
    kind: "arza-mart",
    technologies: ["Angular 18", "ASP.NET Core 8", "Tailwind CSS", "IIS", "SQL Server"],
    challenge:
      "Shipping the customer storefront and backend together while replacing conflicting caching mechanisms and making incomplete orders visible.",
    solution:
      "Designed AppCache around a Singleton ConcurrentDictionary and built abandoned-lead and incomplete-order tracking with UTM and fbclid attribution.",
  },
];
