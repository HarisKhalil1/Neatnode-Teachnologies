'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#04050d] text-gray-400 border-t border-blue-500/15 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-blue-500/10">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                NN
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-mono">
                NeatNode
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              NeatNode builds AI agents, intelligent automations, and production-ready cloud infrastructure that help businesses run smarter, faster, and more reliably.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-xs font-mono text-blue-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Production Systems Operational</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-blue-300 transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors">AI Agents</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors">WhatsApp Automation</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors">DevOps</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors">SaaS Development</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#approach" className="hover:text-blue-300 transition-colors">Our Approach</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors">Platforms & Products</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
              <li><a href="https://www.neatnode.tech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">neatnode.tech ↗</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-blue-300 transition-colors cursor-pointer">Security & Compliance</span></li>
              <li><span className="hover:text-blue-300 transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-blue-300 transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 NeatNode Technologies. All rights reserved.</p>
          <p className="font-mono text-blue-400/80">Made with precision · Engineering-first</p>
        </div>

      </div>
    </footer>
  );
}
