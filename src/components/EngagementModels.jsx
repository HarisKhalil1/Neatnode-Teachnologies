'use client';

import React from 'react';
import { Package, Hammer, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function EngagementModels() {
  return (
    <section id="solutions" className="relative w-full py-28 bg-[#060713] text-white border-t border-blue-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400"/>
            <span>ENGAGEMENT FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Two Ways to Work With Us.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Either way you get principal-level engineering — the difference is what you own and what we keep running.
          </p>
        </div>

        {/* Products vs Projects Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* OPTION 1: PRODUCTS */}
          <div className="group relative rounded-3xl p-8 sm:p-10 bg-[#090d22]/75 border border-blue-500/25 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-950/50">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Package className="w-6 h-6"/>
                </div>
                <span className="font-mono text-xs text-blue-300 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20">
                  PRE-HARDENED
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Products — platforms we build.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                Platforms we build once and run for many. Pre-hardened and production-tested by our own team, then adapted to your systems instead of starting from zero.
              </p>
              
              <ul className="space-y-3.5 mb-8">
                {[
                  "Pre-hardened, maintained, and versioned by us",
                  "Adaptable to your stack and workflows",
                  "Ongoing roadmap — you inherit improvements",
                  "Reduced time to production value"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-blue-500/15">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors"
              >
                <span>Explore platform architectures</span>
                <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          </div>

          {/* OPTION 2: PROJECTS */}
          <div className="group relative rounded-3xl p-8 sm:p-10 bg-[#090d22]/75 border border-indigo-500/25 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-indigo-400/60 hover:shadow-2xl hover:shadow-indigo-950/50">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Hammer className="w-6 h-6"/>
                </div>
                <span className="font-mono text-xs text-indigo-300 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20">
                  BESPOKE BUILDS
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Projects — built with your team.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                Bespoke builds for a specific problem. We design, build, and hand over production systems that your team owns and operates long after we leave.
              </p>

              <ul className="space-y-3.5 mb-8">
                {[
                  "Scoped to your workflows and constraints",
                  "Full knowledge transfer and runbooks",
                  "You own the code and the outcome",
                  "Complete architectural independence"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-blue-500/15">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition-colors"
              >
                <span>Scope a custom project</span>
                <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
