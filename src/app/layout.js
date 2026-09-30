import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NeatNode — AI Automation, Agents & Cloud Infrastructure",
  description:
    "NeatNode builds AI agents, intelligent automations, WhatsApp workflows, and production-ready cloud infrastructure for businesses that need to operate smarter and scale reliably.",
  keywords:
    "AI automation, AI agents, WhatsApp automation, cloud infrastructure, DevOps, business process automation, cloud architecture, infrastructure automation, SaaS development",
  authors: [{ name: "NeatNode" }],
  creator: "NeatNode",
  publisher: "NeatNode",
  robots: "index, follow",
  openGraph: {
    title: "NeatNode — AI Automation, Agents & Cloud Infrastructure",
    description:
      "NeatNode builds AI agents, intelligent automations, WhatsApp workflows, and production-ready cloud infrastructure.",
    type: "website",
    locale: "en_US",
    siteName: "NeatNode",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeatNode — AI Automation, Agents & Cloud Infrastructure",
    description:
      "NeatNode builds AI agents, intelligent automations, WhatsApp workflows, and production-ready cloud infrastructure.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col relative" suppressHydrationWarning>
        {/* Cyber-Grid Background Texture */}
        <div className="cyber-grid" aria-hidden="true" />

        {/* Ambient Background Glow Orbs */}
        <div
          className="ambient-orb"
          style={{
            top: "-10%",
            left: "20%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            opacity: 0.7,
          }}
          aria-hidden="true"
        />
        <div
          className="ambient-orb"
          style={{
            bottom: "5%",
            right: "10%",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
            opacity: 0.6,
          }}
          aria-hidden="true"
        />
        <div
          className="ambient-orb"
          style={{
            top: "40%",
            left: "-5%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
            opacity: 0.5,
          }}
          aria-hidden="true"
        />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
