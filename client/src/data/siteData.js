import {
  FiActivity,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiLayers,
  FiPenTool,
  FiPhone,
  FiUsers
} from "react-icons/fi";

export const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "75+", label: "Clients Served" },
  { value: "450+", label: "Interns Trained" },
  { value: "32+", label: "Technologies Used" }
];

export const services = [
  {
    icon: FiCode,
    title: "Website Development",
    text: "Fast, responsive and conversion-focused websites for startups, brands and institutions."
  },
  {
    icon: FiPhone,
    title: "Mobile Apps",
    text: "Polished Android and cross-platform app experiences designed for real business workflows."
  },
  {
    icon: FiBriefcase,
    title: "College Projects",
    text: "Academic project development with documentation, dashboards, reports and deployment guidance."
  },
  {
    icon: FiUsers,
    title: "Internships",
    text: "Structured programs where students learn production skills while building portfolio-grade work."
  },
  {
    icon: FiPenTool,
    title: "UI/UX Design",
    text: "Product strategy, wireframes, design systems and interfaces that feel refined and usable."
  },
  {
    icon: FiCpu,
    title: "Technical Consulting",
    text: "Architecture, stack selection, automation and delivery guidance for growing teams."
  }
];

export const features = [
  "Fast Delivery",
  "Modern Technologies",
  "Dedicated Support",
  "Real World Experience",
  "Scalable Solutions",
  "Affordable Pricing"
];

export const processSteps = ["Discover", "Plan", "Design", "Develop", "Deploy", "Support"];

export const projects = [
  {
    title: "FinFlow Analytics",
    description: "A finance dashboard for founders with KPI tracking, revenue insights and role-based access.",
    stack: ["React", "Node", "MongoDB"],
    image: "linear-gradient(135deg, #0f172a, #2563eb)"
  },
  {
    title: "CampusLink Portal",
    description: "A college management portal with student profiles, assignments and project submissions.",
    stack: ["MERN", "JWT", "Cloud"],
    image: "linear-gradient(135deg, #111827, #06b6d4)"
  },
  {
    title: "NovaCommerce",
    description: "A storefront and order management platform for a direct-to-consumer lifestyle brand.",
    stack: ["React", "Express", "Payments"],
    image: "linear-gradient(135deg, #172554, #38bdf8)"
  },
  {
    title: "MediSync App",
    description: "A responsive healthcare appointment platform with patient flows and admin scheduling.",
    stack: ["React", "API", "MongoDB"],
    image: "linear-gradient(135deg, #020617, #2563eb)"
  },
  {
    title: "SkillForge LMS",
    description: "An internship learning system with tasks, mentor feedback and certificate tracking.",
    stack: ["React", "Node", "Multer"],
    image: "linear-gradient(135deg, #0f172a, #0891b2)"
  },
  {
    title: "OrbitCRM",
    description: "A lean CRM for small teams with leads, pipelines, notes and reporting views.",
    stack: ["MERN", "Charts", "Auth"],
    image: "linear-gradient(135deg, #1e293b, #3b82f6)"
  }
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Startup Founder",
    quote: "Pravexa translated our rough product idea into a launch-ready web app with thoughtful UX and reliable backend delivery."
  },
  {
    name: "Nisha Rao",
    role: "Final Year Student",
    quote: "The internship gave me practical Git, React and API experience. I finished with projects I could confidently show recruiters."
  },
  {
    name: "Rohit Sharma",
    role: "Business Owner",
    quote: "Their team built a clean website and helped us understand what mattered for performance, SEO and lead conversion."
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "₹24,999",
    text: "For portfolios, college projects and early business websites.",
    features: ["5 pages", "Responsive UI", "Basic contact form", "Deployment support"]
  },
  {
    name: "Professional",
    price: "₹74,999",
    text: "For growing teams that need full-stack product delivery.",
    features: ["Custom MERN app", "Admin dashboard", "Database integration", "Priority support"],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    text: "For advanced platforms, integrations and long-term product partnerships.",
    features: ["Architecture planning", "Dedicated team", "Security reviews", "SLA-based support"]
  }
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "A website usually takes 1-3 weeks, while full-stack platforms and apps depend on scope. We share a clear timeline after discovery."
  },
  {
    question: "Do you support college project documentation?",
    answer: "Yes. We can provide project reports, setup guidance, deployment help and explanation sessions based on the selected package."
  },
  {
    question: "Are internships beginner friendly?",
    answer: "Yes. Internships include guided tasks, mentorship and real project practice. Basic programming knowledge is helpful."
  },
  {
    question: "Can you maintain the product after launch?",
    answer: "Yes. We offer support plans for bug fixes, performance improvements, new features and cloud maintenance."
  }
];

export const internshipBenefits = [
  "Real projects",
  "Mentorship",
  "Certificate",
  "Portfolio building",
  "Team collaboration"
];

export const dashboardMetrics = [
  { label: "Active Builds", value: "18", icon: FiActivity },
  { label: "Sprint Velocity", value: "94%", icon: FiLayers },
  { label: "Client NPS", value: "9.6", icon: FiUsers }
];
