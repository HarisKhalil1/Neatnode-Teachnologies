'use client';

import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] bg-[#060713] text-white flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      
      {/* Ambient Cosmic Blue Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Subtle Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>AI SOLUTIONS THAT DRIVE REAL RESULTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
              Automate What Slows You Down. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-300">
                Build What Scales.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl mb-8">
              NeatNode builds AI agents, intelligent automations, and production-ready cloud infrastructure that help businesses run smarter, faster, and more reliably.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 transition-all duration-300 active:scale-95"
              >
                <span>Build with NeatNode</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-gray-200 bg-white/5 border border-blue-500/20 hover:border-blue-400 hover:text-white transition-all duration-300"
              >
                <span>Explore our capabilities</span>
              </a>
            </div>

            {/* Social Proof & Rating Strip */}
            <div className="flex items-center gap-4 pt-6 border-t border-blue-500/20 w-full max-w-lg">
              <div className="flex -space-x-2.5">
                <div className="w-10 h-10 rounded-full border-2 border-[#060713] bg-blue-900 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  NN
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#060713] bg-indigo-800 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  AI
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#060713] bg-blue-700 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  OP
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#060713] bg-sky-900 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  CL
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" key={i} />
                  ))}
                  <span className="text-white text-sm font-bold ml-1.5">4.9/5</span>
                </div>
                <p className="text-xs text-gray-400">
                  Trusted by high-growth engineering teams worldwide
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The AI Robot Image (5 Cols on desktop, shifted slightly upwards, blue theme) */}
          <div className="lg:col-span-5 flex items-center justify-center relative -translate-y-4 sm:-translate-y-8 lg:-translate-y-12">
            
            {/* Glowing Backdrop Aura in Dark Blue */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/35 via-indigo-600/25 to-cyan-500/20 rounded-full blur-[100px] pointer-events-none scale-105" />

            {/* Seamless Image Container (Enlarged size) */}
            <div className="relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px] aspect-square flex items-center justify-center">
              <img
                src="/hero-robot.png"
                alt="NeatNode Cybernetic AI Architecture"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_60px_rgba(37,99,235,0.45)] select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                onError={(e) => {
                  if (e.currentTarget.src.indexOf('ai-hero.png') === -1) {
                    e.currentTarget.src = '/ai-hero.png';
                  }
                }}
              />

              {/* Decorative Holographic Neon Accent Ring in Dark Blue */}
              <div 
                className="absolute inset-2 sm:inset-4 rounded-full border border-blue-500/25 pointer-events-none animate-spin" 
                style={{ animationDuration: '30s' }} 
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
