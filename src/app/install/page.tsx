import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function InstallPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-[calc(100vh-4rem-200px)] py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Install PackVault</h1>
            <p className="text-xl text-[#a3a3a3]">
              Choose the installation method that works best for your environment.
            </p>
          </div>

          <div className="space-y-12">
            {/* npm Section */}
            <section className="p-8 rounded-xl bg-[#121212] border border-[#333333]">
              <h2 className="text-2xl font-bold text-white mb-4">1. Using npm (Recommended)</h2>
              <p className="text-[#a3a3a3] mb-6">
                The easiest way to install PackVault globally is via npm.
              </p>
              <div className="flex items-center px-6 py-4 rounded-md bg-[#0a0a0a] border border-[#333333] mb-4">
                <code className="text-[#e5e5e5] font-mono flex-1">npm install -g packvault</code>
              </div>
            </section>

            {/* GitHub Section */}
            <section className="p-8 rounded-xl bg-[#121212] border border-[#333333]">
              <h2 className="text-2xl font-bold text-white mb-4">2. Directly from GitHub</h2>
              <p className="text-[#a3a3a3] mb-6">
                Install the latest bleeding-edge version directly from the repository.
              </p>
              <div className="flex items-center px-6 py-4 rounded-md bg-[#0a0a0a] border border-[#333333] mb-4">
                <code className="text-[#e5e5e5] font-mono flex-1">npm install -g github:Omnikon-Org/PackVault</code>
              </div>
            </section>

            {/* Source Section */}
            <section className="p-8 rounded-xl bg-[#121212] border border-[#333333]">
              <h2 className="text-2xl font-bold text-white mb-4">3. Build from Source</h2>
              <p className="text-[#a3a3a3] mb-6">
                For development or environments where global installs are restricted.
              </p>
              <div className="rounded-md bg-[#0a0a0a] border border-[#333333] overflow-hidden">
                <pre className="p-6 text-[#e5e5e5] font-mono text-sm overflow-x-auto">
{`git clone https://github.com/Omnikon-Org/PackVault
cd PackVault

npm install
npm run build
npm link`}
                </pre>
              </div>
            </section>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to go?</h3>
            <Link href="/docs/quickstart">
              <Button size="lg">Read the Quick Start Guide</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
