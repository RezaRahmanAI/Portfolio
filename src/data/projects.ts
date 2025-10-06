import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Microservices E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution using ASP.NET Core microservices, Docker, and Kubernetes with fault tolerance, RabbitMQ messaging, and Redis caching achieving 99.9% system availability and 70% improved response time.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    repoUrl: "https://github.com/RezaRahmanAI/ecommerce-microservices",
    technologies: [
      "ASP.NET Core",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "Redis",
      "Azure DevOps",
      "Polly",
      "Clean Architecture",
    ],
    challenge:
      "Building a highly available, fault-tolerant microservices architecture that can handle enterprise-scale traffic with seamless deployments across multiple environments.",
    solution:
      "Architected microservices with Polly's circuit breakers and retry policies for fault tolerance, integrated RabbitMQ for asynchronous messaging, implemented Redis caching to improve response time by 70%, and built automated CI/CD pipelines with Azure DevOps for multi-environment deployments.",
  },
  {
    id: 2,
    title: "Real-Time Collaborative Task Management Platform",
    description:
      "A full-stack real-time collaborative application with role-based access control, JWT authentication, and responsive UI achieving 98% user satisfaction in beta testing with 50% reduced page load time.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    repoUrl: "https://github.com/RezaRahmanAI/task-management",
    technologies: [
      "ASP.NET Core",
      "SignalR",
      "Angular",
      "Entity Framework",
      "SQL Server",
      "JWT",
      "Tailwind CSS",
    ],
    challenge:
      "Creating a real-time collaboration system with enterprise-grade security while maintaining optimal performance and user experience across all devices.",
    solution:
      "Implemented SignalR for real-time bidirectional communication, designed role-based access control with JWT authentication, built responsive UI with Tailwind CSS achieving 98% user satisfaction, and optimized database queries with caching strategies to reduce page load time by 50%.",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management system with admin dashboard, patient management, appointment scheduling, and reporting features, improving operational efficiency by 65% through optimized data workflows and real-time updates.",
    image:
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // demoUrl: "https://github.com/RezaRahmanAI/HMSYSTEM",
    repoUrl: "https://github.com/RezaRahmanAI/HMSYSTEM.git",
    technologies: [
      "C# (.NET Core MVC)",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "Bootstrap",
      "MS SQL Server",
    ],
    challenge:
      "Building a secure, efficient system to manage hospital operations including patient records, appointments, and staff management while ensuring data integrity and real-time updates.",
    solution:
      "Developed a comprehensive MVC application with admin dashboard for centralized management, implemented patient management and appointment scheduling modules, integrated AJAX for real-time updates without page refresh, and optimized data workflows improving operational efficiency by 65%.",
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    description:
      "A platform connecting property sellers with potential buyers, featuring property listings and search filters.",
    image:
      "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // demoUrl: "https://triconproperty.com/",
    repoUrl: "https://github.com/RezaRahmanAI/Real-State-Markateplace.git",
    technologies: ["AngularJS", ".Net Core", "SQL", "Google Maps API"],
    challenge:
      "Optimizing property search with location-based filtering and implementing a responsive image gallery.",
    solution:
      "Integrated Google Maps API with custom markers and developed a lazy-loading image gallery for property photos.",
  },
  // {
  //   id: 5,
  //   title: 'Financial Dashboard',
  //   description: 'An interactive dashboard for financial data visualization and analysis with real-time updates.',
  //   image: 'https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://example.com/demo5',
  //   repoUrl: 'https://github.com/username/financial-dashboard',
  //   technologies: ['React', 'D3.js', '.NET Core', 'SQL'],
  //   challenge: 'Rendering complex financial charts with large datasets while maintaining performance.',
  //   solution: 'Implemented data aggregation and caching strategies, with D3.js for efficient chart rendering.'
  // },
  // {
  //   id: 6,
  //   title: 'Social Media Analytics',
  //   description: 'A platform for brands to analyze their social media performance across different platforms.',
  //   image: 'https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://example.com/demo6',
  //   repoUrl: 'https://github.com/username/social-analytics',
  //   technologies: ['Angular', 'Node.js', 'MongoDB', 'TailwindCSS'],
  //   challenge: 'Integrating with multiple social media APIs and normalizing data for consistent analytics.',
  //   solution: 'Developed a unified data model and adapter pattern for different social media platforms with incremental data fetching.'
  // }
];