export const neatNodeData = {
  brand: {
    name: "NeatNode",
    tag: "TECHNOLOGIES",
    domain: "neatnode.tech",
    badge: "PRODUCTION-READY · SECURITY-FIRST · SCALABLE ARCHITECTURE",
    rating: "4.9/5",
    ratingLabel: "Trusted by high-growth engineering teams worldwide",
  },
  
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "About", href: "#about" },
  ],

  hero: {
    headline: "Automate What Slows You Down.",
    headlineGradient: "Build What Scales.",
    description:
      "NeatNode builds AI agents, intelligent automations, and production-ready cloud infrastructure that help businesses run smarter, faster, and more reliably.",
    primaryCta: { text: "Build with NeatNode", href: "#contact" },
    secondaryCta: { text: "Explore our capabilities", href: "#services" },
  },

  trustMarquee: [
    "Autonomous AI Agents",
    "Production Cloud Infrastructure",
    "Custom LLM Pipelines",
    "Enterprise Workflow Automation",
    "Kubernetes & Distributed Systems",
    "Private VPC AI Deployment",
    "End-to-End API Architecture",
    "Zero-Downtime Reliability",
  ],

  services: [
    {
      id: "ai-agents",
      badge: "FLAGSHIP CAPABILITY",
      title: "AI Agents & Autonomous Systems",
      description:
        "Custom autonomous agents engineered for production workflows. From multi-agent swarms to task-specific copilots that plan, execute, and verify operations with contextual memory and tool execution.",
      metric: "Sub-Second Response",
      features: [
        "Multi-agent swarm coordination",
        "Deterministic tool calling & function execution",
        "Long-term vector memory & enterprise RAG",
        "Private VPC deployment for proprietary data",
      ],
      colSpan: "md:col-span-2",
    },
    {
      id: "workflow-automation",
      badge: "EFFICIENCY",
      title: "Intelligent Process Automation",
      description:
        "Eliminate operational drag. We replace fragmented manual tasks, legacy integrations, and data entry bottlenecks with resilient, event-driven pipelines.",
      metric: "-85% Manual Overhead",
      features: [
        "Event-driven webhook pipelines",
        "Self-healing ETL data workflows",
        "Legacy enterprise system bridges",
      ],
      colSpan: "md:col-span-1",
    },
    {
      id: "cloud-infrastructure",
      badge: "RELIABILITY",
      title: "Cloud Infrastructure & DevOps",
      description:
        "Zero-downtime foundations designed to scale effortlessly under peak enterprise workloads.",
      metric: "99.99% Uptime SLA",
      features: [
        "Kubernetes & container orchestration",
        "Multi-region fault-tolerant clusters",
        "Automated CI/CD security gates",
      ],
      colSpan: "md:col-span-1",
    },
    {
      id: "enterprise-engineering",
      badge: "ENTERPRISE GRADE",
      title: "Production Engineering & Architecture",
      description:
        "Full-cycle technical delivery from architectural roadmaps to production deployment. High-concurrency APIs, resilient distributed databases, and security-first engineering.",
      metric: "SOC2-Ready Protocols",
      features: [
        "High-throughput microservices architecture",
        "Fine-grained RBAC & cryptographic audits",
        "Full telemetry observability & tracing",
      ],
      colSpan: "md:col-span-2",
    },
  ],

  solutions: [
    {
      sector: "FinTech & Operations",
      problem: "Slow reconciliation & repetitive manual data audits",
      solution: "Autonomous financial reconciliation swarms with verifiable audit logging",
    },
    {
      sector: "Healthcare & MedTech",
      problem: "Strict compliance boundaries with unstructured patient data",
      solution: "HIPAA-aligned local LLM inference engines and automated clinical note parsing",
    },
    {
      sector: "E-Commerce & Logistics",
      problem: "Complex supply-chain bottlenecks and delayed inventory routing",
      solution: "Predictive fulfillment agents and automated vendor sync microservices",
    },
  ],

  footer: {
    tagline: "High-velocity AI systems. Zero operational friction.",
    copyright: "© 2026 NeatNode Technologies. All rights reserved.",
  },
};

// Also export as default and uppercase alias for broad compatibility
export const NEATNODE_CONTENT = neatNodeData;
export default neatNodeData;
