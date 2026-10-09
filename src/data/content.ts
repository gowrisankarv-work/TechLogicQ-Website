import {
  BookOpen,
  BriefcaseBusiness,
  Brain,
  Building2,
  ClipboardCheck,
  Cloud,
  Code2,
  Compass,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  GraduationCap,
  Hammer,
  Handshake,
  Layers,
  LayoutTemplate,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  QrCode,
  RefreshCw,
  Rocket,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

export const coreOfferings: Feature[] = [
  {
    icon: Code2,
    title: "Technical Skills & Development Training",
    description: "Build practical technical skills through structured, hands-on learning.",
    href: "/training",
  },
  {
    icon: Globe,
    title: "Web Development Services",
    description: "Build modern, responsive and scalable websites and web applications.",
    href: "/services",
  },
  {
    icon: GraduationCap,
    title: "Academy & Career-Focused Learning",
    description: "Learn industry-relevant technologies through practical projects.",
    href: "/training", // was /academy (Academy page hidden for now)
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Hiring & Job Updates",
    description: "Discover career opportunities, hiring updates and industry openings.",
    href: "/careers",
  },
];

export const philosophySteps: Feature[] = [
  { icon: BookOpen, title: "Learn", description: "Gain new technical and professional skills." },
  { icon: Hammer, title: "Build", description: "Apply your knowledge through real-world projects." },
  { icon: TrendingUp, title: "Grow", description: "Turn your skills into career opportunities." },
];

export const whyPoints: Feature[] = [
  {
    icon: Wrench,
    title: "Practical learning",
    description: "Sessions centre on writing code and solving problems, not just theory.",
  },
  {
    icon: Rocket,
    title: "Real-world projects",
    description: "Put each concept to work in projects modelled on everyday industry tasks.",
  },
  {
    icon: Layers,
    title: "Industry-oriented technologies",
    description: "Work with tools and frameworks that teams use in production today.",
  },
  {
    icon: Target,
    title: "Career-focused approach",
    description: "Learning paths are shaped around the skills entry-level roles ask for.",
  },
  {
    icon: UserRound,
    title: "Mentor guidance",
    description: "Get guidance and feedback as you learn, build and review your work.",
  },
  {
    icon: RefreshCw,
    title: "Continuous learning",
    description: "Keep up with a field that changes quickly through ongoing learning.",
  },
  {
    icon: Sparkles,
    title: "Professional development",
    description: "Build the communication and workplace habits that go with technical skill.",
  },
];

export const aboutFocus: Feature[] = [
  {
    icon: Code2,
    title: "Industry-ready technical skills",
    description: "Skills that match what technology teams work with day to day.",
  },
  {
    icon: Hammer,
    title: "Practical project experience",
    description: "Hands-on projects that turn concepts into working software.",
  },
  {
    icon: Compass,
    title: "Career-focused learning",
    description: "Learning paths designed with your first professional role in mind.",
  },
  {
    icon: Globe,
    title: "Web development",
    description: "Modern websites and web applications for businesses and individuals.",
  },
  {
    icon: TrendingUp,
    title: "Professional growth",
    description: "Support for the habits and skills that help careers move forward.",
  },
  {
    icon: Handshake,
    title: "Connecting students with opportunities",
    description: "Sharing job openings, internships and hiring updates as we find them.",
  },
];

export const values: Feature[] = [
  { icon: Wrench, title: "Practical Learning", description: "We learn by doing." },
  { icon: RefreshCw, title: "Continuous Improvement", description: "Every day is a chance to get better." },
  { icon: Lightbulb, title: "Innovation", description: "We stay curious about new ideas and tools." },
  { icon: TrendingUp, title: "Professional Growth", description: "Skills and mindset grow together." },
  { icon: Users, title: "Collaboration", description: "We build and learn as a team." },
  { icon: Target, title: "Career Readiness", description: "Preparing for the professional world." },
];

export type TechCategory = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export const techCategories: TechCategory[] = [
  {
    icon: FileCode2,
    title: "Programming",
    description: "Core languages and problem-solving fundamentals every developer needs.",
    items: ["Java", "Python", "C"],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Server-side development and API design across Java and Python/JS ecosystems.",
    items: ["Spring", "Spring Boot", "Django", "Node.js"],
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    description: "Responsive, accessible user interfaces built with modern frameworks.",
    items: ["HTML", "CSS", "JavaScript", "React", "Angular", "Next.js", "TypeScript"],
  },
  {
    icon: Database,
    title: "Database",
    description: "Relational, document and in-memory data modelling for fast applications.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis (Caching)"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Version control, containers and delivery pipelines used to ship software.",
    items: ["Git/GitHub", "Linux", "Docker", "Jenkins", "CI/CD", "AWS"],
  },
  {
    icon: Brain,
    title: "AI & Modern Technologies",
    description: "Practical, hands-on training in building applications with modern AI.",
    items: ["Generative AI", "LLMs", "Ollama", "RAG"],
  },
];

export type Course = {
  title: string;
  description: string;
  topics: string[];
  level: "Beginner" | "Intermediate" | "Beginner to Intermediate";
  duration: string;
};

// Durations are placeholders until the course schedule is finalised. This page (Academy) is
// currently hidden (see src/app/(site)/_academy), so this copy is not yet visitor-facing.
const DURATION_TBA = "Contact us for dates";

export const courses: Course[] = [
  {
    title: "Java Backend Development",
    description: "Learn to build reliable server-side applications with Java.",
    topics: ["Core Java & OOP", "Collections & Streams", "JDBC", "REST APIs"],
    level: "Beginner to Intermediate",
    duration: DURATION_TBA,
  },
  {
    title: "Full Stack Development",
    description: "Connect frontend, backend and database into complete applications.",
    topics: ["React", "Node.js / Spring Boot", "Databases", "Deployment"],
    level: "Intermediate",
    duration: DURATION_TBA,
  },
  {
    title: "Web Development",
    description: "Create responsive, accessible websites from the ground up.",
    topics: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    level: "Beginner",
    duration: DURATION_TBA,
  },
  {
    title: "Database & SQL",
    description: "Design data models and write efficient queries.",
    topics: ["SQL Fundamentals", "Joins & Indexes", "MySQL / PostgreSQL", "MongoDB Basics"],
    level: "Beginner",
    duration: DURATION_TBA,
  },
  {
    title: "Spring Boot",
    description: "Build production-style REST services with Spring Boot.",
    topics: ["Spring Core", "Spring Data JPA", "REST Controllers", "Validation & Testing"],
    level: "Intermediate",
    duration: DURATION_TBA,
  },
  {
    title: "AI & Generative AI",
    description: "Understand LLMs and build practical AI-powered applications.",
    topics: ["Generative AI Basics", "Prompting", "RAG", "AI Application Design"],
    level: "Beginner to Intermediate",
    duration: DURATION_TBA,
  },
  {
    title: "Git & GitHub",
    description: "Version control and collaboration workflows used by real teams.",
    topics: ["Git Basics", "Branching & Merging", "Pull Requests", "GitHub Workflows"],
    level: "Beginner",
    duration: DURATION_TBA,
  },
  {
    title: "Cloud & DevOps",
    description: "Ship and run applications with modern cloud and DevOps tools.",
    topics: ["AWS Fundamentals", "Docker", "CI/CD Pipelines", "Monitoring Basics"],
    level: "Intermediate",
    duration: DURATION_TBA,
  },
];

export const services: Feature[] = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional websites that present your business clearly and build trust.",
  },
  {
    icon: UserRound,
    title: "Portfolio Websites",
    description: "Personal sites that showcase your work, skills and experience.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description: "Focused, fast pages built for a single campaign, product or event.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Applications",
    description: "Interactive, responsive web apps built with modern frameworks.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description: "Online stores with product catalogues, carts and checkout flows.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Updates, fixes and improvements to keep your site running smoothly.",
  },
  {
    icon: GitBranch,
    title: "Custom Software Solutions",
    description: "Software tailored to the specific way your team works.",
  },
  {
    icon: Building2,
    title: "ERP/CRM Tool for Business",
    description: "Custom ERP and CRM tools that bring sales, operations and customer data into one system.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, content and campaign support that helps the right people find your business online.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "End-to-end web development, from architecture and APIs to deployment and performance.",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    description: "Native Android apps built for performance and a smooth user experience.",
  },
];

export type Product = {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  /** schema.org applicationCategory for JSON-LD structured data. */
  applicationCategory: string;
};

export const products: Product[] = [
  {
    slug: "evalora",
    icon: ClipboardCheck,
    name: "Evalora",
    tagline:
      "A secure online assessment and coding exam platform for colleges, schools, placement cells and training institutes — with automatic scoring and clear reports.",
    description:
      "Evalora gives institutions a secure way to run online assessments and coding exams without the manual effort. Build tests, schedule secure timed exams, and let students code directly in the platform across six languages — including Java, Python, C and JavaScript. Every submission is scored automatically, so staff get clear, exportable reports instead of hours of manual checking. Each institution gets its own private workspace, keeping question banks, exams and results separate and secure.",
    applicationCategory: "EducationalApplication",
    highlights: [
      "Secure, timed online exams with anti-cheating safeguards",
      "Coding exams in six languages, scored automatically",
      "Clear, exportable reports for staff and placement cells",
      "Built for colleges, schools, placement cells and training institutes",
      "Your institution's own private, secure workspace",
    ],
  },
  {
    slug: "loyaltyhub",
    icon: QrCode,
    name: "LoyaltyHub",
    tagline:
      "One secure QR code for every shop. Customers earn automatically, shop owners reward repeat visits without plastic cards or spreadsheets.",
    description:
      "LoyaltyHub replaces plastic punch cards with one secure digital loyalty card. Customers sign in once and carry a single QR code for every shop they love. At checkout, the shop scans the code and points are added automatically, with no paper cards to lose and no manual tracking. Shop owners get a complete loyalty console: set your own earning rules, create rewards, add your logo and brand colors, and see customers, transactions and redemptions in one place. Each QR code is single-use and refreshes automatically, so it can't be copied or reused.",
    applicationCategory: "BusinessApplication",
    highlights: [
      "One secure, single-use QR code per customer",
      "Automatic point tracking at checkout, no manual entry",
      "Custom earning rules and rewards you control",
      "Your own branding — logo and colors on every card",
      "A console to see customers, transactions and redemptions in one place",
    ],
  },
];

export type FAQ = { question: string; answer: string };

export const servicesFaqs: FAQ[] = [
  {
    question: "What does the process look like once I get in touch?",
    answer:
      "We start with a short discovery conversation about your goals, audience and requirements, then move into design and development. You'll see progress along the way before we launch and hand things over.",
  },
  {
    question: "Do you work with businesses outside Chennai?",
    answer:
      "Yes. Most of our work is done remotely, so we work with businesses, institutions and organizations anywhere, with calls and updates scheduled around your timezone.",
  },
  {
    question: "Can you maintain a website or system you didn't originally build?",
    answer:
      "In many cases, yes — get in touch with details about your current setup and we'll let you know honestly whether we're a good fit to take it on.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, through our Website Maintenance service — updates, fixes and improvements to keep your site or application running smoothly after launch.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Share a few details through the contact form about what you need — the type of project, rough scope and timeline — and we'll get back to you with next steps.",
  },
];

export const trainingFaqs: FAQ[] = [
  {
    question: "Do I need prior programming experience to start?",
    answer:
      "No. Our programming fundamentals track (Java, Python, C) is designed for beginners, and we shape the learning path around your starting point and goals.",
  },
  {
    question: "Are sessions online, in-person, or both?",
    answer:
      "Get in touch and let us know your preference and location — we'll confirm what's currently available for your track.",
  },
  {
    question: "Will I work on real projects during training?",
    answer:
      "Yes. Our approach is hands-on by design: every track includes practical projects modelled on real industry tasks, not just theory.",
  },
  {
    question: "Can training help me prepare for a specific job role?",
    answer:
      "Yes. Tell us about the role or domain you're targeting and we'll help you find a learning path that fits, combining the right languages, frameworks and tools.",
  },
  {
    question: "Do you share job openings with students after training?",
    answer:
      "We share job openings, internships and hiring updates on our Careers page as we find them, though we don't guarantee placement or employment.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Kavin Adithya SR",
    role: "CEO",
    bio: "Kavin sets the direction for TechLogicQ, bringing together the company's two sides — practical, career-focused training for students and modern digital solutions for businesses. He's focused on building a company that takes both halves of that mission seriously.",
  },
  {
    name: "Purusothaman S",
    role: "COO",
    bio: "Purusothaman runs the day-to-day at TechLogicQ, from shaping how training programmes are delivered to keeping client projects and partnerships on track. He's focused on making sure what TechLogicQ promises — hands-on learning and reliable delivery — holds up in practice.",
  },
  {
    name: "Gowrisankar V",
    role: "CTO",
    bio: "Gowrisankar leads the technical side of TechLogicQ — the architecture behind products like Evalora and LoyaltyHub, and the engineering standards behind every client project. He's focused on making sure the technology TechLogicQ builds, and teaches, holds up in the real world.",
  },
  {
    name: "Srisanjay T",
    role: "MD",
    bio: "Srisanjay oversees TechLogicQ's overall growth, from how the company serves students through training to how it serves businesses through services and products. He's focused on steady, sustainable growth that keeps both sides of TechLogicQ's mission moving forward together.",
  },
];
