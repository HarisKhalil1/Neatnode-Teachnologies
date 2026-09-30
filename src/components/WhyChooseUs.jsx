'use client';

import React, { useRef } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  SlidersHorizontal, 
  Target, 
  Eye, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

const WHY_CHOOSE_ITEMS = [
  {
    tag: "01 // CORE_SYSTEMS",
    status: "ENFORCED",
    icon: Cpu,
    title: "Engineering-first approach",
    description: "We don't just wrap APIs. We design systems, architecture, data flows, failure modes, observability, and scaling patterns. Every automation and agent runs on infrastructure we'd trust with our own production workloads."
  },
  {
    tag: "02 // ZERO_TRUST",
    status: "ACTIVE",
    icon: ShieldCheck,
    title: "Security by default",
    description: "Enterprise security isn't an afterthought. We implement least-privilege access, encrypted secrets management, VPC isolation, and compliance-ready controls from day one."
  },
  {
    tag: "03 // GUARDRAILS",
    status: "MONITORED",
    icon: SlidersHorizontal,
    title: "AI with guardrails",
    description: "Agents and automations include structured outputs, confidence scoring, human-in-the-loop escalation, rate limiting, cost controls, and comprehensive observability. You stay in control."
  },
  {
    tag: "04 // IMPACT_DRIVEN",
    status: "MEASURED",
    icon: Target,
    title: "Outcome-oriented",
    description: "We measure success by what changes for your business: hours saved, error rates reduced, deployment frequency increased, incidents resolved faster. No vanity metrics, just measurable impact."
  },
  {
    tag: "05 // AUDITABLE",
    status: "VERIFIED",
    icon: Eye,
    title: "Transparent collaboration",
    description: "No black boxes. You get architecture diagrams, runbooks, source code, documentation, and knowledge transfer. We work alongside your team, not in a silo."
  },
  {
    tag: "06 // COMPOUNDING",
    status: "PARTNER",
    icon: TrendingUp,
    title: "Long-term partnership",
    description: "We are not a project shop. We stay engaged, monitoring, optimizing, evolving your systems as your business grows. Your success compounds over time."
  }
];

function TelemetryCard({ item }) {
  const cardRef = useRef(null);
  const Icon = item.icon;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl p-8 bg-[#090d22]/75 border border-blue-500/20 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-950/60 flex flex-col justify-between"
    >
      {/* Dynamic Cursor Spotlight Aura in Cyan/Blue */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(500px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59, 130, 246, 0.18), transparent 45%)',
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Hardware Header Strip */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-500/15">
            <span className="font-mono text-[11px] text-blue-400 tracking-wider font-semibold">
              {item.tag}
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-[10px] font-mono text-blue-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{item.status}</span>
            </div>
          </div>

          {/* Glowing Icon Well in Blue & Indigo */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-900/40 to-indigo-950/50 border border-blue-500/30 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 group-hover:text-white group-hover:border-blue-400 transition-all duration-300 shadow-lg shadow-blue-950/50">
            <Icon className="w-6 h-6"/>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Ambient Corner Line */}
        <div className="pt-6 mt-6 border-t border-blue-500/10 flex items-center justify-between text-[11px] font-mono text-blue-300/60">
          <span>NEATNODE SPEC</span>
          <span className="group-hover:text-cyan-400 transition-colors">100% OPERATIONAL</span>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-neatnode" className="relative w-full py-28 bg-[#060713] text-white border-t border-blue-500/15 overflow-hidden">
      {/* Ambient background glows in Dark Blue */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400"/>
            <span>ARCHITECTURAL PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Why Engineering Teams <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-300">
              Choose NeatNode.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            We combine deep infrastructure expertise with modern AI capabilities. Resulting in systems that are intelligent, reliable, and built to last.
          </p>
        </div>

        {/* Telemetry 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <TelemetryCard item={item} key={idx}/>
          ))}
        </div>

      </div>
    </section>
  );
}
