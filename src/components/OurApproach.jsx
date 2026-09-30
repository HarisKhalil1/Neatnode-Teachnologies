'use client';

import React from 'react';
import { Search, Compass, Wrench, Rocket, Sparkles, ArrowRight } from 'lucide-react';

const APPROACH_STEPS = [
  {
    step: "01",
    tag: "PHASE_01 // INTAKE",
    icon: Search,
    title: "Discover & Assess",
    description: "We map your current workflows, systems, and pain points. We identify high-impact automation and infrastructure opportunities with clear ROI projections.",
    deliverable: "System Audit & ROI Roadmap"
  },
  {
    step: "02",
    tag: "PHASE_02 // ARCHITECTURE",
    icon: Compass,
    title: "Design & Plan",
    description: "Architecture design with clear specs, technology choices, security controls, scaling strategy, and phased implementation roadmap with milestones.",
    deliverable: "RFC Specs & Security Topology"
  },
  {
    step: "03",
    tag: "PHASE_03 // EXECUTION",
    icon: Wrench,
    title: "Build & Validate",
    description: "Iterative development with regular demos and continuous feedback. Automated testing, security reviews, and staging validation before anything touches production.",
    deliverable: "Staging Builds & Automated Tests"
  },
  {
    step: "04",
    tag: "PHASE_04 // DEPLOYMENT",
    icon: Rocket,
    title: "Deploy & Operate",
    description: "Production deployment with comprehensive monitoring, observability, runbooks, and team training. Ongoing optimization to ensure systems perform at scale.",
    deliverable: "Live Cluster & 24/7 Telemetry"
  }
];

export default function OurApproach() {
  return (
    <section id="approach" className="relative w-full py-28 bg-[#060713] text-white border-t border-blue-500/15 overflow-hidden">
      {/* Background radial ambient aura in Dark Blue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400"/>
            <span>ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Our Approach.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            A disciplined, engineering-led methodology that takes systems from concept to reliable production without guesswork.
          </p>
        </div>

        {/* CONNECTED PIPELINE CONTAINER */}
        <div className="relative">
          
          {/* Glowing Circuit Connector Line (Visible on Desktop across cards) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-blue-500/20 via-cyan-400/60 to-blue-500/20 z-0">
            {/* Animated neon signal beam running through the wire */}
            <div className="w-24 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px] animate-pulse" />
          </div>

          {/* 4 Phased Interactive Step Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {APPROACH_STEPS.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl p-7 bg-[#090d22]/75 border border-blue-500/20 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 hover:border-blue-400/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-950/60"
                >
                  <div>
                    {/* Top Step Number Ring & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      {/* Illuminated Neon Waypoint Node in Electric Cyan/Blue */}
                      <div className="w-12 h-12 rounded-2xl bg-[#060713] border-2 border-blue-500/40 flex items-center justify-center font-mono font-extrabold text-sm text-blue-300 group-hover:border-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                        {phase.step}
                      </div>
                      <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-400 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-4 h-4"/>
                      </div>
                    </div>

                    {/* Phase Technical Subheader */}
                    <span className="font-mono text-[10px] text-blue-400 tracking-wider block mb-2 font-semibold">
                      {phase.tag}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                      {phase.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                      {phase.description}
                    </p>
                  </div>

                  {/* Core Deliverable Badge */}
                  <div className="pt-4 border-t border-blue-500/15 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gray-400">OUTPUT</span>
                    <span className="text-[11px] font-mono text-blue-300 font-semibold group-hover:text-cyan-300 transition-colors">
                      {phase.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Technical Assurance Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-blue-950/25 border border-blue-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs sm:text-sm font-medium text-gray-300">
              Typical turnaround from Phase 01 discovery to technical scoping: <strong className="text-white">Under 48 Hours</strong>
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 hover:text-white transition-colors"
          >
            <span>Review deployment schedule</span>
            <ArrowRight className="w-3.5 h-3.5"/>
          </a>
        </div>

      </div>
    </section>
  );
}
