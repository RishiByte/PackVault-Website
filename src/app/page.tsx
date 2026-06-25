"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Terminal, 
  WifiOff, 
  Share2, 
  Database, 
  ShieldCheck, 
  PackageSearch,
  BookOpen,
  ArrowRight,
  ServerOff,
  Globe,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a]"></div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-[#333333] bg-[#1a1a1a]/50 px-3 py-1 text-sm text-[#e5e5e5] mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#dc2626] mr-2"></span>
              PackVault v1.0 is now available
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mb-6"
            >
              Cache npm packages once. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#f87171]">
                Install forever
              </span> — even offline.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mb-10"
            >
              PackVault is an offline-first package caching and distribution CLI for JavaScript developers. Perfect for unreliable networks, travel, classrooms, and air-gapped systems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link href="/docs/quickstart" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="https://github.com/Demon-Die/PackVault" target="_blank" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                  View on GitHub
                </Button>
              </Link>
            </motion.div>

            {/* Terminal Demo Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-20 w-full max-w-3xl rounded-xl border border-[#333333] bg-[#121212] shadow-2xl overflow-hidden"
            >
              <div className="flex items-center px-4 py-3 border-b border-[#333333] bg-[#1a1a1a]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs font-mono text-[#a3a3a3]">bash</div>
              </div>
              <div className="p-6 text-left font-mono text-sm sm:text-base text-[#e5e5e5] overflow-x-auto">
                <div className="flex items-center mb-2">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400 mr-2">~</span>
                  <span className="text-white">packvault sync react vite tailwindcss</span>
                </div>
                <div className="text-[#a3a3a3] mb-4">
                  [+] Cached react@18.2.0 and 3 dependencies<br/>
                  [+] Cached vite@5.0.0 and 12 dependencies<br/>
                  [+] Cached tailwindcss@3.3.0 and 28 dependencies<br/>
                  <span className="text-green-400">✓ Sync complete. Ready for offline use.</span>
                </div>
                
                <div className="flex items-center mb-2 mt-6">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400 mr-2">~</span>
                  <span className="text-white">packvault install react</span>
                </div>
                <div className="text-[#a3a3a3]">
                  [i] Network offline. Using local vault.<br/>
                  [+] Resolved react@18.2.0 from cache<br/>
                  [+] Extracted to node_modules/react<br/>
                  <span className="text-green-400">✓ Installed 1 package in 0.2s</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-20 bg-[#0a0a0a] border-t border-[#1a1a1a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why PackVault?</h2>
              <p className="text-[#a3a3a3] text-lg">
                Modern JavaScript development assumes a reliable internet connection. But reality is often different.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ServerOff, title: "Unreliable Networks", desc: "Keep building even when your connection drops or slows to a crawl." },
                { icon: Globe, title: "While Traveling", desc: "Code on airplanes, trains, or remote locations without missing a beat." },
                { icon: Users, title: "Classrooms & Workshops", desc: "Share one vault with dozens of students to save massive bandwidth." },
                { icon: ShieldCheck, title: "Restricted Firewalls", desc: "Perfect for air-gapped systems and highly secure corporate environments." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#121212] border border-[#1a1a1a] hover:border-[#333333] transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[#dc2626]/10 flex items-center justify-center mb-4 text-[#dc2626]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[#a3a3a3]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-[#121212] relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#333333] to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Resilience</h2>
              <p className="text-[#a3a3a3] text-lg">
                Stop downloading the same dependencies over and over.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: WifiOff,
                  title: "Offline-First",
                  desc: "Sync npm metadata and tarballs into a durable local vault. Install anywhere, anytime, without an internet connection."
                },
                {
                  icon: Share2,
                  title: "LAN Package Sharing",
                  desc: "Discover peers via mDNS and share your vault across your local network. Bidirectional synchronization built-in."
                },
                {
                  icon: PackageSearch,
                  title: "Project Templates",
                  desc: "Bootstrap entire projects completely offline. Includes framework bundles for React, Vue, Next.js, and more."
                },
                {
                  icon: ShieldCheck,
                  title: "Integrity Verification",
                  desc: "SHA-512 and shasum verification ensures your cached packages match the official npm registry exactly."
                },
                {
                  icon: Database,
                  title: "Lockfile Aware",
                  desc: "Automatically parses package-lock.json, yarn.lock, and pnpm-lock.yaml to cache exactly what your project needs."
                },
                {
                  icon: BookOpen,
                  title: "Classroom Mode",
                  desc: "One host can serve dependencies to an entire room of students, eliminating the 'conference WiFi' problem."
                }
              ].map((feature, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#dc2626]/50 transition-all duration-300">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-[#1a1a1a] text-white group-hover:bg-[#dc2626] group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#a3a3a3] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Compare</h2>
              <p className="text-[#a3a3a3] text-lg">
                PackVault goes beyond simple caching to provide a complete offline development workflow.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto overflow-x-auto rounded-xl border border-[#333333]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a1a1a] border-b border-[#333333]">
                    <th className="py-4 px-6 font-semibold text-white">Feature</th>
                    <th className="py-4 px-6 font-semibold text-[#a3a3a3]">npm Cache</th>
                    <th className="py-4 px-6 font-semibold text-[#a3a3a3]">Verdaccio</th>
                    <th className="py-4 px-6 font-semibold text-[#dc2626] bg-[#dc2626]/10">PackVault</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a1a]">
                  {[
                    { feature: "Offline installs", npm: "✓", verdaccio: "✓", pv: "✓" },
                    { feature: "Lockfile sync", npm: "Partial", verdaccio: "Partial", pv: "✓" },
                    { feature: "Peer-to-peer sync", npm: "✗", verdaccio: "✗", pv: "✓" },
                    { feature: "Offline project templates", npm: "✗", verdaccio: "✗", pv: "✓" },
                    { feature: "Offline security audit", npm: "✗", verdaccio: "✗", pv: "✓" },
                    { feature: "Portable vault export", npm: "✗", verdaccio: "Partial", pv: "✓" },
                    { feature: "Zero-config Classroom mode", npm: "✗", verdaccio: "✗", pv: "✓" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#121212] transition-colors">
                      <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                      <td className={`py-4 px-6 ${row.npm === '✓' ? 'text-green-500' : 'text-[#a3a3a3]'}`}>{row.npm}</td>
                      <td className={`py-4 px-6 ${row.verdaccio === '✓' ? 'text-green-500' : 'text-[#a3a3a3]'}`}>{row.verdaccio}</td>
                      <td className={`py-4 px-6 bg-[#dc2626]/5 ${row.pv === '✓' ? 'text-green-500 font-bold' : 'text-[#a3a3a3]'}`}>{row.pv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-[#121212] to-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#dc2626] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to work offline?</h2>
            <p className="text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10">
              Install PackVault today and never let a poor connection slow you down again.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/docs/quickstart">
                <Button size="lg" className="text-base h-12 px-8">
                  Install Now
                </Button>
              </Link>
              <div className="flex items-center px-6 py-3 rounded-md bg-[#1a1a1a] border border-[#333333]">
                <code className="text-[#e5e5e5] font-mono mr-4">npm install -g packvault</code>
                <button className="text-[#a3a3a3] hover:text-white" onClick={() => navigator.clipboard.writeText('npm install -g packvault')}>
                  <span className="sr-only">Copy</span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                    <path d="M1 4C1 2.34315 2.34315 1 4 1H10C11.6569 1 13 2.34315 13 4V10C13 11.6569 11.6569 13 10 13H4C2.34315 13 1 11.6569 1 10V4ZM4 2C2.89543 2 2 2.89543 2 4V10C2 11.1046 2.89543 12 4 12H10C11.1046 12 12 11.1046 12 10V4C12 2.89543 11.1046 2 10 2H4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    <path d="M5 14H11C12.6569 14 14 12.6569 14 11V5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5V11C16 13.7614 13.7614 16 11 16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
