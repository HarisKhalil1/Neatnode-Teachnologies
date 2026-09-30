'use client';

import React from 'react';
import { 
  Workflow, 
  Bot, 
  MessageSquare, 
  Cloud, 
  GitBranch, 
  Layers 
} from 'lucide-react';

const EXACT_SERVICES = [
  {
    icon: Workflow,
    title: "AI Automation",
    description: "End-to-end automation connecting business processes with intelligent decision-making. Document processing, workflow orchestration, and operations that adapt.",
    bullets: [
      "Business process automation",
      "Intelligent document processing",
      "Workflow orchestration",
      "System integration"
    ]
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous and semi-autonomous agents that execute complex tasks, make decisions, and interact with your internal systems. Built with guardrails and observability.",
    bullets: [
      "Autonomous task execution",
      "Multi-agent orchestration",
      "Tool use & function calling",
      "Safety & guardrails"
    ]
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Automated customer communication and business workflows powered by the WhatsApp Business API. Support, notifications, lead qualification, and CRM sync.",
    bullets: [
      "WhatsApp Business API",
      "Customer support workflows",
      "Lead qualification",
      "CRM integration"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Production-ready cloud architecture designed for security, scalability, and compliance. Greenfield builds, migrations, and cost-optimized environments.",
    bullets: [
      "Cloud architecture (AWS / GCP)",
      "Infrastructure as Code (Terraform)",
      "Cloud migration",
      "Security & compliance"
    ]
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description: "Continuous delivery, container orchestration, and operational excellence. We help engineering teams ship reliably, recover quickly, and observe everything.",
    bullets: [
      "CI/CD pipelines",
      "Container orchestration (K8s)",
      "Monitoring & observability",
      "Reliability engineering"
    ]
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Full-cycle SaaS engineering from architecture to production. Multi-tenant platforms, subscription billing, and systems built to scale.",
    bullets: [
      "Multi-tenant architecture",
      "Subscription billing",
      "Authentication & authorization",
      "API & developer platforms"
    ]
  }
];

export default function ServicesBento() {
  return (
    <section id="services" className="relative w-full py-24 bg-[#060713] text-white">
      {/* Background ambient lighting in Dark Blue & Cyan */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-mono text-blue-400 mb-3">
            SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            What We Do.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Production-grade engineering across AI, automation, cloud infrastructure, and SaaS development.
          </p>
        </div>

        {/* 6 Exact Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXACT_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-8 bg-[#090d22]/75 border border-blue-500/20 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/60 hover:bg-[#0b1230] flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 group-hover:text-cyan-300 transition-all">
                    <Icon className="w-6 h-6"/>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Exact Bullets */}
                <ul className="space-y-2.5 pt-4 border-t border-blue-500/15">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
