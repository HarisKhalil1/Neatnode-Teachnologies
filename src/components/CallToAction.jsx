'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="contact" className="relative w-full py-28 bg-[#060713] text-white border-t border-blue-500/15 overflow-hidden">
      {/* Dynamic ambient dark blue glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
          Ready To Automate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-300">
            What Slows You Down?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Let&apos;s discuss your workflows, infrastructure, and automation opportunities. No sales pitch, just a technical conversation about what&apos;s possible.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:contact@neatnode.tech"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/35 transition-all duration-300 active:scale-95"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4"/>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-gray-300 bg-white/5 border border-blue-500/25 hover:border-blue-400 hover:text-white transition-all duration-300"
          >
            <span>Explore services first</span>
          </a>
        </div>

        {/* 3 Authentic Trust Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-blue-500/15 text-xs sm:text-sm font-medium text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400"/>
            <span>Direct access to engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400"/>
            <span>No sales intermediaries</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400"/>
            <span>Technical scope within 48 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
