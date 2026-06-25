import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export default function ReleasesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-[calc(100vh-4rem-200px)] py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Releases</h1>
              <p className="text-xl text-[#a3a3a3]">
                Changelog and release notes for PackVault.
              </p>
            </div>
            <Link href="https://github.com/Demon-Die/PackVault/releases" target="_blank">
              <Button variant="outline" className="hidden sm:flex text-white hover:text-white">
                <GithubIcon className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </Link>
          </div>

          <div className="space-y-8">
            <div className="relative pl-8 border-l border-[#333333]">
              <div className="absolute w-4 h-4 rounded-full bg-[#dc2626] -left-[9px] top-1"></div>
              <div className="mb-2 flex items-center gap-4">
                <h2 className="text-2xl font-bold text-white">v1.0.0</h2>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">Latest</span>
                <span className="text-sm text-[#a3a3a3]">June 2026</span>
              </div>
              <div className="prose prose-invert prose-red max-w-none">
                <p>The first stable release of PackVault is here! 🎉</p>
                <h3>Features</h3>
                <ul>
                  <li><strong>Offline-First Architecture:</strong> Caches all metadata and tarballs locally.</li>
                  <li><strong>LAN Sharing:</strong> Easily share your vault across your local network via mDNS.</li>
                  <li><strong>Integrity Checks:</strong> Automatic SHA-512 verification of all downloaded packages.</li>
                  <li><strong>Project Templates:</strong> Bootstrap common frameworks completely offline.</li>
                  <li><strong>Lockfile Support:</strong> Native support for <code>package-lock.json</code>, <code>yarn.lock</code>, and <code>pnpm-lock.yaml</code>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
