'use client';

import React from 'react';
import { Server, Database, Layers, Cloud, Terminal, Cpu, ShieldCheck, Zap } from 'lucide-react';

const EXACT_NEATNODE_STACK = [
  { name: 'Kubernetes (K8s)', label: 'Orchestration', icon: Server },
  { name: 'TypeScript', label: 'Core Language', icon: Terminal },
  { name: 'PostgreSQL', label: 'Primary DB', icon: Database },
  { name: 'Redis', label: 'High-Speed Cache', icon: Zap },
  { name: 'Terraform', label: 'Infra as Code', icon: Layers },
  { name: 'Amazon Web Services', label: 'Cloud Architecture', icon: Cloud },
  { name: 'Next.js & React', label: 'SaaS Frontend', icon: Cpu },
  { name: 'SOC 2 & HIPAA', label: 'Compliance Baseline', icon: ShieldCheck },
];

export default function TrustMarquee() {
  return (
    <section className="relative w-full py-12 bg-[#060713] border-y border-blue-500/15 overflow-hidden">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060713] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060713] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-mono text-blue-400">
          PROVEN ENTERPRISE STACK · NO EXPERIMENTAL FLUFF · BUILT TO LAST
        </p>
      </div>

      <div className="flex w-full overflow-hidden select-none">
        <div className="flex items-center gap-8 shrink-0 animate-marquee py-2">
          {[...EXACT_NEATNODE_STACK, ...EXACT_NEATNODE_STACK, ...EXACT_NEATNODE_STACK, ...EXACT_NEATNODE_STACK].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-950/25 border border-blue-500/20 backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:bg-blue-900/35 group"
              >
                <Icon className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-wide">{item.name}</span>
                </div>
                <span className="text-[10px] font-mono text-blue-300/60 ml-1 border-l border-blue-500/20 pl-2">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
