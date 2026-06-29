"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  WifiOff, 
  Share2, 
  ShieldCheck, 
  PackageSearch,
  BookOpen,
  Database,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  Quote,
  Zap,
  Lock,
  Boxes,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/icons";

// --- Terminal Animation Data ---
const TERMINAL_STEPS = [
  { text: "packvault sync react vite tailwindcss", type: "command" },
  { text: "[+] Cached react@18.2.0 and 3 dependencies", type: "log", delay: 800 },
  { text: "[+] Cached vite@5.0.0 and 12 dependencies", type: "log", delay: 400 },
  { text: "[+] Cached tailwindcss@3.3.0 and 28 dependencies", type: "log", delay: 500 },
  { text: "✓ Sync complete. Ready for offline use.", type: "success", delay: 600 },
  { text: "packvault install react", type: "command", delay: 1500, clear: true },
  { text: "[i] Network offline. Using local vault.", type: "warning", delay: 500 },
  { text: "[+] Resolved react@18.2.0 from cache", type: "log", delay: 400 },
  { text: "[+] Extracted to node_modules/react", type: "log", delay: 300 },
  { text: "✓ Installed 1 package in 0.05s", type: "success", delay: 200 },
];

const AnimatedTerminal = () => {
  const [step, setStep] = useState(0);
  const [lines, setLines] = useState<{ text: string; type: string; delay?: number; clear?: boolean }[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runStep = (currentStep: number) => {
      if (currentStep >= TERMINAL_STEPS.length) {
        timeoutId = setTimeout(() => {
          setLines([]);
          setStep(0);
        }, 4000);
        return;
      }

      const item = TERMINAL_STEPS[currentStep];
      
      timeoutId = setTimeout(() => {
        if (item.clear) {
          setLines([item]);
        } else {
          setLines(prev => [...prev, item]);
        }
        setStep(currentStep + 1);
      }, item.delay || 50);
    };

    runStep(step);

    return () => clearTimeout(timeoutId);
  }, [step]);

  return (
    <div className="w-full max-w-3xl rounded-xl border border-[#333333] bg-[#0c0c0c] shadow-2xl overflow-hidden font-mono text-sm sm:text-base h-80 flex flex-col relative z-20">
      <div className="flex items-center px-4 py-3 border-b border-[#222] bg-[#111]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-[#a3a3a3]">bash</div>
      </div>
      <div className="p-6 flex-1 overflow-y-auto overflow-x-hidden relative">
        <AnimatePresence>
          {lines.map((line, idx) => (
            <motion.div
              key={`${step}-${idx}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-2 whitespace-nowrap"
            >
              {line.type === "command" && (
                <div className="flex items-center">
                  <span className="text-[#dc2626] mr-2 font-bold">➜</span>
                  <span className="text-white">{line.text}</span>
                </div>
              )}
              {line.type === "log" && <div className="text-[#a3a3a3]">{line.text}</div>}
              {line.type === "success" && <div className="text-green-500 font-medium">{line.text}</div>}
              {line.type === "warning" && (
                <div className="flex items-center text-yellow-500">
                  <WifiOff className="w-4 h-4 mr-2" />
                  {line.text}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Blinking cursor */}
        <motion.div 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2.5 h-5 bg-[#dc2626] inline-block ml-2 align-middle mt-1"
        />
      </div>
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g packvault');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-[#050505]">
        
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40 border-b border-[#1a1a1a]">
          {/* Background Gradient & Effects */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#dc2626]/20 blur-[150px] pointer-events-none" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[#ef4444]/10 blur-[120px] pointer-events-none" />
          
          <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-[#5c1919] bg-[#2a0f0f] px-4 py-1 text-sm text-[#e88585] mb-8 font-medium shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-[#dc2626] mr-2"></span>
                PackVault v1.0 by Omnikon
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
              >
                Cache npm packages once. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ff6b6b]">
                  Install forever.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mb-10"
              >
                The offline-first package caching CLI. Perfect for unreliable networks, travel, classrooms, and air-gapped systems. Built for the modern developer.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <Link href="/docs/quickstart" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 group bg-[#dc2626] hover:bg-[#b91c1c] text-white border-none shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)]">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="https://github.com/Omnikon-Org/PackVault" target="_blank" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 border-[#333] hover:bg-[#111] hover:text-white">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 w-full flex justify-center lg:justify-end relative"
            >
              {/* Decorative elements around terminal */}
              <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-[url('/globe.svg')] opacity-10 bg-no-repeat bg-contain z-0" />
              {mounted && <AnimatedTerminal />}
            </motion.div>
          </div>
        </section>

        {/* --- Trusted By / Social Proof Section --- */}
        <section className="py-12 border-b border-[#111] bg-[#0a0a0a]">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <p className="text-sm font-medium text-[#737373] uppercase tracking-widest mb-6">
              A premium tool developed by
            </p>
            <div className="flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://github.com/Omnikon-Org.png" width={40} height={40} alt="Omnikon" className="rounded-md" />
              <span className="text-2xl font-bold text-white tracking-wide">OMNIKON</span>
            </div>
          </div>
        </section>

        {/* --- Core Features Redesign --- */}
        <section className="py-24 bg-[#050505] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for Resilience</h2>
              <p className="text-[#a3a3a3] text-lg">
                Modern development relies heavily on the network. PackVault severs that dependency, 
                giving you blazing fast installs regardless of your connection quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Feature 1 */}
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#1a1a1a] hover:border-[#dc2626]/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-bl-full transition-colors group-hover:bg-[#dc2626]/10" />
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-[#1a1a1a] text-[#dc2626] shadow-inner border border-[#222]">
                  <Boxes className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">The Offline Vault</h3>
                <p className="text-[#a3a3a3] leading-relaxed text-lg">
                  Sync npm metadata and tarballs into a durable local vault. Install anywhere, anytime. 
                  Zero network calls required once cached.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#1a1a1a] hover:border-[#dc2626]/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-bl-full transition-colors group-hover:bg-[#dc2626]/10" />
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-[#1a1a1a] text-[#dc2626] shadow-inner border border-[#222]">
                  <Share2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">LAN Package Sharing</h3>
                <p className="text-[#a3a3a3] leading-relaxed text-lg">
                  Discover peers via mDNS. Share your vault across your local network and sync bidirectionally. 
                  Perfect for teams in the same room.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#1a1a1a] hover:border-[#dc2626]/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-bl-full transition-colors group-hover:bg-[#dc2626]/10" />
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-[#1a1a1a] text-[#dc2626] shadow-inner border border-[#222]">
                  <Lock className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Integrity & Security</h3>
                <p className="text-[#a3a3a3] leading-relaxed text-lg">
                  Strict SHA-512 verification ensures your cached packages match the official npm registry exactly. 
                  Perform offline security audits.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#1a1a1a] hover:border-[#dc2626]/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-bl-full transition-colors group-hover:bg-[#dc2626]/10" />
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-[#1a1a1a] text-[#dc2626] shadow-inner border border-[#222]">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Lockfile Aware</h3>
                <p className="text-[#a3a3a3] leading-relaxed text-lg">
                  Automatically parses <code className="text-[#e5e5e5] bg-[#222] px-1 py-0.5 rounded text-sm">package-lock.json</code> to cache exactly what your project needs, down to the byte.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="py-20 bg-[#0a0a0a] border-y border-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-16">Loved by developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { quote: "PackVault saved our classroom. 30 students running npm install simultaneously used to kill the WiFi. Now, one peer shares it locally.", author: "CS Instructor", role: "University" },
                { quote: "I travel frequently for work. The ability to pull down templates and install dependencies while at 30,000 feet is an absolute gamechanger.", author: "Senior Frontend Eng", role: "Digital Nomad" },
                { quote: "Our corporate firewall is notoriously strict. PackVault lets us securely sync approved packages and share them internally with zero friction.", author: "DevOps Lead", role: "FinTech Corp" }
              ].map((t, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#111] border border-[#222] relative">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-[#dc2626]/20" />
                  <div className="flex text-[#dc2626] mb-4">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-[#e5e5e5] mb-6 text-lg italic">&quot;{t.quote}&quot;</p>
                  <div>
                    <div className="font-semibold text-white">{t.author}</div>
                    <div className="text-sm text-[#737373]">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <section className="py-24 bg-[#050505] relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-[#a3a3a3] text-lg">
                Start for free, upgrade when your team needs advanced collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
              {/* Free Tier */}
              <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] flex flex-col hover:border-[#333] transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">Community</h3>
                <p className="text-[#a3a3a3] mb-6">For individual developers and offline coding.</p>
                <div className="text-5xl font-extrabold text-white mb-8">Free</div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center text-[#e5e5e5]"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Local Sync & Install</li>
                  <li className="flex items-center text-[#e5e5e5]"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Integrity Verification</li>
                  <li className="flex items-center text-[#e5e5e5]"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Lockfile Aware</li>
                  <li className="flex items-center text-[#e5e5e5]"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Offline Project Templates</li>
                </ul>
                <Link href="/install">
                  <Button variant="outline" className="w-full h-12 text-base border-[#333] hover:bg-[#111]">Get Started Free</Button>
                </Link>
              </div>

              {/* Paid Tier */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#1a1010] to-[#0a0a0a] border-2 border-[#dc2626] relative flex flex-col shadow-[0_0_40px_-15px_rgba(220,38,38,0.4)] transform md:-translate-y-2">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#dc2626] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  Pro <Star className="w-5 h-5 ml-2 text-[#dc2626] fill-current" />
                </h3>
                <p className="text-[#a3a3a3] mb-6">For teams, classrooms, and enterprise setups.</p>
                <div className="text-5xl font-extrabold text-white mb-8">$12<span className="text-xl text-[#a3a3a3] font-normal">/mo</span></div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center text-white font-medium"><CheckCircle2 className="w-5 h-5 text-[#dc2626] mr-3" /> Everything in Community, plus:</li>
                  <li className="flex items-center text-[#e5e5e5]"><CheckCircle2 className="w-5 h-5 text-[#dc2626] mr-3" /> LAN Package Sharing (mDNS)</li>
                  <li className="flex items-center text-[#e5e5e5]"><CheckCircle2 className="w-5 h-5 text-[#dc2626] mr-3" /> Peer-to-Peer Sync</li>
                  <li className="flex items-center text-[#e5e5e5]"><CheckCircle2 className="w-5 h-5 text-[#dc2626] mr-3" /> Local Registry Proxy (`serve`)</li>
                  <li className="flex items-center text-[#e5e5e5]"><CheckCircle2 className="w-5 h-5 text-[#dc2626] mr-3" /> Priority Support</li>
                </ul>
                <Link href="/pro">
                  <Button className="w-full h-12 text-base bg-[#dc2626] hover:bg-[#b91c1c] text-white">Upgrade to Pro</Button>
                </Link>
              </div>
            </div>

            {/* --- Scannable Comparison Table --- */}
            <div className="mt-12 max-w-4xl mx-auto overflow-hidden rounded-2xl border border-[#222] bg-[#0a0a0a]">
              <div className="px-6 py-4 bg-[#111] border-b border-[#222] flex justify-between items-center">
                <h4 className="font-semibold text-white">Feature Comparison</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0a0a0a] border-b border-[#222]">
                      <th className="py-4 px-6 font-medium text-[#a3a3a3] w-1/2">Features</th>
                      <th className="py-4 px-6 font-semibold text-center text-white w-1/4">Community</th>
                      <th className="py-4 px-6 font-semibold text-center text-[#dc2626] w-1/4 bg-[#dc2626]/5">Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1a1a1a]">
                    {[
                      { feature: "Local Package Caching", free: true, pro: true },
                      { feature: "Offline Install & Sync", free: true, pro: true },
                      { feature: "SHA-512 Integrity Check", free: true, pro: true },
                      { feature: "Lockfile Awareness", free: true, pro: true },
                      { feature: "LAN Package Sharing (mDNS)", free: false, pro: true },
                      { feature: "Peer-to-Peer Sync", free: false, pro: true },
                      { feature: "Local Registry Proxy", free: false, pro: true },
                      { feature: "Team Collaboration / Classroom", free: false, pro: true },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-[#111] transition-colors">
                        <td className="py-4 px-6 text-[#e5e5e5]">{row.feature}</td>
                        <td className="py-4 px-6 text-center">
                          {row.free ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-[#333] mx-auto" />}
                        </td>
                        <td className="py-4 px-6 text-center bg-[#dc2626]/5">
                           {row.pro ? <CheckCircle2 className="w-5 h-5 text-[#dc2626] mx-auto" /> : <XCircle className="w-5 h-5 text-[#333] mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* --- Ecosystem --- */}
        <section className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">The Omnikon Ecosystem</h2>
                <p className="text-[#a3a3a3] text-lg mb-6">
                  PackVault is part of a broader suite of professional developer tools built by Omnikon. 
                  Designed to streamline your workflow and enhance productivity.
                </p>
                <Link href="https://github.com/Omnikon-Org" target="_blank">
                  <Button variant="outline" className="border-[#333] hover:bg-[#111]">
                    View all projects <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-5/12 flex flex-col gap-4 w-full">
                <Link href="https://github.com/Omnikon-Org/IssueSwipe" target="_blank" className="p-4 rounded-xl border border-[#222] bg-[#111] hover:border-[#dc2626]/50 transition-colors flex items-center justify-between group">
                  <div className="font-semibold text-white group-hover:text-[#dc2626] transition-colors">IssueSwipe</div>
                  <ArrowRight className="w-4 h-4 text-[#737373] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="https://github.com/Omnikon-Org/Abyss" target="_blank" className="p-4 rounded-xl border border-[#222] bg-[#111] hover:border-[#dc2626]/50 transition-colors flex items-center justify-between group">
                  <div className="font-semibold text-white group-hover:text-[#dc2626] transition-colors">Abyss</div>
                  <ArrowRight className="w-4 h-4 text-[#737373] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="https://github.com/Omnikon-Org/schema-cast" target="_blank" className="p-4 rounded-xl border border-[#222] bg-[#111] hover:border-[#dc2626]/50 transition-colors flex items-center justify-between group">
                  <div className="font-semibold text-white group-hover:text-[#dc2626] transition-colors">schema-cast</div>
                  <ArrowRight className="w-4 h-4 text-[#737373] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#000] border-t border-[#1a1a1a] relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#dc2626] opacity-10 blur-[100px] pointer-events-none rounded-full"></div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to work offline?</h2>
            <p className="text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10">
              Install PackVault today and never let a poor connection slow you down again.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/docs/quickstart">
                <Button size="lg" className="text-base h-12 px-8 bg-[#dc2626] hover:bg-[#b91c1c] text-white">
                  Install Now
                </Button>
              </Link>
              <div className="flex items-center px-6 py-3 rounded-xl bg-[#111] border border-[#333]">
                <code className="text-[#e5e5e5] font-mono mr-4">npm install -g packvault</code>
                <button 
                  className="text-[#a3a3a3] hover:text-white transition-colors flex items-center justify-center w-5 h-5" 
                  onClick={handleCopy}
                  title="Copy to clipboard"
                >
                  <span className="sr-only">Copy</span>
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                      <path d="M1 4C1 2.34315 2.34315 1 4 1H10C11.6569 1 13 2.34315 13 4V10C13 11.6569 11.6569 13 10 13H4C2.34315 13 1 11.6569 1 10V4ZM4 2C2.89543 2 2 2.89543 2 4V10C2 11.1046 2.89543 12 4 12H10C11.1046 12 12 11.1046 12 10V4C12 2.89543 11.1046 2 10 2H4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      <path d="M5 14H11C12.6569 14 14 12.6569 14 11V5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5V11C16 13.7614 13.7614 16 11 16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  )}
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
