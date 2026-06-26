"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ProPage() {

  return (
    <>
      <Header />
      <main className="flex-1 min-h-[calc(100vh-4rem)] py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
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

                <Link href="https://rzp.io/rzp/HYNOQhAL" target="_blank" className="w-full">
                  <Button 
                    className="w-full h-14 text-lg font-bold bg-[#dc2626] hover:bg-[#b91c1c] text-white transition-all shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)]"
                  >
                    Continue to Payment
                  </Button>
                </Link>
                
                <p className="text-center text-xs text-[#a3a3a3] mt-4">
                  Secure checkout provided by Razorpay. Your license key will be sent via email after purchase.
                </p>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
