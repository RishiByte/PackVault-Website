"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Terminal, Loader2, Key } from "lucide-react";

export default function ProPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [licenseKey, setLicenseKey] = useState<string | null>(null);

  const handlePurchase = () => {
    setIsProcessing(true);
    // Simulate network delay for checkout
    setTimeout(() => {
      // Generate a dummy key that starts with pv_ to pass the CLI validation
      const randomChars = Math.random().toString(36).substring(2, 10).toUpperCase();
      const dummyKey = `pv_${randomChars}_PRO`;
      setLicenseKey(dummyKey);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="flex-1 min-h-[calc(100vh-4rem)] py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          {!licenseKey ? (
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Value Prop */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Unlock the full power of <span className="text-[#dc2626]">PackVault</span>
                </h1>
                <p className="text-xl text-[#a3a3a3] mb-8">
                  Supercharge your team's workflow with offline peer-to-peer sync, classroom modes, and local proxy registries.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Unlimited LAN Sharing", desc: "Share packages seamlessly across your local network without internet." },
                    { title: "Local Proxy Registry", desc: "Run a full registry proxy using `packvault serve` for your CI/CD pipelines." },
                    { title: "Peer-to-Peer Sync", desc: "Sync massive monorepos between teammate laptops in seconds." },
                    { title: "Priority Support", desc: "Get direct access to our core maintainers for any workflow issues." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 bg-[#dc2626]/20 p-1 rounded-full h-fit">
                        <CheckCircle2 className="h-5 w-5 text-[#dc2626]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        <p className="text-[#a3a3a3]">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Checkout Card */}
              <div className="bg-[#121212] border border-[#333333] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#dc2626] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Pro License</h2>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-extrabold text-white">$12</span>
                    <span className="text-[#a3a3a3] mb-1">/ user / month</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#333333]">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#a3a3a3]">Pro Plan (Billed Annually)</span>
                      <span className="text-white">$144.00</span>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="text-[#a3a3a3]">Taxes</span>
                      <span className="text-white">$0.00</span>
                    </div>
                    <div className="pt-4 border-t border-[#333333] flex justify-between font-semibold">
                      <span className="text-white">Total</span>
                      <span className="text-white">$144.00</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handlePurchase} 
                  disabled={isProcessing}
                  className="w-full h-14 text-lg font-bold bg-[#dc2626] hover:bg-[#b91c1c] text-white transition-all shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)]"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Complete Purchase (Demo)"
                  )}
                </Button>
                
                <p className="text-center text-xs text-[#a3a3a3] mt-4">
                  This is a demo. No actual payment will be processed.
                </p>
              </div>
            </div>
          ) : (
            /* Success State */
            <div className="max-w-2xl mx-auto mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">You're officially a Pro!</h1>
              <p className="text-[#a3a3a3] text-lg mb-12">
                Thank you for upgrading. Your license key has been generated and is ready to use.
              </p>

              <div className="bg-[#121212] border border-[#333333] rounded-xl p-8 text-left mb-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#dc2626]/10 rounded-lg">
                    <Key className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Your License Key</h3>
                </div>
                
                <div className="bg-[#0a0a0a] border border-[#333333] rounded-lg p-4 flex justify-between items-center mb-8 font-mono text-lg text-white">
                  <span>{licenseKey}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-[#a3a3a3] hover:text-white"
                    onClick={() => navigator.clipboard.writeText(licenseKey)}
                  >
                    Copy
                  </Button>
                </div>

                <h4 className="text-white font-semibold mb-4">Activation Instructions</h4>
                <p className="text-[#a3a3a3] mb-4 text-sm">
                  Run the following command in your terminal to activate PackVault Pro on your machine:
                </p>
                <div className="bg-black border border-[#333333] rounded-lg p-4 flex items-center gap-3">
                  <Terminal className="h-5 w-5 text-[#a3a3a3]" />
                  <code className="text-[#e5e5e5] font-mono text-sm">packvault activate {licenseKey}</code>
                </div>
              </div>

              <Link href="/">
                <Button variant="outline" className="text-white hover:text-white">
                  Return to Home
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
