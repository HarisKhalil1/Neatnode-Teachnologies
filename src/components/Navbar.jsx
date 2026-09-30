"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   NAV DATA — Exact structure from neatnode.tech
   ═══════════════════════════════════════════════════════════════ */

const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "AI Automation", desc: "Workflow and business process automation", href: "/services/ai-automation" },
      { label: "AI Agents", desc: "Autonomous and semi-autonomous agents", href: "/services/ai-agents" },
      { label: "WhatsApp Automation", desc: "WhatsApp workflows and CRM integration", href: "/services/whatsapp-automation" },
      { label: "Cloud Infrastructure", desc: "Production-ready cloud architecture & security", href: "/services/cloud-infrastructure" },
      { label: "DevOps", desc: "CI/CD, deployment, and infrastructure automation", href: "/services/devops" },
      { label: "SaaS Development", desc: "Multi-tenant platforms with billing & auth", href: "/services/saas-development" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Products", desc: "Platforms we build and ship", href: "/products" },
      { label: "Projects", desc: "Client work in production", href: "/projects" },
    ],
  },
  {
    label: "Infrastructure",
    href: "/infrastructure",
    dropdown: [
      { label: "Cloud Architecture", desc: "Scalable, secure cloud design", href: "/infrastructure/cloud-architecture" },
      { label: "Security & Compliance", desc: "SOC 2, HIPAA, and regulatory readiness", href: "/infrastructure/security-compliance" },
      { label: "Reliability Engineering", desc: "SLOs, monitoring, and incident response", href: "/infrastructure/reliability" },
    ],
  },
  {
    label: "About",
    href: "/about",
    dropdown: null,
  },
];

/* ═══════════════════════════════════════════════════════════════
   NeatNode Technologies Geometric Network Logo
   3 interconnected nodes inside a subtle violet ring
   ═══════════════════════════════════════════════════════════════ */

function NeatNodeLogo() {
  return (
    <div className="relative flex-shrink-0 w-9 h-9 flex items-center justify-center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer ring */}
        <circle cx="18" cy="18" r="16.5" stroke="rgba(59,130,246,0.25)" strokeWidth="0.75" />

        {/* Connection lines */}
        <line x1="10" y1="12" x2="26" y2="12" stroke="#2563EB" strokeWidth="0.8" opacity="0.5" />
        <line x1="10" y1="12" x2="18" y2="25" stroke="#2563EB" strokeWidth="0.8" opacity="0.5" />
        <line x1="26" y1="12" x2="18" y2="25" stroke="#2563EB" strokeWidth="0.8" opacity="0.5" />

        {/* Secondary depth lines */}
        <line x1="10" y1="12" x2="14" y2="18.5" stroke="#3B82F6" strokeWidth="0.5" opacity="0.25" />
        <line x1="26" y1="12" x2="22" y2="18.5" stroke="#3B82F6" strokeWidth="0.5" opacity="0.25" />
        <line x1="14" y1="18.5" x2="22" y2="18.5" stroke="#3B82F6" strokeWidth="0.5" opacity="0.25" />

        {/* Node 1 — Top Left */}
        <circle cx="10" cy="12" r="3" fill="url(#n1)" />
        <circle cx="10" cy="12" r="3" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" fill="none" />

        {/* Node 2 — Top Right */}
        <circle cx="26" cy="12" r="3" fill="url(#n2)" />
        <circle cx="26" cy="12" r="3" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" fill="none" />

        {/* Node 3 — Bottom Center */}
        <circle cx="18" cy="25" r="3.5" fill="url(#n3)" />
        <circle cx="18" cy="25" r="3.5" stroke="rgba(59,130,246,0.35)" strokeWidth="0.5" fill="none" />

        {/* Micro-nodes */}
        <circle cx="14" cy="18.5" r="1.2" fill="#60A5FA" opacity="0.5" />
        <circle cx="22" cy="18.5" r="1.2" fill="#60A5FA" opacity="0.5" />
        <circle cx="18" cy="12" r="1" fill="#93C5FD" opacity="0.35" />

        <defs>
          <radialGradient id="n1" cx="0.35" cy="0.35" r="0.65">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#2563EB" />
          </radialGradient>
          <radialGradient id="n2" cx="0.35" cy="0.35" r="0.65">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1D4ED8" />
          </radialGradient>
          <radialGradient id="n3" cx="0.4" cy="0.35" r="0.65">
            <stop stopColor="#93C5FD" />
            <stop offset="1" stopColor="#3B82F6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Desktop Dropdown Menu Item
   Hover-activated dropdown with sub-items
   ═══════════════════════════════════════════════════════════════ */

function DesktopNavItem({ item }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  // No dropdown — plain link
  if (!item.dropdown) {
    return (
      <a
        href={item.href}
        className="flex items-center gap-1.5 px-3.5 py-2.5 text-[14px] font-medium rounded-lg transition-colors duration-200 text-text-secondary hover:text-text-primary hover:bg-[rgba(59,130,246,0.08)]"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <a
        href={item.href}
        className="flex items-center gap-1.5 px-3.5 py-2.5 text-[14px] font-medium rounded-lg transition-colors duration-200 text-text-secondary hover:text-text-primary hover:bg-[rgba(59,130,246,0.08)]"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`text-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </a>

      {/* Dropdown Panel */}
      <div
        className={`absolute left-0 top-full mt-1.5 min-w-[260px] rounded-xl border border-[rgba(59,130,246,0.15)] bg-[#0B0D1E]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_16px_rgba(59,130,246,0.06)] transition-all duration-200 z-50 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
        role="menu"
        aria-label={`${item.label} submenu`}
      >
        <div className="py-2">
          {item.dropdown.map((sub) => (
            <a
              key={sub.href}
              href={sub.href}
              role="menuitem"
              className="block px-4 py-2.5 transition-colors duration-200 hover:bg-[rgba(59,130,246,0.08)] group/item"
            >
              <span className="block text-[13px] font-semibold text-text-primary group-hover/item:text-violet-soft transition-colors duration-200">
                {sub.label}
              </span>
              <span className="block text-[11px] text-text-muted mt-0.5 leading-snug">
                {sub.desc}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Mobile Accordion Item
   Tap-to-expand sub-menus
   ═══════════════════════════════════════════════════════════════ */

function MobileNavItem({ item, onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.dropdown) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className="px-4 py-3.5 text-[15px] font-medium text-text-secondary rounded-xl transition-colors duration-200 hover:text-text-primary hover:bg-[rgba(59,130,246,0.08)]"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div>
      {/* Accordion trigger */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-text-secondary rounded-xl transition-colors duration-200 hover:text-text-primary hover:bg-[rgba(59,130,246,0.08)]"
        aria-expanded={expanded}
      >
        <span>{item.label}</span>
        <ChevronDown
          size={16}
          className={`text-text-muted transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {/* Sub-items */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 pb-1">
          {item.dropdown.map((sub) => (
            <a
              key={sub.href}
              href={sub.href}
              onClick={onNavigate}
              className="block px-4 py-2.5 rounded-lg transition-colors duration-200 hover:bg-[rgba(59,130,246,0.06)]"
            >
              <span className="block text-[13px] font-semibold text-text-secondary">
                {sub.label}
              </span>
              <span className="block text-[11px] text-text-muted mt-0.5 leading-snug">
                {sub.desc}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR — Main Export
   ═══════════════════════════════════════════════════════════════ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? "bg-[#060713]/85 backdrop-blur-md border-b border-[rgba(59,130,246,0.12)] shadow-[0_1px_24px_rgba(59,130,246,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto h-full flex items-center justify-between px-5 lg:px-8"
        aria-label="Main navigation"
      >
        {/* ─── Brand: NeatNode Technologies ─── */}
        <a
          href="/"
          className="flex items-center gap-3 z-10"
          aria-label="NeatNode Technologies home"
        >
          <NeatNodeLogo />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 leading-tight">
              Neat<span className="text-violet-soft">Node</span>
            </span>
            <span className="text-[10px] tracking-wider text-text-muted font-mono -mt-0.5 uppercase">
              Technologies
            </span>
          </div>
        </a>

        {/* ─── Desktop Nav ─── */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </div>

        {/* ─── Desktop CTA ─── */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/contact"
            className="btn-primary group/cta text-[13px] px-6 py-2.5"
          >
            <span>Build with NeatNode</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
            />
          </a>
        </div>

        {/* ─── Mobile Toggle ─── */}
        <button
          className="lg:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-text-primary hover:bg-[rgba(59,130,246,0.1)] transition-colors duration-200"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ─── Mobile Drawer ─── */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#060713]/80 backdrop-blur-sm"
          onClick={closeMobile}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={`relative bg-[#0B0D1E]/95 backdrop-blur-xl border-b border-[rgba(59,130,246,0.12)] max-h-[calc(100vh-72px)] overflow-y-auto transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onNavigate={closeMobile}
              />
            ))}

            {/* Contact link */}
            <a
              href="/contact"
              onClick={closeMobile}
              className="px-4 py-3.5 text-[15px] font-medium text-text-secondary rounded-xl transition-colors duration-200 hover:text-text-primary hover:bg-[rgba(59,130,246,0.08)]"
            >
              Contact
            </a>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-[rgba(59,130,246,0.1)]">
              <a
                href="/contact"
                onClick={closeMobile}
                className="btn-primary w-full justify-center text-[14px] py-3.5"
              >
                <span>Build with NeatNode</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
